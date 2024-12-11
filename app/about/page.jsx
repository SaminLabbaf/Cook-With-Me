import Image from 'next/image'
import me from '../../public/images/me.png'
import './about.styles.css'

export default function About() {
    return (
        <main id='aboutPage'>
            <Image id='aboutPic' src={me} alt='samin labbaf picture' width={300} height={300} />
            <h1>About Cook With Me</h1>

            <section>
                <h2>Our Story</h2>
                <p>Cook With Me began as a passion project to make cooking accessible and fun for everyone. From quick weeknight dinners to elaborate weekend feasts, we aim to inspire you with simple, delicious, and approachable recipes that you can enjoy making at home.</p>
            </section>

            <section>
                <h2>Our Mission</h2>
                <p>We believe that cooking is more than just a daily task; it’s a way to connect with loved ones, explore different cultures, and nourish both body and soul. Our mission is to provide a diverse range of recipes that cater to all skill levels and dietary preferences. With Cook With Me, we hope to spark joy in your kitchen and encourage you to experiment with new flavors and techniques.</p>
            </section>

            <section>
                <h2>Meet Samin Labbaf</h2>
                <p>Samin Labbaf is a creative front-end developer and food enthusiast who brings passion to every recipe and design. Combining a love for coding with a love for cooking, Samin creates websites that are both functional and visually appealing. Outside of work, Samin enjoys dancing, playing the piano, biking, and spending quality time with a playful feline companion. Join Samin on this delicious journey of culinary exploration!</p>
            </section>
        </main>
    )
}