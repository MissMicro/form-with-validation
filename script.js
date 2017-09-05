
function myFunction() {
// imie.length > 1
// email = {@}
// temat = {*mruweczka*}
// => wiadomosc => ok

var name = document.getElementById ('name'); 
var mail = document.getElementById ('mail');
var topic =  document.getElementById ('topic');

if (name.value.length > 1 && 
mail.value.search("@") != -1 &&
topic.value.toLowerCase().search("mruweczka") != -1 ){
alert('ok');
} else {
alert('liseczek');
}
}