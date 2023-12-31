import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '知识清单',
    items: [
      {
        text: 'HTML+CSS',
        link: '/knowledge/HTML+CSS/'
      },
      {
        text: 'JavaScript+ES6',
        link: '/knowledge/JavaScript+ES6/'
      },
      {
        text: 'Vue',
        link: '/knowledge/Vue/'
      },
      {
        text: 'Webpack+Vite',
        link: '/knowledge/Webpack+Vite/'
      },
    ]
  },
  {
    text: '个人成长',
    items: [
      {
        text: '大江南北游记',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '所思·所想',
        link: '/column/Growing/' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
    ]
  }
];