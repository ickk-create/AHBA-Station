/* =========================================================
   Asia HCBB Baseball Alliance
   game.js
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     LANGUAGE
     ======================================================= */

  const translations = {

    ja: {

      nav: {
        games: "試合結果",
        standings: "順位表",
        schedule: "試合日程",
        leagues: "参加リーグ",
        about: "AHBAについて"
      },

      game: {
        back: "← 試合一覧へ戻る",

        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "スコアボード",

        pitchingEyebrow: "PITCHING",
        pitching: "投手成績",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "ホームラン",

        notesEyebrow: "GAME NOTES",
        notes: "試合メモ",

        win: "勝利投手",
        loss: "敗戦投手",
        save: "セーブ",
        holds: "ホールド",

        lineup: "打順・ベンチ入り",
        home: "ホーム",
        away: "ビジター",
        starters: "STARTING LINEUP",
        bench: "BENCH",
        dh: "DH制",
        noDh: "DHなし",
        showPositions: "守備位置を表示",
        hidePositions: "守備位置を非表示",

        inning: "回",

        noData: "記録なし",

        notFound: "試合が見つかりません",
        notFoundDescription:
          "指定された試合は存在しません。",

        return: "試合一覧へ戻る",

        international: "国際試合",
        friendly: "親善試合",
        tournament: "大会",
        ahba: "AHBA公式試合"
      },

      footer: {
        copyright:
          "© Asia HCBB Baseball Alliance"
      }

    },


    ko: {

      nav: {
        games: "경기 결과",
        standings: "순위표",
        schedule: "경기 일정",
        leagues: "리그 소개",
        about: "AHBA 소개"
      },

      game: {
        back: "← 경기 목록으로 돌아가기",

        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "스코어보드",

        pitchingEyebrow: "PITCHING",
        pitching: "투수 기록",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "홈런",

        notesEyebrow: "GAME NOTES",
        notes: "경기 메모",

        win: "승리 투수",
        loss: "패전 투수",
        save: "세이브",
        holds: "홀드",

        lineup: "타순 및 벤치 명단",
        home: "홈",
        away: "원정",
        starters: "선발 라인업",
        bench: "벤치",
        dh: "지명타자제",
        noDh: "지명타자제 없음",
        showPositions: "수비 위치 표시",
        hidePositions: "수비 위치 숨기기",

        inning: "회",

        noData: "기록 없음",

        notFound: "경기를 찾을 수 없습니다",
        notFoundDescription:
          "지정된 경기가 존재하지 않습니다.",

        return: "경기 목록으로 돌아가기",

        international: "국제 경기",
        friendly: "친선 경기",
        tournament: "대회",
        ahba: "AHBA 공식 경기"
      },

      footer: {
        copyright:
          "© Asia HCBB Baseball Alliance"
      }

    },


    en: {

      nav: {
        games: "Games",
        standings: "Standings",
        schedule: "Schedule",
        leagues: "Leagues",
        about: "About AHBA"
      },

      game: {
        back: "← Back to Games",

        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "Scoreboard",

        pitchingEyebrow: "PITCHING",
        pitching: "Pitching",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "Home Runs",

        notesEyebrow: "GAME NOTES",
        notes: "Game Notes",

        win: "Winning Pitcher",
        loss: "Losing Pitcher",
        save: "Save",
        holds: "Holds",

        lineup: "Batting Lineup & Bench",
        home: "Home",
        away: "Away",
        starters: "STARTING LINEUP",
        bench: "BENCH",
        dh: "DH",
        noDh: "No DH",
        showPositions: "Show Positions",
        hidePositions: "Hide Positions",
         
        inning: "th",

        noData: "No record",

        notFound: "Game Not Found",
        notFoundDescription:
          "The requested game does not exist.",

        return: "Back to Games",

        international: "International",
        friendly: "Friendly",
        tournament: "Tournament",
        ahba: "AHBA Official Game"
      },

      footer: {
        copyright:
          "© Asia HCBB Baseball Alliance"
      }

    },


    zh: {

      nav: {
        games: "比賽結果",
        standings: "積分榜",
        schedule: "比賽日程",
        leagues: "聯賽介紹",
        about: "關於AHBA"
      },

      game: {
        back: "← 返回比賽列表",

        eyebrow: "GAME DETAILS",

        scoreboardEyebrow: "SCOREBOARD",
        scoreboard: "記分板",

        pitchingEyebrow: "PITCHING",
        pitching: "投手記錄",

        homeRunsEyebrow: "HOME RUNS",
        homeRuns: "本壘打",

        notesEyebrow: "GAME NOTES",
        notes: "比賽備註",

        win: "勝投",
        loss: "敗投",
        save: "救援成功",
        holds: "中繼成功",

        lineup: "打序與板凳名單",
        home: "主場",
        away: "客場",
        starters: "先發打線",
        bench: "板凳名單",
        dh: "指定打擊制",
        noDh: "無指定打擊制",
        showPositions: "顯示守備位置",
        hidePositions: "隱藏守備位置",
         
        inning: "局",

        noData: "暫無記錄",

        notFound: "找不到比賽",
        notFoundDescription:
          "指定的比賽不存在。",

        return: "返回比賽列表",

        international: "國際比賽",
        friendly: "友誼賽",
        tournament: "賽事",
        ahba: "AHBA官方比賽"
      },

      footer: {
        copyright:
          "© Asia HCBB Baseball Alliance"
      }

    }

  };


  /* =======================================================
     LANGUAGE STATE
     ======================================================= */

  let currentLanguage =
    localStorage.getItem("asiaHCBBLanguage") || "ja";


  if (!translations[currentLanguage]) {
    currentLanguage = "ja";
  }


  /* =======================================================
     TIME ZONES
     ======================================================= */

  const languageZones = {

    ja: {
      zone: "Asia/Tokyo",
      locale: "ja-JP",
      label: "Asia/Tokyo"
    },

    ko: {
      zone: "Asia/Seoul",
      locale: "ko-KR",
      label: "Asia/Seoul"
    },

    en: {
      zone: "America/New_York",
      locale: "en-US",
      label: "America/New_York"
    },

    zh: {
      zone: "Asia/Taipei",
      locale: "zh-TW",
      label: "Asia/Taipei"
    }

  };


  let currentZone =
    languageZones[currentLanguage].zone;


  /* =======================================================
     HELPERS
     ======================================================= */

  function $(selector) {
    return document.querySelector(selector);
  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function localized(value) {

    if (
      value &&
      typeof value === "object"
    ) {

      return (
        value[currentLanguage] ??
        value.ja ??
        value.en ??
        Object.values(value)[0] ??
        ""
      );

    }

    return value ?? "";

  }


  function t(key) {

    const parts = key.split(".");

    let value =
      translations[currentLanguage];

    for (const part of parts) {

      if (
        value &&
        Object.prototype.hasOwnProperty.call(
          value,
          part
        )
      ) {

        value = value[part];

      } else {

        return key;

      }

    }

    return value;

  }


  /* =======================================================
     CLOCK
     ======================================================= */

  function updateClock() {

    const clock =
      document.getElementById("clock");

    const tz =
      document.getElementById("tz");

    if (!clock) {
      return;
    }


    const settings =
      languageZones[currentLanguage] ||
      languageZones.ja;


    currentZone = settings.zone;


    try {

      clock.textContent =
        new Intl.DateTimeFormat(
          settings.locale,
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
        ).format(new Date());

    } catch {

      clock.textContent =
        new Date().toLocaleString();

    }


    if (tz) {

      tz.textContent =
        settings.label;

    }

  }


  /* =======================================================
     DATE
     ======================================================= */

  function formatDate(value) {

    if (!value) {
      return "--";
    }


    const date =
      new Date(value);


    if (Number.isNaN(date.getTime())) {
      return value;
    }


    const settings =
      languageZones[currentLanguage] ||
      languageZones.ja;


    try {

      return new Intl.DateTimeFormat(
        settings.locale,
        {
          timeZone: currentZone,

          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          weekday: "short",

          hour: "2-digit",
          minute: "2-digit"
        }
      ).format(date);

    } catch {

      return date.toLocaleString();

    }

  }


  /* =======================================================
     GAME ID
     ======================================================= */

  function getGameId() {

    const params =
      new URLSearchParams(
        window.location.search
      );

    return params.get("id");

  }


  /* =======================================================
     GET GAME
     ======================================================= */

  function getGame() {

    if (
      typeof ALLIANCE_DATA === "undefined" ||
      !Array.isArray(ALLIANCE_DATA.games)
    ) {

      return null;

    }


    const gameId =
      getGameId();


    return (
      ALLIANCE_DATA.games.find(
        game =>
          String(game.id) ===
          String(gameId)
      ) || null
    );

  }


  /* =======================================================
     GAME TYPE
     ======================================================= */

  function getGameType(game) {

    const types = {

      international:
        t("game.international"),

      friendly:
        t("game.friendly"),

      tournament:
        t("game.tournament")

    };


    return (
      types[game.type] ||
      t("game.ahba")
    );

  }


  /* =======================================================
     APPLY LANGUAGE
     ======================================================= */

  function applyLanguage() {

    document.documentElement.lang =
      currentLanguage;


    const settings =
      languageZones[currentLanguage] ||
      languageZones.ja;


    currentZone =
      settings.zone;


    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {

        const key =
          element.dataset.i18n;

        const value =
          t(key);

        if (value !== key) {

          element.textContent =
            value;

        }

      });


    document
      .querySelectorAll("[data-lang]")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.lang ===
            currentLanguage
        );

      });


    updateClock();

    renderGame();

  }


  /* =======================================================
     SCOREBOARD
     ======================================================= */

  function renderScoreboard(game) {

    const table =
      $("#scoreboard");

    if (!table) {
      return;
    }


    const thead =
      table.querySelector("thead");

    const tbody =
      table.querySelector("tbody");


    if (!thead || !tbody) {
      return;
    }


    thead.innerHTML = "";
    tbody.innerHTML = "";


    const innings =
      game?.detail?.innings;


    if (!innings) {

      tbody.innerHTML = `
        <tr>
          <td
            colspan="12"
            class="empty-result"
          >
            ${escapeHTML(
              t("game.noData")
            )}
          </td>
        </tr>
      `;

      return;

    }


    const homeInnings =
      Array.isArray(innings.home)
        ? innings.home
        : [];


    const awayInnings =
      Array.isArray(innings.away)
        ? innings.away
        : [];


    const inningCount =
      Math.max(
        homeInnings.length,
        awayInnings.length
      );


    let headerHTML = `
      <tr>
        <th></th>
    `;


    for (
      let i = 0;
      i < inningCount;
      i++
    ) {

      headerHTML += `
        <th>
          ${i + 1}
        </th>
      `;

    }


    headerHTML += `
        <th class="total">
          R
        </th>
      </tr>
    `;


    thead.innerHTML =
      headerHTML;


    const awayTotal =
      awayInnings.reduce(
        (sum, value) =>
          sum + Number(value || 0),
        0
      );


    const homeTotal =
      homeInnings.reduce(
        (sum, value) =>
          sum + Number(value || 0),
        0
      );


    let awayHTML = `
      <tr>

        <th>
          ${escapeHTML(
            game.away || "--"
          )}
        </th>
    `;


    for (
      let i = 0;
      i < inningCount;
      i++
    ) {

      awayHTML += `
        <td>
          ${escapeHTML(
            awayInnings[i] ?? 0
          )}
        </td>
      `;

    }


    awayHTML += `
        <td class="total">
          ${awayTotal}
        </td>

      </tr>
    `;


    let homeHTML = `
      <tr>

        <th>
          ${escapeHTML(
            game.home || "--"
          )}
        </th>
    `;


    for (
      let i = 0;
      i < inningCount;
      i++
    ) {

      homeHTML += `
        <td>
          ${escapeHTML(
            homeInnings[i] ?? 0
          )}
        </td>
      `;

    }


    homeHTML += `
        <td class="total">
          ${homeTotal}
        </td>

      </tr>
    `;


    tbody.innerHTML =
      awayHTML +
      homeHTML;

  }


    /* =======================================================
     BATTING LINEUP
     ======================================================= */

  function renderLineups(game) {

    const section = $("#lineupSection");
    const container = $("#lineupResults");
    const toggleButton = $("#togglePositions");

    if (!section || !container) {
      return;
    }

    const lineups = game?.detail?.lineups;

    const home = lineups?.home || {};
    const away = lineups?.away || {};

    const teams = [
      {
        side: "home",
        name: game.home,
        data: home
      },
      {
        side: "away",
        name: game.away,
        data: away
      }
    ];

    const hasPlayers = teams.some(team =>
      [...(Array.isArray(team.data.starters) ? team.data.starters : []),
       ...(Array.isArray(team.data.bench) ? team.data.bench : [])]
        .some(player => player?.player)
    );

    if (!hasPlayers) {
      section.hidden = true;
      container.innerHTML = "";
      return;
    }

    section.hidden = false;

    const hasPositions = teams.some(team =>
      [...(Array.isArray(team.data.starters) ? team.data.starters : []),
       ...(Array.isArray(team.data.bench) ? team.data.bench : [])]
        .some(player => player?.player && player.position)
    );

    const renderPlayerList = (players, isBench = false) => {

      if (!Array.isArray(players) || !players.length) {
        return "";
      }

      return players
        .filter(player => player?.player)
        .map((player, index) => `
          <div class="lineup-player ${isBench ? "lineup-bench" : ""}">

            <span class="lineup-order">
              ${isBench ? "—" : index + 1}
            </span>

            <span class="lineup-player-name">
              ${escapeHTML(player.player)}
            </span>

            ${
              player.position
                ? `<span class="lineup-position">
                    ${escapeHTML(player.position)}
                  </span>`
                : ""
            }

          </div>
        `)
        .join("");
    };

    container.classList.toggle(
      "positions-hidden",
      !hasPositions
    );

    container.innerHTML = teams.map(team => {

      const starters = Array.isArray(team.data.starters)
        ? team.data.starters
        : [];

      const bench = Array.isArray(team.data.bench)
        ? team.data.bench
        : [];

      const dhLabel = team.data.dh === true
        ? t("game.dh")
        : t("game.noDh");

      return `
        <article class="lineup-card">

          <div class="lineup-card-header">

            <div class="lineup-team-name">
              ${escapeHTML(team.name || "--")}
            </div>

            <span class="lineup-dh">
              ${escapeHTML(dhLabel)}
            </span>

          </div>

          <h3 class="lineup-subheading">
            ${escapeHTML(t("game.starters"))}
          </h3>

          <div class="lineup-list">
            ${
              starters.length
                ? renderPlayerList(starters)
                : `<div class="empty-result">${escapeHTML(t("game.noData"))}</div>`
            }
          </div>

          <h3 class="lineup-subheading">
            ${escapeHTML(t("game.bench"))}
          </h3>

          <div class="lineup-list">
            ${
              bench.length
                ? renderPlayerList(bench, true)
                : `<div class="empty-result">${escapeHTML(t("game.noData"))}</div>`
            }
          </div>

        </article>
      `;

    }).join("");

    if (toggleButton) {
      toggleButton.hidden = !hasPositions;
      toggleButton.classList.add("lineup-toggle");

      toggleButton.textContent = hasPositions
        ? t("game.hidePositions")
        : t("game.showPositions");
    }
  }


  /* =======================================================
     LINEUP POSITION TOGGLE
     ======================================================= */

  document.addEventListener("click", event => {

    const button = event.target.closest("#togglePositions");

    if (!button) {
      return;
    }

    const container = $("#lineupResults");

    if (!container) {
      return;
    }

    const isHidden = container.classList.toggle(
      "positions-hidden"
    );

    button.textContent = isHidden
      ? t("game.showPositions")
      : t("game.hidePositions");

  });

   
  /* =======================================================
     PITCHING
     ======================================================= */

  function renderPitching(game) {

    const container =
      $("#pitchingResults");

    if (!container) {
      return;
    }


    container.innerHTML = "";


    const pitching =
      game?.detail?.pitching || {};


    const rows = [

      {
        label: t("game.win"),
        value: pitching.win
      },

      {
        label: t("game.loss"),
        value: pitching.loss
      },

      {
        label: t("game.save"),
        value: pitching.save
      }

    ];


    rows.forEach(row => {

      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="result-row">

            <div class="result-label">
              ${escapeHTML(
                row.label
              )}
            </div>

            <div class="result-value">
              ${
                row.value
                  ? escapeHTML(
                      row.value
                    )
                  : escapeHTML(
                      t("game.noData")
                    )
              }
            </div>

          </div>
        `
      );

    });


    const holds =
      Array.isArray(pitching.holds)
        ? pitching.holds
        : [];


    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="result-row">

          <div class="result-label">
            ${escapeHTML(
              t("game.holds")
            )}
          </div>

          <div class="result-value">

            ${
              holds.length
                ? holds
                    .map(
                      player =>
                        escapeHTML(player)
                    )
                    .join("<br>")
                : escapeHTML(
                    t("game.noData")
                  )
            }

          </div>

        </div>
      `
    );

  }


  /* =======================================================
     HOME RUNS
     ======================================================= */

  function renderHomeRuns(game) {

    const container =
      $("#homeRuns");

    if (!container) {
      return;
    }


    container.innerHTML = "";


    const homeRuns =
      Array.isArray(
        game?.detail?.homeRuns
      )
        ? game.detail.homeRuns
        : [];


    if (!homeRuns.length) {

      container.innerHTML = `
        <div class="empty-result">
          ${escapeHTML(
            t("game.noData")
          )}
        </div>
      `;

      return;

    }


    homeRuns.forEach(homeRun => {

      const team =
        homeRun.team === "home"
          ? game.home
          : game.away;


      const inning =
        Number(
          homeRun.inning || 0
        );


      const runs =
        Number(
          homeRun.runs || 1
        );


      const runText =
        runs === 1
          ? "Solo"
          : `${runs}-run`;


      container.insertAdjacentHTML(
        "beforeend",
        `
          <div
            class="result-row hr-row"
          >

            <div class="hr-team">
              ${escapeHTML(
                team
              )}
            </div>

            <div class="hr-player">
              ${escapeHTML(
                homeRun.player
              )}
            </div>

            <div class="hr-info">

              ${inning}
              ${escapeHTML(
                t("game.inning")
              )}

              ・

              ${escapeHTML(
                runText
              )}

            </div>

          </div>
        `
      );

    });

  }


  /* =======================================================
     NOTES
     ======================================================= */

  function renderNotes(game) {

    const section =
      $("#notesSection");

    const notes =
      $("#gameNotes");


    if (!section || !notes) {
      return;
    }


    const value =
      game?.detail?.notes
        ? localized(
            game.detail.notes
          )
        : "";


    if (value) {

      notes.textContent =
        value;

      section.hidden =
        false;

    } else {

      notes.textContent =
        "";

      section.hidden =
        true;

    }

  }


  /* =======================================================
     MAIN RENDER
     ======================================================= */

  function renderGame() {

    const game =
      getGame();


    const content =
      document.querySelector(
        ".game-hero"
      );


    const notFound =
      $("#gameNotFound");


    if (!game) {

      if (content) {
        content.hidden = true;
      }

      if (notFound) {
        notFound.hidden = false;
      }

      document.title =
        "Game Not Found | Asia HCBB Baseball Alliance";

      return;

    }


    if (content) {
      content.hidden = false;
    }


    if (notFound) {
      notFound.hidden = true;
    }


    /* Hero */

    const gameType =
      $("#gameType");

    const gameDate =
      $("#gameDate");

    const homeTeam =
      $("#homeTeam");

    const awayTeam =
      $("#awayTeam");

    const homeScore =
      $("#homeScore");

    const awayScore =
      $("#awayScore");

    const gameStatus =
      $("#gameStatus");


    if (gameType) {

      gameType.textContent =
        getGameType(game);

    }


    if (gameDate) {

      gameDate.textContent =
        formatDate(
          game.time
        );

    }


    if (homeTeam) {

      homeTeam.textContent =
        game.home || "--";

    }


    if (awayTeam) {

      awayTeam.textContent =
        game.away || "--";

    }


    if (homeScore) {

      homeScore.textContent =
        game.homeScore ?? "-";

    }


    if (awayScore) {

      awayScore.textContent =
        game.awayScore ?? "-";

    }


    if (gameStatus) {

      gameStatus.textContent =
        game.status === "finished"
          ? "FINAL"
          : String(
              game.status || ""
            ).toUpperCase();

    }


    document.title =
      `${game.home || ""} vs ${
        game.away || ""
      } | Asia HCBB Baseball Alliance`;


    /* Detail */

    renderScoreboard(game);

    renderLineups(game);

    renderPitching(game);

    renderHomeRuns(game);

    renderNotes(game);

  }


  /* =======================================================
     LANGUAGE BUTTONS
     ======================================================= */

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-lang]"
        );


      if (!button) {
        return;
      }


      const language =
        button.dataset.lang;


      if (!translations[language]) {
        return;
      }


      currentLanguage =
        language;


      localStorage.setItem(
        "asiaHCBBLanguage",
        currentLanguage
      );


      applyLanguage();

    }
  );


  /* =======================================================
     START
     ======================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      applyLanguage();


      /*
       * 時計は試合描画とは独立して動かす。
       * これにより、試合ページを開いた瞬間から表示される。
       */

      updateClock();

      setInterval(
        updateClock,
        1000
      );

    }
  );


})();
