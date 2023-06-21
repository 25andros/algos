//238. Product of Array Except Self

function prodRay(nums){
   let jay=
        Array(nums.length).fill({})
    .map((x,i)=> 
            //[...nums].splice(i,1).reduce((y,j)=>(y*j))
        {

                temp=[...nums],
                //console.log("init" +temp),
                temp.splice(i,1)
                //console.log(temp)
                return temp.reduce((y,j)=>(y*j))

        }

/*
        {
            console.log(nums[i]),
            console.log(nums),
            alfa= [...nums].reduce((y,j)=>(y*j))/nums[i]

            console.log(alfa)
            return alfa

        }
        */
    )

    console.log(jay)

}



function init(){
    //ray= [-1,1,0,-3,3]
    ray = [1,2,3,4]

    prodRay(ray)

}

window.onload= init()
