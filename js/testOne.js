
let par = 'The quick brown fox jumps over the lazy dog. It barked.';
let nums = [5,12,7,33]
let numItr = nums[Symbol.iterator]()


function doSome(){
    for( let x of nums)
        console.log(x)
}

function doMore(){
    for( let i of nums)
    {
        console.log(i)
    console.log(numItr.next())
    }
}

//doMore()

console.log(`--- ---`)



function* generateZero(){
    yield `hello`
    yield `zamba`
    yield 57    
}

let power = generateZero()

function act(){
    for( i of power){
        console.log(i)
    }
}

//  fibonacci sequence

function fibonacci(){
    let fib =[0,1]
    let totalL=18
    let ans = Array(totalL).fill({}).forEach((x,i)=>
        {
            /*
                let temp=fib[i]+fib[i+1]
                fib.push(temp)
                */
                fib.push(fib[i]+fib[i+1])
        }
    )
    console.log(fib)
}

// fibonacci recursive 

function fibonacciRecur(n){
    if(typeof(n)!='number' || n<2){return null}

    let fib =[0,1]
    for(let i=2;i<=n;i++){
        fib.push(fib[i-1]+fib[i-2])
        //console.log(fib)
    }
    console.log(fib[n])
}



//  factorial a number

function factorial(x){

    don = Array(x).fill({})
        .map((x,i)=>i+1)
        .reduce((x,i)=>x*i)

    console.log(don)

}

//  factorial via recurrsion... meh...

function factorialRecur(x){

    if(x<1){return}

    /*
    let y=x
    let total
    do{
        --y
        total=x*y
        x=total
        console.log(total+ " "+y)
    }
    while(y>=2)
    */

        //attempt
    for(let i=1,j=1;i<x;i++){
        j=j*(i+1)

        console.log(i+" "+x+" "+j)
        
        console.log(j)
    }

}

//  solve a prime number

function primeSolve(value){

    prime = Array(value-2).fill({})
    .map((x,i)=>
        {   
            x=i+2
            return (value%(x)==0)?1:0
        }
    )
       rtnSt ="" 
    Math.max(...prime)==1?rtnSt= "not prime":rtnSt="prime"
    console.log(rtnSt)
}

//  solve a prime number, the second time

function primeSolve2(value){

    prime = Array(value-2).fill({})
        .map((x,i)=>i+2)

    rtnSt ="prime" 

    for(x of prime)
    {   
        a = (value%x == 0)?1:0
        if (a == 1){rtnSt="not prime";  break}
    }
    console.log(rtnSt)
}

//  logs, logarithm  solve

function logSolve(variable){
    let ans =  Math.log2(variable)
    
    return ans%1==0 ? true:false
}

/*
    ray=[0,13,4,22,7,237,44,96,100]
    target =7

    a= searchAlgo(ray,target)
    console.log(a)
*/

function searchAlgo(nums, lookVar){
    let found=-1

    for(i=0;i<nums.length;i++){

        if(nums[i]==lookVar){
            return i
        }
    }
    return found
}


function biNSearRecur(nums,target){
    if(nums.length==0||target>nums[nums.length-1])  {return -1}
    if(nums[0]==target){return 0}

    let found=-1,left=0,current=Math.ceil((nums.length)/2), right=nums.length-1, previousCur
    
    search()
    

    function search(){
            //if(found!=-1){return}

        (nums[current]<target) ? 
            (sout(current), left=current, moveCur(), checkit()) :
            (sout(current), right=current, moveCur(), checkit())
    }

    function moveCur(){
        current=  Math.ceil((left+right)/2)
    }

    function checkit(){
        if(nums[current]==target){sout('checkit'+current);found=current; return }
        if(previousCur==current){return}
        search()
    }


    sout(`answer is ${found}`)
    return found
}






function binarySearch(nums, target){
    if(nums.length==0||target>nums[nums.length-1])
        {return -1}

    let found=-1, l=0,r=nums.length-1, current=0;

    looper()

    function looper(){
        (nums[current]<target) ? 
            (l=current, moveCur(), checkit()) :
            (r=current, moveCur(), checkit())
    }

    function checkit(){
        if(nums[current]==target){found=current; return }
        looper()
    }

    function moveCur(){
        current=  Math.ceil((l+r)/2)
    }

    return found


/*
    function looper(){
            //checkit()
            if(found!=-1){return}
            (nums[current]<target) ? 
            (l=current, moveCur(),sout("right"), checkit(), looper()) :
            (r=current, moveCur(),sout("left"), checkit(), looper())

        }

    function checkit(){
            sout('check run')
            if(nums[current]==target){found= current }
            //if(nums[current]==target){return current}

    }
*/

    function looper2(){
            l=current, moveCur()
            if(l==r){ found= 99}
            console.log(`current is  ${l} ${current} ${r}`);
            sout(" ")   

    }

    function looperBROKE(){

        /*
            console.log(`current is  ${current} ${l} ${r}`);
            if(l==r){sout("yo"); found= 5; return}
            l=current, moveCur(),looper()
            */

            console.log(`current is  ${current} ${l} ${r}`);
            if(nums[current]==target){found= current; return }

            (nums[current]<target) ? 
            (l=current, moveCur(),looper()) :
            (r=current, moveCur(), looper())

        }

    /*
    l=current, moveCur()
    console.log(`inital current is  ${current} ${l} ${r} ${target}`)
    sout(nums[current])
    */



    }

function sout(x){
    console.log(`${x}`)
}

function init(){
    ray = [1,2,3,4,5,6,7,8,10]
        variable = 9
    //sout(binarySearch(ray,variable))
    sout(biNSearRecur(ray,variable))
}

window.onload= init()

