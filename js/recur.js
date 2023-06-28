function loopOver(){
    input ="the advanced engineer"
    output=""
    i=1
    loop()

    function loop(){
    //if(input.length ==output.length){return}
    output+=input[input.length-i]
    i++
        //loop()

    if(input.length !=output.length){loop()}
    }
    console.log(output)
}

function strFlipRecur(){
    input ="the advanced engineer"
    output
    loop(input)


function loop(str){

    if (str.length==0){return}

    return str[str.length-1]+loop(str=s)


}

}


function recurFactorial(num){
    if (num==1) {sout('stack top'); return 1}
    sout('iterative' +num)
    return num*recurFactorial(num-1)
}

function sout(x){
    console.log(`${x}`)
}

function init(){
    sout(recurFactorial(5))
    
}

window.onload= init()

