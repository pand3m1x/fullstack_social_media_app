import { Link } from "react-router-dom"

function Navbar() {

    // bring in user info from context

    const { user } = useUser()

    return (
        <nav>
            <ul>
                {user && <li>Welcome {user.username}</li>}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/feed">Feed</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar