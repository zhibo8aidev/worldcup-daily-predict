const stateData = {
  predictable: [
    {
      round: "A组 第3轮",
      time: "19:30 开赛",
      status: "可预测",
      statusClass: "",
      home: "阿根廷",
      away: "葡萄牙",
      score: "VS",
      note: "距截止 2小时18分",
      questions: [
        { title: "胜平负", options: ["主胜", "平局", "客胜"] },
        { title: "全场进球数", options: ["0-1球", "2-3球", "4+球"] },
        { title: "梅西是否进球", options: ["会", "不会"] }
      ],
      footNote: "每题单独提交，提交后立即锁定",
      action: "去赛事详情"
    }
  ],
  predicted: [
    {
      round: "B组 第2轮",
      time: "22:00 开赛",
      status: "已预测",
      statusClass: "",
      home: "法国",
      away: "荷兰",
      score: "VS",
      note: "你已完成 3/3 题预测",
      questions: [
        { title: "胜平负", options: ["主胜", "平局", "客胜"], selected: 0, distribution: [["主胜", 48], ["平局", 22], ["客胜", 30]] },
        { title: "全场进球数", options: ["0-1球", "2-3球", "4+球"], selected: 1, distribution: [["0-1球", 19], ["2-3球", 54], ["4+球", 27]] },
        { title: "姆巴佩是否进球", options: ["会", "不会"], selected: 0, distribution: [["会", 61], ["不会", 39]] }
      ],
      footNote: "已展示全站观点分布",
      action: "查看比赛详情"
    }
  ],
  locked: [
    {
      round: "C组 第3轮",
      time: "比赛进行中 63'",
      status: "已锁定",
      statusClass: "status-lock",
      home: "西班牙",
      away: "德国",
      score: "1 : 1",
      note: "开赛后已截止，等待赛后结算",
      questions: [
        { title: "胜平负", options: ["主胜", "平局", "客胜"], selected: 1, locked: true },
        { title: "全场进球数", options: ["0-1球", "2-3球", "4+球"], selected: 1, locked: true },
        { title: "穆西亚拉是否进球", options: ["会", "不会"], selected: 0, locked: true }
      ],
      footNote: "等待开奖",
      action: "比赛详情"
    }
  ],
  settled: [
    {
      round: "D组 第3轮",
      time: "已完赛",
      status: "已结算",
      statusClass: "status-live",
      home: "巴西",
      away: "英格兰",
      score: "2 : 1",
      note: "本场你命中 2 题，击败 91% 用户",
      questions: [
        { title: "胜平负", options: ["主胜", "平局", "客胜"], selected: 0, answer: "主胜" },
        { title: "全场进球数", options: ["0-1球", "2-3球", "4+球"], selected: 1, answer: "2-3球" },
        { title: "维尼修斯是否进球", options: ["会", "不会"], selected: 1, answer: "会" }
      ],
      footNote: "正确答案已公布",
      action: "复盘比赛"
    }
  ],
  cancelled: [
    {
      round: "E组 第2轮",
      time: "赛程取消",
      status: "已取消",
      statusClass: "status-cancel",
      home: "日本",
      away: "美国",
      score: "取消",
      note: "比赛推迟，相关题目不计入成绩",
      cancelled: true,
      questions: [
        { title: "胜平负", options: ["主胜", "平局", "客胜"], disabled: true },
        { title: "全场进球数", options: ["0-1球", "2-3球", "4+球"], disabled: true },
        { title: "久保建英是否进球", options: ["会", "不会"], disabled: true }
      ],
      footNote: "本场已作废",
      action: "查看公告"
    }
  ],
  empty: []
};

const rankData = {
  daily: [
    ["04", "门柱也是门", "14题命中 / 82%"],
    ["05", "足球不会说谎", "13题命中 / 81%"],
    ["06", "你压我反着来", "13题命中 / 79%"],
    ["07", "中场大师", "12题命中 / 83%"],
    ["08", "单关之神", "12题命中 / 81%"],
    ["09", "凌晨看球不困", "12题命中 / 78%"],
    ["10", "战术板收集者", "11题命中 / 84%"]
  ],
  total: [
    ["04", "凌晨看球不困", "56题命中 / 80%"],
    ["05", "球王预言家", "55题命中 / 79%"],
    ["06", "战术板收集者", "53题命中 / 81%"],
    ["07", "补时绝杀", "52题命中 / 77%"],
    ["08", "门柱也是门", "50题命中 / 76%"],
    ["09", "中场大师", "49题命中 / 78%"],
    ["10", "单关之神", "48题命中 / 77%"]
  ]
};

