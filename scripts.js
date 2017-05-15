
// console.log("Test")
// console.dir(document);
// var dom = $(document);
// console.dir(dom)
// console.dir(window.$)
// console.dir($)
// console.dir(jQuery)
// console.dir(window.jQuery)

// 1. Wait until the document is fully loaded... i.e., READY
// 2. Once the DOM is loaded, run the anon function
$(document).ready(function(){
	// var thing = document.getElementById('thing');
	// var thing = $('#thing');
	// console.log(thing);
	// console.log(document.getElementById('image'));
	// console.log($('#image'))
	// console.log(document.querySelector('#image'));

	// var classThing = document.getElementsByClassName('thing');
	// console.dir(classThing)
	// classThing = $('.thing');
	// console.dir(classThing)

	// var body = document.getElementsByTagName('body');
	// body = $('body');

	// addEventListener(document.getElementsByTagName('button'),'click', function(){

	// })

	// document.getElementsByTagName('button').on('click', function(){

	// })

	// var squares = document.getElementsByClassName('squares');
	// for(let i = 0; i<squares.length; i++){

	// }

	$('button').click(function(){
		// console.log(this);
		// console.log($(this).attr('toDo'));
		var whatToDo = $(this).attr('toDo');
		if(whatToDo == 'hide'){
			$('#thing').hide();
			document.getElementById('thing').style.display = 'none'
		}else if(whatToDo == 'show'){
			$('#thing').show();
		}else if(whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if(whatToDo == 'html'){
			// if you don't pass html() an arg, it will simply return innerHTML
			console.log($('#thing').html());
			// If you pass html() an arg, innerHTML will change to that
			$('#thing').html('<strong>I am new innerHTML.</strong>');
		}else if(whatToDo == 'text'){
			$('#thing').text('<strong>I am new innerHTML.</strong>');
		}else if(whatToDo == 'prepend'){
			// get the innerHTML, and += to the beginning
			// innerHTML = newText + innerHTML
			$('#thing').prepend('<strong>I am new innerHTML.</strong>');
		}else if(whatToDo == 'append'){
			// get the innerHTML, and += to the end
			// innerHTML += newText
			$('#thing').append('<strong>I am HTML added to the end.</strong>');
		}else if(whatToDo == 'css'){
			// css method takes an argument, an object, just like csss
			// it will apply the css as a style attribute
			$('#thing').css({
				'color':'orange',
				'font-size':'80px',
				'background-color':'blue',
				'border-radius':'50%'
			});
		}else if(whatToDo == 'addClass'){
			$('#thing').addClass('crazy-css');
		}else if(whatToDo == 'removeClass'){
			$('#thing').removeClass('crazy-css');
		}
	});

});

// 1. Wait until ABSOLUTELY EERYTHING has loaded (pictures, video, etc.)
// $(window).on("load", function () {
// 	console.log("the window has loaded!")
// 	var thing = document.getElementById('thing');
// 	console.log(thing);
// })


