let audioA = new Audio("white_keys/A.mp3");
let audioS = new Audio("white_keys/S.mp3");
let audioD = new Audio("white_keys/D.mp3");
let audioF = new Audio("white_keys/F.mp3");
let audioG = new Audio("white_keys/G.mp3");
let audioH = new Audio("white_keys/H.mp3");
let audioJ = new Audio("white_keys/J.mp3");
let audioW = new Audio("black_keys/W.mp3");
let audioE = new Audio("black_keys/E.mp3");
let audioT = new Audio("black_keys/T.mp3");
let audioY = new Audio("black_keys/Y.mp3");
let audioU = new Audio("black_keys/U.mp3");


document.addEventListener("keydown", function(event) {
  if(event.key == "a") {
      console.log("The 'A' key is pressed");
      
      audioA.load();
      audioA.play();

  }
});
document.addEventListener("keydown", function(event){
  if(event.key == "s") {
      console.log("The 'S' key is pressed");
      
      audioS.load();
      audioS.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "d") {
      console.log("The 'D' key is pressed");
      
      audioD.load();
      audioD.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "f") {
      console.log("The 'F' key is pressed");
      
      audioF.load();
      audioF.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "g") {
      console.log("The 'G' key is pressed");
      
      audioG.load();
      audioG.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "h") {
      console.log("The 'H' key is pressed");
      
      audioH.load();
      audioH.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "j") {
      console.log("The 'J' key is pressed");
     
      audioJ.load();
      audioJ.play();
  }
});

document.addEventListener("keydown", function(event){
  if(event.key == "w" || event.key == "e" || event.key == "t" || event.key == "y" || event.key == "u" ) {
      if(event.key == "w"){
          console.log("The 'W' key is pressed");
          
          audioW.load();
          audioW.play();
      }
      else if(event.key == "e") {
          
          audioE.load();
          audioE.play();
      }
      else if(event.key == "t"){
          
          audioT.load();
          audioT.play();
      }
      else if(event.key == "y") {
          
          audioY.load();
          audioY.play();
      }
      else if(event.key == "u") {
          
          audioU.load();
          audioU.play();
      }
      else {
          console.log("Wrong key was pressed.");
      }

  }
});
