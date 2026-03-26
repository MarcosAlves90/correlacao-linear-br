function gerarDadosEstudo(quantidadeDeLinhas) {
    const dados = [];

    for (let i = 0; i < quantidadeDeLinhas; i++) {
        let horas = Math.random() * 10;
        let notaBase = (horas * 0.8) + 2;
        let ruido = (Math.random() * 3) - 1.5;

        let notaFinal = notaBase + ruido;

        if (notaFinal > 10) notaFinal = 10;
        if (notaFinal < 0) notaFinal = 0;

        dados.push({
            horasEstudo: horas.toFixed(1),
            notaFinal: notaFinal.toFixed(1)
        });
    }

    return dados;
}

function converterParaCSV(dados) {
    let csv = "Horas de Estudo;Nota Final\n";

    for (let i = 0; i < dados.length; i++) {
        csv += `${dados[i].horasEstudo};${dados[i].notaFinal}\n`;
    }

    return csv;
}

export { gerarDadosEstudo, converterParaCSV };
