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
        zh: "比赛信息、日程和联赛介绍等页面已更新。"
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
        zh: "国际友谊赛比赛信息已发布"
      },

      body: {
        ja: "AHBAで開催された国際親善試合の結果を掲載しています。",
        ko: "AHBA에서 개최된 국제 친선 경기 결과를 확인할 수 있습니다.",
        en: "Results from the AHBA International Friendly are now available.",
        zh: "现在可以查看AHBA国际友谊赛的比赛结果。"
      }

    },


    {
      id: "notice-003",

      date: "2026-09-15",

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
        zh: "联赛信息已更新"
      },

      body: {
        ja: "KBO LEAGUE・KFB LEAGUEなどのリーグ情報を更新しました。",
        ko: "KBO LEAGUE·KFB LEAGUE 등의 리그 정보를 업데이트했습니다.",
        en: "League information for KBO LEAGUE, KFB LEAGUE, and others has been updated.",
        zh: "KBO LEAGUE、KFB LEAGUE 等联赛信息已更新。"
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
    matchTime: {
      ja: "毎週火曜日、水曜日、土曜日、日曜日 21:30",
      ko: "매주 화요일, 수요일, 토요일, 일요일 9:30 PM",
      en: "Every Tuesday,Wednesday,Saturday,Sunday 9:30 PM KST",
      zh: "每週二、週三、週六、週日 8:30 PM"
    },

    /* タイムゾーン */
    timezone: "Asia/Seoul",

    description: {
      ja: "The KBO League is Korea’s largest and premier league.",
      ko: "The KBO League is Korea’s largest and premier league.",
      en: "The KBO League is Korea’s largest and premier league.",
      zh: "The KBO League is Korea’s largest and premier league."
    },

    owner: "nicemanman_1",

    /* ===================================================
       参加チーム
       ここにチームを追加・削除する
       =================================================== */

    teams: [

      {
        id: "NC",
        name: "NC",
      },

      {
        id: "Nipponham",
        name: "Nipponham",
      },

      {
        id: "Doosan",
        name: "Doosan",
      },

      {
        id: "Yakult",
        name: "Yakult",
      },
       
      {
        id: "Chunichi",
        name: "Chunichi",
      },

      {
        id: "Chiba",
        name: "Chiba",
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

    matchTime: {
      ja: "毎週月曜日、木曜日 21:30、毎週土曜日、日曜日 19:30",
      ko: "매주 월요일,목요일 9:30 PM、매주 토요일,일요일 7:30 PM",
      en: "Every Monday,Thursday 9:30 PM KST, Every Saturday,Sunday 7:30 PM KST",
      zh: "每週一、週四 8:30 PM、每週六、日 6:30 PM"
    },

    timezone: "Asia/Seoul",

    description: {
      ja: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues.",
      ko: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues.",
      en: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues.",
      zh: "The KFB League is a rookie league created to develop and give opportunities to rookie players who don’t get many chances to play in larger leagues."
    },

    owner: "nicemanman_1",

    teams: [

      {
        id: "SoftBank",
        name: "SoftBank",
      },

      {
        id: "KT",
        name: "KT",
      },

      {
        id: "Samsung",
        name: "Samsung",
      },

      {
        id: "Hanwha",
        name: "Hanwha",
      }

    ],

    discord: {

      url: "https://discord.gg/Z54vWhm8yv",

      code: "0F47E0"

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
        zh: "国际友谊赛"
      },

      type: "international"
    },


    {
      id: "ahba-exchange-2026",

      name: {
        ja: "AHBA交流戦",
        ko: "AHBA 교류전",
        en: "AHBA Exchange",
        zh: "AHBA交流赛"
      },

      type: "friendly"
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

      time: "2026-09-??T??:00:00+09:00",

      home: "AHBA",
      away: "BTBL",

      homeScore: null,
      awayScore: null,

      status: "upcoming",

      round: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "国际友谊赛"
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

        notes: {
          ja: "AHBA公式掲載の国際親善試合。",
          ko: "AHBA 공식 국제 친선 경기.",
          en: "An AHBA officially published international friendly.",
          zh: "AHBA官方发布的国际友谊赛。"
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
