const RULES = [
  {
    id: "list",
    label: "Reihung / Aufzaehlung",
    short: "Reihung",
  },
  {
    id: "addition",
    label: "Nachgestellter Zusatz",
    short: "Zusatz",
  },
  {
    id: "subordinate",
    label: "Nebensatz",
    short: "Nebensatz",
  },
  {
    id: "none",
    label: "Keine passende Regel",
    short: "Distraktor",
  },
];

const LEVELS = [
  {
    id: "beginner",
    name: "Anfaenger",
    tag: "Start",
    subtitle: "Einstieg mit klaren Satzmustern",
    blurb:
      "Kurze Saetze mit einer dominanten Regel. Ziel: sichere Klickroutine an allen Wortgrenzen.",
    focus:
      "Setze die fehlenden Kommas. Achte besonders auf einfache Aufzaehlungen, Zusaetze und Nebensaetze.",
    requiresRules: false,
    tasks: [
      {
        id: "b1",
        prompt: "Setze die fehlenden Kommas.",
        tokens: ["Wenn", "der", "Bus", "kommt", "laufen", "wir", "los."],
        commas: [{ gap: 3, rule: "subordinate" }],
        explanation:
          "Der einleitende Nebensatz endet vor dem Hauptsatz und wird mit einem Komma abgeschlossen.",
      },
      {
        id: "b2",
        prompt: "Setze die fehlenden Kommas.",
        tokens: ["Wir", "kauften", "Brot", "Milch", "und", "Kaese."],
        commas: [{ gap: 2, rule: "list" }],
        explanation:
          "In der Reihung steht das Komma nur zwischen den ersten Gliedern, nicht vor dem einfachen 'und'.",
      },
      {
        id: "b3",
        prompt: "Setze die fehlenden Kommas.",
        tokens: ["Lea", "meine", "Cousine", "liest", "gern", "Krimis."],
        commas: [
          { gap: 0, rule: "addition" },
          { gap: 2, rule: "addition" },
        ],
        explanation:
          "Der Zusatz 'meine Cousine' ist eingeschoben und wird vorne und hinten mit Kommas abgegrenzt.",
      },
      {
        id: "b4",
        prompt: "Setze die fehlenden Kommas.",
        tokens: [
          "Ich",
          "rufe",
          "dich",
          "an",
          "sobald",
          "ich",
          "zuhause",
          "bin.",
        ],
        commas: [{ gap: 3, rule: "subordinate" }],
        explanation:
          "Der Nebensatz beginnt mit 'sobald' und wird vom uebergeordneten Satz durch ein Komma getrennt.",
      },
      {
        id: "b5",
        prompt: "Setze die fehlenden Kommas.",
        tokens: ["Der", "Himmel", "war", "grau", "kalt", "und", "windig."],
        commas: [{ gap: 3, rule: "list" }],
        explanation:
          "Adjektive in einer Reihung werden mit Komma getrennt, aber nicht direkt vor dem einfachen 'und'.",
      },
    ],
  },
  {
    id: "advanced",
    name: "Fortgeschrittener",
    tag: "Mix",
    subtitle: "Gemischte Satzmuster und erste Stolperstellen",
    blurb:
      "Mehrere moegliche Klickstellen, laengere Saetze und erste Prioritaetsfaelle aus dem Theorieblatt.",
    focus:
      "Setze die Kommas in gemischten Saetzen. Lass dich nicht von verlockenden Wortgrenzen taeuschen.",
    requiresRules: false,
    tasks: [
      {
        id: "a1",
        prompt: "Setze die fehlenden Kommas.",
        tokens: [
          "Obwohl",
          "es",
          "schon",
          "spaet",
          "war",
          "blieben",
          "wir",
          "noch",
          "kurz",
          "und",
          "tranken",
          "Tee.",
        ],
        commas: [{ gap: 4, rule: "subordinate" }],
        explanation:
          "Der vorgeschaltete Nebensatz endet vor 'blieben'. Vor dem einfachen 'und' steht hier kein Pflichtkomma.",
      },
      {
        id: "a2",
        prompt: "Setze die fehlenden Kommas.",
        tokens: [
          "Mara",
          "faehrt",
          "vor",
          "allem",
          "im",
          "Winter",
          "am",
          "liebsten",
          "Zug.",
        ],
        commas: [
          { gap: 1, rule: "addition" },
          { gap: 5, rule: "addition" },
        ],
        explanation:
          "Der eingeschobene Zusatz 'vor allem im Winter' wird am Anfang und am Ende mit Kommas markiert.",
      },
      {
        id: "a3",
        prompt: "Setze die fehlenden Kommas.",
        tokens: [
          "Ich",
          "komme",
          "sobald",
          "ich",
          "Feierabend",
          "habe",
          "bei",
          "euch",
          "vorbei.",
        ],
        commas: [
          { gap: 1, rule: "subordinate" },
          { gap: 5, rule: "subordinate" },
        ],
        explanation:
          "Der eingeschobene Nebensatz 'sobald ich Feierabend habe' braucht an beiden Grenzen ein Komma.",
      },
      {
        id: "a4",
        prompt: "Setze die fehlenden Kommas.",
        tokens: ["Auf", "dem", "Tisch", "lagen", "Hefte", "Stifte", "Fotos", "und", "Karten."],
        commas: [
          { gap: 4, rule: "list" },
          { gap: 5, rule: "list" },
        ],
        explanation:
          "In der Aufzaehlung stehen Kommas zwischen den ersten Gliedern, aber nicht vor dem letzten 'und'.",
      },
      {
        id: "a5",
        prompt: "Setze die fehlenden Kommas.",
        tokens: [
          "Nina",
          "meine",
          "aeltere",
          "Schwester",
          "und",
          "Tom",
          "kamen",
          "spaeter.",
        ],
        commas: [
          { gap: 0, rule: "addition" },
          { gap: 3, rule: "addition" },
        ],
        explanation:
          "Der Zusatz 'meine aeltere Schwester' muss mit Kommas abgegrenzt werden. Diese Regel hat Vorrang, auch wenn der Satz danach weiterreiht.",
      },
    ],
  },
  {
    id: "expert",
    name: "Experte",
    tag: "Regeln",
    subtitle: "Kommas setzen und Regel benennen",
    blurb:
      "Jede gesetzte Stelle braucht zusaetzlich die passende Duden-Regel. Die Optionen werden gemischt.",
    focus:
      "Setze erst die Kommas und ordne dann jeder Stelle die richtige Regel zu.",
    requiresRules: true,
    tasks: [
      {
        id: "e1",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Paul",
          "mein",
          "Teamkollege",
          "trainiert",
          "weiter",
          "obwohl",
          "es",
          "regnet.",
        ],
        commas: [
          { gap: 0, rule: "addition" },
          { gap: 2, rule: "addition" },
          { gap: 4, rule: "subordinate" },
        ],
        explanation:
          "Erst wird der Zusatz 'mein Teamkollege' abgegrenzt, danach trennt ein Komma den anschliessenden Nebensatz ab.",
      },
      {
        id: "e2",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Wir",
          "lesen",
          "Romane",
          "vor",
          "allem",
          "Krimis",
          "und",
          "sprechen",
          "danach",
          "darueber.",
        ],
        commas: [
          { gap: 2, rule: "addition" },
          { gap: 5, rule: "addition" },
        ],
        explanation:
          "Der Zusatz 'vor allem Krimis' ist eingeschoben. Vor dem einfachen 'und' braucht es trotzdem kein weiteres Pflichtkomma.",
      },
      {
        id: "e3",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Sara",
          "meine",
          "Sitznachbarin",
          "schreibt",
          "wenn",
          "es",
          "still",
          "ist",
          "die",
          "besten",
          "Texte.",
        ],
        commas: [
          { gap: 0, rule: "addition" },
          { gap: 2, rule: "addition" },
          { gap: 3, rule: "subordinate" },
          { gap: 7, rule: "subordinate" },
        ],
        explanation:
          "Der Satz kombiniert einen Zusatz und einen eingeschobenen Nebensatz. Beide Strukturen muessen sauber abgegrenzt werden.",
      },
      {
        id: "e4",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Der",
          "Weg",
          "war",
          "schmal",
          "steil",
          "und",
          "an",
          "manchen",
          "Stellen",
          "gefaehrlich.",
        ],
        commas: [{ gap: 3, rule: "list" }],
        explanation:
          "Die Adjektive 'schmal' und 'steil' stehen in einer Reihung. Vor dem einfachen 'und' bleibt die Wortgrenze leer.",
      },
    ],
  },
  {
    id: "pro",
    name: "Profi",
    tag: "Textlogik",
    subtitle: "Lange Saetze mit ueberlagerten Regeln",
    blurb:
      "Hier greifen mehrere Regeln zugleich. Ohne saubere Analyse laesst sich der Satz kaum korrekt kommasetzen.",
    focus:
      "Setze alle Kommas und belege jede Stelle mit der richtigen Regel. Achte besonders auf Vorrangfaelle.",
    requiresRules: true,
    tasks: [
      {
        id: "p1",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Als",
          "der",
          "Gong",
          "endlich",
          "verstummte",
          "Jana",
          "unsere",
          "Klassensprecherin",
          "trat",
          "nach",
          "vorn",
          "und",
          "erklaerte",
          "ruhig",
          "was",
          "als",
          "Naechstes",
          "geschieht.",
        ],
        commas: [
          { gap: 4, rule: "subordinate" },
          { gap: 5, rule: "addition" },
          { gap: 7, rule: "addition" },
          { gap: 13, rule: "subordinate" },
        ],
        explanation:
          "Der Satz beginnt mit einem Nebensatz, enthaelt danach einen Zusatz und endet mit einem weiteren Nebensatz.",
      },
      {
        id: "p2",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Wir",
          "sammelten",
          "Notizen",
          "Fragen",
          "und",
          "letzte",
          "Beispiele",
          "die",
          "wir",
          "spaeter",
          "vergleichen",
          "wollten.",
        ],
        commas: [
          { gap: 2, rule: "list" },
          { gap: 6, rule: "subordinate" },
        ],
        explanation:
          "Zuerst erscheint eine Reihung, danach trennt ein Komma den nachgestellten Nebensatz vom Rest des Satzes ab.",
      },
      {
        id: "p3",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Milan",
          "der",
          "sonst",
          "nie",
          "nervoes",
          "wirkt",
          "sprach",
          "weiter",
          "obwohl",
          "einige",
          "lachten",
          "und",
          "beendete",
          "seinen",
          "Vortrag",
          "souveraen.",
        ],
        commas: [
          { gap: 0, rule: "addition" },
          { gap: 5, rule: "addition" },
          { gap: 7, rule: "subordinate" },
        ],
        explanation:
          "Der eingeschobene Zusatz 'der sonst nie nervoes wirkt' wird umklammert, danach folgt ein Nebensatz mit 'obwohl'.",
      },
      {
        id: "p4",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Ich",
          "glaube",
          "dass",
          "Lea",
          "vor",
          "allem",
          "bei",
          "Gruppenarbeiten",
          "schnell",
          "klare",
          "Loesungen",
          "findet.",
        ],
        commas: [
          { gap: 1, rule: "subordinate" },
          { gap: 3, rule: "addition" },
          { gap: 7, rule: "addition" },
        ],
        explanation:
          "Nach 'glaube' beginnt ein Nebensatz. Innerhalb dieses Nebensatzes wird der Zusatz 'vor allem bei Gruppenarbeiten' mit Kommas eingerahmt.",
      },
      {
        id: "p5",
        prompt: "Setze die Kommas und benenne jede Regel.",
        tokens: [
          "Lina",
          "meine",
          "ruhigste",
          "Schuelerin",
          "notierte",
          "Beobachtungen",
          "Beispiele",
          "und",
          "was",
          "ihr",
          "sonst",
          "noch",
          "auffiel",
          "im",
          "Heft.",
        ],
        commas: [
          { gap: 0, rule: "addition" },
          { gap: 3, rule: "addition" },
          { gap: 5, rule: "list" },
          { gap: 7, rule: "subordinate" },
          { gap: 12, rule: "subordinate" },
        ],
        explanation:
          "Der Satz verknuepft einen Zusatz mit einer Reihung und einem eingeschobenen Nebensatz. Hier zeigt sich der Vorrang der Struktur vor blosser Aufzaehlung besonders deutlich.",
      },
    ],
  },
];

