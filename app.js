const D = ALLIANCE_DATA;

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

/* ==================================================
   LANGUAGE
================================================== */

const translations = {
  ja: {
    nav: {
      games: "試合",
      standings: "順位表",
      schedule: "時間表",
      leagues: "リーグ",
      about: "AHBA紹介",
      admin: "管理"
    },

    hero: {
      title: "アジアのHCBBを、<br><span>ひとつのスコアボードへ。</span>",
      description:
        "試合結果、順位、各リーグの試合時間をひとつのサイトで確認できる Asia HCBB Baseball Alliance 公式ポータル。",
      games: "試合を見る",
      schedule: "時間表"
    },

    next: {
      title: "NEXT GAME",
      none: "次の試合はありません。"
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "試合結果・予定"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "順位表"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "リーグ時間表",
      timezone: "表示タイムゾーン："
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "リーグ紹介",
      view: "リーグページを見る"
    },

    about: {
      eyebrow: "ABOUT AHBA",
      title: "アジアのHCBBを、<br><span>ひとつにつなぐ。</span>",
      description:
        "Asia HCBB Baseball Alliance（AHBA）は、アジア各地域のHCBBコミュニティをつなぎ、試合・リーグ・大会・交流の情報を共有するためのAllianceです。",
      button: "AHBAについて詳しく見る →"
    },

    filter: {
      allLeagues: "全リーグ",
      all: "全試合",
      upcoming: "予定",
      finished: "終了"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "日本",
      korea: "韓国",
      taiwan: "台湾",
      china: "中国",
      newYork: "ニューヨーク"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "試合終了",
      scheduled: "試合予定",

      international: "国際試合",
      friendly: "親善試合",
      tournament: "大会",
      ahba: "AHBA主催",

      noGames: "該当する試合がありません。",
      detail: "試合詳細 →",

      win: "勝利投手",
      loss: "敗戦投手",
      save: "セーブ",
      hold: "ホールド"
    },

    gameType: {
      international: "国際試合",
      friendly: "親善試合",
      tournament: "大会",
      ahba: "AHBA主催"
    },

    scheduleStatus: {
      finished: "終了",
      upcoming: "予定"
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }
  },


  /* ==================================================
     KOREAN
  ================================================== */

  ko: {
    nav: {
      games: "경기",
      standings: "순위표",
      schedule: "일정",
      leagues: "리그",
      about: "AHBA 소개",
      admin: "관리"
    },

    hero: {
      title: "아시아 HCBB를,<br><span>하나의 스코어보드로.</span>",
      description:
        "경기 결과, 순위, 각 리그의 경기 일정을 한 곳에서 확인할 수 있는 Asia HCBB Baseball Alliance 공식 포털입니다.",
      games: "경기 보기",
      schedule: "경기 일정"
    },

    next: {
      title: "NEXT GAME",
      none: "예정된 다음 경기가 없습니다."
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "경기 결과・일정"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "순위표"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "리그 일정",
      timezone: "표시 시간대："
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "리그 소개",
      view: "리그 페이지 보기"
    },

    about: {
      eyebrow: "ABOUT AHBA",
      title: "아시아 HCBB를,<br><span>하나로 연결합니다.</span>",
      description:
        "Asia HCBB Baseball Alliance（AHBA）는 아시아 각 지역의 HCBB 커뮤니티를 연결하고 경기・리그・대회・교류 정보를 공유하는 Alliance입니다.",
      button: "AHBA 자세히 보기 →"
    },

    filter: {
      allLeagues: "전체 리그",
      all: "전체 경기",
      upcoming: "예정",
      finished: "종료"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "일본",
      korea: "한국",
      taiwan: "대만",
      china: "중국",
      newYork: "뉴욕"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "경기 종료",
      scheduled: "경기 예정",

      international: "국제 경기",
      friendly: "친선 경기",
      tournament: "대회",
      ahba: "AHBA 주최",

      noGames: "해당 경기가 없습니다.",
      detail: "경기 상세 →",

      win: "승리 투수",
      loss: "패전 투수",
      save: "세이브",
      hold: "홀드"
    },

    gameType: {
      international: "국제 경기",
      friendly: "친선 경기",
      tournament: "대회",
      ahba: "AHBA 주최"
    },

    scheduleStatus: {
      finished: "종료",
      upcoming: "예정"
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }
  },


  /* ==================================================
     ENGLISH
  ================================================== */

  en: {
    nav: {
      games: "Games",
      standings: "Standings",
      schedule: "Schedule",
      leagues: "Leagues",
      about: "ABOUT AHBA",
      admin: "Admin"
    },

    hero: {
      title: "Asia's HCBB,<br><span>one scoreboard.</span>",
      description:
        "The official Asia HCBB Baseball Alliance portal for game results, standings and league schedules.",
      games: "View Games",
      schedule: "Schedule"
    },

    next: {
      title: "NEXT GAME",
      none: "No upcoming games."
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "Results & Fixtures"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "Standings"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "League Schedule",
      timezone: "Timezone: "
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "League Introduction",
      view: "VIEW LEAGUE"
    },

    about: {
      eyebrow: "ABOUT AHBA",
      title: "Connecting Asia's HCBB,<br><span>as one.</span>",
      description:
        "Asia HCBB Baseball Alliance（AHBA）connects HCBB communities across Asia and shares information about games, leagues, tournaments and community events.",
      button: "LEARN MORE ABOUT AHBA →"
    },

    filter: {
      allLeagues: "All Leagues",
      all: "All Games",
      upcoming: "Upcoming",
      finished: "Finished"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "Japan",
      korea: "Korea",
      taiwan: "Taiwan",
      china: "China",
      newYork: "New York"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "Final",
      scheduled: "Scheduled",

      international: "International",
      friendly: "Friendly",
      tournament: "Tournament",
      ahba: "AHBA Hosted",

      noGames: "No games found.",
      detail: "GAME DETAILS →",

      win: "Win",
      loss: "Loss",
      save: "Save",
      hold: "Hold"
    },

    gameType: {
      international: "International",
      friendly: "Friendly",
      tournament: "Tournament",
      ahba: "AHBA Hosted"
    },

    scheduleStatus: {
      finished: "Finished",
      upcoming: "Upcoming"
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }
  },


  /* ==================================================
     CHINESE
  ================================================== */

  zh: {
    nav: {
      games: "比赛",
      standings: "排名",
      schedule: "赛程",
      leagues: "联赛",
      about: "关于 AHBA",
      admin: "管理"
    },

    hero: {
      title: "亚洲 HCBB，<br><span>汇聚于一个记分板。</span>",
      description:
        "Asia HCBB Baseball Alliance 官方门户，提供比赛结果、排名和各联赛赛程。",
      games: "查看比赛",
      schedule: "赛程"
    },

    next: {
      title: "NEXT GAME",
      none: "暂无下一场比赛。"
    },

    games: {
      eyebrow: "MATCH CENTER",
      title: "比赛结果・赛程"
    },

    standings: {
      eyebrow: "STANDINGS",
      title: "排名"
    },

    schedule: {
      eyebrow: "TIME TABLE",
      title: "联赛赛程",
      timezone: "显示时区："
    },

    leagues: {
      eyebrow: "LEAGUE INTRODUCTION",
      title: "联赛介绍",
      view: "查看联赛页面"
    },

    about: {
      eyebrow: "ABOUT AHBA",
      title: "连接亚洲 HCBB，<br><span>汇聚于一个联盟。</span>",
      description:
        "Asia HCBB Baseball Alliance（AHBA）连接亚洲各地区的 HCBB 社区，并共享比赛、联赛、赛事与交流活动信息。",
      button: "了解 AHBA →"
    },

    filter: {
      allLeagues: "所有联赛",
      all: "所有比赛",
      upcoming: "即将进行",
      finished: "已结束"
    },

    table: {
      team: "TEAM"
    },

    country: {
      japan: "日本",
      korea: "韩国",
      taiwan: "台湾",
      china: "中国",
      newYork: "纽约"
    },

    game: {
      final: "FINAL",
      upcoming: "UPCOMING",
      finished: "比赛结束",
      scheduled: "比赛预定",

      international: "国际比赛",
      friendly: "友谊赛",
      tournament: "赛事",
      ahba: "AHBA主办",

      noGames: "暂无比赛。",
      detail: "比赛详情 →",

      win: "胜投",
      loss: "败投",
      save: "救援",
      hold: "中继成功"
    },

    gameType: {
      international: "国际比赛",
      friendly: "友谊赛",
      tournament: "赛事",
      ahba: "AHBA主办"
    },

    scheduleStatus: {
      finished: "结束",
      upcoming: "预定"
    },

    footer: {
      subtitle: "Community・Competition・Connection"
    }
  }
};


