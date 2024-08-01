---
order: 2
group:
  title: API服务
  path: /phone-location
---

# 手机归属地查询

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 查询手机归属地
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/common/teladress`
- **请求示例：** `https://gw.yeguo.icu/api/common/teladress?accessKey=***&signature=***&mobile=17730259645`

## 🔢 请求参数

| 参数名 | 必填 | 类型   | 说明        |
| ------ | ---- | ------ | ----------- |
| mobile | 是   | string | 11 位手机号 |

## 💬 响应参数

| 参数名称 | 类型   | 说明       |
| -------- | ------ | ---------- |
| prov     | string | 省         |
| city     | string | 市         |
| name     | string | 运营商     |
| areaCode | number | 区域代码   |
| postCode | number | 邮政编码   |
| cityCode | number | 行政代码   |
| provCode | number | 省行政代码 |

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
      String result = ygApiClient.getPhoneLocation("17730259645");
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
      String result = ygApiClient.getPhoneLocation("17730259645");
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
    "areaCode": "0931",
    "provCode": "620000",
    "city": "兰州市",
    "cityCode": "620100",
    "num": 1778963,
    "name": "电信177卡",
    "postCode": "730000",
    "type": 2,
    "prov": "甘肃"
  },
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
