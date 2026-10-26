/* ===== VW Gol G5 1.6 Power 2010/2011: código e como desmontar e montar cada peça (motor, admissão, combustível, ignição, arrefecimento, ar-condicionado e escape) =====
   Cada entrada: oem = código VW (só os confirmados em catálogo), alt = equivalentes, f = ferramentas, pre = antes de começar, d = desmontar, m = montar. */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['gol-g5'] = window.CAR_PROC['gol-g5'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria (tenha o código do rádio à mão, se ele pedir).';
const LENTA = 'Depois de religar a bateria, limpar ou trocar a borboleta, a central precisa reaprender a posição dela: ligue a chave sem dar partida por alguns segundos, depois deixe o motor em lenta, sem acelerar e com tudo desligado, até estabilizar. Se a lenta continuar irregular, faça a adaptação com scanner, pelo manual VW.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const AGUA = 'Motor frio. Abra a tampa do reservatório devagar e drene o líquido soltando a mangueira inferior do radiador (ou pelo bujão, se o seu radiador tiver) num recipiente limpo.';
const SANGRA = 'Complete pelo reservatório devagar, com o aquecedor no máximo. Ligue o motor, deixe o eletroventilador ligar duas vezes e aperte as mangueiras para soltar bolhas; com o motor frio, complete até MAX.';
const ALIVIA = 'Alivie a pressão de combustível: com o motor ligado, tire o fusível ou o relé da bomba de combustível na central elétrica sob o painel e deixe o motor apagar sozinho; dê mais uma partida de 3 segundos.';
const PONTO = 'Ponto do motor (cilindro 1 em compressão): marca da polia do comando alinhada com a referência da capa ou do cabeçote e marca do virabrequim alinhada com a referência do bloco. Confira no manual VW as marcas do seu motor antes de soltar a correia.';
const CORREIA = 'Correia dentada nova com o motor frio e no ponto: monte começando pelo virabrequim, sem dobrar a correia, com o lado esticado do lado oposto ao tensor. Gire o excêntrico do tensor até o ponteiro coincidir com a marca, aperte a porca, gire o motor à mão duas voltas pelo parafuso do virabrequim e confira as marcas e o ponteiro de novo.';
const GAS = 'Circuito do ar-condicionado aberto: o gás R-134a precisa ser recolhido com máquina antes, e no fim o circuito leva vácuo e carga pelo peso indicado na etiqueta do cofre. Anéis de vedação novos, untados com o óleo do compressor.';
const CABOS = 'Os cabos de vela saem da bobina com o número do cilindro marcado; o cilindro 1 é o do lado da correia (direita) e a ordem de ignição é 1-3-4-2. Troque um cabo de cada vez para não inverter.';

/* ---------- MOTOR ---------- */
M('bloco', {
  f: 'Guincho de motor, macaco de transmissão, soquetes, torquímetro.',
  pre: 'O bloco só sai com o motor fora do carro; na prática é serviço de retífica. ' + BAT,
  d: ['Drene óleo, líquido de arrefecimento e o óleo do câmbio. Solte o compressor do ar e a bomba da direção dos suportes e amarre de lado, sem abrir os circuitos.',
    'Tire o capô, a caixa do filtro de cima do motor e a bateria.', 'Solte chicote, mangueiras de água e de vácuo, a linha de combustível (alivie a pressão antes), os tubinhos da partida a frio, os cabos de engate e o cabo da embreagem.',
    'Solte o escape do coletor, na frente do motor, e tire os semieixos.', 'Apoie o conjunto por baixo, solte os coxins (direito, do câmbio e o tirante traseiro) e baixe o motor com o câmbio.',
    'Na bancada, separe o câmbio e desmonte até sobrar o bloco.'],
  m: ['Bloco limpo e conferido (planicidade, cilindros, galerias desobstruídas) antes de montar qualquer peça.', 'Monte virabrequim, pistões, cabeçote e correia dentada com os apertos do manual. ' + CORREIA,
    'Reinstale pelos coxins e aperte com o motor em repouso.', 'Abasteça óleo, água (com sangria) e câmbio; confira vazamentos e falhas no scanner. ' + LENTA]
});
M('cabecote', {
  f: 'Soquetes, chave Torx ou estriada, torquímetro e goniômetro (transferidor de ângulo), travas de ponto, junta nova e parafusos novos.',
  pre: AGUA + ' ' + BAT + ' ' + ALIVIA,
  d: ['Tire a caixa do filtro de cima do motor, os cabos de vela e a tampa de válvulas.', 'Apoie o motor por baixo, tire o coxim direito, a correia de acessórios, a polia do virabrequim e as capas da correia. ' + PONTO,
    'Afrouxe o tensor e tire a correia dentada.', 'Desligue chicotes, sensores, flange de água, mangueiras de vácuo, a linha de combustível e os tubinhos da partida a frio.',
    'Solte o coletor de escape do cabeçote (na frente) e o coletor de admissão (atrás), se não sair junto.', 'Afrouxe os 10 parafusos do cabeçote na ordem inversa do aperto, de fora para dentro, em várias passadas e com o motor frio, e levante o cabeçote reto.'],
  m: ['Limpe as faces sem lixa nem raspador de aço (o cabeçote é de alumínio). Confira a planicidade.', 'Junta nova seca, centrada nos pinos-guia, com a marca de peça para cima; parafusos novos.',
    'Aperte em espiral de dentro para fora, nas etapas de torque e ângulo do manual VW.', CORREIA,
    'Tuchos hidráulicos: depois de montar o comando, espere uns 30 minutos antes de girar o motor, para eles assentarem. Sangre o arrefecimento e troque o óleo.']
});
M('junta_cab', {
  f: 'As mesmas do cabeçote.',
  pre: 'A junta só se troca tirando o cabeçote. Confirme o defeito antes: teste de CO2 no reservatório ou teste de vazamento de cilindro.',
  d: ['Siga a desmontagem do cabeçote até ele sair.', 'Tire a junta velha e limpe resíduos das faces e dos furos dos parafusos (óleo ou água no fundo do furo falseia o aperto).', 'Mande conferir a planicidade do cabeçote; se empenou, ele precisa ser plainado dentro do limite.'],
  m: ['Junta nova do mesmo tipo, centrada nos pinos-guia, sem cola.', 'Parafusos novos, aperto em espiral em etapas de torque e ângulo.', 'Correia no ponto, arrefecimento completo e sangrado e óleo trocado se estava contaminado.']
});
M('tampa_valv', {
  f: 'Soquetes, torquímetro de baixa escala.',
  pre: 'Motor frio.',
  d: ['Tire a caixa do filtro de ar, que fica em cima da tampa.', 'Solte a mangueira do respiro e afaste os cabos de vela.', 'Solte as porcas ou parafusos de fora para dentro, em espiral.', 'Levante a tampa reta.'],
  m: ['Junta nova, faces limpas e secas.', 'Porcas em espiral, do centro para fora, com aperto baixo.', 'Respiro, cabos e caixa do filtro de volta. Ligue e procure vazamento com o motor quente: óleo pingando no coletor de escape cheira a queimado.']
});
M('comando', {
  f: 'Travas de ponto, chave para segurar a polia, soquetes, torquímetro, retentor novo.',
  pre: 'O comando sai com a correia dentada e a tampa de válvulas fora. Marque tudo antes de soltar.',
  d: ['Tire a tampa de válvulas e ponha o motor no ponto. ' + PONTO, 'Tire a correia dentada e, segurando a polia, solte o parafuso central e tire a polia do comando.',
    'Afrouxe as capas dos mancais por igual, em várias passadas, das pontas para o centro.', 'Tire as capas na ordem, marcadas, e levante o comando; tire o retentor da ponta.'],
  m: ['Óleo de motor nos cames, mancais e tuchos.', 'Capas no lugar certo, aperto do centro para as pontas em várias passadas; retentor novo.', 'Polia no lugar, com o parafuso no torque. ' + CORREIA]
});
M('tuchos', {
  f: 'Ventosa ou ímã para tuchos, óleo de motor.',
  pre: 'Os tuchos saem com o comando fora. Guarde cada um na ordem, de cabeça para baixo, num recipiente com óleo.',
  d: ['Tire o comando (veja comando).', 'Puxe cada tucho com a ventosa, marcando a posição.'],
  m: ['Tuchos no mesmo furo, lubrificados.', 'Comando montado: espere uns 30 minutos antes de girar o motor, para os tuchos hidráulicos assentarem e as válvulas não baterem nos pistões.', 'Um "tec-tec" nos primeiros segundos depois da montagem é normal; se não sumir com o motor quente, o tucho está travado.']
});
M('valvulas', {
  f: 'Compressor de molas de válvula, ímã, retentores novos.',
  pre: 'Serviço de bancada: o cabeçote sai do motor.',
  d: ['Tire o cabeçote e os tuchos.', 'Comprima cada mola, tire as travas, a mola e a válvula; marque a posição.', 'Tire os retentores das hastes.'],
  m: ['Retentores novos, válvulas assentadas (esmerilhadas) e conferidas quanto a vedação.', 'Travas bem encaixadas antes de soltar o compressor.', 'Cabeçote montado com junta e parafusos novos.']
});
M('pistoes', {
  f: 'Cinta de anéis, martelo de borracha, torquímetro, retífica.',
  pre: 'Serviço de retífica: o motor sai do carro ou, no mínimo, o cabeçote e o cárter saem.',
  d: ['Tire cabeçote e cárter.', 'Marque cada biela e capa, solte as capas e empurre o pistão para cima.', 'Tire os anéis com o alicate próprio.'],
  m: ['Anéis novos com as pontas defasadas, como o manual manda.', 'Pistão com a seta para o lado da correia, com cinta de anéis e óleo.', 'Capas de biela na marca, parafusos novos no torque com ângulo.']
});
M('bielas', {
  f: 'Soquetes, torquímetro com goniômetro, bronzinas novas.',
  pre: 'Saem com os pistões. Marque cada biela e capa: elas não se misturam.',
  d: ['Tire o cárter e a bomba de óleo, se atrapalhar.', 'Solte os parafusos da capa e tire a capa com a bronzina.', 'Empurre a biela com o pistão para cima.'],
  m: ['Bronzinas novas, folga conferida com plastigage.', 'Capa na mesma posição, parafusos novos com torque e ângulo.', 'Gire o motor à mão para conferir que está livre.']
});
M('virabrequim', {
  f: 'Torquímetro, retentores, bronzinas e retífica.',
  pre: 'Serviço de retífica: motor fora.',
  d: ['Tire volante, embreagem, polia, correia dentada com a engrenagem, bomba de óleo e cárter.', 'Solte as capas de biela e dos mancais, do centro para as pontas.', 'Levante o virabrequim.'],
  m: ['Bronzinas e arruelas de encosto novas, folgas conferidas.', 'Mancais do centro para as pontas, em etapas.', 'Retentores novos nas duas pontas: retentor do lado da correia vazando suja a correia dentada.']
});
M('carter', {
  f: 'Soquetes, espátula plástica, junta ou cola de vedação, chave do bujão.',
  pre: ELEV + ' Drene o óleo.',
  d: ['Solte o bujão e drene.', 'Solte os parafusos em volta do cárter.', 'Descole o cárter com espátula plástica, sem forçar com chave de fenda nas faces.'],
  m: ['Faces limpas e secas; junta nova ou cordão de cola contínuo.', 'Parafusos em cruz, aperto baixo.', 'Espere a cura da cola, abasteça (cerca de 3,5 L com filtro: a vareta manda), ligue e confira vazamentos.']
});
M('bomba_oleo', {
  f: 'Soquetes, torquímetro, juntas e retentor.',
  pre: 'A bomba fica na ponta do virabrequim, atrás da correia dentada: tire a correia e o cárter.',
  d: ['Tire a correia dentada e a engrenagem do virabrequim. ' + PONTO, 'Tire o cárter e o pescador.', 'Solte os parafusos e tire a bomba.'],
  m: ['Bomba nova ou revisada, cheia de óleo, com junta e retentor novos.', 'Pescador com anel de vedação novo e tela limpa.', 'Cárter, correia (' + CORREIA + ') e óleo novo. Confira a luz do óleo apagar em segundos.']
});
M('filtro_oleo', {
  alt: 'Wega WO-340 (citado no varejo para o Gol 1.0 e 1.6 8V: confirme a aplicação pelo motor)',
  f: 'Chave de filtro, bandeja.',
  pre: 'Troque junto com o óleo. O filtro fica na frente do bloco, embaixo, perto do coletor de escape: espere o motor esfriar.',
  d: ['Ponha a bandeja embaixo.', 'Solte o filtro com a chave, girando para a esquerda.'],
  m: ['Unte o anel de borracha do filtro novo com óleo novo.', 'Rosqueie à mão até encostar e dê mais ¾ de volta.', 'Ligue o motor e confira vazamento no filtro.']
});
M('vareta', {
  f: 'Nenhuma.',
  pre: 'Carro no plano e motor frio ou 5 minutos desligado.',
  d: ['Puxe a vareta pela argola amarela.'],
  m: ['Limpe, enfie até o fim, puxe de novo e leia o nível entre as marcas.', 'Complete aos poucos pelo bocal da tampa de válvulas.']
});
M('tampa_oleo', {
  f: 'Nenhuma.',
  pre: 'Motor desligado.',
  d: ['Gire a tampa e tire.'],
  m: ['Anel de vedação bom, tampa rosqueada firme: tampa aberta é ar falso e cheiro de óleo.']
});
M('volante_motor', {
  f: 'Trava do volante, soquetes, torquímetro, trava-química.',
  pre: 'Sai com o câmbio e a embreagem fora.',
  d: ['Tire o câmbio e a embreagem.', 'Trave o volante e solte os 6 parafusos em cruz.', 'Tire o volante.'],
  m: ['Volante retificado ou novo, sem óleo.', 'Parafusos novos com trava-química, aperto em cruz no torque.', 'Embreagem nova centralizada e câmbio de volta.']
});
M('correia_dent', {
  f: 'Travas de ponto do EA111 (ou marcas bem feitas), soquetes, chave para o tensor, torquímetro.',
  pre: 'Motor frio. ' + BAT + ' Troque junto o tensor e, de preferência, a bomba d’água: ela é girada pela correia.',
  d: ['Apoie o motor por baixo e tire o coxim direito, que fica sobre a correia.', 'Tire a correia de acessórios e a polia do virabrequim.', 'Tire as capas da correia.',
    PONTO, 'Afrouxe a porca do tensor e tire a correia.'],
  m: [CORREIA, 'Capas, polia (parafuso no torque) e correia de acessórios de volta.', 'Coxim direito com o motor em repouso. Ligue e ouça: ronco ou chiado vindo das capas pede nova conferência.']
});
M('tensor_dent', {
  f: 'Chave de pino ou Allen para o excêntrico, soquete, torquímetro.',
  pre: 'Troca-se junto com a correia dentada.',
  d: ['Siga a desmontagem da correia dentada até ela sair.', 'Solte a porca e tire o tensor.'],
  m: ['Tensor novo encaixado na guia do bloco.', CORREIA]
});
M('polia_comando', {
  f: 'Chave para segurar a polia, soquete, torquímetro.',
  pre: 'Sai com a correia dentada fora e o motor no ponto.',
  d: ['Tire a correia dentada. ' + PONTO, 'Segure a polia com a chave própria e solte o parafuso central.', 'Tire a polia, de olho na chaveta ou no ressalto de posição.'],
  m: ['Polia na posição certa, parafuso no torque.', CORREIA]
});
M('capas_correia', {
  f: 'Chave de fenda, soquetes.',
  pre: 'Motor frio.',
  d: ['Solte as presilhas e o parafuso da capa de cima e tire.', 'Para a capa de baixo, tire antes a correia de acessórios e a polia do virabrequim.'],
  m: ['Capas encaixadas sem raspar na correia.', 'Capa trincada deixa entrar sujeira que gasta a correia: troque.']
});
M('polia_vira', {
  f: 'Soquetes, chave para segurar o virabrequim, torquímetro.',
  pre: BAT,
  d: ['Tire a correia de acessórios.', 'Segure o virabrequim e solte os parafusos da polia (o parafuso central segura também a engrenagem da correia dentada: se for soltá-lo, ponha o motor no ponto antes).', 'Tire a polia.'],
  m: ['Polia na posição certa, parafusos no torque; parafuso central novo se tiver sido solto.', 'Correia de acessórios de volta.']
});
M('correia_acess', {
  f: 'Chave para o tensor (ou soquete), desenho da passagem da correia.',
  pre: 'Fotografe ou desenhe a passagem antes de tirar.',
  d: ['Alivie o tensor e tire a correia das polias do alternador, da bomba da direção e do compressor.'],
  m: ['Correia nova na mesma passagem, encaixada em todas as ranhuras.', 'Solte o tensor devagar e ligue o motor: nada de chiado ao ligar o ar ou ao esterçar parado.']
});
M('tensor_acess', {
  f: 'Soquetes, chave para o tensor.',
  pre: 'Tire a correia de acessórios.',
  d: ['Solte o parafuso do tensor e tire.'],
  m: ['Tensor novo no torque, rolamento girando liso.', 'Correia de volta e teste de chiado.']
});
M('coxim_dir', {
  f: 'Macaco com taco de madeira, soquetes, torquímetro.',
  pre: 'Apoie o motor por baixo, no cárter, com um taco para não amassar.',
  d: ['Solte os parafusos do coxim na carroceria e no suporte do motor.', 'Levante um pouco o motor e tire o coxim.'],
  m: ['Coxim novo, parafusos novos se forem de estiramento.', 'Aperto com o motor em repouso, sem forçar para um lado.']
});
M('coxim_cambio', {
  f: 'Macaco com taco, soquetes, torquímetro.',
  pre: 'O coxim fica sobre o câmbio, sob a bateria: tire a bateria.',
  d: ['Apoie o câmbio por baixo.', 'Solte os parafusos do coxim na carroceria e no câmbio e tire.'],
  m: ['Coxim novo e aperto com o conjunto em repouso.', 'Bateria de volta.']
});
M('coxim_tras', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV,
  d: ['Por baixo, solte o parafuso do tirante no subchassi e o do lado do motor.', 'Tire o tirante.'],
  m: ['Tirante novo, parafusos no torque com o motor em repouso.', 'Tranco ao arrancar ou ao tirar o pé costuma sumir com esse tirante novo.']
});
M('respiro', {
  f: 'Alicate de abraçadeira.',
  pre: 'Motor frio.',
  d: ['Solte as abraçadeiras e puxe a mangueira da tampa de válvulas e do coletor.'],
  m: ['Mangueira nova sem dobras, abraçadeiras firmes. Mangueira rachada é ar falso e lenta irregular.']
});

