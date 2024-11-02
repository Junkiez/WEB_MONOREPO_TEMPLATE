import { Link } from "@tanstack/react-router";

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
                About
            </Link>
        </nav>
    )
}