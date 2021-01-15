
document.addEventListener("keydown", function(event) {
  if(event.key == "a") {
      console.log("The 'A' key is pressed");
      let audioA = new Audio("white_keys/A.mp3");
      audioA.load();
      audioA.play();

  }
});
document.addEventListener("keydown", function(event){
  if(event.key == "s") {
      console.log("The 'S' key is pressed");
      let audioS = new Audio("white_keys/S.mp3");
      audioS.load();
      audioS.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "d") {
      console.log("The 'D' key is pressed");
      let audioD = new Audio("white_keys/D.mp3");
      audioD.load();
      audioD.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "f") {
      console.log("The 'F' key is pressed");
      let audioF = new Audio("white_keys/F.mp3");
      audioF.load();
      audioF.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "g") {
      console.log("The 'G' key is pressed");
      let audioG = new Audio("white_keys/G.mp3");
      audioG.load();
      audioG.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "h") {
      console.log("The 'H' key is pressed");
      let audioH = new Audio("white_keys/H.mp3");
      audioH.load();
      audioH.play();
  }
});
document.addEventListener("keydown", function(event) {
  if(event.key == "j") {
      console.log("The 'J' key is pressed");
      let audioJ = new Audio("white_keys/J.mp3");
      audioJ.load();
      audioJ.play();
  }
});

document.addEventListener("keydown", function(event){
  if(event.key == "w" || event.key == "e" || event.key == "t" || event.key == "y" || event.key == "u" ) {
      if(event.key == "w"){
          console.log("The 'W' key is pressed");
          let audioW = new Audio("black_keys/W.mp3");
          audioW.load();
          audioW.play();
      }
      else if(event.key == "e") {
          let audioE = new Audio("black_keys/E.mp3");
          audioE.load();
          audioE.play();
      }
      else if(event.key == "t"){
          let audioT = new Audio("black_keys/T.mp3");
          audioT.load();
          audioT.play();
      }
      else if(event.key == "y") {
          let audioY = new Audio("black_keys/Y.mp3");
          audioY.load();
          audioY.play();
      }
      else if(event.key == "u") {
          let audioU = new Audio("black_keys/U.mp3");
          audioU.load();
          audioU.play();
      }
      else {
          console.log("Wrong key was pressed.");
      }

  }
});
