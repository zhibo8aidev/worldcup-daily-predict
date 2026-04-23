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
    match: {
      round: "小组赛 A 组 第 3 轮",
      status: "可预测",
      statusClass: "",
      time: "04.23 19:30",
      detailHint: "点击头像或时间进入比赛综合内页",
      home: "阿根廷",
      away: "葡萄牙",
      homeBadge: "阿",
      awayBadge: "葡",
      score: "VS",
      footNote: "三题已完成选择，点击提交预测后统一提交并展示投票分布",
      action: { label: "提交预测", mode: "success" },
      questions: [
        { title: "比赛结果", subtitle: "胜平负", options: ["主胜", "平", "客胜"], selected: 0 },
        { title: "全场进球数", subtitle: "90 分钟统计", options: ["0-1球", "2-3球", "4+球"], selected: 1 },
        { title: "指定球员能否进球", subtitle: "梅西 VS C 罗", options: ["会", "不会"], selected: 0 }
      ]
    }
  },
  incomplete: {
    caption: "状态样例：信息未填全",
    match: {
      round: "小组赛 B 组 第 2 轮",
      status: "草稿中",
      statusClass: "",
      time: "04.23 22:00",
      detailHint: "点击头像或时间进入比赛综合内页",
      home: "法国",
      away: "荷兰",
      homeBadge: "法",
      awayBadge: "荷",
      score: "VS",
      footNote: "已选择 2/3 题，点击提交将弹出未填全 Toast",
      action: { label: "提交预测", mode: "incomplete" },
      questions: [
        { title: "比赛结果", subtitle: "胜平负", options: ["主胜", "平", "客胜"], selected: 0 },
        { title: "全场进球数", subtitle: "90 分钟统计", options: ["0-1球", "2-3球", "4+球"], selected: 1 },
        { title: "指定球员能否进球", subtitle: "姆巴佩 VS 加克波", options: ["会", "不会"], selected: null }
      ]
    }
  },
  predicted: {
    caption: "状态样例：已预测",
    match: {
      round: "小组赛 C 组 第 3 轮",
      status: "已预测",
      statusClass: "",
      time: "04.23 23:30",
      detailHint: "已提交，点击时间仍可查看比赛综合内页",
      home: "西班牙",
      away: "德国",
      homeBadge: "西",
      awayBadge: "德",
      score: "VS",
      footNote: "提交成功后显示全站投票分布，且本场不可修改",
      action: { label: "已提交", mode: "submitted" },
      questions: [
        {
          title: "比赛结果",
          subtitle: "胜平负",
          options: ["主胜", "平", "客胜"],
          selected: 1,
          distribution: [["主胜", 33], ["平", 41], ["客胜", 26]]
        },
        {
          title: "全场进球数",
          subtitle: "90 分钟统计",
          options: ["0-1球", "2-3球", "4+球"],
          selected: 1,
          distribution: [["0-1球", 19], ["2-3球", 56], ["4+球", 25]]
        },
        {
          title: "指定球员能否进球",
          subtitle: "莫拉塔 VS 穆西亚拉",
          options: ["会", "不会"],
          selected: 0,
          distribution: [["会", 62], ["不会", 38]]
        }
      ]
    }
  },
  locked: {
    caption: "状态样例：已锁定",
    match: {
      round: "1/8 决赛",
      status: "已锁定",
      statusClass: "pill--lock",
      time: "比赛进行中 63'",
      detailHint: "超过预测时间，点击提交会弹出超时 Toast",
      home: "巴西",
      away: "英格兰",
      homeBadge: "巴",
      awayBadge: "英",
      score: "1 : 1",
      footNote: "开赛后未参与显示预测已截止，已参与显示等待开奖",
      action: { label: "提交预测", mode: "locked" },
      questions: [
        { title: "比赛结果", subtitle: "胜平负", options: ["主胜", "平", "客胜"], selected: 0, disabled: true },
        { title: "全场进球数", subtitle: "90 分钟统计", options: ["0-1球", "2-3球", "4+球"], selected: 1, disabled: true },
        { title: "指定球员能否进球", subtitle: "维尼修斯 VS 凯恩", options: ["会", "不会"], selected: 0, disabled: true }
      ]
    }
  },
  settled: {
    caption: "状态样例：已结算",
    match: {
      round: "1/4 决赛",
      status: "已结算",
      statusClass: "pill--live",
      time: "已完赛",
      detailHint: "可进入比赛综合内页查看赛后复盘",
      home: "日本",
      away: "美国",
      homeBadge: "日",
      awayBadge: "美",
      score: "2 : 1",
      footNote: "本场命中 2 题，击败了 91% 的预测者",
      action: { label: "查看复盘", mode: "detail" },
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
          options: ["0-1球", "2-3球", "4+球"],
          selected: 1,
          answer: "2-3球"
        },
        {
          title: "指定球员能否进球",
          subtitle: "久保建英 VS 普利西奇",
          options: ["会", "不会"],
          selected: 1,
          answer: "会"
        }
      ]
    }
  },
  cancelled: {
    caption: "状态样例：已取消",
    match: {
      round: "半决赛",
      status: "已取消",
      statusClass: "pill--cancel",
      time: "赛程推迟",
      detailHint: "异常场次会在比赛综合内页同步公告",
      home: "韩国",
      away: "墨西哥",
      homeBadge: "韩",
      awayBadge: "墨",
      score: "取消",
      footNote: "比赛取消或球员未出场时，本场不计入成绩",
      action: { label: "查看公告", mode: "detail" },
      cancelled: true,
      questions: [
        { title: "比赛结果", subtitle: "胜平负", options: ["主胜", "平", "客胜"], selected: null, disabled: true },
        { title: "全场进球数", subtitle: "90 分钟统计", options: ["0-1球", "2-3球", "4+球"], selected: null, disabled: true },
        { title: "指定球员能否进球", subtitle: "孙兴慜 VS 希门尼斯", options: ["会", "不会"], selected: null, disabled: true }
      ]
    }
  },
  empty: {
    caption: "状态样例：无赛事",
    empty: true
  }
};

