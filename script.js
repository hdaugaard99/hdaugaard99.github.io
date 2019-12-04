// JavaScript Document


// Changes the cursor to the pointer when the user hovers over an item with the addAnItem id
$("#start").css('cursor', 'pointer');

// Hides the content that is shown when the user clicks "Add and Item" when the page is first loaded
$("#makeList").hide();

// When a user clicks 'Add an item', the form for adding an item toggles between displaying and hiding
$("#start").click(function() {
	$("#makeList").toggle();
});

$("li").click(function() {
	$(this).css("text-decoration", "line-through");
});

function addItem() {
	var newItem = document.getElementById('newItem').value;
	var list = document.getElementById('list');
	var nextItem = document.createElement("li");
	var itemText = document.createTextNode(newItem);
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.setAttribute('id', 'checkbox')

		
	if (newItem === '') {
		alert('Please type something');
	} else {
		nextItem.appendChild(checkbox);
		nextItem.appendChild(itemText);
		list.appendChild(nextItem);
	}

}



// Place holders for text inputs
document.getElementByClassName("newItem").placeholder = "What do you need to get done?";
