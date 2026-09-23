/* =========================================================
   Asia HCBB Baseball Alliance
   app.js
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     DATA
     --------------------------------------------------------- */

  const D =
    typeof ALLIANCE_DATA !== "undefined"
      ? ALLIANCE_DATA
      : {
          leagues: [],
          games: [],
          standings: {}
        };

  /* ---------------------------------------------------------
     STATE
     --------------------------------------------------------- */

  let currentLang =
    localStorage.getItem("asiaHCBBLanguage") || "ja";

  let currentZone = "Asia/Tokyo";

  let currentScheduleStatus = "upcoming";


  /* ---------------------------------------------------------
     TRANSLATIONS
     --------------------------------------------------------- */

  const translations = {

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
　　　　  button: "リーグ・試合情報を見る →",
　　　　  games: "試合を見る",
　　　　  schedule: "日程を見る"
　　　　},

      next: {
　　　　  title: "NEXT GAME"
　　　　},

　　　　games: {
　　　　  eyebrow: "MATCH CENTER",
　　　　  title: "試合結果・予定"
　　　　},

　　　　filter: {
　　　　  all: "全試合",
　　　　  upcoming: "予定",
　　　　  finished: "終了"
　　　　},

　　　　country: {
　　　　  japan: "日本",
　　　　  korea: "韓国",
　　　　  taiwan: "台湾",
　　　　  newYork: "アメリカ"
　　　　},
       
      nextGame: {
        eyebrow: "NEXT GAME",
        noGame: "現在予定されている試合はありません",
        tbd: "対戦カード未定"
      },

      matchCenter: {
        eyebrow: "MATCH CENTER",
        title: "試合情報",
        allLeagues: "すべてのリーグ",
        allStatus: "すべて",
        upcoming: "予定",
        finished: "終了",
        noGames: "表示できる試合がありません"
      },

      standings: {
　　　　  eyebrow: "STANDINGS",
　　　　  title: "順位表",
　　　　  rank: "#",
　　　　  team: "チーム",
　　　　  games: "試合",
　　　　  wins: "勝",
　　　　  losses: "敗",
　　　　  pct: "PCT",
　　　　  runsScored: "RS",
　　　　  runsAllowed: "RA",
　　　　  diff: "DIFF",
　　　　  noData: "順位表のデータがありません"
　　　　},

      schedule: {
        eyebrow: "TIME TABLE",
        title: "日程",
        upcoming: "予定",
        finished: "終了",
        noGames: "表示できる日程がありません",
        timezone: "表示タイムゾーン"
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
        view: "リーグ詳細を見る →",
        noLeagues: "リーグ情報がありません"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "アジアのHCBBを、<br><span>ひとつにつなぐ。</span>",
        description:
          "Asia HCBB Baseball Alliance（AHBA）は、アジア各地域のHCBBコミュニティをつなぎ、試合・リーグ・大会・交流の情報を共有するためのAllianceです。",
        button: "AHBAについて詳しく見る →"
      },

      footer: {
        subtitle: "Asia HCBB Baseball Alliance",
        rights: "All Rights Reserved."
      },

      common: {
        home: "ホーム",
        away: "ビジター",
        vs: "VS",
        at: "@"
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
　　　　  button: "리그 및 경기 정보 보기 →",
　　　　  games: "경기 보기",
　　　　  schedule: "일정 보기"
　　　　},

      next: {
　　　　  title: "NEXT GAME"
　　　　},

　　　　games: {
　　　　  eyebrow: "MATCH CENTER",
　　　　  title: "경기 결과·예정"
　　　　},

　　　　filter: {
　　　　  all: "전체 경기",
　　　　  upcoming: "예정",
　　　　  finished: "종료"
　　　　},

