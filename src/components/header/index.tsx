import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>WOM</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Issues
                </Link>
                <Link activeClassName={style.active} href="/">
                    Team
                </Link>
            </nav>
        </header>
    );
};

export default Header;
