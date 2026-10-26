/* ===== Nissan Tiida 1.8 S 2010/2011: código e como desmontar e montar cada peça (motor, admissão, combustível, ignição, arrefecimento, ar-condicionado e escape) =====
   Cada entrada: oem = código Nissan (só os confirmados em catálogo), alt = equivalentes, f = ferramentas, pre = antes de começar, d = desmontar, m = montar. */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['tiida-c11'] = window.CAR_PROC['tiida-c11'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria.';
const LENTA = 'Depois de religar a bateria, limpar ou trocar a borboleta, a central precisa reaprender a borboleta fechada e o ar da marcha lenta: faça o reaprendizado com scanner ou pelo procedimento do manual Nissan.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const AGUA = 'Motor frio. Drene o líquido pelo bujão do radiador (embaixo) num recipiente limpo.';
const SANGRA = 'Complete pelo radiador devagar, com o aquecedor no máximo. Ligue o motor, deixe as ventoinhas ligarem duas vezes e aperte as mangueiras para soltar bolhas; com o motor frio, complete o radiador e o reservatório até MAX.';
const ALIVIA = 'Alivie a pressão de combustível: com o motor ligado, tire o fusível ou o relé da bomba de combustível na caixa do cofre e deixe o motor apagar sozinho; dê mais uma partida de 3 segundos.';
const PONTO = 'Ponto do motor (cilindro 1 em compressão): marca da polia do virabrequim no zero da tampa e as marcas das engrenagens dos dois comandos e do virabrequim alinhadas com os elos marcados da corrente.';
const TUCHO = 'Folga de válvulas a frio, com calibre de lâminas entre o came e o tucho. Fora da faixa, troca-se o tucho por outro de espessura certa: o MR18DE não tem parafuso de regulagem. Valores no manual Nissan.';
const GAS = 'Circuito do ar-condicionado aberto: o gás R-134a precisa ser recolhido com máquina antes, e no fim o circuito leva vácuo e carga pelo peso indicado na etiqueta do capô. Anéis de vedação novos, untados com o óleo do compressor.';

/* ---------- MOTOR ---------- */
M('bloco', {
  f: 'Guincho de motor, macaco de transmissão, soquetes, torquímetro.',
  pre: 'O bloco só sai com o motor fora do carro; na prática é serviço de retífica. ' + BAT,
  d: ['Drene óleo, líquido de arrefecimento e o óleo do câmbio. Solte o compressor do ar do suporte e amarre de lado, sem abrir o circuito.',
    'Tire o capô, a caixa do filtro, a bateria e a bandeja.', 'Solte chicote, mangueiras de água e de vácuo, a linha de combustível (alivie a pressão antes), os tubinhos da partida a frio, os cabos de engate e o tubo da embreagem.',
    'Solte o escape do coletor e tire os semieixos.', 'Apoie o conjunto por baixo, solte os coxins (direito, do câmbio e o tirante traseiro) e baixe o motor com o câmbio.',
    'Na bancada, separe o câmbio e desmonte até sobrar o bloco.'],
  m: ['Bloco limpo e conferido (planicidade, cilindros, galerias desobstruídas) antes de montar qualquer peça. O bloco é de alumínio: cuidado com roscas.', 'Monte virabrequim, pistões, cabeçote e corrente com os apertos do manual.',
    'Reinstale pelos coxins e aperte com o motor em repouso.', 'Abasteça óleo, água (com sangria) e câmbio; confira vazamentos e falhas no scanner. ' + LENTA]
});
M('cabecote', {
  f: 'Soquetes, Torx, torquímetro e goniômetro (transferidor de ângulo), suporte da polia do virabrequim, juntas e cola de vedação.',
  pre: AGUA + ' ' + BAT,
  d: ['Tire as bobinas, a tampa de válvulas, a correia de acessórios e a polia do virabrequim.', 'Apoie o motor por baixo, tire o coxim direito e a tampa da corrente com o motor no ponto. ' + PONTO,
    'Solte o tensor e tire a corrente das engrenagens dos comandos; amarre-a para não cair na tampa.', 'Desligue chicotes, sensores, mangueiras de água e de vácuo, a linha de combustível (alivie a pressão) e os tubinhos da partida a frio.',
    'Solte o coletor de escape do cabeçote (ou o tubo do catalisador).', 'Afrouxe os 10 parafusos do cabeçote na ordem inversa do aperto, de fora para dentro, em várias passadas, e levante o cabeçote reto.'],
  m: ['Limpe as faces sem lixa nem raspador de aço (cabeçote e bloco são de alumínio). Confira a planicidade.', 'Junta nova seca, centrada nos pinos-guia; parafusos com óleo na rosca e sob a cabeça (novos se o manual pedir).',
    'Aperte em espiral de dentro para fora, nas etapas de torque e ângulo do manual Nissan.', 'Corrente no ponto, tensor solto, tampa da corrente com cola nova; gire o motor à mão duas voltas e confira as marcas.',
    'Confira a folga de válvulas, sangre o arrefecimento e troque o óleo.']
});
M('junta_cab', {
  f: 'As mesmas do cabeçote.',
  pre: 'A junta só se troca tirando o cabeçote. Confirme o defeito antes: teste de CO2 no radiador ou teste de vazamento de cilindro.',
  d: ['Siga a desmontagem do cabeçote até ele sair.', 'Tire a junta velha e limpe resíduos das faces e dos furos dos parafusos (óleo ou água no fundo do furo falseia o aperto).', 'Mande conferir a planicidade do cabeçote; se empenou, ele precisa ser plainado dentro do limite.'],
  m: ['Junta nova do mesmo tipo (metálica, multicamada), centrada nos pinos-guia, sem cola.', 'Aperto do cabeçote em espiral, em etapas de torque e ângulo.', 'Complete e sangre o arrefecimento e troque o óleo se estava contaminado.']
});
M('tampa_valv', {
  f: 'Soquete 10 mm, torquímetro de baixa escala, cola de vedação para os cantos.',
  pre: 'Motor frio.',
  d: ['Desligue os conectores e tire as 4 bobinas.', 'Solte a mangueira do respiro e o chicote presos na tampa.', 'Solte os parafusos de fora para dentro, em espiral.', 'Levante a tampa reta.'],
  m: ['Junta nova e vedações novas dos poços das velas; um ponto de cola nos cantos onde a tampa encontra a tampa da corrente.', 'Parafusos em espiral, do centro para fora, com aperto baixo (≈ 10 N·m).', 'Bobinas, conectores e respiro. Ligue e procure vazamento com o motor quente.']
});
M('comando', {
  f: 'Chave fixa para segurar o comando pelo sextavado, soquetes, torquímetro.',
  pre: 'Os dois comandos saem com a tampa de válvulas fora e a corrente solta das engrenagens. Marque tudo antes de soltar.',
  d: ['Tire a tampa de válvulas e ponha o motor no ponto. ' + PONTO, 'Alivie o tensor, segure cada comando pelo sextavado e solte as engrenagens (a da admissão é o próprio variador de fase).',
    'Afrouxe as capas dos mancais dos comandos por igual, em várias passadas, das pontas para o centro.', 'Tire as capas na ordem, marcadas, e levante os comandos; não misture as capas.'],
  m: ['Óleo de motor nos cames, mancais e tuchos.', 'Capas no lugar certo, aperto do centro para as pontas em várias passadas.', 'Engrenagens e corrente no ponto, tensor liberado, duas voltas à mão e conferência das marcas. ' + TUCHO]
});
M('cvtc', {
  f: 'Chave fixa para segurar o comando, soquetes, torquímetro, scanner para apagar o código de falha.',
  pre: 'O variador fica na ponta do comando de admissão, dentro da tampa da corrente; a válvula solenoide que o comanda é parafusada na frente do cabeçote e sai sem abrir nada.',
  d: ['Válvula solenoide: desligue o conector, solte o parafuso e puxe a válvula com cuidado, sem forçar a ponta.', 'Variador: tire a tampa de válvulas, ponha o motor no ponto e alivie o tensor da corrente.',
    'Segure o comando de admissão pelo sextavado e solte o parafuso central do variador.', 'Tire o variador junto com a corrente, sem girar comandos nem virabrequim.'],
  m: ['Válvula: anel de vedação novo, untado com óleo, e telinha do filtro limpa. Aperto leve.', 'Variador no pino do comando, na marca do ponto, com a corrente.', 'Parafuso central no torque do manual, tensor liberado, duas voltas à mão e conferência das marcas.', 'Apague os códigos e confira no scanner se o ângulo do comando segue o pedido da central. Óleo limpo e no nível certo é o que mantém o variador funcionando.']
});
M('tuchos', {
  f: 'Calibre de lâminas, micrômetro, pinça magnética, tuchos de reposição na espessura certa.',
  pre: 'Motor frio, pelo menos 4 horas parado. ' + TUCHO,
  d: ['Tire a tampa de válvulas.', 'Meça a folga de cada válvula com o came virado para cima (gire o virabrequim no sentido de trabalho) e anote.',
    'Para trocar um tucho: tire o comando daquela fila (veja o comando) e puxe o tucho com a pinça magnética.', 'Meça a espessura do tucho velho com o micrômetro.'],
  m: ['Tucho novo = espessura antiga + folga medida − folga ideal; escolha a espessura mais próxima.', 'Óleo de motor no tucho e no furo; cada tucho no seu furo.', 'Comando no lugar, corrente no ponto e nova medição de todas as folgas. Tampa com junta nova.']
});
M('valvulas', {
  f: 'Compressor de molas de válvula, alicate de retentor, pasta de esmerilhar.',
  pre: 'Serviço de bancada, com o cabeçote fora.',
  d: ['Tire o cabeçote, os comandos e os tuchos (na ordem).', 'Comprima cada mola, tire as travas, o prato e a mola.', 'Tire o retentor e a válvula, guardando cada uma na ordem.'],
  m: ['Retentores novos; esmerilhe as sedes se for reaproveitar as válvulas.', 'Monte válvula, mola, prato e travas e dê uma batida leve para assentar.', 'Com o cabeçote no lugar: ' + TUCHO]
});
M('pistoes', {
  f: 'Cinta de anéis, torquímetro, calibre para a folga entre pontas.',
  pre: 'Motor aberto: cabeçote e cárter fora.',
  d: ['Tire o rebordo de carvão do alto do cilindro se houver degrau.', 'Marque cada capa de biela, solte as capas e empurre pistão e biela para cima.', 'Separe o pistão da biela tirando o pino.'],
  m: ['Anéis com as pontas desencontradas e folga entre pontas conferida.', 'Marca do pistão para o lado da corrente.', 'Óleo no cilindro, cinta de anéis, empurre com o cabo do martelo. Capas no lugar com o aperto do manual.']
});
M('bielas', {
  f: 'Torquímetro e goniômetro, Plastigage.',
  pre: 'Com o cárter fora e os mancais acessíveis por baixo.',
  d: ['Marque biela e capa juntas.', 'Solte os 2 parafusos da capa e tire-a com a bronzina.', 'Empurre a biela para cima com o pistão.'],
  m: ['Bronzinas novas se houver marca; confira a folga com Plastigage.', 'Óleo nas bronzinas, capa na mesma biela e posição.', 'Aperto do manual (torque e ângulo; parafusos novos se ele pedir) e gire o virabrequim para conferir que não prende.']
});
M('virabrequim', {
  f: 'Torquímetro, relógio comparador, retentores.',
  pre: 'Sai com o motor desmontado na bancada.',
  d: ['Tire volante, polia, tampa da corrente, corrente e cárter.', 'Solte as bielas.', 'Solte a ponte de mancais em várias passadas, das pontas para o centro, e tire o virabrequim.'],
  m: ['Bronzinas e arruelas de encosto lubrificadas.', 'Ponte de mancais do centro para as pontas, em etapas de torque e ângulo.', 'Confira a folga axial e monte retentores novos nas duas pontas.']
});
M('carter', {
  oem: [['Arruela do bujão', '11026-01M02']],
  f: 'Soquetes 10 e 14 mm, espátula plástica, cola de vedação para motor (tipo indicado pela Nissan).',
  pre: ELEV + ' Motor frio.',
  d: ['Drene o óleo.', 'Cárter de baixo (de aço): solte os parafusos em volta, dos cantos para o meio, e descole com espátula plástica, sem alavancar nas faces.',
    'Cárter de cima (de alumínio, preso também ao câmbio): só sai com o cárter de baixo fora, o escape e o câmbio soltos do cárter; é serviço maior.'],
  m: ['Faces limpas e secas, cordão de cola contínuo por dentro dos furos.', 'Monte em até 5 minutos e aperte por igual (≈ 9 N·m), do centro para fora.', 'Espere a cura indicada na embalagem antes de pôr óleo. Bujão com arruela nova (≈ 34 N·m).']
});
M('bomba_oleo', {
  f: 'Soquetes, torquímetro, cola de vedação, retentor da ponta do virabrequim.',
  pre: 'A bomba fica na tampa da corrente, girada pelo virabrequim: para chegar a ela, a tampa da corrente sai.',
  d: ['Drene o óleo e tire o cárter de baixo e o pescador.', 'Ponha o motor no ponto e tire a correia de acessórios, a polia do virabrequim e a tampa da corrente.', 'Abra a tampa da bomba e confira os rotores e as folgas.'],
  m: ['Rotores lubrificados, folgas dentro do manual e válvula de alívio livre.', 'Pescador com anel novo e telinha limpa.', 'Tampa da corrente com cola nova e retentor novo; encha de óleo e espere a pressão subir antes de acelerar.']
});
M('filtro_oleo', {
  oem: [['Filtro Nissan', 'AY100-NS004']],
  alt: 'Equivalentes de fabricantes de filtro para o MR18DE; confira pela aplicação.',
  f: 'Chave de filtro, bandeja.',
  pre: 'Junto com a troca de óleo, com o motor morno.',
  d: ['Ponha a bandeja embaixo: o filtro fica na frente do bloco, embaixo.', 'Solte o filtro com a chave e termine à mão, mantendo a boca para cima.', 'Confira se o anel velho não ficou colado no bloco.'],
  m: ['Unte o anel do filtro novo com óleo.', 'Rosqueie à mão até encostar e dê mais ⅔ a ¾ de volta.', 'Complete o óleo, ligue até apagar a luz e confira vazamento e nível pela vareta.']
});
M('vareta', {
  f: 'Pano limpo.',
  pre: 'Motor frio ou 5 minutos desligado, carro no plano.',
  d: ['Puxe a vareta pelo anel amarelo.', 'Limpe, enfie até o fim, puxe e leia: o nível certo fica entre as marcas.'],
  m: ['Enfie de volta até o fim. Se o anel de vedação estiver ressecado, troque: falso ar no cárter atrapalha o respiro.']
});
M('tampa_oleo', {
  f: 'Nenhuma.',
  pre: 'Motor desligado.',
  d: ['Gire a tampa no sentido anti-horário e tire.'],
  m: ['Confira o anel de borracha; feche girando até travar. Tampa ausente ou sem anel causa falso ar e cheiro de óleo.']
});
M('volante_motor', {
  f: 'Trava do volante, soquetes, torquímetro, trava-química.',
  pre: 'O câmbio e a embreagem precisam sair antes.',
  d: ['Tire o câmbio e o platô com o disco.', 'Trave o volante e solte os 6 parafusos em cruz.', 'Tire o volante sem bater no anel de rotação (é onde o sensor lê o giro).'],
  m: ['Retentor traseiro do virabrequim novo se havia vazamento.', 'Parafusos novos com trava-química, em cruz, no aperto do manual.', 'Volante retificado ou novo, conforme a medida; monte a embreagem centralizada.']
});
M('corrente', {
  f: 'Suporte da polia do virabrequim, soquetes, torquímetro, cola de vedação, retentor da ponta do virabrequim, kit de corrente (corrente, guias e tensor).',
  pre: 'A corrente não tem troca por quilometragem; troque se houver ruído de chocalho na partida, código de falha de sincronismo ou alongamento medido. ' + BAT,
  d: ['Drene o óleo e o líquido de arrefecimento se o manual pedir; tire as bobinas, a tampa de válvulas e a correia de acessórios.', 'Ponha o motor no ponto. ' + PONTO,
    'Apoie o motor por baixo e tire o coxim direito. Segure a polia e solte o parafuso central; tire a polia.', 'Tire o cárter de baixo e os parafusos da tampa da corrente; descole a tampa com cuidado.',
    'Trave o tensor recolhido com um pino, tire as guias e a corrente.'],
  m: ['Corrente nova com os elos marcados alinhados às marcas das três engrenagens.', 'Guias e tensor novos; tire o pino do tensor só com tudo no lugar.',
    'Tampa com cordão de cola contínuo e retentor novo; polia no torque e ângulo do manual.', 'Gire o motor à mão duas voltas e confira as marcas antes da partida. Óleo novo.']
});
M('tensor_corr', {
  f: 'As mesmas da corrente, pino de trava do tensor.',
  pre: 'O tensor e as guias ficam dentro da tampa da corrente. O tensor é hidráulico: depende de óleo limpo e no nível.',
  d: ['Siga a corrente até a tampa sair.', 'Comprima o tensor e trave com o pino.', 'Solte os parafusos do tensor e das guias e tire.'],
  m: ['Tensor e guias novos (venda em kit com a corrente).', 'Parafusos no aperto do manual; tire o pino só com a corrente no ponto.', 'Tampa com cola nova, óleo novo e duas voltas à mão para conferir.']
});
M('tampa_corr', {
  f: 'Soquetes, espátula plástica, cola de vedação, retentor da ponta do virabrequim, torquímetro.',
  pre: 'Vazamento pela tampa da corrente pede tirar a tampa e refazer a cola; o retentor da polia sai sem tirar a tampa.',
  d: ['Tire a correia de acessórios, a polia do virabrequim, a bomba d’água se ela estiver presa na tampa, e o cárter de baixo.', 'Apoie o motor e tire o coxim direito.', 'Solte os parafusos na ordem inversa do manual e descole a tampa, sem alavancar nas faces.'],
  m: ['Faces limpas, cordão de cola contínuo, anéis novos nas passagens de óleo e de água.', 'Monte em até 5 minutos e aperte na ordem do manual.', 'Retentor novo, polia no torque e espere a cura antes de pôr óleo.']
});
M('polia_vira', {
  f: 'Suporte da polia, soquete do parafuso central, torquímetro, goniômetro.',
  pre: 'O parafuso central é muito apertado.',
  d: ['Tire a correia de acessórios.', 'Segure a polia com o suporte e solte o parafuso central.', 'Puxe a polia; se estiver presa, use extrator pelos furos.'],
  m: ['Confira o retentor atrás da polia.', 'Polia na chaveta, parafuso com óleo na rosca, torque e ângulo do manual.', 'Correia de volta e motor ligado para conferir.']
});
M('correia_acess', {
  f: 'Chave para girar o tensor automático (ou soquete no sextavado do tensor).',
  pre: 'Motor desligado e frio. Fotografe ou desenhe o caminho da correia antes.',
  d: ['Gire o tensor automático para aliviar a correia.', 'Tire a correia de uma polia lisa e solte o tensor devagar.', 'Tire a correia passando pelo coxim direito.'],
  m: ['Correia nova com os frisos encaixados em todas as polias.', 'Gire o tensor, encaixe a última polia e solte o tensor devagar.', 'Ligue e confira o alinhamento; chiado com o ar ligado indica correia velha ou tensor fraco.']
});
M('tensor_acess', {
  f: 'Soquetes, chave para girar o tensor.',
  pre: 'O tensor automático tem mola: substitua se a seta de desgaste estiver fora da faixa ou se o rolamento fizer barulho.',
  d: ['Tire a correia de acessórios.', 'Solte os parafusos do tensor e tire.'],
  m: ['Tensor novo no lugar, parafusos no torque.', 'Correia de volta e confira a seta de desgaste dentro da faixa.']
});
M('coxim_dir', {
  f: 'Macaco com taco de madeira sob o cárter, soquetes, torquímetro.',
  pre: 'Apoie o motor por baixo antes de soltar qualquer coxim.',
  d: ['Apoie o motor com o taco de madeira sob o cárter.', 'Solte as porcas do coxim na tampa da corrente e os parafusos na carroceria.', 'Levante um pouco o motor e tire o coxim.'],
  m: ['Coxim novo, sem forçar o motor para encaixar.', 'Aperto final com o motor em repouso.', 'Ligue e confira vibração na lenta e ao engatar marcha.']
});
M('coxim_cambio', {
  f: 'Macaco com taco de madeira, soquetes, torquímetro.',
  pre: 'Tire a bateria, a bandeja e a caixa do filtro para chegar ao coxim.',
  d: ['Apoie o câmbio por baixo.', 'Solte os parafusos do coxim no câmbio e na longarina.', 'Baixe o câmbio um pouco e tire o coxim.'],
  m: ['Coxim novo, parafusos no torque com o conjunto em repouso.', 'Bandeja, bateria e caixa do filtro de volta.']
});
M('coxim_tras', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV,
  d: ['Por baixo, solte o parafuso do tirante no motor e o do subchassi.', 'Tire o tirante.'],
  m: ['Tirante novo, aperto com o motor em repouso.', 'Confira o tranco ao arrancar e ao trocar de marcha.']
});
M('respiro', {
  f: 'Alicate de abraçadeira.',
  pre: 'Motor frio.',
  d: ['Solte as abraçadeiras e tire a mangueira do respiro da tampa de válvulas e da admissão.', 'Confira a válvula do respiro: ela deve chacoalhar livre.'],
  m: ['Mangueira sem trinca, abraçadeiras firmes.', 'Falso ar no respiro deixa a lenta irregular e acende a luz de injeção.']
});

