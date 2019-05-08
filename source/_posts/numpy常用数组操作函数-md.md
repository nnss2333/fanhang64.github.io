---
title: numpy常用数组操作函数
date: 2019-05-08 23:34:59
tags: 数据
categories: 数据分析与机器学习
---

#### Numpy 数组操作函数

Numpy 中包含了一些函数用于处理数组，大概可分为以下几类：

- 修改数组形状
- 翻转数组
- 修改数组维度
- 连接数组
- 分割数组
- 数组元素的添加与删除
<!--more-->

#### 修改数组形状

```python
#  numpy.reshape(shape, order='C')  
# 参数: order：'C' -- 按行，'F' -- 按列，'A' -- 原顺序，'k' -- 元素在内存中的出现顺序。
>> arr = np.arange(12).reshape((3, 4))


# ndarray.flatten(order='C')
# 返回一份数组拷贝,并返回一维数组
# 参数: 
>> arr.flatten()
array([ 1,  3,  5,  4,  6,  8,  7,  9, 11, 10, 12, 14])


# numpy.ravel([order])
# 展平的数组元素，返回一维数组拷贝,不影响原数组。
>> arr.ravel()
array([ 1,  3,  5,  4,  6,  8,  7,  9, 11, 10, 12, 14])
>> arr
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11]])

```



#### 翻转数组函数







参考文档:
https://www.runoob.com/numpy/numpy-array-manipulation.html