/* ---------- AR E INJEÇÃO ---------- */
M('tomada_ar', {
  f: 'Chave de fenda.',
  pre: 'Fica na frente do cofre, levando à caixa do filtro.',
  d: ['Solte a presilha e puxe a tomada da caixa do filtro.', 'Solte o suporte no painel frontal.'],
  m: ['Tomada encaixada e limpa, sem folhas na entrada.']
});
M('caixa_filtro', {
  f: 'Chave de fenda ou Torx, alicate de abraçadeira.',
  pre: 'A caixa fica em cima do motor, como uma tampa.',
  d: ['Solte a tomada de ar na frente e o duto atrás, que desce para a borboleta.', 'Solte as presilhas ou parafusos de fixação e a mangueira do respiro, se estiver presa nela.', 'Levante a caixa.'],
  m: ['Caixa assentada nos coxins, sem prender cabos de vela.', 'Duto e tomada sem trincas e com as abraçadeiras firmes: ar sem filtrar destrói o motor.']
});
M('filtro_ar', {
  f: 'Chave de fenda ou Torx.',
  pre: 'Troca a cada revisão (por volta de 10.000 a 15.000 km).',
  d: ['Solte as presilhas ou parafusos da tampa da caixa, em cima do motor.', 'Levante a tampa e tire o filtro, sem deixar cair sujeira no lado limpo.'],
  m: ['Limpe a caixa com pano úmido.', 'Filtro novo assentado na borda e tampa bem fechada.']
});
M('duto_ar', {
  f: 'Chave de fenda, alicate de abraçadeira.',
  pre: 'O duto desce da caixa do filtro, por trás do motor, até a borboleta.',
  d: ['Solte as abraçadeiras das duas pontas e a mangueira do respiro.', 'Puxe o duto.'],
  m: ['Duto sem trincas: rachadura depois da caixa é ar não medido.', 'Abraçadeiras firmes.']
});
M('tbi', {
  f: 'Soquetes, limpa-TBI, pano sem fiapo, scanner (adaptação).',
  pre: BAT + ' Não abra a borboleta com o dedo nem force a engrenagem do motor elétrico.',
  d: ['Solte o duto de ar e desligue o conector da borboleta.', 'Solte os 4 parafusos e tire a borboleta da ponta esquerda do coletor, atrás do motor.'],
  m: ['Limpe a borda e o corpo com produto próprio, sem raspar.', 'Junta nova, parafusos em cruz, conector travado.', LENTA]
});
M('pedal_acel', {
  f: 'Soquetes.',
  pre: BAT,
  d: ['Desligue o conector do sensor do pedal.', 'Solte as porcas do suporte e tire o pedal.'],
  m: ['Pedal firme e conector travado.', 'Ligue a chave e confira no scanner a leitura do pedal de 0 a 100%.']
});
M('coletor_adm', {
  f: 'Soquetes, extensão, juntas novas.',
  pre: BAT + ' ' + ALIVIA + ' O coletor fica atrás do motor, voltado para o corta-fogo.',
  d: ['Tire a caixa do filtro, o duto e a borboleta.', 'Solte galeria e bicos, os tubinhos da partida a frio, as mangueiras de vácuo (servo, purga, respiro) e o sensor MAP.', 'Solte os parafusos do coletor e tire.'],
  m: ['Juntas novas, aperto em cruz, baixo (coletor plástico).', 'Tudo reconectado; procure ar falso com o motor ligado. ' + LENTA]
});
M('sens_map', {
  f: 'Soquete ou Torx.',
  pre: 'O sensor fica em cima do coletor de admissão.',
  d: ['Desligue o conector.', 'Solte o parafuso e puxe o sensor.'],
  m: ['Anel de vedação novo, sensor limpo (óleo do respiro suja a ponta).', 'Apague códigos e confira a leitura de pressão com o motor desligado (pressão do lugar) e em lenta.']
});
M('galeria', {
  f: 'Soquetes, anéis dos bicos.',
  pre: ALIVIA + ' ' + BAT,
  d: ['Solte a linha de combustível no engate rápido.', 'Desligue os conectores dos bicos.', 'Solte os 2 parafusos e puxe a galeria com os bicos.'],
  m: ['Anéis novos untados com óleo de motor.', 'Galeria encaixada reta, parafusos leves.', 'Ligue a chave algumas vezes e procure vazamento antes de dar partida.']
});
M('bicos', {
  f: 'Soquetes, anéis novos, bancada de teste.',
  pre: ALIVIA + ' ' + BAT,
  d: ['Tire a galeria com os bicos.', 'Solte as travas e puxe os bicos.'],
  m: ['Bicos limpos e testados em bancada; anéis novos com óleo.', 'Galeria de volta e teste de vazamento.']
});

