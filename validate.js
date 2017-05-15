// Set up a doc ready so nothing happens to early...
$(document).ready(function(){
	// New jquery method... submit
	// getElementsByClassName('sign-up-form')[0].on('submit', function(){

	// })
	$('.sign-up-form').submit(function(event){
		event.preventDefault();
		console.log("User submitted the form!");
		$('input').each(function(){
			var currentInputTagClass = $(this).attr('class');
			console.log(currentInputTagClass);
			// target the cooresponding error div for THIS input tag
			var errorDivClassName = '.' + currentInputTagClass + '-error';
			console.log(errorDivClassName);
			// input tags have .val()
			// everything thing else has .html() - innerHTML
			if($(this).val() == ''){
				// console.log("User did not enter enough information.");
				$(errorDivClassName).html('Field cannot be empty.');
			}
		});
	});
});
