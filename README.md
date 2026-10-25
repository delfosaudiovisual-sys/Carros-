# Seu carro por dentro

Página única que mostra um carro em 3D, peça por peça: o que cada uma faz, onde fica, o código, como é presa,
como desmontar e montar, os caminhos do ar, do combustível, da força e da faísca animados, sintomas e revisões.
Dá para trocar de carro tocando no nome dele no topo.

Carros prontos:

- **Peugeot 206 Sensation 1.4 flex** (`src/cars/peugeot-206*.js`)
- **Honda Civic LX 1.7 2005, sétima geração, motor D17, manual de 5 marchas** (`src/cars/civic-g7*.js`)

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
tools/shot.mjs          abre a página num Chromium sem tela e tira capturas
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
