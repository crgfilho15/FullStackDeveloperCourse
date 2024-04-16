import styles from './Card.module.css';
import { Trash, Pencil } from 'phosphor-react';
import { Registro } from './Interfaces';

export function CardAparelhosCadastrados({ registros, handleRemoverRegistro, total }: { registros: Registro[]; handleRemoverRegistro: {(arg0:number):void}; total: number }) {

    function handleExcluir(id: number) {
        handleRemoverRegistro(id);
        // console.log(registros);
    }

    // function handleEditar(id: number) {
    //     handleEditarRegistro(id);
        // console.log(registros);
    // }

    return (
        //    Quadro de Exibição de Aparelhos Cadastrados
        <div className={`${styles.quadro} ${styles.aparelhosCadastrados}`}>
            <div className={styles.espacoTituloQuadro}>
                <span className={styles.tituloQuadro}>Aparelhos Cadastrados <span className={styles.arrasteTabela}>| Arraste &gt;&gt;&gt;</span></span>
            </div>
            <div className={styles.tabelaQuadro}>
                <div className={styles.tabelaScroll}>
                    <table className={styles.tabelaValores}>
                        <thead>
                            <tr>
                                <th>Aparelho</th>
                                <th>Potência (W)</th>
                                <th>Tempo de Uso Diário </th>
                                <th>kWh/dia</th>
                                <th>Custo Médio Diário</th>
                                <th>Tempo de Uso Mensal </th>
                                <th>kWh/mês</th>
                                <th>Custo Médio Mensal</th>
                            </tr>
                        </thead>
                        <tbody id="tabela-aparelhos-cadastrados">
                            {registros.map((registro: Registro) => {
                                return (
                                    <tr id={registro.id.toString()} key={registro.id}>
                                        <td>{registro.nome}</td>
                                        <td>{registro.potencia}</td>
                                        <td>{`${registro.tempoDeUsoDiario[0].tempo} ${registro.tempoDeUsoDiario[0].tipo}`}</td>
                                        <td>{registro.kwh[0].quantidade.toFixed(2)}</td>
                                        <td>{`R$${registro.kwh[0].valor.toFixed(2)}/dia`}</td>
                                        <td>{`${registro.tempoDeUsoMensal[0].tempo} ${registro.tempoDeUsoMensal[0].tipo}`}</td>
                                        <td>{registro.kwh[1].quantidade.toFixed(2)}</td>
                                        <td>{`R$${registro.kwh[1].valor.toFixed(2)}/mês`}</td>
                                        <td id="botaoTabela botaoEditar" title="Em breve" className={`${styles.botaoTabela} ${styles.botaoEditar} ${styles.botaoDisabled}`}> <Pencil size={20} /> </td>
                                        <td id="botaoTabela botaoExcluir" title="Excluir registro" onClick={() => handleExcluir(registro.id)} className={`${styles.botaoTabela} ${styles.botaoExcluir}`}> <Trash size={20} /> </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot id="tabela-footer-aparelhos-cadastrados">
                            <tr>
                                <td className={styles.semBorda}></td>
                                <td className={styles.semBorda}></td>
                                <td className={styles.semBorda}></td>
                                <td className={styles.semBorda}></td>
                                <td className={styles.semBorda}></td>
                                <td className={styles.semBorda}></td>
                                <td className={styles.semBorda}></td>
                                <td id="total-tabela">R${total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}