const STORAGE_KEY = "kommatrainer-progress-v1";

const state = {
  currentLevelIndex: 0,
  currentTaskIndex: 0,
  selectedGaps: new Set(),
  ruleSelections: {},
  attempts: 0,
  solvedTaskIds: new Set(),
  totalChecks: 0,
  correctChecks: 0,
  feedbackLocked: false,
  ruleOrder: [],
};

const levelGridEl = document.getElementById("level-grid");
const progressSummaryEl = document.getElementById("progress-summary");
const currentLevelLabelEl = document.getElementById("current-level-label");
const taskTitleEl = document.getElementById("task-title");
const taskSubtitleEl = document.getElementById("task-subtitle");
const taskInstructionEl = document.getElementById("task-instruction");
const sentenceAreaEl = document.getElementById("sentence-area");
const rulePanelEl = document.getElementById("rule-panel");
const ruleAreaEl = document.getElementById("rule-area");
const feedbackBoxEl = document.getElementById("feedback-box");
const feedbackTextEl = document.getElementById("feedback-text");
const modelBoxEl = document.getElementById("model-box");
const scoreChipEl = document.getElementById("score-chip");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const nextBtn = document.getElementById("next-btn");

function currentLevel() {
  return LEVELS[state.currentLevelIndex];
}

