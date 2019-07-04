(function($) {
    $('#name').blur(function(){
      var name = $("#name").val();
      if(!name){
        $("#result-name").addClass("form__error").text("error");
      }
      else {
        $("#result-name").addClass("form__success").text("thanks!")
      }
    });
    
    $('#email').blur(function(){
      var email = $("#email").val();
      if(!email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i)){
        $("#result-email").addClass("form__error").text("error");
      }
      else {
        $("#result-email").addClass("form__success").text("thanks!")
      }
    });
    
    $('#name').focus(function(){
      $("#result-name").removeClass("form__error").removeClass("form__success");
    });
    
    $('#email').focus(function(){
      $("#result-email").removeClass("form__error").removeClass("form__success");
    });
})(jQuery);