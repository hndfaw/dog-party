
	var burgerButton = document.querySelector('.burger_button');
	var myNavigator    = document.querySelector('.navigator');
	var navigatorLinks = document.querySelector('.navigator_links');
	var burgerIcon     = document.querySelector('.burger_icon');
	var lineOne = document.querySelector('.line_one');
	var lineTwo = document.querySelector('.line_two');
	var lineThree = document.querySelector('.line_three');
	var logoImage = document.querySelector('.logo_image');
	var burgerLines = document.getElementsByClassName('lines');
	var dogNameLabel = document.querySelector('.dog_name_label');
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
	dogNameInput.setAttribute('placeholder', ' Type your dog name here...');
})

dogNameInput.addEventListener('focus', function() {
	dogNameInput.removeAttribute('placeholder');
})



// clicking "Name This Dog" button

var nameDogBotton = document.querySelector('.name_dog_botton');

nameDogBotton.addEventListener('click', function() {
var dogName = document.querySelector('.dog_name');
var mainDogImage = document.querySelector('.main_dog_image');
var myFooter = document.querySelector('.footer');

if (dogNameInput.value != 'Cookie' && dogNameInput.value != 'cookie') {
	
		if (dogNameInput.value.length > 0 ) {
			dogName.textContent = dogNameInput.value;
		} else  {
			dogName.textContent = 'Some Dogs';
		}
			mainDogImage.src = 'images/dog1-sq.jpg';
			logoImage.src = 'images/dog-icon.svg';
			dogImage1.src = 'images/dog2-sq.jpg';
			dogImage2.src = 'images/dog3-sq.jpg'
			dogImage3.src = 'images/dog4-sq.jpg'
			dogImage1.style = null;
			dogImage2.style = null;
			dogImage3.style = null;
			myNavigator.style = null;
			listItem1.style.color = 'black';
			listItem2.style.color = 'black';
			listItem3.style.color = 'black';
			myFooter.style.backgroundColor = '#048eaa';
			nameDogBotton.style.opacity = '1';
			nameDogBotton.style.backgroundColor = '#048eaa';
			nameDogBotton.style.color = 'black';
			dogNameInput.style.opacity = '1';
			dogNameLabel.style.opacity = '1';

			for (var i = 0; i < tileButton.length; i++) {
				tileButton[i].style.backgroundColor = '#048eaa';
			}

			for(var i = 0; i < burgerLines.length; i++) {
				burgerLines[i].style.backgroundColor = 'black';
			}


	} else  {

		dogName.textContent = 'Cookie!';
		mainDogImage.src = 'images/cookie.jpg';
		myNavigator.style.backgroundColor = 'rgb(48,80,155)';
		myNavigator.style.borderBottom = '2px solid white';
		mainDogImage.style.border = 'white 4px solid';
		logoImage.src = 'images/dog-icon.png';
		dogImage1.src = 'images/cookie2.jpg';
		dogImage2.src = 'images/cookie3.jpg'
		dogImage3.src = 'images/cookie4.jpg'
		dogImage1.style.border = '5px solid rgb(48,80,155)';
		dogImage2.style.border = '5px solid rgb(48,80,155)';
		dogImage3.style.border = '5px solid rgb(48,80,155)';
		listItem1.style.color = 'white';
		listItem2.style.color = 'white';
		listItem3.style.color = 'white';
		myFooter.style.backgroundColor = 'rgb(48,80,155)';
		nameDogBotton.style.opacity = '0.5';
		nameDogBotton.style.backgroundColor = 'rgb(48,80,155)';
		nameDogBotton.style.color = 'white';
		dogNameInput.style.opacity = '0.5';
		dogNameLabel.style.opacity = '0.5';

		for (var i = 0; i < tileButton.length; i++) {
				tileButton[i].style.backgroundColor = 'rgb(48,80,155)';
			}

		if(window.innerWidth < 810) {
			for(var i = 0; i < burgerLines.length; i++) {
				burgerLines[i].style.backgroundColor = 'white';
			}
		}
	}
});

window.addEventListener('resize', function() {

	if(window.innerWidth >= 810) {
		myNavigator.style.height = '60px';
		navigatorLinks.style.display = 'block';
		lineThree.style.opacity = null;
		lineTwo.style.transform = null;
		lineOne.style.transform = null;

		if (dogNameInput.value == 'Cookie' || dogNameInput.value == 'cookie') {
			for(var i = 0; i < burgerLines.length; i++) {
			burgerLines[i].style.backgroundColor = 'black';
			}
		}

	} else if (window.innerWidth < 810 ) {
		burgerValue  = "close";
		navigatorLinks.style.display = 'none';
		lineThree.style.opacity = null;
		lineTwo.style.transform = null;
		lineOne.style.transform = null;
		myNavigator.style.height = '60px';
	}

	if (dogNameInput.value == 'Cookie' || dogNameInput.value == 'cookie') {
			for(var i = 0; i < burgerLines.length; i++) {
			burgerLines[i].style.backgroundColor = 'white';
		}
	}

	
});

