import { useRef } from 'react';
import styles from './Card.module.css';
import { Registro, AtualizarRegistrosFuncao } from './Interfaces';
import { tempoUsoMensal, kwhDiarioEMensal, verificacoesInputs, tempoUsoDiario } from './FuncoesCadastrarAparelho.js';

let id = 0;

export function CardCadastroAparelho({ registros, setRegistros }: { registros: Registro[]; setRegistros: AtualizarRegistrosFuncao; }) {
    const nomeRef = useRef<HTMLInputElement>(null);
    const potenciaRef = useRef<HTMLInputElement>(null);
    const tempoHorasRef = useRef<HTMLInputElement>(null);
    const tempoMinutosRef = useRef<HTMLInputElement>(null);
    const valorKWH = 1.016800;
    const diasNoMes = 30;

    // if(setRegistroSelecionado != undefined) {
    //     const registroEdicao = setRegistroSelecionado;
    //     // nomeRef.current.value = registroEdicao.nome;
    //     console.log(registroEdicao.nome);
    // }

    const handleNomeChange = () => {
        if (nomeRef.current) {
            const nome = nomeRef.current.value;
            nomeRef.current.value = '';
            return (nome);
        }
        return '';
    };

    const handlePotenciaChange = () => {
        if (potenciaRef.current) {
            const potencia = potenciaRef.current.value;
            potenciaRef.current.value = '';
            return (potencia);
        }
        return '';
    };

    const handleTempoHorasChange = () => {
        if (tempoHorasRef.current) {
            let tempoHoras = tempoHorasRef.current.value;
            tempoHorasRef.current.value = '';
            tempoHoras = tempoHoras == "" ? "00" : tempoHoras.padStart(2, '0');
            return (tempoHoras);
        }
        return '';
    };

    const handleTempoMinutosChange = () => {
        if (tempoMinutosRef.current) {
            let tempoMinutos = tempoMinutosRef.current.value;
            tempoMinutosRef.current.value = '';
            tempoMinutos = tempoMinutos == "" ? "00" : tempoMinutos.padStart(2, '0');
            return (tempoMinutos);
        }
        return '';
    };

    function handleCadastro() {
        const inputNome = document.getElementById("campo-nome-aparelho") as HTMLInputElement;
        const inputPotencia = document.getElementById("campo-potencia-aparelho") as HTMLInputElement;
        const inputHoras = document.getElementById("campo-tempo-uso-horas-aparelho") as HTMLInputElement;
        const inputMinutos = document.getElementById("campo-tempo-uso-minutos-aparelho") as HTMLInputElement;
        
        const verificacaoInputs = verificacoesInputs(inputNome, inputPotencia, inputHoras, inputMinutos);
        
        if(verificacaoInputs != 'ok') {
            alert(verificacaoInputs);
            return 0;
        }

        const UsoKWH = kwhDiarioEMensal(inputPotencia, inputHoras, inputMinutos, diasNoMes, valorKWH);
        
        const horasMensal = tempoUsoMensal(inputHoras, inputMinutos, diasNoMes);
        
        const horasDiario = tempoUsoDiario(inputHoras, inputMinutos);

        handleTempoHorasChange();
        handleTempoMinutosChange();

        const novoRegistro: Registro = {
            id: id + 1,
            nome: handleNomeChange(),
            potencia: handlePotenciaChange(),
            tempoDeUsoDiario: [
                { tempo: horasDiario[0], tipo: horasDiario[1] },
            ],
            tempoDeUsoMensal: [
                { tempo: horasMensal[0], tipo: horasMensal[1] },
            ],
            kwh: [
                { periodo: 'diario', quantidade: UsoKWH[0], valor: UsoKWH[1] },
                { periodo: 'mensal', quantidade: UsoKWH[2], valor: UsoKWH[3] },
            ],
        };

        id++;

        setRegistros([...registros, novoRegistro]);

        // console.log(registros);
    }

    return (
        // Quadro de Cadastro de Aparelho
        <div className={styles.quadro}>
            <div className={styles.espacoTituloQuadro}>
                <span className={styles.tituloQuadro}>Cadastrar Aparelho</span>
            </div>
            <div className={styles.corpoQuadro}>
                <div className={styles.quadroInfo}>
                    <span className={styles.labelQuadro}>Nome do Aparelho:</span>
                    <input id="campo-nome-aparelho" className={styles.inputQuadro} type="text" ref={nomeRef}></input>
                </div>
                <div className={styles.quadroInfo}>
                    <span className={styles.labelQuadro}>Potência (W):</span>
                    <input id="campo-potencia-aparelho" className={styles.inputQuadro} type="number" min="0" ref={potenciaRef}></input>
                </div>
                <div className={styles.quadroInfo}>
                    <span className={styles.labelQuadro}>Tempo de Uso por Dia (horas):</span>
                    <input id="campo-tempo-uso-horas-aparelho" className={styles.inputQuadro} type="number" min="0" ref={tempoHorasRef}></input>
                </div>
                <div className={styles.quadroInfo}>
                    <span className={styles.labelQuadro}>Tempo de Uso por Dia (minutos):</span>
                    <input id="campo-tempo-uso-minutos-aparelho" className={styles.inputQuadro} type="number" min="0" ref={tempoMinutosRef}></input>
                </div>
                <div className={styles.quadroBotao}>
                    <button id="botao_cadastrar" className={styles.botao} type="button" onClick={handleCadastro}>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}