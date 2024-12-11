import Image from "next/image";
import hero from '../public/images/hero.png'
import './styles/home.styles.css';
import RecipeCard from "./components/recipeCard/card";
import Link from "next/link";

export default function Page() {

  const recipes = [
    { id: 1, title: "Delicious Pancakes" },
    { id: 3, title: "Spaghetti Bolognese" },
    { id: 4, title: "Grilled Chicken" },
  ];

  return (
    <main>
      <div className='imageContainer'>
        <Image
          layout="fill" // Fills the container
          objectFit="cover" // Maintains aspect ratio, cropping if necessary
          priority // Optional for faster loading (useful for above-the-fold images)
          src={hero} alt='persian food hero image' />
      </div>
      <div className="heroText">
        <h1 className='heroTitle'>Bring Healthy Cooking and Joy To Your Home With Me ;)</h1>
        <h5 className="heroDesc">Browse through a variety of recipes across different categories</h5>
      </div>
      <section id='popular-dishes' className="container">
        <h2 className="popularTitle">Popular Recipes</h2>
        <div className="recipesGrid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <div className="button-container">
          <Link href='./recipes'><button className="view-more-button">View More</button></Link>
        </div>
      </section>
    </main>
  )
}