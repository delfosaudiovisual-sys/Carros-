/* ===== Honda Civic LX 1.7 2005: código e como desmontar e montar cada peça (motor, admissão, combustível, ignição, arrefecimento, ar-condicionado e escape) =====
   Cada entrada: oem = código Honda (só os confirmados em catálogo), alt = equivalentes, f = ferramentas, pre = antes de começar, d = desmontar, m = montar. */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['civic-g7'] = window.CAR_PROC['civic-g7'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Anote o código do rádio e desligue o negativo da bateria.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const AGUA = 'Motor frio. Drene o líquido pelo bujão do radiador (embaixo, à esquerda) num recipiente limpo.';
const SANGRA = 'Encha pelo radiador com o aquecedor no máximo, abra o parafuso de sangria da carcaça da válvula termostática até sair líquido sem bolhas e feche. Ligue o motor e deixe a ventoinha ligar duas vezes; com o motor frio, complete o radiador e o reservatório até MAX.';
const ALIVIA = 'Alivie a pressão de combustível: tire o fusível da bomba na caixa do painel, ligue o motor e deixe apagar sozinho; dê mais uma partida de 3 segundos.';
const PONTO = 'Ponto do motor (cilindro 1 em compressão): marca branca da polia do virabrequim no ponteiro da capa, palavra UP da polia do comando para cima e as ranhuras da polia alinhadas com a face do cabeçote.';
const GAS = 'Circuito do ar-condicionado aberto: o gás R-134a precisa ser recolhido com máquina antes, e no fim o circuito leva vácuo e carga pelo peso indicado na etiqueta do capô. Anéis de vedação novos, untados com o óleo do compressor.';

/* ---------- MOTOR ---------- */
M('bloco', {
  f: 'Guincho de motor, macaco de transmissão, soquetes, torquímetro.',
  pre: 'O bloco só sai com o motor fora do carro; na prática é serviço de retífica. ' + BAT,
  d: ['Drene óleo, líquido de arrefecimento e o óleo do câmbio. Recolha o gás do ar-condicionado se for soltar o compressor das linhas (ou solte o compressor do suporte e amarre de lado, sem abrir o circuito).',
    'Tire o capô, a caixa do filtro, a bateria e a bandeja.', 'Solte chicote, mangueiras de água e de vácuo, a linha de combustível (alivie a pressão antes), o cabo do acelerador, os cabos de engate e o tubo da embreagem.',
    'Afaste a bomba da direção com as mangueiras ligadas, solte o escape do coletor e tire os semieixos.', 'Apoie o conjunto por baixo, solte os quatro coxins e baixe o motor com o câmbio (ou levante a carroceria).',
    'Na bancada, separe o câmbio e desmonte até sobrar o bloco.'],
  m: ['Bloco limpo e conferido (planicidade, cilindros, galerias desobstruídas) antes de montar qualquer peça.', 'Monte virabrequim, pistões e cabeçote com os apertos do manual.',
    'Reinstale pelos coxins e aperte com o motor em repouso.', 'Abasteça óleo, água (com sangria) e câmbio; confira vazamentos e falhas no scanner.']
});
M('cabecote', {
  f: 'Soquetes, torquímetro e goniômetro (transferidor de ângulo), suporte da polia do virabrequim, juntas novas.',
  pre: AGUA + ' ' + BAT,
  d: ['Tire a tampa de válvulas, as bobinas e a correia de acessórios.', 'Apoie o motor por baixo, tire o coxim direito e a correia dentada com o motor no ponto. ' + PONTO,
    'Desligue chicotes, sensores, mangueiras de água e de vácuo, a linha de combustível (alivie a pressão) e o cabo do acelerador.', 'Solte o coletor de escape do cabeçote (ou o tubo dianteiro do catalisador) e a bomba da direção do suporte.',
    'Afrouxe os 10 parafusos do cabeçote na ordem inversa do aperto, de fora para dentro, um terço de volta por vez.', 'Levante o cabeçote reto, com o coletor de admissão junto se preferir.'],
  m: ['Limpe as faces sem lixa nem raspador de aço. Confira planicidade do cabeçote e do bloco.', 'Junta nova seca, centrada nos pinos-guia. Parafusos com óleo na rosca e sob a cabeça.',
    'Aperte em espiral de dentro para fora, em três etapas: torque inicial, depois 90° e mais 90° (valores do manual Honda).', 'Instale a correia no ponto, gire o motor à mão duas voltas e confira as marcas.',
    'Regule a folga de válvulas a frio, monte a tampa de válvulas e faça a sangria do arrefecimento.']
});
M('junta_cab', {
  oem: '12251-PLC-004',
  f: 'As mesmas do cabeçote.',
  pre: 'A junta só se troca tirando o cabeçote. Confirme o defeito antes: teste de CO2 no radiador ou teste de vazamento de cilindro.',
  d: ['Siga a desmontagem do cabeçote até ele sair.', 'Tire a junta velha e limpe resíduos das faces e dos furos dos parafusos (óleo ou água no fundo do furo falseia o aperto).', 'Mande conferir a planicidade do cabeçote; se empenou, ele precisa ser plainado.'],
  m: ['Junta nova do mesmo tipo, centrada nos pinos-guia, sem cola.', 'Aperto do cabeçote em espiral nas três etapas.', 'Complete e sangre o arrefecimento e troque o óleo se estava contaminado.']
});
M('tampa_valv', {
  oem: [['Junta da tampa', '12341-PLC-000']],
  f: 'Soquete 10 mm, torquímetro de baixa escala, silicone para os cantos.',
  pre: 'Motor frio.',
  d: ['Desligue os conectores e tire as 4 bobinas.', 'Desencaixe o chicote e a mangueira do respiro da tampa.', 'Solte as porcas com arruelas de borracha, de fora para dentro.', 'Levante a tampa reta.'],
  m: ['Junta nova e vedações novas dos poços das velas; uma gota de silicone nos cantos onde a junta encontra a meia-lua da ponta do cabeçote.', 'Arruelas de borracha boas, porcas em cruz a cerca de 10 N·m.', 'Bobinas e conectores. Ligue e procure vazamento com o motor quente.']
});
M('comando', {
  f: 'Suporte da polia do comando, soquetes, extrator de retentor, torquímetro.',
  pre: 'Exige tirar a correia dentada: aproveite para trocar correia, tensor, bomba d’água e o retentor do comando.',
  d: ['Tire a tampa de válvulas e ponha o motor no ponto.', 'Tire a correia dentada e a polia do comando, segurando a polia.', 'Afrouxe os eixos de balancins por igual, em várias passadas, e tire o conjunto.', 'Tire o sensor de fase da ponta esquerda e puxe o comando com o retentor.'],
  m: ['Óleo de motor nos ressaltos e mancais, retentor novo.', 'Balancins por igual até o torque, polia com a chaveta (≈ 37 N·m).', 'Correia no ponto e folga de válvulas regulada.']
});
M('balancins', {
  f: 'Calibre de lâminas, chave estrela para a contraporca, chave de fenda para o parafuso de ajuste.',
  pre: 'Motor frio, pelo menos 4 horas parado (abaixo de 38 °C).',
  d: ['Tire a tampa de válvulas.', 'Para trocar os eixos: afrouxe as fixações por igual em várias passadas, porque as molas empurram.'],
  m: ['Regulagem, em ordem de ignição: com o cilindro 1 no ponto (' + PONTO.split(': ')[1] + '), regule as 4 válvulas do 1.',
    'Gire o virabrequim meia volta no sentido de trabalho (a polia do comando gira um quarto) e regule o 3; mais meia volta, o 4; mais meia volta, o 2.',
    'Folga: admissão 0,18 a 0,22 mm, escape 0,23 a 0,27 mm. A lâmina deve passar com leve arraste.', 'Segure o parafuso, aperte a contraporca (≈ 20 N·m) e confira de novo. Tampa com junta nova.']
});
M('valvulas', {
  f: 'Compressor de molas de válvula, alicate de retentor, pasta de esmerilhar.',
  pre: 'Serviço de bancada, com o cabeçote fora.',
  d: ['Tire o cabeçote, o comando e os eixos de balancins.', 'Comprima cada mola, tire as travas, o prato e a mola.', 'Tire o retentor e a válvula, guardando cada uma na ordem.'],
  m: ['Retentores novos; esmerilhe as sedes se for reaproveitar as válvulas.', 'Monte válvula, mola, prato e travas e dê uma batida leve para assentar.', 'Com o cabeçote no lugar, regule a folga.']
});
M('pistoes', {
  f: 'Cinta de anéis, torquímetro, calibre para a folga entre pontas.',
  pre: 'Motor aberto: cabeçote e cárter fora.',
  d: ['Tire o rebordo de carvão do alto do cilindro se houver degrau.', 'Marque cada capa de biela, solte as capas e empurre pistão e biela para cima.', 'Separe o pistão da biela tirando o pino.'],
  m: ['Anéis com as pontas desencontradas e folga entre pontas conferida.', 'Marca do pistão para o lado da correia.', 'Óleo no cilindro, cinta de anéis, empurre com o cabo do martelo. Capas no lugar com o aperto do manual.']
});
M('bielas', {
  f: 'Torquímetro, Plastigage.',
  pre: 'Com o cárter e a ponte de mancais acessíveis por baixo.',
  d: ['Marque biela e capa juntas.', 'Solte os 2 parafusos da capa e tire-a com a bronzina.', 'Empurre a biela para cima com o pistão.'],
  m: ['Bronzinas novas se houver marca; confira a folga com Plastigage.', 'Óleo nas bronzinas, capa na mesma biela e posição.', 'Aperto do manual (torque e ângulo) e gire o virabrequim para conferir que não prende.']
});
M('virabrequim', {
  f: 'Torquímetro, relógio comparador, retentores.',
  pre: 'Sai com o motor desmontado na bancada.',
  d: ['Tire volante, polia, engrenagem da correia, bomba de óleo e cárter.', 'Solte as bielas.', 'Solte os parafusos dos mancais em várias passadas, das pontas para o centro, e tire o virabrequim.'],
  m: ['Bronzinas e arruelas de encosto lubrificadas.', 'Mancais do centro para as pontas, em etapas.', 'Confira a folga axial e monte retentores novos nas duas pontas.']
});
M('carter', {
  oem: [['Arruela do bujão', '94109-14000']],
  f: 'Soquetes 10 e 17 mm, espátula plástica, cola de vedação para motor.',
  pre: ELEV + ' Motor frio.',
  d: ['Drene o óleo.', 'Solte o tubo dianteiro do escape se ele atrapalhar.', 'Solte os parafusos em volta, dos cantos para o meio.', 'Descole com espátula plástica, sem alavancar nas faces.'],
  m: ['Limpe e desengraxe as faces até sair toda a cola velha.', 'Cordão contínuo de cola contornando os furos e monte dentro do tempo indicado.', 'Aperte em cruz (≈ 12 N·m) e espere a cura antes de abastecer.', 'Bujão com arruela nova a 39 N·m.']
});
M('bomba_oleo', {
  f: 'Soquetes, torquímetro, retentor e anel novos, cola de vedação.',
  pre: 'A bomba fica atrás da correia dentada, na ponta do virabrequim: tire a correia e o cárter.',
  d: ['Tire a correia dentada e a engrenagem do virabrequim.', 'Tire o cárter e o pescador.', 'Solte os parafusos da bomba e tire-a do bloco.'],
  m: ['Limpe a tela do pescador; se tiver borra, limpe o cárter também.', 'Anel de vedação novo, cola na face indicada e retentor novo do virabrequim.', 'Aperte por igual, monte pescador, cárter e correia, e confira a pressão.']
});
M('filtro_oleo', {
  oem: '15400-PLM-A02',
  f: 'Chave de cinta ou copo de filtro, bandeja.',
  pre: ELEV + ' Junto com a troca de óleo.',
  d: ['Drene o óleo.', 'Por baixo, na frente do bloco, solte o filtro girando para a esquerda.', 'Limpe a sede e confira se o anel velho não ficou grudado.'],
  m: ['Óleo novo no anel de borracha do filtro novo.', 'Rosqueie à mão até encostar e dê mais ¾ de volta.', 'Abasteça, ligue e veja a luz de óleo apagar; confira vazamento e o nível na vareta.']
});
M('vareta', {
  d: ['Puxe a vareta pelo cabo.', 'O tubo é preso por um parafuso no suporte; solte e puxe para trocar.'],
  m: ['Anel de vedação novo no tubo; vareta encaixada até o fim.']
});
M('tampa_oleo', {
  d: ['Gire a tampa para a esquerda e tire.'],
  m: ['Troque a vedação se estiver dura; encaixe e gire até travar.']
});
M('volante_motor', {
  f: 'Trava do volante, soquetes, trava-química, torquímetro.',
  pre: 'Exige tirar o câmbio e a embreagem.',
  d: ['Tire o câmbio e o platô com o disco.', 'Trave o volante e marque a posição.', 'Solte os 6 parafusos em cruz e tire o volante.'],
  m: ['Parafusos novos com trava-química, na marca de posição, em cruz até o torque do manual.', 'Retífica da face se estiver vitrificada; confira a cremalheira.']
});
M('correia_dent', {
  oem: '14400-PMM-A02',
  alt: 'Kits com correia, tensor e bomba d’água para o Civic 1.7 2001–2005',
  f: 'Suporte da polia do virabrequim, soquete 19 mm com cabo de força, macaco com calço de madeira, torquímetro.',
  pre: BAT + ' Troque junto tensor, bomba d’água e os retentores do comando e do virabrequim. ' + ELEV,
  d: ['Tire a roda dianteira direita e o forro, e a correia de acessórios (alivie o tensor automático com uma chave).', 'Tire a tampa de válvulas: a capa superior só sai com ela fora.',
    'Gire o motor até o ponto. ' + PONTO, 'Apoie o motor por baixo com o calço e tire o coxim direito e o suporte.', 'Segure a polia com o suporte, solte o parafuso central e tire a polia e as capas.',
    'Afrouxe o parafuso do tensor, empurre o tensor para aliviar, aperte provisoriamente e tire a correia.'],
  m: ['Confira as marcas: engrenagem do virabrequim com a seta da bomba de óleo e polia do comando com UP para cima.', 'Passe a correia sem torcer, bem esticada do lado que puxa: virabrequim, tensor, bomba d’água e comando.',
    'Solte o parafuso do tensor para a mola esticar, gire o motor cinco a seis voltas no sentido de trabalho e aperte o tensor (≈ 44 N·m).', 'Confira as marcas de novo. Capas, polia com o parafuso no torque, coxim, tampa de válvulas, correia de acessórios e roda.']
});
M('tensor_dent', {
  f: 'As da correia dentada.',
  pre: 'Troca sempre junto com a correia.',
  d: ['Siga a desmontagem da correia dentada.', 'Tire o parafuso do tensor e a mola.'],
  m: ['Tensor novo com a mola encaixada, parafuso solto até a correia estar no lugar.', 'Aperto final (≈ 44 N·m) depois de girar o motor cinco a seis voltas.']
});
M('polia_comando', {
  f: 'Suporte da polia, soquete, extrator de retentor.',
  pre: 'Parte do serviço da correia dentada.',
  d: ['Tire a correia dentada.', 'Segure a polia e solte o parafuso central.', 'Puxe a polia e guarde a chaveta.'],
  m: ['Retentor novo se houver óleo atrás da polia.', 'Chaveta, polia com UP para cima, parafuso a ≈ 37 N·m.']
});
M('capas_correia', {
  d: ['A capa superior sai depois da tampa de válvulas; a inferior exige tirar a polia do virabrequim.', 'Solte os parafusos e puxe com cuidado para não quebrar as abas.'],
  m: ['Borrachas de vedação no lugar, sem prender o chicote. Gire o motor e confira que a correia não roça.']
});
M('polia_vira', {
  f: 'Suporte da polia do virabrequim, soquete 19 mm com cabo de força, torquímetro.',
  pre: 'Roda dianteira direita e forro fora.',
  d: ['Tire a correia de acessórios.', 'Encaixe o suporte nos furos da polia, apoie o cabo de força e solte o parafuso.', 'Tire a polia.'],
  m: ['Óleo na rosca e na arruela, chaveta no lugar.', 'Aperte segurando a polia (≈ 180 N·m — confirme no manual).']
});
M('correia_acess', {
  f: 'Chave estrela ou de catraca para o tensor automático.',
  pre: 'Motor desligado e chave fora. Fotografe ou desenhe a passagem da correia antes.',
  d: ['Trabalhe por cima e pela caixa de roda direita.', 'Gire o tensor automático com a chave para aliviar a correia.', 'Tire a correia de uma polia lisa e solte o tensor devagar.'],
  m: ['Passe a correia por todas as polias, com as canaletas encaixadas.', 'Alivie o tensor, encaixe a última polia e solte o tensor devagar.', 'Confira o indicador do tensor dentro da faixa; ligue com o ar ligado e vire o volante: não pode chiar.']
});
M('tensor_acess', {
  f: 'Soquetes, chave para o tensor.',
  d: ['Tire a correia de acessórios.', 'Solte os parafusos do tensor no suporte.'],
  m: ['Tensor novo no pino-guia, parafusos no torque, correia de volta.']
});
M('coxim_dir', {
  f: 'Macaco com calço de madeira, soquetes, torquímetro.',
  pre: 'Apoie o motor por baixo, no cárter, com calço largo.',
  d: ['Afaste o reservatório da direção sem desligar as mangueiras.', 'Solte as porcas do coxim no suporte do motor e os parafusos na longarina.', 'Levante o motor um pouco e tire o coxim.'],
  m: ['Coxim novo na posição certa.', 'Baixe o motor até apoiar e aperte com ele em repouso.', 'Confira se o motor não balança na partida.']
});
M('coxim_cambio', {
  f: 'Soquetes, macaco para o câmbio.',
  pre: 'Tire a bateria, a bandeja e a caixa do filtro para chegar ao coxim.',
  d: ['Apoie o câmbio por baixo.', 'Solte o parafuso do suporte do câmbio e os da carroceria.', 'Tire o coxim levantando o câmbio um pouco.'],
  m: ['Coxim novo, aperto com o conjunto em repouso.', 'Caixa do filtro, bandeja e bateria (positivo primeiro).']
});
M('coxim_diant', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV + ' Apoie o motor por baixo.',
  d: ['Solte a porca e o parafuso do coxim no suporte do motor.', 'Solte os parafusos do coxim na travessa e tire-o.'],
  m: ['Coxim novo; aperto final com o motor parado na posição de repouso.']
});
M('coxim_tras', {
  f: 'Soquetes, extensões, torquímetro.',
  pre: ELEV + ' Apoie o motor por baixo.',
  d: ['Solte o parafuso do coxim no suporte do câmbio e motor.', 'Solte os parafusos na travessa traseira do subchassi e tire o coxim.'],
  m: ['Coxim novo; encoste tudo, desça o macaco e só então dê o aperto final.', 'Teste arrancando e trocando de marcha: o tranco deve sumir.']
});
M('respiro', {
  f: 'Chave da PCV, alicate de abraçadeira.',
  d: ['Puxe a mangueira da válvula PCV.', 'Solte a válvula do coletor ou do suporte.'],
  m: ['Válvula nova no sentido certo, mangueira sem rachaduras. Confira a marcha lenta.']
});

