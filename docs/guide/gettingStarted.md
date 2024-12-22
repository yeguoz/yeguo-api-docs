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
    <version>1.0.0</version>
</dependency>

```

### 🍇 Gradle

```gradle

implementation 'icu.yeguo.common:yeguo-api-sdk:1.0.0'

```

### 📥 下载 jar 包

maven 中央仓库：<a href="https://repo1.maven.org/maven2/icu/yeguo/common/yeguo-api-sdk" target="\_blank" rel="noopener noreferrer">下载地址
<svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          width="15"
          height="15"
        >
<path
            fill="currentColor"
            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          ></path>
<polygon
            fill="currentColor"
            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
          ></polygon>
</svg>
</a>，下载`yeguo-api-sdk-x.x.x.jar`即可

## ⚙️ 配置

### 1.前往<a href="https://api.yeguo.icu/person" target="_blank" rel="noopener noreferrer">获取开发者凭证</a>

### 2.请求示例

```javascript
// 请求接口地址
String url = "https://gw.yeguo.icu/api/app/horoscope";
String accessKey = "your-access-key";
String secretKey = "your-secret-key";
// 获取签名
String signature = ApiUtil.sign(url, Common.GET, accessKey, secretKey);
Map<String, Object> headers = new HashMap<>();
Map<String, Object> paramMap = new HashMap<>();
// 请求头
headers.put(Common.X_ACCESS_KEY, accessKey);
headers.put(Common.X_TIMESTAMP, ApiUtil.timestamp);
headers.put(Common.X_NONCE, ApiUtil.nonce);
headers.put(Common.X_SIGNATURE, sign);
// 请求参数
paramMap.put("type", "taurus");
paramMap.put("time", "nextday");
// 请求
HttpRequest.get(url, headers, paramMap);

```

### 4.响应

```json
{
  "success": true,
  "data": {
    "type": "明日运势",
    "name": "taurus",
    "title": "金牛座",
    "time": "12月23日",
    "todo": {
      "yi": "保持理性思维",
      "ji": "办健身卡"
    },
    "fortune": {
      "all": 4,
      "love": 4,
      "work": 5,
      "money": 4,
      "health": 4
    },
    "shortcomment": "充满诱惑和干扰",
    "fortunetext": {
      "all": "你的运势整体来说还算平稳，但周围却充满了各种诱惑和干扰。你可能会发现自己很容易被这些诱惑所吸引，导致自己偏离了原本的目标和计划。因此，建议你要提高理性思维，保持清醒的头脑，切勿被牵着鼻子走。你需要更加坚定自己的信念和决心，不要轻易被外界的诱惑所动摇。要学会权衡利弊，做出明智的选择和决策。同时，也要保持耐心和毅力，不要因为一时的困难而放弃自己的目标。生活方面，建议你可以安排一些与自我提升相关的活动，比如学习新技能、参加培训课程或者进行身体锻炼等。这些活动能够帮助你增强自己的实力和竞争力，更好地应对未来的挑战。同时，也要记得保持健康的生活习惯和饮食规律。",
      "love": "单身的你，感情运势尚可，但如果总是宅在家中，那么机会可能会与你擦肩而过。建议你多出去走走，扩大自己的社交圈子，增加认识新人的机会。已有伴的你，可以尝试不同的打扮风格，给伴侣带来一些新鲜感。不要总是穿着同样的衣服或者保持同样的发型，而是要勇于尝试新的风格，展现出自己的魅力和个性。",
      "work": "你的事业学业运势相当不错，能够保持积极的进步姿态。在工作或学习中，你能够充分发挥自己的实力和潜力，不断追求进步和提升。你的努力和付出也会得到相应的回报和认可，为你未来的发展打下坚实的基础。",
      "money": "虽然主职收入稳定，但想要获得更多的进账，可以考虑通过兼职来增加收入。你可以根据自己的兴趣和能力，寻找一些合适的兼职机会，比如线上教育、翻译、写作等。这些兼职不仅能让你的收入更加多元化，还能提升你的技能和经验。",
      "health": "需要注意增强抵抗力。随着气温的变化，感冒、咳嗽等常见疾病容易找上门。为了预防这些疾病，你需要保持良好的生活习惯，如勤洗手、戴口罩、保持室内通风等。此外，均衡的饮食和适量的运动也能帮助你增强免疫力，抵抗病毒的侵袭。"
    },
    "luckynumber": "7",
    "luckycolor": "粉",
    "luckyconstellation": "射手座",
    "index": {
      "all": "77%",
      "love": "73%",
      "work": "86%",
      "money": "76%",
      "health": "78%"
    }
  }
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
