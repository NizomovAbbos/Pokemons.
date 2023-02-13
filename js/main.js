const elFragment = document.createDocumentFragment();
// Get elements --> Html dan JavaScriptga elementlarni chaqirib oldik.
const elPokeList = document.querySelector(".poke-list");

for(const poke of pokemons){
    // console.log(poke);

    // Yangi elementlarni yaratib olamiz!
    const newItem = document.createElement("li");
    const newTitle = document.createElement("h3");
    const newNum = document.createElement("span");
    const newImg = document.createElement("img");
    const newType = document.createElement("p");
    const newTime = document.createElement("time");

    // Yangi elementlarga qiymatlarini o'zlashtirib olamiz!
    newTitle.textContent = poke.name;
    newNum.textContent = poke.num;
    newImg.src = poke.img;
    newImg.width = "300";
    newImg.height = "300";
    newType.textContent = poke.type.join(", ");
    newTime.textContent = poke.spawn_time;
    newTime.setAttribute("datetime", `31.01.2023 ${poke.spawn_time}`);

    // Endi "li" ning ichiga elementlardi ketmaketlikda joylashtirib olamiz!
    newItem.appendChild(newTitle);
    newItem.appendChild(newNum);
    newItem.appendChild(newImg);
    newItem.appendChild(newType);    
    newItem.appendChild(newTime);

    // Endi "li" ning o'zini "ul" ning ichiga joylashtirib olamiz!
    elFragment.appendChild(newItem);

    // Elementlarga class berib olamiz!
    newItem.classList.add("poke-item");
    newTitle.classList.add("poke-title");
    newNum.classList.add("poke-number");
    newImg.classList.add("poke-img");
    newType.classList.add("poke-type");
    newTime.classList.add("poke-time");

}
elPokeList.appendChild(elFragment);