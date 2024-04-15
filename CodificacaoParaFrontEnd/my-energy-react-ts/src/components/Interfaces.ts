export interface Tempo {
    tipo: string;
    tempo: string;
}

export interface Kwh {
    periodo: 'diario' | 'mensal';
    quantidade: number;
    valor: number;
}

export interface Registro {
    id: number;
    nome: string;
    potencia: string;
    tempoDeUsoDiario: Tempo[];
    tempoDeUsoMensal: Tempo[];
    kwh: Kwh[];
}

export interface ArrayRegistros {
    registros: Registro[];
}

export interface AtualizarRegistrosFuncao {
    (novosRegistros: Registro[]): void;
}