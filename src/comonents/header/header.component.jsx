import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../asset/crown.svg';

const Header = ()=>(

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTANT</Link>
        </div>
    </div>
);

export default Header; 