/* move the highlighter */

var listItem1 = document.querySelector('.list_item1');
var listItem2 = document.querySelector('.list_item2');
var listItem3 = document.querySelector('.list_item3');

var dogTileTtitle = document.getElementsByClassName('dog_tile_title');
var dogTileTitle1 = document.querySelector('.dog_tile_title1');
var dogTileTitle2 = document.querySelector('.dog_tile_title2');
var dogTileTitle3 = document.querySelector('.dog_tile_title3');

var dogImage1 = document.querySelector('.dog_image1');
var dogImage2 = document.querySelector('.dog_image2');
var dogImage3 = document.querySelector('.dog_image3');

var tileText = document.getElementsByClassName('tile_text');
var tileText1 = document.querySelector('.tile_text1');
var tileText2 = document.querySelector('.tile_text2');
var tileText3 = document.querySelector('.tile_text3');

var tileButton = document.getElementsByClassName('tile_button');
var tileButton1 = document.querySelector('.tile_button1');
var tileButton2 = document.querySelector('.tile_button2');
var tileButton3 = document.querySelector('.tile_button3');

var tooltipText1 = document.querySelector('.tooltip_text1');
var tooltipText2 = document.querySelector('.tooltip_text2');
var tooltipText3 = document.querySelector('.tooltip_text3');

var dogOneValue = 'open';
var dogTwoValue = 'open';
var dogThreeValue = 'open';

// first dog tile

listItem1.addEventListener('click', dogOne);
tileButton1.addEventListener('click', dogOne);


	function dogOne() {
	if (dogNameInput.value != 'Cookie' && dogNameInput.value != 'cookie') {
		if (dogOneValue == 'open') {
			dogTileTitle1.style.opacity = '0';
			tileText1.style.opacity = '0';
			tileButton1.style.backgroundColor = 'rgba(0,0,0,0.3)';
			dogImage1.style.borderRadius = '5px';
			listItem1.style.color = 'rgba(0,0,0,0.5)';
			tooltipText1.innerHTML = 'Click to show the text';
			dogOneValue = 'close';

		} else {
			dogTileTitle1.style = null;
			tileText1.style = null;
			tileButton1.style = null;
			dogImage1.style = null;
			listItem1.style.color = 'black';
			tooltipText1.innerHTML = 'Click to hide the text';
			dogOneValue = 'open';
			tileButton1.style.backgroundColor = 'rgb(48,80,155)';
		}
	} else {

		if (dogOneValue == 'open') {
			dogTileTitle1.style.opacity = '0';
			tileText1.style.opacity = '0';
			tileButton1.style.backgroundColor = 'rgba(0,0,0,0.3)';
			dogImage1.style.borderRadius = '5px';
			listItem1.style.color = 'rgba(255,255,255,0.5)'; //change
			tooltipText1.innerHTML = 'Click to show the text';
			dogOneValue = 'close';


		} else {
			dogTileTitle1.style = null;
			tileText1.style = null;
			tileButton1.style = null;
			dogImage1.style = null;
			dogImage1.style.borderColor = 'rgb(48,80,155)'; //new
			listItem1.style.color = 'white'; //change
			tooltipText1.innerHTML = 'Click to hide the text';
			dogOneValue = 'open';
			tileButton1.style.backgroundColor = 'rgb(48,80,155)';
		}
	}

	
};

// second dog tile

listItem2.addEventListener('click', dogTwo);
tileButton2.addEventListener('click', dogTwo);

	function dogTwo() {

		if (dogNameInput.value != 'Cookie' && dogNameInput.value != 'cookie') {
			if (dogTwoValue == 'open') {
				dogTileTitle2.style.opacity = '0';
				tileText2.style.opacity = '0';
				tileButton2.style.backgroundColor = 'rgba(0,0,0,0.3)'
				dogImage2.style.borderRadius = '5px';
				listItem2.style.color = 'rgba(0,0,0,0.5)';
				tooltipText2.innerHTML = 'Click to show the text';
				dogTwoValue = 'close';
			} else {
				dogTileTitle2.style = null;
				tileText2.style = null;
				tileButton2.style = null;
				dogImage2.style = null;
				listItem2.style.color = 'black';
				tooltipText2.innerHTML = 'Click to hide the text';
				dogTwoValue = 'open';
				tileButton2.style.backgroundColor = 'rgb(48,80,155)';
			}
		} else {
			if (dogTwoValue == 'open') {
				dogTileTitle2.style.opacity = '0';
				tileText2.style.opacity = '0';
				tileButton2.style.backgroundColor = 'rgba(0,0,0,0.3)'
				dogImage2.style.borderRadius = '5px';
				listItem2.style.color = 'rgba(255,255,255,0.5)'; //change
				tooltipText2.innerHTML = 'Click to show the text';
				dogTwoValue = 'close';
			} else {
				dogTileTitle2.style = null;
				tileText2.style = null;
				tileButton2.style = null;
				dogImage2.style = null;
				dogImage2.style.borderColor = 'rgb(48,80,155)'; //new
				listItem2.style.color = 'white'; //change
				tooltipText2.innerHTML = 'Click to hide the text';
				dogTwoValue = 'open';
				tileButton2.style.backgroundColor = 'rgb(48,80,155)';
			}

		}

	
};

