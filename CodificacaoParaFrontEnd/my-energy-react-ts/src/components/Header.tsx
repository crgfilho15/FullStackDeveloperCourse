import { Lightning } from "phosphor-react";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className={styles.cabecalho}>
            <div className={styles.logotipo}>
                <Lightning className={styles.bolt} size={32} />
                <h1 className={styles.myEnergy}>MyEnergy</h1>
            </div>
            <div className={styles.botoes}>
                <div>
                    <Link to='./home'><button id="botao-sobre-nos" className={styles.botao} type="button">Home</button></Link>
                    {/* <button id="botao-sobre-nos" className={styles.botao} type="button">Home</button> */}
                </div>
                <div>
                    <Link to='./motivacao'><button id="botao-sobre-nos" className={styles.botao} type="button">Motivação</button></Link>
                    {/* <button id="botao-sobre-nos" className={styles.botao} type="button">Motivação</button> */}
                </div>
                <div>
                    {/* <Link to=''><button id="botao-sobre-nos" className={`${styles.botao} ${styles.botaoDisabled}`} type="button">Simulador Energia Solar</button></Link> */}
                    <button id="botao-sobre-nos" title="Em breve" className={`${styles.botao} ${styles.botaoDisabled}`} type="button">Simulador Energia Solar</button>
                </div>
            </div>
        </div>
    );
}