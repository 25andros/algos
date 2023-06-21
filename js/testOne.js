
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

//  factorial a number

function factorial(x){

    don = Array(x).fill({})
        .map((x,i)=>i+1)
        .reduce((x,i)=>x*i)

    console.log(don)

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

function init(){
    a = logSolve(2)    
    console.log(a)
}

window.onload= init()


