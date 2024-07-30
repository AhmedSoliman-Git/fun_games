let TheDiv = document.querySelector(".container")
let counts = document.getElementById("counts")
let questionSpace = document.querySelector(".Question h2")
let button = document.getElementById("bt")
let spansContainer = document.querySelector(".spans")
let spanss = document.querySelectorAll(".spans span")
let RadioDiv = document.querySelector(".div")
let bt = document.getElementById('bt')
let spansDiv = document.querySelector(".ourS .spans")
let theRightAnserwsCount = document.getElementById("RightCount")
let lastSpan = document.getElementById("span2")
let theAppearMessage = document.querySelector(".TheMessage")
let FirstSpan = document.getElementById("Firstspan")
let SecondSpan = document.getElementById("SecondSpan")
let thirdSpan = document.getElementById("ThirdSpan")
let LastSeconds=1;
let currentIndex = 0;
let rightAnswerCount = 0
let OurCount= 1 ;
let rightNumbers=0;
let badAnswer = 0 ;
let lastx = 0 



function gets(){
    let request = new XMLHttpRequest();
    request.onreadystatechange=function(){
    if(this.status===200&&this.readyState===4){
        let OurObject = JSON.parse(this.responseText)
        let ObjectCount = OurObject.length;
        //  +++++++++++++++++++++++++++++++++
        spans(OurObject)
        setQuestionData(OurObject[currentIndex],ObjectCount)
        counts.innerHTML=ObjectCount
        lastSpan.innerHTML=ObjectCount

        //+++++++++++++++++++++++++++++++++++

        button.onclick = () => { 
        let theRightAnswer = OurObject[currentIndex].rightAnswer
        currentIndex++
        checkAnswers(theRightAnswer,ObjectCount)
        questionSpace.innerHTML=""
        RadioDiv.innerHTML = ""
        setQuestionData(OurObject[currentIndex],ObjectCount)
        SpansChanger(OurCount)
        OurCount++
        badAnswer++
        lastx++
        TheController(lastx,ObjectCount)
    }
        }

}
    
request.open("GET","memeory.json")
request.send()
}
    gets();


    // Spans length //
   function spans(theLengthOFz){
    for(i = 0 ; i < theLengthOFz.length ; i++){
        let SpanDiv = document.createElement("span")
        spansContainer.append(SpanDiv)
        SpanDiv.className="done"
    }
   }
//    Spans length End //
// Start setQuestionData
function setQuestionData(obj,count){
    let questionText = document.createTextNode(obj.Title)
    questionSpace.append(questionText)
        for(let i = 1 ; i<=4 ; i++){
            // Start OF Radio
            let radioDiv = document.createElement('div')
            radioDiv.className="Radio_Selction"
            let radioBtn = document.createElement('input')
            radioBtn.type="radio";
            radioBtn.name = "Rd";
            radioBtn.id=`Radio${i}`
            radioBtn.dataset.answer=obj[`answer${i}`]
            if(i === 1){
                radioBtn.checked = true
            }
            
            //End of Radio
            let lable = document.createElement("label");
            lable.htmlFor=`Radio${i}`
            let labelText= document.createTextNode(obj[`answer${i}`])
            lable.appendChild(labelText)
            radioDiv.appendChild(radioBtn)
            radioDiv.appendChild(lable)
            RadioDiv.appendChild(radioDiv)
        }

}
// End setQuestionData

function checkAnswers(theRightAnswer,Qcount){
    let radios = document.getElementsByName("Rd")
    let choosen;
    for (let i = 0 ; i <radios.length ; i++){
        if(radios[i].checked){
        choosen = radios[i].dataset.answer
      }
    }
    console.log(`the Right Answer is :  ${theRightAnswer}`)
    console.log(`the Choosen Answer is :  ${choosen}`)
    if(theRightAnswer.length === choosen.length){
        rightAnswerCount++
        console.log("Good Answer")
    }
    if(rightAnswerCount===Qcount){
      TheDiv.remove()
      currentIndex=0
      button.classList.add("stop")
      bt.classname="buttons stop"
      spansDiv.remove()
      theRightAnserwsCount.innerHTML=rightAnswerCount
      theAppearMessage.innerHTML="You Are Perfect :D"
      document.querySelector(".msg").style.display = "block"
      
    }
    if(badAnswer===Qcount-1){
        TheDiv.remove()
        currentIndex=0;
        button.classList.add("stop")
        bt.classname="buttons stop"
        spansDiv.remove()
        theRightAnserwsCount.innerHTML=rightAnswerCount
        console.log(`You Get ${rightAnswerCount}  from  ${Qcount}`)
        if(rightAnswerCount<5){
            console.log("You Lose")
            theAppearMessage.innerHTML="You Lose"
            document.querySelector(".msg").style.display = "block"
        }
        if(rightAnswerCount===5) {
            theAppearMessage.innerHTML="You just won"
            document.querySelector(".msg").style.display = "block"
        }
        if(rightAnswerCount<Qcount && rightAnswerCount>=5){
            theAppearMessage.innerHTML="You just won"
            document.querySelector(".msg").style.display = "block"
        }
    }
}

