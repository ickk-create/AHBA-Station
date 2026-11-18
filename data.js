/* =========================================================
   Asia HCBB Baseball Alliance
   data.js
   ========================================================= */

const ALLIANCE_DATA = {

  /* =========================================================
     AHBA NOTICES
     ========================================================= */

  notices: [

    {
      id: "notice-001",

      date: "2026-09-23",

      category: {
        ja: "NEWS",
        ko: "NEWS",
        en: "NEWS",
        zh: "NEWS"
      },

      title: {
        ja: "AHBA Stationを更新しました",
        ko: "AHBA Station을 업데이트했습니다",
        en: "AHBA Station has been updated",
        zh: "AHBA Station 已更新"
      },

      body: {
        ja: "試合情報・日程・リーグ紹介などのページを更新しました。",
        ko: "경기 정보·일정·리그 소개 등의 페이지를 업데이트했습니다.",
        en: "Game information, schedules, and league information have been updated.",
        zh: "比賽信息、日程和聯賽介紹等頁面已更新。"
      }

    },


    {
      id: "notice-002",

      date: "2026-09-20",

      category: {
        ja: "INFO",
        ko: "INFO",
        en: "INFO",
        zh: "INFO"
      },

      title: {
        ja: "国際親善試合の試合情報を掲載しました",
        ko: "국제 친선 경기 정보를 게시했습니다",
        en: "International Friendly game information is now available",
        zh: "國際友誼賽比賽信息已發佈"
      },

      body: {
        ja: "AHBAで開催された国際親善試合の結果を掲載しています。",
        ko: "AHBA에서 개최된 국제 친선 경기 결과를 확인할 수 있습니다.",
        en: "Results from the AHBA International Friendly are now available.",
        zh: "現在可以查看AHBA國際友誼賽的比賽結果。"
      }

    },


    {
      id: "notice-003",

      date: "2026-09-28",

      category: {
        ja: "UPDATE",
        ko: "UPDATE",
        en: "UPDATE",
        zh: "UPDATE"
      },

      title: {
        ja: "リーグ情報を更新しました",
        ko: "리그 정보를 업데이트했습니다",
        en: "League information has been updated",
        zh: "聯賽信息已更新"
      },

      body: {
        ja: "リーグ情報を更新しました。",
        ko: "리그 정보를 업데이트했습니다.",
        en: "League information has been updated.",
        zh: "聯賽信息已更新。"
      }

    }

  ],

  /* =========================================================
     LEAGUES
     ========================================================= */

  leagues: [

  /* =====================================================
     A LEAGUE
     ===================================================== */

  {
    id: "KBO",

    name: {
      ja: "HCBB KBO League",
      ko: "HCBB KBO League",
      en: "HCBB KBO League",
      zh: "HCBB KBO League"
    },

    country: {
      ja: "韓国",
      ko: "한국",
      en: "Korea",
      zh: "韓國"
    },

    /* 地域 */
    region: {
      ja: "韓国",
      ko: "한국",
      en: "Korea",
      zh: "韓國"
    },

    /* 試合時間 */
    matchSchedule: [

      {
        day: "Tuesday",
        time: "21:30"
      },

      {
        day: "Wednesday",
        time: "21:30"
      },

      {
        day: "Saturday",
        time: "21:30"
      },

      {
        day: "Sunday",
        time: "21:30"
      }

    ],

    /* タイムゾーン */
    timezone: "Asia/Seoul",

    description: {
      ja: "KBOリーグは、韓国最大かつ最高峰のリーグです。",
      ko: "KBO 리그는 한국에서 가장 규모가 크고 권위 있는 리그입니다.",
      en: "The KBO League is Korea’s largest and premier league.",
      zh: "KBO聯盟是韓國規模最大、最頂尖的聯盟。"
    },

    owner: "nicemanman_1",

    /* ===================================================
       参加チーム
       ここにチームを追加・削除する
       =================================================== */

    teams: [

      {
        id: "Coming soon...",
        name: "Coming soon...",
      },

      {
        id: "Coming soon...",
        name: "Coming soon...",
      },

      {
        id: "Coming soon...",
        name: "Coming soon...",
      },

      {
        id: "Coming soon...",
        name: "Coming soon...",
      },
       
      {
        id: "Coming soon...",
        name: "Coming soon...",
      },

      {
        id: "Coming soon...",
        name: "Coming soon...",
      }

    ],

    /* ===================================================
       Discord
       =================================================== */

    discord: {

      url: "https://discord.gg/3kdYSu6grn",

      code: "383E4C"

    }

  },


  /* =====================================================
     B LEAGUE
     ===================================================== */

  {
    id: "KFB",

    name: {
      ja: "HCBB KFB League",
      ko: "HCBB KFB League",
      en: "HCBB KFB League",
      zh: "HCBB KFB League"
    },

    country: {
      ja: "韓国",
      ko: "한국",
      en: "Korea",
      zh: "韓國"
    },

    region: {
      ja: "韓国",
      ko: "한국",
      en: "Korea",
      zh: "韓國"
    },

    matchSchedule: [

      {
        day: "Monday",
        time: "21:30"
      },

      {
        day: "Thursday",
        time: "21:30"
      },

      {
        day: "Saturday",
        time: "19:30"
      },

      {
        day: "Sunday",
        time: "19:30"
      }

    ],

    timezone: "Asia/Seoul",

    description: {
      ja: "KFBリーグは、より大規模なリーグでは出場機会があまり得られない新人選手を育成し、活躍の場を提供するために設立された新人リーグです。",
      ko: "KFB 리그는 대형 리그에서 출전 기회를 많이 얻지 못하는 신인 선수들을 육성하고 그들에게 기회를 제공하기 위해 창설된 신인 리그입니다.",
      en: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues.",
      zh: "KFB 聯賽是一項新秀聯賽，旨在培育那些在大型聯賽中難以獲得上場機會的新秀球員，並為他們提供發展機會。"
    },

    owner: "nicemanman_1",

    teams: [

      {
        id: "Orix Buffaloes",
        name: "Orix Buffaloes",
      },

      {
        id: "Lotte Giants",
        name: "Lotte Giants",
      },

      {
        id: "Nipponham Fighters",
        name: "Nipponham Fighters",
      },

      {
        id: "Hanwha Eagles",
        name: "Hanwha Eagles",
      }

    ],

    discord: {

      url: "https://discord.gg/Z54vWhm8yv",

      code: "0F47E0"

    }

  },


  /* =====================================================
     KNL LEAGUE
     ===================================================== */

  {
    id: "KNL",

    name: {
      ja: "KNL",
      ko: "KNL",
      en: "KNL",
      zh: "KNL"
    },

    country: {
      ja: "韓国",
      ko: "한국",
      en: "Korea",
      zh: "韓國"
    },

    region: {
      ja: "韓国",
      ko: "한국",
      en: "Korea",
      zh: "韓國"
    },

    matchSchedule: [

      {
        day: "Wednesday",
        time: "20:00"
      },

      {
        day: "Friday",
        time: "20:00"
      },

      {
        day: "Saturday",
        time: "17:00"
      },

      {
        day: "Sunday",
        time: "17:00"
      }

    ],

    timezone: "Asia/Seoul",

    description: {
      ja: "",
      ko: "",
      en: "",
      zh: ""
    },

    owner: "gorsky7",

    teams: [

      {
        id: "NC Dinos",
        name: "NC Dinos",
      },

      {
        id: "Perth",
        name: "Perth",
      }

    ],

    discord: {

      url: "https://discord.gg/",

      code: "67C81A"

    }

  },


  /* =====================================================
     KNL LEAGUE
     ===================================================== */

  {
    id: "JCL",

    name: {
      ja: "Japan Champions League",
      ko: "Japan Champions League",
      en: "Japan Champions League",
      zh: "Japan Champions League"
    },

    country: {
      ja: "日本",
      ko: "일본",
      en: "Japan",
      zh: "日本"
    },

    region: {
      ja: "日本",
      ko: "일본",
      en: "Japan",
      zh: "日本"
    },

    matchSchedule: [

      {
        day: "Monday",
        time: "18:00"
      },

      {
        day: "Wednesday",
        time: "18:00"
      },

      {
        day: "Friday",
        time: "18:00"
      },
       
      {
        day: "Saturday",
        time: "13:00"
      },

      {
        day: "Sunday",
        time: "13:00"
      }

    ],

    timezone: "Asia/Tokyo",

    description: {
      ja: "共産破壊ことAiuwo0611が1人で作ったリーグです。運営やルール面など至らないところもありますが、日本人はもちろん、海外の人にも楽しんでいただけるリーグにしたいです！",
      ko: "공산파괴라는 닉네임의 Aiuwo0611이 혼자 만든 리그입니다. 운영이나 규칙 면에서 미흡한 점도 있겠지만, 일본인은 물론 해외 분들도 즐기실 수 있는 리그로 만들고 싶습니다!",
      en: "This is a league created single-handedly by Aiuwo0611, also known as “Communist Destroyer.” While there may be some shortcomings in terms of management and rules, I want to make this a league that everyone—not just Japanese players, but people from overseas as well—can enjoy!",
      zh: "這是由「共產破壞」Aiuwo0611獨力創辦的聯賽。雖然在營運和規則等方面尚有不足之處，但希望能打造一個不僅讓日本人，連海外玩家也能樂在其中的聯賽！"
    },

    owner: "potatotips.a.k.k.oimo",

    teams: [

      {
        id: "DeNA Baystars",
        name: "DeNA Baystars",
      },

      {
        id: "Hanshin Tigers",
        name: "Hanshin Tigers",
      },

　　　　{
        id: "Orix Buffaloes",
        name: "Orix Buffaloes",
      },
      
      {
        id: "Nipponham Fighters",
        name: "Nipponham Fighters",
      }

    ],

    discord: {

      url: "https://discord.gg/3mGz6sjXc",

      code: "7E2C68"

    }

  }

],
     


/* =========================================================
   AHBA OFFICIAL EVENTS / TOURNAMENTS
   ========================================================= */

  events: [

    {
      id: "international-friendly-2026",

      name: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "國際友誼賽"
      },

      type: "international"
    },


    {
      id: "ahba-exchange-2026",

      name: {
        ja: "AHBA交流戦",
        ko: "AHBA 교류전",
        en: "AHBA Exchange",
        zh: "AHBA交流賽"
      },

      type: "friendly"
    },


    {
      id: "Season",

      name: {
        ja: "Season",
        ko: "Season",
        en: "Season",
        zh: "Season"
      },

      type: "Season"
    },


    {
      id: "ahba-international-cup",

      name: {
        ja: "AHBA INTERNATIONAL CUP",
        ko: "AHBA INTERNATIONAL CUP",
        en: "AHBA INTERNATIONAL CUP",
        zh: "AHBA INTERNATIONAL CUP"
      },

      type: "tournament"
    }

  ],

   
  /* =========================================================
     OFFICIAL AHBA GAMES
     ========================================================= */

  games: [

    {
　　   id: "game-001",

      eventId: "international-friendly-2026",

      type: "international",

      title: {
        ja: "AHBA vs BTBL",
        ko: "AHBA vs BTBL",
        en: "AHBA vs BTBL",
        zh: "AHBA vs BTBL"
      },

      time: "2026-03-09T21:00:00+09:00",

      home: "AHBA",
      away: "BTBL",

      homeScore: null,
      awayScore: null,

      status: "upcoming",

      round: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "國際友誼賽"
      },

      detail: {

        innings: {
          home: [],
          away: []
        },

        pitching: {
          win: null,
          loss: null,
          save: null,

          holds: [
          ]
        },

        homeRuns: [
        ],

        lineups: {

          home: {
            dh: true,

            starters: [
              { player: "NARUSE", position: "2B" },
              { player: "HATTORI", position: "SS" },
              { player: "HIRYU", position: "LF" },
              { player: "OHKA", position: "CF" },
              { player: "KAKUMA", position: "RF" },
              { player: "GODA", position: "C" },
              { player: "NAGUMO", position: "DH" },
              { player: "ITAYA", position: "1B" },
              { player: "MURASE", position: "3B" },
              { player: "KATSUKI", position: "P" }
            ],

            bench: [
              { player: "KAMIYA" },
              { player: "TAKAMIYA" },
              { player: "JINGUJI" },
              { player: "K.HATTORI" },
              { player: "NISHIMAKI" },
              { player: "SHIMABARA" },
              { player: "HINASE" },
              { player: "RAMOS" },
              { player: "OHTSUKI" },
              { player: "INADA" },
              { player: "TSUNODA" },
              { player: "TABEI" },
              { player: "KOSEMURA" },
              { player: "ISHIMORI" },
              { player: "MARINO" },
              { player: "KIRYU" },
              { player: "AMADA" },
            ]
          },

          away: {
            dh: false,

            starters: [
              { player: "Player F", position: "CF" },
              { player: "Player G", position: "SS" }
            ],

            bench: []
          }

        },

        notes: {
          ja: "AHBA公式掲載の国際親善試合。",
          ko: "AHBA 공식 국제 친선 경기.",
          en: "An AHBA officially published international friendly.",
          zh: "AHBA官方發佈的國際友誼賽。"
        }

      }

    }

  ],


  /* =========================================================
     AHBA OFFICIAL STANDINGS
     ========================================================= */

  standings: {

    "-": [

      {
        team: {
          ja: "-",
          ko: "-",
          en: "-",
          zh: "-"
        },

        played: null,
        wins: null,
        losses: null,
        draws: null,
        runsFor: null,
        runsAgainst: null,
        points: null
      },

      {
        team: {
          ja: "-",
          ko: "-",
          en: "-",
          zh: "-"
        },

        played: null,
        wins: null,
        losses: null,
        draws: null,
        runsFor: null,
        runsAgainst: null,
        points: null
      },

      {
        team: {
          ja: "-",
          ko: "-",
          en: "-",
          zh: "-"
        },

        played: null,
        wins: null,
        losses: null,
        draws: null,
        runsFor: null,
        runsAgainst: null,
        points: null
      },

      {
        team: {
          ja: "-",
          ko: "-",
          en: "-",
          zh: "-"
        },

        played: null,
        wins: null,
        losses: null,
        draws: null,
        runsFor: null,
        runsAgainst: null,
        points: null
      }

    ]

  }

};