/* ---------- AR E INJEÇÃO ---------- */
M('tomada_ar', {
  d: ['Solte os clipes ou o parafuso da tomada na travessa.', 'Desencaixe da caixa do filtro e puxe.'],
  m: ['Encaixe bem: fresta deixa entrar água e sujeira.']
});
M('caixa_filtro', {
  f: 'Soquetes, chave de fenda.',
  d: ['Solte a tomada de ar e a abraçadeira do duto.', 'Desligue o sensor de temperatura do ar, se estiver no duto.', 'Abra a caixa, tire o filtro e solte os parafusos da base.'],
  m: ['Base nos coxins de borracha, duto e tomada encaixados, presilhas fechadas.']
});
M('filtro_ar', {
  d: ['Abra as presilhas da tampa da caixa.', 'Levante a tampa e tire o filtro, sem deixar cair sujeira no lado limpo.', 'Limpe o fundo da caixa com pano.'],
  m: ['Filtro novo com a borda assentada em toda a volta.', 'Tampa e presilhas fechadas.']
});
M('duto_ar', {
  f: 'Chave de fenda.',
  d: ['Desligue o sensor de temperatura do ar.', 'Solte as abraçadeiras na caixa e no corpo de borboleta e puxe o duto.'],
  m: ['Duto sem trincas, abraçadeiras firmes.']
});
M('tbi', {
  f: 'Soquetes, limpa-TBI, junta nova.',
  pre: 'Chave desligada.',
  d: ['Tire o duto de ar.', 'Solte o cabo do acelerador da alavanca e do suporte.', 'Desligue os conectores do TPS e da válvula de marcha lenta e as mangueiras de água, se houver.', 'Solte os 4 parafusos e tire o corpo.'],
  m: ['Junta nova, parafusos por igual (≈ 22 N·m).', 'Cabo com 10 a 12 mm de folga na alavanca.', 'Apague as falhas e deixe o motor em lenta até a ventoinha ligar para a central reaprender.']
});
M('iac', {
  f: 'Chave Phillips ou soquete pequeno, limpa-TBI, anel de vedação novo.',
  pre: 'Chave desligada. A válvula fica presa por baixo do corpo de borboleta.',
  d: ['Desligue o conector.', 'Solte os 2 parafusos e tire a válvula com o anel.', 'Limpe a passagem e a válvula com o produto, sem molhar o conector.'],
  m: ['Anel novo, parafusos de leve, conector.', 'Apague as falhas, dê partida sem tocar no acelerador e deixe em lenta, sem carga elétrica, até a ventoinha ligar. Depois ligue o ar e confira se a lenta segura.']
});
M('cabo_acel', {
  f: 'Chaves de boca.',
  d: ['Solte as contraporcas no suporte do corpo de borboleta e desencaixe a ponta da alavanca.', 'No pedal, desencaixe a ponta e puxe o cabo pelo corta-fogo.'],
  m: ['Mesmo caminho, sem dobras.', 'Regule a folga de 10 a 12 mm e confira que, com o pedal no fundo, a borboleta abre toda.']
});
M('pedal_acel', {
  f: 'Soquetes.',
  d: ['Desencaixe o cabo do pedal.', 'Solte as porcas do suporte e tire o pedal.'],
  m: ['Aperte o suporte, encaixe o cabo e confira a folga.']
});
M('coletor_adm', {
  f: 'Soquetes com extensões longas, juntas novas.',
  pre: ALIVIA + ' ' + BAT,
  d: ['Tire o duto de ar e o corpo de borboleta.', 'Desligue sensor MAP, purga, mangueira do servo, PCV e o chicote dos bicos.', 'Tire a galeria com os bicos.', 'Solte os parafusos e porcas do coletor e o suporte de baixo e tire o coletor.'],
  m: ['Juntas novas, faces limpas.', 'Aperto cruzado (≈ 22 N·m).', 'Reconecte tudo e procure entrada falsa de ar com o motor em lenta.']
});
M('galeria', {
  f: 'Soquetes, anéis de vedação novos para os bicos.',
  pre: ALIVIA + ' Tenha pano à mão.',
  d: ['Solte o engate da linha de combustível na galeria.', 'Desligue os conectores dos bicos.', 'Solte os 2 parafusos e puxe a galeria reta, com os bicos.'],
  m: ['Anéis novos untados com óleo de motor limpo.', 'Encaixe os bicos e aperte a galeria (≈ 12 N·m).', 'Ligue a chave algumas vezes e procure vazamento antes da partida.']
});
M('bicos', {
  f: 'As da galeria; bancada de teste para limpeza.',
  pre: ALIVIA,
  d: ['Tire a galeria com os bicos.', 'Tire a trava de cada bico e puxe-o da galeria.'],
  m: ['Bicos limpos e testados, anéis e coxins novos.', 'Trave os bicos na galeria, monte e teste vazamento com a chave ligada.']
});

