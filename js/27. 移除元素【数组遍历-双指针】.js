/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // 双指针，p指向不等于val的元素，q用于遍历 nums 数组（注意 p,q不是同步增长的，我们需要用 q来填充 nums[p]）
var removeElement = function(nums, val) {
    let p=0
    for(let q=0;q<nums.length;q++){
        if(nums[q]!=val){
            nums[p]=nums[q]
            p++
        }
    }
    // 数组已经遍历完，此时p即为原nums中不等于val的元素个数
    return p
};