/* ==================================================
   CURRENT LANGUAGE
================================================== */

let currentLanguage =
  localStorage.getItem("asiaHCBBLanguage") || "ja";


function t(path) {
  const parts = path.split(".");
  let value = translations[currentLanguage];

  for (const part of parts) {
    value = value?.[part];
  }

  return value || path;
}


/* ==================================================
   MULTILINGUAL DATA
   [object Object] 対策
================================================== */

function getLocalized(value, fallback = "") {
  if (value == null) return fallback;

  if (typeof value !== "object") {
    return String(value);
  }

  return (
    value[currentLanguage] ||
    value.en ||
    value.ja ||
    fallback
  );
}


/*
  チーム名などが

  {
    ja: "日本",
    ko: "일본",
    en: "Japan",
    zh: "日本"
  }

  の場合でも安全に表示する。
*/

function displayText(value, fallback = "—") {
  if (value == null) return fallback;

  if (typeof value === "object") {
    return getLocalized(value, fallback);
  }

  return String(value);
}


/* ==================================================
   LANGUAGE APPLY
================================================== */

function applyLanguage(lang) {
  if (!translations[lang]) {
    lang = "ja";
  }

  currentLanguage = lang;

  localStorage.setItem(
    "asiaHCBBLanguage",
    lang
  );

  document.documentElement.lang = lang;


  $$("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });


  $$("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });


  $$(
  '.language-switcher button, .header-language button'
).forEach(button => {

  button.classList.toggle(
    "active",
    button.dataset.lang === lang
  );

});


  updateFilterTexts();
  renderGames();
  renderStandings();
  renderSchedule();
  renderNextGame();
  renderLeagues();
  updateClock();
}


/* ==================================================
   HTML ESCAPE
================================================== */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* ==================================================
   LEAGUE
================================================== */

function leagueName(id) {
  const league =
    D.leagues?.find(x => x.id === id);

  if (!league) {
    return id || "";
  }

  return getLocalized(
    league.name,
    league.id
  );
}


/* ==================================================
   GAME LABEL
================================================== */

function gameLabel(game) {

  if (game.title) {
    return getLocalized(
      game.title,
      game.id || ""
    );
  }

  if (game.league) {
    return leagueName(game.league);
  }

  if (
    game.type &&
    translations[currentLanguage]?.gameType?.[game.type]
  ) {
    return t(`gameType.${game.type}`);
  }

  return t("gameType.ahba");
}


/* ==================================================
   GAME DETAIL
================================================== */

function getDetail(game) {
  return (
    game?.detail ||
    game?.details ||
    null
  );
}


function getPitching(game) {
  const detail = getDetail(game);

  return (
    detail?.pitching ||
    game?.pitching ||
    {}
  );
}


function getHomeRuns(game) {
  const detail = getDetail(game);

  return (
    detail?.homeRuns ||
    game?.homeRuns ||
    []
  );
}


function hasGameDetail(game) {
  return !!(
    game?.id ||
    getDetail(game) ||
    getPitching(game)?.win ||
    getPitching(game)?.loss ||
    getPitching(game)?.save ||
    getPitching(game)?.holds?.length ||
    getHomeRuns(game).length
  );
}


function gameDetailUrl(game) {
  if (!game?.id) {
    return "game.html";
  }

  return `game.html?id=${encodeURIComponent(game.id)}`;
}


/* ==================================================
   PITCHER SUMMARY
================================================== */

function formatPitcherSummary(game) {

  const p = getPitching(game);

  const parts = [];

  if (p.win) {
    parts.push(
      `${t("game.win")} ${escapeHtml(
        displayText(p.win)
      )}`
    );
  }

  if (p.loss) {
    parts.push(
      `${t("game.loss")} ${escapeHtml(
        displayText(p.loss)
      )}`
    );
  }

  if (p.save) {
    parts.push(
      `${t("game.save")} ${escapeHtml(
        displayText(p.save)
      )}`
    );
  }

  return parts;
}


/* ==================================================
   FILTER
================================================== */

function updateFilterTexts() {

  const currentStatus =
    $("#statusFilter")?.value || "all";


  if ($("#leagueFilter")) {

    $("#leagueFilter").innerHTML = `
      <option value="all">
        ${t("filter.allLeagues")}
      </option>
    `;

    $("#leagueFilter").value = "all";
  }


  if ($("#statusFilter")) {

    $("#statusFilter").innerHTML = `
      <option value="all">
        ${t("filter.all")}

      </option>

      <option value="upcoming">
        ${t("filter.upcoming")}

      </option>

      <option value="finished">
        ${t("filter.finished")}

      </option>
    `;

    $("#statusFilter").value =
      currentStatus;
  }


  if ($("#standingsLeague")) {

    $("#standingsLeague").innerHTML = `
      <option value="ahba">
        ${t("nav.standings")}
      </option>
    `;

    $("#standingsLeague").value = "ahba";
  }
}


/* ==================================================
   TIMEZONE
================================================== */

let currentZone = "Asia/Tokyo";


const zoneNames = {

  "Asia/Tokyo": {
    ja: "日本",
    ko: "일본",
    en: "Japan",
    zh: "日本"
  },

  "Asia/Seoul": {
    ja: "韓国",
    ko: "한국",
    en: "Korea",
    zh: "韩国"
  },

  "Asia/Taipei": {
    ja: "台湾",
    ko: "대만",
    en: "Taiwan",
    zh: "台湾"
  },

  "Asia/Shanghai": {
    ja: "中国",
    ko: "중국",
    en: "China",
    zh: "中国"
  },

  "America/New_York": {
    ja: "ニューヨーク",
    ko: "뉴욕",
    en: "New York",
    zh: "纽约"
  }

};


function localeName() {

  if (currentLanguage === "ja") {
    return "ja-JP";
  }

  if (currentLanguage === "ko") {
    return "ko-KR";
  }

  if (currentLanguage === "zh") {
    return "zh-CN";
  }

  return "en-US";
}


function fmtDate(
  iso,
  zone = currentZone
) {

  if (!iso) return "—";

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat(
    localeName(),
    {
      timeZone: zone,
      month: "numeric",
      day: "numeric",
      weekday: "short"
    }
  ).format(date);
}


function fmtTime(
  iso,
  zone = currentZone
) {

  if (!iso) return "—";

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat(
    localeName(),
    {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }
  ).format(date);
}


/* ==================================================
   CLOCK
================================================== */

function updateClock() {

  const zone =
    zoneNames[currentZone]
      ? currentZone
      : "Asia/Tokyo";


  const name =
    zoneNames[zone]?.[currentLanguage] ||
    zoneNames[zone]?.ja ||
    zone;


  if ($("#clock")) {

    $("#clock").textContent =
      new Intl.DateTimeFormat(
        localeName(),
        {
          timeZone: zone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }
      ).format(new Date());
  }


  if ($("#tz")) {
    $("#tz").textContent = name;
  }
}


/* ==================================================
   NEXT GAME
================================================== */

function renderNextGame() {

  const games =
    Array.isArray(D.games)
      ? D.games
      : [];


  const game =
    [...games]
      .filter(
        g => g.status === "upcoming"
      )
      .sort(
        (a, b) =>
          new Date(a.time) -
          new Date(b.time)
      )[0];


  if (!game) {

    if ($("#nextGame")) {
      $("#nextGame").innerHTML =
        t("next.none");
    }

    if ($("#tickerText")) {
      $("#tickerText").textContent =
        t("next.none");
    }

    return;
  }


  const label =
    gameLabel(game);


  if ($("#nextGame")) {

    $("#nextGame").innerHTML = `

      <div class="next-time">
        ${escapeHtml(
          fmtTime(game.time)
        )}
      </div>

      <div class="next-date">
        ${escapeHtml(
          fmtDate(game.time)
        )}
        ・
        ${escapeHtml(label)}
      </div>

      <div class="matchup">

        <div class="team">
          ${escapeHtml(
            displayText(game.home)
          )}
        </div>

        <div class="vs">
          VS
        </div>

        <div class="team">
          ${escapeHtml(
            displayText(game.away)
          )}
        </div>

      </div>
    `;
  }


  if ($("#tickerText")) {

    $("#tickerText").textContent =
      `${label} — ` +
      `${displayText(game.home)} vs ` +
      `${displayText(game.away)} / ` +
      `${fmtDate(game.time)} ` +
      `${fmtTime(game.time)}`;
  }
}


/* ==================================================
   GAMES
================================================== */

function renderGames() {

  if (!$("#gamesGrid")) {
    return;
  }


  const status =
    $("#statusFilter")?.value ||
    "all";


  const games =
    [...(D.games || [])]
      .filter(
        game =>
          status === "all" ||
          game.status === status
      )
      .sort((a, b) => {

        if (
          a.status === "finished" &&
          b.status !== "finished"
        ) {
          return 1;
        }

        if (
          a.status !== "finished" &&
          b.status === "finished"
        ) {
          return -1;
        }

        return (
          new Date(a.time) -
          new Date(b.time)
        );
      });


  if (!games.length) {

    $("#gamesGrid").innerHTML =
      `<p>${t("game.noGames")}</p>`;

    return;
  }


  $("#gamesGrid").innerHTML =
    games.map(game => {

      const pitching =
        formatPitcherSummary(game);


      const detailLink =
        hasGameDetail(game)
          ? `
            <a
              class="primary-button game-detail-button"
              href="${gameDetailUrl(game)}"
            >
              ${t("game.detail")}
            </a>
          `
          : "";


      return `

        <article class="game">

          <div class="game-top">

            <span class="league-tag">

              ${escapeHtml(
                gameLabel(game)
              )}

              ${
                game.round
                  ? `・${escapeHtml(
                      displayText(
                        game.round
                      )
                    )}`
                  : ""
              }

            </span>


            <span
              class="game-status
              ${escapeHtml(
                game.status || ""
              )}"
            >
              ${
                game.status === "finished"
                  ? t("game.final")
                  : t("game.upcoming")
              }
            </span>

          </div>


          <div class="scoreline">

            <div>

              <div class="score-label">
                ${escapeHtml(
                  displayText(game.home)
                )}
              </div>

              <div class="score">
                ${game.homeScore ?? "—"}
              </div>

            </div>


            <div class="dash">
              –
            </div>


            <div>

              <div class="score-label">
                ${escapeHtml(
                  displayText(game.away)
                )}
              </div>

              <div class="score">
                ${game.awayScore ?? "—"}
              </div>

            </div>

          </div>


          ${
            pitching.length
              ? `
                <div class="game-pitching">
                  ${pitching
                    .map(
                      x =>
                        `<div>${x}</div>`
                    )
                    .join("")}
                </div>
              `
              : ""
          }


          <div class="game-foot">

            <span>
              ${escapeHtml(
                fmtDate(game.time)
              )}
              ${escapeHtml(
                fmtTime(game.time)
              )}
            </span>

            <span>
              ${
                game.status === "finished"
                  ? t("game.finished")
                  : t("game.scheduled")
              }
            </span>

          </div>


          ${detailLink}

        </article>
      `;

    }).join("");
}


/* ==================================================
   STANDINGS
================================================== */

function buildStandings() {

  const standings =
    D.standings?.current;


  return Array.isArray(standings)
    ? standings
    : [];
}


function renderStandings() {

  if (!$("#standingsBody")) {
    return;
  }


  const rows =
    buildStandings();


  $("#standingsBody").innerHTML =
    rows.length

      ? rows.map(
          (row, index) => {

            const pct =
              row.g
                ? row.w / row.g
                : 0;


            const diff =
              (row.rs ?? 0) -
              (row.ra ?? 0);


            return `

              <tr>

                <td>
                  ${index + 1}
                </td>

                <td>
                  ${escapeHtml(
                    displayText(
                      row.team
                    )
                  )}
                </td>

                <td>
                  ${row.g ?? 0}
                </td>

                <td>
                  ${row.w ?? 0}
                </td>

                <td>
                  ${row.l ?? 0}
                </td>

                <td>
                  ${
                    row.g
                      ? pct
                          .toFixed(3)
                          .replace(
                            "0.",
                            "."
                          )
                      : "—"
                  }
                </td>

                <td>
                  ${row.rs ?? 0}
                </td>

                <td>
                  ${row.ra ?? 0}
                </td>

                <td>
                  ${
                    diff > 0
                      ? "+"
                      : ""
                  }${diff}
                </td>

              </tr>
            `;
          }
        ).join("")

      : `
          <tr>
            <td colspan="9">
              ${t("game.noGames")}
            </td>
          </tr>
        `;
}


/* ==================================================
   SCHEDULE
================================================== */

let currentScheduleStatus = "upcoming";


function renderSchedule() {

  if (!$("#scheduleList")) return;


  const allGames = Array.isArray(D.games)
    ? [...D.games]
    : [];


  /* ------------------------------
     予定
  ------------------------------ */

  const upcomingGames = allGames
    .filter(game => game.status !== "finished")
    .sort(
      (a, b) =>
        new Date(a.time) - new Date(b.time)
    );


  /* ------------------------------
     終了
  ------------------------------ */

  const finishedGames = allGames
    .filter(game => game.status === "finished")
    .sort(
      (a, b) =>
        new Date(b.time) - new Date(a.time)
    );


  /* ------------------------------
     件数
  ------------------------------ */

  if ($("#scheduleUpcomingCount")) {

    $("#scheduleUpcomingCount").textContent =
      upcomingGames.length;

  }


  if ($("#scheduleFinishedCount")) {

    $("#scheduleFinishedCount").textContent =
      finishedGames.length;

  }


  /* ------------------------------
     現在表示する試合
  ------------------------------ */

  const games =
    currentScheduleStatus === "finished"
      ? finishedGames
      : upcomingGames;


  /* ------------------------------
     試合なし
  ------------------------------ */

  if (!games.length) {

    $("#scheduleList").innerHTML = `

      <div class="schedule-empty">

        <div class="schedule-empty-icon">

          ${
            currentScheduleStatus === "finished"
              ? "✓"
              : "○"
          }

        </div>

        <p>
          ${t("game.noGames")}
        </p>

      </div>

    `;

  }

  else {

    $("#scheduleList").innerHTML =

      games.map(game => `

        <div class="schedule-item">

          <!-- TIME -->

          <div class="schedule-time">

            <div class="sched-time">

              ${escapeHtml(
                fmtTime(game.time)
              )}

            </div>

            <div class="sched-date">

              ${escapeHtml(
                fmtDate(game.time)
              )}

            </div>

          </div>


          <!-- MATCH -->

          <div class="schedule-match-info">

            <div class="sched-league">

              ${escapeHtml(
                gameLabel(game)
              )}

            </div>


            <div class="sched-match-teams">

              <strong>

                ${escapeHtml(
                  getLocalized(
                    game.home,
                    "—"
                  )
                )}

              </strong>


              <span class="schedule-vs">
                VS
              </span>


              <strong>

                ${escapeHtml(
                  getLocalized(
                    game.away,
                    "—"
                  )
                )}

              </strong>

            </div>

          </div>


          <!-- STATUS -->

          <div
            class="sched-status ${currentScheduleStatus}"
          >

            <span class="status-dot"></span>

            ${
              currentScheduleStatus === "finished"
                ? t("scheduleStatus.finished")
                : t("scheduleStatus.upcoming")
            }

          </div>

        </div>

      `).join("");

  }


  /* ------------------------------
     TIMEZONE
  ------------------------------ */

  if ($("#zoneLabel")) {

    const zone =
      zoneNames[currentZone];

    $("#zoneLabel").textContent =
      zone?.[currentLanguage]
      ||
      zone?.ja
      ||
      currentZone;

  }

}


/* ==================================================
   SCHEDULE STATUS TABS
================================================== */

function setupScheduleTabs() {

  $$("[data-schedule-status]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          currentScheduleStatus =
            button.dataset.scheduleStatus;


          /*
           * active切り替え
           */

          $$("[data-schedule-status]")
            .forEach(tab => {

              tab.classList.toggle(
                "active",
                tab.dataset.scheduleStatus ===
                currentScheduleStatus
              );

            });


          renderSchedule();

        }
      );

    });

}


