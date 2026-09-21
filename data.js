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
          name: {
            ja: "A1",
            ko: "A1",
            en: "A1",
            zh: "A1"
          }
        },
        {
          id: "A2",
          name: {
            ja: "A2",
            ko: "A2",
            en: "A2",
            zh: "A2"
          }
        },
        {
          id: "A3",
          name: {
            ja: "A3",
            ko: "A3",
            en: "A3",
            zh: "A3"
          }
        },
        {
          id: "A4",
          name: {
            ja: "A4",
            ko: "A4",
            en: "A4",
            zh: "A4"
          }
        }
      ],
      discord: "#"
    },

    {
      id: "B",
      name: {
        ja: "B LEAGUE",
        ko: "B LEAGUE",
        en: "B LEAGUE",
        zh: "B LEAGUE"
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
          name: {
            ja: "B1",
            ko: "B1",
            en: "B1",
            zh: "B1"
          }
        },
        {
          id: "B2",
          name: {
            ja: "B2",
            ko: "B2",
            en: "B2",
            zh: "B2"
          }
        },
        {
          id: "B3",
          name: {
            ja: "B3",
            ko: "B3",
            en: "B3",
            zh: "B3"
          }
        },
        {
          id: "B4",
          name: {
            ja: "B4",
            ko: "B4",
            en: "B4",
            zh: "B4"
          }
        }
      ],
      discord: "#"
    },

    {
      id: "KOREA",
      name: {
        ja: "KOREA LEAGUE",
        ko: "KOREA LEAGUE",
        en: "KOREA LEAGUE",
        zh: "KOREA LEAGUE"
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
          name: {
            ja: "K1",
            ko: "K1",
            en: "K1",
            zh: "K1"
          }
        },
        {
          id: "K2",
          name: {
            ja: "K2",
            ko: "K2",
            en: "K2",
            zh: "K2"
          }
        },
        {
          id: "K3",
          name: {
            ja: "K3",
            ko: "K3",
            en: "K3",
            zh: "K3"
          }
        },
        {
          id: "K4",
          name: {
            ja: "K4",
            ko: "K4",
            en: "K4",
            zh: "K4"
          }
        }
      ],
      discord: "#"
    }
  ],

  games: [
    {
      id: "game-001",
      eventId: "international-friendly",
      type: "international",
      title: {
        ja: "日本 vs 韓国",
        ko: "일본 vs 한국",
        en: "Japan vs South Korea",
        zh: "日本 vs 韩国"
      },
      time: "2026-09-10T19:00:00+09:00",

      home: {
        ja: "日本",
        ko: "일본",
        en: "Japan",
        zh: "日本"
      },

      away: {
        ja: "韓国",
        ko: "한국",
        en: "South Korea",
        zh: "韩国"
      },

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
        innings: [1, 0, 2, 0, 1, 1],
        pitching: {
          ja: "先発：Japan SP",
          ko: "선발: Japan SP",
          en: "Starter: Japan SP",
          zh: "先发：Japan SP"
        },
        homeRuns: [
          {
            player: "Japan Player",
            inning: 3
          }
        ],
        notes: {
          ja: "国際親善試合として開催。",
          ko: "국제 친선 경기로 개최되었습니다.",
          en: "Played as an international friendly.",
          zh: "作为国际友谊赛举行。"
        }
      }
    },

    {
      id: "game-002",
      eventId: "ahba-exchange",
      type: "friendly",
      title: {
        ja: "A LEAGUE Select vs KOREA LEAGUE Select",
        ko: "A LEAGUE Select vs KOREA LEAGUE Select",
        en: "A LEAGUE Select vs KOREA LEAGUE Select",
        zh: "A LEAGUE Select vs KOREA LEAGUE Select"
      },
      time: "2026-09-12T20:00:00+09:00",

      home: {
        ja: "A LEAGUE Select",
        ko: "A LEAGUE Select",
        en: "A LEAGUE Select",
        zh: "A LEAGUE Select"
      },

      away: {
        ja: "KOREA LEAGUE Select",
        ko: "KOREA LEAGUE Select",
        en: "KOREA LEAGUE Select",
        zh: "KOREA LEAGUE Select"
      },

      homeScore: 4,
      awayScore: 2,

      status: "finished",

      round: {
        ja: "AHBA交流試合",
        ko: "AHBA 교류 경기",
        en: "AHBA Exchange Game",
        zh: "AHBA交流赛"
      },

      detail: {
        innings: [0, 1, 0, 2, 0, 1],
        pitching: {
          ja: "先発：A Select SP",
          ko: "선발: A Select SP",
          en: "Starter: A Select SP",
          zh: "先发：A Select SP"
        },
        homeRuns: [],
        notes: {
          ja: "AHBA主催の交流試合。",
          ko: "AHBA 주최 교류 경기.",
          en: "An exchange game hosted by AHBA.",
          zh: "AHBA主办的交流赛。"
        }
      }
    },

    {
      id: "game-003",
      eventId: "ahba-international-cup",
      type: "tournament",
      title: {
        ja: "AHBA INTERNATIONAL CUP Final",
        ko: "AHBA INTERNATIONAL CUP Final",
        en: "AHBA INTERNATIONAL CUP Final",
        zh: "AHBA INTERNATIONAL CUP Final"
      },
      time: "2026-09-20T19:30:00+09:00",

      home: {
        ja: "Team Japan",
        ko: "Team Japan",
        en: "Team Japan",
        zh: "Team Japan"
      },

      away: {
        ja: "Team Taiwan",
        ko: "Team Taiwan",
        en: "Team Taiwan",
        zh: "Team Taiwan"
      },

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
        innings: [1, 0, 2, 1, 0, 2],
        pitching: {
          ja: "先発：Team Japan SP",
          ko: "선발: Team Japan SP",
          en: "Starter: Team Japan SP",
          zh: "先发：Team Japan SP"
        },
        homeRuns: [],
        notes: {
          ja: "AHBA INTERNATIONAL CUP 決勝。",
          ko: "AHBA INTERNATIONAL CUP 결승전.",
          en: "Final of the AHBA INTERNATIONAL CUP.",
          zh: "AHBA INTERNATIONAL CUP决赛。"
        }
      }
    },

    /*
     * ========================================
     * UPCOMING GAMES
     * ========================================
     */

    {
      id: "game-004",
      eventId: "ahba-exchange",
      type: "friendly",

      title: {
        ja: "A LEAGUE Select vs KOREA LEAGUE Select",
        ko: "A LEAGUE Select vs KOREA LEAGUE Select",
        en: "A LEAGUE Select vs KOREA LEAGUE Select",
        zh: "A LEAGUE Select vs KOREA LEAGUE Select"
      },

      time: "2026-09-26T20:00:00+09:00",

      home: {
        ja: "A LEAGUE Select",
        ko: "A LEAGUE Select",
        en: "A LEAGUE Select",
        zh: "A LEAGUE Select"
      },

      away: {
        ja: "KOREA LEAGUE Select",
        ko: "KOREA LEAGUE Select",
        en: "KOREA LEAGUE Select",
        zh: "KOREA LEAGUE Select"
      },

      homeScore: null,
      awayScore: null,

      status: "scheduled",

      round: {
        ja: "AHBA交流試合",
        ko: "AHBA 교류 경기",
        en: "AHBA Exchange Game",
        zh: "AHBA交流赛"
      },

      detail: {
        notes: {
          ja: "AHBA主催の交流試合。試合前です。",
          ko: "AHBA 주최 교류 경기. 경기 전입니다.",
          en: "An AHBA-hosted exchange game. Upcoming.",
          zh: "AHBA主办的交流赛。比赛尚未开始。"
        }
      }
    },

    {
      id: "game-005",
      eventId: "international-friendly",
      type: "international",

      title: {
        ja: "日本 vs 台湾",
        ko: "일본 vs 대만",
        en: "Japan vs Taiwan",
        zh: "日本 vs 台湾"
      },

      time: "2026-09-27T19:00:00+09:00",

      home: {
        ja: "日本",
        ko: "일본",
        en: "Japan",
        zh: "日本"
      },

      away: {
        ja: "台湾",
        ko: "대만",
        en: "Taiwan",
        zh: "台湾"
      },

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
        notes: {
          ja: "国際親善試合。試合前です。",
          ko: "국제 친선 경기. 경기 전입니다.",
          en: "International friendly. Upcoming.",
          zh: "国际友谊赛。比赛尚未开始。"
        }
      }
    },

    {
      id: "game-006",
      eventId: "ahba-international-cup",
      type: "tournament",

      title: {
        ja: "AHBA INTERNATIONAL CUP",
        ko: "AHBA INTERNATIONAL CUP",
        en: "AHBA INTERNATIONAL CUP",
        zh: "AHBA INTERNATIONAL CUP"
      },

      time: "2026-10-03T19:30:00+09:00",

      home: {
        ja: "Team Korea",
        ko: "Team Korea",
        en: "Team Korea",
        zh: "Team Korea"
      },

      away: {
        ja: "Team China",
        ko: "Team China",
        en: "Team China",
        zh: "Team China"
      },

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
        notes: {
          ja: "AHBA INTERNATIONAL CUP 準決勝。試合前です。",
          ko: "AHBA INTERNATIONAL CUP 준결승. 경기 전입니다.",
          en: "Semifinal of the AHBA INTERNATIONAL CUP. Upcoming.",
          zh: "AHBA INTERNATIONAL CUP半决赛。比赛尚未开始。"
        }
      }
    }
  ],

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
        runsFor: 12,
        runsAgainst: 8,
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
        runsFor: 10,
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
        runsFor: 9,
        runsAgainst: 10,
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
        runsAgainst: 12,
        points: 3
      }
    ]
  }
};
