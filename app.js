
//!!!!!!is the Js file pluged into the html!!!!
////start     global variablils    start

///array of names
var assetArrayName = ['bag','banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

// array of images
var assetArrayPath = ['assets/bag.jpg','assets/banana.jpg','assets/bathroom.jpg', 'assets/boots.jpg', 'assets/breakfast.jpg', 'assets/bubblegum.jpg', 'assets/chair.jpg','assets/cthulhu.jpg','assets/dog-duck.jpg','assets/dragon.jpg','assets/pen.jpg','assets/pet-sweep.jpg','assets/scissors.jpg','assets/shark.jpg','assets/sweep.png','assets/tauntaun.jpg','assets/unicorn.jpg','assets/usb.gif','assets/water-can.jpg','assets/wine-glass.jpg'];

//section tittle id
var pictures = document.getElementById('pictures');
//image ID (sorce 123)
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

//function name and properties (atributs 'itsname' , theimage)

function CreatChoice (name, image){
  //properties in object
  this.name = name;
  this.image = image;
  this.click = 0;
  this.view = 0;

  CreatChoice.allImage.push (this);
  
}  

function populateCreatChoiceAllImage(){
  for (var i = 0 ; i < assetArrayName.length; i ++){
    new CreatChoice (assetArrayName[i], assetArrayPath[i]);
  }  
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


  //send it to the html to be a choice

  //populat click count
  choice1.src = CreatChoice.allImage[choice1Index].image;
  choice1.alt = CreatChoice.allImage[choice1Index].name;
  choice2.src = CreatChoice.allImage[choice2Index].image;
  choice2.alt = CreatChoice.allImage[choice2Index].name;
  choice3.src = CreatChoice.allImage[choice3Index].image;
  choice3.alt = CreatChoice.allImage[choice3Index].name;
  //populat view count
  CreatChoice.allImage[choice1Index].view++;
  CreatChoice.allImage[choice2Index].view++;
  CreatChoice.allImage[choice3Index].view++;

}  
///////////unique array from class(Ron)
// //uniqueArray is where you will store the unique numbers that displayPics() creates in the while loops.
// //productArray will be wherever you are pushing your new instances to, so make changes as needed.
// //you will also need to change the variable name of makeRandomNumber to your own function's name.

// var uniqueArray = [];

// function displayPics() {
//   //keeps the array filled with 6 unique values  
//   while(uniqueArray.length < 6) {
//     var random = makeRandomNumber();  
//     while(!uniqueArray.includes(random)) {
//       console.log('building uniqueArray:  ', uniqueArray);  
//       uniqueArray.push(random);
//     }
//   }
//   console.log('uniqueArray completed!!: ', uniqueArray);
//   for( var i = 0; i < uniqueArray.length; i++ ) {
//   //value of the first index of the array is removed and set as the variable 'temp' and replaced at each iteration of the loop.  
//     var temp = uniqueArray.shift();
//     console.log('The Temp is #: ', temp);
//     //sets the path of the product at the current index.
//     Product.pics[i].src = productArray[temp].path;
//     //sets the id of the product at the current index.
//     Product.pics[i].id = productArray[temp].name;
//    productArray[temp].views += 1;
//     console.log('Product.all[temp].name: ',productArray[temp].name);
//   }
//   console.log('remaining values in uniqueArray: ', uniqueArray);
// }
///////////unique array from class(Ron)
  // console.log(event, target , id);



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





populateCreatChoiceAllImage();
console.table (CreatChoice.allImage);
renderChoice();
pictures.addEventListener('click', handleClickOnChoice);
