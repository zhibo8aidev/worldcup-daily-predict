const dateData = [
  { label: "04.21", note: "周二" },
  { label: "04.22", note: "周三" },
  { label: "04.23", note: "今天", active: true },
  { label: "04.24", note: "周五" },
  { label: "04.25", note: "无赛", disabled: true }
];

const homeStates = {
  predictable: {
    caption: "状态样例：可预测",
    cardNote: "三题已答满，按钮高亮，可直接统一提交。",
    match: {
      round: "小组赛 A 组 第 3 轮",
      phase: "赛前 1 小时",
      status: "可预测",
      statusClass: "",
      time: "04.23 19:30 开赛",
      home: "阿根廷",
      away: "葡萄牙",
      homeBadge: "阿",
      awayBadge: "葡",
      score: "VS",
      jumpHint: "点击头像或比赛时间，进入比赛综合内页",
      hint: "本场三题都已选择完成，点击按钮统一提交。",
      action: { label: "提交预测", mode: "ready", behavior: "submit" },
      questions: [
        {
          title: "比赛结果",
          subtitle: "胜平负",
          options: ["主胜", "平", "客胜"],
          selected: 0
        },
        {
          title: "全场进球数",
          subtitle: "90 分钟统计",
          options: ["0-1球", "2-3球", "4球以上"],
          selected: 1
        },
        {
          title: "焦点球员能否进球",
          subtitle: "若干名焦点球员",
          options: ["会", "不会"],
          selected: 0,
          focusGroups: ["梅西 VS C 罗", "阿尔瓦雷斯 VS B 费"]
        }
      ]
    }
  },
  incomplete: {
    caption: "状态样例：信息未填全",
    cardNote: "按钮文案仍为“提交预测”，点击后只弹未填全提示。",
    match: {
      round: "小组赛 B 组 第 2 轮",
      phase: "赛前 3 小时",
      status: "草稿中",
      statusClass: "",
      time: "04.23 22:00 开赛",
      home: "法国",
      away: "荷兰",
      homeBadge: "法",
      awayBadge: "荷",
      score: "VS",
      jumpHint: "点击头像或比赛时间，进入比赛综合内页",
      hint: "仍缺少焦点球员题答案，提交前需补全三题。",
      action: { label: "提交预测", mode: "warn", behavior: "incomplete" },
      questions: [
        {
          title: "比赛结果",
          subtitle: "胜平负",
          options: ["主胜", "平", "客胜"],
          selected: 0
        },
        {
          title: "全场进球数",
          subtitle: "90 分钟统计",
          options: ["0-1球", "2-3球", "4球以上"],
          selected: 2
        },
        {
          title: "焦点球员能否进球",
          subtitle: "若干名焦点球员",
          options: ["会", "不会"],
          selected: null,
          focusGroups: ["姆巴佩 VS 加克波", "图拉姆 VS 德佩"]
        }
      ]
    }
  },
  submitted: {
    caption: "状态样例：已提交",
    cardNote: "提交成功后才展示全站投票分布，按钮置灰但文案不变。",
    match: {
      round: "小组赛 C 组 第 3 轮",
      phase: "等待开赛",
      status: "已提交",
      statusClass: "pill--submitted",
      time: "04.23 23:30 开赛",
      home: "西班牙",
      away: "德国",
      homeBadge: "西",
      awayBadge: "德",
      score: "VS",
      jumpHint: "已提交，仍可进入比赛综合内页查看战前信息",
      hint: "答案与分布已锁定，开赛后自动进入等待开奖。",
      action: { label: "提交预测", mode: "disabled", behavior: "disabled" },
      questions: [
        {
          title: "比赛结果",
          subtitle: "胜平负",
          options: ["主胜", "平", "客胜"],
          selected: 1,
          distribution: [
            ["主胜", 33],
            ["平", 41],
            ["客胜", 26]
          ]
        },
        {
          title: "全场进球数",
          subtitle: "90 分钟统计",
          options: ["0-1球", "2-3球", "4球以上"],
          selected: 1,
          distribution: [
            ["0-1球", 18],
            ["2-3球", 57],
            ["4球以上", 25]
          ]
        },
        {
          title: "焦点球员能否进球",
          subtitle: "若干名焦点球员",
          options: ["会", "不会"],
          selected: 0,
          focusGroups: ["莫拉塔 VS 穆西亚拉", "亚马尔 VS 哈弗茨"],
          distribution: [
            ["会", 62],
            ["不会", 38]
          ]
        }
      ]
    }
  },
  locked: {
    caption: "状态样例：已锁定",
    cardNote: "比赛已开始，按钮置灰；若此前未提交，点击也只提示超时。",
    match: {
      round: "1/8 决赛",
      phase: "比赛进行中 63'",
      status: "已锁定",
      statusClass: "pill--locked",
      time: "比赛进行中 63'",
      home: "巴西",
      away: "英格兰",
      homeBadge: "巴",
      awayBadge: "英",
      score: "1 : 1",
      jumpHint: "点击头像或比赛时间，进入比赛综合内页",
      hint: "开赛后不可再提交，本场进入等待开奖阶段。",
      action: { label: "提交预测", mode: "disabled", behavior: "deadline" },
      questions: [
        {
          title: "比赛结果",
          subtitle: "胜平负",
          options: ["主胜", "平", "客胜"],
          selected: 0,
          disabled: true
        },
        {
          title: "全场进球数",
          subtitle: "90 分钟统计",
          options: ["0-1球", "2-3球", "4球以上"],
          selected: 1,
          disabled: true
        },
        {
          title: "焦点球员能否进球",
          subtitle: "若干名焦点球员",
          options: ["会", "不会"],
          selected: 0,
          focusGroups: ["维尼修斯 VS 凯恩", "罗德里戈 VS 福登"],
          disabled: true
        }
      ]
    }
  },
  settled: {
    caption: "状态样例：已结算",
    cardNote: "显示终场结果、每题对错与击败百分比，按钮继续置灰。",
    match: {
      round: "1/4 决赛",
      phase: "已完赛",
      status: "已结算",
      statusClass: "pill--settled",
      time: "已完赛",
      home: "日本",
      away: "美国",
      homeBadge: "日",
      awayBadge: "美",
      score: "2 : 1",
      jumpHint: "点击头像或比赛时间，进入比赛综合内页",
      hint: "本场命中 2 题，击败了 91% 的预测者。",
      action: { label: "提交预测", mode: "disabled", behavior: "disabled" },
      questions: [
        {
          title: "比赛结果",
          subtitle: "胜平负",
          options: ["主胜", "平", "客胜"],
          selected: 0,
          answer: "主胜"
        },
        {
          title: "全场进球数",
          subtitle: "90 分钟统计",
          options: ["0-1球", "2-3球", "4球以上"],
          selected: 1,
          answer: "2-3球"
        },
        {
          title: "焦点球员能否进球",
          subtitle: "若干名焦点球员",
          options: ["会", "不会"],
          selected: 1,
          answer: "会",
          focusGroups: ["久保建英 VS 普利西奇", "三笘薰 VS 雷纳"]
        }
      ]
    }
  },
  cancelled: {
    caption: "状态样例：已取消",
    cardNote: "比赛取消或焦点球员异常时，不计入成绩，按钮仍显示“提交预测”。",
    match: {
      round: "半决赛",
      phase: "赛程异常",
      status: "已取消",
      statusClass: "pill--cancelled",
      time: "赛程推迟",
      home: "韩国",
      away: "墨西哥",
      homeBadge: "韩",
      awayBadge: "墨",
      score: "取消",
      jumpHint: "点击头像或比赛时间，进入比赛综合内页",
      hint: "比赛取消或球员未出场时，本场不计入成绩。",
      action: { label: "提交预测", mode: "disabled", behavior: "disabled" },
      cancelled: true,
      questions: [
        {
          title: "比赛结果",
          subtitle: "胜平负",
          options: ["主胜", "平", "客胜"],
          selected: null,
          disabled: true
        },
        {
          title: "全场进球数",
          subtitle: "90 分钟统计",
          options: ["0-1球", "2-3球", "4球以上"],
          selected: null,
          disabled: true
        },
        {
          title: "焦点球员能否进球",
          subtitle: "若干名焦点球员",
          options: ["会", "不会"],
          selected: null,
          focusGroups: ["孙兴慜 VS 希门尼斯"],
          disabled: true
        }
      ]
    }
  },
  empty: {
    caption: "状态样例：无赛事",
    cardNote: "保留 KV、日期条、规则卡与底部氛围承接，不留白底。",
    empty: true
  }
};