/* ---------- AR E INJEÇÃO ---------- */
M('tomada_ar', {
  f: 'Chave de fenda, presilhas plásticas de reposição.',
  pre: 'A tomada fica na frente, sobre a travessa.',
  d: ['Solte as presilhas da tomada na travessa.', 'Desencaixe da caixa do filtro e tire.'],
  m: ['Encaixe sem folga na caixa do filtro e presilhas novas. Tomada solta deixa entrar ar quente do cofre.']
});
M('caixa_filtro', {
  f: 'Chave de fenda, soquete 10 mm.',
  pre: 'Motor desligado. Cuidado com o sensor de massa de ar preso na saída.',
  d: ['Desligue o conector do sensor de massa de ar.', 'Solte a abraçadeira do duto na saída e a tomada na entrada.', 'Solte as fixações e tire a caixa para cima, desencaixando os coxins.'],
  m: ['Coxins encaixados, duto e tomada sem folga.', 'Conector do sensor travado. Falso ar depois do sensor deixa a mistura pobre.']
});
M('filtro_ar', {
  oem: '16546-ED500',
  alt: 'Equivalentes de fabricantes de filtro para o Tiida 1.8 e o Versa 1.8; confira pela aplicação.',
  f: 'Nenhuma (só as mãos).',
  pre: 'Motor desligado. Troque a cada 20.000 km ou antes em estrada de terra.',
  d: ['Abra as presilhas da tampa da caixa do filtro, sobre o câmbio.', 'Levante a tampa com o sensor de massa de ar sem puxar pelo fio.', 'Tire o filtro sem deixar cair sujeira no lado limpo.'],
  m: ['Limpe a caixa com pano úmido.', 'Filtro novo assentado na borda, com o lado certo para cima.', 'Tampa e presilhas fechadas por igual.']
});
M('maf', {
  f: 'Chave Torx ou Philips pequena, limpa-contato próprio para sensor de massa de ar.',
  pre: 'Ignição desligada. Nunca toque no fio quente do sensor.',
  d: ['Desligue o conector.', 'Solte os 2 parafusos e puxe o sensor reto para fora da caixa do filtro.'],
  m: ['Se for só limpar: borrife o limpa-contato próprio e deixe secar sozinho, sem pano nem ar comprimido.', 'Anel de vedação bom, parafusos leves, conector travado.', 'Apague os códigos e confira a leitura do sensor no scanner em marcha lenta.']
});
M('duto_ar', {
  f: 'Chave de fenda ou alicate de abraçadeira.',
  pre: 'Motor desligado.',
  d: ['Solte a abraçadeira na saída da caixa do filtro e a da borboleta.', 'Desencaixe a mangueira do respiro e tire o duto.'],
  m: ['Duto sem trinca, principalmente nas dobras.', 'Abraçadeiras firmes nos dois lados: qualquer falso ar depois do sensor de massa de ar desregula a mistura.']
});
M('tbi', {
  f: 'Soquete 10 mm, limpa-TBI, pano, scanner para o reaprendizado.',
  pre: 'Ignição desligada. A borboleta é eletrônica: não abra a borboleta à mão com a ignição ligada nem force o motor dela. ' + BAT,
  d: ['Tire o duto de ar e desligue o conector.', 'Solte as mangueiras de água do aquecimento da borboleta, se houver (tampe com parafusos).', 'Solte os 4 parafusos e tire a borboleta.'],
  m: ['Para limpar: borrife o limpa-TBI no pano e limpe a borda e a borboleta, sem jogar líquido no motor elétrico.', 'Junta nova e parafusos em cruz.', LENTA]
});
M('pedal_acel', {
  f: 'Soquete 10 mm.',
  pre: 'O pedal é eletrônico: o sensor de posição vem no próprio pedal. Ignição desligada.',
  d: ['Desligue o conector no alto do pedal.', 'Solte as porcas e tire o conjunto.'],
  m: ['Pedal no lugar e conector travado.', 'Faça o reaprendizado da posição do pedal solto (procedimento do manual ou scanner).']
});
M('coletor_adm', {
  f: 'Soquetes, extensão longa, juntas novas.',
  pre: 'Motor frio. ' + ALIVIA,
  d: ['Tire o duto de ar e a borboleta.', 'Desligue conectores, a mangueira do servo-freio, a da purga e os tubinhos da partida a frio.', 'Solte a galeria com os bicos se o coletor não passar com eles.', 'Solte os parafusos e porcas do coletor e tire para a frente.'],
  m: ['Juntas novas; o coletor é plástico: aperto baixo, em cruz, do centro para fora.', 'Mangueiras e conectores, galeria com anéis novos nos bicos.', 'Ligue, procure falso ar (chiado) e vazamento de combustível. ' + LENTA]
});
M('galeria', {
  f: 'Soquete 10 mm, anéis de vedação dos bicos.',
  pre: ALIVIA + ' ' + BAT,
  d: ['Desligue os conectores dos bicos.', 'Solte a linha de combustível da galeria (engate rápido), com um pano embaixo.', 'Solte os 2 parafusos e puxe a galeria reto com os bicos.'],
  m: ['Anéis novos untados com óleo de motor limpo.', 'Encaixe os bicos retos nos furos e aperte a galeria por igual.', 'Ligue a ignição várias vezes sem dar partida para encher a linha e procure vazamento.']
});
M('bicos', {
  f: 'Os mesmos da galeria, alicate de trava.',
  pre: 'Os bicos saem presos à galeria.',
  d: ['Tire a galeria com os bicos (veja galeria).', 'Tire a trava de cada bico e puxe-o da galeria.'],
  m: ['Anéis novos em cima e embaixo, untados com óleo de motor.', 'Travas no lugar e galeria de volta.', 'Limpeza e teste de vazão em bancada se a queixa for falha ou consumo.']
});

