/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------Cocktail DB----------------------------------------
const baseUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita`;
const baseUrl1 = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita`;
//-----------------------First API call----------------------
// function fetchDrink() {
//   fetch(baseUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((json) => {
//       console.log(json);
//       return displayDrink(json);
//     });
// }
// fetchDrink();

//----------------Second Call----------------------

async function fetchIngredient() {
  const res = await fetch(baseUrl1);
  const data = await res.json();
  //   console.log(data);
  return displayIngredient(data);
}
fetchIngredient();
//-----------------Grabbing querys--------------------------------

let drinkIMG = document.querySelector(".drinkImage");
let mainImg = document.querySelector(".mainImg");
let ingPara = document.querySelector(".ingPara");
let ingredient = document.querySelector(".ingredient");
let title = document.querySelector(".titleName");
let mix = document.querySelector(".instructions");

//-----------Adding Button-----------------------------------
const search = document.querySelector(".btn");
//---------------starting on window load----------------------
async function displayIngredient(y) {
  title.innerText = y.drinks[0].strDrink;
  mainImg.src = y.drinks[0].strDrinkThumb;
  drinkIMG.append(mainImg);
  ingredient1 = document.createElement("li");
  ingredient2 = document.createElement("li");
  ingredient3 = document.createElement("li");
  ingredient4 = document.createElement("li");
  ingredient1.innerText = y.drinks[0].strIngredient1;
  ingredient2.innerText = y.drinks[0].strIngredient2;
  ingredient3.innerText = y.drinks[0].strIngredient3;
  ingredient4.innerText = y.drinks[0].strIngredient4;
  ingPara.append(ingredient1);
  ingPara.append(ingredient2);
  ingPara.append(ingredient3);
  ingPara.append(ingredient4);
  instructions = document.createElement("p");
  instructions.innerText = y.drinks[0].strInstructions;
  mix.append(instructions);
}

//------------Display Drink on Search fields-------------
function displayDrink(x) {
  title.innerText = x.drinks[0].strDrink;
  mainImg.src = x.drinks[0].strDrinkThumb;
  drinkIMG.append(mainImg);
  ingredient1 = document.createElement("li");
  ingredient2 = document.createElement("li");
  ingredient3 = document.createElement("li");
  ingredient4 = document.createElement("li");
  ingredient5 = document.createElement("li");
  ingredient6 = document.createElement("li");
  ingredient7 = document.createElement("li");
  ingredient8 = document.createElement("li");
  ingredient1.innerText = x.drinks[0].strIngredient1;
  ingredient2.innerText = x.drinks[0].strIngredient2;
  ingredient3.innerText = x.drinks[0].strIngredient3;
  ingredient4.innerText = x.drinks[0].strIngredient4;
  ingredient5.innerText = x.drinks[0].strIngredient5;
  ingredient6.innerText = x.drinks[0].strIngredient6;
  ingredient7.innerText = x.drinks[0].strIngredient7;
  ingredient8.innerText = x.drinks[0].strIngredient8;
  ingPara.append(ingredient1);
  ingPara.append(ingredient2);
  ingPara.append(ingredient3);
  ingPara.append(ingredient4);
  ingPara.append(ingredient5);
  ingPara.append(ingredient6);
  ingPara.append(ingredient7);
  ingPara.append(ingredient8);
  instructions = document.createElement("p");
  instructions.innerText = x.drinks[0].strInstructions;
  mix.append(instructions);
}

//------------Update search drink img and title--------------------
let searchURL = async function () {
    let input = document.querySelector(".inputDrink").value;
    document.querySelector(".mainImg").innerHTML = "";
    document.querySelector(".ingPara").innerHTML = "";
    document.querySelector(".instructions").innerText = "";
    document.querySelector(".inputDrink").value = "";
  const res1 = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${input}`
  );
  const data1 = await res1.json();
  return displayDrink(data1);
};

search.addEventListener("click", searchURL);
