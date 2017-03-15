var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('Accueil');
    if (page == '/') {
        response.redirect('index.html');
    }
    response.end();
}).listen(8888);

/*function Rechercher()
{
	var ldlc="https://www.ldlc.com/navigation/";
    var topachat = "https://www.topachat.com/pages/recherche.php?";
	var materiel = "https://www.materiel.net/achat/";
	var google = "www.google.fr"

    var ref = document.getElementById("ref");
    var refUrl = ref.replace(" ", "+");
    console.log(refUrl);
    


}*/