/* =========================================================
   ASIA HCBB BASEBALL ALLIANCE
   app.js
   Official Site
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
          games: [],
          standings: {
            current: []
          }
        };


  /* =========================================================
     STATE
  ========================================================= */

  let currentLang =
    localStorage.getItem("asiaHCBBLanguage") || "ja";

  const LANGS = ["ja", "ko", "en", "zh"];

  let currentZone = "Asia/Tokyo";
  let currentScheduleStatus = "upcoming";


  /* =========================================================
     LANGUAGE CONFIG
  ========================================================= */

  const LANGUAGE_CONFIG = {
    ja: {
      locale: "ja-JP",
      timezone: "Asia/Tokyo",
      timezoneLabel: "JST"
    },

    ko: {
      locale: "ko-KR",
      timezone: "Asia/Seoul",
      timezoneLabel: "KST"
    },

    en: {
      locale: "en-US",
      timezone: "America/New_York",
      timezoneLabel: "ET"
    },

    zh: {
      locale: "zh-TW",
      timezone: "Asia/Taipei",
      timezoneLabel: "UTC+8"
    }
  };


  /* =========================================================
     TRANSLATIONS
  ========================================================= */

  const I18N = {

    ja: {
      nav: {
        games: "試合結果",
        standings: "順位表",
        schedule: "試合日程",
        leagues: "参加リーグ",
        about: "AHBAについて"
      },

      hero: {
        title: "ASIA HCBB BASEBALL ALLIANCE",
        subtitle: "アジアのHCBBをつなぐ野球アライアンス",
        description:
          "日本・韓国・台湾・中国をはじめとするアジア地域のHCBBコミュニティをつなぎ、試合・大会・交流戦などの情報を発信します。"
      },

      next: {
        title: "NEXT GAME",
        empty: "現在予定されている試合はありません。",
        details: "試合詳細を見る"
      },

      games: {
        title: "MATCH CENTER",
        all: "すべての大会",
        allStatus: "すべての状態",
        upcoming: "予定",
        live: "試合中",
        finished: "終了",
        noGames: "該当する試合はありません。",
        details: "試合詳細",
        round: "節",
        event: "大会・イベント",
        friendly: "交流戦",
        tournament: "大会",
        international: "国際試合",
        published: "掲載試合"
      },

      standings: {
        title: "STANDINGS",
        current: "大会",
        rank: "順位",
        team: "チーム",
        played: "試合",
        wins: "勝",
        losses: "敗",
        draws: "分",
        runsFor: "得点",
        runsAgainst: "失点",
        diff: "得失点差",
        pct: "勝率",
        points: "勝点"
      },

      schedule: {
        title: "SCHEDULE",
        timezone: "表示時刻"
      },

      scheduleStatus: {
        upcoming: "予定",
        finished: "終了"
      },

      leagues: {
        title: "PARTICIPATING LEAGUES",
        details: "リーグ詳細",
        region: "地域",
        matchTime: "試合時間",
        owner: "運営",
        teams: "参加チーム",
        discord: "Discord",
        noLeagues: "参加リーグはありません。"
      },

      about: {
        title: "ABOUT AHBA",
        text:
          "Asia HCBB Baseball Alliance（AHBA）は、アジア地域のHCBBコミュニティをつなぎ、国や地域を越えた試合・大会・交流を支援することを目的としたアライアンスです。",
        missionTitle: "MISSION",
        mission:
          "アジアのHCBBをつなぎ、より多くの交流機会をつくる。",
        scopeTitle: "ACTIVITIES",
        scope:
          "国際試合、交流戦、大会、リーグ情報など、AHBAが公式に取り扱う試合情報を発信します。"
      },

      status: {
        scheduled: "予定",
        upcoming: "予定",
        live: "試合中",
        finished: "終了"
      },

      common: {
        vs: "VS",
        home: "HOME",
        away: "AWAY",
        unknown: "—"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },


    ko: {
      nav: {
        games: "경기 결과",
        standings: "순위",
        schedule: "경기 일정",
        leagues: "참가 리그",
        about: "AHBA 소개"
      },

      hero: {
        title: "ASIA HCBB BASEBALL ALLIANCE",
        subtitle: "아시아 HCBB를 연결하는 야구 얼라이언스",
        description:
          "일본·한국·대만·중국을 비롯한 아시아 지역의 HCBB 커뮤니티를 연결하고 경기, 대회 및 교류전 정보를 제공합니다."
      },

      next: {
        title: "NEXT GAME",
        empty: "현재 예정된 경기가 없습니다.",
        details: "경기 상세 보기"
      },

      games: {
        title: "MATCH CENTER",
        all: "모든 대회",
        allStatus: "모든 상태",
        upcoming: "예정",
        live: "진행 중",
        finished: "종료",
        noGames: "해당 경기가 없습니다.",
        details: "경기 상세",
        round: "라운드",
        event: "대회·이벤트",
        friendly: "교류전",
        tournament: "대회",
        international: "국제 경기",
        published: "공식 게시 경기"
      },

      standings: {
        title: "STANDINGS",
        current: "대회",
        rank: "순위",
        team: "팀",
        played: "경기",
        wins: "승",
        losses: "패",
        draws: "무",
        runsFor: "득점",
        runsAgainst: "실점",
        diff: "득실차",
        pct: "승률",
        points: "승점"
      },

      schedule: {
        title: "SCHEDULE",
        timezone: "표시 시간"
      },

      scheduleStatus: {
        upcoming: "예정",
        finished: "종료"
      },

      leagues: {
        title: "PARTICIPATING LEAGUES",
        details: "리그 상세",
        region: "지역",
        matchTime: "경기 시간",
        owner: "운영",
        teams: "참가 팀",
        discord: "Discord",
        noLeagues: "참가 리그가 없습니다."
      },

      about: {
        title: "ABOUT AHBA",
        text:
          "Asia HCBB Baseball Alliance（AHBA）는 아시아 지역의 HCBB 커뮤니티를 연결하고 국가와 지역을 넘어선 경기, 대회 및 교류를 지원하는 얼라이언스입니다.",
        missionTitle: "MISSION",
        mission:
          "아시아 HCBB를 연결하고 더 많은 교류 기회를 만듭니다.",
        scopeTitle: "ACTIVITIES",
        scope:
          "국제 경기, 교류전, 대회 및 리그 정보 등 AHBA가 공식적으로 다루는 경기 정보를 제공합니다."
      },

      status: {
        scheduled: "예정",
        upcoming: "예정",
        live: "진행 중",
        finished: "종료"
      },

      common: {
        vs: "VS",
        home: "HOME",
        away: "AWAY",
        unknown: "—"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },


    en: {
      nav: {
        games: "Results",
        standings: "Standings",
        schedule: "Schedule",
        leagues: "Leagues",
        about: "About AHBA"
      },

      hero: {
        title: "ASIA HCBB BASEBALL ALLIANCE",
        subtitle: "Connecting HCBB across Asia",
        description:
          "Connecting HCBB communities across Japan, Korea, Taiwan, China and other regions of Asia through games, tournaments and friendly matches."
      },

      next: {
        title: "NEXT GAME",
        empty: "There are currently no scheduled games.",
        details: "View Game Details"
      },

      games: {
        title: "MATCH CENTER",
        all: "ALL EVENTS",
        allStatus: "ALL STATUS",
        upcoming: "UPCOMING",
        live: "LIVE",
        finished: "FINISHED",
        noGames: "No matching games.",
        details: "Game Details",
        round: "Round",
        event: "Event",
        friendly: "Friendly",
        tournament: "Tournament",
        international: "International",
        published: "Officially Published"
      },

      standings: {
        title: "STANDINGS",
        current: "EVENT",
        rank: "Rank",
        team: "Team",
        played: "GP",
        wins: "W",
        losses: "L",
        draws: "D",
        runsFor: "RF",
        runsAgainst: "RA",
        diff: "DIFF",
        pct: "PCT",
        points: "PTS"
      },

      schedule: {
        title: "SCHEDULE",
        timezone: "Time Zone"
      },

      scheduleStatus: {
        upcoming: "UPCOMING",
        finished: "FINISHED"
      },

      leagues: {
        title: "PARTICIPATING LEAGUES",
        details: "League Details",
        region: "Region",
        matchTime: "Match Time",
        owner: "Owner",
        teams: "Teams",
        discord: "Discord",
        noLeagues: "No participating leagues."
      },

      about: {
        title: "ABOUT AHBA",
        text:
          "Asia HCBB Baseball Alliance (AHBA) connects HCBB communities across Asia and supports games, tournaments and friendly matches across national and regional boundaries.",
        missionTitle: "MISSION",
        mission:
          "Connect HCBB across Asia and create more opportunities for interaction.",
        scopeTitle: "ACTIVITIES",
        scope:
          "AHBA publishes officially handled game information including international games, friendly matches, tournaments and league-related events."
      },

      status: {
        scheduled: "Scheduled",
        upcoming: "Upcoming",
        live: "Live",
        finished: "Finished"
      },

      common: {
        vs: "VS",
        home: "HOME",
        away: "AWAY",
        unknown: "—"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },


    zh: {
      nav: {
        games: "比赛结果",
        standings: "排名",
        schedule: "赛程",
        leagues: "参加联赛",
        about: "关于 AHBA"
      },

      hero: {
        title: "ASIA HCBB BASEBALL ALLIANCE",
        subtitle: "连接亚洲 HCBB 社区",
        description:
          "连接日本、韩国、台湾、中国以及亚洲其他地区的 HCBB 社区，发布比赛、赛事及交流赛信息。"
      },

      next: {
        title: "NEXT GAME",
        empty: "目前没有安排中的比赛。",
        details: "查看比赛详情"
      },

      games: {
        title: "MATCH CENTER",
        all: "所有赛事",
        allStatus: "所有状态",
        upcoming: "即将进行",
        live: "进行中",
        finished: "已结束",
        noGames: "没有符合条件的比赛。",
        details: "比赛详情",
        round: "轮次",
        event: "赛事",
        friendly: "交流赛",
        tournament: "赛事",
        international: "国际比赛",
        published: "官方发布比赛"
      },

      standings: {
        title: "STANDINGS",
        current: "赛事",
        rank: "排名",
        team: "球队",
        played: "场",
        wins: "胜",
        losses: "负",
        draws: "平",
        runsFor: "得分",
        runsAgainst: "失分",
        diff: "净得分",
        pct: "胜率",
        points: "积分"
      },

      schedule: {
        title: "SCHEDULE",
        timezone: "显示时间"
      },

      scheduleStatus: {
        upcoming: "即将进行",
        finished: "已结束"
      },

      leagues: {
        title: "PARTICIPATING LEAGUES",
        details: "联赛详情",
        region: "地区",
        matchTime: "比赛时间",
        owner: "运营",
        teams: "参赛球队",
        discord: "Discord",
        noLeagues: "暂无参加的联赛。"
      },

      about: {
        title: "ABOUT AHBA",
        text:
          "Asia HCBB Baseball Alliance（AHBA）连接亚洲 HCBB 社区，并支持跨国家和地区的比赛、赛事及交流活动。",
        missionTitle: "MISSION",
        mission:
          "连接亚洲 HCBB，创造更多交流机会。",
        scopeTitle: "ACTIVITIES",
        scope:
          "发布 AHBA 官方处理的比赛信息，包括国际比赛、交流赛、赛事及联赛相关信息。"
      },

      status: {
        scheduled: "预定",
        upcoming: "即将进行",
        live: "进行中",
        finished: "已结束"
      },

      common: {
        vs: "VS",
        home: "主队",
        away: "客队",
        unknown: "—"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    }

  };


  /* =========================================================
     DOM HELPERS
  ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));


  /* =========================================================
     LOCALIZATION HELPERS
  ========================================================= */

  function getLocalized(value, fallback = "—") {

    if (value === null || value === undefined) {
      return fallback;
    }

    if (typeof value === "string") {
      return value;
    }

    if (typeof value === "number") {
      return String(value);
    }

    if (typeof value === "object") {

      return (
        value[currentLang] ??
        value.ja ??
        value.en ??
        value.ko ??
        value.zh ??
        fallback
      );

    }

    return fallback;
  }


  function displayText(value, fallback = "—") {
    return getLocalized(value, fallback);
  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function t(path, fallback = "") {

    const parts = path.split(".");

    let value = I18N[currentLang];

    for (const part of parts) {

      if (
        value === undefined ||
        value === null
      ) {
        return fallback || path;
      }

      value = value[part];
    }

    return value ?? fallback ?? path;
  }


  /* =========================================================
     GAME HELPERS
  ========================================================= */

  function getGameTime(game) {

    return (
      game?.time ??
      game?.datetime ??
      game?.dateTime ??
      game?.startTime ??
      null
    );

  }


  function getHome(game) {

    return (
      game?.home ??
      game?.homeTeam ??
      game?.teams?.home ??
      null
    );

  }


  function getAway(game) {

    return (
      game?.away ??
      game?.awayTeam ??
      game?.teams?.away ??
      null
    );

  }


  function getHomeScore(game) {

    return (
      game?.homeScore ??
      game?.score?.home ??
      game?.scores?.home ??
      null
    );

  }


  function getAwayScore(game) {

    return (
      game?.awayScore ??
      game?.score?.away ??
      game?.scores?.away ??
      null
    );

  }


  function getGameStatus(game) {

    const status =
      game?.status ??
      game?.state ??
      "scheduled";

    return String(status).toLowerCase();

  }


  function getGameType(game) {

    return (
      game?.type ??
      game?.eventType ??
      game?.category ??
      "published"
    );

  }


  function typeLabel(type) {

    const key = String(type).toLowerCase();

    if (
      key === "international" ||
      key === "international-match"
    ) {
      return t("games.international");
    }

    if (
      key === "friendly" ||
      key === "friendly-match"
    ) {
      return t("games.friendly");
    }

    if (
      key === "tournament" ||
      key === "event"
    ) {
      return t("games.tournament");
    }

    return t("games.published");

  }


  function getEventName(game) {

    if (game?.eventName) {
      return displayText(game.eventName);
    }

    if (game?.tournamentName) {
      return displayText(game.tournamentName);
    }

    if (game?.event) {
      return displayText(game.event);
    }

    return typeLabel(getGameType(game));

  }


  /* =========================================================
     DATE / TIME
  ========================================================= */

  function parseDate(value) {

    if (!value) {
      return null;
    }

    const date = value instanceof Date
      ? value
      : new Date(value);

    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return date;

  }


  function formatDateTime(value) {

    const date = parseDate(value);

    if (!date) {
      return "—";
    }

    const config =
      LANGUAGE_CONFIG[currentLang] ||
      LANGUAGE_CONFIG.ja;

    return new Intl.DateTimeFormat(
      config.locale,
      {
        timeZone: currentZone,
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: currentLang === "en"
      }
    ).format(date);

  }


  function formatTime(value) {

    const date = parseDate(value);

    if (!date) {
      return "—";
    }

    const config =
      LANGUAGE_CONFIG[currentLang] ||
      LANGUAGE_CONFIG.ja;

    return new Intl.DateTimeFormat(
      config.locale,
      {
        timeZone: currentZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: currentLang === "en"
      }
    ).format(date);

  }


  function formatDate(value) {

    const date = parseDate(value);

    if (!date) {
      return "—";
    }

    const config =
      LANGUAGE_CONFIG[currentLang] ||
      LANGUAGE_CONFIG.ja;

    return new Intl.DateTimeFormat(
      config.locale,
      {
        timeZone: currentZone,
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "short"
      }
    ).format(date);

  }


  function sortAscending(a, b) {

    const da = parseDate(getGameTime(a));
    const db = parseDate(getGameTime(b));

    if (!da && !db) return 0;
    if (!da) return 1;
    if (!db) return -1;

    return da - db;

  }


  function sortDescending(a, b) {

    return sortAscending(b, a);

  }


  /* =========================================================
     DATA ACCESS
  ========================================================= */

  function getGames() {

    return Array.isArray(D.games)
      ? D.games
      : [];

  }


  function getLeagues() {

    return Array.isArray(D.leagues)
      ? D.leagues
      : [];

  }


  function getLeagueById(id) {

    return getLeagues().find(
      league => String(league?.id) === String(id)
    );

  }


  function getLeagueName(id) {

    const league = getLeagueById(id);

    if (!league) {
      return id || "AHBA";
    }

    return getLocalized(
      league.name,
      league.id || "AHBA"
    );

  }


  /* =========================================================
     SCHEDULE DATA
  ========================================================= */

  function getScheduleGames() {

    const games = getGames();

    return games
      .filter(game => {

        const status = getGameStatus(game);

        if (currentScheduleStatus === "finished") {
          return status === "finished";
        }

        return status !== "finished";

      })
      .sort(
        currentScheduleStatus === "finished"
          ? sortDescending
          : sortAscending
      );

  }


  function updateScheduleCounts() {

    const games = getGames();

    const upcoming = games.filter(
      game => getGameStatus(game) !== "finished"
    ).length;

    const finished = games.filter(
      game => getGameStatus(game) === "finished"
    ).length;

    const upcomingCount =
      $("#scheduleUpcomingCount");

    const finishedCount =
      $("#scheduleFinishedCount");

    if (upcomingCount) {
      upcomingCount.textContent = upcoming;
    }

    if (finishedCount) {
      finishedCount.textContent = finished;
    }

  }


  /* =========================================================
     LANGUAGE APPLICATION
  ========================================================= */

  function applyLanguage() {

    document.documentElement.lang = currentLang;

    $$("[data-i18n], [data-i18n-html]")
      .forEach(element => {

        const key =
          element.dataset.i18n ||
          element.dataset.i18nHtml;

        const value = t(key);

        if (
          element.hasAttribute("data-i18n-html")
        ) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }

      });


    $(
      ".language-switcher button, .header-language button"
    ).forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === currentLang
      );

    });


    updateTimezoneButtons();
    updateFilterTexts();
    updateStandingsSelector();

    renderNextGame();
    renderGames();
    renderStandings();
    renderSchedule();
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
      lang
    );

    currentZone =
      LANGUAGE_CONFIG[lang]?.timezone ||
      "Asia/Tokyo";

    applyLanguage();

  }


  /* =========================================================
     TIMEZONE
  ========================================================= */

  function updateTimezoneButtons() {

    $$("[data-zone]").forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.zone === currentZone
      );

    });

  }


  /* =========================================================
     FILTERS
  ========================================================= */

  function getEventKey(game) {

    return String(
      game?.eventId ??
      game?.tournamentId ??
      game?.event ??
      game?.tournament ??
      getGameType(game)
    );

  }


  function getEventOptions() {

    const map = new Map();

    getGames().forEach(game => {

      const key = getEventKey(game);

      if (!map.has(key)) {

        map.set(
          key,
          getEventName(game)
        );

      }

    });

    return Array.from(map.entries());

  }


  function updateFilterTexts() {

    const filter = $("#leagueFilter");

    if (filter) {

      const currentValue =
        filter.value || "all";

      filter.innerHTML = "";

      const allOption =
        document.createElement("option");

      allOption.value = "all";
      allOption.textContent =
        t("games.all");

      filter.appendChild(allOption);


      getEventOptions().forEach(
        ([key, label]) => {

          const option =
            document.createElement("option");

          option.value = key;
          option.textContent = label;

          filter.appendChild(option);

        }
      );


      const exists =
        Array.from(filter.options)
          .some(
            option =>
              option.value === currentValue
          );

      filter.value =
        exists ? currentValue : "all";

    }


    const statusFilter =
      $("#statusFilter");

    if (statusFilter) {

      const currentValue =
        statusFilter.value || "all";

      statusFilter.innerHTML = "";

      const statuses = [
        ["all", t("games.allStatus")],
        ["scheduled", t("games.upcoming")],
        ["upcoming", t("games.upcoming")],
        ["live", t("games.live")],
        ["finished", t("games.finished")]
      ];

      statuses.forEach(
        ([value, label]) => {

          if (
            Array.from(statusFilter.options)
              .some(
                option =>
                  option.value === value
              )
          ) {
            return;
          }

          const option =
            document.createElement("option");

          option.value = value;
          option.textContent = label;

          statusFilter.appendChild(option);

        }
      );

      statusFilter.value =
        Array.from(statusFilter.options)
          .some(
            option =>
              option.value === currentValue
          )
          ? currentValue
          : "all";

    }

  }


  /* =========================================================
     NEXT GAME
  ========================================================= */

  function renderNextGame() {

    const container = $("#nextGame");

    if (!container) {
      return;
    }

    const upcoming =
      getGames()
        .filter(
          game =>
            getGameStatus(game) !== "finished"
        )
        .sort(sortAscending);

    if (!upcoming.length) {

      container.innerHTML = `
        <div class="next-empty">
          ${escapeHTML(t("next.empty"))}
        </div>
      `;

      return;
    }


    const game = upcoming[0];

    const date =
      parseDate(getGameTime(game));

    const home =
      displayText(
        getHome(game),
        t("common.unknown")
      );

    const away =
      displayText(
        getAway(game),
        t("common.unknown")
      );

    const eventName =
      getEventName(game);

    const gameId =
      game?.id || "";


    const detailHref =
      gameId
        ? `./game.html?id=${encodeURIComponent(gameId)}`
        : "#";


    container.innerHTML = `
      <div class="next-game-content">

        <div class="next-game-meta">
          <span class="next-event">
            ${escapeHTML(eventName)}
          </span>

          <span class="next-status">
            ${escapeHTML(
              t(
                `status.${getGameStatus(game)}`,
                t("status.scheduled")
              )
            )}
          </span>
        </div>

        <div class="next-date">
          ${escapeHTML(formatDate(date))}
        </div>

        <div class="next-time">
          ${escapeHTML(formatTime(date))}
        </div>

        <div class="next-matchup">

          <div class="next-team next-home">
            <span class="next-team-label">
              ${escapeHTML(t("common.home"))}
            </span>

            <strong>
              ${escapeHTML(home)}
            </strong>
          </div>

          <div class="next-vs">
            ${escapeHTML(t("common.vs"))}
          </div>

          <div class="next-team next-away">
            <span class="next-team-label">
              ${escapeHTML(t("common.away"))}
            </span>

            <strong>
              ${escapeHTML(away)}
            </strong>
          </div>

        </div>

        ${
          gameId
            ? `
              <a
                class="next-detail-link"
                href="${detailHref}"
              >
                ${escapeHTML(t("next.details"))}
              </a>
            `
            : ""
        }

      </div>
    `;

  }


  /* =========================================================
     MATCH CENTER
  ========================================================= */

  function renderGames() {

    const container = $("#gamesGrid");

    if (!container) {
      return;
    }


    let games = getGames();


    const selectedEvent =
      $("#leagueFilter")?.value || "all";

    const selectedStatus =
      $("#statusFilter")?.value || "all";


    /* Event / tournament filter */

    if (selectedEvent !== "all") {

      games = games.filter(game => {

        return getEventKey(game) === selectedEvent;

      });

    }


    /* Status filter */

    if (selectedStatus !== "all") {

      games = games.filter(game => {

        const status =
          getGameStatus(game);

        if (
          selectedStatus === "scheduled"
        ) {
          return (
            status === "scheduled" ||
            status === "upcoming"
          );
        }

        return status === selectedStatus;

      });

    }


    /* Latest results first / upcoming first */

    games.sort((a, b) => {

      const sa = getGameStatus(a);
      const sb = getGameStatus(b);

      if (
        sa === "finished" &&
        sb !== "finished"
      ) {
        return 1;
      }

      if (
        sa !== "finished" &&
        sb === "finished"
      ) {
        return -1;
      }

      return sortAscending(a, b);

    });


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


  function createGameCard(game) {

    const status =
      getGameStatus(game);

    const home =
      displayText(
        getHome(game),
        t("common.unknown")
      );

    const away =
      displayText(
        getAway(game),
        t("common.unknown")
      );

    const homeScore =
      getHomeScore(game);

    const awayScore =
      getAwayScore(game);

    const date =
      parseDate(getGameTime(game));

    const gameId =
      game?.id || "";

    const eventName =
      getEventName(game);

    const round =
      game?.round ??
      game?.matchday ??
      null;


    let scoreHTML = "";

    if (
      status === "finished" ||
      status === "live"
    ) {

      scoreHTML = `
        <div class="game-score">
          <span>
            ${escapeHTML(
              homeScore ?? "—"
            )}
          </span>

          <span class="score-separator">
            -
          </span>

          <span>
            ${escapeHTML(
              awayScore ?? "—"
            )}
          </span>
        </div>
      `;

    } else {

      scoreHTML = `
        <div class="game-score upcoming-score">
          ${escapeHTML(t("common.vs"))}
        </div>
      `;

    }


    const detailHTML =
      gameId
        ? `
          <a
            class="game-detail-link"
            href="./game.html?id=${encodeURIComponent(gameId)}"
          >
            ${escapeHTML(t("games.details"))}
          </a>
        `
        : "";


    return `
      <article class="game-card">

        <div class="game-card-top">

          <span class="game-type">
            ${escapeHTML(typeLabel(getGameType(game)))}
          </span>

          <span class="game-status ${escapeHTML(status)}">
            ${escapeHTML(
              t(
                `status.${status}`,
                t("status.scheduled")
              )
            )}
          </span>

        </div>


        <div class="game-event">
          ${escapeHTML(eventName)}
        </div>


        ${
          round !== null
            ? `
              <div class="game-round">
                ${escapeHTML(t("games.round"))}
                ${escapeHTML(round)}
              </div>
            `
            : ""
        }


        <div class="game-matchup">

          <div class="game-team home-team">
            <strong>
              ${escapeHTML(home)}
            </strong>
          </div>

          ${scoreHTML}

          <div class="game-team away-team">
            <strong>
              ${escapeHTML(away)}
            </strong>
          </div>

        </div>


        ${
          date
            ? `
              <div class="game-date">
                ${escapeHTML(formatDateTime(date))}
              </div>
            `
            : ""
        }


        ${detailHTML}

      </article>
    `;

  }


  /* =========================================================
     STANDINGS
  ========================================================= */

  function getSelectedStandings() {

    const standings =
      D.standings;

    if (Array.isArray(standings)) {
      return standings;
    }

    if (
      standings &&
      Array.isArray(standings.current)
    ) {
      return standings.current;
    }

    if (
      standings &&
      typeof standings === "object"
    ) {

      const keys =
        Object.keys(standings);

      const firstArrayKey =
        keys.find(
          key =>
            Array.isArray(
              standings[key]
            )
        );

      if (firstArrayKey) {
        return standings[firstArrayKey];
      }

    }

    return [];

  }


  function getStandingName(key) {

    if (key === "current") {
      return t("standings.current");
    }

    const league =
      getLeagueById(key);

    if (league) {
      return getLocalized(
        league.name,
        key
      );
    }

    const names = {
      A: {
        ja: "Aリーグ",
        ko: "A 리그",
        en: "A League",
        zh: "A 联赛"
      },

      B: {
        ja: "Bリーグ",
        ko: "B 리그",
        en: "B League",
        zh: "B 联赛"
      },

      KOREA: {
        ja: "KOREAリーグ",
        ko: "KOREA 리그",
        en: "KOREA League",
        zh: "KOREA 联赛"
      }
    };

    return getLocalized(
      names[key],
      key
    );

  }


  function updateStandingsSelector() {

    const selector =
      $("#standingsLeague");

    if (!selector) {
      return;
    }


    const currentValue =
      selector.value || "current";


    selector.innerHTML = "";


    const standings =
      D.standings;


    let keys = [];


    if (Array.isArray(standings)) {

      keys = ["current"];

    } else if (
      standings &&
      typeof standings === "object"
    ) {

      keys =
        Object.keys(standings)
          .filter(
            key =>
              Array.isArray(
                standings[key]
              )
          );

    }


    if (!keys.length) {
      keys = ["current"];
    }


    keys.forEach(key => {

      const option =
        document.createElement("option");

      option.value = key;
      option.textContent =
        getStandingName(key);

      selector.appendChild(option);

    });


    selector.value =
      keys.includes(currentValue)
        ? currentValue
        : keys[0];

  }


  function renderStandings() {

    const body =
      $("#standingsBody");

    if (!body) {
      return;
    }


    const rows =
      getSelectedStandings();


    if (!rows.length) {

      body.innerHTML = `
        <tr>
          <td
            colspan="10"
            class="empty-state"
          >
            ${escapeHTML(
              t("games.noGames")
            )}
          </td>
        </tr>
      `;

      return;
    }


    body.innerHTML =
      rows
        .map(
          (row, index) =>
            createStandingRow(
              row,
              index
            )
        )
        .join("");

  }


  function createStandingRow(row, index) {

    const team =
      displayText(
        row?.team ??
        row?.name ??
        row?.teamName,
        t("common.unknown")
      );


    const played =
      row?.played ??
      row?.games ??
      row?.gp ??
      0;

    const wins =
      row?.wins ??
      row?.w ??
      0;

    const losses =
      row?.losses ??
      row?.l ??
      0;

    const draws =
      row?.draws ??
      row?.d ??
      0;

    const runsFor =
      row?.runsFor ??
      row?.rf ??
      0;

    const runsAgainst =
      row?.runsAgainst ??
      row?.ra ??
      0;

    const points =
      row?.points ??
      row?.pts ??
      0;


    const diff =
      runsFor - runsAgainst;


    const pct =
      played > 0
        ? (
            wins / played
          ).toFixed(3)
        : "—";


    return `
      <tr>

        <td>
          ${index + 1}
        </td>

        <td class="standing-team">
          ${escapeHTML(team)}
        </td>

        <td>
          ${escapeHTML(played)}
        </td>

        <td>
          ${escapeHTML(wins)}
        </td>

        <td>
          ${escapeHTML(losses)}
        </td>

        <td>
          ${escapeHTML(draws)}
        </td>

        <td>
          ${escapeHTML(runsFor)}
        </td>

        <td>
          ${escapeHTML(runsAgainst)}
        </td>

        <td>
          ${escapeHTML(diff)}
        </td>

        <td>
          ${escapeHTML(points)}
        </td>

      </tr>
    `;

  }


  /* =========================================================
     SCHEDULE
  ========================================================= */

  function renderSchedule() {

    const container =
      $("#scheduleList");

    if (!container) {
      return;
    }


    updateScheduleCounts();


    const games =
      getScheduleGames();


    if (!games.length) {

      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(
            currentScheduleStatus === "finished"
              ? t("scheduleStatus.finished")
              : t("next.empty")
          )}
        </div>
      `;

      return;
    }


    container.innerHTML =
      games
        .map(createScheduleItem)
        .join("");

  }


  function createScheduleItem(game) {

    const status =
      getGameStatus(game);

    const date =
      parseDate(getGameTime(game));

    const home =
      displayText(
        getHome(game),
        t("common.unknown")
      );

    const away =
      displayText(
        getAway(game),
        t("common.unknown")
      );

    const leagueName =
      game?.league
        ? getLeagueName(game.league)
        : getEventName(game);

    const gameId =
      game?.id || "";


    return `
      <article class="schedule-item">

        <div class="schedule-time">

          <div class="schedule-date">
            ${escapeHTML(
              formatDate(date)
            )}
          </div>

          <div class="schedule-clock">
            ${escapeHTML(
              formatTime(date)
            )}
          </div>

        </div>


        <div class="schedule-main">

          <div class="schedule-event">
            ${escapeHTML(leagueName)}
          </div>

          <div class="schedule-matchup">

            <strong>
              ${escapeHTML(home)}
            </strong>

            <span>
              ${escapeHTML(t("common.vs"))}
            </span>

            <strong>
              ${escapeHTML(away)}
            </strong>

          </div>

        </div>


        <div class="schedule-status ${escapeHTML(status)}">
          ${escapeHTML(
            t(
              `status.${status}`,
              t("status.scheduled")
            )
          )}
        </div>


        ${
          gameId
            ? `
              <a
                class="schedule-detail-link"
                href="./game.html?id=${encodeURIComponent(gameId)}"
              >
                ${escapeHTML(
                  t("games.details")
                )}
              </a>
            `
            : ""
        }

      </article>
    `;

  }


  /* =========================================================
     LEAGUES
  ========================================================= */

  function renderLeagues() {

    const container =
      $("#leagueCards");

    if (!container) {
      return;
    }


    const leagues =
      getLeagues();


    if (!leagues.length) {

      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(
            t("leagues.noLeagues")
          )}
        </div>
      `;

      return;
    }


    container.innerHTML =
      leagues
        .map(createLeagueCard)
        .join("");

  }


  function createLeagueCard(league) {

    const name =
      getLocalized(
        league?.name,
        league?.id || "AHBA"
      );

    const region =
      getLocalized(
        league?.region ??
        league?.country,
        "—"
      );

    const description =
      getLocalized(
        league?.description,
        ""
      );

    const matchTime =
      getLocalized(
        league?.matchTime,
        "—"
      );

    const owner =
      getLocalized(
        league?.owner,
        league?.owner || "AHBA"
      );

    const teams =
      Array.isArray(league?.teams)
        ? league.teams
        : [];


    return `
      <article class="league-card">

        <div class="league-card-header">

          <div>
            <span class="league-id">
              ${escapeHTML(
                league?.id || ""
              )}
            </span>

            <h3>
              ${escapeHTML(name)}
            </h3>
          </div>

        </div>


        ${
          description
            ? `
              <p class="league-description">
                ${escapeHTML(description)}
              </p>
            `
            : ""
        }


        <div class="league-meta">

          <div>
            <span class="meta-label">
              ${escapeHTML(
                t("leagues.region")
              )}
            </span>

            <strong>
              ${escapeHTML(region)}
            </strong>
          </div>


          <div>
            <span class="meta-label">
              ${escapeHTML(
                t("leagues.matchTime")
              )}
            </span>

            <strong>
              ${escapeHTML(matchTime)}
            </strong>
          </div>


          <div>
            <span class="meta-label">
              ${escapeHTML(
                t("leagues.owner")
              )}
            </span>

            <strong>
              ${escapeHTML(owner)}
            </strong>
          </div>

        </div>


        ${
          teams.length
            ? `
              <div class="league-teams">

                <span class="meta-label">
                  ${escapeHTML(
                    t("leagues.teams")
                  )}
                </span>

                <div class="team-list">

                  ${teams
                    .map(team => `
                      <span class="team-chip">
                        ${escapeHTML(
                          displayText(team)
                        )}
                      </span>
                    `)
                    .join("")}

                </div>

              </div>
            `
            : ""
        }


        <div class="league-actions">

          <a
            class="league-link"
            href="./league.html?id=${encodeURIComponent(
              league?.id || ""
            )}"
          >
            ${escapeHTML(
              t("leagues.details")
            )}
          </a>


          ${
            league?.discord?.url
              ? `
                <a
                  class="league-discord"
                  href="${escapeHTML(
                    league.discord.url
                  )}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${escapeHTML(
                    t("leagues.discord")
                  )}
                </a>
              `
              : ""
          }

        </div>

      </article>
    `;

  }


  /* =========================================================
     CLOCK
  ========================================================= */

  function updateClock() {

    const clock =
      $("#clock");

    const timezone =
      $("#tz");

    if (!clock) {
      return;
    }


    const config =
      LANGUAGE_CONFIG[currentLang] ||
      LANGUAGE_CONFIG.ja;


    const now =
      new Date();


    clock.textContent =
      new Intl.DateTimeFormat(
        config.locale,
        {
          timeZone: currentZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: currentLang === "en"
        }
      ).format(now);


    if (timezone) {

      timezone.textContent =
        config.timezoneLabel;

    }

  }


  /* =========================================================
     EVENT HANDLERS
  ========================================================= */

  function setScheduleStatus(status) {

    if (
      status !== "upcoming" &&
      status !== "finished"
    ) {
      status = "upcoming";
    }

    currentScheduleStatus = status;


    $$(
      "[data-schedule-status]"
    ).forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.scheduleStatus === status
      );

    });


    renderSchedule();

  }


  function bindEvents() {

    /* Language */

    $$(
      ".language-switcher button, .header-language button"
    ).forEach(button => {

      button.addEventListener(
        "click",
        () => {

          setLanguage(
            button.dataset.lang
          );

        }
      );

    });


    /* Timezone */

    $$("[data-zone]").forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const zone =
            button.dataset.zone;

          if (!zone) {
            return;
          }

          currentZone = zone;

          updateTimezoneButtons();

          renderNextGame();
          renderGames();
          renderSchedule();
          updateClock();

        }
      );

    });


    /* Match Center event filter */

    const leagueFilter =
      $("#leagueFilter");

    if (leagueFilter) {

      leagueFilter.addEventListener(
        "change",
        () => {

          renderGames();

        }
      );

    }


    /* Match Center status filter */

    const statusFilter =
      $("#statusFilter");

    if (statusFilter) {

      statusFilter.addEventListener(
        "change",
        () => {

          renderGames();

        }
      );

    }


    /* Standings selector */

    const standingsSelector =
      $("#standingsLeague");

    if (standingsSelector) {

      standingsSelector.addEventListener(
        "change",
        () => {

          renderStandings();

        }
      );

    }


    /* Schedule status */

    $$(
      "[data-schedule-status]"
    ).forEach(button => {

      button.addEventListener(
        "click",
        () => {

          setScheduleStatus(
            button.dataset.scheduleStatus
          );

        }
      );

    });


    /* Navigation */

    $$(
      '.main-nav a[href^="#"], .topbar nav a[href^="#"]'
    ).forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const target =
            document.querySelector(
              link.getAttribute("href")
            );

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

  }


  /* =========================================================
     INITIALIZATION
  ========================================================= */

  function init() {

    if (
      !LANGS.includes(currentLang)
    ) {
      currentLang = "ja";
    }


    currentZone =
      LANGUAGE_CONFIG[currentLang]?.timezone ||
      "Asia/Tokyo";


    bindEvents();

    applyLanguage();

    setScheduleStatus(
      currentScheduleStatus
    );


    /* Clock */

    updateClock();

    setInterval(
      updateClock,
      1000
    );


    /* Debug */

    console.log(
      "[AHBA] Data loaded:",
      D
    );

    console.log(
      "[AHBA] Games:",
      getGames().length
    );

    console.log(
      "[AHBA] Leagues:",
      getLeagues().length
    );

  }


  /* =========================================================
     START
  ========================================================= */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
