/* Selin M3 – Lernbegleiter
   Alle persönlichen Daten (To-dos, Häkchen, Kalender) liegen im Browser (localStorage).
   Inhalte (Themen, Protokolle, Analyse, Skripte) kommen aus den Dateien im Ordner data/. */
(function () {
  "use strict";

  // ---------- Konstanten ----------
  var EXAMS = [
    { id: "praxis", titel: "Praktischer Teil M3", datum: "2026-11-30", cls: "praxis" },
    { id: "oral", titel: "Mündliche Prüfung M3", datum: "2026-12-01", cls: "oral" }
  ];
  var STORE_KEY = "selinM3.v1";
  var FAECHER = window.SELIN_FAECHER || [];
  var SPRUECHE = window.SELIN_SPRUECHE || ["Du schaffst das!"];
  var REGIONS = window.SELIN_UNTERSUCHUNG || [];
  var STATUS_LABEL = ["offen", "gelernt", "wiederholt"];
  var MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  var WOCHENTAGE_KURZ = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  // ---------- Hilfsfunktionen ----------
  function $(sel, el) { return (el || document).querySelector(sel); }
  function $all(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function dkey(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function parseKey(k) { var p = k.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function todayKey() { return dkey(new Date()); }
  function addDays(k, n) { var d = parseKey(k); d.setDate(d.getDate() + n); return dkey(d); }
  function daysBetween(fromKey, toKey) { return Math.round((parseKey(toKey) - parseKey(fromKey)) / 86400000); }
  function slug(s) {
    return String(s).toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function fmtLong(k) { return parseKey(k).toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }); }
  function fmtShort(k) { return parseKey(k).toLocaleDateString("de-DE", { day: "numeric", month: "short" }); }
  function fmtClock(d) { return pad(d.getHours()) + ":" + pad(d.getMinutes()); }
  function fmtMMSS(sec) { sec = Math.max(0, Math.round(sec)); return pad(Math.floor(sec / 60)) + ":" + pad(sec % 60); }
  function dayIndex() { return Math.floor(parseKey(todayKey()).getTime() / 86400000 + 0.5); }

  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  // ---------- Speicher ----------
  function defaults() {
    return {
      version: 1,
      firstVisit: todayKey(),
      todos: {},          // { "2026-10-25": [{id, text, done, fach}] }
      topicStatus: {},    // { topicId: 0|1|2 }
      customTopics: {},   // { fachId: [{id, name}] }
      hiddenTopics: {},   // { topicId: true }
      cal: {},            // { "2026-11-03": [{id, text, time}] }
      exam: {},           // { regionId: {g: bool, w: number, last: "YYYY-MM-DD"} }
      notes: "",          // Gedankenablage
      focus: { work: 25, brk: 5, sound: true, task: "", log: {} }, // log: { dateKey: {min, sessions} }
      timer: null,        // { mode, endAt, remaining, total, running }
      skripteRead: {},
      lastBackup: null
    };
  }
  var storageOk = true;
  function load() {
    var base = defaults();
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var data = JSON.parse(raw);
        Object.keys(base).forEach(function (k) { if (data[k] === undefined) data[k] = base[k]; });
        data.focus = Object.assign({}, base.focus, data.focus || {});
        return data;
      }
    } catch (e) { storageOk = false; }
    return base;
  }
  var S = load();
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); storageOk = true; }
    catch (e) {
      if (storageOk) toast("Speichern im Browser ist gerade nicht möglich (privates Fenster?).");
      storageOk = false;
    }
  }
  save();

  // ---------- Themen ----------
  function topicsOf(fach) {
    var list = fach.themen.map(function (name) { return { id: fach.id + ":" + slug(name), name: name, custom: false }; });
    (S.customTopics[fach.id] || []).forEach(function (t) { list.push({ id: t.id, name: t.name, custom: true }); });
    return list.filter(function (t) { return !S.hiddenTopics[t.id]; });
  }
  function fachStats(fach) {
    var list = topicsOf(fach), g = 0, w = 0;
    list.forEach(function (t) { var s = S.topicStatus[t.id] || 0; if (s === 1) g++; if (s === 2) w++; });
    var n = list.length || 1;
    return { total: list.length, gelernt: g, wiederholt: w, pctAny: Math.round((g + w) / n * 100), pctG: g / n * 100, pctW: w / n * 100 };
  }
  function fachById(id) { for (var i = 0; i < FAECHER.length; i++) if (FAECHER[i].id === id) return FAECHER[i]; return null; }

  // ---------- Countdown ----------
  function countdownInfo(exam) {
    var days = daysBetween(todayKey(), exam.datum);
    var msg;
    if (days > 28) msg = "Viel Raum, um in Ruhe Schritt für Schritt voranzukommen.";
    else if (days > 14) msg = "Du bist mittendrin, und du machst das richtig gut.";
    else if (days > 7) msg = "Die Basis steht. Jetzt wird gefestigt und wiederholt.";
    else if (days > 1) msg = "Endspurt. Vertrau auf alles, was du schon kannst.";
    else if (days === 1) msg = "Morgen ist es so weit. Du bist bereit. 💚";
    else if (days === 0) msg = "Heute ist dein Tag. Du schaffst das!";
    else msg = "Geschafft! Unglaublich stolz auf dich. 🎉";
    return { days: days, msg: msg };
  }
  function weeksText(days) {
    if (days < 7) return "";
    var w = Math.floor(days / 7), r = days % 7;
    return "≈ " + w + (w === 1 ? " Woche" : " Wochen") + (r ? " und " + r + (r === 1 ? " Tag" : " Tage") : "");
  }

  function spruchHeute(offset) {
    var i = (dayIndex() + (offset || 0)) % SPRUECHE.length;
    return SPRUECHE[(i + SPRUECHE.length) % SPRUECHE.length];
  }

  // ---------- Router ----------
  var views = {};
  var current = null;
  function route() {
    var name = (location.hash || "#start").slice(1).split("/")[0];
    if (!views[name]) name = "start";
    current = name;
    $all("#nav a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-view") === name); });
    var main = $("#main");
    main.innerHTML = '<div class="view" id="view-' + name + '"></div>';
    views[name]($("#view-" + name));
    window.scrollTo(0, 0);
    updateMiniTimer();
  }
  function rerender() { if (current) { var y = window.scrollY; views[current]($("#view-" + current)); window.scrollTo(0, y); } }

  // ================= START =================
  views.start = function (el) {
    var now = new Date();
    var h = now.getHours();
    var gruss = h < 5 ? "Gute Nacht" : h < 11 ? "Guten Morgen" : h < 17 ? "Hallo" : h < 22 ? "Guten Abend" : "Gute Nacht";
    var tk = todayKey();
    var todos = S.todos[tk] || [];
    var open = todos.filter(function (t) { return !t.done; });
    var done = todos.length - open.length;
    var flog = S.focus.log[tk] || { min: 0, sessions: 0 };

    var totalDays = Math.max(1, daysBetween(S.firstVisit, EXAMS[1].datum));
    var gone = Math.min(totalDays, Math.max(0, daysBetween(S.firstVisit, tk)));
    var journeyPct = Math.round(gone / totalDays * 100);

    var cds = EXAMS.map(function (ex) {
      var c = countdownInfo(ex);
      if (ex.id === "oral" && c.days > 1) c.msg = "Nur einen Tag nach der Praxis. Und dann bist du Ärztin. 🩺";
      var num = c.days > 0 ? c.days : c.days === 0 ? "🌟" : "✓";
      var unit = c.days > 1 ? "Tage" : c.days === 1 ? "Tag" : c.days === 0 ? "heute" : "geschafft";
      return '<div class="countdown cd-' + ex.cls + '">' +
        '<div class="cd-num">' + num + '<small>' + unit + '</small></div>' +
        '<div><div class="cd-title">' + esc(ex.titel) + '</div>' +
        '<div class="cd-sub">' + fmtLong(ex.datum) + (c.days > 6 ? " · " + weeksText(c.days) : "") + '</div>' +
        '<div class="cd-msg">' + esc(c.msg) + '</div></div></div>';
    }).join("");

    var subj = FAECHER.map(function (f) {
      var st = fachStats(f);
      return '<a class="card subject-card" href="#faecher/' + f.id + '">' +
        '<div><span class="subject-dot" style="background:' + f.farbe + '"></span><strong>' + esc(f.name) + '</strong></div>' +
        '<div class="subject-pct">' + st.pctAny + '<span class="muted small"> %</span></div>' +
        '<div class="progress"><div class="p-rep" style="width:' + st.pctW + '%"></div><div class="p-learned" style="width:' + st.pctG + '%"></div></div>' +
        '<div class="muted small" style="margin-top:8px">' + (st.gelernt + st.wiederholt) + ' von ' + st.total + ' Themen</div></a>';
    }).join("");

    var examDone = REGIONS.filter(function (r) { var e = S.exam[r.id]; return e && (e.g || e.w > 0); }).length;

    var backupHint = "";
    var hasData = Object.keys(S.todos).length || Object.keys(S.topicStatus).length;
    if (hasData && (!S.lastBackup || daysBetween(S.lastBackup, tk) >= 7)) {
      backupHint = '<div class="notice" style="margin-bottom:18px">💾 Kleiner Tipp: Sichere ab und zu deinen Fortschritt unter <a href="#einstellungen">Sicherung</a>. Dann geht nichts verloren.</div>';
    }

    el.innerHTML =
      backupHint +
      '<div class="hero">' +
        '<div class="card hero-main">' +
          '<div class="greeting">' + gruss + ', Selin 🌿</div>' +
          '<div class="big-clock" data-clock>' + fmtClock(now) + '</div>' +
          '<div class="big-date">' + esc(fmtLong(tk)) + '</div>' +
          '<div class="quote"><span>💚</span><span class="quote-text" id="quoteText">' + esc(spruchHeute()) + '</span>' +
          '<button class="icon-btn" id="quoteNext" title="Noch ein Spruch">↻</button></div>' +
        '</div>' +
        '<div class="card"><div class="card-head"><h2>Dein Weg zum M3</h2></div>' +
          '<div class="countdowns">' + cds + '</div>' +
          '<div class="journey" style="margin-top:18px"><div class="row small muted"><span>Du bist schon ' + gone + (gone === 1 ? " Tag" : " Tage") + ' dabei</span><span class="spacer"></span><span>' + journeyPct + ' % des Weges</span></div>' +
          '<div class="journey-bar"><div style="width:' + Math.max(3, journeyPct) + '%"></div></div></div>' +
        '</div>' +
      '</div>' +

      '<div class="grid grid-3" style="margin-bottom:18px">' +
        '<div class="card span-2"><div class="card-head"><h2>Heute</h2><a class="btn btn-soft btn-sm" href="#heute">Alles anzeigen</a></div>' +
          '<form class="add-row" id="quickAdd" style="margin-bottom:12px"><input class="input" id="quickInput" placeholder="Was möchtest du heute lernen?" autocomplete="off"><button class="btn" type="submit">Hinzufügen</button></form>' +
          '<ul class="todo-list" id="startTodos"></ul></div>' +
        '<div class="card stack"><h2>Heute geschafft</h2>' +
          '<div class="row"><div class="stat">' + done + '</div><div class="muted">von ' + todos.length + ' Aufgaben erledigt</div></div>' +
          '<div class="row"><div class="stat">' + flog.min + '</div><div class="muted">Minuten im Fokus</div></div>' +
          '<div class="row"><div class="stat">' + examDone + '</div><div class="muted">von ' + REGIONS.length + ' Untersuchungen geübt</div></div>' +
          '<a class="btn" href="#fokus" style="margin-top:6px">⏳ Fokus starten</a>' +
        '</div>' +
      '</div>' +

      '<div class="card-head"><h2>Fächer</h2><div class="legend"><span><i style="background:var(--accent)"></i>wiederholt</span><span><i style="background:var(--amber)"></i>gelernt</span></div></div>' +
      '<div class="grid grid-4">' + subj + '</div>';

    var off = 0;
    $("#quoteNext", el).onclick = function () { off++; $("#quoteText", el).textContent = spruchHeute(off); };
    $("#quickAdd", el).onsubmit = function (e) {
      e.preventDefault();
      var v = $("#quickInput", el).value.trim();
      if (!v) return;
      addTodo(tk, v, "");
      rerender();
      $("#quickInput").focus();
    };
    renderTodoList($("#startTodos", el), tk, { onlyOpenFirst: true, max: 6, compact: true });
  };

  // ================= TO-DO =================
  function addTodo(k, text, fach) {
    (S.todos[k] = S.todos[k] || []).push({ id: uid(), text: text, done: false, fach: fach || "" });
    save();
  }
  function renderTodoList(ul, k, opt) {
    opt = opt || {};
    var list = (S.todos[k] || []).slice();
    if (opt.onlyOpenFirst) list.sort(function (a, b) { return (a.done ? 1 : 0) - (b.done ? 1 : 0); });
    var extra = 0;
    if (opt.max && list.length > opt.max) { extra = list.length - opt.max; list = list.slice(0, opt.max); }
    if (!list.length) {
      ul.innerHTML = '<li class="empty"><span class="em">🌱</span>Noch nichts geplant. Ein Thema reicht für den Anfang.</li>';
      return;
    }
    ul.innerHTML = list.map(function (t) {
      var f = t.fach ? fachById(t.fach) : null;
      return '<li class="todo' + (t.done ? " done" : "") + '" data-id="' + t.id + '">' +
        '<button class="check' + (t.done ? " on" : "") + '" data-act="toggle" aria-label="Erledigt"></button>' +
        '<span class="todo-text">' + esc(t.text) + '</span>' +
        (f ? '<span class="tag" style="background:' + f.farbe + '22;color:' + f.farbe + '">' + esc(f.kurz) + '</span>' : "") +
        (opt.compact ? "" : '<button class="icon-btn" data-act="tomorrow" title="Auf morgen verschieben">→</button>') +
        '<button class="icon-btn" data-act="del" title="Löschen">✕</button></li>';
    }).join("") + (extra ? '<li class="muted small" style="padding:4px 12px">und ' + extra + ' weitere …</li>' : "");
    ul.onclick = function (e) {
      var btn = e.target.closest("[data-act]");
      if (!btn) return;
      var id = btn.closest("[data-id]").getAttribute("data-id");
      var arr = S.todos[k] || [];
      var idx = arr.findIndex(function (t) { return t.id === id; });
      if (idx < 0) return;
      var act = btn.getAttribute("data-act");
      if (act === "toggle") {
        arr[idx].done = !arr[idx].done;
        if (arr[idx].done && arr.every(function (t) { return t.done; })) toast("Alles erledigt für heute. Wunderbar! 🎉");
      } else if (act === "del") {
        arr.splice(idx, 1);
      } else if (act === "tomorrow") {
        var t = arr.splice(idx, 1)[0];
        t.done = false;
        (S.todos[addDays(k, 1)] = S.todos[addDays(k, 1)] || []).push(t);
        toast("Auf morgen verschoben. Ganz in Ruhe.");
      }
      save();
      rerender();
    };
  }

  var heuteKey = null, pickerOpen = false, pickerFach = null, pickerQuery = "";
  views.heute = function (el) {
    var tk = todayKey();
    if (!heuteKey) heuteKey = tk;
    var k = heuteKey;
    var diff = daysBetween(tk, k);
    var rel = diff === 0 ? "Heute" : diff === 1 ? "Morgen" : diff === -1 ? "Gestern" : "";
    var list = S.todos[k] || [];
    var open = list.filter(function (t) { return !t.done; }).length;

    if (!pickerFach) pickerFach = FAECHER[0].id;
    var pf = fachById(pickerFach) || FAECHER[0];
    var planned = (S.todos[k] || []).map(function (t) { return t.text; });
    var pickQ = pickerQuery.toLowerCase();
    var pickTopics = topicsOf(pf).filter(function (t) { return !pickQ || t.name.toLowerCase().indexOf(pickQ) >= 0; });
    var picker = '<div class="picker">' +
      '<button type="button" class="picker-toggle' + (pickerOpen ? " open" : "") + '" id="pickerToggle"><span>📚 Thema aus den Fächern wählen</span><span class="picker-arrow">›</span></button>' +
      (pickerOpen ? '<div class="picker-panel">' +
        '<div class="picker-tabs">' + FAECHER.map(function (f) {
          var on = f.id === pf.id;
          return '<button type="button" class="picker-tab' + (on ? " active" : "") + '" data-pf="' + f.id + '" style="' + (on ? "background:" + f.farbe + ";border-color:" + f.farbe : "") + '"><i style="background:' + f.farbe + '"></i>' + esc(f.kurz) + '</button>';
        }).join("") + '</div>' +
        '<input class="input picker-search" id="pickerSearch" placeholder="Thema suchen …" value="' + esc(pickerQuery) + '" autocomplete="off">' +
        '<div class="picker-grid">' + (pickTopics.length ? pickTopics.map(function (t) {
          var stt = S.topicStatus[t.id] || 0, inPlan = planned.indexOf(t.name) >= 0;
          return '<button type="button" class="topic-pill' + (inPlan ? " added" : "") + (stt === 2 ? " rep" : stt === 1 ? " lern" : "") + '" data-name="' + esc(t.name) + '">' +
            '<span class="pill-name">' + esc(t.name) + '</span>' +
            '<span class="pill-meta">' + (inPlan ? "✓ im Plan" : stt === 2 ? "wiederholt" : stt === 1 ? "gelernt" : "＋") + '</span></button>';
        }).join("") : '<div class="muted small" style="grid-column:1/-1;padding:8px">Nichts gefunden.</div>') + '</div>' +
        '<div class="muted small">Tippe auf ein Thema, um es zum Tagesplan hinzuzufügen.</div>' +
      '</div>' : "") + '</div>';

    el.innerHTML =
      '<div class="page-head"><div class="eyebrow">Tagesplan</div><h1>Was steht heute an?</h1>' +
      '<p>Plane nur so viel, wie sich gut anfühlt. Was liegen bleibt, wandert einfach auf morgen.</p></div>' +
      '<div class="grid grid-3">' +
        '<div class="card span-2">' +
          '<div class="card-head"><div class="day-nav">' +
            '<button class="icon-btn" id="dPrev" title="Vorheriger Tag">‹</button>' +
            '<div class="label">' + (rel ? rel + ", " : "") + esc(fmtLong(k)) + '</div>' +
            '<button class="icon-btn" id="dNext" title="Nächster Tag">›</button></div>' +
            (diff !== 0 ? '<button class="btn btn-ghost btn-sm" id="dToday">Zu heute</button>' : "") + '</div>' +
          '<form class="add-row" id="todoForm" style="margin-bottom:10px">' +
            '<input class="input" id="todoInput" placeholder="Thema oder Aufgabe …" autocomplete="off">' +
            '<select class="select" id="todoFach"><option value="">Fach (optional)</option>' +
              FAECHER.map(function (f) { return '<option value="' + f.id + '">' + esc(f.kurz) + '</option>'; }).join("") +
            '</select><button class="btn" type="submit">Hinzufügen</button></form>' +
          picker +
          '<ul class="todo-list" id="todoList"></ul>' +
          (open && list.length ? '<div class="row" style="margin-top:14px"><span class="muted small">' + open + ' offen</span><span class="spacer"></span><button class="btn btn-ghost btn-sm" id="moveOpen">Offenes auf morgen schieben</button></div>' : "") +
        '</div>' +
        '<div class="card"><div class="card-head"><h2>Kopf frei</h2></div>' +
          '<p class="muted small" style="margin-bottom:10px">Alles, was dir durch den Kopf geht, kurz hier ablegen. Dann ist es raus und du kannst dich konzentrieren.</p>' +
          '<textarea class="textarea" id="notes" placeholder="z. B. noch Bücher zurückgeben, Frage an Prüfer X klären, Arzttermin …" style="min-height:260px">' + esc(S.notes) + '</textarea>' +
          '<div class="muted small" id="notesSaved" style="margin-top:6px">&nbsp;</div>' +
        '</div>' +
      '</div>';

    renderTodoList($("#todoList", el), k, {});
    $("#dPrev", el).onclick = function () { heuteKey = addDays(k, -1); rerender(); };
    $("#dNext", el).onclick = function () { heuteKey = addDays(k, 1); rerender(); };
    if ($("#dToday", el)) $("#dToday", el).onclick = function () { heuteKey = tk; rerender(); };
    $("#todoForm", el).onsubmit = function (e) {
      e.preventDefault();
      var v = $("#todoInput", el).value.trim();
      if (!v) return;
      addTodo(k, v, $("#todoFach", el).value);
      var keepFach = $("#todoFach", el).value;
      rerender();
      $("#todoFach").value = keepFach;
      $("#todoInput").focus();
    };
    $("#pickerToggle", el).onclick = function () { pickerOpen = !pickerOpen; rerender(); };
    if (pickerOpen) {
      $all("[data-pf]", el).forEach(function (b) { b.onclick = function () { pickerFach = b.getAttribute("data-pf"); pickerQuery = ""; rerender(); }; });
      $("#pickerSearch", el).oninput = function () {
        pickerQuery = this.value;
        var pos = this.selectionStart;
        rerender();
        var si = $("#pickerSearch"); si.focus(); si.setSelectionRange(pos, pos);
      };
      $(".picker-grid", el).onclick = function (e) {
        var b = e.target.closest("[data-name]");
        if (!b || b.classList.contains("added")) return;
        addTodo(k, b.getAttribute("data-name"), pf.id);
        rerender();
      };
    }
    if ($("#moveOpen", el)) $("#moveOpen", el).onclick = function () {
      var arr = S.todos[k] || [], next = addDays(k, 1);
      var moving = arr.filter(function (t) { return !t.done; });
      S.todos[k] = arr.filter(function (t) { return t.done; });
      S.todos[next] = (S.todos[next] || []).concat(moving);
      save();
      toast(moving.length + (moving.length === 1 ? " Aufgabe" : " Aufgaben") + " auf morgen verschoben.");
      rerender();
    };
    var nt;
    $("#notes", el).oninput = function () {
      var v = this.value;
      clearTimeout(nt);
      nt = setTimeout(function () { S.notes = v; save(); var s = $("#notesSaved"); if (s) s.textContent = "Gespeichert ✓"; }, 400);
    };
  };

  // ================= FÄCHER =================
  views.faecher = function (el) {
    var sub = (location.hash.split("/")[1]) || FAECHER[0].id;
    var fach = fachById(sub) || FAECHER[0];
    var st = fachStats(fach);
    var topics = topicsOf(fach);
    var filter = views.faecher.filter || "alle";
    var shown = topics.filter(function (t) {
      var s = S.topicStatus[t.id] || 0;
      return filter === "alle" || (filter === "offen" && s === 0) || (filter === "gelernt" && s === 1) || (filter === "wiederholt" && s === 2);
    });

    var overview = FAECHER.map(function (f) {
      var s = fachStats(f);
      return '<div class="row small" style="gap:8px"><span class="subject-dot" style="background:' + f.farbe + '"></span><span style="width:110px">' + esc(f.kurz) + '</span>' +
        '<div class="progress" style="flex:1"><div class="p-rep" style="width:' + s.pctW + '%"></div><div class="p-learned" style="width:' + s.pctG + '%"></div></div>' +
        '<span class="muted" style="width:40px;text-align:right">' + s.pctAny + ' %</span></div>';
    }).join("");

    el.innerHTML =
      '<div class="page-head"><div class="eyebrow">Gesamtübersicht</div><h1>Deine Fächer</h1>' +
      '<p>Tippe auf den Status eines Themas: offen → gelernt → wiederholt. Mit „＋ Heute“ landet es direkt im Tagesplan.</p></div>' +
      '<div class="grid grid-3">' +
        '<div class="card span-2">' +
          '<div class="subject-tabs">' + FAECHER.map(function (f) {
            var a = f.id === fach.id;
            return '<a class="subject-tab' + (a ? " active" : "") + '" href="#faecher/' + f.id + '" style="' + (a ? "background:" + f.farbe : "") + ';text-decoration:none;color:' + (a ? "#fff" : "inherit") + '">' + esc(f.name) + '</a>';
          }).join("") + '</div>' +
          '<div class="row" style="margin-bottom:6px"><h2>' + esc(fach.name) + '</h2><span class="spacer"></span><span class="muted small">' + (st.gelernt + st.wiederholt) + ' / ' + st.total + ' · davon ' + st.wiederholt + ' wiederholt</span></div>' +
          '<div class="progress" style="margin-bottom:14px"><div class="p-rep" style="width:' + st.pctW + '%"></div><div class="p-learned" style="width:' + st.pctG + '%"></div></div>' +
          '<div class="chips" style="margin-bottom:10px">' + ["alle", "offen", "gelernt", "wiederholt"].map(function (x) {
            return '<button class="chip' + (filter === x ? " active" : "") + '" data-filter="' + x + '">' + x.charAt(0).toUpperCase() + x.slice(1) + '</button>';
          }).join("") + '</div>' +
          '<ul class="topic-list" id="topicList">' + (shown.length ? shown.map(function (t) {
            var s = S.topicStatus[t.id] || 0;
            return '<li class="topic" data-id="' + esc(t.id) + '">' +
              '<span class="topic-name">' + esc(t.name) + (t.custom ? ' <span class="tag">eigenes</span>' : "") + '</span>' +
              '<button class="btn btn-ghost btn-sm" data-act="today" data-name="' + esc(t.name) + '">＋ Heute</button>' +
              '<button class="status s' + s + '" data-act="status">' + STATUS_LABEL[s] + '</button>' +
              '<button class="icon-btn" data-act="hide" title="Thema entfernen">✕</button></li>';
          }).join("") : '<li class="empty">Hier ist gerade nichts. ' + (filter !== "alle" ? "Probier einen anderen Filter." : "") + '</li>') + '</ul>' +
          '<form class="add-row" id="topicForm" style="margin-top:14px"><input class="input" id="topicInput" placeholder="Eigenes Thema hinzufügen …" autocomplete="off"><button class="btn btn-soft" type="submit">Hinzufügen</button></form>' +
        '</div>' +
        '<div class="stack">' +
          '<div class="card"><h3 style="margin-bottom:12px">Alle Fächer</h3><div class="stack">' + overview + '</div>' +
            '<div class="legend" style="margin-top:12px"><span><i style="background:var(--accent)"></i>wiederholt</span><span><i style="background:var(--amber)"></i>gelernt</span></div></div>' +
          (Object.keys(S.hiddenTopics).some(function (id) { return id.indexOf(fach.id + ":") === 0; }) ?
            '<div class="card"><p class="muted small" style="margin-bottom:10px">Du hast Themen aus diesem Fach ausgeblendet.</p><button class="btn btn-ghost btn-sm" id="unhide">Wieder einblenden</button></div>' : "") +
          '<div class="notice">Die Themenliste ist ein Startvorschlag. Ergänze sie gern mit eigenen Themen oder entferne, was du nicht brauchst.</div>' +
        '</div>' +
      '</div>';

    $all("[data-filter]", el).forEach(function (b) {
      b.onclick = function () { views.faecher.filter = b.getAttribute("data-filter"); rerender(); };
    });
    $("#topicList", el).onclick = function (e) {
      var btn = e.target.closest("[data-act]");
      if (!btn) return;
      var id = btn.closest("[data-id]").getAttribute("data-id");
      var act = btn.getAttribute("data-act");
      if (act === "status") {
        var s = ((S.topicStatus[id] || 0) + 1) % 3;
        if (s) S.topicStatus[id] = s; else delete S.topicStatus[id];
        if (s === 2) toast("Wiederholt! Das sitzt. 💪");
      } else if (act === "today") {
        addTodo(todayKey(), btn.getAttribute("data-name"), fach.id);
        toast("Zum heutigen Tagesplan hinzugefügt.");
        return;
      } else if (act === "hide") {
        var custom = S.customTopics[fach.id] || [];
        var ci = custom.findIndex(function (t) { return t.id === id; });
        if (ci >= 0) custom.splice(ci, 1); else S.hiddenTopics[id] = true;
        delete S.topicStatus[id];
      }
      save();
      rerender();
    };
    $("#topicForm", el).onsubmit = function (e) {
      e.preventDefault();
      var v = $("#topicInput", el).value.trim();
      if (!v) return;
      (S.customTopics[fach.id] = S.customTopics[fach.id] || []).push({ id: fach.id + ":c-" + uid(), name: v });
      save();
      rerender();
      $("#topicInput").focus();
    };
    if ($("#unhide", el)) $("#unhide", el).onclick = function () {
      Object.keys(S.hiddenTopics).forEach(function (id) { if (id.indexOf(fach.id + ":") === 0) delete S.hiddenTopics[id]; });
      save();
      rerender();
    };
  };

  // ================= KALENDER =================
  var calMonth = null, calSel = null;
  function examOn(k) { return EXAMS.filter(function (e) { return e.datum === k; }); }
  views.kalender = function (el) {
    var tk = todayKey();
    if (!calMonth) { var d0 = new Date(); calMonth = new Date(d0.getFullYear(), d0.getMonth(), 1); }
    if (!calSel) calSel = tk;
    var y = calMonth.getFullYear(), m = calMonth.getMonth();
    var first = new Date(y, m, 1);
    var startOffset = (first.getDay() + 6) % 7;
    var start = new Date(y, m, 1 - startOffset);
    var cells = "";
    var nCells = Math.ceil((startOffset + new Date(y, m + 1, 0).getDate()) / 7) * 7;
    for (var i = 0; i < nCells; i++) {
      var d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      var k = dkey(d);
      var ex = examOn(k);
      var entries = S.cal[k] || [];
      var todos = (S.todos[k] || []).length;
      var cls = "cal-day" + (d.getMonth() !== m ? " other" : "") + (k === tk ? " today" : "") + (k === calSel ? " selected" : "") +
        (ex.length ? " exam-" + ex[0].cls : "") + (entries.length || ex.length || todos ? " has-entries" : "");
      var inner = ex.map(function (e) { return '<div class="cal-entry exam">🎓 ' + esc(e.titel.replace(" M3", "")) + '</div>'; }).join("");
      var sorted = entries.slice().sort(function (a, b) { return (a.time || "99").localeCompare(b.time || "99"); });
      inner += sorted.slice(0, 2).map(function (e) { return '<div class="cal-entry">' + (e.time ? e.time + " " : "") + esc(e.text) + '</div>'; }).join("");
      if (sorted.length > 2) inner += '<div class="cal-more">+' + (sorted.length - 2) + ' mehr</div>';
      if (todos) inner += '<div class="cal-more">✓ ' + todos + ' To-do' + (todos > 1 ? "s" : "") + '</div>';
      cells += '<button class="' + cls + '" data-day="' + k + '"><span class="cal-n">' + d.getDate() + '</span>' + inner + '</button>';
    }

    var selEntries = (S.cal[calSel] || []).slice().sort(function (a, b) { return (a.time || "99").localeCompare(b.time || "99"); });
    var selEx = examOn(calSel);
    var selTodos = S.todos[calSel] || [];

    el.innerHTML =
      '<div class="page-head"><div class="eyebrow">Planung</div><h1>Kalender</h1><p>Trag ein, was an welchem Tag ansteht: Lerngruppen, Wiederholungen, Termine, freie Tage.</p></div>' +
      '<div class="cal-layout">' +
        '<div class="card">' +
          '<div class="cal-head"><h2>' + MONATE[m] + ' ' + y + '</h2>' +
            '<button class="icon-btn" id="cPrev" title="Vorheriger Monat">‹</button>' +
            '<button class="btn btn-ghost btn-sm" id="cToday">Heute</button>' +
            '<button class="icon-btn" id="cNext" title="Nächster Monat">›</button></div>' +
          '<div class="cal-grid">' + WOCHENTAGE_KURZ.map(function (w) { return '<div class="cal-dow">' + w + '</div>'; }).join("") + cells + '</div>' +
        '</div>' +
        '<div class="card">' +
          '<h2 style="margin-bottom:4px">' + esc(fmtLong(calSel)) + '</h2>' +
          '<p class="muted small" style="margin-bottom:14px">' + (function () {
            var dd = daysBetween(tk, calSel);
            return dd === 0 ? "Heute" : dd === 1 ? "Morgen" : dd > 0 ? "in " + dd + " Tagen" : "vor " + (-dd) + " Tagen";
          })() + '</p>' +
          '<div class="stack" id="calEntries">' +
            selEx.map(function (e) { return '<div class="entry" style="background:var(--' + (e.cls === "praxis" ? "peach" : "lavender") + '-soft)"><span>🎓</span><span class="entry-text"><strong>' + esc(e.titel) + '</strong><br><span class="small muted">Du schaffst das! 💚</span></span></div>'; }).join("") +
            (selEntries.length ? selEntries.map(function (e) {
              return '<div class="entry" data-id="' + e.id + '"><span class="entry-time">' + esc(e.time || "–") + '</span><span class="entry-text">' + esc(e.text) + '</span><button class="icon-btn" data-act="del" title="Löschen">✕</button></div>';
            }).join("") : (selEx.length ? "" : '<div class="empty" style="padding:14px"><span class="em">🗓️</span>Noch nichts eingetragen.</div>')) +
          '</div>' +
          '<form class="stack" id="calForm" style="margin-top:14px">' +
            '<input class="input" id="calText" placeholder="Was steht an?" autocomplete="off">' +
            '<div class="row"><input class="input" type="time" id="calTime" style="flex:0 0 120px"><button class="btn" type="submit" style="flex:1">Eintragen</button></div>' +
          '</form>' +
          '<div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--line)">' +
            '<div class="row"><strong>To-dos an diesem Tag</strong><span class="spacer"></span><span class="muted small">' + selTodos.filter(function (t) { return t.done; }).length + ' / ' + selTodos.length + '</span></div>' +
            '<button class="btn btn-soft btn-sm" id="toTodo" style="margin-top:8px">Tagesplan öffnen</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    $("#cPrev", el).onclick = function () { calMonth = new Date(y, m - 1, 1); rerender(); };
    $("#cNext", el).onclick = function () { calMonth = new Date(y, m + 1, 1); rerender(); };
    $("#cToday", el).onclick = function () { var n = new Date(); calMonth = new Date(n.getFullYear(), n.getMonth(), 1); calSel = tk; rerender(); };
    $(".cal-grid", el).onclick = function (e) {
      var b = e.target.closest("[data-day]");
      if (!b) return;
      calSel = b.getAttribute("data-day");
      var sd = parseKey(calSel);
      if (sd.getMonth() !== m) calMonth = new Date(sd.getFullYear(), sd.getMonth(), 1);
      rerender();
    };
    $("#calEntries", el).onclick = function (e) {
      var b = e.target.closest("[data-act=del]");
      if (!b) return;
      var id = b.closest("[data-id]").getAttribute("data-id");
      S.cal[calSel] = (S.cal[calSel] || []).filter(function (x) { return x.id !== id; });
      if (!S.cal[calSel].length) delete S.cal[calSel];
      save();
      rerender();
    };
    $("#calForm", el).onsubmit = function (e) {
      e.preventDefault();
      var t = $("#calText", el).value.trim();
      if (!t) return;
      (S.cal[calSel] = S.cal[calSel] || []).push({ id: uid(), text: t, time: $("#calTime", el).value || "" });
      save();
      rerender();
      $("#calText").focus();
    };
    $("#toTodo", el).onclick = function () { heuteKey = calSel; location.hash = "#heute"; };
  };

  // ================= FOKUS =================
  var audioCtx = null;
  function ensureAudio() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();
    } catch (e) { audioCtx = null; }
  }
  function chime() {
    if (!S.focus.sound || !audioCtx) return;
    try {
      var t0 = audioCtx.currentTime;
      [523.25, 659.25, 783.99].forEach(function (f, i) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0 + i * 0.22);
        g.gain.exponentialRampToValueAtTime(0.18, t0 + i * 0.22 + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + i * 0.22 + 1.6);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(t0 + i * 0.22); o.stop(t0 + i * 0.22 + 1.7);
      });
    } catch (e) { /* kein Ton möglich */ }
  }

  function timerNew(mode) {
    var min = mode === "pause" ? S.focus.brk : S.focus.work;
    return { mode: mode, total: min * 60, remaining: min * 60, endAt: null, running: false };
  }
  function T() { if (!S.timer) S.timer = timerNew("fokus"); return S.timer; }
  function timerRemaining() {
    var t = T();
    return t.running ? Math.max(0, (t.endAt - Date.now()) / 1000) : t.remaining;
  }
  function timerStart() {
    ensureAudio();
    var t = T();
    if (t.running) return;
    t.endAt = Date.now() + t.remaining * 1000;
    t.running = true;
    save();
    timerTick();
  }
  function timerPause() {
    var t = T();
    if (!t.running) return;
    t.remaining = timerRemaining();
    t.running = false;
    t.endAt = null;
    save();
    timerTick();
  }
  function timerReset(mode) {
    S.timer = timerNew(mode || T().mode);
    save();
    timerTick();
  }
  function logFocus(min) {
    var k = todayKey();
    var l = S.focus.log[k] = S.focus.log[k] || { min: 0, sessions: 0 };
    l.min += min;
    l.sessions += 1;
  }
  function timerFinish() {
    var t = T();
    chime();
    if (t.mode === "fokus") {
      logFocus(Math.round(t.total / 60));
      S.timer = timerNew("pause");
      toast("Fokus-Einheit geschafft! Zeit für eine kleine Pause. ☕");
    } else {
      S.timer = timerNew("fokus");
      toast("Pause vorbei. Bereit, wenn du es bist. 🌿");
    }
    save();
    if (current === "fokus") rerender();
  }
  function timerTick() {
    var t = T();
    var rem = timerRemaining();
    if (t.running && rem <= 0) { timerFinish(); return; }
    var txt = fmtMMSS(rem);
    var ringFg = $("#ringFg");
    if (ringFg) {
      var C = 2 * Math.PI * 140;
      ringFg.style.strokeDasharray = C;
      ringFg.style.strokeDashoffset = C * (1 - rem / (t.total || 1));
      $("#ringTime").textContent = txt;
      $("#ringMode").textContent = t.mode === "pause" ? "Pause ☕" : "Fokus";
      $("#ring").classList.toggle("pause", t.mode === "pause");
      $("#tToggle").textContent = t.running ? "Pause" : (rem < t.total ? "Weiter" : "Start");
    }
    var ov = $("#focusOverlay");
    if (!ov.hidden) {
      $("#overlayTime").textContent = txt;
      $("#overlayMode").textContent = t.mode === "pause" ? "Pause" : "Fokus";
      $("#overlayToggle").textContent = t.running ? "Pause" : "Weiter";
      $("#overlayTask").textContent = t.mode === "fokus" ? (S.focus.task || "") : "Kurz durchatmen, trinken, strecken.";
    }
    document.title = t.running ? txt + " · " + (t.mode === "pause" ? "Pause" : "Fokus") + " · Selin M3" : "Selin M3";
    updateMiniTimer();
  }
  function updateMiniTimer() {
    var mt = $("#miniTimer");
    var t = S.timer;
    var show = t && t.running && current !== "fokus" && $("#focusOverlay").hidden;
    mt.hidden = !show;
    if (show) {
      $("#miniTimerText").textContent = (t.mode === "pause" ? "Pause " : "Fokus ") + fmtMMSS(timerRemaining());
      mt.classList.toggle("pause", t.mode === "pause");
    }
  }

  views.fokus = function (el) {
    var t = T();
    var tk = todayKey();
    var flog = S.focus.log[tk] || { min: 0, sessions: 0 };
    var week = 0;
    for (var i = 0; i < 7; i++) { var l = S.focus.log[addDays(tk, -i)]; if (l) week += l.min; }
    var presets = [[25, 5], [45, 10], [60, 10], [90, 15]];

    el.innerHTML =
      '<div class="page-head"><div class="eyebrow">Konzentriert lernen</div><h1>Fokus-Modus</h1><p>Eine Einheit, ein Thema. Danach eine echte Pause. Stell die Zeiten so ein, wie es für dich passt.</p></div>' +
      '<div class="focus-wrap">' +
        '<div class="card timer-card">' +
          '<div class="ring" id="ring"><svg viewBox="0 0 300 300"><circle class="ring-bg" cx="150" cy="150" r="140"/><circle class="ring-fg" id="ringFg" cx="150" cy="150" r="140"/></svg>' +
            '<div class="ring-center"><div class="ring-time" id="ringTime">' + fmtMMSS(timerRemaining()) + '</div><div class="ring-mode" id="ringMode"></div></div></div>' +
          '<input class="input" id="fTask" placeholder="Woran arbeitest du gerade? (optional)" value="' + esc(S.focus.task) + '" style="width:100%;max-width:420px;margin:0 auto 16px;display:block;text-align:center">' +
          '<div class="timer-actions">' +
            '<button class="btn btn-lg" id="tToggle">Start</button>' +
            '<button class="btn btn-ghost btn-lg" id="tReset" title="Zurücksetzen">↺</button>' +
            '<button class="btn btn-ghost btn-lg" id="tSkip">' + (t.mode === "pause" ? "Pause überspringen" : "Zur Pause") + '</button>' +
          '</div>' +
          '<button class="btn btn-soft" id="tOverlay" style="margin-top:16px">🌙 Ruhemodus (Vollbild)</button>' +
        '</div>' +
        '<div class="stack">' +
          '<div class="card stack">' +
            '<h3>Zeiten einstellen</h3>' +
            '<div class="chips">' + presets.map(function (p) {
              var a = S.focus.work === p[0] && S.focus.brk === p[1];
              return '<button class="chip' + (a ? " active" : "") + '" data-preset="' + p[0] + "," + p[1] + '">' + p[0] + ' / ' + p[1] + ' min</button>';
            }).join("") + '</div>' +
            '<div class="slider-row"><label for="sWork">Fokus</label><input type="range" id="sWork" min="5" max="120" step="5" value="' + S.focus.work + '"><output id="oWork">' + S.focus.work + ' min</output></div>' +
            '<div class="slider-row"><label for="sBrk">Pause</label><input type="range" id="sBrk" min="1" max="30" step="1" value="' + S.focus.brk + '"><output id="oBrk">' + S.focus.brk + ' min</output></div>' +
            '<label class="switch"><input type="checkbox" id="sSound"' + (S.focus.sound ? " checked" : "") + '> Sanfter Ton am Ende</label>' +
          '</div>' +
          '<div class="card"><h3 style="margin-bottom:12px">Deine Fokuszeit</h3>' +
            '<div class="grid grid-3" style="gap:10px">' +
              '<div><div class="stat">' + flog.sessions + '</div><div class="muted small">Einheiten heute</div></div>' +
              '<div><div class="stat">' + flog.min + '</div><div class="muted small">Minuten heute</div></div>' +
              '<div><div class="stat">' + week + '</div><div class="muted small">Minuten (7 Tage)</div></div>' +
            '</div></div>' +
          '<div class="notice">Tipp: Handy in einen anderen Raum, Wasser bereitstellen, und los. Du musst nicht perfekt sein, nur anfangen. 💚</div>' +
        '</div>' +
      '</div>';

    $("#tToggle", el).onclick = function () { if (T().running) timerPause(); else timerStart(); };
    $("#tReset", el).onclick = function () { timerReset(); };
    $("#tSkip", el).onclick = function () {
      S.timer = timerNew(T().mode === "pause" ? "fokus" : "pause");
      save();
      rerender();
    };
    $("#tOverlay", el).onclick = openOverlay;
    $("#fTask", el).oninput = function () { S.focus.task = this.value; save(); };
    function applyTimes() {
      var tt = T();
      if (!tt.running && tt.remaining === tt.total) { S.timer = timerNew(tt.mode); }
      save();
    }
    $all("[data-preset]", el).forEach(function (b) {
      b.onclick = function () {
        var p = b.getAttribute("data-preset").split(",");
        S.focus.work = +p[0]; S.focus.brk = +p[1];
        applyTimes();
        rerender();
      };
    });
    $("#sWork", el).oninput = function () { S.focus.work = +this.value; $("#oWork").textContent = this.value + " min"; applyTimes(); timerTick(); };
    $("#sBrk", el).oninput = function () { S.focus.brk = +this.value; $("#oBrk").textContent = this.value + " min"; applyTimes(); timerTick(); };
    $("#sWork", el).onchange = $("#sBrk", el).onchange = function () { rerender(); };
    $("#sSound", el).onchange = function () { S.focus.sound = this.checked; save(); if (this.checked) { ensureAudio(); chime(); } };
    timerTick();
  };

  function openOverlay() {
    $("#overlayQuote").textContent = spruchHeute();
    $("#focusOverlay").hidden = false;
    if (!T().running) timerStart();
    timerTick();
  }
  $("#overlayClose").onclick = function () { $("#focusOverlay").hidden = true; timerTick(); };
  $("#overlayToggle").onclick = function () { if (T().running) timerPause(); else timerStart(); };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !$("#focusOverlay").hidden) { $("#focusOverlay").hidden = true; timerTick(); }
  });

  // ================= KÖRPERLICHE UNTERSUCHUNG =================
  var examSel = null, examTab = "neuro", examEdit = false;
  var EXAM_ORDER = ["neuro", "chirurgie", "innere", "derma"];
  function examFaecher() {
    return EXAM_ORDER.map(fachById).filter(Boolean);
  }
  function regionState(id) {
    var e = S.exam[id];
    if (!e) return 0;
    if (e.w >= 3) return 3;
    if (e.w >= 1) return 2;
    if (e.g) return 1;
    return 0;
  }
  // Körper als Halbfigur (linke Seite, Achse bei x = 100); die rechte Seite entsteht durch Spiegeln.
  var HALF = {
    arm: "M60 90 C47 93 42 108 41 124 C40 144 37 160 35 174 C32 196 29 216 27 234 L41 238 C43 218 48 196 52 176 C55 158 58 140 62 120 Z",
    hand: "M27 234 C22 250 20 266 22 280 C23 288 30 290 32 284 L34 272 L36 286 C37 292 43 291 43 285 L42 268 L45 280 C46 285 51 283 50 278 L47 258 C46 250 44 244 41 238 Z",
    body: "M100 64 L92 64 C91 72 88 77 80 80 C70 83 63 86 60 91 C61 108 62 120 65 134 C68 150 72 164 72 180 C72 198 66 214 64 234 C62 262 63 292 67 326 C69 346 66 362 66 380 C66 394 70 402 72 410 L86 410 C86 396 86 380 87 366 C88 350 88 340 89 326 C91 296 96 272 100 254 Z",
    foot: "M72 406 L86 406 C89 414 89 422 85 427 C78 432 66 432 62 427 C60 422 65 416 72 412 Z"
  };
  var HEAD = "M100 7 C88 7 79 17 79 32 C79 44 84 56 91 60 C95 62 105 62 109 60 C116 56 121 44 121 32 C121 17 112 7 100 7 Z";
  function mirrored(inner) { return '<g>' + inner + '</g><g transform="translate(200,0) scale(-1,1)">' + inner + '</g>'; }

  function figureSVG(seite, regions, fachId) {
    var front = seite === "vorne";
    var gid = "sk" + (front ? "f" : "b");
    var skin = 'fill="url(#' + gid + ')" stroke="#cdb79d" stroke-width="1.2" stroke-linejoin="round"';
    var fine = 'fill="none" stroke="#d3bfa6" stroke-width="1.1" stroke-linecap="round"';
    var defs = '<defs>' +
      '<linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8d5bf"/><stop offset=".5" stop-color="#f4e6d5"/><stop offset="1" stop-color="#e8d5bf"/></linearGradient>' +
      '<filter id="sh' + gid + '" x="-10%" y="-5%" width="120%" height="115%"><feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#6b5a45" flood-opacity=".18"/></filter></defs>';

    // Körper
    var body = '<g filter="url(#sh' + gid + ')">' +
      mirrored('<path ' + skin + ' d="' + HALF.arm + '"/><path ' + skin + ' d="' + HALF.hand + '"/><path ' + skin + ' d="' + HALF.foot + '"/>') +
      mirrored('<path ' + skin + ' d="' + HALF.body + '"/>') +
      '<ellipse ' + skin + ' cx="79" cy="36" rx="3.2" ry="6.5"/><ellipse ' + skin + ' cx="121" cy="36" rx="3.2" ry="6.5"/>' +
      '<path ' + skin + ' d="' + HEAD + '"/></g>';
    // verdeckt die Mittelnaht
    body += '<rect x="99.2" y="65" width="1.6" height="188" fill="#f4e6d5"/>';

    var detail = "";
    if (front) {
      detail += '<path d="M79 28 C78 14 88 6 100 6 C112 6 122 14 121 28 C117 19 109 15 100 15 C91 15 83 19 79 28 Z" fill="#8a6e58"/>';
      detail += '<ellipse cx="91.5" cy="32" rx="3" ry="1.8" fill="#6b5646"/><ellipse cx="108.5" cy="32" rx="3" ry="1.8" fill="#6b5646"/>';
      detail += '<path ' + fine + ' d="M87 27 C90 25 94 25 96 27 M104 27 C106 25 110 25 113 27 M100 33 L99 42 C100 44 101 44 102 42 M93 50 C97 53 103 53 107 50"/>';
      detail += mirrored('<path ' + fine + ' d="M93 77 C86 81 76 82 66 90"/><path ' + fine + ' d="M97 98 C88 101 78 105 71 114 M97 108 C89 111 81 115 74 123 M97 118 C90 121 84 124 79 130"/><path ' + fine + ' d="M71 131 C80 142 92 142 98 135"/><path ' + fine + ' d="M89 162 L99 162 M88 180 L99 180 M89 198 L99 198"/><path ' + fine + ' d="M74 224 C82 238 92 248 100 254"/><ellipse ' + fine + ' cx="78" cy="336" rx="6.5" ry="8.5"/>') +
      '<path ' + fine + ' d="M100 80 L100 146 M100 150 L100 224"/><circle cx="100" cy="198" r="1.8" fill="#d3bfa6"/>';
    } else {
      detail += '<path d="M79 32 C78 14 88 6 100 6 C112 6 122 14 121 32 C121 44 116 56 109 60 C105 62 95 62 91 60 C84 56 79 44 79 32 Z" fill="#8a6e58"/>';
      detail += mirrored('<path ' + fine + ' d="M76 98 C71 112 73 128 81 138 C88 131 91 112 89 98 Z"/><path ' + fine + ' d="M68 228 C73 248 90 258 100 254"/><path ' + fine + ' d="M73 334 L86 334"/><path ' + fine + ' d="M66 134 C70 150 72 164 72 180"/>') +
      '<path ' + fine + ' d="M100 64 L100 254"/><path d="M100 66 L100 236" stroke="#cdb79d" stroke-width="2.6" stroke-dasharray="1.4 4.2" stroke-linecap="round" fill="none"/>';
    }

    // Anatomische Hilfen passend zum Fach
    var ov = "", violet = "rgba(138,124,194,", blue = "rgba(94,148,180,", red = "rgba(200,110,110,", brown = "rgba(190,140,100,";
    if (fachId === "innere") {
      if (front) {
        ov += mirrored('<path d="M92 98 C84 94 74 100 72 114 C70 128 76 142 90 144 C94 138 94 112 92 98 Z" fill="' + blue + '.22)" stroke="' + blue + '.55)" stroke-width="1"/>');
        ov += '<path d="M106 124 C112 119 121 123 121 131 C121 141 113 148 109 153 C104 147 99 139 100 131 C100 127 102 125 106 124 Z" fill="' + red + '.35)" stroke="' + red + '.7)" stroke-width="1"/>';
        ov += '<path d="M92 68 C94 66 98 68 100 71 C102 68 106 66 108 68 C109 74 104 78 100 76 C96 78 91 74 92 68 Z" fill="' + brown + '.45)" stroke="' + brown + '.8)" stroke-width="1"/>';
        ov += '<path d="M100 152 L100 234 M72 196 L128 196" stroke="' + blue + '.5)" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/>';
      } else {
        ov += mirrored('<path d="M94 104 C84 100 76 108 74 122 C73 138 80 152 92 158 C96 142 96 118 94 104 Z" fill="' + blue + '.2)" stroke="' + blue + '.5)" stroke-width="1"/><ellipse cx="84" cy="196" rx="6.5" ry="11" fill="' + red + '.28)" stroke="' + red + '.6)" stroke-width="1"/>');
      }
    } else if (fachId === "neuro") {
      ov += '<path d="M88 32 C86 20 93 13 100 13 C107 13 114 20 112 32 C112 40 106 44 100 44 C94 44 88 40 88 32 Z" fill="' + violet + '.22)" stroke="' + violet + '.6)" stroke-width="1"/><path d="M92 24 C96 28 98 22 100 27 C102 22 104 28 108 24 M91 33 C95 37 98 31 100 35 C102 31 105 37 109 33" stroke="' + violet + '.5)" stroke-width="1" fill="none"/>';
      if (!front) ov += '<path d="M100 62 L100 238" stroke="' + violet + '.55)" stroke-width="3" stroke-linecap="round" fill="none"/>';
      ov += mirrored('<path d="M62 100 C52 130 44 190 33 240" stroke="' + violet + '.5)" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M86 252 C82 300 80 350 80 406" stroke="' + violet + '.5)" stroke-width="1.8" fill="none" stroke-linecap="round"/>');
    } else if (fachId === "chirurgie") {
      var joints = front ? [[62, 96], [40, 172], [36, 236], [74, 232], [78, 336], [78, 406]] : [[62, 96], [40, 172], [74, 232], [78, 336]];
      joints.forEach(function (j) {
        ov += '<circle cx="' + j[0] + '" cy="' + j[1] + '" r="9" fill="' + brown + '.2)" stroke="' + brown + '.5)" stroke-width="1"/><circle cx="' + (200 - j[0]) + '" cy="' + j[1] + '" r="9" fill="' + brown + '.2)" stroke="' + brown + '.5)" stroke-width="1"/>';
      });
    }

    var spots = "";
    regions.forEach(function (r) {
      (r.punkte || []).forEach(function (p) {
        if (p.seite !== seite) return;
        var st = regionState(r.id);
        spots += '<g class="hotspot st' + st + (examSel === r.id ? " selected" : "") + '" data-region="' + r.id + '" tabindex="0" role="button" aria-label="' + esc(r.name) + '">' +
          '<title>' + esc(r.name) + '</title>' +
          '<circle class="halo" cx="' + p.x + '" cy="' + p.y + '" r="14"/>' +
          '<circle class="dot" cx="' + p.x + '" cy="' + p.y + '" r="7.5"/></g>';
      });
    });
    return '<svg viewBox="0 0 200 440" role="img" aria-label="Figur ' + (front ? "Vorderseite" : "Rückseite") + '">' + defs + body + detail + ov + spots + '</svg>';
  }
  function examRegions(fachId) { return REGIONS.filter(function (r) { return r.fach === fachId; }); }
  function examCounts(list) {
    var g = 0, w = 0, sum = 0;
    list.forEach(function (r) { var st = regionState(r.id); if (st > 0) g++; if (st > 1) w++; sum += (S.exam[r.id] && S.exam[r.id].w) || 0; });
    return { total: list.length, geuebt: g, wiederholt: w, summe: sum };
  }
  views.untersuchung = function (el) {
    var fach = fachById(examTab) || FAECHER[0];
    examTab = fach.id;
    var list = examRegions(fach.id);
    var c = examCounts(list);
    if (examSel && !list.some(function (r) { return r.id === examSel; })) examSel = null;

    var tabs = examFaecher().map(function (f) {
      var cc = examCounts(examRegions(f.id));
      var on = f.id === fach.id;
      return '<button class="exam-tab' + (on ? " active" : "") + '" data-tab="' + f.id + '" style="' + (on ? "background:" + f.farbe + ";border-color:" + f.farbe : "") + '">' +
        '<span>' + esc(f.kurz) + '</span><small>' + cc.geuebt + ' / ' + cc.total + '</small></button>';
    }).join("");

    function row(r) {
      var e = S.exam[r.id] || {};
      var w = e.w || 0;
      var st = regionState(r.id);
      var sel = examSel === r.id ? " selected" : "";
      return '<li class="exam-row st' + st + sel + (examEdit ? " edit" : "") + '" data-region="' + r.id + '">' +
        '<button class="check' + (e.g ? " on" : "") + '" data-act="g" aria-label="Geübt" title="' + (e.g && !examEdit ? "Zum Entfernen erst auf Bearbeiten tippen" : "Als geübt abhaken") + '"></button>' +
        '<span class="region-name">' + esc(r.name) +
          '<small class="muted">' + (st === 0 ? "noch nicht geübt" : (e.last ? "zuletzt " + esc(fmtShort(e.last)) : "geübt")) + '</small></span>' +
        '<span class="counter' + (w ? " on" : "") + '"><strong>' + w + '×</strong><span>wiederholt</span></span>' +
        (examEdit
          ? '<span class="edit-ctrl"><button class="icon-btn" data-act="w-" title="Eine Wiederholung weniger" aria-label="weniger">−</button><button class="icon-btn" data-act="w+" title="Eine Wiederholung mehr" aria-label="mehr">+</button>' +
            (st ? '<button class="icon-btn danger" data-act="reset" title="Zurücksetzen" aria-label="Zurücksetzen">↺</button>' : "") + '</span>'
          : '<button class="btn btn-soft btn-sm" data-act="w+">＋ wiederholt</button>') +
        '</li>';
    }

    // Gesamtliste: alles, was bisher geübt wurde, nach Fach
    var overall = examFaecher().map(function (f) {
      var done = examRegions(f.id).filter(function (r) { return regionState(r.id) > 0; });
      if (!done.length) return "";
      return '<div class="done-group"><div class="done-title"><i style="background:' + f.farbe + '"></i>' + esc(f.name) + '</div>' +
        done.map(function (r) {
          var e = S.exam[r.id];
          return '<div class="done-item"><span>' + esc(r.name) + '</span><span class="tag">' + (e.w ? e.w + "× wiederholt" : "geübt") + '</span></div>';
        }).join("") + '</div>';
    }).join("");

    el.innerHTML =
      '<div class="page-head"><div class="eyebrow">Praktischer Teil</div><h1>Körperliche Untersuchung</h1>' +
      '<p>Wähle oben das Fach. Haken setzen und mit „＋ wiederholt“ mitzählen geht immer. Korrigieren oder Entfernen nur über „Bearbeiten“.</p></div>' +
      '<div class="exam-tabs">' + tabs + '</div>' +
      '<div class="exam-layout">' +
        '<div class="card">' +
          '<div class="figures"><div class="figure-wrap">' + figureSVG("vorne", list, fach.id) + '<div class="figure-label">Vorne</div></div>' +
          '<div class="figure-wrap">' + figureSVG("hinten", list, fach.id) + '<div class="figure-label">Hinten</div></div></div>' +
          '<div class="legend" style="justify-content:center;margin-top:14px">' +
            '<span><i style="background:#fff;border:2px solid #b9b09f"></i>offen</span>' +
            '<span><i style="background:var(--amber)"></i>geübt</span>' +
            '<span><i style="background:var(--accent)"></i>wiederholt</span>' +
            '<span><i style="background:var(--accent-strong)"></i>3× und öfter</span></div>' +
        '</div>' +
        '<div class="stack">' +
          '<div class="card">' +
            '<div class="card-head"><div><h2>' + esc(fach.name) + '</h2><div class="muted small">' + c.geuebt + ' von ' + c.total + ' geübt · ' + c.summe + ' Wiederholungen insgesamt</div></div>' +
              (examEdit ? '<button class="btn" id="editToggle">✓ Fertig</button>' : '<button class="btn btn-soft" id="editToggle">✎ Bearbeiten</button>') + '</div>' +
            '<div class="progress" style="margin-bottom:14px"><div class="p-rep" style="width:' + (c.wiederholt / (c.total || 1) * 100) + '%"></div><div class="p-learned" style="width:' + ((c.geuebt - c.wiederholt) / (c.total || 1) * 100) + '%"></div></div>' +
            (examEdit ? '<div class="notice" style="margin-bottom:12px">Bearbeiten ist an: Du kannst Häkchen entfernen, Wiederholungen mit − und + korrigieren oder einen Bereich mit ↺ zurücksetzen.</div>' : "") +
            '<ul class="exam-list">' + list.map(row).join("") + '</ul>' +
          '</div>' +
          '<div class="card"><h3 style="margin-bottom:12px">Was ich schon geübt habe</h3>' +
            (overall || '<div class="empty" style="padding:14px"><span class="em">🩺</span>Noch nichts abgehakt. Starte mit „Bearbeiten“.</div>') + '</div>' +
        '</div>' +
      '</div>';

    function act(id, a) {
      var e = S.exam[id] = S.exam[id] || { g: false, w: 0 };
      if (a === "g") {
        if (e.g && !examEdit) { toast("Zum Entfernen tippe oben auf „Bearbeiten“."); if (!S.exam[id].w && !S.exam[id].g) delete S.exam[id]; return false; }
        e.g = !e.g;
        if (!e.g) e.w = 0;
      }
      if (a === "w+") { e.w = (e.w || 0) + 1; e.g = true; }
      if (a === "w-") e.w = Math.max(0, (e.w || 0) - 1);
      if (a === "reset") { e.g = false; e.w = 0; }
      if ((a === "g" && e.g) || a === "w+") e.last = todayKey();
      if (!e.g && !e.w) delete S.exam[id];
      if (a === "w+" && e.w === 3) toast("Schon dreimal wiederholt. Das sitzt! 💪");
      save();
      return true;
    }
    $all("[data-tab]", el).forEach(function (b) {
      b.onclick = function () { examTab = b.getAttribute("data-tab"); examSel = null; rerender(); };
    });
    $("#editToggle", el).onclick = function () { examEdit = !examEdit; rerender(); };
    el.onclick = function (e) {
      if (e.target.closest("[data-tab],#editToggle")) return;
      var target = e.target.closest("[data-region]");
      if (!target) return;
      var id = target.getAttribute("data-region");
      var a = e.target.closest("[data-act]");
      if (a) { if (act(id, a.getAttribute("data-act")) === false) { if (!S.exam[id]) return; } }
      else examSel = examSel === id ? null : id;
      rerender();
    };
    el.onkeydown = function (e) {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("hotspot")) {
        e.preventDefault();
        examSel = e.target.getAttribute("data-region");
        rerender();
      }
    };
  };

  // ================= PROTOKOLLE =================
  function placeholder(em, title, text) {
    return '<div class="card placeholder"><span class="em">' + em + '</span><h2>' + title + '</h2><p>' + text + '</p></div>';
  }
  var protoFilter = { q: "", fach: "", pruefer: "" };
  views.protokolle = function (el) {
    var P = window.SELIN_PROTOKOLLE || [];
    var head = '<div class="page-head"><div class="eyebrow">Sammlung</div><h1>Protokolle</h1><p>Alle M3-Protokolle digital, durchsuchbar und nach Fach und Prüfer:in sortiert.</p></div>';
    if (!P.length) {
      el.innerHTML = head + placeholder("📝", "Die Protokolle kommen bald", "Hier erscheinen bald alle deine M3-Protokolle, sauber digitalisiert und durchsuchbar. Bis dahin: ein Thema nach dem anderen. 💚");
      return;
    }
    var faecher = [], pruefer = [];
    P.forEach(function (p) {
      if (p.fach && faecher.indexOf(p.fach) < 0) faecher.push(p.fach);
      (p.pruefer ? [].concat(p.pruefer) : []).forEach(function (x) { if (pruefer.indexOf(x) < 0) pruefer.push(x); });
    });
    pruefer.sort();
    el.innerHTML = head +
      '<div class="filters"><input class="input" id="pq" placeholder="Suchen, z. B. Pankreatitis …" value="' + esc(protoFilter.q) + '">' +
      '<select class="select" id="pf"><option value="">Alle Fächer</option>' + faecher.map(function (f) { return '<option' + (protoFilter.fach === f ? " selected" : "") + '>' + esc(f) + '</option>'; }).join("") + '</select>' +
      '<select class="select" id="pp"><option value="">Alle Prüfer:innen</option>' + pruefer.map(function (f) { return '<option' + (protoFilter.pruefer === f ? " selected" : "") + '>' + esc(f) + '</option>'; }).join("") + '</select></div>' +
      '<div class="muted small" id="pcount" style="margin-bottom:10px"></div><div id="plist"></div>';

    function draw() {
      var q = protoFilter.q.toLowerCase();
      var list = P.filter(function (p) {
        if (protoFilter.fach && p.fach !== protoFilter.fach) return false;
        if (protoFilter.pruefer && [].concat(p.pruefer || []).indexOf(protoFilter.pruefer) < 0) return false;
        if (q && JSON.stringify(p).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      $("#pcount").textContent = list.length + " von " + P.length + " Protokollen";
      $("#plist").innerHTML = list.map(function (p) {
        var fragen = p.fragen || [];
        var faelle = p.faelle || [];
        return '<details class="proto"><summary>' +
          '<strong>' + esc(p.titel || ((p.fach || "Protokoll") + (p.datum ? " · " + p.datum : ""))) + '</strong>' +
          (p.fach ? '<span class="tag">' + esc(p.fach) + '</span>' : "") +
          [].concat(p.pruefer || []).map(function (x) { return '<span class="tag" style="background:var(--lavender-soft);color:#6a5aa8">' + esc(x) + '</span>'; }).join("") +
          (p.datum ? '<span class="muted small">' + esc(p.datum) + '</span>' : "") +
          '</summary><div class="proto-body">' +
          (p.ort ? '<p class="muted small" style="margin-top:12px">' + esc(p.ort) + '</p>' : "") +
          (p.themen && p.themen.length ? '<h4>Themen</h4><div class="chips">' + p.themen.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>' : "") +
          (faelle.length ? '<h4>Fälle</h4>' + faelle.map(function (f) { return '<div class="qa">' + (typeof f === "string" ? esc(f) : '<div class="q">' + esc(f.titel || "") + '</div><div class="a">' + esc(f.beschreibung || "") + '</div>') + '</div>'; }).join("") : "") +
          (fragen.length ? '<h4>Fragen</h4>' + fragen.map(function (f) {
            return typeof f === "string" ? '<div class="qa"><div class="q">' + esc(f) + '</div></div>'
              : '<div class="qa"><div class="q">' + esc(f.frage || "") + '</div>' + (f.antwort ? '<div class="a">' + esc(f.antwort) + '</div>' : "") + '</div>';
          }).join("") : "") +
          (p.text ? '<h4>Originaltext</h4><div class="prose">' + simpleMd(p.text) + '</div>' : "") +
          '</div></details>';
      }).join("") || '<div class="empty">Nichts gefunden. Probier einen anderen Suchbegriff.</div>';
    }
    $("#pq", el).oninput = function () { protoFilter.q = this.value; draw(); };
    $("#pf", el).onchange = function () { protoFilter.fach = this.value; draw(); };
    $("#pp", el).onchange = function () { protoFilter.pruefer = this.value; draw(); };
    draw();
  };

  // Sehr einfaches Markdown: Absätze, Listen mit "-", **fett**
  function simpleMd(s) {
    var lines = String(s || "").split(/\n/), out = "", inList = false;
    lines.forEach(function (line) {
      var l = esc(line).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      if (/^\s*[-•]\s+/.test(line)) {
        if (!inList) { out += "<ul>"; inList = true; }
        out += "<li>" + l.replace(/^\s*[-•]\s+/, "") + "</li>";
      } else {
        if (inList) { out += "</ul>"; inList = false; }
        if (/^#{1,4}\s/.test(line)) out += "<p><strong>" + l.replace(/^#{1,4}\s/, "") + "</strong></p>";
        else if (l.trim()) out += "<p>" + l + "</p>";
      }
    });
    if (inList) out += "</ul>";
    return out;
  }

  // ================= ANALYSE =================
  function bars(items, max) {
    max = max || Math.max.apply(null, items.map(function (i) { return i.anzahl || 0; }).concat([1]));
    return items.map(function (i) {
      return '<div class="bar-row"><span class="bar-label" title="' + esc(i.thema || i.titel) + '">' + esc(i.thema || i.titel) + '</span>' +
        '<div class="bar"><div style="width:' + ((i.anzahl || 0) / max * 100) + '%"></div></div><span class="n">' + (i.anzahl || 0) + '</span></div>';
    }).join("");
  }
  views.analyse = function (el) {
    var A = window.SELIN_ANALYSE || {};
    var head = '<div class="page-head"><div class="eyebrow">Auswertung</div><h1>Analyse</h1><p>Was wird am häufigsten gefragt? Welche Fälle kommen immer wieder? Nach Prüfer:in sortiert.</p></div>';
    var has = (A.themen && A.themen.length) || (A.pruefer && A.pruefer.length) || (A.faelle && A.faelle.length);
    if (!has) {
      el.innerHTML = head + placeholder("📊", "Die Analyse ist in Arbeit", "Sobald die Protokolle ausgewertet sind, siehst du hier die häufigsten Prüfungsthemen je Prüfer:in, typische Fallbeispiele und Szenarien.");
      return;
    }
    var html = head + (A.stand ? '<p class="muted small" style="margin:-10px 0 16px">Stand: ' + esc(A.stand) + '</p>' : "");
    if (A.themen && A.themen.length) {
      html += '<div class="card" style="margin-bottom:18px"><h2 style="margin-bottom:14px">Häufigste Themen insgesamt</h2>' + bars(A.themen.slice(0, 20)) + '</div>';
    }
    if (A.pruefer && A.pruefer.length) {
      html += '<h2 style="margin:8px 0 12px">Nach Prüfer:in</h2><div class="grid grid-2" style="margin-bottom:18px">' + A.pruefer.map(function (p) {
        return '<div class="card"><div class="row" style="margin-bottom:10px"><h3>' + esc(p.name) + '</h3>' + (p.fach ? '<span class="tag">' + esc(p.fach) + '</span>' : "") +
          '<span class="spacer"></span>' + (p.anzahlProtokolle ? '<span class="muted small">' + p.anzahlProtokolle + ' Protokolle</span>' : "") + '</div>' +
          (p.topThemen && p.topThemen.length ? bars(p.topThemen.slice(0, 8)) : "") +
          (p.faelle && p.faelle.length ? '<h4 class="muted small" style="margin:12px 0 6px;text-transform:uppercase;letter-spacing:.06em">Typische Fälle</h4><ul style="margin:0;padding-left:18px">' + p.faelle.map(function (f) { return "<li>" + esc(typeof f === "string" ? f : f.titel) + "</li>"; }).join("") + '</ul>' : "") +
          (p.hinweise ? '<div class="notice" style="margin-top:12px">' + esc(p.hinweise) + '</div>' : "") +
          '</div>';
      }).join("") + '</div>';
    }
    if (A.faelle && A.faelle.length) {
      html += '<div class="card" style="margin-bottom:18px"><h2 style="margin-bottom:12px">Wiederkehrende Fallbeispiele</h2>' + A.faelle.map(function (f) {
        return '<div class="qa"><div class="row"><span class="q">' + esc(f.titel) + '</span>' + (f.fach ? '<span class="tag">' + esc(f.fach) + '</span>' : "") + '<span class="spacer"></span>' + (f.haeufigkeit ? '<span class="muted small">' + esc(f.haeufigkeit) + '×</span>' : "") + '</div>' + (f.beschreibung ? '<div class="a">' + esc(f.beschreibung) + '</div>' : "") + '</div>';
      }).join("") + '</div>';
    }
    if (A.szenarien && A.szenarien.length) {
      html += '<div class="card"><h2 style="margin-bottom:12px">Szenarien</h2>' + A.szenarien.map(function (s) {
        return '<div class="qa"><div class="q">' + esc(s.titel || s) + '</div>' + (s.beschreibung ? '<div class="a">' + esc(s.beschreibung) + '</div>' : "") + '</div>';
      }).join("") + '</div>';
    }
    el.innerHTML = html;
  };

  // ================= SKRIPTE =================
  var skriptFach = "";
  views.skripte = function (el) {
    var K = window.SELIN_SKRIPTE || [];
    var head = '<div class="page-head"><div class="eyebrow">Kurz & knapp</div><h1>Skripte</h1><p>Die Dauerbrenner-Themen in Kurzform, mit typischen Prüferfragen und Antworten.</p></div>';
    if (!K.length) {
      el.innerHTML = head + placeholder("📖", "Die Skripte entstehen gerade", "Hier findest du bald zu jedem häufig gefragten Thema eine Kurzfassung mit Musterantworten. Perfekt zum Wiederholen.");
      return;
    }
    var faecher = [];
    K.forEach(function (k) { if (k.fach && faecher.indexOf(k.fach) < 0) faecher.push(k.fach); });
    var list = K.filter(function (k) { return !skriptFach || k.fach === skriptFach; });
    var read = K.filter(function (k) { return S.skripteRead[k.id]; }).length;
    el.innerHTML = head +
      '<div class="row" style="margin-bottom:14px"><div class="chips"><button class="chip' + (!skriptFach ? " active" : "") + '" data-f="">Alle</button>' +
      faecher.map(function (f) { return '<button class="chip' + (skriptFach === f ? " active" : "") + '" data-f="' + esc(f) + '">' + esc(f) + '</button>'; }).join("") +
      '</div><span class="spacer"></span><span class="muted small">' + read + ' / ' + K.length + ' durchgearbeitet</span></div>' +
      '<div class="notice" style="margin-bottom:14px">Lernhilfe: Bitte bei Unsicherheiten mit Leitlinien und Lehrbuch abgleichen.</div>' +
      list.map(function (k) {
        var r = !!S.skripteRead[k.id];
        return '<details class="proto"><summary><button class="check' + (r ? " on" : "") + '" data-read="' + esc(k.id) + '" aria-label="Durchgearbeitet"></button><strong>' + esc(k.titel) + '</strong>' + (k.fach ? '<span class="tag">' + esc(k.fach) + '</span>' : "") + '</summary>' +
          '<div class="proto-body">' + (k.kurz ? '<h4>Kurzfassung</h4><div class="prose">' + simpleMd(k.kurz) + '</div>' : "") +
          ((k.fragen || []).length ? '<h4>Typische Fragen</h4>' + k.fragen.map(function (f) {
            return '<div class="qa"><div class="q">' + esc(f.frage) + '</div>' + (f.antwort ? '<div class="a prose">' + simpleMd(f.antwort) + '</div>' : "") + '</div>';
          }).join("") : "") + '</div></details>';
      }).join("");
    $all("[data-f]", el).forEach(function (b) { b.onclick = function () { skriptFach = b.getAttribute("data-f"); rerender(); }; });
    $all("[data-read]", el).forEach(function (b) {
      b.onclick = function (e) {
        e.preventDefault();
        var id = b.getAttribute("data-read");
        if (S.skripteRead[id]) delete S.skripteRead[id]; else S.skripteRead[id] = todayKey();
        save();
        rerender();
      };
    });
  };

  // ================= SICHERUNG =================
  views.einstellungen = function (el) {
    el.innerHTML =
      '<div class="page-head"><div class="eyebrow">Einstellungen</div><h1>Sicherung & Hilfe</h1><p>Deine Häkchen, To-dos und Kalendereinträge werden nur hier in diesem Browser gespeichert.</p></div>' +
      '<div class="grid grid-2">' +
        '<div class="card stack"><h2>Fortschritt sichern</h2>' +
          '<p class="muted">Lade ab und zu eine Sicherungsdatei herunter. Damit kannst du deinen Stand auch auf einem anderen Gerät oder Browser wiederherstellen.</p>' +
          '<p class="small muted">Letzte Sicherung: ' + (S.lastBackup ? esc(fmtLong(S.lastBackup)) : "noch keine") + '</p>' +
          '<div class="row"><button class="btn" id="exportBtn">💾 Sicherung herunterladen</button>' +
          '<label class="btn btn-ghost" for="importFile">Sicherung laden</label><input type="file" id="importFile" accept="application/json,.json" hidden></div>' +
        '</div>' +
        '<div class="card stack"><h2>Als App im Dock</h2>' +
          '<p class="muted">So bekommst du „Selin M3“ mit eigenem Symbol ins Dock oder auf den Schreibtisch:</p>' +
          '<ol style="margin:0;padding-left:20px" class="stack">' +
            '<li><strong>Safari (Mac):</strong> Diese Seite öffnen, oben im Menü <em>Ablage → Zum Dock hinzufügen …</em> wählen.</li>' +
            '<li><strong>Chrome (Mac):</strong> Menü ⋮ → <em>Streamen, speichern und teilen → Seite als App installieren</em>.</li>' +
            '<li><strong>iPhone/iPad:</strong> Teilen-Symbol → <em>Zum Home-Bildschirm</em>.</li>' +
          '</ol>' +
          '<p class="small muted">Tipp: Öffne die Seite immer im gleichen Browser bzw. über das gleiche Symbol, dann ist dein Fortschritt immer da.</p>' +
        '</div>' +
        '<div class="card stack"><h2>Neu anfangen</h2>' +
          '<p class="muted">Löscht alle persönlichen Einträge in diesem Browser. Am besten vorher eine Sicherung herunterladen.</p>' +
          '<div><button class="btn btn-ghost" id="resetBtn" style="color:var(--danger)">Alle Daten löschen</button></div>' +
        '</div>' +
        '<div class="card stack"><h2>Gut zu wissen</h2>' +
          '<p class="muted">Die Inhalte (Themen, Protokolle, Analyse, Skripte) werden laufend ergänzt. Einfach die Seite neu laden, dann siehst du immer den neuesten Stand. Deine Häkchen bleiben dabei erhalten.</p>' +
          (storageOk ? "" : '<div class="notice">Achtung: Dieser Browser erlaubt gerade kein Speichern (z. B. privates Fenster). Öffne die Seite in einem normalen Fenster.</div>') +
        '</div>' +
      '</div>';

    $("#exportBtn", el).onclick = function () {
      S.lastBackup = todayKey();
      save();
      var blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "selin-m3-sicherung-" + todayKey() + ".json";
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      toast("Sicherung heruntergeladen ✓");
      rerender();
    };
    $("#importFile", el).onchange = function () {
      var f = this.files && this.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          if (!data || typeof data !== "object" || !data.todos) throw new Error("ungültig");
          if (!confirm("Sicherung laden? Der aktuelle Stand in diesem Browser wird dabei ersetzt.")) return;
          localStorage.setItem(STORE_KEY, JSON.stringify(data));
          S = load();
          toast("Sicherung geladen ✓");
          rerender();
        } catch (e) { toast("Diese Datei ist keine gültige Selin-M3-Sicherung."); }
      };
      reader.readAsText(f);
    };
    $("#resetBtn", el).onclick = function () {
      if (!confirm("Wirklich alle persönlichen Daten in diesem Browser löschen?")) return;
      S = defaults();
      save();
      toast("Alles zurückgesetzt.");
      rerender();
    };
  };

  // ---------- Uhr ----------
  var lastDay = todayKey();
  function clockTick() {
    var now = new Date();
    $all("[data-clock]").forEach(function (e) { e.textContent = fmtClock(now); });
    $all("[data-date-short]").forEach(function (e) { e.textContent = now.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }); });
    if (todayKey() !== lastDay) { lastDay = todayKey(); heuteKey = null; if (current === "start" || current === "heute") rerender(); }
  }

  // ---------- Start ----------
  window.addEventListener("hashchange", route);
  window.addEventListener("storage", function (e) { if (e.key === STORE_KEY) { S = load(); rerender(); } });
  document.addEventListener("visibilitychange", function () { if (!document.hidden) { clockTick(); timerTick(); } });
  clockTick();
  setInterval(function () { clockTick(); timerTick(); }, 1000);
  route();
})();
