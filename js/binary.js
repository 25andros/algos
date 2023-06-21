function doIt(nums,target){
    value=-1
    for(let i=0;i<nums.length;i++){

        if(nums[i]==target)
        {value=i;break}

    }
    console.log(value)
    return value
}

function doItBetter(nums, target){

    value=-1
    nums.forEach((x,i)=>{if(nums[i]==target){value=i}})

    console.log(value)
}

function init(){
  ray = [-5,2,4,6,10]
  
    //doIt(ray,20)
    doItBetter(ray,10)
}

window.onload= init()
