import { coeficientePearson, equacaoReta, gerarDadosEstudo } from "./util/index.js";

process.stdout.setEncoding("utf8");
process.stdin.setEncoding("utf8");
process.env.LC_ALL = "pt_BR.UTF-8";

const logUtf8 = (mensagem = "") => {
    const texto = typeof mensagem === "string" ? mensagem : JSON.stringify(mensagem, null, 2);
    console.log(texto.normalize("NFC"));
};

if (process.platform === "win32") {
    try {
        require("child_process").execSync("chcp 65001 > nul");
    } catch (error) {
    }
}

const quantidadeDesejada = 15;
const dadosGerados = gerarDadosEstudo(quantidadeDesejada);

const x = dadosGerados.map((dado) => Number(dado.horasEstudo));
const y = dadosGerados.map((dado) => Number(dado.notaFinal));

try {
    logUtf8("=== DADOS GERADOS ===");
    console.table(dadosGerados);

    const resultadoPearson = coeficientePearson(x, y);
    const existeRelacaoLinear = resultadoPearson.forca !== "inexistente" && resultadoPearson.forca !== "fraca";

    logUtf8("\n=== DECISÃO ===");

    if (existeRelacaoLinear) {
        logUtf8("Há relação linear suficiente para calcular a equação da reta.");
        equacaoReta(x, y);
    } else {
        logUtf8("A relação encontrada foi muito fraca. A equação da reta não será calculada.");
    }
} catch (error) {
    logUtf8(error.message);
}
