# CryptoLens-web

CryptoLens 是一个集成了AI分析的加密货币数据分析与交易平台，结合历史K线数据、新闻情感分析和去中心化交易功能，为专业交易者提供深度市场洞察和交易执行能力。

---

## 前端项目结构

``` 
CryptoLens-web/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TradingLayout.tsx      # 三栏交易布局
│   │   │   ├── Header.tsx             # 顶部导航
│   │   │   └── Sidebar.tsx            # 侧边栏
│   │   ├── trading/
│   │   │   ├── TradingViewChart.tsx   # TradingView 图表
│   │   │   ├── OrderBook.tsx          # 订单簿组件
│   │   │   ├── TradePanel.tsx         # 交易面板
│   │   │   ├── MarketInfo.tsx         # 市场信息
│   │   │   └── Positions.tsx          # 持仓管理
│   │   ├── markets/
│   │   │   ├── MarketList.tsx         # 市场列表
│   │   │   ├── MarketTable.tsx        # 市场数据表格
│   │   │   └── SearchMarkets.tsx      # 市场搜索
│   │   └── ui/                        # shadcn/ui 组件
│   ├── hooks/
│   │   ├── useCryptoData.ts           # 加密货币数据
│   │   ├── useWebSocket.ts            # WebSocket 连接
│   │   ├── useLocalStorage.ts         # 本地存储
│   │   └── useDebounce.ts             # 防抖 Hook
│   ├── stores/
│   │   ├── useCryptoStore.ts          # 加密货币状态
│   │   ├── useTradingStore.ts         # 交易状态
│   │   └── useUIStore.ts              # UI 状态
│   ├── services/
│   │   ├── cryptoApi.ts               # 加密货币 API
│   │   ├── coinCapApi.ts              # CoinCap API 封装
│   │   └── websocketService.ts        # WebSocket 服务
│   ├── types/
│   │   ├── crypto.ts                  # 加密货币类型定义
│   │   ├── trading.ts                 # 交易相关类型
│   │   └── api.ts                     # API 响应类型
│   ├── lib/
│   │   ├── utils.ts                   # 工具函数
│   │   ├── validators.ts              # Zod 验证模式
│   │   └── constants.ts               # 常量定义
│   ├── pages/
│   │   ├── TradingPage.tsx            # 交易页面
│   │   ├── DashboardPage.tsx          # 仪表板
│   │   ├── PortfolioPage.tsx          # 资产组合
│   │   └── SettingsPage.tsx           # 设置页面
│   └── test/
│       └── components/                # 组件测试
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 技术栈

Vite + React + TypeScript + shadcn/ui + Tailwind CSS + lightweight-charts
React Router DOM + Axios

---

## 设计参考

    主要参考: dYdX - 专业交易界面、三栏布局、高数据密度

    次要参考: Jupiter Perps - 简洁交易流程

    创新元素: Asterdex - 交互创新

https://jup.ag/perps

https://dydx.trade/trade/SOL-USD

https://www.asterdex.com/en/futures/v1/SOLUSDT
