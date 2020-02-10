window.onload = function()
{
  var d1 = "roll",d2 = "roll",d3 = "roll",d4 = "roll",d5 = "roll";
  //hold for d2
  // if(d1 == "hold" && d2 == "hold"  && d3 == "hold" && d4 == "hold" && d5 == "hold")
  //   alert("Game Over!!");
  var dice1 = document.getElementById("die01");
  dice1.addEventListener(
    "click", 
    function () {
      d1 = "hold"
    }, 
    false);

  //hold for d2
  var dice2 = document.getElementById("die02");
  dice2.addEventListener(
    "click", 
    function () {
      d2 = "hold"
    }, 
    false);

  //hold for d3
  var dice3 = document.getElementById("die03");
  dice3.addEventListener(
    "click", 
    function () {
      d3 = "hold"
    }, 
    false);

  //hold for d4
  var dice4 = document.getElementById("die04");
  dice4.addEventListener(
    "click", 
    function () {
      d4 = "hold"
    }, 
    false);

  //hold for d5
  var dice5 = document.getElementById("die05");
  dice5.addEventListener(
    "click", 
    function () {
      d5 = "hold"
    }, 
    false);

  var roller = document.getElementById("roller");
  roller.addEventListener(
    "click", 
    function () {
      var hand =[]
      hand[0] = Dice.roll(); 
      hand[1] = Dice.roll();
      hand[2] = Dice.roll();
      hand[3] = Dice.roll();
      hand[4] = Dice.roll();

      var ace = 0;
      var two = 0;
      var three = 0;
      var four= 0;
      var five = 0;
      var six = 0;
      
      var i;
      var sum =0;
      for (i = 0; i < hand.length; i++) {
        if(hand[i] == 1)
          ace++;
        if(hand[i] == 2)
          two++;
        if(hand[i] == 3)
          three++;
        if(hand[i] == 4)
          four++;
        if(hand[i] == 5)
          five++;
        if(hand[i] == 6)
          six++;
        sum = sum + hand[i];
      }
      if(ace == 3 || two == 3 || three == 3 || four == 3 || five == 3 || six == 3)
        show("three",sum);
      if(ace == 4 || two == 4 || three == 4 || four == 4 || five == 4 || six == 4)
        show("four", sum);
      
      
      // if(ace == 4 || two == 4 || three == 4 || four == 4 || five == 4 || six == 4)
      //   show("full", sum);
      // show("small", four);
      // show("large", five);q

      if(d1 == "roll")
        Dice.showDie("die01", hand[0]);
      if(d2 == "roll")
        Dice.showDie("die02", hand[1]);
      if(d3 == "roll")
        Dice.showDie("die03", hand[2]);
      if(d4 == "roll")
        Dice.showDie("die04", hand[3]);
      if(d5 == "roll")
        Dice.showDie("die05", hand[4]);
    }, 
    false);


  Dice.showDie("die01", 0);
  Dice.showDie("die02", 0);  
  Dice.showDie("die03", 0);  
  Dice.showDie("die04", 0);  
  Dice.showDie("die05", 0);  
  
  
  function show(id,num) {
    var html = num;
    document.getElementById(id).innerHTML = html;
  }
}