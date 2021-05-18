$(document).ready(function(){
	$("#pAreas .container .item .button").click(function(){
		if($(this).closest(".box").find(".hide").length){
			$(this).closest(".box").find(".hide").show(500).toggleClass("hide").toggleClass("show");
			$(this).html("READ LESS <i class='fa fa-arrow-right' aria-hidden='true'></i>");
		}else{
			$(this).closest(".box").find(".show").hide(500).toggleClass("hide").toggleClass("show");			
			$(this).html("READ MORE <i class='fa fa-arrow-right' aria-hidden='true'></i>");
		}
		
	})
	
	$("#rMatters .container .button").click(function(){
		if($(this).closest(".description").find(".hide").length){
			$(this).closest(".description").find(".hide").show(500).toggleClass("hide").toggleClass("show");
			$(this).html("SEE LESS <i class='fa fa-arrow-right' aria-hidden='true'></i>");
		}else{
			$(this).closest(".description").find(".show").hide(500).toggleClass("hide").toggleClass("show");			
			$(this).html("SEE MORE <i class='fa fa-arrow-right' aria-hidden='true'></i>");
		}
	})
	
	$(".menu ul li a").click(function() {
		var x = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(x).offset().top
		}, 1000);
	});
	
	$(".mailer .sendMail").click(function(e){


        var postForm = { //Fetch form data
            'name'     : $('.mailer input[name="name"]').val(),
			'email' : $('.mailer input[name="email"]').val(),
			'phone' : $('.mailer input[name="phone"]').val(),
			'message' : $('.mailer textarea').val()
        };
		
		$(".status").html("Sending Email!");
		
        $.ajax({ //Process the form using $.ajax()
            type      : 'POST', //Method type
            url       : 'mail/index.php', //Your form processing file URL
            data      : postForm, //Forms name
            dataType  : 'json',
            success   : function(data) {
							if(JSON.stringify(data) == "1"){
								$(".status").html("Mail sent");
								setTimeout(function(){$(".status").html("")}, 2000);
							}else{
								$(".status").html("Mail sending failed!");
								setTimeout(function(){$(".status").html("")}, 2000);								
							}
							
                            },
			error : function(){
				$(".status").html("Mail sending failed!");
				setTimeout(function(){$(".status").html("")}, 2000);		
			}

        });
		
        e.preventDefault(); //Prevent the default submit
	
	})	
	
	
	$(".mailer2 .submit").click(function(e){
		
		var topi = "I want to discuss about : " + $('.mailer2 input[name="topic"]').val()

        var postForm = { //Fetch form data
            'name'     : $('.mailer2 input[name="name"]').val(),
			'email' : "",
			'phone' : $('.mailer2 input[name="phone"]').val(),
			'message' : topi
        };
		
		e.preventDefault();
		var email = 'craig@cghermanlaw.com';
		var subject = $('.mailer2 input[name="topic"]').val();
		var emailBody = 'Name : ' + $('.mailer2 input[name="name"]').val() + "%0D%0A"+ 'Phone : ' + $('.mailer2 input[name="phone"]').val();
		window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;

		$('.mailer2 input[name="name"]').val("");
		$('.mailer2 input[name="phone"]').val("");
		$('.mailer2 input[name="topic"]').val("");
        e.preventDefault(); //Prevent the default submit
	
	})
})