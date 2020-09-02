
		jQuery(document).ready(function(){

			jQuery("form#fff").submit(function(){
				var name = $("input#name").val();
				var pass = $("input#pass").val();


				if( name == '' &&  pass == '' ){
					alert("Field Must not be Empty");
				}else if(name == ''){

					alert("Name Field Must not be Empty");
				}else if( pass == ''){
					alert("Password Field Must not be Empty");
				}



				
			});

		});