export function verificacoesInputs(inputNome: HTMLInputElement, inputPotencia: HTMLInputElement, inputHoras: HTMLInputElement, inputMinutos: HTMLInputElement): string {
    let verificacao = 'ok';

    if (!inputNome.value) {
        // alert("Favor Preencher o Nome do Aparelho!");
        // return 0;
        verificacao = "Favor Preencher o Nome do Aparelho!";
        return verificacao;
    }

    if (!inputPotencia.value) {
        // alert("Favor Preencher a Potência do Aparelho!");
        // return 0;
        verificacao = "Favor Preencher a Potência do Aparelho!";
        return verificacao;
    }
    
    if (!inputHoras.value && !inputMinutos.value) {
        // alert("Favor Preencher o Tempo de uso do Aparelho (Horas e/ou Minutos)!");
        // return 0;
        verificacao = "Favor Preencher o Tempo de uso do Aparelho (Horas e/ou Minutos)!";
        return verificacao;
    }

    if (parseInt(inputHoras.value) < 0 || parseInt(inputHoras.value) > 24) {
        // alert("Favor Preencher o Campo 'Tempo de Uso por Dia (horas)' com um valor válido (entre 0 e 24)!");
        // return 0;
        verificacao = "Favor Preencher o Campo 'Tempo de Uso por Dia (horas)' com um valor válido (entre 0 e 24)!";
        return verificacao;
    }

    if (parseInt(inputMinutos.value) < 0 || parseInt(inputMinutos.value) > 59) {
        // alert("Favor Preencher o Campo 'Tempo de Uso por Dia (minutos)' com um valor válido (entre 0 e 59)!");
        // return 0;
        verificacao = "Favor Preencher o Campo 'Tempo de Uso por Dia (minutos)' com um valor válido (entre 0 e 59)!";
        return verificacao;
    }

    if (parseInt(inputHoras.value) == 24 && parseInt(inputMinutos.value) > 0) {
        // alert("Favor Preencher o Campo 'Tempo de Uso por Dia (minutos)' com 0, pois 1 dia tem no máximo 24 horas!");
        // return 0;
        verificacao = "Favor Preencher o Campo 'Tempo de Uso por Dia (minutos)' com 0, pois 1 dia tem no máximo 24 horas!";
        return verificacao;
    }

    return verificacao;
}

export function kwhDiarioEMensal(potencia: HTMLInputElement, horas: HTMLInputElement, minutos: HTMLInputElement, diasNoMes: number, valorKWH: number) {
    // let valorKWH = 1.016800;
    // let diasNoMes = 30;
    const potenciaAparelho = parseFloat(potencia.value) / 1000;
    // const valorDiario = 0;
    // const valorMensal = 0;
    const horasDeUso = horas.value == "" ? 0 : parseInt(horas.value);
    const minutosDeUso = minutos.value == "" ? 0 : parseInt(minutos.value);
    const tempoUsoDiario = horasDeUso + (minutosDeUso / 60);
    // const tempoUsoMensal = tempoUsoDiario * diasNoMes;
    const UsoDiarioKWH = tempoUsoDiario * potenciaAparelho;
    const UsoMensalKWH = UsoDiarioKWH * diasNoMes;
    const valorDiario = UsoDiarioKWH * valorKWH;
    const valorMensal = UsoMensalKWH * valorKWH;
    return [UsoDiarioKWH, valorDiario, UsoMensalKWH, valorMensal];
}

export function tempoUsoMensal(horasDeUso: HTMLInputElement, minutosDeUso: HTMLInputElement, diasNoMes: number) {
    const horasUso = horasDeUso.value == "" ? 0 : parseInt(horasDeUso.value);
    const minutosUso = minutosDeUso.value == "" ? 0 : parseInt(minutosDeUso.value);
    const tempoUsoDiario = horasUso + (minutosUso / 60);
    const tempoUsoMensal = tempoUsoDiario * diasNoMes;
    // Separar a parte inteira das horas
    const horasCompletas = Math.floor(tempoUsoMensal);
    // Calcular os minutos fracionados e arredondá-los
    const minutos = Math.round((tempoUsoMensal - horasCompletas) * 60);
    // Formatar as horas e minutos em "hh:mm"
    const formatoHHMM = horasCompletas.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0');
    
    let horas_aux_mensal = '';
    
    if (tempoUsoMensal < 1) {
        horas_aux_mensal = "min";
    } else if (tempoUsoMensal < 2) {
        horas_aux_mensal = "hora";
    } else {
        horas_aux_mensal = "horas";
    }

    horas_aux_mensal += '/mês';

    return [formatoHHMM, horas_aux_mensal];
}

export function tempoUsoDiario(horasDeUso: HTMLInputElement, minutosDeUso: HTMLInputElement) {
    const horasUso = horasDeUso.value == "" ? 0 : parseInt(horasDeUso.value);
    const minutosUso = minutosDeUso.value == "" ? 0 : parseInt(minutosDeUso.value);

    const formatoHHMM = horasUso.toString().padStart(2, '0') + ':' + minutosUso.toString().padStart(2, '0');
    
    let horas_aux = (horasUso == 0) ? "min" : "horas";

    if (horasUso == 1) {
        horas_aux = "hora";
    }

    horas_aux += '/dia';

    return [formatoHHMM, horas_aux];
}

