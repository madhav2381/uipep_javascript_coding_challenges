// remove duplicate characters from string.
function remove_duplicates(str)
{
    for(let i=0;i<str.length-1;i++){
        if(str[i]===str[i+1]){     

            str = str.slice(0,i)+str.slice(i+1,);
            i=0;
        }
    }
    if(str[0]===" ")
    {
        str = str.slice(1,);
    }
    return str;
}


//sort the string
function sort_string(string) {
   let str_len =string.length;
    for (let i=0; i<str_len;i++) {
        for(let j=i+1;j<str_len ;j++) {   
            if (string[i] > string[j]) {
                string = string.slice(0,i) + string[j] + string.slice(i+1,j) + string[i] + string.slice(j+1,);
            }
        }
    }
    return string;
}


function get_sorted_without_duplicates(str){
 
     str =  sort_string(str);
     str = remove_duplicates(str); 
     console.log(str); 
}


get_sorted_without_duplicates("apple");
get_sorted_without_duplicates("geeks for geeks");
get_sorted_without_duplicates("engine");
get_sorted_without_duplicates("madhav");


//aelpp