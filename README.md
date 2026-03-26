# correlação-linear-br

Projeto em Node.js para simular dados de estudo e nota, analisar a correlação de Pearson e, quando a relação é suficientemente forte, calcular a regressão linear.

## Como executar
1. Instale o [Node.js](https://nodejs.org/) se ainda não tiver.
2. No terminal, rode:
	 - `node main.js`

> O projeto não usa dependências externas nem possui `package.json`.

## O que o projeto faz de verdade
- Gera 15 pares aleatórios de dados no formato `horasEstudo` e `notaFinal`
- Exibe os dados gerados em tabela no console
- Calcula o coeficiente de Pearson e classifica a correlação como:
	- perfeita
	- forte
	- moderada
	- fraca
	- inexistente
- Se a correlação não for `fraca` nem `inexistente`, calcula a equação da reta da regressão linear
- Mostra no console a equação `y = mx + b`, o valor de `R²` e o percentual explicado pelo modelo

## Estrutura principal
- `main.js` — ponto de entrada da aplicação
- `util/index.js` — reexporta as funções utilitárias
- `util/geradorDados.js` — gera os dados simulados e converte para CSV
- `util/coeficientePearson.js` — calcula e classifica a correlação de Pearson
- `util/equacaoReta.js` — calcula regressão linear e `R²`

## Saída esperada
- Mensagens em português no console
- Tabela com os dados gerados
- Se aplicável, análise de Pearson e regressão linear

## Observações
- O texto do terminal é normalizado em UTF-8/NFC para manter acentuação correta no Windows
- Os dados são gerados aleatoriamente a cada execução, então os resultados mudam sempre

## Autoria
- Lyntter de Jesus Paiva
- Marcos Alves Lopes Júnior
- Matheus Souza Rodrigues
