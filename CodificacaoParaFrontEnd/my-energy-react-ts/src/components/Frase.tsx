import styles from './Frase.module.css';

export function Frase() {
    return(
        <div className={styles.quadroFrase}>
            <p className={styles.frase}>"Eficiência energética: A chave para a economia doméstica e a proteção ambiental."</p>
        </div>
    );
}