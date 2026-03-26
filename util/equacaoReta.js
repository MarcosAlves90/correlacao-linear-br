const logUtf8 = (mensagem = "") => console.log(String(mensagem).normalize("NFC"));

const equacaoReta = (x, y) => {
    if (x.length !== y.length || x.length === 0) {
        throw new Error("Os vetores x e y precisam ter o mesmo tamanho e não podem estar vazios.");
    }

    const n = x.length;

    let somaX = 0;
    let somaY = 0;
    let somaXY = 0;
    let somaXQuadrado = 0;

    for (let i = 0; i < n; i++) {
        const valorX = x[i];
        const valorY = y[i];

        somaX += valorX;
        somaY += valorY;
        somaXY += valorX * valorY;
        somaXQuadrado += valorX ** 2;
    }

    const denominador = n * somaXQuadrado - somaX ** 2;

    if (denominador === 0) {
        throw new Error("Não foi possível calcular a reta porque o denominador ficou igual a zero.");
    }

    const m = (n * somaXY - somaX * somaY) / denominador;
    const b = (somaY - m * somaX) / n;

    logUtf8("\n=== REGRESSÃO LINEAR ===");
    logUtf8(`Equação da reta: y = ${m.toFixed(2)}x + ${b.toFixed(2)}`);

    const mediaY = somaY / n;

    let sqResiduo = 0;
    let sqTotal = 0;

    for (let i = 0; i < n; i++) {
        const yPredito = m * x[i] + b;

        sqResiduo += (y[i] - yPredito) ** 2;
        sqTotal += (y[i] - mediaY) ** 2;
    }

    const rQuadrado = sqTotal === 0 ? 1 : 1 - (sqResiduo / sqTotal);

    logUtf8(`Coeficiente de determinação (R^2): ${rQuadrado.toFixed(4)}`);
    logUtf8(`Percentual explicado pelo modelo: ${(rQuadrado * 100).toFixed(2)}%`);
};

export default equacaoReta;
