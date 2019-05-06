---
title: numpy的基本使用
date: 2019-05-05 00:06:12
tags: 数据
categories: 数据分析与机器学习
---

#### NumPy的基本使用

Numpy是一个开源的Python科学计算库，它是Python进行科学计算的基础库，许多著名的科学计算库如Pandas，Scikit-learn等都要用到Numpy库的一些功能。NumPy根据BSD许可证授权，只需很少的限制即可重复使用。
<!--more-->

#### 基础知识

NumPy是一个元素表(通常是数字), 这些元素都具有相同的类型，由正整数元组索引的多维数组。在NumPy维度中称为轴。

例如:

在一个3D空间中[`1, 2, 1]` 有一个轴, 这个轴里面有三个元素, 因此它的长度就是3。如下所示, 这个数组有2个轴, 第一个轴长度为2 即`[1., 0., 0.]`和`[0., 1., 2.]` ,  第二个轴长度为3(三个元素)。

```python
[[ 1., 0., 0.],
 [ 0., 1., 2.]]
```

NumPy的类型称为`ndarray`, 即数组。请注意，`numpy.array`与标准Python库类`array.array`不同。如下: 

**ndarray.ndim : ** 数组轴的个数(维度)。

**ndarray.shape : ** 数组的维度, 返回一个整数的元组, 表示这个维度数组的大小, 对于一个n行和m列的矩阵，`shape`将为`（n，m）`。注意，`shape`这个元组的长度是轴的数量即`ndim`。

**ndarray.size : ** 数组所有元素的个数。

**ndarray.dtype : ** 描述数组元素类型。

**ndarray.itemsize : ** 数组中每个元素的字节大小



**Example:**

```python
import numpy as np

# np.arange([start,] stop[, step,], dtype=None)

arr = np.arange(3)
print(arr)
# array([0, 1, 2])

arr = np.arange(3.0)  # 与python标准库函数range不同, arange可以传float类型参数
print(arr)
# array([0., 1., 2.])

arr = np.arange(3, 7)
print(arr)
# array([3, 4, 5, 6])

arr = np.arange(15).reshape(3, 5)
# array([[ 0,  1,  2,  3,  4],
#       [ 5,  6,  7,  8,  9],
#       [10, 11, 12, 13, 14]])
print(arr.shape)  # (3, 5)
print(arr.ndim)  # 2
print(arr.dtype.name)  # int64
print(arr.itemsize)  # 8
print(arr.size)  # 15
print(type(arr))  # <type 'numpy.ndarray'>

arr = np.array([1,2, 3])
print(type(arr))  # <type 'numpy.ndarray'>
```



#### 创建数组

**1) 通过列表或元组创建**

最终数组的类型取决于序列中元素的类型

```python
import numpy as np

arr = np.array([2, 3, 4])
print(arr)  # array([2, 3, 4])
print(arr.dtype)  # dtype('int64')

arr = np.array([1.2, 2.3, 3.4])
print(arr.dtype)  # dtype('float64')

# 二维数组 (2*3)
arr2 = np.array([[1,2,4], [3,4,5]])
print(arr2)
# array([[1, 2, 4],
#       [3, 4, 5]])
```

**2) 通过np.arrange()等方法创建**

```python
import numpy as np
arr = np.arange(10, 30, 5)
print(arr)  # array([10, 15, 20, 25])

arr = np.zeros((3,4))
print(arr)  # 创建一个全为0的数组
# array([[ 0.,  0.,  0.,  0.],
#       [ 0.,  0.,  0.,  0.],
#       [ 0.,  0.,  0.,  0.]])

arr = np.ones((2, 3, 4), dtype=np.int16)  # 可以指定参数
print(arr)  # 创建一个全为1的数组
# array([[[ 1, 1, 1, 1],
#        [ 1, 1, 1, 1],
#        [ 1, 1, 1, 1]],
#       [[ 1, 1, 1, 1],
#        [ 1, 1, 1, 1],
#        [ 1, 1, 1, 1]]], dtype=int16)


# linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None) 
# 返回在start到stop之间均匀分布的num个数字，可以选择是否包括stop. retstep表示是否返回步长.

arr = np.linspace(1, 5, 5, True)
print(arr)  # array([ 1.,  2.,  3.,  4.,  5.])

arr = np.linspace(1, 5, 5, False)
print(arr)  # array([ 1. ,  1.8,  2.6,  3.4,  4.2])


# numpy.eye(N, M=None, k=0, dtype=<class 'float'>, order='C')
# 返回一个二维数组，其中对角线为1，其他位置为零。k：对角线的索引：0（默认值）是主对角线，正值指的是上对角线，负值指的是下对角线。
arr = np.eye(2, dtype=int)
print(arr)
# array([[1, 0],
#        [0, 1]])

arr = np.eye(3, k=1)
print(arr)
# array([[0.,  1.,  0.],
#       [0.,  0.,  1.],
#       [0.,  0.,  0.]])


# ones_like，zeros_like，empty_like函数
# 返回一个与给定数组具有相同形状和类型的数组。
x = np.arange(6)
x = x.reshape((2, 3))
print(x)
# array([[0, 1, 2],
#       [3, 4, 5]])
arr = np.ones_like(x)  # zeros_like，empty_like雷同
print(arr)
# array([[1, 1, 1],
#        [1, 1, 1]])
```



#### 基本操作

数组上的算术运算符应用于元素。

**Example:**

```python
import numpy as np
a = np.array([20, 30, 40, 50])
b = np.arange(4)
print(b)  # array([0, 1, 2, 3])
c = a - b
print(c)  # array([20, 29, 38, 47])

d = b ** 2 
print(d)  # array([0, 1, 4, 9])
e = 10 * np.sin(a)
print(e)  # array([ 9.12945251, -9.88031624,  7.4511316 , -2.62374854])
f = a < 35
print(f)  # array([ True, True, False, False])

# 矩阵(数组)*点乘和@叉乘
A = np.array([[1,1],
            [0,1]])
B = np.array([[2,0],
           [3,4]])
print(A * B)
# array([[2, 0],
#        [0, 4]])
print(A @ B)  # 同 A.dot(B)
# array([[5, 4],
#        [3, 4]])

```

**注意:**

- **大小相等的数组之间的任何算术运算都会将运算应用到元素级**
- **数组与标量的算术运算会将标量值传播到各个元素**



#### 索引, 切片, 迭代

未完待续..



