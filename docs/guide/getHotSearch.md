---
order: 10
group:
  title: API服务
  path: /qrcode-decode
---

# 热搜榜

## ℹ️ 接口信息

- **接口状态：** <div style="display: inline-block; background-color: #bad80a; color: #fff; padding: 2px; border-radius: 5px; width: 40px; height: 20px; text-align: center; line-height: 20px;">正常</div>
- **接口描述：** 全网热搜、新闻、资讯
- **请求方式：** `GET`
- **返回格式：** `JSON`
- **接口地址：** `https://gw.yeguo.icu/api/common/fetchHotSearchBoard`
- **请求示例：** `https://gw.yeguo.icu/api/common/fetchHotSearchBoard?accessKey=***&signature=***&type=bilibili`

## 🔢 请求参数

| 参数名 | 必填 |  类型  |                                                                        说明                                                                         |
| :----: | :--: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
|  type  |  是  | string | 平台: [baidu]百度；[zhihu]知乎；[weixin]微信；[bilibili]哔哩哔哩；[douyin]抖音；[news]腾讯新闻；[lishi]历史上的今天；[toutiao]今日头条；[weibo]微博 |

## 💬 响应参数

| 参数名称 |  类型  |  说明  |
| :------: | :----: | :----: |
|  title   | string |  标题  |
|  index   | number |  索引  |
| hotValue | string | 热度值 |
|   link   | string |  链接  |

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
      String result = ygApiClient.getHotSearch("bilibili");
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
      String result = ygApiClient.getHotSearch("bilibili");
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
      "index": "1",
      "title": "真实的巴黎奥运会开幕有多混乱？非常多人提前退场",
      "hotValue": "499.3万",
      "link": "https://www.bilibili.com/video/av1856413383/"
    },
    {
      "index": "2",
      "title": "武家坡之《有难同当》",
      "hotValue": "772.2万",
      "link": "https://www.bilibili.com/video/av1656281795/"
    },
    {
      "index": "3",
      "title": "《崩坏：星穹铁道》千星纪游PV：「天干剑燥，小心火炉」",
      "hotValue": "305.7万",
      "link": "https://www.bilibili.com/video/av1456462201/"
    },
    {
      "index": "4",
      "title": "够了！住手！你们不要再打了！！",
      "hotValue": "272.8万",
      "link": "https://www.bilibili.com/video/av1806348298/"
    },
    {
      "index": "5",
      "title": "常在雨天走，如何不湿鞋？",
      "hotValue": "237.9万",
      "link": "https://www.bilibili.com/video/av1706444402/"
    },
    {
      "index": "6",
      "title": "如何在冈比亚复兴沙俄？【神奇组织21】",
      "hotValue": "243.1万",
      "link": "https://www.bilibili.com/video/av1156254353/"
    },
    {
      "index": "7",
      "title": "( 重要的从来都不是电影，而是一起看电影的你 )",
      "hotValue": "152.5万",
      "link": "https://www.bilibili.com/video/av1456405502/"
    },
    {
      "index": "8",
      "title": "VR 我是猫",
      "hotValue": "482.5万",
      "link": "https://www.bilibili.com/video/av1406359839/"
    },
    {
      "index": "9",
      "title": "究极无敌难狗生存!当你开局只有「3滴血」!!?丨MITE打破一切 第一期",
      "hotValue": "117.1万",
      "link": "https://www.bilibili.com/video/av1906454676/"
    },
    {
      "index": "10",
      "title": "都什么年代，谁还打传统红孩儿？！！",
      "hotValue": "146.0万",
      "link": "https://www.bilibili.com/video/av1506493828/"
    },
    {
      "index": "11",
      "title": "因为太过良心而倒闭的游戏，竟然堂堂复活【卡布西游】",
      "hotValue": "157.0万",
      "link": "https://www.bilibili.com/video/av1256362705/"
    },
    {
      "index": "12",
      "title": "《双》赢",
      "hotValue": "613.4万",
      "link": "https://www.bilibili.com/video/av1706360342/"
    },
    {
      "index": "13",
      "title": "《抬您上泰山》",
      "hotValue": "168.0万",
      "link": "https://www.bilibili.com/video/av1356452135/"
    },
    {
      "index": "14",
      "title": "设 身 处 地 9.0",
      "hotValue": "184.2万",
      "link": "https://www.bilibili.com/video/av1356373214/"
    },
    {
      "index": "15",
      "title": "【MrBeast公益】我们让1000位盲人重见光明",
      "hotValue": "100.4万",
      "link": "https://www.bilibili.com/video/av1006333375/"
    },
    {
      "index": "16",
      "title": "挑战在英国只说中文！和老外疯狂砍价能否成功？",
      "hotValue": "191.4万",
      "link": "https://www.bilibili.com/video/av1006251339/"
    },
    {
      "index": "17",
      "title": "呆毛王：给大家整个活！【定格动画】",
      "hotValue": "89.7万",
      "link": "https://www.bilibili.com/video/av1856339946/"
    },
    {
      "index": "18",
      "title": "16年了，北京开幕式为什么还没被超越？万字长文，最全分析",
      "hotValue": "116.1万",
      "link": "https://www.bilibili.com/video/av1256345391/"
    },
    {
      "index": "19",
      "title": "这只小狗已经23岁了！孩童时看的动画如今再看，好像真的不一样！",
      "hotValue": "191.6万",
      "link": "https://www.bilibili.com/video/av1206499132/"
    },
    {
      "index": "20",
      "title": "啊？原神编剧透了未来三年的剧情大纲？&一个妮露厨对谣言的愤怒【原神文化考据】",
      "hotValue": "79.6万",
      "link": "https://www.bilibili.com/video/av1606264358/"
    },
    {
      "index": "21",
      "title": "喂奶基操 基操勿六",
      "hotValue": "168.4万",
      "link": "https://www.bilibili.com/video/av1106402237/"
    },
    {
      "index": "22",
      "title": "地球太热啦！！！！！",
      "hotValue": "296.4万",
      "link": "https://www.bilibili.com/video/av1606317889/"
    },
    {
      "index": "23",
      "title": "小头粗脖牛舔头 韩男为何头和脖子要连一起",
      "hotValue": "183.1万",
      "link": "https://www.bilibili.com/video/av1406461048/"
    },
    {
      "index": "24",
      "title": "国产游戏：你见过我的全盛时期吗？",
      "hotValue": "180.2万",
      "link": "https://www.bilibili.com/video/av1656359708/"
    },
    {
      "index": "25",
      "title": "为什么提到新疆，后面总会跟着一个生产建设兵团？",
      "hotValue": "135.6万",
      "link": "https://www.bilibili.com/video/av1756399507/"
    },
    {
      "index": "26",
      "title": "《北海觉醒》重启老婆来了，你是否似曾相识啊！【1】",
      "hotValue": "366.4万",
      "link": "https://www.bilibili.com/video/av1356363230/"
    },
    {
      "index": "27",
      "title": "探秘全球最硬核的民宿！住导弹发射井里！是什么体验？",
      "hotValue": "192.2万",
      "link": "https://www.bilibili.com/video/av1256250424/"
    },
    {
      "index": "28",
      "title": "肥宅：曾经的心掏空给你！现在我还玩火影！",
      "hotValue": "201.7万",
      "link": "https://www.bilibili.com/video/av1106284186/"
    },
    {
      "index": "29",
      "title": "第47期四菜一汤教程：粉丝蒸龙虾，红烧肉，葱姜炝蟹，清蒸金鲳鱼，教你选食材，教你切配，详细烹煮过程，学起来很方便。",
      "hotValue": "90.8万",
      "link": "https://www.bilibili.com/video/av1256399483/"
    },
    {
      "index": "30",
      "title": "这下大小姐睡不着了",
      "hotValue": "212.9万",
      "link": "https://www.bilibili.com/video/av1256489893/"
    },
    {
      "index": "31",
      "title": "当假装长期工的暑假工开学时",
      "hotValue": "178.8万",
      "link": "https://www.bilibili.com/video/av1056375679/"
    },
    {
      "index": "32",
      "title": "《班味》",
      "hotValue": "107.5万",
      "link": "https://www.bilibili.com/video/av1156420039/"
    },
    {
      "index": "33",
      "title": "脱缰凯的反击",
      "hotValue": "148.2万",
      "link": "https://www.bilibili.com/video/av1056470956/"
    },
    {
      "index": "34",
      "title": "【明日方舟 中文字幕】佩佩角色PV [Mystic Light Quest]【2024夏活前瞻】",
      "hotValue": "111.3万",
      "link": "https://www.bilibili.com/video/av1206307594/"
    },
    {
      "index": "35",
      "title": "疯狂的蜘蛛侠④",
      "hotValue": "97.5万",
      "link": "https://www.bilibili.com/video/av1756350140/"
    },
    {
      "index": "36",
      "title": "她是我见过最倒霉的世界冠军，她却说人生不顺才精彩",
      "hotValue": "147.2万",
      "link": "https://www.bilibili.com/video/av1906480284/"
    },
    {
      "index": "37",
      "title": "Fate/Grand Order 简中版八周年专属PV——八方异闻卷",
      "hotValue": "515.4万",
      "link": "https://www.bilibili.com/video/av1206381587/"
    },
    {
      "index": "38",
      "title": "太好玩辣！！！",
      "hotValue": "353.3万",
      "link": "https://www.bilibili.com/video/av1056441892/"
    },
    {
      "index": "39",
      "title": "这届革命老区群众，早就忍不了巴黎奥运了......【毒舌的南瓜】",
      "hotValue": "197.7万",
      "link": "https://www.bilibili.com/video/av1356306857/"
    },
    {
      "index": "40",
      "title": "这里至今流着20万中国女性同胞的血和泪，擦不尽！真的擦不尽！",
      "hotValue": "52.0万",
      "link": "https://www.bilibili.com/video/av1356396632/"
    },
    {
      "index": "41",
      "title": "接他们过来 我就后悔了 因为我什么都没有准备好",
      "hotValue": "102.1万",
      "link": "https://www.bilibili.com/video/av1356290198/"
    },
    {
      "index": "42",
      "title": "“但珍珠不懂为何与主人见面越来越少”",
      "hotValue": "110.5万",
      "link": "https://www.bilibili.com/video/av1706332847/"
    },
    {
      "index": "43",
      "title": "【闹腾男孩KC】现在的学生作业题这样的吗？",
      "hotValue": "175.6万",
      "link": "https://www.bilibili.com/video/av1206455695/"
    },
    {
      "index": "44",
      "title": "别被骗了！黑河早市根本没有外国人！",
      "hotValue": "393.5万",
      "link": "https://www.bilibili.com/video/av1406279854/"
    },
    {
      "index": "45",
      "title": "终于明白这一刻的含金量！",
      "hotValue": "112.3万",
      "link": "https://www.bilibili.com/video/av1406422102/"
    },
    {
      "index": "46",
      "title": "⚡因 为 他 道 德 绑 架⚡",
      "hotValue": "149.9万",
      "link": "https://www.bilibili.com/video/av1856304770/"
    },
    {
      "index": "47",
      "title": "《我们被卷入了一场赛博大瓜》",
      "hotValue": "105.9万",
      "link": "https://www.bilibili.com/video/av1756259886/"
    },
    {
      "index": "48",
      "title": "小小青梅上指尖，巧手翻作玉菊兰",
      "hotValue": "148.3万",
      "link": "https://www.bilibili.com/video/av1006421372/"
    },
    {
      "index": "49",
      "title": "Michael Jeeeeeeep",
      "hotValue": "122.2万",
      "link": "https://www.bilibili.com/video/av1456454798/"
    },
    {
      "index": "50",
      "title": "长腿白丝猫娘？小时候看过却记不起名字的动漫",
      "hotValue": "111.8万",
      "link": "https://www.bilibili.com/video/av1906271635/"
    },
    {
      "index": "51",
      "title": "《绝区零》朱鸢EP丨一颗方糖悬滞的时间",
      "hotValue": "384.4万",
      "link": "https://www.bilibili.com/video/av1206303794/"
    },
    {
      "index": "52",
      "title": "这波操作控制也太强了吧",
      "hotValue": "78.5万",
      "link": "https://www.bilibili.com/video/av1156285037/"
    },
    {
      "index": "53",
      "title": "男生必读，女生勿进！《红楼梦》正确的打开方式",
      "hotValue": "98.5万",
      "link": "https://www.bilibili.com/video/av1306259381/"
    },
    {
      "index": "54",
      "title": "-  哈哈哈哈哈 鱼被钓起来之前",
      "hotValue": "131.0万",
      "link": "https://www.bilibili.com/video/av1606437058/"
    },
    {
      "index": "55",
      "title": "你哪年冠军？历代日语年度冠军单曲汇总1989-2023",
      "hotValue": "43.7万",
      "link": "https://www.bilibili.com/video/av1756497808/"
    },
    {
      "index": "56",
      "title": "疾速追杀模拟器？敢抢我的鞋，那我就干掉全城的黑帮！【愤怒的大脚】",
      "hotValue": "95.7万",
      "link": "https://www.bilibili.com/video/av1306344461/"
    },
    {
      "index": "57",
      "title": "⚡星核猎手好像要完蛋了⚡",
      "hotValue": "82.7万",
      "link": "https://www.bilibili.com/video/av1106286238/"
    },
    {
      "index": "58",
      "title": "《明日方舟》2024「夏日嘉年华」限时活动宣传PV",
      "hotValue": "116.4万",
      "link": "https://www.bilibili.com/video/av1556455349/"
    },
    {
      "index": "59",
      "title": "你这些东西真吓人啊",
      "hotValue": "463.5万",
      "link": "https://www.bilibili.com/video/av1256430791/"
    },
    {
      "index": "60",
      "title": "工作就是努力做好每一件小事",
      "hotValue": "115.9万",
      "link": "https://www.bilibili.com/video/av1156336537/"
    },
    {
      "index": "61",
      "title": "这天气太离谱了，大家暴风雨打伞等盒饭一售而空！做了清蒸金鲳鱼，红烧牛肉，烤奥尔良鸡腿，千层花卷，再配脉动可乐",
      "hotValue": "325.0万",
      "link": "https://www.bilibili.com/video/av1506318301/"
    },
    {
      "index": "62",
      "title": "你成为了雷杰多的人间体 来到原生之初去教育土著P1",
      "hotValue": "133.8万",
      "link": "https://www.bilibili.com/video/av1606312476/"
    },
    {
      "index": "63",
      "title": "芈月不可战胜的，玩蒙恬我就爱禁芈月",
      "hotValue": "135.7万",
      "link": "https://www.bilibili.com/video/av1806408170/"
    },
    {
      "index": "64",
      "title": "《求求了让我装一把》",
      "hotValue": "129.1万",
      "link": "https://www.bilibili.com/video/av1456256989/"
    },
    {
      "index": "65",
      "title": "《做人要善》",
      "hotValue": "140.6万",
      "link": "https://www.bilibili.com/video/av1956260491/"
    },
    {
      "index": "66",
      "title": "【比利】⚡店长~❤️你能忍受星徽骑士的洗脑么⚡",
      "hotValue": "46.0万",
      "link": "https://www.bilibili.com/video/av1956273130/"
    },
    {
      "index": "67",
      "title": "穿越柯南，获得每个人的能力",
      "hotValue": "167.5万",
      "link": "https://www.bilibili.com/video/av1956329533/"
    },
    {
      "index": "68",
      "title": "将就吃 烤腰片",
      "hotValue": "165.2万",
      "link": "https://www.bilibili.com/video/av1206379912/"
    },
    {
      "index": "69",
      "title": "【鬼谷说】肺的演化（其一）：一息生两仪 两仪生万物",
      "hotValue": "67.4万",
      "link": "https://www.bilibili.com/video/av1206352805/"
    },
    {
      "index": "70",
      "title": "小时候以为爷爷太傻，长大后才发现是自己太傻",
      "hotValue": "89.4万",
      "link": "https://www.bilibili.com/video/av1206394181/"
    },
    {
      "index": "71",
      "title": "【时代少年团】「叁重楼」L3——「楼非楼」人物概念影像《序章》（下篇）",
      "hotValue": "67.8万",
      "link": "https://www.bilibili.com/video/av1506435860/"
    },
    {
      "index": "72",
      "title": "万人血书之《老虎遇见猫薄荷》，来了！",
      "hotValue": "178.6万",
      "link": "https://www.bilibili.com/video/av1306452438/"
    },
    {
      "index": "73",
      "title": "最终还是成功帮兄弟脱单了",
      "hotValue": "162.9万",
      "link": "https://www.bilibili.com/video/av1006496343/"
    },
    {
      "index": "74",
      "title": "还是很听话的",
      "hotValue": "171.8万",
      "link": "https://www.bilibili.com/video/av1156262445/"
    },
    {
      "index": "75",
      "title": "假面骑士VS铠甲勇士！民间自制超燃对战！",
      "hotValue": "65.8万",
      "link": "https://www.bilibili.com/video/av1206265178/"
    },
    {
      "index": "76",
      "title": "《如果你是胡桃，也好》",
      "hotValue": "95.9万",
      "link": "https://www.bilibili.com/video/av1506402471/"
    },
    {
      "index": "77",
      "title": "当我打开了七年前录给自己的视频...",
      "hotValue": "113.5万",
      "link": "https://www.bilibili.com/video/av1106475552/"
    },
    {
      "index": "78",
      "title": "为什么意大利人讨厌菠萝披萨？【食录】",
      "hotValue": "230.3万",
      "link": "https://www.bilibili.com/video/av1556322458/"
    },
    {
      "index": "79",
      "title": "“听说看见七彩祥云的人都会很幸运”",
      "hotValue": "54.1万",
      "link": "https://www.bilibili.com/video/av1856455769/"
    },
    {
      "index": "80",
      "title": "《北京宣言》将成为历史书上最耀眼的一篇",
      "hotValue": "156.7万",
      "link": "https://www.bilibili.com/video/av1456290870/"
    },
    {
      "index": "81",
      "title": "评分8.7！他在玩一种很新的活！亚刻奥特曼开播吐槽！",
      "hotValue": "93.3万",
      "link": "https://www.bilibili.com/video/av1006437916/"
    },
    {
      "index": "82",
      "title": "压嘴兽",
      "hotValue": "85.8万",
      "link": "https://www.bilibili.com/video/av1556280479/"
    },
    {
      "index": "83",
      "title": "【干货】如何手搓黑洞",
      "hotValue": "104.2万",
      "link": "https://www.bilibili.com/video/av1556390456/"
    },
    {
      "index": "84",
      "title": "服了...突然知道男友的奇怪XP...",
      "hotValue": "121.9万",
      "link": "https://www.bilibili.com/video/av1956326468/"
    },
    {
      "index": "85",
      "title": "曾经无法理解爷爷奶奶她们那一辈人为何如此丢不下那两亩累死累活才种出二两银的土地～#开荒种地 #60年代",
      "hotValue": "75.7万",
      "link": "https://www.bilibili.com/video/av1656261582/"
    },
    {
      "index": "86",
      "title": "【绝区零】朱鸢：你继续说，我在听",
      "hotValue": "109.6万",
      "link": "https://www.bilibili.com/video/av1806287212/"
    },
    {
      "index": "87",
      "title": "夏侯惇：猛虎下山，势不可挡！",
      "hotValue": "161.6万",
      "link": "https://www.bilibili.com/video/av1756272022/"
    },
    {
      "index": "88",
      "title": "【CS2】苍蝇头：中间不动，两边打薄",
      "hotValue": "164.9万",
      "link": "https://www.bilibili.com/video/av1556251014/"
    },
    {
      "index": "89",
      "title": "（这也能解说？！）还能这样进攻？！天外飞仙！热血陀螺大赛【7】",
      "hotValue": "61.6万",
      "link": "https://www.bilibili.com/video/av1306473542/"
    },
    {
      "index": "90",
      "title": "“被爱的人会陪你很久很久”",
      "hotValue": "87.1万",
      "link": "https://www.bilibili.com/video/av1106330051/"
    },
    {
      "index": "91",
      "title": "枪击、拖拽、10米自由落体大挑战，暴力测试深蓝能抗住吗？",
      "hotValue": "301.6万",
      "link": "https://www.bilibili.com/video/av1606368219/"
    },
    {
      "index": "92",
      "title": "王炸！当磊哥现场参加审判策划活动！针锋相对，场面一度失去控制！（整活）",
      "hotValue": "98.6万",
      "link": "https://www.bilibili.com/video/av1556346267/"
    },
    {
      "index": "93",
      "title": "city不city啊？这果冻吃完不得全家上太空！！",
      "hotValue": "227.6万",
      "link": "https://www.bilibili.com/video/av1656269397/"
    },
    {
      "index": "94",
      "title": "三 体 顾 茅 庐",
      "hotValue": "175.4万",
      "link": "https://www.bilibili.com/video/av1506303130/"
    },
    {
      "index": "95",
      "title": "【杜比视界】从阿勒泰到魔鬼城，俯瞰不一样的新疆！",
      "hotValue": "68.4万",
      "link": "https://www.bilibili.com/video/av1306367060/"
    },
    {
      "index": "96",
      "title": "24岁，我圆了父母的首都梦！",
      "hotValue": "49.4万",
      "link": "https://www.bilibili.com/video/av1456330254/"
    },
    {
      "index": "97",
      "title": "坐飞机头等舱的人都是什么职业？",
      "hotValue": "71.7万",
      "link": "https://www.bilibili.com/video/av1006481834/"
    },
    {
      "index": "98",
      "title": "你的英语水平",
      "hotValue": "246.3万",
      "link": "https://www.bilibili.com/video/av1256462885/"
    },
    {
      "index": "99",
      "title": "关于闺蜜教我如何摆脱“魅魔”这件事",
      "hotValue": "79.4万",
      "link": "https://www.bilibili.com/video/av1206389333/"
    },
    {
      "index": "100",
      "title": "惹到这几种人，你算是踢到自己的关才板辣！！",
      "hotValue": "34.8万",
      "link": "https://www.bilibili.com/video/av1656447242/"
    }
  ],
  "msg": "success"
}
```

## 🐞 提供 bug 反馈或建议

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)
