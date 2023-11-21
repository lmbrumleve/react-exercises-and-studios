import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.cookingclassy.com/fresh-homemade-salsa/";
   let authorPhoto = "https://www.cookingclassy.com/wp-content/uploads/2019/08/jaclyn-bell@2x-231x300.jpg";
   let authorName = "Jaclyn";

   return (
      <div>
         <img src={authorPhoto} alt = "Jaclyn" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [      
   "1 1/4 lbs ripe Roma tomatoes", 
   "1 (14.5 oz) can petite diced tomatoes", 
   "2 green onions", 
   "1/3 cup chopped red onion", 
   "1 jalapeno pepper, seeded and roughly chopped"
];

let ingredientListItems = ingredients.map((ingredient, index) => {
   return <li key={index}>{ingredient}</li>
});

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.cookingclassy.com/wp-content/uploads/2018/07/salsa-17-788x1182.jpg" alt="Fresh Homemade Salsa" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
