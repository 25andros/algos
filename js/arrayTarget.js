//1389. Create Target Array in the Given Order

function createTargetArray(nums, index) {

    charles =[]
    Array(nums.length).fill({})
        .forEach((x,i)=>{
            charles.splice(index[i],0,nums[i])
        })
    //.map((x,i)=>Array(nums.length).splice(index[i],0,nums[i]))

    //console.log(charles)
};

function init(){
        ray = [0,1,2,3,4]
        indexT = [0,1,2,2,1]
    createTargetArray(ray, indexT)
}

window.onload= init()
