
function oddName(){
    var i;
    for ( i= 1; i<=20; i++){
        if(i%2 == 1){
            document.write(i,"<br>")
        }
    }
}
oddName();
oddName();
oddName();
var x = costomFunction(5,6);
function costomFunction(a,b){
    return a*b;
}
document.getElementById("demo").innerHTML = x;