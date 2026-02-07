function findRecipe() {
    let searchInput = document.getElementById("search").value;

    let apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            let recipesDiv = document.getElementById("recipes");
            recipesDiv.innerHTML = "";

            if (data.meals) {
                data.meals.forEach(meal => {
                    recipesDiv.innerHTML += `
                        <div class="recipe">
                            <img src="${meal.strMealThumb}">
                            <h3>${meal.strMeal}</h3>
                            <p>${meal.strInstructions.substring(0, 100)}...</p>
                        </div>
                    `;
                });
            } else {
                recipesDiv.innerHTML = "<p>No recipes found 😔</p>";
            }
        })
        .catch(error => {
            console.log("Error:", error);
        });
}