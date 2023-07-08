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
    sout('total'+total)
}

function unqInt(){
    //2610. Convert an Array Into a 2D Array With Conditions

    //nums = [1,3,4,1,2,3,1,1,3]
    nums = [5,10,6,5,1,1,1,2,1,1]
    ans= [[]]

    nums.forEach((x,i)=>{
        for(let j=0;j<nums.length;j++){
            if(ans[j].filter(z=>z==x).length==1){
            //if(ans[j].filter(z=>z==x)==true){
            //if(ans[j].toString().match(x)!=null){
                if (ans[j+1]==undefined){ans[j+1]=[]}   //idempotient way of creating new array
            }
            else{
                ans[j].push(x)
                //console.log(ans)
                sout(`x,j= ${x}  ${j}`)
                break
            }
        }
    })
    console.log(ans)
}

function revWordStr(){
    s = "Let's take LeetCode contest"
    //sout(s.split(' ').length)
    bro=[]
    Array(s.split(' ').length).fill({})
    .forEach((x,i)=>
        {
        bro[i]=[...s.split(' ')[i]].reverse().join('')
        }
    )
    sout(bro.join(' '))
}

function imgRev(){
    //832. Flipping an Image

img = [[1,1,0],[1,0,1],[0,0,0]]

img.map((x,i)=>
    {
    x.reverse()
        for(let j=0;j<x.length;j++){
        //x[j]=1-x[j]
        x[j]=x[j]?0:1
        }
        // inverse 1 to 0, 0 to 1, unary operation
    }
)


    /*
img.map((x,i)=>
    {
    x.reverse()
        .forEach((y,j)=>
            y?0:1)
    }
)
*/
console.log(img)

}

function prefixRev(){
    //2000. Reverse Prefix of Word

    word = "abcdefd", ch = "d"

    i=word.indexOf(ch)+1
    return word.slice(0,i).split('').reverse().join('')+
        word.slice(i)
    //console.log(word)
}

function bankBreak(){
    bank = ["011001","000000","010100","001000"]

    for(let i=0;i<bank.length;i++){
        bank[i]=[...bank[i]].filter(x=>x==1).length
    }
    bank.map((x,i)=>{
        if(x==0){return bank[i+1]}
    })

    //bank.reduce((x,i)=>x+i)
    //bank.map((x,i)=>
        //x=[...x].filter(y=>y==1).length||1 
        //x=x.match(/1/g)||[1].length

    console.log(bank)

}

function sout(x){
    console.log(`${x}`)
}

function init(){
    
}

window.onload= init()