const leaderboardData = {
  daily: {
    dates: ["04.21", "04.22", "04.23", "04.24"],
    activeDate: "04.23",
    podium: [
      { rank: 2, name: "凌晨四点看球", score: "16 题命中", badge: "李" },
      { rank: 1, name: "补时绝杀王", score: "18 题命中", badge: "王" },
      { rank: 3, name: "门柱也是门", score: "15 题命中", badge: "周" }
    ],
    rows: [
      ["04", "边路爆趟", "14 题命中 / 82% 命中率"],
      ["05", "球门线艺术家", "13 题命中 / 81% 命中率"],
      ["06", "凌晨不睡觉", "13 题命中 / 79% 命中率"],
      ["07", "九十分钟主义", "12 题命中 / 84% 命中率"],
      ["08", "定位球信徒", "12 题命中 / 80% 命中率"],
      ["09", "压哨进球说", "11 题命中 / 83% 命中率"],
      ["10", "中场调度员", "11 题命中 / 78% 命中率"]
    ]
  },
  total: {
    dates: ["全赛程"],
    activeDate: "全赛程",
    podium: [
      { rank: 2, name: "凌晨不睡觉", score: "56 题命中", badge: "李" },
      { rank: 1, name: "补时绝杀王", score: "58 题命中", badge: "王" },
      { rank: 3, name: "边路爆趟", score: "53 题命中", badge: "周" }
    ],
    rows: [
      ["04", "球门线艺术家", "52 题命中 / 77% 命中率"],
      ["05", "九十分钟主义", "50 题命中 / 76% 命中率"],
      ["06", "定位球信徒", "49 题命中 / 78% 命中率"],
      ["07", "压哨进球说", "48 题命中 / 77% 命中率"],
      ["08", "中场调度员", "47 题命中 / 74% 命中率"],
      ["09", "门柱也是门", "46 题命中 / 75% 命中率"],
      ["10", "凌晨四点看球", "45 题命中 / 73% 命中率"]
    ]
  }
};

