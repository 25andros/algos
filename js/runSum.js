
function qumyu(nums){

/*
    rvx=Array(nums.length).fill()
    //nums.reduce((x,i)=>{x+i;rvx[i]=x+i})


    rvx.map((x,i)=>
        rvx[i-1]= nums.slice(-i).reduce((x,i)=>x+i)
    )
*/
    //rvx.forEach((x,i)=>x= nums.slice(-i).reduce((x,i)=>x+i))
    //rvx.forEach((x,i)=>x= 5)


    //rvx=Array(nums.length).fill(nums.slice(-nums.length).reduce((x,i)=>x+i))

    //nums.reverse().slice(-(i-5)).reverse().reduce((x,i)=>x+i)

    rvx=Array(nums.length).fill()
        .map((x,i)=>x=
        nums.slice(0,-i+nums.length).reduce((x,i)=>x+i)
        ).reverse()

    console.log(rvx)
    return rvx
}



function init(){

    //ray = [3,1,2,10,1]
    ray = [1,2,3,4]
    qumyu(ray)
}

window.onload= init()
