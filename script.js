
function myFunction() {
// imie.length > 1
// email = {@}
// temat = {*Hello*}
// => wiadomosc => ok

var name = document.getElementById ('name'); 
var mail = document.getElementById ('mail');
var topic =  document.getElementById ('topic');

if (name.value.length > 1 && 
mail.value.search("@") != -1 &&
topic.value.toLowerCase().search("Hello") != -1 ){
alert('ok');
}
if(name.value.length <= 1){
    
    document.getElementById("name").className += " required"; 
    
}
if(mail.value.search("@") == -1){
        
    document.getElementById("mail").className += " required"; 
    }
    
    if(topic.value.toLowerCase().search("Hello") == -1){

        document.getElementById("topic").className += " required"; 
    }

    
}