---
order: 8
group:
  title: API服务
  path: /search-anilistInfo
---

# 以图搜番

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 以图搜番
- **请求方式：** `POST`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/search/anilistInfo`

## 🔢 请求参数

| 参数名    | 必填 | 类型           | 说明                                                          |
| --------- | ---- | -------------- | ------------------------------------------------------------- |
| file      | 是   | file \| string | 二维码图片文件,文件大小不要超过 5MB，SDK 调用传入文件路径即可 |
| accessKey | 是   | string         | 调用凭证，在线调用可不携带                                    |
| accessKey | 是   | string         | 调用凭证，在线调用可不携带                                    |

## 💬 响应参数

| 参数名称   | 类型   | 说明           |
| ---------- | ------ | -------------- |
| native     | string | 原始名字       |
| english    | string | 英文名字       |
| episode    | number | 所在集         |
| similarity | number | 相似指数       |
| from       | number | 开始时间（秒） |
| to         | number | 结束时间（秒） |

## 📜 代码示例

:::info{title=提示}
没有开发者调用凭证无法调用接口， <a href="https://api.yeguo.icu/person" target="_blank" rel="noopener noreferrer">前往获取开发者凭证</a>
:::

- **方式一: 自动注入， 推荐**

**application.yml 配置凭证**

```yml
yeguo:
  api:
    access-key: your-accessKey
    secret-key: your-secretKey
```

**调用接口**

```js
@Autowired
private YGApiClient ygApiClient;

try {
      String result = ygApiClient.searchAnimeInfo("C:\Users\example\Pictures\3.jpg");
      System.out.println(result);
    } catch (YGApiException e) {
        log.error("调用API接口异常", e);
      }

```

- **方式二：主动实例化**

```js
try {
      String accessKey = "your-accessKey";
      String secretKey = "your-secretKey";
      ygApiClient = new YGApiClient(accessKey,secretKey);
      String result = ygApiClient.searchAnimeInfo("C:\Users\example\Pictures\3.jpg");
      System.out.println(result);
    } catch (YGApiException e) {
        log.error("调用API接口异常", e);
      }
