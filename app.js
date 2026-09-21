/* =========================================================
   ASIA HCBB BASEBALL ALLIANCE
   app.js
   Data-compatible version
========================================================= */

(() => {
  "use strict";

  /* =======================================================
     DATA
  ======================================================= */

  const D =
    typeof ALLIANCE_DATA !== "undefined"
      ? ALLIANCE_DATA
      : {
          leagues: [],
          games: [],
          standings: {}
        };

  /* =======================================================
     STATE
  ======================================================= */

  let currentLang =
    localStorage.getItem("asiaHCBBLanguage") || "ja";

  const LANGS = ["ja", "ko", "en", "zh"];

  let currentZone = "Asia/Tokyo";
  let currentScheduleStatus = "upcoming";

  /* =======================================================
     LANGUAGE / TIMEZONE
  ======================================================= */

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
      timezoneLabel: "EST"
    },

    zh: {
      locale: "zh-TW",
      timezone: "Asia/Taipei
      timezoneLabel: "CST"
    }
  };

  /* =======================================================
     TRANSLATIONS
  ======================================================= */

  const I18N = {

    ja: {

      nav: {
        games: "試合情報",
        standings: "順位表",
        schedule: "日程",
        leagues: "リーグ紹介",
        about: "AHBAについて"
      },

      hero: {
        eyebrow: "ASIA HCBB BASEBALL ALLIANCE",
        title: "アジアのHCBBを、<br><span>ひとつにつなぐ。</span>",
        description:
          "アジア各地域のHCBBコミュニティをつなぎ、試合・リーグ・大会・交流の情報を共有します。",
        games: "試合情報を見る",
        schedule: "日程を見る"
      },

      next: {
        title: "NEXT GAME",
        noGame: "現在予定されている試合はありません",
        view: "試合詳細を見る →"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "試合結果",
        all: "すべての大会",
        allStatus: "すべて",
        finished: "終了",
        upcoming: "予定",
        detail: "試合詳細を見る →",
        international: "国際試合",
        friendly: "交流戦",
        tournament: "大会",
        event: "大会・イベント",
        noGames: "該当する試合はありません"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "順位表",
        tournament: "大会",
        team: "チーム",
        g: "試合",
        w: "勝",
        l: "敗",
        d: "分",
        pct: "勝率",
        rs: "得点",
        ra: "失点",
        diff: "得失点",
        noData: "順位表データがありません"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "日程",
        timezone: "表示タイムゾーン",
        japan: "日本",
        korea: "韓国",
        taiwan: "台湾",
        newYork: "ニューヨーク",
        upcoming: "予定",
        finished: "終了",
        noData: "表示できる日程がありません"
      },

      scheduleStatus: {
        upcoming: "予定",
        finished: "終了"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "リーグ紹介",
        region: "地域",
        matchTime: "基本試合時間",
        teams: "参加チーム",
        detail: "リーグ詳細を見る →"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "アジアのHCBBを、<br><span>ひとつにつなぐ。</span>",
        description:
          "Asia HCBB Baseball Alliance（AHBA）は、アジア各地域のHCBBコミュニティをつなぎ、試合・リーグ・大会・交流の情報を共有するためのAllianceです。",
        button: "AHBAについて詳しく見る →"
      },

      status: {
        finished: "終了",
        upcoming: "予定"
      },

      common: {
        vs: "VS",
        loading: "読み込み中...",
        all: "すべて",
        unknown: "未定"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },

    ko: {

      nav: {
        games: "경기 정보",
        standings: "순위표",
        schedule: "일정",
        leagues: "리그 소개",
        about: "AHBA 소개"
      },

      hero: {
        eyebrow: "ASIA HCBB BASEBALL ALLIANCE",
        title: "아시아의 HCBB를,<br><span>하나로 연결합니다.</span>",
        description:
          "아시아 각 지역의 HCBB 커뮤니티를 연결하고 경기·리그·대회·교류 정보를 공유합니다.",
        games: "경기 정보 보기",
        schedule: "일정 보기"
      },

      next: {
        title: "NEXT GAME",
        noGame: "현재 예정된 경기가 없습니다",
        view: "경기 상세 보기 →"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "경기 결과",
        all: "모든 대회",
        allStatus: "전체",
        finished: "종료",
        upcoming: "예정",
        detail: "경기 상세 보기 →",
        international: "국제 경기",
        friendly: "교류전",
        tournament: "대회",
        event: "대회·이벤트",
        noGames: "해당하는 경기가 없습니다"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "순위표",
        tournament: "대회",
        team: "팀",
        g: "경기",
        w: "승",
        l: "패",
        d: "무",
        pct: "승률",
        rs: "득점",
        ra: "실점",
        diff: "득실",
        noData: "순위 데이터가 없습니다"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "일정",
        timezone: "표시 시간대",
        japan: "일본",
        korea: "한국",
        taiwan: "대만",
        newYork: "뉴욕",
        upcoming: "예정",
        finished: "종료",
        noData: "표시할 일정이 없습니다"
      },

      scheduleStatus: {
        upcoming: "예정",
        finished: "종료"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "리그 소개",
        region: "지역",
        matchTime: "기본 경기 시간",
        teams: "참가 팀",
        detail: "리그 상세 보기 →"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "아시아의 HCBB를,<br><span>하나로 연결합니다.</span>",
        description:
          "Asia HCBB Baseball Alliance（AHBA）는 아시아 각 지역의 HCBB 커뮤니티를 연결하고 경기·리그·대회·교류 정보를 공유하는 Alliance입니다.",
        button: "AHBA 자세히 보기 →"
      },

      status: {
        finished: "종료",
        upcoming: "예정"
      },

      common: {
        vs: "VS",
        loading: "불러오는 중...",
        all: "전체",
        unknown: "미정"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },

    en: {

      nav: {
        games: "MATCHES",
        standings: "STANDINGS",
        schedule: "SCHEDULE",
        leagues: "LEAGUES",
        about: "ABOUT AHBA"
      },

      hero: {
        eyebrow: "ASIA HCBB BASEBALL ALLIANCE",
        title: "Connecting Asia's HCBB,<br><span>as one community.</span>",
        description:
          "Connecting HCBB communities across Asia and sharing information about games, leagues, tournaments and community exchange.",
        games: "VIEW MATCHES",
        schedule: "VIEW SCHEDULE"
      },

      next: {
        title: "NEXT GAME",
        noGame: "There are currently no scheduled games",
        view: "VIEW MATCH DETAILS →"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "MATCH RESULTS",
        all: "ALL EVENTS",
        allStatus: "ALL",
        finished: "FINISHED",
        upcoming: "UPCOMING",
        detail: "VIEW MATCH DETAILS →",
        international: "INTERNATIONAL",
        friendly: "FRIENDLY",
        tournament: "TOURNAMENT",
        event: "EVENT",
        noGames: "No matching games"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "STANDINGS",
        tournament: "EVENT",
        team: "TEAM",
        g: "G",
        w: "W",
        l: "L",
        d: "D",
        pct: "PCT",
        rs: "RS",
        ra: "RA",
        diff: "DIFF",
        noData: "No standings data"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "SCHEDULE",
        timezone: "TIME ZONE",
        japan: "JAPAN",
        korea: "KOREA",
        taiwan: "TAIWAN",
        newYork: "NEW YORK",
        upcoming: "UPCOMING",
        finished: "FINISHED",
        noData: "No schedule available"
      },

      scheduleStatus: {
        upcoming: "Upcoming",
        finished: "Finished"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "LEAGUES",
        region: "REGION",
        matchTime: "REGULAR MATCH TIME",
        teams: "TEAMS",
        detail: "VIEW LEAGUE →"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "Connecting Asia's HCBB,<br><span>as one community.</span>",
        description:
          "Asia HCBB Baseball Alliance (AHBA) connects HCBB communities across Asia and provides a shared place for games, leagues, tournaments and community exchange.",
        button: "LEARN MORE ABOUT AHBA →"
      },

      status: {
        finished: "FINISHED",
        upcoming: "UPCOMING"
      },

      common: {
        vs: "VS",
        loading: "Loading...",
        all: "ALL",
        unknown: "TBD"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },

    zh: {

      nav: {
        games: "比赛信息",
        standings: "积分榜",
        schedule: "赛程",
        leagues: "联赛介绍",
        about: "关于 AHBA"
      },

      hero: {
        eyebrow: "ASIA HCBB BASEBALL ALLIANCE",
        title: "连接亚洲 HCBB，<br><span>让社区汇聚一处。</span>",
        description:
          "连接亚洲各地区的 HCBB 社区，为比赛、联赛、赛事和交流提供统一的信息平台。",
        games: "查看比赛",
        schedule: "查看赛程"
      },

      next: {
        title: "NEXT GAME",
        noGame: "目前没有预定比赛",
        view: "查看比赛详情 →"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "比赛结果",
        all: "全部赛事",
        allStatus: "全部",
        finished: "已结束",
        upcoming: "即将进行",
        detail: "查看比赛详情 →",
        international: "国际比赛",
        friendly: "交流赛",
        tournament: "赛事",
        event: "赛事・活动",
        noGames: "没有符合条件的比赛"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "积分榜",
        tournament: "赛事",
        team: "球队",
        g: "场",
        w: "胜",
        l: "负",
        d: "平",
        pct: "胜率",
        rs: "得分",
        ra: "失分",
        diff: "得失分",
        noData: "暂无积分榜数据"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "赛程",
        timezone: "显示时区",
        japan: "日本",
        korea: "韩国",
        taiwan: "台湾",
        newYork: "纽约",
        upcoming: "即将进行",
        finished: "已结束",
        noData: "暂无可显示的赛程"
      },

      scheduleStatus: {
        upcoming: "即将进行",
        finished: "已结束"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "联赛介绍",
        region: "地区",
        matchTime: "基本比赛时间",
        teams: "参赛队伍",
        detail: "查看联赛详情 →"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "连接亚洲 HCBB，<br><span>让社区汇聚一处。</span>",
        description:
          "Asia HCBB Baseball Alliance（AHBA）连接亚洲各地区的 HCBB 社区，为比赛、联赛、赛事和交流提供统一的信息平台。",
        button: "了解更多关于 AHBA →"
      },

      status: {
        finished: "已结束",
        upcoming: "即将进行"
      },

      common: {
        vs: "VS",
        loading: "加载中...",
        all: "全部",
        unknown: "待定"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    }
  };

  /* =======================================================
     HELPERS
  ======================================================= */

  const $ = (selector) =>
    document.querySelector(selector);

  const $$ = (selector) =>
    [...document.querySelectorAll(selector)];

  function getLocalized(value, fallback = "") {

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
        Object.values(value)[0] ??
        fallback
      );
    }

    return String(value);
  }


  function displayText(value, fallback = "—") {

    const result = getLocalized(value, fallback);

    if (
      result === "[object Object]" ||
      result === "undefined" ||
      result === "null"
    ) {
      return fallback;
    }

    return result;
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


  function getGameTime(game) {

    return (
      game?.time ??
      game?.datetime ??
      game?.dateTime ??
      game?.startTime ??
      game?.start ??
      game?.date ??
      null
    );
  }


  function getHome(game) {

    return (
      game?.home ??
      game?.homeTeam ??
      game?.home_team ??
      game?.teams?.home ??
      ""
    );
  }


  function getAway(game) {

    return (
      game?.away ??
      game?.awayTeam ??
      game?.away_team ??
      game?.teams?.away ??
      ""
    );
  }


  function getHomeScore(game) {

    return (
      game?.homeScore ??
      game?.home_score ??
      game?.scores?.home ??
      null
    );
  }


  function getAwayScore(game) {

    return (
      game?.awayScore ??
      game?.away_score ??
      game?.scores?.away ??
      null
    );
  }


  function getGameStatus(game) {

    return String(
      game?.status ??
      "upcoming"
    ).toLowerCase();
  }


  function getGameType(game) {

    return (
      game?.type ??
      game?.category ??
      game?.eventType ??
      "event"
    );
  }


  function typeLabel(type) {

    const key = String(type).toLowerCase();

    if (key === "international") {
      return t("games.international");
    }

    if (key === "friendly") {
      return t("games.friendly");
    }

    if (
      key === "tournament" ||
      key === "cup"
    ) {
      return t("games.tournament");
    }

    return t("games.event");
  }


  function getEventName(game) {

    return displayText(
      game?.title ??
      game?.event ??
      game?.eventName ??
      game?.competition ??
      game?.tournament ??
      game?.name ??
      typeLabel(getGameType(game))
    );
  }


  function parseDate(value) {

    if (!value) {
      return null;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return date;
  }


  function formatDateTime(
    value,
    zone = currentZone,
    mode = "datetime"
  ) {

    const date = parseDate(value);

    if (!date) {
      return {
        date: "—",
        time: "—",
        full: "—"
      };
    }

    const config =
      LANGUAGE_CONFIG[currentLang] ||
      LANGUAGE_CONFIG.ja;

    const locale = config.locale;

    const timeFormatter =
      new Intl.DateTimeFormat(locale, {
        timeZone: zone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: currentLang === "en"
      });

    const dateFormatter =
      new Intl.DateTimeFormat(locale, {
        timeZone: zone,
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "short"
      });

    return {
      date: dateFormatter.format(date),
      time: timeFormatter.format(date),
      full:
        mode === "time"
          ? timeFormatter.format(date)
          : `${dateFormatter.format(date)} ${timeFormatter.format(date)}`
    };
  }


  function sortAscending(games) {

    return [...games].sort((a, b) => {

      const da = parseDate(getGameTime(a));
      const db = parseDate(getGameTime(b));

      return (
        (da?.getTime() || 0) -
        (db?.getTime() || 0)
      );
    });
  }


  function sortDescending(games) {

    return [...games].sort((a, b) => {

      const da = parseDate(getGameTime(a));
      const db = parseDate(getGameTime(b));

      return (
        (db?.getTime() || 0) -
        (da?.getTime() || 0)
      );
    });
  }


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


  /* =======================================================
     LANGUAGE
  ======================================================= */

  function applyLanguage() {

    document.documentElement.lang =
      currentLang;

    $$(
      "[data-i18n], [data-i18n-html]"
    ).forEach((element) => {

      const key =
        element.dataset.i18n ||
        element.dataset.i18nHtml;

      const value = t(key);

      if (
        element.hasAttribute(
          "data-i18n-html"
        )
      ) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });


    $$(".language-switcher button, .header-language button")
      .forEach((button) => {

        button.classList.toggle(
          "active",
          button.dataset.lang === currentLang
        );
      });


    updateTimezoneButtons();

    updateFilterTexts();

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

    /*
      言語ごとに基本タイムゾーンを切り替える
    */

    currentZone =
      LANGUAGE_CONFIG[lang].timezone;

    applyLanguage();
  }


  $$(".language-switcher button, .header-language button")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          setLanguage(
            button.dataset.lang
          );

        }
      );

    });


  /* =======================================================
     HEADER CLOCK
  ======================================================= */

  function updateClock() {

    const clock =
      $("#clock");

    const tz =
      $("#tz");

    if (!clock) {
      return;
    }

    const config =
      LANGUAGE_CONFIG[currentLang] ||
      LANGUAGE_CONFIG.ja;

    const now = new Date();

    const formatter =
      new Intl.DateTimeFormat(
        config.locale,
        {
          timeZone:
            config.timezone,

          year: "numeric",
          month: "2-digit",
          day: "2-digit",

          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",

          hour12: false
        }
      );

    clock.textContent =
      formatter.format(now);

    if (tz) {
      tz.textContent =
        config.timezoneLabel;
    }
  }


  setInterval(
    updateClock,
    1000
  );


  /* =======================================================
     FILTERS
  ======================================================= */

  function getEventOptions() {

    const map = new Map();

    getGames().forEach((game) => {

      const type =
        getGameType(game);

      const name =
        getEventName(game);

      const key =
        String(
          game?.eventId ??
          game?.tournamentId ??
          type
        );

      if (!map.has(key)) {
        map.set(key, {
          key,
          name
        });
      }

    });

    return [...map.values()];
  }


  function updateFilterTexts() {

    const leagueFilter =
      $("#leagueFilter");

    const statusFilter =
      $("#statusFilter");

    if (leagueFilter) {

      const previous =
        leagueFilter.value;

      leagueFilter.innerHTML =
        `<option value="all">${escapeHTML(
          t("games.all")
        )}</option>`;

      getEventOptions().forEach((event) => {

        const option =
          document.createElement("option");

        option.value =
          event.key;

        option.textContent =
          event.name;

        leagueFilter.appendChild(
          option
        );

      });

      if (
        [...leagueFilter.options]
          .some(
            o => o.value === previous
          )
      ) {
        leagueFilter.value =
          previous;
      }

    }


    if (statusFilter) {

      const previous =
        statusFilter.value || "all";

      statusFilter.innerHTML = "";

      const options = [
        ["all", t("games.allStatus")],
        ["upcoming", t("games.upcoming")],
        ["finished", t("games.finished")]
      ];

      options.forEach(
        ([value, label]) => {

          const option =
            document.createElement("option");

          option.value = value;
          option.textContent = label;

          statusFilter.appendChild(
            option
          );
        }
      );

      if (
        [...statusFilter.options]
          .some(
            o => o.value === previous
          )
      ) {
        statusFilter.value =
          previous;
      }

    }


    /*
      順位表は「リーグ」ではなく
      大会・イベントとして扱う
    */

    updateStandingsSelector();
  }


  function updateStandingsSelector() {

    const select =
      $("#standingsLeague");

    if (!select) {
      return;
    }

    const previous =
      select.value;

    select.innerHTML = "";

    const standings =
      D.standings;

    if (
      !standings ||
      typeof standings !== "object"
    ) {
      return;
    }


    /*
      新形式:
        standings: {
          A: [...],
          B: [...],
          KOREA: [...]
        }

      または

        standings: {
          current: [...]
        }
    */

    let keys = [];

    if (
      Array.isArray(standings)
    ) {

      keys = ["current"];

    } else {

      keys =
        Object.keys(standings)
          .filter(
            key =>
              Array.isArray(
                standings[key]
              )
          );

    }


    keys.forEach((key) => {

      const option =
        document.createElement("option");

      option.value = key;

      option.textContent =
        getStandingName(key);

      select.appendChild(
        option
      );

    });


    if (
      keys.includes(previous)
    ) {

      select.value =
        previous;

    } else if (keys.length) {

      select.value =
        keys[0];

    }

  }


  function getStandingName(key) {

    const keyUpper =
      String(key).toUpperCase();

    const league =
      getLeagues().find(
        league =>
          String(
            league?.id
          ).toUpperCase() === keyUpper
      );

    if (league) {

      return displayText(
        league.name,
        key
      );

    }

    const specialNames = {

      A: {
        ja: "A LEAGUE",
        ko: "A LEAGUE",
        en: "A LEAGUE",
        zh: "A LEAGUE"
      },

      B: {
        ja: "B LEAGUE",
        ko: "B LEAGUE",
        en: "B LEAGUE",
        zh: "B LEAGUE"
      },

      KOREA: {
        ja: "KOREA LEAGUE",
        ko: "KOREA LEAGUE",
        en: "KOREA LEAGUE",
        zh: "KOREA LEAGUE"
      },

      CURRENT: {
        ja: "大会",
        ko: "대회",
        en: "EVENT",
        zh: "赛事"
      }
    };

    return displayText(
      specialNames[keyUpper],
      key
    );
  }


  /* =======================================================
     NEXT GAME
  ======================================================= */

  function renderNextGame() {

    const container =
      $("#nextGame");

    if (!container) {
      return;
    }

    const upcoming =
      sortAscending(
        getGames().filter(
          game =>
            getGameStatus(game) !==
            "finished"
        )
      );

    const next =
      upcoming[0];

    if (!next) {

      container.innerHTML = `
        <div class="next-empty">
          ${escapeHTML(
            t("next.noGame")
          )}
        </div>
      `;

      const ticker =
        $("#tickerText");

      if (ticker) {
        ticker.textContent =
          t("next.noGame");
      }

      return;
    }


    const formatted =
      formatDateTime(
        getGameTime(next),
        currentZone
      );

    const home =
      displayText(
        getHome(next),
        t("common.unknown")
      );

    const away =
      displayText(
        getAway(next),
        t("common.unknown")
      );

    const event =
      getEventName(next);

    const id =
      next.id ??
      next.gameId ??
      "";


    container.innerHTML = `

      <div class="next-game">

        <div class="next-time">
          ${escapeHTML(formatted.time)}
        </div>

        <div class="next-date">
          ${escapeHTML(formatted.date)}
        </div>

        <div class="matchup">

          <div class="team">
            ${escapeHTML(home)}
          </div>

          <div class="vs">
            ${escapeHTML(
              t("common.vs")
            )}
          </div>

          <div class="team">
            ${escapeHTML(away)}
          </div>

        </div>

        <div class="next-event">
          ${escapeHTML(event)}
        </div>

        ${
          id
            ? `
              <a
                class="next-detail"
                href="./game.html?id=${encodeURIComponent(id)}"
              >
                ${escapeHTML(
                  t("next.view")
                )}
              </a>
            `
            : ""
        }

      </div>
    `;


    const ticker =
      $("#tickerText");

    if (ticker) {

      ticker.textContent =
        `${home} ${t("common.vs")} ${away} · ${formatted.full}`;

    }

  }


  /* =======================================================
     MATCH CENTER
  ======================================================= */

  function renderGames() {

    const grid =
      $("#gamesGrid");

    if (!grid) {
      return;
    }

    const leagueFilter =
      $("#leagueFilter")?.value ||
      "all";

    const statusFilter =
      $("#statusFilter")?.value ||
      "all";


    let games =
      getGames();


    if (
      leagueFilter !== "all"
    ) {

      games =
        games.filter((game) => {

          const eventId =
            String(
              game?.eventId ??
              game?.tournamentId ??
              getGameType(game)
            );

          return (
            eventId ===
            String(leagueFilter)
          );

        });

    }


    if (
      statusFilter !== "all"
    ) {

      games =
        games.filter(
          game =>
            getGameStatus(game) ===
            statusFilter
        );

    }


    games =
      sortDescending(games);


    if (!games.length) {

      grid.innerHTML = `
        <div class="schedule-empty">
          ${escapeHTML(
            t("games.noGames")
          )}
        </div>
      `;

      return;
    }


    grid.innerHTML =
      games
        .map(
          game =>
            createGameCard(game)
        )
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

    const time =
      formatDateTime(
        getGameTime(game),
        currentZone
      );

    const type =
      getGameType(game);

    const event =
      getEventName(game);

    const id =
      game?.id ??
      game?.gameId ??
      "";


    const statusText =
      status === "finished"
        ? t("games.finished")
        : t("games.upcoming");


    return `

      <article class="game">

        <div class="game-top">

          <span class="league-tag">
            ${escapeHTML(
              typeLabel(type)
            )}
          </span>

          <span class="game-status ${escapeHTML(status)}">
            ${escapeHTML(statusText)}
          </span>

        </div>


        <div class="game-event">
          ${escapeHTML(event)}
        </div>


        <div class="game-date">
          ${escapeHTML(time.full)}
        </div>


        <div class="scoreline">

          <div>

            <div class="score-label">
              ${escapeHTML(home)}
            </div>

            <div class="score">
              ${
                homeScore === null ||
                homeScore === undefined
                  ? "—"
                  : escapeHTML(homeScore)
              }
            </div>

          </div>


          <div class="dash">
            ${escapeHTML(
              t("common.vs")
            )}
          </div>


          <div>

            <div class="score-label">
              ${escapeHTML(away)}
            </div>

            <div class="score">
              ${
                awayScore === null ||
                awayScore === undefined
                  ? "—"
                  : escapeHTML(awayScore)
              }
            </div>

          </div>

        </div>


        <div class="game-foot">

          <span>
            ${escapeHTML(time.date)}
          </span>

          ${
            id
              ? `
                <a
                  href="./game.html?id=${encodeURIComponent(id)}"
                >
                  ${escapeHTML(
                    t("games.detail")
                  )}
                </a>
              `
              : ""
          }

        </div>

      </article>
    `;
  }


  /* =======================================================
     STANDINGS
  ======================================================= */

  function getSelectedStandings() {

    const selected =
      $("#standingsLeague")?.value;

    const standings =
      D.standings;

    if (!standings) {
      return [];
    }


    if (Array.isArray(standings)) {
      return standings;
    }


    if (
      selected &&
      Array.isArray(
        standings[selected]
      )
    ) {

      return standings[selected];

    }


    if (
      Array.isArray(
        standings.current
      )
    ) {

      return standings.current;

    }


    return [];
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
          <td colspan="8">
            ${escapeHTML(
              t("standings.noData")
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


  function createStandingRow(
    row,
    index
  ) {

    const team =
      displayText(
        row?.team ??
        row?.name,
        t("common.unknown")
      );

    const g =
      row?.played ??
      row?.games ??
      row?.g ??
      0;

    const w =
      row?.wins ??
      row?.w ??
      0;

    const l =
      row?.losses ??
      row?.l ??
      0;

    const d =
      row?.draws ??
      row?.d ??
      0;

    const rs =
      row?.runsFor ??
      row?.rs ??
      0;

    const ra =
      row?.runsAgainst ??
      row?.ra ??
      0;

    const diff =
      row?.diff ??
      (Number(rs) - Number(ra));


    let pct =
      row?.pct ??
      row?.winPct ??
      null;


    if (
      pct === null &&
      Number(g) > 0
    ) {

      pct =
        (
          Number(w) /
          Number(g)
        ).toFixed(3);

    }


    if (
      typeof pct === "number"
    ) {

      pct =
        pct.toFixed(3);

    }


    return `

      <tr>

        <td>
          ${index + 1}
        </td>

        <td>
          ${escapeHTML(team)}
        </td>

        <td>
          ${escapeHTML(g)}
        </td>

        <td>
          ${escapeHTML(w)}
        </td>

        <td>
          ${escapeHTML(l)}
        </td>

        <td>
          ${escapeHTML(d)}
        </td>

        <td>
          ${escapeHTML(
            pct ?? "—"
          )}
        </td>

        <td>
          ${escapeHTML(rs)}
        </td>

        <td>
          ${escapeHTML(ra)}
        </td>

        <td>
          ${escapeHTML(diff)}
        </td>

      </tr>
    `;
  }


  /* =======================================================
     SCHEDULE
  ======================================================= */

  function renderSchedule() {

    const list =
      $("#scheduleList");

    if (!list) {
      return;
    }


    const allGames =
      getGames();


    const upcoming =
      sortAscending(
        allGames.filter(
          game =>
            getGameStatus(game) !==
            "finished"
        )
      );


    const finished =
      sortDescending(
        allGames.filter(
          game =>
            getGameStatus(game) ===
            "finished"
        )
      );


    const upcomingCount =
      $("#scheduleUpcomingCount");

    const finishedCount =
      $("#scheduleFinishedCount");


    if (upcomingCount) {
      upcomingCount.textContent =
        upcoming.length;
    }

    if (finishedCount) {
      finishedCount.textContent =
        finished.length;
    }


    const games =
      currentScheduleStatus ===
      "finished"
        ? finished
        : upcoming;


    if (!games.length) {

      list.innerHTML = `
        <div class="schedule-empty">

          <div class="schedule-empty-icon">
            ${currentScheduleStatus === "finished"
              ? "✓"
              : "○"}
          </div>

          ${escapeHTML(
            t("schedule.noData")
          )}

        </div>
      `;

      return;
    }


    list.innerHTML =
      games
        .map(
          game =>
            createScheduleItem(game)
        )
        .join("");

  }


  function createScheduleItem(game) {

    const time =
      formatDateTime(
        getGameTime(game),
        currentZone
      );

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

    const event =
      getEventName(game);

    const status =
      getGameStatus(game);

    const id =
      game?.id ??
      game?.gameId ??
      "";


    return `

      <article class="schedule-item">

        <div class="schedule-time">

          <div class="sched-time">
            ${escapeHTML(time.time)}
          </div>

          <div class="sched-date">
            ${escapeHTML(time.date)}
          </div>

        </div>


        <div>

          <div class="sched-league">
            ${escapeHTML(event)}
          </div>

          <div class="sched-match-teams">

            <strong>
              ${escapeHTML(home)}
            </strong>

            <span class="schedule-vs">
              ${escapeHTML(
                t("common.vs")
              )}
            </span>

            <strong>
              ${escapeHTML(away)}
            </strong>

          </div>

        </div>


        <div
          class="sched-status ${
            status === "finished"
              ? "finished"
              : "upcoming"
          }"
        >

          <span class="status-dot ${
            status === "finished"
              ? "finished-dot"
              : "upcoming-dot"
          }"></span>

          ${escapeHTML(
            status === "finished"
              ? t("schedule.finished")
              : t("schedule.upcoming")
          )}

          ${
            id
              ? `
                <a
                  href="./game.html?id=${encodeURIComponent(id)}"
                  class="schedule-detail"
                  title="${escapeHTML(
                    t("games.detail")
                  )}"
                >
                  →
                </a>
              `
              : ""
          }

        </div>

      </article>
    `;
  }


  /* =======================================================
     TIMEZONE TABS
  ======================================================= */

  function updateTimezoneButtons() {

    $$(".timezone-tabs button")
      .forEach((button) => {

        button.classList.toggle(
          "active",
          button.dataset.zone ===
            currentZone
        );

      });


    const zoneLabel =
      $("#zoneLabel");

    if (zoneLabel) {

      zoneLabel.textContent =
        currentZone;
    }

  }


  $$(".timezone-tabs button")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          currentZone =
            button.dataset.zone ||
            "Asia/Tokyo";

          updateTimezoneButtons();

          renderNextGame();
          renderGames();
          renderSchedule();
          updateClock();

        }
      );

    });


  /* =======================================================
     SCHEDULE STATUS TABS
  ======================================================= */

  const upcomingTab =
    $("#scheduleUpcomingTab");

  const finishedTab =
    $("#scheduleFinishedTab");


  function setScheduleStatus(status) {

    currentScheduleStatus =
      status === "finished"
        ? "finished"
        : "upcoming";


    if (upcomingTab) {

      upcomingTab.classList.toggle(
        "active",
        currentScheduleStatus ===
          "upcoming"
      );

    }


    if (finishedTab) {

      finishedTab.classList.toggle(
        "active",
        currentScheduleStatus ===
          "finished"
      );

    }


    renderSchedule();
  }


  if (upcomingTab) {

    upcomingTab.addEventListener(
      "click",
      () =>
        setScheduleStatus(
          "upcoming"
        )
    );

  }


  if (finishedTab) {

    finishedTab.addEventListener(
      "click",
      () =>
        setScheduleStatus(
          "finished"
        )
    );

  }


  /* =======================================================
     FILTER EVENTS
  ======================================================= */

  const leagueFilter =
    $("#leagueFilter");

  const statusFilter =
    $("#statusFilter");

  const standingsLeague =
    $("#standingsLeague");


  if (leagueFilter) {

    leagueFilter.addEventListener(
      "change",
      renderGames
    );

  }


  if (statusFilter) {

    statusFilter.addEventListener(
      "change",
      renderGames
    );

  }


  if (standingsLeague) {

    standingsLeague.addEventListener(
      "change",
      renderStandings
    );

  }


  /* =======================================================
     LEAGUES
  ======================================================= */

  function renderLeagues() {

    const container =
      $("#leagueCards");

    if (!container) {
      return;
    }


    const leagues =
      getLeagues();


    if (!leagues.length) {

      container.innerHTML = "";

      return;
    }


    container.innerHTML =
      leagues
        .map(
          league =>
            createLeagueCard(league)
        )
        .join("");
  }


  function createLeagueCard(league) {

    const id =
      league?.id ?? "";


    const name =
      displayText(
        league?.name,
        id
      );


    const description =
      displayText(
        league?.description,
        ""
      );


    const region =
      displayText(
        league?.region,
        t("common.unknown")
      );


    const matchTime =
      displayText(
        league?.matchTime,
        t("common.unknown")
      );


    const teams =
      Array.isArray(
        league?.teams
      )
        ? league.teams.length
        : (
            league?.teamCount ??
            league?.teamsCount ??
            "—"
          );


    const country =
      displayText(
        league?.country,
        ""
      );


    return `

      <a
        class="league-card league-link"
        href="./league.html?id=${encodeURIComponent(id)}"
      >

        <div class="league-code">
          ${escapeHTML(id)}
        </div>

        <h3>
          ${escapeHTML(name)}
        </h3>

        ${
          country
            ? `
              <div class="league-country">
                ${escapeHTML(country)}
              </div>
            `
            : ""
        }


        <p>
          ${escapeHTML(description)}
        </p>


        <div class="league-meta">

          <div>
            <span>
              ${escapeHTML(
                t("leagues.region")
              )}
            </span>

            <strong>
              ${escapeHTML(region)}
            </strong>
          </div>


          <div>
            <span>
              ${escapeHTML(
                t("leagues.matchTime")
              )}
            </span>

            <strong>
              ${escapeHTML(matchTime)}
            </strong>
          </div>


          <div>
            <span>
              ${escapeHTML(
                t("leagues.teams")
              )}
            </span>

            <strong>
              ${escapeHTML(teams)}
            </strong>
          </div>

        </div>


        <div class="league-view">

          <span>
            ${escapeHTML(
              t("leagues.detail")
            )}
          </span>

          <span>→</span>

        </div>

      </a>
    `;
  }


  /* =======================================================
     NAV / BUTTON LINKS
  ======================================================= */

  $$("[data-scroll]").forEach(
    (element) => {

      element.addEventListener(
        "click",
        (event) => {

          const target =
            element.dataset.scroll;

          if (!target) {
            return;
          }

          const targetElement =
            document.querySelector(
              target
            );

          if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
              behavior: "smooth"
            });

          }

        }
      );

    }
  );


  /* =======================================================
     INITIALIZE
  ======================================================= */

  function init() {

    currentZone =
      LANGUAGE_CONFIG[
        currentLang
      ]?.timezone ||
      "Asia/Tokyo";


    /*
      HTML側のdata-i18nを先に適用
    */

    applyLanguage();


    /*
      現在のスケジュールタブ
    */

    setScheduleStatus(
      currentScheduleStatus
    );


    /*
      デバッグ用
    */

    console.log(
      "[AHBA] DATA",
      D
    );

    console.log(
      "[AHBA] games:",
      getGames().length
    );

    console.log(
      "[AHBA] leagues:",
      getLeagues().length
    );

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

})();
