import { Check } from 'phosphor-react';
import styles from './Card.module.css';

export function CardPotencias() {
    const aparelhos = [
        { title: "Ar-condicionado", power: "1000W" },
        { title: "Aparelho de som", power: "40W" },
        { title: "Aparelho de DVD", power: "50W" },
        { title: "Aspirador", power: "1000W" },
        { title: "Batedeira", power: "200W" },
        { title: "Barbeador", power: "10W" },
        { title: "Cafeteira", power: "1000W" },
        { title: "Carregador de celular", power: "1.5W" },
        { title: "Chuveiro", power: "3500W" },
        { title: "Computador", power: "300W" },
        { title: "Exaustor", power: "150W" },
        { title: "Ferro de passar roupa", power: "1000W" },
        { title: "Freezer", power: "130W" },
        { title: "Geladeira", power: "130W" },
        { title: "Grill", power: "900W" },
        { title: "Lâmpada fluorescente", power: "9W" },
        { title: "Lâmpada incandescente", power: "40W" },
        { title: "Liquidificador", power: "300W" },
        { title: "Máquina de lavar", power: "350W" },
        { title: "Microondas", power: "1200W" },
        { title: "Sanduicheira", power: "750W" },
        { title: "Secador de cabelo", power: "1400W" },
        { title: "Televisor", power: "100W" },
        { title: "Telefone sem fio", power: "100W" },
        { title: "Torradeira", power: "800W" },
        { title: "Ventilador", power: "120W" },
        { title: "Videogame", power: "15W" }
    ]; 

    return (
        // Potência Elétrica Média (WATTS) de Aparelhos Elétricos
        <div className={styles.quadro}>
            <div className={styles.espacoTituloQuadro}>
                <span className={styles.tituloQuadro}>Potência Elétrica Média de Aparelhos Elétricos</span>
            </div>
            <div className={styles.tabelaQuadro}>
                <div className={styles.tabelaScroll}>
                    <table className={styles.tabelaValores}>
                        <thead>
                            <tr>
                                <th>Aparelho</th>
                                <th>Potência Aproximada (W)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aparelhos.map((a) => {
                                return (
                                    <tr>
                                        <td>{a.title}</td>
                                        <td>{a.power}</td>
                                        <td id="botaoTabela botaoEditar" title="Em breve" className={`${styles.botaoSelect} ${styles.botaoDisabled}`}> <Check size={20} /> </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}