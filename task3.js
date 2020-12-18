function get_odds_list(n) {
let arr = [];
while(n>0)
{
    if(n==1)
    {
        arr.push(1);
        break;
    }
    arr.push(2*n-1);
    n = n-1;
}
console.log(arr);
}

get_odds_list(0)
get_odds_list(1)
get_odds_list(2)
get_odds_list(5)

// 0 - []
// 1 - [1]
//2  - [3,1]
//3  - [5,3,1]