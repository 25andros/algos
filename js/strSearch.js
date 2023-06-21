function numJewelsInStones(jewels, stones) {
    let total=0
    let temp= jewels.split('')
    console.log(total)
    console.log(temp)


    Array(temp.length).fill({}).forEach((x,i)=>{

        let strSearch= new RegExp(temp[i],"g");
        console.log(strSearch)

        console.log(stones.match(strSearch).length)
        total+=stones.match(strSearch).length
    }
    )
    console.log(total)
    return total
}

function charSearch(search, ocean){
   let alf = Array( search.split('').length).fill({})
    .map((x,i)=>ocean.match(RegExp(search[i],"g"))||[])
    .flat().length  

    //console.log(alf)

    //alf.flat().length  

    topHop=alf 
    console.log(alf)
    

}

function countInWord(sen, ltr){
    tot=0
    sen.split('').forEach((x,i)=>sen[i].includes(ltr)?tot+=1:tot+=0) 
    console.log(tot)
    return tot
}

function init(){
    topHop=[]
    //jewels = "aA", stones = "aAAbbbb"
    jewels = "z", stones = "ZZ"
    //numJewelsInStones(jewels, stones)
    charSearch(jewels, stones)
    let sen = 'The quick brown fox jumps over the lazy dog.'; 
    countInWord(sen,'o')
}

window.onload= init()