/* ---------- COMBUSTÍVEL ---------- */
M('tanque', {
  f: 'Macaco de transmissão, soquetes, bomba de transferência.',
  pre: 'Tanque quase vazio. ' + BAT + ' Trabalhe ventilado e longe de faíscas.',
  d: ['Levante o assento traseiro, desligue o conector da bomba e solte a linha de saída.', 'Por baixo, solte a mangueira do bocal e a do cânister.', 'Apoie o tanque e solte as cintas.', 'Baixe devagar.'],
  m: ['Mangueiras e linhas com abraçadeiras novas.', 'Cintas no torque.', 'Abasteça e confira vazamento e o marcador.']
});
M('bomba_comb', {
  f: 'Chave de anel da bomba, chave de fenda, engate rápido.',
  pre: ALIVIA + ' ' + BAT + ' Tanque com menos de ¼.',
  d: ['Levante o assento traseiro e abra a tampa de acesso no assoalho.', 'Desligue o conector e a linha de saída.', 'Solte o anel de trava e puxe a bomba com a boia, inclinando com cuidado.'],
  m: ['Anel de vedação novo.', 'Bomba na posição certa, anel travado.', 'Ligue a chave e confira o zumbido e vazamentos antes de dar partida.']
});
M('boia', {
  f: 'Chave de anel da bomba.',
  pre: 'A boia é presa à bomba.',
  d: ['Tire a bomba (veja bomba de combustível).', 'Destrave a boia da bomba.'],
  m: ['Boia nova presa à bomba, braço livre.', 'Confira o marcador do painel cheio e vazio.']
});
M('filtro_comb', {
  f: 'Ferramenta de engate rápido, bandeja.',
  pre: ALIVIA + ' ' + ELEV + ' O filtro fica sob o assoalho, na linha que sai do tanque (posição aproximada no modelo).',
  d: ['Ponha a bandeja embaixo e solte os dois engates rápidos.', 'Solte a braçadeira do suporte e tire o filtro.'],
  m: ['Filtro novo com a seta apontando para a frente do carro (para o motor).', 'Engates travados com clique; ligue a chave algumas vezes e procure vazamento.']
});
M('linhas_comb', {
  f: 'Ferramenta de engate rápido, chaves.',
  pre: ALIVIA + ' ' + ELEV,
  d: ['Solte os engates nas pontas.', 'Solte as presilhas ao longo do assoalho.'],
  m: ['Linha sem dobras, presilhas no lugar, engates travados.', 'Teste de vazamento com a chave ligada.']
});
M('bocal', {
  f: 'Soquetes, alicate de abraçadeira.',
  pre: 'Tanque quase vazio.',
  d: ['Abra a portinhola e solte os 2 parafusos.', 'Por baixo, solte a abraçadeira da mangueira do tanque e a do respiro.', 'Puxe o bocal por baixo.'],
  m: ['Mangueiras e abraçadeiras novas.', 'Tampa fechando com clique; tampa mal fechada acende a luz da injeção.']
});
M('canister', {
  f: 'Soquete, alicate de abraçadeira.',
  pre: 'O cânister fica no cofre, perto do para-lama direito (posição aproximada no modelo).',
  d: ['Marque as mangueiras (do tanque e para a purga).', 'Solte as mangueiras e o suporte.'],
  m: ['Mangueiras nos bicos certos, abraçadeiras firmes.', 'Não complete o tanque além do primeiro desarme da bomba: encharca o cânister.']
});
M('purga', {
  f: 'Alicate de abraçadeira.',
  pre: 'A válvula fica perto do coletor de admissão.',
  d: ['Desligue o conector.', 'Solte as mangueiras e o suporte.'],
  m: ['Válvula com a seta para o lado certo, mangueiras firmes.', 'Apague códigos.']
});
M('res_pf', {
  f: 'Chave de fenda, seringa ou bomba de sucção.',
  pre: 'Use só gasolina comum. Se você só usa etanol, renove a gasolina a cada 3 meses. A posição no modelo é aproximada: confira no seu carro antes de abastecer.',
  d: ['Esvazie o reservatório com seringa.', 'Solte a mangueira de saída (tampe para não pingar) e o conector da bombinha.', 'Solte o suporte e tire o reservatório.'],
  m: ['Reservatório no suporte, mangueira com abraçadeira.', 'Abasteça com gasolina comum até a marca, sem transbordar.']
});
M('bomba_pf', {
  f: 'Chave de fenda, alicate de abraçadeira.',
  pre: 'Reservatório vazio. ' + BAT,
  d: ['Desligue o conector.', 'Solte as mangueiras e tire a bombinha do reservatório.'],
  m: ['Bomba nova com borracha de vedação nova (vazamento aqui é cheiro de gasolina no cofre).', 'Ligue e confira o zumbido curto na primeira partida fria com etanol.']
});
M('valv_pf', {
  f: 'Alicate de abraçadeira.',
  pre: 'A válvula fica perto do coletor de admissão.',
  d: ['Desligue o conector.', 'Solte as mangueiras de entrada e de saída e o suporte.'],
  m: ['Válvula na direção da seta, mangueiras firmes.', 'Nível do reservatório caindo sem uso indica válvula aberta.']
});
M('tubos_pf', {
  f: 'Alicate de bico.',
  pre: 'Os tubinhos vão da eletroválvula a cada cilindro, no coletor.',
  d: ['Solte os tubinhos do distribuidor e do coletor.'],
  m: ['Tubinhos novos sem dobras, longe do calor do motor.']
});