function currentTask() {
  return currentLevel().tasks[state.currentTaskIndex];
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    state.solvedTaskIds = new Set(parsed.solvedTaskIds || []);
    state.totalChecks = parsed.totalChecks || 0;
    state.correctChecks = parsed.correctChecks || 0;
  } catch (error) {
    console.warn("Fortschritt konnte nicht geladen werden.", error);
  }
}

function saveProgress() {
  const payload = {
    solvedTaskIds: [...state.solvedTaskIds],
    totalChecks: state.totalChecks,
    correctChecks: state.correctChecks,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function shuffle(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getSolvedCountForLevel(level) {
  return level.tasks.filter((task) => state.solvedTaskIds.has(task.id)).length;
}

function getTotalTaskCount() {
  return LEVELS.reduce((sum, level) => sum + level.tasks.length, 0);
}

function getAccuracy() {
  if (state.totalChecks === 0) {
    return 0;
  }

  return Math.round((state.correctChecks / state.totalChecks) * 100);
}

function updateHeader() {
  const level = currentLevel();
  const task = currentTask();
  const solvedInLevel = getSolvedCountForLevel(level);

  currentLevelLabelEl.textContent = level.name;
  taskTitleEl.textContent = `${level.subtitle}`;
  taskSubtitleEl.textContent = `Aufgabe ${state.currentTaskIndex + 1} von ${
    level.tasks.length
  } in ${level.name}. Bereits geloest: ${solvedInLevel}.`;
  taskInstructionEl.textContent = `${level.focus} ${task.prompt}`;
  scoreChipEl.textContent = `Trefferquote ${getAccuracy()}%`;
}

function updateProgressSummary() {
  progressSummaryEl.textContent = `${state.solvedTaskIds.size} von ${getTotalTaskCount()} Aufgaben geloest`;
}

function renderLevelCards() {
  levelGridEl.innerHTML = "";

  LEVELS.forEach((level, levelIndex) => {
    const solvedCount = getSolvedCountForLevel(level);
    const ratio = Math.round((solvedCount / level.tasks.length) * 100);

    const button = document.createElement("button");
    button.type = "button";
    button.className = `level-card${levelIndex === state.currentLevelIndex ? " active" : ""}`;
    button.addEventListener("click", () => {
      state.currentLevelIndex = levelIndex;
      state.currentTaskIndex = 0;
      resetTaskState();
      render();
    });

    button.innerHTML = `
      <div class="level-card-top">
        <div>
          <p class="level-name">${level.name}</p>
        </div>
        <span class="level-tag">${level.tag}</span>
      </div>
      <p>${level.blurb}</p>
      <div class="level-progress">
        <span>${solvedCount}/${level.tasks.length}</span>
        <div class="progress-bar" aria-hidden="true">
          <span style="width: ${ratio}%"></span>
        </div>
      </div>
    `;

    levelGridEl.appendChild(button);
  });
}

function resetTaskState() {
  state.selectedGaps = new Set();
  state.ruleSelections = {};
  state.attempts = 0;
  state.feedbackLocked = false;
  state.ruleOrder = shuffle(RULES);
  nextBtn.classList.add("hidden");
  checkBtn.disabled = false;
  resetBtn.disabled = false;
  setFeedback(
    "Setze die fehlenden Kommas, indem du die Punkte zwischen den Woertern anklickst.",
    "info"
  );
  hideModel();
}

function setFeedback(text, tone) {
  feedbackTextEl.textContent = text;
  feedbackBoxEl.className = `feedback-box ${tone}`;
}

function hideModel() {
  modelBoxEl.classList.add("hidden");
  modelBoxEl.innerHTML = "";
}

function buildSentenceArea() {
  sentenceAreaEl.innerHTML = "";
  const task = currentTask();

  task.tokens.forEach((token, tokenIndex) => {
    const tokenEl = document.createElement("span");
    tokenEl.className = "token";
    tokenEl.textContent = token;
    sentenceAreaEl.appendChild(tokenEl);

    if (tokenIndex < task.tokens.length - 1) {
      const gapBtn = document.createElement("button");
      gapBtn.type = "button";
      gapBtn.className = `gap-btn${state.selectedGaps.has(tokenIndex) ? " active" : ""}`;
      gapBtn.dataset.gap = String(tokenIndex);
      gapBtn.setAttribute(
        "aria-label",
        `Wortgrenze nach ${token}. ${state.selectedGaps.has(tokenIndex) ? "Komma entfernen" : "Komma setzen"}`
      );
      gapBtn.setAttribute(
        "aria-pressed",
        state.selectedGaps.has(tokenIndex) ? "true" : "false"
      );
      gapBtn.textContent = state.selectedGaps.has(tokenIndex) ? "," : ".";

      gapBtn.addEventListener("click", () => {
        if (state.feedbackLocked) {
          return;
        }

        if (state.selectedGaps.has(tokenIndex)) {
          state.selectedGaps.delete(tokenIndex);
          delete state.ruleSelections[tokenIndex];
        } else {
          state.selectedGaps.add(tokenIndex);
        }

        buildSentenceArea();
        renderRulePanel();
      });

      sentenceAreaEl.appendChild(gapBtn);
    }
  });
}

function getContextSnippet(tokens, gapIndex) {
  const start = Math.max(0, gapIndex - 2);
  const end = Math.min(tokens.length - 1, gapIndex + 2);
  const left = tokens.slice(start, gapIndex + 1).join(" ");
  const right = tokens.slice(gapIndex + 1, end + 1).join(" ");
  return `${left} <mark>,</mark> ${right}`;
}

function renderRulePanel() {
  const level = currentLevel();

  if (!level.requiresRules) {
    rulePanelEl.classList.add("hidden");
    ruleAreaEl.innerHTML = "";
    return;
  }

  rulePanelEl.classList.remove("hidden");
  ruleAreaEl.innerHTML = "";

  const selected = [...state.selectedGaps].sort((a, b) => a - b);

  if (selected.length === 0) {
    const note = document.createElement("p");
    note.className = "rule-context";
    note.textContent =
      "Sobald du ein Komma setzt, erscheint hier die passende Regelzuordnung.";
    ruleAreaEl.appendChild(note);
    return;
  }

  selected.forEach((gapIndex, position) => {
    const card = document.createElement("article");
    card.className = "rule-card";

    const context = document.createElement("p");
    context.className = "rule-context";
    context.innerHTML = `Stelle ${position + 1}: ${getContextSnippet(
      currentTask().tokens,
      gapIndex
    )}`;

    const select = document.createElement("select");
    select.className = "rule-select";
    select.dataset.gap = String(gapIndex);

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Regel waehlen";
    select.appendChild(placeholder);

    state.ruleOrder.forEach((rule) => {
      const option = document.createElement("option");
      option.value = rule.id;
      option.textContent = rule.label;
      if (state.ruleSelections[gapIndex] === rule.id) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
      state.ruleSelections[gapIndex] = event.target.value;
    });

    card.append(context, select);
    ruleAreaEl.appendChild(card);
  });
}

function sortCommaData(commas) {
  return [...commas].sort((left, right) => left.gap - right.gap);
}

function areSameSelections(correctCommas) {
  const selected = [...state.selectedGaps].sort((left, right) => left - right);
  const correct = sortCommaData(correctCommas).map((comma) => comma.gap);

  if (selected.length !== correct.length) {
    return false;
  }

  return selected.every((gap, index) => gap === correct[index]);
}

function areRulesCorrect(correctCommas) {
  return correctCommas.every(
    (comma) => state.ruleSelections[comma.gap] === comma.rule
  );
}

function countCorrectGapHits(correctCommas) {
  const correctSet = new Set(correctCommas.map((comma) => comma.gap));
  return [...state.selectedGaps].filter((gap) => correctSet.has(gap)).length;
}

function countCorrectRules(correctCommas) {
  return correctCommas.filter(
    (comma) =>
      state.selectedGaps.has(comma.gap) &&
      state.ruleSelections[comma.gap] === comma.rule
  ).length;
}

function formatSentenceWithCommas(task) {
  const commaLookup = new Map(task.commas.map((comma) => [comma.gap, comma.rule]));
  const parts = [];

  task.tokens.forEach((token, index) => {
    parts.push(token);
    if (commaLookup.has(index)) {
      parts[parts.length - 1] += ",";
    }
  });

  return parts.join(" ");
}

function revealModel(task) {
  modelBoxEl.innerHTML = `
    <p class="model-solution"><strong>Modellloesung:</strong> ${formatSentenceWithCommas(
      task
    )}</p>
    <p><strong>Begruendung:</strong> ${task.explanation}</p>
    <div class="rule-tags">
      ${sortCommaData(task.commas)
        .map((comma, index) => {
          const rule = RULES.find((entry) => entry.id === comma.rule);
          return `<span>Komma ${index + 1}: ${rule ? rule.label : comma.rule}</span>`;
        })
        .join("")}
    </div>
  `;
  modelBoxEl.classList.remove("hidden");
}

function lockTask() {
  state.feedbackLocked = true;
  checkBtn.disabled = true;
  resetBtn.disabled = true;
  nextBtn.classList.remove("hidden");
}

function markSolved(task) {
  if (!state.solvedTaskIds.has(task.id)) {
    state.solvedTaskIds.add(task.id);
    saveProgress();
  }
}

function handleSuccess(task) {
  state.totalChecks += 1;
  state.correctChecks += 1;
  saveProgress();
  markSolved(task);
  setFeedback(
    currentLevel().requiresRules
      ? "Stark. Alle Kommas sitzen und die Regelzuordnung stimmt."
      : "Stark. Alle Kommas sitzen an den richtigen Stellen.",
    "success"
  );
  revealModel(task);
  lockTask();
}

function handleFailure(task) {
  state.totalChecks += 1;
  saveProgress();
  state.attempts += 1;

  const correctGapHits = countCorrectGapHits(task.commas);
  const totalCommas = task.commas.length;
  const needsRules = currentLevel().requiresRules;

  if (state.attempts < 2) {
    if (needsRules) {
      const correctRuleHits = countCorrectRules(task.commas);
      setFeedback(
        `${correctGapHits} von ${totalCommas} Kommas sitzen. ${correctRuleHits} von ${totalCommas} Regeln stimmen bereits. Passe deine Auswahl an.`,
        "error"
      );
    } else {
      setFeedback(
        `${correctGapHits} von ${totalCommas} Kommas sitzen. Pruefe besonders Nebensaetze, Zusaetze und die Stellen vor einfachem 'und'.`,
        "error"
      );
    }
    return;
  }

  setFeedback(
    "Noch nicht korrekt. Die Modellloesung ist jetzt eingeblendet, damit du den Satz analysieren kannst.",
    "info"
  );
  revealModel(task);
  lockTask();
}

function nextTask() {
  const level = currentLevel();
  if (state.currentTaskIndex < level.tasks.length - 1) {
    state.currentTaskIndex += 1;
  } else {
    state.currentTaskIndex = 0;
  }

  resetTaskState();
  render();
}

function checkTask() {
  const task = currentTask();
  const needsRules = currentLevel().requiresRules;
  const correctGapSelection = areSameSelections(task.commas);

  if (state.selectedGaps.size === 0) {
    setFeedback("Setze zuerst mindestens ein Komma.", "error");
    return;
  }

  if (needsRules) {
    const everySelectedGapHasRule = [...state.selectedGaps].every(
      (gap) => state.ruleSelections[gap]
    );
    if (!everySelectedGapHasRule) {
      setFeedback("Ordne jedem gesetzten Komma zuerst eine Regel zu.", "error");
      return;
    }
  }

  if (correctGapSelection && (!needsRules || areRulesCorrect(task.commas))) {
    handleSuccess(task);
    updateHeader();
    updateProgressSummary();
    renderLevelCards();
    return;
  }

  handleFailure(task);
  updateHeader();
}

function clearSelection() {
  if (state.feedbackLocked) {
    return;
  }

  state.selectedGaps = new Set();
  state.ruleSelections = {};
  buildSentenceArea();
  renderRulePanel();
  setFeedback("Auswahl geloescht. Du kannst den Satz neu analysieren.", "info");
  hideModel();
}

function render() {
  updateHeader();
  updateProgressSummary();
  renderLevelCards();
  buildSentenceArea();
  renderRulePanel();
}

checkBtn.addEventListener("click", checkTask);
resetBtn.addEventListener("click", clearSelection);
nextBtn.addEventListener("click", nextTask);

loadProgress();
resetTaskState();
render();
