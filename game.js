  const grid_item = document.querySelectorAll('.grid_item');
  let turnedCard = false;
  let one;
  let two;


  function turnCard(){
    this.classList.add('turn');
    console.log(this);
    if(!turnedCard){
      turnedCard = true;
      one = this;    
    }   
    else{
      turnedCard = false;
      two = this;       
      matching();
    }
    }

    function matching(){
      if(one.dataset.set === two.dataset.set){
          stopCards();
      }   
      else{
          turnBack();
      }
    }

    function stopCards(){
      one.addEventListener('click', turnCard);
      two.addEventListener('click', turnCard);
    }

    function turnBack(){
      setTimeout(() => {
          one.classList.remove('turn');
          two.classList.remove('turn');
      }, 600);
    }

      shuffle = (function shuffle(){
      grid_item.forEach(card => {
          let randPosition = Math.floor(Math.random() * 12);
          card.style.order = randPosition;
      });
    })();
    
    grid_item.forEach(card => card.addEventListener('click', turnCard));
    

    module.exports = {
      turnCard: turnCard,
      matching: matching,
      stopCards: stopCards,
      turnBack: turnBack
    }