/* ---------- IGNIÇÃO E SENSORES ---------- */
M('ecu', {
  f: 'Soquete, chave Torx.',
  pre: BAT + ' Central nova precisa ser codificada ao imobilizador (e às chaves): serviço de concessionária ou de especialista em injeção.',
  d: ['Destrave e desligue o conector da central.', 'Solte o suporte e tire a central (posição aproximada no modelo: perto do para-lama esquerdo).'],
  m: ['Conector seco, travado com clique.', 'Codifique o imobilizador se for central nova; apague códigos. ' + LENTA]
});
M('bobina', {
  f: 'Soquete ou Torx, alicate de cabo de vela.',
  pre: 'Motor frio. ' + CABOS,
  d: ['Marque cada cabo na saída da bobina e puxe pelo terminal, nunca pelo fio.', 'Desligue o conector.', 'Solte os 3 parafusos e tire a bobina da ponta esquerda do cabeçote.'],
  m: ['Bobina no suporte, parafusos leves.', 'Cada cabo na saída do seu cilindro, encaixado até estalar.', 'Ligue e confira falhas no scanner.']
});
M('cabos_vela', {
  f: 'Alicate de cabo de vela, multímetro.',
  pre: 'Motor frio. ' + CABOS,
  d: ['Puxe um cabo de cada vez pelo terminal (na vela e na bobina).', 'Solte o cabo das presilhas da tampa de válvulas.'],
  m: ['Cabo novo do mesmo comprimento, encaixado até estalar nas duas pontas.', 'Passe pelas presilhas, longe do coletor de escape; troque o jogo inteiro de uma vez.']
});
M('velas', {
  f: 'Chave de vela de 16 mm (confira) com extensão, torquímetro, calibre de folga.',
  pre: 'Motor frio. ' + CABOS + ' As velas ficam na frente do cabeçote.',
  d: ['Puxe os cabos pelo terminal, um de cada vez.', 'Sopre em volta das velas.', 'Solte as velas com a chave.'],
  m: ['Velas do tipo indicado para o motor flex, com a folga do manual.', 'Rosqueie à mão até encostar e aperte com torquímetro (≈ 25 N·m).', 'Cada cabo no seu cilindro.']
});
M('sens_ckp', {
  f: 'Soquete.',
  pre: BAT,
  d: ['Siga o cabo até o sensor, no bloco, do lado do câmbio.', 'Desligue o conector e solte o parafuso.', 'Puxe o sensor girando.'],
  m: ['Anel de vedação bom, sensor encaixado até o fim.', 'Conector travado; sem esse sensor o motor não pega.']
});
M('sens_cmp', {
  f: 'Soquete.',
  pre: BAT,
  d: ['O sensor fica no cabeçote, junto à polia do comando: tire a capa de cima da correia se atrapalhar.', 'Desligue o conector e solte o parafuso.'],
  m: ['Sensor no lugar, capa encaixada sem raspar na correia.', 'Apague códigos.']
});
M('sens_ect', {
  f: 'Chave de boca ou alicate de trava, recipiente.',
  pre: 'Motor frio, sistema despressurizado.',
  d: ['Desligue o conector.', 'Tire a trava (ou desenrosque) e puxe o sensor da flange de água, na ponta esquerda do cabeçote. Tenha o sensor novo à mão para perder pouco líquido.'],
  m: ['Anel novo, sensor travado.', 'Complete o líquido. ' + SANGRA]
});
M('sens_det', {
  f: 'Soquete, torquímetro.',
  pre: 'O sensor fica atrás do bloco, sob o coletor de admissão.',
  d: ['Desligue o conector.', 'Solte o parafuso e tire o sensor.'],
  m: ['Faces limpas (sem arruela nem tinta), aperto exato do manual: aperto errado muda a leitura.']
});
M('sonda', {
  f: 'Chave de sonda (com rasgo para o fio), pasta antitravamento.',
  pre: 'Motor morno ajuda a soltar. A sonda dianteira fica no coletor de escape, na frente do motor.',
  d: ['Desligue o conector.', 'Solte a sonda com a chave própria.'],
  m: ['Pasta só na rosca (sonda nova já vem com ela), aperto no torque.', 'Fio preso longe do escape.']
});
M('sonda2', {
  f: 'Chave de sonda, pasta antitravamento.',
  pre: ELEV,
  d: ['Desligue o conector.', 'Solte a sonda do tubo, logo depois do catalisador.'],
  m: ['Pasta na rosca e aperto no torque.', 'Apague códigos e rode para a central reconferir o catalisador.']
});
M('sens_oleo', {
  f: 'Chave de boca, vedação.',
  pre: 'Motor frio. O interruptor fica no suporte do filtro de óleo, na frente do bloco.',
  d: ['Desligue o conector.', 'Solte o interruptor.'],
  m: ['Arruela ou vedação nova, aperto leve.', 'Confira a luz do óleo acender com a chave ligada e apagar com o motor funcionando.']
});