const rankData = {
  daily: [
    ["04", "边路爆趟", "14 题命中 / 82% 命中率"],
    ["05", "球门线艺术家", "13 题命中 / 81% 命中率"],
    ["06", "凌晨不睡觉", "13 题命中 / 79% 命中率"],
    ["07", "九十分钟主义", "12 题命中 / 84% 命中率"],
    ["08", "定位球信徒", "12 题命中 / 80% 命中率"],
    ["09", "压哨进球说", "11 题命中 / 83% 命中率"],
    ["10", "中场调度员", "11 题命中 / 78% 命中率"]
  ],
  total: [
    ["04", "凌晨不睡觉", "56 题命中 / 80% 命中率"],
    ["05", "补时绝杀王", "55 题命中 / 79% 命中率"],
    ["06", "边路爆趟", "53 题命中 / 81% 命中率"],
    ["07", "球门线艺术家", "52 题命中 / 77% 命中率"],
    ["08", "九十分钟主义", "50 题命中 / 76% 命中率"],
    ["09", "定位球信徒", "49 题命中 / 78% 命中率"],
    ["10", "压哨进球说", "48 题命中 / 77% 命中率"]
  ]
};

const matchList = document.getElementById("match-list");
const dateStrip = document.getElementById("date-strip");
const toastLayer = document.getElementById("toast-layer");
const stateCaption = document.getElementById("state-caption");
const rankList = document.getElementById("rank-list");

const screens = document.querySelectorAll(".screen");
const stateButtons = document.querySelectorAll(".state-btn");
const rankTabs = document.querySelectorAll(".rank-tab");

let currentHomeState = "predictable";

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

function renderSettle(question) {
  if (!question.answer) return "";
  const selectedText = question.selected == null ? "未参与" : question.options[question.selected];
  return `
    <div class="settle-box">
      <div class="settle-row"><span>我的选择</span><strong>${selectedText}</strong></div>
      <div class="settle-row"><span>正确答案</span><strong>${question.answer}</strong></div>
    </div>
  `;
}

