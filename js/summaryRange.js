// 228. Summary Ranges

function rollThru(nums){

    stringVal =[]

    totals=[]
    for(let i=0;i<nums.length;i++){
    
        //loads empty array with current iteration
        if(totals.length==0){totals.push(nums[i])}

        console.log(totals)

        //if the next iteration and this one are equal, go to the next iteration
        if(nums[i] == nums[i+1]-1){ console.log("skip "+i); continue}

        if(totals==nums[i]){console.log("push a "+i);stringVal.push(totals.toString());totals=[nums[i+1]]; continue}

        if(nums[i] != nums[i+1]-1){


            //totals.length==1 ? stringVal.push(totals): stringVal.push(totals.concat("->"+nums[i]).toString())

            //(totals.length==1)? stringVal.push(totals):stringVal.push(totals+"->"+nums[i])

            console.log("zip "+i)
            totals=totals+"->"+nums[i]

            stringVal.push(totals)
            totals=[]
            continue}
    }

    console.log(stringVal)
    return stringVal


    }

function init(){
    ray = [0,1,2,4,5,7]
    //ray = [0,2,3,4,6,8,9]
    rollThru(ray)
}

window.onload= init()
