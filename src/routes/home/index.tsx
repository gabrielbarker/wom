import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1><span>WOMZINE</span></h1>
            <p>COMING SOON</p>
        </div>
    );
};

export default Home;
