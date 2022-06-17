var countAndSay = function(n) {
    if(n == 1){
        return '1';
    }
    let s = countS(countAndSay(n-1));
    return s;
};

/*
returns the count and say of a number 
eg for input 112 = 2112
             1 = 11
             223 = 2213
*/
const countS = (n)=>{
    let initiall = '';
    let subs = [];
    let j = 0;
    for(let i = 0; i < n.length;i++){
        if(j == 0){
            initiall += n[i];
            j++;
        }
        else{
            if(initiall[j - 1] == n[i]){
                initiall += n[i];
                j++;
            }
            else{
                subs.push(initiall);
                initiall = n[i];
                j = 1;
            }
        }
    }
    if(initiall.length !== 0){
        subs.push(initiall);
    }
    let ans = '';
    for(elem of subs){
        ans += String(elem.length) + elem[0];
    }
    return ans;
};


