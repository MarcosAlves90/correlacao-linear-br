const coeficientePearson = (x, y) => {
    if (x.length !== y.length || x.length === 0) {
        throw new Error("Os vetores x e y precisam ter o mesmo tamanho e não podem estar vazios.");
    }

    const n = x.length;

    let somaX = 0;
    let somaY = 0;
    let somaXY = 0;
    let somaXQuadrado = 0;
    let somaYQuadrado = 0;

    for (let i = 0; i < n; i++) {
        const valorX = x[i];
        const valorY = y[i];

        somaX += valorX;
        somaY += valorY;
        somaXY += valorX * valorY;
        somaXQuadrado += valorX ** 2;
        somaYQuadrado += valorY ** 2;
    }

    const numerador = n * somaXY - somaX * somaY;
    const denominadorX = n * somaXQuadrado - somaX ** 2;
    const denominadorY = n * somaYQuadrado - somaY ** 2;
    const denominador = Math.sqrt(denominadorX * denominadorY);

    if (denominador === 0) {
        throw new Error("Não foi possível calcular o coeficiente de Pearson porque o denominador ficou igual a zero.");
    }

    const r = numerador / denominador;
    const forca = classificarForcaCorrelacao(r);
    const direcao = r > 0 ? "positiva" : r < 0 ? "negativa" : "nula";

    console.log("\n=== ANALISE DE PEARSON ===");
    console.log(`Coeficiente de Pearson (r): ${r.toFixed(4)}`);
    console.log(`Direcao da correlacao: ${direcao}`);
    console.log(`Intensidade da correlacao: ${forca}`);

    return {
        coeficiente: r,
        direcao,
        forca
    };
};

const classificarForcaCorrelacao = (r) => {
    const valorAbsoluto = Math.abs(r);

    if (valorAbsoluto === 1) {
        return "perfeita";
    }

    if (valorAbsoluto >= 0.7) {
        return "forte";
    }

    if (valorAbsoluto >= 0.4) {
        return "moderada";
    }

    if (valorAbsoluto > 0) {
        return "fraca";
    }

    return "inexistente";
};

export default coeficientePearson;
