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
		 	console.log(json);
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
		var image = 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'
		if (item.media.photos) {
			image = item.media.photos.photo[0].$t
		}

		console.log(item);
		html += 
		`<div class="card" style="width: 20rem;">
  		<img class="card-img-top" style="width: 318px; height: 45px;" src="${image}" alt="Card image cap">
  		<div class="card-block">
    	<h4 class="card-title">${item.name.$t}</h4>
    	<ul class="card-text">
    		<li>Breed: ${item.breeds.breed.$t}</li>
    		<li>Age: ${item.age.$t}</li>
    		<li>Sex: ${item.sex.$t}</li>
    	</ul>
    	<a href="#" class="btn btn-primary">Go somewhere</a>
    	</div>
		</div>`
	})

	$('.results').html(html);
};

$('.search-div').submit(function(event){
	event.preventDefault();
	getResults($('.search').val(), null);
});

});