/* ---------- ARREFECIMENTO ---------- */
M('radiador', {
  f: 'Soquetes, alicate de abraçadeira.',
  pre: AGUA + ' ' + BAT,
  d: ['Tire o para-choque dianteiro e a grade, se o seu modelo pedir.', 'Solte as mangueiras superior e inferior e o conector do eletroventilador.', 'Solte os suportes e afaste o condensador do ar sem abrir o circuito.', 'Tire o radiador com o eletroventilador.'],
  m: ['Radiador nos coxins de borracha, condensador preso de volta.', 'Mangueiras com abraçadeiras firmes.', SANGRA]
});
M('ventoinha', {
  f: 'Soquetes, chave de fenda.',
  pre: BAT,
  d: ['Desligue o conector.', 'Solte o defletor do radiador (2 ou 4 parafusos ou presilhas).', 'Tire o defletor com o motor do ventilador por cima.'],
  m: ['Defletor preso e hélice girando livre.', 'Ligue o ar com o motor em lenta: o ventilador tem de ligar.']
});
M('vaso', {
  f: 'Chave de fenda, alicate de abraçadeira.',
  pre: AGUA + ' A tampa do reservatório é a que segura a pressão do sistema.',
  d: ['Esvazie o reservatório.', 'Solte as mangueiras, o conector do sensor de nível (se houver) e o suporte.'],
  m: ['Reservatório no suporte, mangueiras firmes.', 'Tampa boa (teste de pressão): tampa cansada deixa o líquido ferver. ' + SANGRA]
});
M('termostato', {
  f: 'Soquetes, alicate de abraçadeira.',
  pre: AGUA + ' A válvula fica na carcaça de entrada de água, na frente do bloco (posição aproximada no modelo).',
  d: ['Solte a mangueira inferior da carcaça.', 'Solte os 2 parafusos e tire a tampa e a válvula.'],
  m: ['Válvula nova na posição certa, anel novo.', 'Parafusos leves. ' + SANGRA]
});
M('flange_agua', {
  f: 'Soquetes, alicate de abraçadeira.',
  pre: AGUA,
  d: ['Solte as mangueiras (radiador e aquecedor) e o conector do sensor de temperatura.', 'Solte os 3 parafusos e tire a flange da ponta esquerda do cabeçote.'],
  m: ['Flange nova (a plástica trinca com a idade) e anel de vedação novo.', 'Aperto leve e por igual. ' + SANGRA]
});
M('bomba_agua', {
  f: 'As da correia dentada, soquetes, anel de vedação.',
  pre: AGUA + ' A bomba é girada pela correia dentada: troque correia e tensor juntos.',
  d: ['Siga a desmontagem da correia dentada até ela sair. ' + PONTO, 'Solte os 3 parafusos e tire a bomba do bloco.'],
  m: ['Faces limpas, anel novo, parafusos leves por igual.', CORREIA, SANGRA]
});
M('mang_sup', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Solte as abraçadeiras na flange de água e no radiador.', 'Gire a mangueira para soltar.'],
  m: ['Mangueira nova com abraçadeiras novas.', SANGRA]
});
M('mang_inf', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Solte as abraçadeiras no radiador e na carcaça da válvula termostática.'],
  m: ['Mangueira nova, abraçadeiras firmes.', SANGRA]
});
M('mang_aquec', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Solte as mangueiras na flange de água, no corta-fogo e no retorno à bomba.'],
  m: ['Mangueiras sem dobras, abraçadeiras novas.', SANGRA]
});
M('rad_aquec', {
  f: 'Soquetes, chave Philips, espátula.',
  pre: AGUA + ' Serviço grande: o radiador do aquecedor fica dentro da caixa de ar, atrás do painel.',
  d: ['Solte as mangueiras no corta-fogo.', 'Tire os acabamentos de baixo do painel (e o painel, conforme o caso).', 'Abra a caixa de ar e puxe o radiador.'],
  m: ['Radiador novo com vedações.', 'Caixa fechada e painel montado. ' + SANGRA]
});

