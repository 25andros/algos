
function dual(){

    jazz =Array(7).fill().map((x,i)=>(
        x= (Array(7).fill().map((x,i)=>i))
    ))

    board =Array(7).fill([]).map((x,i)=>(x=[i,i]))


    console.log(jazz)
    console.log(board)
}

function essay(dimension){

    jazz =Array(dimension).fill().map((x,iterate)=>(
        x= (Array(iterate).fill().map((x,i)=>iterate))
    ))
    console.log(jazz)

}

function wmProb(customers){
    total=[]
    //total = Array(customers.length).fill()
    console.log(total)

    customers.forEach((x,i)=>
        total[i]= x.reduce((y,j)=>y+j)

        //customers.forEach(j=>total[i]+=j)
        //console.log(x[1])
    )

    console.log(total)
    console.log(Math.max(...total))
}

function init(){
    accounts = [[1,5],[7,3],[3,5]]
    wmProb(accounts)
}

window.onload= init()
