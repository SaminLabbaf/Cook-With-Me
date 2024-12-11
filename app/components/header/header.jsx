import Link from "next/link"

export default function Header() {
    return (
        <header>
            <Link href='./'><h1>Cook With Me</h1></Link>
            <nav>
                <ul>
                    <li><Link href="./recipes"><h4>Recipes</h4></Link></li>
                    <li><Link href="#"><h4>About Us</h4></Link></li>
                    <li><Link href="#"><h4>Contact</h4></Link></li>
                </ul>
            </nav>
        </header>
    )
}