/* ---------- COMBUSTÍVEL ---------- */
M('tanque', {
  f: 'Macaco de transmissão ou macaco com tábua, soquetes, bomba de transferência.',
  pre: 'Tanque o mais vazio possível. ' + BAT + ' Trabalhe ventilado, longe de chama.',
  d: ['Tire o assento traseiro e desligue o conector do módulo pela tampa de acesso.', 'Transfira o combustível restante.', ELEV + ' Solte a linha de combustível, a mangueira do cânister e a do bocal.',
    'Apoie o tanque e solte as cintas.', 'Baixe devagar, conferindo que nada ficou preso.'],
  m: ['Encaixe mangueiras e linhas antes de apertar as cintas.', 'Cintas firmes, conector, e teste de vazamento com a bomba ligada.']
});
M('bomba_comb', {
  f: 'Chave do anel do módulo (ou ferramenta própria), anel de vedação novo.',
  pre: ALIVIA + ' Tanque com menos de ¼.',
  d: ['Levante o assento traseiro e tire a tampa de acesso no assoalho.', 'Desligue o conector e o engate rápido da linha.', 'Solte o anel de trava do módulo.', 'Levante o módulo devagar, inclinando para a boia sair sem entortar.'],
  m: ['Anel de vedação novo, seco e assentado.', 'Módulo com a marca alinhada à do tanque e anel apertado.', 'Linha e conector, chave ligada, procure vazamento. O filtro vem no módulo: não há filtro separado na linha.']
});
M('boia', {
  pre: 'A boia é parte do módulo da bomba.',
  d: ['Tire o módulo do tanque.', 'Solte o conector e a trava da boia no corpo do módulo.'],
  m: ['Encaixe a boia, monte o módulo e confira o marcador cheio e na reserva.']
});
M('linhas_comb', {
  f: 'Ferramenta de engate rápido.',
  pre: ALIVIA,
  d: ['Solte os engates rápidos nas pontas do trecho.', 'Abra os clipes do assoalho e tire o trecho.'],
  m: ['Tubo e conexões próprios para combustível, longe do escape. Teste vazamento.']
});
M('bocal', {
  f: 'Soquetes, chave de fenda.',
  pre: 'Tanque quase vazio.',
  d: ['Abra a portinhola e tire a tampa.', 'Por baixo, solte a abraçadeira da mangueira do tanque e a do respiro.', 'Tire os 2 parafusos da caixa da portinhola e puxe o bocal por baixo.'],
  m: ['Mangueiras bem encaixadas e abraçadeiras firmes.', 'Tampa com a vedação boa, apertada até estalar.']
});
M('canister', {
  f: 'Chave de fenda, soquetes.',
  pre: ELEV,
  d: ['Desligue as mangueiras, anotando cada uma.', 'Solte o suporte e tire o cânister.'],
  m: ['Cada mangueira no bico certo, sem dobras. Suporte firme.']
});
M('purga', {
  d: ['Desligue o conector e as duas mangueiras.', 'Solte a válvula do suporte no coletor.'],
  m: ['Sentido pela seta (do cânister para o coletor), conector travado.']
});