const matchList = document.getElementById("match-list");
const dateStrip = document.getElementById("date-strip");
const toastLayer = document.getElementById("toast-layer");
const stateCaption = document.getElementById("state-caption");
const rankList = document.getElementById("rank-list");
const podium = document.getElementById("podium");
const leaderboardDateStrip = document.getElementById("leaderboard-date-strip");

const screens = document.querySelectorAll(".screen");
const toolbarButtons = document.querySelectorAll(".toolbar-btn");
const stateButtons = document.querySelectorAll(".state-btn");
const rankTabs = document.querySelectorAll(".rank-tab");

let currentHomeState = "predictable";
let currentRankTab = "daily";

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastLayer.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 2600);
}

function renderDates() {
  dateStrip.innerHTML = dateData
    .map(
      (item) => `
        <button class="date-pill ${item.active ? "is-active" : ""} ${item.disabled ? "is-disabled" : ""}">
          <strong>${item.note}</strong>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");
}

function renderLeaderboardDates() {
  const current = leaderboardData[currentRankTab];
  leaderboardDateStrip.innerHTML = current.dates
    .map(
      (item) => `
        <button class="date-pill ${item === current.activeDate ? "is-active" : ""}">
          <strong>${currentRankTab === "daily" ? "比赛日" : "范围"}</strong>
          <span>${item}</span>
        </button>
      `
    )
    .join("");
}

function renderDistribution(distribution) {
  if (!distribution) return "";
  return `
    <div class="distribution">
      ${distribution
        .map(
          ([label, value]) => `
            <div class="distribution-row"><span>${label}</span><strong>${value}%</strong></div>
            <div class="bar"><span style="width:${value}%"></span></div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderResultBox(question) {
  if (!question.answer) return "";
  const selectedText = question.selected == null ? "未参与" : question.options[question.selected];
  const isRight = selectedText === question.answer;
  return `
    <div class="result-box">
      <div class="result-row"><span>我的选择</span><strong class="${isRight ? "is-right" : "is-wrong"}">${selectedText}</strong></div>
      <div class="result-row"><span>正确答案</span><strong>${question.answer}</strong></div>
    </div>
  `;
}

function renderFocusGroups(question) {
  if (!question.focusGroups || !question.focusGroups.length) return "";
  return `
    <div class="focus-groups">
      ${question.focusGroups
        .map((item, index) => `<div class="focus-group"><span>焦点球员 ${index + 1}</span><strong>${item}</strong></div>`)
        .join("")}
    </div>
  `;
}

function renderQuestion(question) {
  const cols = question.options.length === 3 ? "cols-3" : "cols-2";

  return `
    <article class="question-card">
      <div class="question-head">
        <div>
          <h3>${question.title}</h3>
          <p>${question.subtitle}</p>
        </div>
      </div>
      ${renderFocusGroups(question)}
      <div class="option-grid ${cols}">
        ${question.options
          .map(
            (option, index) => `
              <button class="option-btn ${question.selected === index ? "is-active" : ""} ${question.disabled ? "is-disabled" : ""}">
                ${option}
              </button>
            `
          )
          .join("")}
      </div>
      ${renderDistribution(question.distribution)}
      ${renderResultBox(question)}
    </article>
  `;
}

function renderEmptyState(note) {
  matchList.innerHTML = `
    <article class="match-card empty-card">
      <div class="empty-art"></div>
      <h3>今日无比赛</h3>
      <p>${note}</p>
    </article>
  `;
}

function renderMatchCard(match) {
  return `
    <article class="match-card ${match.cancelled ? "is-cancelled" : ""}">
      <div class="match-head">
        <strong>${match.round}</strong>
        <span class="pill ${match.statusClass || ""}">${match.status}</span>
      </div>
      <div class="match-meta">
        <span>${match.phase}</span>
        <span>•</span>
        <span>${match.cardNote || ""}</span>
      </div>

      <section class="match-jump">
        <div class="team-side">
          <button type="button" class="team-link" data-toast="打开比赛综合内页示意">
            <div class="team-badge avatar">${match.homeBadge}</div>
          </button>
          <span class="team-name">${match.home}</span>
        </div>
        <div class="versus">
          <div class="versus-score">${match.score}</div>
          <button type="button" class="match-time-btn" data-toast="打开比赛综合内页示意">${match.time}</button>
        </div>
        <div class="team-side">
          <button type="button" class="team-link" data-toast="打开比赛综合内页示意">
            <div class="team-badge avatar">${match.awayBadge}</div>
          </button>
          <span class="team-name">${match.away}</span>
        </div>
      </section>

      <div class="match-meta">
        <span>${match.jumpHint}</span>
      </div>

      ${match.questions.map(renderQuestion).join("")}

      <div class="cta-row">
        <p class="cta-hint">${match.hint}</p>
        <button class="submit-btn ${match.action.mode === "disabled" ? "is-disabled" : ""}" data-submit-behavior="${match.action.behavior}">
          ${match.action.label}
        </button>
      </div>
    </article>
  `;
}

function renderHome() {
  const state = homeStates[currentHomeState];
  stateCaption.textContent = state.caption;

  if (state.empty) {
    renderEmptyState(state.cardNote);
    return;
  }

  const match = {
    ...state.match,
    cardNote: state.cardNote
  };

  matchList.innerHTML = renderMatchCard(match);
}

function renderPodium() {
  const current = leaderboardData[currentRankTab];
  const order = [0, 1, 2];
  podium.innerHTML = order
    .map((index) => {
      const item = current.podium[index];
      return `
        <article class="podium-card podium-card--${item.rank}">
          <span class="podium-rank">TOP ${item.rank}</span>
          <div class="avatar">${item.badge}</div>
          <h3>${item.name}</h3>
          <p>${item.score}</p>
        </article>
      `;
    })
    .join("");
}

function renderRankList() {
  const current = leaderboardData[currentRankTab];
  rankList.innerHTML = current.rows
    .map(
      ([rank, name, desc]) => `
        <div class="rank-row">
          <strong>${rank}</strong>
          <div class="avatar">${name.slice(0, 1)}</div>
          <div class="rank-user">
            <div>${name}</div>
            <span>${desc}</span>
          </div>
        </div>
      `
    )
    .join("");
}

function renderLeaderboard() {
  renderLeaderboardDates();
  renderPodium();
  renderRankList();
}

function setScreen(target) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === target);
  });

  toolbarButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screenTarget === target);
  });
}

function setHomeState(stateKey) {
  currentHomeState = stateKey;
  stateButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.homeState === stateKey);
  });
  renderHome();
}

function setRankTab(tabKey) {
  currentRankTab = tabKey;
  rankTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.rankTab === tabKey);
  });
  renderLeaderboard();
}

document.querySelectorAll("[data-screen-target]").forEach((button) => {
  button.addEventListener("click", () => {
    setScreen(button.dataset.screenTarget);
  });
});

document.addEventListener("click", (event) => {
  const toastTarget = event.target.closest("[data-toast]");
  if (toastTarget) {
    showToast(toastTarget.dataset.toast);
    return;
  }

  const submitTarget = event.target.closest("[data-submit-behavior]");
  if (!submitTarget) return;

  const behavior = submitTarget.dataset.submitBehavior;
  if (behavior === "disabled") return;
  if (behavior === "incomplete") {
    showToast("请完成本场所有预测");
    return;
  }
  if (behavior === "deadline") {
    showToast("超过预测时间");
    return;
  }
  if (behavior === "submit") {
    showToast("提交成功，已锁定本场预测");
    setHomeState("submitted");
  }
});

stateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setHomeState(button.dataset.homeState);
  });
});

rankTabs.forEach((button) => {
  button.addEventListener("click", () => {
    setRankTab(button.dataset.rankTab);
  });
});

renderDates();
renderHome();
renderLeaderboard();
