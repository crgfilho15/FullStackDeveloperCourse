import styles from './Card.module.css';

export function CardDescricaoConsumo({ total, valorKWH, pil }: {total: number; valorKWH: number; pil: number;}) {

    return (
        //  Quadro de Descrição do Consumo 
        <div className={styles.quadro}>
            <div className={styles.espacoTituloQuadro}>
                <span className={styles.tituloQuadro}>Entenda seu Consumo</span>
            </div>
            <div className={styles.tabelaQuadro}>
                <table className={styles.tabelaValores}>
                    <tbody>
                        <tr>
                            <th>Custo do kWh</th>
                            <td>{`R$${valorKWH}`}</td>
                        </tr>
                        <tr>
                            <th>Contribuição com Iluminação Pública</th>
                            <td id="iluminacao-publica">{`R$${(total * pil).toFixed(2)}`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}