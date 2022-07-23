AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function() {
      this.handleMouseEnterEvents()
    },

    tick: function(){
      this.checker()
    },
    
    mainfunc: function(){

    },

    checker: function(){
      var b1, b2, b3, b4, b5, b6, b7, b8, b9;      
  
      b1Elem = document.getElementById("b1");
      b2Elem = document.getElementById("b2");
      b3Elem = document.getElementById("b3");
      b4Elem = document.getElementById("b4");
      b5Elem = document.getElementById("b5");
      b6Elem = document.getElementById("b6");
      b7Elem = document.getElementById("b7");
      b8Elem = document.getElementById("b8");
      b9Elem = document.getElementById("b9");
      
      b1 = b1Elem.getAttribute("value")
      b2 = b2Elem.getAttribute("value")
      b3 = b3Elem.getAttribute("value")
      b4 = b4Elem.getAttribute("value")
      b5 = b5Elem.getAttribute("value")
      b6 = b6Elem.getAttribute("value")
      b7 = b7Elem.getAttribute("value")
      b8 = b8Elem.getAttribute("value")
      b9 = b9Elem.getAttribute("value")

      

    
      if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
    b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
    window.alert('Player X won');
    location.reload()
    window.reload()
    
  }
  else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
    b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
   

    window.alert('Player X won');
    location.reload()
    window.reload()

  }
  else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
    b8 == 'X') && (b9 == 'x' || b9 == 'X')) {

    window.alert('Player X won');
    location.reload()
    window.reload()

  }
  else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
    b6 == 'X') && (b9 == 'x' || b9 == 'X')) {

    window.alert('Player X won');
    location.reload()
    window.reload()

  }
  else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b9 == 'x' || b9 == 'X')) {

    window.alert('Player X won');
    location.reload()
    window.reload()

  }

  else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b7 == 'x' || b7 == 'X')) {

    window.alert('Player X won');
    location.reload()
    window.reload()
    }
  else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
   
    window.alert('Player X won');
    location.reload()
    window.reload()
    }
  else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b6 == 'x' || b6 == 'X')) {

    window.alert('Player X won');
    location.reload()
    window.reload()
  }

  // Checking of Player X finish
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
    b2 == '0') && (b3 == '0' || b3 == '0')) {
   
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }
  else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
    b4 == '0') && (b7 == '0' || b7 == '0')) {
   
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }
  else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
    b8 == '0') && (b9 == '0' || b9 == '0')) {
    
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }
  else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
    b6 == '0') && (b9 == '0' || b9 == '0')) {
   
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }
  else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
    b5 == '0') && (b9 == '0' || b9 == '0')) {
 
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }
  else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
    b5 == '0') && (b7 == '0' || b7 == '0')) {
  
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }
  else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
    b5 == '0') && (b8 == '0' || b8 == '0')) {
   
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }
  else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
    b5 == '0') && (b6 == '0' || b6 == '0')) {
   
    window.alert('Player 0 won');
    location.reload()
    window.reload()
  }

  // Checking of Player 0 finish
  // Here, Checking about Tie
  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
    || b2 == '0') && (b3 == 'X' || b3 == '0') &&
    (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
    b5 == '0') && (b6 == 'X' || b6 == '0') &&
    (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
    b8 == '0') && (b9 == 'X' || b9 == '0')) {
      
      window.alert('Match Tie');
      location.reload()
    window.reload()
  }
  
      //b1.setAttribute('value', "X");
     // console.log(b1)
      //console.log(c)*/
    },

    

    


    handleMouseEnterEvents: function(){
      this.el.addEventListener("mouseenter", evt=>{
        this.el.addEventListener("click", evt=>{
          var turn = document.getElementById('flag').value
          this.el.setAttribute('visible', "true")
          if(this.el.getAttribute("value")==="empty"){
            if(turn==="1"){
              this.el.setAttribute('src', "./xsign.png")
              this.el.setAttribute('value', "X")
              document.getElementById('flag').value = "0"
            }
            else{
              this.el.setAttribute('src', "./osign.png")
              document.getElementById('flag').value = "1" 
              this.el.setAttribute('value', "0")
            }
          }
          
        })

      })
    }
    
  });
  