/*
	Minimaxing by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	

})(jQuery);

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const posterName = urlParams.get('posterName')
console.log(posterName);

if(posterName)
{
	switch(posterName) {
		case 'WIML' :
			document.getElementById('WIML').style.display= 'block' ;
			break;
		case 'NEURIPS' :
			document.getElementById('NEURIPS').style.display= 'block' ;
			break;
	}
	
String.prototype.ucFirst = function()
{
    return this.charAt(0).toUpperCase() + this.substr(1);
};

$(document).ready(function () {
  var lowerWords = [
      'For', 'To'
  ];
  
  $('.uc-first').each(function () {
    var words = $(this).text().split(' ');
      pattern = /([^a-z0-9]*)(\w+)([^\w]*)/i
    
    $.each(words, function (i, value) {
      mathches = pattern.exec(value);
      if (lowerWords.indexOf(mathches[2]) == -1) {
        words[i] = mathches[1]+mathches[2].ucFirst()+mathches[3];
      }
    });
    
    $(this).text(words.join(' '));
  })
})
}




