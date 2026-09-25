/* ==================================================
   AHBA COMMON HEADER
================================================== */

(function () {

  "use strict";


  function updateClock() {

    const clock =
      document.getElementById("clock");

    const tz =
      document.getElementById("tz");


    if (!clock) {
      return;
    }


    const now =
      new Date();


    clock.textContent =
      now.toLocaleTimeString(
        "ja-JP",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }
      );


    if (tz) {
      tz.textContent = "JST";
    }

  }


  function updateLanguageButton() {

    const currentLanguage =
      localStorage.getItem(
        "asiaHCBBLanguage"
      ) || "ja";


    document
      .querySelectorAll("[data-lang]")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.lang === currentLanguage
        );

      });

  }


  function init() {

    updateClock();

    setInterval(
      updateClock,
      1000
    );

    updateLanguageButton();

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
