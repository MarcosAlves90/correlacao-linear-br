import { coeficientePearson, equacaoReta, gerarDadosEstudo } from "./util/index.js";

process.stdout.setEncoding("utf8");
process.stdin.setEncoding("utf8");

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
    console.log("=== DADOS GERADOS ===");
    console.table(dadosGerados);

    const resultadoPearson = coeficientePearson(x, y);
    const existeRelacaoLinear = resultadoPearson.forca !== "inexistente" && resultadoPearson.forca !== "fraca";

    console.log("\n=== DECISÃO ===");

    if (existeRelacaoLinear) {
        console.log("Há relação linear suficiente para calcular a equação da reta.");
        equacaoReta(x, y);
    } else {
        console.log("A relação encontrada foi muito fraca. A equação da reta não será calculada.");
    }
} catch (error) {
    console.error(error.message);
}
