'use strict'

//!!!!!!is the Js file pluged into the html!!!!
////start     global variablils    start
//section tittle id
var pictuers = document.getElementById(pictuersWorking);
//image sorce 123
var choice1 = document.getElementById(choice1)
var choice2 = document.getElementById(choice2)
var choice3 = document.getElementById(choice3)

//null signifies a non set open value to the first impuut ?
var choice1 = null;
var choice2 = null;
var choice3 = null;

//datta extractor
var peoplesChoice = 0;
//
////end   global variables  end  //

//constructoer reconstruction
//funtio name and properties (atributs 'itsname' , theimage)
function creatChoice = (name, image){
  //properties in object
  this.name = name;
  this.image = Image;
  this.click = 0;
  this.view =0;
  
 creatChoice.allImage.push [this];
}

//random source generator from array creatchoice.allimages in constructor
function choiceGeni(){
  var raySelect = Math.floor(Math.random()* creatChoice.allImage.length );
  console.log('raySelectt', raySelect)
  return raySelect;
}
///end funtion raySelect is the random image.

// do somethiig with that photo
//start funtion render start  give the placeholders sometihging to hold
function renderChoice(){
  do {
  choice1Index =randomPic();
  choice2Index =randomPic();
  choice3Index =randomPic();

  // the 3 part nolove solution needs help would a swich be apopriate. 
}while (choice2 === choice2 && choice3)


//add one tothe views of the object Property view=0 fo rthe data exctractor peoplsChoice.

choice1.allImage[choice1].view++;
choice2.allImage[choice2].view++;
choice3.allImage[choice3].view++;

//send it to the html to be a choice
choice1.src = creatChoice.allImage[choice1Index].image;
choice2.src = creatChoice.allImage[choice2Index].image;
choice3.src = creatChoice.allImage[choice3Index].image;

}
//end funtion renderchoice  end

/// start   Event handler     start










// array of images

var assetArray = ['assets/bag.jpg','assets/banana.jpg','assets/bathroom.jpg', 'assets/boots.jpg', 'assets/breakfast.jpg', 'assets/bubblegum.jpg', 'assets/chair.jpg','assets/cthulhu.jpg','assets/dog-duck.jpg','assets/dragon.jpg','assets/pen.jpg','assets/pet-sweep.jpg','assets/scissors.jpg','assets/shark.jpg','assets/sweep.png','assets/tauntaun.jpg','assets/unicorn.jpg','assets/usb.gif','assets/water-can.jpg','assets/wine-glass.jpg'];



// //   START     TAKE-ONE     START
// function renderAsset(){
// var choice1= document.getElementById(choice1);
// var choice2= document.getElementById(choice2);

// var randomAsset1= renderAsset();
// var randomAsset2= renderAsset();

// do{
//   var randomAsset1= renderAsset();
//   var randomAsset2= renderAsset();
//   }while (randomAsset1 === randomAsset2);

//   // set the source of the image tag 

// choice1.src=  imageObject.allImage[randomAsset1].Image;
// choice2.src = imageObject.allImage[randomAsset2].image;

// }