/* ---------- COMBUSTÍVEL ---------- */
M('tanque', {
  f: 'Macaco de transmissão ou mesa, soquetes, bomba para esvaziar o tanque.',
  pre: ALIVIA + ' ' + BAT + ' Esvazie o tanque. Nada de chama ou faísca por perto.',
  d: ['Tire o assento do banco traseiro e desligue o conector do módulo da bomba.', 'Por baixo, solte a linha de combustível, a mangueira do bocal e a do cânister.', 'Apoie o tanque, solte as cintas e baixe devagar.'],
  m: ['Suba o tanque, encaixe as mangueiras antes de apertar as cintas.', 'Cintas no aperto do manual, conectores e linhas travados.', 'Abasteça um pouco e procure vazamento antes de completar.']
});
M('bomba_comb', {
  f: 'Chave do anel do módulo (ou ponteira de latão), anel de vedação novo.',
  pre: ALIVIA + ' ' + BAT + ' Tanque com menos de um quarto. Área ventilada.',
  d: ['Levante o assento do banco traseiro e a tampa de acesso no assoalho.', 'Desligue o conector e o engate rápido da linha.', 'Solte o anel girando, sem bater com ferramenta de aço.', 'Puxe o módulo inclinando para não entortar a boia.'],
  m: ['Anel de vedação novo e seco.', 'Módulo na posição certa (seta), anel bem apertado.', 'Ligue a ignição 2–3 vezes, confira vazamento e só então dê partida.']
});
M('boia', {
  f: 'As mesmas do módulo da bomba.',
  pre: 'A boia faz parte do módulo da bomba.',
  d: ['Tire o módulo da bomba.', 'Solte a trava da boia e desligue o fiozinho.'],
  m: ['Boia nova encaixada e conectada.', 'Módulo de volta e confira o ponteiro com o tanque em dois níveis diferentes.']
});
M('linhas_comb', {
  f: 'Ferramenta de engate rápido, chaves de linha.',
  pre: ALIVIA + ' ' + ELEV,
  d: ['Solte os engates rápidos nas pontas.', 'Solte as presilhas da linha no assoalho e tire por baixo.'],
  m: ['Linha sem amassado; engates travados com clique (puxe para conferir).', 'Presilhas de volta para não vibrar. Ligue a ignição e procure vazamento.']
});
M('bocal', {
  f: 'Chave Philips, soquetes, alicate de abraçadeira.',
  pre: 'Tanque quase vazio.',
  d: ['Abra a portinhola e solte os 2 parafusos do bocal.', 'Por baixo, solte a abraçadeira da mangueira no tanque e o respiro.', 'Puxe o bocal por baixo.'],
  m: ['Mangueiras sem trinca e abraçadeiras novas.', 'Bocal parafusado com a vedação da portinhola.', 'Abasteça e procure vazamento e cheiro de combustível.']
});
M('canister', {
  f: 'Soquetes, alicate de abraçadeira.',
  pre: ELEV,
  d: ['Por baixo, desligue as mangueiras (marque qual vai onde).', 'Solte o suporte e tire o cânister.'],
  m: ['Mangueiras nos bicos certos, sem dobra.', 'Cânister encharcado (de abastecer além do clique) precisa ser trocado; abasteça só até o primeiro desarme da bomba.']
});
M('purga', {
  f: 'Nenhuma ou chave de fenda.',
  pre: 'Ignição desligada.',
  d: ['Desligue o conector e as duas mangueiras.', 'Solte a válvula do suporte no coletor.'],
  m: ['Válvula com a seta no sentido do motor.', 'Mangueiras firmes. Válvula travada aberta deixa a lenta irregular logo depois de abastecer.']
});
M('res_pf', {
  f: 'Chave de fenda, alicate de abraçadeira.',
  pre: 'Ignição desligada e motor frio. Gasolina comum no reservatório, nunca etanol. A posição exata varia: confira no seu carro.',
  d: ['Esvazie o reservatório com uma seringa.', 'Desligue o conector da bombinha e solte a mangueira de saída.', 'Solte o suporte e tire o reservatório.'],
  m: ['Reservatório limpo, mangueira nova se estiver ressecada.', 'Encha com gasolina comum até o nível indicado e troque a cada 3 meses se você só roda com etanol.']
});
M('bomba_pf', {
  f: 'Alicate de abraçadeira, multímetro.',
  pre: 'A bombinha fica presa ao reservatório da partida a frio.',
  d: ['Esvazie o reservatório.', 'Desligue o conector e as mangueiras.', 'Solte a bombinha do reservatório.'],
  m: ['Bombinha nova com vedação; teste ligando a ignição com o motor frio e etanol no tanque.', 'Mangueiras firmes e sem vazamento.']
});
M('valv_pf', {
  f: 'Alicate de abraçadeira, multímetro.',
  pre: 'Ignição desligada. Fica perto do coletor de admissão.',
  d: ['Desligue o conector.', 'Solte as mangueiras de entrada e de saída (tampe para não escorrer gasolina).', 'Solte a válvula do suporte.'],
  m: ['Válvula com a seta no sentido do fluxo, mangueiras firmes.', 'Válvula que não fecha escorre gasolina na admissão e afoga o motor; teste a vedação.']
});
M('tubos_pf', {
  f: 'Alicate de bico, presilhas novas.',
  pre: 'Motor frio.',
  d: ['Solte os tubinhos dos bicos da partida a frio no coletor.', 'Solte as presilhas e tire o chicote de tubos.'],
  m: ['Tubos sem trinca e bicos desentupidos.', 'Presilhas no lugar, longe do escape.']
});

