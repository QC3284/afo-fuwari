---
title: （x-wrt）SSH-open
published: 2024-08-09
description: '在X-WRT系统中开启SSH登录的简单步骤，解决默认无法登录的问题'
image: ../img/x-wrt-tx.png
tags: [x-wrt, ssh, 安全, 教程]
category: '教程'
draft: false
lang: ''
---

文章来源：https://github.com/x-wrt/x-wrt.github.io/tree/master/docs/ssh-open

# X-WRT 开启ssh的方法

很多⼈说 X-WRT 的ssh无法登录，这其实是因为默认的ssh没有开启用户登录，大家可以进入界面，进入[系统-管理权](#)页面，进入[SSH访问](#)标签，开启**密码验证**和**允许 root 用户凭密码登录**就可以了。

![](https://cdn-esa-1.xcqcoo.top/gh/x-wrt/x-wrt.github.io@master/docs/ssh-open/ssh1.png)

**注意请使用谷歌浏览器，火狐浏览器，微软的浏览器，其他浏览器存在不可预知的问题。**
