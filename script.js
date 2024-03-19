function search(){
    // alert("clicked");
    let word = document.getElementById("text").value;
    let resultat = document.getElementById("resultat");

    if(word.length != 0){

        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

        fetch(url).then(response => response.json().then(data =>{
            // console.log(data);

            try{
                for(let words of data){
                    let definition = words.meanings[0].definitions[0].definition;
                    resultat.innerHTML = "<p class = 'res'><span>Définition</span><br>"+ definition +"</p>";
                }

            }catch(error){
                resultat.innerHTML = "<p class = 'res'>Pas de définition trouvée !</p>";
            }
        }))


    }else {
        resultat.innerHTML = "<p class = 'res'>Veuillez remplir ce champ !</p>";
    }
}