/* ---------- IGNIÇÃO E SENSORES ---------- */
M('ecu', {
  f: 'Soquetes, chave de fenda, espátula plástica.',
  pre: BAT + ' Central de outro carro precisa ser casada com o imobilizador (chaves) com scanner; o ideal é a original reparada.',
  d: ['Tire o acabamento lateral perto do assoalho do passageiro.', 'Solte os conectores (trava de cada um).', 'Solte os parafusos do suporte e tire a central.'],
  m: ['Conectores secos e travados até o fim.', 'Apague falhas e deixe o motor em lenta até a ventoinha ligar para a central reaprender.']
});
M('bobinas', {
  oem: ['30520-PGK-A01', ['Substituto atual', '30520-PVJ-A01']],
  f: 'Soquete 10 mm.',
  pre: 'Chave desligada. Para achar a bobina com defeito, troque duas de lugar e veja se a falha muda de cilindro.',
  d: ['Aperte a trava e desligue o conector.', 'Solte o parafuso da bobina.', 'Puxe reto para cima, girando um pouco.'],
  m: ['Confira o poço da vela seco; óleo ali é vedação da tampa de válvulas.', 'Encaixe a bobina, aperte de leve (≈ 10 N·m) e trave o conector.']
});
M('velas', {
  alt: 'NGK ZFR5F-11, Denso KJ16CR-L11',
  f: 'Chave de vela de 16 mm com extensão, torquímetro, ar comprimido.',
  pre: 'Motor frio: a rosca é no alumínio.',
  d: ['Tire as bobinas.', 'Sopre o poço das velas.', 'Solte e tire cada vela.'],
  m: ['Velas novas com folga de 1,0 a 1,1 mm.', 'Rosqueie à mão até encostar e aperte a 18 N·m.', 'Bobinas de volta.']
});
M('sens_ckp', {
  f: 'Soquete pequeno.',
  pre: 'Fica na frente do bloco, do lado da correia, atrás da polia.',
  d: ['Desligue o conector.', 'Solte o parafuso e puxe o sensor.'],
  m: ['Anel de vedação novo, sensor assentado, parafuso de leve.']
});
M('sens_cmp', {
  f: 'Soquete.',
  d: ['Desligue o conector na ponta esquerda do cabeçote.', 'Solte os parafusos e tire o sensor com o anel.'],
  m: ['Anel novo untado com óleo, encaixe alinhado com o rasgo do comando.']
});
M('sens_ect', {
  f: 'Soquete de sensor.',
  pre: 'Motor frio; tenha o sensor novo à mão.',
  d: ['Desligue o conector.', 'Solte o sensor da saída d’água.'],
  m: ['Arruela nova, aperto firme, complete o líquido e faça a sangria.']
});
M('sens_map', {
  f: 'Chave Phillips.',
  d: ['Desligue o conector.', 'Solte os parafusos e puxe o sensor do coletor.'],
  m: ['Anel de vedação bom e parafusos de leve.']
});
M('sens_iat', {
  d: ['Desligue o conector.', 'Gire e puxe o sensor do duto (ou solte os parafusos, conforme a versão).'],
  m: ['Anel de vedação bom, sensor encaixado até travar.']
});
M('tps', {
  pre: 'O sensor de posição costuma vir junto com o corpo de borboleta; confirme se o seu é vendido separado.',
  d: ['Desligue o conector.', 'Solte os parafusos e tire o sensor, sem girar a borboleta à força.'],
  m: ['Encaixe alinhado com o eixo da borboleta e confira a leitura no scanner (fechado e aberto).']
});
M('sonda', {
  f: 'Soquete de sonda (com rasgo), pasta antitravamento.',
  pre: 'Com o motor morno a rosca solta mais fácil; cuidado com o escape quente.',
  d: ['Tire o protetor de calor se ele atrapalhar.', 'Desligue o conector (fica preso por clipes).', 'Solte a sonda com o soquete próprio.'],
  m: ['Pasta antitravamento só na rosca.', 'Aperte a ≈ 44 N·m e prenda o fio longe do escape.']
});
M('sonda2', {
  f: 'Soquete de sonda.',
  pre: ELEV,
  d: ['Desligue o conector.', 'Solte a sonda depois do catalisador.'],
  m: ['Pasta antitravamento só na rosca, ≈ 44 N·m, fio preso nas presilhas.']
});
M('sens_oleo', {
  f: 'Soquete de sensor.',
  pre: 'Motor frio.',
  d: ['Desligue o fio.', 'Solte o interruptor do bloco.'],
  m: ['Veda-rosca indicado, aperto firme; confira vazamento com o motor ligado.']
});
M('sens_vss', {
  f: 'Soquete.',
  d: ['Desligue o conector.', 'Solte o parafuso e puxe o sensor do câmbio.'],
  m: ['Anel novo untado com óleo; encaixe até assentar.']
});