/* ---------- IGNIÇÃO E SENSORES ---------- */
M('ecu', {
  f: 'Soquete 10 mm.',
  pre: BAT + ' Uma central nova ou de outro carro precisa ser programada (imobilizador e chaves) em concessionária ou com equipamento próprio.',
  d: ['Desligue o negativo e espere alguns minutos.', 'Destrave e desligue os conectores da central.', 'Solte o suporte e tire a central.'],
  m: ['Conectores secos, limpos e travados.', 'Programe a central se for nova e faça o reaprendizado. ' + LENTA]
});
M('bobinas', {
  f: 'Soquete 10 mm.',
  pre: 'Motor desligado.',
  d: ['Desligue o conector de cada bobina.', 'Solte o parafuso.', 'Puxe a bobina reta para cima, girando um pouco.'],
  m: ['Uma gota de graxa dielétrica na borracha.', 'Encaixe até o fundo, parafuso leve e conector travado.']
});
M('velas', {
  alt: 'O código Nissan 22401-ED815 aparece para o MR18DE a gasolina; para o flex, confirme no manual ou no balcão pelo chassi.',
  f: 'Chave de vela de 14 mm com borracha (longa), extensão, torquímetro, calibre de folga.',
  pre: 'Motor frio. Velas de irídio: não limpe o eletrodo com escova nem ajuste a folga à força.',
  d: ['Tire as 4 bobinas.', 'Sopre os poços com ar comprimido.', 'Solte as velas e tire com a chave magnética.'],
  m: ['Confira a folga (≈ 1,1 mm) só olhando; vela nova já vem regulada.', 'Rosqueie à mão até encostar e aperte com torquímetro (≈ 20 N·m).', 'Bobinas de volta, cada uma no seu cilindro.']
});
M('sens_ckp', {
  f: 'Soquete 10 mm, anel novo.',
  pre: ELEV + ' Fica atrás do bloco, junto ao câmbio, lendo o volante.',
  d: ['Por baixo, desligue o conector.', 'Solte o parafuso e puxe o sensor girando.'],
  m: ['Anel de vedação novo untado com óleo.', 'Sensor até o fundo, parafuso leve, conector travado. Sem esse sinal o motor não pega.']
});
M('sens_cmp', {
  f: 'Soquete 10 mm, anéis novos.',
  pre: 'São dois sensores na ponta esquerda do cabeçote, um para cada comando.',
  d: ['Desligue o conector.', 'Solte o parafuso e puxe o sensor.'],
  m: ['Anel novo, sensor até o fundo.', 'Apague os códigos e confira no scanner o sinal dos dois comandos.']
});
M('sens_ect', {
  f: 'Chave do sensor, bandeja.',
  pre: 'Motor frio. Sai um pouco de líquido.',
  d: ['Desligue o conector.', 'Solte o sensor com a chave e tampe o furo com o dedo para perder pouco líquido.'],
  m: ['Arruela ou anel novo, sensor no torque.', 'Complete e sangre o arrefecimento. Sensor ruim deixa a ventoinha ligada direto ou a partida a frio errada.']
});
M('sens_det', {
  f: 'Soquete, torquímetro.',
  pre: 'Fica na frente do bloco, sob o coletor de admissão: o coletor sai antes.',
  d: ['Tire o coletor de admissão (veja coletor).', 'Desligue o conector e solte o parafuso.'],
  m: ['Face do bloco limpa, sem arruela extra.', 'Aperto exato do manual: aperto errado muda a leitura e a central atrasa a ignição à toa.']
});
M('sonda', {
  f: 'Chave de sonda (soquete com rasgo), pasta antitravamento.',
  pre: 'Motor morno ajuda a soltar. Desligue o conector antes de girar.',
  d: ['Desligue o conector.', 'Solte a sonda com a chave própria.', 'Tire girando o fio junto, sem torcer.'],
  m: ['Sonda nova já vem com pasta na rosca; não deixe pasta no sensor.', 'Aperto ≈ 45 N·m, fio longe do escape.', 'Apague os códigos e deixe a central reaprender (alguns minutos rodando). No flex, a sonda é o que ensina a central a proporção de etanol.']
});
M('sonda2', {
  f: 'Chave de sonda, pasta antitravamento.',
  pre: ELEV,
  d: ['Desligue o conector.', 'Solte a sonda depois do catalisador.'],
  m: ['Sonda nova, aperto ≈ 45 N·m.', 'Apague os códigos; sonda traseira ruim acusa catalisador ineficiente.']
});
M('sens_oleo', {
  f: 'Chave de boca, vedação de rosca.',
  pre: 'Motor frio.',
  d: ['Desligue o conector.', 'Solte o interruptor do bloco.'],
  m: ['Vedação na rosca, aperto moderado.', 'Ligue e confira a luz apagar e vazamento. Luz acesa com motor em giro: desligue e confira a pressão com manômetro.']
});

