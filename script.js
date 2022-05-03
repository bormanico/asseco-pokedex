use = "strict";

const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=150";

//const pokegrid = document.querySelector(".pokeGrid");

const fetchPokemons = async function () {
  try {
    const res1 = await fetch(pokemonListUrl);

    console.log(res1);

    if (!res1.ok) throw new Error("Problem getting data");

    const dataRes1 = await res1.json();

    console.log(dataRes1);

    console.log(dataRes1.results[0]);

    dataRes1.results.forEach((element) => {
      console.log(element.name);
      const pokeName = document.createElement("p");
      pokeName.textContent = `${element.name}`;
    });
  } catch (error) {
    console.log("There was a problem getting the data.");
  }
};

fetchPokemons();

const renderPokeCard = function (imgPath) {
  const img = document.createElement("img");
  img.src = imgPath;
  img.addEventListener("load", function () {
    console.log(img.src);
  });
};
