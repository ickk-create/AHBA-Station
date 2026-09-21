/* =========================================================
   ASIA HCBB BASEBALL ALLIANCE
   MAIN APPLICATION
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
     LANGUAGE
     ======================================================= */

  const LANG_KEY = "asiaHCBBLanguage";

  const LANGUAGES = {
    ja: {
      timezone: "Asia/Tokyo",
      timezoneLabel: "JST",

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
        games: "試合を見る",
        schedule: "日程を見る"
      },

      next: {
        title: "NEXT GAME",
        noGame: "現在予定されている試合はありません",
        date: "試合日時",
        detail: "試合詳細を見る →",
        vs: "VS"
      },

      ticker: {
        live: "ALLIANCE LIVE",
        noGame: "現在予定されている試合はありません"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "試合結果",
        allEvents: "すべての大会",
        event: "大会",
        finished: "終了",
        upcoming: "予定",
        detail: "試合詳細 →",
        home: "HOME",
        away: "AWAY",
        international: "国際親善試合",
        friendly: "AHBA交流戦",
        tournament: "大会",
        noGames: "該当する試合はありません"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "順位表",
        event: "大会",
        allEvents: "すべての大会",
        rank: "#",
        team: "チーム",
        games: "G",
        wins: "W",
        losses: "L",
        pct: "PCT",
        runsScored: "RS",
        runsAllowed: "RA",
        diff: "DIFF",
        noData: "順位表データがありません"
      },

      scheduleStatus: {
        upcoming: "予定",
        finished: "終了"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "日程",
        displayTimezone: "表示タイムゾーン",
        noGames: "表示できる日程がありません"
      },

      countries: {
        japan: "日本",
        korea: "韓国",
        taiwan: "台湾",
        china: "中国",
        newYork: "ニューヨーク"
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

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },


    ko: {
      timezone: "Asia/Seoul",
      timezoneLabel: "KST",

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
        games: "경기 보기",
        schedule: "일정 보기"
      },

      next: {
        title: "NEXT GAME",
        noGame: "현재 예정된 경기가 없습니다",
        date: "경기 시간",
        detail: "경기 상세 보기 →",
        vs: "VS"
      },

      ticker: {
        live: "ALLIANCE LIVE",
        noGame: "현재 예정된 경기가 없습니다"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "경기 결과",
        allEvents: "모든 대회",
        event: "대회",
        finished: "종료",
        upcoming: "예정",
        detail: "경기 상세 →",
        home: "HOME",
        away: "AWAY",
        international: "국제 친선 경기",
        friendly: "AHBA 교류전",
        tournament: "대회",
        noGames: "해당 경기가 없습니다"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "순위표",
        event: "대회",
        allEvents: "모든 대회",
        rank: "#",
        team: "팀",
        games: "G",
        wins: "W",
        losses: "L",
        pct: "PCT",
        runsScored: "RS",
        runsAllowed: "RA",
        diff: "DIFF",
        noData: "순위 데이터가 없습니다"
      },

      scheduleStatus: {
        upcoming: "예정",
        finished: "종료"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "일정",
        displayTimezone: "표시 시간대",
        noGames: "표시할 일정이 없습니다"
      },

      countries: {
        japan: "일본",
        korea: "한국",
        taiwan: "대만",
        china: "중국",
        newYork: "뉴욕"
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

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },


    en: {
      timezone: "America/New_York",
      timezoneLabel: "ET",

      nav: {
        games: "Games",
        standings: "Standings",
        schedule: "Schedule",
        leagues: "Leagues",
        about: "About AHBA"
      },

      hero: {
        eyebrow: "ASIA HCBB BASEBALL ALLIANCE",
        title: "Connecting Asia's HCBB,<br><span>as one community.</span>",
        description:
          "Connecting HCBB communities across Asia and sharing information about games, leagues, tournaments and community exchange.",
        games: "VIEW GAMES",
        schedule: "VIEW SCHEDULE"
      },

      next: {
        title: "NEXT GAME",
        noGame: "There are currently no scheduled games",
        date: "Game Time",
        detail: "VIEW GAME DETAILS →",
        vs: "VS"
      },

      ticker: {
        live: "ALLIANCE LIVE",
        noGame: "There are currently no scheduled games"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "Game Results",
        allEvents: "All Tournaments",
        event: "Tournament",
        finished: "Finished",
        upcoming: "Upcoming",
        detail: "GAME DETAILS →",
        home: "HOME",
        away: "AWAY",
        international: "International Friendly",
        friendly: "AHBA Friendly",
        tournament: "Tournament",
        noGames: "No games found"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "Standings",
        event: "Tournament",
        allEvents: "All Tournaments",
        rank: "#",
        team: "Team",
        games: "G",
        wins: "W",
        losses: "L",
        pct: "PCT",
        runsScored: "RS",
        runsAllowed: "RA",
        diff: "DIFF",
        noData: "No standings data available"
      },

      scheduleStatus: {
        upcoming: "Upcoming",
        finished: "Finished"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "Schedule",
        displayTimezone: "Display Time Zone",
        noGames: "No schedule available"
      },

      countries: {
        japan: "Japan",
        korea: "Korea",
        taiwan: "Taiwan",
        china: "China",
        newYork: "New York"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "League Introduction",
        region: "Region",
        matchTime: "Regular Match Time",
        teams: "Teams",
        detail: "VIEW LEAGUE DETAILS →"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "Connecting Asia's HCBB,<br><span>as one community.</span>",
        description:
          "Asia HCBB Baseball Alliance (AHBA) connects HCBB communities across Asia and provides a shared place for games, leagues, tournaments and community exchange.",
        button: "LEARN MORE ABOUT AHBA →"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    },


    zh: {
      timezone: "Asia/Shanghai",
      timezoneLabel: "北京时间",

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
        noGame: "目前没有已安排的比赛",
        date: "比赛时间",
        detail: "查看比赛详情 →",
        vs: "VS"
      },

      ticker: {
        live: "ALLIANCE LIVE",
        noGame: "目前没有已安排的比赛"
      },

      games: {
        eyebrow: "MATCH CENTER",
        title: "比赛结果",
        allEvents: "所有赛事",
        event: "赛事",
        finished: "已结束",
        upcoming: "即将进行",
        detail: "比赛详情 →",
        home: "主队",
        away: "客队",
        international: "国际友谊赛",
        friendly: "AHBA 交流赛",
        tournament: "赛事",
        noGames: "没有符合条件的比赛"
      },

      standings: {
        eyebrow: "STANDINGS",
        title: "积分榜",
        event: "赛事",
        allEvents: "所有赛事",
        rank: "#",
        team: "球队",
        games: "G",
        wins: "W",
        losses: "L",
        pct: "PCT",
        runsScored: "RS",
        runsAllowed: "RA",
        diff: "DIFF",
        noData: "暂无积分榜数据"
      },

      scheduleStatus: {
        upcoming: "即将进行",
        finished: "已结束"
      },

      schedule: {
        eyebrow: "TIME TABLE",
        title: "赛程",
        displayTimezone: "显示时区",
        noGames: "没有可显示的赛程"
      },

      countries: {
        japan: "日本",
        korea: "韩国",
        taiwan: "台湾",
        china: "中国",
        newYork: "纽约"
      },

      leagues: {
        eyebrow: "LEAGUES",
        title: "联赛介绍",
        region: "地区",
        matchTime: "基本比赛时间",
        teams: "参赛球队",
        detail: "查看联赛详情 →"
      },

      about: {
        eyebrow: "ABOUT AHBA",
        title: "连接亚洲 HCBB，<br><span>让社区汇聚一处。</span>",
        description:
          "Asia HCBB Baseball Alliance（AHBA）连接亚洲各地区的 HCBB 社区，为比赛、联赛、赛事和交流提供统一的信息平台。",
        button: "了解更多关于 AHBA →"
      },

      footer: {
        subtitle: "ASIA HCBB BASEBALL ALLIANCE"
      }
    }
  };


  let currentLang =
    localStorage.getItem(LANG_KEY) || "ja";

  if (!LANGUAGES[currentLang]) {
    currentLang = "ja";
  }


  /* =======================================================
     HELPERS
     ======================================================= */

  const $ = selector =>
    document.querySelector(selector);

  const $$ = selector =>
    [...document.querySelectorAll(selector)];


  function getLocalized(value, fallback = "") {

    if (value == null) {
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


  function t(path) {

    const parts = path.split(".");

    let value = LANGUAGES[currentLang];

    for (const part of parts) {

      if (
        value == null ||
        typeof value !== "object"
      ) {
        return path;
      }

      value = value[part];
    }

    return value ?? path;
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
      game.time ??
      game.dateTime ??
      game.datetime ??
      game.startTime ??
      game.start ??
      ""
    );
  }


  function getHome(game) {

    return getLocalized(
      game.home ??
      game.homeTeam ??
      game.home_team ??
      game.homeName,
      "HOME"
    );
  }


  function getAway(game) {

    return getLocalized(
      game.away ??
      game.awayTeam ??
      game.away_team ??
      game.awayName,
      "AWAY"
    );
  }


  function getHomeScore(game) {

    return (
      game.homeScore ??
      game.home_score ??
      game.score?.home ??
      game.scores?.home ??
      "-"
    );
  }


  function getAwayScore(game) {

    return (
      game.awayScore ??
      game.away_score ??
      game.score?.away ??
      game.scores?.away ??
      "-"
    );
  }


  function getLeagueId(game) {

    return (
      game.league ??
      game.leagueId ??
      game.league_id ??
      ""
    );
  }


  function getLeague(game) {

    const id = getLeagueId(game);

    const league =
      D.leagues?.find(
        l => String(l.id) === String(id)
      );

    return league;
  }


  function getLeagueName(game) {

    const league = getLeague(game);

    if (league) {

      return getLocalized(
        league.name,
        league.id || ""
      );
    }

    return getLocalized(
      game.event ??
      game.tournament ??
      game.competition ??
      game.leagueName ??
      game.league,
      ""
    );
  }


  function isFinished(game) {

    return (
      String(game.status || "").toLowerCase() ===
        "finished" ||
      String(game.status || "").toLowerCase() ===
        "completed"
    );
  }


  function getEventName(game) {

    return getLocalized(
      game.event ??
      game.tournament ??
      game.competition ??
      game.eventName,
      getLeagueName(game) || t("games.tournament")
    );
  }


  function formatDateTime(value, timezone) {

    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    const locale =
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
        ? "ko-KR"
        : currentLang === "zh"
        ? "zh-CN"
        : "en-US";

    return new Intl.DateTimeFormat(
      locale,
      {
        timeZone: timezone,
        month: "numeric",
        day: "numeric",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }
    ).format(date);
  }


  function formatDate(value, timezone) {

    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    const locale =
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
        ? "ko-KR"
        : currentLang === "zh"
        ? "zh-CN"
        : "en-US";

    return new Intl.DateTimeFormat(
      locale,
      {
        timeZone: timezone,
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "short"
      }
    ).format(date);
  }


  function formatTime(value, timezone) {

    if (!value) return "";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat(
      currentLang === "ja"
        ? "ja-JP"
        : currentLang === "ko"
        ? "ko-KR"
        : currentLang === "zh"
        ? "zh-CN"
        : "en-US",
      {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }
    ).format(date);
  }


  /* =======================================================
     TRANSLATION
     ======================================================= */

  function applyLanguage() {

    $$("[data-i18n]").forEach(el => {

      const key = el.dataset.i18n;

      const value = t(key);

      if (value !== key) {
        el.textContent = value;
      }
    });


    $$("[data-i18n-html]").forEach(el => {

      const key = el.dataset.i18nHtml;

      const value = t(key);

      if (value !== key) {
        el.innerHTML = value;
      }
    });


    $$(".language-switcher button, .header-language button")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.lang === currentLang
        );
      });


    updateHeaderTimezone();

    updateFilterTexts();

    renderGames();

    renderStandings();

    renderSchedule();

    renderNextGame();

    renderLeagues();
  }


  /* =======================================================
     HEADER CLOCK
     ======================================================= */

  function updateHeaderTimezone() {

    const timezone =
      LANGUAGES[currentLang].timezone;

    const label =
      LANGUAGES[currentLang].timezoneLabel;


    const tzEl = $("#tz");

    if (tzEl) {
      tzEl.textContent = label;
    }


    const clockEl = $("#clock");

    if (!clockEl) return;


    function update() {

      const now = new Date();

      clockEl.textContent =
        new Intl.DateTimeFormat(
          currentLang === "ja"
            ? "ja-JP"
            : currentLang === "ko"
            ? "ko-KR"
            : currentLang === "zh"
            ? "zh-CN"
            : "en-US",
          {
            timeZone: timezone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          }
        ).format(now);
    }


    update();

    clearInterval(
      window.__AHBA_CLOCK_INTERVAL
    );

    window.__AHBA_CLOCK_INTERVAL =
      setInterval(update, 1000);
  }


  /* =======================================================
     FILTERS
     ======================================================= */

  function updateFilterTexts() {

    const leagueFilter =
      $("#leagueFilter");

    if (leagueFilter) {

      const current =
        leagueFilter.value;

      const options = [
        {
          value: "",
          text: t("games.allEvents")
        }
      ];

      (D.leagues || []).forEach(league => {

        options.push({
          value: league.id,
          text: getLocalized(
            league.name,
            league.id
          )
        });
      });


      leagueFilter.innerHTML =
        options
          .map(
            option =>
              `<option value="${escapeHTML(option.value)}">${escapeHTML(option.text)}</option>`
          )
          .join("");


      leagueFilter.value =
        [...leagueFilter.options].some(
          option => option.value === current
        )
          ? current
          : "";
    }


    const standingsLeague =
      $("#standingsLeague");

    if (standingsLeague) {

      const current =
        standingsLeague.value;

      const options = [
        {
          value: "",
          text: t("standings.allEvents")
        }
      ];

      (D.leagues || []).forEach(league => {

        options.push({
          value: league.id,
          text: getLocalized(
            league.name,
            league.id
          )
        });
      });


      standingsLeague.innerHTML =
        options
          .map(
            option =>
              `<option value="${escapeHTML(option.value)}">${escapeHTML(option.text)}</option>`
          )
          .join("");


      standingsLeague.value =
        [...standingsLeague.options].some(
          option => option.value === current
        )
          ? current
          : "";
    }
  }


  /* =======================================================
     MATCH CENTER
     ======================================================= */

  function renderGames() {

    const container =
      $("#gamesGrid");

    if (!container) return;


    const leagueFilter =
      $("#leagueFilter")?.value || "";

    const statusFilter =
      $("#statusFilter")?.value || "";


    let games =
      Array.isArray(D.games)
        ? [...D.games]
        : [];


    if (leagueFilter) {

      games = games.filter(
        game =>
          String(getLeagueId(game)) ===
          String(leagueFilter)
      );
    }


    if (statusFilter) {

      if (statusFilter === "finished") {

        games =
          games.filter(isFinished);

      } else if (
        statusFilter === "upcoming"
      ) {

        games =
          games.filter(
            game => !isFinished(game)
          );
      }
    }


    if (!games.length) {

      container.innerHTML = `
        <div class="schedule-empty">
          ${escapeHTML(t("games.noGames"))}
        </div>
      `;

      return;
    }


    games.sort((a, b) => {

      const ta =
        new Date(getGameTime(a)).getTime();

      const tb =
        new Date(getGameTime(b)).getTime();

      return tb - ta;
    });


    container.innerHTML =
      games.map(renderGameCard).join("");
  }


  function renderGameCard(game) {

    const finished =
      isFinished(game);

    const time =
      getGameTime(game);

    const home =
      getHome(game);

    const away =
      getAway(game);

    const homeScore =
      getHomeScore(game);

    const awayScore =
      getAwayScore(game);

    const event =
      getEventName(game);

    const league =
      getLeagueName(game);

    const status =
      finished
        ? t("games.finished")
        : t("games.upcoming");


    const id =
      game.id ??
      game.gameId ??
      game.game_id ??
      "";


    return `
      <article class="game game-card ${finished ? "is-finished" : "is-upcoming"}">

        <div class="game-top">

          <span class="league-tag">
            ${escapeHTML(event)}
          </span>

          <span class="game-status ${finished ? "finished" : "upcoming"}">
            ${escapeHTML(status)}
          </span>

        </div>


        <div class="game-date">
          ${escapeHTML(
            formatDateTime(
              time,
              LANGUAGES[currentLang].timezone
            )
          )}
        </div>


        <div class="game-event">
          ${escapeHTML(league)}
        </div>


        <div class="game-match">

          <div class="game-team home">

            <span class="team-side">
              ${escapeHTML(t("games.home"))}
            </span>

            <strong>
              ${escapeHTML(home)}
            </strong>

          </div>


          <div class="game-score">

            <span>
              ${escapeHTML(homeScore)}
            </span>

            <small>VS</small>

            <span>
              ${escapeHTML(awayScore)}
            </span>

          </div>


          <div class="game-team away">

            <span class="team-side">
              ${escapeHTML(t("games.away"))}
            </span>

            <strong>
              ${escapeHTML(away)}
            </strong>

          </div>

        </div>


        <div class="game-foot">

          <span>
            ${finished
              ? t("games.finished")
              : t("games.upcoming")}
          </span>


          ${
            id
              ? `
                <a
                  class="game-detail-link"
                  href="game.html?id=${encodeURIComponent(id)}"
                >
                  ${escapeHTML(t("games.detail"))}
                </a>
              `
              : ""
          }

        </div>

      </article>
    `;
  }


  /* =======================================================
     NEXT GAME
     ======================================================= */

  function renderNextGame() {

    const container =
      $("#nextGame");

    if (!container) return;


    const games =
      Array.isArray(D.games)
        ? D.games
        : [];


    const upcoming =
      games
        .filter(game => !isFinished(game))
        .filter(game => getGameTime(game))
        .sort(
          (a, b) =>
            new Date(getGameTime(a)) -
            new Date(getGameTime(b))
        );


    const ticker =
      $("#tickerText");


    if (!upcoming.length) {

      container.innerHTML = `
        <div class="next-empty">

          <div class="next-empty-title">
            ${escapeHTML(t("next.noGame"))}
          </div>

        </div>
      `;


      if (ticker) {
        ticker.textContent =
          t("ticker.noGame");
      }

      return;
    }


    const game =
      upcoming[0];

    const timezone =
      LANGUAGES[currentLang].timezone;

    const id =
      game.id ??
      game.gameId ??
      game.game_id ??
      "";


    container.innerHTML = `

      <div class="next-game-card">

        <div class="next-game-meta">

          <span class="next-event">
            ${escapeHTML(getEventName(game))}
          </span>

          <span class="next-status">
            ${escapeHTML(t("games.upcoming"))}
          </span>

        </div>


        <div class="next-game-time">

          <strong>
            ${escapeHTML(
              formatTime(
                getGameTime(game),
                timezone
              )
            )}
          </strong>

          <span>
            ${escapeHTML(
              formatDate(
                getGameTime(game),
                timezone
              )
            )}
          </span>

        </div>


        <div class="next-match">

          <div class="next-team">

            <small>${escapeHTML(t("games.home"))}</small>

            <strong>
              ${escapeHTML(getHome(game))}
            </strong>

          </div>


          <div class="next-vs">
            VS
          </div>


          <div class="next-team">

            <small>${escapeHTML(t("games.away"))}</small>

            <strong>
              ${escapeHTML(getAway(game))}
            </strong>

          </div>

        </div>


        ${
          id
            ? `
              <a
                href="game.html?id=${encodeURIComponent(id)}"
                class="next-detail"
              >
                ${escapeHTML(t("next.detail"))}
              </a>
            `
            : ""
        }

      </div>
    `;


    if (ticker) {

      ticker.innerHTML = `
        <span class="live-dot"></span>
        <b>${escapeHTML(t("ticker.live"))}</b>
        <span>
          ${escapeHTML(
            `${getHome(game)} VS ${getAway(game)}`
          )}
        </span>
      `;
    }
  }


  /* =======================================================
     STANDINGS
     ======================================================= */

  function renderStandings() {

    const body =
      $("#standingsBody");

    if (!body) return;


    const selected =
      $("#standingsLeague")?.value || "";


    let rows = [];


    /*
       OLD STRUCTURE
       standings: {
         A: [...],
         B: [...],
         KOREA: [...]
       }
    */

    if (
      D.standings &&
      !Array.isArray(D.standings)
    ) {

      if (selected) {

        rows =
          D.standings[selected] || [];

      } else {

        /*
          「すべての大会」の場合、
          ホームページでは混在させず、
          最初に存在する大会を表示。
        */

        const firstLeague =
          D.leagues?.find(
            league =>
              D.standings[league.id]
          );

        if (firstLeague) {

          rows =
            D.standings[firstLeague.id] || [];
        }
      }

    } else if (
      Array.isArray(D.standings)
    ) {

      rows = [...D.standings];
    }


    if (!rows.length) {

      body.innerHTML = `
        <tr>
          <td colspan="8">
            ${escapeHTML(t("standings.noData"))}
          </td>
        </tr>
      `;

      return;
    }


    body.innerHTML =
      rows.map(
        (row, index) => {

          const team =
            getLocalized(
              row.team ??
              row.name ??
              row.teamName,
              ""
            );


          const g =
            row.G ??
            row.g ??
            row.games ??
            0;

          const w =
            row.W ??
            row.w ??
            row.wins ??
            0;

          const l =
            row.L ??
            row.l ??
            row.losses ??
            0;

          const pct =
            row.PCT ??
            row.pct ??
            row.winPct ??
            ".000";

          const rs =
            row.RS ??
            row.rs ??
            row.runsScored ??
            0;

          const ra =
            row.RA ??
            row.ra ??
            row.runsAllowed ??
            0;

          const diff =
            row.DIFF ??
            row.diff ??
            (Number(rs) - Number(ra));


          return `
            <tr>

              <td>
                ${escapeHTML(
                  row.rank ??
                  index + 1
                )}
              </td>

              <td>
                ${escapeHTML(team)}
              </td>

              <td>${escapeHTML(g)}</td>
              <td>${escapeHTML(w)}</td>
              <td>${escapeHTML(l)}</td>
              <td>${escapeHTML(pct)}</td>
              <td>${escapeHTML(rs)}</td>
              <td>${escapeHTML(ra)}</td>
              <td>${escapeHTML(diff)}</td>

            </tr>
          `;
        }
      )
      .join("");
  }


  /* =======================================================
     SCHEDULE
     ======================================================= */

  let currentZone =
    "Asia/Tokyo";

  let currentScheduleStatus =
    "upcoming";


  function renderSchedule() {

    const container =
      $("#scheduleList");

    if (!container) return;


    const games =
      Array.isArray(D.games)
        ? [...D.games]
        : [];


    const filtered =
      games.filter(game => {

        const finished =
          isFinished(game);

        return currentScheduleStatus === "finished"
          ? finished
          : !finished;
      });


    const upcomingCount =
      games.filter(
        game => !isFinished(game)
      ).length;

    const finishedCount =
      games.filter(
        game => isFinished(game)
      ).length;


    const upcomingCountEl =
      $("#scheduleUpcomingCount");

    const finishedCountEl =
      $("#scheduleFinishedCount");


    if (upcomingCountEl) {
      upcomingCountEl.textContent =
        upcomingCount;
    }

    if (finishedCountEl) {
      finishedCountEl.textContent =
        finishedCount;
    }


    if (!filtered.length) {

      container.innerHTML = `
        <div class="schedule-empty">
          ${escapeHTML(t("schedule.noGames"))}
        </div>
      `;

      return;
    }


    filtered.sort((a, b) => {

      const ta =
        new Date(getGameTime(a)).getTime();

      const tb =
        new Date(getGameTime(b)).getTime();

      return currentScheduleStatus === "finished"
        ? tb - ta
        : ta - tb;
    });


    container.innerHTML =
      filtered
        .map(game =>
          renderScheduleItem(game)
        )
        .join("");
  }


  function renderScheduleItem(game) {

    const time =
      getGameTime(game);

    const finished =
      isFinished(game);


    return `
      <div class="schedule-item">

        <div class="schedule-time">

          <div class="sched-time">
            ${escapeHTML(
              formatTime(
                time,
                currentZone
              )
            )}
          </div>

          <div class="sched-date">
            ${escapeHTML(
              formatDate(
                time,
                currentZone
              )
            )}
          </div>

        </div>


        <div class="schedule-match">

          <div class="sched-league">
            ${escapeHTML(
              getEventName(game)
            )}
          </div>

          <div class="sched-match-teams">

            <strong>
              ${escapeHTML(getHome(game))}
            </strong>

            <span class="schedule-vs">
              VS
            </span>

            <strong>
              ${escapeHTML(getAway(game))}
            </strong>

          </div>

        </div>


        <div class="sched-status ${finished ? "finished" : "upcoming"}">

          <span class="status-dot ${
            finished
              ? "finished-dot"
              : "upcoming-dot"
          }"></span>

          ${
            finished
              ? escapeHTML(t("scheduleStatus.finished"))
              : escapeHTML(t("scheduleStatus.upcoming"))
          }

        </div>

      </div>
    `;
  }


  /* =======================================================
     LEAGUES
     ======================================================= */

  function renderLeagues() {

    const container =
      $("#leagueCards");

    if (!container) return;


    const leagues =
      Array.isArray(D.leagues)
        ? D.leagues
        : [];


    if (!leagues.length) {

      container.innerHTML = "";

      return;
    }


    container.innerHTML =
      leagues
        .map(renderLeagueCard)
        .join("");
  }


  function renderLeagueCard(league) {

    const id =
      league.id || "";

    const name =
      getLocalized(
        league.name,
        id
      );

    const description =
      getLocalized(
        league.description,
        ""
      );

    const region =
      getLocalized(
        league.region ??
        league.country,
        ""
      );

    const matchTime =
      getLocalized(
        league.matchTime,
        ""
      );

    const teams =
      Array.isArray(league.teams)
        ? league.teams.length
        : league.teamCount ??
          "";


    return `
      <a
        href="league.html?id=${encodeURIComponent(id)}"
        class="league-card league-link"
      >

        <div class="league-code">
          ${escapeHTML(id)}
        </div>


        <h3>
          ${escapeHTML(name)}
        </h3>


        <p class="league-description">
          ${escapeHTML(description)}
        </p>


        <div class="league-meta">

          <div>
            <span class="league-meta-label">
              ${escapeHTML(t("leagues.region"))}
            </span>

            <strong>
              ${escapeHTML(region)}
            </strong>
          </div>


          <div>
            <span class="league-meta-label">
              ${escapeHTML(t("leagues.matchTime"))}
            </span>

            <strong>
              ${escapeHTML(matchTime)}
            </strong>
          </div>


          <div>
            <span class="league-meta-label">
              ${escapeHTML(t("leagues.teams"))}
            </span>

            <strong>
              ${escapeHTML(teams)}
            </strong>
          </div>

        </div>


        <div class="league-view">
          ${escapeHTML(t("leagues.detail"))}
        </div>

      </a>
    `;
  }


  /* =======================================================
     EVENTS
     ======================================================= */

  $$(".language-switcher button, .header-language button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const lang =
            button.dataset.lang;

          if (!LANGUAGES[lang]) return;

          currentLang = lang;

          localStorage.setItem(
            LANG_KEY,
            lang
          );

          applyLanguage();
        }
      );
    });


  $("#leagueFilter")
    ?.addEventListener(
      "change",
      renderGames
    );


  $("#statusFilter")
    ?.addEventListener(
      "change",
      renderGames
    );


  $("#standingsLeague")
    ?.addEventListener(
      "change",
      renderStandings
    );


  $$(".timezone-tabs button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          currentZone =
            button.dataset.zone ||
            "Asia/Tokyo";


          $$(".timezone-tabs button")
            .forEach(btn =>
              btn.classList.toggle(
                "active",
                btn === button
              )
            );


          renderSchedule();
        }
      );
    });


  $("#scheduleUpcomingTab")
    ?.addEventListener(
      "click",
      () => {

        currentScheduleStatus =
          "upcoming";


        $("#scheduleUpcomingTab")
          ?.classList.add("active");

        $("#scheduleFinishedTab")
          ?.classList.remove("active");


        renderSchedule();
      }
    );


  $("#scheduleFinishedTab")
    ?.addEventListener(
      "click",
      () => {

        currentScheduleStatus =
          "finished";


        $("#scheduleFinishedTab")
          ?.classList.add("active");

        $("#scheduleUpcomingTab")
          ?.classList.remove("active");


        renderSchedule();
      }
    );


  /* =======================================================
     INITIALIZE
     ======================================================= */

  applyLanguage();

})();
