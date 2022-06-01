// Code your solutions in this file
function writeCards(newArray, event){
    let thankYouCards=[]
    for(let i=0; i < newArray.length; i++){
        thankYouCards.push(`Thank you, ${newArray[i]}, for the wonderful ${event} gift!` )
        
    }
    return thankYouCards
}
function countDown(Number){
    while(Number > 0){
        console.log(Number);
        Number -=1;
    }
    console.log(Number);
}