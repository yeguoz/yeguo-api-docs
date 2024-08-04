---
order: 1
group:
  title: API服务
  path: /city-weather
---

# 天气信息查询

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 查询某地区天气
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/weather`
- **请求示例：** `https://gw.yeguo.icu/api/weather?accessKey=***&signature=***&city_name=洛阳市`

## 🔢 请求参数

|  参数名   | 必填 |  类型  | 说明 |
| :-------: | :--: | :----: | :--: |
| city_name |  是  | string |  市  |

## 💬 响应参数

|      参数名称       |  类型  |         说明         |
| :-----------------: | :----: | :------------------: |
|      city_name      | string |         地区         |
|  current_condition  | string |       当前天气       |
| current_temperature | number |     当前天气温度     |
|    current_time     | number |     数据更新时间     |
|        tips         | string |     天气温馨提示     |
|    forecast_list    | object | 未来 16 天，天气预测 |

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
      String result = ygApiClient.getCityWeather("洛阳市");
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
      String result = ygApiClient.getCityWeather("洛阳市");
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
    "alert": null,
    "aqi": 52,
    "city_name": "洛阳",
    "current_condition": "多云",
    "current_temperature": 27,
    "current_time": 1718678145,
    "dat_condition": "多云",
    "dat_high_temperature": 35,
    "dat_low_temperature": 26,
    "dat_weather_icon_id": "1",
    "day_condition": "多云",
    "download_icon": 1,
    "forecast_list": [
      {
        "condition": "晴转多云",
        "date": "2024-06-17",
        "high_temperature": "34",
        "low_temperature": "22",
        "weather_icon_id": "0",
        "wind_direction": "东南风",
        "wind_level": "1"
      },
      {
        "condition": "多云",
        "date": "2024-06-18",
        "high_temperature": "32",
        "low_temperature": "24",
        "weather_icon_id": "1",
        "wind_direction": "东南风",
        "wind_level": "1"
      },
      {
        "condition": "晴转多云",
        "date": "2024-06-19",
        "high_temperature": "34",
        "low_temperature": "24",
        "weather_icon_id": "0",
        "wind_direction": "东风",
        "wind_level": "1"
      },
      {
        "condition": "多云转阴",
        "date": "2024-06-20",
        "high_temperature": "35",
        "low_temperature": "26",
        "weather_icon_id": "1",
        "wind_direction": "东风",
        "wind_level": "1"
      },
      {
        "condition": "小雨转阴",
        "date": "2024-06-21",
        "high_temperature": "35",
        "low_temperature": "25",
        "weather_icon_id": "7",
        "wind_direction": "东风",
        "wind_level": "1"
      },
      {
        "condition": "晴转多云",
        "date": "2024-06-22",
        "high_temperature": "39",
        "low_temperature": "23",
        "weather_icon_id": "0",
        "wind_direction": "西北风",
        "wind_level": "3"
      },
      {
        "condition": "多云",
        "date": "2024-06-23",
        "high_temperature": "35",
        "low_temperature": "22",
        "weather_icon_id": "1",
        "wind_direction": "西北风",
        "wind_level": "3"
      },
      {
        "condition": "多云转晴",
        "date": "2024-06-24",
        "high_temperature": "35",
        "low_temperature": "22",
        "weather_icon_id": "1",
        "wind_direction": "东南风",
        "wind_level": "1"
      },
      {
        "condition": "阴",
        "date": "2024-06-25",
        "high_temperature": "38",
        "low_temperature": "24",
        "weather_icon_id": "2",
        "wind_direction": "南风",
        "wind_level": "3"
      },
      {
        "condition": "小雨",
        "date": "2024-06-26",
        "high_temperature": "30",
        "low_temperature": "20",
        "weather_icon_id": "7",
        "wind_direction": "东北风",
        "wind_level": "1"
      },
      {
        "condition": "小雨",
        "date": "2024-06-27",
        "high_temperature": "28",
        "low_temperature": "21",
        "weather_icon_id": "7",
        "wind_direction": "东风",
        "wind_level": "1"
      },
      {
        "condition": "阴转晴",
        "date": "2024-06-28",
        "high_temperature": "35",
        "low_temperature": "18",
        "weather_icon_id": "2",
        "wind_direction": "西风",
        "wind_level": "1"
      },
      {
        "condition": "晴",
        "date": "2024-06-29",
        "high_temperature": "35",
        "low_temperature": "22",
        "weather_icon_id": "0",
        "wind_direction": "西北风",
        "wind_level": "1"
      },
      {
        "condition": "多云转晴",
        "date": "2024-06-30",
        "high_temperature": "39",
        "low_temperature": "26",
        "weather_icon_id": "1",
        "wind_direction": "东北风",
        "wind_level": "2"
      },
      {
        "condition": "阴转小雨",
        "date": "2024-07-01",
        "high_temperature": "35",
        "low_temperature": "25",
        "weather_icon_id": "2",
        "wind_direction": "东南风",
        "wind_level": "2"
      },
      {
        "condition": "小雨",
        "date": "2024-07-02",
        "high_temperature": "33",
        "low_temperature": "23",
        "weather_icon_id": "7",
        "wind_direction": "东风",
        "wind_level": "2"
      }
    ],
    "high_temperature": 32,
    "hourly_forecast": [
      {
        "condition": "多云",
        "hour": "9",
        "temperature": "26",
        "weather_icon_id": "1",
        "wind_direction": "SW",
        "wind_level": "10.12"
      },
      {
        "condition": "阴",
        "hour": "10",
        "temperature": "28",
        "weather_icon_id": "2",
        "wind_direction": "SE",
        "wind_level": "9.29"
      },
      {
        "condition": "多云",
        "hour": "11",
        "temperature": "29",
        "weather_icon_id": "1",
        "wind_direction": "SE",
        "wind_level": "11.09"
      },
      {
        "condition": "多云",
        "hour": "12",
        "temperature": "30",
        "weather_icon_id": "1",
        "wind_direction": "SE",
        "wind_level": "13.00"
      },
      {
        "condition": "多云",
        "hour": "13",
        "temperature": "31",
        "weather_icon_id": "1",
        "wind_direction": "SE",
        "wind_level": "13.00"
      },
      {
        "condition": "多云",
        "hour": "14",
        "temperature": "32",
        "weather_icon_id": "1",
        "wind_direction": "S",
        "wind_level": "13.00"
      },
      {
        "condition": "多云",
        "hour": "15",
        "temperature": "32",
        "weather_icon_id": "1",
        "wind_direction": "S",
        "wind_level": "13.00"
      },
      {
        "condition": "多云",
        "hour": "16",
        "temperature": "32",
        "weather_icon_id": "1",
        "wind_direction": "S",
        "wind_level": "11.09"
      },
      {
        "condition": "晴",
        "hour": "17",
        "temperature": "32",
        "weather_icon_id": "0",
        "wind_direction": "S",
        "wind_level": "11.09"
      },
      {
        "condition": "晴",
        "hour": "18",
        "temperature": "31",
        "weather_icon_id": "0",
        "wind_direction": "SE",
        "wind_level": "11.09"
      },
      {
        "condition": "晴",
        "hour": "19",
        "temperature": "30",
        "weather_icon_id": "0",
        "wind_direction": "SE",
        "wind_level": "13.00"
      },
      {
        "condition": "晴",
        "hour": "20",
        "temperature": "29",
        "weather_icon_id": "30",
        "wind_direction": "SE",
        "wind_level": "13.00"
      },
      {
        "condition": "多云",
        "hour": "21",
        "temperature": "28",
        "weather_icon_id": "31",
        "wind_direction": "SE",
        "wind_level": "11.09"
      },
      {
        "condition": "多云",
        "hour": "22",
        "temperature": "28",
        "weather_icon_id": "31",
        "wind_direction": "SE",
        "wind_level": "11.09"
      },
      {
        "condition": "多云",
        "hour": "23",
        "temperature": "27",
        "weather_icon_id": "31",
        "wind_direction": "SE",
        "wind_level": "9.29"
      },
      {
        "condition": "多云",
        "hour": "0",
        "temperature": "27",
        "weather_icon_id": "31",
        "wind_direction": "SE",
        "wind_level": "7.42"
      },
      {
        "condition": "多云",
        "hour": "1",
        "temperature": "26",
        "weather_icon_id": "31",
        "wind_direction": "SE",
        "wind_level": "7.42"
      },
      {
        "condition": "多云",
        "hour": "2",
        "temperature": "26",
        "weather_icon_id": "31",
        "wind_direction": "SE",
        "wind_level": "7.42"
      },
      {
        "condition": "多云",
        "hour": "3",
        "temperature": "25",
        "weather_icon_id": "31",
        "wind_direction": "S",
        "wind_level": "5.62"
      },
      {
        "condition": "多云",
        "hour": "4",
        "temperature": "25",
        "weather_icon_id": "31",
        "wind_direction": "S",
        "wind_level": "5.62"
      },
      {
        "condition": "多云",
        "hour": "5",
        "temperature": "24",
        "weather_icon_id": "31",
        "wind_direction": "S",
        "wind_level": "5.62"
      },
      {
        "condition": "多云",
        "hour": "6",
        "temperature": "25",
        "weather_icon_id": "1",
        "wind_direction": "S",
        "wind_level": "5.62"
      },
      {
        "condition": "多云",
        "hour": "7",
        "temperature": "26",
        "weather_icon_id": "1",
        "wind_direction": "SE",
        "wind_level": "5.62"
      },
      {
        "condition": "多云",
        "hour": "8",
        "temperature": "24",
        "weather_icon_id": "1",
        "wind_direction": "SE",
        "wind_level": "5.62"
      },
      {
        "condition": "多云",
        "hour": "9",
        "temperature": "26",
        "weather_icon_id": "1",
        "wind_direction": "E",
        "wind_level": "7.42"
      }
    ],
    "low_temperature": 24,
    "moji_city_id": 394,
    "night_condition": "多云",
    "origin_data": [],
    "quality_level": "良",
    "tips": "略微偏热，注意衣物变化。",
    "tomorrow_aqi": 135,
    "tomorrow_condition": "晴转多云",
    "tomorrow_high_temperature": 34,
    "tomorrow_low_temperature": 24,
    "tomorrow_quality_level": "轻度",
    "tomorrow_weather_icon_id": "0",
    "update_time": "2024-06-18 10:06:03",
    "weather_icon_id": "1",
    "wind_direction": "西风",
    "wind_level": 2
  },
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
