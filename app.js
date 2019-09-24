

//!!!!!!is the Js file pluged into the html!!!!
////start     global variablils    start
//section tittle id
var pictures = document.getElementById('pictures');
//image sorce 123
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
CreatChoice.allImage = [];
//null signifies a non set open value to the first impuut ?
choice1.src = null;
choice2.src = null;
choice3.src = null;

//datta extractor
var peoplesChoice = 0;
//
////end   global variables  end  //
console.log('start works');
//constructoer reconstruction
//funtio name and properties (atributs 'itsname' , theimage)
function CreatChoice (name, image){
  //properties in object
  this.name = name;
  this.image = image;
  this.click = 0;
  this.view = 0;

  CreatChoice.allImage.push (this);
}


//random source generator from array CreatChoice.allimages in constructor
function choiceGeni(){
  var raySelect = Math.floor(Math.random() * CreatChoice.allImage.length );
  console.log('raySelectt', raySelect);
  return raySelect;
}
// ///end funtion raySelect is the random image.

// // do somethiig with that photo
// //start funtion render start  give the placeholders sometihging to hold
function renderChoice(){
  do {
    var choice1Index = choiceGeni();
    var choice2Index = choiceGeni();
    var choice3Index = choiceGeni();

  // the 3 part nolove solution needs help would a swich be apopriate.
  }while (choice1Index === choice2Index || choice1Index === choice3Index || choice2Index === choice3Index);


  //add one tothe views of the object Property view=0 fo rthe data exctractor peoplsChoice.

  // choice1.allImage[choice1].view++;
  // choice2.allImage[choice2].view++;
  // choice3.allImage[choice3].view++;

  //send it to the html to be a choice
  choice1.src = CreatChoice.allImage[choice1Index].image;
  choice1.alt = CreatChoice.allImage[choice1Index].name;
  choice2.src = CreatChoice.allImage[choice2Index].image;
  choice2.alt = CreatChoice.allImage[choice2Index].name;
  choice3.src = CreatChoice.allImage[choice3Index].image;
  choice3.alt = CreatChoice.allImage[choice3Index].name;

// console.log(event, target , id);
}
// //end funtion renderchoice  end

// /// start   handle the user choice     start


function handleClickOnChoice(event){
  var clickChoice = event.target.alt;
  renderChoice();
  console.log(clickChoice);
  //when we clikkity
  for (var i = 0; i < CreatChoice.allImage.length; i++){
  console.log(CreatChoice.allImage[i].image);
    if (clickChoice === CreatChoice.allImage[i].name){
    CreatChoice.allImage[i].click++;
    console.table(CreatChoice.allImage);
  }
   }
  // if (clickChoice === choice1 || clickChoice === choice2 || clickChoice === choice3 ){

  //   peoplesChoice++;
  //   // we dont know which one yet buthe the count goes up
  //   if (clickChoice === choice1){
  //     CreatChoice.allImage[choice1Index].click++;
  //   }else if( clickChoice === choice2){
  //     CreatChoice.allImage[choice2Index].click++;
  //   }else if (clickChoice === choice3Index){
  //     CreatChoice.allImage[choice3Index].click++;
  //   } else{
  //     alert ('you didn\'t select an Image.');

  //   }
  // }
}

// if (peoplesChoice === 5){
// pictuers.removerEventListener ('click', handleClickOnChoice);
// alert = ('your finished with the choosing');
// for (var i=0; i < CreatChoice.allImage.length; i++){
//   var CreatChoice = CreatChoice.allImage[i];
//   console.log('$ {CreatChoice.name} recived ${CreatChoice.click} vote with ${createChoice.view}');
// }  else {
//     renderChoice();
//   }
// }





//i think a switch would be more approptiate then else if  but for the sake of time  i wante to get the idea down, wmight werk

/////////////////////////////////////////////////////////////// 23:20 9-23-19 demo refrece  line-86-87

function populateCreatChoiceAllImage(){
  for (var i = 0 ; i < assetArrayName.length; i ++){
    new CreatChoice (assetArrayName[i], assetArrayPath[i]);
  }
}

var assetArrayName = ['bag','banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];


// array of images

var assetArrayPath = ['assets/bag.jpg','assets/banana.jpg','assets/bathroom.jpg', 'assets/boots.jpg', 'assets/breakfast.jpg', 'assets/bubblegum.jpg', 'assets/chair.jpg','assets/cthulhu.jpg','assets/dog-duck.jpg','assets/dragon.jpg','assets/pen.jpg','assets/pet-sweep.jpg','assets/scissors.jpg','assets/shark.jpg','assets/sweep.png','assets/tauntaun.jpg','assets/unicorn.jpg','assets/usb.gif','assets/water-can.jpg','assets/wine-glass.jpg'];



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

populateCreatChoiceAllImage();
console.log (CreatChoice.allImage);
renderChoice();
pictures.addEventListener('click', handleClickOnChoice);
