// app/not-found.js

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="main-content">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oops! The page you are looking for doesn't exist.</p>
            <Link href="/" className="back-home">Go back to homepage</Link>
            <footer className="footer">
                <p>&copy; 2024 Your Website</p>
            </footer>
        </div>
    );
}
