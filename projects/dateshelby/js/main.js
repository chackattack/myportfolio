//play music
var sample = document.getElementById("foobar");
sample.play();


//Prepping for dateArray
function Date(name, place, price, description, image) {
	this.name = name;
	this.place = place;
	this.price = price;
	this.description = description;
	this.image = image;
	//this.type = type;
}

//why do i do this?
var dateArray = []

//filling in the data for the date function
var beerdate = new Date('Casual Beer', "Any Classy Beer Joint", 20, "Shelby loves hippy dippy trendy beers, especially microbrews, and fancy cheeses.", "img/beer.jpeg")
var sandwich = new Date('Sandwich Date', "Deli", 20, "Do you want to exude cool and casual? Take her to a good ol' fashioned deli to get her more comfortable around you.", "img/sandwich.jpg")
var cemetary = new Date('Beautiful Cemetary', "Any Famous and Scenic Cemetary", 50, "Ponder life and death while strolling through historical tombs", 'img/cemetary.jpg')
var espresso = new Date('Espresso Date', 'Cafe', 10, "Cheap, Casual, Quick. A good intro date.", 'img/espresso.jpg')
var hike = new Date('Hiking', 'Cool Mountain with a view', 30, 'Shelby loves her nature. Show off your rugged bod with this fun date!', "img/hike.jpg")
var lunch = new Date('Grab Lunch', "Fun, hip restaurant", 40, "More committed than the Espresso and more casual than hike, the Lunch Date is an ideal first or second date with the scared, or the Evan.", "img/lunch.jpg")
var museum = new Date("Looking at Art", "Famous Museums in Europe", 2000, "Oh my god, someone else take her to a museum. All these naps are ruining my sleep schedule.", "img/museum.jpg")
var weed = new Date('Roll Her Joint', "Somewhere Classy", 30, "Shelby can't roll joints, so this date gives you an advantage in peacocking her into your arms. (Must be combined with Lunch Date or Hike Date)", "img/weed.jpg") 
var canaldate = new Date('Canal Cruise', "Amsterdam Canal", 50, "Show her a canal and maybe you can see hers after. (additional charge)", "img/canal.png")
var paris = new Date('Take her to Paris', "Paris", 1000, "Enjoy the most magical lovemaking experience in Paris with the woman of your dreams. Includes a complimentary Cemetary Date. Must bring bff Angela.", "img/paris.jpg")
var sunset = new Date("Sunset Kissing", "Top of a Hill", 10, "Enjoy each other's silence on this date while you watch the sun go down. Watch her thin curly hair surf in the wave and probably into your mouth.", "img/sunset.jpg")
var baby = new Date('Babies', 'Anywhere', 2000, "What better way to commit than to have her baby? She's great with kids and finances.", "img/baby.jpg")
var poop = new Date("Nurse a Sick Shelby", "In the Street", 0, "Help Shelby while she poops herself to show how much you care", "img/poop.jpg")
var camping = new Date('Camping Trip', "National Park", 70, "Take Shelby and her friends on a camping trip. Stay up late looking at the stars and roasting marshmallows on the fire", "img/camping.jpg")
var homecooking = new Date('Cook Her A Meal', "Your House", 30, "Nothing beats a night in at home. Cook a delicious vegetarian, sustainable meal for a homerun!", "img/homecooking.jpg")

//pushing all the dates into one array
dateArray.push(beerdate)
dateArray.push(cemetary)
dateArray.push(espresso)
dateArray.push(hike)
dateArray.push(lunch)
dateArray.push(museum)
dateArray.push(poop)
dateArray.push(weed)
dateArray.push(canaldate)
dateArray.push(paris)
dateArray.push(sandwich)
dateArray.push(sunset)
dateArray.push(baby)
dateArray.push(camping)
dateArray.push(homecooking)


for (i = 0; i < dateArray.length; i++) {
	var dName = document.createTextNode(dateArray[i].name)
	var dPlace = document.createTextNode(dateArray[i].place)
	var dPrice = document.createTextNode(dateArray[i].price)
	var dDescription = document.createTextNode(dateArray[i].description)
	var dButton = document.createTextNode("Buy Date!")
	var dImage = dateArray[i].image

	//creating variables with the tag
	var newCol = document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var nameH1 = document.createElement("H1")
	var placeH4 = document.createElement("H3")
	var descriptionH4 = document.createElement("H4")
	var priceH4 = document.createElement("H4")
	var buyDate = document.createElement("a")
	var image = document.createElement("IMG")

	nameH1.appendChild(dName)
	placeH4.appendChild(dPlace)
	descriptionH4.appendChild(dDescription)
	priceH4.appendChild(dPrice)
	buyDate.appendChild(dButton)
	buyDate.className = "btn btn-primary btn-lg"
	buyDate.setAttribute('href', 'contact.html')
	image.src = dImage
	//makes image fit into parent element
	image.className = "img-responsive", "img-rounded"

	//appending all those divs into new column
	newCol.className = "col-sm-3 col-md-3"
	newDiv.className = "date" + i + 'thumbnail'
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(placeH4)
	newDiv.appendChild(descriptionH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(buyDate)

	//appending all of the above data and putting it into a div
	newCol.appendChild(newDiv)

	document.getElementById("dates").appendChild(newCol)
}






