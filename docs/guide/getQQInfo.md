---
order: 100
group:
  title: API服务
  path: /qq-info
---

# QQ 信息查询

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: red; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">关闭</div>
- **接口描述：** 根据 QQ 号返回 QQ 昵称，QQ 等级等信息
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/qq/info`
- **请求示例：** `https://gw.yeguo.icu/api/qq/info?accessKey=***&signature=***&qq=13456289`

## 🔢 请求参数

| 参数名 | 必填 | 类型   | 说明    |
| ------ | ---- | ------ | ------- |
| qq     | 是   | number | qq 账号 |

## 💬 响应参数

| 参数名     | 类型   | 说明                            |
| ---------- | ------ | ------------------------------- |
| nickname   | string | QQ 昵称                         |
| user_id    | string | QQ 号                           |
| sex        | string | 性别, male 或 female 或 unknown |
| age        | number | 年龄                            |
| qid        | number | qid ID 身份卡                   |
| level      | number | 等级                            |
| login_days | number | 连续登录天数                    |

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
      String result = ygApiClient.getQQInfo(13456289L);
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
      String result = ygApiClient.getQQInfo(13456289L);
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
    "user_id": 13456289,
    "nickname": "沙沙",
    "sex": "female",
    "age": 43,
    "area": "中国 湖北 武汉"
  },
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