/* ---------- ARREFECIMENTO ---------- */
M('radiador', {
  f: 'Soquetes, chave de fenda, alicate de abraçadeira, recipiente.',
  pre: AGUA,
  d: ['Desligue os conectores das duas ventoinhas e tire o conjunto das ventoinhas.', 'Solte a mangueira superior, a inferior e a do reservatório.', 'Solte os suportes de cima do radiador na travessa.', 'Levante o radiador sem bater no condensador.'],
  m: ['Coxins de borracha de baixo no lugar, suportes e mangueiras com abraçadeiras firmes.', SANGRA]
});
M('tampa_rad', {
  pre: 'Motor frio. Nunca abra quente.',
  d: ['Pressione e gire a tampa um quarto de volta, espere aliviar, e termine de girar.'],
  m: ['Tampa da pressão certa, vedação limpa, girada até travar.']
});
M('ventoinha', {
  f: 'Soquetes.',
  d: ['Desligue o conector.', 'Solte os parafusos do defletor no radiador e tire a ventoinha com o defletor.'],
  m: ['Hélice girando livre, conector travado; ligue o motor e espere a ventoinha armar.']
});
M('vaso', {
  pre: 'Motor frio.',
  d: ['Esvazie o reservatório com uma seringa.', 'Solte a mangueira do radiador e tire o reservatório do suporte.'],
  m: ['Mangueira firme, nível entre MIN e MAX com o motor frio.']
});
M('termostato', {
  f: 'Soquetes, anel de borracha novo.',
  pre: AGUA,
  d: ['Solte a mangueira inferior da carcaça, na ponta esquerda do motor.', 'Solte os 2 parafusos da tampa e tire a válvula.'],
  m: ['Válvula nova com o pino de sangria para cima e anel novo.', 'Parafusos por igual (≈ 10 N·m).', SANGRA]
});
M('bomba_agua', {
  oem: '19200-PLM-A01',
  f: 'As da correia dentada, anel de vedação novo.',
  pre: 'Feita junto com a correia dentada. ' + AGUA,
  d: ['Tire a correia dentada.', 'Solte os 5 parafusos da bomba e tire-a.', 'Limpe a face do bloco.'],
  m: ['Bomba nova com anel novo, aperto cruzado (≈ 12 N·m).', 'Correia no ponto.', SANGRA]
});
M('mang_sup', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Abra as duas abraçadeiras.', 'Gire a mangueira para descolar e puxe.'],
  m: ['Mangueira nova sem torcer, abraçadeiras firmes.', SANGRA]
});
M('mang_inf', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Abra as abraçadeiras no radiador e na carcaça da termostática.', 'Puxe girando.'],
  m: ['Encaixe até o batente, abraçadeiras firmes.', SANGRA]
});
M('mang_aquec', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Abra as abraçadeiras no motor e nos tubos do corta-fogo.', 'Puxe as mangueiras.'],
  m: ['Cada mangueira no tubo certo, sem dobras.', SANGRA]
});
M('rad_aquec', {
  f: 'Chaves de fenda e soquetes, espátula plástica.',
  pre: AGUA + ' Proteja o tapete do passageiro.',
  d: ['No cofre, solte as mangueiras do aquecedor no corta-fogo.', 'Dentro, tire os acabamentos de baixo do painel no centro.', 'Solte a tampa da caixa de ar e puxe o radiador do aquecedor; em algumas montagens é preciso afastar o painel.'],
  m: ['Radiador novo com vedações novas.', 'Monte tudo e ' + SANGRA.charAt(0).toLowerCase() + SANGRA.slice(1)]
});

