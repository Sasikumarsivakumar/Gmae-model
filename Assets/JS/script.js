"use strict";
let value;
let value1;

document.querySelector('.btn').addEventListener('click',function(){
    
    value= Math.trunc(Math.random()*20);
    
    // document.querySelector('.random-value').innerHTML=value;
    document.querySelector('.game-win').innerHTML=20;
    document.querySelector('.random-value').innerHTML='?';
    document.querySelector('.container').style.backgroundColor = '#000';
  
});
document.querySelector('.check-box').addEventListener('click', function(){
    let score =document.querySelector('.game-win').innerHTML;
    let highscore = document.querySelector('.game-highscore').innerHTML;
    
    // console.log(value);
    let val1=document.querySelector('.empty-box').value;
    // console.log(val1);
    val1=Number(val1);
    
    let guessing = document.querySelector('.empty-box');
    if(guessing.value){
        if (Number(value)===val1) {
            value1 = `🎉 correct Number `
            document.querySelector('.container').style.backgroundColor = '#0f0';
            document.querySelector('.random-value').innerHTML=value;
           
            if(score>highscore){
                document.querySelector('.game-highscore').innerHTML=score;
            }
        }else if (Number(value)<val1){
            value1 = `🙁 The value is High`
            document.querySelector('.container').style.backgroundColor = '';
            score--;
            document.querySelector('.game-win').innerHTML=score;
           
        }else{
            value1=`🤦‍♂️The value is Small`
            document.querySelector('.container').style.backgroundColor = '';
            score--;
            document.querySelector('.game-win').innerHTML=score;
        }
        if(score<=0){
            document.querySelector('.container').style.backgroundColor = '#f00';
            value1=`😭 You loss the game`
        }
    }else{
        value1=`Please enter number`
    }
    
    
    
    // console.log(value1);
    document.querySelector('h5').innerHTML=value1;

});
