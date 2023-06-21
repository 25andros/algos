
function getPair(index, value){
let rValues = [];
    console.log(rValues);

    for(let i=0;i<index.length;i++){
        let search = value-index[i]
        console.log("target value is " +search)

        for(j=0;j<index.length;j++){

            //if(index[j]==search && !(index[i]==index[j])){
            if(index[j]==search && !(i==j)){
                rValues[0]=i
                rValues[1]=j
                console.log(i+" "+j)
                console.log(rValues)
                break;
            }
        }
        //if (typeof(rValues.length)=="number")
        if (rValues.length==2)
        {break}
    }
    console.log(rValues)
    return rValues;
}


function init(){

    //nums = [2,7,11,15], target = 9
    //nums = [3,2,4], target = 6
    nums = [3,3], target = 6
    getPair(nums,target)
}

window.onload= init()
