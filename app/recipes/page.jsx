import Image from "next/image";
import '../styles/home.styles.css';
import RecipeCard from "../components/recipeCard/card";
import './recipes.styles.css';

export default function Recipes() {
    return (
        <main>
            <section id='popular-dishes' className="container allRecipes">
                <h2 className="popularTitle">All Recipes</h2>
                <div className="recipesGrid">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </section>
        </main>
    )
}