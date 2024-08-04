---
order: 6
group:
  title: API服务
  path: /one-film
---

# 日影荐

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 每日一部电影推荐
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/common/OneFilm`
- **请求示例：** `https://gw.yeguo.icu/api/common/OneFilm?accessKey=***&signature=***`

## 🔢 请求参数

| 参数名 | 必填 |   类型    |  说明  |
| :----: | :--: | :-------: | :----: |
|   无   |  否  | undefined | 无参数 |

## 💬 响应参数

|   参数名称   |  类型  |     说明     |
| :----------: | :----: | :----------: |
|     date     | number | 当前数据日期 |
|   mov_area   | string |   电影地区   |
| mov_director | string |     导演     |
|  mov_intro   | string |   电影描述   |
|   mov_link   | string |   豆瓣链接   |
|   mov_pic    | string |   电影封面   |
|  mov_rating  | number |   电影评分   |
|   mov_text   | string |   电影描述   |
|  mov_title   | string |   电影名称   |
|   mov_type   | object |   电影类型   |
|   mov_year   | string |   电影年份   |

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
    gateway: 'https://gw.yeguo.icu'
```

**调用接口**

```js
@Autowired
private YGApiClient ygApiClient;

try {
      String result = ygApiClient.getOneFilm();
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
      String gateway = "https://gw.yeguo.icu";
      YGApiClient ygApiClient = new YGApiClient(accessKey,secretKey,gateway);
      String result = ygApiClient.getOneFilm();
      System.out.println(result);
    } catch (YGApiException e) {
        log.error("调用API接口异常", e);
      }
```

## 📝 响应示例

```json
{
  "code": 200,
  "result": {
    "date": "20240729",
    "mov_area": "美国",
    "mov_director": "贝尼特·米勒",
    "mov_intro": "在美国职业棒球大联盟MLB中，比利（布拉德•皮特BradPitt饰）所属的奥克兰运动家队败给了财大气粗的纽约扬基队，这让他深受打击。雪上加霜的是三名主力纷纷被重金挖走，未来的赛季前途渺茫。在管理层会议上，大家一头雾水，只有他暗下决心改造球队。一次偶然的机会，他认识了耶鲁大学经济学硕士彼得（乔纳•希尔JonahHill饰），两者对于球队运营的理念不谋而合。凭借直觉和经验，他仿佛找到了破解金元棒球的钥匙。他聘请彼得作为自己的顾问，一起研究如何打造最高胜率的球队。他们用数学建模的方式，逐渐开始挖掘上垒率的潜在明星，并通过软磨硬泡将他们招致麾下。他们不在乎高层的冷嘲热讽，只是专心地为球队寻找信心和实力的根源，终于新的赛季开始了……影片改编自迈克尔•刘易斯的《魔球—逆境中致胜的智慧》（Moneyball:TheArtofWinninganUnfairGame）。",
    "mov_link": "https://movie.douban.com/subject/3023164/",
    "mov_pic": "https://files.codelife.cc/itab/movieCalendar/c-202303233023164.webp?x-oss-process=image/resize,limit_0,m_fill,w_400/quality,q_90/format,webp",
    "poster_url": "https://files.codelife.cc/itab/movieCalendar/p-202303233023164.webp?x-oss-process=image/resize,limit_0,m_fill,w_273,h_405/quality,q_80/format,webp",
    "mov_rating": "8.3",
    "mov_text": "我们都会在某个时间点，被告知不能再玩孩子的游戏，只是时间因人而异。",
    "mov_title": "点球成金",
    "mov_type": ["剧情", "传记", "运动"],
    "mov_year": "2011"
  },
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
