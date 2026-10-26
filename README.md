# Seu carro por dentro

Página única que mostra um carro em 3D, peça por peça: o que cada uma faz, onde fica, o código, como é presa,
como desmontar e montar, os caminhos do ar, do combustível, da força e da faísca animados, sintomas e revisões.
Dá para trocar de carro pelo botão **Trocar carro**, no topo. O endereço guarda o carro e a peça abertos
(`#tiida-c11/corrente`), e cada peça tem **Copiar resumo** (no celular, **Enviar**) para mandar ao mecânico.

Carros prontos:

- **Peugeot 206 Sensation 1.4 flex** (`src/cars/peugeot-206*.js`)
- **Honda Civic LX 1.7 2005, sétima geração, motor D17, manual de 5 marchas** (`src/cars/civic-g7*.js`)
- **Nissan Tiida S 1.8 flex 2010/2011 (C11), motor MR18DE, manual de 6 marchas, hatch** (`src/cars/tiida-c11*.js`)
- **VW Gol Power 1.6 8V flex 2010/2011 (G5), motor EA111, manual de 5 marchas, hatch 4 portas** (`src/cars/gol-g5*.js`)

A análise de UX e design, com o que foi corrigido e o que fica para a próxima rodada, está em [`docs/analise-ux.md`](docs/analise-ux.md).

## Como navegar

- **Arrastar** gira, **rodinha ou pinça** aproxima, **clique ou toque** numa peça abre o painel dela.
- **Setas ou W A S D** andam com a câmera para a frente, para trás e para os lados; **Q e E** descem e sobem; **Shift** vai mais rápido.
- No canto do palco há **setas na tela** (segure para andar; o centro volta à vista inicial). Dá para escondê-las em **Vistas → Setas na tela**.
- Num caminho ou guia aberto, **vírgula e ponto** (ou PgUp e PgDn) mudam o passo e **espaço** reproduz ou pausa.
- **/** vai para a busca; **Esc** fecha o que estiver aberto.

## Acabamento dos modelos

As texturas são desenhadas no navegador, sem arquivos: banda de rodagem e flanco dos pneus, grades em colmeia vazadas,
placas Mercosul com um código de cada carro (campo `plate` em `src/cars/<id>.js`), marcas de usinagem nos discos, variação
de brilho no metal fundido e gomos nos estofados. Ficam em `finishDetails()`, no motor, e valem para todos os carros.

## Como gerar a página

```sh
node build.mjs --check     # junta tudo em dist/index.html e confere a sintaxe
node tools/check-data.mjs  # confere relações, caminhos, guias e se toda peça tem desmontar/montar
```

`dist/index.html` é o arquivo publicado. Ele carrega o three.js 0.147 da CDN do jsDelivr.

## Estrutura

```
src/shell.html          esqueleto da página (metas, fonte, scripts do three.js)
src/styles.css          estilos
src/engine/engine.js    motor genérico: cena, materiais, carroceria paramétrica, fixadores, caminhos animados,
                        guias de desmontagem, interface; exporta window.mountCar(carro, opções)
src/app.js              garagem: escolhe o carro, guarda a escolha, troca com animação
src/cars/<id>.js        dados do carro (window.CARS)
src/cars/<id>.geo.js    geometria 3D (window.CAR_GEO[id]), quando separada
src/cars/<id>.parts.js  lista de peças (window.CAR_PARTS[id]), quando separada
src/cars/<id>.procN.js  código e procedimentos de desmontar/montar (window.CAR_PROC[id])
tools/shot.mjs          abre a página num Chromium sem tela e tira capturas (TOUCH=1 emula celular)
```

## Como adicionar o carro de um amigo

1. Copie `src/cars/civic-g7.js` para `src/cars/<novo-id>.js` e troque os dados de cabeçalho:
   `id`, `order`, `codePrefix` (prefixo dos códigos de referência, ex. `GOL`), `badge`, `name`, `title`, `sub`,
   `size`, `wheelR`, `profile` (silhueta da garagem), `open` (peças que abrem: capô, portas, tampa) e `about`.
2. Em `data()`, descreva sistemas, peças, fixadores com torques, sintomas, caminhos e revisões.
3. Em `<novo-id>.geo.js`, ajuste os perfis da carroceria (`BK`), as divisões dos painéis e a mecânica.
   A carroceria é gerada por seções ao longo do carro, então um hatch, um sedã ou uma perua mudam só os perfis.
4. Em `<novo-id>.proc1.js`/`proc2.js`, coloque o código de fábrica de cada peça (só quando confirmado
   em catálogo) e os passos de desmontar e montar.
5. Rode `node tools/check-data.mjs` até não sobrar aviso, e `node build.mjs --check`.

Cada carro guarda as próprias revisões no navegador (`localStorage`), separado dos outros.

## Códigos das peças

Toda peça tem um código de referência do app (ex. `CVC-FRE-03`) para facilitar a busca e a conversa na oficina.
Quando o código de fábrica foi confirmado em catálogo, ele aparece junto (ex. correia dentada do D17
`14400-PMM-A02`). Códigos de fábrica mudam com o chassi e com substituições: confirme pelo número do chassi
(VIN) antes de comprar.
