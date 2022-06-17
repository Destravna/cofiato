var strStr = function(haystack, needle) {
    if(haystack === needle){
        return 0;
    }
    let needleHash = hash(needle, 0, needle.length, 101);
    let x;
    for(let i = 0;i < haystack.length - needle.length + 1;i++){
        x =  hash(haystack, i, i + needle.length, 101);
        if(needleHash === x && needle === haystack.substr(i, needle.length)){
           return i;
          }
    }
    return -1;
};


//creating a hash for the string 
const hash = (s, start, end, prime)=>{
    let h = 0;
    let a;
    for(let i = start;i < end;i++){
        a = s.charCodeAt(i) * Math.pow(10, end - i);
        h += a;
    }
    return h % prime;
}