/* ---------- ARREFECIMENTO ---------- */
M('radiador', {
  f: 'Soquetes, alicate de abraçadeira, bandeja.',
  pre: AGUA,
  d: ['Desligue os conectores das ventoinhas e tire o conjunto das ventoinhas.', 'Solte as mangueiras superior e inferior.', 'Solte os suportes de cima e levante o radiador, sem bater no condensador.'],
  m: ['Coxins de borracha no lugar.', 'Mangueiras e abraçadeiras firmes.', 'Aditivo indicado pela Nissan na proporção certa. ' + SANGRA]
});
M('tampa_rad', {
  f: 'Pano grosso.',
  pre: 'Nunca abra com o motor quente.',
  d: ['Com o motor frio, pressione e gire a tampa devagar.'],
  m: ['Tampa com a borracha boa e a pressão certa. Tampa fraca deixa ferver e perder líquido.']
});
M('ventoinha', {
  f: 'Soquete 10 mm.',
  pre: BAT,
  d: ['Desligue os conectores das duas ventoinhas.', 'Solte os parafusos da moldura no radiador.', 'Levante o conjunto por cima.'],
  m: ['Conjunto encaixado nos pinos de baixo, parafusos firmes.', 'Ligue o ar-condicionado: as duas ventoinhas devem girar. Com o motor quente, devem ligar sozinhas.']
});
M('vaso', {
  f: 'Alicate de abraçadeira, soquete.',
  pre: 'Motor frio.',
  d: ['Esvazie o reservatório com seringa.', 'Solte a mangueira do radiador e o suporte.', 'Levante o reservatório.'],
  m: ['Reservatório limpo, mangueira firme.', 'Nível entre MIN e MAX com o motor frio.']
});
M('termostato', {
  f: 'Soquetes, anel novo, bandeja.',
  pre: AGUA,
  d: ['Solte a mangueira da carcaça da válvula.', 'Solte os 2 parafusos e tire a carcaça.', 'Tire a válvula reparando na posição do furinho de respiro.'],
  m: ['Anel novo, válvula com o respiro para cima.', 'Carcaça no aperto leve.', SANGRA]
});
M('bomba_agua', {
  f: 'Soquetes, chave para girar o tensor, anel novo, bandeja.',
  pre: AGUA + ' A bomba é girada pela correia de acessórios e fica presa na tampa da corrente.',
  d: ['Afrouxe os parafusos da polia da bomba com a correia ainda esticada.', 'Alivie o tensor e tire a correia de acessórios.', 'Tire a polia e os parafusos da bomba; puxe a bomba da tampa.'],
  m: ['Anel novo e faces limpas.', 'Parafusos em cruz, polia e correia de volta.', SANGRA + ' Confira vazamento pelo furinho de dreno da bomba.']
});
M('mang_sup', {
  f: 'Alicate de abraçadeira, bandeja.',
  pre: AGUA,
  d: ['Solte as abraçadeiras nas duas pontas.', 'Gire a mangueira para descolar e puxe.'],
  m: ['Mangueira nova sem dobra, abraçadeiras atrás do ressalto.', SANGRA]
});
M('mang_inf', {
  f: 'Alicate de abraçadeira, bandeja.',
  pre: AGUA + ' ' + ELEV,
  d: ['Por baixo, solte as abraçadeiras no radiador e no motor.', 'Puxe a mangueira.'],
  m: ['Mangueira nova sem dobra, abraçadeiras firmes.', SANGRA]
});
M('mang_aquec', {
  f: 'Alicate de abraçadeira, bandeja.',
  pre: AGUA,
  d: ['Solte as abraçadeiras junto ao corta-fogo e no motor.', 'Puxe as mangueiras com cuidado para não quebrar os tubos do radiador do aquecedor.'],
  m: ['Mangueiras novas, abraçadeiras firmes.', SANGRA + ' Aquecedor frio depois da troca é bolha de ar.']
});
M('rad_aquec', {
  f: 'Soquetes, chaves Philips, bandeja, toalhas.',
  pre: AGUA + ' Serviço grande: o radiador do aquecedor fica dentro da caixa de ar, atrás do painel.',
  d: ['Solte as mangueiras do aquecedor no corta-fogo.', 'Tire o console e os acabamentos de baixo do painel; em alguns carros o painel precisa sair.', 'Solte a tampa da caixa de ar e puxe o radiador do aquecedor.'],
  m: ['Espumas de vedação no lugar.', 'Mangueiras firmes.', SANGRA + ' Embaçado oleoso no para-brisa e cheiro doce indicam vazamento nele.']
});