function renderQuestions(match) {
  return match.questions
    .map((question) => {
      const buttons = question.options
        .map((option, index) => {
          const classes = ["option-btn"];
          if (question.selected === index) classes.push("is-selected");
          if (question.disabled) classes.push("is-disabled");
          return `<button class="${classes.join(" ")}">${option}</button>`;
        })
        .join("");

      return `
        <article class="question-card">
          <div class="question-head">
            <div>
              <p>${question.title}</p>
              <span class="assist">${question.subtitle}</span>
            </div>
          </div>
          <div class="option-row">${buttons}</div>
          ${renderDistribution(question.distribution)}
          ${renderSettle(question)}
        </article>
      `;
    })
    .join("");
}

function renderEmpty() {
  matchList.innerHTML = `
    <section class="empty-card">
      <div>
        <span class="section-kicker">NO MATCH TODAY</span>
        <h3>今日暂无比赛</h3>
        <p>先去看看达人榜，或等待明日赛程开放后继续预测。</p>
      </div>
    </section>
  `;
}

function renderMatchState(stateKey) {
  currentHomeState = stateKey;
  const state = homeStates[stateKey];
  stateCaption.textContent = state.caption;

  if (state.empty) {
    renderEmpty();
    return;
  }

  const match = state.match;
  matchList.innerHTML = `
    <article class="match-card ${match.cancelled ? "is-cancelled" : ""}">
      <div class="match-head">
        <div>
          <strong>${match.round}</strong>
          <div class="assist">${match.time}</div>
        </div>
        <div class="match-meta">
          <span class="pill ${match.statusClass}">${match.status}</span>
        </div>
      </div>

      <div class="versus-row">
        <div class="team">
          <button class="team-badge" data-toast="跳转比赛综合内页示意">${match.homeBadge}</button>
          <strong>${match.home}</strong>
        </div>
        <div class="scorebox">
          <strong>${match.score}</strong>
          <span>${match.detailHint}</span>
        </div>
        <div class="team">
          <button class="team-badge" data-toast="跳转比赛综合内页示意">${match.awayBadge}</button>
          <strong>${match.away}</strong>
        </div>
      </div>

      <div class="detail-links">
        <button class="detail-link" data-toast="跳转比赛综合内页示意">点击比赛时间进入综合内页</button>
      </div>

      <div class="question-list">
        ${renderQuestions(match)}
      </div>

      <div class="card-foot">
        <span class="assist">${match.footNote}</span>
        <button class="submit-btn ${match.action.mode === "submitted" ? "is-muted" : ""}" data-submit-mode="${match.action.mode}">
          ${match.action.label}
        </button>
      </div>
    </article>
  `;
}

function renderRanks(mode) {
  rankList.innerHTML = rankData[mode]
    .map(
      ([rank, name, meta]) => `
        <div class="rank-row">
          <div class="rank-main">
            <span class="rank-index">${rank}</span>
            <div class="avatar">${name.slice(0, 1)}</div>
            <div>
              <strong>${name}</strong>
              <div class="assist">${meta}</div>
            </div>
          </div>
          <div class="assist">较上一位差 1 题</div>
        </div>
      `
    )
    .join("");
}

function activateScreen(target) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === target);
  });

  document.querySelectorAll(".toolbar-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screenTarget === target);
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastLayer.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

document.addEventListener("click", (event) => {
  const screenTarget = event.target.closest("[data-screen-target]");
  if (screenTarget) {
    activateScreen(screenTarget.dataset.screenTarget);
  }

  const toastTrigger = event.target.closest("[data-toast]");
  if (toastTrigger) {
    showToast(toastTrigger.dataset.toast);
  }

  const submitTrigger = event.target.closest("[data-submit-mode]");
  if (submitTrigger) {
    const mode = submitTrigger.dataset.submitMode;
    if (mode === "success") {
      showToast("提交成功，已锁定本场预测");
      window.setTimeout(() => {
        document.querySelector('[data-home-state="predicted"]').click();
      }, 320);
    }
    if (mode === "incomplete") showToast("请完成本场所有预测");
    if (mode === "locked") showToast("超过预测时间");
    if (mode === "submitted") showToast("本场已提交，不可修改");
    if (mode === "detail") showToast("跳转比赛综合内页示意");
  }
});

stateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stateButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderMatchState(button.dataset.homeState);
  });
});

rankTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    rankTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderRanks(tab.dataset.rankTab);
  });
});

renderDates();
renderMatchState("predictable");
renderRanks("daily");
