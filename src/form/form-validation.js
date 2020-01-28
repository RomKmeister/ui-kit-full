(function($) {
  function validItem(element) {
    $(element + "+ .form__result").addClass("form__success").text("thanks!")
  };

  function invalidItem(element) {
    $(element + "+ .form__result").addClass("form__error").text("error");
  };

  function removeError(element) {
    $(element + "+ .form__result").removeClass("form__error").removeClass("form__success");
  };


  var formName = "input[name='name']";
  var formEmail ="input[name='email']";

    $(formName).blur(function(){
      var name = $(this).val();
      if(!name){
        invalidItem(formName)
      }
      else {
        validItem(formName)
      }
    });
    
    $(formEmail).blur(function(){
      var email = $(this).val();
      if(!email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i)){
        invalidItem(formEmail)
      }
      else {
        validItem(formEmail)
      }
    });
    
    $(formName).focus(function(){
      removeError(formName)
    });
    
    $(formEmail).focus(function(){
      removeError(formEmail)
    });
})(jQuery);