/* ---------- AR-CONDICIONADO ---------- */
M('compressor', {
  f: 'Máquina de recolhimento e carga (oficina de ar-condicionado), soquetes, calibre de lâminas.',
  pre: 'Antes de trocar o compressor, confira a folga da embreagem: ela aumenta com o desgaste e a embreagem deixa de acoplar. ' + GAS,
  d: ['Para regular a embreagem: segure o disco da frente, solte o parafuso central, tire o disco e um calço por vez até a folga ficar na faixa do manual.', 'Para trocar o compressor: recolha o gás e tire a correia de acessórios.',
    'Desligue o conector da embreagem e solte as duas linhas (tampe na hora).', 'Solte os 3 parafusos e tire o compressor por baixo.'],
  m: ['Compressor novo com o óleo na quantidade certa e anéis novos.', 'Parafusos (≈ 22 N·m), linhas, conector e correia.', 'Troque o filtro secador, faça vácuo e carga pelo peso.']
});
M('condensador', {
  f: 'Máquina de recolhimento e carga, soquetes.',
  pre: GAS,
  d: ['Recolha o gás.', 'Tire o para-choque dianteiro e a grade.', 'Solte as duas linhas do condensador e tampe.', 'Solte os suportes e tire o condensador para a frente ou para cima.'],
  m: ['Condensador novo com anéis novos, suportes firmes.', 'Troque o filtro secador, vácuo e carga.']
});
M('vent_cond', {
  f: 'Soquetes.',
  d: ['Desligue o conector.', 'Solte os parafusos do defletor e tire a ventoinha do condensador.'],
  m: ['Hélice livre, conector travado; ligue o ar e confira que ela gira.']
});
M('filtro_secador', {
  f: 'Máquina de recolhimento e carga, chaves.',
  pre: GAS,
  d: ['Recolha o gás.', 'Solte as conexões do filtro e a abraçadeira do suporte.'],
  m: ['Filtro novo instalado por último, para não pegar umidade; vácuo e carga.']
});
M('pressostato', {
  f: 'Chave de boca.',
  pre: 'Em muitos circuitos o pressostato tem válvula embaixo e sai sem perder gás; confirme antes de soltar. Na dúvida, recolha o gás.',
  d: ['Desligue o conector.', 'Solte o pressostato da linha.'],
  m: ['Anel novo untado com óleo do compressor, aperto firme e conector.']
});
M('tubos_ac', {
  f: 'Máquina de recolhimento e carga, chaves, anéis de vedação.',
  pre: GAS,
  d: ['Recolha o gás.', 'Solte as conexões do trecho (porcas ou flanges com parafuso) e tampe na hora.', 'Abra os clipes e tire o trecho.'],
  m: ['Anéis novos untados com óleo do compressor, conexões no torque, clipes.', 'Vácuo, carga e teste de vazamento.']
});
M('valv_exp', {
  f: 'Máquina de recolhimento e carga, chaves Allen.',
  pre: GAS,
  d: ['Recolha o gás.', 'No corta-fogo, solte as linhas da válvula e a própria válvula.'],
  m: ['Válvula nova, anéis novos, vácuo e carga.']
});
M('evaporador', {
  f: 'As do painel e da caixa de ar, máquina de recolhimento e carga.',
  pre: GAS + ' Serviço longo: a caixa de ar precisa ser aberta.',
  d: ['Recolha o gás e solte as linhas no corta-fogo.', 'Tire o porta-luvas e os acabamentos do lado do passageiro.', 'Abra a caixa de ar e puxe o evaporador.'],
  m: ['Evaporador novo, dreno livre, vedações da caixa.', 'Troque o filtro secador, vácuo e carga.']
});
M('filtro_cabine', {
  pre: 'Sem ferramentas.',
  d: ['Abra o porta-luvas, esvazie e solte os batentes laterais para ele baixar.', 'Solte as travas da tampa do filtro.', 'Puxe o filtro para fora.'],
  m: ['Filtro novo com a seta do fluxo para baixo.', 'Tampa travada e porta-luvas nos batentes.']
});
M('vent_interno', {
  f: 'Soquetes, chave Phillips.',
  pre: BAT,
  d: ['Tire o acabamento de baixo do porta-luvas.', 'Desligue o conector.', 'Solte os 3 parafusos e baixe o ventilador.'],
  m: ['Encaixe sem tocar a hélice, aperte e teste as velocidades.']
});
M('caixa_ar', {
  pre: 'A caixa de ar só sai com o painel fora, o gás recolhido e o líquido drenado. ' + GAS,
  d: ['Recolha o gás, drene o líquido e solte linhas e mangueiras no corta-fogo.', 'Tire o painel.', 'Solte as fixações da caixa e tire.'],
  m: ['Vedações novas no corta-fogo e no dreno.', 'Painel, linhas, mangueiras, vácuo e carga, e sangria do arrefecimento.']
});
M('comandos_clima', {
  f: 'Espátula plástica, chave Phillips.',
  d: ['Tire a moldura central.', 'Solte os parafusos do painel de comandos.', 'Desligue os conectores e os cabos das portinholas (anote cada um).'],
  m: ['Cada cabo no seu comando, presos nas presilhas; teste todas as posições.']
});

