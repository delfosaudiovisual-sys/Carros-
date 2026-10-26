/* ===== Peugeot 206 Sensation 1.4 flex 2007 (2 portas, sem ar, sem airbag, direção mecânica) ===== */
(window.CARS = window.CARS || []).push({
  id: 'peugeot-206', order: 1, storeKey: 'p206', codePrefix: '206', plate: 'PGT2A06',
  badge: '1.4', name: 'Peugeot 206', short: '206', title: 'Peugeot 206 Sensation', sub: '1.4 flex 2007, 2 portas, sem ar, sem airbag, direção mecânica',
  kmDefault: 180355, size: [3.835, 1.652], wheelR: 0.2915,
  profile: { top: [[-1.87, .55], [-1.80, .615], [-1.66, .86], [-1.35, 1.23], [-1.10, 1.39], [-0.6, 1.43], [-0.2, 1.43], [0.23, 1.40], [0.5, 1.21], [0.82, 1.00], [1.2, .93], [1.5, .87], [1.80, .79], [1.90, .71], [1.945, .61]],
    rearLow: 0.30, frontLow: 0.26, floor: 0.19, wheels: [1.2215, -1.2215], arch: 0.375, wheelR: 0.2915, wheelY: 0.29 },
  oemLabel: 'Código PSA', oemHint: 'Código original PSA: confirme pelo número do chassi (VIN) no balcão de peças.',
  open: { hood: 'capo', tail: 'tampa_tras', door: 'portas' },
  xrayExtra: ['farois', 'lanternas', 'piscas_lat', 'luz_freio', 'luz_placa', 'neblina_tras', 'bocal'],
  boxIds: ['monobloco', 'pneus', 'para_choque_d', 'para_choque_t', 'teto', 'retrovisores', 'laterais'],
  welcome: ['correia_dent', 'res_pf', 'bobina', 'termostato', 'paralamas', 'portas'],
  maintNote: 'Intervalos do plano Peugeot para o 1.4 flex quando conhecidos; itens marcados como recomendação de oficina não são de fábrica. O manual do seu carro manda.',
  about: '<p>A carroceria é um hatch genérico com as medidas reais do carro, em preto, com rodas de aço e calotas, dividido nas peças de lataria: cada uma com suas frestas, dobradiças, fechaduras, pontos de solda e colas. Não reproduz o desenho externo da marca.</p><p>A mecânica segue o 1.4 flex (TU3JP, Bosch ME 7.4.4, câmbio MA/5, partida a frio), sem ar-condicionado, sem airbag e com direção mecânica. Posições e quantidades de fixadores da lataria são as típicas desse tipo de carro, e a geometria é simplificada.</p><p>Dados técnicos: ficha técnica da versão e matérias técnicas sobre o TU3JP (O Mecânico, Oficina Brasil).</p>',

  data() {
/* ===== Catálogo: sistemas e peças (parte 1) ===== */
const SYS = {
  motor: { n: 'Motor', c: '#D0602A', d: 'O TU3JP 1.4 8V: bloco, cabeçote, peças móveis, distribuição e coxins.' },
  ar:    { n: 'Ar e injeção', c: '#E3A21A', d: 'Do filtro de ar até os bicos: dosagem de ar e combustível.' },
  comb:  { n: 'Combustível', c: '#3F9D4A', d: 'Tanque, bomba, filtro, linhas, cânister e a partida a frio do flex.' },
  ign:   { n: 'Ignição e sensores', c: '#7A5AE0', d: 'Central Bosch ME 7.4.4, bobina, velas e os sensores que ela lê.' },
  arref: { n: 'Arrefecimento', c: '#1F8FC0', d: 'Bomba d’água, válvula termostática, radiador, ventoinha e mangueiras.' },
  esc:   { n: 'Escapamento', c: '#8C735F', d: 'Do coletor à ponteira, com sonda e catalisador.' },
  ele:   { n: 'Elétrica', c: '#D6B000', d: 'Bateria, carga, partida, módulos, fusíveis, luzes e limpadores.' },
  trans: { n: 'Transmissão', c: '#B0412A', d: 'Embreagem, câmbio MA/5, diferencial e semieixos.' },
  freio: { n: 'Freios', c: '#D2334A', d: 'Servo-freio, cilindro-mestre, discos na frente e tambores atrás.' },
  susp:  { n: 'Suspensão e rodas', c: '#9B3FA8', d: 'McPherson na frente, braços arrastados com barras de torção atrás.' },
  dir:   { n: 'Direção', c: '#1FA394', d: 'Pinhão e cremalheira, mecânica (sem assistência).' },
  carro: { n: 'Carroceria', c: '#8FA6C4', d: 'Cada peça da lataria, como ela é presa e como sai: parafusada, soldada, colada ou encaixada.' },
  int:   { n: 'Interior', c: '#A8845A', d: 'Painel, instrumentos, ventilação (sem ar-condicionado), bancos e cintos.' }
};

const PARTS = {};
function P(id, n, s, w, f, m, r) { PARTS[id] = { id, n, s, w, f, m, r: r ? r.split(' ') : [] }; }
function E(id, ft, e) { PARTS[id].ft = ft; PARTS[id].e = e; }   // como a peça é presa

/* ---------- MOTOR ---------- */
P('bloco', 'Bloco do motor', 'motor',
  'Centro do cofre: a correia fica à direita e o câmbio à esquerda.',
  'Estrutura principal do TU3JP (1.360 cm³). É de alumínio e recebe as quatro camisas dos cilindros, o virabrequim nos mancais e as galerias por onde circulam óleo e líquido de arrefecimento.',
  'Não tem troca programada. Vigie vazamentos nas juntas e nunca deixe o motor ferver: o alumínio empena e a junta do cabeçote é a primeira a sofrer.',
  'camisas virabrequim cabecote carter bomba_agua coxim_dir sens_det');
P('camisas', 'Camisas dos cilindros (4)', 'motor',
  'Dentro do bloco, uma por cilindro. O cilindro 1 fica do lado do câmbio.',
  'Tubos de ferro onde os pistões correm (75 mm de diâmetro, 77 mm de curso). São camisas úmidas: o líquido de arrefecimento banha a parte de fora e anéis de vedação na base separam água e óleo.',
  'Só se mexe numa reforma. Com o cabeçote fora, não gire o motor sem travar as camisas: elas se deslocam e passam a vazar.',
  'bloco pistoes junta_cab bomba_agua');
P('cabecote', 'Cabeçote', 'motor',
  'Em cima do bloco, sob a tampa de válvulas.',
  'Fecha os cilindros por cima e forma as câmaras de combustão. Nele ficam as 8 válvulas, o comando, o eixo de balancins e as velas; a admissão entra pelo lado de trás e o escape sai pela frente.',
  'Superaquecimento empena o cabeçote. Na remontagem os parafusos são elásticos, com aperto angular. A folga de válvulas se confere com o motor frio.',
  'bloco junta_cab comando valvulas balancins velas coletor_adm coletor_esc termostato');
P('junta_cab', 'Junta do cabeçote', 'motor',
  'Entre o bloco e o cabeçote.',
  'Vedação que segura a pressão da queima e mantém separados os canais de óleo e de água.',
  'Queima com superaquecimento. Sinais: fumaça branca de cheiro doce, água sumindo sem vazamento visível, bolhas no reservatório de expansão e óleo com aspecto de maionese.',
  'cabecote bloco camisas vaso');
P('tampa_valv', 'Tampa de válvulas', 'motor',
  'No topo do motor; a bobina fica encaixada sobre ela.',
  'Cobre o comando e os balancins, segura o óleo que lubrifica a parte de cima e tem a saída do respiro do cárter.',
  'A junta de borracha resseca e pinga óleo no coletor de escape (cheiro de queimado). Troque junta e borrachas sempre que abrir e cuide dos espaçadores e do defletor de óleo.',
  'cabecote bobina respiro tampa_oleo balancins');
P('comando', 'Comando de válvulas', 'motor',
  'Dentro do cabeçote, ao longo do motor; a polia fica na ponta direita.',
  'Eixo com ressaltos (cames) que empurram os balancins para abrir cada válvula na hora certa. Gira na metade da rotação do virabrequim, sincronizado pela correia dentada.',
  'Dura a vida do motor com óleo em dia. Correia fora do ponto ou rompida faz as válvulas baterem nos pistões: é um motor de interferência.',
  'correia_dent polia_comando balancins valvulas cabecote');
P('balancins', 'Eixo de balancins', 'motor',
  'Sob a tampa de válvulas, sobre o comando.',
  'Alavancas com roletes que levam o movimento do comando até as válvulas. Cada uma tem um parafuso de regulagem da folga.',
  'Folga com o motor frio: admissão 0,20 mm e escape 0,40 mm (tolerância de +0,05). Folga grande faz ruído de “tucho batendo”; folga pequena pode queimar válvula.',
  'comando valvulas cabecote tampa_valv');
P('valvulas', 'Válvulas (8) e molas', 'motor',
  'No cabeçote: 4 de admissão atrás e 4 de escape na frente.',
  'Abrem para a mistura ar-combustível entrar e para os gases queimados saírem. As molas fecham cada válvula depois que o came passa.',
  'Dependem da folga certa e da correia no ponto. Fumaça azul ao acelerar depois de parado pode ser retentor de válvula gasto.',
  'balancins comando cabecote pistoes coletor_adm coletor_esc');
P('pistoes', 'Pistões (4) e anéis', 'motor',
  'Dentro das camisas; a seta no topo aponta para o lado da correia.',
  'Recebem o empurrão da combustão e o passam às bielas. Os anéis vedam a compressão e raspam o óleo da parede do cilindro.',
  'Anéis gastos causam consumo de óleo, fumaça azul e perda de força. Um teste de compressão mostra a saúde deles.',
  'camisas bielas valvulas velas virabrequim');
P('bielas', 'Bielas (4)', 'motor',
  'Entre os pistões e o virabrequim.',
  'Transformam o sobe-e-desce dos pistões no giro do virabrequim.',
  'Batida metálica grave que acompanha a rotação pode ser bronzina de biela: pare o carro e chame o guincho.',
  'pistoes virabrequim bomba_oleo');
P('virabrequim', 'Virabrequim', 'motor',
  'Na base do bloco, atravessando o motor.',
  'Eixo de manivelas girado pelas bielas. Na ponta esquerda leva o volante do motor; na direita, a engrenagem da correia dentada e a polia dos acessórios. Também aciona a bomba de óleo por corrente.',
  'Dura muito com óleo limpo. Os retentores das pontas podem vazar com a idade. Para soltar a polia é preciso travar o virabrequim com ferramenta própria.',
  'bielas volante_motor polia_vira correia_dent bomba_oleo sens_rot bloco');
P('carter', 'Cárter', 'motor',
  'Embaixo do motor; é a peça mais baixa da frente do carro.',
  'Reservatório do óleo do motor, de alumínio e vedado com cola. O bujão de drenagem fica no fundo.',
  'Óleo a cada 10.000 km ou 12 meses (5.000 km em uso severo), cerca de 3,2 L com filtro, sempre conferindo na vareta. Como o bujão não esvazia tudo, muitas oficinas também aspiram pelo tubo da vareta. Pancada em lombada trinca o cárter.',
  'bomba_oleo filtro_oleo vareta sens_nivel_oleo tampa_oleo bloco');
P('bomba_oleo', 'Bomba de óleo', 'motor',
  'Dentro do cárter, girada por corrente pelo virabrequim.',
  'Suga o óleo do cárter pelo pescador e o empurra sob pressão para o filtro, os mancais, as bielas e o cabeçote.',
  'Sem troca periódica. Óleo vencido forma borra, entope a tela do pescador e derruba a pressão: luz de óleo acesa.',
  'carter filtro_oleo virabrequim sens_oleo');
P('filtro_oleo', 'Filtro de óleo', 'motor',
  'Na frente do bloco, voltado para o radiador.',
  'Retém partículas antes de o óleo chegar às partes móveis.',
  'Troque junto com o óleo. Existem três modelos parecidos para esse motor e um deles é menor: montado errado, derruba a pressão e acende a luz de óleo. Aperto à mão.',
  'bomba_oleo carter sens_oleo');
P('vareta', 'Vareta de nível do óleo', 'motor',
  'Na frente do motor, com o cabo colorido.',
  'Mostra o nível entre as marcas de mínimo e máximo. O tubo dela vai até o fundo do cárter.',
  'Confira com o carro no plano e o motor frio (ou 5 minutos após desligar). Nunca passe do máximo.',
  'carter tampa_oleo');
P('tampa_oleo', 'Tampa de abastecimento de óleo', 'motor',
  'No topo da tampa de válvulas.',
  'Bocal por onde se completa o óleo do motor.',
  'Borra clara embaixo da tampa indica muita condensação (trajetos curtos) ou água no óleo. Mantenha bem fechada.',
  'tampa_valv vareta carter');
P('volante_motor', 'Volante do motor', 'motor',
  'Na ponta esquerda do virabrequim, dentro da capa da embreagem.',
  'Disco pesado que suaviza os pulsos das explosões. Tem a cremalheira onde o motor de partida engrena e serve de face de atrito da embreagem. O sensor de rotação lê as marcas dele.',
  'Revise a face na troca de embreagem. Dentes gastos fazem o motor de partida raspar.',
  'virabrequim embreagem motor_partida sens_rot');
P('correia_dent', 'Correia dentada', 'motor',
  'Lado direito do motor, atrás das capas pretas.',
  'Sincroniza o virabrequim com o comando de válvulas e também gira a bomba d’água.',
  'Troca a cada 60.000 km junto com o tensor e, de preferência, a bomba d’água. Se romper, as válvulas batem nos pistões. O ponto exige pinos de travamento no comando e no volante.',
  'polia_comando tensor_dent bomba_agua virabrequim capas_correia comando');
P('tensor_dent', 'Tensor da correia dentada', 'motor',
  'Junto à correia dentada, lado direito.',
  'Mantém a tensão certa da correia. É ajustado alinhando uma seta com a marca, depois de girar o motor quatro voltas.',
  'Troque sempre com a correia. Chiado de rolamento indica desgaste.',
  'correia_dent bomba_agua');
P('polia_comando', 'Polia do comando', 'motor',
  'Parte alta do lado direito do motor.',
  'Engrenagem dentada que recebe a correia e gira o comando. Tem o furo do pino de travamento de ponto.',
  'Na troca da correia, revise os dentes e o retentor atrás dela.',
  'comando correia_dent');
P('capas_correia', 'Capas da correia dentada', 'motor',
  'Lado direito do motor.',
  'Protegem a correia dentada de sujeira, água e objetos.',
  'Capa quebrada deixa entrar sujeira que desgasta a correia antes da hora.',
  'correia_dent');
P('polia_vira', 'Polia do virabrequim', 'motor',
  'Ponta direita do virabrequim, embaixo.',
  'Puxa a correia do alternador.',
  'Se a borracha interna descolar, a polia bamboleia e a correia sai do lugar.',
  'virabrequim correia_acess');
P('correia_acess', 'Correia do alternador (Poly-V)', 'motor',
  'Lado direito do motor, por fora das capas.',
  'Correia ranhurada que leva força do virabrequim ao alternador. Sem ar-condicionado e com direção mecânica, ela passa só por essas duas polias.',
  'Inspecione em toda revisão (trincas, brilho, chiado ao dar partida) e troque junto com a dentada. Se romper, a bateria para de carregar e a luz da bateria acende.',
  'polia_vira alternador tensor_acess');
P('tensor_acess', 'Esticador do alternador', 'motor',
  'No suporte do alternador.',
  'A tensão da correia é ajustada no próprio alternador: ele desliza num braço com rasgo e é travado pelo parafuso de ajuste.',
  'Chiado ao dar partida ou ao acender os faróis costuma ser correia frouxa: reajuste a tensão.',
  'correia_acess alternador');
P('coxim_dir', 'Coxim do motor (direito)', 'motor',
  'Lado direito, preso à carroceria perto do reservatório de expansão.',
  'Apoio de borracha que segura o lado da correia e filtra a vibração.',
  'Ponto fraco conhecido do 206. Gasto, o motor balança na partida, trepida em marcha lenta e dá tranco ao engatar. Inspecione a cada 20.000 km.',
  'bloco monobloco coxim_esq coxim_inf');
P('coxim_esq', 'Coxim do câmbio (esquerdo)', 'motor',
  'Sobre o câmbio, abaixo da bateria.',
  'Segura o lado do câmbio do conjunto motor-câmbio.',
  'Borracha rachada causa batidas ao engatar e vibração na alavanca.',
  'cambio coxim_dir coxim_inf bateria');
P('coxim_inf', 'Coxim inferior (tirante)', 'motor',
  'Embaixo, entre o motor e o agregado.',
  'Barra com buchas que impede o motor de balançar para frente e para trás ao acelerar e frear.',
  'Bucha gasta gera tranco nas arrancadas e nas trocas de marcha.',
  'agregado bloco coxim_dir');
P('respiro', 'Respiro do cárter', 'motor',
  'Mangueiras da tampa de válvulas até a admissão.',
  'Retira os vapores de óleo de dentro do motor e os devolve à admissão para serem queimados.',
  'Mangueira rachada vira entrada falsa de ar e deixa a marcha lenta irregular. Muito óleo na admissão indica desgaste interno.',
  'tampa_valv coletor_adm duto_ar');

/* ---------- AR E INJEÇÃO ---------- */
P('tomada_ar', 'Tomada de ar', 'ar',
  'Atrás da travessa frontal, na frente do cofre.',
  'Capta ar fresco da frente do carro e o leva à caixa do filtro.',
  'Não pode estar amassada nem entupida de folhas. Ao lavar o motor, cuidado: a água entra por aqui.',
  'caixa_filtro travessa_frontal');
P('caixa_filtro', 'Caixa do filtro de ar', 'ar',
  'Lado esquerdo do cofre, na frente.',
  'Abriga o filtro e forma a câmara de ar limpo.',
  'As presilhas precisam fechar bem: uma fresta deixa entrar poeira sem filtrar.',
  'tomada_ar filtro_ar duto_ar');
P('filtro_ar', 'Filtro de ar', 'ar',
  'Dentro da caixa do filtro.',
  'Segura poeira e areia antes que o ar chegue ao motor.',
  'Troca a cada 20.000 km, antes se rodar em estrada de terra. Filtro sujo tira força e aumenta o consumo.',
  'caixa_filtro duto_ar tbi');
P('duto_ar', 'Duto de ar', 'ar',
  'Da caixa do filtro até o corpo de borboleta, pela frente do motor.',
  'Leva o ar filtrado até a borboleta; o ressonador reduz o ruído da aspiração.',
  'Rachaduras depois do filtro deixam entrar ar sujo e não medido.',
  'filtro_ar tbi respiro');
P('tbi', 'Corpo de borboleta motorizado', 'ar',
  'Entrada do coletor de admissão, sobre o motor.',
  'Válvula que dosa quanto ar entra. É eletrônica: não há cabo de acelerador, a central abre a borboleta conforme o pedal e controla a marcha lenta.',
  'Acumula carvão e vapor de óleo, e a marcha lenta passa a oscilar ou o motor morre. Limpe com produto próprio sem forçar a borboleta; depois pode ser preciso reaprendizado.',
  'pedal_acel coletor_adm ecu duto_ar tmap');
P('coletor_adm', 'Coletor de admissão', 'ar',
  'Parte de trás e de cima do motor.',
  'Distribui o ar para os 4 cilindros. Nos flex da Peugeot também recebe os tubinhos da partida a frio, um por cilindro.',
  'Juntas e mangueiras de vácuo ressecadas causam entrada falsa de ar.',
  'tbi galeria bicos tubos_pf tmap cabecote mang_vacuo purga respiro');
P('galeria', 'Galeria de combustível', 'ar',
  'Sobre os bicos, junto ao coletor.',
  'Tubo que distribui combustível pressurizado aos quatro bicos.',
  'Na remontagem, anéis novos nos bicos com vaselina. Cheiro de combustível no cofre pede inspeção imediata.',
  'bicos linhas_comb filtro_comb');
P('bicos', 'Bicos injetores (4)', 'ar',
  'Um por cilindro, encaixados no coletor e apontados para as válvulas.',
  'Pulverizam o combustível. A central decide por quanto tempo cada um fica aberto.',
  'Limpeza e teste de vazão por volta de 40.000 km num flex. Bico pingando afoga o motor na partida e aumenta o consumo.',
  'galeria coletor_adm ecu valvulas');
P('pedal_acel', 'Pedal do acelerador', 'ar',
  'Assoalho do motorista, à direita.',
  'Tem um sensor de posição duplo que informa à central quanto você pisa; quem abre a borboleta é a central.',
  'Falha no sensor põe o carro em modo de emergência, acelerando pouco.',
  'tbi ecu');

/* ---------- COMBUSTÍVEL ---------- */
P('tanque', 'Tanque de combustível (50 L)', 'comb',
  'Embaixo do banco traseiro, na frente do eixo traseiro.',
  'Guarda o combustível num tanque plástico preparado para etanol. A bomba e a boia ficam dentro dele.',
  'Evite rodar na reserva: a bomba é resfriada pelo próprio combustível e puxa a sujeira do fundo.',
  'bomba_comb boia bocal filtro_comb canister');
P('bomba_comb', 'Bomba de combustível', 'comb',
  'Dentro do tanque; o acesso é por uma tampa sob o banco traseiro.',
  'Bomba elétrica que manda combustível pressurizado ao motor. Ao ligar a chave ela funciona por alguns segundos — dá para ouvir.',
  'Sinais de cansaço: demora para pegar, falha em subida ou em alta. Filtro entupido força a bomba.',
  'tanque filtro_comb linhas_comb bsm ecu');
P('boia', 'Boia (sensor de nível)', 'comb',
  'No conjunto da bomba, dentro do tanque.',
  'Mede o nível do tanque para o marcador do painel.',
  'Peça nova precisa ser ensinada: ligar o contato por um minuto com a haste em vazio, depois em meio tanque e em cheio.',
  'bomba_comb tanque quadro');
P('filtro_comb', 'Filtro de combustível', 'comb',
  'Sob o assoalho, perto do tanque.',
  'Retém sujeira e água antes que cheguem aos bicos.',
  'Troca a cada 20.000 km, sempre com o modelo flex. Entupido: carro fraco em subida e falhando em alta.',
  'bomba_comb linhas_comb tanque galeria');
P('linhas_comb', 'Tubulações de combustível', 'comb',
  'Correm por baixo do assoalho até o cofre.',
  'Levam o combustível do tanque até a galeria.',
  'Conexões rápidas e trechos de borracha ressecam. Qualquer cheiro de combustível merece inspeção.',
  'filtro_comb galeria tanque');
P('bocal', 'Bocal e tampa de abastecimento', 'comb',
  'Lateral traseira direita.',
  'Entrada de combustível com tampa vedada e portinhola.',
  'Tampa mal vedada solta vapor e atrapalha o sistema do cânister.',
  'tanque canister laterais');
P('canister', 'Cânister (filtro de carvão)', 'comb',
  'No cofre, lado direito (posição aproximada no modelo).',
  'Absorve os vapores de combustível do tanque para não irem para o ar.',
  'Não complete o tanque depois do primeiro clique da bomba do posto: combustível líquido encharca o carvão.',
  'tanque purga bocal');
P('purga', 'Válvula de purga do cânister', 'comb',
  'Entre o cânister e o coletor de admissão.',
  'A central abre esta válvula para o motor queimar os vapores guardados no cânister.',
  'Travada aberta, deixa a marcha lenta ruim e dificulta a partida logo depois de abastecer.',
  'canister coletor_adm ecu');
P('res_pf', 'Reservatório da partida a frio (0,5 L)', 'comb',
  'No cofre, na parte da frente. A posição no modelo é aproximada: confira no seu carro antes de abastecer.',
  'Guarda gasolina para ajudar o motor a pegar no frio quando o tanque tem muito etanol.',
  'Só gasolina, de preferência aditivada. Com o tanque só de gasolina ele quase não trabalha, e gasolina parada envelhece: renove a cada 2 ou 3 meses. Nunca confunda com os reservatórios de freio, arrefecimento ou lavador.',
  'bomba_pf valv_pf tubos_pf sens_temp ecu');
P('bomba_pf', 'Bomba da partida a frio', 'comb',
  'Junto ao reservatório da partida a frio.',
  'Pequena bomba elétrica, ligada pela central através de um relé, que empurra a gasolina do reservatório para a admissão durante a partida com motor frio.',
  'Um zumbido de poucos segundos na primeira partida é normal. Reservatório esvaziando rápido indica vazamento.',
  'res_pf valv_pf ecu');
P('valv_pf', 'Eletroválvula da partida a frio', 'comb',
  'Perto do coletor de admissão.',
  'Libera ou corta a gasolina da partida a frio na hora certa.',
  'Travada aberta, deixa gasolina escorrer para o coletor: motor afogado e falhando nas primeiras partidas.',
  'bomba_pf tubos_pf coletor_adm ecu');
P('tubos_pf', 'Tubinhos da partida a frio', 'comb',
  'Sobre o coletor, um para cada cilindro.',
  'Levam a gasolina da partida a frio até perto das válvulas de admissão.',
  'Ressecam e trincam com o calor; vazamento aqui aparece como cheiro de gasolina no cofre.',
  'valv_pf coletor_adm');

/* ---------- IGNIÇÃO E SENSORES ---------- */
P('ecu', 'Central de injeção (Bosch ME 7.4.4)', 'ign',
  'No cofre, atrás do motor (posição aproximada no modelo).',
  'O cérebro do motor: lê os sensores e comanda bicos, bobina, borboleta, partida a frio, ventoinha e purga. Descobre a proporção de etanol e gasolina pelo que a sonda lambda mede.',
  'Não gosta de água: em algumas unidades o módulo fica num ponto sujeito a infiltração. Depois de trocar de combustível, rode alguns quilômetros para ela se adaptar.',
  'sonda sens_temp sens_rot tmap tbi bicos bobina pedal_acel bsi res_pf');
P('bobina', 'Bobina compacta', 'ign',
  'Encaixada direto sobre as velas, no topo do motor.',
  'Transforma os 12 V em milhares de volts para cada vela, sem cabos. Também ajuda a central a identificar o cilindro, já que esse motor não tem sensor de fase.',
  'Tem fama de falhar no 206: motor engasgando e luz da injeção. As molas de contato só encostam nas velas; se perderem pressão, a faísca foge. Confira as molas na montagem.',
  'velas ecu tampa_valv chicote');
P('velas', 'Velas de ignição (4)', 'ign',
  'No cabeçote, embaixo da bobina.',
  'Soltam a faísca que inflama a mistura em cada cilindro. No flex são de grau térmico mais frio.',
  'O plano Peugeot pede troca a cada 40.000 km; em flex muitos mecânicos antecipam. A rosca é no alumínio: aperte com torquímetro.',
  'bobina cabecote pistoes');
P('sens_rot', 'Sensor de rotação', 'ign',
  'Na carcaça do câmbio, lendo o volante do motor.',
  'Informa rotação e posição do virabrequim. Sem ele a central não sabe quando injetar nem quando dar faísca.',
  'Com defeito: o motor gira e não pega, ou apaga quando esquenta. Limalha no ímã atrapalha a leitura.',
  'volante_motor ecu');
P('sens_det', 'Sensor de detonação', 'ign',
  'Parafusado no bloco.',
  'Escuta a batida de pino e faz a central atrasar a ignição para proteger o motor.',
  'Precisa do torque certo: frouxo ou apertado demais, muda a leitura.',
  'bloco ecu');
P('sens_temp', 'Sensor de temperatura da água', 'ign',
  'Na caixa d’água, lado esquerdo do cabeçote.',
  'Informa a temperatura do motor à central e ao painel. Com o motor frio, a central enriquece a mistura e aciona a partida a frio.',
  'Se indicar frio com o motor quente, o carro bebe muito e pode afogar. É barato e fácil de conferir com scanner.',
  'termostato ecu quadro res_pf ventoinha');
P('sonda', 'Sonda lambda', 'ign',
  'No escape, antes do catalisador.',
  'Mede o oxigênio que sobra no escape para a central corrigir a mistura. No flex é por ela que a central descobre quanto etanol há no tanque.',
  'Dura bastante, mas contaminada por óleo ou aditivos fica lenta: consumo alto e luz da injeção.',
  'coletor_esc catalisador ecu');
P('tmap', 'Sensor de pressão e temperatura do ar', 'ign',
  'No coletor de admissão.',
  'Mede o vácuo e a temperatura do ar no coletor; com isso a central calcula quanto ar o motor está aspirando.',
  'Entrada falsa de ar engana o sensor. Se estiver sujo de óleo, limpe com cuidado.',
  'coletor_adm ecu tbi');
P('sens_oleo', 'Interruptor de pressão de óleo', 'ign',
  'No bloco, perto do filtro de óleo.',
  'Acende a luz vermelha de óleo quando a pressão cai demais.',
  'Luz de óleo acesa com o motor ligado: desligue na hora e verifique o nível.',
  'filtro_oleo bomba_oleo quadro');
P('sens_nivel_oleo', 'Sensor de nível de óleo', 'ign',
  'No cárter.',
  'Ao ligar a chave, o visor do painel mostra se o nível está bom.',
  'Mesmo com o aviso ok, confira na vareta de vez em quando.',
  'carter quadro');
P('sens_vel', 'Sensor de velocidade', 'ign',
  'No câmbio.',
  'Mede a velocidade para o velocímetro, o hodômetro e a central.',
  'Com defeito, o velocímetro para e a marcha lenta pode oscilar ao desacelerar.',
  'cambio quadro ecu');

/* ---------- ARREFECIMENTO ---------- */
P('radiador', 'Radiador', 'arref',
  'Na frente do carro, atrás do para-choque.',
  'Troca o calor do líquido de arrefecimento com o ar que atravessa a frente do carro.',
  'Colmeia amassada ou coberta de sujeira troca menos calor. Trocar o líquido a cada 2 anos evita corrosão interna.',
  'ventoinha mang_sup mang_inf vaso termostato');
P('ventoinha', 'Eletroventilador (ventoinha)', 'arref',
  'Atrás do radiador.',
  'Puxa ar pelo radiador com o carro parado ou devagar. A central liga conforme a temperatura.',
  'Se não ligar, a temperatura sobe no trânsito. Relé, resistor e conectores oxidam.',
  'radiador sens_temp ecu bsm');
P('vaso', 'Reservatório de expansão', 'arref',
  'Canto dianteiro direito do cofre — o reservatório translúcido.',
  'Absorve a dilatação do líquido e mantém o circuito pressurizado. A tampa tem uma válvula de pressão.',
  'Confira o nível com o motor frio. Nunca abra quente: o líquido sai escaldante. Use o aditivo indicado, na proporção certa.',
  'radiador bomba_agua mang_sup termostato junta_cab');
P('termostato', 'Válvula termostática', 'arref',
  'Na caixa d’água, lado esquerdo do cabeçote.',
  'Mantém o líquido circulando só dentro do motor até ele esquentar e então libera o fluxo para o radiador.',
  'Travada aberta: o motor demora a esquentar, o ponteiro fica baixo e o consumo sobe. Travada fechada: superaquecimento.',
  'mang_sup radiador sens_temp cabecote mang_aquec');
P('bomba_agua', 'Bomba d’água', 'arref',
  'Lado direito do motor, atrás das capas; gira com a correia dentada.',
  'Faz o líquido circular pelo motor e pelo radiador.',
  'Vazamento pelo furo de alívio ou ruído de rolamento pedem troca. Faça junto com a correia dentada para não abrir tudo duas vezes.',
  'correia_dent bloco mang_inf vaso');
P('mang_sup', 'Mangueira superior do radiador', 'arref',
  'Da caixa d’água até o topo do radiador.',
  'Leva o líquido quente do motor ao radiador.',
  'Aperte com a mão, motor frio: mole, rachada ou estufada, troque.',
  'termostato radiador');
P('mang_inf', 'Mangueira inferior do radiador', 'arref',
  'Da parte baixa do radiador até a bomba d’água.',
  'Devolve ao motor o líquido já resfriado.',
  'Mesma inspeção da mangueira superior.',
  'radiador bomba_agua');
P('mang_aquec', 'Mangueiras do aquecedor', 'arref',
  'Do motor até a parede corta-fogo.',
  'Levam água quente ao radiador do aquecedor, que aquece a cabine.',
  'Vazamento pode aparecer como cheiro adocicado na cabine ou vidro embaçando.',
  'termostato rad_aquec corta_fogo');
P('rad_aquec', 'Radiador do aquecedor', 'arref',
  'Dentro da caixa de ar, atrás do painel.',
  'Pequeno radiador que aquece o ar da cabine com a água do motor. Seu carro não tem ar-condicionado, então é a única troca térmica da ventilação.',
  'Vazamento molha o tapete do passageiro e embaça o para-brisa.',
  'mang_aquec caixa_ar vent_interno');

/* ---------- ESCAPAMENTO ---------- */
P('coletor_esc', 'Coletor de escape', 'esc',
  'Frente do motor, voltado para o radiador.',
  'Junta os gases quentes dos 4 cilindros num só tubo.',
  'Trincas e juntas queimadas fazem estalos com o motor frio. Porcas autotravantes novas na remontagem.',
  'cabecote sonda catalisador protetor');
P('protetor', 'Protetor de calor do coletor', 'esc',
  'Sobre o coletor de escape.',
  'Chapa que protege as peças vizinhas do calor do coletor.',
  'Parafuso solto faz barulho de lata vibrando.',
  'coletor_esc');
P('catalisador', 'Catalisador', 'esc',
  'Logo depois do coletor, descendo na frente do motor.',
  'Transforma gases tóxicos (CO, HC e NOx) em gases menos nocivos.',
  'Falha de ignição e mistura rica derretem a colmeia: perda de força e cheiro de ovo podre.',
  'coletor_esc sonda flexivel');
P('flexivel', 'Junta flexível', 'esc',
  'Sob o motor, depois do catalisador.',
  'Articulação que deixa o motor balançar sem trincar o escapamento.',
  'Sofre mais quando os coxins estão gastos; vazamento aqui vira ronco.',
  'catalisador tubo_inter coxim_inf');
P('tubo_inter', 'Tubo intermediário', 'esc',
  'Pelo túnel central, sob o assoalho.',
  'Leva os gases até os silenciosos.',
  'Corrosão e pancadas por baixo.',
  'flexivel silenc_inter coxins_esc');
P('silenc_inter', 'Silencioso intermediário', 'esc',
  'No meio do carro, sob o assoalho.',
  'Primeira etapa de redução do ruído.',
  'Trajetos curtos deixam água dentro, que enferruja e fura a peça por dentro.',
  'tubo_inter silenc_tras');
P('silenc_tras', 'Silencioso traseiro e ponteira', 'esc',
  'Traseira direita, atrás do eixo.',
  'Abafa o ruído final e direciona os gases para fora.',
  'Leia a fumaça: azul é óleo, branca persistente é água, preta é mistura rica.',
  'silenc_inter coxins_esc');
P('coxins_esc', 'Coxins do escapamento', 'esc',
  'Borrachas espalhadas sob o carro.',
  'Penduram o escapamento na carroceria e absorvem a vibração.',
  'Borracha rompida faz o escapamento bater no assoalho.',
  'tubo_inter silenc_tras silenc_inter monobloco');

/* ===== Catálogo: peças (parte 2) ===== */

/* ---------- ELÉTRICA ---------- */
P('bateria', 'Bateria', 'ele',
  'Canto dianteiro esquerdo do cofre.',
  'Fornece a energia da partida e alimenta o carro com o motor desligado.',
  'Teste a cada 6 meses; dura de 2 a 4 anos. Antes de desligá-la, faça o procedimento que evita o modo ECO: capô aberto, chave fora, portas fechadas (sem trancar) e espere 15 minutos.',
  'cabos_bat alternador motor_partida bsm bsi');
P('cabos_bat', 'Cabos da bateria e aterramentos', 'ele',
  'Da bateria ao motor de partida, à caixa de fusíveis e à carroceria.',
  'Conduzem a corrente alta da partida. O negativo fecha o circuito pela carroceria e pelo motor.',
  'Terminal oxidado ou frouxo provoca exatamente clique na partida e painel apagando. Limpe, aperte e proteja com vaselina.',
  'bateria motor_partida alternador bsm monobloco');
P('bsm', 'Caixa de fusíveis do motor', 'ele',
  'Ao lado da bateria.',
  'Reúne fusíveis e relés de potência do cofre: ventoinha, bomba de combustível, injeção e faróis.',
  'Umidade e oxidação causam falhas intermitentes. Fusível queimado se troca por outro de mesmo valor.',
  'bateria chicote ventoinha bomba_comb ecu bsi');
P('bsi', 'BSI (caixa de serviço inteligente)', 'ele',
  'Sob o painel, lado esquerdo.',
  'Módulo central da carroceria: controla luzes, limpadores, travas, painel, imobilizador e a economia de energia (modo ECO). Tem fusíveis internos.',
  'Bateria fraca, ou desligada sem o procedimento, pode travar o sistema em modo ECO e o carro não pega até ser reabilitado.',
  'bateria bsm ign_chave quadro ecu chicote comutadores');
P('alternador', 'Alternador', 'ele',
  'Frente direita do motor, na parte baixa.',
  'Gera energia com o motor ligado e recarrega a bateria.',
  'Luz da bateria acesa com o motor ligado significa que não está carregando. Com o motor ligado, a tensão normal fica entre 13,8 e 14,6 V.',
  'correia_acess bateria cabos_bat');
P('motor_partida', 'Motor de partida', 'ele',
  'Atrás do motor, junto ao câmbio.',
  'Motor elétrico que gira o motor pelo volante até ele pegar. O solenoide empurra o pinhão e fecha a corrente alta.',
  'Um clique seco sem girar pode ser bateria fraca, cabo ruim, solenoide ou escovas gastas.',
  'bateria cabos_bat volante_motor ign_chave');
P('chicote', 'Chicote elétrico', 'ele',
  'Espalhado pelo carro; o do motor passa sobre o cabeçote.',
  'Feixe de fios e conectores que liga sensores, atuadores e módulos.',
  'O calor resseca os fios e os conectores oxidam: surgem defeitos que vão e voltam.',
  'ecu bsm bsi bobina');
P('farois', 'Faróis', 'ele',
  'Cantos dianteiros.',
  'Farol baixo, alto e luz de posição. A altura do facho é regulada no painel.',
  'Lente amarelada ilumina menos e pede polimento. Confira a regulagem depois de trocar lâmpada.',
  'bsi comutadores bsm');
P('lanternas', 'Lanternas traseiras', 'ele',
  'Cantos traseiros.',
  'Luz de posição, freio, seta e ré.',
  'As lâmpadas se trocam por dentro do porta-malas.',
  'bsi luz_freio pedal_freio');
P('piscas_lat', 'Repetidores laterais', 'ele',
  'Nos para-lamas dianteiros.',
  'Mostram a seta para quem está ao lado.',
  'Lâmpada pequena de encaixe.',
  'comutadores bsi paralamas');
P('luz_freio', 'Luz de freio alta', 'ele',
  'No topo do vidro traseiro.',
  'Terceira luz de freio, bem visível para quem vem atrás.',
  'Acende junto com as lanternas pelo interruptor do pedal.',
  'lanternas pedal_freio');
P('luz_placa', 'Luzes da placa', 'ele',
  'Na tampa traseira, acima da placa.',
  'Iluminam a placa traseira.',
  'Obrigatórias; as lâmpadas são pequenas e baratas.',
  'bsi tampa_tras');
P('neblina_tras', 'Luz de neblina traseira', 'ele',
  'No centro do para-choque traseiro.',
  'Luz vermelha forte para neblina.',
  'Use só com visibilidade baixa: ofusca quem vem atrás.',
  'para_choque_t bsi');
P('buzina', 'Buzina', 'ele',
  'Atrás do para-choque dianteiro.',
  'Alerta sonoro.',
  'Fica exposta à água e o conector oxida.',
  'comutadores bsm');
P('limpador', 'Limpador dianteiro', 'ele',
  'Motor na base do para-brisa, sob a grade do torpedo.',
  'O motor move as varetas que balançam os dois braços.',
  'Palhetas uma vez por ano. Folhas no torpedo entopem o dreno e molham a elétrica.',
  'comutadores bsi para_brisa lavador');
P('limpador_tras', 'Limpador traseiro', 'ele',
  'Na tampa traseira.',
  'Limpa o vidro traseiro.',
  'O eixo engripa sem uso; acione de vez em quando.',
  'tampa_tras vidro_tras bsi');
P('lavador', 'Reservatório e bomba do lavador', 'ele',
  'Cofre, parte da frente (posição aproximada).',
  'Esguicha água nos vidros.',
  'Água com o aditivo próprio; detergente de cozinha resseca as borrachas.',
  'limpador limpador_tras');
P('ign_chave', 'Comutador de ignição e imobilizador', 'ele',
  'Na coluna de direção.',
  'Liga os circuitos e aciona a partida. Uma antena em volta do tambor lê o código da chave.',
  'Guarde o cartão com o código confidencial. Chave não reconhecida: o motor gira e não pega.',
  'bsi motor_partida coluna ecu');
P('comutadores', 'Chaves de seta e limpador', 'ele',
  'Atrás do volante.',
  'Comandam setas, faróis, buzina e limpadores.',
  'Mau contato faz luzes acenderem ou piscarem fora de hora.',
  'bsi volante_dir limpador farois');

/* ---------- TRANSMISSÃO ---------- */
P('cambio', 'Câmbio manual MA/5', 'trans',
  'Lado esquerdo do motor.',
  'Cinco marchas e ré que multiplicam a força do motor. O diferencial fica na mesma carcaça.',
  'Procure vazamentos e confira o nível nas revisões (cerca de 2 L). Arranhar ao engatar aponta para embreagem ou sincronizados.',
  'embreagem diferencial trambulador semieixos coxim_esq sens_vel');
P('diferencial', 'Diferencial', 'trans',
  'Na parte de baixo do câmbio.',
  'Divide a força entre as duas rodas da frente e deixa cada uma girar numa velocidade nas curvas.',
  'Usa o mesmo óleo do câmbio.',
  'cambio semieixos');
P('embreagem', 'Embreagem (disco e platô)', 'trans',
  'Entre o volante do motor e o câmbio.',
  'Liga e desliga o motor do câmbio para arrancar e trocar de marcha.',
  'Patinando (o giro sobe e o carro não acompanha) ou pedal alto: disco gasto. Não descanse o pé no pedal.',
  'volante_motor rol_emb cambio cabo_emb');
P('rol_emb', 'Rolamento e garfo da embreagem', 'trans',
  'Dentro da capa da embreagem.',
  'O garfo empurra o rolamento contra o platô quando você pisa.',
  'Ruído com o pedal pisado é rolamento. Troque junto com o kit.',
  'embreagem cabo_emb');
P('cabo_emb', 'Cabo da embreagem', 'trans',
  'Do pedal até o topo do câmbio.',
  'Transmite o movimento do pedal até o garfo, com regulagem automática.',
  'Pedal duro ou rangendo indica cabo ressecado; se romper, o pedal cai.',
  'pedal_emb rol_emb');
P('pedal_emb', 'Pedal da embreagem', 'trans',
  'Assoalho do motorista, à esquerda.',
  'Aciona a embreagem pelo cabo.',
  'Bucha gasta dá folga e rangido.',
  'cabo_emb');
P('semieixos', 'Semieixos e homocinéticas', 'trans',
  'Do câmbio até as rodas dianteiras.',
  'Levam a força às rodas mesmo com a suspensão subindo e a direção virando. As juntas homocinéticas nas pontas são protegidas por coifas.',
  'Coifa rasgada perde a graxa e a junta passa a estalar em curva acelerando. Olhe as coifas em toda revisão.',
  'diferencial mangas cambio');
P('trambulador', 'Trambulador e varões', 'trans',
  'Do câmbio até a alavanca, pelo túnel.',
  'Transmitem o movimento da alavanca ao câmbio.',
  'Rótulas gastas deixam a alavanca mole e as marchas imprecisas.',
  'alavanca cambio');
P('alavanca', 'Alavanca de câmbio', 'trans',
  'Console central.',
  'Seleciona as marchas.',
  'Folga excessiva: revise trambulador e coxins.',
  'trambulador');

/* ---------- FREIOS ---------- */
P('pedal_freio', 'Pedal do freio', 'freio',
  'Assoalho do motorista, no centro.',
  'Aciona o servo-freio; o interruptor do pedal acende as luzes de freio.',
  'Pedal baixo ou esponjoso: ar no sistema, fluido velho ou vazamento.',
  'servo luz_freio lanternas');
P('servo', 'Servo-freio', 'freio',
  'Na parede corta-fogo, lado do motorista.',
  'Usa o vácuo do motor para multiplicar a força do seu pé.',
  'Pedal muito duro com o motor ligado: mangueira de vácuo solta ou servo furado.',
  'pedal_freio cil_mestre mang_vacuo corta_fogo');
P('cil_mestre', 'Cilindro-mestre', 'freio',
  'Na frente do servo-freio.',
  'Transforma a força do pedal em pressão hidráulica, em dois circuitos cruzados.',
  'Pedal que afunda devagar parado no semáforo indica vedação interna gasta.',
  'servo reserv_freio tubos_freio');
P('reserv_freio', 'Reservatório do fluido de freio', 'freio',
  'Sobre o cilindro-mestre.',
  'Guarda o fluido DOT 4.',
  'Troca a cada 2 anos, porque o fluido absorve água. O nível desce devagar com o desgaste das pastilhas; queda rápida é vazamento.',
  'cil_mestre');
P('tubos_freio', 'Tubulações e flexíveis de freio', 'freio',
  'Do cilindro-mestre até cada roda.',
  'Levam o fluido sob pressão.',
  'Flexível rachado ou estufado deve ser trocado.',
  'cil_mestre pincas tambores');
P('pincas', 'Pinças de freio dianteiras', 'freio',
  'Nas rodas dianteiras, abraçando o disco.',
  'O pistão hidráulico aperta as pastilhas contra o disco.',
  'Pinos-guia secos ou travados causam desgaste irregular e carro puxando. Lubrifique com graxa própria.',
  'pastilhas discos tubos_freio mangas');
P('pastilhas', 'Pastilhas de freio', 'freio',
  'Dentro das pinças dianteiras.',
  'Material de atrito que freia o disco.',
  'Olhe a cada 10.000 km e troque com menos de uns 3 mm. Chiado metálico: chegaram ao fim.',
  'pincas discos');
P('discos', 'Discos de freio (sólidos)', 'freio',
  'Presos aos cubos dianteiros, atrás das rodas.',
  'Giram com a roda e são apertados pelas pastilhas.',
  'A espessura mínima vem gravada na peça. Vibração no pedal é disco empenado.',
  'pastilhas pincas mangas');
P('tambores', 'Tambores traseiros', 'freio',
  'Rodas traseiras.',
  'Carcaça que gira com a roda; as sapatas se abrem contra ela.',
  'O diâmetro máximo vem gravado. Inspecione a cada 20.000 km.',
  'sapatas eixo_tras freio_mao');
P('sapatas', 'Sapatas e cilindros de roda', 'freio',
  'Dentro dos tambores traseiros.',
  'O cilindro de roda abre as sapatas contra o tambor; a regulagem é automática.',
  'Cilindro vazando suja a lona de fluido e o freio traseiro some.',
  'tambores tubos_freio freio_mao');
P('freio_mao', 'Freio de mão', 'freio',
  'Alavanca entre os bancos, cabos até os tambores.',
  'Trava as rodas traseiras mecanicamente.',
  'Se precisar de muitos cliques para segurar, está pedindo regulagem.',
  'sapatas tambores');
P('mang_vacuo', 'Mangueira de vácuo do servo', 'freio',
  'Do coletor de admissão até o servo-freio.',
  'Leva o vácuo do motor ao servo.',
  'Rachada: pedal duro e marcha lenta irregular.',
  'servo coletor_adm');

/* ---------- SUSPENSÃO E RODAS ---------- */
P('amort_diant', 'Amortecedores dianteiros (McPherson)', 'susp',
  'Sobre as rodas dianteiras, presos às torres.',
  'Controlam o balanço das molas e, no McPherson, também guiam a roda.',
  'Óleo escorrendo ou carro quicando: troque em par.',
  'molas_diant coxins_amort mangas barra_estab');
P('molas_diant', 'Molas dianteiras', 'susp',
  'Em volta dos amortecedores dianteiros.',
  'Sustentam o peso e absorvem os impactos.',
  'Mola quebrada deixa o carro arriado de um lado.',
  'amort_diant coxins_amort');
P('coxins_amort', 'Coxins do amortecedor', 'susp',
  'No topo das torres da suspensão.',
  'Borracha e rolamento que isolam o amortecedor e deixam ele girar com a direção.',
  'Estalo ao esterçar parado costuma ser o rolamento.',
  'amort_diant monobloco');
P('bandejas', 'Bandejas e pivôs', 'susp',
  'Embaixo das rodas dianteiras, presas ao agregado.',
  'Seguram a base da manga de eixo; o pivô é a articulação.',
  'Ponto fraco do 206: buchas e pivôs gastam cedo. Batidas em buracos e carro solto. Prefira peças originais.',
  'mangas agregado barra_estab');
P('barra_estab', 'Barra estabilizadora e bieletas', 'susp',
  'Atrás do eixo dianteiro, de um lado ao outro.',
  'Reduz a inclinação da carroceria nas curvas. As bieletas ligam a barra aos amortecedores.',
  'Bieletas gastas fazem toc-toc em piso irregular.',
  'amort_diant agregado bandejas');
P('agregado', 'Agregado (berço dianteiro)', 'susp',
  'Sob o motor.',
  'Quadro que segura bandejas, caixa de direção e o coxim inferior.',
  'Depois de pancadas por baixo, revise ferrugem e parafusos.',
  'bandejas caixa_dir coxim_inf barra_estab monobloco');
P('mangas', 'Mangas de eixo, cubos e rolamentos', 'susp',
  'Atrás de cada roda dianteira.',
  'Articulam com a direção, carregam o rolamento da roda e recebem o semieixo e a pinça.',
  'Ronco que muda de tom nas curvas é rolamento.',
  'amort_diant bandejas barras_axiais semieixos discos pincas');
P('eixo_tras', 'Eixo traseiro', 'susp',
  'Sob a traseira.',
  'Travessa com dois braços arrastados. É independente: cada braço gira sobre rolamentos e é segurado por barras de torção.',
  'Barulhos e rodas traseiras inclinadas para dentro (olhando de trás) indicam desgaste dos rolamentos.',
  'barras_torcao rol_eixo amort_tras tambores monobloco');
P('barras_torcao', 'Barras de torção', 'susp',
  'Dentro da travessa do eixo traseiro.',
  'Fazem o papel de molas na traseira: torcem quando a roda sobe.',
  'Rangidos costumam vir delas e dos rolamentos do eixo.',
  'eixo_tras rol_eixo');
P('rol_eixo', 'Rolamentos do eixo traseiro', 'susp',
  'Nos pontos de giro dos braços traseiros.',
  'Rolamentos de agulha sobre os quais os braços giram.',
  'Defeito clássico do 206: gastam, fazem barulho e as rodas traseiras ficam cambadas, gastando o pneu por dentro. O reparo usa kit específico.',
  'eixo_tras barras_torcao');
P('amort_tras', 'Amortecedores traseiros', 'susp',
  'Inclinados, atrás das rodas traseiras.',
  'Controlam o balanço da traseira.',
  'Troque em par.',
  'eixo_tras');
P('pneus', 'Pneus 175/65 R14', 'susp',
  'As quatro rodas.',
  'O único contato do carro com o chão.',
  'Calibre com os pneus frios, conforme a etiqueta na coluna da porta; rodízio a cada 10.000 km; sulco mínimo de 1,6 mm.',
  'rodas calotas mangas eixo_tras');
P('rodas', 'Rodas de aço aro 14', 'susp',
  'As quatro rodas.',
  'Suportam o pneu e se prendem ao cubo por 4 parafusos (furação 4×108).',
  'Borda amassada causa vazamento lento e vibração.',
  'pneus calotas mangas');
P('calotas', 'Calotas', 'susp',
  'Sobre as rodas de aço.',
  'Acabamento plástico encaixado por pressão.',
  'Tire antes de trocar pneu para chegar aos parafusos.',
  'rodas');
P('estepe', 'Estepe', 'susp',
  'Pendurado sob a traseira, num cesto.',
  'Roda reserva. O cesto desce ao soltar um parafuso por dentro do porta-malas.',
  'Calibre junto com os outros pneus e lubrifique o parafuso do cesto.',
  'porta_malas macaco');
P('macaco', 'Macaco e chave de roda', 'susp',
  'No porta-malas.',
  'Ferramentas para trocar pneu.',
  'Use só nos pontos de apoio marcados na soleira.',
  'estepe rodas');

/* ---------- DIREÇÃO (mecânica) ---------- */
P('volante_dir', 'Volante (sem airbag)', 'dir',
  'À frente do motorista.',
  'Comanda a direção. Como a direção é mecânica, pesa em manobra parada e fica leve com o carro andando.',
  'Folga no volante antes de a roda responder: revise terminais e caixa.',
  'coluna comutadores');
P('coluna', 'Coluna de direção', 'dir',
  'Do volante até a caixa, atravessando o corta-fogo.',
  'Transmite o giro do volante e segura o comutador de ignição.',
  'Com os anos podem surgir estalos na junta da coluna.',
  'volante_dir caixa_dir ign_chave');
P('caixa_dir', 'Caixa de direção mecânica', 'dir',
  'Atrás do motor, presa ao agregado.',
  'Pinhão e cremalheira sem assistência: o pinhão, na ponta da coluna, gira e empurra a cremalheira para os lados, esterçando as rodas. A relação é mais reduzida que numa hidráulica, por isso são mais voltas de batente a batente.',
  'Coifas rasgadas deixam entrar água e poeira; folga dá toc em piso ruim. Com pneus calibrados e suspensão em ordem, ela dura muito.',
  'coluna barras_axiais agregado');
P('barras_axiais', 'Barras axiais e terminais', 'dir',
  'Das pontas da caixa até as mangas.',
  'Empurram as mangas para esterçar. O alinhamento é ajustado nos terminais.',
  'Folga deixa o volante torto e gasta pneu. Alinhe depois de trocar.',
  'caixa_dir mangas');

/* ---------- INTERIOR ---------- */
P('painel', 'Painel e porta-luvas', 'int',
  'Frente da cabine.',
  'Estrutura que abriga os instrumentos, o rádio, os dutos de ventilação e o porta-luvas.',
  'Barulhos costumam ser presilhas soltas. Atrás dele ficam o BSI e a caixa de ar.',
  'quadro radio caixa_ar bsi comandos_vent');
P('quadro', 'Quadro de instrumentos', 'int',
  'Atrás do volante.',
  'Marcador de combustível, conta-giros, velocímetro, temperatura e o visor laranja (hodômetro, nível de óleo e aviso de revisão), além das luzes-espia.',
  'Ao ligar a chave ele mostra o nível de óleo e quanto falta para a revisão. Luz acesa com o motor ligado merece atenção.',
  'bsi sens_temp boia sens_vel sens_oleo sens_nivel_oleo');
P('radio', 'Rádio', 'int',
  'Centro do painel.',
  'Som.',
  'Consumo parasita de rádio ou alarme descarrega a bateria com o carro parado.',
  'alto_falantes bsi');
P('comandos_vent', 'Comandos de ventilação', 'int',
  'Centro do painel.',
  'Temperatura, velocidade do ventilador e direção do ar. Sem ar-condicionado.',
  'Botão duro ou que não muda nada: revise as portinholas da caixa de ar.',
  'vent_interno caixa_ar');
P('vent_interno', 'Ventilador interno', 'int',
  'Atrás do porta-luvas.',
  'Sopra o ar pela caixa de ar até os difusores.',
  'Se só funciona na velocidade máxima, o resistor queimou.',
  'caixa_ar comandos_vent rad_aquec');
P('caixa_ar', 'Caixa de ar e dutos', 'int',
  'Atrás do painel, no centro.',
  'Mistura ar frio e ar aquecido pelo radiador do aquecedor e distribui pelos difusores.',
  'Dreno do torpedo entupido deixa entrar água aqui.',
  'rad_aquec vent_interno comandos_vent painel');
P('bancos_diant', 'Bancos dianteiros', 'int',
  'Cabine.',
  'Reclináveis e basculantes para dar acesso ao banco traseiro num carro de 2 portas.',
  'Limpe e lubrifique os trilhos.',
  'cintos');
P('banco_tras', 'Banco traseiro', 'int',
  'Cabine, atrás.',
  'Assento traseiro rebatível. Embaixo dele fica a tampa de acesso à bomba de combustível.',
  '',
  'tanque bomba_comb');
P('cintos', 'Cintos de segurança', 'int',
  'Colunas e assoalho.',
  'Seguram os ocupantes numa colisão.',
  'Cinto que não trava num puxão forte deve ser trocado.',
  'bancos_diant monobloco');
P('forros_portas', 'Forros das portas', 'int',
  'Lado de dentro das portas.',
  'Acabamento interno com o puxador e a maçaneta interna; esconde a máquina de vidro e a fechadura.',
  'Presilha quebrada faz o forro vibrar e deixa entrar ar e ruído.',
  'portas maq_vidro fech_portas');
E('forros_portas', 'encaixada', 'Presilhas plásticas em volta e parafusos no puxador e na maçaneta interna.');
P('porta_malas', 'Porta-malas (245 L)', 'int',
  'Atrás do banco traseiro.',
  'Compartimento de carga; dele se acessam o parafuso do cesto do estepe e as lanternas.',
  'Água parada no porta-malas: revise a borracha da tampa e as lanternas.',
  'estepe tampa_tras lanternas macaco');
P('retrovisor_int', 'Retrovisor interno', 'int',
  'No para-brisa.',
  'Visão traseira.',
  '',
  'para_brisa');
P('alto_falantes', 'Alto-falantes', 'int',
  'Nas portas.',
  'Som.',
  '',
  'radio portas');

/* ---------- CARROCERIA ---------- */
/* estrutura soldada */
P('monobloco', 'Monobloco (estrutura)', 'carro',
  'O esqueleto do carro, por baixo de tudo.',
  'Chapas de aço estampadas e soldadas: assoalho, longarinas, torres da suspensão e caixas internas das rodas. As peças de lataria e a mecânica se prendem nele.',
  'Carro que dorme ao tempo: vigie ferrugem no assoalho, nas caixas de roda e nas emendas, e mantenha os drenos desentupidos.',
  'corta_fogo soleiras colunas teto laterais painel_tras travessa_frontal agregado eixo_tras coxim_dir');
E('monobloco', 'soldada', 'Chapas unidas por pontos de solda e cola estrutural, com massa de vedação nas emendas. Não se desmonta: dano estrutural se repara em funilaria, com gabarito.');
P('corta_fogo', 'Parede corta-fogo', 'carro',
  'Entre o cofre e a cabine, com a caixa de ar (torpedo) em cima.',
  'Separa motor e cabine e recebe o servo-freio, a pedaleira e as passagens de chicote e mangueiras.',
  'Borrachas de passagem ressecadas deixam entrar água e ruído.',
  'monobloco servo coluna caixa_ar grade_torpedo');
E('corta_fogo', 'soldada', 'Parte soldada do monobloco. As passagens de fios e cabos são vedadas com borrachas encaixadas.');
P('soleiras', 'Soleiras (caixas de ar)', 'carro',
  'Embaixo das portas, de uma roda à outra.',
  'Vigas ocas de aço que dão rigidez à lateral e formam o degrau da porta. A aba de baixo, soldada, é onde o macaco apoia.',
  'Ferrugem começa por dentro, pelos drenos entupidos. Use o macaco só nos pontos marcados.',
  'monobloco laterais paralamas portas borrachas');
E('soleiras', 'soldada', 'Soldadas a ponto na aba de baixo e na borda da abertura da porta, emendadas às laterais e ao assoalho.');
P('colunas', 'Colunas dianteiras e moldura do para-brisa', 'carro',
  'Dos lados do para-brisa até o teto, e a faixa sob o para-brisa.',
  'Seguram o teto e o para-brisa e formam a borda da abertura da porta. Trabalham na proteção em capotamento.',
  'Coluna amassada ou torta compromete a estrutura e o fechamento da porta.',
  'teto para_brisa portas monobloco grade_torpedo');
E('colunas', 'soldada', 'Parte soldada da estrutura, junto com o teto e a caixa de ar. O para-brisa é colado na moldura que elas formam.');
P('teto', 'Teto', 'carro',
  'Topo da cabine.',
  'Chapa que fecha a cabine e trabalha junto com as colunas e as travessas.',
  'Sol e chuva degradam o verniz; encere com alguma frequência se o carro dorme fora.',
  'colunas laterais para_brisa dobr_tampa monobloco');
E('teto', 'soldada', 'Soldado a ponto nas bordas: nas laterais (sobre as colunas e acima das portas), na frente (moldura do para-brisa) e atrás (acima da tampa), com massa de vedação. Não se desmonta.');
P('laterais', 'Laterais traseiras', 'carro',
  'Da porta até a traseira, em volta da roda de trás.',
  'Chapa externa que forma a caixa da roda traseira, a coluna traseira e o contorno das lanternas.',
  'Reparo exige funilaria. Vigie ferrugem na borda da caixa de roda e na base das lanternas.',
  'soleiras teto painel_tras caixas_roda lanternas vidros_laterais bocal para_choque_t');
E('laterais', 'soldada', 'Soldadas a ponto na coluna da porta, na soleira, na caixa de roda interna, junto ao teto e ao painel traseiro, com massa de vedação por cima. Troca só cortando e soldando.');
P('painel_tras', 'Painel traseiro', 'carro',
  'Atrás do para-choque traseiro, abaixo da tampa.',
  'Chapa que fecha a traseira da carroceria. Recebe o batente da fechadura da tampa e os apoios do para-choque.',
  'Batidas leves na traseira amassam o painel por trás do para-choque; olhe por dentro do porta-malas.',
  'tampa_tras fech_tampa para_choque_t laterais monobloco');
E('painel_tras', 'soldada', 'Soldado às laterais e ao assoalho do porta-malas.');
P('travessa_frontal', 'Painel frontal', 'carro',
  'Frente do cofre, atrás do para-choque.',
  'Estrutura que segura radiador, faróis e a fechadura do capô.',
  'Enferruja e trinca depois de batidas leves.',
  'radiador fech_capo farois viga_dianteira monobloco');
E('travessa_frontal', 'parafusada', 'A travessa de cima é presa por parafusos nas pontas, junto aos faróis. Confira no seu carro antes de soltar: o radiador e os faróis dependem dela.');
P('viga_dianteira', 'Viga de impacto dianteira', 'carro',
  'Atrás do para-choque dianteiro.',
  'Absorve impactos leves e os distribui para as longarinas.',
  'Depois de uma batida, confira se amassou.',
  'para_choque_d monobloco');
E('viga_dianteira', 'parafusada', 'Parafusada nas pontas das longarinas.');

/* painéis parafusados */
P('capo', 'Capô', 'carro',
  'Topo do cofre.',
  'Cobre o motor. Por baixo tem um reforço de chapa que dá rigidez.',
  'Lubrifique dobradiças e fechadura. Aberto, fica apoiado na vareta.',
  'dobr_capo fech_capo grade_torpedo paralamas travessa_frontal');
E('capo', 'parafusada', 'Duas dobradiças atrás, com dois parafusos em cada no capô. Na frente, a lingueta embaixo dele entra na fechadura da travessa. Batentes de borracha reguláveis acertam a altura. Para tirar: risque a posição das dobradiças, apoie o capô e solte os quatro parafusos.');
P('paralamas', 'Para-lamas dianteiros', 'carro',
  'Laterais dianteiras, em volta das rodas da frente.',
  'Cobrem as rodas dianteiras e fecham a lateral do cofre.',
  'Barro acumulado por dentro enferruja a borda; lave por dentro da caixa de roda.',
  'para_choque_d portas soleiras caixas_roda piscas_lat farois capo');
E('paralamas', 'parafusada', 'Todo parafusado: cerca de sete parafusos por lado, na borda de cima (sob o capô), na frente junto ao farol, embaixo na soleira e atrás, na coluna da porta. As emendas levam massa de vedação. Para trocar: tire a roda, o forro da caixa de roda, o para-choque e o farol.');
P('portas', 'Portas (2)', 'carro',
  'Laterais. Carro de 2 portas, portas longas.',
  'Cada porta tem um forro externo de chapa, um painel interno, a moldura do vidro e, por dentro, máquina de vidro, fechadura e alto-falante.',
  'Lubrifique dobradiças e limitador. Drenos entupidos embaixo da porta enferrujam por dentro.',
  'dobradicas fech_portas maq_vidro vidros_portas retrovisores borrachas frisos forros_portas');
E('portas', 'parafusada', 'Duas dobradiças na coluna dianteira e um limitador que segura a porta aberta. Atrás, a fechadura engata no batente parafusado na coluna. Para tirar: solte o limitador e o chicote, se houver, e depois as dobradiças, com a porta apoiada. A regulagem das dobradiças acerta a fresta.');
P('dobradicas', 'Dobradiças e limitadores das portas', 'carro',
  'Na frente das portas, escondidas entre a porta e a coluna.',
  'Sustentam a porta e deixam ela girar. O limitador segura a porta aberta em dois pontos.',
  'Porta caída raspa na soleira: pinos e buchas das dobradiças gastos. Lubrifique uma vez por ano.',
  'portas colunas');
E('dobradicas', 'parafusada', 'Parafusadas na coluna e na porta; o limitador é parafusado na coluna e corre dentro da porta.');
P('fech_portas', 'Fechaduras, batentes e maçanetas', 'carro',
  'Borda traseira das portas; o batente fica na coluna.',
  'A fechadura, dentro da porta, engata no batente em forma de U preso à coluna. A maçaneta externa e o cilindro da chave se ligam a ela por varetas.',
  'Lubrifique; cilindro engripado dificulta a chave. Porta que precisa de batida forte para fechar pede regulagem do batente.',
  'portas laterais');
E('fech_portas', 'parafusada', 'Fechadura presa por três parafusos Torx na borda da porta; batente preso por dois parafusos na coluna; maçaneta presa por dentro da porta.');
P('retrovisores', 'Retrovisores externos', 'carro',
  'Na frente das portas.',
  'Visão lateral.',
  '',
  'portas');
E('retrovisores', 'parafusada', 'Três parafusos ou porcas por dentro da porta, sob o acabamento triangular.');
P('tampa_tras', 'Tampa traseira', 'carro',
  'Traseira.',
  'Porta do porta-malas, com o vidro, o limpador, a luz de freio alta e a placa.',
  'Amortecedores cansados deixam a tampa cair; borracha ressecada deixa entrar água.',
  'dobr_tampa amort_tampa fech_tampa vidro_tras limpador_tras luz_placa luz_freio porta_malas borrachas');
E('tampa_tras', 'parafusada', 'Duas dobradiças presas no teto (porcas por dentro, sob o forro) e dois amortecedores a gás com pinos esféricos. Embaixo, a fechadura engata no batente do painel traseiro. Batentes de borracha acertam o alinhamento.');
P('dobr_capo', 'Dobradiças do capô', 'carro',
  'Nos cantos de trás do capô, perto do para-brisa.',
  'Deixam o capô girar para abrir.',
  'Lubrifique; dobradiça dura faz o capô abrir torto.',
  'capo paralamas');
E('dobr_capo', 'parafusada', 'Parafusadas na carroceria e no capô; as folgas dos furos servem para alinhar o capô.');
P('dobr_tampa', 'Dobradiças da tampa traseira', 'carro',
  'Na borda de trás do teto.',
  'Deixam a tampa girar para cima.',
  'Ferrugem em volta delas indica infiltração de água: revise a vedação.',
  'tampa_tras teto');
E('dobr_tampa', 'parafusada', 'Porcas no teto, por dentro, sob o forro, e parafusos na tampa.');
P('fech_tampa', 'Fechadura e batente da tampa', 'carro',
  'Embaixo da tampa; o batente fica no painel traseiro.',
  'Trava a tampa fechada.',
  'Lubrifique; tampa que não fecha de primeira pede regulagem do batente.',
  'tampa_tras painel_tras');
E('fech_tampa', 'parafusada', 'Fechadura parafusada na tampa e batente parafusado no painel traseiro.');
P('fech_capo', 'Fechadura e cabo do capô', 'carro',
  'Centro do painel frontal; a alavanca fica dentro da cabine.',
  'Trava a lingueta do capô; o cabo libera pela alavanca interna. Tem uma trava de segurança que se solta por fora.',
  'Engraxe a fechadura; cabo esticado pode impedir a abertura.',
  'capo travessa_frontal');
E('fech_capo', 'parafusada', 'Fechadura parafusada na travessa; o cabo vai preso por presilhas até a alavanca.');
P('amort_tampa', 'Amortecedores da tampa', 'carro',
  'Nas laterais da abertura da tampa.',
  'Molas a gás que ajudam a levantar e seguram a tampa aberta.',
  'Troca simples quando perdem gás.',
  'tampa_tras');
E('amort_tampa', 'parafusada', 'Encaixados em pinos esféricos com trava de mola: levante a trava com uma chave de fenda pequena e puxe.');
P('maq_vidro', 'Máquinas de vidro', 'carro',
  'Dentro das portas.',
  'Mecanismo que sobe e desce o vidro, de manivela ou elétrico, conforme o carro.',
  'Cabo solto ou roldana quebrada fazem o vidro cair ou entortar.',
  'vidros_portas portas');
E('maq_vidro', 'parafusada', 'Parafusada ou rebitada no painel interno da porta; o vidro se prende a ela por grampos.');

/* vidros */
P('para_brisa', 'Para-brisa', 'carro',
  'Frente da cabine.',
  'Vidro laminado colado na moldura. Por ser colado, também trabalha na rigidez da cabine.',
  'Trinca sempre cresce; a troca é feita por empresa especializada.',
  'colunas teto limpador retrovisor_int borrachas');
E('para_brisa', 'colada', 'Colado na moldura com um cordão de poliuretano (PU); não tem parafusos. Na troca, a cola antiga é cortada e um cordão novo é aplicado.');
P('vidro_tras', 'Vidro traseiro térmico', 'carro',
  'Na tampa traseira.',
  'Vidro com desembaçador elétrico.',
  'Não raspe o lado de dentro: os fios do desembaçador ficam ali.',
  'tampa_tras limpador_tras');
E('vidro_tras', 'colada', 'Colado na tampa com cordão de poliuretano.');
P('vidros_laterais', 'Vidros laterais traseiros', 'carro',
  'Atrás das portas.',
  'Vidros fixos.',
  'Vidro chiando ou com água entrando indica cola descolada.',
  'laterais teto borrachas');
E('vidros_laterais', 'colada', 'Fixos, colados na carroceria com cordão de poliuretano e acabamento de borracha em volta.');
P('vidros_portas', 'Vidros das portas', 'carro',
  'Nas portas.',
  'Vidros móveis que correm em canaletas de borracha.',
  'Canaletas limpas poupam a máquina de vidro.',
  'portas maq_vidro borrachas');
E('vidros_portas', 'encaixada', 'Correm em canaletas de borracha na moldura da porta e se prendem à máquina por grampos ou parafusos, acessíveis com o forro da porta tirado.');

/* plásticos, acabamentos e vedações */
P('para_choque_d', 'Para-choque dianteiro', 'carro',
  'Frente.',
  'Capa plástica que absorve toques, com as entradas de ar do radiador e o suporte da placa.',
  'Presilhas e guias quebradas deixam frestas e barulhos.',
  'viga_dianteira grade grade_inf farois paralamas travessa_frontal');
E('para_choque_d', 'parafusada', 'Capa plástica presa por parafusos em cima (na travessa, sob o capô), nas caixas de roda e embaixo, e encaixada nas guias laterais sob os faróis. Para tirar: solte os parafusos e puxe as pontas para fora das guias.');
P('para_choque_t', 'Para-choque traseiro', 'carro',
  'Traseira.',
  'Capa plástica que absorve toques e aloja a luz de neblina.',
  '',
  'painel_tras neblina_tras laterais lanternas');
E('para_choque_t', 'parafusada', 'Parafusos por dentro do porta-malas, nas caixas de roda e embaixo, e guias laterais sob as lanternas. Por trás fica o painel traseiro de aço.');
P('grade', 'Grade superior', 'carro',
  'Entre os faróis.',
  'Entrada de ar para o radiador.',
  '',
  'para_choque_d radiador');
E('grade', 'encaixada', 'Presa por presilhas plásticas.');
P('grade_inf', 'Grade inferior', 'carro',
  'Parte baixa do para-choque.',
  'Entrada principal de ar para o radiador.',
  'Tire folhas e insetos para o ar passar.',
  'para_choque_d radiador');
E('grade_inf', 'encaixada', 'Encaixada no para-choque.');
P('grade_torpedo', 'Grade do torpedo', 'carro',
  'Entre o capô e o para-brisa, embaixo dos limpadores.',
  'Deixa entrar o ar da ventilação e cobre a caixa de ar, onde ficam o motor do limpador e os drenos de água.',
  'Folhas acumuladas entopem os drenos e a água vai parar no tapete ou na elétrica. Limpe de vez em quando, principalmente com o carro parado embaixo de árvore.',
  'capo colunas limpador caixa_ar corta_fogo');
E('grade_torpedo', 'encaixada', 'Presilhas e um encaixe sob a borda do para-brisa. Os braços do limpador saem antes.');
P('caixas_roda', 'Caixas de roda e forros', 'carro',
  'Em volta das 4 rodas.',
  'Na frente, forros plásticos protegem o para-lama e o cofre de água, barro e pedras; atrás, a caixa é de chapa com proteção por baixo.',
  'Lave por dentro para não acumular barro.',
  'paralamas laterais monobloco');
E('caixas_roda', 'encaixada', 'Forros presos por presilhas plásticas na borda do para-lama e por parafusos na caixa interna.');
P('borrachas', 'Borrachas de vedação', 'carro',
  'Em volta das portas, da tampa, sob o capô e nos vidros.',
  'Vedam contra água, poeira e ruído e amortecem o fechamento.',
  'Carro que dorme ao tempo resseca as borrachas: passe um protetor à base de silicone a cada poucos meses. Borracha rasgada deixa entrar água.',
  'portas tampa_tras capo vidros_portas vidros_laterais para_brisa');
E('borrachas', 'encaixada', 'Encaixadas por pressão nas abas das aberturas e nas canaletas dos vidros. A do para-brisa acompanha o vidro.');
P('frisos', 'Frisos laterais', 'carro',
  'Na metade de baixo das portas e laterais.',
  'Protegem a lataria de batidas de porta de outros carros.',
  'Friso descolando junta água atrás e mancha a pintura.',
  'portas laterais');
E('frisos', 'colada', 'Colados com fita dupla-face automotiva.');

/* ===== Fixadores ===== */
const FIX = {};
function F(id, n, parent, q, spec, torque, note) { FIX[id] = { id, n, p: parent, q, spec, t: torque, note }; }
F('fx_roda', 'Parafusos de roda', 'rodas', 16, '4 por roda, furação 4×108', '≈ 90–100 N·m', 'Aperte em cruz, com torquímetro, e reaperte depois de uns 50 km. Pistola de impacto no máximo estraga rosca e disco.');
F('fx_cubo', 'Porcas dos cubos dianteiros', 'mangas', 2, 'Porca central do semieixo', 'muito alto (≈ 250 N·m, confirme no manual)', 'Porca nova ou travada. Aperto final com o carro no chão.');
F('fx_cabecote', 'Parafusos do cabeçote', 'cabecote', 10, 'Elásticos, aperto angular', '20 N·m + 240° (120° + 120°)', 'Espiral de dentro para fora. Meça cada um: comprimento máximo de 176,5 mm e no máximo dois usos.');
F('fx_bielas', 'Parafusos das capas de biela', 'bielas', 8, '2 por biela', '38 N·m', 'Cada capa volta para a mesma biela — marque antes de desmontar.');
F('fx_mancais', 'Parafusos do semi-cárter (mancais)', 'virabrequim', 10, 'Seguram o virabrequim', '20 N·m + 47°', 'Confira a corrente da bomba de óleo antes de fechar. Folga axial do virabrequim: 0,07 a 0,23 mm.');
F('fx_carter', 'Parafusos do cárter', 'carter', 14, 'Pequenos, com cola de vedação', 'baixo (≈ 8–10 N·m)', 'Limpe bem as flanges antes da cola nova. Rosca no alumínio: não force.');
F('fx_bujao', 'Bujão do cárter', 'carter', 1, 'Com arruela de vedação', '≈ 30 N·m', 'Arruela nova a cada troca. O cárter é de alumínio e a rosca espana fácil.');
F('fx_velas', 'Rosca das velas', 'velas', 4, 'Rosca de 14 mm no cabeçote', '≈ 25 N·m', 'Rosqueie à mão até encostar antes de usar o torquímetro.');
F('fx_bobina', 'Fixação da bobina', 'bobina', 2, 'Parafusos pequenos', 'leve', 'Confira as molas de contato das velas antes de encaixar.');
F('fx_tampa_valv', 'Fixação da tampa de válvulas', 'tampa_valv', 6, 'Com espaçadores e borrachas', 'leve (≈ 10 N·m)', 'Aperto demais deforma a junta e o vazamento volta.');
F('fx_coletor_esc', 'Porcas do coletor de escape', 'coletor_esc', 8, 'Prisioneiros com porcas autotravantes', 'firme (≈ 20 N·m)', 'Junta e porcas novas.');
F('fx_coletor_adm', 'Parafusos do coletor de admissão', 'coletor_adm', 6, 'Coletor plástico', 'baixo', 'Juntas novas e aperto cruzado.');
F('fx_galeria', 'Parafusos da galeria', 'galeria', 2, 'Seguram galeria e bicos', '≈ 10 N·m', 'Anéis dos bicos novos, com vaselina.');
F('fx_tbi', 'Parafusos do corpo de borboleta', 'tbi', 4, '—', 'baixo', 'Junta nova. Depois da limpeza pode ser preciso reaprendizado.');
F('fx_polia_vira', 'Parafuso da polia do virabrequim', 'polia_vira', 1, 'Parafuso central', 'torque angular (manual de reparação)', 'Trave o virabrequim com a ferramenta própria para soltar e apertar.');
F('fx_distrib', 'Fixações da distribuição', 'correia_dent', 5, 'Tensor, polia do comando e capas', 'conforme manual', 'Ponto com pinos no comando e no volante. Gire o motor 4 voltas e confira a marca do tensor.');
F('fx_alternador', 'Parafusos do alternador', 'alternador', 2, 'Suporte e articulação', 'firme', 'Desligue o negativo da bateria (com o procedimento anti-ECO) antes.');
F('fx_partida', 'Parafusos do motor de partida', 'motor_partida', 3, 'Na carcaça do câmbio', 'firme', 'E a porca do cabo positivo no solenoide.');
F('fx_coxins', 'Fixações dos coxins do motor', 'coxim_dir', 7, 'Coxins direito, esquerdo e inferior', 'alto (manual)', 'Troque com o motor apoiado por baixo.');
F('fx_cambio', 'Parafusos câmbio–motor', 'cambio', 7, 'Na capa da embreagem', 'alto', 'Removidos na troca de embreagem.');
F('fx_bujoes_cambio', 'Bujões do câmbio', 'cambio', 2, 'Dreno e nível', 'firme', 'Arruelas novas.');
F('fx_plato', 'Parafusos do platô', 'embreagem', 6, 'Em volta do platô', 'em cruz, aos poucos', 'Centralize o disco com ferramenta antes do aperto final.');
F('fx_volante', 'Parafusos do volante do motor', 'volante_motor', 6, 'Com trava-química', 'alto (manual)', 'Parafusos novos.');
F('fx_pinca', 'Parafusos das pinças', 'pincas', 8, 'Pinos-guia e suporte, por lado', 'guias médio; suporte alto', 'Limpe e lubrifique os pinos-guia com graxa própria.');
F('fx_disco', 'Parafusos de posição do disco', 'discos', 4, '2 por disco', 'leve', 'Só posicionam o disco; quem segura é a roda.');
F('fx_amort_d', 'Fixações dos amortecedores dianteiros', 'amort_diant', 10, '3 porcas no topo e 2 parafusos na manga, por lado', 'alto', 'Desmonte só com compressor de molas: mola comprimida é perigosa.');
F('fx_bandeja', 'Fixações das bandejas', 'bandejas', 6, 'Buchas no agregado e pivô', 'alto', 'Aperte as buchas com o peso do carro sobre as rodas.');
F('fx_agregado', 'Parafusos do agregado', 'agregado', 4, 'Na carroceria', 'muito alto', 'Nunca solte sem apoiar motor e câmbio.');
F('fx_eixo_t', 'Parafusos do eixo traseiro', 'eixo_tras', 4, 'Suportes na carroceria', 'alto', 'Marque a posição antes de soltar.');
F('fx_amort_t', 'Parafusos dos amortecedores traseiros', 'amort_tras', 4, '2 por lado', 'alto', 'Aperto final com peso sobre a roda.');
F('fx_bateria', 'Grampo e terminais da bateria', 'bateria', 3, 'Porcas de 10 mm', 'firme, sem esmagar', 'Solte o negativo primeiro e ligue por último.');
F('fx_paralama', 'Parafusos dos para-lamas', 'paralamas', 14, 'Cerca de 7 por lado: 4 na borda de cima (sob o capô), 1 junto ao farol, 1 embaixo na soleira e 1 atrás, na coluna da porta', 'leve (chapa fina)', 'Para chegar a todos: tire a roda, o forro da caixa de roda, o para-choque e o farol. Refaça a massa de vedação nas emendas.');
F('fx_parachoque', 'Parafusos do para-choque dianteiro', 'para_choque_d', 9, 'Em cima (na travessa, sob o capô), nas caixas de roda e embaixo', 'leve', 'Solte todos e puxe as pontas para fora das guias laterais.');
F('fx_guias_pcd', 'Guias laterais do para-choque dianteiro', 'para_choque_d', 2, 'Suportes plásticos sob os faróis', 'encaixe deslizante', 'As pontas do para-choque correm nessas guias; guia quebrada deixa a ponta solta e desalinhada.');
F('fx_parachoque_t', 'Parafusos do para-choque traseiro', 'para_choque_t', 10, 'Por dentro do porta-malas, nas caixas de roda e embaixo', 'leve', 'Tire o acabamento do porta-malas para chegar aos de cima.');
F('fx_guias_pct', 'Guias laterais do para-choque traseiro', 'para_choque_t', 2, 'Suportes plásticos sob as lanternas', 'encaixe deslizante', 'Puxe a ponta para fora com cuidado para não quebrar a guia.');
F('fx_forros', 'Presilhas dos forros das caixas de roda', 'caixas_roda', 12, 'Na borda do para-lama', 'encaixe por pressão', 'Presilhas plásticas quebram com facilidade; tenha reposição à mão.');
F('fx_capo', 'Parafusos das dobradiças do capô', 'dobr_capo', 8, '2 no capô e 2 na carroceria, por dobradiça', 'médio', 'Risque a posição antes de soltar: é o que acerta as frestas do capô.');
F('fx_fech_capo', 'Parafusos da fechadura do capô', 'fech_capo', 2, 'Na travessa do painel frontal', 'médio', 'A fechadura tem folga de regulagem para alinhar com a lingueta.');
F('fx_dobradicas', 'Parafusos das dobradiças e limitadores', 'dobradicas', 18, 'Por porta: 4 na coluna, 4 na porta e 1 no limitador', 'alto', 'É na folga desses parafusos que se regula a fresta e o fechamento da porta. Apoie a porta antes de soltar.');
F('fx_fech_portas', 'Parafusos da fechadura e do batente', 'fech_portas', 10, 'Por porta: 3 Torx na fechadura (na borda da porta) e 2 no batente (na coluna)', 'médio', 'O batente se move um pouco para regular o fechamento; marque antes de soltar.');
F('fx_retrovisor', 'Fixação dos retrovisores', 'retrovisores', 6, '3 por espelho, por dentro da porta, sob o acabamento triangular', 'leve', 'Segure o espelho por fora antes de soltar o último.');
F('fx_vidro_porta', 'Grampos do vidro na máquina', 'vidros_portas', 4, '2 por porta', 'leve', 'Com o forro da porta tirado; desça o vidro até aparecerem os parafusos.');
F('fx_maq_vidro', 'Fixação da máquina de vidro', 'maq_vidro', 8, '4 por porta, no painel interno', 'leve', 'Parafusos ou rebites, conforme a peça.');
F('fx_forro_porta', 'Presilhas do forro da porta', 'forros_portas', 16, 'Em volta do forro, mais parafusos no puxador', 'encaixe por pressão', 'Solte com uma espátula plástica rente às presilhas para não rasgar o forro.');
F('fx_tampa', 'Parafusos das dobradiças da tampa', 'dobr_tampa', 8, 'Porcas no teto (sob o forro) e parafusos na tampa', 'médio', 'Apoie a tampa e tire os amortecedores antes de soltar as dobradiças.');
F('fx_amort_tampa', 'Pinos dos amortecedores da tampa', 'amort_tampa', 4, 'Pinos esféricos com trava de mola', 'trava de mola', 'Levante a trava com uma chave de fenda pequena e puxe o amortecedor.');
F('fx_fech_tampa', 'Parafusos da fechadura e do batente da tampa', 'fech_tampa', 4, '2 na fechadura (na tampa) e 2 no batente (no painel traseiro)', 'médio', 'Regule o batente se a tampa bater ou não fechar de primeira.');
F('fx_farol', 'Parafusos dos faróis', 'farois', 6, '3 por farol', 'leve', 'Regule o facho depois de recolocar.');
F('fx_lanterna', 'Porcas das lanternas', 'lanternas', 6, '3 por lanterna, por dentro do porta-malas', 'leve (plástico)', 'Borracha de vedação nova evita água no porta-malas.');
F('fx_grade', 'Presilhas da grade', 'grade', 4, 'Presilhas plásticas', 'encaixe por pressão', 'Solte as travas por trás, com o capô aberto.');
F('fx_grade_torpedo', 'Presilhas da grade do torpedo', 'grade_torpedo', 6, 'Presilhas e encaixe sob a borda do para-brisa', 'encaixe por pressão', 'Tire os braços do limpador antes.');
F('fx_travessa', 'Parafusos da travessa do painel frontal', 'travessa_frontal', 4, 'Nas pontas, junto aos faróis', 'médio', 'Solte só com o radiador e os faróis apoiados.');
F('fx_viga', 'Parafusos da viga de impacto', 'viga_dianteira', 4, 'Nas pontas das longarinas', 'alto', 'Depois de uma batida, confira se a viga e as pontas das longarinas não entortaram.');
F('fx_bocal', 'Parafusos do bocal de abastecimento', 'bocal', 2, 'Na caixa da portinhola', 'leve', 'Com o tanque vazio; o bocal também é preso por abraçadeira na mangueira do tanque.');
F('fx_solda_teto', 'Pontos de solda do teto', 'teto', 0, 'Nas bordas: laterais, frente e trás', 'não se desmonta', 'Troca de teto é serviço de funilaria: os pontos são furados ou cortados e a peça nova é soldada e selada.');
F('fx_solda_laterais', 'Pontos de solda das laterais', 'laterais', 0, 'Na coluna, na soleira, na caixa de roda, no painel traseiro e junto ao teto', 'não se desmonta', 'As emendas levam massa de vedação por cima; fissura nessa massa deixa entrar água e começa a ferrugem.');
F('fx_solda_soleiras', 'Pontos de solda das soleiras', 'soleiras', 0, 'Na aba de baixo e na borda da abertura da porta', 'não se desmonta', 'A aba soldada de baixo é onde o macaco apoia, nos pontos marcados; macaco fora do lugar amassa a soleira.');
F('fx_solda_colunas', 'Pontos de solda das colunas', 'colunas', 0, 'Na borda da abertura da porta e na moldura do para-brisa', 'não se desmonta', 'Coluna amassada compromete a estrutura: reparo só em funilaria de confiança.');
F('fx_solda_painel_tras', 'Pontos de solda do painel traseiro', 'painel_tras', 0, 'Nas laterais e no assoalho', 'não se desmonta', 'Depois de batida na traseira, confira por dentro do porta-malas.');
F('fx_cola_parabrisa', 'Cola do para-brisa', 'para_brisa', '1 cordão', 'Cordão de poliuretano em volta do vidro', 'cura em algumas horas', 'Depois da troca, espere a cura indicada pelo instalador antes de rodar ou bater as portas com força.');
F('fx_cola_vidro_tras', 'Cola do vidro traseiro', 'vidro_tras', '1 cordão', 'Cordão de poliuretano na tampa', 'cura em algumas horas', 'Água no porta-malas pode vir de falha nesse cordão.');
F('fx_cola_laterais', 'Cola dos vidros laterais', 'vidros_laterais', '2 cordões', 'Cordão de poliuretano na carroceria', 'cura em algumas horas', 'Vidro fixo chiando ou deixando entrar água indica cola descolada.');
F('fx_frisos', 'Fita dos frisos laterais', 'frisos', '4 tiras', 'Fita dupla-face automotiva', 'pressão, com a lataria limpa e seca', 'Para recolocar: limpe com álcool isopropílico, use fita nova e pressione bem.');
F('fx_escape', 'Braçadeiras e parafusos do escapamento', 'flexivel', 6, 'Flanges, junta flexível com molas e braçadeiras', 'médio', 'Os parafusos com mola da junta flexível vão até o batente.');
F('fx_tanque', 'Fixação do tanque', 'tanque', 4, 'Parafusos e cintas', 'médio', 'Para remover: tanque vazio e bateria desligada.');
F('fx_sonda', 'Rosca da sonda lambda', 'sonda', 1, 'Rosca M18', '≈ 40–50 N·m', 'Pasta antitravamento só na rosca; sonda nova já vem com ela.');
F('fx_sens_det', 'Parafuso do sensor de detonação', 'sens_det', 1, '—', '≈ 20 N·m', 'Torque errado muda a leitura.');
F('fx_sens_rot', 'Parafuso do sensor de rotação', 'sens_rot', 1, '—', 'leve', 'Limpe a limalha do ímã.');
F('fx_bomba_agua', 'Parafusos da bomba d’água', 'bomba_agua', 5, 'Com junta', 'médio', 'Aproveite a troca da correia dentada.');
F('fx_termostato', 'Parafusos da caixa d’água', 'termostato', 3, 'Com anel de vedação', 'leve', 'Sangre o sistema depois de completar.');
F('fx_bancos', 'Parafusos dos bancos', 'bancos_diant', 8, '4 por banco', 'alto', 'Item de segurança.');
F('fx_cintos', 'Ancoragens dos cintos', 'cintos', 6, 'Parafusos Torx', 'alto', 'Item de segurança: nada de improviso.');
F('fx_volante_dir', 'Fixação do volante', 'volante_dir', 1, 'Parafuso central', 'alto', 'Marque a posição antes de tirar.');
F('fx_caixa_dir', 'Fixações da caixa de direção', 'caixa_dir', 6, 'Braçadeiras no agregado e porcas dos terminais', 'alto', 'Alinhamento obrigatório depois.');
F('fx_estepe', 'Parafuso do cesto do estepe', 'estepe', 1, 'Acesso pelo porta-malas', 'à mão', 'Lubrifique para não engripar.');
F('fx_limpador', 'Porcas dos braços do limpador', 'limpador', 3, '2 na frente e 1 atrás', 'médio', 'Marque a posição de repouso antes de tirar.');
F('fx_mangueiras', 'Abraçadeiras das mangueiras', 'mang_sup', 10, 'Água, ar e vácuo', 'firme', 'Troque as oxidadas; abraçadeira frouxa é vazamento certo.');
F('fx_filtro_oleo', 'Rosca do filtro de óleo', 'filtro_oleo', 1, 'Rosca central', 'à mão, mais ¾ de volta', 'Unte o anel de borracha com óleo novo.');
F('fx_ecu', 'Fixação da central', 'ecu', 2, 'Suporte', 'leve', 'Conector encaixado até o fim e seco.');

const FXKIND = {
  parafuso: ['Parafusos e porcas', 'Desmontam com ferramenta; o aperto certo importa.'],
  presilha: ['Presilhas', 'Encaixes plásticos de pressão; quebram com facilidade.'],
  guia: ['Guias de encaixe', 'Suportes onde as pontas das peças deslizam e se apoiam.'],
  pino: ['Pinos e rótulas', 'Articulações com trava de mola.'],
  solda: ['Pontos de solda', 'Chapas unidas de vez: fazem parte da estrutura.'],
  cola: ['Colas', 'Vidros fixos presos com cordão de poliuretano.'],
  fita: ['Fitas', 'Acabamentos colados com fita dupla-face.']
};
function K(k, ...ids) { ids.forEach(id => { FIX[id].k = k; }); }
K('presilha', 'fx_forros', 'fx_forro_porta', 'fx_grade', 'fx_grade_torpedo');
K('guia', 'fx_guias_pcd', 'fx_guias_pct');
K('pino', 'fx_amort_tampa');
K('solda', 'fx_solda_teto', 'fx_solda_laterais', 'fx_solda_soleiras', 'fx_solda_colunas', 'fx_solda_painel_tras');
K('cola', 'fx_cola_parabrisa', 'fx_cola_vidro_tras', 'fx_cola_laterais');
K('fita', 'fx_frisos');
Object.values(FIX).forEach(f => { f.k = f.k || 'parafuso'; });

/* ===== Sintomas ===== */
const SYMPTOMS = [
  { id: 'frio', n: 'Treme, falha ou parece afogar na primeira partida do dia',
    d: 'Com o motor frio a central enriquece a mistura até ele esquentar. Se um sensor engana essa conta, ou se sobra combustível, o motor afoga e balança. Com gasolina no tanque a partida a frio quase não atua; com etanol é ela que ajuda o motor a pegar.',
    s: [
      ['sens_temp', 'Leitura errada de temperatura faz a central errar a mistura: afoga no frio e gasta mais.', 'No scanner, com o motor frio, a leitura deve bater com a temperatura do dia.'],
      ['bicos', 'Bico pingando deixa combustível acumulado durante a noite.', 'Teste de estanqueidade e vazão em bancada.'],
      ['bobina', 'Bobina fraca falha mais com o motor frio; é defeito conhecido no 206.', 'O scanner mostra falha por cilindro; confira as molas de contato.'],
      ['velas', 'Vela gasta falha mais com mistura rica e motor frio.', 'Veja cor, folga e quilometragem.'],
      ['valv_pf', 'Se ficar aberta, escorre gasolina da partida a frio no coletor.', 'Veja se o nível do reservatório cai sem uso e se há cheiro de gasolina.'],
      ['res_pf', 'Gasolina velha no reservatório atrapalha a partida com etanol.', 'Renove a gasolina do reservatório.'],
      ['tbi', 'Borboleta suja deixa a marcha lenta instável até esquentar.', 'Limpeza e reaprendizado.'],
      ['tmap', 'Leitura errada do ar no coletor desregula a mistura.', 'Scanner e busca de entrada falsa de ar.'],
      ['coxim_dir', 'Coxins gastos transformam uma falha pequena num balanço forte do motor inteiro.', 'Observe o motor com alguém acelerando de leve.']
    ] },
  { id: 'consumo', n: 'Consumo acima do normal',
    d: 'Referência de fábrica: 10,7 km/L na cidade e 14,2 na estrada com gasolina; 7,6 e 10,5 com etanol. Depois de trocar de combustível, o primeiro tanque ainda é mistura e a central leva alguns quilômetros para se readaptar. Meça em dois ou três tanques seguidos, sempre enchendo até o primeiro clique.',
    s: [
      ['termostato', 'Travado aberto, o motor nunca chega à temperatura e a central mantém a mistura rica.', 'Ponteiro demorando ou não chegando ao meio.'],
      ['sens_temp', 'Indicando frio o tempo todo, a central enriquece sem parar.', 'Compare a leitura do scanner com o motor quente.'],
      ['sonda', 'Sonda lenta erra a correção e a leitura do etanol.', 'Sinal da sonda no scanner.'],
      ['bicos', 'Bico pingando ou sujo desperdiça combustível.', 'Limpeza e teste de vazão.'],
      ['bobina', 'Falha de ignição joga combustível fora e ainda castiga o catalisador.', 'Falhas por cilindro no scanner.'],
      ['velas', 'Velas gastas queimam mal a mistura.', 'Troque se estiverem vencidas.'],
      ['filtro_ar', 'Filtro entupido estrangula o motor.', 'Olhe contra a luz.'],
      ['pneus', 'Pneu murcho aumenta o atrito com o chão.', 'Calibre com os pneus frios.'],
      ['pincas', 'Pinça presa segura a roda o tempo todo.', 'Roda muito mais quente que as outras depois de rodar.'],
      ['embreagem', 'Embreagem patinando gasta combustível sem avançar.', 'Giro sobe e o carro não acompanha.']
    ] },
  { id: 'clique', n: 'Clique ao virar a chave e o painel apaga',
    d: 'A corrente da partida é enorme. Qualquer resistência no caminho — terminal oxidado, cabo terra, bateria fraca — derruba a tensão e o painel apaga.',
    s: [
      ['cabos_bat', 'Terminal oxidado ou frouxo, ou cabo terra ruim, é a causa mais comum desse sintoma.', 'Limpe, aperte e veja se melhora.'],
      ['bateria', 'Bateria fraca não segura a tensão sob carga.', 'Teste com carga numa autoelétrica.'],
      ['motor_partida', 'Solenoide ou escovas gastos.', 'Queda de tensão no motor de partida durante a partida.'],
      ['bsm', 'Relé ou fusível com mau contato.', 'Inspeção visual e de oxidação.'],
      ['ign_chave', 'Contato interno gasto no comutador.', 'Teste de continuidade.'],
      ['bsi', 'Com bateria fraca o sistema pode entrar em modo ECO.', 'Scanner da marca para reabilitar, se preciso.']
    ] },
  { id: 'naopega', n: 'Gira normalmente mas não pega',
    d: 'O motor de partida funciona; falta combustível, faísca ou autorização da central.',
    s: [
      ['bomba_comb', 'Sem pressão de combustível não há partida.', 'Ao ligar a chave, a bomba deve zumbir alguns segundos.'],
      ['bsm', 'Relé ou fusível da bomba e da injeção.', 'Teste os relés.'],
      ['sens_rot', 'Sem sinal de rotação a central não injeta nem dá faísca.', 'Conta-giros parado durante a partida é uma pista.'],
      ['ign_chave', 'Imobilizador sem ler a chave bloqueia o motor.', 'Teste a chave reserva.'],
      ['bobina', 'Sem faísca.', 'Teste de centelha.'],
      ['res_pf', 'Com etanol e tempo frio, sem gasolina no reservatório o motor não pega.', 'Confira o nível do reservatório.'],
      ['filtro_comb', 'Entupido, deixa passar pouco combustível.', 'Quilometragem desde a última troca.'],
      ['ecu', 'Água no módulo ou modo ECO.', 'Diagnóstico com scanner.']
    ] },
  { id: 'temperatura', n: 'Ponteiro da temperatura subindo',
    d: 'Pare assim que puder e espere esfriar: rodar superaquecido empena o cabeçote. Nunca abra o reservatório quente.',
    s: [
      ['vaso', 'Nível baixo é o começo de quase tudo.', 'Motor frio: o nível deve estar entre as marcas.'],
      ['ventoinha', 'Se não liga, o motor ferve no trânsito.', 'Deve ligar perto do fim da escala, parado.'],
      ['termostato', 'Travado fechado, a água não chega ao radiador.', 'Mangueira superior fria com o motor quente.'],
      ['bomba_agua', 'Rotor gasto ou vazamento.', 'Gotas embaixo do lado direito do motor.'],
      ['radiador', 'Colmeia entupida ou suja por fora.', 'Diferença de temperatura entre as mangueiras.'],
      ['mang_sup', 'Mangueira estourada esvazia o sistema.', 'Inspeção visual.'],
      ['junta_cab', 'Gases da queima pressurizam o sistema.', 'Bolhas no reservatório com o motor ligado.']
    ] },
  { id: 'oleo', n: 'Luz de óleo acesa ou nível baixando',
    d: 'Luz vermelha de óleo com o motor ligado: desligue na hora.',
    s: [
      ['vareta', 'Primeiro confira o nível.', 'Carro no plano, motor frio.'],
      ['filtro_oleo', 'O modelo menor, montado por engano, derruba a pressão.', 'Confira a aplicação do filtro.'],
      ['sens_oleo', 'O interruptor pode falhar.', 'Medição com manômetro.'],
      ['bomba_oleo', 'Pescador entupido de borra.', 'Pressão real com manômetro.'],
      ['tampa_valv', 'Junta vazando baixa o nível aos poucos.', 'Óleo escorrendo na lateral do cabeçote.'],
      ['carter', 'Vazamento no bujão ou na vedação.', 'Mancha no chão.'],
      ['respiro', 'Pressão interna alta empurra óleo para fora.', 'Óleo na admissão e no duto de ar.']
    ] },
  { id: 'traseira', n: 'Barulho na traseira ou rodas traseiras cambadas',
    d: 'Olhando o carro por trás: rodas traseiras com o topo inclinado para dentro é o sinal clássico do 206.',
    s: [
      ['rol_eixo', 'Rolamentos de agulha gastos: é o defeito mais conhecido do modelo.', 'Folga no braço e desgaste do pneu por dentro.'],
      ['barras_torcao', 'Rangidos das barras e dos apoios.', 'Barulho ao passar em lombada devagar.'],
      ['amort_tras', 'Amortecedor batendo ou vazando.', 'Óleo escorrendo e batida seca.'],
      ['eixo_tras', 'Buchas dos suportes do eixo.', 'Inspeção no elevador.'],
      ['coxins_esc', 'Escapamento batendo no assoalho.', 'Chacoalhe a ponteira com o motor frio.'],
      ['sapatas', 'Peças soltas dentro do tambor.', 'Ruído metálico que muda ao frear.']
    ] },
  { id: 'dianteira', n: 'Batidas na suspensão dianteira em buracos',
    d: 'A suspensão dianteira do 206 tem fama de durar pouco; várias peças baratas fazem barulhos parecidos.',
    s: [
      ['barra_estab', 'Bieletas gastas: o toc-toc mais comum.', 'Chacoalhe a barra com o carro no chão.'],
      ['bandejas', 'Buchas e pivôs.', 'Folga com alavanca, no elevador.'],
      ['coxins_amort', 'Coxim ou rolamento do topo.', 'Estalo ao esterçar parado.'],
      ['amort_diant', 'Amortecedor sem ação.', 'O carro quica ao empurrar a frente.'],
      ['barras_axiais', 'Terminais e axiais com folga.', 'Folga na roda segurando nas laterais.'],
      ['coxim_inf', 'Tranco do motor pode parecer suspensão.', 'Batida ao arrancar e ao frear.'],
      ['mangas', 'Rolamento de roda.', 'Ronco que muda nas curvas.']
    ] },
  { id: 'freio', n: 'Freio chiando, puxando ou pedal baixo',
    d: 'Freio não espera: qualquer mudança de comportamento pede inspeção logo.',
    s: [
      ['pastilhas', 'Pastilha no fim chia metal com metal.', 'Espessura menor que uns 3 mm.'],
      ['discos', 'Disco empenado vibra no pedal; disco gasto perde eficiência.', 'Espessura mínima gravada.'],
      ['pincas', 'Pino-guia preso faz o carro puxar.', 'Roda quente e desgaste desigual.'],
      ['reserv_freio', 'Fluido velho ou nível baixo deixa o pedal baixo.', 'Nível e data da última troca.'],
      ['sapatas', 'Cilindro de roda vazando.', 'Umidade dentro do tambor.'],
      ['servo', 'Servo furado deixa o pedal duro.', 'Chiado no pedal ao frear.'],
      ['mang_vacuo', 'Mangueira de vácuo rachada.', 'Inspeção visual.'],
      ['cil_mestre', 'Vedação interna gasta.', 'Pedal afundando devagar parado.']
    ] },
  { id: 'direcao', n: 'Direção muito pesada, dura ou com ruído',
    d: 'Na direção mecânica o volante pesa em manobra parada e fica leve com o carro andando; isso é normal. Peso fora do comum, volante que não volta sozinho depois da curva ou estalos indicam problema.',
    s: [
      ['pneus', 'Pneu murcho deixa a direção muito mais pesada.', 'Calibre com os pneus frios.'],
      ['coxins_amort', 'Rolamento do coxim do amortecedor travado endurece o volante e estala ao esterçar.', 'Estalo com o carro parado, virando o volante.'],
      ['bandejas', 'Pivô travado ou gasto endurece e faz barulho.', 'Folga e rigidez do pivô no elevador.'],
      ['caixa_dir', 'Caixa sem lubrificação (coifa rasgada) ou com folga.', 'Olhe as coifas e a folga da cremalheira.'],
      ['barras_axiais', 'Terminais e axiais presos ou com folga.', 'Folga na roda segurando nas laterais.'],
      ['coluna', 'Junta da coluna presa ou com folga.', 'Estalo vindo de dentro do carro ao girar o volante.']
    ] },
  { id: 'embreagem', n: 'Embreagem patinando, trepidando ou pedal alto',
    d: 'Disco, platô, rolamento e cabo trabalham juntos.',
    s: [
      ['embreagem', 'Disco gasto patina e trepida.', 'Em 3ª, acelere forte numa subida: o giro sobe e o carro não?'],
      ['cabo_emb', 'Cabo preso muda o ponto do pedal.', 'Pedal duro ou rangendo.'],
      ['rol_emb', 'Rolamento gasto chia com o pedal pisado.', 'Ruído some ao soltar o pedal.'],
      ['volante_motor', 'Face do volante vitrificada ou com trincas.', 'Na troca do kit.'],
      ['coxim_esq', 'Coxim gasto aumenta a trepidação.', 'Motor balançando ao arrancar.']
    ] },
  { id: 'vibracao', n: 'Motor vibrando muito em marcha lenta',
    d: 'Falha de ignição e coxins gastos se somam.',
    s: [
      ['coxim_dir', 'Coxim direito gasto — clássico do 206.', 'Motor se mexendo demais ao acelerar parado.'],
      ['coxim_esq', 'Coxim do câmbio.', 'Batida ao engatar.'],
      ['coxim_inf', 'Tirante inferior.', 'Tranco em arrancada.'],
      ['bobina', 'Cilindro falhando.', 'Scanner.'],
      ['velas', 'Vela ruim.', 'Inspeção.'],
      ['tbi', 'Marcha lenta instável.', 'Limpeza.']
    ] },
  { id: 'injecao', n: 'Luz da injeção acesa',
    d: 'A central gravou um código de falha. Um scanner comum lê o código e aponta o sistema.',
    s: [
      ['sonda', 'Sinal lento ou fora de faixa.', 'Código de falha e gráfico da sonda.'],
      ['bobina', 'Falha de ignição.', 'Contador de falhas por cilindro.'],
      ['sens_temp', 'Sinal incoerente.', 'Leitura com motor frio e quente.'],
      ['tmap', 'Pressão do coletor fora de faixa.', 'Leitura com motor desligado deve ser a pressão ambiente.'],
      ['tbi', 'Borboleta suja ou com erro de posição.', 'Limpeza e reaprendizado.'],
      ['sens_det', 'Detonação ou sensor mal apertado.', 'Torque do sensor.'],
      ['catalisador', 'Eficiência baixa.', 'Temperatura e contrapressão.'],
      ['purga', 'Válvula travada.', 'Teste de acionamento.']
    ] }
];

/* ===== Fluxos ===== */
/* Caminhos animados. Cada passo: [peça, texto, opções]
   from: passo(s) de onde o trecho sai (padrão: o anterior; -1 = começa aqui, sem trecho)
   route: o passo é o próprio tubo/mangueira (segue o traçado real; pick escolhe os trechos)
   via: segue o traçado de outro tubo até a peça ({ r: peça, i: trecho })
   at: ponto(s) exatos da peça (coordenadas do carro); both: um ponto de cada lado
   c: cor do que corre a partir deste passo; c2: cor ao sair do passo (degradê)
   out: trechos extras que saem deste passo para outro passo (ex.: alternador → bateria) */
const FLOWS = [
  { id: 'ar', n: 'O caminho do ar', c: '#E3A21A', d: 'Da frente do carro até a ponteira: o ar entra, queima com o combustível e sai como gás de escape.',
    leg: [['#3D9BE0', 'ar'], ['#E4572E', 'gases quentes']], motion: 'ar',
    steps: [
      ['tomada_ar', 'O ar entra pela frente do carro.', { route: 1, c: '#3D9BE0' }],
      ['filtro_ar', 'A poeira fica no filtro.'],
      ['duto_ar', 'O ar limpo segue pelo duto.', { route: 1 }],
      ['tbi', 'A borboleta dosa o ar conforme o pedal.'],
      ['coletor_adm', 'O coletor divide o ar entre os 4 cilindros; o sensor mede o vácuo.', { route: 1 }],
      ['bicos', 'O bico pulveriza o combustível no ar.', { at: [1.205, 0.678, -0.035] }],
      ['valvulas', 'A válvula de admissão abre e a mistura entra.', { at: [1.29, 0.635, -0.053] }],
      ['pistoes', 'O pistão comprime e a vela solta a faísca: combustão.', { at: [1.345, 0.60, -0.035] }],
      ['valvulas', 'A válvula de escape abre e os gases saem.', { at: [1.40, 0.635, -0.017], c: '#E4572E' }],
      ['coletor_esc', 'Os gases se juntam no coletor.', { route: 1, pick: 'near' }],
      ['sonda', 'A sonda mede o oxigênio e avisa a central.', { at: [1.592, 0.545, -0.10] }],
      ['catalisador', 'O catalisador limpa os gases.', { route: 1 }],
      ['flexivel', 'A junta flexível absorve o balanço do motor.'],
      ['tubo_inter', 'O tubo leva os gases pelo túnel.', { route: 1, pick: [0] }],
      ['silenc_inter', 'Primeiro silencioso.'],
      ['silenc_tras', 'Saída pela ponteira, na traseira direita.', { route: 1, via: { r: 'tubo_inter', i: 1 } }]
    ] },
  { id: 'comb', n: 'O caminho do combustível', c: '#3F9D4A', d: 'Do bocal até os cilindros, mais o atalho da partida a frio e o retorno dos vapores pelo cânister.',
    leg: [['#3F9D4A', 'combustível do tanque'], ['#E0A526', 'gasolina da partida a frio'], ['#9C6BD6', 'vapores do tanque']],
    steps: [
      ['bocal', 'Você abastece pelo bocal.', { route: 1, at: [-1.30, 0.72, -0.75] }],
      ['tanque', 'O combustível fica no tanque, sob o banco traseiro.'],
      ['bomba_comb', 'A bomba elétrica pressuriza a linha.'],
      ['filtro_comb', 'O filtro segura sujeira e água.', { via: { r: 'linhas_comb', i: 1 } }],
      ['linhas_comb', 'As linhas levam o combustível até o cofre.', { route: 1, pick: [2, 0] }],
      ['galeria', 'A galeria distribui para os bicos.'],
      ['bicos', 'Os bicos injetam no coletor, perto das válvulas.', { at: [[1.205, 0.678, -0.035], [1.205, 0.678, -0.117], [1.205, 0.678, -0.199], [1.205, 0.678, -0.281]] }],
      ['res_pf', 'Partida a frio: gasolina do reservatório…', { from: -1, c: '#E0A526' }],
      ['bomba_pf', '…empurrada pela bombinha…'],
      ['valv_pf', '…liberada pela eletroválvula…', { via: { r: 'tubos_pf', i: 0 } }],
      ['tubos_pf', '…chega a cada cilindro pelos tubinhos.', { route: 1, pick: [1, 2, 3, 4] }],
      ['canister', 'Os vapores do tanque ficam no cânister.', { from: 1, via: { r: 'canister', i: 1 }, at: [1.78, 0.45, -0.42], c: '#9C6BD6' }],
      ['purga', 'A central abre a purga e o motor queima esses vapores.', { via: { r: 'canister', i: 0 } }]
    ] },
  { id: 'forca', n: 'Da explosão até as rodas', c: '#B0412A', d: 'Como a força da combustão chega ao asfalto.', motion: 'forca',
    steps: [
      ['pistoes', 'A combustão empurra o pistão para baixo.', { at: [1.34, 0.57, -0.035] }],
      ['bielas', 'A biela transmite o empurrão.', { at: [1.34, 0.48, -0.035] }],
      ['virabrequim', 'O virabrequim transforma em giro.', { at: [1.34, 0.40, -0.035] }],
      ['volante_motor', 'O volante suaviza os pulsos.', { at: [1.34, 0.40, 0.042] }],
      ['embreagem', 'A embreagem liga o motor ao câmbio.', { at: [1.34, 0.40, 0.075] }],
      ['cambio', 'O câmbio escolhe a relação.', { at: [1.30, 0.40, 0.25] }],
      ['diferencial', 'O diferencial divide entre as rodas.', { at: [1.185, 0.29, 0.16] }],
      ['semieixos', 'Os semieixos levam o giro até as rodas.', { route: 1 }],
      ['mangas', 'O cubo gira sobre o rolamento.', { at: [[1.2215, 0.29, 0.715], [1.2215, 0.29, -0.715]] }],
      ['pneus', 'E o pneu empurra o chão.', { at: [[1.2215, 0.02, 0.715], [1.2215, 0.02, -0.715]] }]
    ] },
  { id: 'agua', n: 'O circuito do arrefecimento', c: '#1F8FC0', d: 'O líquido tira calor do motor e o entrega ao ar — e à cabine, pelo aquecedor.',
    leg: [['#2F8FE0', 'líquido frio'], ['#E4572E', 'líquido quente']], motion: 'agua',
    steps: [
      ['bomba_agua', 'A bomba d’água, girada pela correia dentada, empurra o líquido.', { c: '#2F8FE0' }],
      ['bloco', 'Ele passa em volta das camisas…', { at: [1.345, 0.50, -0.157], c2: '#E4572E' }],
      ['cabecote', '…e pelo cabeçote, recolhendo calor.', { at: [1.35, 0.676, -0.03] }],
      ['mang_aquec', 'Uma parte vai sempre para a cabine…', { route: 1, pick: [0] }],
      ['rad_aquec', '…aquece o ar da ventilação…', { c2: '#2F8FE0' }],
      ['bomba_agua', '…e volta para a bomba.', { via: { r: 'mang_aquec', i: 1 } }],
      ['termostato', 'Com o motor quente (perto de 89 °C), a válvula termostática abre…', { from: 2, c: '#E4572E' }],
      ['mang_sup', '…e a mangueira superior leva o líquido ao radiador.', { route: 1 }],
      ['radiador', 'O radiador troca calor com o ar e o líquido esfria.', { at: [1.70, 0.34, -0.26], via: [[1.70, 0.56, 0.18], [1.70, 0.45, 0.0], [1.70, 0.37, -0.18]], c2: '#2F8FE0' }],
      ['ventoinha', 'Parado no trânsito, a ventoinha ajuda.', { from: -1 }],
      ['mang_inf', 'A mangueira inferior devolve o líquido frio à bomba.', { route: 1, from: 8 }],
      ['vaso', 'O reservatório absorve a dilatação e tira o ar do circuito.', { from: 10, via: { r: 'vaso', i: 0 }, at: [1.56, 0.72, -0.50] }]
    ] },
  { id: 'partida', n: 'Da chave até a faísca', c: '#D6B000', d: 'O que acontece quando você vira a chave.',
    leg: [['#35B6C9', 'sinais e comandos'], ['#E8B90C', 'corrente']], motion: 'partida',
    steps: [
      ['ign_chave', 'O comutador liga os circuitos e lê o código da chave.', { c: '#35B6C9' }],
      ['bsi', 'O BSI confirma a chave e libera a central.'],
      ['bateria', 'A bateria entrega a corrente da partida…', { from: -1, c: '#E8B90C' }],
      ['cabos_bat', '…pelos cabos grossos…', { route: 1, pick: [0] }],
      ['motor_partida', '…e o motor de partida gira o volante.'],
      ['sens_rot', 'O sensor de rotação avisa que o motor está girando.', { c: '#35B6C9' }],
      ['ecu', 'A central calcula injeção e ignição.', { via: { r: 'chicote', i: 0 } }],
      ['bomba_comb', 'A bomba pressuriza o combustível.', { via: { r: 'chicote', i: 1 } }],
      ['bobina', 'A bobina gera a alta tensão…', { from: 6, via: { r: 'chicote', i: 0 } }],
      ['velas', '…e as velas soltam a faísca. Pegou.', { at: [[1.37, 0.70, -0.035], [1.37, 0.70, -0.117], [1.37, 0.70, -0.199], [1.37, 0.70, -0.281]], c: '#E8B90C' }],
      ['alternador', 'Agora o alternador repõe a carga da bateria.', { from: -1, out: [{ to: 2, via: { r: 'chicote', i: 0 } }] }]
    ] },
  { id: 'oleo', n: 'A lubrificação', c: '#D0602A', d: 'O óleo circula sob pressão e volta ao cárter por gravidade.', motion: 'oleo',
    steps: [
      ['carter', 'O óleo descansa no cárter.'],
      ['bomba_oleo', 'A bomba suga pelo pescador.', { via: { r: 'bomba_oleo', i: 0 } }],
      ['filtro_oleo', 'O filtro limpa.'],
      ['virabrequim', 'Mancais e virabrequim recebem óleo sob pressão.', { at: [[1.34, 0.40, 0.02], [1.34, 0.40, -0.076], [1.34, 0.40, -0.158], [1.34, 0.40, -0.24], [1.34, 0.40, -0.322]] }],
      ['bielas', 'As bielas também.', { at: [[1.34, 0.44, -0.035], [1.34, 0.44, -0.117], [1.34, 0.44, -0.199], [1.34, 0.44, -0.281]] }],
      ['comando', 'Uma galeria sobe até o comando…', { at: [1.30, 0.69, -0.157] }],
      ['balancins', '…e o eixo de balancins.', { at: [1.345, 0.742, -0.157] }],
      ['sens_oleo', 'O interruptor vigia a pressão.', { from: 2 }],
      ['carter', 'Tudo escorre de volta ao cárter.', { from: 6, at: [1.345, 0.27, -0.10] }]
    ] },
  { id: 'freio', n: 'Do pedal às rodas', c: '#D2334A', d: 'Hidráulica: a força do pé vira pressão nas quatro rodas ao mesmo tempo.', motion: 'freio',
    steps: [
      ['pedal_freio', 'Você pisa no pedal.'],
      ['servo', 'O servo-freio multiplica a força com vácuo.'],
      ['cil_mestre', 'O cilindro-mestre transforma em pressão.'],
      ['tubos_freio', 'As tubulações levam o fluido às quatro rodas ao mesmo tempo.', { route: 1, pick: [2, 0, 3, 1, 4, 5, 6] }],
      ['pincas', 'Na frente, as pinças…', { both: 1 }],
      ['pastilhas', '…apertam as pastilhas…', { both: 1, from: -1 }],
      ['discos', '…contra os discos.', { both: 1, from: -1 }],
      ['sapatas', 'Atrás, os cilindros de roda abrem as sapatas…', { both: 1, from: 3 }],
      ['tambores', '…contra os tambores.', { both: 1, from: -1 }]
    ] },
  { id: 'dir', n: 'Do volante às rodas', c: '#1FA394', d: 'Direção mecânica: pinhão e cremalheira, sem assistência.', motion: 'dir',
    steps: [
      ['volante_dir', 'Você gira o volante.'],
      ['coluna', 'A coluna leva o giro até a caixa.', { route: 1 }],
      ['caixa_dir', 'O pinhão empurra a cremalheira para o lado.', { at: [1.07, 0.345, 0.20] }],
      ['barras_axiais', 'As barras axiais empurram…', { both: 1 }],
      ['mangas', '…as mangas, que esterçam…', { both: 1 }],
      ['pneus', '…as rodas.', { at: [[1.2215, 0.29, 0.715], [1.2215, 0.29, -0.715]] }]
    ] }
];


/* ===== Plano de revisões ===== */
const MAINT = [
  { id: 'oleo', n: 'Óleo do motor e filtro', km: 10000, mo: 12, p: ['carter', 'filtro_oleo'], t: 'Uso severo (trajetos curtos, trânsito, poeira): 5.000 km ou 6 meses.' },
  { id: 'filtro_ar', n: 'Filtro de ar', km: 20000, p: ['filtro_ar'] },
  { id: 'filtro_comb', n: 'Filtro de combustível', km: 20000, p: ['filtro_comb'] },
  { id: 'velas', n: 'Velas', km: 40000, p: ['velas'], t: 'Intervalo do plano Peugeot; em flex muitos mecânicos antecipam.' },
  { id: 'correia', n: 'Correia dentada, tensor e bomba d’água', km: 60000, p: ['correia_dent', 'tensor_dent', 'bomba_agua'], t: 'Motor de interferência: não deixe passar.' },
  { id: 'acess', n: 'Correia de acessórios', km: 60000, p: ['correia_acess', 'tensor_acess'], t: 'Inspecione a cada revisão.' },
  { id: 'fluido_freio', n: 'Fluido de freio DOT 4', mo: 24, p: ['reserv_freio'] },
  { id: 'arref', n: 'Líquido de arrefecimento', mo: 24, p: ['vaso', 'radiador'] },
  { id: 'pastilhas', n: 'Pastilhas e discos (inspeção)', km: 10000, p: ['pastilhas', 'discos'] },
  { id: 'lonas', n: 'Lonas e tambores (inspeção)', km: 20000, p: ['sapatas', 'tambores'] },
  { id: 'alinh', n: 'Alinhamento e balanceamento', km: 10000, p: ['pneus', 'barras_axiais'] },
  { id: 'rodizio', n: 'Rodízio de pneus', km: 10000, p: ['pneus'] },
  { id: 'bicos', n: 'Limpeza dos bicos', km: 40000, p: ['bicos'], t: 'Recomendação comum de oficina para flex, não do plano de fábrica.' },
  { id: 'valvulas', n: 'Folga de válvulas (conferir)', km: 60000, p: ['balancins'], t: 'Admissão 0,20 mm, escape 0,40 mm, motor frio.' },
  { id: 'susp', n: 'Suspensão e coxins (inspeção)', km: 20000, p: ['coxim_dir', 'bandejas', 'barra_estab', 'rol_eixo'] },
  { id: 'bateria', n: 'Teste da bateria', mo: 6, p: ['bateria'] },
  { id: 'pf', n: 'Gasolina da partida a frio (renovar)', mo: 3, p: ['res_pf'] },
  { id: 'palhetas', n: 'Palhetas do limpador', mo: 12, p: ['limpador'] },
  { id: 'cambio', n: 'Óleo do câmbio (conferir)', km: 20000, p: ['cambio'] },
  { id: 'lubrif', n: 'Lubrificar dobradiças, fechaduras e limitadores', mo: 12, p: ['dobradicas', 'fech_portas', 'fech_capo', 'dobr_capo', 'dobr_tampa', 'fech_tampa'] },
  { id: 'drenos', n: 'Limpar drenos do torpedo, portas e soleiras', mo: 6, p: ['grade_torpedo', 'portas', 'soleiras'], t: 'Carro que fica ao tempo junta folhas e água nesses pontos.' },
  { id: 'borrachas', n: 'Protetor nas borrachas de vedação', mo: 4, p: ['borrachas'] }
];

/* ===== Ficha técnica ===== */
const SPECS = [
  ['Motor', [['Código', 'TU3JP flex, 1.360 cm³, 4 cilindros, 8 válvulas'], ['Diâmetro e curso', '75 mm e 77 mm'], ['Taxa de compressão', '10,2:1'], ['Potência', '80 cv com gasolina, 82 cv com etanol, a 5.250 rpm'], ['Torque', '12,8 kgfm a 3.250 rpm'], ['Injeção', 'Bosch ME 7.4.4 multiponto, acelerador eletrônico'], ['Ordem de ignição', '1-3-4-2, cilindro 1 do lado do câmbio'], ['Distribuição', 'Correia dentada, um comando no cabeçote']]],
  ['Transmissão', [['Câmbio', 'MA/5 manual de 5 marchas'], ['Embreagem', 'Monodisco a seco, acionada por cabo'], ['Tração', 'Dianteira']]],
  ['Chassi', [['Suspensão dianteira', 'McPherson com molas helicoidais'], ['Suspensão traseira', 'Braços arrastados com barras de torção'], ['Freios', 'Discos sólidos na frente, tambores atrás'], ['Direção', 'Pinhão e cremalheira, mecânica (sem assistência)'], ['Pneus', '175/65 R14'], ['Diâmetro de giro', '9,8 m']]],
  ['Dimensões', [['Comprimento', '3.835 mm'], ['Largura', '1.652 mm'], ['Altura', '1.432 mm'], ['Entre-eixos', '2.442 mm'], ['Peso', '1.007 kg'], ['Porta-malas', '245 L'], ['Tanque', '50 L']]],
  ['Fluidos', [['Óleo do motor', 'cerca de 3,2 L com filtro — a vareta manda'], ['Óleo do câmbio', 'cerca de 2 L'], ['Fluido de freio', 'DOT 4'], ['Partida a frio', '0,5 L de gasolina']]],
  ['Regulagens', [['Folga de válvulas, motor frio', 'Admissão 0,20 mm, escape 0,40 mm'], ['Parafusos do cabeçote', '20 N·m + 240°'], ['Capas de biela', '38 N·m']]],
  ['Consumo de referência', [['Gasolina', '10,7 km/L na cidade, 14,2 km/L na estrada'], ['Etanol', '7,6 km/L na cidade, 10,5 km/L na estrada']]],
  ['O seu', [['Versão', 'Sensation 1.4 flex 2007, 2 portas'], ['Hodômetro na foto', '180.355 km'], ['Não tem', 'Ar-condicionado, airbag e direção hidráulica']]]
];

/* ===== Como desmontar =====
   Cada guia: peça principal, lado (1 = esquerdo, do motorista; 0 = peça central) e passos [texto, opções]
   open: 'hood' | 'door' (a porta do lado do guia) | 'tail' — abre no passo
   fx: [[fixador, [índices]]] — saem na ordem (parafuso gira e sai; presilha salta; solda é furada)
   keep: os fixadores do passo só acendem (guias, colas, parafusos só afrouxados)
   out: [[peça, [dx, dy, dz], lado, roda]] — a peça sai nessa direção (coordenadas do carro; lado 1 = só o lado esquerdo)
   hide: peças que somem a partir do passo; l: nome curto do passo; at: ponto do alfinete quando o passo não tem fixador nem peça */
const PCD = [6, 7, 8, 9, 0, 1, 3, 4, 2, 5, 10];                     // todos os parafusos do para-choque dianteiro, de cima para baixo
const OUT_PCD = [['para_choque_d', [0.5, 0.02, 0]], ['grade_inf', [0.5, 0.02, 0]]];
const GUIDES = [
  { id: 'dm_parachoque_d', grp: 'Lataria', n: 'Para-choque dianteiro', part: 'para_choque_d', parts: ['para_choque_d', 'grade_inf'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte os 4 parafusos de cima, na travessa sob o capô.', { fx: [['fx_parachoque', [6, 7, 8, 9]]], l: 'Parafusos de cima' }],
      ['Solte os parafusos das caixas de roda, dos dois lados.', { fx: [['fx_parachoque', [0, 1, 3, 4]]], cam: [0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['Solte os parafusos de baixo.', { fx: [['fx_parachoque', [2, 5, 10]]], cam: [0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas do para-choque para fora das guias laterais, com cuidado para não quebrá-las…', { fx: [['fx_guias_pcd', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…e tire o para-choque para a frente.', { out: OUT_PCD, l: 'Para-choque' }]
    ] },
  { id: 'dm_paralama', grp: 'Lataria', n: 'Para-lama dianteiro', part: 'paralamas', parts: ['paralamas', 'piscas_lat'], side: 1,
    steps: [
      ['Abra o capô e a porta do lado do para-lama.', { open: ['hood', 'door'], l: 'Capô e porta' }],
      ['Tire o para-choque dianteiro, que cobre a ponta do para-lama: parafusos de cima, das caixas de roda e de baixo.', { fx: [['fx_parachoque', PCD]], out: OUT_PCD, l: 'Para-choque' }],
      ['Tire o farol: 3 parafusos.', { fx: [['fx_farol', [0, 1, 2]]], out: [['farois', [0.32, 0.02, 0.03], 1]], l: 'Farol' }],
      ['Solte as presilhas do forro da caixa de roda e tire o forro. Com a roda tirada fica mais fácil.', { fx: [['fx_forros', [0, 1, 2, 3, 4, 5]]], cam: [0.25, -0.55, 1], l: 'Presilhas do forro' }],
      ['Tire os 4 parafusos da borda de cima, sob o capô.', { fx: [['fx_paralama', [0, 1, 2, 3]]], l: 'Parafusos de cima' }],
      ['Tire o parafuso da frente, junto ao farol.', { fx: [['fx_paralama', [4]]], l: 'Parafuso da frente' }],
      ['Com a porta aberta, tire o parafuso de trás, na coluna, e o de baixo, na soleira.', { fx: [['fx_paralama', [6, 5]]], l: 'Parafusos de trás e de baixo' }],
      ['Corte a massa de vedação das emendas e puxe o para-lama para fora.', { out: [['paralamas', [0.04, 0.06, 0.42], 1], ['piscas_lat', [0.04, 0.06, 0.42], 1]], l: 'Para-lama' }]
    ] },
  { id: 'dm_capo', grp: 'Lataria', n: 'Capô', part: 'capo', parts: ['capo', 'dobr_capo'], side: 0,
    steps: [
      ['Abra o capô e apoie na vareta.', { open: 'hood', l: 'Capô' }],
      ['Risque o contorno das dobradiças: é o que acerta as frestas na volta.', { fx: [['fx_capo', [2, 3, 6, 7]]], keep: 1, l: 'Dobradiças' }],
      ['Com alguém segurando o capô, solte os parafusos das dobradiças (2 de cada lado).', { fx: [['fx_capo', [2, 3, 6, 7]]], l: 'Parafusos das dobradiças' }],
      ['Tire o capô levantando pela frente, com as dobradiças presas nele.', { out: [['capo', [0.22, 0.55, 0]], ['dobr_capo', [0.22, 0.55, 0]]], l: 'Capô' }]
    ] },
  { id: 'dm_porta', grp: 'Lataria', n: 'Porta', part: 'portas', parts: ['portas', 'dobradicas'], side: 1,
    steps: [
      ['Abra a porta e apoie a ponta de baixo: um macaco com um pano serve.', { open: 'door', l: 'Porta' }],
      ['Se houver fiação na porta, desligue o conector. Solte o limitador: 1 parafuso na coluna.', { fx: [['fx_dobradicas', [8]]], cam: [-0.75, 0.3, 0.7], l: 'Limitador' }],
      ['Marque a posição e solte os 4 parafusos das dobradiças na coluna.', { fx: [['fx_dobradicas', [0, 2, 4, 6]]], cam: [-0.75, 0.3, 0.7], l: 'Parafusos das dobradiças' }],
      ['Tire a porta com as dobradiças.', { out: [['portas', [0.05, 0.1, 0.6], 1], ['dobradicas', [0.05, 0.1, 0.6], 1]], l: 'Porta' }]
    ] },
  { id: 'dm_forro_porta', grp: 'Lataria', n: 'Forro da porta', part: 'forros_portas', parts: ['forros_portas'], side: 1,
    steps: [
      ['Abra a porta e tire os parafusos do puxador e o acabamento da maçaneta interna.', { open: 'door', l: 'Puxador' }],
      ['Solte as presilhas em volta do forro com uma espátula plástica, rente a cada presilha.', { fx: [['fx_forro_porta', [0, 1, 2, 3, 4, 5, 6, 7]]], cam: [-1, 0.3, 0.35], l: 'Presilhas do forro' }],
      ['Levante o forro para soltar da borda do vidro e tire.', { out: [['forros_portas', [0, 0.06, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Forro da porta' }]
    ] },
  { id: 'dm_vidro_porta', grp: 'Lataria', n: 'Vidro e máquina da porta', part: 'vidros_portas', parts: ['vidros_portas', 'maq_vidro'], side: 1,
    steps: [
      ['Abra a porta e tire o forro (veja o guia do forro da porta).', { open: 'door', out: [['forros_portas', [0, 0.06, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Forro da porta' }],
      ['Desça o vidro até aparecerem os 2 grampos da máquina e solte-os.', { fx: [['fx_vidro_porta', [0, 1]]], cam: [-1, 0.3, 0.35], l: 'Grampos do vidro' }],
      ['Tire o vidro por cima, inclinando.', { out: [['vidros_portas', [0, 0.45, 0.02], 1]], l: 'Vidro' }],
      ['Solte os 4 parafusos ou rebites da máquina…', { fx: [['fx_maq_vidro', [0, 1, 2, 3]]], cam: [-1, 0.3, 0.35], l: 'Fixação da máquina' }],
      ['…e tire a máquina pela abertura do painel interno.', { out: [['maq_vidro', [0, -0.05, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Máquina de vidro' }]
    ] },
  { id: 'dm_retrovisor', grp: 'Lataria', n: 'Retrovisor', part: 'retrovisores', parts: ['retrovisores'], side: 1,
    steps: [
      ['Abra a porta e tire o acabamento triangular por dentro, no canto do vidro.', { open: 'door', l: 'Acabamento' }],
      ['Segure o espelho por fora e solte os 3 parafusos.', { fx: [['fx_retrovisor', [0, 1, 2]]], l: 'Parafusos do retrovisor' }],
      ['Desligue o conector, se houver, e tire o espelho para fora.', { out: [['retrovisores', [0.02, 0.05, 0.3], 1]], l: 'Retrovisor' }]
    ] },
  { id: 'dm_tampa', grp: 'Lataria', n: 'Tampa traseira', part: 'tampa_tras', parts: ['tampa_tras', 'dobr_tampa', 'amort_tampa'], side: 0,
    steps: [
      ['Abra a tampa e peça ajuda para segurá-la.', { open: 'tail', l: 'Tampa' }],
      ['Desligue os conectores da luz de freio, das luzes da placa e do limpador.', { l: 'Conectores', at: [-1.35, 1.10, 0] }],
      ['Solte os amortecedores: levante a trava de mola e puxe cada um do pino.', { fx: [['fx_amort_tampa', [1, 3]]], hide: ['amort_tampa'], l: 'Amortecedores' }],
      ['Solte as porcas das dobradiças no teto, por baixo do forro: 2 de cada lado.', { fx: [['fx_tampa', [0, 2, 4, 6]]], l: 'Dobradiças' }],
      ['Tire a tampa com as dobradiças.', { out: [['tampa_tras', [-0.4, 0.35, 0]], ['dobr_tampa', [-0.4, 0.35, 0]]], l: 'Tampa traseira' }]
    ] },
  { id: 'dm_farol', grp: 'Lataria', n: 'Farol', part: 'farois', parts: ['farois'], side: 1,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Tire o para-choque dianteiro: ele cobre o parafuso de baixo do farol.', { fx: [['fx_parachoque', PCD]], out: OUT_PCD, l: 'Para-choque' }],
      ['Solte os 2 parafusos de cima…', { fx: [['fx_farol', [0, 1]]], l: 'Parafusos de cima' }],
      ['…e o de baixo.', { fx: [['fx_farol', [2]]], l: 'Parafuso de baixo' }],
      ['Desligue o conector e tire o farol para a frente. Na volta, regule a altura do facho.', { out: [['farois', [0.32, 0.02, 0.03], 1]], l: 'Farol' }]
    ] },
  { id: 'dm_lanterna', grp: 'Lataria', n: 'Lanterna', part: 'lanternas', parts: ['lanternas'], side: 1,
    steps: [
      ['Abra a tampa traseira e solte o acabamento lateral do porta-malas.', { open: 'tail', l: 'Acabamento' }],
      ['Solte as 3 porcas por dentro.', { fx: [['fx_lanterna', [0, 1, 2]]], l: 'Porcas da lanterna' }],
      ['Desligue o conector e tire a lanterna para trás.', { out: [['lanternas', [-0.28, 0, 0.04], 1]], l: 'Lanterna' }]
    ] },
  { id: 'dm_parachoque_t', grp: 'Lataria', n: 'Para-choque traseiro', part: 'para_choque_t', parts: ['para_choque_t', 'neblina_tras'], side: 0,
    steps: [
      ['Abra a tampa e tire o acabamento do porta-malas.', { open: 'tail', l: 'Acabamento' }],
      ['Solte os 4 parafusos de cima, por dentro do porta-malas.', { fx: [['fx_parachoque_t', [6, 7, 8, 9]]], l: 'Parafusos de cima' }],
      ['Solte os parafusos das caixas de roda…', { fx: [['fx_parachoque_t', [0, 1, 3, 4]]], cam: [-0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['…e os de baixo.', { fx: [['fx_parachoque_t', [2, 5]]], cam: [-0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas para fora das guias laterais…', { fx: [['fx_guias_pct', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…e tire o para-choque para trás.', { out: [['para_choque_t', [-0.5, 0.02, 0]], ['neblina_tras', [-0.5, 0.02, 0]]], l: 'Para-choque' }]
    ] },
  { id: 'dm_grade', grp: 'Lataria', n: 'Grade', part: 'grade', parts: ['grade'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte as 4 presilhas por trás da grade.', { fx: [['fx_grade', [0, 1, 2, 3]]], l: 'Presilhas' }],
      ['Tire a grade para a frente.', { out: [['grade', [0.25, 0, 0]]], l: 'Grade' }]
    ] },
  { id: 'dm_grade_torpedo', grp: 'Lataria', n: 'Grade do torpedo', part: 'grade_torpedo', parts: ['grade_torpedo'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Marque a posição de repouso e solte as porcas dos braços do limpador.', { fx: [['fx_limpador', [0, 1]]], l: 'Braços do limpador' }],
      ['Solte as 6 presilhas…', { fx: [['fx_grade_torpedo', [0, 1, 2, 3, 4, 5]]], l: 'Presilhas' }],
      ['…e puxe a grade para cima e para a frente, soltando da borda do para-brisa.', { out: [['grade_torpedo', [0.12, 0.3, 0]]], l: 'Grade do torpedo' }]
    ] },
  { id: 'dm_bocal', grp: 'Lataria', n: 'Bocal de abastecimento', part: 'bocal', parts: ['bocal'], side: 0,
    steps: [
      ['Com o tanque quase vazio, abra a portinhola.', { l: 'Portinhola', at: [-1.33, 0.77, -0.76], cam: [-0.35, 0.3, -1] }],
      ['Por baixo do carro, solte a abraçadeira da mangueira do tanque.', { l: 'Abraçadeira', at: [-0.85, 0.30, -0.33], cam: [0.15, -0.9, -0.45] }],
      ['Tire os 2 parafusos da caixa da portinhola.', { fx: [['fx_bocal', [0, 1]]], cam: [-0.35, 0.3, -1], l: 'Parafusos' }],
      ['Puxe o bocal por baixo.', { out: [['bocal', [0.05, -0.3, 0.15]]], cam: [0.1, -0.75, -0.65], l: 'Bocal' }]
    ] },
  { id: 'dm_parabrisa', grp: 'Vidros colados', n: 'Para-brisa', part: 'para_brisa', parts: ['para_brisa'], side: 0,
    steps: [
      ['O para-brisa não tem parafuso: é colado num cordão de poliuretano em volta.', { fx: [['fx_cola_parabrisa', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Tire os braços do limpador e a grade do torpedo.', { fx: [['fx_limpador', [0, 1]], ['fx_grade_torpedo', [0, 1, 2, 3, 4, 5]]], out: [['grade_torpedo', [0.12, 0.3, 0]]], l: 'Limpador e grade' }],
      ['O instalador corta o cordão com fio ou faca própria…', { fx: [['fx_cola_parabrisa', 'all']], l: 'Corte do cordão' }],
      ['…e tira o vidro com ventosas. Na volta: cordão novo e tempo de cura antes de rodar.', { out: [['para_brisa', [0.3, 0.45, 0]]], l: 'Para-brisa' }]
    ] },
  { id: 'dm_vidro_tras', grp: 'Vidros colados', n: 'Vidro traseiro', part: 'vidro_tras', parts: ['vidro_tras'], side: 0,
    steps: [
      ['O vidro traseiro é colado na tampa com um cordão de poliuretano.', { fx: [['fx_cola_vidro_tras', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Com o limpador e os conectores do desembaçador soltos, o cordão é cortado…', { fx: [['fx_cola_vidro_tras', 'all']], l: 'Corte do cordão' }],
      ['…e o vidro sai com ventosas. Água no porta-malas pode vir de falha nesse cordão.', { out: [['vidro_tras', [-0.3, 0.3, 0]]], l: 'Vidro traseiro' }]
    ] },
  { id: 'dm_vidro_lateral', grp: 'Vidros colados', n: 'Vidro lateral fixo', part: 'vidros_laterais', parts: ['vidros_laterais'], side: 1,
    steps: [
      ['O vidro lateral de trás é fixo, colado na lateral com poliuretano.', { fx: [['fx_cola_laterais', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['O cordão é cortado por dentro…', { fx: [['fx_cola_laterais', 'all']], l: 'Corte do cordão' }],
      ['…e o vidro sai para fora.', { out: [['vidros_laterais', [0, 0.05, 0.28], 1]], l: 'Vidro lateral' }]
    ] },
  { id: 'dm_teto', grp: 'Peças soldadas (funilaria)', n: 'Teto', part: 'teto', parts: ['teto'], side: 0,
    steps: [
      ['O teto é soldado na estrutura: não sai com ferramenta de mão.', { fx: [['fx_solda_teto', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, cada ponto de solda é furado…', { fx: [['fx_solda_teto', 'all']], l: 'Pontos furados' }],
      ['…a peça sai, e a nova é soldada e selada no lugar.', { out: [['teto', [0, 0.4, 0]]], l: 'Teto' }]
    ] },
  { id: 'dm_lateral', grp: 'Peças soldadas (funilaria)', n: 'Lateral traseira', part: 'laterais', parts: ['laterais'], side: 1,
    steps: [
      ['A lateral é soldada na coluna, na soleira, na caixa de roda, no painel traseiro e junto ao teto.', { fx: [['fx_solda_laterais', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, os pontos são furados ou cortados…', { fx: [['fx_solda_laterais', 'all']], l: 'Pontos furados' }],
      ['…a lateral sai e a nova é soldada, com massa de vedação nas emendas.', { out: [['laterais', [-0.05, 0.05, 0.45], 1], ['vidros_laterais', [-0.05, 0.05, 0.45], 1]], l: 'Lateral' }]
    ] },
  { id: 'dm_soleira', grp: 'Peças soldadas (funilaria)', n: 'Soleira', part: 'soleiras', parts: ['soleiras'], side: 1,
    steps: [
      ['A soleira é soldada na aba de baixo e na borda da porta. A aba de baixo é onde o macaco apoia.', { fx: [['fx_solda_soleiras', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, os pontos são furados…', { fx: [['fx_solda_soleiras', 'all']], l: 'Pontos furados' }],
      ['…e a soleira nova é soldada no lugar.', { out: [['soleiras', [0, -0.12, 0.3], 1]], l: 'Soleira' }]
    ] },
  { id: 'dm_roda', grp: 'Mecânica', n: 'Roda', part: 'rodas', parts: ['rodas', 'pneus', 'calotas'], side: 1,
    steps: [
      ['Tire a calota puxando pelas bordas.', { out: [['calotas', [0, -0.12, 0.55], 1, 0]], l: 'Calota' }],
      ['Com o carro no chão e o freio de mão puxado, afrouxe os 4 parafusos meia volta.', { fx: [['fx_roda', [0, 1, 2, 3]]], keep: 1, l: 'Parafusos da roda' }],
      ['Levante o carro com o macaco no ponto de apoio da soleira, perto da roda.', { l: 'Ponto do macaco', at: [0.93, 0.12, 0.66] }],
      ['Tire os parafusos…', { fx: [['fx_roda', [0, 1, 2, 3]]], l: 'Parafusos da roda' }],
      ['…e puxe a roda para fora.', { out: [['pneus', [0, 0, 0.42], 1, 0], ['rodas', [0, 0, 0.42], 1, 0]], l: 'Roda' }],
      ['Na volta: encoste os parafusos à mão, aperte em cruz, desça o carro e dê o aperto final com torquímetro.', { l: 'Aperto em cruz', at: [1.2215, 0.29, 0.76] }]
    ] },
  { id: 'dm_bateria', grp: 'Mecânica', n: 'Bateria', part: 'bateria', parts: ['bateria'], side: 0,
    steps: [
      ['Abra o capô com a ignição desligada.', { open: 'hood', l: 'Capô' }],
      ['Solte primeiro o terminal negativo (preto).', { fx: [['fx_bateria', [1]]], l: 'Negativo' }],
      ['Depois o positivo (vermelho).', { fx: [['fx_bateria', [0]]], l: 'Positivo' }],
      ['Solte o grampo de fixação na base.', { fx: [['fx_bateria', [2]]], l: 'Grampo' }],
      ['Tire a bateria para cima, sem inclinar. Na volta: positivo primeiro, negativo por último.', { out: [['bateria', [0, 0.36, 0]]], l: 'Bateria' }]
    ] }
];

const EXV = {
  soleiras: [0, -0.15, 0.75, 1], colunas: [0.15, 0.55, 0.55, 1], painel_tras: [-0.8, 0, 0], grade_torpedo: [0.3, 0.75, 0], borrachas: [0, 0.12, 0.5, 1], frisos: [0, 0.05, 1.25, 1], dobr_capo: [0.35, 0.65, 0.35, 1], dobr_tampa: [-0.55, 0.75, 0.3, 1], fech_tampa: [-0.95, 0.35, 0], forros_portas: [0, 0.1, 0.55, 1],
  capo: [0.25, 0.8, 0], teto: [0, 0.9, 0], para_brisa: [0.35, 0.65, 0], vidro_tras: [-0.45, 0.6, 0], tampa_tras: [-0.7, 0.4, 0], para_choque_d: [0.9, -0.05, 0], para_choque_t: [-0.9, -0.05, 0], grade: [1.0, 0.1, 0], grade_inf: [1.05, -0.05, 0], viga_dianteira: [0.7, -0.05, 0], travessa_frontal: [0.5, 0.05, 0], fech_capo: [0.5, 0.3, 0], monobloco: [0, 0, 0], corta_fogo: [0, 0.05, 0],
  paralamas: [0.15, 0.1, 0.8, 1], portas: [0, 0.05, 1.0, 1], vidros_portas: [0, 0.35, 1.05, 1], laterais: [-0.1, 0.05, 0.85, 1], vidros_laterais: [-0.1, 0.35, 0.9, 1], retrovisores: [0.1, 0.2, 1.2, 1], caixas_roda: [0, 0, 0.5, 1], dobradicas: [0.1, 0, 0.85, 1], fech_portas: [-0.1, 0, 0.9, 1], maq_vidro: [0, 0.1, 0.8, 1], amort_tampa: [-0.5, 0.3, 0.4, 1], alto_falantes: [0, 0, 0.75, 1],
  farois: [0.6, 0.1, 0.35, 1], lanternas: [-0.6, 0.05, 0.35, 1], piscas_lat: [0.2, 0.1, 1.0, 1], luz_freio: [-0.5, 0.65, 0], luz_placa: [-0.8, 0.25, 0], neblina_tras: [-1.0, -0.05, 0], bocal: [-0.2, 0.1, -0.6],
  painel: [-0.1, 0.55, 0], quadro: [-0.25, 0.7, 0], radio: [-0.3, 0.55, 0], comandos_vent: [-0.35, 0.5, 0], caixa_ar: [0.1, 0.35, 0], vent_interno: [0.1, 0.35, -0.15], bancos_diant: [0, 0.35, 0.45, 1], banco_tras: [-0.2, 0.35, 0], cintos: [0, 0.3, 0.6, 1], porta_malas: [-0.3, 0.3, 0], retrovisor_int: [0, 0.8, 0],
  carter: [0, 0.35, 0], bomba_oleo: [0.12, 0.28, 0], filtro_oleo: [0.35, 0.6, 0], vareta: [0.25, 1.0, 0.2], virabrequim: [0, 0.62, 0], polia_vira: [0, 0.62, -0.35], volante_motor: [0, 0.62, 0.35], bloco: [0, 0.95, 0], camisas: [0, 1.35, 0], pistoes: [0, 1.55, 0], bielas: [0, 1.42, 0], junta_cab: [0, 1.75, 0], cabecote: [0, 1.9, 0], valvulas: [0, 2.1, 0], comando: [0, 2.2, 0], polia_comando: [0, 2.2, -0.3], balancins: [0, 2.3, 0], tampa_valv: [0, 2.45, 0], tampa_oleo: [0, 2.52, 0], bobina: [0, 2.6, 0], velas: [0.12, 2.0, 0], sens_temp: [0, 2.0, 0.25], termostato: [0, 1.9, 0.25],
  correia_dent: [0, 1.1, -0.45], tensor_dent: [0, 1.1, -0.5], capas_correia: [0, 1.1, -0.62], bomba_agua: [0, 1.1, -0.38], correia_acess: [0, 0.95, -0.75], tensor_acess: [0, 0.95, -0.8], alternador: [0.35, 0.95, -0.7],
  coxim_dir: [0, 1.2, -0.4], coxim_esq: [0, 0.9, 0.4], coxim_inf: [-0.2, 0.2, 0], respiro: [0, 2.5, 0],
  tomada_ar: [0.5, 1.4, 0.1], caixa_filtro: [0.3, 1.4, 0.1], filtro_ar: [0.3, 1.55, 0.1], duto_ar: [0.1, 1.45, 0.05], tbi: [0, 1.55, 0], coletor_adm: [-0.25, 1.55, 0], galeria: [-0.3, 1.4, 0], bicos: [-0.3, 1.3, 0], tmap: [-0.25, 1.7, 0], purga: [-0.3, 1.3, -0.2], pedal_acel: [-0.15, 0.2, 0],
  res_pf: [0.2, 1.2, 0.3], bomba_pf: [0.2, 1.1, 0.3], valv_pf: [-0.3, 1.6, 0.2], tubos_pf: [-0.3, 1.5, 0.1],
  ecu: [-0.3, 1.1, 0], sens_rot: [0, 0.9, 0.4], sens_det: [-0.25, 0.95, 0], sonda: [0.45, 0.6, 0], sens_oleo: [0.3, 0.95, 0], sens_nivel_oleo: [0.25, 0.35, 0], sens_vel: [0, 0.9, 0.5],
  cambio: [0, 0.6, 0.55], diferencial: [0, 0.4, 0.55], embreagem: [0, 0.62, 0.45], rol_emb: [0, 0.62, 0.55], semieixos: [0, 0, 0.25, 1], trambulador: [-0.1, 0.3, 0.3], alavanca: [0, 0.4, 0], cabo_emb: [0, 0.5, 0.3], pedal_emb: [-0.15, 0.2, 0],
  radiador: [0.55, 0.3, 0], ventoinha: [0.4, 0.3, 0], vaso: [0.45, 0.9, -0.2], mang_sup: [0.3, 1.2, 0.25], mang_inf: [0.3, 0.2, -0.2], mang_aquec: [-0.2, 0.6, 0], rad_aquec: [0.1, 0.5, 0.1],
  coletor_esc: [0.55, 1.0, 0], protetor: [0.55, 1.2, 0], catalisador: [0.55, 0.1, 0], flexivel: [0, -0.3, 0], tubo_inter: [0, -0.4, 0], silenc_inter: [0, -0.45, 0], silenc_tras: [-0.3, -0.4, 0], coxins_esc: [0, -0.2, 0],
  bateria: [0.3, 0.9, 0.3], cabos_bat: [0.1, 0.7, 0.2], bsm: [0.2, 1.0, 0.35], bsi: [0, 0.4, 0.4], motor_partida: [-0.35, 0.6, 0.35], chicote: [0, 1.8, 0], buzina: [0.8, -0.05, 0], limpador: [0.1, 0.5, 0], limpador_tras: [-0.5, 0.5, 0], lavador: [0.7, 0.2, 0.2], ign_chave: [-0.2, 0.3, 0.1], comutadores: [-0.2, 0.3, 0.1],
  pedal_freio: [-0.15, 0.2, 0], servo: [-0.2, 0.5, 0.1], cil_mestre: [0.1, 0.6, 0.1], reserv_freio: [0.1, 0.8, 0.1], tubos_freio: [0, -0.1, 0], pincas: [0, 0.05, 0.55, 1], pastilhas: [0, 0.05, 0.48, 1], discos: [0, 0, 0.4, 1], tambores: [0, 0, 0.45, 1], sapatas: [0, 0, 0.3, 1], freio_mao: [0, 0.25, 0], mang_vacuo: [0, 0.7, 0.1],
  pneus: [0, 0, 0.85, 1], rodas: [0, 0, 0.75, 1], calotas: [0, 0, 1.0, 1], mangas: [0, 0, 0.25, 1], amort_diant: [0, 0.25, 0.2, 1], molas_diant: [0, 0.35, 0.3, 1], coxins_amort: [0, 0.55, 0.2, 1], bandejas: [0, -0.2, 0.15, 1], barra_estab: [0, -0.25, 0], agregado: [0, -0.35, 0], eixo_tras: [0, -0.2, 0], barras_torcao: [0, -0.35, 0], rol_eixo: [0, -0.2, 0.2, 1], amort_tras: [0, 0.2, 0.2, 1], estepe: [-0.3, -0.3, 0], macaco: [-0.2, 0.4, 0],
  volante_dir: [-0.3, 0.3, 0], coluna: [-0.1, 0.25, 0], caixa_dir: [0, -0.15, 0], barras_axiais: [0, -0.15, 0.15, 1],
  tanque: [0, -0.45, 0], bomba_comb: [0, -0.2, 0], boia: [0, -0.3, 0], filtro_comb: [0, -0.3, 0], linhas_comb: [0, -0.25, 0], canister: [0.4, 0, -0.2]
};
return { SYS, PARTS, FIX, FXKIND, SYMPTOMS, FLOWS, MAINT, SPECS, GUIDES, EXV };
  },

  geometry(K) {
const { THREE, V, TAU, UPY, S, MAT, std, phy, reg, tag, place, add, pivotOf, box, cyl, tube, rod, sph, spring, ribbon, beltPath, plateFromHull,
  gBox, gCyl, gLathe, gTorus, gTube, curveOf, setBar, mono, makeBody, art, ANIM, WHEELS, ROUTES, lerp3 } = K;
const WB = 2.443, XFA = WB / 2, XRA = -WB / 2;   // eixos dianteiro e traseiro (x)
const TRK = 0.715, WR = 0.2915, WY = 0.29;        // bitola/2, raio do pneu 175/65R14, altura do centro da roda

/* ---------- carroceria: hatch genérico com as medidas reais (3.835 × 1.652 × 1.432 m, entre-eixos 2.442 m) ---------- */
const BK = {
  zMax: mono([[-1.87, .50], [-1.86, .60], [-1.84, .67], [-1.80, .73], [-1.75, .765], [-1.65, .80], [-1.5, .815], [-1.3, .822], [0, .826], [1.3, .822], [1.45, .815], [1.55, .805], [1.65, .79], [1.75, .76], [1.83, .715], [1.89, .65], [1.925, .57], [1.945, .48]]),
  yFloor: mono([[-1.87, .30], [-1.83, .26], [-1.70, .24], [-1.30, .22], [-0.90, .195], [0, .185], [0.90, .195], [1.40, .20], [1.80, .205], [1.90, .225], [1.945, .26]]),
  yFC: mono([[-1.87, .30], [-1.80, .33], [-1.72, .34], [-1.20, .34], [-1.05, .30], [-0.92, .31], [-0.30, .31], [-0.18, .25], [0.60, .25], [0.85, .22], [1.4, .20], [1.80, .205], [1.90, .225], [1.945, .26]]),
  yBelt: mono([[-1.87, .52], [-1.84, .58], [-1.80, .61], [-1.75, .70], [-1.66, .87], [-1.59, .945], [-1.3, .95], [-0.5, .94], [0.2, .93], [0.82, .925], [1.2, .87], [1.5, .81], [1.80, .75], [1.90, .70], [1.945, .62]]),
  yEdge: mono([[-1.87, .54], [-1.84, .60], [-1.80, .62], [-1.75, .71], [-1.66, .89], [-1.59, .99], [-1.35, 1.20], [-1.10, 1.35], [-0.6, 1.375], [0.0, 1.37], [0.23, 1.355], [0.5, 1.18], [0.82, .975], [1.2, .905], [1.5, .845], [1.80, .775], [1.90, .72], [1.945, .64]]),
  yTop: mono([[-1.87, .55], [-1.84, .605], [-1.80, .615], [-1.75, .70], [-1.66, .86], [-1.59, .985], [-1.35, 1.23], [-1.10, 1.39], [-0.6, 1.43], [-0.2, 1.43], [0.23, 1.40], [0.5, 1.21], [0.82, 1.00], [1.2, .93], [1.5, .87], [1.80, .79], [1.90, .71], [1.945, .61]]),
  zEdge: mono([[-1.87, .44], [-1.84, .55], [-1.80, .63], [-1.70, .70], [-1.59, .71], [-1.35, .66], [-1.10, .625], [-0.5, .63], [0.23, .645], [0.5, .70], [0.82, .755], [1.2, .745], [1.5, .72], [1.80, .64], [1.90, .55], [1.945, .44]])
};
const ROWS = [0.26, 0.32, 0.40, 0.48, 0.58, 0.615, 0.68, 0.76, 0.84, 0.90];
const UPF = [0.35, 0.7, 1.0];
const TOPU = [0.975, 0.9, 0.72, 0.48, 0.24, 0];
const B = makeBody({ XF: 1.945, XR: -1.87, RA: 0.375, ZN: 0.53, XFA, XRA, WY, BK, ROWS, UPF, TOPU,
  cuts: [0.93, 1.80, 0.827, 0.815, 0.80, 0.235, 0.23, -0.44, -0.49, -1.02, -1.10, -1.12, -1.56, -1.59, -1.79, 1.66, -1.63, 0.85, 1.83, 1.925, -1.705, -1.775, 1.915] });
const { XF, XR, AF0, AF1, AR0, AR1, J, surf, sRow, onSurf, sAtY, sideZ, topY, rowFn, cst, RS, RF, panel, glass, loop, edgePath, capGeo, flushPanels } = B;

/* ---------- divisões (x) ---------- */
const XA = 0.827, XC = 0.93, XH = 1.80, XWT = 0.23, XWB = 0.815, XB = -0.49, XBP = -0.44, XDF = 0.80, XQ = -1.02, XT = -1.10, XT2 = -1.12, XG = -1.56, XL = -1.79;

/* ---------- articulações: capô, portas e tampa giram em torno das dobradiças ---------- */
let hoodPivot, tailPivot, HINGE, TAILH;
const doorPivot = {}, DOORAX = {};
function hingePivot(owner, p, side) { const g = pivotOf(owner, p); g.userData.abs = true; g.userData.owner = owner; g.userData.side = side || 0; return g; }
const dp = s => doorPivot[s];
/* amortecedores da tampa e vareta do capô acompanham as dobradiças */
function updateStruts(v) {
  const a = -v * 1.15, c = Math.cos(a), sn = Math.sin(a);
  ANIM.struts.forEach(st => {
    const dx = st.Gc.x - TAILH[0], dy = st.Gc.y - TAILH[1];
    const G = V(TAILH[0] + dx * c - dy * sn, TAILH[1] + dx * sn + dy * c, st.Gc.z);
    const d = G.clone().sub(st.B), L = d.length(); d.normalize();
    setBar(st.body, st.B, st.B.clone().addScaledVector(d, Math.min(0.27, L * 0.6)));
    setBar(st.pin, G, G.clone().addScaledVector(d, -(L - 0.2)));
  });
}
function updateProp(v) {
  if (!ANIM.prop) return;
  const p = ANIM.prop, h = v * 0.95, c2 = Math.cos(h), s2 = Math.sin(h);
  const dx = p.Hc.x - HINGE[0], dy = p.Hc.y - HINGE[1];
  setBar(p.mesh, p.A, V(HINGE[0] + dx * c2 - dy * s2, HINGE[1] + dx * s2 + dy * c2, p.Hc.z));
}

function buildBody() {
  HINGE = [XC + 0.012, topY(XC, 0.52) - 0.028, 0];
  TAILH = [XT + 0.004, topY(XT, 0.40) - 0.012, 0];
  hoodPivot = hingePivot('capo', HINGE);
  tailPivot = hingePivot('tampa_tras', TAILH);
  S.forEach(s => { DOORAX[s] = [0.836, 0.66, s * (sideZ(0.836, 0.66) - 0.03)]; doorPivot[s] = hingePivot('portas', DOORAX[s], s); });
  art('hood', { pivot: hoodPivot, axis: 'z', max: 0.95, onUpdate: updateProp });
  S.forEach(s => art('door', { side: s, pivot: doorPivot[s], axis: 'y', max: s * 1.1 }));
  art('tail', { pivot: tailPivot, axis: 'z', max: -1.15, onUpdate: updateStruts });
  const r = j => rowFn(j), UEp = rowFn(J.UE, 0.016), SH = { shadow: true };

  /* frente: capô, grade do torpedo, para-lamas, para-choque, faróis */
  panel('capo', [RF(XC, XH, r(J.UE), 'LRB')], MAT.paint, { shadow: true, parent: hoodPivot });
  panel('capo', [RF(XC + 0.03, XH - 0.03, rowFn(J.UE, -0.03))], MAT.underDS, { off: -0.016, parent: hoodPivot, fl: 0, res: 0.05 });
  panel('grade_torpedo', [RF(XA, XC, r(J.UE), 'LRB')], MAT.plastic);
  const slots = []; for (let k = 0; k < 6; k++) slots.push(RS(0.857, 0.905, cst(0.035 + k * 0.085), cst(0.085 + k * 0.085)));
  panel('grade_torpedo', slots, MAT.grille, { off: 0.0015, fl: 0 });
  panel('paralamas', [
    RS(XA, AF1, r(J.R058), r(J.S0), 'LRB'), RS(XA, AF1, r(J.SB), r(J.R058), 'L'),
    RS(AF1, XH, r(J.SB), r(J.R058), 'RB'), RS(XA, XH, r(J.UE), r(J.SB), 'LRT')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('para_choque_d', [RS(AF1, XF, r(J.R058), r(J.F0), 'LT'), RF(XH, XF, r(J.SB), 'LB')], MAT.paint, SH);
  add('para_choque_d', capGeo(true, J.F0, J.T6), MAT.paint).castShadow = true;
  panel('farois', [RS(XH, XF, r(J.SB), r(J.R058))], MAT.black, { fl: 0 });
  panel('farois', [RS(1.66, XF, rowFn(J.SB, 0.006), rowFn(J.R058, -0.006))], MAT.reflector, { off: 0.004, fl: 0 });
  panel('farois', [RS(1.66, XF, r(J.SB), r(J.R058))], MAT.lensClear, { off: 0.013, fl: 0.009, flMat: MAT.trim });
  S.forEach(s => [[1.872, 0.034], [1.77, 0.028]].forEach(([x, rr]) => {
    const q = surf(x, s * (sRow(x, J.SB) + sRow(x, J.R058)) / 2), c = [q.p[0] + q.n[0] * 0.004, q.p[1] + q.n[1] * 0.004, q.p[2] + q.n[2] * 0.004];
    const d = add('farois', new THREE.SphereGeometry(rr, 20, 10, 0, TAU, 0, Math.PI / 2), MAT.steelDark, c);
    d.quaternion.setFromUnitVectors(V(0, -1, 0), V(q.n[0], q.n[1], q.n[2])); d.scale.set(1, 0.45, 1);
    const bz = add('farois', gTorus(rr * 1.03, 0.0022, 'y', 6, 32), MAT.chromeTrim || MAT.chrome, c); bz.quaternion.copy(d.quaternion);   // aro cromado do refletor
    sph('farois', [c[0] + q.n[0] * 0.004, c[1] + q.n[1] * 0.004, c[2] + q.n[2] * 0.004], rr * 0.28, MAT.bulb);
  }));
  panel('grade', [RF(1.83, 1.925, r(J.T3))], MAT.grille, { off: 0.004, fl: 0.004, flMat: MAT.grille });
  add('grade_inf', capGeo(true, J.R040, J.R058, 0.40, 0.004), MAT.grille);
  box('para_choque_d', [1.972, 0.30, 0], [0.008, 0.13, 0.40], MAT.plate, 0.01);

  /* portas: forro externo, moldura do vidro, painel interno, vidro, forro de dentro */
  panel('portas', [RS(XB, XA, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: dp, fl: 0.045 });
  panel('portas', [RS(XB, XA, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: dp, fl: 0.035 });
  panel('portas', [RS(XDF, XA, UEp, r(J.SB), 'Rl'), RS(XB, XBP, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: dp, fl: 0.035 });
  panel('portas', [RS(XB + 0.012, XA - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: dp, fl: 0, res: 0.05 });
  glass('vidros_portas', RS(XBP, XDF, UEp, r(J.SB)), dp);
  panel('forros_portas', [RS(XB + 0.02, XA - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: dp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XBP, XDF, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: dp });
  panel('frisos', [RS(XB + 0.02, XA - 0.03, rowFn(J.R048, -0.017), rowFn(J.R048, 0.017))], MAT.trim, { off: 0.004, fl: 0.004, flMat: MAT.trim, parent: dp });
  panel('fech_portas', [RS(-0.385, -0.255, rowFn(J.R084, -0.022), rowFn(J.R084, 0.022))], MAT.trim, { off: 0.003, fl: 0.003, flMat: MAT.trim, parent: dp });
  S.forEach(s => loop('fech_portas', edgePath(-0.37, -0.27, x => s * sRow(x, J.R084), 10), 0.0075, MAT.black, 0.011, dp(s)));   // maçaneta preta sobre o rebaixo

  /* laterais, soleiras, teto, colunas e vidros fixos (soldados ou colados) */
  panel('soleiras', [RS(XB, XA, r(J.R032), r(J.S0), 'TR')], MAT.paint, { shadow: true, fl: 0.045 });
  panel('laterais', [
    RS(AR1, XB, r(J.R032), r(J.S0)), RS(AR1, XB, r(J.SB), r(J.R032), 'Rt'),
    RS(AR0, AR1, r(J.R0615), r(J.S0), 'LB'), RS(AR0, XQ, r(J.SB), r(J.R0615)), RS(XQ, AR1, r(J.SB), r(J.R0615), 't'),
    RS(XL, AR0, r(J.SB), r(J.R0615), 'LB'), RS(XL, XT, r(J.UE), r(J.SB), 'LT'), RS(XT, XQ, r(J.UE), r(J.SB), 'r')], MAT.paint, { shadow: true, fl: 0.04 });
  panel('frisos', [RS(AR1 + 0.02, XB - 0.012, rowFn(J.R048, -0.017), rowFn(J.R048, 0.017))], MAT.trim, { off: 0.004, fl: 0.004, flMat: MAT.trim });
  glass('vidros_laterais', RS(XQ, XB, r(J.UE), r(J.SB)));
  panel('teto', [RF(XT, XQ, r(J.UE), 'L'), RF(XQ, XB, r(J.UE), 'b'), RF(XB, XWT, r(J.UE), 'Br')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('colunas', [RS(XWT, XA, r(J.T1), r(J.UE), 'BRt'), RF(XWB, XA, r(J.T1), 'Rl')], MAT.paint, { shadow: true, fl: 0.035 });
  glass('para_brisa', RF(XWT, XWB, r(J.T1)));

  /* traseira: tampa, vidro, para-choque, painel traseiro, lanternas e placa */
  panel('tampa_tras', [RF(XL, XG, r(J.UE), 'LBr'), RS(XG, XT2, r(J.T2), r(J.UE), 'Bt'), RF(XT2, XT, r(J.UE), 'RBl')], MAT.paint, { shadow: true, parent: tailPivot, fl: 0.03 });
  glass('vidro_tras', RF(XG, XT2, r(J.T2)), tailPivot);
  panel('tampa_tras', [RF(-1.742, -1.672, cst(0.2))], MAT.plate, { off: 0.006, fl: 0.005, flMat: MAT.plate, parent: tailPivot });
  S.forEach(s => { const q = onSurf(-1.664, s * 0.12, 0.01); box('luz_placa', q, [0.02, 0.012, 0.05], MAT.bulb, 0.004, null, tailPivot); });
  box('luz_freio', onSurf(-1.106, 0, 0.004), [0.03, 0.02, 0.24], MAT.lensRed, 0.006, null, tailPivot);
  panel('para_choque_t', [RS(XR, XL, r(J.R0615), r(J.F0)), RS(XL, AR0, r(J.R0615), r(J.F0), 'TR'), RF(XR, XL, r(J.R0615), 'R')], MAT.paint, SH);
  add('para_choque_t', capGeo(false, J.F0, J.T6), MAT.paint).castShadow = true;
  box('neblina_tras', [XR - 0.016, 0.37, 0], [0.012, 0.035, 0.12], MAT.lensRed, 0.004);
  box('painel_tras', [-1.806, 0.47, 0], [0.012, 0.30, 1.16], MAT.underDS);
  box('painel_tras', [-1.80, 0.622, 0], [0.03, 0.006, 1.16], MAT.underDS);
  panel('lanternas', [RS(XL, -1.63, r(J.SB), r(J.R0615))], MAT.lensRed, { off: 0.008, fl: 0.008, flMat: MAT.lensRed });
  S.forEach(s => {
    sph('lanternas', onSurf(-1.70, s * sAtY(-1.70, 0.72), -0.006), 0.02, MAT.bulb);
    sph('lanternas', onSurf(-1.66, s * sAtY(-1.66, 0.84), 0.002), 0.017, MAT.lensAmber);
  });

  /* assoalho e caixas de roda */
  panel('monobloco', [RS(AR0, 0.85, r(J.F2), r(J.F0)), RS(AR1, AF0, r(J.S0), r(J.F2))], MAT.underDS, { fl: 0, res: 0.06 });
  panel('caixas_roda', [RS(AF0, AF1, r(J.S0), r(J.F2)), RS(AR0, AR1, r(J.S0), r(J.F2))], MAT.liner, { fl: 0, res: 0.04 });

  /* borrachas de vedação das aberturas */
  S.forEach(s => {
    const P = [];
    edgePath(XB + 0.012, XA - 0.012, x => s * (sRow(x, J.R032) + 0.006), 30).forEach(p => P.push(p));
    for (let k = 1; k <= 10; k++) { const x = XA - 0.012, t = k / 10; P.push([x, s * (sRow(x, J.R032) + (sRow(x, J.UE) - sRow(x, J.R032)) * t)]); }
    edgePath(XA - 0.02, XB + 0.012, x => s * (sRow(x, J.UE) + 0.004), 30).forEach(p => P.push(p));
    for (let k = 1; k < 10; k++) { const x = XB + 0.012, t = k / 10; P.push([x, s * (sRow(x, J.UE) + (sRow(x, J.R032) - sRow(x, J.UE)) * t)]); }
    loop('borrachas', P, 0.008, MAT.rubber, -0.016, null, true);
    const Q = [], vs = (x, a, b, n) => { for (let k = 1; k < n; k++) { const t = k / n; Q.push([x, s * (a(x) + (b(x) - a(x)) * t)]); } };
    const lo = x => sRow(x, J.SB) - 0.003, hi = x => sRow(x, J.UE) + 0.003;
    edgePath(XQ + 0.004, XB - 0.004, lo, 12).forEach(p => Q.push(p)); vs(XB - 0.004, lo, hi, 8);
    edgePath(XB - 0.004, XQ + 0.004, hi, 12).forEach(p => Q.push(p)); vs(XQ + 0.004, hi, lo, 8);
    loop('borrachas', Q, 0.004, MAT.rubber, 0.001, null, true);
  });
  { // abertura da tampa traseira
    const P = [], e = x => sRow(x, J.UE) - 0.006;
    for (let k = 0; k <= 16; k++) { const x = XL + 0.012; P.push([x, -e(x) + 2 * e(x) * k / 16]); }
    edgePath(XL + 0.012, XT - 0.012, x => e(x), 24).forEach(p => P.push(p));
    for (let k = 0; k <= 16; k++) { const x = XT - 0.012; P.push([x, e(x) - 2 * e(x) * k / 16]); }
    edgePath(XT - 0.012, XL + 0.012, x => -e(x), 24).forEach(p => P.push(p));
    loop('borrachas', P, 0.008, MAT.rubber, -0.016, null, true);
    const H = []; for (let k = 0; k <= 20; k++) { const x = XC + 0.012, e2 = sRow(x, J.UE) - 0.03; H.push([x, -e2 + 2 * e2 * k / 20]); }
    loop('borrachas', H, 0.007, MAT.rubber, -0.02);
    const W = [], w = x => sRow(x, J.T1) - 0.004;
    edgePath(XWB - 0.004, XWT + 0.004, x => -w(x), 18).forEach(p => W.push(p));
    for (let k = 1; k < 20; k++) { const x = XWT + 0.004; W.push([x, -w(x) + 2 * w(x) * k / 20]); }
    edgePath(XWT + 0.004, XWB - 0.004, x => w(x), 18).forEach(p => W.push(p));
    loop('borrachas', W, 0.004, MAT.rubber, 0.001);
  }

  /* detalhes externos */
  S.forEach(s => {
    const q = surf(1.45, s * sAtY(1.45, 0.68));
    sph('piscas_lat', [q.p[0], q.p[1], q.p[2]], 0.03, MAT.lensAmber, null, [1, 0.45, 0.25]);
    const b = onSurf(0.812, s * (sRow(0.812, J.SB) - 0.012), 0);
    box('retrovisores', [b[0], b[1] + 0.012, b[2] + s * 0.022], [0.075, 0.045, 0.045], MAT.trim, 0.012, null, dp(s));
    box('retrovisores', [b[0] - 0.03, b[1] + 0.032, b[2] + s * 0.098], [0.105, 0.105, 0.165], MAT.paint, 0.038, null, dp(s));
    box('retrovisores', [b[0] - 0.084, b[1] + 0.032, b[2] + s * 0.1], [0.004, 0.085, 0.14], MAT.chrome, 0.002, null, dp(s));
    /* dobradiças, pinos e limitador das portas */
    const ax = DOORAX[s];
    [0.50, 0.80].forEach(y => {
      box('dobradicas', [0.864, y, s * (sideZ(0.864, y) - 0.042)], [0.04, 0.055, 0.03], MAT.steelDark, 0.004);
      box('dobradicas', [0.814, y, ax[2] - s * 0.004], [0.045, 0.05, 0.012], MAT.steelDark, 0.003, null, dp(s));
      cyl('dobradicas', [ax[0], y, ax[2]], 0.007, 0.07, 'y', MAT.steel);
    });
    rod('dobradicas', [0.868, 0.66, s * (sideZ(0.868, 0.66) - 0.07)], [0.79, 0.66, s * (sideZ(0.79, 0.66) - 0.055)], 0.007, MAT.steelDark, dp(s));
    /* fechadura, batente e varetas */
    const zl = s * (sideZ(-0.475, 0.74) - 0.03);
    box('fech_portas', [XB + 0.016, 0.74, zl], [0.022, 0.075, 0.04], MAT.steelDark, 0.004, null, dp(s));
    rod('fech_portas', [-0.31, 0.83, s * (sideZ(-0.31, 0.83) - 0.02)], [XB + 0.02, 0.75, zl], 0.003, MAT.steel, dp(s));
    add('fech_portas', gTorus(0.012, 0.003, 'x', 6, 16), MAT.steel, [XB - 0.012, 0.74, s * (sideZ(-0.5, 0.74) - 0.03)]);
    /* máquina de vidro e alto-falante (dentro da porta) */
    rod('maq_vidro', [-0.20, 0.50, s * 0.765], [0.50, 0.86, s * 0.765], 0.008, MAT.steelDark, dp(s));
    rod('maq_vidro', [-0.20, 0.86, s * 0.76], [0.50, 0.50, s * 0.76], 0.008, MAT.steelDark, dp(s));
    cyl('maq_vidro', [0.15, 0.68, s * 0.77], 0.035, 0.03, 'z', MAT.black, null, dp(s));
    cyl('alto_falantes', [0.52, 0.40, s * 0.765], 0.07, 0.03, 'z', MAT.black, null, dp(s));
    /* dobradiças do capô e da tampa */
    const zc = s * 0.56;
    box('dobr_capo', [HINGE[0] + 0.012, HINGE[1] - 0.035, zc], [0.06, 0.055, 0.012], MAT.steelDark, 0.004);
    cyl('dobr_capo', [HINGE[0], HINGE[1], zc], 0.007, 0.03, 'z', MAT.steel);
    rod('dobr_capo', [HINGE[0], HINGE[1], zc], [HINGE[0] + 0.09, topY(HINGE[0] + 0.09, 0.56) - 0.014, zc], 0.008, MAT.steelDark, hoodPivot);
    const zt = s * 0.40;
    box('dobr_tampa', [TAILH[0] + 0.03, TAILH[1] + 0.004, zt], [0.05, 0.012, 0.04], MAT.steelDark, 0.003);
    cyl('dobr_tampa', [TAILH[0], TAILH[1], zt], 0.007, 0.05, 'z', MAT.steel);
    rod('dobr_tampa', [TAILH[0], TAILH[1], zt], [TAILH[0] - 0.075, topY(TAILH[0] - 0.075, 0.40) - 0.012, zt], 0.008, MAT.steelDark, tailPivot);
    /* amortecedores da tampa (reposicionados quando a tampa abre) */
    const g = new THREE.Group(); reg('amort_tampa').group.add(g);
    const body = add('amort_tampa', new THREE.CylinderGeometry(0.012, 0.012, 1, 12), MAT.black, null, null, g);
    const pin = add('amort_tampa', new THREE.CylinderGeometry(0.006, 0.006, 1, 10), MAT.chrome, null, null, g);
    ANIM.struts.push({ body, pin, B: V(-1.15, 1.315, s * 0.585), Gc: V(-1.50, 0.985, s * 0.60) });
  });
  /* fechaduras da tampa e do capô (lingueta) */
  box('fech_tampa', [XL + 0.02, onSurf(XL + 0.02, 0, 0)[1] + 0.01, 0], [0.03, 0.04, 0.07], MAT.steelDark, 0.004, null, tailPivot);
  add('fech_tampa', gTorus(0.013, 0.003, 'x', 6, 16), MAT.steel, [XL - 0.012, 0.628, 0]);
  add('fech_capo', gTorus(0.012, 0.003, 'z', 6, 16), MAT.steel, [1.772, 0.772, 0], null, hoodPivot);
  { const z = sideZ(-1.33, 0.77) + 0.002; add('bocal', gCyl(0.07, 0.07, 0.006, 'z', 32), MAT.paint, [-1.33, 0.77, -z]); add('bocal', gTorus(0.07, 0.004, 'z', 6, 40), MAT.trim, [-1.33, 0.77, -z - 0.003]); }
  /* limpadores */
  const wip = (x0, z0, z1) => { const pts = []; for (let k = 0; k <= 8; k++) { const z = z0 + (z1 - z0) * k / 8, x = x0 - 0.04 * k / 8; pts.push([x, topY(x, z) + 0.014, z]); } tube('limpador', pts, 0.006, MAT.black); };
  wip(0.78, -0.40, 0.12); wip(0.78, 0.10, 0.60);
  { const a = onSurf(-1.55, 0, 0.013), b = onSurf(-1.30, 0.28, 0.013); rod('limpador_tras', a, b, 0.006, MAT.black, tailPivot); cyl('limpador_tras', [-1.62, 0.93, 0], 0.035, 0.08, 'x', MAT.black, null, tailPivot); }
  flushPanels();
}

/* ===== Mecânica do cofre: motor TU3JP, admissão, partida a frio, ignição, arrefecimento, escape, elétrica e câmbio ===== */
const EXc = 1.34, EYc = 0.40;                       // eixo do virabrequim
const CYLZ = [-0.035, -0.117, -0.199, -0.281];      // cilindros 1..4 (1 do lado do câmbio)
const CR = 0.0385, RODL = 0.13;                     // meio curso e biela
ANIM.crank = { x: EXc, y: EYc, r: CR, rod: RODL, pid: 'pistoes', rid: 'bielas' };

function buildEngine() {
  /* bloco, cárter, cabeçote */
  box('bloco', [1.345, 0.46, -0.157], [0.23, 0.32, 0.355], MAT.alu, 0.012);
  for (const z of [-0.076, -0.158, -0.24]) box('bloco', [1.462, 0.45, z], [0.01, 0.22, 0.016], MAT.alu);
  box('carter', [1.345, 0.245, -0.16], [0.21, 0.11, 0.325], MAT.aluDark, 0.025);
  box('carter', [1.345, 0.303, -0.16], [0.225, 0.008, 0.34], MAT.aluDark);
  box('junta_cab', [1.35, 0.622, -0.157], [0.236, 0.004, 0.346], MAT.steel);
  box('cabecote', [1.35, 0.676, -0.157], [0.24, 0.104, 0.35], MAT.alu, 0.01);
  box('tampa_valv', [1.345, 0.758, -0.157], [0.19, 0.056, 0.33], MAT.plastic, 0.02);
  add('tampa_oleo', gCyl(0.024, 0.024, 0.02, 'y', 24), MAT.yellow, [1.29, 0.795, -0.07]);
  box('bobina', [1.37, 0.806, -0.157], [0.05, 0.034, 0.30], MAT.coil, 0.008);
  box('bobina', [1.37, 0.815, 0.012], [0.03, 0.03, 0.04], MAT.black, 0.004);
  CYLZ.forEach(z => {
    rod('velas', [1.37, 0.655, z], [1.37, 0.71, z], 0.0075, MAT.steel);
    rod('velas', [1.37, 0.71, z], [1.37, 0.785, z], 0.008, MAT.plate);
    add('camisas', gCyl(0.0395, 0.0395, 0.25, 'y', 24, true), MAT.iron, [EXc, 0.495, z]);
  });
  /* pistões e bielas (animados) */
  CYLZ.forEach((z, i) => {
    const g = new THREE.Group(); reg('pistoes').group.add(g);
    add('pistoes', gCyl(0.037, 0.037, 0.05, 'y', 24), MAT.alu, [0, 0.02, 0], null, g);
    for (const dy of [0.036, 0.029]) add('pistoes', gTorus(0.0372, 0.0016, 'y', 4, 24), MAT.steelDark, [0, dy, 0], null, g);
    add('pistoes', gCyl(0.009, 0.009, 0.05, 'z', 10), MAT.steel, [0, 0, 0], null, g);
    g.position.set(EXc, 0.55, z);
    const r = add('bielas', gBox(0.02, RODL, 0.014, 0.004), MAT.steel); r.userData.noMerge = true;
    ANIM.pistons.push({ g, z, ph: (i === 0 || i === 3) ? 0 : Math.PI }); ANIM.rods.push(r);
  });
  /* virabrequim (pivô) */
  const kp = pivotOf('virabrequim', [EXc, EYc, 0]); ANIM.spin.push(kp);
  [0.02, -0.076, -0.158, -0.24, -0.322].forEach(z => add('virabrequim', gCyl(0.024, 0.024, 0.03, 'z'), MAT.steel, [0, 0, z], null, kp));
  CYLZ.forEach((z, i) => {
    const ph = (i === 0 || i === 3) ? 0 : Math.PI, px = CR * Math.sin(ph), py = CR * Math.cos(ph);
    add('virabrequim', gCyl(0.021, 0.021, 0.026, 'z'), MAT.steel, [px, py, z], null, kp);
    for (const dz of [-0.022, 0.022]) {
      add('virabrequim', gBox(0.05, 0.075, 0.012, 0.006), MAT.iron, [px / 2, py / 2, z + dz], null, kp);
      add('virabrequim', gBox(0.08, 0.035, 0.012, 0.01), MAT.iron, [-px * 0.9, -py * 0.9, z + dz], null, kp);
    }
  });
  add('virabrequim', gCyl(0.018, 0.018, 0.14, 'z'), MAT.steel, [0, 0, -0.39], null, kp);
  add('virabrequim', gCyl(0.03, 0.03, 0.022, 'z', 20), MAT.steel, [0, 0, -0.375], null, kp);
  add('virabrequim', gCyl(0.04, 0.04, 0.012, 'z'), MAT.steel, [0, 0, 0.03], null, kp);
  const pv = pivotOf('polia_vira', [EXc, EYc, 0]); ANIM.spin.push(pv);
  add('polia_vira', gCyl(0.066, 0.066, 0.022, 'z', 36), MAT.steelDark, [0, 0, -0.447], null, pv);
  add('polia_vira', gCyl(0.02, 0.02, 0.03, 'z', 16), MAT.steel, [0, 0, -0.44], null, pv);
  const fw = pivotOf('volante_motor', [EXc, EYc, 0]); ANIM.spin.push(fw);
  add('volante_motor', gCyl(0.135, 0.135, 0.02, 'z', 48), MAT.iron, [0, 0, 0.042], null, fw);
  add('volante_motor', gTorus(0.136, 0.005, 'z', 6, 60), MAT.steel, [0, 0, 0.042], null, fw);
  const cl = pivotOf('embreagem', [EXc, EYc, 0]); ANIM.spin.push(cl);
  add('embreagem', gCyl(0.095, 0.095, 0.008, 'z', 40), MAT.pad, [0, 0, 0.057], null, cl);
  add('embreagem', gCyl(0.115, 0.108, 0.018, 'z', 40), MAT.steel, [0, 0, 0.071], null, cl);
  add('embreagem', gTorus(0.06, 0.012, 'z', 6, 30), MAT.steelDark, [0, 0, 0.084], null, cl);
  add('rol_emb', gTorus(0.028, 0.009, 'z', 8, 24), MAT.steel, [EXc, EYc, 0.098]);
  rod('rol_emb', [EXc, EYc + 0.03, 0.10], [EXc + 0.02, 0.57, 0.10], 0.007, MAT.steelDark);
  /* comando, balancins, válvulas */
  const cp = pivotOf('comando', [1.30, 0.69, 0]); ANIM.cam.push(cp);
  add('comando', gCyl(0.012, 0.012, 0.36, 'z'), MAT.steel, [0, 0, -0.15], null, cp);
  CYLZ.forEach((z, i) => [-0.018, 0.018].forEach((dz, k) => {
    const a = (i * Math.PI / 2) + k * Math.PI * 0.6;
    const m = add('comando', gCyl(0.017, 0.017, 0.012, 'z', 16), MAT.steel, [Math.sin(a) * 0.006, Math.cos(a) * 0.006, z + dz], null, cp);
    m.scale.set(1, 1.35, 1); m.rotation.z = -a;
  }));
  const cpp = pivotOf('polia_comando', [1.30, 0.69, 0]); ANIM.cam.push(cpp);
  add('polia_comando', gCyl(0.055, 0.055, 0.022, 'z', 40), MAT.steel, [0, 0, -0.375], null, cpp);
  add('polia_comando', gCyl(0.008, 0.008, 0.03, 'z', 8), MAT.black, [0.03, 0, -0.38], null, cpp);
  add('balancins', gCyl(0.009, 0.009, 0.34, 'z'), MAT.steel, [1.345, 0.742, -0.157]);
  CYLZ.forEach(z => [-0.018, 0.018].forEach((dz, k) => {
    box('balancins', [1.345, 0.738, z + dz], [0.075, 0.012, 0.012], MAT.steelDark, 0.003, [0, 0, k ? 0.12 : -0.12]);
    const x = k ? 1.40 : 1.29;
    rod('valvulas', [x, 0.626, z + dz], [x, 0.735, z + dz], 0.0035, MAT.steel);
    add('valvulas', gCyl(0.016, 0.016, 0.003, 'y', 16), MAT.steel, [x, 0.627, z + dz]);
    add('valvulas', gCyl(0.011, 0.011, 0.035, 'y', 12, true), MAT.spring, [x, 0.712, z + dz]);
  }));
  /* distribuição (lado direito) */
  const tb = beltPath([[EXc, EYc, 0.03], [1.44, 0.56, 0.025], [1.30, 0.69, 0.057], [1.22, 0.52, 0.032]]);
  ribbon('correia_dent', tb, -0.375, 0.024, MAT.belt);
  add('tensor_dent', gCyl(0.025, 0.025, 0.026, 'z', 24), MAT.steel, [1.44, 0.56, -0.375]);
  box('tensor_dent', [1.455, 0.575, -0.36], [0.03, 0.04, 0.01], MAT.steelDark);
  add('bomba_agua', gCyl(0.032, 0.032, 0.024, 'z', 24), MAT.steel, [1.22, 0.52, -0.375]);
  add('bomba_agua', gCyl(0.045, 0.045, 0.03, 'z', 24), MAT.aluDark, [1.22, 0.52, -0.348]);
  plateFromHull('capas_correia', tb, 0.02, -0.405, 0.01, MAT.plastic);
  /* correia de acessórios */
  const ab = beltPath([[EXc, EYc, 0.066], [1.53, 0.50, 0.028]]);   // sem ar e sem direção hidráulica: só virabrequim e alternador
  ribbon('correia_acess', ab, -0.447, 0.02, MAT.belt);
  box('tensor_acess', [1.49, 0.585, -0.335], [0.11, 0.018, 0.012], MAT.steelDark, 0.004, [0, 0, 0.55]);   // braço com rasgo de ajuste
  box('tensor_acess', [1.49, 0.585, -0.328], [0.07, 0.006, 0.004], MAT.gap, 0, [0, 0, 0.55]);
  add('tensor_acess', gCyl(0.009, 0.009, 0.03, 'z', 6), MAT.zinc, [1.46, 0.603, -0.322]);
  add('alternador', gCyl(0.062, 0.062, 0.15, 'z', 32), MAT.alu, [1.53, 0.50, -0.35]);
  for (const z of [-0.30, -0.33, -0.36, -0.39]) add('alternador', gTorus(0.062, 0.003, 'z', 4, 32), MAT.aluDark, [1.53, 0.50, z]);
  add('alternador', gCyl(0.028, 0.028, 0.02, 'z', 24), MAT.steelDark, [1.53, 0.50, -0.447]);
  box('alternador', [1.49, 0.47, -0.30], [0.06, 0.03, 0.03], MAT.aluDark);
  /* coxins */
  box('coxim_dir', [1.36, 0.80, -0.505], [0.08, 0.06, 0.07], MAT.rubber, 0.012);
  rod('coxim_dir', [1.36, 0.76, -0.32], [1.36, 0.80, -0.47], 0.012, MAT.steelDark);
  box('coxim_dir', [1.36, 0.80, -0.56], [0.10, 0.03, 0.05], MAT.steelDark);
  box('coxim_esq', [1.30, 0.57, 0.30], [0.08, 0.05, 0.08], MAT.rubber, 0.012);
  box('coxim_esq', [1.30, 0.59, 0.43], [0.06, 0.03, 0.18], MAT.steelDark);
  rod('coxim_inf', [1.25, 0.24, -0.10], [1.00, 0.22, -0.10], 0.012, MAT.steelDark);
  add('coxim_inf', gCyl(0.025, 0.025, 0.04, 'z'), MAT.rubber, [1.00, 0.22, -0.10]);
  add('coxim_inf', gCyl(0.02, 0.02, 0.04, 'z'), MAT.rubber, [1.25, 0.24, -0.10]);
  /* lubrificação */
  box('bomba_oleo', [1.36, 0.26, -0.25], [0.07, 0.04, 0.05], MAT.aluDark, 0.006);
  tube('bomba_oleo', [[1.37, 0.24, -0.25], [1.38, 0.205, -0.20], [1.39, 0.205, -0.14]], 0.008, MAT.steel);
  add('filtro_oleo', gCyl(0.038, 0.038, 0.08, 'x', 28), MAT.blue, [1.50, 0.36, -0.20]);
  rod('vareta', [1.47, 0.30, 0.03], [1.495, 0.79, 0.03], 0.005, MAT.steel);
  add('vareta', gTorus(0.014, 0.004, 'x', 6, 18), MAT.yellow, [1.497, 0.805, 0.03]);
  rod('respiro', [1.30, 0.785, -0.28], [1.22, 0.85, -0.25], 0.009, MAT.hose);
}

function buildIntake() {
  tube('tomada_ar', [[1.74, 0.745, 0.14], [1.68, 0.745, 0.17], [1.62, 0.735, 0.20]], 0.028, MAT.plastic);
  box('caixa_filtro', [1.51, 0.72, 0.23], [0.22, 0.15, 0.26], MAT.plastic, 0.025);
  box('caixa_filtro', [1.51, 0.765, 0.23], [0.225, 0.006, 0.265], MAT.black);
  box('filtro_ar', [1.51, 0.74, 0.23], [0.185, 0.032, 0.225], MAT.paper, 0.004);
  for (let k = -3; k <= 3; k++) box('filtro_ar', [1.51 + k * 0.024, 0.758, 0.23], [0.006, 0.006, 0.215], MAT.paper);
  tube('duto_ar', [[1.43, 0.76, 0.14], [1.43, 0.83, 0.07], [1.39, 0.865, 0.0], [1.33, 0.862, -0.03]], 0.031, MAT.hose);
  sph('duto_ar', [1.45, 0.82, 0.12], 0.05, MAT.hose, null, [1, 0.6, 1.2]);
  add('tbi', gCyl(0.036, 0.036, 0.06, 'x', 28), MAT.aluDark, [1.29, 0.86, -0.03]);
  box('tbi', [1.29, 0.845, 0.028], [0.05, 0.05, 0.045], MAT.box, 0.006);
  box('coletor_adm', [1.15, 0.845, -0.157], [0.12, 0.07, 0.33], MAT.plastic, 0.025);
  tube('coletor_adm', [[1.26, 0.86, -0.03], [1.22, 0.855, -0.05], [1.19, 0.85, -0.07]], 0.029, MAT.plastic);
  CYLZ.forEach(z => tube('coletor_adm', [[1.13, 0.81, z], [1.115, 0.75, z], [1.17, 0.685, z], [1.228, 0.675, z]], 0.019, MAT.plastic));
  add('galeria', gCyl(0.011, 0.011, 0.31, 'z'), MAT.steel, [1.175, 0.735, -0.155]);
  CYLZ.forEach(z => { rod('bicos', [1.175, 0.728, z], [1.198, 0.69, z], 0.0085, MAT.black); rod('bicos', [1.198, 0.69, z], [1.205, 0.678, z], 0.004, MAT.steel); });
  box('tmap', [1.16, 0.888, -0.22], [0.03, 0.02, 0.03], MAT.black, 0.004);
  add('purga', gCyl(0.016, 0.016, 0.04, 'y', 16), MAT.black, [1.08, 0.80, -0.31]);
  tube('canister', [[1.78, 0.52, -0.42], [1.60, 0.70, -0.40], [1.30, 0.87, -0.37], [1.09, 0.82, -0.32]], 0.004, MAT.cable);
  add('canister', gCyl(0.045, 0.045, 0.15, 'y', 24), MAT.black, [1.78, 0.45, -0.42]);
  /* partida a frio */
  box('res_pf', [1.44, 0.72, 0.44], [0.07, 0.12, 0.08], MAT.whiteRes, 0.015);
  add('res_pf', gCyl(0.019, 0.019, 0.025, 'y', 20), MAT.black, [1.44, 0.79, 0.44]);
  add('bomba_pf', gCyl(0.017, 0.017, 0.05, 'y', 16), MAT.black, [1.44, 0.635, 0.44]);
  box('valv_pf', [1.10, 0.865, 0.04], [0.03, 0.025, 0.03], MAT.black, 0.004);
  tube('tubos_pf', [[1.44, 0.61, 0.44], [1.32, 0.66, 0.30], [1.18, 0.84, 0.10], [1.10, 0.865, 0.04]], 0.004, MAT.cable);
  CYLZ.forEach(z => tube('tubos_pf', [[1.10, 0.86, 0.04], [1.095, 0.83, (z + 0.04) / 2], [1.11, 0.78, z + 0.01]], 0.0028, MAT.cable));
  /* linha de combustível no cofre */
  tube('linhas_comb', [[0.90, 0.215, -0.30], [1.00, 0.45, -0.34], [1.10, 0.70, -0.33], [1.175, 0.735, -0.31]], 0.005, MAT.steel);
}

function buildIgnitionCooling() {
  box('ecu', [0.96, 0.80, -0.12], [0.13, 0.034, 0.17], MAT.box, 0.006);
  box('ecu', [0.96, 0.81, -0.02], [0.05, 0.03, 0.04], MAT.black, 0.004);
  add('sens_rot', gCyl(0.01, 0.01, 0.05, 'y', 12), MAT.black, [1.24, 0.53, 0.045]);
  add('sens_det', gCyl(0.016, 0.016, 0.02, 'x', 16), MAT.black, [1.224, 0.46, -0.16]);
  add('sens_temp', gCyl(0.008, 0.008, 0.04, 'y', 12), MAT.black, [1.345, 0.735, 0.062]);
  rod('sonda', [1.58, 0.52, -0.10], [1.61, 0.585, -0.10], 0.009, MAT.steel);
  tube('sonda', [[1.61, 0.585, -0.10], [1.58, 0.70, -0.05], [1.45, 0.83, 0.05]], 0.003, MAT.cable);
  add('sens_oleo', gCyl(0.01, 0.01, 0.03, 'x', 12), MAT.black, [1.47, 0.36, -0.03]);
  add('sens_nivel_oleo', gCyl(0.012, 0.012, 0.02, 'x', 12), MAT.black, [1.455, 0.23, -0.05]);
  add('sens_vel', gCyl(0.012, 0.012, 0.04, 'y', 12), MAT.black, [1.20, 0.55, 0.30]);
  /* arrefecimento */
  box('radiador', [1.70, 0.45, 0], [0.028, 0.30, 0.60], MAT.aluDark);
  for (let k = -9; k <= 9; k++) box('radiador', [1.715, 0.45, k * 0.03], [0.003, 0.29, 0.004], MAT.alu);
  S.forEach(s => box('radiador', [1.70, 0.45, s * 0.315], [0.04, 0.32, 0.03], MAT.black, 0.006));
  add('ventoinha', gTorus(0.15, 0.012, 'x', 8, 48), MAT.plastic, [1.665, 0.45, 0]);
  add('ventoinha', gCyl(0.04, 0.04, 0.05, 'x', 20), MAT.black, [1.645, 0.45, 0]);
  const fan = new THREE.Group(); fan.position.set(1.66, 0.45, 0); reg('ventoinha').group.add(fan); ANIM.fan = fan;
  for (let k = 0; k < 5; k++) { const m = add('ventoinha', gBox(0.006, 0.13, 0.035, 0.003), MAT.plastic, [0, 0.075 * Math.cos(k * TAU / 5), 0.075 * Math.sin(k * TAU / 5)], [k * TAU / 5, 0.35, 0], fan); m.rotation.order = 'XYZ'; }
  S.forEach(s => rod('ventoinha', [1.66, 0.45, s * 0.15], [1.69, 0.45, s * 0.28], 0.006, MAT.plastic));
  box('vaso', [1.56, 0.72, -0.50], [0.13, 0.14, 0.12], MAT.coolantTank, 0.03);
  add('vaso', gCyl(0.026, 0.026, 0.025, 'y', 24), MAT.black, [1.56, 0.80, -0.50]);
  tube('vaso', [[1.56, 0.65, -0.47], [1.50, 0.50, -0.40], [1.45, 0.34, -0.345]], 0.007, MAT.hose);
  box('termostato', [1.37, 0.68, 0.052], [0.06, 0.06, 0.05], MAT.aluDark, 0.008);
  tube('mang_sup', [[1.40, 0.68, 0.07], [1.52, 0.665, 0.14], [1.62, 0.60, 0.25], [1.685, 0.59, 0.27]], 0.017, MAT.hose);
  tube('mang_inf', [[1.685, 0.32, -0.27], [1.58, 0.30, -0.30], [1.40, 0.34, -0.36], [1.25, 0.44, -0.345]], 0.017, MAT.hose);
  tube('mang_aquec', [[1.34, 0.66, 0.08], [1.10, 0.58, 0.09], [0.90, 0.58, 0.05], [0.72, 0.62, 0.06]], 0.009, MAT.hose);
  tube('mang_aquec', [[1.24, 0.47, -0.33], [1.10, 0.55, -0.02], [0.90, 0.56, 0.0], [0.72, 0.60, 0.01]], 0.009, MAT.hose);
}

function buildExhaust() {
  CYLZ.forEach(z => tube('coletor_esc', [[1.472, 0.67, z], [1.53, 0.64, z * 0.8 - 0.02], [1.575, 0.56, -0.12]], 0.018, MAT.exhaust));
  box('protetor', [1.52, 0.71, -0.157], [0.06, 0.01, 0.33], MAT.aluDark, 0, [0, 0, -0.55]);
  add('catalisador', gCyl(0.055, 0.055, 0.17, 'y', 28), MAT.cat, [1.575, 0.41, -0.12]);
  add('catalisador', gCyl(0.02, 0.055, 0.04, 'y', 28), MAT.cat, [1.575, 0.515, -0.12]);
  add('catalisador', gCyl(0.055, 0.022, 0.04, 'y', 28), MAT.cat, [1.575, 0.305, -0.12]);
  tube('catalisador', [[1.575, 0.29, -0.12], [1.58, 0.19, -0.10], [1.50, 0.156, -0.06], [1.08, 0.155, -0.01]], 0.022, MAT.exhaust);
  add('flexivel', gCyl(0.028, 0.028, 0.12, 'x', 20), MAT.steel, [1.00, 0.155, 0.0]);
  for (let k = -4; k <= 4; k++) add('flexivel', gTorus(0.029, 0.003, 'x', 4, 20), MAT.steelDark, [1.00 + k * 0.012, 0.155, 0]);
  tube('tubo_inter', [[0.94, 0.157, 0.0], [0.60, 0.17, 0.02], [0.30, 0.18, 0.02]], 0.022, MAT.exhaust);
  add('silenc_inter', gCyl(0.06, 0.06, 0.55, 'x', 28), MAT.exhaust, [0.025, 0.18, 0.02]);
  tube('tubo_inter', [[-0.25, 0.18, 0.02], [-0.42, 0.185, -0.14], [-0.62, 0.19, -0.36], [-1.00, 0.20, -0.42], [-1.40, 0.22, -0.47]], 0.022, MAT.exhaust);
  const ms = add('silenc_tras', gCyl(0.07, 0.07, 0.40, 'x', 28), MAT.exhaust, [-1.60, 0.23, -0.48]); ms.scale.set(1, 1, 1.3);
  tube('silenc_tras', [[-1.80, 0.23, -0.48], [-1.86, 0.235, -0.48], [-1.90, 0.24, -0.48]], 0.022, MAT.chrome);
  [[0.70, 0.19, 0.02], [-0.35, 0.21, -0.10], [-1.10, 0.23, -0.44], [-1.76, 0.29, -0.48]].forEach(p => box('coxins_esc', [p[0], p[1] + 0.04, p[2]], [0.03, 0.05, 0.02], MAT.rubber, 0.005));
}

function buildElectricTrans() {
  box('bateria', [1.622, 0.55, 0.47], [0.175, 0.18, 0.24], MAT.batt, 0.008);
  add('bateria', gCyl(0.011, 0.011, 0.02, 'y', 12), MAT.red, [1.585, 0.648, 0.38]);
  add('bateria', gCyl(0.011, 0.011, 0.02, 'y', 12), MAT.black, [1.585, 0.648, 0.56]);
  tube('cabos_bat', [[1.585, 0.66, 0.38], [1.50, 0.62, 0.32], [1.30, 0.57, 0.22], [1.14, 0.53, 0.16]], 0.008, MAT.redCable);
  tube('cabos_bat', [[1.585, 0.66, 0.56], [1.64, 0.60, 0.64], [1.62, 0.50, 0.70]], 0.008, MAT.cable);
  tube('cabos_bat', [[1.25, 0.47, 0.34], [1.22, 0.53, 0.44], [1.20, 0.56, 0.50]], 0.006, MAT.cable);
  box('bsm', [1.47, 0.62, 0.62], [0.10, 0.10, 0.12], MAT.black, 0.01);
  box('bsi', [0.56, 0.60, 0.58], [0.12, 0.10, 0.14], MAT.black, 0.01);
  add('motor_partida', gCyl(0.045, 0.045, 0.17, 'z', 24), MAT.steelDark, [1.12, 0.47, 0.145]);
  add('motor_partida', gCyl(0.025, 0.025, 0.10, 'z', 20), MAT.steel, [1.12, 0.525, 0.16]);
  tube('chicote', [[1.47, 0.67, 0.62], [1.45, 0.83, 0.35], [1.41, 0.86, 0.10], [1.41, 0.85, -0.25], [1.20, 0.88, -0.36], [0.98, 0.82, -0.20]], 0.011, MAT.harness);
  tube('chicote', [[0.84, 0.70, 0.62], [0.56, 0.62, 0.62], [0.42, 0.26, 0.70], [-1.40, 0.26, 0.68], [-1.66, 0.70, 0.68]], 0.009, MAT.harness);
  add('buzina', gCyl(0.045, 0.045, 0.02, 'x', 24), MAT.black, [1.86, 0.34, -0.26]);
  add('limpador', gCyl(0.035, 0.035, 0.10, 'x', 20), MAT.black, [0.90, 0.90, -0.30]);
  rod('limpador', [0.86, 0.93, -0.42], [0.86, 0.93, 0.12], 0.005, MAT.steel);
  box('lavador', [1.78, 0.42, 0.50], [0.10, 0.18, 0.12], MAT.whiteRes, 0.02);
  tube('lavador', [[1.78, 0.51, 0.52], [1.72, 0.62, 0.58], [1.66, 0.70, 0.60]], 0.012, MAT.whiteRes);
  add('lavador', gCyl(0.018, 0.018, 0.02, 'y', 16), MAT.blue, [1.66, 0.715, 0.60]);
  /* câmbio MA/5 */
  add('cambio', gLathe([[0.0, 0.0], [0.152, 0.0], [0.15, 0.03], [0.13, 0.13], [0.0, 0.13]], 'z', 40), MAT.alu, [EXc, EYc, 0.02]);
  box('cambio', [1.30, 0.40, 0.25], [0.28, 0.26, 0.20], MAT.alu, 0.03);
  box('cambio', [1.31, 0.40, 0.355], [0.22, 0.20, 0.02], MAT.aluDark, 0.01);
  add('diferencial', gCyl(0.085, 0.085, 0.26, 'z', 32), MAT.alu, [1.185, 0.29, 0.16]);
  add('diferencial', gTorus(0.07, 0.01, 'z', 6, 36), MAT.steel, [1.185, 0.29, 0.10]);
  S.forEach(s => {
    const zi = s > 0 ? 0.29 : 0.03;
    const pts = s > 0 ? [[1.185, 0.29, zi], [1.20, 0.29, 0.45], [XFA, 0.29, 0.62]] : [[1.185, 0.29, zi], [1.19, 0.29, -0.15], [XFA, 0.29, -0.62]];
    tube('semieixos', pts, 0.013, MAT.steel);
    add('semieixos', gCyl(0.018, 0.035, 0.07, 'z', 16), MAT.rubber, [XFA, 0.29, s * 0.585]);
    add('semieixos', gCyl(0.035, 0.018, 0.07, 'z', 16), MAT.rubber, [1.19, 0.29, s > 0 ? 0.33 : -0.03]);
  });
  tube('trambulador', [[1.20, 0.52, 0.25], [0.95, 0.36, 0.12], [0.50, 0.265, 0.03], [0.14, 0.30, 0.0]], 0.008, MAT.steel);
  tube('trambulador', [[1.18, 0.50, 0.21], [0.94, 0.34, 0.09], [0.50, 0.255, 0.0], [0.15, 0.29, -0.02]], 0.006, MAT.steelDark);
  rod('alavanca', [0.13, 0.33, 0], [0.10, 0.61, 0], 0.008, MAT.steel);
  sph('alavanca', [0.10, 0.63, 0], 0.028, MAT.black);
  add('alavanca', gCyl(0.02, 0.07, 0.08, 'y', 20), MAT.black, [0.12, 0.42, 0]);
  tube('cabo_emb', [[EXc + 0.02, 0.58, 0.10], [1.20, 0.64, 0.30], [0.90, 0.64, 0.44], [0.68, 0.62, 0.46]], 0.005, MAT.cable);
}

/* ===== Chassi, rodas, freios, direção, combustível traseiro, interior e estrutura ===== */
const TIRE_PROF = [[0.178, -0.074], [0.195, -0.086], [0.24, -0.0875], [0.275, -0.083], [0.289, -0.07], [0.2915, -0.05], [0.2915, 0.05], [0.289, 0.07], [0.275, 0.083], [0.24, 0.0875], [0.195, 0.086], [0.178, 0.074]];

function hubcapGeo() {
  const sh = new THREE.Shape(); sh.absarc(0, 0, 0.172, 0, TAU, false);
  for (let k = 0; k < 8; k++) {
    const a0 = k * TAU / 8 + 0.12, a1 = (k + 1) * TAU / 8 - 0.12, h = new THREE.Path();
    h.moveTo(Math.cos(a0) * 0.075, Math.sin(a0) * 0.075);
    h.absarc(0, 0, 0.145, a0, a1, false);
    h.lineTo(Math.cos(a1) * 0.075, Math.sin(a1) * 0.075);
    h.absarc(0, 0, 0.075, a1, a0, true);
    sh.holes.push(h);
  }
  return new THREE.ExtrudeGeometry(sh, { depth: 0.01, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 1, curveSegments: 10 });
}

function buildWheels() {
  const hc = hubcapGeo();
  [XFA, XRA].forEach(X => S.forEach(s => {
    const zc = s * TRK, flip = s < 0 ? [0, Math.PI, 0] : null, front = X === XFA, c = V(X, WY, zc);
    let yaw = null;
    if (front) {                                   // esterço: gira na vertical que passa pelo centro da roda
      yaw = pivotOf('mangas', [X, WY, zc]);
      Object.assign(yaw.userData, { abs: true, owner: 'mangas', side: s, absPos: c.clone() });
    }
    const spin = new THREE.Group();                // giro da roda em torno do eixo
    if (yaw) yaw.add(spin); else { spin.position.copy(c); reg('pneus').group.add(spin); }
    Object.assign(spin.userData, { abs: true, owner: front ? 'mangas' : 'pneus', side: s, absPos: c.clone() });
    WHEELS.push({ X, s, front, yaw, spin });
    const t = add('pneus', gLathe(TIRE_PROF, 'z', 56), MAT.tire, [X, WY, zc], flip, spin); t.castShadow = true;
    add('rodas', gCyl(0.168, 0.168, 0.136, 'z', 40, true), MAT.wheelSteel, [X, WY, zc], null, spin);
    add('rodas', gTorus(0.176, 0.006, 'z', 6, 48), MAT.wheelSteel, [X, WY, zc + 0.068], null, spin);
    add('rodas', gTorus(0.176, 0.006, 'z', 6, 48), MAT.wheelSteel, [X, WY, zc - 0.068], null, spin);
    add('rodas', gLathe([[0.03, 0.0], [0.09, 0.004], [0.15, -0.012], [0.166, -0.03]], 'z', 40), MAT.wheelSteel, [X, WY, zc + s * 0.022], flip, spin);
    add('calotas', hc, MAT.hubcap, [X, WY, zc + s * 0.071], flip, spin);
    add('calotas', gCyl(0.055, 0.06, 0.012, 'z', 32), MAT.hubcap, [X, WY, zc + s * 0.086], null, spin);
  }));
  // estepe (horizontal, sob a traseira)
  add('estepe', gLathe(TIRE_PROF, 'y', 48), MAT.tire, [-1.50, 0.235, 0.06]);
  add('estepe', gCyl(0.168, 0.168, 0.12, 'y', 36, true), MAT.wheelSteel, [-1.50, 0.235, 0.06]);
  add('estepe', gCyl(0.15, 0.15, 0.006, 'y', 36), MAT.wheelSteel, [-1.50, 0.25, 0.06]);
  rod('estepe', [-1.78, 0.135, 0.06], [-1.22, 0.135, 0.06], 0.01, MAT.steelDark);
  rod('estepe', [-1.50, 0.135, -0.22], [-1.50, 0.135, 0.34], 0.01, MAT.steelDark);
  rod('estepe', [-1.50, 0.135, 0.06], [-1.50, 0.36, 0.06], 0.006, MAT.steel);
  box('macaco', [-1.60, 0.375, 0.42], [0.30, 0.05, 0.08], MAT.steelDark, 0.01);
  rod('macaco', [-1.75, 0.37, 0.30], [-1.45, 0.37, 0.30], 0.008, MAT.steel);
}

function buildSuspensionBrakes() {
  S.forEach(s => {
    const WF = WHEELS.find(w => w.front && w.s === s), WRr = WHEELS.find(w => !w.front && w.s === s);
    /* ---- frente ---- */
    const bot = [XFA + 0.012, 0.40, s * 0.635], top = [XFA + 0.03, 0.83, s * 0.565];
    rod('amort_diant', bot, lerp3(bot, top, 0.53), 0.026, MAT.steelDark);
    rod('amort_diant', lerp3(bot, top, 0.5), top, 0.011, MAT.chrome);
    rod('amort_diant', lerp3(bot, top, 0.44), lerp3(bot, top, 0.455), 0.08, MAT.steelDark);
    spring('molas_diant', lerp3(bot, top, 0.46), lerp3(bot, top, 0.92), 0.068, 0.0068, 5.5, MAT.spring);
    rod('coxins_amort', lerp3(bot, top, 0.93), lerp3(bot, top, 0.985), 0.058, MAT.rubber);
    add('coxins_amort', gTorus(0.045, 0.006, 'y', 6, 24), MAT.steel, lerp3(bot, top, 0.95));
    box('mangas', [XFA, 0.30, s * 0.655], [0.06, 0.20, 0.05], MAT.iron, 0.01, null, WF.yaw);
    add('mangas', gCyl(0.04, 0.04, 0.05, 'z', 24), MAT.steel, [XFA, WY, s * 0.715], null, WF.yaw);
    rod('mangas', [XFA - 0.02, 0.33, s * 0.645], [XFA - 0.13, 0.33, s * 0.62], 0.012, MAT.iron, WF.yaw);
    rod('mangas', [XFA, 0.37, s * 0.655], bot, 0.02, MAT.iron, WF.yaw);
    const bj = [XFA, 0.185, s * 0.645];
    rod('bandejas', bj, [XFA + 0.10, 0.21, s * 0.37], 0.016, MAT.steelDark);
    rod('bandejas', bj, [XFA - 0.22, 0.21, s * 0.38], 0.016, MAT.steelDark);
    rod('bandejas', [XFA + 0.08, 0.21, s * 0.42], [XFA - 0.18, 0.21, s * 0.42], 0.012, MAT.steelDark);
    sph('bandejas', bj, 0.021, MAT.steel);
    add('bandejas', gCyl(0.024, 0.024, 0.05, 'x', 16), MAT.rubber, [XFA + 0.10, 0.21, s * 0.37]);
    add('bandejas', gCyl(0.028, 0.028, 0.04, 'y', 16), MAT.rubber, [XFA - 0.22, 0.21, s * 0.38]);
    rod('barra_estab', [XFA - 0.06, 0.28, s * 0.56], [XFA + 0.012, 0.47, s * 0.625], 0.007, MAT.steel);
    box('barra_estab', [XFA - 0.24, 0.255, s * 0.30], [0.04, 0.035, 0.04], MAT.rubber, 0.008);
    /* agregado */
    box('agregado', [1.25, 0.215, s * 0.40], [0.56, 0.05, 0.06], MAT.steelDark, 0.01);
    /* freio dianteiro */
    add('discos', gCyl(0.1235, 0.1235, 0.013, 'z', 48), MAT.disc, [XFA, WY, s * 0.70], null, WF.spin);
    add('discos', gCyl(0.065, 0.065, 0.03, 'z', 32), MAT.disc, [XFA, WY, s * 0.72], null, WF.spin);
    const ang = Math.atan2(0.05, -0.10), cx = XFA + Math.cos(ang) * 0.105, cy = WY + Math.sin(ang) * 0.105;
    box('pincas', [cx, cy, s * 0.70], [0.055, 0.10, 0.058], MAT.caliper, 0.012, [0, 0, ang + Math.PI / 2], WF.yaw);
    add('pincas', gCyl(0.024, 0.024, 0.02, 'z', 16), MAT.steel, [cx, cy, s * 0.672], null, WF.yaw);
    for (const dz of [-0.011, 0.011]) box('pastilhas', [cx, cy, s * 0.70 + dz], [0.042, 0.075, 0.008], MAT.pad, 0.004, [0, 0, ang + Math.PI / 2], WF.yaw);
    tube('tubos_freio', [[cx, cy + 0.04, s * 0.68], [XFA - 0.03, 0.46, s * 0.62], [XFA - 0.02, 0.56, s * 0.58]], 0.005, MAT.rubber);
    /* ---- traseira ---- */
    rod('eixo_tras', [-0.87, 0.30, s * 0.62], [XRA, WY, s * 0.66], 0.03, MAT.steelDark);
    box('eixo_tras', [-0.87, 0.35, s * 0.58], [0.10, 0.05, 0.06], MAT.steelDark, 0.01);
    add('eixo_tras', gCyl(0.02, 0.02, 0.06, 'z', 16), MAT.steel, [XRA, WY, s * 0.66]);
    add('rol_eixo', gCyl(0.05, 0.05, 0.06, 'z', 24), MAT.steel, [-0.87, 0.30, s * 0.62]);
    add('rol_eixo', gTorus(0.05, 0.004, 'z', 4, 24), MAT.rubber, [-0.87, 0.30, s * 0.652]);
    rod('amort_tras', [XRA - 0.10, 0.22, s * 0.60], [XRA - 0.06, 0.40, s * 0.57], 0.022, MAT.steelDark);
    rod('amort_tras', [XRA - 0.07, 0.38, s * 0.575], [XRA - 0.03, 0.53, s * 0.54], 0.01, MAT.chrome);
    add('tambores', gCyl(0.10, 0.10, 0.05, 'z', 40), MAT.iron, [XRA, WY, s * 0.69], null, WRr.spin);
    add('tambores', gCyl(0.11, 0.11, 0.006, 'z', 40), MAT.steelDark, [XRA, WY, s * 0.662], null, WRr.spin);
    for (const a of [0, Math.PI]) { const m = add('sapatas', new THREE.TorusGeometry(0.086, 0.01, 6, 20, Math.PI * 0.8), MAT.pad, [XRA, WY, s * 0.69]); m.rotation.z = a + Math.PI * 0.1; }
    add('sapatas', gCyl(0.012, 0.012, 0.06, 'x', 12), MAT.steel, [XRA, WY + 0.075, s * 0.685]);
    tube('freio_mao', [[-0.10, 0.20, 0.0], [-0.70, 0.205, s * 0.20], [-1.05, 0.25, s * 0.55], [XRA, WY - 0.05, s * 0.66]], 0.004, MAT.cable);
  });
  /* barra estabilizadora, agregado (travessas), barras de torção */
  tube('barra_estab', [[XFA - 0.06, 0.28, -0.56], [XFA - 0.22, 0.262, -0.50], [XFA - 0.24, 0.255, -0.30], [XFA - 0.24, 0.255, 0.30], [XFA - 0.22, 0.262, 0.50], [XFA - 0.06, 0.28, 0.56]], 0.011, MAT.steel);
  box('agregado', [1.52, 0.215, 0], [0.05, 0.05, 0.86], MAT.steelDark, 0.01);
  box('agregado', [0.98, 0.215, 0], [0.06, 0.05, 0.86], MAT.steelDark, 0.01);
  add('eixo_tras', gCyl(0.045, 0.045, 1.26, 'z', 24), MAT.steelDark, [-0.87, 0.30, 0]);
  rod('barras_torcao', [-0.87, 0.31, -0.64], [-0.87, 0.31, 0.64], 0.012, MAT.steel);
  rod('barras_torcao', [-0.87, 0.288, -0.64], [-0.87, 0.288, 0.64], 0.009, MAT.steel);
  /* hidráulica do freio */
  add('servo', gCyl(0.11, 0.11, 0.12, 'x', 40), MAT.black, [0.93, 0.66, 0.40]);
  add('cil_mestre', gCyl(0.025, 0.025, 0.13, 'x', 20), MAT.alu, [1.05, 0.67, 0.40]);
  box('reserv_freio', [1.05, 0.735, 0.40], [0.06, 0.07, 0.09], MAT.fluid, 0.012);
  add('reserv_freio', gCyl(0.02, 0.02, 0.02, 'y', 16), MAT.black, [1.05, 0.78, 0.40]);
  tube('tubos_freio', [[1.10, 0.67, 0.42], [1.14, 0.62, 0.50], [1.18, 0.55, 0.56], [XFA - 0.02, 0.56, 0.58]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.10, 0.66, 0.38], [1.02, 0.56, 0.02], [1.06, 0.50, -0.45], [XFA - 0.02, 0.56, -0.58]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.00, 0.63, 0.36], [0.90, 0.30, 0.34], [0.30, 0.205, 0.44], [-0.70, 0.215, 0.46], [-0.87, 0.34, 0.40], [-0.87, 0.35, -0.40]], 0.003, MAT.steel);
  S.forEach(s => tube('tubos_freio', [[-0.87, 0.35, s * 0.40], [-1.00, 0.34, s * 0.60], [XRA, WY + 0.075, s * 0.66]], 0.003, MAT.steel));
  tube('mang_vacuo', [[1.10, 0.82, 0.02], [1.03, 0.75, 0.24], [0.995, 0.68, 0.37]], 0.008, MAT.hose);
  rod('pedal_freio', [0.67, 0.63, 0.34], [0.625, 0.36, 0.34], 0.008, MAT.steelDark);
  box('pedal_freio', [0.618, 0.345, 0.34], [0.02, 0.05, 0.075], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('pedal_emb', [0.67, 0.63, 0.46], [0.625, 0.36, 0.46], 0.008, MAT.steelDark);
  box('pedal_emb', [0.618, 0.345, 0.46], [0.02, 0.05, 0.07], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('pedal_acel', [0.66, 0.26, 0.22], [0.60, 0.38, 0.22], 0.006, MAT.steelDark);
  box('pedal_acel', [0.63, 0.30, 0.22], [0.015, 0.12, 0.05], MAT.rubber, 0.006, [0, 0, -0.45]);
  rod('freio_mao', [-0.20, 0.40, 0.0], [0.06, 0.48, 0.0], 0.014, MAT.black);
}

function buildSteering() {
  add('caixa_dir', gCyl(0.026, 0.026, 0.70, 'z', 20), MAT.alu, [1.07, 0.33, 0]);
  add('caixa_dir', gCyl(0.03, 0.03, 0.09, 'y', 20), MAT.alu, [1.07, 0.37, 0.26]);
  box('caixa_dir', [1.07, 0.345, 0.20], [0.045, 0.035, 0.06], MAT.aluDark, 0.008);
  S.forEach(s => {
    for (let k = 0; k < 6; k++) add('caixa_dir', gTorus(0.026, 0.007, 'z', 6, 20), MAT.rubber, [1.07, 0.33, s * (0.36 + k * 0.014)]);
    const inner = V(1.07, 0.33, s * 0.44), outer = V(XFA - 0.13, 0.33, s * 0.62);
    const bar = add('barras_axiais', new THREE.CylinderGeometry(0.009, 0.009, 1, 12), MAT.steel); bar.userData.noMerge = true; setBar(bar, inner, outer);
    const ball = sph('barras_axiais', [outer.x, outer.y, outer.z], 0.018, MAT.steelDark); ball.userData.noMerge = true;
    ANIM.tie.push({ s, bar, ball, inner, outer });
  });
  tube('coluna', [[1.07, 0.41, 0.26], [0.90, 0.56, 0.31], [0.60, 0.73, 0.35], [0.36, 0.89, 0.36]], 0.017, MAT.steelDark);
  sph('coluna', [0.90, 0.56, 0.31], 0.024, MAT.steel);
  const c = V(0.30, 0.93, 0.36), ax = V(-0.83, 0.55, 0).normalize();
  const sw = pivotOf('volante_dir', [c.x, c.y, c.z]);
  Object.assign(sw.userData, { abs: true, owner: 'volante_dir', absPos: c.clone() });
  ANIM.wheel = { g: sw, ax };
  const w = add('volante_dir', gTorus(0.185, 0.016, 'z', 10, 56), MAT.black, [c.x, c.y, c.z], null, sw);
  w.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
  const hub = add('volante_dir', gCyl(0.055, 0.06, 0.05, 'y', 28), MAT.black, [c.x + ax.x * 0.01, c.y + ax.y * 0.01, c.z], null, sw);
  hub.quaternion.setFromUnitVectors(UPY, ax);
  const u = V(0, 0, 1), v = ax.clone().cross(u).normalize();
  [Math.PI / 2, Math.PI * 7 / 6, -Math.PI / 6].forEach(a => {
    const d = u.clone().multiplyScalar(Math.cos(a)).addScaledVector(v, Math.sin(a));
    rod('volante_dir', [c.x, c.y, c.z], [c.x + d.x * 0.18, c.y + d.y * 0.18, c.z + d.z * 0.18], 0.012, MAT.black, sw);
  });
  add('ign_chave', gCyl(0.022, 0.022, 0.05, 'y', 16), MAT.steelDark, [0.44, 0.83, 0.28]);
  box('comutadores', [0.38, 0.89, 0.46], [0.03, 0.03, 0.08], MAT.black, 0.008);
  box('comutadores', [0.38, 0.89, 0.26], [0.03, 0.03, 0.08], MAT.black, 0.008);
}

function buildFuelRear() {
  box('tanque', [-0.59, 0.232, 0.07], [0.46, 0.145, 0.73], MAT.plastic, 0.04);
  add('bomba_comb', gCyl(0.055, 0.055, 0.12, 'y', 24), MAT.whiteRes, [-0.55, 0.245, -0.05]);
  add('bomba_comb', gCyl(0.075, 0.075, 0.008, 'y', 28), MAT.black, [-0.55, 0.309, -0.05]);
  rod('boia', [-0.55, 0.22, -0.05], [-0.43, 0.19, 0.12], 0.003, MAT.steel);
  box('boia', [-0.43, 0.19, 0.12], [0.04, 0.02, 0.03], MAT.black, 0.005);
  add('filtro_comb', gCyl(0.03, 0.03, 0.12, 'x', 20), MAT.steel, [-0.12, 0.215, -0.40]);
  tube('linhas_comb', [[-0.55, 0.315, -0.09], [-0.42, 0.31, -0.28], [-0.25, 0.22, -0.40], [-0.18, 0.215, -0.40]], 0.005, MAT.steel);
  tube('linhas_comb', [[-0.06, 0.215, -0.40], [0.40, 0.205, -0.36], [0.90, 0.215, -0.30]], 0.005, MAT.steel);
  tube('bocal', [[-1.33, 0.77, -0.78], [-1.25, 0.58, -0.68], [-0.98, 0.36, -0.46], [-0.80, 0.29, -0.28]], 0.022, MAT.black);
  tube('canister', [[-0.62, 0.30, -0.25], [-0.40, 0.25, -0.44], [0.80, 0.215, -0.46], [1.00, 0.30, -0.48], [1.50, 0.36, -0.46], [1.78, 0.40, -0.42]], 0.004, MAT.cable);
}

function buildInterior() {
  box('painel', [0.60, 0.82, 0], [0.36, 0.30, 1.34], MAT.dash, 0.05);
  box('painel', [0.47, 0.995, 0.36], [0.12, 0.05, 0.30], MAT.dash, 0.02);
  box('painel', [0.40, 0.56, 0], [0.12, 0.22, 0.22], MAT.dash, 0.02);
  box('painel', [0.43, 0.76, -0.40], [0.02, 0.12, 0.34], MAT.plastic, 0.01);
  box('quadro', [0.445, 0.935, 0.36], [0.02, 0.10, 0.27], MAT.black, 0.01);
  [[0.25, 0.028], [0.31, 0.045], [0.41, 0.045], [0.47, 0.028]].forEach(([z, r]) => {
    add('quadro', gCyl(r, r, 0.004, 'x', 32), MAT.grille, [0.433, 0.935, z]);
    add('quadro', gTorus(r, 0.003, 'x', 4, 32), MAT.chrome, [0.432, 0.935, z]);
  });
  box('quadro', [0.432, 0.975, 0.36], [0.004, 0.018, 0.05], MAT.lensAmber);
  box('radio', [0.415, 0.82, 0], [0.02, 0.05, 0.18], MAT.black, 0.004);
  box('radio', [0.404, 0.825, 0], [0.002, 0.015, 0.08], MAT.lensAmber);
  [-0.07, 0, 0.07].forEach(z => add('comandos_vent', gCyl(0.022, 0.022, 0.02, 'x', 20), MAT.plastic, [0.412, 0.735, z]));
  box('caixa_ar', [0.64, 0.72, 0.0], [0.22, 0.22, 0.40], MAT.plastic, 0.02);
  add('vent_interno', gCyl(0.07, 0.07, 0.10, 'z', 28), MAT.black, [0.64, 0.70, -0.37]);
  box('rad_aquec', [0.68, 0.64, 0.06], [0.03, 0.14, 0.16], MAT.alu);
  S.forEach(s => {
    box('bancos_diant', [-0.08, 0.42, s * 0.36], [0.50, 0.12, 0.48], MAT.fabric, 0.04);
    box('bancos_diant', [-0.37, 0.78, s * 0.36], [0.11, 0.62, 0.48], MAT.fabric, 0.045, [0, 0, 0.18]);
    box('bancos_diant', [-0.44, 1.15, s * 0.36], [0.08, 0.14, 0.24], MAT.fabric, 0.03, [0, 0, 0.18]);
    for (const dz of [-0.18, 0.18]) box('bancos_diant', [-0.08, 0.31, s * 0.36 + dz], [0.46, 0.02, 0.03], MAT.steelDark);
    rod('cintos', [-0.47, 1.10, s * 0.73], [-0.30, 0.48, s * 0.16], 0.009, MAT.black);
    rod('cintos', [-0.46, 0.40, s * 0.62], [-0.30, 0.48, s * 0.16], 0.009, MAT.black);
    box('cintos', [-0.47, 0.42, s * 0.72], [0.06, 0.10, 0.04], MAT.black, 0.01);
  });
  box('banco_tras', [-0.80, 0.42, 0], [0.44, 0.12, 1.20], MAT.fabric, 0.04);
  box('banco_tras', [-1.06, 0.74, 0], [0.10, 0.56, 1.20], MAT.fabric, 0.045, [0, 0, 0.22]);
  box('porta_malas', [-1.42, 0.355, 0], [0.62, 0.02, 1.10], MAT.carpet, 0.005);
  box('porta_malas', [-1.34, 0.905, 0], [0.55, 0.012, 1.18], MAT.carpet, 0.005);
  box('retrovisor_int', [0.36, 1.27, 0], [0.02, 0.06, 0.20], MAT.black, 0.01);
  rod('retrovisor_int', [0.36, 1.30, 0], [0.40, 1.33, 0], 0.006, MAT.black);
}

function buildStructure() {
  const sh = new THREE.Shape([[0.885, 0.94], [0.852, 0.56], [0.70, 0.24], [0.68, 0.24], [0.832, 0.56], [0.865, 0.94]].map(p => new THREE.Vector2(p[0], p[1])));
  const fg = new THREE.ExtrudeGeometry(sh, { depth: 1.28, bevelEnabled: false }); fg.translate(0, 0, -0.64);
  add('corta_fogo', fg, MAT.under);
  box('monobloco', [0.875, 0.905, 0], [0.10, 0.05, 1.30], MAT.under);
  S.forEach(s => {
    add('monobloco', gCyl(0.085, 0.085, 0.10, 'y', 32), MAT.paint, [XFA + 0.03, 0.80, s * 0.565]);
    box('monobloco', [1.35, 0.37, s * 0.50], [1.05, 0.08, 0.07], MAT.under, 0.01);
    box('travessa_frontal', [1.76, 0.47, s * 0.36], [0.04, 0.46, 0.04], MAT.paint);
  });
  box('travessa_frontal', [1.76, 0.70, 0], [0.05, 0.05, 1.20], MAT.paint, 0.01);
  box('travessa_frontal', [1.76, 0.24, 0], [0.04, 0.04, 0.80], MAT.paint);
  box('viga_dianteira', [1.89, 0.40, 0], [0.05, 0.09, 1.0], MAT.steelDark, 0.01);
  box('fech_capo', [1.775, 0.735, 0], [0.04, 0.04, 0.06], MAT.steelDark, 0.006);
  tube('fech_capo', [[1.77, 0.72, 0.03], [1.70, 0.68, 0.40], [1.20, 0.62, 0.60], [0.80, 0.55, 0.64], [0.60, 0.40, 0.66]], 0.003, MAT.cable);
  box('fech_capo', [0.60, 0.40, 0.655], [0.06, 0.03, 0.02], MAT.black, 0.005);
  { // vareta do capô: presa na travessa, apoia no capô quando aberto
    const g = new THREE.Group(); reg('capo').group.add(g);
    const m = add('capo', new THREE.CylinderGeometry(0.005, 0.005, 1, 8), MAT.steel, null, null, g);
    ANIM.prop = { mesh: m, A: V(1.745, 0.725, -0.50), Hc: V(1.70, topY(1.70, 0.50) - 0.02, -0.50) };
    setBar(m, ANIM.prop.A, V(1.745, 0.725, -0.10)); m.visible = false;
  }
}

/* ===== Fixadores e encaixes: posições e instâncias ===== */
function fxPositions() {
  const P = {}, A = (id, p, d, s, mount) => ((P[id] = P[id] || { pts: [], paths: [] }).pts.push([p, d, s, mount]));
  const B = (id, pts, r, mount, closed) => ((P[id] = P[id] || { pts: [], paths: [] }).paths.push([pts, r, mount, closed]));
  const up = [0, 1, 0], dn = [0, -1, 0], px = [1, 0, 0], nx = [-1, 0, 0];
  const nrm = (x, s) => surf(x, s).n, neg = v => [-v[0], -v[1], -v[2]];
  /* ---- mecânica ---- */
  [XFA, XRA].forEach((X, xi) => S.forEach((s, si) => { for (let k = 0; k < 4; k++) { const a = Math.PI / 4 + k * Math.PI / 2; A('fx_roda', [X + 0.054 * Math.cos(a), WY + 0.054 * Math.sin(a), s * 0.742], [0, 0, s], 0.017, 'w' + (xi * 2 + si)); } }));
  S.forEach((s, si) => A('fx_cubo', [XFA, WY, s * 0.745], [0, 0, s], 0.03, 'w' + si));
  [0.005, -0.076, -0.158, -0.24, -0.321].forEach(z => { A('fx_cabecote', [1.29, 0.728, z], up, 0.013); A('fx_cabecote', [1.41, 0.728, z], up, 0.013); });
  CYLZ.forEach((z, i) => { const ph = (i === 0 || i === 3) ? 0 : Math.PI; for (const dz of [-0.012, 0.012]) A('fx_bielas', [EXc + 0.03, EYc + CR * Math.cos(ph) - 0.02, z + dz], px, 0.008); });
  [0.02, -0.076, -0.158, -0.24, -0.322].forEach(z => { A('fx_mancais', [1.30, 0.30, z], dn, 0.012); A('fx_mancais', [1.39, 0.30, z], dn, 0.012); });
  for (let k = 0; k < 5; k++) { const x = 1.245 + k * 0.05; A('fx_carter', [x, 0.297, 0.012], dn, 0.008); A('fx_carter', [x, 0.297, -0.332], dn, 0.008); }
  [-0.08, -0.24].forEach(z => { A('fx_carter', [1.238, 0.297, z], dn, 0.008); A('fx_carter', [1.452, 0.297, z], dn, 0.008); });
  A('fx_bujao', [1.40, 0.19, -0.22], dn, 0.014);
  CYLZ.forEach(z => A('fx_velas', [1.37, 0.66, z], up, 0.01));
  A('fx_bobina', [1.37, 0.824, -0.29], up, 0.008); A('fx_bobina', [1.37, 0.824, -0.03], up, 0.008);
  [-0.03, -0.157, -0.28].forEach(z => { A('fx_tampa_valv', [1.30, 0.787, z], up, 0.009); A('fx_tampa_valv', [1.39, 0.787, z], up, 0.009); });
  [-0.076, -0.158, -0.24, 0.005].forEach(z => { A('fx_coletor_esc', [1.473, 0.645, z], px, 0.011); A('fx_coletor_esc', [1.473, 0.70, z], px, 0.011); });
  [-0.076, -0.158, -0.24].forEach(z => { A('fx_coletor_adm', [1.227, 0.70, z], nx, 0.009); A('fx_coletor_adm', [1.227, 0.645, z], nx, 0.009); });
  A('fx_galeria', [1.175, 0.748, 0.0], up, 0.008); A('fx_galeria', [1.175, 0.748, -0.30], up, 0.008);
  [[0.03, 0.03], [-0.03, 0.03], [0.03, -0.03], [-0.03, -0.03]].forEach(([dy, dz]) => A('fx_tbi', [1.262, 0.86 + dy, -0.03 + dz], px, 0.006));
  A('fx_polia_vira', [EXc, EYc, -0.46], [0, 0, -1], 0.02);
  [[1.44, 0.56, -0.39], [1.30, 0.69, -0.39], [1.24, 0.72, -0.41], [1.47, 0.48, -0.41], [1.30, 0.36, -0.41]].forEach(p => A('fx_distrib', p, [0, 0, -1], 0.009));
  A('fx_alternador', [1.49, 0.44, -0.29], [0, 0, 1], 0.011); A('fx_alternador', [1.46, 0.603, -0.318], [0, 0, 1], 0.011);
  [[1.12, 0.52, 0.06], [1.12, 0.42, 0.06], [1.165, 0.47, 0.06]].forEach(p => A('fx_partida', p, [0, 0, 1], 0.012));
  [[1.36, 0.832, -0.49], [1.36, 0.832, -0.53]].forEach(p => A('fx_coxins', p, up, 0.013));
  [[1.30, 0.597, 0.30], [1.30, 0.607, 0.40], [1.30, 0.607, 0.48]].forEach(p => A('fx_coxins', p, up, 0.013));
  A('fx_coxins', [1.00, 0.22, -0.125], [0, 0, -1], 0.013); A('fx_coxins', [1.25, 0.24, -0.125], [0, 0, -1], 0.013);
  for (let k = 0; k < 7; k++) { const a = -0.3 + k * 0.9; A('fx_cambio', [EXc + 0.158 * Math.cos(a), EYc + 0.158 * Math.sin(a), 0.03], [0, 0, 1], 0.012); }
  A('fx_bujoes_cambio', [1.30, 0.27, 0.30], dn, 0.014); A('fx_bujoes_cambio', [1.44, 0.40, 0.30], px, 0.014);
  for (let k = 0; k < 6; k++) { const a = k * TAU / 6; A('fx_plato', [EXc + 0.105 * Math.cos(a), EYc + 0.105 * Math.sin(a), 0.081], [0, 0, 1], 0.008); A('fx_volante', [EXc + 0.03 * Math.cos(a), EYc + 0.03 * Math.sin(a), 0.053], [0, 0, 1], 0.009); }
  S.forEach(s => {
    const ang = Math.atan2(0.05, -0.10), cx = XFA + Math.cos(ang) * 0.105, cy = WY + Math.sin(ang) * 0.105, tx = -Math.sin(ang), ty = Math.cos(ang);
    const yw = 'y' + (s > 0 ? 0 : 1), wh = 'w' + (s > 0 ? 0 : 1);
    for (const k of [-1, 1]) { A('fx_pinca', [cx + tx * 0.055 * k, cy + ty * 0.055 * k, s * 0.675], [0, 0, -s], 0.011, yw); A('fx_pinca', [cx + tx * 0.07 * k - 0.02, cy + ty * 0.07 * k, s * 0.66], [0, 0, -s], 0.013, yw); }
    for (const k of [-1, 1]) A('fx_disco', [XFA + 0.03 * k, WY, s * 0.737], [0, 0, s], 0.007, wh);
    for (let k = 0; k < 3; k++) { const a = k * TAU / 3 + 0.5; A('fx_amort_d', [XFA + 0.03 + 0.05 * Math.cos(a), 0.852, s * 0.565 + 0.05 * Math.sin(a)], up, 0.011); }
    A('fx_amort_d', [XFA + 0.04, 0.39, s * 0.635], px, 0.012); A('fx_amort_d', [XFA + 0.04, 0.43, s * 0.635], px, 0.012);
    A('fx_bandeja', [XFA + 0.13, 0.21, s * 0.37], px, 0.013); A('fx_bandeja', [XFA - 0.22, 0.235, s * 0.38], up, 0.013); A('fx_bandeja', [XFA, 0.162, s * 0.645], dn, 0.013);
    for (const x of [1.52, 0.98]) A('fx_agregado', [x, 0.19, s * 0.40], dn, 0.016);
    for (const x of [-0.84, -0.90]) A('fx_eixo_t', [x, 0.376, s * 0.58], up, 0.015);
    A('fx_amort_t', [XRA - 0.10, 0.22, s * 0.625], [0, 0, s], 0.013); A('fx_amort_t', [XRA - 0.03, 0.535, s * 0.54], up, 0.013);
    for (const x of [-0.36, -0.82]) A('fx_tanque', [x, 0.313, s > 0 ? 0.40 : -0.26], up, 0.012);
    for (const x of [0.14, -0.30]) for (const dz of [-0.18, 0.18]) A('fx_bancos', [x, 0.325, s * 0.36 + dz], up, 0.011);
    A('fx_cintos', [-0.47, 1.10, s * 0.72], [0, 0, -s], 0.011); A('fx_cintos', [-0.47, 0.40, s * 0.715], [0, 0, -s], 0.011); A('fx_cintos', [-0.30, 0.34, s * 0.16], up, 0.011);
    A('fx_caixa_dir', [XFA - 0.13, 0.305, s * 0.62], dn, 0.011, yw);
    for (const dx of [-0.03, 0.03]) A('fx_caixa_dir', [1.07 + dx, 0.355, s * 0.20], up, 0.011);
  });
  A('fx_bateria', [1.585, 0.66, 0.38], up, 0.008); A('fx_bateria', [1.585, 0.66, 0.56], up, 0.008); A('fx_bateria', [1.70, 0.47, 0.47], up, 0.01);
  [[1.575, 0.525, -0.10], [1.575, 0.525, -0.14], [1.07, 0.155, 0.03], [1.07, 0.155, -0.03], [-1.40, 0.245, -0.45], [-1.40, 0.245, -0.49]].forEach((p, i) => A('fx_escape', p, i < 2 ? up : i < 4 ? px : up, 0.01));
  A('fx_sonda', [1.595, 0.553, -0.10], [0.42, 0.9, 0], 0.013);
  A('fx_sens_det', [1.212, 0.46, -0.16], nx, 0.009);
  A('fx_sens_rot', [1.24, 0.558, 0.045], up, 0.007);
  for (let k = 0; k < 5; k++) { const a = k * TAU / 5 + 0.3; A('fx_bomba_agua', [1.22 + 0.052 * Math.cos(a), 0.52 + 0.052 * Math.sin(a), -0.332], [0, 0, 1], 0.008); }
  [[1.345, 0.70, 0.08], [1.395, 0.66, 0.08], [1.395, 0.70, 0.08]].forEach(p => A('fx_termostato', p, [0, 0, 1], 0.008));
  A('fx_volante_dir', [0.285, 0.94, 0.36], [-0.83, 0.55, 0], 0.014, 'sw');
  A('fx_estepe', [-1.50, 0.368, 0.06], up, 0.014);
  [[1.40, 0.70, 0.07], [1.685, 0.61, 0.27], [1.685, 0.34, -0.27], [1.25, 0.46, -0.345], [0.72, 0.64, 0.06], [1.34, 0.68, 0.08], [1.43, 0.79, 0.14], [1.33, 0.895, -0.03], [1.10, 0.83, 0.02], [0.99, 0.70, 0.37]].forEach(p => A('fx_mangueiras', p, up, 0.007));
  A('fx_filtro_oleo', [1.455, 0.36, -0.20], px, 0.012);
  A('fx_ecu', [0.90, 0.818, -0.05], up, 0.007); A('fx_ecu', [1.02, 0.818, -0.19], up, 0.007);
  A('fx_limpador', [0.845, topY(0.845, 0.40) + 0.012, -0.40], up, 0.009); A('fx_limpador', [0.845, topY(0.845, 0.10) + 0.012, 0.10], up, 0.009);
  A('fx_limpador', onSurf(-1.55, 0, 0.02), nrm(-1.55, 0), 0.009, 'tail');

  /* ---- lataria: parafusos ---- */
  S.forEach(s => {
    [0.98, 1.20, 1.42, 1.64].forEach(x => A('fx_paralama', onSurf(x, s * (sRow(x, J.UE) + 0.006), -0.012), up, 0.008));
    A('fx_paralama', onSurf(1.78, s * (sRow(1.78, J.SB) + sRow(1.78, J.R058)) / 2, -0.014), nrm(1.78, s * 0.4), 0.008);
    A('fx_paralama', onSurf(0.845, s * (sRow(0.845, J.S0) - 0.012), -0.008), nrm(0.845, s * sRow(0.845, J.S0)), 0.008);
    A('fx_paralama', onSurf(0.835, s * sAtY(0.835, 0.86), -0.03), nx, 0.008);
    // para-choque dianteiro: nas caixas de roda e embaixo
    [0.42, 0.52].forEach(y => A('fx_parachoque', onSurf(AF1 + 0.035, s * sAtY(AF1 + 0.035, y), -0.012), nrm(AF1 + 0.035, s * sAtY(AF1 + 0.035, y)), 0.007));
    [0.30, 0.40].forEach(y => A('fx_parachoque_t', onSurf(AR0 - 0.035, s * sAtY(AR0 - 0.035, y), -0.012), nrm(AR0 - 0.035, s * sAtY(AR0 - 0.035, y)), 0.007));
    A('fx_parachoque', onSurf(1.90, s * (sRow(1.90, J.F0) - 0.26), 0.002), dn, 0.007);
    A('fx_parachoque_t', onSurf(-1.83, s * (sRow(-1.83, J.F0) - 0.30), 0.002), dn, 0.007);
    A('fx_guias_pcd', onSurf(1.70, s * sRow(1.70, J.R058), -0.016), [0, 0, s], 0.02);
    A('fx_guias_pct', onSurf(-1.74, s * sRow(-1.74, J.R0615), -0.016), [0, 0, s], 0.02);
    for (let k = 0; k < 6; k++) { const x = AF0 + 0.06 + k * 0.125; A('fx_forros', onSurf(x, s * (sRow(x, J.S0) - 0.008), -0.006), dn, 0.009); }
    // capô: dobradiças (no capô e na carroceria)
    for (const dx of [0.05, 0.08]) A('fx_capo', [HINGE[0] + dx, topY(HINGE[0] + dx, 0.56) - 0.03, s * 0.56], dn, 0.009, 'hood');
    for (const dy of [-0.05, -0.02]) A('fx_capo', [HINGE[0] + 0.012, HINGE[1] + dy, s * 0.567], [0, 0, s], 0.009);
    // portas: dobradiças, limitador, fechadura e batente
    [0.50, 0.80].forEach(y => {
      for (const dy of [-0.015, 0.015]) {
        A('fx_dobradicas', [0.866, y + dy, s * (sideZ(0.866, y) - 0.026)], [0, 0, s], 0.009);
        A('fx_dobradicas', [0.812, y + dy, DOORAX[s][2] + s * 0.003], [0, 0, s], 0.009, 'door');
      }
    });
    A('fx_dobradicas', [0.868, 0.66, s * (sideZ(0.868, 0.66) - 0.055)], px, 0.009);
    [0.71, 0.74, 0.77].forEach(y => A('fx_fech_portas', [XB + 0.004, y, s * (sideZ(-0.475, y) - 0.03)], nx, 0.007, 'door'));
    [0.72, 0.76].forEach(y => A('fx_fech_portas', [XB - 0.006, y, s * (sideZ(-0.5, y) - 0.03)], px, 0.008));
    // retrovisor (por dentro da porta)
    [[0, 0.012], [0.02, -0.01], [-0.02, -0.01]].forEach(([dx, dy]) => { const p = onSurf(0.812 + dx, s * (sRow(0.812, J.SB) - 0.012), -0.025); A('fx_retrovisor', [p[0], p[1] + dy, p[2]], [0, 0, -s], 0.008, 'door'); });
    // vidro e máquina, forro da porta
    [0.05, 0.35].forEach(x => A('fx_vidro_porta', [x, 0.62, s * 0.772], [0, 0, s], 0.008, 'door'));
    [[-0.18, 0.52], [-0.18, 0.84], [0.48, 0.52], [0.48, 0.84]].forEach(([x, y]) => A('fx_maq_vidro', [x, y, s * 0.748], [0, 0, -s], 0.008, 'door'));
    for (let k = 0; k < 4; k++) {
      const x = -0.40 + k * 0.36;
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.SB) + 0.03), -0.074), [0, 0, s], 0.01, 'door');
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.R032) - 0.045), -0.074), [0, 0, s], 0.01, 'door');
    }
    // tampa traseira: dobradiças, pinos dos amortecedores, fechadura e batente
    for (const dz of [-0.018, 0.018]) {
      A('fx_tampa', [TAILH[0] + 0.03, TAILH[1] - 0.004, s * 0.40 + dz], dn, 0.009);
      A('fx_tampa', [TAILH[0] - 0.06, topY(TAILH[0] - 0.06, 0.40) - 0.022, s * 0.40 + dz], dn, 0.009, 'tail');
    }
    A('fx_amort_tampa', [-1.15, 1.315, s * 0.585], up, 0.018);
    A('fx_amort_tampa', [-1.50, 0.985, s * 0.60], up, 0.018, 'tail');
    // faróis e lanternas
    [[1.72, J.SB, 0.004], [1.86, J.SB, 0.004]].forEach(([x, j, d]) => A('fx_farol', onSurf(x, s * (sRow(x, j) + d), -0.02), up, 0.008));
    A('fx_farol', onSurf(1.84, s * (sRow(1.84, J.R058) - 0.006), -0.02), dn, 0.008);
    [0.66, 0.76, 0.86].forEach(y => { const x = -1.71, sv = s * sAtY(x, y); A('fx_lanterna', onSurf(x, sv, -0.03), neg(nrm(x, sv)), 0.007); });
    // painel frontal e viga
    A('fx_travessa', [1.76, 0.728, s * 0.52], up, 0.011); A('fx_travessa', [1.76, 0.728, s * 0.58], up, 0.011);
    A('fx_viga', [1.918, 0.37, s * 0.46], px, 0.012); A('fx_viga', [1.918, 0.43, s * 0.46], px, 0.012);
  });
  [-0.32, -0.12, 0.12, 0.32].forEach(sv => A('fx_parachoque', onSurf(1.815, sv, -0.014), up, 0.007));
  A('fx_parachoque', onSurf(1.90, sRow(1.90, J.F0), 0.002), dn, 0.007);
  [-0.40, -0.14, 0.14, 0.40].forEach(sv => A('fx_parachoque_t', onSurf(-1.805, sv, -0.012), up, 0.007));
  A('fx_fech_capo', [1.775, 0.757, 0.02], up, 0.01); A('fx_fech_capo', [1.775, 0.757, -0.02], up, 0.01);
  for (const dz of [-0.022, 0.022]) { A('fx_fech_tampa', [XL + 0.022, onSurf(XL + 0.02, 0, 0)[1] + 0.035, dz], up, 0.008, 'tail'); A('fx_fech_tampa', [XL - 0.018, 0.628, dz * 1.3], up, 0.008); }
  [-0.30, -0.10, 0.10, 0.30].forEach(sv => A('fx_grade', onSurf(1.88, sv, -0.006), neg(nrm(1.88, sv)), 0.008));
  [-0.52, -0.30, -0.10, 0.10, 0.30, 0.52].forEach(sv => A('fx_grade_torpedo', onSurf(XC - 0.03, sv, 0.001), up, 0.009));
  { const z = sideZ(-1.33, 0.77) - 0.02; [0.72, 0.82].forEach(y => A('fx_bocal', [-1.33, y, -z], [0, 0, -1], 0.008)); }

  /* ---- lataria: pontos de solda ---- */
  const W = (id, x, s, off) => A(id, onSurf(x, s, off == null ? 0.001 : off), nrm(x, s), 0.011);
  const along = (x0, x1, step, f) => { const n = Math.max(1, Math.round(Math.abs(x1 - x0) / step)); for (let k = 0; k <= n; k++) f(x0 + (x1 - x0) * k / n); };
  const across = (x, S0, step, f) => { const n = Math.max(1, Math.round(2 * S0 / step)); for (let k = 0; k <= n; k++) f(-S0 + 2 * S0 * k / n); };
  S.forEach(s => {
    along(XT + 0.02, XWT - 0.02, 0.045, x => W('fx_solda_teto', x, s * (sRow(x, J.UE) - 0.012)));
    along(XB - 0.03, AR1 + 0.03, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.S0) - 0.01)));
    along(AR0 + 0.03, AR1 - 0.03, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.S0) - 0.012)));
    along(XL + 0.02, AR0 - 0.02, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.R0615) - 0.012)));
    along(XT + 0.01, XQ - 0.01, 0.04, x => W('fx_solda_laterais', x, s * (sRow(x, J.UE) + 0.012)));
    { const x = XB - 0.012, a = sRow(x, J.SB) + 0.01, b = sRow(x, J.R032); for (let k = 0; k <= 8; k++) W('fx_solda_laterais', x, s * (a + (b - a) * k / 8)); }
    along(XB + 0.03, XA - 0.03, 0.05, x => { W('fx_solda_soleiras', x, s * (sRow(x, J.R032) + 0.012)); W('fx_solda_soleiras', x, s * (sRow(x, J.S0) + 0.02)); });
    along(XWT + 0.02, XA - 0.04, 0.045, x => W('fx_solda_colunas', x, s * (sRow(x, J.UE) - 0.012)));
    for (let k = 0; k <= 8; k++) { const y = 0.36 + k * 0.03; A('fx_solda_painel_tras', [-1.813, y, s * 0.575], nx, 0.011); }
  });
  across(XWT - 0.012, sRow(XWT, J.T1) - 0.03, 0.07, sv => W('fx_solda_teto', XWT - 0.012, sv));
  across(XT + 0.012, sRow(XT, J.UE) - 0.03, 0.07, sv => W('fx_solda_teto', XT + 0.012, sv));
  across(XWB + 0.006, sRow(XWB, J.T1) - 0.02, 0.07, sv => W('fx_solda_colunas', XWB + 0.006, sv));
  for (let k = 0; k <= 18; k++) A('fx_solda_painel_tras', [-1.813, 0.61, -0.54 + k * 0.06], nx, 0.011);

  /* ---- colas e fitas (cordões) ---- */
  const bead = (x0, x1, lo, hi, full, sgn, inset) => {          // contorno de um vidro, um pouco para dentro da borda
    const P = [], a = x0 + inset, b = x1 - inset, L = full ? (x => -(hi(x) - inset)) : (x => sgn * (lo(x) + inset)), H = x => sgn * (hi(x) - inset);
    const lof = full ? L : L, n = 16;
    for (let k = 0; k <= n; k++) { const x = a + (b - a) * k / n; P.push([x, lof(x)]); }
    for (let k = 1; k < 10; k++) { const t = k / 10; P.push([b, lof(b) + (H(b) - lof(b)) * t]); }
    for (let k = n; k >= 0; k--) { const x = a + (b - a) * k / n; P.push([x, H(x)]); }
    for (let k = 9; k >= 1; k--) { const t = k / 10; P.push([a, lof(a) + (H(a) - lof(a)) * t]); }
    return P;
  };
  const toPts = (P, off) => P.map(([x, s]) => onSurf(x, s, off));
  B('fx_cola_parabrisa', toPts(bead(XWT, XWB, null, x => sRow(x, J.T1), true, 1, 0.014), -0.008), 0.0045, null, true);
  B('fx_cola_vidro_tras', toPts(bead(XG, XT2, null, x => sRow(x, J.T2), true, 1, 0.014), -0.008), 0.0045, 'tail', true);
  S.forEach(s => {
    B('fx_cola_laterais', toPts(bead(XQ, XB, x => sRow(x, J.UE), x => sRow(x, J.SB), false, s, 0.012), -0.008), 0.004, null, true);
    B('fx_frisos', toPts(edgePath(XB + 0.03, XA - 0.04, x => s * sRow(x, J.R048), 30), 0.002), 0.003, 'door');
    B('fx_frisos', toPts(edgePath(AR1 + 0.03, XB - 0.02, x => s * sRow(x, J.R048), 10), 0.002), 0.003);
  });
  return P;
}

return {
  build() {
    buildBody(); buildEngine(); buildIntake(); buildIgnitionCooling(); buildExhaust(); buildElectricTrans();
    buildWheels(); buildSuspensionBrakes(); buildSteering(); buildFuelRear(); buildInterior(); buildStructure();
  },
  fxPositions
};
  }
});
