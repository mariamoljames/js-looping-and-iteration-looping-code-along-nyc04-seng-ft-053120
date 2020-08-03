function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  

  function countDown(number) {
      let i=number-1
    while (i >= 0) {
      console.log(i);
      i-=1
    }
    console.log(number);
  } 
  
