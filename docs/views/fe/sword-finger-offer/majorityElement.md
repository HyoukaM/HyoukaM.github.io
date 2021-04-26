---
title: '剑指 Offer 39. 数组中出现次数超过一半的数字'
tags:
- 剑指 Offer
- 简单难度

categories:
- 算法

sidebar: 'auto'
date: '2021-4-22'
---

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:

```javascript
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
```

这道题从我看题目开始其实我的第一想法就是将数组先进行排序然后取出中间值就可以得出这个数字

```javascript
 //取数组下标不能输出小数，所以我们需要取整数部分
  const mid = parseInt(nums.length / 2);
 //冒泡排序
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let num = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = num;
      }
    }
  }
  //返回中间值，由于有一个数是出现了一半所以 n = nums.length - 1 / 2 - 1 < n < n = nums.length - 1 / 2 + 1
  //n肯定是我们想要的结果
  return nums[mid];
```
但是上面的方法非常的消耗内存时间所以我们可以换一种思路来思考🤔
已知n出现的次数是 >= nums.length / 2的所以我们可以初始值一个count来计每个值出现的次数，
cur来得到我们想要的值
```javascript
const majorityElement = function(nums) {
    //我们想要得到的值
    let cur = 0;
    //计数器
    let count = 0;
    for(const num of nums){
        //[1, 2, 3, 2, 2, 2, 5, 4, 2]
        //count为0的时候代表出现的值出现次数已经被后者多次数的数值被覆盖
        if(count === 0) {
            //cur = 1;
            //不走
            //cur = 3
            cur = num;
        }
        // 1 = 1;
        // 3 = 3
        if(num === cur) {
            //1
            count++;
        } else {
            // 1 - 1 = 0
            count--;
        }
    }
    return cur;
};
```
最后就能得出最终结果
