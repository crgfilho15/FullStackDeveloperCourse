import styles from './Banner.module.css';

export function Banner({ imagem }: {imagem: string}) {
    return(
        <div className={styles.banner}>
            <img className={styles.image} src={imagem} alt="" />
        </div>
    );
}