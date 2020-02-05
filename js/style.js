var name = prompt("Whats Ur Name ?");
var peces = prompt("how many peces need  ?");
var whitch = prompt(" whitch one need  ? no.1 no. 2 no. 3 ");

function gitpro() {
    while (whitch !== '1' && whitch !== '2' && whitch !== '3') {
        whitch = prompt(" whitch one need  ? no.1 no. 2 no. 3 ");
    }
    var git = "";
    for (var i = 0; i < peces; i++) {
        if (whitch == "1") {
            git = git + '<img src="img/1.jpg">';
        }
        else if (whitch == "2") {
            git += '<img src="img/2.jpg">';
        }
        else if (whitch == "3") {
            git += '<img src="img/3.jpg">';
        }
        else {
            git = "somthing wrong";
        }
    }
    return git;

}
document.write(`<p>`+ name + " Ur chose is : "+ peces + " peaces " + '<br>' 
+ gitpro(whitch) + `<p>`);