　　　　country: {
　　　　  japan: "일본",
　　　　  korea: "한국",
　　　　  taiwan: "대만",
　　　　  newYork: "미국"
　　　　},
       
      nextGame: {
        eyebrow: "NEXT GAME",
        noGame: "현재 예정된 경기가 없습니다",
        tbd: "대진 미정"
      },

      matchCenter: {
        eyebrow: "MATCH CENTER",
        title: "경기 정보",
        allLeagues: "모든 리그",
        allStatus: "전체",
        upcoming: "예정",
        finished: "종료",
        noGames: "표시할 경기가 없습니다"
      },

      standings: {
　　　　  eyebrow: "STANDINGS",
　　　　  title: "순위표",
　　　　  rank: "순위",
　　　　  team: "팀",
　　　　  games: "경기",
　　　　  wins: "승",
　　　　  losses: "패",
　　　　  pct: "승률",
　　　　  runsScored: "득점",
　　　　  runsAllowed: "실점",
　　　　  diff: "득실차",
　　　　  noData: "순위표 데이터가 없습니다"
　　　　},

      schedule: {
        eyebrow: "TIME TABLE",
        title: "일정",
        upcoming: "예정",
        finished: "종료",
        noGames: "표시할 일정이 없습니다",
        timezone: "표시 시간대"
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
        view: "리그 상세 보기 →",
        noLeagues: "리그 정보가 없습니다"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "아시아의 HCBB를,<br><span>하나로 연결합니다.</span>",
        description:
          "Asia HCBB Baseball Alliance（AHBA）는 아시아 각 지역의 HCBB 커뮤니티를 연결하고 경기·리그·대회·교류 정보를 공유하는 Alliance입니다.",
        button: "AHBA 자세히 보기 →"
      },

      footer: {
        subtitle: "Asia HCBB Baseball Alliance",
        rights: "All Rights Reserved."
      },

      common: {
        home: "홈",
        away: "원정",
        vs: "VS",
        at: "@"
      }

    },


    en: {

      nav: {
        games: "GAMES",
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
　　　　  button: "VIEW GAMES & LEAGUES →",
　　　　  games: "VIEW GAMES",
　　　　  schedule: "VIEW SCHEDULE"
　　　　},

      next: {
　　　　  title: "NEXT GAME"
　　　　},

　　　　games: {
　　　　  eyebrow: "MATCH CENTER",
　　　　  title: "Games & Results"
　　　　},

　　　　filter: {
　　　　  all: "All Games",
　　　　  upcoming: "Upcoming",
　　　　  finished: "Finished"
　　　　},

　　　　country: {
　　　　  japan: "Japan",
　　　　  korea: "Korea",
　　　　  taiwan: "Taiwan",
　　　　  newYork: "United States"
　　　　},
       
      nextGame: {
        eyebrow: "NEXT GAME",
        noGame: "There are currently no scheduled games.",
        tbd: "TBD"
      },

      matchCenter: {
        eyebrow: "MATCH CENTER",
        title: "Games",
        allLeagues: "All Leagues",
        allStatus: "All",
        upcoming: "Upcoming",
        finished: "Finished",
        noGames: "No games to display."
      },

      standings: {
　　　　  eyebrow: "STANDINGS",
　　　　  title: "Standings",
　　　　  rank: "#",
　　　　  team: "Team",
　　　　  games: "GP",
　　　　  wins: "W",
　　　　  losses: "L",
　　　　  pct: "PCT",
　　　　  runsScored: "RS",
　　　　  runsAllowed: "RA",
　　　　  diff: "DIFF",
　　　　  noData: "No standings data available."
　　　　},
       
      schedule: {
        eyebrow: "TIME TABLE",
        title: "Schedule",
        upcoming: "Upcoming",
        finished: "Finished",
        noGames: "No games to display.",
        timezone: "TIME ZONE"
      },

      scheduleStatus: {
        upcoming: "Upcoming",
        finished: "Finished"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "League Introduction",
        region: "Region",
        matchTime: "Regular Match Time",
        teams: "Teams",
        view: "VIEW LEAGUE →",
        noLeagues: "No league information available."
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "Connecting Asia's HCBB,<br><span>as one community.</span>",
        description:
          "Asia HCBB Baseball Alliance (AHBA) connects HCBB communities across Asia and provides a shared place for games, leagues, tournaments and community exchange.",
        button: "LEARN MORE ABOUT AHBA →"
      },

      footer: {
        subtitle: "Asia HCBB Baseball Alliance",
        rights: "All Rights Reserved."
      },

      common: {
        home: "Home",
        away: "Away",
        vs: "VS",
        at: "@"
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
　　　　    "连接亚洲各地区的 HCBB 社区，共享比赛、联赛、赛事和交流信息。",
　　　　  button: "查看比赛与联赛 →",
　　　　  games: "查看比赛",
　　　　  schedule: "查看赛程"
　　　　},

      next: {
　　　　  title: "NEXT GAME"
　　　　},

　　　　games: {
　　　　  eyebrow: "MATCH CENTER",
　　　　  title: "比赛结果与赛程"
　　　　},

　　　　filter: {
　　　　  all: "全部比赛",
　　　　  upcoming: "即将进行",
　　　　  finished: "已结束"
　　　　},

　　　　country: {
　　　　  japan: "日本",
　　　　  korea: "韩国",
        taiwan: "台湾",
　　　　  newYork: "美国"
　　　　},
       
      nextGame: {
        eyebrow: "NEXT GAME",
        noGame: "目前没有安排中的比赛",
        tbd: "待定"
      },

      matchCenter: {
        eyebrow: "MATCH CENTER",
        title: "比赛信息",
        allLeagues: "所有联赛",
        allStatus: "全部",
        upcoming: "即将进行",
        finished: "已结束",
        noGames: "没有可显示的比赛"
      },

      standings: {
        eyebrow: "STANDINGS",
　　　　  title: "积分榜",
　　　　  rank: "排名",
　　　　  team: "球队",
　　　　  games: "场",
　　　　  wins: "胜",
　　　　  losses: "负",
        pct: "胜率",
　　　　  runsScored: "得分",
　　　　  runsAllowed: "失分",
　　　　  diff: "净胜分",
　　　　  noData: "暂无积分榜数据"
　　　　},

      schedule: {
        eyebrow: "TIME TABLE",
        title: "赛程",
        upcoming: "即将进行",
        finished: "已结束",
        noGames: "没有可显示的赛程",
        timezone: "显示时区"
      },

      scheduleStatus: {
        upcoming: "即将进行",
        finished: "已结束"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "联赛介绍",
        region: "地区",
        matchTime: "常规比赛时间",
        teams: "参赛球队",
        view: "查看联赛详情 →",
        noLeagues: "暂无联赛信息"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "连接亚洲 HCBB，<br><span>让社区汇聚一处。</span>",
        description:
          "Asia HCBB Baseball Alliance（AHBA）连接亚洲各地区的 HCBB 社区，为比赛、联赛、赛事和交流提供统一的信息平台。",
        button: "了解更多关于 AHBA →"
      },

      footer: {
        subtitle: "Asia HCBB Baseball Alliance",
        rights: "All Rights Reserved."
      },

      common: {
        home: "主队",
        away: "客队",
        vs: "VS",
        at: "@"
      }

    }

  };


  /* ---------------------------------------------------------
     HELPERS
     --------------------------------------------------------- */

  const $ = (selector) =>
    document.querySelector(selector);

  const $$ = (selector) =>
    Array.from(document.querySelectorAll(selector));


  function t(key) {

    const parts = key.split(".");

    let value =
      translations[currentLang] ||
      translations.ja;

    for (const part of parts) {

      if (
        value &&
        Object.prototype.hasOwnProperty.call(value, part)
      ) {
        value = value[part];
      } else {
        return key;
      }

    }

    return value;
  }


  /*
   * 多言語オブジェクトを表示用文字列に変換
   *
   * 例:
   * {
   *   ja: "日本",
   *   ko: "일본",
   *   en: "Japan",
   *   zh: "日本"
   * }
   */
  function getLocalized(value, fallback = "") {

    if (
      value !== null &&
      value !== undefined &&
      typeof value === "object"
    ) {

      return (
        value[currentLang] ??
        value.ja ??
        value.en ??
        value.ko ??
        value.zh ??
        fallback
      );

    }

    if (
      value !== null &&
      value !== undefined &&
      value !== ""
    ) {
      return String(value);
    }

    return fallback;
  }


  function displayText(value, fallback = "-") {

    const result =
      getLocalized(value, fallback);

    return result === "" ? fallback : result;
  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function getGameTime(game) {

    return (
      game?.time ??
      game?.startTime ??
      game?.date ??
      game?.datetime ??
      null
    );

  }


  function getGameHome(game) {

    return displayText(
      game?.home ??
      game?.homeTeam ??
      game?.home_team ??
      game?.homeName,
      t("nextGame.tbd")
    );

  }


  function getGameAway(game) {

    return displayText(
      game?.away ??
      game?.awayTeam ??
      game?.away_team ??
      game?.awayName,
      t("nextGame.tbd")
    );

  }


  function getHomeScore(game) {

    const value =
      game?.homeScore ??
      game?.home_score ??
      game?.homeResult;

    return value === null ||
           value === undefined ||
           value === ""
      ? "-"
      : value;

  }


  function getAwayScore(game) {

    const value =
      game?.awayScore ??
      game?.away_score ??
      game?.awayResult;

    return value === null ||
           value === undefined ||
           value === ""
      ? "-"
      : value;

  }


  function getGameLeague(game) {

    return (
      game?.league ??
      game?.leagueId ??
      game?.league_id ??
      ""
    );

  }


  function getGameEventId(game) {

    return (
      game?.eventId ??
      game?.event_id ??
      game?.tournamentId ??
      game?.tournament_id ??
      game?.event?.id ??
      game?.tournament?.id ??
      game?.type ??
      ""
　　  );

　　}


　　function getEventById(id) {

　　  return (
　　    D.events || []
　　  ).find(
　　    event =>
         String(event.id) === String(id)
　　  );

　　}


　　function getEventName(id) {

　　  const event =
　　    getEventById(id);

　　  if (!event) {
　　    return id || "-";
　　  }

　　  return displayText(
　　    event.name,
       event.id
　　  );

　　}


　　function getEvents() {

　　  if (
　　    Array.isArray(D.events) &&
       D.events.length
　　  ) {
　　    return D.events;
　　  }


　　  /* 旧データ用 */
　　  const map = new Map();

　　  (D.games || []).forEach(game => {

　　    const id =
　　      getGameEventId(game);

　　    if (!id || map.has(id)) {
　　      return;
       }

　　    const fallbackNames = {

　　      international: {
           ja: "国際試合",
           ko: "국제 경기",
           en: "International",
           zh: "国际比赛"
　　      },

　　      friendly: {
           ja: "AHBA交流戦",
　　        ko: "AHBA 교류전",
　　        en: "AHBA Exchange",
　　        zh: "AHBA交流赛"
　　      },

　　      tournament: {
　　        ja: "大会",
　　        ko: "대회",
           en: "Tournament",
           zh: "赛事"
　　      },

　　      other: {
　　        ja: "その他",
           ko: "기타",
　　        en: "Other",
　　        zh: "其他"
　　      }

　　    };


　　    map.set(id, {

　　      id,

　　      name:
           game?.eventName ||
           game?.tournamentName ||
　　        fallbackNames[
　　          game?.type
           ] ||
           fallbackNames.other

　　    });

　　  });


　　  return Array.from(
　　    map.values()
　　  );

　　}

   
  function getGameStatus(game) {

    return String(
      game?.status ?? ""
    ).toLowerCase();

  }


  function isFinished(game) {

    return (
      getGameStatus(game) === "finished" ||
      getGameStatus(game) === "completed" ||
      getGameStatus(game) === "final"
    );

  }


  function getLeagueById(id) {

    return (
      D.leagues || []
    ).find(
      league => String(league.id) === String(id)
    );

  }


  function getLeagueName(id) {

    const league =
      getLeagueById(id);

    if (!league) {
      return id || "-";
    }

    return displayText(
      league.name,
      league.id
    );

  }


  function formatDate(
    value,
    zone = currentZone
  ) {

    if (!value) {
      return "-";
    }

    const date =
      new Date(value);

    if (Number.isNaN(date.getTime())) {
      return displayText(value);
    }

    const locale =
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
        ? "ko-KR"
        : currentLang === "zh"
        ? "zh-CN"
        : "en-US";

    try {

      return new Intl.DateTimeFormat(
        locale,
        {
          timeZone: zone,
          month: "numeric",
          day: "numeric",
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit"
        }
      ).format(date);

    } catch {

      return new Intl.DateTimeFormat(
        locale,
        {
          month: "numeric",
          day: "numeric",
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit"
        }
      ).format(date);

    }

  }


  function sortByTimeAscending(a, b) {

    const ta =
      new Date(getGameTime(a) || 0).getTime();

    const tb =
      new Date(getGameTime(b) || 0).getTime();

    return ta - tb;

  }


  function sortByTimeDescending(a, b) {

    return sortByTimeAscending(b, a);

  }


  /* ---------------------------------------------------------
     LANGUAGE
     --------------------------------------------------------- */

  function applyLanguage() {

    document.documentElement.lang =
      currentLang;


    /*
     * 言語ごとの標準タイムゾーン
     */
    const languageZones = {

      ja: "Asia/Tokyo",

      ko: "Asia/Seoul",

      en: "America/New_York",

      zh: "Asia/Taipei"

    };


    if (
      languageZones[currentLang]
    ) {

      currentZone =
        languageZones[currentLang];

    }


    /*
     * 通常テキスト
     */
    $$("[data-i18n]")
      .forEach(el => {

        const key =
          el.dataset.i18n;

        const value =
          t(key);

        if (value !== undefined) {
          el.textContent = value;
        }

      });


    /*
     * HTMLを含む翻訳
     *
     * hero.title
     * about.title
     * など
     */
    $$("[data-i18n-html]")
      .forEach(el => {

        const key =
          el.dataset.i18nHtml;

        const value =
          t(key);

        if (value !== undefined) {
          el.innerHTML = value;
        }

      });


    /*
     * 言語ボタン
     *
     * index.html:
     * .header-language
     *
     * 以前の構造:
     * .language-switcher
     */
    $$(
      ".language-switcher button, " +
      ".header-language button, " +
      "[data-lang]"
    )
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.lang === currentLang
        );

      });


    updateFilterTexts();

    renderNextGame();

    renderGames();

    renderStandings();

    renderSchedule();

    renderLeagues();


    /*
     * タイムゾーンボタン
     */
    $$("[data-zone]")
      .forEach(tab => {

        tab.classList.toggle(
          "active",
          tab.dataset.zone === currentZone
        );

      });

     
    updateClock();
  }


  function updateFilterTexts() {

    const leagueFilter =
      $("#leagueFilter");

    const statusFilter =
      $("#statusFilter");


    /*
     * リーグフィルター
     */
    if (leagueFilter) {

      const previous =
        leagueFilter.value;

      const options = [
        `<option value="">${escapeHTML(
          t("matchCenter.allEvents")
        )}</option>`
      ];


      getEvents()
        .forEach(event => {

          options.push(`
            <option value="${escapeHTML(
              event.id
            )}">
              ${escapeHTML(
                displayText(
                  event.name,
                  event.id
                )
              )}
            </option>
          `);

        });


      leagueFilter.innerHTML =
        options.join("");


      if (
        Array.from(
          leagueFilter.options
        ).some(
          option =>
            option.value === previous
        )
      ) {
        leagueFilter.value =
          previous;
      }

    }


    /*
     * ステータスフィルター
     */
    if (statusFilter) {

      const previous =
        statusFilter.value;

      statusFilter.innerHTML = `
        <option value="">
          ${escapeHTML(
            t("matchCenter.allStatus")
          )}
        </option>

        <option value="upcoming">
          ${escapeHTML(
            t("matchCenter.upcoming")
          )}
        </option>

        <option value="finished">
          ${escapeHTML(
            t("matchCenter.finished")
          )}
        </option>
      `;


      if (
        Array.from(
          statusFilter.options
        ).some(
          option =>
            option.value === previous
        )
      ) {
        statusFilter.value =
          previous;
      }

    }

  }


  /* ---------------------------------------------------------
     CLOCK
     --------------------------------------------------------- */

  function updateClock() {

    const clock =
      $("#clock");

    const tz =
      $("#tz");

    if (!clock) {
      return;
    }

    const zone =
      currentZone ||
      "Asia/Tokyo";

    const now =
      new Date();

    try {

      clock.textContent =
        new Intl.DateTimeFormat(
          "ja-JP",
          {
            timeZone: zone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          }
        ).format(now);

    } catch {

      clock.textContent =
        now.toLocaleString();

    }


    if (tz) {

      const labels = {
        "Asia/Tokyo": "JST",
        "Asia/Seoul": "KST",
        "Asia/Taipei": "CST",
        "Asia/Shanghai": "CST",
        "America/New_York": "ET"
      };

      tz.textContent =
        labels[zone] || zone;

    }

  }


  /* ---------------------------------------------------------
     NEXT GAME
     --------------------------------------------------------- */

  function renderNextGame() {

    const container =
      $("#nextGame");

    if (!container) {
      return;
    }


    const games =
      Array.isArray(D.games)
        ? D.games
        : [];


    const upcoming =
      games
        .filter(
          game => !isFinished(game)
        )
        .filter(
          game => getGameTime(game)
        )
        .sort(
          sortByTimeAscending
        );


    if (!upcoming.length) {

      container.innerHTML = `
        <div class="next-game-empty">
          ${escapeHTML(
            t("nextGame.noGame")
          )}
        </div>
      `;

      updateTicker(null);

      return;

    }


    const game =
      upcoming[0];

    const league =
      getLeagueName(
        getGameLeague(game)
      );


    const home =
      getGameHome(game);

    const away =
      getGameAway(game);


    container.innerHTML = `
      <div class="next-game-card">

        <div class="next-game-league">
          ${escapeHTML(league)}
        </div>

        <div class="next-game-teams">

          <strong>
            ${escapeHTML(home)}
          </strong>

          <span class="next-game-vs">
            VS
          </span>

          <strong>
            ${escapeHTML(away)}
          </strong>

        </div>

        <div class="next-game-time">
          ${escapeHTML(
            formatDate(
              getGameTime(game)
            )
          )}
        </div>

      </div>
    `;


    updateTicker(game);

  }


  function updateTicker(game) {

    const ticker =
      $("#tickerText");

    if (!ticker) {
      return;
    }

    if (!game) {

      ticker.textContent =
        t("nextGame.noGame");

      return;

    }

    ticker.textContent =
      `${getGameHome(game)}  VS  ${getGameAway(game)}  ·  ` +
      `${formatDate(getGameTime(game))}`;

  }


  /* ---------------------------------------------------------
     MATCH CENTER
     --------------------------------------------------------- */

  function renderGames() {

    const container =
      $("#gamesGrid");

    if (!container) {
      return;
    }


    const leagueFilter =
      $("#leagueFilter");

    const statusFilter =
      $("#statusFilter");


    const selectedEvent =
      leagueFilter?.value || "";

    const selectedStatus =
      statusFilter?.value || "";


    let games =
      Array.isArray(D.games)
        ? [...D.games]
        : [];


    /*
     * リーグ
     */
    if (selectedEvent) {

      games =
        games.filter(
          game =>
            String(
              getGameEventId(game)
            ) === String(
              selectedEvent
            )
        );

    }


    /*
     * ステータス
     */
    if (selectedStatus === "finished") {

      games =
        games.filter(
          game => isFinished(game)
        );

    } else if (
      selectedStatus === "upcoming"
    ) {

      games =
        games.filter(
          game => !isFinished(game)
        );

    }


    games.sort(
      sortByTimeAscending
    );


    const count =
      $("#gamesCount");

    if (count) {
      count.textContent =
        String(games.length);
    }


    if (!games.length) {

      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(
            t("matchCenter.noGames")
          )}
        </div>
      `;

      return;

    }


    container.innerHTML =
      games
        .map(
          game =>
            createGameCard(game)
        )
        .join("");

  }


  function createGameCard(game) {

    const event =
      getEventName(
        getGameEventId(game)
      );

    const home =
      getGameHome(game);

    const away =
      getGameAway(game);

    const homeScore =
      getHomeScore(game);

    const awayScore =
      getAwayScore(game);

    const finished =
      isFinished(game);

    const round =
      displayText(
        game?.round,
        ""
      );


    return `
      <a
        class="game-card"
        href="game.html?id=${encodeURIComponent(
          game?.id ?? ""
        )}"
      >

        <div class="game-card-top">

          <span class="game-league">
            ${escapeHTML(event)}
          </span>

          <span class="game-status ${
            finished
              ? "finished"
              : "upcoming"
          }">
            ${
              finished
                ? escapeHTML(
                    t("matchCenter.finished")
                  )
                : escapeHTML(
                    t("matchCenter.upcoming")
                  )
            }
          </span>

        </div>


        <div class="game-date">
          ${escapeHTML(
            formatDate(
              getGameTime(game)
            )
          )}
        </div>


        <div class="game-teams">

          <div class="game-team home-team">
            <strong>
              ${escapeHTML(home)}
            </strong>
          </div>


          <div class="game-score">

            <span>
              ${escapeHTML(
                String(homeScore)
              )}
            </span>

            <small>–</small>

            <span>
              ${escapeHTML(
                String(awayScore)
              )}
            </span>

          </div>


          <div class="game-team away-team">
            <strong>
              ${escapeHTML(away)}
            </strong>
          </div>

        </div>


        ${
          round
            ? `
              <div class="game-round">
                ${escapeHTML(round)}
              </div>
            `
            : ""
        }

      </a>
    `;

  }


  /* ---------------------------------------------------------
     STANDINGS
     --------------------------------------------------------- */

  function getStandingsForEvent(id) {

    const standings =
      D.standings || {};


    if (
      Array.isArray(
        standings[id]
      )
    ) {

      return standings[id];

    }


    if (
      id === "current" &&
      Array.isArray(
        standings.current
      )
    ) {

      return standings.current;

    }


    if (
      Array.isArray(standings)
    ) {

      return standings;

    }


    return [];

  }


  function renderStandings() {

    const body =
      $("#standingsBody");

    if (!body) {
      return;
    }


    const select =
      $("#standingsLeague");


    const events =
      getEvents().filter(
        event =>
          Array.isArray(
            D.standings?.[event.id]
          )
      );

     
    const selectedEvent =
      select?.value ||
      events[0]?.id ||
      "";

     
    if (
      select &&
      !select.value &&
      events.length
    ) {

      select.value =
        events[0].id;

    }


    const rows =
      getStandingsForEvent(
        selectedEvent
      );


    if (!rows.length) {

      body.innerHTML = `
        <tr>
          <td
            colspan="9" 
            class="empty-state"
          >
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
          (team, index) =>
            createStandingRow(
              team,
              index
            )
        )
        .join("");

  }


  function createStandingRow(
    team,
    index
  ) {

    const name =
      displayText(
        team?.team ??
        team?.name ??
        team?.teamName,
        "-"
      );


    const games =
      team?.played ??
      team?.games ??
      team?.gp ??
      0;


    const wins =
      team?.wins ??
      team?.w ??
      0;


    const losses =
      team?.losses ??
      team?.l ??
      0;


    const runScored =
      team?.runsFor ??
      team?.runsScored ??
      team?.rs ??
      0;

    const runAllowed =
      team?.runsAgainst ??
      team?.runsAllowed ??
      team?.ra ??
      0;

    let winRate =
      team?.winRate ??
      team?.pct ??
      team?.percentage;


    if (
      winRate === undefined &&
      Number(games) > 0
    ) {

      winRate =
        Number(wins) /
        Number(games);

    }


    let winRateText =
      "-";


    if (
      winRate !== undefined &&
      winRate !== null &&
      winRate !== ""
    ) {

      const n =
        Number(winRate);

      if (
        Number.isFinite(n)
      ) {

        winRateText =
          n <= 1
            ? n.toFixed(3).replace(/^0/, "")
            : n.toFixed(3);

      } else {

        winRateText =
          String(winRate);

      }

    }


    const diff =
      Number(runsScored) -
      Number(runsAllowed);


    return `
      <tr>

        <td class="standing-rank">
          ${index + 1}
        </td>

        <td class="standing-team">
          ${escapeHTML(name)}
        </td>

        <td>
          ${escapeHTML(
            String(games)
          )}
        </td>

        <td>
          ${escapeHTML(
            String(wins)
          )}
        </td>

        <td>
          ${escapeHTML(
            String(losses)
          )}
        </td>

        <td>
          ${escapeHTML(
            String(winRateText)
          )}
        </td>

        <td>
          ${escapeHTML(
            String(runsScored)
          )}
        </td>

        <td>
          ${escapeHTML(
            String(runsAllowed)
          )}
        </td>

        <td>
          ${escapeHTML(
            String(diff)
          )}
        </td>

      </tr>
    `;

  }


  function setupStandingsFilter() {

    const select =
      $("#standingsLeague");

    if (!select) {
      return;
    }


    const previous =
      select.value;

     
    const events =
      getEvents().filter(
        event =>
          Array.isArray(
            D.standings?.[event.id]
          )
      );

     
    select.innerHTML =
      events
        .map(
          league => `
            <option
              value="${escapeHTML(event.id)}"
            >
              ${escapeHTML(
                displayText(
                  event.name,
                  event.id
                )
              )}
            </option>
          `
        )
        .join("");


    if (
      Array.from(
        select.options
      ).some(
        option =>
          option.value === previous
      )
    ) {

      select.value =
        previous;

    } else if (
      events.length
    ) {

      select.value =
        event[0].id;

    }


    select.addEventListener(
      "change",
      renderStandings
    );

  }


  /* ---------------------------------------------------------
     SCHEDULE
     --------------------------------------------------------- */

  function renderSchedule() {

    const container =
      $("#scheduleList");

    if (!container) {
      return;
    }


    const games =
      Array.isArray(D.games)
        ? [...D.games]
        : [];


    let filtered =
      games.filter(
        game =>
          currentScheduleStatus === "finished"
            ? isFinished(game)
            : !isFinished(game)
      );


    if (
      currentScheduleStatus ===
      "finished"
    ) {

      filtered.sort(
        sortByTimeDescending
      );

    } else {

      filtered.sort(
        sortByTimeAscending
      );

    }


    /*
     * カウント
     */
    const upcomingCount =
      games.filter(
        game => !isFinished(game)
      ).length;


    const finishedCount =
      games.filter(
        game => isFinished(game)
      ).length;


    const upcomingEl =
      $("#scheduleUpcomingCount");

    const finishedEl =
      $("#scheduleFinishedCount");


    if (upcomingEl) {
      upcomingEl.textContent =
        String(upcomingCount);
    }


    if (finishedEl) {
      finishedEl.textContent =
        String(finishedCount);
    }


    if (!filtered.length) {

      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(
            t("schedule.noGames")
          )}
        </div>
      `;

      return;

    }


    container.innerHTML =
      filtered
        .map(
          game =>
            createScheduleItem(game)
        )
        .join("");

  }


  function createScheduleItem(game) {

    const league =
      getLeagueName(
        getGameLeague(game)
      );


    const home =
      getGameHome(game);

    const away =
      getGameAway(game);


    const finished =
      isFinished(game);


    const round =
      displayText(
        game?.round,
        ""
      );


    const homeScore =
      getHomeScore(game);

    const awayScore =
      getAwayScore(game);


    return `
      <article class="schedule-item">

        <div class="schedule-date">
          ${escapeHTML(
            formatDate(
              getGameTime(game),
              currentZone
            )
          )}
        </div>


        <div class="schedule-main">

          <div class="schedule-league">
            ${escapeHTML(league)}
          </div>


          <div class="schedule-match">

            <strong>
              ${escapeHTML(home)}
            </strong>

            <span class="schedule-vs">

              ${
                finished
                  ? `${escapeHTML(
                      String(homeScore)
                    )} – ${escapeHTML(
                      String(awayScore)
                    )}`
                  : "VS"
              }

            </span>

            <strong>
              ${escapeHTML(away)}
            </strong>

          </div>


          ${
            round
              ? `
                <div class="schedule-round">
                  ${escapeHTML(round)}
                </div>
              `
              : ""
          }

        </div>


        <div class="schedule-status ${
          finished
            ? "finished"
            : "upcoming"
        }">

          ${
            finished
              ? escapeHTML(
                  t(
                    "scheduleStatus.finished"
                  )
                )
              : escapeHTML(
                  t(
                    "scheduleStatus.upcoming"
                  )
                )
          }

        </div>

      </article>
    `;

  }


  function setupScheduleTabs() {

    const upcoming =
      $("#scheduleUpcomingTab");

    const finished =
      $("#scheduleFinishedTab");


    const tabs =
      [
        upcoming,
        finished
      ].filter(Boolean);


    tabs.forEach(
      tab => {

        /*
         * duplicate listener 防止
         */
        if (
          tab.dataset.scheduleBound ===
          "true"
        ) {
          return;
        }

        tab.dataset.scheduleBound =
          "true";


        tab.addEventListener(
          "click",
          () => {

            currentScheduleStatus =
              tab.dataset.scheduleStatus ||
              "upcoming";


            tabs.forEach(
              item => {

                item.classList.toggle(
                  "active",
                  item === tab
                );

              }
            );


            renderSchedule();

          }
        );

      }
    );


    /*
     * 初期状態
     */
    tabs.forEach(
      tab => {

        tab.classList.toggle(
          "active",
          (
            tab.dataset.scheduleStatus ||
            "upcoming"
          ) ===
          currentScheduleStatus
        );

      }
    );

  }


  function setupTimezoneTabs() {

    const tabs =
      $$("[data-zone]");


    tabs.forEach(
      tab => {

        if (
          tab.dataset.zoneBound ===
          "true"
        ) {
          return;
        }

        tab.dataset.zoneBound =
          "true";


        tab.addEventListener(
          "click",
          () => {

            currentZone =
              tab.dataset.zone ||
              "Asia/Tokyo";


            tabs.forEach(
              item => {

                item.classList.toggle(
                  "active",
                  item === tab
                );

              }
            );


            updateClock();

            renderSchedule();

          }
        );

      }
    );


    /*
     * 東京を初期選択
     */
    tabs.forEach(
      tab => {

        tab.classList.toggle(
          "active",
          tab.dataset.zone ===
          currentZone
        );

      }
    );

  }


  /* ---------------------------------------------------------
     LEAGUES
     --------------------------------------------------------- */

  function renderLeagues() {

    const container =
      $("#leagueCards");

    if (!container) {
      return;
    }


    const leagues =
      Array.isArray(D.leagues)
        ? D.leagues
        : [];


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
        .map(
          league =>
            createLeagueCard(
              league
            )
        )
        .join("");

  }


  function createLeagueCard(
    league
  ) {

    const name =
      displayText(
        league.name,
        league.id
      );


    const region =
      displayText(
        league.region,
        ""
      );


    const matchTime =
      displayText(
        league.matchTime,
        "-"
      );


    const teams =
      Array.isArray(
        league.teams
      )
        ? league.teams.length
        : 0;


    const description =
      displayText(
        league.description,
        ""
      );


    return `
      <article class="league-card">

        <div class="league-card-code">
          ${escapeHTML(
            league.id
          )}
        </div>


        <h3>
          ${escapeHTML(name)}
        </h3>


        ${
          description
            ? `
              <p>
                ${escapeHTML(
                  description
                )}
              </p>
            `
            : ""
        }


        <div class="league-card-meta">

          ${
            region
              ? `
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
              `
              : ""
          }


          <div>
            <span>
              ${escapeHTML(
                t(
                  "leagues.matchTime"
                )
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
              ${teams}
            </strong>
          </div>

        </div>


        <a
          class="league-card-link"
          href="league.html?id=${encodeURIComponent(
            league.id
          )}"
        >
          ${escapeHTML(
            t("leagues.view")
          )}
        </a>

      </article>
    `;

  }


  /* ---------------------------------------------------------
     FILTER EVENTS
     --------------------------------------------------------- */

  function setupFilters() {

    const leagueFilter =
      $("#leagueFilter");

    const statusFilter =
      $("#statusFilter");


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

  }


  /* ---------------------------------------------------------
     LANGUAGE EVENTS
     --------------------------------------------------------- */

  function setupLanguageButtons() {

    $$(
      ".language-switcher button, " +
      ".header-language button, " +
      "[data-lang]"
    )
      .forEach(button => {

        if (
          button.dataset.languageBound ===
          "true"
        ) {
          return;
        }


        button.dataset.languageBound =
          "true";


        button.addEventListener(
          "click",
          () => {

            const lang =
              button.dataset.lang;


            if (
              !translations[lang]
            ) {
              return;
            }


            currentLang =
              lang;


            localStorage.setItem(
              "asiaHCBBLanguage",
              currentLang
            );


            applyLanguage();

          }
        );

      });

  }


  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */

  function init() {

    /*
     * データ確認
     */
    if (
      !Array.isArray(D.leagues)
    ) {
      D.leagues = [];
    }


    if (
      !Array.isArray(D.games)
    ) {
      D.games = [];
    }


    if (
      !D.standings ||
      typeof D.standings !== "object"
    ) {
      D.standings = {};
    }


    /*
     * 各種セットアップ
     */
    setupLanguageButtons();

    setupFilters();

    setupStandingsFilter();

    setupScheduleTabs();

    setupTimezoneTabs();


    /*
     * 初回描画
     */
    updateFilterTexts();

    renderNextGame();

    renderGames();

    renderStandings();

    renderSchedule();

    renderLeagues();

    applyLanguage();


    /*
     * 時計
     */
    updateClock();

    setInterval(
      updateClock,
      1000
    );

  }


  /*
   * DOM準備完了後に実行
   */
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
