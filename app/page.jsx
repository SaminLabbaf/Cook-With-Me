import Image from "next/image";
import hero from '../public/images/hero.png'
import './styles/home.styles.css';

export default function Page() {
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
    </main>
  )
}