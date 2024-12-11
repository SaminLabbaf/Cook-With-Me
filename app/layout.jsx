import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}