/* ---------- AR-CONDICIONADO ---------- */
M('compressor', {
  f: 'Máquina de recolhimento e carga, soquetes, anéis novos.',
  pre: GAS + ' ' + BAT,
  d: ['Recolha o gás.', 'Tire a correia de acessórios.', 'Desligue o conector e solte as tubulações (tampe).', 'Solte os 3 parafusos e tire o compressor por baixo.'],
  m: ['Compressor com a quantidade certa de óleo.', 'Anéis novos e parafusos no torque.', 'Vácuo, carga e teste de temperatura na saída de ar.']
});
M('condensador', {
  f: 'Máquina de recolhimento, soquetes, anéis novos.',
  pre: GAS,
  d: ['Recolha o gás.', 'Tire o para-choque, se precisar.', 'Solte as tubulações (tampe) e os suportes e tire.'],
  m: ['Condensador novo com óleo de reposição.', 'Filtro secador novo, vácuo e carga.']
});
M('filtro_secador', {
  f: 'Máquina de recolhimento, chaves.',
  pre: GAS + ' Troque sempre que o circuito for aberto.',
  d: ['Recolha o gás.', 'Solte as conexões e o suporte.'],
  m: ['Filtro novo instalado por último, para não pegar umidade.', 'Vácuo longo e carga.']
});
M('pressostato', {
  f: 'Chave de boca.',
  pre: 'Muitos têm válvula na base e saem sem perder gás; confirme antes.',
  d: ['Desligue o conector.', 'Solte o sensor da linha de alta.'],
  m: ['Anel novo, aperto leve.', 'Teste: o compressor liga e a ventoinha muda de velocidade.']
});
M('tubos_ac', {
  f: 'Máquina de recolhimento, chaves, anéis novos.',
  pre: GAS,
  d: ['Recolha o gás.', 'Solte as conexões e as presilhas.'],
  m: ['Anéis novos untados, conexões firmes.', 'Vácuo e carga; procure vazamento com detector.']
});
M('valv_exp', {
  f: 'Máquina de recolhimento, Allen.',
  pre: GAS,
  d: ['Recolha o gás.', 'Solte a tubulação no corta-fogo e os parafusos da válvula.'],
  m: ['Anéis novos, válvula firme.', 'Vácuo e carga.']
});
M('evaporador', {
  f: 'Máquina de recolhimento, ferramentas de painel.',
  pre: GAS + ' Serviço grande: fica dentro da caixa de ar.',
  d: ['Recolha o gás e solte as tubulações no corta-fogo.', 'Tire o porta-luvas e os acabamentos (ou o painel).', 'Abra a caixa de ar e tire o evaporador.'],
  m: ['Evaporador novo com óleo de reposição.', 'Dreno livre, caixa fechada, vácuo e carga.']
});
M('filtro_cabine', {
  f: 'Chave de fenda ou Torx.',
  pre: 'Troca a cada 10.000 km ou 12 meses. Fica na entrada de ar, sob a grade do torpedo, do lado do passageiro (posição aproximada no modelo; em alguns anos fica atrás do porta-luvas).',
  d: ['Abra o capô e tire a tampa da entrada de ar (ou a grade do torpedo, conforme o ano).', 'Puxe o filtro.'],
  m: ['Filtro novo com a seta de fluxo para baixo (para dentro do carro).', 'Tampa bem encaixada contra água.']
});
M('vent_interno', {
  f: 'Chave Philips.',
  pre: BAT,
  d: ['Tire o acabamento de baixo do porta-luvas.', 'Desligue o conector e solte o motor.'],
  m: ['Motor encaixado, hélice girando livre.', 'Só a velocidade máxima funcionando é resistor queimado.']
});
M('caixa_ar', {
  f: 'Ferramentas de painel.',
  pre: 'Serviço grande: o painel sai.',
  d: ['Recolha o gás e drene o arrefecimento.', 'Tire o painel e solte a caixa do corta-fogo.'],
  m: ['Vedações e dreno no lugar, caixa presa.', 'Vácuo, carga e sangria do arrefecimento.']
});
M('comandos_clima', {
  f: 'Espátula plástica, chave Philips.',
  pre: BAT,
  d: ['Solte a moldura central.', 'Solte os cabos e conectores atrás dos comandos e tire.'],
  m: ['Cabos encaixados nas portinholas da caixa de ar, conectores travados.', 'Teste todas as posições: frio, quente, recirculação e direção do ar.']
});

