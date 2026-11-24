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


  const leagueTranslations = {

    ja: {

      nav: {
        games: "試合情報",
        standings: "順位表",
        schedule: "日程",
        leagues: "リーグ紹介",
        about: "AHBAについて"
      },

      back:
        "← リーグ紹介へ戻る",

      league: {
        label: "LEAGUE"
      },

      information: {
        eyebrow: "INFORMATION",
        title: "リーグ情報",
        matchTime: "試合時間",
        region: "地域",
        teams: "参加チーム数",
        owner: "運営"
      },

      teams: {
        eyebrow: "PARTICIPATING TEAMS",
        title: "参加チーム",
        count: "チーム",
        empty:
          "参加チーム情報はありません。"
      },

      discord: {
        eyebrow: "DISCORD",
        title: "公式Discordサーバー",
        description:
          "このリーグの運営・連絡・交流はDiscordサーバーで行われます。",
        code: "サーバーコード",
        button: "Discordサーバーへ"
      },

      error: {
        title: "リーグが見つかりません",
        description:
          "指定されたリーグは存在しません。"
      },

      footer: {
        rights: "All Rights Reserved."
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

      back:
        "← 리그 소개로 돌아가기",

      league: {
        label: "LEAGUE"
      },

      information: {
        eyebrow: "INFORMATION",
        title: "리그 정보",
        matchTime: "경기 시간",
        region: "지역",
        teams: "참가 팀 수",
        owner: "운영"
      },

      teams: {
        eyebrow: "PARTICIPATING TEAMS",
        title: "참가 팀",
        count: "팀",
        empty:
          "참가 팀 정보가 없습니다."
      },

      discord: {
        eyebrow: "DISCORD",
        title: "공식 Discord 서버",
        description:
          "이 리그의 운영·연락·교류는 Discord 서버를 통해 진행됩니다.",
        code: "서버 코드",
        button: "Discord 서버로 이동"
      },

      error: {
        title: "리그를 찾을 수 없습니다",
        description:
          "지정된 리그가 존재하지 않습니다."
      },

      footer: {
        rights: "All Rights Reserved."
      }

    },


    zh: {

      nav: {
        games: "比賽資訊",
        standings: "積分榜",
        schedule: "賽程",
        leagues: "聯賽介紹",
        about: "關於 AHBA"
      },

      back:
        "← 返回聯賽介紹",

      league: {
        label: "LEAGUE"
      },

      information: {
        eyebrow: "INFORMATION",
        title: "聯賽資訊",
        matchTime: "比賽時間",
        region: "地區",
        teams: "參賽隊伍數",
        owner: "營運"
      },

      teams: {
        eyebrow: "PARTICIPATING TEAMS",
        title: "參賽隊伍",
        count: "隊",
        empty:
          "目前沒有參賽隊伍資訊。"
      },

      discord: {
        eyebrow: "DISCORD",
        title: "官方 Discord 伺服器",
        description:
          "本聯賽的營運、聯絡與交流將透過 Discord 伺服器進行。",
        code: "伺服器代碼",
        button: "前往 Discord 伺服器"
      },

      error: {
        title: "找不到聯賽",
        description:
          "指定的聯賽不存在。"
      },

      footer: {
        rights: "All Rights Reserved."
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

      back:
        "← Back to League Introduction",

      league: {
        label: "LEAGUE"
      },

      information: {
        eyebrow: "INFORMATION",
        title: "League Information",
        matchTime: "Match Time",
        region: "Region",
        teams: "Participating Teams",
        owner: "Owner"
      },

      teams: {
        eyebrow: "PARTICIPATING TEAMS",
        title: "Participating Teams",
        count: "teams",
        empty:
          "No participating team information is available."
      },

      discord: {
        eyebrow: "DISCORD",
        title: "Official Discord Server",
        description:
          "League operations, communication, and community activities are conducted through the Discord server.",
        code: "Server Code",
        button: "Go to Discord Server"
      },

      error: {
        title: "League Not Found",
        description:
          "The specified league does not exist."
      },

      footer: {
        rights: "All Rights Reserved."
      }

    }

  };


  const supportedLanguages = [
    "ja",
    "ko",
    "zh",
    "en"
  ];


  if (
    !supportedLanguages.includes(
      currentLanguage
    )
  ) {
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
        value.ko ??
        value.zh ??
        Object.values(value)[0] ??
        ""
      );

    }

    return value ?? "";

  }


    /* =======================================================
     MATCH SCHEDULE
     ======================================================= */

  
  const weekdayTranslations = {
    ja: {
      Monday: "月曜日",
      Tuesday: "火曜日",
      Wednesday: "水曜日",
      Thursday: "木曜日",
      Friday: "金曜日",
      Saturday: "土曜日",
      Sunday: "日曜日"
    },
    ko: {
      Monday: "월요일",
      Tuesday: "화요일",
      Wednesday: "수요일",
      Thursday: "목요일",
      Friday: "금요일",
      Saturday: "토요일",
      Sunday: "일요일"
    },
    zh: {
      Monday: "星期一",
      Tuesday: "星期二",
      Wednesday: "星期三",
      Thursday: "星期四",
      Friday: "星期五",
      Saturday: "星期六",
      Sunday: "星期日"
    },
    en: {
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sunday: "Sunday"
    }
  };

  const languageTimeZones = {
    ja: {
      zone: "Asia/Tokyo",
      locale: "ja-JP"
    },
    ko: {
      zone: "Asia/Seoul",
      locale: "ko-KR"
    },
    en: {
      zone: "America/New_York",
      locale: "en-US"
    },
    zh: {
      zone: "Asia/Taipei",
      locale: "zh-TW"
    }
  };

  // 指定タイムゾーンでの日時の各要素を取得
  function getZonedParts(date, timeZone) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).formatToParts(date);

    const result = {};

    parts.forEach(part => {
      if (part.type !== "literal") {
        result[part.type] = Number(part.value);
      }
    });

    return result;
  }

  // 元のタイムゾーンの現地日時をUTCの日時に変換
  function localTimeToUTC(year, month, day, hour, minute, timeZone) {
    const target = Date.UTC(
      year, month - 1, day, hour, minute
    );

    let result = target;

    for (let i = 0; i < 3; i++) {
      const parts = getZonedParts(
        new Date(result),
        timeZone
      );

      const represented = Date.UTC(
        parts.year,
        parts.month - 1,
        parts.day,
        parts.hour,
        parts.minute
      );

      result += target - represented;
    }

    return new Date(result);
  }

  function renderMatchSchedule(league) {
    const container = $("#leagueMatchSchedule");

    if (!container) {
      return;
    }

    const schedule = Array.isArray(league.matchSchedule)
      ? league.matchSchedule
      : [];

    const validSchedule = schedule.filter(item =>
      item &&
      weekdayTranslations.en[item.day] &&
      /^\d{2}:\d{2}$/.test(item.time || "")
    );

    if (!validSchedule.length) {
      container.innerHTML = `
        <div class="match-schedule-empty">--</div>
      `;
      return;
    }

    const languageSettings =
      languageTimeZones[currentLanguage] ||
      languageTimeZones.ja;

    const sourceTimeZone =
      league.timezone || "Asia/Tokyo";

    const targetTimeZone =
      languageSettings.zone;

    // 月曜日を基準にした1週間を作成
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    const baseMonday = new Date(Date.UTC(2024, 0, 1));

    const days = weekdayTranslations[currentLanguage]
      || weekdayTranslations.ja;

    const scheduleHTML = validSchedule.map(item => {
      const dayIndex = weekdays.indexOf(item.day);
      const [hour, minute] = item.time.split(":").map(Number);

      const sourceDate = new Date(baseMonday);
      sourceDate.setUTCDate(
        sourceDate.getUTCDate() + dayIndex
      );

      const utcDate = localTimeToUTC(
        sourceDate.getUTCFullYear(),
        sourceDate.getUTCMonth() + 1,
        sourceDate.getUTCDate(),
        hour,
        minute,
        sourceTimeZone
      );

      const targetParts = getZonedParts(
        utcDate,
        targetTimeZone
      );

      const targetDate = new Date(Date.UTC(
        targetParts.year,
        targetParts.month - 1,
        targetParts.day
      ));

      const targetDayIndex =
        (targetDate.getUTCDay() + 6) % 7;

      const targetDay = weekdays[targetDayIndex];

      const targetTime =
        new Intl.DateTimeFormat(
          languageSettings.locale,
          {
            timeZone: targetTimeZone,
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23"
          }
        ).format(utcDate);

      return `
        <div class="match-schedule-item">
          <span class="match-schedule-day">
            ${escapeHTML(days[targetDay])}
          </span>

          <span class="match-schedule-time">
            ${escapeHTML(targetTime)}
          </span>
        </div>
      `;
    }).join("");

    const timezone = `
      <div class="match-schedule-timezone">
        ${escapeHTML(targetTimeZone)}
      </div>
    `;

    container.innerHTML =
      scheduleHTML + timezone;
  }


   
  /* =======================================================
     STATIC TRANSLATIONS
     ======================================================= */

  function updateStaticTranslations() {

    document
      .querySelectorAll(
        "[data-league-i18n]"
      )
      .forEach(element => {

        const key =
          element.dataset.leagueI18n;

        const parts =
          key.split(".");

        let value =
          leagueTranslations[
            currentLanguage
          ];

        for (
          const part of parts
        ) {

          if (
            value &&
            typeof value === "object"
          ) {

            value =
              value[part];

          } else {

            value = null;
            break;

          }

        }

        if (value != null) {

          element.textContent =
            value;

        }

      });

  }


  /* =======================================================
     GET LEAGUE
     ======================================================= */

  function getLeagueId() {

    const params =
      new URLSearchParams(
        window.location.search
      );

    return params.get("id");

  }


  function getLeague() {

    if (
      typeof ALLIANCE_DATA ===
        "undefined" ||
      !Array.isArray(
        ALLIANCE_DATA.leagues
      )
    ) {

      return null;

    }


    const id =
      getLeagueId();


    return ALLIANCE_DATA.leagues.find(
      league =>
        String(league.id) ===
        String(id)
    ) || null;

  }


  /* =======================================================
     RENDER LEAGUE
     ======================================================= */

  function renderLeague() {

    updateStaticTranslations();


    const league =
      getLeague();


    const notFound =
      $("#leagueNotFound");


    if (!league) {

      if (notFound) {
        notFound.hidden = false;
      }

      return;

    }


    if (notFound) {
      notFound.hidden = true;
    }


    /* -----------------------------------------------
       BASIC
       ----------------------------------------------- */

    const name =
      localized(league.name);

    const country =
      localized(league.country);

    const region =
      localized(
        league.region ||
        league.country
      );

    const description =
      localized(
        league.description
      );


    $("#leagueName").textContent =
      name || "--";

    $("#leagueCountry").textContent =
      country || "--";

    $("#leagueDescription").textContent =
      description || "--";


    document.title =
      `${name} | Asia HCBB Baseball Alliance`;


    /* -----------------------------------------------
       MATCH TIME
       ----------------------------------------------- */

    renderMatchSchedule(league);


    /* -----------------------------------------------
       REGION
       ----------------------------------------------- */

    $("#leagueRegion").textContent =
      region || "--";


    /* -----------------------------------------------
       OWNER
       ----------------------------------------------- */

    $("#leagueOwner").textContent =
      localized(
        league.owner
      ) || "--";


    /* -----------------------------------------------
       TEAMS
       ----------------------------------------------- */

    const teams =
      Array.isArray(league.teams)
        ? league.teams
        : [];


    const teamCountLabel =
      leagueTranslations[
        currentLanguage
      ].teams.count;


    if (
      currentLanguage === "en"
    ) {

      $("#leagueTeamCount").textContent =
        `${teams.length} ${teamCountLabel}`;

    } else {

      $("#leagueTeamCount").textContent =
        `${teams.length}${teamCountLabel}`;

    }


    const teamsList =
      $("#teamsList");


    teamsList.innerHTML = "";


    if (
      teams.length === 0
    ) {

      teamsList.innerHTML = `
        <div class="empty-result">
          ${escapeHTML(
            leagueTranslations[
              currentLanguage
            ].teams.empty
          )}
        </div>
      `;

    } else {

      teams.forEach(
        (team, index) => {

          const teamName =
            localized(
              team.name
            );

          const teamCountry =
            localized(
              team.country
            );


          teamsList.insertAdjacentHTML(
            "beforeend",
            `
              <div class="team-card">

                <div class="team-number">
                  ${String(
                    index + 1
                  ).padStart(2, "0")}
                </div>

                <div class="team-main">

                  <div class="team-name">
                    ${escapeHTML(
                      teamName
                    )}
                  </div>

                  <div class="team-country">
                    ${escapeHTML(
                      teamCountry
                    )}
                  </div>

                </div>

              </div>
            `
          );

        }
      );

    }


    /* -----------------------------------------------
       DISCORD
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

    } else if (
      discordLink
    ) {

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

      window.dispatchEvent(
        new Event("ahba-language-change")
      );

      if (window.refreshAHBAHeader) {
        window.refreshAHBAHeader();
      }

      updateStaticTranslations();

      renderLeague();


      document
        .querySelectorAll(
          "[data-lang]"
        )
        .forEach(
          button => {

            button.classList.toggle(
              "active",
              button.dataset.lang ===
              currentLanguage
            );

          }
        );

    }
  );


  /* =======================================================
     START
     ======================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      updateStaticTranslations();

      renderLeague();

      document
        .querySelectorAll(
          "[data-lang]"
        )
        .forEach(
          button => {

            button.classList.toggle(
              "active",
              button.dataset.lang ===
              currentLanguage
            );

          }
        );

    }
  );

})();
