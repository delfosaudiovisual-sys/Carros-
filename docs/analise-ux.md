# Análise de UX e design — “Seu carro por dentro”

Análise feita sobre o app com os três carros (Peugeot 206, Honda Civic G7 e Nissan Tiida C11), no computador (1200–1280 px) e no celular (390 × 844), seguindo o roteiro de crítica de design: primeira impressão, usabilidade, hierarquia visual, consistência e acessibilidade. Cada item diz o que estava errado, por que importa e o que foi feito.

## Primeira impressão

O 3D em raio-x é o que chama a atenção primeiro, e é isso mesmo que deve chamar: o carro abre transparente, com o motor à mostra. A proposta fica clara em poucos segundos. Os problemas estavam em volta do 3D: trocar de carro era difícil de achar, o carregamento deixava a tela em branco e o cartão de boas-vindas ocupava espaço demais.

## Usabilidade

| O que estava acontecendo | Gravidade | O que foi feito |
|---|---|---|
| A troca de carro (o motivo de existir a garagem dos amigos) só aparecia como um ícone de 22 px com duas setinhas ao lado do nome. A explicação ficava no fim do cartão de boas-vindas. | 🔴 Crítica | Botão com texto **Trocar carro** no cabeçalho. No celular vira um ícone de 30 px, ao lado do nome curto do carro. |
| Enquanto o three.js baixava, a página ficava em branco. Na troca de carro, a montagem da geometria segurava a tela por um instante sem nenhum aviso. | 🔴 Crítica | **Carregando o modelo 3D…** na abertura e **Montando o Nissan Tiida…** (com o nome do carro) durante a troca. |
| No celular, o cartão de boas-vindas tomava quase toda a meia-gaveta e empurrava a lista de sistemas para baixo da dobra. Ele voltava em toda visita até a pessoa fechar. | 🟡 Moderada | Texto mais curto e um rótulo **Comece por** nos atalhos. Depois que a pessoa abre a primeira peça, nas próximas visitas o painel já abre direto na lista. |
| A busca só funcionava com o mouse ou o dedo: o Enter sempre abria o primeiro resultado, as setas não faziam nada e o leitor de tela não sabia que havia uma lista. | 🟡 Moderada | ↑ e ↓ para escolher, Enter para abrir, Esc para limpar, atalho **/** para ir à busca (com a dica no campo). A busca agora é uma caixa de combinação (combobox) com lista de opções. |
| Não dava para levar a informação para fora do app (mandar a peça para o mecânico ou para os amigos). | 🟡 Moderada | Botão **Copiar resumo** no painel da peça (no celular, **Enviar**, que abre o menu de compartilhar): nome, códigos, onde fica, ferramentas e o passo a passo em texto. O endereço também guarda a peça aberta (`#tiida-c11/corrente`): recarregar a página volta na mesma peça. |
| No celular, o carro aparecia pequeno (cerca de 45% da largura). O enquadramento usava as 8 quinas da caixa do carro, e as quinas de cima ficam no vazio porque o teto é bem menor que a planta. | 🟡 Moderada | O cálculo considera o teto mais estreito, e o carro chega maior na tela, sem cortar. |
| Os textos diziam “Toque numa peça” também no computador. | 🟢 Pequena | Com mouse, o texto diz “Clique”; com o dedo, “Toque”. |
| As abas não respondiam às setas do teclado. Quando um caminho, um guia ou um sintoma era aberto por outro lugar, a aba marcada podia não acompanhar o conteúdo. | 🟢 Pequena | Padrão de abas acessíveis (setas, Home e End) e a aba marcada sempre acompanha o que o painel mostra. |

## Hierarquia visual

- **O que o olho vê primeiro:** o carro em raio-x. Certo.
- **Cabeçalho:** o número do motor (“1.8”, 30 px e peso 800) é a marca visual do app e funciona como assinatura, mas compete com o nome do carro. Com o rótulo **Trocar carro**, o bloco do carro passou a ler como um controle, e não só como um título.
- **Ordem de leitura no painel da esquerda:** antes, cartão grande → frase solta → lista de sistemas. Agora o cartão é mais curto, os atalhos têm um rótulo que diz para que servem, e a dica sobre “Como funciona” fica separada por um filete.

## Consistência

| Elemento | Problema | Correção |
|---|---|---|
| Parágrafo final das boas-vindas | Aparecia recuado 18 px: a classe `.ways` era a mesma da lista de “jeitos de fazer” do painel da peça, que tem recuo de lista. | Classe própria (`.wtips`), alinhada com o resto do cartão. |
| Atalhos (chips) | Nomes longos, como “Variador de fase do comando (CVTC)”, quebravam em duas linhas centralizadas, porque o botão centraliza o texto por padrão. | Texto alinhado à esquerda, bolinha de cor sem encolher. |
| Textos de ação | “Toque” no computador e “Clique” em lugar nenhum. | Verbo conforme o tipo de ponteiro. |

## Acessibilidade

- **Contraste:** o texto secundário (#505a65 sobre #f6f7f8) dá cerca de 6,5:1, acima dos 4,5:1 do WCAG AA. O tema escuro mantém a mesma lógica.
- **Áreas de toque:** chips, botões de vista e itens de lista tinham de 26 a 34 px. Com o dedo, passam a ter de 32 a 46 px; com o mouse, continuam compactos.
- **Teclado e leitor de tela:** abas com setas e `tabindex` móvel, busca como `combobox` + `listbox` com `aria-activedescendant`, avisos de carregamento com `role="status"`.
- **Movimento:** o app já respeitava “reduzir movimento”; os indicadores de carregamento giram mais devagar nesse modo.

## O que já funcionava bem

- Raio-x com rótulos e linhas até a peça, e as peças relacionadas acesas junto.
- Caminhos animados com alfinetes numerados e câmera que acompanha: é a parte mais didática do app.
- Painel da peça com duas abas (**Sobre a peça** e **Desmontar e montar**), códigos que se copiam com um toque e o aviso claro quando o código original não foi confirmado.
- Cores por sistema, usadas do mesmo jeito na lista, nos rótulos, nos caminhos e na busca.
- Tema escuro e gaveta arrastável no celular.

## O que fica como próxima rodada

1. **Aviso do código original repetido:** o texto “confirme pelo número do chassi” aparece em toda peça sem código confirmado. Pode virar um ícone de informação com o texto completo num só lugar.
2. **Montagem mais leve:** gerar a geometria em partes (ou guardar o carro já montado ao trocar e voltar) tiraria a pequena trava na troca de carro.
3. **Miniaturas na garagem:** hoje a garagem mostra a silhueta desenhada a partir do perfil; uma miniatura renderizada do próprio 3D deixaria cada carro mais reconhecível.
