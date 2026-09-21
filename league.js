/* =========================================================
   Asia HCBB Baseball Alliance
   league.js
   ========================================================= */

(() => {
  "use strict";


  /* =========================================================
     DATA
     ========================================================= */

  const D = window.ALLIANCE_DATA || {
    leagues: [],
    games: []
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

      "league.title": "リーグ紹介",
      "league.description": "AHBAに参加するリーグの詳細情報です。",

      "league.region": "地域",
      "league.country": "国・地域",
      "league.owner": "運営",
      "league.games": "試合",
      "league.schedule": "試合日程",
      "league.standings": "順位表",
      "league.noGames": "このリーグに関連する試合はありません。",
      "league.noData": "リーグ情報がありません。",

      "status.scheduled": "予定",
      "status.live": "試合中",
      "status.finished": "終了",

      "game.international": "国際試合",
      "game.friendly": "交流試合",
      "game.tournament": "大会",
      "game.other": "その他",

      "common.home": "HOME",
      "common.away": "AWAY",
      "common.vs": "VS"
    },


    ko: {
      "nav.games": "경기 결과",
      "nav.standings": "순위표",
      "nav.schedule": "경기 일정",
      "nav.leagues": "참가 리그",
      "nav.about": "AHBA 소개",

      "league.title": "리그 소개",
      "league.description": "AHBA에 참가하는 리그의 상세 정보입니다.",

      "league.region": "지역",
      "league.country": "국가・지역",
      "league.owner": "운영",
      "league.games": "경기",
      "league.schedule": "경기 일정",
      "league.standings": "순위표",
      "league.noGames": "이 리그와 관련된 경기가 없습니다.",
      "league.noData": "리그 정보가 없습니다.",

      "status.scheduled": "예정",
      "status.live": "진행 중",
      "status.finished": "종료",

      "game.international": "국제 경기",
      "game.friendly": "교류 경기",
      "game.tournament": "대회",
      "game.other": "기타",

      "common.home": "HOME",
      "common.away": "AWAY",
      "common.vs": "VS"
    },


    en: {
      "nav.games": "Games",
      "nav.standings": "Standings",
      "nav.schedule": "Schedule",
      "nav.leagues": "Leagues",
      "nav.about": "About AHBA",

      "league.title": "League Introduction",
      "league.description": "Detailed information about leagues participating in AHBA.",

      "league.region": "Region",
      "league.country": "Country / Region",
      "league.owner": "Owner",
      "league.games": "Games",
      "league.schedule": "Schedule",
      "league.standings": "Standings",
      "league.noGames": "There are no games associated with this league.",
      "league.noData": "No league information is available.",

      "status.scheduled": "Scheduled",
      "status.live": "Live",
      "status.finished": "Finished",

      "game.international": "International",
      "game.friendly": "Friendly",
      "game.tournament": "Tournament",
      "game.other": "Other",

      "common.home": "HOME",
      "common.away": "AWAY",
      "common.vs": "VS"
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

      "league.title": "聯盟介紹",
      "league.description": "參與 AHBA 的各聯盟詳細資訊。",

      "league.region": "地區",
      "league.country": "國家／地區",
      "league.owner": "營運",
      "league.games": "賽事",
      "league.schedule": "賽程",
      "league.standings": "排名",
      "league.noGames": "此聯盟目前沒有相關賽事。",
      "league.noData": "目前沒有聯盟資訊。",

      "status.scheduled": "預定",
      "status.live": "進行中",
      "status.finished": "已結束",

      "game.international": "國際賽",
      "game.friendly": "交流賽",
      "game.tournament": "錦標賽",
      "game.other": "其他",

      "common.home": "主隊",
      "common.away": "客隊",
      "common.vs": "VS"
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
     URL / LEAGUE
     ========================================================= */

  function getLeagueId() {
    const params =
      new URLSearchParams(
        window.location.search
      );

    return params.get("id");
  }


  function getLeague() {
    const id = getLeagueId();

    if (!id) {
      return null;
    }

    if (!Array.isArray(D.leagues)) {
      return null;
    }

    return (
      D.leagues.find(
        league =>
          String(league.id) ===
          String(id)
      ) || null
    );
  }


  function getLeagueName(league) {
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


  function getLeagueDescription(league) {
    if (!league) {
      return "";
    }

    return getLocalized(
      league.description ??
      league.desc ??
      ""
    );
  }


  function getLeagueRegion(league) {
    if (!league) {
      return "";
    }

    return getLocalized(
      league.region ??
      league.country ??
      ""
    );
  }


  function getLeagueOwner(league) {
    if (!league) {
      return "";
    }

    return getLocalized(
      league.owner ??
      league.manager ??
      league.organizer ??
      ""
    );
  }


  /* =========================================================
     GAME HELPERS
     ========================================================= */

  function getLeagueGames(league) {
    if (
      !league ||
      !Array.isArray(D.games)
    ) {
      return [];
    }

    const id =
      String(league.id);

    return D.games.filter(game => {

      const leagueId =
        game?.leagueId ??
        game?.league ??
        game?.league_id;

      if (
        leagueId !== undefined &&
        leagueId !== null
      ) {
        return String(leagueId) === id;
      }

      /*
       * Some AHBA official games may not belong
       * directly to a participating league.
       * Therefore they are not automatically
       * assigned to this league.
       */

      return false;
    });
  }


  function getHome(game) {
    return getLocalized(
      game?.home
    );
  }


  function getAway(game) {
    return getLocalized(
      game?.away
    );
  }


  function getEventName(game) {
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
      international:
        "game.international",

      friendly:
        "game.friendly",

      tournament:
        "game.tournament",

      other:
        "game.other"
    };

    return t(
      map[type] ||
      "game.other"
    );
  }


  function getStatusLabel(status) {
    const map = {
      scheduled:
        "status.scheduled",

      live:
        "status.live",

      finished:
        "status.finished"
    };

    return t(
      map[status] ||
      status ||
      ""
    );
  }


  function getScore(game) {
    const home =
      game?.homeScore ??
      game?.score?.home ??
      null;

    const away =
      game?.awayScore ??
      game?.score?.away ??
      null;

    if (
      home === null ||
      away === null
    ) {
      return "-";
    }

    return `${away} - ${home}`;
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


  /* =========================================================
     LEAGUE HEADER
     ========================================================= */

  function renderLeagueHeader(league) {
    const name =
      getLeagueName(league);

    const description =
      getLeagueDescription(league);

    const region =
      getLeagueRegion(league);

    const owner =
      getLeagueOwner(league);


    const title =
      document.getElementById(
        "leagueName"
      );

    if (title) {
      title.textContent = name;
    }


    const desc =
      document.getElementById(
        "leagueDescription"
      );

    if (desc) {
      desc.textContent =
        description;
    }


    const regionElement =
      document.getElementById(
        "leagueRegion"
      );

    if (regionElement) {
      regionElement.textContent =
        region;
    }


    const ownerElement =
      document.getElementById(
        "leagueOwner"
      );

    if (ownerElement) {
      ownerElement.textContent =
        owner;
    }


    const idElement =
      document.getElementById(
        "leagueId"
      );

    if (idElement) {
      idElement.textContent =
        league.id || "";
    }
  }


  /* =========================================================
     GAME LIST
     ========================================================= */

  function createGameCard(game) {
    const home =
      getHome(game);

    const away =
      getAway(game);

    const event =
      getEventName(game);

    const score =
      getScore(game);

    const status =
      game.status ||
      "scheduled";

    const date =
      game.datetime ??
      game.dateTime ??
      game.startTime ??
      game.date;


    return `
      <a
        class="league-game-card"
        href="./game.html?id=${encodeURIComponent(
          game.id
        )}"
      >

        <div class="league-game-top">

          <span class="league-game-event">
            ${escapeHTML(event)}
          </span>

          <span class="league-game-status status-${escapeHTML(
            status
          )}">
            ${escapeHTML(
              getStatusLabel(status)
            )}
          </span>

        </div>


        <div class="league-game-date">
          ${escapeHTML(
            formatDate(date)
          )}
          ${escapeHTML(
            formatTime(date)
          )}
          ${escapeHTML(
            LANGUAGE_CONFIG[currentLang]
              ?.timezoneLabel || ""
          )}
        </div>


        <div class="league-game-teams">

          <span class="league-game-team">
            ${escapeHTML(away)}
          </span>

          <strong class="league-game-score">
            ${escapeHTML(score)}
          </strong>

          <span class="league-game-team">
            ${escapeHTML(home)}
          </span>

        </div>

      </a>
    `;
  }


  function renderGames(league) {
    const container =
      document.getElementById(
        "leagueGames"
      );

    if (!container) {
      return;
    }


    const games =
      getLeagueGames(league)
        .sort((a, b) => {

          const ta =
            new Date(
              a.datetime ??
              a.dateTime ??
              a.startTime ??
              a.date ??
              0
            ).getTime();

          const tb =
            new Date(
              b.datetime ??
              b.dateTime ??
              b.startTime ??
              b.date ??
              0
            ).getTime();

          return tb - ta;
        });


    if (!games.length) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(
            t("league.noGames")
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

  function getLeagueStandings(league) {
    /*
     * If the league itself has standings,
     * use them first.
     */

    if (
      Array.isArray(
        league?.standings
      )
    ) {
      return [
        ...league.standings
      ];
    }


    /*
     * Otherwise use global standings
     * only when the row explicitly belongs
     * to this league.
     */

    if (
      Array.isArray(
        D?.standings?.current
      )
    ) {

      return D.standings.current.filter(
        row => {

          const leagueId =
            row?.leagueId ??
            row?.league ??
            row?.league_id;

          if (
            leagueId === undefined ||
            leagueId === null
          ) {
            return false;
          }

          return String(leagueId) ===
            String(league.id);
        }
      );
    }


    return [];
  }


  function renderStandings(league) {
    const container =
      document.getElementById(
        "leagueStandings"
      );

    if (!container) {
      return;
    }


    const rows =
      getLeagueStandings(league);


    if (!rows.length) {
      container.innerHTML = `
        <div class="empty-state">
          ${escapeHTML(
            t("league.noData")
          )}
        </div>
      `;

      return;
    }


    const sorted =
      [...rows].sort(
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


    container.innerHTML = `
      <div class="league-standings-wrapper">

        <table class="league-standings-table">

          <thead>
            <tr>
              <th>#</th>
              <th>
                ${escapeHTML(
                  currentLang === "zh"
                    ? "隊伍"
                    : currentLang === "ko"
                      ? "팀"
                      : currentLang === "en"
                        ? "Team"
                        : "チーム"
                )}
              </th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>RF</th>
              <th>RA</th>
              <th>DIFF</th>
              <th>PTS</th>
            </tr>
          </thead>

          <tbody>

            ${sorted.map(
              (row, index) => {

                const team =
                  getLocalized(
                    row.team
                  );

                const played =
                  Number(
                    row.played ?? 0
                  );

                const wins =
                  Number(
                    row.wins ?? 0
                  );

                const losses =
                  Number(
                    row.losses ?? 0
                  );

                const draws =
                  Number(
                    row.draws ?? 0
                  );

                const runsFor =
                  Number(
                    row.runsFor ?? 0
                  );

                const runsAgainst =
                  Number(
                    row.runsAgainst ?? 0
                  );

                const diff =
                  runsFor -
                  runsAgainst;

                const points =
                  Number(
                    row.points ?? 0
                  );


                return `
                  <tr>

                    <td>
                      ${index + 1}
                    </td>

                    <td class="league-standing-team">
                      ${escapeHTML(team)}
                    </td>

                    <td>${played}</td>
                    <td>${wins}</td>
                    <td>${losses}</td>
                    <td>${draws}</td>
                    <td>${runsFor}</td>
                    <td>${runsAgainst}</td>

                    <td class="${
                      diff > 0
                        ? "positive"
                        : diff < 0
                          ? "negative"
                          : ""
                    }">
                      ${
                        diff > 0
                          ? "+"
                          : ""
                      }${diff}
                    </td>

                    <td>
                      <strong>
                        ${points}
                      </strong>
                    </td>

                  </tr>
                `;
              }
            ).join("")}

          </tbody>

        </table>

      </div>
    `;
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


  function applyStaticLanguage() {
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
  }


  function setLanguage(lang, league) {
    if (!LANGS.includes(lang)) {
      return;
    }

    currentLang = lang;

    localStorage.setItem(
      "asiaHCBBLanguage",
      currentLang
    );


    applyStaticLanguage();

    renderLeagueHeader(league);
    renderGames(league);
    renderStandings(league);
    updateClock();
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


    const timezone =
      document.getElementById(
        "tz"
      );

    if (timezone) {
      timezone.textContent =
        LANGUAGE_CONFIG[currentLang]
          ?.timezoneLabel ||
        "";
    }
  }


  /* =========================================================
     EVENTS
     ========================================================= */

  function bindEvents(league) {

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
              league
            );

          }
        );

      });
  }


  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    const league =
      getLeague();


    if (!league) {

      const main =
        document.querySelector(
          "main"
        );

      if (main) {
        main.innerHTML = `
          <div class="empty-state">
            ${escapeHTML(
              t("league.noData")
            )}
          </div>
        `;
      }

      updateClock();

      return;
    }


    bindEvents(league);

    applyStaticLanguage();

    renderLeagueHeader(league);
    renderGames(league);
    renderStandings(league);

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
