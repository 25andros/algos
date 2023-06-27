//49. Group Anagrams
function mkeAnagrams(){
    let strs = ["eat","tea","tan","ate","nat","bat"]

    let build = []
    for(let i=0;i<strs.length;i++)
    {
        //build[i]=UTFcount(strs[i])
        //build[temp].push(strs[i])

        temp=UTFcount(strs[i])

        if (typeof(build[temp])=="undefined"){
            build[temp] = [strs[i]]
            sout('cont')
            continue
        }

        sout(strs[i]+ " " + temp)
        //build[temp] = strs[i]
        build[temp].push( strs[i])
    }
    

    console.log(build)
    sout(build[temp])


    function UTFcount(word){
        var total= 0
        for(var i=0;i<word.length;i++){
            total+=word.charCodeAt(i)
        }
        return total
    }



}


function sout(x){
    console.log(`${x}`)
}

function init(){
mkeAnagrams()}

window.onload= init()

