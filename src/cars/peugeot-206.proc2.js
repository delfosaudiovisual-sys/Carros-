/* ===== Peugeot 206 1.4 flex: como desmontar e montar cada peça (transmissão, freios, suspensão, direção, interior e carroceria) ===== */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['peugeot-206'] = window.CAR_PROC['peugeot-206'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria com o procedimento anti-ECO: capô aberto, chave fora, portas fechadas sem trancar e 15 minutos de espera.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const RODA = 'Afrouxe os parafusos da roda com o carro no chão, levante, apoie em cavaletes e tire a roda.';
const SANGRIA = 'Sangre os freios começando pela roda mais longe do cilindro-mestre (traseira direita, traseira esquerda, dianteira direita, dianteira esquerda), com fluido DOT 4 novo, até sair sem bolhas.';
const PEDAL = 'Antes de andar, bombeie o pedal até ele ficar alto e firme.';
const ALINHA = 'Faça alinhamento depois.';
const FUNIL = 'Peça estrutural soldada: o serviço é de funilaria, com cortes e solda no lugar dos pontos de fábrica, e o carro conferido em gabarito.';

/* ---------- TRANSMISSÃO ---------- */
M('cambio', {
  f: 'Macaco de transmissão, apoio de motor, soquetes, extrator de pivô, chave da porca do cubo.',
  pre: BAT + ' ' + ELEV,
  d: ['Tire a bateria, a bandeja e a caixa do filtro de ar.', 'Drene o óleo do câmbio.', 'Desligue cabo da embreagem, varões do trambulador, sensor de velocidade, interruptor da luz de ré e massa.', 'Tire os dois semieixos e o motor de partida.',
    'Apoie o motor (por cima ou por baixo) e o câmbio no macaco.', 'Solte o coxim do câmbio e os parafusos câmbio–motor e afaste o câmbio reto até o eixo sair do disco.'],
  m: ['Disco centralizado; graxa leve no estriado do eixo.', 'Aproxime o câmbio reto, sem apoiar o peso no eixo, e aperte os parafusos da capa.', 'Coxim, semieixos com retentores bons, motor de partida, cabos e varões.', 'Abasteça o óleo até o nível (cerca de 2 L) e teste todas as marchas parado e andando.']
});
M('diferencial', {
  pre: 'O diferencial fica dentro da carcaça do câmbio e só se revisa com o câmbio aberto na bancada.',
  d: ['Tire o câmbio do carro e drene o óleo.', 'Abra a carcaça e tire o diferencial com os rolamentos.'],
  m: ['Rolamentos e retentores novos, pré-carga conforme o manual.', 'Feche, monte o câmbio e abasteça.']
});
M('embreagem', {
  f: 'Centralizador de disco, soquetes, torquímetro, travamento do volante.',
  pre: 'Exige tirar o câmbio. Troque disco, platô e rolamento juntos.',
  d: ['Tire o câmbio.', 'Marque a posição do platô no volante.', 'Solte os 6 parafusos do platô em cruz, aos poucos, segurando o disco.', 'Revise a face do volante e o retentor traseiro do virabrequim.'],
  m: ['Disco com o lado indicado ("lado volante") para o volante, centralizado com a ferramenta.', 'Platô nos pinos, parafusos em cruz aos poucos até o torque.', 'Monte o câmbio e confira o curso do pedal.']
});
M('rol_emb', {
  pre: 'Com o câmbio fora.',
  d: ['Solte o rolamento do garfo e tire-o do guia.', 'Confira o garfo e o pivô onde ele apoia.'],
  m: ['Rolamento novo, graxa só no pivô do garfo e no guia (nada no disco).']
});
M('cabo_emb', {
  f: 'Lanterna, alicate.',
  d: ['Sob o painel, desencaixe a ponta do cabo do pedal.', 'No câmbio, solte a ponta do garfo e a capa do suporte.', 'Puxe o cabo pelo corta-fogo.'],
  m: ['Mesmo caminho, sem dobras fechadas.', 'Pise várias vezes no pedal: a regulagem é automática. Confira o ponto de acoplamento.']
});
M('pedal_emb', {
  f: 'Soquetes, lanterna.',
  pre: 'Serviço feito deitado sob o painel.',
  d: ['Desencaixe o cabo da embreagem.', 'Tire o eixo ou o parafuso do pedal na pedaleira.'],
  m: ['Buchas novas com graxa, cabo encaixado, pedal voltando sozinho.']
});
M('semieixos', {
  f: 'Soquete da porca do cubo e cabo de força, extrator de pivô, alavanca, torquímetro.',
  pre: 'Solte a porca do cubo com o carro no chão e o freio de mão puxado. ' + ELEV,
  d: ['Tire a roda e a porca do cubo.', 'Solte o pivô da bandeja da manga.', 'Puxe a manga para fora e tire a ponta da homocinética do cubo.', 'Do lado direito, solte o mancal intermediário no bloco; puxe o semieixo do câmbio (sai um pouco de óleo).'],
  m: ['Retentor do câmbio bom, estriado limpo.', 'Encaixe o semieixo no câmbio até travar e a ponta no cubo.', 'Pivô, roda e porca do cubo nova com o carro no chão (aperto muito alto, ≈ 250 N·m — confirme).', 'Complete o óleo do câmbio.']
});
M('trambulador', {
  f: 'Alavanca para soltar rótulas, graxa.',
  pre: ELEV,
  d: ['Por baixo, solte as rótulas dos varões no câmbio e na alavanca.', 'Solte os suportes no túnel e tire os varões.'],
  m: ['Rótulas novas com graxa, encaixe até estalar.', 'Teste todas as marchas e a ré com o motor desligado.']
});
M('alavanca', {
  f: 'Espátula plástica, soquetes.',
  d: ['Puxe a manopla para cima.', 'Solte a coifa e o console.', 'Desligue os varões e solte os parafusos da base.'],
  m: ['Base firme, varões encaixados, coifa no lugar.']
});

/* ---------- FREIOS ---------- */
M('pedal_freio', {
  f: 'Soquetes, lanterna.',
  d: ['Sob o painel, desligue o interruptor da luz de freio.', 'Tire a trava e o pino da haste do servo.', 'Tire o eixo do pedal.'],
  m: ['Buchas com graxa, pino com trava nova.', 'Ajuste o interruptor: a luz acende logo no começo do curso.']
});
M('servo', {
  f: 'Soquetes, chave de tubo para as conexões de freio.',
  pre: 'Dá para tirar o cilindro-mestre do servo sem abrir as conexões, afastando-o com cuidado.',
  d: ['Solte as 2 porcas do cilindro-mestre e afaste-o sem dobrar os tubos.', 'Solte a mangueira de vácuo.', 'Sob o painel, tire o pino da haste no pedal e as 4 porcas do servo.', 'Tire o servo pelo cofre.'],
  m: ['Confira o comprimento da haste de saída do servo nova.', 'Monte servo, pino do pedal, cilindro-mestre e mangueira de vácuo com a válvula na direção certa.', 'Pedal firme e sem chiado com o motor ligado.']
});
M('cil_mestre', {
  f: 'Chave de tubo (chave de conexão), seringa, fluido DOT 4.',
  pre: 'Fluido de freio tira tinta: proteja a pintura com pano.',
  d: ['Tire o fluido do reservatório com a seringa.', 'Solte as conexões dos tubos com a chave de tubo.', 'Solte as 2 porcas e tire o cilindro.'],
  m: ['Cilindro novo sangrado na bancada.', 'Monte, aperte as conexões sem espanar, abasteça e ' + SANGRIA.charAt(0).toLowerCase() + SANGRIA.slice(1), PEDAL]
});
M('reserv_freio', {
  f: 'Seringa.',
  d: ['Esvazie com a seringa e desligue o sensor de nível.', 'Puxe o reservatório das borrachas do cilindro-mestre.'],
  m: ['Borrachas novas, reservatório encaixado até o fim, abasteça e sangre se entrou ar.']
});
M('tubos_freio', {
  f: 'Chave de tubo, pinça para mangueira de freio.',
  pre: ELEV,
  d: ['Pince o flexível antes do trecho, se der.', 'Solte as conexões com a chave de tubo.', 'Abra os clipes e tire o tubo ou o flexível.'],
  m: ['Tubo novo com as mesmas curvas e porcas, sem torcer o flexível com a roda esterçada.', SANGRIA]
});
M('pincas', {
  f: 'Soquetes, pinça para mangueira, graxa para pinos-guia.',
  pre: RODA,
  d: ['Pince o flexível e solte-o da pinça (anel de cobre novo na volta).', 'Solte os pinos-guia e tire a pinça; depois os 2 parafusos do suporte.'],
  m: ['Pinos-guia limpos e lubrificados.', 'Suporte com aperto alto e guias com aperto médio.', SANGRIA, PEDAL]
});
M('pastilhas', {
  f: 'Soquetes, recolhedor de pistão (ou grampo), graxa para pinos-guia.',
  pre: RODA + ' Troque sempre os dois lados do eixo.',
  d: ['Solte o pino-guia de baixo e gire a pinça para cima (ou tire as duas guias).', 'Tire as pastilhas velhas.', 'Recolha o pistão devagar, de olho no reservatório para não transbordar.'],
  m: ['Pastilhas novas com as molas e o antirruído.', 'Pinos limpos e lubrificados, guia com aperto médio.', PEDAL, 'Assente as pastilhas com freadas suaves nos primeiros 200 km.']
});
M('discos', {
  f: 'Soquetes, martelo de borracha, micrômetro.',
  pre: RODA,
  d: ['Tire a pinça sem pendurar pelo flexível (amarre com arame).', 'Tire o suporte da pinça.', 'Solte os 2 parafusos de posição e puxe o disco (bata de leve se estiver preso pela ferrugem).'],
  m: ['Cubo limpo para o disco assentar reto.', 'Disco novo desengraxado, parafusos de posição, suporte, pinça e pastilhas novas.', PEDAL]
});
M('tambores', {
  f: 'Soquetes, extrator, chave de fenda para recuar a regulagem.',
  pre: RODA + ' Freio de mão solto.',
  d: ['Tire a tampa e veja como o tambor é preso: em muitos 206 ele traz o rolamento e sai soltando a porca central do cubo; em outros, só os parafusos de posição.', 'Se o tambor prender nas sapatas, recue a regulagem automática pelo furo.', 'Puxe o tambor reto.'],
  m: ['Tambor dentro da medida gravada.', 'Porca do cubo nova com o aperto do manual, quando houver.', 'Pise várias vezes no freio para a regulagem automática encostar as sapatas e regule o freio de mão.']
});
M('sapatas', {
  f: 'Alicate de molas de freio, chave de fenda, foto do conjunto antes de desmontar.',
  pre: 'Com o tambor fora. Fotografe a posição das molas.',
  d: ['Tire as molas de retorno e os pinos de fixação.', 'Desengate o cabo do freio de mão e tire as sapatas com o regulador.', 'Para o cilindro de roda: solte o tubo e os 2 parafusos.'],
  m: ['Sapatas novas na mesma posição, regulador lubrificado.', 'Cilindro novo se houver umidade e sangria do freio.', 'Tambor, pedal várias vezes e regulagem do freio de mão.']
});
M('freio_mao', {
  f: 'Soquetes, espátula plástica.',
  d: ['Tire o console para chegar à porca de regulagem.', 'Afrouxe a regulagem e desencaixe os cabos.', 'Para trocar um cabo: solte-o da sapata, dos suportes e da alavanca.'],
  m: ['Regule para segurar o carro com 4 a 7 cliques e as rodas girando livres com a alavanca baixada.']
});
M('mang_vacuo', {
  d: ['Puxe a mangueira do coletor e da válvula do servo.'],
  m: ['Válvula de retenção com a seta para o coletor. Mangueira sem rachaduras.']
});

/* ---------- SUSPENSÃO E RODAS ---------- */
M('amort_diant', {
  f: 'Compressor de molas, soquetes, chave para segurar a haste, torquímetro.',
  pre: RODA + ' Mola comprimida guarda muita energia: só desmonte com compressor próprio.',
  d: ['Solte a bieleta da barra estabilizadora e o flexível de freio do suporte.', 'Solte os 2 parafusos da manga.', 'No cofre, solte as 3 porcas do topo, segurando o amortecedor por baixo.', 'Tire o conjunto e desmonte com o compressor.'],
  m: ['Monte amortecedor, mola e coxim com o compressor, porca da haste nova.', 'Instale no carro, porcas do topo e parafusos da manga com o aperto do manual.', 'Troque sempre em par. ' + ALINHA]
});
M('molas_diant', {
  f: 'Compressor de molas.',
  pre: 'A mola sai com o amortecedor.',
  d: ['Tire o conjunto do amortecedor.', 'Comprima a mola, solte a porca da haste e tire coxim e mola.'],
  m: ['Mola com a ponta assentada no batente do prato.', 'Troque em par. ' + ALINHA]
});
M('coxins_amort', {
  f: 'Compressor de molas.',
  d: ['Tire o conjunto do amortecedor.', 'Comprima a mola e solte a porca da haste; tire o coxim e o rolamento.'],
  m: ['Coxim e rolamento novos na posição certa, porca da haste no torque.', ALINHA]
});
M('bandejas', {
  f: 'Soquetes, extrator de pivô, torquímetro.',
  pre: RODA,
  d: ['Solte o parafuso-trava do pivô na manga e separe o pivô.', 'Solte os parafusos das buchas no agregado.', 'Tire a bandeja.'],
  m: ['Encoste os parafusos das buchas e só dê o aperto final com o peso do carro sobre as rodas.', 'Prefira peça original: aqui as paralelas duram pouco. ' + ALINHA]
});
M('barra_estab', {
  f: 'Soquetes, chave para segurar o pino da bieleta.',
  pre: ELEV,
  d: ['Solte as porcas das bieletas, segurando o pino.', 'Solte as braçadeiras das buchas no agregado e tire a barra.'],
  m: ['Buchas novas, aperte as braçadeiras e as bieletas com o carro no chão.']
});
M('agregado', {
  f: 'Macacos de transmissão, apoio de motor, soquetes, torquímetro.',
  pre: 'Apoie motor e câmbio antes de soltar qualquer parafuso. Marque a posição do agregado na carroceria.',
  d: ['Solte bandejas, barra estabilizadora, coxim inferior e a caixa de direção do agregado.', 'Com o agregado apoiado, solte os 4 parafusos e baixe-o.'],
  m: ['Agregado nas marcas, parafusos com o aperto muito alto do manual.', 'Remonte tudo e faça alinhamento.']
});
M('mangas', {
  f: 'Soquete da porca do cubo, extratores de pivô e de terminal, prensa para o rolamento.',
  pre: 'Solte a porca do cubo com o carro no chão. ' + RODA,
  d: ['Tire pinça (pendurada), disco e porca do cubo.', 'Solte o terminal de direção com extrator e o pivô da bandeja.', 'Solte os parafusos do amortecedor e tire a manga, soltando o semieixo.', 'O rolamento troca na prensa.'],
  m: ['Rolamento novo prensado pela pista certa.', 'Monte manga, terminal, pivô, freios e porca do cubo nova no torque.', ALINHA]
});
M('eixo_tras', {
  f: 'Macacos, soquetes, chave de tubo.',
  pre: ELEV + ' Marque a posição dos suportes.',
  d: ['Desligue os tubos de freio e os cabos do freio de mão.', 'Apoie o eixo, solte os amortecedores e os 4 parafusos dos suportes.', 'Baixe o eixo.'],
  m: ['Suportes nas marcas, aperto do manual.', 'Freios ligados, sangria e regulagem do freio de mão.']
});
M('barras_torcao', {
  f: 'Extrator de barra de torção e gabarito de altura (ferramentas específicas).',
  pre: 'Serviço de oficina especializada: a altura da traseira é regulada pela posição das barras.',
  d: ['Com o eixo apoiado e a roda fora, tire o amortecedor.', 'Com o extrator, puxe a barra pelo estriado.'],
  m: ['Instale a barra com o braço na posição do gabarito para dar a altura certa.', 'Confira a altura dos dois lados.']
});
M('rol_eixo', {
  f: 'Kit de reparo do eixo, prensa, extrator de barras.',
  pre: 'Reparo clássico do 206, feito com kit específico em oficina especializada.',
  d: ['Tire o eixo ou trabalhe com ele apoiado.', 'Tire as barras de torção e separe o braço da travessa.', 'Extraia os rolamentos de agulha e a pista do eixo.'],
  m: ['Pista e rolamentos novos do kit, com graxa, retentores novos.', 'Monte o braço, as barras na altura certa e confira a cambagem das rodas.']
});
M('amort_tras', {
  f: 'Soquetes, macaco.',
  pre: RODA + ' Apoie o braço com o macaco.',
  d: ['Solte o parafuso de baixo e o de cima.', 'Tire o amortecedor.'],
  m: ['Troque em par e dê o aperto final com o peso do carro sobre as rodas.']
});
M('pneus', {
  f: 'Máquina de montar pneus e balanceadora (borracharia).',
  d: ['Tire a roda do carro.', 'Esvazie, desencaixe os talões e tire o pneu na máquina.'],
  m: ['Pneu 175/65 R14 com o sentido de giro certo, válvula nova.', 'Balanceie e calibre com os pneus frios pela etiqueta da porta.']
});
M('rodas', {
  f: 'Chave de roda, macaco, torquímetro.',
  pre: 'Carro no plano, freio de mão puxado, marcha engatada.',
  d: ['Tire a calota.', 'Afrouxe os 4 parafusos com o carro no chão.', 'Levante pelo ponto do macaco na soleira, perto da roda.', 'Tire os parafusos e a roda.'],
  m: ['Encoste os parafusos à mão e aperte em cruz.', 'Desça o carro e dê o aperto final com torquímetro (≈ 90–100 N·m); reaperte depois de uns 50 km.']
});
M('calotas', {
  d: ['Puxe a calota pelas bordas, com as mãos ou uma espátula plástica.'],
  m: ['Alinhe o recorte com a válvula e pressione em volta até travar.']
});
M('estepe', {
  f: 'Chave de roda.',
  d: ['No porta-malas, solte o parafuso do cesto.', 'Por baixo, desça o cesto e solte o gancho de segurança.', 'Tire o estepe.'],
  m: ['Estepe no cesto, suba e aperte o parafuso à mão; lubrifique a rosca.']
});
M('macaco', {
  d: ['Solte o macaco e a chave do suporte no porta-malas.'],
  m: ['Feche o macaco até prender no suporte, sem folga para não chacoalhar.']
});

/* ---------- DIREÇÃO ---------- */
M('volante_dir', {
  f: 'Soquete, extrator de volante se estiver preso.',
  pre: 'Rodas retas. Sem airbag, não há cuidado com bolsa.',
  d: ['Tire a tampa central (botão da buzina).', 'Marque o volante no eixo.', 'Solte o parafuso central e puxe o volante.'],
  m: ['Volante nas marcas, rodas retas, parafuso no torque.', 'Teste buzina e o retorno da seta.']
});
M('coluna', {
  f: 'Soquetes, Torx, chave de fenda.',
  pre: BAT + ' Rodas retas.',
  d: ['Tire volante, capas, chaves de seta e o comutador de ignição.', 'Marque e solte o parafuso da junta da coluna no pinhão da caixa.', 'Solte as fixações sob o painel e tire a coluna.'],
  m: ['Junta nas marcas, parafusos firmes.', 'Confira se o volante fica reto andando.']
});
M('caixa_dir', {
  f: 'Extrator de terminal, soquetes, torquímetro.',
  pre: RODA + ' Rodas retas e volante travado.',
  d: ['Solte os terminais das mangas com o extrator.', 'Marque e solte a junta da coluna.', 'Solte as braçadeiras da caixa no agregado e tire a caixa pelo lado.'],
  m: ['Caixa centrada, braçadeiras no torque, junta nas marcas.', 'Coifas boas. Alinhamento obrigatório.']
});
M('barras_axiais', {
  f: 'Extrator de terminal, chave da barra axial, alicate de abraçadeira.',
  pre: RODA,
  d: ['Afrouxe a contraporca do terminal e conte as voltas ao tirar o terminal.', 'Solte o terminal da manga com o extrator.', 'Corte as abraçadeiras da coifa e solte a barra axial da cremalheira.'],
  m: ['Axial nova no torque, coifa com abraçadeiras novas.', 'Terminal com o mesmo número de voltas e contraporca firme.', 'Alinhamento obrigatório.']
});

/* ---------- INTERIOR ---------- */
M('painel', {
  f: 'Chaves de fenda e Torx, espátulas plásticas, caixinhas para os parafusos.',
  pre: BAT + ' Serviço longo; fotografe cada passo.',
  d: ['Tire volante, capas da coluna, quadro de instrumentos, rádio, porta-luvas e console.', 'Tire os acabamentos das colunas dianteiras e as tampas laterais.', 'Desligue os conectores e o BSI, solte os parafusos do painel e da travessa.', 'Puxe o painel pela porta com ajuda de alguém.'],
  m: ['Passe chicotes e dutos sem prender.', 'Parafusos e presilhas no lugar (presilha faltando vira barulho).', 'Teste luzes, painel, ventilação e buzina antes de fechar tudo.']
});
M('quadro', {
  f: 'Chave Torx, espátula plástica.',
  pre: BAT,
  d: ['Abaixe o volante (se tiver regulagem) e tire a moldura do quadro.', 'Solte os parafusos do quadro.', 'Puxe e desligue o conector.'],
  m: ['Conector travado, parafusos, moldura. Confira os ponteiros ao ligar a chave.']
});
M('radio', {
  f: 'Chaves de extração do rádio (padrão DIN).',
  d: ['Encaixe as chaves nas fendas laterais até destravar.', 'Puxe o rádio e desligue antena e conectores.'],
  m: ['Conectores e antena, empurre até travar. Tenha o código do rádio, se ele pedir.']
});
M('comandos_vent', {
  f: 'Espátula plástica, chaves de fenda.',
  d: ['Tire o rádio e a moldura central.', 'Solte os parafusos do painel de comandos.', 'Desencaixe os cabos das portinholas (anote cada um) e o conector do ventilador.'],
  m: ['Cada cabo no seu comando, com a capa presa na presilha; teste todas as posições.']
});
M('vent_interno', {
  f: 'Chaves de fenda e Torx.',
  pre: BAT,
  d: ['Tire o porta-luvas.', 'Desligue o conector.', 'Solte os parafusos (ou gire a trava) e baixe o ventilador.'],
  m: ['Encaixe sem tocar a hélice, aperte, ligue o conector e teste as velocidades.']
});
M('caixa_ar', {
  f: 'As do painel.',
  pre: 'A caixa de ar só sai com o painel fora. Drene o líquido de arrefecimento antes (o radiador do aquecedor está nela).',
  d: ['Tire o painel.', 'Solte as mangueiras do aquecedor no corta-fogo e o dreno.', 'Solte as porcas da caixa no corta-fogo e tire.'],
  m: ['Vedações novas no corta-fogo e no dreno.', 'Painel, mangueiras e sangria do arrefecimento.']
});
M('bancos_diant', {
  f: 'Soquete ou Torx, torquímetro.',
  d: ['Corra o banco para trás e solte os 2 parafusos da frente.', 'Corra para a frente e solte os 2 de trás.', 'Tire o banco pela porta.'],
  m: ['Parafusos no torque do manual: é item de segurança.', 'Teste o trilho e o basculante.']
});
M('banco_tras', {
  f: 'Soquetes.',
  d: ['Levante o assento (sai pelas presilhas ou dobradiças).', 'Rebata o encosto e solte as dobradiças ou os pinos.'],
  m: ['Encosto travando dos dois lados, assento encaixado nas presilhas.']
});
M('cintos', {
  f: 'Torx, espátula plástica.',
  d: ['Tire o acabamento da coluna.', 'Solte a ancoragem de cima, a de baixo e o retrator.', 'Para a fivela, solte o parafuso no banco ou no assoalho.'],
  m: ['Ancoragens no torque do manual, com as arruelas originais. Puxe forte o cinto: tem de travar.']
});
M('forros_portas', {
  f: 'Espátula plástica larga, chave de fenda.',
  d: ['Abra a porta e tire os parafusos do puxador e o acabamento da maçaneta interna.', 'Solte as presilhas em volta com a espátula, rente a cada presilha.', 'Levante o forro para soltar da borda do vidro e tire.'],
  m: ['Plástico de vedação colado de volta (é ele que impede água na porta).', 'Presilhas novas no lugar das quebradas, forro encaixado de cima para baixo.']
});
M('porta_malas', {
  f: 'Espátula plástica.',
  d: ['Tire o tapete.', 'Solte as presilhas dos acabamentos laterais e do traseiro.'],
  m: ['Acabamentos encaixados; confira a vedação das lanternas antes de fechar.']
});
M('retrovisor_int', {
  d: ['Gire ou deslize o espelho para soltar da base colada no vidro.'],
  m: ['Encaixe na base até travar. Base solta se cola com adesivo próprio para retrovisor.']
});
M('alto_falantes', {
  f: 'Chave de fenda.',
  d: ['Tire o forro da porta.', 'Solte os parafusos do alto-falante e desligue o conector.'],
  m: ['Encaixe com a borracha e teste o som.']
});

/* ---------- CARROCERIA: estrutura soldada ---------- */
M('monobloco', {
  pre: FUNIL,
  d: ['Não se desmonta. Para reparar, a funilaria desmonta as peças parafusadas em volta, mede a estrutura no gabarito e corrige ou troca trechos.'],
  m: ['Trechos novos soldados a ponto ou MIG, com massa de vedação nas emendas e proteção anticorrosiva por dentro.']
});
M('corta_fogo', {
  pre: FUNIL,
  d: ['Faz parte da estrutura: só se repara com o cofre e o painel desmontados.', 'As borrachas de passagem saem puxando.'],
  m: ['Borrachas de passagem novas e bem assentadas para não entrar água nem ruído.']
});
M('soleiras', {
  f: 'Furadeira de ponto de solda, solda MIG.',
  pre: FUNIL,
  d: ['A soleira é soldada na aba de baixo e na borda da porta.', 'Na funilaria, cada ponto de solda é furado.', 'A soleira sai e a nova é soldada no lugar.'],
  m: ['Solda, massa nas emendas e proteção por dentro da caixa (cera anticorrosiva).', 'Drenos abertos.']
});
M('colunas', {
  pre: FUNIL,
  d: ['Coluna amassada se corta e se troca em trechos, com o para-brisa, as portas e os acabamentos fora.'],
  m: ['Solda, medidas da abertura da porta e do para-brisa conferidas antes de colar o vidro.']
});
M('teto', {
  f: 'Furadeira de ponto de solda, solda.',
  pre: FUNIL + ' Tire para-brisa, vidro traseiro e forro do teto antes.',
  d: ['O teto é soldado na estrutura: não sai com ferramenta de mão.', 'Na funilaria, cada ponto de solda é furado.', 'O teto sai e o novo é soldado e selado no lugar.'],
  m: ['Massa de vedação nas emendas, pintura, vidros colados de novo.']
});
M('laterais', {
  pre: FUNIL,
  d: ['A lateral é soldada na coluna, na soleira, na caixa de roda, no painel traseiro e junto ao teto.', 'Na funilaria, os pontos são furados ou cortados.', 'A lateral sai e a nova é soldada, com massa de vedação nas emendas.'],
  m: ['Vidro lateral colado de novo, lanterna com vedação nova, pintura.']
});
M('painel_tras', {
  pre: FUNIL,
  d: ['Tire para-choque, lanternas e acabamentos do porta-malas.', 'Fure os pontos nas laterais e no assoalho e tire o painel.'],
  m: ['Solde, vede, pinte e confira o alinhamento da tampa e do batente.']
});
M('travessa_frontal', {
  f: 'Soquetes, apoio para o radiador.',
  pre: 'Apoie radiador e faróis antes de soltar.',
  d: ['Tire para-choque, grade e faróis.', 'Solte a fechadura do capô e o suporte do radiador.', 'Solte os parafusos das pontas da travessa.'],
  m: ['Travessa nos furos, fechadura do capô alinhada, radiador e faróis presos.', 'Regule o facho dos faróis.']
});
M('viga_dianteira', {
  f: 'Soquetes.',
  d: ['Tire o para-choque dianteiro.', 'Solte os 4 parafusos nas pontas das longarinas.'],
  m: ['Viga nova ou conferida, parafusos com o aperto alto do manual.']
});

/* ---------- CARROCERIA: peças parafusadas ---------- */
M('capo', {
  f: 'Soquete 10 mm, fita crepe ou caneta para marcar.',
  pre: 'Peça ajuda: o capô é leve, mas desajeitado.',
  d: ['Abra o capô e apoie na vareta.', 'Risque o contorno das dobradiças: é o que acerta as frestas na volta.', 'Com alguém segurando, solte os 2 parafusos de cada dobradiça no capô.', 'Tire o capô levantando pela frente.'],
  m: ['Parafusos nas marcas, frestas iguais dos dois lados.', 'Regule os batentes de borracha para a altura e a fechadura para fechar sem bater forte.']
});
M('paralamas', {
  f: 'Soquetes, espátula, chave de fenda.',
  d: ['Abra o capô e a porta do lado do para-lama.', 'Tire o para-choque dianteiro e o farol.', 'Solte as presilhas e tire o forro da caixa de roda (com a roda tirada fica mais fácil).',
    'Tire os 4 parafusos da borda de cima, o da frente junto ao farol, o de trás na coluna e o de baixo na soleira.', 'Corte a massa de vedação das emendas e puxe o para-lama para fora.'],
  m: ['Massa de vedação nova nas emendas.', 'Encoste todos os parafusos, alinhe frestas com o capô e a porta e só então aperte.', 'Repetidor lateral, forro, farol (regule o facho) e para-choque.']
});
M('portas', {
  f: 'Soquetes, macaco com pano.',
  pre: 'A porta é pesada: apoie embaixo e peça ajuda.',
  d: ['Abra a porta e apoie a ponta de baixo.', 'Desligue o conector, se houver fiação, e solte o limitador (1 parafuso na coluna).', 'Marque a posição e solte os 4 parafusos das dobradiças na coluna.', 'Tire a porta com as dobradiças.'],
  m: ['Dobradiças nas marcas, encoste os parafusos e alinhe a fresta.', 'Aperte, monte o limitador e regule o batente para fechar sem bater forte.']
});
M('dobradicas', {
  f: 'Soquetes.',
  pre: 'Apoie a porta antes de soltar.',
  d: ['Solte o limitador.', 'Marque e solte os parafusos das dobradiças na porta ou na coluna.'],
  m: ['Dobradiças nas marcas, frestas conferidas, graxa nos pinos.']
});
M('fech_portas', {
  f: 'Torx, chave de fenda.',
  d: ['Tire o forro e o plástico da porta.', 'Desencaixe as varetas da maçaneta e do cilindro.', 'Solte os 3 parafusos Torx na borda da porta e tire a fechadura.', 'O batente sai com os 2 parafusos da coluna (marque a posição).'],
  m: ['Varetas com as presilhas, fechadura testada com a porta aberta antes de fechar.', 'Batente regulado para fechar com uma batida leve.']
});
M('retrovisores', {
  f: 'Soquete ou Torx, espátula plástica.',
  d: ['Abra a porta e tire o acabamento triangular por dentro.', 'Segure o espelho por fora e solte os 3 parafusos.', 'Desligue o conector, se houver, e tire o espelho.'],
  m: ['Vedação no lugar, parafusos firmes, acabamento encaixado.']
});
M('tampa_tras', {
  f: 'Soquetes, chave de fenda pequena, espátula plástica.',
  pre: 'Peça ajuda para segurar a tampa.',
  d: ['Abra a tampa.', 'Tire o acabamento interno e desligue os conectores da luz de freio, das luzes da placa, do limpador e do desembaçador.', 'Solte os amortecedores: levante a trava de mola e puxe cada um do pino.', 'Solte as porcas das dobradiças no teto, por baixo do forro, e tire a tampa.'],
  m: ['Dobradiças nas marcas, frestas e batentes regulados.', 'Amortecedores encaixados até travar, conectores e teste das luzes.']
});
M('dobr_capo', {
  f: 'Soquete 10 mm.',
  pre: 'Apoie o capô.',
  d: ['Marque a posição.', 'Solte os parafusos no capô e na carroceria.'],
  m: ['Nas marcas, frestas conferidas, graxa no pino.']
});
M('dobr_tampa', {
  f: 'Soquetes.',
  pre: 'Tire os amortecedores e apoie a tampa.',
  d: ['Tire o acabamento do teto atrás para chegar às porcas.', 'Solte porcas e parafusos.'],
  m: ['Vedação das dobradiças com o teto boa (infiltração aqui enferruja).', 'Frestas conferidas.']
});
M('fech_tampa', {
  f: 'Soquetes, chave de fenda.',
  d: ['Tire o acabamento da tampa, desligue a vareta ou o conector.', 'Solte os 2 parafusos da fechadura; o batente sai pelos 2 parafusos do painel traseiro.'],
  m: ['Regule o batente para a tampa fechar de primeira, sem bater.']
});
M('fech_capo', {
  f: 'Soquetes.',
  d: ['Marque a posição da fechadura na travessa.', 'Solte os 2 parafusos e desencaixe o cabo.', 'Para trocar o cabo, solte-o da alavanca na cabine e puxe pelo corta-fogo.'],
  m: ['Cabo esticado sem folga, fechadura nas marcas, teste a abertura pela alavanca e a trava de segurança.']
});
M('amort_tampa', {
  f: 'Chave de fenda pequena.',
  pre: 'Segure a tampa aberta com um apoio.',
  d: ['Levante a trava de mola com a chave de fenda.', 'Puxe o amortecedor do pino esférico, uma ponta de cada vez.'],
  m: ['Amortecedor novo com o corpo para cima, encaixe até a trava estalar.']
});
M('maq_vidro', {
  f: 'Soquetes ou furadeira (se for rebitada), rebitadeira.',
  d: ['Tire o forro da porta.', 'Desça o vidro até aparecerem os grampos e solte o vidro da máquina.', 'Solte os 4 parafusos ou fure os rebites da máquina.', 'Tire a máquina pela abertura do painel interno.'],
  m: ['Máquina presa, vidro nos grampos, teste o curso inteiro antes de pôr o forro.']
});

/* ---------- CARROCERIA: vidros ---------- */
M('para_brisa', {
  f: 'Fio de corte ou faca de vidro, ventosas, poliuretano e primer (empresa especializada).',
  d: ['O para-brisa não tem parafuso: é colado num cordão de poliuretano em volta.', 'Tire os braços do limpador e a grade do torpedo.', 'O instalador corta o cordão com fio ou faca própria.', 'Tira o vidro com ventosas.'],
  m: ['Cordão novo com primer, vidro centrado.', 'Respeite o tempo de cura antes de rodar ou bater as portas com força.']
});
M('vidro_tras', {
  f: 'Fio de corte, ventosas, poliuretano.',
  d: ['O vidro traseiro é colado na tampa com um cordão de poliuretano.', 'Com o limpador e os conectores do desembaçador soltos, o cordão é cortado.', 'O vidro sai com ventosas.'],
  m: ['Cordão novo, conectores do desembaçador, cura antes de bater a tampa.']
});
M('vidros_laterais', {
  f: 'Fio de corte, ventosas, poliuretano.',
  d: ['O vidro lateral de trás é fixo, colado na lateral com poliuretano.', 'O cordão é cortado por dentro.', 'O vidro sai para fora.'],
  m: ['Cordão novo e acabamento de borracha em volta.']
});
M('vidros_portas', {
  f: 'Soquetes.',
  d: ['Abra a porta e tire o forro.', 'Desça o vidro até aparecerem os 2 grampos da máquina e solte-os.', 'Tire o vidro por cima, inclinando.'],
  m: ['Vidro nas canaletas, grampos firmes, teste subida e descida antes do forro.']
});

/* ---------- CARROCERIA: plásticos, acabamentos e vedações ---------- */
M('para_choque_d', {
  f: 'Soquetes, chave de fenda, espátula plástica.',
  d: ['Abra o capô.', 'Solte os 4 parafusos de cima, na travessa sob o capô.', 'Solte os parafusos das caixas de roda, dos dois lados, e os de baixo.', 'Puxe as pontas para fora das guias laterais, com cuidado para não quebrá-las.', 'Tire o para-choque para a frente, desligando a placa e o que houver de conector.'],
  m: ['Encaixe as pontas nas guias primeiro, depois encoste e aperte os parafusos de cima, das caixas de roda e de baixo.', 'Confira as frestas com o capô e os para-lamas.']
});
M('para_choque_t', {
  f: 'Soquetes, chave de fenda.',
  d: ['Abra a tampa e tire o acabamento do porta-malas.', 'Solte os 4 parafusos de cima, por dentro.', 'Solte os das caixas de roda e os de baixo.', 'Puxe as pontas para fora das guias e tire o para-choque, desligando a luz de neblina.'],
  m: ['Pontas nas guias, parafusos, conector da luz de neblina e teste.']
});
M('grade', {
  d: ['Abra o capô.', 'Solte as 4 presilhas por trás da grade.', 'Tire a grade para a frente.'],
  m: ['Encaixe as presilhas até estalar (troque as quebradas).']
});
M('grade_inf', {
  d: ['Com o para-choque fora, solte as presilhas da grade por trás.'],
  m: ['Encaixe até travar todas as presilhas.']
});
M('grade_torpedo', {
  f: 'Soquete para os braços do limpador, espátula plástica.',
  d: ['Abra o capô.', 'Marque a posição de repouso e solte as porcas dos braços do limpador.', 'Solte as 6 presilhas.', 'Puxe a grade para cima e para a frente, soltando da borda do para-brisa.'],
  m: ['Limpe os drenos da caixa de ar antes de fechar.', 'Encaixe sob a borda do vidro, presilhas, braços nas marcas.']
});
M('caixas_roda', {
  f: 'Chave de fenda, alicate de presilha.',
  d: ['Tire a roda para trabalhar melhor.', 'Solte as presilhas na borda do para-lama e os parafusos da caixa interna.', 'Puxe o forro.'],
  m: ['Presilhas novas no lugar das quebradas; lave a caixa antes de fechar.']
});
M('borrachas', {
  d: ['Puxe a borracha da aba começando por uma ponta, sem esticar.'],
  m: ['Encaixe começando pelo ponto de emenda e bata com a mão (ou martelo de borracha) em toda a volta.', 'Protetor à base de silicone a cada poucos meses.']
});
M('frisos', {
  f: 'Soprador térmico, fio de nylon, álcool isopropílico, fita dupla-face automotiva.',
  d: ['Aqueça o friso com o soprador para amolecer a fita.', 'Passe o fio de nylon por trás para cortar a fita.', 'Tire os restos com removedor sem riscar a pintura.'],
  m: ['Limpe com álcool isopropílico, fita nova, pressione bem.', 'Evite lavar nas primeiras 24 horas.']
});
