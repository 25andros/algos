function lrnHashMap(){

    class HashMap{
        constructor(i){
            this.table=new Array(i)
            this.size = i
        }

        init(){
            for(var i=0;i<26;i++){
                this.table[i]=[String.fromCharCode(97+i),(i+1)]
            }
        }
        init2(){
            this.table.fill({}).forEach((x,i)=>this.table[i]=[String.fromCharCode(97+i),i+1])
            //this.table.fill().map((x,i)=>[String.fromCharCode(97+i),i])
        }
        //ultimately the table has index numbers, that are independent, and not contiuguous necessarily

        //key is translated into a number
        hash(key){

            let total=0
            for(let i=0;i<key.length;i++){
                total+=key.charCodeAt(i)
            }
            return total% this.size
        }

        set(fauxIndex,value){
            var index = this.hash(fauxIndex)
            this.table[index]=value
        }

        get(item){
            var index=this.hash(item)
            return this.table[index]
        }

    }
        core = new HashMap(26)

}

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
    lrnHashMap()
}

window.onload= init()

