




var breeds={
 	'American Pit Bull Terrier': 0, 
 	'Labrador Retriever': 0, 
 	'Chihuahua': 0, 
 	'Boxer': 0, 
 	'German Shepherd': 0, 
 	'Beagle': 0, 
 	'Dachshund': 0, 
 	'American Bulldog': 0, 
 	'Border Collie': 0, 
 	'Jack Russell Terrier': 0, 
 	'Australian Shepherd': 0, 
 	'Shih Tzu': 0, 
 	'Rottweiler': 0, 
 	'Golden Retriever': 0, 
 	'Yorkshire Terrier': 0, 
 	'English Bulldog': 0, 
 	'Poodle': 0}


var questions = [
  {
    question: "What size dog would you consider?", 
    answers: ["Small", "Medium", "Large", "Any size"], 
    results: { "Small":["Chihuahua",'Dachshund', "English Bulldog", "Jack Russell Terrier", "Shih Tzu", 
    					"Yorkshire Terrier"], 
    		   "Medium": ['Beagle','Labrador Retriever', 'Australian Shepherd', 'Border Collie', 
    		   				'American Pit Bull Terrier', 'Boxer'],
    		   "Large": ['Golden Retriever', 'Poodle', 'German Shepherd', "Rottweiler", "American Bulldog"],
    		   "Any Size": ["Chihuahua",'Dachshund', "English Bulldog", "Jack Russell Terrier", "Shih Tzu", 
    		   				"Yorkshire Terrier", 'Beagle','Labrador Retriever', 'Australian Shepherd', 'Border Collie', 
    		   				'American Pit Bull Terrier', 'Boxer', 'Golden Retriever', 'Poodle', 'German Shepherd', 
    		   				"Rottweiler", "American Bulldog"]}
  },
  {
    question: "Do you have dog allergies?", 
    answers: ["Yes", "No", "I don't know"], 
    results: { "Yes":["Poodle",'Yorkshire Terrier', "Shih Tsu", "Jack Russell Terrier"], 
    		   "No": ["Chihuahua",'Dachshund', "English Bulldog", "Jack Russell Terrier", "Shih Tzu", 
    		   				"Yorkshire Terrier", 'Beagle','Labrador Retriever', 'Australian Shepherd', 'Border Collie', 
    		   				'American Pit Bull Terrier', 'Boxer', 'Golden Retriever', 'Poodle', 'German Shepherd', 
    		   				"Rottweiler", "American Bulldog"], 
    		   "I don't know": ["Chihuahua",'Dachshund', "English Bulldog", "Jack Russell Terrier", "Shih Tzu", 
    		   				"Yorkshire Terrier", 'Beagle','Labrador Retriever', 'Australian Shepherd', 'Border Collie', 
    		   				'American Pit Bull Terrier', 'Boxer', 'Golden Retriever', 'Poodle', 'German Shepherd', 
    		   				"Rottweiler", "American Bulldog"]}
  },
  {
  	question: "How much do you exercise", 
    answers: ["Frequently","Occasionally", "Hardly Ever"], 
    results: { "Frequently":["American Pit Bull Terrier",'Labrador Retriever', "Boxer", "German Shepherd", "Rottweiler",
    						"Golden Retriever", "Border Collie", "Australian Shepherd"], 
    			"Occasionally": ['Poodle','Beagle', "American Bulldog", "Jack Russell", "Golden Retriever", "American Pit Bull Terrier", "Boxer"],
    			"Hardly Ever": ["English Bulldog", "Shih Tsu", "Dachshund", "Chihuahua", "Yorkshire Terrier"]} 
  }, 
  {
  	question: "Do you have a yard or room for a dog with lots of energy?", 
    answers: ["Yes","No"], 
    results: { "Yes":["Chihuahua",'Dachshund', "English Bulldog", "Jack Russell Terrier", "Shih Tzu", 
    		   				"Yorkshire Terrier", 'Beagle','Labrador Retriever', 'Australian Shepherd', 'Border Collie', 
    		   				'American Pit Bull Terrier', 'Boxer', 'Golden Retriever', 'Poodle', 'German Shepherd', 
    		   				"Rottweiler", "American Bulldog"],
    		   	"No": ["Shih Tsu", "Yorkshire Terrier", "English Bulldog", "Poodle", "Chihuahua", "Dachshund", 
    		   			"American Bulldog", "Jack Russell Terrier", "Beagle"]}		
  } ,
  {
  	question: 'Are you planning to bring a new baby into your home within the next few years?', 
    answers: ["Yes","No"], 
    results: { "Yes":["Golden Retriever",'Beagle', "English Bulldog", "Poodle", "Labrador Retriever", 
    					"American Pit Bull Terrier", "Jack Russell", "Dachshund"], 
    			"No": ["Chihuahua",'Dachshund', "English Bulldog", "Jack Russell Terrier", "Shih Tzu", 
    		   				"Yorkshire Terrier", 'Beagle','Labrador Retriever', 'Australian Shepherd', 'Border Collie', 
    		   				'American Pit Bull Terrier', 'Boxer', 'Golden Retriever', 'Poodle', 'German Shepherd', 
    		   				"Rottweiler", "American Bulldog"] }
  }, 
  {
  	question: 'What is your fur tolerance?', 
    answers: ["Doesn't bother me at all","Cannot stand it", "A little fur is okay"], 
    results: {"Doesn't bother me at all":["Chihuahua",'Dachshund', "English Bulldog", "Jack Russell Terrier", "Shih Tzu", 
    		   					"Yorkshire Terrier", 'Beagle','Labrador Retriever', 'Australian Shepherd', 'Border Collie', 
    		   					'American Pit Bull Terrier', 'Boxer', 'Golden Retriever', 'Poodle', 'German Shepherd', 
    		   					"Rottweiler", "American Bulldog"],
    		   	"Cannot stand it": ["Poodle", "Shih Tsu", "Chihuahua", "Yorkshire Terrier", "Jack Russell Terrier", "Boxer"],
    		   	"A little fur is okay": ["American Pit Bull Terrier", "Beagle", "Poodle", "Boxer", "Shih Tsu", 
    		   						"Chihuahua", "Yorkshire Terrier", "Jack Russell Terrier", "English Bulldog", "American Bulldog"]}			
  } 
];

function answerClick(){
	$('.list-group-item').on('click', function(event){
var question =	$(this).parent().data('id')
	questions[question].answer = $(this).val();
	$(this).siblings().removeClass('on-click');

	})
}


$(document).ready(function () { 

	answerClick();

	
$('.submit').click(function(event){
	questions.forEach(function (question){

		var answer = question.answer;
		var results = question.results;
		var answerBreed = results[answer];
		answerBreed.forEach(function(breed){
			breeds[breed]++
		})
	})
	console.log(breeds);


	max=0;
	maxBreed=[];
	for(breed in breeds){
	  if(breeds[breed]>max){
	    max=breeds[breed];
	    maxBreed=[breed];
	  }
	  else if (breeds[breed] === maxBreed){
	  		maxBreed.push(breed);
	  }
	}
console.log(maxBreed);

localStorage.userBreeds = JSON.stringify(maxBreed);
window.location = "results-search.html"

//var maxBreed = JSON.parse(localStorage.userBreeds);


function displayResults(){
	for (var i=0, i=maxBreed, i++) {
		$(this).siblings().addClass('hidden')
	}
}





})


	

$("button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(this).siblings().offset().top},
	        'slow');
	});

	


	//at the end get the key that has the greatest value
	




	


	  $('.list-group-item').click( function() {
	    $(this).toggleClass('on-click') 
	  } );
	  




});







