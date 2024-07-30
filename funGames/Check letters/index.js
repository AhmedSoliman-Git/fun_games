let gameName = "Check Word Game"
document.title = gameName ;
document.querySelector("h1").innerHTML = gameName;
let footer = document.querySelector("footer").innerHTML = `${gameName} Is Created BY Ahmed Soliman`;
let messageP = document.querySelector('.message p');
let messageSpan = document.querySelector('.message span');
let hints = document.querySelector('.hint')
let letterCount = 6 ; 
let letterTryies = 6 ;
let letterContainer = document.querySelector(".inputs") ;
let currentTry = 1 ;
let numberOfHints = 2 ;
const languages = ['create','update','delete','insert','elzero','master','branch','school'] ;
const randomWord=(languages[Math.ceil(Math.random() * languages.length-1)]);
console.log(randomWord)
function generateLetters(){
    for(let i = 1  ; i <= letterTryies ; i++){
        let Div = document.createElement("div") ;
        let span = document.createElement("span");
        span.innerHTML = `Try-${i}`
        Div.appendChild(span)
        letterContainer.appendChild(Div)
        Div.className = `Try-${i}`
        if(Div.className !== `Try-1`){
            Div.classList.add(`disapled-inputs`)
        }

        for(let j = 1 ; j <= letterCount ; j++){
            let input = document.createElement("input");
            input.className = `guess-${i}-letter-${j}`
            input.type = "text" ;
            input.maxLength = 1 ;
            Div.appendChild(input)
        }
    }
    letterContainer.children[0].children[1].focus();


    const disapledInput = document.querySelectorAll('.disapled-inputs input');
    disapledInput.forEach((input) => (input.disabled = true));
    const Inputs = document.querySelectorAll('input');
    
    
    Inputs.forEach((input,index)=>{
        input.addEventListener('input',function(){
        this.value = this.value.toUpperCase();
        // console.log(index)
        const nextInput = Inputs[index + 1]
        if(nextInput) nextInput.focus();
        })
        input.addEventListener("keydown",function(event){
        const currentIndex = Array.from(Inputs).indexOf(event.target) ;
        if(event.key == "ArrowRight"){
            let nextInput = currentIndex+1 ;
            if(nextInput < Inputs.length)Inputs [nextInput].focus();
        }

        if(event.key == "ArrowLeft"){
            let prevInput = currentIndex - 1 ;
            if(prevInput >= 0 )Inputs [prevInput].focus();
        }


        })
    })
    const check = document.querySelector('.check');
    check.addEventListener("click",handleClick);
    function handleClick(){
        let success = true ;
        for(let i = 1 ; i<=letterCount ; i++){
            let inputField = document.querySelector(`.guess-${currentTry}-letter-${i}`)
            let letterValue = inputField.value.toLowerCase();
            if(letterValue === randomWord[i-1] ){
            inputField.classList.add('yes-in-place')
            }
            else if (randomWord.includes(letterValue)&&letterValue!=''){
            inputField.classList.add('not-in')
            success=false;
            }
            else{
            inputField.classList.add('not')
            success=false;
        }

    }
    if(success){
        messageP.innerHTML="You Won the word is";
        messageSpan.innerHTML = randomWord.slice(0,1).toUpperCase() +randomWord.slice(1,randomWord.length) ; 
        let allInputsDivs = document.querySelectorAll('.inputs > div')
        allInputsDivs.forEach((div)=>{
            div.classList.add('disapled-inputs')
        })
        check.disabled = true;
        check.classList.add('disabled')
    }
    else {
document.querySelector(`.Try-${currentTry}`).classList.add("disapled-inputs")
let currentInputTry = document.querySelectorAll(`.Try-${currentTry} input`);
currentInputTry.forEach((input)=>{
input.disabled=true
})
currentTry++ ;
let nextTry = document.querySelectorAll(`.Try-${currentTry} input`);
nextTry.forEach((input)=>(input.disabled = false));
let checkEl =document.querySelector(`.Try-${currentTry}`)
if(checkEl){
    document.querySelector(`.Try-${currentTry}`).classList.remove('disapled-inputs') ;
    checkEl.children[1].focus();
}
else{
    messageP.innerHTML="You Lose the word is";
    messageSpan.innerHTML = randomWord.slice(0,1).toUpperCase() +randomWord.slice(1,randomWord.length) ;
    let allInputsDivs = document.querySelectorAll('.inputs > div')
    allInputsDivs.forEach((input)=>{
        input.classList.add('disapled-inputs')
    })
    check.disabled = true;
    check.classList.add('disabled')
    hints.classList.add('disabled')
    hints.style.backgroundColor = '#a6a4a4';
    }
   }
   //let's get the empty input ;
}

hints.innerHTML = `<span>${numberOfHints} </span>Hint`
hints.addEventListener('click',handleHint)
function handleHint(){
    numberOfHints-- ;
    hints.innerHTML = `<span>${numberOfHints} </span>Hint`
    if(numberOfHints == 0 ) {
    hints.disabled = true;
    hints.classList.add('disabled') ;
    hints.style.backgroundColor = '#a6a4a4';
}
let notDisableDivsInputs = document.querySelectorAll('.inputs div:not(.disapled-inputs) input')
const emptyInputs = Array.from(notDisableDivsInputs).filter((input)=> input.value =='')
if(emptyInputs.length > 0){
    let randomIndex = Math.floor(Math.random()* emptyInputs.length);
    let randomInput = emptyInputs[randomIndex];
    let randomInputIndex = Array.from(notDisableDivsInputs).indexOf(randomInput);
    if(randomInputIndex !== -1 ) randomInput.value = randomWord[randomInputIndex].toUpperCase();


}
}
document.addEventListener("keyup",function(event){
    if(event.key == 'Enter'){
        if(document.querySelector(`.Try-${currentTry}`))handleClick();

    }
})


    }
window.onload =()=>{
    generateLetters()
}


