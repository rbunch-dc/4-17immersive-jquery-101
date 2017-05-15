
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
		}
	});

});

// 1. Wait until ABSOLUTELY EERYTHING has loaded (pictures, video, etc.)
// $(window).on("load", function () {
// 	console.log("the window has loaded!")
// 	var thing = document.getElementById('thing');
// 	console.log(thing);
// })