// third dog tile

listItem3.addEventListener('click', dogThree);
tileButton3.addEventListener('click', dogThree);


	function dogThree() {
		if (dogNameInput.value != 'Cookie' && dogNameInput.value != 'cookie')  {
			if (dogThreeValue == 'open') {
					dogTileTitle3.style.opacity = '0';
					tileText3.style.opacity = '0';
					tileButton3.style.backgroundColor = 'rgba(0,0,0,0.3)'
					dogImage3.style.borderRadius = '5px';
					listItem3.style.color = 'rgba(0,0,0,0.5)';
					tooltipText3.innerHTML = 'Click to show the text';
					dogThreeValue = 'close';
			} else {
					dogTileTitle3.style = null;
					tileText3.style = null;
					tileButton3.style = null;
					dogImage3.style = null;
					listItem3.style.color = 'black';
					tooltipText3.innerHTML = 'Click to hide the text';
					dogThreeValue = 'open';
					tileButton3.style.backgroundColor = 'rgb(48,80,155)';
			}

		} else {
			if (dogThreeValue == 'open') {
					dogTileTitle3.style.opacity = '0';
					tileText3.style.opacity = '0';
					tileButton3.style.backgroundColor = 'rgba(0,0,0,0.3)'
					dogImage3.style.borderRadius = '5px';
					listItem3.style.color = 'rgba(255,255,255,0.5)'; //change
					tooltipText3.innerHTML = 'Click to show the text';
					dogThreeValue = 'close';
			} else {
					dogTileTitle3.style = null;
					tileText3.style = null;
					tileButton3.style = null;
					dogImage3.style = null;
					dogImage3.style.borderColor = 'rgb(48,80,155)'; //new
					listItem3.style.color = 'white'; //change
					tooltipText3.innerHTML = 'Click to hide the text';
					dogThreeValue = 'open';
					tileButton3.style.backgroundColor = 'rgb(48,80,155)';
			}
		}
	
};

// update text in the page.. my very fist anonymous functionnnn :D :D

//1 push the form opener button

	var myFormFunc = function() {
		var x = window.scrollY;
		var y = document.body.scrollHeight;
		var z = window.innerHeight;
		var m = Math.abs(((x + z) - y) - 60);

		var updateTextForm = document.querySelector('.update_text_form');
		var updateTextButton = document.querySelector('.update_text_button');

	if (m <= 5) {
		updateTextForm.style.transform = 'translateY(420px)';
	} else if (m > 5) {
		updateTextForm.style.transform = 'translateY(448px)';
	}


// 2 open and close the form 


var updateTextFormValue = 'close'


updateTextButton.addEventListener('click', function() {
	if (updateTextFormValue == 'close') {
		updateTextForm.style.transform = 'translateY(0)'
		updateTextButton.innerHTML = 'Close Text Editer';
		updateTextFormValue = 'open';

	} else {
		updateTextForm.style = null;
		updateTextForm.style.transform = 'translateY(420px)'
		updateTextFormValue = 'close';
		updateTextButton.innerHTML = 'Open Text Editer';
	}
	
})

//3 update content 

var updateBtn = document.querySelector('.update_btn');
var updateAndCloseBtn = document.querySelector('.update_and_close_btn');




updateBtn.addEventListener('click',  function() {

	var textArea = document.querySelector('.text_area');
	var updateTile1 = document.querySelector('.update_tile1');
	var updateTile2 = document.querySelector('.update_tile2');
	var updateTile3 = document.querySelector('.update_tile3');
	
	if(updateTile1.checked && textArea.value != '') {
		tileText1.innerHTML = textArea.value;
		char.textContent = 235;
		setTimeout(function() {
			textArea.value = '';
		}, 10);
		
	} else if (updateTile2.checked && textArea.value != '') {
		tileText2.innerHTML = textArea.value;
		char.textContent = 235;
		setTimeout(function() {
			textArea.value = '';
		}, 10);
	} else if (updateTile3.checked && textArea.value != '') {
		tileText3.innerHTML = textArea.value;
		char.textContent = 235;
		setTimeout(function() {
			textArea.value = '';
		}, 10);
	}


});

};

window.addEventListener('scroll', myFormFunc);



// character counter 


var textArea = document.querySelector('.text_area');
var char = document.querySelector('.char');

textArea.addEventListener('keyup', function() {
  var val = textArea.value;
  var x = val.length;
  
  if ( x < 235) {
    char.textContent = 235 - x;
  } else {
    char.textContent = 0;
    textArea.value = textArea.value.substring(0,235)
  }
    
});
