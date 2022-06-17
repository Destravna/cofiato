//time complexity O(n)
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length - 1;
    for(let i = 0; i < nums2.length;i++){
        nums1.push(-1000001);
    }
    
    let n = nums2.length - 1;
    let x = m + n + 1;
    console.log(x);

    //merging sorted arrays 
    while(m >= 0 && n >= 0){
        if(nums1[m] > nums2[n]){
            nums1[x--] = nums1[m--];
        }
        else{
            nums1[x--] = nums2[n--];
        }
    }
    
    console.log(nums1);
    //finding median
    while(n >= 0){
        nums1[x--] = nums2[n--];
    }
    if(nums1.length % 2 !== 0){
        return nums1[(nums1.length + 1)/2 - 1];
    }
    let middle = nums1.length / 2;
    return (nums1[middle-1] + nums1[middle]) /2;  
};