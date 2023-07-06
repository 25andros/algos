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

function palindrome(ltr){
    isPalin=true
    if (ltr.length==0||ltr.length==1){
        isPalin = false
    }
    check=ltr.split('').reverse().join('')
    Array(ltr.length).fill({}).
        forEach((x,i)=>{
            if(ltr[i]!=check[i]){
                isPalin= false
            }
        })
    return isPalin
}

function palRecur(ltr){

    return palRecur(ltr)
}

function recurFactorial(num){
    if (num==1) {sout('stack top'); return 1}
    sout('iterative' +num)
    return num*recurFactorial(num-1)
}

function ltrRange(){

    //2194. Cells in a Range on an Excel Sheet


/*
    //pass a function as the replacement for a string replacement
    rngNum=range.replace(/[a-z]/ig,(x)=>{return x.codePointAt(x)+","})

    //use regex to split string to an array
    pts=rngNum.split(/:|,/)
*/

    range="A1:F12"

    pts=range.replace(/[a-z]/ig,(x)=>{return x.codePointAt(x)+","}).split(/:|,/)


    results=[] 
    for(let i =pts[0];i<=pts[2];i++){
        for(let j =pts[1];j<=pts[3];j++){
            //convert number to letter, aka parseInt
            results.push(String.fromCharCode(i)+j)
        }
    }
    sout(rngNum)
    sout(pts)
    //sout(results)
}

function reSort(){
    //1859. Sorting the Sentence
    s = "is2 sentence4 This1 a3"
    ble=s.split(/ /g)
    hold =[]
    ble.forEach((x,i)=>
        {
            //alf=new RegExp(/\w*1/gi)
            alf= new RegExp("\\w*"+(i+1),"g")
            //temp=ble.toString().match(alf)  //returns array
            temp=ble.toString().match(alf).toString().slice(0,-1)
            //hold=hold+temp+" "
            hold.push(temp)
}
    )
    //go from an array back to a string
    hold=hold.toString().replace(/\,/g,' ')
    sout(hold)
}

function regAst(){
    //2315. Count Asterisks

    s = "l|*e*et|c**o|*de|"
    mtn = /\|(\w|\*)*\|/g;
    ble=s.replace(mtn,'').replace(/[^\*]/g,'')
    sout(ble.length)
    //return ble.length
}

function strPair(){
    //2744. Find Maximum Number of String Pairs
    
    words = ["cd","ac","dc","ca","zz"]
    //words = ["aa","ab"]

    total=0
    words.forEach((x,i)=>{
        temp=x.split('').reverse().join('')
        sout('item looked for ' +temp)
        sout('current search '+words.slice(i+1))

        amt=words.slice(i+1).toString().match(temp,'g')||[]
        sout('returned '+amt)

        if(amt.length>0){
            sout('item found')
            total=total+1
            sout('total now is '+total)
        }

    })

        /*
        amt=words.slice(i).toString().match(temp,'g')||[""].length
        if(amt>0){
            sout('item found')
            total=total+1
            sout('total now is '+total)
        }
    })
*/

    sout('total'+total)
}


function sout(x){
    console.log(`${x}`)
}

function init(){
    
}

window.onload= init()

