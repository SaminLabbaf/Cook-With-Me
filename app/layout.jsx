import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Cook With Me</h1>
          <nav>
            <ul>
              <li><Link href="#"><h4>Recipes</h4></Link></li>
              <li><Link href="#"><h4>About Us</h4></Link></li>
              <li><Link href="#"><h4>Contact</h4></Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}