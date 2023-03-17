import { NavLink } from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor: 'orangered'
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/index" style ={ ({ isActive }) => isActive? activeStyle: undefined}>HOME</NavLink></li>
                <li><NavLink to="/Introduce" style ={ ({ isActive }) => isActive? activeStyle: undefined}>소개</NavLink></li>
                <li><NavLink to="/" style ={ ({ isActive }) => isActive? activeStyle: undefined}>지도</NavLink></li>
            </ul>
        </div>
        
    )
}

export default Navbar;