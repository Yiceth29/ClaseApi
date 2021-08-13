
const main = async (value) => {
    for(let i = 1; i <= value; i++){
        let url = `https://rickandmortyapi.com/api/character/${i}`;
        
        await fetch(url)
                  .then((res) => res.json())
                  .then((data) => print(data))
                  .catch(error => console.error(error));    
    }
}

const test = async () => {
    document.getElementById("cardsContainer").innerHTML = "";
    let value = document.getElementById("inputNumeroPersonajes").value;

    if(value === "0"){
        alert("El personaje numero 0 no existe.");
        return;
    }
    await main(value);
}

const print = (data) => {
    let card = `<div class="card" style="width: 12rem;">
    <img src="${data.image}" class="card-img-top" alt="">
    <div class="card-body">
      <h4 class="card-title"> Personaje ${data.id} ${data.name}</h4>
      <p class="card-text">Especie: ${data.species}.</p>
      <p>Genero: ${data.gender}</p>
      <p>Status: ${data.status}</p>
    </div>
  </div>`;

  document.getElementById("cardsContainer").innerHTML += card
}

