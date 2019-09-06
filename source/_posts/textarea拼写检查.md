---
title: 关闭textarea的拼写检查
date: 2019-09-06 12:46:58
tags: [textarea]
categories: html
---


最近使用`textarea`标签发现下面这个问题, 一顿Google最后解决,现在把解决方法做个记录。

![1567745626_1_.jpg](https://i.loli.net/2019/09/06/JFOe7981iYkIrGR.png)


#### 解决方法：

```html
<!-- 添加 spellcheck="false" 属性 -->
<textarea class="form-control share-text" rows="3" spellcheck="false" ></textarea>
```