//1365. How Many Numbers Are Smaller Than the Current Number

function cyclethru(nums){
result=Array(nums.length).fill({})
    //.map((x,i)=>test(nums,i)) //higher order f'x, getting the syntax

    //.map((x,i)=>logicSml(nums,i)) //utilising a for fx to return a value to x


    //utilising a forEach to return the x 
    .map((x,i)=>fxCompact(nums,i))

/*
    //solution that integrates higher order function within
        .map((xz,i)=> {

            count=0
            nums.forEach((valx,j)=>{
                if(nums[i]>nums[j]) {count+=1}
            }
            )
            console.log("xz "+count)
            //xz=count
            return count
        }

        )
*/

    console.log(nums)
    console.log(result)
}




function fxCompact(array, iterate){

    count=0
    array.forEach((valx,i)=>
        {
        if(array[iterate]>array[i]) {count+=1}
        }
    )
    return count 
}


function logicSml(array, iterate){
    count=0

    for(i=0;i<array.length;i++){

        //test the cycle to not check this one
        if(i==iterate){
            console.log("contin "+iterate)
            continue
        }

        if(array[iterate]>array[i]){
            count+=1
        }
    }

    console.log("count "+ iterate)
    return count
}

function test(array, iterate){
    console.log("test "+ iterate)
    console.log(array[iterate])
    return array[iterate]

}


function init(){
    ray = [6,5,4,8]
    //ray= [8,1,2,2,3]
    cyclethru(ray)
}

window.onload= init()
