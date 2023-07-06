

function bubbleSort(nums){

    sout(`paint`) 

    let count=0
    let swapped
    do{
        swapped=false
        for(let i=0;i<nums.length;i++){
                count+=1

            if(nums[i+1]<nums[i]){
                swapped=true
                let temp = nums[i+1]
                nums[i+1]=nums[i]
                nums[i]=temp
            //nums.splice(i,1)
            //nums.splice(i+1,0,ntbi)

            }
        sout(nums+" "+count)
        }
    }

    while(swapped==true)
    sout(nums)
    //sout(nums)

}

function spliceSort(nums){
    sout(`start ${nums}`)
    for(let i=1;i<nums.length;i++){

        //sout(`iter at ${i}`)
        //sout(nums)
        if(nums[i]<nums[i-1]){
            let ntbi=nums[i]
            nums.splice(i,1)

            for(let j=0; j<i; j++){
                if(nums[j]>ntbi){
                    nums.splice(j,0,ntbi)
                    sout(`break`)
                    break}
            }
        }
        //sout(`iter at ${i}`)
        //sout(nums)
    }
    sout(`final ${nums}`)
}

function quickSort(nums){
    sout(`start ${nums}`)
    pivot= nums[nums.length-1]
    sml=[]
    lrg=[]
    breakDown()

    function breakDown(){

        for(let i=0;i<nums.length-1;i++){
            if(nums[i]<pivot){
                sml.push(nums[i])
                continue
            }
            else(lrg.push(nums[i]))

        }
    }

        if(nums.length==1){return}

        sout(sml)
        sout(pivot)
        sout(lrg)

        sout(`${[...sml]} ${pivot} ${[...lrg]}`)
}

function mergeSort(ray){

    function split(nums){
        for(let i=0;i<nums.length-1;i++){
            if(nums.length!=1){
            }
        }
    }
}

function cartesianProd(){
    let alf = [1,2]
    let bet = [3,4,5]
    let newRay =[]

    for(let i=1;i<=alf.length;i++){

        for(let j=1;j<=bet.length;j++){
            newRay.push(alf[i-1]*bet[j-1])
        }
    }
    sout(newRay)
}

function cartesianProd2(){
    let alf = [5,7]
    let bet = [3,4,5]
    let temp=[]
    
                Array(alf.length).fill({})
                .map((x,i)=> 
                    {
                        bet.forEach((y,j)=>{
                            temp.push(alf[i]*bet[j])
                        })
                        //return bet.forEach((y,j)=>{temp.push(alf[i]*bet[j])})
                        //bet.forEach((y,j)=>{temp.push(bet[j]);return bet[j]})
                    }
                )
    sout(temp)
}

function climbStair(){

    let steps=7

    let count = [0,1]
    initvar=steps-count.length
    
    //let numOfWays= [0,1].concat(Array(initvar).fill())

    //best way to map from a non-zero i
    //Array(initvar).fill()

    Array(steps).fill()
    .map((x,i)=>count.push(count[i]+count[i+1]))

    sout(count[count.length-1])
}

function hanoiTower(){
    n=7
    let b=[],c=[]
    a= Array(n).fill({}).map((x,i)=>i+1)
    const final=[...a]
/*
    do{
        //to loc, from loc
       c.unshift( a.slice(0,1))
       b.unshift( a.slice(0,1))

       a.unshift( c.slice(0,1))
       c.unshift( b.slice(0,1))
       c.unshift( a.slice(0,1))
                            //end
//third
       b.unshift( a.slice(0,1))
       b.unshift( c.slice(0,1))
       a.unshift( c.slice(0,1))
       a.unshift( b.slice(0,1))
        {b<-c ..cue top...}
       c.unshift( b.slice(0,1))
//cue to top

//fourth

       b.unshift( a.slice(0,1))
        
        //c=[...final]

    }
    while(c=!final)

        */

    sout(a)
}

function reverseStringRecur(){
    let str = "I am a software engineer"
    let strRev =[]
    let i=0

    sout(strRev)
    sout(str)

    loop()

    function loop(){
        if (str.length<=strRev.length) {return}
        //strRev.concate(str.split('').pop())
        strRev=str[i].concat(strRev)
        i+=1
        loop()
    }

    sout("\n")
    sout(strRev)
    sout(str)
}

    //hash-map, hash table
/*
function hashLearn(){

    class HashTable{
        constructor(size){
            this.table=Array(size)
            this.size=size
        }
    }

    hash(key) {
        let total=0
        key.forEach((x,i)=>total+=key.ptscharCodeAt(i))

        return total % this.size
    }

    set(key, value){

    }

    get(key){

    }

    remove(key){

    }


    const lookupPair =new HashTable(5)



}
*/

function lrnMaps(){
    tabs= Array(26).fill().map((x,i)=>[String.fromCharCode(97+i),i])
    isl = new Map()

    //Array(26).fill().forEach((x,i)=>isl.set(String.fromCharCode(97+i),i))

    for(var i=0;i<26;i++){
        isl.set(String.fromCharCode(97+i),i+1)
    }

    for(const [key, value] of isl){

        sout(`${key} is the ${value} position of the alphabet`)
    }
    //let smlIsl = structuredClone(isl)
    

}

function sout(x){
    console.log(`${x}`)
}

function init(){
    jay = [-6,20,8,-2,4]
    ray = [-6,20,8,-2,4]
    //reverseStringRecur()
}

window.onload= init()

