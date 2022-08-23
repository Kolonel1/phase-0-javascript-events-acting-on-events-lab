

// Your code here
document.addEventListener('keydown',function (event){
    console.log(event);//it seems this keydown is what is going to be passed as the argument
})
/*document.addEventListener('keydown',function (e){
    if(event.key === 'ArrowLeft'){
        const leftNumbers = dodger.style.left.replace('px','');
        const left = parseInt(leftNumbers,10);

        dodger.style.left = `${left - 1}px`;
    }
})  */

const dodger = document.getElementById('dodger');
console.log(dodger);
dodger.style.backgroundColor = '#ff69b4';
dodger.style.bottom = '0px';

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('px','');
    const left = parseInt(leftNumbers,10);
    if(left>0){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown',function(e){
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
    else if(e.key ==='ArrowRight'){
        moveDodgerRight();
    }
})


function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace('px','');
    const right = parseInt(rightNumbers,10);
    if(right<360){
        dodger.style.left = `${right + 1}px`;
    }
}
document.addEventListener('keydown',function (e){
    if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }
})

//remember that when a callback funtion starts to have multiple callback functions 
//try to remove one and place it elsewhere
