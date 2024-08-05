---
nav:
  title: 指南
  order: -1
group:
  title: 指南
  path: /guide
  order: -1
---

# ✨ 简介

🎉 欢迎阅读 **YGAPI 开发者文档**！本文档旨在为您提供
<a href="https://api.yeguo.icu" target="_blank" rel="noopener noreferrer">YGAPI 接口开放平台
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
</a> 的
<a href="https://github.com/ye-guo/yeguo-api-sdk" target="_blank" rel="noopener noreferrer"> YG-API-SDK
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
</a>（以下简称 SDK） 使用指南。通过本指南，您可以快速、稳定、安全地将
<a href="https://github.com/ye-guo/yeguo-api-sdk" target="_blank" rel="noopener noreferrer"> SDK
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
</a> 集成到您的项目中，从而实现高效的开发和调用体验。
<a href="https://api.yeguo.icu" target="_blank" rel="noopener noreferrer">YGAPI 开放平台
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
</a>提供的
<a href="https://github.com/ye-guo/yeguo-api-sdk" target="_blank" rel="noopener noreferrer"> SDK
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
</a>将帮助您简化接口集成流程，提高开发效率，确保安全性，并优化调用体验。我们致力于为您提供便捷、快速的开发工具，以支持您在项目中实现更高效的功能集成。

## 特性

- 🚀**提升开发效率：**
  SDK 提供了一套完善的开发工具和接口，使得您可以在短时间内实现功能集成，显著缩短开发周期。
- 🛠️**简化接口调用：**
  使用 SDK，您可以通过简洁的 API 调用方式访问复杂的接口，减少了与服务器的直接交互，从而降低了开发难度。
- 🔒**增强稳定性和安全性：**
  SDK 通常包含了处理异常、错误和安全性的最佳实践，帮助您在集成过程中保持高稳定性，并确保数据传输的安全性。
- 🌟**一致的用户体验：**
  SDK 提供统一的接口设计和行为规范，确保在不同平台或环境中实现一致的用户体验，使得开发者无需处理各个平台的细节差异。
- 🔄**易于维护和扩展：**
  集成了 SDK 的应用程序更容易进行维护和扩展。SDK 的版本更新和维护由提供方负责，您只需关注业务逻辑的开发。
- 💬**全面的技术支持：**
  大多数 SDK 都附带了详细的文档和技术支持，帮助开发者解决集成过程中遇到的问题，确保项目的顺利推进。

## 问题和反馈

如果在使用过程中发现任何问题、或者有改善建议，欢迎在 GitHub Issues 进行反馈：

- [YG-API-SDK GitHub Issue](https://github.com/ye-guo/yeguo-api-sdk/issues/new/choose)
- [YG-API-Docs GitHub Issue](https://github.com/ye-guo/yeguo-api-docs/issues/new/choose)<br/>

或和我联系：

<div>
  <img data-type="dingtalk" src="https://cdn.jsdelivr.net/gh/ye-guo/Images/images/myWeChat.jpg" width="300" />
</div>
