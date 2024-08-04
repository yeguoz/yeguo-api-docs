---
order: 3
group:
  title: API服务
  path: /site-icp
---

# 备案查询

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 查询域名备案信息
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/site/icp`
- **请求示例：** `https://gw.yeguo.icu/api/site/icp?accessKey=***&signature=***&domain=qq.com`

## 🔢 请求参数

| 参数名 | 必填 |  类型  |    说明    |
| :----: | :--: | :----: | :--------: |
| domain |  是  | string | 查询的域名 |

## 💬 响应参数

|   参数名称   |  类型  |      说明      |
| :----------: | :----: | :------------: |
|     icp      | string | 主办单位备案号 |
| company_name | string |  主办单位名称  |
| company_type | string |  主办单位性质  |
|     date     | string |    审核时间    |
|  site_name   | string |    网站名称    |
|     type     | string |    备案类型    |
|    is_icp    | string |    是否备案    |
|    domain    | string |    备案域名    |

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
      String result = ygApiClient.getSiteIcp("qq.com");
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
      String result = ygApiClient.getSiteIcp("qq.com");
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
    "company_name": "企业",
    "company_type": "企业",
    "type": "粤B2-20090059-5",
    "icp": "www.qq.com",
    "site_name": "2022-09-06 15:51:52",
    "date": "",
    "domain": "qq.com",
    "is_icp": true
  },
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
