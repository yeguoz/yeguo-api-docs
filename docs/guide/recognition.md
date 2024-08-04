---
order: 7
group:
  title: API服务
  path: /qrcode-decode
---

# 看图识物

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 识别图片信息
- **请求方式：** `POST`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/ocr/recognition`

## 🔢 请求参数

|  参数名   | 必填 |      类型      |                                     说明                                      |
| :-------: | :--: | :------------: | :---------------------------------------------------------------------------: |
|   file    |  是  | file \| string | 二维码图片文件, 在线调试文件尽量小过大可能会无响应,，SDK 调用传入文件路径即可 |
| accessKey |  是  |     string     |                          调用凭证，在线调用可不携带                           |
| accessKey |  是  |     string     |                          调用凭证，在线调用可不携带                           |

## 💬 响应参数

| 参数名称 | 类型 | 说明 |
| :------: | :--: | :--: |
|          |      |      |

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
      String result = ygApiClient.recognition("C:\Users\example\Pictures\2.jpg");
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
      String result = ygApiClient.recognition("C:\Users\example\Pictures\2.jpg");
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
      "score": 0.338798,
      "root": "非自然图像-彩色动漫",
      "baike_info": { "baike_url": "", "image_url": "", "description": "" },
      "name": "卡通动漫人物"
    },
    { "score": 0.251864, "root": "商品-绘画", "name": "工笔画" },
    { "score": 0.170952, "root": "商品-绘画", "name": "图画" },
    { "score": 0.084323, "root": "非自然图像-屏幕截图", "name": "屏幕截图" },
    { "score": 0.003856, "root": "非自然图像-图像素材", "name": "动物矢量图" }
  ],
  "msg": "获取成功"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