/* ==================================================
   LEAGUES
================================================== */

function renderLeagues() {

  if (!$("#leagueCards")) {
    return;
  }


  const leagues =
    Array.isArray(D.leagues)
      ? D.leagues
      : [];


  $("#leagueCards").innerHTML =
    leagues.map(league => {

      const name =
        getLocalized(
          league.name,
          league.id
        );


      const country =
        getLocalized(
          league.country,
          ""
        );


      const description =
        getLocalized(
          league.description,
          ""
        );


      return `

        <a
          href="league.html?id=${encodeURIComponent(
            league.id
          )}"
          class="league-card league-link"
        >

          <div class="league-code">
            ${escapeHtml(
              league.id
            )}
          </div>

          <h3>
            ${escapeHtml(name)}
          </h3>

          <p>
            ${escapeHtml(country)}
            <br>
            ${escapeHtml(description)}
          </p>

          <div class="league-view">

            <span>
              ${t("leagues.view")}
            </span>

            <span>
              →
            </span>

          </div>

        </a>
      `;

    }).join("");
}


/* ==================================================
   LANGUAGE BUTTONS
================================================== */

$$(
  ".language-switcher button"
).forEach(button => {

  button.addEventListener(
    "click",
    () => {
      applyLanguage(
        button.dataset.lang
      );
    }
  );

});


