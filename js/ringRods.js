function countPoints(rings){
    let hold= rings.match(/\w\d/gi)
    console.log(hold)

    let rods = [... new Set(rings.match(/\d/g).map((x,i)=>Number(x))) ]
    console.log(rods)

    let ringsOnRods = Array(rods.length).fill("")
    console.log(ringsOnRods)

    hold.forEach((x,i)=>

        {
            let numb= (hold[i].match(/\d/))
            let ltr= (hold[i].match(/\w/))
        console.log(numb[0] )
        console.log(ltr[0] )
    
            if(ringsOnRods[numb[0]].search(ltr)==-1)
            {
                ringsOnRods[numb[0]].concat(ltr[0]),
                console.log(ringsOnRods )
            }

        }
    )

    console.log(ringsOnRods)

/*
    //get array of numbers
    cheese = []
    rings.match(/\d/g).forEach((x,i)=>cheese[i]=Number(x)) 
    rings = [...new Set(cheese)]
    console.log(cheese)
*/

    //rods= Math.max(...[hold.match(/\d/gi)])
    //console.log(rods)
}

function init(){
    rings = "B0B6G0R6R0R6G9"
    countPoints(rings)
}

window.onload= init()
