const foo = function() {
    console.log("foobar");
}
foo();

function nightmare() {
    return "Synyster, ";
}
function soil(syn, name){
    console.log(syn()+name);
}
soil(nightmare,"Javascript!");
function nightmare(){
    return function(){
        console.log("Hello!");
    }
}