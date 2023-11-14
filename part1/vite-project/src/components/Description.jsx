import styles from './Description.module.css';
import React from 'react';

 function RecipeAuthor() {
    let authorLink = "https://www.cookingclassy.com/fresh-homemade-salsa/#jump-to-recipe";
    let authorPhoto = "https://www.cookingclassy.com/wp-content/uploads/2019/08/jaclyn-bell@2x-231x300.jpg";
    let authorName = "Jaclyn";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Jaclyn Photo" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Cooking Classy</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {

       return (<div> 
                <div>
                <h1>Fresh Homemade Salsa</h1>
                <p>The best party food around and a must-have snack!</p>
                </div>
                <RecipeAuthor />
            </div>);
    }
}

export default RecipeDescription;
