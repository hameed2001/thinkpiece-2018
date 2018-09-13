/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    /*$("#submit_btn").click(function(){
        
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
		var user_position=$('input[name=position]').val();
		var user_organization=$('input[name=organization]').val();
        //var user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }
		if (user_position == "") {
            $('input[name=position]').css('border-color', '#e41919');
            proceed = false;
        }
		if (user_organization == "") {
            $('input[name=organization]').css('border-color', '#e41919');
            proceed = false;
        }
        
        /*if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }*/
        
        //everything looks good! proceed...
        /*if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email
                //'userMessage': user_message
            };
            
            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){
            
                //load json data from server and output message     
                if (response.type == 'error') {
                    output = '<div class="error">' + response.text + '</div>';
                }
                else {
                
                    output = '<div class="success">' + response.text + '</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                }
                
                $("#result").hide().html(output).slideDown();
            }, 'json');
            
        }
        output = '<div class="success">Email sent successfully!</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
					$("#result").hide().html(output).slideDown();
        //return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });*/
    $(".form-check-label").click(function () {
                var rbvalue = "";
                if ($(this).attr("class").indexOf("clrbPhone")>0) {
                    $("#lblphone").attr("placeholder", "Phone");
                    $("#lblemail").attr("placeholder", "Email");

                    $('#lblphone').attr('required', true);
                    document.getElementById("lblemail").required = false
                }
                else {
                    $("#lblemail").attr("placeholder", "Email");
                    $("#lblphone").attr("placeholder", "Phone");

                    $('#lblemail').attr('required', true);
                    document.getElementById("lblphone").required = false
                }
            });
			

});

function validate(form) {
    // validation code here ...
var isValid = true;

  $('.form-control').each(function() {
    if ( $(this).val() === '' )
        isValid = false;
  });
  var response = grecaptcha.getResponse();
  //var responselen=response.length;
//alert(response.length);
    if (response != "") {

        if (isValid = true) {
            var output = '<div class="success">Email sent successfully!</div>';

            //reset values in all input fields
            $('#contact_form input').val('');
            $('#contact_form textarea').val('');
            $("#result").hide().html(output).slideDown();
            grecaptcha.reset();
        }



    }
    else {

        //reCaptcha not verified
        isValid = false;
        var output = '<div class="error">Please verify captcha!</div>';
        //reset values in all input fields
        $("#result").hide().html(output).slideDown();
    }

 // alert(isValid);
  return false;
}