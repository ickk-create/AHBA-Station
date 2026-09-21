const ALLIANCE_DATA = {
  leagues: [
    {
      id: "A",
      name: {
        ja: "A LEAGUE",
        ko: "A LEAGUE",
        en: "A LEAGUE",
        zh: "A LEAGUE"
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
        ja: "毎週土曜日 20:00",
        ko: "매주 토요일 20:00",
        en: "Every Saturday 20:00",
        zh: "每周六 20:00"
      },
      timezone: "Asia/Tokyo",

      description: {
        ja: "日本を中心としたHCBBリーグ。各チームが定期的に対戦します。",
        ko: "일본을 중심으로 운영되는 HCBB 리그입니다.",
        en: "An HCBB league primarily based in Japan.",
        zh: "以日本为中心运营的HCBB联赛。"
      },

      owner: "AHBA",

      teams: [
        {
          id: "A1",
          name: "A1",
          country: {
            ja: "日本",
            ko: "일본",
            en: "Japan",
            zh: "日本"
          }
        },
        {
          id: "A2",
          name: "A2",
          country: {
            ja: "日本",
            ko: "일본",
            en: "Japan",
            zh: "日本"
          }
        },
        {
          id: "A3",
          name: "A3",
          country: {
            ja: "日本",
            ko: "일본",
            en: "Japan",
            zh: "日本"
          }
        },
        {
          id: "A4",
          name: "A4",
          country: {
            ja: "日本",
            ko: "일본",
            en: "Japan",
            zh: "日本"
          }
        }
      ],

      discord: {
        url: "https://discord.gg/REPLACE_A_LEAGUE",
        code: "A-LEAGUE"
      }
    },

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
        ja: "日本を中心としたHCBBリーグ。A LEAGUEとは異なるチーム構成で運営されます。",
        ko: "A LEAGUE와 다른 팀 구성으로 운영되는 일본 중심의 HCBB 리그입니다.",
        en: "An HCBB league based in Japan with a different team structure from A LEAGUE.",
        zh: "以日本为中心运营，与A LEAGUE拥有不同球队构成的HCBB联赛。"
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
        ja: "韓国を中心としたHCBBリーグ。AHBAを通じて国際交流を行います。",
        ko: "한국을 중심으로 운영되며 AHBA를 통해 국제 교류를 진행하는 HCBB 리그입니다.",
        en: "An HCBB league based in South Korea with international exchange through AHBA.",
        zh: "以韩国为中心，并通过AHBA进行国际交流的HCBB联赛。"
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

  /*
   * ============================================================
   * AHBA OFFICIAL GAMES
   * ============================================================
   *
   * ホームページには「AHBAが公式掲載する試合」のみを掲載。
   *
   * eventId:
   *   international-friendly
   *   ahba-exchange
   *   ahba-international-cup
   *
   * status:
   *   scheduled
   *   live
   *   finished
   */

  games: [
    /*
     * ----------------------------------------------------------
     * GAME 001
     * ----------------------------------------------------------
     */

    {
      id: "game-001",

      eventId: "international-friendly",

      eventName: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "国际友谊赛"
      },

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
          home: [
            0, 1, 0, 2, 0, 0, 1, 0, 1
          ],
          away: [
            0, 0, 1, 0, 0, 2, 0, 0, 0
          ]
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

    /*
     * ----------------------------------------------------------
     * GAME 002
     * ----------------------------------------------------------
     */

    {
      id: "game-002",

      eventId: "ahba-exchange",

      eventName: {
        ja: "AHBA交流戦",
        ko: "AHBA 교류전",
        en: "AHBA Exchange Game",
        zh: "AHBA交流赛"
      },

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
        ja: "交流戦",
        ko: "교류전",
        en: "Exchange Game",
        zh: "交流赛"
      },

      detail: {
        innings: {
          home: [
            1, 0, 0, 2, 0, 0, 0, 1, 0
          ],
          away: [
            0, 0, 1, 0, 0, 0, 1, 0, 0
          ]
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
          ja: "A LEAGUEとKOREA LEAGUEによるAHBA主催の交流試合。",
          ko: "A LEAGUE와 KOREA LEAGUE의 AHBA 주최 교류 경기.",
          en: "An AHBA-hosted exchange game between A LEAGUE and KOREA LEAGUE.",
          zh: "A LEAGUE与KOREA LEAGUE之间由AHBA主办的交流赛。"
        }
      }
    },

    /*
     * ----------------------------------------------------------
     * GAME 003
     * ----------------------------------------------------------
     */

    {
      id: "game-003",

      eventId: "ahba-international-cup",

      eventName: {
        ja: "AHBA INTERNATIONAL CUP",
        ko: "AHBA INTERNATIONAL CUP",
        en: "AHBA INTERNATIONAL CUP",
        zh: "AHBA INTERNATIONAL CUP"
      },

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
          home: [
            0, 1, 2, 0, 0, 1, 0, 0, 2
          ],
          away: [
            1, 0, 0, 2, 0, 0, 1, 1, 0
          ]
        },

        pitching: {
          win: "Team Japan SP",
          loss: "Team Taiwan SP",
          save: "Team Japan CP",
          holds: [
            "Team Japan RP"
          ]
        },

        homeRuns: [
          {
            team: "home",
            player: "Team Japan Batter",
            inning: 2,
            runs: 1
          },
          {
            team: "away",
            player: "Team Taiwan Batter",
            inning: 4,
            runs: 2
          },
          {
            team: "home",
            player: "Team Japan Batter",
            inning: 9,
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
    },

    /*
     * ----------------------------------------------------------
     * GAME 004
     * UPCOMING
     * ----------------------------------------------------------
     */

    {
      id: "game-004",

      eventId: "ahba-exchange",

      eventName: {
        ja: "AHBA交流戦",
        ko: "AHBA 교류전",
        en: "AHBA Exchange Game",
        zh: "AHBA交流赛"
      },

      type: "friendly",

      title: {
        ja: "A LEAGUE選抜 vs KOREA LEAGUE選抜",
        ko: "A LEAGUE 선발 vs KOREA LEAGUE 선발",
        en: "A LEAGUE Select vs KOREA LEAGUE Select",
        zh: "A LEAGUE 精选队 vs KOREA LEAGUE 精选队"
      },

      time: "2026-09-26T20:00:00+09:00",

      home: "A LEAGUE Select",
      away: "KOREA LEAGUE Select",

      homeScore: null,
      awayScore: null,

      status: "scheduled",

      round: {
        ja: "交流戦",
        ko: "교류전",
        en: "Exchange Game",
        zh: "交流赛"
      },

      detail: {
        innings: {
          home: [],
          away: []
        },

        pitching: {
          win: "",
          loss: "",
          save: "",
          holds: []
        },

        homeRuns: [],

        notes: {
          ja: "AHBA主催の交流戦。試合前です。",
          ko: "AHBA 주최 교류전. 경기 전입니다.",
          en: "An AHBA-hosted exchange game. Upcoming.",
          zh: "AHBA主办的交流赛。比赛尚未开始。"
        }
      }
    },

    /*
     * ----------------------------------------------------------
     * GAME 005
     * UPCOMING
     * ----------------------------------------------------------
     */

    {
      id: "game-005",

      eventId: "international-friendly",

      eventName: {
        ja: "国際親善試合",
        ko: "국제 친선 경기",
        en: "International Friendly",
        zh: "国际友谊赛"
      },

      type: "international",

      title: {
        ja: "日本代表 vs 台湾代表",
        ko: "일본 대표 vs 대만 대표",
        en: "Japan vs Taiwan",
        zh: "日本队 vs 台湾队"
      },

      time: "2026-09-27T19:00:00+09:00",

      home: "Japan",
      away: "Taiwan",

      homeScore: null,
      awayScore: null,

      status: "scheduled",

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
          win: "",
          loss: "",
          save: "",
          holds: []
        },

        homeRuns: [],

        notes: {
          ja: "国際親善試合。試合前です。",
          ko: "국제 친선 경기. 경기 전입니다.",
          en: "International friendly. Upcoming.",
          zh: "国际友谊赛。比赛尚未开始。"
        }
      }
    },

    /*
     * ----------------------------------------------------------
     * GAME 006
     * UPCOMING
     * ----------------------------------------------------------
     */

    {
      id: "game-006",

      eventId: "ahba-international-cup",

      eventName: {
        ja: "AHBA INTERNATIONAL CUP",
        ko: "AHBA INTERNATIONAL CUP",
        en: "AHBA INTERNATIONAL CUP",
        zh: "AHBA INTERNATIONAL CUP"
      },

      type: "tournament",

      title: {
        ja: "AHBA INTERNATIONAL CUP 準決勝",
        ko: "AHBA INTERNATIONAL CUP 준결승",
        en: "AHBA INTERNATIONAL CUP Semifinal",
        zh: "AHBA INTERNATIONAL CUP 半决赛"
      },

      time: "2026-10-03T19:30:00+09:00",

      home: "Team Korea",
      away: "Team China",

      homeScore: null,
      awayScore: null,

      status: "scheduled",

      round: {
        ja: "準決勝",
        ko: "준결승",
        en: "Semifinal",
        zh: "半决赛"
      },

      detail: {
        innings: {
          home: [],
          away: []
        },

        pitching: {
          win: "",
          loss: "",
          save: "",
          holds: []
        },

        homeRuns: [],

        notes: {
          ja: "AHBA INTERNATIONAL CUP 準決勝。試合前です。",
          ko: "AHBA INTERNATIONAL CUP 준결승. 경기 전입니다.",
          en: "AHBA INTERNATIONAL CUP semifinal. Upcoming.",
          zh: "AHBA INTERNATIONAL CUP半决赛。比赛尚未开始。"
        }
      }
    }
  ],

  /*
   * ============================================================
   * STANDINGS
   * ============================================================
   */

  standings: {
    current: [
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