/* ---------- ESCAPAMENTO ---------- */
M('coletor_esc', {
  f: 'Soquetes, desengripante, juntas e porcas novas.',
  pre: 'Motor frio. Desengripante nos prisioneiros na véspera.',
  d: ['Tire os protetores de calor.', 'Desligue a sonda dianteira.', 'Solte o catalisador do coletor (ou o tubo dianteiro, se forem peça única).', 'Solte as 8 porcas e tire o coletor.'],
  m: ['Junta nova e porcas novas, ≈ 31 N·m em cruz do centro para fora.', 'Protetores e sonda. Escute estalos com o motor frio.']
});
M('protetor', {
  f: 'Soquetes, desengripante.',
  d: ['Solte os parafusos do protetor e tire-o.'],
  m: ['Parafusos firmes; protetor solto vibra.']
});
M('catalisador', {
  f: 'Soquetes, desengripante, juntas novas.',
  pre: 'Escape frio. ' + ELEV,
  d: ['Tire as duas sondas.', 'Solte a flange de cima (coletor) e a de baixo (tubo dianteiro).', 'Solte o suporte e tire o catalisador.'],
  m: ['Juntas novas, porcas autotravantes, sondas com pasta na rosca.', 'Apague a falha e rode alguns dias para a central testar o catalisador.']
});
M('tubo_diant', {
  f: 'Soquetes, desengripante, juntas novas.',
  pre: ELEV,
  d: ['Solte a flange com o catalisador e a do silencioso intermediário.', 'Desencaixe dos coxins e tire o tubo.'],
  m: ['Juntas novas, parafusos com mola até o batente, tubo sem encostar no assoalho.']
});
M('silenc_inter', {
  f: 'Soquetes, desengripante.',
  pre: ELEV,
  d: ['Solte as flanges dos dois lados.', 'Desencaixe dos coxins e tire.'],
  m: ['Juntas novas e coxins bons; balance o escape para ver se não bate.']
});
M('tubo_tras', {
  f: 'Soquetes, desengripante.',
  pre: ELEV,
  d: ['Solte as flanges nas pontas.', 'Desencaixe dos coxins e tire passando sobre a travessa.'],
  m: ['Juntas novas, tubo alinhado.']
});
M('silenc_tras', {
  f: 'Soquetes, desengripante, junta nova.',
  pre: ELEV,
  d: ['Solte a flange com o tubo traseiro.', 'Tire os coxins (água com sabão ajuda) e puxe o silencioso.'],
  m: ['Ponteira centrada, junta nova, coxins firmes.']
});
M('coxins_esc', {
  f: 'Alavanca, água com sabão.',
  d: ['Molhe a borracha.', 'Puxe o coxim dos ganchos com a alavanca.'],
  m: ['Coxim novo nos dois ganchos; o escape deve ficar pendurado sem tocar a carroceria.']
});
