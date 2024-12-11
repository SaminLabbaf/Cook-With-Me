import Image from "next/image";
import '../styles/home.styles.css';
import RecipeCard from "../components/recipeCard/card";
import './recipes.styles.css';

export default function Recipes() {
    const recipes = [
        { id: 1, title: "Delicious Pancakes" },
        { id: 2, title: "Scrambled Eggs" },
        { id: 3, title: "Spaghetti Bolognese" },
        { id: 4, title: "Grilled Chicken" },
        { id: 5, title: "Beef Stew" },
        { id: 6, title: "Chocolate Cake" },
    ];

    return (
        <main>
            <section id='popular-dishes' className="container allRecipes">
                <h2 className="popularTitle">All Recipes</h2>
                <div className="recipesGrid">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </section>
        </main>
    )
}