# correlação-linear-br

Projeto de aprendizagem: simula dados, analisa correlação de Pearson e regressão linear.

## Como usar
1. `npm install` (opcional)
2. `node main.js`

## O que faz
- Gera `n` pares (horasEstudo, notaFinal)
- Calcula coeficiente de Pearson e classifica intensidade
- Calcula equação da reta (m, b) e R²
- Monta relatório de dispersão em HTML (função `gerarRelatorioDispersao`)

## Arquivos principais
- `main.js`
- `util/geradorDados.js`
- `util/coeficientePearson.js`
- `util/equacaoReta.js`
- `util/relatorioDispersao.js`

## Saída
- console: informações de análise e decisão em português
- relatório HTML: visualização interativa de cenários

## UTF-8
- UTF-8 no terminal e arquivo
- normalização NFC para acentuação correta

## Autoria
- Lyntter de Jesus Paiva
- Marcos Alves Lopes Júnior
- Matheus Souza Rodrigues
