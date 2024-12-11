import Image from 'next/image'
import food from '../../../public/images/food-small.png';
import './card.styles.css'

export default function Card() {
    return (
        <div className="recipe-card">
            <Image className='foodImageTumblr' src={food} alt='food' />
            <div className="card-content">
                <h3>Creamy Meatballs & Pasta</h3>
                <ul className="details">
                    <li>
                        <span className="icon">⏱️</span> 35 Minutes
                    </li>
                    <li>
                        <span className="icon">🍴</span> 4 Servings
                    </li>
                    <li>
                        <span className="icon">🔥</span> 210 Calories
                    </li>
                </ul>
                <div className="card-action">
                    <div className="action-button">View Recipe</div>
                </div>
            </div>

        </div>

    )
}