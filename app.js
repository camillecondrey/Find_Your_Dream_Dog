//will be using pet.find with arguments breed, size, animal, location, age
//will be using shelter.listByBreed with arguments breed
//will be using shelter.find with arguments location
$(document).ready(function(){

// var petFinder_base_url = 'http://api.petfinder.com/subsystem.method';

var getResults = function(breed, location){
	//grab breed and store in variable
	var breed = $('.breed-search').val();
	var location = $('.location-search').val();
	//check if user has entered anything
	if (location == ''){
		$('.results').html("<h2>Enter your location to find the closest shelter!</h2>")
	}
	else {
		$.getJSON('http://api.petfinder.com/pet.find?format=json&key=30d8e0bee7deacf6bd7a5316af670880&callback=?'
		 + '&location=' + location + '&breed=' + breed, function(json){
		 	// console.log(json);
			if (json.petfinder.pets){
				displayResults(json.petfinder.pets.pet)
				// $('.results').html('<h2>Results:</h2>' + json.pet.find)
				// console.log(json);
			}
			else {
				$('.results').html('<h2>No matches for this criteria. Try expanding your search distance</h2>')
			}
		})
	}

};

function displayResults(items){
	var html = ""; 
	$.each(items, function(index, item){
		var image = 'https://www.sweetdreamsquiltstudio.com/images/lab%20dog%20outline%20001.jpg'
		if (item.media.photos) {
			image = item.media.photos.photo[2].$t
		}

		// console.log(item);
		html += 
		`<div class="col-4"> <div class="card dog-card" style="width: 20rem;">
  				<img class="card-img-top" size="pn" src="${image}" alt="Card image cap">
  				<div class="card-block">
    			<h4 class="card-title">${item.name.$t}</h4>
    			<ul class="card-text">
    				<li>Breed: ${item.breeds.breed.$t}</li>
    				<li>Age: ${item.age.$t}</li>
    				<li>Sex: ${item.sex.$t}</li>
    				<li>Location: <br>${item.contact.city.$t} ${item.contact.state.$t} ${item.contact.zip.$t} <br>${item.contact.phone.$t}</li>
    			</ul>
    			<a href="http://www.petfinder.com/shelters/${item.shelterId.$t}.html" target="_blank" id="shelter-btn" class="btn btn-primary">Go to Shelter Site</a>
    			</div>
		</div></div>`
	})

	$('.results').html(html);
};

$('.search-div').submit(function(event){
	event.preventDefault();
	getResults($('.search').val(), null);
});

$(".submit").click(function() {
	    $('html,body').animate({
	        scrollTop: $('.results').offset().top},
	        'slow');
	});

});