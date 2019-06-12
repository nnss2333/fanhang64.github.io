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

```python
#  np.transpose(a, axes=None)  #  函数用于对换数组的维度
>> arr = np.arange(12).reshape(3, 4)
>> print(arr)
>> print(np.transpose(arr))
>> print(arr.T)  # 转置矩阵(同上)
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]

[[ 0  4  8]
 [ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]]

```

#### 连接数组

```python
# np.concatenate((a1, a2, ...), axis)  # 数用于沿指定轴连接相同形状的两个或多个数组

>> arr = np.array([[1, 2], [3, 4]])
>> arr2 = np.array([[5 ,6], [7, 8]])
>> print(arr, arr2)
>> print(np.concatenate((arr, arr2)))  # 沿着行连接
>> print(np.concatenate((arr, arr2), axis=1)  # 沿着列链接
[[1 2]
 [3 4]] [[5 6]
 [7 8]]

[[1 2]
 [3 4]
 [5 6]
 [7 8]]

[[1 2 5 6]
 [3 4 7 8]]

         
# np.stack(arrays, axis=0)  # 函数用于沿指定轴堆积数组序列
>> arr = np.array([[1, 2], [3, 4]])
>> arr2 = np.array([[5, 6], [7, 8]])
>> print(np.stack((arr, arr2)))  # 沿着行堆积数组, 二维堆成三维
>> print(np.stack((arr, arr2), axis=1))  # 沿着列堆积数组
[[[1 2]
  [3 4]]
 [[5 6]
  [7 8]]]

[[[1 2]
  [5 6]]

 [[3 4]
  [7 8]]]

# np.hstack()  # 通过水平堆积来生成数组(横向)
>> a = np.array((1,2,3))
>> b = np.array((2,3,4))
>> np.hstack((a,b))
array([1, 2, 3, 2, 3, 4])
>> a = np.array([
    [1],
    [2],
    [3]
])
>> b = np.array([
    [2],
    [3],
    [4]
])
>> np.hstack((a,b))  # 水平扩展(a的[1]与b的[2])
array([[1, 2],
       [2, 3],
       [3, 4]])

# np.vstack()  # 通过竖直堆积生成数组
>> a = np.array([
	[1, 2],
    [3, 4]
])
>> b = np.array([
    [5, 6],
    [7, 8]
])
>> print(np.vstack((a, b)))
[[1 2]
 [3 4]
 [5 6]
 [7 8]]
```

#### 分割数组

```python
# np.split(arr, indices_or_sections, axis=0) # 函数沿特定的轴将数组分割为子数组

>> 	a = np.arange(9)
>> np.split(a, 1)
[array([0, 1, 2, 3, 4, 5, 6, 7, 8])]
>> np.split(a, 3)  # 将数组分为三个大小相等的子数组
[array([0, 1, 2]), array([3, 4, 5]), array([6, 7, 8])]
>> np.split(a, [4, 7])  # 将数组在一维数组中表明的位置分割
[array([0, 1, 2, 3]), array([4, 5, 6]), array([7, 8])]

# np.hsplit(arr, indices_or_sections) 函数用于水平分割数组，通过指定要返回的相同形状的数组数量来拆分原数组。

>> x = np.arange(16.0).reshape(4, 4)
>> print(x)
array([[ 0.,  1.,  2.,  3.],
       [ 4.,  5.,  6.,  7.],
       [ 8.,  9., 10., 11.],
       [12., 13., 14., 15.]])
>> np.hsplit(x, 2)
[array([[ 0.,  1.],
       [ 4.,  5.],
       [ 8.,  9.],
       [12., 13.]]), array([[ 2.,  3.],
       [ 6.,  7.],
       [10., 11.],
       [14., 15.]])]
>> np.hsplit(x, np.array([1, 2]))
[array([[ 0.],
        [ 4.],
        [ 8.],
        [12.]]), array([[ 1.],
        [ 5.],
        [ 9.],
        [13.]]), array([[ 2.,  3.],
        [ 6.,  7.],
        [10., 11.],
        [14., 15.]])]
```



参考文档:
https://www.runoob.com/numpy/numpy-array-manipulation.html