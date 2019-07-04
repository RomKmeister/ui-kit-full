function submit() {
    var name = document.getElementsByName("name").value
    var email = document.getElementsByName("email").value
    if(!name){
        $(".invalid").css("display","block");
        return false;
    }
    if(!f1email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i)) {
        $(".invalid").css("display","block");
        return false;
    }

submit.addEventListener('click', function(e) {
    
});