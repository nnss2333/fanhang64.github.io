---
title: hexo添加访问量统计
date: 2019-05-07 00:30:18
tags: hexo的使用
categories: hexo的使用
---

使用的是不蒜子提供的阅读统计功能，hexo主题是next。


#### 步骤如下:  

##### 1) 添加是否开启统计功能的配置
<!--more-->

找到next主题的配置文件`themes/next/_config.yml`，找到原来的footer字段，加入一个配置，这里我们叫它counter吧，即
```
footer:
  counter: true
```

**注意:**
hexo博客解决不蒜子统计无法显示问题, 这里引用官网
> 因七牛强制过期『dn-lbstatics.qbox.me』域名，与客服沟通无果，只能更换域名到『busuanzi.ibruce.info』！

##### 2) 修改next主题的模板文件
由于是把访问量统计放在网页的footer，所以我们需要修改的模板文件是`theme/next/layout/_partials/footer.swig`。 
我们在合适的位置加入：
```
{% if theme.footer.counter %}
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

    <span id="busuanzi_container_site_pv">总访问量<span id="busuanzi_value_site_pv"></span>次</span>
    <span class="post-meta-divider">|</span>
    <span id="busuanzi_container_site_uv">总访客<span id="busuanzi_value_site_uv"></span>人</span>
    <span class="post-meta-divider">|</span>

{% endif %}
```