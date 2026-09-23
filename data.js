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
        ja: "A LEAGUE・B LEAGUEなどのリーグ情報を更新しました。",
        ko: "A LEAGUE·B LEAGUE 등의 리그 정보를 업데이트했습니다.",
        en: "League information for A LEAGUE, B LEAGUE, and others has been updated.",
        zh: "A LEAGUE、B LEAGUE 等联赛信息已更新。"
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
      ja: "KBO",
      ko: "KBO",
      en: "KBO",
      zh: "KBO"
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
      en: "Every Thursday,Wednesday,Saturday,Sunday 9:30 PM KST",
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
        id: "A1",
        name: "A1",
        }
      },

      {
        id: "A2",
        name: "A2",
        }
      },

      {
        id: "A3",
        name: "A3",
        }
      },

      {
        id: "A4",
        name: "A4",
        }
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
    id: "B",

    name: {
      ja: "B LEAGUE",
      ko: "B LEAGUE",
      en: "B LEAGUE",
      zh: "B LEAGUE"
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

    matchTime: {
      ja: "毎週日曜日 20:00",
      ko: "매주 일요일 20:00",
      en: "Every Sunday 20:00",
      zh: "每周日 20:00"
    },

    timezone: "Asia/Tokyo",

    description: {
      ja: "次世代のHCBBチームが参加するリーグ。",
      ko: "차세대 HCBB 팀들이 참가하는 리그.",
      en: "A league featuring next-generation HCBB teams.",
      zh: "由新一代HCBB球队参加的联赛。"
    },

    owner: "AHBA",

    teams: [

      {
        id: "B1",
        name: "B1",
        country: {
          ja: "日本",
          ko: "일본",
          en: "Japan",
          zh: "日本"
        }
      },

      {
        id: "B2",
        name: "B2",
        country: {
          ja: "日本",
          ko: "일본",
          en: "Japan",
          zh: "日本"
        }
      },

      {
        id: "B3",
        name: "B3",
        country: {
          ja: "日本",
          ko: "일본",
          en: "Japan",
          zh: "日本"
        }
      },

      {
        id: "B4",
        name: "B4",
        country: {
          ja: "日本",
          ko: "일본",
          en: "Japan",
          zh: "日本"
        }
      }

    ],

    discord: {

      url: "https://discord.gg/REPLACE_B_LEAGUE",

      code: "B-LEAGUE"

    }

  },


  /* =====================================================
     KOREA LEAGUE
     ===================================================== */

  {
    id: "KOREA",

    name: {
      ja: "KOREA LEAGUE",
      ko: "KOREA LEAGUE",
      en: "KOREA LEAGUE",
      zh: "KOREA LEAGUE"
    },

    country: {
      ja: "韓国",
      ko: "대한민국",
      en: "South Korea",
      zh: "韩国"
    },

    region: {
      ja: "韓国",
      ko: "대한민국",
      en: "South Korea",
      zh: "韩国"
    },

    matchTime: {
      ja: "毎週土曜日 21:00",
      ko: "매주 토요일 21:00",
      en: "Every Saturday 21:00",
      zh: "每周六 21:00"
    },

    timezone: "Asia/Seoul",

    description: {
      ja: "韓国を中心としたHCBBリーグ。",
      ko: "대한민국을 중심으로 운영되는 HCBB 리그.",
      en: "An HCBB league based primarily in South Korea.",
      zh: "以韩国为中心运营的HCBB联赛。"
    },

    owner: "AHBA",

    teams: [

      {
        id: "K1",
        name: "K1",
        country: {
          ja: "韓国",
          ko: "대한민국",
          en: "South Korea",
          zh: "韩国"
        }
      },

      {
        id: "K2",
        name: "K2",
        country: {
          ja: "韓国",
          ko: "대한민국",
          en: "South Korea",
          zh: "韩国"
        }
      },

      {
        id: "K3",
        name: "K3",
        country: {
          ja: "韓国",
          ko: "대한민국",
          en: "South Korea",
          zh: "韩国"
        }
      },

      {
        id: "K4",
        name: "K4",
        country: {
          ja: "韓国",
          ko: "대한민국",
          en: "South Korea",
          zh: "韩国"
        }
      }

    ],

    discord: {

      url: "https://discord.gg/REPLACE_KOREA_LEAGUE",

      code: "KOREA-LEAGUE"

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
        ja: "日本代表 vs 韓国代表",
        ko: "일본 대표 vs 대한민국 대표",
        en: "Japan vs South Korea",
        zh: "日本队 vs 韩国队"
      },

      time: "2026-09-10T19:00:00+09:00",

      home: "Japan",
      away: "Korea",

      homeScore: 5,
      awayScore: 3,

      status: "finished",

      round: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "国际友谊赛"
      },

      detail: {

        innings: {
          home: [0, 1, 0, 2, 0, 0, 1, 0, 1],
          away: [0, 0, 1, 0, 0, 2, 0, 0, 0]
        },

        pitching: {
          win: "山田 太郎",
          loss: "Kim Min-su",
          save: "佐藤 一郎",

          holds: [
            "佐々木 翔",
            "高橋 健"
          ]
        },

        homeRuns: [

          {
            team: "home",
            player: "山田 太郎",
            inning: 4,
            runs: 2
          },

          {
            team: "home",
            player: "佐藤 一郎",
            inning: 7,
            runs: 1
          },

          {
            team: "away",
            player: "Lee Junho",
            inning: 6,
            runs: 2
          }

        ],

        notes: {
          ja: "AHBA公式掲載の国際親善試合。",
          ko: "AHBA 공식 국제 친선 경기.",
          en: "An AHBA officially published international friendly.",
          zh: "AHBA官方发布的国际友谊赛。"
        }

      }

    },


    {
      id: "game-002",

      eventId: "ahba-exchange-2026",

      type: "friendly",

      title: {
        ja: "A LEAGUE選抜 vs KOREA LEAGUE選抜",
        ko: "A LEAGUE 선발 vs KOREA LEAGUE 선발",
        en: "A LEAGUE Select vs KOREA LEAGUE Select",
        zh: "A LEAGUE 精选队 vs KOREA LEAGUE 精选队"
      },

      time: "2026-09-12T20:00:00+09:00",

      home: "A LEAGUE Select",
      away: "KOREA LEAGUE Select",

      homeScore: 4,
      awayScore: 2,

      status: "finished",

      round: {
        ja: "AHBA交流戦",
        ko: "AHBA 교류전",
        en: "AHBA Exchange Game",
        zh: "AHBA交流赛"
      },

      detail: {

        innings: {
          home: [1, 0, 0, 2, 0, 0, 0, 1, 0],
          away: [0, 0, 1, 0, 0, 0, 1, 0, 0]
        },

        pitching: {
          win: "田中 翔",
          loss: "Park Jisoo",
          save: "中村 蓮",

          holds: [
            "山本 陸"
          ]
        },

        homeRuns: [

          {
            team: "home",
            player: "田中 翔",
            inning: 4,
            runs: 2
          },

          {
            team: "away",
            player: "Kim Joon",
            inning: 7,
            runs: 1
          }

        ],

        notes: {
          ja: "A LEAGUEとKOREA LEAGUEによる交流試合。",
          ko: "A LEAGUE와 KOREA LEAGUE의 교류 경기.",
          en: "An exchange game between A LEAGUE and KOREA LEAGUE.",
          zh: "A LEAGUE与KOREA LEAGUE之间的交流赛。"
        }

      }

    },


    {
      id: "game-003",

      eventId: "ahba-international-cup",
         
      type: "tournament",

      title: {
        ja: "AHBA INTERNATIONAL CUP 決勝",
        ko: "AHBA INTERNATIONAL CUP 결승",
        en: "AHBA INTERNATIONAL CUP Final",
        zh: "AHBA INTERNATIONAL CUP 决赛"
      },

      time: "2026-09-20T19:30:00+09:00",

      home: "Team Japan",
      away: "Team Taiwan",

      homeScore: 6,
      awayScore: 5,

      status: "finished",

      round: {
        ja: "決勝",
        ko: "결승",
        en: "Final",
        zh: "决赛"
      },

      detail: {

        innings: {
          home: [0, 1, 2, 0, 0, 1, 0, 0, 2],
          away: [1, 0, 0, 2, 0, 0, 1, 1, 0]
        },

        pitching: {
          win: "鈴木 颯",
          loss: "Lin Wei",
          save: "伊藤 海",

          holds: [
            "渡辺 翼",
            "吉田 陽"
          ]
        },

        homeRuns: [

          {
            team: "home",
            player: "鈴木 颯",
            inning: 3,
            runs: 2
          },

          {
            team: "home",
            player: "伊藤 海",
            inning: 9,
            runs: 2
          },

          {
            team: "away",
            player: "Chen Hao",
            inning: 4,
            runs: 2
          }

        ],

        notes: {
          ja: "AHBA INTERNATIONAL CUP 決勝戦。",
          ko: "AHBA INTERNATIONAL CUP 결승전.",
          en: "The final of the AHBA INTERNATIONAL CUP.",
          zh: "AHBA INTERNATIONAL CUP 决赛。"
        }

      }

    }

  ],


  /* =========================================================
     AHBA OFFICIAL STANDINGS
     ========================================================= */

  standings: {

    "ahba-international-cup": [

      {
        team: {
          ja: "Team Japan",
          ko: "Team Japan",
          en: "Team Japan",
          zh: "Team Japan"
        },

        played: 3,
        wins: 2,
        losses: 1,
        draws: 0,
        runsFor: 15,
        runsAgainst: 10,
        points: 6
      },

      {
        team: {
          ja: "Team Korea",
          ko: "Team Korea",
          en: "Team Korea",
          zh: "Team Korea"
        },

        played: 3,
        wins: 2,
        losses: 1,
        draws: 0,
        runsFor: 12,
        runsAgainst: 9,
        points: 6
      },

      {
        team: {
          ja: "Team Taiwan",
          ko: "Team Taiwan",
          en: "Team Taiwan",
          zh: "Team Taiwan"
        },

        played: 3,
        wins: 1,
        losses: 2,
        draws: 0,
        runsFor: 10,
        runsAgainst: 13,
        points: 3
      },

      {
        team: {
          ja: "Team China",
          ko: "Team China",
          en: "Team China",
          zh: "Team China"
        },

        played: 3,
        wins: 1,
        losses: 2,
        draws: 0,
        runsFor: 8,
        runsAgainst: 13,
        points: 3
      }

    ]

  }

};