/* ---------- AR-CONDICIONADO ---------- */
M('compressor', {
  f: 'Soquetes, chave para o tensor, máquina de recolhimento e carga.',
  pre: GAS + ' ' + BAT,
  d: ['Recolha o gás.', 'Tire a correia de acessórios.', 'Desligue o conector e solte as duas linhas do compressor (tampe na hora).', 'Solte os 3 parafusos e tire o compressor por baixo.'],
  m: ['Compressor novo com o óleo na quantidade indicada.', 'Parafusos no torque, linhas com anéis novos.', 'Vácuo e carga pelo peso da etiqueta; ligue e confira as pressões.']
});
M('condensador', {
  f: 'Soquetes, chaves de linha, máquina de recolhimento e carga.',
  pre: GAS,
  d: ['Recolha o gás e tire o para-choque dianteiro.', 'Solte as linhas do condensador.', 'Solte os suportes e tire o condensador para cima ou para a frente, sem amassar as aletas.'],
  m: ['Condensador novo com anéis novos.', 'Filtro secador novo junto.', 'Vácuo e carga pelo peso da etiqueta.']
});
M('filtro_secador', {
  f: 'Chave sextavada ou chaves de linha, máquina de recolhimento e carga.',
  pre: GAS + ' Troque sempre que o circuito for aberto.',
  d: ['Recolha o gás.', 'Solte o filtro do condensador ou as linhas dele.', 'Tire o filtro.'],
  m: ['Filtro novo, fechado até a hora de montar.', 'Anéis novos, vácuo demorado e carga.']
});
M('pressostato', {
  f: 'Chave de boca.',
  pre: 'Em muitos carros a válvula embaixo segura o gás e ele sai sem recolher; se não tiver certeza, recolha o gás.',
  d: ['Desligue o conector.', 'Solte o sensor da linha.'],
  m: ['Anel novo untado com óleo do compressor.', 'Conector travado; sem esse sinal o compressor não liga.']
});
M('tubos_ac', {
  f: 'Chaves de linha, máquina de recolhimento e carga.',
  pre: GAS,
  d: ['Recolha o gás.', 'Solte as pontas da linha e as presilhas.', 'Tire a linha sem dobrar.'],
  m: ['Anéis novos, presilhas no lugar.', 'Vácuo, carga e teste de vazamento.']
});
M('valv_exp', {
  f: 'Chave Allen, máquina de recolhimento e carga.',
  pre: GAS + ' A válvula fica no corta-fogo, na entrada do evaporador.',
  d: ['Recolha o gás.', 'Solte a flange das linhas e tire a válvula.'],
  m: ['Válvula nova com anéis novos.', 'Vácuo, carga e teste do frio na saída do painel.']
});
M('evaporador', {
  f: 'Ferramentas de painel, máquina de recolhimento e carga.',
  pre: GAS + ' Serviço grande: fica dentro da caixa de ar, atrás do painel.',
  d: ['Recolha o gás e solte as linhas no corta-fogo.', 'Tire os acabamentos de baixo do painel (ou o painel).', 'Abra a caixa de ar e tire o evaporador.'],
  m: ['Evaporador novo, dreno desobstruído.', 'Vácuo, carga e teste. Cheiro de mofo pede limpeza com produto próprio, não troca.']
});
M('filtro_cabine', {
  f: 'Nenhuma.',
  pre: 'Fica atrás do porta-luvas.',
  d: ['Esvazie o porta-luvas e solte os batentes laterais para ele descer.', 'Abra a tampa do filtro e puxe.'],
  m: ['Filtro novo com a seta do fluxo para o lado certo.', 'Tampa e porta-luvas de volta.']
});
M('vent_interno', {
  f: 'Chave Philips, soquete.',
  pre: BAT,
  d: ['Por baixo do painel, do lado do passageiro, desligue o conector.', 'Solte os parafusos e gire o ventilador para baixo.'],
  m: ['Ventilador encaixado e conector travado.', 'Teste todas as velocidades; se só a máxima funciona, o problema é o resistor.']
});
M('caixa_ar', {
  f: 'Ferramentas de painel.',
  pre: 'Serviço grande: a caixa fica atrás do painel. ' + BAT,
  d: ['Recolha o gás e drene o arrefecimento.', 'Tire o painel.', 'Solte as linhas, as mangueiras e os parafusos da caixa e tire.'],
  m: ['Espumas e dreno no lugar.', 'Painel de volta, vácuo e carga do ar, sangria do arrefecimento.']
});
M('comandos_clima', {
  f: 'Espátula plástica, chave Philips.',
  pre: BAT,
  d: ['Solte os acabamentos do console central com a espátula.', 'Solte os parafusos do painel de comandos e puxe, desligando conectores e cabos.'],
  m: ['Cabos encaixados nas posições certas, conectores travados.', 'Teste todas as posições: frio, quente, direção do ar e recirculação.']
});