/* ==================================================
   EVENTS
================================================== */


/* LANGUAGE */

$$(
  '.language-switcher button, .header-language button'
).forEach(button => {

  button.addEventListener(
    "click",
    () => {

      applyLanguage(
        button.dataset.lang
      );

    }
  );

});


/* MATCH CENTER */

$("#leagueFilter")?.addEventListener(
  "change",
  renderGames
);

$("#statusFilter")?.addEventListener(
  "change",
  renderGames
);

$("#standingsLeague")?.addEventListener(
  "change",
  renderStandings
);


/* ==================================================
   SCHEDULE STATUS TABS
================================================== */

$$("[data-schedule-status]").forEach(button => {

  button.addEventListener(
    "click",
    () => {

      currentScheduleStatus =
        button.dataset.scheduleStatus;


      $$("[data-schedule-status]")
        .forEach(tab => {

          tab.classList.toggle(
            "active",
            tab.dataset.scheduleStatus ===
              currentScheduleStatus
          );

        });


      renderSchedule();

    }
  );

});


/* ==================================================
   TIMEZONE
================================================== */

$$(".timezone-tabs button").forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const selectedZone =
        button.dataset.zone;


      if (!zoneNames[selectedZone]) {
        return;
      }


      currentZone =
        selectedZone;


      $$(".timezone-tabs button")
        .forEach(btn => {

          btn.classList.toggle(
            "active",
            btn.dataset.zone ===
              currentZone
          );

        });


      updateClock();

      renderSchedule();

      renderNextGame();

    }
  );

});


/* ==================================================
   START
================================================== */

function init() {

  updateFilterTexts();

  renderGames();

  renderStandings();

  renderSchedule();

  renderNextGame();

  renderLeagues();

  applyLanguage(
    currentLanguage
  );

  updateClock();

  setupScheduleTabs();
   
}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}


setInterval(
  updateClock,
  1000
);
