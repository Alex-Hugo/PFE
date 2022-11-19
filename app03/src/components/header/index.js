import { Link } from 'react-router-dom';
function Header(){

return(
    <header>
        <div className="content">
        <div className="pt1">
            <nav>
                <ul>
                    <li><Link to ="/hobbies">Hobbies</Link></li>
                    <li><Link to ="/formação">Formação</Link></li>
                    <li><Link to ="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </div>
        </div>
    </header>
);

}export default Header