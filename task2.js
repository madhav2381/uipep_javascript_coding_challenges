

function get_sorted_diff_string(first, second) {
    first = [...remove_duplicates(first)];
    second =[... remove_duplicates(second)];
   // console.log(first);
    //console.log(second);
   let  copy = first;
    for(let i=0;i<first.length;i++)
    {
        for(let j=0;j<second.length;j++)
        {
            if(first[i] == second[j])
            {
                first = first.slice(0,i).concat(first.slice(i+1,));
                i=0;
                break;

            }
        }
    }
    console.log(first.join(""));
}
    


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


get_sorted_diff_string("apple","pig");
get_sorted_diff_string("dog","pig");
get_sorted_diff_string("pineapple","apple");