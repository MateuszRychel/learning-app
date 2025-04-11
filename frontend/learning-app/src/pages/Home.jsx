import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function Home() {
    return (
        <>
            <MainNavigation />
            <div>
                <h1>Home page</h1>
                <Link to="/Form">Form</Link>
            </div>
        </>
    )
}

export default Home;