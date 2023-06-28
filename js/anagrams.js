//49. Group Anagrams

function matchSearch(){
    //strs = ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]
    //strs = ["eat","tea","tan","ate","nat","bat"]
    strs = ["eat","tea","tan","ate","nat","bat","brock","rockb"]
    //strs = ["a"]
    //strs= ["",""]
    //strs=[]
    //strs=["alhpa"]
    sent = strs.toString()
    
    alt=[]
    pairs = []

        if (strs.length==1){sout(strs);return strs[0]}

    count=0
    for(var i=0;i<strs.length;i++){
        count++
        if (count>=50){break}


        times = strs[i].length
                console.log('times '+times)

        ltrz = "("+[...strs[i]].join('|')+")"
                console.log(ltrz)

        ltrzSearch=""
        for(var j=0;j<=times-1;j++){
            ltrzSearch+=ltrz
        }
                console.log(ltrz)
        searchExp = new RegExp(ltrzSearch,"g")
                 console.log(searchExp)

        pairs.push(sent.match(searchExp))
        sent=sent.replace(searchExp,'0')
        
        //strs=strs.filter((x,i)=>strs[i].toString().match(searchExp)==null)
        console.log(i)
        console.log(sent)
    }
        pairs=pairs.filter((x,i)=>pairs[i]!=null)
        console.log(pairs)
}


function objAna(){
    let strs = ["eat","tea","tan","ate","nat","bat"]
    //holdKeys=Object.assign({UTFcount('a')},"eat")
    
        //creates an array of utfCount in strKey
    //strs.forEach((x,i)=>strKey.push(UTFcount(strs[i])))


    /*
    strs.forEach((x,i)=>strKey.push(UTFcount(strs[i])))

    let holdKey={}

    Array(strs.length).fill({})
    .forEach((x,i)=>holdKey[i]={[strKey[i]]:strs[i]})
    console.log(holdKey)
*/

   
    /*
    one line of thought is to make the array into
    an object, then mutate the keys via UTFcount,
        then sort via keys, remove keys, then create sub array
   */ 
    //strs.forEach((x,i)=>strKey[i]={[UTFcount(strs[i])]:strs[i]} )


    /*
        * another idea would be to create a straight-up array, and remove unused location
    */

    strKey=[]
    strs.forEach((x,i)=>
        {
            tempLoc = UTFcount(strs[i])
            if(strKey[tempLoc]==undefined)
            {
                strKey[tempLoc]=[]
            }
            strKey[tempLoc].push(strs[i])
        }
    )

    bro=strKey.filter(x=>x!=undefined) 

    //diy filter function
    /*
    cleaned=[]
    cleanCount=0
    strKey.forEach((x,i)=>
        {
            if(strKey[i]!=undefined){
            cleanCount++
            cleaned[cleanCount]=strKey[i]
            }
        }
    )
    console.log(cleaned)
    */

    console.log(bro)
}

function mkeAnagrams(){
    let strs = ["eat","tea","tan","ate","nat","bat"]

    let build = []
    buildIterate =0

    for(let i=0;i<strs.length;i++){
        temp=UTFcount(strs[i])

        if (typeof(build[temp])=="undefined"){
            build[temp] = [strs[i]]
            sout('cont')
            continue
        }
        build[temp].push( strs[i])
    }

    //for(let i=0;i<build.length;i++){
    for(i of build){
        if (typeof(build[i])=="undefined"){
            //build.slice(i,1)
            build.shift()
        }
    }
    
    console.log(build)
    sout(build[temp])
}

function UTFcount(word){
    var total= 0
    for(var i=0;i<word.length;i++){
        total+=word.charCodeAt(i)
    }
    return total
}


function sout(x){
    console.log(`${x}`)
}

function init(){

}

window.onload= init()

