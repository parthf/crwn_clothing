import { Fragment, useContext } from "react";
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropDown from "../../component/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../component/context/user.context";
import { CartContext } from "../../component/context/cart.context";
import '../../Routes/Navigation/navigation.styles.scss';
import { signOutUser } from '../../Utils/firebase/firebase.utils'


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <div className="nav-link" onClick={signOutHandler}>{''}SIGN-OUT{' '}</div>
                    ) :
                        (<Link className="nav-link" to='/auth'>
                            SIGN-IN
                        </Link>)
                    }
                    <CartIcon />
                    {isCartOpen && <CartDropDown />}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;