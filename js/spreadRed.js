//2574. Left and Right Sum Differences

function leftRightDifference(nums){
    
    let left=
    Array(nums.length).fill({})
    .map((x,i)=>
        [...nums].splice(0,i).reduce((x,i)=>x+i,0))

    console.log(left)
    
    let right=
    Array(nums.length).fill({})
    .map((x,i)=>
       // [...nums].splice(0,i).reduce((x,i)=>x+i,0))
        nums.slice(i+1).reduce((x,i)=>x+i,0))


    console.log(right)

    let value= Array(nums.length).fill({})
            .map((x,i)=>Math.abs(left[i]-right[i]))

    console.log(value)


}

function init(){
    ray = [10,4,8,3]

    leftRightDifference(ray)
}

window.onload= init()
