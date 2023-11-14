import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredients = ["1 1/4 lbs ripe Roma tomatoes", 
    "1 (14.5 oz) can petite diced tomatoes", "2 green onions", "1/3 cup chopped red onion", "1 jalapeno pepper, seeded and roughly chopped"]

    return (
<div>
   <h3>Recipe Ingredients</h3>
   <ul className = {styles.ingredientList}>
      <li>{ingredients[0]}</li>
      <li>{ingredients[1]}</li>
      <li>{ingredients[2]}</li>
      <li>{ingredients[3]}</li>
      <li>{ingredients[4]}</li>
   </ul>
</div>
     );
}