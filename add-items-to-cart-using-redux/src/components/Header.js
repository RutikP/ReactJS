import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const Items = useSelector(state => state.Items)
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Items</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link  to="/cart" className={styles.cartbtn}><strong>Cart [{Items.length}]</strong></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
        </div>
    )
};

export default Header;
