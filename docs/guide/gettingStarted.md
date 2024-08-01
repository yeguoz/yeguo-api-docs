---
group:
  title: 从这开始
  path: /getting-started
  order: 0
---

# 快速开始

## 📦 安装

### 🍋 Maven

```xml

<dependency>
    <groupId>icu.yeguo.common</groupId>
    <artifactId>yeguo-api-sdk</artifactId>
    <version>0.0.1</version>
</dependency>

```

### 🍇 Gradle

```gradle

implementation 'icu.yeguo.common:yeguo-api-sdk:0.0.1'

```

### 📥 下载 jar 包

maven 中央仓库：<a href="https://repo1.maven.org/maven2/icu/yeguo/common/yeguo-api-sdk" target="\_blank" rel="noopener noreferrer">下载地址</a>，下载`yeguo-api-sdk-x.x.x.jar`即可

## ⚙️ 配置

### 1.前往<a href="https://api.yeguo.icu/person" target="_blank" rel="noopener noreferrer">获取开发者密钥对</a>

### 2.初始化客户端 YGApiClient 对象

- **方式一：主动实例化 YGApiClient 对象**

  ```javascript

  String accessKey = "290F6AA4F0BFE8F584DE60D25E56706F";
  String secretKey = "3F661CAD463534FC5634D095F81AC605";
  YGApiClient ygApiClient = new YGApiClient(accessKey,secretKey);

  ```

- **方式二：通过配置文件注入对象**

  - yml / yaml

  ```yml
  yeguo:
    api:
      access-key: your-accessKey
      secret-key: your-secretKey
  ```

  - properties

  ```properties

  yeguo.api.access-key = your-accessKey
  yeguo.api.secret-key = your-secretKey
  ```

  **注入对象**

  ```javascript

  @Autowired
  private YGApiClient ygApiClient;

  ```

### 3.使用接口

**示例：IP 地址查询**

- **方法一：主动实例化客户端对象**

```javascript

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

- **方法二：通过配置文件注入对象**

```javascript

@Autowired
private YGApiClient ygApiClient;

try {
      String result = ygApiClient.getIpAddress("111.56.36.134");
      System.out.println(result);
    } catch (YGApiException e) {
        log.error("调用API接口异常", e);
      }

```

### 4.响应

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
