---
title: git subtree 的使用
date: 2019-06-12 21:45:49
tags: [git,subtree]
categories: git相关
---



git subtree的主要命令有：

```
git subtree add   --prefix=<prefix> <commit>
git subtree add   --prefix=<prefix> <repository> <ref>
git subtree pull  --prefix=<prefix> <repository> <ref>
git subtree push  --prefix=<prefix> <repository> <ref>
git subtree merge --prefix=<prefix> <commit>
git subtree split --prefix=<prefix> [OPTIONS] [<commit>]
```

## 准备

我们先准备一个仓库叫Photo，一个仓库叫libPNG，然后我们希望把libPNG作为Photo的子仓库。
Photo的路径为`https://github.com/fanhang64/Photo.git`，仓库里的文件有：

```
Photo
	|
    |-- .gitignore
    |-- Photo.c
    |-- Photo.h
    |-- main.c
    \-- README.rst
```

<!--more-->

libPNG的路径为`https://github.com/fanhang64/libPNG.git`，仓库里的文件有：

```
libpng
    |
    |-- libpng.c
    |-- libpng.h
    |-- README.rst
    |--test.c
    |--test.h
```



以下操作均位于父仓库的根目录中。

## 在父仓库中新增子仓库

我们执行以下命令把libpng添加到Photo中：

```
git subtree add --prefix=sub/libpng https://github.com/fanhang64/libpng.git master --squash
```

(`--squash`参数表示不拉取历史信息，而只生成一条commit信息。)

执行`git status`可以看到提示新增两条commit：
![image](https://s2.ax1x.com/2019/06/12/VWn2Ss.png)

`git log`查看详细修改：
![image](https://s2.ax1x.com/2019/06/12/VWuZ0f.png)

执行`git push`把修改推送到远端Photo仓库，现在本地仓库与远端仓库的目录结构为：

```
Photo
    |
    |-- sub/
    |   |
    |   \--libpng/
    |       |
    |       |-- libpng.c
    |       |-- libpng.h
    |       \-- README.rst
    |		|-- test.c
    |		|-- test.h
    |
    |-- Photo.c
    |-- Photo.h
    |-- main.c
    \-- README.rst
```

**注意:**

现在的Photo仓库对于其他项目人员来说，可以不需要知道libpng是一个子仓库。什么意思呢？
当你`git clone`或者`git pull`的时候，你拉取到的是整个Photo(包括libpng在内，libpng就相当于Photo里的一个普通目录)；当你修改了libpng里的内容后执行`git push`，你将会把修改push到Photo上。
也就是说Photo仓库下的libpng与其他文件无异。

## 从源仓库拉取更新

如果源libpng仓库更新了，Photo里的libpng如何拉取更新？使用`git subtree pull`，例如：

```
git subtree pull --prefix=sub/libpng https://github.com/fanhang64/libpng.git master --squash
```

## 推送修改到源仓库

如果在Photo仓库里修改了libpng，然后想把这个修改推送到源libpng仓库呢？使用`git subtree push`，例如：

```
git subtree push --prefix=sub/libpng https://github.com/fanhang64/libPNG.git master
```

## 简化git subtree命令

我们已经知道了git subtree 的命令的基本用法，但是上述几个命令还是显得有点复杂，特别是子仓库的源仓库地址，特别不方便记忆。
这里我们把子仓库的地址作为一个remote，方便记忆：

```
git remote add -f libpng https://github.com/fanhang64/libPNG.git
```

然后可以这样来使用git subtree命令：

```
git subtree add --prefix=sub/libpng libpng master --squash
git subtree pull --prefix=sub/libpng libpng master --squash
git subtree push --prefix=sub/libpng libpng master
```



参考链接：

<https://segmentfault.com/a/1190000012002151>