/* ---------- ESCAPAMENTO ---------- */
M('coletor_esc', {
  f: 'Soquetes, desengripante, juntas e porcas novas.',
  pre: 'Motor frio. Desengripante nas porcas na véspera.',
  d: ['Tire o protetor de calor.', 'Desligue a sonda dianteira.', 'Solte o catalisador do coletor e as porcas do cabeçote.', 'Tire o coletor para cima.'],
  m: ['Juntas e porcas novas, aperto em cruz do centro para fora.', 'Protetor de volta; ligue e procure vazamento (barulho de "tic" no frio).']
});
M('protetor', {
  f: 'Soquete 10 mm, desengripante.',
  pre: 'Motor frio.',
  d: ['Solte os parafusos do protetor.', 'Tire o protetor.'],
  m: ['Protetor sem trinca; chocalho metálico em certas rotações costuma ser protetor solto.']
});
M('catalisador', {
  f: 'Soquetes, desengripante, juntas e porcas novas.',
  pre: ELEV + ' Motor frio.',
  d: ['Desligue as sondas.', 'Solte o catalisador do coletor e do tubo dianteiro.', 'Tire o catalisador por baixo.'],
  m: ['Juntas e porcas novas, sondas de volta.', 'Catalisador entupido tira força e esquenta o escape; não remova o catalisador.']
});
M('tubo_diant', {
  f: 'Soquetes, desengripante, juntas novas.',
  pre: ELEV,
  d: ['Solte as flanges das pontas.', 'Desencaixe as borrachas e tire o tubo.'],
  m: ['Juntas e porcas novas, flexível sem esticar.', 'Borrachas no lugar.']
});
M('silenc_inter', {
  f: 'Soquetes, desengripante, abraçadeiras.',
  pre: ELEV,
  d: ['Solte as abraçadeiras ou flanges.', 'Desencaixe as borrachas e tire.'],
  m: ['Peças alinhadas antes de apertar, sem encostar no assoalho.']
});
M('tubo_tras', {
  f: 'Soquetes, desengripante, abraçadeiras.',
  pre: ELEV,
  d: ['Solte as abraçadeiras e as borrachas.', 'Tire o tubo passando por cima do eixo traseiro.'],
  m: ['Tubo sem encostar no eixo de torção quando a suspensão trabalha.', 'Abraçadeiras e borrachas firmes.']
});
M('silenc_tras', {
  f: 'Soquetes, desengripante, abraçadeira.',
  pre: ELEV,
  d: ['Solte a abraçadeira ou flange da entrada.', 'Desencaixe as borrachas e tire.'],
  m: ['Silencioso alinhado, ponteira centrada no para-choque.', 'Borrachas novas se estiverem rachadas.']
});
M('coxins_esc', {
  f: 'Alavanca ou alicate de coxim, lubrificante à base de água.',
  pre: ELEV + ' Escape frio.',
  d: ['Apoie o escape.', 'Puxe a borracha dos pinos com a alavanca.'],
  m: ['Borracha nova com lubrificante à base de água (óleo apodrece a borracha).', 'Escape centralizado, sem encostar na carroceria.']
});
