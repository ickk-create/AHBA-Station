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
    matchTime: {
      ja: "毎週火曜日、水曜日、土曜日、日曜日 21:30",
      ko: "매주 화요일, 수요일, 토요일, 일요일 9:30 PM",
      en: "Every Tuesday,Wednesday,Saturday,Sunday 9:30 PM KST",
      zh: "每週二、三、六、日 8:30 PM"
    },

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
      zh: "每週一、四 8:30 PM、每週六、日 6:30 PM"
    },

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

  },


  /* =====================================================
     WBL LEAGUE
     ===================================================== */

  {
    id: "WBL",

    name: {
      ja: "World Baseball League™",
      ko: "World Baseball League™",
      en: "World Baseball League™",
      zh: "World Baseball League™"
    },

    country: {
      ja: "アジア",
      ko: "아시아",
      en: "Asia",
      zh: "亞洲"
    },

    region: {
      ja: "アジア",
      ko: "아시아",
      en: "Asia",
      zh: "亞洲"
    },

    matchTime: {
      ja: "毎週月曜日、木曜日 20:00、毎週金曜日 22:00、毎週土曜日、日曜日 17:30",
      ko: "매주 월요일, 목요일 8:00 PM, 매주 금요일 10:00 PM, 매주 토요일, 일요일 5:30 PM",
      en: "Every Monday and Thursday at 8:00 PM(KST), every Friday at 10:00 PM(KST), and every Saturday and Sunday at 5:30 PM(KST)",
      zh: "每週一、四 7:00 PM，每週五 9:00 PM，每週六、日 4:30 PM"
    },

    timezone: "Asia/Seoul",

    description: {
      ja: "𝐖𝐨𝐫𝐥𝐝 𝐁𝐚𝐬𝐞𝐛𝐚𝐥𝐥 𝐋𝐞𝐚𝐠𝐮𝐞™ (𝐖𝐁𝐋™)は、2025年9月23日にihywzz_XとNav3rForY0u (retent1on)によって設立された、HCBB 9v9における新人選手の育成と発展を目的とした非公式のサイドリーグです。現在、WBLの第3代コミッショナーである「Y0un9ju」がリーグを運営しています。また、WBLは（元コミッショナーを含む）プロフェッショナルで著名な理事会によって運営されています。さらに、WBLはHCBB 9v9において、特に韓国（大韓民国）で最大かつ最も人気のあるサイドリーグの一つです。私たちは、国際的にもHCBB 9v9の非公式サイドリーグを代表する存在となることを目指しています。",
      ko: "𝐖𝐨𝐫𝐥𝐝 𝐁𝐚𝐬𝐞𝐛𝐚𝐥𝐥 𝐋𝐞𝐚𝐠𝐮𝐞™ (𝐖𝐁𝐋™)은 2025년 9월 23일 ihywzz_X와 Nav3rForY0u (retent1on)이 설립한, HCBB 9v9의 신인 선수들을 육성하고 발전시키는 비공식 서브 리그입니다. 현재 WBL의 제3대 커미셔너인 'Y0un9ju'가 리그를 운영하고 있습니다. 또한, WBL은 (전직 커미셔너들을 포함한) 전문적이고 저명한 이사회에 의해 관리되고 있습니다. 아울러, WBL은 HCBB 9v9, 특히 대한민국에서 가장 규모가 크고 인기 있는 서브 리그 중 하나입니다. 또한, 우리는 국제적으로 HCBB 9v9의 비공식 서브 리그를 대표하는 존재가 되는 것을 목표로 하고 있습니다.",
      en: "𝐖𝐨𝐫𝐥𝐝 𝐁𝐚𝐬𝐞𝐛𝐚𝐥𝐥 𝐋𝐞𝐚𝐠𝐮𝐞™ (𝐖𝐁𝐋™) is an unofficial side league that promoting and developing rookie players in HCBB 9v9 founded by ihywzz_X and Nav3rForY0u (retent1on) on September 23, 2025. The 3rd Commissioner of the WBL, 'Y0un9ju' is now managing the league. Plus, WBL has been managed by professional and renowned Board of Directors (including the former Commissioners). Furthermore, WBL is one of the biggest and most popular side league in HCBB 9v9 especially in South Korea (Republic of Korea). We are also aiming to be representative for unofficial side league of the HCBB 9v9 internationally.",
      zh: "𝐖𝐨𝐫𝐥𝐝 𝐁𝐚𝐬𝐞𝐛𝐚𝐥𝐥 𝐋𝐞𝐚𝐠𝐮𝐞™ (𝐖𝐁𝐋™) 是一個由 ihywzz_X 與 Nav3rForY0u (retent1on) 於 2025 年 9 月 23 日創立的非官方副聯盟，旨在推廣與培育 HCBB 9v9 的新秀選手。WBL 的第三任總監「Y0un9ju」目前正負責管理該聯盟。此外，WBL 由專業且聲譽卓著的董事會（包括前任總監）所管理。更進一步地，WBL 是 HCBB 9v9 中規模最大、最受歡迎的副聯盟之一，特別是在韓國（大韓民國）。我們亦致力於成為國際 HCBB 9v9 非官方副聯盟的代表。"
    },

    owner: "Y0un9ju",

    teams: [

      {
        id: "coming soon...",
        name: "coming soon...",
      },

      {
        id: "coming soon...",
        name: "coming soon...",
      },

      {
        id: "coming soon...",
        name: "coming soon...",
      },

      {
        id: "coming soon...",
        name: "coming soon...",
      },

      {
        id: "coming soon...",
        name: "coming soon...",
      },
      
      {
        id: "coming soon...",
        name: "coming soon...",
      }

    ],

    discord: {

      url: "https://discord.gg/aQzmkZ9wsv",

      code: "EA054A"

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

    matchTime: {
      ja: "毎週火曜日、水曜日、木曜日 20:00、毎週土曜日、日曜日 16:00",
      ko: "매주 화요일,수요일,목요일 8:00 PM、매주 토요일,일요일 4:00 PM",
      en: "Every Tuesday,Wednesday,Thursday 8:00 PM KST, Every Saturday,Sunday 4:00 PM KST",
      zh: "每週二、三、四 7:00 PM、每週六、日 3:00 PM"
    },

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
        id: "KT WIZ",
        name: "KT WIZ",
      },

      {
        id: "Samsung Lions",
        name: "Samsung Lions",
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

    matchTime: {
      ja: "毎週月曜日、火曜日、木曜日 18:30、毎週土曜日、日曜日 13:00",
      ko: "매주 월요일, 화요일, 목요일 18:30, 매주 토요일, 일요일 13:00",
      en: "Every Monday, Tuesday, and Thursday at 6:30 p.m.JST; every Saturday and Sunday at 1:00 p.m.JST",
      zh: "每週一、二、四 17:30，每週六、日 12:00"
    },

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
        id: "-",
        name: "-",
      },

      {
        id: "-",
        name: "-",
      },

　　　　{
        id: "-",
        name: "-",
      },
      
      {
        id: "-",
        name: "-",
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
      id: "KFB S1 Play-off",

      name: {
        ja: "KFB S1 Play-off",
        ko: "KFB S1 Play-off",
        en: "KFB S1 Play-off",
        zh: "KFB S1 Play-off"
      },

      type: "Play-off"
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

      time: "2026-??-??T??:00:00+09:00",

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

        notes: {
          ja: "AHBA公式掲載の国際親善試合。",
          ko: "AHBA 공식 국제 친선 경기.",
          en: "An AHBA officially published international friendly.",
          zh: "AHBA官方發佈的國際友誼賽。"
        }

      }

    },


    {
　　   id: "game-002",

      eventId: "KFB S1 Play-off",

      type: "Play-off",

      title: {
        ja: "KT WIZ vs Samsung Lions",
        ko: "KT WIZ vs Samsung Lions",
        en: "KT WIZ vs Samsung Lions",
        zh: "KT WIZ vs Samsung Lions"
      },

      time: "2026-10-05T21:30:00+09:00",

      home: "KT WIZ",
      away: "Samsung Lions",

      homeScore: 4,
      awayScore: 0,

      status: "finished",

      round: {
        ja: "Play-off",
        ko: "Play-off",
        en: "Play-off",
        zh: "Play-off"
      },

      detail: {

        innings: {
          home: [3, 0, 1, 0, 0, 0, 0, 0, 0],
          away: [0, 0, 0, 0, 0, 0, 0, 0, 1]
        },

        pitching: {
          win: "Rozu_1x",
          loss: "s_vcx1n",
          save: null,

          holds: [
          ]
        },

        homeRuns: [

          {
           team: "home",
           player: "Insanetrick",
           inning: 1,
           runs: 3
          },

          {
           team: "home",
           player: "triplepark",
           inning: 3,
           runs: 1
          },

          {
           team: "away",
           player: "pistol0172",
           inning: 9,
           runs: 1
          }
           
        ],

        notes: {
          ja: "KFB S1 Play-off game-1",
          ko: "KFB S1 Play-off game-1",
          en: "KFB S1 Play-off game-1",
          zh: "KFB S1 Play-off game-1"
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
