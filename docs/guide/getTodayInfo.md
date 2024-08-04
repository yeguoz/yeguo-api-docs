---
order: 9
group:
  title: API服务
  path: /qrcode-decode
---

# 日读世界 60s

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 每日 60 秒读懂世界新闻
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/common/today`
- **请求示例：** `https://gw.yeguo.icu/api/common/today?accessKey=***&signature=***`

## 🔢 请求参数

| 参数名 | 必填 |   类型    | 说明 |
| :----: | :--: | :-------: | :--: |
|   无   |  否  | undefined |  无  |

## 💬 响应参数

|  参数名称  |  类型  |      说明      |
| :--------: | :----: | :------------: |
|   native   | string |    原始名字    |
|  english   | string |    英文名字    |
|  episode   | number |     所在集     |
| similarity | number |    相似指数    |
|    from    | number | 开始时间（秒） |
|     to     | number | 结束时间（秒） |

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
      String result = ygApiClient.getTodayInfo();
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
      String result = ygApiClient.getTodayInfo();
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
    "id": 1262,
    "date": "2024-07-29",
    "news": [
      "1、28日上午，湖南衡阳南岳区寿岳乡岳林村发生山体滑坡，一民宿倒塌，造成15死6伤；湖南湘潭县一堤坝发生险情，决口已发展至50多米，3100余名群众紧急转移；",
      "2、江苏淮安9人乘船3人落水，应急局：已被打捞上岸，均失去生命体征；",
      "3、鸭绿江水位超出警戒线，可能出现重大洪涝灾害，形势危急！临江市紧急发通知：全市三层以下居民、平房居民往高处转移；",
      "4、据不完全统计：去年全年，沪深两市合计有10家上市公司大股东离婚。而今年前7个月，就已有12只A股大股东闹离婚，分手费超63亿，数量呈上升之势；",
      "5、沙县小吃文旅集团董事长童友健被查！涉嫌严重职务违法，原副总两个多月前落马；",
      "6、恒大汽车：债权人申请对恒大新能源汽车及恒大智能汽车进行破产重整，对生产经营活动产生重大影响；",
      "7、外媒：投入10亿欧治污！塞纳河水质仍“不达标“，原定28日举行的铁人三项游泳训练取消；",
      "8、英国首相办公室：评估结果显示英国已“破产“和“支离破碎“；",
      "9、外媒：美日韩在东京举行国防部长会议，签署“安全合作框架协议“，或是为了“应对中国“；",
      "10、日本：已与美国签署30亿日元“爱国者“导弹出售协议；",
      "11、马来西亚：申请加入金砖国家；",
      "12、特朗普：比特币市值很快就会超越白银，未来会超越黄金，如能重返白宫，会将比特币列为美国战略储备资产;",
      "13、普京：如美国在德国部署远程导弹，俄将考虑重新部署中短程导弹；",
      "14、当地28日，以军对加沙南部汗尤尼斯发动空袭，造成包括儿童妇女在内的13人死亡；",
      "15、以色列称黎巴嫩真主党袭击戈兰高地致12死30伤，扬言报复，黎真主党否认袭击；以外交部长：黎真主党“毫无疑问已越过所有红线“，以色列正面临一场“全面战争“；联合国官员呼吁黎以保持克制，避免冲突扩大；"
    ],
    "weiyu": "【微语】有些煎熬需要独自面对。过去了，回头看，不过一阵轻风；过不去，那么看看风蚀过的痕迹，然后忘记。",
    "image": "https://file.alapi.cn/60s/202407291722189607.png",
    "headImage": "https://file.alapi.cn/60s/202407291722189607_head.png",
    "createdAt": "2024-07-29 02:00:22",
    "updatedAt": ""
  },
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
