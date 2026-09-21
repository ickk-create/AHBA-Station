/* =========================================================
   Asia HCBB Baseball Alliance
   app.js
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     DATA
     ========================================================= */

  const D = window.ALLIANCE_DATA || {
    leagues: [],
    games: [],
    standings: {
      current: []
    }
  };


  /* =========================================================
     STATE
     ========================================================= */

  let currentLang = localStorage.getItem("asiaHCBBLanguage") || "ja";

  const LANGS = ["ja", "ko", "en", "zh"];

  let currentZone = "Asia/Tokyo";
  let currentScheduleStatus = "upcoming";


  /* =========================================================
     LANGUAGE CONFIG
     ========================================================= */

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

      "hero.title": "ASIA HCBB BASEBALL ALLIANCE",
      "hero.subtitle": "アジアをつなぐ、HCBB野球の交流プラットフォーム",
      "hero.description": "各地域・各リーグを越えて、試合と交流の情報を発信します。",

      "nextGame.title": "NEXT GAME",
      "nextGame.noGame": "次の公式試合はありません",

      "games.title": "MATCH CENTER",
      "games.event": "イベント",
      "games.allEvents": "すべてのイベント",
      "games.status": "ステータス",
      "games.allStatus": "すべて",
      "games.upcoming": "予定",
      "games.live": "試合中",
      "games.finished": "終了",
      "games.noGames": "該当する試合はありません",

      "standings.title": "STANDINGS",
      "standings.event": "イベント",
      "standings.allEvents": "すべてのイベント",
      "standings.rank": "順位",
      "standings.team": "チーム",
      "standings.played": "試合",
      "standings.wins": "勝",
      "standings.losses": "敗",
      "standings.draws": "分",
      "standings.runsFor": "得点",
      "standings.runsAgainst": "失点",
      "standings.diff": "得失点差",
      "standings.points": "勝点",

      "schedule.title": "SCHEDULE",
      "schedule.upcoming": "予定",
      "schedule.finished": "終了",
      "schedule.noGames": "該当する試合はありません",

      "scheduleStatus.upcoming": "予定",
      "scheduleStatus.finished": "終了",

      "leagues.title": "LEAGUES",
      "leagues.description": "AHBAに参加する各リーグをご紹介します。",

      "about.title": "ABOUT AHBA",
      "about.text": "Asia HCBB Baseball Alliance（AHBA）は、アジア地域におけるHCBB野球の交流・情報発信を目的とするコミュニティです。",

      "status.scheduled": "予定",
      "status.live": "試合中",
      "status.finished": "終了",

      "game.international": "国際試合",
      "game.friendly": "交流試合",
      "game.tournament": "大会",
      "game.other": "その他",

      "game.detail": "試合詳細",
      "game.boxScore": "試合結果",
      "game.innings": "イニング別得点",
      "game.pitching": "投手成績",
      "game.notes": "備考",

      "common.vs": "VS",
      "common.home": "HOME",
      "common.away": "AWAY",

      "footer.allRights": "Asia HCBB Baseball Alliance"
    },


    ko: {
      "nav.games": "경기 결과",
      "nav.standings": "순위표",
      "nav.schedule": "경기 일정",
      "nav.leagues": "참가 리그",
      "nav.about": "AHBA 소개",

      "hero.title": "ASIA HCBB BASEBALL ALLIANCE",
      "hero.subtitle": "아시아를 연결하는 HCBB 야구 교류 플랫폼",
      "hero.description": "지역과 리그를 넘어 경기와 교류 정보를 제공합니다.",

      "nextGame.title": "NEXT GAME",
      "nextGame.noGame": "예정된 공식 경기가 없습니다.",

      "games.title": "MATCH CENTER",
      "games.event": "이벤트",
      "games.allEvents": "모든 이벤트",
      "games.status": "상태",
      "games.allStatus": "전체",
      "games.upcoming": "예정",
      "games.live": "진행 중",
      "games.finished": "종료",
      "games.noGames": "해당하는 경기가 없습니다.",

      "standings.title": "STANDINGS",
      "standings.event": "이벤트",
      "standings.allEvents": "모든 이벤트",
      "standings.rank": "순위",
      "standings.team": "팀",
      "standings.played": "경기",
      "standings.wins": "승",
      "standings.losses": "패",
      "standings.draws": "무",
      "standings.runsFor": "득점",
      "standings.runsAgainst": "실점",
      "standings.diff": "득실차",
      "standings.points": "승점",

      "schedule.title": "SCHEDULE",
      "schedule.upcoming": "예정",
      "schedule.finished": "종료",
      "schedule.noGames": "해당하는 경기가 없습니다.",

      "scheduleStatus.upcoming": "예정",
      "scheduleStatus.finished": "종료",

      "leagues.title": "LEAGUES",
      "leagues.description": "AHBA에 참가하는 각 리그를 소개합니다.",

      "about.title": "ABOUT AHBA",
      "about.text": "Asia HCBB Baseball Alliance（AHBA）는 아시아 지역의 HCBB 야구 교류와 정보 공유를 위한 커뮤니티입니다.",

      "status.scheduled": "예정",
      "status.live": "진행 중",
      "status.finished": "종료",

      "game.international": "국제 경기",
      "game.friendly": "교류 경기",
      "game.tournament": "대회",
      "game.other": "기타",

      "game.detail": "경기 상세",
      "game.boxScore": "경기 결과",
      "game.innings": "이닝별 득점",
      "game.pitching": "투수 기록",
      "game.notes": "비고",

      "common.vs": "VS",
      "common.home": "HOME",
      "common.away": "AWAY",

      "footer.allRights": "Asia HCBB Baseball Alliance"
    },


    en: {
      "nav.games": "Games",
      "nav.standings": "Standings",
      "nav.schedule": "Schedule",
      "nav.leagues": "Leagues",
      "nav.about": "About AHBA",

      "hero.title": "ASIA HCBB BASEBALL ALLIANCE",
      "hero.subtitle": "Connecting HCBB Baseball Across Asia",
      "hero.description": "Sharing official games, events, and baseball exchanges across regions and leagues.",

      "nextGame.title": "NEXT GAME",
      "nextGame.noGame": "There are no upcoming official games.",

      "games.title": "MATCH CENTER",
      "games.event": "Event",
      "games.allEvents": "All Events",
      "games.status": "Status",
      "games.allStatus": "All",
      "games.upcoming": "Upcoming",
      "games.live": "Live",
      "games.finished": "Finished",
      "games.noGames": "No games found.",

      "standings.title": "STANDINGS",
      "standings.event": "Event",
      "standings.allEvents": "All Events",
      "standings.rank": "Rank",
      "standings.team": "Team",
      "standings.played": "P",
      "standings.wins": "W",
      "standings.losses": "L",
      "standings.draws": "D",
      "standings.runsFor": "RF",
      "standings.runsAgainst": "RA",
      "standings.diff": "DIFF",
      "standings.points": "PTS",

      "schedule.title": "SCHEDULE",
      "schedule.upcoming": "Upcoming",
      "schedule.finished": "Finished",
      "schedule.noGames": "No games found.",

      "scheduleStatus.upcoming": "Upcoming",
      "scheduleStatus.finished": "Finished",

      "leagues.title": "LEAGUES",
      "leagues.description": "Leagues participating in the AHBA community.",

      "about.title": "ABOUT AHBA",
      "about.text": "Asia HCBB Baseball Alliance（AHBA）is a community for HCBB baseball exchange and information sharing across Asia.",

      "status.scheduled": "Scheduled",
      "status.live": "Live",
      "status.finished": "Finished",

      "game.international": "International",
      "game.friendly": "Friendly",
      "game.tournament": "Tournament",
      "game.other": "Other",

      "game.detail": "Game Details",
      "game.boxScore": "Box Score",
      "game.innings": "Innings",
      "game.pitching": "Pitching",
      "game.notes": "Notes",

      "common.vs": "VS",
      "common.home": "HOME",
      "common.away": "AWAY",

      "footer.allRights": "Asia HCBB Baseball Alliance"
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

      "hero.title": "ASIA HCBB BASEBALL ALLIANCE",
      "hero.subtitle": "連結亞洲各地的 HCBB 棒球交流平台",
      "hero.description": "跨越地區與聯盟，提供官方賽事、交流賽及相關活動資訊。",

      "nextGame.title": "NEXT GAME",
      "nextGame.noGame": "目前沒有預定的官方賽事",

      "games.title": "MATCH CENTER",
      "games.event": "活動",
      "games.allEvents": "所有活動",
      "games.status": "狀態",
      "games.allStatus": "全部",
      "games.upcoming": "預定",
      "games.live": "進行中",
      "games.finished": "已結束",
      "games.noGames": "沒有符合條件的賽事",

      "standings.title": "STANDINGS",
      "standings.event": "活動",
      "standings.allEvents": "所有活動",
      "standings.rank": "排名",
      "standings.team": "隊伍",
      "standings.played": "賽",
      "standings.wins": "勝",
      "standings.losses": "敗",
      "standings.draws": "和",
      "standings.runsFor": "得分",
      "standings.runsAgainst": "失分",
      "standings.diff": "得失分差",
      "standings.points": "積分",

      "schedule.title": "SCHEDULE",
      "schedule.upcoming": "預定",
      "schedule.finished": "已結束",
      "schedule.noGames": "沒有符合條件的賽事",

      "scheduleStatus.upcoming": "預定",
      "scheduleStatus.finished": "已結束",

      "leagues.title": "LEAGUES",
      "leagues.description": "介紹參與 AHBA 的各個聯盟。",

      "about.title": "ABOUT AHBA",
      "about.text": "Asia HCBB Baseball Alliance（AHBA）是一個以亞洲地區 HCBB 棒球交流與資訊分享為目的的社群。",

      "status.scheduled": "預定",
      "status.live": "進行中",
      "status.finished": "已結束",

      "game.international": "國際賽",
      "game.friendly": "交流賽",
      "game.tournament": "錦標賽",
      "game.other": "其他",

      "game.detail": "賽事詳情",
      "game.boxScore": "比賽結果",
      "game.innings": "各局得分",
      "game.pitching": "投手成績",
      "game.notes": "備註",

      "common.vs": "VS",
      "common.home": "主隊",
      "common.away": "客隊",

      "footer.allRights": "Asia HCBB Baseball Alliance"
    }
  };


  /* =========================================================
     BASIC HELPERS
     ========================================================= */

  function escapeHTML(value) {
    if (value === null || value === undefined) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function getLocalized(value, lang = currentLang) {
    if (value === null || value === undefined) {
      return "";
    }

    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }

    if (typeof value === "object") {
      return (
        value[lang] ??
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


  function displayText(value) {
    return escapeHTML(getLocalized(value));
  }


  function getGameType(game) {
    return game?.type || game?.category || "other";
  }


  function getGameTypeLabel(game) {
    const type = getGameType(game);

    const map = {
      international: "game.international",
      friendly: "game.friendly",
      tournament: "game.tournament",
      other: "game.other"
    };

    return t(map[type] || "game.other");
  }


  function getGameStatusLabel(status) {
    const map = {
      scheduled: "status.scheduled",
      live: "status.live",
      finished: "status.finished"
    };

    return t(map[status] || status || "");
  }


  /* =========================================================
     GAME HELPERS
     ========================================================= */

  function getHome(game) {
    return getLocalized(game?.home);
  }


  function getAway(game) {
    return getLocalized(game?.away);
  }


  function getEventKey(game) {
    return (
      game?.eventId ??
      game?.tournamentId ??
      game?.event ??
      game?.tournament ??
      getGameType(game)
    );
  }


  function getEventName(game) {
    if (game?.eventName) {
      return getLocalized(game.eventName);
    }

    if (game?.event) {
      return getLocalized(game.event);
    }

    return getGameTypeLabel(game);
  }


  function getLeagueById(id) {
    if (!id || !Array.isArray(D.leagues)) {
      return null;
    }

    return D.leagues.find(league => league.id === id) || null;
  }


  function getLeagueName(id) {
    const league = getLeagueById(id);

    if (!league) {
      return "";
    }

    return getLocalized(
      league.name ??
      league.leagueName ??
      league.title ??
      league.id
    );
  }


  function getRound(game) {
    return getLocalized(
      game?.round ??
      game?.matchday ??
      ""
    );
  }


  /* =========================================================
     DATE / TIME
     ========================================================= */

  function formatDate(dateValue, zone = currentZone) {
    if (!dateValue) {
      return "";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat(
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
          ? "ko-KR"
          : currentLang === "zh"
            ? "zh-TW"
            : "en-US",
      {
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }
    ).format(date);
  }


  function formatTime(dateValue, zone = currentZone) {
    if (!dateValue) {
      return "";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat(
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
          ? "ko-KR"
          : currentLang === "zh"
            ? "zh-TW"
            : "en-US",
      {
        timeZone: zone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }
    ).format(date);
  }


  function formatDateTime(dateValue, zone = currentZone) {
    if (!dateValue) {
      return "";
    }

    return `${formatDate(dateValue, zone)} ${formatTime(dateValue, zone)}`;
  }


  function getTimestamp(game) {
    const value =
      game?.datetime ??
      game?.dateTime ??
      game?.startTime ??
      game?.date;

    if (!value) {
      return 0;
    }

    const timestamp = new Date(value).getTime();

    return Number.isNaN(timestamp) ? 0 : timestamp;
  }


  /* =========================================================
     SORTING
     ========================================================= */

  function sortUpcomingFirst(a, b) {
    const statusOrder = {
      live: 0,
      scheduled: 1,
      finished: 2
    };

    const sa = statusOrder[a?.status] ?? 99;
    const sb = statusOrder[b?.status] ?? 99;

    if (sa !== sb) {
      return sa - sb;
    }

    return getTimestamp(a) - getTimestamp(b);
  }


  function sortNewestFirst(a, b) {
    return getTimestamp(b) - getTimestamp(a);
  }


  /* =========================================================
     SCHEDULE HELPERS
     ========================================================= */

  function getScheduleGames() {
    if (!Array.isArray(D.games)) {
      return [];
    }

    return [...D.games];
  }


  function isFinished(game) {
    return game?.status === "finished";
  }


  function isUpcoming(game) {
    return (
      game?.status === "scheduled" ||
      game?.status === "live"
    );
  }


  function updateScheduleCounts() {
    const games = getScheduleGames();

    const upcoming = games.filter(isUpcoming).length;
    const finished = games.filter(isFinished).length;

    const upcomingCount = document.getElementById("scheduleUpcomingCount");
    const finishedCount = document.getElementById("scheduleFinishedCount");

    if (upcomingCount) {
      upcomingCount.textContent = String(upcoming);
    }

    if (finishedCount) {
      finishedCount.textContent = String(finished);
    }
  }


  /* =========================================================
     LANGUAGE UI
     ========================================================= */

  function updateLanguageButtons() {
    document
      .querySelectorAll(
        ".language-switcher button, .header-language button"
      )
      .forEach(button => {
        const active =
          button.dataset.lang === currentLang;

        button.classList.toggle("active", active);
        button.setAttribute(
          "aria-pressed",
          active ? "true" : "false"
        );
      });
  }


  function updateFilterTexts() {
    const eventFilter = document.getElementById("leagueFilter");

    if (eventFilter) {
      const selected =
        eventFilter.value || "all";

      const options = [
        {
          value: "all",
          label: t("games.allEvents")
        }
      ];

      const eventMap = new Map();

      getScheduleGames().forEach(game => {
        const key = getEventKey(game);

        if (!eventMap.has(key)) {
          eventMap.set(key, getEventName(game));
        }
      });

      eventMap.forEach((label, key) => {
        options.push({
          value: key,
          label
        });
      });

      eventFilter.innerHTML = options
        .map(option => `
          <option value="${escapeHTML(option.value)}">
            ${escapeHTML(option.label)}
          </option>
        `)
        .join("");

      if (
        [...eventFilter.options]
          .some(option => option.value === selected)
      ) {
        eventFilter.value = selected;
      }
    }


    const statusFilter =
      document.getElementById("statusFilter");

    if (statusFilter) {
      const selected =
        statusFilter.value || "all";

      statusFilter.innerHTML = `
        <option value="all">${escapeHTML(t("games.allStatus"))}</option>
        <option value="scheduled">${escapeHTML(t("games.upcoming"))}</option>
        <option value="live">${escapeHTML(t("games.live"))}</option>
        <option value="finished">${escapeHTML(t("games.finished"))}</option>
      `;

      if (
        [...statusFilter.options]
          .some(option => option.value === selected)
      ) {
        statusFilter.value = selected;
      }
    }


    const standingsFilter =
      document.getElementById("standingsLeague");

    if (standingsFilter) {
      const selected =
        standingsFilter.value || "all";

      standingsFilter.innerHTML = `
        <option value="all">${escapeHTML(t("standings.allEvents"))}</option>
      `;

      if (
        [...standingsFilter.options]
          .some(option => option.value === selected)
      ) {
        standingsFilter.value = selected;
      }
    }
  }


  function applyLanguage() {
    currentZone =
      LANGUAGE_CONFIG[currentLang]?.zone ||
      "Asia/Tokyo";

    document.documentElement.lang =
      currentLang === "zh"
        ? "zh-Hant"
        : currentLang;


    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {
        const key = element.dataset.i18n;

        if (!key) {
          return;
        }

        element.textContent = t(key);
      });


    document
      .querySelectorAll("[data-i18n-html]")
      .forEach(element => {
        const key = element.dataset.i18nHtml;

        if (!key) {
          return;
        }

        element.innerHTML = t(key);
      });


    updateLanguageButtons();
    updateFilterTexts();

    renderGames();
    renderStandings();
    renderSchedule();
    renderNextGame();
    renderLeagues();
    updateClock();
  }


  function setLanguage(lang) {
    if (!LANGS.includes(lang)) {
      return;
    }

    currentLang = lang;

    localStorage.setItem(
      "asiaHCBBLanguage",
      currentLang
    );

    applyLanguage();
  }


  /* =========================================================
     TIMEZONE UI
     ========================================================= */

  function updateTimezoneUI() {
    const timezoneElement =
      document.getElementById("tz");

    if (timezoneElement) {
      timezoneElement.textContent =
        LANGUAGE_CONFIG[currentLang]?.timezoneLabel ||
        "";
    }


    document
      .querySelectorAll("[data-zone]")
      .forEach(button => {
        button.classList.toggle(
          "active",
          button.dataset.zone === currentZone
        );
      });
  }


  function setTimezone(zone) {
    if (!zone) {
      return;
    }

    currentZone = zone;

    updateTimezoneUI();
    renderNextGame();
    renderGames();
    renderSchedule();
    updateClock();
  }


  /* =========================================================
     NEXT GAME
     ========================================================= */

  function getNextGame() {
    const now = Date.now();

    return getScheduleGames()
      .filter(game => {
        if (game?.status !== "scheduled") {
          return false;
        }

        return getTimestamp(game) >= now;
      })
      .sort(
        (a, b) =>
          getTimestamp(a) - getTimestamp(b)
      )[0] || null;
  }


  function renderNextGame() {
    const container =
      document.getElementById("nextGame");

    if (!container) {
      return;
    }

    const game = getNextGame();

    if (!game) {
      container.innerHTML = `
        <div class="next-game-empty">
          ${escapeHTML(t("nextGame.noGame"))}
        </div>
      `;

      return;
    }


    const home = getHome(game);
    const away = getAway(game);

    const homeScore =
      game.homeScore ??
      game.score?.home ??
      "";

    const awayScore =
      game.awayScore ??
      game.score?.away ??
      "";

    const eventName =
      getEventName(game);

    const round =
      getRound(game);


    container.innerHTML = `
      <a
        class="next-game-card"
        href="./game.html?id=${encodeURIComponent(game.id)}"
      >

        <div class="next-game-meta">
          <span>${escapeHTML(eventName)}</span>
          ${
            round
              ? `<span>${escapeHTML(round)}</span>`
              : ""
          }
        </div>

        <div class="next-game-date">
          ${escapeHTML(formatDateTime(game.datetime ?? game.dateTime ?? game.startTime ?? game.date))}
          ${escapeHTML(
            LANGUAGE_CONFIG[currentLang]?.timezoneLabel || ""
          )}
        </div>

        <div class="next-game-match">

          <div class="next-game-team">
            ${escapeHTML(away)}
          </div>

          <div class="next-game-vs">
            ${escapeHTML(t("common.vs"))}
          </div>

          <div class="next-game-team">
            ${escapeHTML(home)}
          </div>

        </div>

      </a>
    `;
  }


  /* =========================================================
     GAME CARDS
     ========================================================= */

  function createGameCard(game) {
    const home = getHome(game);
    const away = getAway(game);

    const homeScore =
      game.homeScore ??
      game.score?.home ??
      null;

    const awayScore =
      game.awayScore ??
      game.score?.away ??
      null;

    const eventName =
      getEventName(game);

    const round =
      getRound(game);

    const status =
      game.status || "scheduled";

    const statusLabel =
      getGameStatusLabel(status);

    const dateValue =
      game.datetime ??
      game.dateTime ??
      game.startTime ??
      game.date;


    let scoreHTML = `
      <div class="game-score">
        <span>-</span>
        <span>-</span>
      </div>
    `;

    if (
      homeScore !== null &&
      awayScore !== null
    ) {
      scoreHTML = `
        <div class="game-score">
          <span>${escapeHTML(awayScore)}</span>
          <span>${escapeHTML(homeScore)}</span>
        </div>
      `;
    }


    return `
      <a
        class="game-card"
        href="./game.html?id=${encodeURIComponent(game.id)}"
        data-status="${escapeHTML(status)}"
      >

        <div class="game-card-top">

          <span class="game-event">
            ${escapeHTML(eventName)}
          </span>

          <span class="game-status status-${escapeHTML(status)}">
            ${escapeHTML(statusLabel)}
          </span>

        </div>


        <div class="game-card-date">
          ${escapeHTML(formatDate(dateValue))}
          ${escapeHTML(formatTime(dateValue))}
          ${escapeHTML(
            LANGUAGE_CONFIG[currentLang]?.timezoneLabel || ""
          )}
        </div>


        <div class="game-card-main">

          <div class="game-team game-away">
            <span class="team-name">
              ${escapeHTML(away)}
            </span>
          </div>

          ${scoreHTML}

          <div class="game-team game-home">
            <span class="team-name">
              ${escapeHTML(home)}
            </span>
          </div>

        </div>


        ${
          round
            ? `
              <div class="game-card-bottom">
                ${escapeHTML(round)}
              </div>
            `
            : ""
        }

      </a>
    `;
  }


  /* =========================================================
     RENDER GAMES
     ========================================================= */

  function renderGames() {
    const container =
      document.getElementById("gamesGrid");

    if (!container) {
      return;
    }


    const eventFilter =
      document.getElementById("leagueFilter");

    const statusFilter =
      document.getElementById("statusFilter");


    const selectedEvent =
      eventFilter?.value || "all";

    const selectedStatus =
      statusFilter?.value || "all";


    let games =
      getScheduleGames();


    if (selectedEvent !== "all") {
      games =
        games.filter(
          game =>
            getEventKey(game) ===
            selectedEvent
        );
    }


    if (selectedStatus !== "all") {
      games =
        games.filter(
          game =>
            game.status ===
            selectedStatus
        );
    }


    games.sort(sortUpcomingFirst);


    if (!games.length) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(t("games.noGames"))}
        </div>
      `;

      return;
    }


    container.innerHTML =
      games
        .map(createGameCard)
        .join("");
  }


  /* =========================================================
     STANDINGS
     ========================================================= */

  function getSelectedStandings() {
    const standings =
      D?.standings?.current;

    if (!Array.isArray(standings)) {
      return [];
    }

    return [...standings].sort(
      (a, b) => {
        const ap =
          Number(a.points ?? 0);

        const bp =
          Number(b.points ?? 0);

        if (bp !== ap) {
          return bp - ap;
        }

        const ad =
          Number(a.runsFor ?? 0) -
          Number(a.runsAgainst ?? 0);

        const bd =
          Number(b.runsFor ?? 0) -
          Number(b.runsAgainst ?? 0);

        return bd - ad;
      }
    );
  }


  function createStandingRow(row, index) {
    const team =
      getLocalized(row.team);

    const played =
      Number(row.played ?? 0);

    const wins =
      Number(row.wins ?? 0);

    const losses =
      Number(row.losses ?? 0);

    const draws =
      Number(row.draws ?? 0);

    const runsFor =
      Number(row.runsFor ?? 0);

    const runsAgainst =
      Number(row.runsAgainst ?? 0);

    const diff =
      runsFor - runsAgainst;

    const points =
      Number(row.points ?? 0);


    return `
      <tr>

        <td class="standing-rank">
          ${index + 1}
        </td>

        <td class="standing-team">
          ${escapeHTML(team)}
        </td>

        <td>${played}</td>
        <td>${wins}</td>
        <td>${losses}</td>
        <td>${draws}</td>
        <td>${runsFor}</td>
        <td>${runsAgainst}</td>

        <td class="standing-diff ${
          diff > 0
            ? "positive"
            : diff < 0
              ? "negative"
              : ""
        }">
          ${diff > 0 ? "+" : ""}${diff}
        </td>

        <td class="standing-points">
          ${points}
        </td>

      </tr>
    `;
  }


  function renderStandings() {
    const body =
      document.getElementById("standingsBody");

    if (!body) {
      return;
    }


    const rows =
      getSelectedStandings();


    if (!rows.length) {
      body.innerHTML = `
        <tr>
          <td colspan="10">
            ${escapeHTML(t("games.noGames"))}
          </td>
        </tr>
      `;

      return;
    }


    body.innerHTML =
      rows
        .map(createStandingRow)
        .join("");
  }


  /* =========================================================
     SCHEDULE
     ========================================================= */

  function createScheduleItem(game) {
    const home = getHome(game);
    const away = getAway(game);

    const homeScore =
      game.homeScore ??
      game.score?.home ??
      null;

    const awayScore =
      game.awayScore ??
      game.score?.away ??
      null;

    const eventName =
      getEventName(game);

    const dateValue =
      game.datetime ??
      game.dateTime ??
      game.startTime ??
      game.date;


    let score = "-";

    if (
      homeScore !== null &&
      awayScore !== null
    ) {
      score =
        `${awayScore} - ${homeScore}`;
    }


    return `
      <a
        class="schedule-item"
        href="./game.html?id=${encodeURIComponent(game.id)}"
      >

        <div class="schedule-time">
          <strong>
            ${escapeHTML(formatTime(dateValue))}
          </strong>

          <span>
            ${escapeHTML(formatDate(dateValue))}
          </span>
        </div>


        <div class="schedule-match">

          <div class="schedule-teams">
            <span>${escapeHTML(away)}</span>
            <strong>${escapeHTML(score)}</strong>
            <span>${escapeHTML(home)}</span>
          </div>

          <div class="schedule-event">
            ${escapeHTML(eventName)}
          </div>

        </div>


        <div class="schedule-status">
          ${escapeHTML(
            getGameStatusLabel(game.status)
          )}
        </div>

      </a>
    `;
  }


  function renderSchedule() {
    const container =
      document.getElementById("scheduleList");

    if (!container) {
      return;
    }


    let games =
      getScheduleGames();


    games =
      games.filter(game => {
        if (currentScheduleStatus === "finished") {
          return game.status === "finished";
        }

        return (
          game.status === "scheduled" ||
          game.status === "live"
        );
      });


    if (currentScheduleStatus === "finished") {
      games.sort(sortNewestFirst);
    } else {
      games.sort(
        (a, b) =>
          getTimestamp(a) -
          getTimestamp(b)
      );
    }


    if (!games.length) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(t("schedule.noGames"))}
        </div>
      `;

      return;
    }


    container.innerHTML =
      games
        .map(createScheduleItem)
        .join("");
  }


  /* =========================================================
     LEAGUES
     ========================================================= */

  function renderLeagues() {
    const container =
      document.getElementById("leagueCards");

    if (!container) {
      return;
    }


    if (!Array.isArray(D.leagues) || !D.leagues.length) {
      container.innerHTML = "";
      return;
    }


    container.innerHTML =
      D.leagues
        .map(league => {

          const name =
            getLocalized(
              league.name ??
              league.leagueName ??
              league.title ??
              league.id
            );

          const description =
            getLocalized(
              league.description ??
              league.desc ??
              ""
            );

          const region =
            getLocalized(
              league.region ??
              league.country ??
              ""
            );


          return `
            <article class="league-card">

              <div class="league-card-top">

                <span class="league-region">
                  ${escapeHTML(region)}
                </span>

                <span class="league-id">
                  ${escapeHTML(league.id || "")}
                </span>

              </div>


              <h3>
                ${escapeHTML(name)}
              </h3>


              ${
                description
                  ? `
                    <p>
                      ${escapeHTML(description)}
                    </p>
                  `
                  : ""
              }

            </article>
          `;
        })
        .join("");
  }


  /* =========================================================
     CLOCK
     ========================================================= */

  function updateClock() {
    const clock =
      document.getElementById("clock");

    if (!clock) {
      return;
    }


    const now = new Date();


    const formatted =
      new Intl.DateTimeFormat(
        currentLang === "ja"
          ? "ja-JP"
          : currentLang === "ko"
            ? "ko-KR"
            : currentLang === "zh"
              ? "zh-TW"
              : "en-US",
        {
          timeZone: currentZone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }
      ).format(now);


    clock.textContent = formatted;

    updateTimezoneUI();
  }


  /* =========================================================
     TICKER
     ========================================================= */

  function updateTicker() {
    const ticker =
      document.getElementById("tickerText");

    if (!ticker) {
      return;
    }


    const latest =
      [...getScheduleGames()]
        .sort(sortNewestFirst)[0];


    if (!latest) {
      ticker.textContent = "";
      return;
    }


    const home = getHome(latest);
    const away = getAway(latest);

    const homeScore =
      latest.homeScore ??
      latest.score?.home;

    const awayScore =
      latest.awayScore ??
      latest.score?.away;


    if (
      homeScore !== undefined &&
      homeScore !== null &&
      awayScore !== undefined &&
      awayScore !== null
    ) {
      ticker.textContent =
        `${away} ${awayScore} - ${homeScore} ${home}`;
    } else {
      ticker.textContent =
        `${away} ${t("common.vs")} ${home}`;
    }
  }


  /* =========================================================
     EVENT BINDINGS
     ========================================================= */

  function bindEvents() {

    document
      .querySelectorAll(
        ".language-switcher button, .header-language button"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {
            setLanguage(
              button.dataset.lang
            );
          }
        );

      });


    document
      .querySelectorAll("[data-zone]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {
            setTimezone(
              button.dataset.zone
            );
          }
        );

      });


    const eventFilter =
      document.getElementById("leagueFilter");

    if (eventFilter) {
      eventFilter.addEventListener(
        "change",
        renderGames
      );
    }


    const statusFilter =
      document.getElementById("statusFilter");

    if (statusFilter) {
      statusFilter.addEventListener(
        "change",
        renderGames
      );
    }


    const standingsFilter =
      document.getElementById("standingsLeague");

    if (standingsFilter) {
      standingsFilter.addEventListener(
        "change",
        renderStandings
      );
    }


    document
      .querySelectorAll(
        "[data-schedule-status]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            currentScheduleStatus =
              button.dataset.scheduleStatus ||
              "upcoming";


            document
              .querySelectorAll(
                "[data-schedule-status]"
              )
              .forEach(tab => {
                tab.classList.toggle(
                  "active",
                  tab === button
                );
              });


            renderSchedule();

          }
        );

      });
  }


  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    updateFilterTexts();

    bindEvents();

    applyLanguage();

    updateScheduleCounts();

    updateTicker();

    updateClock();

    setInterval(
      updateClock,
      1000
    );

    setInterval(
      () => {
        renderNextGame();
        renderSchedule();
        updateTicker();
      },
      30000
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
