
	var burgerButton = document.querySelector('.burger_button');
   	var myNavigator    = document.querySelector('.navigator');
	var navigatorLinks = document.querySelector('.navigator_links');
	var burgerIcon     = document.querySelector('.burger_icon');
	var lineOne = document.querySelector('.line_one');
	var lineTwo = document.querySelector('.line_two');
	var lineThree = document.querySelector('.line_three');
	var burgerValue  = 'close';

//burger button starts here

burgerButton.addEventListener('click', function() {
	
	if (burgerValue == 'close') {
		myNavigator.style.height = '245px';
		burgerValue = 'open';
		setTimeout(function() {
		navigatorLinks.style.display = 'block';
		lineOne.style.transform = 'rotate(-45deg)';
		lineOne.style.transform += 'translate(-7px, 6.5px)';
		lineTwo.style.transform = 'rotate(45deg)';
		lineThree.style.opacity = '0';
		}, 100);

	} else if (burgerValue == 'open') {
		myNavigator.style.height = '60px';
		burgerValue = 'close';
		burgerIcon.style.display = 'block';
		navigatorLinks.style.display = 'none';
		lineThree.style.opacity = null;
		lineTwo.style.transform = null;
		lineOne.style.transform = null;
	}
	
});

//clear placeholder in input once it's focused

var dogNameInput = document.querySelector('.dog_name_input');

dogNameInput.addEventListener('focusout', function() {
	dogNameInput.setAttribute('placeholder', 'Type your dog name here...');
})

dogNameInput.addEventListener('focus', function() {
	dogNameInput.removeAttribute('placeholder');
})

// clicking "Name This Dog" button

var nameDogBotton = document.querySelector('.name_dog_botton');

nameDogBotton.addEventListener('click', function() {
var dogName = document.querySelector('.dog_name');
	if (dogNameInput.value.length > 0) {
		
		dogName.textContent = dogNameInput.value;
	} else  {
		dogName.textContent = 'Some Dogs';
	}
});

window.addEventListener('resize', function() {

	if(window.innerWidth >= 798) {
		myNavigator.style.height = '60px';
		navigatorLinks.style.display = 'block';
		lineThree.style.opacity = null;
		lineTwo.style.transform = null;
		lineOne.style.transform = null;
	} else if (window.innerWidth < 798 ) {
		burgerValue  = "close";
		navigatorLinks.style.display = 'none';
		lineThree.style.opacity = null;
		lineTwo.style.transform = null;
		lineOne.style.transform = null;
		myNavigator.style.height = '60px';

	}
});

/* move the highlighter */

var listItem1 = document.querySelector('.list_item1');
var listItem2 = document.querySelector('.list_item2');
var listItem3 = document.querySelector('.list_item3');
var tileButton = document.getElementsByClassName('tile_button');
var tileButton1 = document.querySelector('.tile_button1');
var tileButton2 = document.querySelector('.tile_button2');
var tileButton3 = document.querySelector('.tile_button3');
var dogTileTtitle = document.getElementsByClassName('dog_tile_title');
var dogTileTitle1 = document.querySelector('.dog_tile_title1');
var dogTileTitle2 = document.querySelector('.dog_tile_title2');
var dogTileTitle3 = document.querySelector('.dog_tile_title3');
var tileText = document.getElementsByClassName('tile_text');
var tileText1 = document.querySelector('.tile_text1');
var tileText2 = document.querySelector('.tile_text2');
var tileText3 = document.querySelector('.tile_text3');

listItem1.addEventListener('click', function() {
	listItem1.style.color = 'black';
	listItem2.style.color = null;
	listItem3.style.color = null;

	for(var i = 0; i < tileButton.length; i++) {
		tileButton[i].style.backgroundColor = 'rgba(0,0,0,0.2)';
		tileButton1.style.backgroundColor = '#048eaa';
	}

	for (var i = 0; i < dogTileTtitle.length; i++) {
		dogTileTtitle[i].style.color = 'rgba(0,0,0,0.3)';
		dogTileTitle1.style.color = 'black';
	}

	for (var i = 0; i < tileText.length; i++) {
		tileText[i].style.color = 'rgba(0,0,0,0.3)';
		tileText1.style.color = 'black';
	}

});

listItem2.addEventListener('click', function() {
	listItem1.style.color = null;
	listItem2.style.color = 'black';
	listItem3.style.color = null;

	for(var i = 0; i < tileButton.length; i++) {
		tileButton[i].style.backgroundColor = 'rgba(0,0,0,0.2)';
		tileButton2.style.backgroundColor = '#048eaa';
	}

	for (var i = 0; i < dogTileTtitle.length; i++) {
		dogTileTtitle[i].style.color = 'rgba(0,0,0,0.3)';
		dogTileTitle2.style.color = 'black';
	}

	for (var i = 0; i < tileText.length; i++) {
		tileText[i].style.color = 'rgba(0,0,0,0.3)';
		tileText2.style.color = 'black';
	}

});


listItem3.addEventListener('click', function() {
	listItem1.style.color = null;
	listItem2.style.color = null;
	listItem3.style.color = 'black';

	for(var i = 0; i < tileButton.length; i++) {
		tileButton[i].style.backgroundColor = 'rgba(0,0,0,0.2)';
		tileButton3.style.backgroundColor = '#048eaa';
	}

	for (var i = 0; i < dogTileTtitle.length; i++) {
		dogTileTtitle[i].style.color = 'rgba(0,0,0,0.3)';
		dogTileTitle3.style.color = 'black';
	}

	for (var i = 0; i < tileText.length; i++) {
		tileText[i].style.color = 'rgba(0,0,0,0.3)';
		tileText3.style.color = 'black';
	}


});

window.addEventListener('load', function() {
	listItem1.style.color = 'black';

});
