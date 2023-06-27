function lrnCue(){

    class Quebec{
        constructor(){
            this.hold=[]
        }

        peekHead(){
            if(this.hold.length!=0){
                return (this.hold[0])
            }
        }
        peekTail(){
            if(this.hold.length!=0){
                return this.hold[this.hold.length-1]
            }
        }
        isEmpty(){
            return this.hold.length==0
        }
        enque(item){
            this.hold.push(item)
        }
        deque(){
            this.hold.shift()
        }
        size(){
            return this.hold.length
        }
        clear(){
            this.hold=[]
        }
        print(){
            sout(this.hold.toString())
        }
    }
    deck = new Quebec()


}


function sout(x){
    console.log(`${x}`)
}

function init(){
    lrnCue()
}

window.onload= init()

