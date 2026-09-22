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

      hero: {
　　　　  title: "ASIA HCBB BASEBALL ALLIANCE",
　　　　  description: "各地域・各リーグを越えて、試合と交流の情報を発信します。",
　　　　  games: "試合を見る",
　　　　  schedule: "試合日程",
　　　　  about: "AHBA詳細"
　　　　},


      "nextGame.title":
        "次の公式試合",

      "nextGame.noGame":
        "次の公式試合はありません。",


      "games.title":
        "試合結果",

      "games.event":
        "イベント",

      "games.allEvents":
        "すべてのイベント",

      "games.status":
        "ステータス",

      "games.allStatus":
        "すべて",

      "games.upcoming":
        "予定",

      "games.live":
        "試合中",

      "games.finished":
        "終了",

      "games.noGames":
        "該当する試合はありません。",


      "standings.title":
        "順位表",

      "standings.event":
        "イベント",

      "standings.allEvents":
        "すべてのイベント",

      "standings.rank":
        "順位",

      "standings.team":
        "チーム",

      "standings.played":
        "試合",

      "standings.wins":
        "勝",

      "standings.losses":
        "敗",

      "standings.draws":
        "分",

      "standings.runsFor":
        "得点",

      "standings.runsAgainst":
        "失点",

      "standings.diff":
        "得失点差",

      "standings.points":
        "勝点",


      "schedule.title":
        "試合日程",

      "schedule.upcoming":
        "予定",

      "schedule.finished":
        "終了",

      "schedule.noGames":
        "該当する試合はありません。",

      "scheduleStatus.upcoming":
        "予定",

      "scheduleStatus.finished":
        "終了",


      "leagues.title":
        "参加リーグ",

      "leagues.description":
        "AHBAに参加する各リーグをご紹介します。",


      "about.title":
        "AHBAについて",

      "about.description":
        "Asia HCBB Baseball Alliance（AHBA）は、アジア地域のHCBBコミュニティをつなぎ、試合・交流・大会の公式情報を発信するAllianceです。",

      "about.items.games.title":
        "Official Games",

      "about.items.games.description":
        "AHBAが公式に掲載する試合情報。",

      "about.items.exchange.title":
        "International Exchange",

      "about.items.exchange.description":
        "国・地域を越えた交流試合やイベント。",

      "about.items.tournament.title":
        "Tournaments",

      "about.items.tournament.description":
        "AHBAが開催・掲載する大会。",


      "status.scheduled":
        "予定",

      "status.live":
        "試合中",

      "status.finished":
        "終了",


      "game.international":
        "国際試合",

      "game.friendly":
        "交流試合",

      "game.tournament":
        "大会",

      "game.other":
        "その他",


      "game.detail":
        "試合詳細",


      "common.vs":
        "VS"

    },


    ko: {

      "nav.games": "경기 결과",
      "nav.standings": "순위표",
      "nav.schedule": "경기 일정",
      "nav.leagues": "참가 리그",
      "nav.about": "AHBA 소개",

      hero: {
　　　　  title: "ASIA HCBB BASEBALL ALLIANCE",
　　　　  description: "지역과 리그를 넘어 경기와 교류 정보를 제공합니다.",
　　　　  games: "경기 보기",
　　　　  schedule: "경기 일정",
        about: "AHBA 소개"
　　　　},


      "nextGame.title":
        "다음 공식 경기",

      "nextGame.noGame":
        "예정된 공식 경기가 없습니다.",


      "games.title":
        "경기 결과",

      "games.event":
        "이벤트",

      "games.allEvents":
        "모든 이벤트",

      "games.status":
        "상태",

      "games.allStatus":
        "전체",

      "games.upcoming":
        "예정",

      "games.live":
        "진행 중",

      "games.finished":
        "종료",

      "games.noGames":
        "해당하는 경기가 없습니다.",


      "standings.title":
        "순위표",

      "standings.event":
        "이벤트",

      "standings.allEvents":
        "모든 이벤트",

      "standings.rank":
        "순위",

      "standings.team":
        "팀",

      "standings.played":
        "경기",

      "standings.wins":
        "승",

      "standings.losses":
        "패",

      "standings.draws":
        "무",

      "standings.runsFor":
        "득점",

      "standings.runsAgainst":
        "실점",

      "standings.diff":
        "득실차",

      "standings.points":
        "승점",


      "schedule.title":
        "경기 일정",

      "schedule.upcoming":
        "예정",

      "schedule.finished":
        "종료",

      "schedule.noGames":
        "해당하는 경기가 없습니다.",

      "scheduleStatus.upcoming":
        "예정",

      "scheduleStatus.finished":
        "종료",


      "leagues.title":
        "참가 리그",

      "leagues.description":
        "AHBA에 참가하는 각 리그를 소개합니다.",


      "about.title":
        "AHBA 소개",

      "about.description":
        "Asia HCBB Baseball Alliance（AHBA）는 아시아 지역의 HCBB 커뮤니티를 연결하고 경기·교류·대회 정보를 공식적으로 제공합니다.",

      "about.items.games.title":
        "Official Games",

      "about.items.games.description":
        "AHBA가 공식적으로 게시하는 경기 정보입니다.",

      "about.items.exchange.title":
        "International Exchange",

      "about.items.exchange.description":
        "지역과 국가를 넘어 진행되는 교류 경기와 이벤트입니다.",

      "about.items.tournament.title":
        "Tournaments",

      "about.items.tournament.description":
        "AHBA가 개최하거나 공식적으로 소개하는 대회입니다.",


      "status.scheduled":
        "예정",

      "status.live":
        "진행 중",

      "status.finished":
        "종료",


      "game.international":
        "국제 경기",

      "game.friendly":
        "교류 경기",

      "game.tournament":
        "대회",

      "game.other":
        "기타",


      "game.detail":
        "경기 상세",


      "common.vs":
        "VS"

    },


    en: {

      "nav.games": "Games",
      "nav.standings": "Standings",
      "nav.schedule": "Schedule",
      "nav.leagues": "Leagues",
      "nav.about": "About AHBA",

      hero: {
        title: "ASIA HCBB BASEBALL ALLIANCE",
　　　　  description: "Connecting regions and leagues through games and exchange.",
　　　　  games: "VIEW GAMES",
　　　　  schedule: "SCHEDULE",
　　　　  about: "ABOUT AHBA"
　　　　},


      "nextGame.title":
        "Next Official Game",

      "nextGame.noGame":
        "There are no upcoming official games.",


      "games.title":
        "Match Center",

      "games.event":
        "Event",

      "games.allEvents":
        "All Events",

      "games.status":
        "Status",

      "games.allStatus":
        "All",

      "games.upcoming":
        "Upcoming",

      "games.live":
        "Live",

      "games.finished":
        "Finished",

      "games.noGames":
        "No games found.",


      "standings.title":
        "Standings",

      "standings.event":
        "Event",

      "standings.allEvents":
        "All Events",

      "standings.rank":
        "Rank",

      "standings.team":
        "Team",

      "standings.played":
        "P",

      "standings.wins":
        "W",

      "standings.losses":
        "L",

      "standings.draws":
        "D",

      "standings.runsFor":
        "RF",

      "standings.runsAgainst":
        "RA",

      "standings.diff":
        "DIFF",

      "standings.points":
        "PTS",


      "schedule.title":
        "Schedule",

      "schedule.upcoming":
        "Upcoming",

      "schedule.finished":
        "Finished",

      "schedule.noGames":
        "No games found.",

      "scheduleStatus.upcoming":
        "Upcoming",

      "scheduleStatus.finished":
        "Finished",


      "leagues.title":
        "Leagues",

      "leagues.description":
        "Leagues participating in the AHBA community.",


      "about.title":
        "About AHBA",

      "about.description":
        "Asia HCBB Baseball Alliance (AHBA) connects HCBB communities across Asia and shares official information on games, exchanges, and tournaments.",

      "about.items.games.title":
        "Official Games",

      "about.items.games.description":
        "Official game information published by AHBA.",

      "about.items.exchange.title":
        "International Exchange",

      "about.items.exchange.description":
        "Exchange games and events connecting regions and countries.",

      "about.items.tournament.title":
        "Tournaments",

      "about.items.tournament.description":
        "Tournaments hosted or officially featured by AHBA.",


      "status.scheduled":
        "Scheduled",

      "status.live":
        "Live",

      "status.finished":
        "Finished",


      "game.international":
        "International",

      "game.friendly":
        "Friendly",

      "game.tournament":
        "Tournament",

      "game.other":
        "Other",


      "game.detail":
        "Game Details",


      "common.vs":
        "VS"

    },


    zh: {

      "nav.games": "賽事結果",
      "nav.standings": "排名",
      "nav.schedule": "賽程",
      "nav.leagues": "參賽聯盟",
      "nav.about": "關於 AHBA",

      hero: {
        title: "ASIA HCBB BASEBALL ALLIANCE",
        description: "跨越各地與各聯盟，發布比賽與交流資訊。",
　　　　  games: "查看比賽",
　　　　  schedule: "比賽日程",
　　　　  about: "AHBA 詳情"
　　　　},


      "nextGame.title":
        "下一場官方賽事",

      "nextGame.noGame":
        "目前沒有預定的官方賽事。",


      "games.title":
        "賽事中心",

      "games.event":
        "活動",

      "games.allEvents":
        "所有活動",

      "games.status":
        "狀態",

      "games.allStatus":
        "全部",

      "games.upcoming":
        "預定",

      "games.live":
        "進行中",

      "games.finished":
        "已結束",

      "games.noGames":
        "沒有符合條件的賽事。",


      "standings.title":
        "排名",

      "standings.event":
        "活動",

      "standings.allEvents":
        "所有活動",

      "standings.rank":
        "排名",

      "standings.team":
        "隊伍",

      "standings.played":
        "賽",

      "standings.wins":
        "勝",

      "standings.losses":
        "敗",

      "standings.draws":
        "和",

      "standings.runsFor":
        "得分",

      "standings.runsAgainst":
        "失分",

      "standings.diff":
        "得失分差",

      "standings.points":
        "勝點",


      "schedule.title":
        "賽程",

      "schedule.upcoming":
        "預定",

      "schedule.finished":
        "已結束",

      "schedule.noGames":
        "沒有符合條件的賽事。",

      "scheduleStatus.upcoming":
        "預定",

      "scheduleStatus.finished":
        "已結束",


      "leagues.title":
        "參賽聯盟",

      "leagues.description":
        "介紹參與 AHBA 的各個聯盟。",


      "about.title":
        "關於 AHBA",

      "about.description":
        "Asia HCBB Baseball Alliance（AHBA）連結亞洲各地的 HCBB 社群，發布賽事、交流與大會的官方資訊。",

      "about.items.games.title":
        "Official Games",

      "about.items.games.description":
        "由 AHBA 官方發布的賽事資訊。",

      "about.items.exchange.title":
        "International Exchange",

      "about.items.exchange.description":
        "跨越國家與地區的交流賽事與活動。",

      "about.items.tournament.title":
        "Tournaments",

      "about.items.tournament.description":
        "由 AHBA 主辦或官方發布的大會。",


      "status.scheduled":
        "預定",

      "status.live":
        "進行中",

      "status.finished":
        "已結束",


      "game.international":
        "國際賽",

      "game.friendly":
        "交流賽",

      "game.tournament":
        "大會",

      "game.other":
        "其他",


      "game.detail":
        "賽事詳情",


      "common.vs":
        "VS"

    }

  };


  /* =========================================================
     LOCALIZATION
     ========================================================= */

  function t(key) {

    return (
      I18N[currentLang]?.[key] ??
      I18N.ja?.[key] ??
      key
    );

  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function getLocalized(value) {

    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {

      return (
        value[currentLang] ??
        value.ja ??
        value.en ??
        Object.values(value)[0] ??
        ""
      );

    }

    return value ?? "";

  }


  function getTeamName(team) {

    return escapeHTML(
      getLocalized(team)
    );

  }


  function getRound(game) {

    return escapeHTML(
      getLocalized(
        game?.round ??
        game?.matchday ??
        ""
      )
    );

  }


  /* =========================================================
     DATE / TIME
     ========================================================= */

  function getGameTimeValue(game) {

    return (
      game?.time ??
      game?.datetime ??
      game?.dateTime ??
      game?.startTime ??
      game?.date ??
      null
    );

  }


  function getTimestamp(game) {

    const value =
      getGameTimeValue(game);

    if (!value) {
      return 0;
    }

    const timestamp =
      new Date(value).getTime();

    return Number.isNaN(timestamp)
      ? 0
      : timestamp;

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

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "-";
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
        day: "2-digit",
        weekday: "short"
      }
    ).format(date);

  }


  function formatTime(
    value,
    zone = currentZone
  ) {

    if (!value) {
      return "-";
    }

    const date =
      new Date(value);

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "-";
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


  function formatDateTime(
    value,
    zone = currentZone
  ) {

    return `${formatDate(value, zone)} ${formatTime(value, zone)}`;

  }


  /* =========================================================
     GAME HELPERS
     ========================================================= */

  function getGameType(game) {

    return (
      game?.type ??
      game?.category ??
      game?.gameType ??
      "other"
    );

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

    const eventName =
      game?.eventName;

    if (eventName) {
      return getLocalized(eventName);
    }

    const type =
      getGameType(game);

    return (
      t(`game.${type}`) ??
      type
    );

  }


  function getStatus(game) {

    return (
      game?.status ??
      "scheduled"
    );

  }


  function getStatusLabel(status) {

    return t(
      `status.${status}`
    );

  }


  function isUpcoming(game) {

    const status =
      getStatus(game);

    if (
      status === "scheduled" ||
      status === "upcoming"
    ) {
      return true;
    }

    if (status === "finished") {
      return false;
    }

    const timestamp =
      getTimestamp(game);

    return timestamp > Date.now();

  }


  function getLeagueById(id) {

    return (
      D.leagues || []
    ).find(
      league =>
        String(
          league?.id
        ) === String(id)
    ) || null;

  }


  function getLeagueName(id) {

    const league =
      getLeagueById(id);

    if (!league) {
      return "";
    }

    return getLocalized(
      league.name
    );

  }


  /* =========================================================
     DATA ACCESS
     ========================================================= */

  function getGames() {

    return Array.isArray(D.games)
      ? D.games
      : [];

  }


  function getStandings() {

    return (
      D.standings?.current || []
    );

  }


  function sortGames(games) {

    return [...games].sort(
      (a, b) => {

        const aUpcoming =
          isUpcoming(a);

        const bUpcoming =
          isUpcoming(b);

        if (
          aUpcoming !== bUpcoming
        ) {
          return aUpcoming
            ? -1
            : 1;
        }

        return (
          getTimestamp(a) -
          getTimestamp(b)
        );

      }
    );

  }


  /* =========================================================
     LANGUAGE UI
     ========================================================= */

  function updateLanguageButtons() {

    document
      .querySelectorAll(
        ".header-language button, .language-switcher button"
      )
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.lang === currentLang
        );

      });

  }


  function applyLanguage() {

    document.documentElement.lang =
      currentLang === "ja"
        ? "ja"
        : currentLang === "ko"
        ? "ko"
        : currentLang === "zh"
        ? "zh-TW"
        : "en";


    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {

        const key =
          element.dataset.i18n;

        element.textContent =
          t(key);

      });


    document
      .querySelectorAll("[data-i18n-html]")
      .forEach(element => {

        const key =
          element.dataset.i18nHtml;

        element.innerHTML =
          t(key);

      });


    updateLanguageButtons();

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
      currentLang
    );

    currentZone =
      LANGUAGE_CONFIG[currentLang].zone;

    applyLanguage();

  }


  /* =========================================================
     FILTERS
     ========================================================= */

  function updateFilterTexts() {

    const eventFilter =
      document.getElementById(
        "leagueFilter"
      );

    if (eventFilter) {

      const previous =
        eventFilter.value || "all";

      const events = [];

      getGames().forEach(
        game => {

          const key =
            getEventKey(game);

          if (!key) {
            return;
          }

          if (
            events.some(
              event =>
                event.key === key
            )
          ) {
            return;
          }

          events.push({
            key,
            name:
              getEventName(game)
          });

        }
      );


      eventFilter.innerHTML = "";

      const all =
        document.createElement(
          "option"
        );

      all.value = "all";

      all.textContent =
        t("games.allEvents");

      eventFilter.appendChild(all);


      events.forEach(event => {

        const option =
          document.createElement(
            "option"
          );

        option.value =
          event.key;

        option.textContent =
          event.name;

        eventFilter.appendChild(
          option
        );

      });


      eventFilter.value =
        events.some(
          event =>
            event.key === previous
        )
          ? previous
          : "all";

    }


    const statusFilter =
      document.getElementById(
        "statusFilter"
      );

    if (statusFilter) {

      const previous =
        statusFilter.value || "all";

      statusFilter.innerHTML = "";


      const values = [
        ["all", "games.allStatus"],
        ["upcoming", "games.upcoming"],
        ["finished", "games.finished"]
      ];


      values.forEach(
        ([value, key]) => {

          const option =
            document.createElement(
              "option"
            );

          option.value =
            value;

          option.textContent =
            t(key);

          statusFilter.appendChild(
            option
          );

        }
      );


      statusFilter.value =
        ["all", "upcoming", "finished"]
          .includes(previous)
          ? previous
          : "all";

    }


    const standingsFilter =
      document.getElementById(
        "standingsLeague"
      );

    if (standingsFilter) {

      standingsFilter.innerHTML = "";

      const option =
        document.createElement(
          "option"
        );

      option.value = "current";

      option.textContent =
        t("standings.allEvents");

      standingsFilter.appendChild(
        option
      );

    }

  }


  /* =========================================================
     NEXT GAME
     ========================================================= */

  function renderNextGame() {

    const container =
      document.getElementById(
        "nextGame"
      );

    if (!container) {
      return;
    }


    const now =
      Date.now();


    const upcoming =
      getGames()
        .filter(game => {

          const timestamp =
            getTimestamp(game);

          const status =
            getStatus(game);

          return (
            timestamp >= now &&
            status !== "finished"
          );

        })
        .sort(
          (a, b) =>
            getTimestamp(a) -
            getTimestamp(b)
        );


    const game =
      upcoming[0];


    if (!game) {

      container.innerHTML = `
        <div class="next-game-empty">
          ${escapeHTML(
            t("nextGame.noGame")
          )}
        </div>
      `;

      return;

    }


    const time =
      getGameTimeValue(game);

    const eventName =
      getEventName(game);

    const round =
      getRound(game);


    const home =
      getTeamName(game.home);

    const away =
      getTeamName(game.away);


    const status =
      getStatus(game);


    const statusClass =
      status === "finished"
        ? "finished"
        : "";


    container.innerHTML = `

      <div class="next-game-inner">

        <div class="next-game-meta">

          <strong>
            ${escapeHTML(eventName)}
          </strong>

          <span>
            ${escapeHTML(round)}
          </span>

          <br>

          <span>
            ${escapeHTML(
              formatDateTime(
                time,
                currentZone
              )
            )}
          </span>

        </div>


        <div class="next-game-match">

          <div class="next-game-teams">

            <span class="next-team">
              ${away}
            </span>

            <span class="next-vs">
              ${escapeHTML(
                t("common.vs")
              )}
            </span>

            <span class="next-team">
              ${home}
            </span>

          </div>


          <div class="next-game-time">

            ${escapeHTML(
              formatDateTime(
                time,
                currentZone
              )
            )}

          </div>

        </div>


        <div class="next-game-status ${statusClass}">
          ${escapeHTML(
            getStatusLabel(status)
          )}
        </div>

      </div>

    `;

  }


  /* =========================================================
     GAME CARDS
     ========================================================= */

  function createGameCard(game) {

    const time =
      getGameTimeValue(game);

    const status =
      getStatus(game);

    const eventName =
      getEventName(game);

    const round =
      getRound(game);


    const away =
      getTeamName(game.away);

    const home =
      getTeamName(game.home);


    const awayScore =
      game.awayScore ??
      game?.score?.away ??
      "-";

    const homeScore =
      game.homeScore ??
      game?.score?.home ??
      "-";


    const statusClass =
      status === "finished"
        ? "finished"
        : status === "live"
        ? "live"
        : "";


    const gameId =
      game.id ?? "";


    return `

      <article class="game-card">

        <div class="game-card-top">

          <span class="game-event">
            ${escapeHTML(eventName)}
          </span>

          <span class="game-status ${statusClass}">
            ${escapeHTML(
              getStatusLabel(status)
            )}
          </span>

        </div>


        <div class="game-card-body">

          <div class="game-round">
            ${round}
          </div>


          <div class="game-match">

            <div class="game-team">
              ${away}
            </div>


            <div class="game-score">

              ${
                status === "finished" ||
                status === "live"
                  ? `${escapeHTML(
                      awayScore
                    )} : ${escapeHTML(
                      homeScore
                    )}`
                  : `<span>VS</span>`
              }

            </div>


            <div class="game-team home">
              ${home}
            </div>

          </div>

        </div>


        <div class="game-card-bottom">

          <span>
            ${escapeHTML(
              formatDateTime(
                time,
                currentZone
              )
            )}
          </span>

          ${
            gameId
              ? `
                <a
                  class="game-detail-link"
                  href="./game.html?id=${encodeURIComponent(
                    gameId
                  )}"
                >
                  ${escapeHTML(
                    t("game.detail")
                  )} →
                </a>
              `
              : ""
          }

        </div>

      </article>

    `;

  }


  function renderGames() {

    const container =
      document.getElementById(
        "gamesGrid"
      );

    if (!container) {
      return;
    }


    const eventFilter =
      document.getElementById(
        "leagueFilter"
      );

    const statusFilter =
      document.getElementById(
        "statusFilter"
      );


    const selectedEvent =
      eventFilter?.value ||
      "all";


    const selectedStatus =
      statusFilter?.value ||
      "all";


    let games =
      getGames();


    if (
      selectedEvent !== "all"
    ) {

      games =
        games.filter(
          game =>
            getEventKey(game) ===
            selectedEvent
        );

    }


    if (
      selectedStatus !== "all"
    ) {

      games =
        games.filter(
          game => {

            const status =
              getStatus(game);

            if (
              selectedStatus ===
              "upcoming"
            ) {
              return isUpcoming(game);
            }

            return (
              status ===
              selectedStatus
            );

          }
        );

    }


    games =
      sortGames(games);


    if (!games.length) {

      container.innerHTML = `
        <div class="no-games">
          ${escapeHTML(
            t("games.noGames")
          )}
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

  function renderStandings() {

    const body =
      document.getElementById(
        "standingsBody"
      );

    if (!body) {
      return;
    }


    const standings =
      getStandings();


    if (!standings.length) {

      body.innerHTML = `
        <tr>
          <td
            colspan="10"
            class="loading"
          >
            ${escapeHTML(
              t("games.noGames")
            )}
          </td>
        </tr>
      `;

      return;

    }


    const sorted =
      [...standings].sort(
        (a, b) => {

          const ap =
            Number(
              a.points ?? 0
            );

          const bp =
            Number(
              b.points ?? 0
            );

          if (bp !== ap) {
            return bp - ap;
          }

          const ad =
            Number(
              a.runsFor ?? 0
            ) -
            Number(
              a.runsAgainst ?? 0
            );

          const bd =
            Number(
              b.runsFor ?? 0
            ) -
            Number(
              b.runsAgainst ?? 0
            );

          return bd - ad;

        }
      );


    body.innerHTML =
      sorted
        .map(
          (team, index) => {

            const played =
              Number(
                team.played ?? 0
              );

            const wins =
              Number(
                team.wins ?? 0
              );

            const losses =
              Number(
                team.losses ?? 0
              );

            const draws =
              Number(
                team.draws ?? 0
              );

            const runsFor =
              Number(
                team.runsFor ?? 0
              );

            const runsAgainst =
              Number(
                team.runsAgainst ?? 0
              );

            const points =
              Number(
                team.points ?? 0
              );

            const diff =
              runsFor -
              runsAgainst;


            const name =
              getTeamName(
                team.team ??
                team.name
              );


            return `

              <tr>

                <td class="standing-rank">
                  ${index + 1}
                </td>

                <td>
                  ${name}
                </td>

                <td>
                  ${played}
                </td>

                <td>
                  ${wins}
                </td>

                <td>
                  ${losses}
                </td>

                <td>
                  ${draws}
                </td>

                <td>
                  ${runsFor}
                </td>

                <td>
                  ${runsAgainst}
                </td>

                <td>
                  ${diff > 0 ? "+" : ""}${diff}
                </td>

                <td>
                  ${points}
                </td>

              </tr>

            `;

          }
        )
        .join("");

  }


  /* =========================================================
     SCHEDULE
     ========================================================= */

  function getScheduleGames() {

    let games =
      getGames();


    games =
      games.filter(
        game => {

          const status =
            getStatus(game);

          if (
            currentScheduleStatus ===
            "upcoming"
          ) {

            return isUpcoming(game);

          }

          return (
            status ===
            "finished"
          );

        }
      );


    return sortGames(games);

  }


  function updateScheduleCounts() {

    const upcoming =
      document.getElementById(
        "scheduleUpcomingCount"
      );

    const finished =
      document.getElementById(
        "scheduleFinishedCount"
      );


    const upcomingCount =
      getGames().filter(
        game =>
          isUpcoming(game)
      ).length;


    const finishedCount =
      getGames().filter(
        game =>
          getStatus(game) ===
          "finished"
      ).length;


    if (upcoming) {
      upcoming.textContent =
        upcomingCount;
    }


    if (finished) {
      finished.textContent =
        finishedCount;
    }

  }


  function renderSchedule() {

    const container =
      document.getElementById(
        "scheduleList"
      );

    if (!container) {
      return;
    }


    updateScheduleCounts();


    const games =
      getScheduleGames();


    if (!games.length) {

      container.innerHTML = `
        <div class="no-games">
          ${escapeHTML(
            t("schedule.noGames")
          )}
        </div>
      `;

      return;

    }


    container.innerHTML =
      games
        .map(
          game => {

            const time =
              getGameTimeValue(game);

            const eventName =
              getEventName(game);

            const round =
              getRound(game);


            return `

              <article class="schedule-item">

                <div class="schedule-date">

                  <strong>
                    ${escapeHTML(
                      formatDate(
                        time,
                        currentZone
                      )
                    )}
                  </strong>

                  ${escapeHTML(
                    formatTime(
                      time,
                      currentZone
                    )
                  )}

                </div>


                <div class="schedule-match">

                  <span class="schedule-team">
                    ${getTeamName(game.away)}
                  </span>

                  <span class="schedule-vs">
                    VS
                  </span>

                  <span class="schedule-team">
                    ${getTeamName(game.home)}
                  </span>

                </div>


                <div class="schedule-info">

                  <strong>
                    ${escapeHTML(eventName)}
                  </strong>

                  <span>
                    ${round}
                  </span>

                </div>

              </article>

            `;

          }
        )
        .join("");

  }


  /* =========================================================
     LEAGUES
     ========================================================= */

  function renderLeagues() {

    const container =
      document.getElementById(
        "leagueCards"
      );

    if (!container) {
      return;
    }


    const leagues =
      Array.isArray(
        D.leagues
      )
        ? D.leagues
        : [];


    if (!leagues.length) {

      container.innerHTML = `
        <div class="no-games">
          ${escapeHTML(
            t("games.noGames")
          )}
        </div>
      `;

      return;

    }


    container.innerHTML =
      leagues
        .map(
          league => {

            const id =
              league.id ?? "";


            const name =
              getLocalized(
                league.name
              );


            const country =
              getLocalized(
                league.country
              );


            const region =
              getLocalized(
                league.region
              );


            const description =
              getLocalized(
                league.description
              );


            return `

              <article class="league-card">

                <div class="league-card-top">

                  <span class="league-code">
                    ${escapeHTML(
                      String(
                        id
                      ).toUpperCase()
                    )}
                  </span>

                  <span class="league-region">
                    ${escapeHTML(
                      country ||
                      region
                    )}
                  </span>

                </div>


                <h3>
                  ${escapeHTML(name)}
                </h3>


                <p>
                  ${escapeHTML(
                    description
                  )}
                </p>


                ${
                  id
                    ? `
                      <a
                        class="league-card-link"
                        href="./league.html?id=${encodeURIComponent(
                          id
                        )}"
                      >
                        ${escapeHTML(
                          currentLang === "ja"
                            ? "リーグを見る"
                            : currentLang === "ko"
                            ? "리그 보기"
                            : currentLang === "zh"
                            ? "查看聯盟"
                            : "View League"
                        )}
                        →
                      </a>
                    `
                    : ""
                }

              </article>

            `;

          }
        )
        .join("");

  }


  /* =========================================================
     CLOCK
     ========================================================= */

  function updateClock() {

    const clock =
      document.getElementById(
        "clock"
      );

    const tz =
      document.getElementById(
        "tz"
      );


    if (!clock) {
      return;
    }


    const zone =
      LANGUAGE_CONFIG[
        currentLang
      ]?.zone ||
      currentZone;


    const now =
      new Date();


    clock.textContent =
      new Intl.DateTimeFormat(
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
          second: "2-digit",
          hour12: false
        }
      ).format(now);


    if (tz) {

      tz.textContent =
        LANGUAGE_CONFIG[
          currentLang
        ]?.timezoneLabel ||
        zone;

    }

  }


  /* =========================================================
     TICKER
     ========================================================= */

  function renderTicker() {

    const ticker =
      document.getElementById(
        "tickerText"
      );

    if (!ticker) {
      return;
    }


    const games =
      sortGames(
        getGames()
      );


    if (!games.length) {

      ticker.textContent =
        t("games.noGames");

      return;

    }


    const game =
      games[0];


    const eventName =
      getEventName(game);


    const away =
      getLocalized(
        game.away
      );


    const home =
      getLocalized(
        game.home
      );


    const time =
      getGameTimeValue(game);


    ticker.textContent =
      `${eventName} · ${away} VS ${home} · ${formatDateTime(
        time,
        currentZone
      )}`;

  }


  /* =========================================================
     EVENT BINDINGS
     ========================================================= */

  function bindEvents() {

    document
      .querySelectorAll(
        ".header-language button, .language-switcher button"
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


    const eventFilter =
      document.getElementById(
        "leagueFilter"
      );


    if (eventFilter) {

      eventFilter.addEventListener(
        "change",
        renderGames
      );

    }


    const statusFilter =
      document.getElementById(
        "statusFilter"
      );


    if (statusFilter) {

      statusFilter.addEventListener(
        "change",
        renderGames
      );

    }


    document
      .querySelectorAll(
        ".schedule-zone-tabs button, [data-zone]"
      )
      .forEach(button => {

        if (
          !button.dataset.zone
        ) {
          return;
        }


        button.addEventListener(
          "click",
          () => {

            currentZone =
              button.dataset.zone;


            document
              .querySelectorAll(
                ".schedule-zone-tabs button"
              )
              .forEach(
                other =>
                  other.classList.toggle(
                    "active",
                    other === button
                  )
              );


            renderNextGame();

            renderGames();

            renderSchedule();

            renderTicker();

          }
        );

      });


    document
      .querySelectorAll(
        ".schedule-status-tabs button"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            currentScheduleStatus =
              button.dataset.scheduleStatus;


            document
              .querySelectorAll(
                ".schedule-status-tabs button"
              )
              .forEach(
                other =>
                  other.classList.toggle(
                    "active",
                    other === button
                  )
              );


            renderSchedule();

          }
        );

      });

  }


  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    if (
      !LANGS.includes(
        currentLang
      )
    ) {

      currentLang =
        "ja";

    }


    currentZone =
      LANGUAGE_CONFIG[
        currentLang
      ].zone;


    bindEvents();

    applyLanguage();

    renderTicker();

    updateClock();


    setInterval(
      updateClock,
      1000
    );


    setInterval(
      () => {

        renderNextGame();

        renderGames();

        renderSchedule();

        renderTicker();

      },
      60000
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
