console.log('This is Index.js');
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let input = '';
for(button of buttons){
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerText == 'X'){
            input += '*';
        }
        else if(e.target.innerText == 'C'){
            input = '';
        }
        else if(e.target.innerText == '<-'){
            input = Math.floor(input/10);
        }
        else if(e.target.innerText == '='){
            input = eval(input);
        }
        else{
            input += e.target.innerText;
        }
        screen.value = input;
    })
}