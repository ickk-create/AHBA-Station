/* =========================================================
   Asia HCBB Baseball Alliance
   league.js
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     LANGUAGE
     ======================================================= */

  let currentLanguage =
    localStorage.getItem("asiaHCBBLanguage") || "ja";


  const supportedLanguages = [
    "ja",
    "ko",
    "en",
    "zh"
  ];


  if (!supportedLanguages.includes(currentLanguage)) {
    currentLanguage = "ja";
  }


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


  /* =======================================================
     GET LEAGUE ID
     ======================================================= */

  function getLeagueId() {

    const params =
      new URLSearchParams(
        window.location.search
      );

    return params.get("id");

  }


  /* =======================================================
     GET LEAGUE
     ======================================================= */

  function getLeague() {

    if (
      typeof ALLIANCE_DATA === "undefined" ||
      !Array.isArray(ALLIANCE_DATA.leagues)
    ) {

      return null;

    }


    const id = getLeagueId();


    return ALLIANCE_DATA.leagues.find(
      league =>
        String(league.id) === String(id)
    ) || null;

  }


  /* =======================================================
     RENDER
     ======================================================= */

  function renderLeague() {

    const league =
      getLeague();


    const notFound =
      $("#leagueNotFound");


    if (!league) {

      if (notFound) {
        notFound.hidden = false;
      }

      document.title =
        "League Not Found | Asia HCBB Baseball Alliance";

      return;

    }


    if (notFound) {
      notFound.hidden = true;
    }


    /* -----------------------------------------------
       Basic
       ----------------------------------------------- */

    const name =
      localized(league.name);


    const country =
      localized(league.country);


    const region =
      localized(
        league.region || league.country
      );


    const description =
      localized(league.description);


    $("#leagueName").textContent =
      name || "--";


    $("#leagueCountry").textContent =
      country || "--";


    $("#leagueDescription").textContent =
      description || "";


    document.title =
      `${name} | Asia HCBB Baseball Alliance`;


    /* -----------------------------------------------
       Match time
       ----------------------------------------------- */

    $("#leagueMatchTime").textContent =
      localized(
        league.matchTime
      ) || "--";


    /* -----------------------------------------------
       Region
       ----------------------------------------------- */

    $("#leagueRegion").textContent =
      region || "--";


    /* -----------------------------------------------
       Owner
       ----------------------------------------------- */

    $("#leagueOwner").textContent =
      league.owner || "--";


    /* -----------------------------------------------
       Teams
       ----------------------------------------------- */

    const teams =
      Array.isArray(league.teams)
        ? league.teams
        : [];


    $("#leagueTeamCount").textContent =
      `${teams.length}チーム`;


    const teamsList =
      $("#teamsList");


    teamsList.innerHTML = "";


    if (teams.length === 0) {

      teamsList.innerHTML = `
        <div class="empty-result">
          参加チーム情報はありません。
        </div>
      `;

    } else {

      teams.forEach((team, index) => {

        const teamName =
          localized(team.name);


        const teamCountry =
          localized(team.country);


        teamsList.insertAdjacentHTML(
          "beforeend",
          `
            <div class="team-card">

              <div class="team-number">
                ${String(index + 1).padStart(2, "0")}
              </div>

              <div class="team-main">

                <div class="team-name">
                  ${escapeHTML(teamName)}
                </div>

                <div class="team-country">
                  ${escapeHTML(teamCountry)}
                </div>

              </div>

            </div>
          `
        );

      });

    }


    /* -----------------------------------------------
       Discord
       ----------------------------------------------- */

    const discord =
      league.discord || {};


    const discordLink =
      $("#discordLink");


    const discordCode =
      $("#discordCode");


    if (discordCode) {

      discordCode.textContent =
        discord.code || "--";

    }


    if (
      discordLink &&
      discord.url
    ) {

      discordLink.href =
        discord.url;

      discordLink.style.display =
        "inline-flex";

    } else if (discordLink) {

      discordLink.style.display =
        "none";

    }

  }


  /* =======================================================
     LANGUAGE SWITCH
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      const button =
        event.target.closest(
          "[data-lang]"
        );


      if (!button) {
        return;
      }


      const language =
        button.dataset.lang;


      if (
        !supportedLanguages.includes(
          language
        )
      ) {

        return;

      }


      currentLanguage =
        language;


      localStorage.setItem(
        "asiaHCBBLanguage",
        currentLanguage
      );


      renderLeague();

    }
  );


  /* =======================================================
     START
     ======================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      renderLeague();

    }
  );

})();
