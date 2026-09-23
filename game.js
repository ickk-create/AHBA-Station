/* =========================================================
   Asia HCBB Baseball Alliance
   game.js
   ========================================================= */

(() => {
  "use strict";


  /* =========================================================
     DATA
     ========================================================= */

  const D =
    typeof ALLIANCE_DATA !== "undefined"
      ? ALLIANCE_DATA
      : {
          leagues: [],
          events: [],
          games: [],
          standings: {}
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

      "game.back": "← 試合一覧へ戻る",
      "game.vs": "VS",
      "game.score": "イニングスコア",
      "game.pitchingResult": "結果",
      "game.pitcher": "投手",
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

      "game.back": "← 경기 목록으로 돌아가기",
      "game.vs": "VS",
      "game.score": "이닝별 득점",
      "game.pitchingResult": "결과",
      "game.pitcher": "투수",
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

      "game.back": "← Back to Games",
      "game.vs": "VS",
      "game.score": "Innings",
      "game.pitchingResult": "Result",
      "game.pitcher": "Pitcher",
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

      "game.back": "← 返回賽事列表",
      "game.vs": "VS",
      "game.score": "各局得分",
      "game.pitchingResult": "結果",
      "game.pitcher": "投手",
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
    
    const eventId =
      game?.eventId ??
      game?.event_id ??
      game?.tournamentId ??
      game?.tournament_id;

    const event =
      (D.events || []).find(
        item =>
          String(item.id) ===
          String(eventId)
      );
    if (event) {
      return getLocalized(
        event.name
      );
    }
     
    if (game?.eventName) {
      return getLocalized(
        game.eventName
      );
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


    const date =
      document.getElementById("gameDate");

    if (date) {
      date.textContent =
        formatDateTime(
          game.time
        );
    }
  }


  /* =========================================================
     MAIN SCOREBOARD
     ========================================================= */

  function renderScoreboard(game) {

    const homeTeam =
　    document.getElementById("homeTeam");

    const awayTeam =
      document.getElementById("awayTeam");

    const homeScore =
      document.getElementById("homeScore");

    const awayScore =
      document.getElementById("awayScore");

    const home =
      getHome(game);

    const away =
      getAway(game);

    const hScore =
      getHomeScore(game);

    const aScore =
      getAwayScore(game);

    if (homeTeam) {
      homeTeam.textContent =
        home || "—";
    }

    if (awayTeam) {
      awayTeam.textContent =
        away || "—";
    }

    if (homeScore) {
      homeScore.textContent =
        hScore === null
          ? "—"
          : String(hScore);
    }

    if (awayScore) {
      awayScore.textContent =
        aScore === null
          ? "—"
          : String(aScore);
    }

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

    const header =
      document.getElementById(
        "inningHeader"
      );

    const awayRow =
      document.getElementById(
        "awayInnings"
      );

    const homeRow =
      document.getElementById(
        "homeInnings"
      );

    const innings =
      getInnings(game);

    if (
      !header ||
      !awayRow ||
      !homeRow
    ) {
      return;
    }

    if (!innings) {

      header.innerHTML = `
        <th>TEAM</th>
      `;

      awayRow.innerHTML = `
        <th>—</th>
      `;

      homeRow.innerHTML = `
        <th>—</th>
      `;

      return;
    }

    const away =
      Array.isArray(innings.away)
        ? innings.away
        : [];

    const home =
      Array.isArray(innings.home)
        ? innings.home
        : [];

    const count =
      Math.max(
        away.length,
        home.length
      );

    let headerHTML =
      "<th>TEAM</th>";

    for (let i = 0; i < count; i++) {

      headerHTML += `
        <th>${i + 1}</th>
      `;

    }

    header.innerHTML =
      headerHTML;

    awayRow.innerHTML =
      `<th>${escapeHTML(getAway(game))}</th>` +
      away
        .map(
          score =>
            `<td>${score}</td>`
        )
        .join("");

    homeRow.innerHTML =
      `<th>${escapeHTML(getHome(game))}</th>` +
      home
        .map(
          score =>
            `<td>${score}</td>`
        )
        .join("");

  }


    /* =========================================================
     PITCHING
     ========================================================= */

  function renderPitching(game) {

    const container =
      document.getElementById(
        "pitchingBody"
      );

    if (!container) {
      return;
    }


    const pitching =
      game?.detail?.pitching;


    if (!pitching) {

      container.innerHTML = `
        <tr>
          <td colspan="2">
            ${escapeHTML(t("game.noPitching"))}
          </td>
        </tr>
      `;

      return;
    }


    const rows = [];


    /* 勝利投手 */
    if (pitching.win) {

      rows.push({
        result: t("pitching.win"),
        pitcher: getLocalized(
          pitching.win
        )
      });

    }


    /* 敗戦投手 */
    if (pitching.loss) {

      rows.push({
        result: t("pitching.loss"),
        pitcher: getLocalized(
          pitching.loss
        )
      });

    }


    /* セーブ */
    if (pitching.save) {

      rows.push({
        result: t("pitching.save"),
        pitcher: getLocalized(
          pitching.save
        )
      });

    }


    /* ホールド */
    if (pitching.holds) {

      const holds =
        Array.isArray(pitching.holds)
          ? pitching.holds
          : [pitching.holds];


      holds.forEach(
        pitcher => {

          rows.push({
            result: t("pitching.holds"),
            pitcher: getLocalized(
              pitcher
            )
          });

        }
      );

    }


    /* 投手成績なし */
    if (!rows.length) {

      container.innerHTML = `
        <tr>
          <td colspan="2">
            ${escapeHTML(t("game.noPitching"))}
          </td>
        </tr>
      `;

      return;
    }


    /* 投手成績をテーブルに表示 */

    container.innerHTML =
      rows
        .map(
          row => `
            <tr>

              <td>
                ${escapeHTML(row.result)}
              </td>

              <td>
                ${escapeHTML(row.pitcher)}
              </td>

            </tr>
          `
        )
        .join("");

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