function SpansChanger(OurCount){
    let changes = document.querySelectorAll(".spans span");
    let changesAr = Array.from(changes);
    changesAr.forEach((change,changeIndex)=>{
        if(changeIndex===OurCount){
            change.classList.add("on")

        }

    })

}



function TheTime() {
    setTimeout(function(){
        FirstSpan.innerHTML = FirstSpan.innerHTML-1

    },1000)
   let Counter  = setInterval(function(){
        FirstSpan.innerHTML = FirstSpan.innerHTML-1
        if(FirstSpan.innerHTML==="0"){
            clearInterval(Counter)
        }
    },60000)
    let Counter2 = setInterval(function(){
        SecondSpan.innerHTML=SecondSpan.innerHTML-1 ;
        if(SecondSpan.innerHTML==="-1"){
           SecondSpan.innerHTML="59"
        }
      
        if(SecondSpan.innerHTML<10){
            SecondSpan.innerHTML = "0"+SecondSpan.innerHTML
        }
        if(FirstSpan.innerHTML=== "0" && SecondSpan.innerHTML=== "00"){
            console.log("Done")
            LastSeconds++
            console.log(LastSeconds)
            if(LastSeconds===3){
                clearInterval(Counter2)
                TheDiv.remove()
                currentIndex=0;
                button.classList.add("stop")
                bt.classname="buttons stop"
                spansDiv.remove()
                theRightAnserwsCount.innerHTML=rightAnswerCount
                theAppearMessage.innerHTML="You Lose"
                document.querySelector(".msg").style.display = "block"
            }
        }
       
      
      
    },1000)
  
}
TheTime()



function TheController(lastx,Qcount){
    if(lastx===Qcount){
        FirstSpan.innerHTML="0"
        SecondSpan.remove()
        thirdSpan.innerHTML="00"
    }

}


































































  // GetCount(z.length)
        // PutQuestion(z)
        // button.onclick=()=>{
        //     theRight = z[currentIndex].rightAnswer
        //     console.log(theRight)
        //     currentIndex++
        //     questionSpace.innerHTML=""
        //     RadioDiv.innerHTML=""
        //     PutQuestion(z)
        //     salam(currentIndex)
        //     choosenAnswer(theRight)

        

        // spans(z)
   //To but the count in the span  ; //
//     function GetCount(num){
//     counts.innerHTML=num
//     }
//     // end of function ; //

//     //Put question in Question space // 
//    function PutQuestion(theQuestion){
//     questionSpace.innerHTML=theQuestion[currentIndex].Title
//     for(let i = 1 ; i<=4 ; i++){
       
// // ###########################################################
//         let radioDiv = document.createElement('div')
//         radioDiv.className="Radio_Selction"
//         let radioBtn = document.createElement('input')
//         radioBtn.type="radio";
//         radioBtn.name = "Rd";
//         radioBtn.id=`Radio${i}`
//         radioDiv.append(radioBtn)
//         radioBtn.dataset.answer=theQuestion[currentIndex][`answer${i}`]
// // ###########################################################
//         let lable = document.createElement("label");
//         lable.innerHTML=theQuestion[currentIndex][`answer${i}`];
//         questionSpace.innerHTML=theQuestion[currentIndex].Title
//         lable.innerHTML=theQuestion[currentIndex][`answer${i}`];
//         lable.htmlFor=`Radio${i}`
//         lable.id =`label${i}`
//         radioDiv.append(lable)
//         RadioDiv.append(radioDiv)
       
        
        
        
//     }
//     console.log(currentIndex)
    
       
//     }
//     //End of Question put//
    

// 
// if(theRight===theChoosenAnswer){
//     console.log("DONE")
// }





// function salam(spanCo){
//     let bullets = document.querySelectorAll(".spans span");
//     let arrOFbullets = Array.from(bullets);
//     arrOFbullets.forEach((bullet,index)=>{
//         if(index===spanCo){
//            bullet.className = "on"
//         }
//     })

// }
// function choosenAnswer(theRight){
//     let Radaioo = document.getElementsByName("Rd")
//     let choosenWord ;
//     for(let i = 0; i<4 ; i++){
//         if(Radaioo[i].checked){
//             choosenWord =Radaioo[i].dataset.answer ;
//         }
//     }
//     console.log(choosenWord)

// }
