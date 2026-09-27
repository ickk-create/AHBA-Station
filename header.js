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
      timeZone: "Asia/Tokyo",
      label: "JST",
      locale: "en-US"
    }

  };


  /* ==================================================
     CURRENT LANGUAGE
  ================================================== */

  function getCurrentLanguage() {

    return (
      localStorage.getItem(
        "asiaHCBBLanguage"
      ) || "ja"
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
      languageSettings[language]
      || languageSettings.ja;


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
     LANGUAGE CHANGE EVENT
  ================================================== */

  function refreshHeader() {

    updateClock();
    updateLanguageButton();

  }


  /* ==================================================
     INITIALIZE
  ================================================== */

  function init() {

    refreshHeader();


    /*
      時計は1秒ごとに更新。

      さらに毎秒 localStorage の言語を確認するため、
      各ページの言語切替処理と同期できます。
    */

    setInterval(
      refreshHeader,
      1000
    );


    /*
      同じページ内でカスタムイベントが発生した場合も
      即座にヘッダーを更新。
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
