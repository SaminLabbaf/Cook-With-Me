import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import './styles/404.css';
import './styles/global.css';

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