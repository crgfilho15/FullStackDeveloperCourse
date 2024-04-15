import styles from './Card.module.css';

export function CardValorFinal({ total }: {total: number;}) {
    return(
        <div className={`${styles.quadro} ${styles.maxHeight}`}>
            <div className={styles.espacoTituloQuadro}>
                <span className={styles.tituloQuadro}>Valor Total Estimado</span>
            </div>
            <div className={styles.campoValorFinal}>
                <span id="valor-final" className={styles.valorFinal}>{`R$${total.toFixed(2)}`}</span>
            </div>
        </div>
    );
}