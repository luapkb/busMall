
//!!!!!!is the Js file pluged into the html!!!!
/////////////////////////////////////////////////////////////// 23:20 9-23-19 demo refrece
////start     global variablils    start

///array of names
var assetArrayName = ['bag','banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

// array of images
var assetArrayPath = ['assets/bag.jpg','assets/banana.jpg','assets/bathroom.jpg', 'assets/boots.jpg', 'assets/breakfast.jpg', 'assets/bubblegum.jpg', 'assets/chair.jpg','assets/cthulhu.jpg','assets/dog-duck.jpg','assets/dragon.jpg','assets/pen.jpg','assets/pet-sweep.jpg','assets/scissors.jpg','assets/shark.jpg','assets/sweep.png','assets/tauntaun.jpg','assets/unicorn.jpg','assets/usb.gif','assets/water-can.jpg','assets/wine-glass.jpg'];
////// chartData var
var click = [];
var view = [];
var nameImage = [];
//section tittle id
var pictures = document.getElementById('pictures');
//image ID (sorce 123)
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var ctx = document.getElementById(myChart);
CreatChoice.pics = [choice1 , choice2 , choice3];

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

function CreatChoice (name, image, click = 0, view = 0){
  //properties in object
  this.name = name;
  this.image = image;
  this.click = click;
  this.view = view;

  CreatChoice.allImage.push (this);

}

function populateCreatChoiceAllImage(){
  for (var i = 0 ; i < assetArrayName.length; i ++){
    new CreatChoice (assetArrayName[i], assetArrayPath[i]);
  }
}
///prevent the same photos from showing upsequentialy


//random source generator from array CreatChoice.allimages in constructor
function choiceGeni(){
  var raySelect = Math.floor(Math.random() * CreatChoice.allImage.length );
  // console.log('raySelectt', raySelect);
  return raySelect;
}
// ///end funtion raySelect is the random image.


///////////unique array from class(Ron)
// //uniqueArray is where you will store the unique numbers that displayPics() creates in the while loops.
// //productArray(Mine(CreatChoice.allImages) will be wherever you are pushing your new instances to, so make changes as needed.
// //you will also need to change the variable name of randomnumber (mine(choiceGeni) to your own function's name.

var uniqueArray = [];

function displayPic() {
  //keeps the array filled with 6 unique values
  while(uniqueArray.length < 6) {
    var random = choiceGeni();
    while(!uniqueArray.includes(random)) {
      // console.log('building uniqueArray:  ', uniqueArray);
      uniqueArray.push(random);
    }
  }
  // console.log('uniqueArray completed!!: ', uniqueArray);
  for( var i = 0; i < uniqueArray.length; i++ ) {
  //value of the first index of the array is removed and set as the variable 'temp' and replaced at each iteration of the loop.
    var temp = uniqueArray.shift();
    // console.log('The Temp is #: ', temp);
    //sets the path of the product at the current index.
    CreatChoice.pics[i].src = CreatChoice.allImage[temp].image;
    //sets the id of the CreatChoice at the current index.
    CreatChoice.pics[i].id = CreatChoice.allImage[temp].name;
    CreatChoice.allImage[temp].view += 1;
    // console.log('CreatChoice.all[temp].image: ',CreatChoice.allImage[temp].image);
    // updateStorage();
  }
  // console.log('remaining values in uniqueArray: ', uniqueArray);
}
///////////unique array from class(Ron)



// //end funtion renderchoice  end

// /// start   handle the user choice     start


function handleClickOnChoice(event){
  event.preventDefault();
  if (peoplesChoice !== 5) {
    var clickChoice = event.target.id;
    displayPic();
    // console.log(clickChoice);
    //when we clikkity
    for (var i = 0; i < CreatChoice.allImage.length; i++){
    // console.log(CreatChoice.allImage[i].image);
    //populat click count
    // console.log(clickChoice);
    // console.log(CreatChoice.allImage[i].name)
      if (clickChoice === CreatChoice.allImage[i].name){
        CreatChoice.allImage[i].click++;
        peoplesChoice++;
        // console.table(CreatChoice.allImage);


      }
    }
  } else {
    alert ('thanks for looking');
    colectInfo();
    chartData();
    updateStorage();
    upBuildGraph();
  }
}
function colectInfo(){
  for ( var i = 0; i < CreatChoice.allImage.length; i++){
    click.push(CreatChoice.allImage[i].click);
    view.push(CreatChoice.allImage[i].view);
    nameImage.push(CreatChoice.allImage[i].name);
  }
}

function updateStorage(){
  ///deploied in displayPic
  var jasonVoteString = JSON.stringify(CreatChoice.allImage);
  localStorage.setItem('vote', jasonVoteString);
}

function upBuildGraph(){
  var data = localStorage.getItem('vote');
  var parsedData = JSON.parse(data);
console.log(parsedData);


// for (var i=0; i< .length; i++){
//   new CreatChoice(parcedData[i].name,)
// }
  
//take parsed data and ++ to new data 
}

function chartData(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameImage,
      datasets: [{
        label: '# of Votes',
        data: click,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}




populateCreatChoiceAllImage();
pictures.addEventListener('click', handleClickOnChoice);
displayPic();