/* ---------- ESCAPAMENTO ---------- */
M('coletor_esc', {
  f: 'Soquetes, desengripante, juntas e porcas novas.',
  pre: 'Motor frio. O coletor fica na frente do motor, voltado para o radiador.',
  d: ['Tire o protetor de calor e a sonda dianteira.', 'Solte o catalisador do coletor por baixo.', 'Solte as porcas dos prisioneiros e tire o coletor.'],
  m: ['Junta e porcas novas, aperto em cruz do centro para fora.', 'Protetor e sonda de volta. Ligue e ouça: "tic-tic" no frio é junta vazando.']
});
M('protetor', {
  f: 'Soquetes, desengripante.',
  pre: 'Motor frio.',
  d: ['Solte os parafusos do protetor sobre o coletor de escape e tire.'],
  m: ['Protetor firme: solto, ele chocalha em certas rotações.']
});
M('catalisador', {
  f: 'Soquetes, desengripante, juntas novas.',
  pre: ELEV + ' Motor frio.',
  d: ['Desligue as sondas.', 'Solte a flange do coletor e a do tubo dianteiro.', 'Tire o catalisador.'],
  m: ['Juntas e porcas novas.', 'Sondas de volta; apague códigos e rode para a central conferir.']
});
M('tubo_diant', {
  f: 'Soquetes, desengripante, junta nova.',
  pre: ELEV,
  d: ['Solte a sonda traseira, a flange do catalisador e a luva do silencioso.', 'Solte os coxins e tire o tubo com a junta flexível.'],
  m: ['Junta e abraçadeiras novas; flexível sem torcer.', 'Escape sem encostar no assoalho nem no subchassi.']
});
M('silenc_inter', {
  f: 'Soquetes, abraçadeiras novas.',
  pre: ELEV,
  d: ['Solte as luvas e abraçadeiras das pontas.', 'Solte os coxins e tire o silencioso.'],
  m: ['Encaixes com abraçadeiras novas e escape alinhado nos coxins.']
});
M('tubo_tras', {
  f: 'Soquetes, abraçadeiras novas.',
  pre: ELEV,
  d: ['Solte as luvas das pontas e os coxins.', 'Tire o tubo passando por cima do eixo traseiro.'],
  m: ['Tubo sem encostar no eixo nem no tanque.', 'Abraçadeiras e coxins novos.']
});
M('silenc_tras', {
  f: 'Soquetes, abraçadeira nova.',
  pre: ELEV,
  d: ['Solte a luva do tubo traseiro.', 'Puxe o silencioso dos coxins.'],
  m: ['Silencioso nos coxins, ponteira centrada no recorte do para-choque.']
});
M('coxins_esc', {
  f: 'Alicate, desengripante.',
  pre: ELEV + ' Escape frio.',
  d: ['Puxe o coxim do pino com alicate (sabão ajuda).'],
  m: ['Coxim novo; escape sem bater no assoalho.']
});
