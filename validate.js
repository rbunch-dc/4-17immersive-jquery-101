// Set up a doc ready so nothing happens to early...
$(document).ready(function(){
	// New jquery method... submit
	// getElementsByClassName('sign-up-form')[0].on('submit', function(){

	// })
	$('.sign-up-form').submit(function(event){
		$('.error').each(function(){
			$(this).html('')
		})
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

		var password = $('.password').val();
		var password2 = $('.password2').val();
		if(password !== password2){
			$('.password-error').html('Your passwords do not match.')
		}
		// Force user to have a number in the password
		// Keep track of numberFound as a boolean
		var numberFound = false;
		for(let i = 0; i < password.length; i++){
			if(isNaN(Number(password[i]))){
				// this is not a number
				continue;
			}else{
				// this is a Number
				numberFound = true;
			}
		}
		if(!numberFound){
			$('.password-error').html('Your password must contain one number.')			
		}

	});
});
