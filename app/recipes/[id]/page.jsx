'use client'

import { useParams } from 'next/navigation';
import './recipe.styles.css';
import Image from 'next/image';
import foodImage from '../../../public/images/pancake.jpg'
import NotFound from '../../not-found';

const recipeData = {
    1: {
        title: "Delicious Pancakes",
        image: "/images/recipe-placeholder.jpg",
        ingredients: [
            "1 cup of flour",
            "2 eggs",
            "1 tablespoon of sugar",
            "1 teaspoon of salt",
            "1/2 cup of milk",
            "1 tablespoon of butter",
            "1 teaspoon of baking powder",
            "1 teaspoon of vanilla extract",
            "Butter or oil for cooking",
        ],
        prepTime: "15 minutes",
        cookTime: "25 minutes",
        totalTime: "40 minutes",
        calories: "350 kcal per serving",
        servings: "4 servings",
        steps: [
            "In a large bowl, mix together the flour, sugar, salt, and baking powder.",
            "In another bowl, whisk together the eggs, milk, butter, and vanilla extract.",
            "Gradually combine the wet ingredients into the dry ingredients and mix until smooth.",
            "Heat a non-stick pan over medium heat and add a small amount of butter or oil to coat.",
            "Pour about 1/4 cup of batter onto the pan for each pancake. Cook until bubbles form on the surface, then flip and cook for another 1-2 minutes until golden brown.",
            "Serve the pancakes hot with your favorite syrup, fruit, or whipped cream.",
        ],
        detailedDescription: `
      Pancakes are one of the most beloved breakfast dishes around the world. This delicious pancake recipe is simple, quick, and yields perfectly fluffy pancakes every time. It’s the perfect meal to start your day off right, or to indulge in on a lazy weekend morning.
      
      The base of a good pancake recipe is flour, sugar, and eggs, and this one is no exception. However, what makes this recipe stand out is the combination of vanilla extract and a little bit of baking powder, which gives the pancakes a soft, airy texture. While the recipe is simple, the key to making perfect pancakes is the technique used to prepare the batter and cook the pancakes.
      
      First, make sure to mix your dry ingredients separately from the wet ingredients. This is important to ensure even distribution of the baking powder, which is essential for the fluffy texture of the pancakes. Once the wet ingredients are combined with the dry, be careful not to over-mix. A few lumps in the batter are perfectly fine; over-mixing can lead to dense, tough pancakes.
      
      Once your batter is ready, heat up your pan over medium heat. It’s important that your pan is hot enough to cook the pancakes evenly, but not so hot that they burn. A medium heat ensures the pancakes cook through without getting too dark on the outside. You’ll want to use just a little bit of butter or oil to coat the pan. Too much fat can cause the pancakes to become greasy, so use just enough to lightly grease the surface.
      
      For each pancake, pour about 1/4 cup of batter into the pan. If you’re making multiple pancakes, make sure to leave enough space between them so they don’t stick together. Allow the pancakes to cook until bubbles form on the surface, which indicates that the top is cooking through. This is the perfect time to flip them. Use a spatula to gently lift the edges of the pancake, and when it’s golden brown on the underside, carefully flip it over. Cook for another 1-2 minutes until the second side is golden as well.
      
      Once your pancakes are cooked, it’s time to serve! The best part about pancakes is how versatile they are. While traditional maple syrup is always a classic choice, you can mix it up with fresh fruit like strawberries or blueberries, or even add a dollop of whipped cream or a sprinkle of powdered sugar. You can also get creative and add chocolate chips, nuts, or even swirl in some peanut butter for a fun twist.
      
      For a healthier option, you could top your pancakes with a homemade fruit compote or a drizzle of honey. Adding a side of fresh fruit like banana slices or berries can also enhance the dish and provide added nutrition. If you prefer a more savory breakfast, you could serve the pancakes with scrambled eggs, crispy bacon, or a slice of avocado on top.
      
      The beauty of pancakes lies in their simplicity, yet they can be customized to suit any preference. Whether you like them plain, topped with syrup, or loaded with toppings, this pancake recipe can be adapted to your personal tastes. You can even experiment with different flours (such as whole wheat or almond flour) to make the pancakes a bit healthier or more gluten-free.
      
      One thing to note is that pancakes are best enjoyed fresh, but they can be stored for later. If you have leftovers, simply stack the pancakes and store them in an airtight container in the fridge for up to 2-3 days. When you’re ready to enjoy them, you can reheat them in the microwave or on a pan for a few minutes to restore some of that golden brown crispiness. If you want to keep them for longer, you can freeze them. Lay the pancakes flat on a baking sheet to freeze them individually, and then transfer them to a freezer bag for storage. This way, you’ll have pancakes on demand, ready to be heated up whenever you’re craving them.
      
      In conclusion, this pancake recipe is a great starting point for a classic breakfast. It’s easy, quick, and uses ingredients that you likely already have in your pantry. It’s also highly customizable, making it suitable for any occasion or dietary preference. Whether you’re making a simple breakfast or looking for a fun way to impress guests with a stack of delicious pancakes, this recipe has you covered. Try it out, and get ready to enjoy a stack of light, fluffy, and mouthwatering pancakes!
    `,
    },
};

export default function RecipePage() {
    const { id } = useParams();  // Use useParams to access the dynamic ID from the URL

    const recipe = recipeData[id];

    if (!recipe) {
        <NotFound />
    }

    return (
        <main className="recipe-container">
            <Image
                src={foodImage}
                width={800}
                height={400}
                alt="Delicious Recipe"
                className="recipe-image"
            />
            <h1 className="recipe-title">Delicious Pancakes</h1>
            <p className="recipe-subtitle">
                A delightful breakfast option that's fluffy, flavorful, and easy to make!
            </p>

            {/* Detail Boxes */}
            <div className="detail-boxes">
                <div className="detail-box">
                    <h3>Preparation Time</h3>
                    <span>15 mins</span>
                </div>
                <div className="detail-box">
                    <h3>Cook Time</h3>
                    <span>20 mins</span>
                </div>
                <div className="detail-box">
                    <h3>Total Time</h3>
                    <span>35 mins</span>
                </div>
                <div className="detail-box">
                    <h3>Servings</h3>
                    <span>4</span>
                </div>
            </div>

            {/* Ingredients Section */}
            <div className="recipe-section">
                <h2>Ingredients</h2>
                <ul>
                    <li>2 cups of flour</li>
                    <li>1 cup of milk</li>
                    <li>2 large eggs</li>
                    <li>1 tbsp sugar</li>
                    <li>Pinch of salt</li>
                </ul>
            </div>

            {/* Instructions Section */}
            <div className="recipe-section">
                <h2>Instructions</h2>
                <ol>
                    <li>Mix the dry ingredients in a large bowl.</li>
                    <li>Whisk the eggs and milk together in a separate bowl.</li>
                    <li>Gradually combine wet and dry ingredients.</li>
                    <li>Heat a non-stick skillet and pour batter to form pancakes.</li>
                    <li>Cook until golden brown and serve hot with syrup.</li>
                </ol>
            </div>

            <button className="cta-button">Save Recipe</button>
        </main>
    );
}
