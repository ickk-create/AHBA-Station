/* =========================================================
   Asia HCBB Baseball Alliance
   game.js
   ========================================================= */

(() => {
  "use strict";


  /* =========================================================
     DATA
     ========================================================= */

  const D = window.ALLIANCE_DATA || {
    games: [],
    leagues: []
  };


  /* =========================================================
     LANGUAGE
     ========================================================= */

  const LANGS = ["ja", "ko", "en", "zh"];

  let currentLang =
    localStorage.getItem("asiaHCBBLanguage") || "ja";


  const LANGUAGE_CONFIG = {
    ja: {
      zone: "Asia/Tokyo",
      timezoneLabel: "JST"
    },

    ko: {
      zone: "Asia/Seoul",
      timezoneLabel: "KST"
    },

    en: {
      zone: "America/New_York",
      timezoneLabel: "ET"
    },

    zh: {
      zone: "Asia/Taipei",
      timezoneLabel: "TST"
    }
  };


  /* =========================================================
     I18N
     ========================================================= */

  const I18N = {

    ja: {
      "nav.games": "試合結果",
      "nav.standings": "順位表",
      "nav.schedule": "試合日程",
      "nav.leagues": "参加リーグ",
      "nav.about": "AHBAについて",

      "game.detail": "試合詳細",
      "game.boxScore": "試合結果",
      "game.innings": "イニング別得点",
      "game.pitching": "投手成績",
      "game.notes": "備考",

      "game.international": "国際試合",
      "game.friendly": "交流試合",
      "game.tournament": "大会",
      "game.other": "その他",

      "status.scheduled": "予定",
      "status.live": "試合中",
      "status.finished": "終了",

      "common.home": "HOME",
      "common.away": "AWAY",
      "common.vs": "VS",

      "pitching.win": "勝利投手",
      "pitching.loss": "敗戦投手",
      "pitching.save": "セーブ",
      "pitching.holds": "ホールド",

      "innings.inning": "回",
      "innings.total": "計",

      "game.notFound": "試合が見つかりません。",
      "game.noDetails": "詳細情報はありません。",
      "game.noPitching": "投手成績はありません。",
      "game.noInnings": "イニング別得点はありません。"
    },


    ko: {
      "nav.games": "경기 결과",
      "nav.standings": "순위표",
      "nav.schedule": "경기 일정",
      "nav.leagues": "참가 리그",
      "nav.about": "AHBA 소개",

      "game.detail": "경기 상세",
      "game.boxScore": "경기 결과",
      "game.innings": "이닝별 득점",
      "game.pitching": "투수 기록",
      "game.notes": "비고",

      "game.international": "국제 경기",
      "game.friendly": "교류 경기",
      "game.tournament": "대회",
      "game.other": "기타",

      "status.scheduled": "예정",
      "status.live": "진행 중",
      "status.finished": "종료",

      "common.home": "HOME",
      "common.away": "AWAY",
      "common.vs": "VS",

      "pitching.win": "승리 투수",
      "pitching.loss": "패전 투수",
      "pitching.save": "세이브",
      "pitching.holds": "홀드",

      "innings.inning": "이닝",
      "innings.total": "합계",

      "game.notFound": "경기를 찾을 수 없습니다.",
      "game.noDetails": "상세 정보가 없습니다.",
      "game.noPitching": "투수 기록이 없습니다.",
      "game.noInnings": "이닝별 득점 기록이 없습니다."
    },


    en: {
      "nav.games": "Games",
      "nav.standings": "Standings",
      "nav.schedule": "Schedule",
      "nav.leagues": "Leagues",
      "nav.about": "About AHBA",

      "game.detail": "Game Details",
      "game.boxScore": "Box Score",
      "game.innings": "Innings",
      "game.pitching": "Pitching",
      "game.notes": "Notes",

      "game.international": "International",
      "game.friendly": "Friendly",
      "game.tournament": "Tournament",
      "game.other": "Other",

      "status.scheduled": "Scheduled",
      "status.live": "Live",
      "status.finished": "Finished",

      "common.home": "HOME",
      "common.away": "AWAY",
      "common.vs": "VS",

      "pitching.win": "Win",
      "pitching.loss": "Loss",
      "pitching.save": "Save",
      "pitching.holds": "Holds",

      "innings.inning": "Inn",
      "innings.total": "Total",

      "game.notFound": "Game not found.",
      "game.noDetails": "No additional details are available.",
      "game.noPitching": "No pitching information is available.",
      "game.noInnings": "No inning-by-inning information is available."
    },


    /* =======================================================
       繁體中文
       ======================================================= */

    zh: {
      "nav.games": "賽事結果",
      "nav.standings": "排名",
      "nav.schedule": "賽程",
      "nav.leagues": "參賽聯盟",
      "nav.about": "關於 AHBA",

      "game.detail": "賽事詳情",
      "game.boxScore": "比賽結果",
      "game.innings": "各局得分",
      "game.pitching": "投手成績",
      "game.notes": "備註",

      "game.international": "國際賽",
      "game.friendly": "交流賽",
      "game.tournament": "錦標賽",
      "game.other": "其他",

      "status.scheduled": "預定",
      "status.live": "進行中",
      "status.finished": "已結束",

      "common.home": "主隊",
      "common.away": "客隊",
      "common.vs": "VS",

      "pitching.win": "勝投",
      "pitching.loss": "敗投",
      "pitching.save": "救援",
      "pitching.holds": "中繼",

      "innings.inning": "局",
      "innings.total": "總計",

      "game.notFound": "找不到此賽事。",
      "game.noDetails": "目前沒有詳細資訊。",
      "game.noPitching": "目前沒有投手成績。",
      "game.noInnings": "目前沒有各局得分資料。"
    }
  };


  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHTML(value) {
    if (
      value === null ||
      value === undefined
    ) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function getLocalized(value) {
    if (
      value === null ||
      value === undefined
    ) {
      return "";
    }

    if (
      typeof value === "string" ||
      typeof value === "number"
    ) {
      return String(value);
    }

    if (typeof value === "object") {
      return (
        value[currentLang] ??
        value.ja ??
        value.en ??
        value.ko ??
        value.zh ??
        Object.values(value)[0] ??
        ""
      );
    }

    return String(value);
  }


  function t(key) {
    return (
      I18N[currentLang]?.[key] ??
      I18N.ja?.[key] ??
      key
    );
  }


  /* =========================================================
     GAME
     ========================================================= */

  function getGameId() {
    const params =
      new URLSearchParams(
        window.location.search
      );

    return params.get("id");
  }


  function getGame() {
    const id = getGameId();

    if (!id) {
      return null;
    }

    if (!Array.isArray(D.games)) {
      return null;
    }

    return (
      D.games.find(
        game => String(game.id) === String(id)
      ) || null
    );
  }


  function getHome(game) {
    return getLocalized(game?.home);
  }


  function getAway(game) {
    return getLocalized(game?.away);
  }


  function getEventName(game) {
    if (game?.eventName) {
      return getLocalized(game.eventName);
    }

    const type =
      game?.type ||
      game?.category ||
      "other";

    const map = {
      international: "game.international",
      friendly: "game.friendly",
      tournament: "game.tournament",
      other: "game.other"
    };

    return t(
      map[type] ||
      "game.other"
    );
  }


  function getRound(game) {
    return getLocalized(
      game?.round ??
      game?.matchday ??
      ""
    );
  }


  function getStatusLabel(game) {
    const status =
      game?.status ||
      "scheduled";

    const map = {
      scheduled: "status.scheduled",
      live: "status.live",
      finished: "status.finished"
    };

    return t(
      map[status] ||
      status
    );
  }


  /* =========================================================
     DATE / TIME
     ========================================================= */

  function getZone() {
    return (
      LANGUAGE_CONFIG[currentLang]?.zone ||
      "Asia/Tokyo"
    );
  }


  function formatDate(value) {
    if (!value) {
      return "";
    }

    const date =
      new Date(value);

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "";
    }

    const locale =
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
          ? "ko-KR"
          : currentLang === "zh"
            ? "zh-TW"
            : "en-US";


    return new Intl.DateTimeFormat(
      locale,
      {
        timeZone: getZone(),
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }
    ).format(date);
  }


  function formatTime(value) {
    if (!value) {
      return "";
    }

    const date =
      new Date(value);

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "";
    }

    const locale =
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
          ? "ko-KR"
          : currentLang === "zh"
            ? "zh-TW"
            : "en-US";


    return new Intl.DateTimeFormat(
      locale,
      {
        timeZone: getZone(),
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }
    ).format(date);
  }


  function formatDateTime(value) {
    if (!value) {
      return "";
    }

    return `${formatDate(value)} ${formatTime(value)}`;
  }


  /* =========================================================
     SCORE
     ========================================================= */

  function getHomeScore(game) {
    if (
      game?.homeScore !== undefined &&
      game?.homeScore !== null
    ) {
      return game.homeScore;
    }

    if (
      game?.score?.home !== undefined &&
      game?.score?.home !== null
    ) {
      return game.score.home;
    }

    return null;
  }


  function getAwayScore(game) {
    if (
      game?.awayScore !== undefined &&
      game?.awayScore !== null
    ) {
      return game.awayScore;
    }

    if (
      game?.score?.away !== undefined &&
      game?.score?.away !== null
    ) {
      return game.score.away;
    }

    return null;
  }


  /* =========================================================
     HEADER
     ========================================================= */

  function renderHeader(game) {
    const title =
      document.getElementById("gameTitle");

    if (title) {
      title.textContent =
        t("game.detail");
    }


    const event =
      document.getElementById("gameEvent");

    if (event) {
      event.textContent =
        getEventName(game);
    }


    const round =
      document.getElementById("gameRound");

    if (round) {
      round.textContent =
        getRound(game);
    }


    const status =
      document.getElementById("gameStatus");

    if (status) {
      status.textContent =
        getStatusLabel(game);

      status.className =
        `game-status status-${escapeHTML(
          game.status || "scheduled"
        )}`;
    }
  }


  /* =========================================================
     MAIN SCOREBOARD
     ========================================================= */

  function renderScoreboard(game) {
    const container =
      document.getElementById(
        "gameScoreboard"
      );

    if (!container) {
      return;
    }


    const home =
      getHome(game);

    const away =
      getAway(game);

    const homeScore =
      getHomeScore(game);

    const awayScore =
      getAwayScore(game);


    const hasScore =
      homeScore !== null &&
      awayScore !== null;


    container.innerHTML = `
      <div class="game-scoreboard">

        <div class="score-team score-away">

          <span class="score-team-label">
            ${escapeHTML(t("common.away"))}
          </span>

          <strong class="score-team-name">
            ${escapeHTML(away)}
          </strong>

          <span class="score-number">
            ${
              hasScore
                ? escapeHTML(awayScore)
                : "-"
            }
          </span>

        </div>


        <div class="score-middle">

          <span class="score-vs">
            ${escapeHTML(t("common.vs"))}
          </span>

          <span class="score-date">
            ${escapeHTML(
              formatDateTime(
                game.datetime ??
                game.dateTime ??
                game.startTime ??
                game.date
              )
            )}
          </span>

          <span class="score-zone">
            ${escapeHTML(
              LANGUAGE_CONFIG[currentLang]
                ?.timezoneLabel || ""
            )}
          </span>

        </div>


        <div class="score-team score-home">

          <span class="score-team-label">
            ${escapeHTML(t("common.home"))}
          </span>

          <strong class="score-team-name">
            ${escapeHTML(home)}
          </strong>

          <span class="score-number">
            ${
              hasScore
                ? escapeHTML(homeScore)
                : "-"
            }
          </span>

        </div>

      </div>
    `;
  }


  /* =========================================================
     INNINGS
     ========================================================= */

  function getInnings(game) {
    const innings =
      game?.detail?.innings;

    if (!innings) {
      return null;
    }

    /*
      Expected structure:

      innings: {
        home: [...],
        away: [...]
      }
    */

    if (
      Array.isArray(innings.home) &&
      Array.isArray(innings.away)
    ) {
      return innings;
    }

    return null;
  }


  function renderInnings(game) {
    const container =
      document.getElementById(
        "inningsTable"
      );

    if (!container) {
      return;
    }


    const innings =
      getInnings(game);


    if (!innings) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(t("game.noInnings"))}
        </div>
      `;

      return;
    }


    const away =
      getAway(game);

    const home =
      getHome(game);


    const awayRows =
      Array.isArray(innings.away)
        ? innings.away
        : [];

    const homeRows =
      Array.isArray(innings.home)
        ? innings.home
        : [];


    const count =
      Math.max(
        awayRows.length,
        homeRows.length
      );


    if (!count) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(t("game.noInnings"))}
        </div>
      `;

      return;
    }


    let header = "";

    for (
      let i = 0;
      i < count;
      i++
    ) {
      header += `
        <th>
          ${i + 1}
        </th>
      `;
    }


    const awayTotal =
      awayRows.reduce(
        (sum, value) =>
          sum + Number(value || 0),
        0
      );

    const homeTotal =
      homeRows.reduce(
        (sum, value) =>
          sum + Number(value || 0),
        0
      );


    container.innerHTML = `
      <div class="innings-table-wrapper">

        <table class="innings-table">

          <thead>
            <tr>
              <th></th>
              ${header}
              <th>${escapeHTML(t("innings.total"))}</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <th>
                ${escapeHTML(away)}
              </th>

              ${
                Array.from(
                  { length: count },
                  (_, i) => `
                    <td>
                      ${escapeHTML(
                        awayRows[i] ?? 0
                      )}
                    </td>
                  `
                ).join("")
              }

              <td>
                <strong>
                  ${awayTotal}
                </strong>
              </td>
            </tr>


            <tr>
              <th>
                ${escapeHTML(home)}
              </th>

              ${
                Array.from(
                  { length: count },
                  (_, i) => `
                    <td>
                      ${escapeHTML(
                        homeRows[i] ?? 0
                      )}
                    </td>
                  `
                ).join("")
              }

              <td>
                <strong>
                  ${homeTotal}
                </strong>
              </td>
            </tr>

          </tbody>

        </table>

      </div>
    `;
  }


  /* =========================================================
     PITCHING
     ========================================================= */

  function renderPitching(game) {
    const container =
      document.getElementById(
        "pitching"
      );

    if (!container) {
      return;
    }


    const pitching =
      game?.detail?.pitching;


    if (!pitching) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(t("game.noPitching"))}
        </div>
      `;

      return;
    }


    const rows = [];


    if (pitching.win) {
      rows.push({
        label: t("pitching.win"),
        value: getLocalized(
          pitching.win
        )
      });
    }


    if (pitching.loss) {
      rows.push({
        label: t("pitching.loss"),
        value: getLocalized(
          pitching.loss
        )
      });
    }


    if (pitching.save) {
      rows.push({
        label: t("pitching.save"),
        value: getLocalized(
          pitching.save
        )
      });
    }


    if (pitching.holds) {
      rows.push({
        label: t("pitching.holds"),
        value: getLocalized(
          pitching.holds
        )
      });
    }


    if (!rows.length) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(t("game.noPitching"))}
        </div>
      `;

      return;
    }


    container.innerHTML = `
      <div class="pitching-list">

        ${rows.map(row => `
          <div class="pitching-row">

            <span class="pitching-label">
              ${escapeHTML(row.label)}
            </span>

            <strong class="pitching-value">
              ${escapeHTML(row.value)}
            </strong>

          </div>
        `).join("")}

      </div>
    `;
  }


  /* =========================================================
     NOTES
     ========================================================= */

  function renderNotes(game) {
    const container =
      document.getElementById(
        "gameNotes"
      );

    if (!container) {
      return;
    }


    const notes =
      getLocalized(
        game?.detail?.notes ??
        game?.notes ??
        ""
      );


    if (!notes) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(t("game.noDetails"))}
        </div>
      `;

      return;
    }


    container.innerHTML = `
      <div class="game-notes-content">
        ${escapeHTML(notes)}
      </div>
    `;
  }


  /* =========================================================
     GAME DETAILS
     ========================================================= */

  function renderDetails(game) {

    const details =
      game?.detail ||
      game?.details;


    const container =
      document.getElementById(
        "gameDetails"
      );

    if (!container) {
      return;
    }


    if (!details) {
      container.innerHTML = "";
      return;
    }


    const note =
      getLocalized(
        details.notes ??
        ""
      );


    if (!note) {
      container.innerHTML = "";
      return;
    }


    container.innerHTML = `
      <section class="game-section">

        <h2>
          ${escapeHTML(t("game.notes"))}
        </h2>

        <div class="game-section-content">
          ${escapeHTML(note)}
        </div>

      </section>
    `;
  }


  /* =========================================================
     LANGUAGE
     ========================================================= */

  function updateLanguageButtons() {
    document
      .querySelectorAll(
        ".language-switcher button, .header-language button"
      )
      .forEach(button => {

        const active =
          button.dataset.lang ===
          currentLang;

        button.classList.toggle(
          "active",
          active
        );

        button.setAttribute(
          "aria-pressed",
          active
            ? "true"
            : "false"
        );
      });
  }


  function applyLanguage(game) {

    document.documentElement.lang =
      currentLang === "zh"
        ? "zh-Hant"
        : currentLang;


    document
      .querySelectorAll(
        "[data-i18n]"
      )
      .forEach(element => {

        const key =
          element.dataset.i18n;

        if (key) {
          element.textContent =
            t(key);
        }
      });


    updateLanguageButtons();


    if (game) {
      renderHeader(game);
      renderScoreboard(game);
      renderInnings(game);
      renderPitching(game);
      renderNotes(game);
      renderDetails(game);
    }
  }


  function setLanguage(lang, game) {
    if (!LANGS.includes(lang)) {
      return;
    }


    currentLang = lang;

    localStorage.setItem(
      "asiaHCBBLanguage",
      currentLang
    );


    applyLanguage(game);
  }


  /* =========================================================
     CLOCK
     ========================================================= */

  function updateClock() {
    const clock =
      document.getElementById(
        "clock"
      );

    if (!clock) {
      return;
    }


    const locale =
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
          ? "ko-KR"
          : currentLang === "zh"
            ? "zh-TW"
            : "en-US";


    clock.textContent =
      new Intl.DateTimeFormat(
        locale,
        {
          timeZone:
            LANGUAGE_CONFIG[currentLang]
              ?.zone ||
            "Asia/Tokyo",

          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",

          hour12: false
        }
      ).format(
        new Date()
      );


    const tz =
      document.getElementById(
        "tz"
      );

    if (tz) {
      tz.textContent =
        LANGUAGE_CONFIG[currentLang]
          ?.timezoneLabel ||
        "";
    }
  }


  /* =========================================================
     EVENTS
     ========================================================= */

  function bindEvents(game) {

    document
      .querySelectorAll(
        ".language-switcher button, .header-language button"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {
            setLanguage(
              button.dataset.lang,
              game
            );
          }
        );

      });
  }


  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    const game =
      getGame();


    if (!game) {

      const main =
        document.querySelector(
          "main"
        );

      if (main) {
        main.innerHTML = `
          <div class="empty-state">
            ${escapeHTML(
              t("game.notFound")
            )}
          </div>
        `;
      }

      updateClock();

      return;
    }


    bindEvents(game);

    applyLanguage(game);

    updateClock();


    setInterval(
      updateClock,
      1000
    );
  }


  /* =========================================================
     START
     ========================================================= */

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

})();
