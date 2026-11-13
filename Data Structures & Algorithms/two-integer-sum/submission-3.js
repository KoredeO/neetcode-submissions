class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()
        for(let i =0;i<nums.length;i++){
            const b = target - nums[i]

            if(seen.has(b))return [seen.get(b),i]

            seen.set(nums[i],i)
        }
    }
}
