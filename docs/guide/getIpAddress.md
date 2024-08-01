---
order: 0
group:
  title: API服务
  path: /ip-address
  order: 2
---

# IP 地址查询

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** IP 地址信息查询，支持 IPV4、IPV6 地址
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/ip/ipaddress`
- **请求示例：** `https://gw.yeguo.icu/api/ip/ipaddress?accessKey=***&signature=***&ip=111.56.36.134`

## 🔢 请求参数

| 参数名 | 必填 | 类型   | 说明                |
| ------ | ---- | ------ | ------------------- |
| ip     | 是   | string | 支持 IPV4/IPV6 地址 |

## 💬 响应参数

| 参数名 | 类型   | 说明      |
| ------ | ------ | --------- |
| start  | string | IP 段开始 |
| end    | string | IP 段结束 |
| addr   | object | IP 归属地 |
| disp   | string | 运营商    |

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
      String result = ygApiClient.getIpAddress("111.56.36.134");
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
      String result = ygApiClient.getIpAddress("111.56.36.134");
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
    "start": "111.56.0.0",
    "end": "111.56.255.255",
    "addr": ["内蒙古", "移动(全省通用)"],
    "disp": "内蒙古 移动(全省通用)"
  },
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