const matchList = document.getElementById("match-list");
const rankList = document.getElementById("rank-list");
const stateButtons = document.querySelectorAll(".state-chip");
const screenButtons = document.querySelectorAll(".nav-btn");
const screens = document.querySelectorAll(".screen");
const rankTabs = document.querySelectorAll(".leader-tab");

function renderQuestions(question, mode) {
  const options = question.options
    .map((option, index) => {
      const classes = ["option"];
      if (question.selected === index) classes.push("is-selected");
      if (question.locked || question.disabled) classes.push("is-disabled");
      return `<button class="${classes.join(" ")}">${option}</button>`;
    })
    .join("");

  const distribution = question.distribution
    ? `<div class="distribution">${question.distribution
        .map(
          ([label, value]) => `
            <div class="distribution-row">
              <span>${label}</span>
              <span>${value}%</span>
            </div>
            <div class="bar"><span style="width:${value}%"></span></div>
          `
        )
        .join("")}</div>`
    : "";

  const settle =
    mode === "settled"
      ? `<div class="settle-box">
          <div class="settle-row"><span>我的选择</span><strong>${question.selected != null ? question.options[question.selected] : "未参与"}</strong></div>
          <div class="settle-row"><span>正确答案</span><strong>${question.answer}</strong></div>
        </div>`
      : "";

  return `
    <div class="question-block">
      <p class="question-title">${question.title}</p>
      <div class="option-row">${options}</div>
      ${distribution}
      ${settle}
    </div>
  `;
}

function renderMatches(mode) {
  const data = stateData[mode];
  if (!data.length) {
    matchList.innerHTML = `
      <div class="empty-state glass-card">
        <div>
          <h3>今日暂无比赛</h3>
          <p>可以先查看达人榜，或等明日赛程开放后继续预测。</p>
        </div>
      </div>
    `;
    return;
  }

  matchList.innerHTML = data
    .map(
      (match) => `
        <article class="match-card glass-card ${match.cancelled ? "cancelled" : ""}">
          <div class="match-head">
            <div>
              <strong>${match.round}</strong>
              <div class="assist-text">${match.time}</div>
            </div>
            <div class="match-meta">
              <span class="pill ${match.statusClass}">${match.status}</span>
              <span class="pill">${match.note}</span>
            </div>
          </div>
          <div class="teams">
            <div class="team-row">
              <div class="team"><span class="badge">${match.home.slice(0, 1)}</span><strong>${match.home}</strong></div>
              <div class="score">${match.score}</div>
              <div class="team"><strong>${match.away}</strong><span class="badge">${match.away.slice(0, 1)}</span></div>
            </div>
          </div>
          <div class="questions">${match.questions.map((question) => renderQuestions(question, mode)).join("")}</div>
          <div class="card-foot">
            <span class="assist-text">${match.footNote}</span>
            <button class="cta-btn">${match.action}</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRanks(mode) {
  rankList.innerHTML = rankData[mode]
    .map(
      ([rank, name, meta]) => `
        <div class="rank-row">
          <div class="rank-index">${rank}</div>
          <div><strong>${name}</strong><span>${meta}</span></div>
          <div><span>较昨日</span><strong>+1</strong></div>
        </div>
      `
    )
    .join("");
}

function activateScreen(target) {
  screenButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.screen === target));
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === target));
}

stateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    stateButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderMatches(button.dataset.state);
  });
});

screenButtons.forEach((button) => {
  button.addEventListener("click", () => activateScreen(button.dataset.screen));
});

rankTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    rankTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderRanks(tab.dataset.rankTab);
  });
});

renderMatches("predictable");
renderRanks("daily");
