class Solution {
    public int[] twoSum(int[] nums, int target) {
     int res[]=new int[2];   
     boolean flag=false; 
     for(int i=0;i<nums.length;i++)
     {
     if(flag==false)
     {
     for(int j=0;j<i;j++)
     { 
         if(nums[i]+nums[j]==target)
         {
          res[0]=j;
          res[1]=i;   
          flag=true;   
         }
          
     }    
     }
     else
         break;
     }
             return res;
}
}
