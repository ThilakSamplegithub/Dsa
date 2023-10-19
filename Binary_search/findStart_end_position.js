var searchRange = function(nums, target) {
    const ans=[-1,-1]
    let findStartInd
    let start=search(nums,target,findStartInd=true)
    let end=search(nums,target,findStartInd=false)
    ans[0]=start
    ans[1]=end
    return ans
    function search(nums,target,findStartInd=true){
        let start=0,end=nums.length-1,ans=-1
        while(start<=end){
            let mid=start+((end-start)/2)
            mid=Math.floor(mid)
            if(target>nums[mid]){
                start=mid+1
            }else if(target<nums[mid]){
                end=mid-1
            }else{
                ans=mid
                if(findStartInd){
                    end=mid-1
                }else{
                    start=mid+1
                }
            }
        }
        return ans
    }
};
// const nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Input: nums = [], target = 0
// Output: [-1,-1]
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]