let ALL = "abcdefghijklmnopqrstuvwxyz-"
let letters = document.querySelector(".letters");
let man = document.getElementById("man")

let ourArray =  Array.from(ALL)
ourArray.forEach((letter)=>{
    let spann= document.createElement("span")
    let comment = document.createTextNode(letter)
    spann.appendChild(comment)
    spann.className="spans"
    letters.appendChild(spann)

    
})
let My_Obj = {
    programming:["php","Html","Js","NodeJs","Python","Css"],
    Movies:["hulk","spider man","hankok","venom","nemo","Mission Impossible"],
   " Effective_ people":["Osama Elzero","Ahemd Abo zaid","Amir Mounir","Mohammed Yasser"],
}
let keys = Object.keys(My_Obj)
let Random_Number=Math.floor(Math.random()* keys.length )
let myKeysName = keys[Random_Number];
let values = Object.values(My_Obj)[Random_Number];
let diffrentValue = Math.floor(Math.random()*values.length)
let theFinalValue = values[diffrentValue]
console.log(myKeysName)
console.log(values)
console.log(theFinalValue)
document.getElementById("theCat").innerHTML= myKeysName;
//##############################################################//
let theEntire_Letter = document.querySelectorAll(".the-Entire-Letter span")



let TheLetters = document.querySelector("#z");
let theWorkedONit = Array.from(theFinalValue);

console.log(theWorkedONit.join(""))
theWorkedONit.forEach((letter)=>{
    let spn = document.createElement('span');
    if(letter===" "){
        spn.className="Word-Breaker"
    }
    TheLetters.appendChild(spn)
   })
   //##################################################################//
   let catcher = document.querySelectorAll(".letters .spans")
   let Wrong = 1;
   let bt= [];
   document.addEventListener("click",function(e){
    let theBasic= false;

       if(e.target.className==="spans"){
         let checked_letter =e.target.classList.add("active");
         theWorkedONit.forEach((el,index)=>{
            el=el.toLowerCase()
         if(e.target.innerHTML===el){
            let theEntire_Letter = document.querySelectorAll(".the-Entire-Letter span")

            theEntire_Letter.forEach((span,indexSpan)=>{

                if(indexSpan===index){
                    span.innerHTML=el;
                    bt.push(el);
                   theWorkedONit.forEach((letter)=>{
                    if(letter===" "){
                      let xo= theWorkedONit.join("").split(" ").join("")
                      if(bt.length===xo.length){
                        Done();
                    }
                    }
                   })
                    if(bt.length===theFinalValue.length){
                        Done();
                    }
                }
                if(e.target.innerHTML===el){
                    theBasic=true;
                }
            })
         }  
         })
         console.log(theBasic)
         console.log(bt)
         if(theBasic===false){
            man.classList.add(`bad${Wrong++}`)
        }
        if(Wrong===11){
            console.log("Stop")
            okay();
        }
       

       }
       
    
     

} 
       
    
)
function okay(){
 let x = document.createElement("div");
 let y = document.createTextNode("You Lose")
 x.append(y)
  x.className="hi"
 document.body.append(x)
 letters.classList.add("none")

}

function Done(){
    let z = document.createElement("div");
    let zz = document.createTextNode("You Win :D")
    z.append(zz)
     z.className="hi"
    document.body.append(z)
    letters.classList.add("none")

}



// catcher.forEach((span)=>{
//    span.addEventListener("click",function(e){
//     catcher.forEach((span)=>{
//         span.classList.remove("active")

//     })
//             e.currentTarget.classList.add('active')

//     })

// })

// let z = Array.from(theFinalValue)
// z.forEach((el)=>{
//     if(el==!span.innerHTML){
//         span.classList.add("active")
//     }
// })

let Ahemd = "ahme sd  a l "
let b = Array.from(Ahemd);
console.log(b.join("").split(" ").join(""))