```

## 📝 响应示例

```json
{
  "code": 200,
  "result": [
    {
      "anilist": {
        "id": 20665,
        "idMal": 23273,
        "title": {
          "native": "四月は君の嘘",
          "romaji": "Shigatsu wa Kimi no Uso",
          "english": "Your lie in April"
        },
        "synonyms": [
          "KimiUso",
          "השקר שלך באפריל",
          "Bugie d'aprile",
          "四月是你的谎言",
          "YLIA",
          "Sekunden in Moll",
          "Твоя апрельская ложь"
        ],
        "isAdult": false
      },
      "filename": "[Leopard-Raws] Shigatsu wa Kimi no Uso - 21 RAW (CX 1280x720 x264 AAC).mp4",
      "episode": 21,
      "from": 358.5,
      "to": 359.58,
      "similarity": 0.83229670385731,
      "video": "https://api.trace.moe/video/20665/%5BLeopard-Raws%5D%20Shigatsu%20wa%20Kimi%20no%20Uso%20-%2021%20RAW%20(CX%201280x720%20x264%20AAC).mp4?t=359.03999999999996&now=1722222000&token=S11F8BtI1ayfRW4Q3hv046eCXPw",
      "image": "https://api.trace.moe/image/20665/%5BLeopard-Raws%5D%20Shigatsu%20wa%20Kimi%20no%20Uso%20-%2021%20RAW%20(CX%201280x720%20x264%20AAC).mp4.jpg?t=359.03999999999996&now=1722222000&token=R0ghlaDpG2KzhHmjFzL4ZcM0Bk"
    },
    {
      "anilist": {
        "id": 2159,
        "idMal": 2159,
        "title": {
          "native": "おおきく振りかぶって",
          "romaji": "Ookiku Furikabutte",
          "english": "Big Windup!"
        },
        "synonyms": ["Oofuri", "Ohkiku Furikabutte", "Swing Big!"],
        "isAdult": false
      },
      "filename": "[QYsub][おおきく振りかぶって][20][中日雙語].mp4",
      "episode": 20,
      "from": 1109.08,
      "to": 1109.25,
      "similarity": 0.8254550105074452,
      "video": "https://api.trace.moe/video/2159/%5BQYsub%5D%5B%E3%81%8A%E3%81%8A%E3%81%8D%E3%81%8F%E6%8C%AF%E3%82%8A%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%A6%5D%5B20%5D%5B%E4%B8%AD%E6%97%A5%E9%9B%99%E8%AA%9E%5D.mp4?t=1109.165&now=1722222000&token=6p4QIRLGumiGX36DnkUWP1PSY",
      "image": "https://api.trace.moe/image/2159/%5BQYsub%5D%5B%E3%81%8A%E3%81%8A%E3%81%8D%E3%81%8F%E6%8C%AF%E3%82%8A%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%A6%5D%5B20%5D%5B%E4%B8%AD%E6%97%A5%E9%9B%99%E8%AA%9E%5D.mp4.jpg?t=1109.165&now=1722222000&token=MtjbpJhz6Kc2bCgPCFB7si081PY"
    },
    {
      "anilist": {
        "id": 21732,
        "idMal": 33091,
        "title": {
          "native": "planetarian～ちいさなほしのゆめ～",
          "romaji": "planetarian: Chiisana Hoshi no Yume",
          "english": "Planetarian"
        },
        "synonyms": ["planetarian: The Reverie of a Little Planet"],
        "isAdult": false
      },
      "filename": "Planetarian Chiisana Hoshi no Yume - 04 (BD 1280x720 x264 AAC).mp4",
      "episode": 4,
      "from": 909.83,
      "to": 911.58,
      "similarity": 0.822972307882159,
      "video": "https://api.trace.moe/video/21732/Planetarian%20Chiisana%20Hoshi%20no%20Yume%20-%2004%20(BD%201280x720%20x264%20AAC).mp4?t=910.705&now=1722222000&token=ffLRorF8rZ5l0zvMV5MWuEd4Yk",
      "image": "https://api.trace.moe/image/21732/Planetarian%20Chiisana%20Hoshi%20no%20Yume%20-%2004%20(BD%201280x720%20x264%20AAC).mp4.jpg?t=910.705&now=1722222000&token=Jm7qyAT5A3VgcNy83pfzjEjsA"
    },
    {
      "anilist": {
        "id": 21732,
        "idMal": 33091,
        "title": {
          "native": "planetarian～ちいさなほしのゆめ～",
          "romaji": "planetarian: Chiisana Hoshi no Yume",
          "english": "Planetarian"
        },
        "synonyms": ["planetarian: The Reverie of a Little Planet"],
        "isAdult": false
      },
      "filename": "[ReinForce] Planetarian ~Chiisana Hoshi no Yume~ 04 (BDRip 1920x1080 x264 FLAC).mp4",
      "episode": 4,
      "from": 909.67,
      "to": 911.42,
      "similarity": 0.822972307882159,
      "video": "https://api.trace.moe/video/21732/%5BReinForce%5D%20Planetarian%20~Chiisana%20Hoshi%20no%20Yume~%2004%20(BDRip%201920x1080%20x264%20FLAC).mp4?t=910.545&now=1722222000&token=fvDhN95EqY9e5XyEIVkYB8E7Y",
      "image": "https://api.trace.moe/image/21732/%5BReinForce%5D%20Planetarian%20~Chiisana%20Hoshi%20no%20Yume~%2004%20(BDRip%201920x1080%20x264%20FLAC).mp4.jpg?t=910.545&now=1722222000&token=DJcy1zeuxHbqjNakdDnY9B4j8U"
    },
    {
      "anilist": {
        "id": 99639,
        "idMal": 36000,
        "title": {
          "native": "ソラとウミのアイダ",
          "romaji": "Sora to Umi no Aida",
          "english": "Between the Sky and Sea"
        },
        "synonyms": ["The Space Between the Sky and the Sea"],
        "isAdult": false
      },
      "filename": "Sora to Umi no Aida - 01 (BD 1280x720 x264 AACx2).mp4",
      "episode": 1,
      "from": 882.75,
      "to": 883.92,
      "similarity": 0.8195005287849699,
      "video": "https://api.trace.moe/video/99639/Sora%20to%20Umi%20no%20Aida%20-%2001%20(BD%201280x720%20x264%20AACx2).mp4?t=883.335&now=1722222000&token=aCcmuG6mjbkpNrkTXy1VgrLM1s",
      "image": "https://api.trace.moe/image/99639/Sora%20to%20Umi%20no%20Aida%20-%2001%20(BD%201280x720%20x264%20AACx2).mp4.jpg?t=883.335&now=1722222000&token=hRlc3To5IBScnws8uuC6ruBRr8"
    },
    {
      "anilist": {
        "id": 10793,
        "idMal": 10793,
        "title": {
          "native": "ギルティクラウン",
          "romaji": "Guilty Crown",
          "english": "Guilty Crown"
        },
        "synonyms": ["المُلك المُدان"],
        "isAdult": false
      },
      "filename": "[ReinForce] Guilty Crown -  14 (BDRip 1920x1080 x264 FLAC).mp4",
      "episode": 14,
      "from": 1278,
      "to": 1278.33,
      "similarity": 0.8183777068960327,
      "video": "https://api.trace.moe/video/10793/%5BReinForce%5D%20Guilty%20Crown%20-%20%2014%20(BDRip%201920x1080%20x264%20FLAC).mp4?t=1278.165&now=1722222000&token=R5n4uyCWrGNf512BdVpY5vdQsQ",
      "image": "https://api.trace.moe/image/10793/%5BReinForce%5D%20Guilty%20Crown%20-%20%2014%20(BDRip%201920x1080%20x264%20FLAC).mp4.jpg?t=1278.165&now=1722222000&token=3GRgjf0hqAHIAziPpMyAxgoGIs"
    },
    {
      "anilist": {
        "id": 6702,
        "idMal": 6702,
        "title": {
          "native": "FAIRY TAIL",
          "romaji": "FAIRY TAIL",
          "english": "Fairy Tail"
        },
        "synonyms": [
          "פיירי טייל",
          "妖精的尾巴",
          "フェアリーテイル",
          "แฟรี่เทล ศึกจอมเวทอภินิหาร"
        ],
        "isAdult": false
      },
      "filename": "[ReinForce] Fairy Tail - 025 (BDRip 1280x720 x264 FLAC).mp4",
      "episode": 25,
      "from": 839.17,
      "to": 839.5,
      "similarity": 0.8170450168102097,
      "video": "https://api.trace.moe/video/6702/%5BReinForce%5D%20Fairy%20Tail%20-%20025%20(BDRip%201280x720%20x264%20FLAC).mp4?t=839.335&now=1722222000&token=cTtyKrOhfuv46vSJzEbdBFxDVkE",
      "image": "https://api.trace.moe/image/6702/%5BReinForce%5D%20Fairy%20Tail%20-%20025%20(BDRip%201280x720%20x264%20FLAC).mp4.jpg?t=839.335&now=1722222000&token=ue2By600Dym0CjvRxRKiv4SGjK0"
    },
    {
      "anilist": {
        "id": 99639,
        "idMal": 36000,
        "title": {
          "native": "ソラとウミのアイダ",
          "romaji": "Sora to Umi no Aida",
          "english": "Between the Sky and Sea"
        },
        "synonyms": ["The Space Between the Sky and the Sea"],
        "isAdult": false
      },
      "filename": "[Ohys-Raws] Sora to Umi no Aida - 01 (MX 1280x720 x264 AAC).mp4",
      "episode": 1,
      "from": 891.83,
      "to": 893,
      "similarity": 0.8164596578040694,
      "video": "https://api.trace.moe/video/99639/%5BOhys-Raws%5D%20Sora%20to%20Umi%20no%20Aida%20-%2001%20(MX%201280x720%20x264%20AAC).mp4?t=892.415&now=1722222000&token=VfH9CZnwTIjxkIcrWuRpqxht9w",
      "image": "https://api.trace.moe/image/99639/%5BOhys-Raws%5D%20Sora%20to%20Umi%20no%20Aida%20-%2001%20(MX%201280x720%20x264%20AAC).mp4.jpg?t=892.415&now=1722222000&token=KiVStnXxTjBNQcknjClXRahaD0A"
    },
    {
      "anilist": {
        "id": 99639,
        "idMal": 36000,
        "title": {
          "native": "ソラとウミのアイダ",
          "romaji": "Sora to Umi no Aida",
          "english": "Between the Sky and Sea"
        },
        "synonyms": ["The Space Between the Sky and the Sea"],
        "isAdult": false
      },
      "filename": "[Ohys-Raws] Sora to Umi no Aida - 01 (MX 1280x720 x264 AACx2).mp4",
      "episode": 1,
      "from": 891.83,
      "to": 893,
      "similarity": 0.8164596578040694,
      "video": "https://api.trace.moe/video/99639/%5BOhys-Raws%5D%20Sora%20to%20Umi%20no%20Aida%20-%2001%20(MX%201280x720%20x264%20AACx2).mp4?t=892.415&now=1722222000&token=BjtgBA94noK3AgOjkYhhlnYl0mU",
      "image": "https://api.trace.moe/image/99639/%5BOhys-Raws%5D%20Sora%20to%20Umi%20no%20Aida%20-%2001%20(MX%201280x720%20x264%20AACx2).mp4.jpg?t=892.415&now=1722222000&token=XJZYPJfHMd7q4vRJ7g7TauUWjg"
    },
    {
      "anilist": {
        "id": 99639,
        "idMal": 36000,
        "title": {
          "native": "ソラとウミのアイダ",
          "romaji": "Sora to Umi no Aida",
          "english": "Between the Sky and Sea"
        },
        "synonyms": ["The Space Between the Sky and the Sea"],
        "isAdult": false
      },
      "filename": "[Leopard-Raws] Sora to Umi no Aida - 01 RAW (ATX 1280x720 x264 AAC).mp4",
      "episode": 1,
      "from": 891.67,
      "to": 892.5,
      "similarity": 0.8159224951411542,
      "video": "https://api.trace.moe/video/99639/%5BLeopard-Raws%5D%20Sora%20to%20Umi%20no%20Aida%20-%2001%20RAW%20(ATX%201280x720%20x264%20AAC).mp4?t=892.085&now=1722222000&token=J32uZK7npbSkGijIGXPsra6Lw",
      "image": "https://api.trace.moe/image/99639/%5BLeopard-Raws%5D%20Sora%20to%20Umi%20no%20Aida%20-%2001%20RAW%20(ATX%201280x720%20x264%20AAC).mp4.jpg?t=892.085&now=1722222000&token=O7EsgGAlrSeONgjVP1aRhgYOeYE"
    }
  ],
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
