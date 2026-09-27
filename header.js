/* ==================================================
   AHBA COMMON HEADER
================================================== */

(function () {

  "use strict";


  /* ==================================================
     LANGUAGE → TIMEZONE
  ================================================== */

  const languageSettings = {

    ja: {
      timeZone: "Asia/Tokyo",
      label: "JST",
      locale: "ja-JP"
    },

    ko: {
      timeZone: "Asia/Seoul",
      label: "KST",
      locale: "ko-KR"
    },

    zh: {
      timeZone: "Asia/Taipei",
      label: "TST",
      locale: "zh-TW"
    },

    en: {
      /*
       * English is the global language.
       * Keep the AHBA reference time as Japan time.
       */
      timeZone: "EST",
      label: "EST",
      locale: "en-US"
    }

  };


  /* ==================================================
     CURRENT LANGUAGE
  ================================================== */

  function getCurrentLanguage() {

    const saved =
      localStorage.getItem(
        "asiaHCBBLanguage"
      );

    return (
      languageSettings[saved]
        ? saved
        : "ja"
    );

  }


  /* ==================================================
     CLOCK
  ================================================== */

  function updateClock() {

    const clock =
      document.getElementById("clock");

    const tz =
      document.getElementById("tz");


    if (!clock) {
      return;
    }


    const language =
      getCurrentLanguage();

    const settings =
      languageSettings[language];


    const now =
      new Date();


    clock.textContent =
      new Intl.DateTimeFormat(
        settings.locale,
        {
          timeZone:
            settings.timeZone,

          hour:
            "2-digit",

          minute:
            "2-digit",

          second:
            "2-digit",

          hour12:
            false
        }
      ).format(now);


    if (tz) {

      tz.textContent =
        settings.label;

    }

  }


  /* ==================================================
     LANGUAGE BUTTON
  ================================================== */

  function updateLanguageButton() {

    const currentLanguage =
      getCurrentLanguage();


    document
      .querySelectorAll("[data-lang]")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.lang ===
            currentLanguage
        );

      });

  }


  /* ==================================================
     REFRESH HEADER
  ================================================== */

  function refreshHeader() {

    updateClock();
    updateLanguageButton();

  }


  /*
   * 他のJSからも明示的に更新できるようにする
   */
  window.refreshAHBAHeader =
    refreshHeader;


  /* ==================================================
     INITIALIZE
  ================================================== */

  function init() {

    refreshHeader();


    /*
     * 時計を毎秒更新
     */
    setInterval(
      refreshHeader,
      1000
    );


    /*
     * 言語変更イベント
     */
    window.addEventListener(
      "ahba-language-change",
      refreshHeader
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
