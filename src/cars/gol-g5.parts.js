/* ===== VW Gol G5 1.6 Power flex 2010/2011: catálogo de peças =====
   P(id, nome, sistema, onde fica, o que faz, manutenção, relacionadas); E(id, tipo de fixação, como é presa). */
(window.CAR_PARTS = window.CAR_PARTS || {})['gol-g5'] = function (P, E) {

/* ---------- MOTOR ---------- */
P('bloco', 'Bloco do motor', 'motor',
  'Centro do cofre, transversal: a correia dentada fica à direita e o câmbio à esquerda.',
  'Estrutura do EA111 1.6 8V (1.598 cm³): bloco de ferro fundido onde correm os quatro pistões, com os mancais do virabrequim por baixo e as galerias de óleo e de água por dentro.',
  'Sem troca programada. Água sumindo ou óleo com aspecto de maionese pedem diagnóstico cedo.',
  'virabrequim pistoes cabecote carter bomba_agua coxim_dir coxim_cambio sens_ckp sens_det filtro_oleo');
P('cabecote', 'Cabeçote (8V, um comando)', 'motor',
  'Em cima do bloco, sob a tampa de válvulas. O escape sai pela frente, voltado para o radiador, e a admissão por trás, voltada para o corta-fogo.',
  'Cabeçote de alumínio que fecha os cilindros e forma as câmaras de combustão. Leva um comando de válvulas, oito válvulas acionadas por tuchos hidráulicos e as velas.',
  'Superaquecimento empena o alumínio. Na remontagem os parafusos são novos e apertados em etapas, com ângulo, na ordem do manual.',
  'bloco junta_cab comando tuchos valvulas velas coletor_adm coletor_esc flange_agua sens_ect');
P('junta_cab', 'Junta do cabeçote', 'motor',
  'Entre o bloco e o cabeçote.',
  'Vedação metálica que segura a pressão da queima e separa os canais de óleo e de água.',
  'Queima com superaquecimento. Sinais: fumaça branca de cheiro doce, água sumindo sem vazamento visível, bolhas no reservatório e óleo com aspecto de maionese.',
  'cabecote bloco vaso');
P('tampa_valv', 'Tampa de válvulas', 'motor',
  'No topo do motor, sob a caixa do filtro de ar.',
  'Tampa que cobre o comando e segura o óleo da parte de cima. Tem junta de borracha e a saída do respiro.',
  'Junta ressecada deixa óleo escorrer pelo cabeçote e cair no coletor de escape (cheiro de queimado). Troque a junta sempre que abrir.',
  'cabecote comando respiro tampa_oleo caixa_filtro');
P('comando', 'Comando de válvulas', 'motor',
  'Dentro do cabeçote, ao longo do motor; a polia dentada fica na ponta direita.',
  'Eixo com oito ressaltos que empurram os tuchos e abrem as válvulas. Gira na metade da rotação do virabrequim, puxado pela correia dentada.',
  'Dura a vida do motor com óleo certo e correia em dia. Correia que pula dente atrasa o comando; correia que arrebenta pode empenar válvulas.',
  'correia_dent polia_comando tuchos valvulas cabecote sens_cmp');
P('tuchos', 'Tuchos hidráulicos (8)', 'motor',
  'Sob os ressaltos do comando, um em cima de cada válvula.',
  'Copos com uma câmara de óleo que se ajustam sozinhos: não há folga de válvula para regular.',
  'Batida rápida de "tec-tec" logo na partida, que some em seguida, é normal com o motor parado muito tempo. Se não some, o óleo está velho, baixo ou um tucho travou.',
  'comando valvulas cabecote bomba_oleo');
P('valvulas', 'Válvulas (8) e molas', 'motor',
  'No cabeçote: uma de admissão (atrás) e uma de escape (na frente) em cada cilindro.',
  'Abrem para a mistura entrar e para os gases saírem. As molas fecham cada válvula depois que o ressalto passa.',
  'Fumaça azul ao acelerar depois de parado pode ser retentor de válvula gasto.',
  'tuchos comando cabecote pistoes coletor_adm coletor_esc');
P('pistoes', 'Pistões (4) e anéis', 'motor',
  'Dentro dos cilindros do bloco.',
  'Recebem o empurrão da combustão e o passam às bielas: 76,5 mm de diâmetro e 86,9 mm de curso, com taxa de compressão de 12,1:1.',
  'Anéis gastos causam consumo de óleo, fumaça azul e perda de força. Teste de compressão mostra a saúde deles.',
  'bielas virabrequim valvulas velas bloco');
P('bielas', 'Bielas (4)', 'motor',
  'Entre os pistões e o virabrequim.',
  'Transformam o sobe-e-desce dos pistões no giro do virabrequim.',
  'Batida metálica grave que acompanha a rotação pode ser bronzina de biela: pare o carro e chame o guincho.',
  'pistoes virabrequim bomba_oleo');
P('virabrequim', 'Virabrequim', 'motor',
  'Na base do bloco, atravessando o motor.',
  'Eixo de manivelas girado pelas bielas. Na ponta esquerda leva o volante do motor; na direita, a engrenagem da correia dentada, a bomba de óleo e a polia dos acessórios.',
  'Dura muito com óleo limpo. O retentor dianteiro (lado da correia) pode vazar e sujar a correia dentada.',
  'bielas volante_motor polia_vira correia_dent bomba_oleo sens_ckp bloco');
P('carter', 'Cárter', 'motor',
  'Embaixo do motor, com o bujão de drenagem no fundo.',
  'Reservatório do óleo do motor, preso com parafusos e cola de vedação.',
  'Óleo e filtro conforme o manual (recomendação de oficina: 5.000 a 10.000 km ou 12 meses, menos em uso severo), cerca de 3,5 L com filtro — a vareta manda. Arruela do bujão nova a cada troca.',
  'bomba_oleo filtro_oleo vareta tampa_oleo bloco');
P('bomba_oleo', 'Bomba de óleo', 'motor',
  'Na ponta direita do bloco, atrás da engrenagem da correia, girada direto pelo virabrequim.',
  'Bomba de engrenagens que suga o óleo do cárter pelo pescador e o empurra para o filtro, os mancais, o comando e os tuchos hidráulicos.',
  'Sem troca periódica. Óleo vencido forma borra, entope a tela do pescador e derruba a pressão: luz de óleo acesa.',
  'carter filtro_oleo virabrequim sens_oleo tuchos');
P('filtro_oleo', 'Filtro de óleo', 'motor',
  'Na frente do bloco, embaixo, voltado para o radiador.',
  'Filtro de rosca que segura as partículas antes de o óleo chegar aos mancais.',
  'Troque junto com o óleo, sempre.',
  'carter bomba_oleo bloco');
P('vareta', 'Vareta do óleo', 'motor',
  'Na frente do motor, com a ponta amarela.',
  'Mostra o nível do óleo entre as marcas de mínimo e máximo.',
  'Confira com o motor frio ou 5 minutos desligado, carro no plano.',
  'carter tampa_oleo');
P('tampa_oleo', 'Tampa do bocal de óleo', 'motor',
  'Na tampa de válvulas, acessível com a caixa do filtro no lugar.',
  'Fecha o bocal por onde se completa o óleo.',
  'Anel de vedação gasto deixa entrar ar falso e sair cheiro de óleo.',
  'tampa_valv carter');
P('volante_motor', 'Volante do motor', 'motor',
  'Na ponta esquerda do virabrequim, entre o motor e o câmbio.',
  'Disco pesado que suaviza os pulsos do motor, recebe a embreagem e tem a cremalheira para o motor de partida.',
  'Troca-se ou retifica-se junto com a embreagem se estiver marcado ou trincado.',
  'virabrequim embreagem motor_partida sens_ckp');
P('correia_dent', 'Correia dentada', 'motor',
  'Lado direito do motor, atrás das capas plásticas.',
  'Sincroniza o virabrequim com o comando e também gira a bomba d’água.',
  'Troca preventiva na quilometragem do manual (recomendação de oficina: por volta de 50.000 a 60.000 km, ou antes com vazamento de óleo ou de água sobre ela). Troque junto o tensor e, de preferência, a bomba d’água.',
  'polia_vira polia_comando tensor_dent bomba_agua capas_correia comando virabrequim');
P('tensor_dent', 'Tensor da correia dentada', 'motor',
  'Atrás das capas da correia dentada, no lado direito do motor.',
  'Rolamento com mola (ou excêntrico) que mantém a correia esticada na tensão certa.',
  'Rolamento roncando ou ponteiro de tensão fora da marca: troque junto com a correia.',
  'correia_dent bomba_agua');
P('polia_comando', 'Polia do comando', 'motor',
  'Na ponta direita do cabeçote, atrás da capa de cima da correia.',
  'Polia dentada presa ao comando; a marca dela é a referência do ponto do motor.',
  'Na troca da correia, a marca da polia tem de coincidir com a referência da capa ou do cabeçote.',
  'comando correia_dent sens_cmp');
P('capas_correia', 'Capas da correia dentada', 'motor',
  'Cobrindo a correia dentada, no lado direito do motor.',
  'Protegem a correia de sujeira, água e óleo.',
  'Capa trincada deixa entrar sujeira que gasta a correia.',
  'correia_dent coxim_dir');
P('polia_vira', 'Polia do virabrequim', 'motor',
  'Na ponta direita do virabrequim, para fora da correia dentada.',
  'Leva a correia de acessórios e tem amortecedor de vibrações de borracha.',
  'Borracha descolada faz a polia bater e a correia de acessórios pular.',
  'virabrequim correia_acess correia_dent');
P('correia_acess', 'Correia de acessórios', 'motor',
  'No lado direito do motor, por fora das capas da correia dentada.',
  'Correia ranhurada que leva força do virabrequim ao alternador, à bomba da direção hidráulica e ao compressor do ar-condicionado.',
  'Inspecione em toda revisão (trincas, brilho, chiado). Se romper, a bateria para de carregar e a direção fica pesada.',
  'polia_vira alternador bomba_dir compressor tensor_acess');
P('tensor_acess', 'Tensor da correia de acessórios', 'motor',
  'No lado direito do motor, perto da correia de acessórios.',
  'Mantém a correia de acessórios esticada.',
  'Chiado ao ligar o ar ou ao esterçar parado pode ser tensor fraco ou correia gasta.',
  'correia_acess');
P('coxim_dir', 'Coxim do motor (lado direito)', 'motor',
  'Sobre a ponta direita do motor, preso à carroceria junto ao para-lama.',
  'Apoio de borracha que segura o motor e filtra a vibração.',
  'Coxim rasgado faz o motor balançar na partida e nas trocas de marcha.',
  'bloco coxim_cambio coxim_tras capas_correia');
P('coxim_cambio', 'Coxim do câmbio', 'motor',
  'Sobre o câmbio, do lado esquerdo, sob a bateria.',
  'Segura o lado do câmbio e filtra a vibração.',
  'Folga aparece como tranco ao arrancar.',
  'cambio coxim_dir coxim_tras');
P('coxim_tras', 'Coxim traseiro (tirante)', 'motor',
  'Embaixo, entre o câmbio e o subchassi, atrás do motor.',
  'Tirante com buchas que segura o conjunto contra o torque ao acelerar e frear.',
  'Batida seca ao trocar de marcha ou ao tirar o pé do acelerador.',
  'coxim_dir coxim_cambio subchassi');
P('respiro', 'Respiro do motor', 'motor',
  'Mangueira da tampa de válvulas até a admissão.',
  'Leva os gases que escapam pelos anéis de volta para serem queimados.',
  'Mangueira rachada é ar falso: marcha lenta irregular e luz de injeção.',
  'tampa_valv coletor_adm');

/* ---------- AR E INJEÇÃO ---------- */
P('tomada_ar', 'Tomada de ar', 'ar',
  'Na frente do cofre, atrás da grade, levando à caixa do filtro.',
  'Pega ar fresco da frente do carro, mais frio que o ar do cofre.',
  'Folhas e sujeira entopem a entrada.',
  'caixa_filtro');
P('caixa_filtro', 'Caixa do filtro de ar', 'ar',
  'Em cima do motor, como uma tampa, sobre a tampa de válvulas.',
  'Abriga o filtro de ar; a tomada entra pela frente e o duto sai por trás, para a borboleta.',
  'Presilhas quebradas e tampa mal fechada deixam entrar ar sem filtrar.',
  'filtro_ar tomada_ar duto_ar tampa_valv');
P('filtro_ar', 'Filtro de ar', 'ar',
  'Dentro da caixa do filtro, em cima do motor.',
  'Elemento de papel que segura a poeira antes de o ar entrar no motor.',
  'Troca a cada revisão (por volta de 10.000 a 15.000 km), antes em estrada de terra.',
  'caixa_filtro duto_ar');
P('duto_ar', 'Duto de ar', 'ar',
  'Da caixa do filtro até a borboleta, atrás do motor.',
  'Mangueira de borracha que leva o ar filtrado ao corpo de borboleta.',
  'Trinca depois da caixa é ar falso.',
  'caixa_filtro tbi respiro');
P('tbi', 'Corpo de borboleta eletrônico', 'ar',
  'Atrás do motor, na ponta esquerda do coletor de admissão.',
  'Borboleta movida por um motor elétrico que a central comanda conforme o pedal; também controla a marcha lenta.',
  'Sujeira na borda deixa a lenta irregular. Depois de limpar ou desligar a bateria, a central reaprende a posição.',
  'duto_ar coletor_adm pedal_acel ecu');
P('pedal_acel', 'Pedal do acelerador eletrônico', 'ar',
  'No assoalho do motorista.',
  'Pedal com sensor de posição: manda à central o quanto você pisa.',
  'Sensor com falha deixa o carro em modo de emergência (sem acelerar acima da lenta).',
  'tbi ecu');
P('coletor_adm', 'Coletor de admissão', 'ar',
  'Atrás do motor, voltado para o corta-fogo.',
  'Distribui o ar entre os quatro cilindros; os bicos injetores entram perto do cabeçote.',
  'Junta ressecada causa ar falso e lenta irregular.',
  'tbi galeria bicos sens_map cabecote respiro purga mang_vacuo');
P('sens_map', 'Sensor de pressão e temperatura do ar (MAP)', 'ar',
  'Em cima do coletor de admissão.',
  'Mede o vácuo e a temperatura do ar no coletor: é com eles que a central calcula a quantidade de ar.',
  'Sensor sujo de óleo do respiro dá consumo alto e falhas.',
  'coletor_adm ecu');
P('galeria', 'Galeria de combustível', 'ar',
  'Atrás do cabeçote, em cima dos bicos.',
  'Tubo que distribui o combustível sob pressão para os quatro bicos.',
  'Anéis dos bicos ressecados vazam combustível: cheiro forte no cofre.',
  'bicos linhas_comb coletor_adm');
P('bicos', 'Bicos injetores (4)', 'ar',
  'Na galeria, entrando no coletor perto de cada válvula de admissão.',
  'Pulverizam o combustível na hora e na quantidade que a central manda.',
  'Bico sujo dá falha e consumo alto. Limpeza e teste em bancada.',
  'galeria coletor_adm ecu');

/* ---------- COMBUSTÍVEL ---------- */
P('tanque', 'Tanque de combustível', 'comb',
  'Sob o banco traseiro, na frente do eixo.',
  'Guarda até 55 L de gasolina, etanol ou qualquer mistura.',
  'Evite rodar na reserva: a bomba esquenta e puxa sujeira do fundo.',
  'bomba_comb boia bocal canister linhas_comb');
P('bomba_comb', 'Bomba de combustível', 'comb',
  'Dentro do tanque, sob o banco traseiro.',
  'Bomba elétrica que empurra o combustível sob pressão até a galeria.',
  'Zumbido alto e falha em subida podem ser bomba cansada ou filtro entupido.',
  'tanque boia filtro_comb linhas_comb ecu');
P('boia', 'Boia do nível', 'comb',
  'Presa à bomba, dentro do tanque.',
  'Mede o nível de combustível para o marcador do painel.',
  'Ponteiro maluco costuma ser a boia ou o contato dela.',
  'bomba_comb tanque quadro');
P('filtro_comb', 'Filtro de combustível', 'comb',
  'Sob o assoalho, na linha que sai do tanque (posição aproximada no modelo).',
  'Filtro externo que segura a sujeira antes de o combustível chegar aos bicos.',
  'Troca na quilometragem do manual (recomendação de oficina: a cada 10.000 a 20.000 km, antes com etanol de procedência duvidosa).',
  'linhas_comb bomba_comb');
P('linhas_comb', 'Tubulação de combustível', 'comb',
  'Do tanque, pelo assoalho, até a galeria no cofre.',
  'Leva o combustível até o motor; o sistema não tem linha de retorno.',
  'Linha amassada ou engate rápido mal travado vaza.',
  'tanque bomba_comb filtro_comb galeria');
P('bocal', 'Bocal de abastecimento', 'comb',
  'Na lateral traseira direita, atrás da portinhola.',
  'Gargalo e mangueira por onde o combustível entra no tanque.',
  'Mangueira ressecada cheira a combustível depois de abastecer.',
  'tanque');
P('canister', 'Cânister (filtro de carvão)', 'comb',
  'No cofre, perto do para-lama direito (posição aproximada no modelo).',
  'Absorve os vapores de combustível do tanque para não irem para o ar.',
  'Encharca se o tanque é completado além do primeiro desarme da bomba.',
  'tanque purga');
P('purga', 'Válvula de purga do cânister', 'comb',
  'Perto do coletor de admissão.',
  'A central abre esta válvula para o motor queimar os vapores guardados no cânister.',
  'Travada aberta deixa a lenta irregular logo depois de abastecer.',
  'canister coletor_adm ecu');
P('res_pf', 'Reservatório da partida a frio', 'comb',
  'No cofre, do lado direito, perto do bocal do lavador (posição aproximada no modelo: confira no seu carro antes de abastecer).',
  'Guarda gasolina para ajudar o motor a pegar no frio quando o tanque tem muito etanol.',
  'Gasolina comum, nunca etanol. Se você só usa etanol, renove a cada 3 meses, porque a gasolina envelhece.',
  'bomba_pf valv_pf tubos_pf');
P('bomba_pf', 'Bomba da partida a frio', 'comb',
  'Junto ao reservatório da partida a frio.',
  'Pequena bomba elétrica que empurra a gasolina do reservatório para a admissão na partida a frio com etanol.',
  'Não pegar no frio com etanol e o reservatório cheio pode ser a bombinha ou a eletroválvula.',
  'res_pf valv_pf ecu');
P('valv_pf', 'Eletroválvula da partida a frio', 'comb',
  'Perto do coletor de admissão.',
  'Libera ou corta a gasolina da partida a frio na hora certa.',
  'Se ficar aberta, escorre gasolina no coletor e o motor afoga.',
  'bomba_pf tubos_pf coletor_adm');
P('tubos_pf', 'Tubinhos da partida a frio', 'comb',
  'Da eletroválvula até o coletor, um para cada cilindro.',
  'Levam a gasolina da partida a frio até perto das válvulas de admissão.',
  'Ressecam com o calor; vazamento aqui aparece como cheiro de gasolina.',
  'valv_pf coletor_adm');

/* ---------- IGNIÇÃO E SENSORES ---------- */
P('ecu', 'Central do motor', 'ign',
  'No cofre, do lado esquerdo, perto do para-lama (posição aproximada no modelo).',
  'O cérebro do motor: lê os sensores e comanda bicos, ignição, borboleta, partida a frio e ventoinha; descobre a proporção de etanol pela sonda lambda.',
  'Conectores oxidados dão falhas intermitentes. Central nova precisa ser codificada ao imobilizador.',
  'sens_map sens_ckp sens_cmp sens_ect sens_det sonda tbi bicos bobina bomba_pf ventoinha chicote');
P('bobina', 'Bobina de ignição', 'ign',
  'Presa na ponta esquerda do cabeçote, ligada às velas pelos cabos.',
  'Um bloco só que gera a alta tensão das quatro velas, em pares, conforme a central manda.',
  'Falha num cilindro ao acelerar, pior com tempo úmido: teste bobina e cabos.',
  'cabos_vela velas ecu');
P('cabos_vela', 'Cabos de vela (4)', 'ign',
  'Da bobina, na ponta esquerda do cabeçote, até as velas.',
  'Levam a alta tensão da bobina até cada vela. Cada saída da bobina é marcada com o número do cilindro.',
  'Troque um de cada vez para não inverter: cilindros numerados a partir do lado da correia. Cabos velhos dão falha e consumo.',
  'bobina velas');
P('velas', 'Velas de ignição (4)', 'ign',
  'Em cima do cabeçote, uma por cilindro, sob os cabos.',
  'Soltam a faísca que inicia a combustão.',
  'Troca na quilometragem do manual (recomendação de oficina: 30.000 km). Use o tipo indicado para o motor flex.',
  'cabos_vela bobina cabecote');
P('sens_ckp', 'Sensor de rotação (CKP)', 'ign',
  'No bloco, do lado do câmbio, lendo a roda dentada do virabrequim.',
  'Diz à central a rotação e a posição do virabrequim; sem ele o motor não pega.',
  'Motor que apaga quente e não volta pode ser este sensor.',
  'virabrequim ecu volante_motor');
P('sens_cmp', 'Sensor de fase (CMP)', 'ign',
  'No cabeçote, junto à polia do comando.',
  'Diz qual cilindro está em compressão para a injeção ser sequencial.',
  'Com falha, o motor ainda pega, mas demora mais e acende a luz.',
  'comando polia_comando ecu');
P('sens_ect', 'Sensor de temperatura do motor', 'ign',
  'Na flange de água, na ponta esquerda do cabeçote.',
  'Informa a temperatura do líquido à central e ao painel.',
  'Sensor ruim deixa a partida a frio errada e a ventoinha ligada direto.',
  'flange_agua ecu ventoinha quadro');
P('sens_det', 'Sensor de detonação', 'ign',
  'Parafusado no bloco, atrás, entre os cilindros do meio.',
  'Escuta a batida de pino e faz a central atrasar a ignição.',
  'Aperto errado muda a leitura.',
  'bloco ecu');
P('sonda', 'Sonda lambda dianteira', 'ign',
  'No coletor de escape, na frente do motor.',
  'Mede o oxigênio nos gases para a central corrigir a mistura e reconhecer o etanol.',
  'Sonda lenta aumenta o consumo e dificulta reconhecer o combustível depois de abastecer.',
  'coletor_esc catalisador ecu');
P('sonda2', 'Sonda lambda traseira', 'ign',
  'Depois do catalisador, no tubo dianteiro.',
  'Confere se o catalisador está limpando os gases.',
  'Falha acusa catalisador ineficiente.',
  'catalisador tubo_diant ecu');
P('sens_oleo', 'Interruptor da pressão do óleo', 'ign',
  'No suporte do filtro de óleo, na frente do bloco.',
  'Acende a luz do óleo no painel quando a pressão cai.',
  'Luz acesa com o motor ligado: desligue na hora e confira o nível.',
  'bomba_oleo filtro_oleo quadro');

/* ---------- ARREFECIMENTO ---------- */
P('radiador', 'Radiador', 'arref',
  'Na frente do cofre, atrás do condensador do ar.',
  'Troca o calor do líquido com o ar que passa.',
  'Aletas amassadas e sujeira de inseto atrapalham a troca de calor.',
  'mang_sup mang_inf ventoinha vaso condensador');
P('ventoinha', 'Eletroventilador', 'arref',
  'Atrás do radiador.',
  'Ventilador elétrico de duas velocidades que puxa ar pelo radiador quando o carro está parado ou o ar está ligado.',
  'Se não liga, a temperatura sobe no trânsito.',
  'radiador condensador ecu sens_ect');
P('vaso', 'Reservatório de expansão', 'arref',
  'No cofre, do lado direito, atrás do amortecedor (posição aproximada no modelo).',
  'Recebe o líquido que dilata, devolve quando esfria e tem a tampa com válvula de pressão.',
  'Nível entre MIN e MAX com o motor frio. Nunca abra quente.',
  'radiador mang_sup junta_cab');
P('termostato', 'Válvula termostática', 'arref',
  'Na frente do bloco, na entrada da água que volta do radiador (posição aproximada no modelo).',
  'Fecha o caminho do radiador com o motor frio e abre quando ele esquenta.',
  'Travada aberta: motor demora a esquentar e gasta mais. Travada fechada: superaquece.',
  'mang_inf bomba_agua radiador');
P('flange_agua', 'Flange de água', 'arref',
  'Na ponta esquerda do cabeçote.',
  'Saída do líquido quente do cabeçote, de onde partem as mangueiras do radiador e do aquecedor; leva o sensor de temperatura.',
  'Flange plástica trinca com a idade: vazamento cor-de-rosa na ponta do cabeçote.',
  'cabecote mang_sup mang_aquec sens_ect');
P('bomba_agua', 'Bomba d’água', 'arref',
  'No bloco, do lado direito, girada pela correia dentada.',
  'Faz o líquido circular pelo motor e pelo radiador.',
  'Vazamento pelo furinho de dreno ou ronco de rolamento. Como fica na correia dentada, troque junto com ela.',
  'correia_dent bloco mang_inf');
P('mang_sup', 'Mangueira superior do radiador', 'arref',
  'Da flange de água até o radiador.',
  'Leva o líquido quente do motor ao radiador.',
  'Mangueira inchada ou mole está no fim.',
  'flange_agua radiador vaso');
P('mang_inf', 'Mangueira inferior do radiador', 'arref',
  'Do radiador até a entrada da bomba, na frente do bloco.',
  'Traz o líquido frio de volta ao motor.',
  'Abraçadeira frouxa vaza só com o motor quente.',
  'radiador termostato bomba_agua');
P('mang_aquec', 'Mangueiras do aquecedor', 'arref',
  'Da flange de água ao corta-fogo e de volta ao motor.',
  'Levam o líquido quente ao radiador do aquecedor da cabine.',
  'Aquecedor frio pode ser bolha de ar ou mangueira dobrada.',
  'flange_agua rad_aquec bomba_agua');
P('rad_aquec', 'Radiador do aquecedor', 'arref',
  'Dentro da caixa de ar, atrás do painel.',
  'Aquece o ar da ventilação com o calor do motor.',
  'Vazamento aparece como cheiro doce e vidro embaçando por dentro.',
  'mang_aquec caixa_ar');

/* ---------- AR-CONDICIONADO ---------- */
P('compressor', 'Compressor do ar-condicionado', 'clima',
  'Na frente do motor, embaixo, na correia de acessórios.',
  'Comprime o gás refrigerante; a embreagem eletromagnética da polia liga e desliga.',
  'Ruído ao ligar o ar ou embreagem patinando: diagnóstico com manômetros.',
  'correia_acess tubos_ac condensador pressostato');
P('condensador', 'Condensador', 'clima',
  'Na frente do radiador, atrás da grade.',
  'Resfria o gás quente vindo do compressor, que vira líquido.',
  'Aletas sujas ou amassadas derrubam o frio.',
  'radiador ventoinha tubos_ac filtro_secador');
P('filtro_secador', 'Filtro secador', 'clima',
  'Junto ao condensador, do lado direito.',
  'Tira a umidade e a sujeira do gás.',
  'Troque sempre que o circuito for aberto.',
  'condensador tubos_ac');
P('pressostato', 'Sensor de pressão do ar', 'clima',
  'Na linha de alta, perto do condensador.',
  'Protege o compressor e liga a ventoinha na velocidade alta.',
  'Sem sinal, o compressor não liga.',
  'tubos_ac compressor ventoinha');
P('tubos_ac', 'Tubulações do ar-condicionado', 'clima',
  'Do compressor ao condensador e do condensador ao corta-fogo, do lado direito.',
  'Linha de alta (fina e quente) e de baixa (grossa e fria).',
  'Óleo nas conexões indica vazamento de gás.',
  'compressor condensador filtro_secador valv_exp');
P('valv_exp', 'Válvula de expansão', 'clima',
  'No corta-fogo, na entrada do evaporador.',
  'Estrangula a passagem para o gás expandir e gelar.',
  'Travada causa gelo no evaporador ou pouco frio.',
  'tubos_ac evaporador');
P('evaporador', 'Evaporador', 'clima',
  'Dentro da caixa de ar, atrás do painel.',
  'Gela e seca o ar da cabine.',
  'Cheiro de mofo: limpeza com produto próprio e dreno desobstruído.',
  'valv_exp caixa_ar vent_interno filtro_cabine');
P('filtro_cabine', 'Filtro de ar da cabine', 'clima',
  'Na entrada de ar da ventilação, sob a grade do torpedo, do lado do passageiro (posição aproximada no modelo).',
  'Segura pó e pólen antes de o ar entrar na cabine.',
  'Troca a cada 10.000 km ou 12 meses; entupido derruba a ventilação.',
  'caixa_ar vent_interno evaporador');
P('vent_interno', 'Ventilador interno', 'clima',
  'Sob o painel, do lado do passageiro.',
  'Sopra o ar pela caixa de ar até as saídas.',
  'Só a velocidade máxima funcionando indica resistor queimado.',
  'caixa_ar filtro_cabine comandos_clima');
P('caixa_ar', 'Caixa de ar', 'clima',
  'Atrás do painel, no centro.',
  'Abriga o evaporador e o radiador do aquecedor e mistura o ar frio e o quente.',
  'Ruído de portinhola ou ar saindo pelo lugar errado: cabos de comando.',
  'evaporador rad_aquec vent_interno comandos_clima');
P('comandos_clima', 'Comandos da ventilação', 'clima',
  'No centro do painel.',
  'Botões de temperatura, velocidade, direção do ar, recirculação e o botão do ar-condicionado.',
  'Botão duro ou que não muda nada: cabo solto atrás.',
  'caixa_ar vent_interno compressor');

/* ---------- ESCAPAMENTO ---------- */
P('coletor_esc', 'Coletor de escape', 'esc',
  'Na frente do motor, voltado para o radiador, sob o protetor de calor.',
  'Junta os gases dos quatro cilindros.',
  'Junta queimada faz "tic-tic" no frio.',
  'cabecote protetor catalisador sonda');
P('protetor', 'Protetor de calor', 'esc',
  'Sobre o coletor de escape, na frente do motor.',
  'Chapa que segura o calor do coletor longe das mangueiras e fios.',
  'Solto, faz chocalho metálico em certas rotações.',
  'coletor_esc');
P('catalisador', 'Catalisador', 'esc',
  'Logo abaixo do coletor, na frente do motor.',
  'Transforma os gases tóxicos em gases menos nocivos.',
  'Entupido tira força e esquenta o escape; danificado acende a luz pela sonda traseira.',
  'coletor_esc sonda sonda2 tubo_diant');
P('tubo_diant', 'Tubo dianteiro e junta flexível', 'esc',
  'Do catalisador, por baixo do motor, até o túnel.',
  'Leva os gases para trás; a junta flexível absorve o balanço do motor.',
  'Flexível estourado faz barulho de escape aberto.',
  'catalisador silenc_inter sonda2 coxins_esc');
P('silenc_inter', 'Silencioso intermediário', 'esc',
  'Sob o assoalho, no túnel.',
  'Primeiro abafador do ruído.',
  'Furado, aumenta o barulho e entra cheiro de escape.',
  'tubo_diant tubo_tras');
P('tubo_tras', 'Tubo traseiro', 'esc',
  'Do silencioso intermediário, passando sobre o eixo traseiro.',
  'Leva os gases ao silencioso traseiro.',
  'Encostando no eixo, faz batida em lombada.',
  'silenc_inter silenc_tras coxins_esc');
P('silenc_tras', 'Silencioso traseiro e ponteira', 'esc',
  'Atrás do eixo traseiro, à esquerda.',
  'Último abafador; a ponteira sai embaixo do para-choque.',
  'Ferrugem por dentro faz chiado e vazamento.',
  'tubo_tras coxins_esc');
P('coxins_esc', 'Coxins do escapamento', 'esc',
  'Ao longo do escapamento, presos no assoalho.',
  'Borrachas que seguram o escape e filtram a vibração.',
  'Rachados deixam o escape bater no assoalho.',
  'tubo_diant tubo_tras silenc_tras');

/* ---------- ELÉTRICA ---------- */
P('bateria', 'Bateria', 'ele',
  'No cofre, na frente, do lado esquerdo.',
  'Dá a partida e segura a elétrica com o motor desligado.',
  'Dura de 2 a 4 anos. Terminais limpos e grampo firme.',
  'cabos_bat caixa_fus_motor alternador motor_partida');
P('cabos_bat', 'Cabos da bateria', 'ele',
  'Da bateria ao motor de partida, à caixa de fusíveis e à carroceria.',
  'Levam a corrente grossa da partida e da carga.',
  'Terminal oxidado: partida fraca.',
  'bateria motor_partida alternador caixa_fus_motor');
P('caixa_fus_motor', 'Porta-fusíveis da bateria', 'ele',
  'Em cima da bateria, preso ao terminal positivo.',
  'Fusíveis grandes que protegem os circuitos principais (alternador, ventoinha, central elétrica).',
  'Fusível derretido com cheiro de queimado: procure o curto antes de trocar.',
  'bateria cabos_bat caixa_fus_painel');
P('caixa_fus_painel', 'Central elétrica (fusíveis e relés)', 'ele',
  'Sob o painel, do lado do motorista, atrás de uma tampa.',
  'Fusíveis e relés dos circuitos do carro: injeção, bomba, luzes, limpadores, vidros e travas.',
  'Use sempre a mesma amperagem.',
  'chicote caixa_fus_motor ign_chave');
P('alternador', 'Alternador', 'ele',
  'Na frente do motor, do lado direito, em cima, na correia de acessórios.',
  'Gera a energia com o motor ligado e recarrega a bateria.',
  'Luz da bateria acesa ou tensão abaixo de 13,5 V com o motor ligado.',
  'correia_acess bateria cabos_bat');
P('motor_partida', 'Motor de partida', 'ele',
  'Atrás do motor, preso na carcaça do câmbio.',
  'Gira o volante do motor para dar a partida.',
  'Estalo sem girar: bateria fraca, cabo ruim ou o motor de partida.',
  'volante_motor bateria cabos_bat ign_chave');
P('chicote', 'Chicote elétrico', 'ele',
  'Do cofre à cabine e até a traseira.',
  'Leva energia e sinais a todos os componentes.',
  'Conector solto dá defeitos que vão e voltam.',
  'ecu caixa_fus_painel bateria');
P('farois', 'Faróis', 'ele',
  'Na frente, dos dois lados da grade, subindo pelo para-lama.',
  'Faróis de máscara escura com farol baixo, alto, luz de posição e pisca.',
  'Regule o facho depois de trocar lâmpada ou farol.',
  'caixa_fus_painel para_choque_d grade comutadores');
P('lanternas', 'Lanternas traseiras', 'ele',
  'Atrás, nas colunas ao lado da tampa traseira.',
  'Luz de posição, freio, pisca e ré.',
  'Vedação ruim deixa entrar água no porta-malas.',
  'luz_freio tampa_tras caixa_fus_painel');
P('piscas_lat', 'Repetidores laterais', 'ele',
  'Nos para-lamas dianteiros.',
  'Repetem o pisca para quem está do lado.',
  'Lâmpada queimada faz o pisca piscar rápido.',
  'paralamas farois');
P('luz_freio', 'Luz de freio alta', 'ele',
  'No alto da tampa traseira, sob o aerofólio.',
  'Terceira luz de freio, na altura dos olhos de quem vem atrás.',
  'Acende com o interruptor do pedal.',
  'tampa_tras lanternas pedal_freio');
P('luz_placa', 'Luzes da placa', 'ele',
  'Na tampa traseira, acima da placa.',
  'Iluminam a placa à noite.',
  'Apagada dá multa.',
  'tampa_tras');
P('buzina', 'Buzina', 'ele',
  'Atrás do para-choque dianteiro.',
  'Avisa sonoro, acionada pelo volante.',
  'Sem som: fusível, relé ou o contato do volante.',
  'volante_dir caixa_fus_painel');
P('limpador', 'Limpador do para-brisa', 'ele',
  'Motor sob a grade do torpedo; braços na base do para-brisa.',
  'Motor, hastes e dois braços com palhetas.',
  'Palhetas a cada ano ou quando riscam.',
  'grade_torpedo lavador comutadores');
P('limpador_tras', 'Limpador traseiro', 'ele',
  'Motor dentro da tampa traseira; braço no vidro.',
  'Limpa o vidro traseiro.',
  'Vedação do eixo ruim deixa entrar água na tampa.',
  'tampa_tras lavador');
P('lavador', 'Reservatório e bomba do lavador', 'ele',
  'No cofre, na frente, do lado direito, com o bocal à vista.',
  'Esguicha água no para-brisa e no vidro traseiro.',
  'Use água com limpador próprio, nunca detergente.',
  'limpador limpador_tras');
P('ign_chave', 'Comutador de ignição e imobilizador', 'ele',
  'Na coluna de direção, à direita do volante.',
  'Liga os circuitos e lê o chip da chave para liberar o motor.',
  'Chave nova precisa ser codificada.',
  'ecu motor_partida coluna caixa_fus_painel');
P('comutadores', 'Comutadores de luz e limpador', 'ele',
  'Atrás do volante, dos dois lados.',
  'Alavancas das luzes, do pisca e dos limpadores.',
  'Pisca que não retorna sozinho: comutador gasto.',
  'farois limpador coluna');

/* ---------- TRANSMISSÃO ---------- */
P('cambio', 'Câmbio manual de 5 marchas (MQ200)', 'trans',
  'À esquerda do motor, sob a bateria.',
  'Caixa de cinco marchas e ré, com engates por cabos.',
  'Óleo do câmbio é de longa duração; confira o nível e vazamentos nas revisões. Marcha arranhando: embreagem ou sincronizador.',
  'diferencial embreagem cabos_cambio semieixos coxim_cambio motor_partida garfo_emb');
P('diferencial', 'Diferencial', 'trans',
  'Dentro do câmbio, na parte de baixo.',
  'Deixa as rodas girarem em velocidades diferentes nas curvas.',
  'Ruído em curva pode ser diferencial ou homocinética.',
  'cambio semieixos');
P('embreagem', 'Embreagem (disco e platô)', 'trans',
  'Entre o volante do motor e o câmbio.',
  'Liga e desliga o motor do câmbio quando você pisa no pedal.',
  'Patinando (giro sobe sem o carro andar) ou trepidando: troca do conjunto com o rolamento.',
  'volante_motor rol_emb garfo_emb cambio');
P('rol_emb', 'Rolamento da embreagem', 'trans',
  'Dentro da capa do câmbio, no eixo-piloto.',
  'Empurra as molas do platô quando o pedal é pisado.',
  'Chiado que some ao pisar no pedal (ou que aparece ao pisar).',
  'embreagem garfo_emb');
P('garfo_emb', 'Garfo e alavanca da embreagem', 'trans',
  'No câmbio: a alavanca fica por fora, em cima, onde o cabo se prende.',
  'Transforma o puxão do cabo no empurrão do rolamento.',
  'Bucha gasta deixa o pedal duro e o acoplamento irregular.',
  'cabo_emb rol_emb cambio');
P('cabo_emb', 'Cabo da embreagem', 'trans',
  'Do pedal, atravessando o corta-fogo, até a alavanca da embreagem no câmbio.',
  'Puxa a alavanca da embreagem quando você pisa no pedal; tem ajuste automático da folga.',
  'Pedal duro, rangendo ou que não volta: cabo ressecado ou desfiando. Confira no seu carro se o acionamento é a cabo.',
  'pedal_emb garfo_emb');
P('pedal_emb', 'Pedal da embreagem', 'trans',
  'No assoalho do motorista, à esquerda.',
  'Puxa o cabo da embreagem.',
  'Altura e folga do pedal se conferem no manual.',
  'cabo_emb');
P('semieixos', 'Semieixos e homocinéticas', 'trans',
  'Do câmbio às rodas dianteiras.',
  'Levam o giro até as rodas mesmo com a suspensão trabalhando e a roda esterçada.',
  'Estalo em curva fechada: homocinética. Coifa rasgada perde graxa e acaba com ela.',
  'cambio diferencial mangas');
P('cabos_cambio', 'Cabos de engate', 'trans',
  'Da alavanca, pelo túnel, até o câmbio.',
  'Dois cabos: um seleciona a fila e o outro engata a marcha.',
  'Engate impreciso ou alavanca "boba": cabos ou buchas gastos, ou regulagem.',
  'alavanca cambio');
P('alavanca', 'Alavanca de câmbio', 'trans',
  'No console central.',
  'Escolhe as marchas puxando os cabos.',
  'Folga grande: buchas do trambulador.',
  'cabos_cambio console');

/* ---------- FREIOS ---------- */
P('pedal_freio', 'Pedal do freio', 'freio',
  'No assoalho do motorista.',
  'Empurra a haste do servo-freio e aciona o interruptor da luz de freio.',
  'Pedal baixo ou esponjoso: ar no sistema ou fluido velho.',
  'servo luz_freio');
P('servo', 'Servo-freio', 'freio',
  'No corta-fogo, do lado do motorista.',
  'Usa o vácuo do motor para multiplicar a força do pé.',
  'Pedal duro com o motor ligado: mangueira de vácuo ou servo furado.',
  'pedal_freio cil_mestre mang_vacuo');
P('cil_mestre', 'Cilindro-mestre', 'freio',
  'Preso na frente do servo-freio.',
  'Transforma a força do pedal em pressão do fluido, em dois circuitos em diagonal.',
  'Pedal que desce devagar parado no semáforo: vedação interna.',
  'servo reserv_freio tubos_freio');
P('reserv_freio', 'Reservatório do fluido de freio', 'freio',
  'Em cima do cilindro-mestre.',
  'Guarda o fluido de freio, com sensor de nível.',
  'Troca do fluido a cada 2 anos. Nível caindo sozinho é vazamento ou pastilha no fim.',
  'cil_mestre');
P('valv_equal', 'Válvula equalizadora', 'freio',
  'Sob a traseira, presa à carroceria e ligada ao eixo (posição aproximada no modelo).',
  'Reduz a pressão do freio traseiro conforme a carga, para as rodas de trás não travarem (carros sem ABS).',
  'Regulagem errada faz a traseira travar ou frear pouco. Confira no seu carro se tem ABS: nesse caso a peça não existe.',
  'tubos_freio eixo_tras');
P('tubos_freio', 'Tubulações e flexíveis de freio', 'freio',
  'Do cilindro-mestre às quatro rodas, pelo assoalho.',
  'Levam o fluido sob pressão.',
  'Flexível rachado ou estufado deve ser trocado.',
  'cil_mestre pincas sapatas valv_equal');
P('pincas', 'Pinças de freio', 'freio',
  'Nas rodas dianteiras, abraçando os discos.',
  'Empurram as pastilhas contra o disco.',
  'Pino-guia travado gasta a pastilha de um lado só.',
  'pastilhas discos tubos_freio mangas');
P('pastilhas', 'Pastilhas de freio', 'freio',
  'Dentro das pinças dianteiras.',
  'Atritam no disco para frear.',
  'Confira em toda revisão; chiado agudo é o aviso de desgaste.',
  'pincas discos');
P('discos', 'Discos de freio ventilados', 'freio',
  'Nas rodas dianteiras.',
  'Disco que gira com a roda e recebe as pastilhas; as aletas internas ventilam.',
  'Volante tremendo ao frear: disco empenado. Troque abaixo da espessura mínima.',
  'pastilhas pincas mangas');
P('tambores', 'Tambores de freio', 'freio',
  'Nas rodas traseiras.',
  'Giram com a roda; as sapatas encostam por dentro.',
  'Ovalizado faz o pedal pulsar.',
  'sapatas cubo_tras');
P('sapatas', 'Sapatas e cilindros de roda', 'freio',
  'Dentro dos tambores traseiros.',
  'As sapatas abrem contra o tambor; também servem ao freio de mão.',
  'Vazamento no cilindro de roda contamina a lona.',
  'tambores freio_mao tubos_freio');
P('freio_mao', 'Freio de mão', 'freio',
  'Alavanca entre os bancos, com dois cabos até as rodas traseiras.',
  'Trava as rodas de trás puxando as sapatas.',
  'Alavanca subindo muitos cliques: regule ou confira as sapatas.',
  'sapatas console');
P('mang_vacuo', 'Mangueira de vácuo do servo', 'freio',
  'Do coletor de admissão até o servo-freio.',
  'Leva o vácuo do motor ao servo, com válvula de retenção.',
  'Rachada, deixa o pedal duro e a lenta irregular.',
  'servo coletor_adm');

/* ---------- SUSPENSÃO E RODAS ---------- */
P('amort_diant', 'Amortecedores dianteiros', 'susp',
  'Dentro das molas dianteiras, presos à manga e ao alto do para-lama.',
  'Controlam o balanço da frente (suspensão McPherson).',
  'Vazando óleo ou o carro balançando muito: troque em par.',
  'molas_diant coxins_amort mangas');
P('molas_diant', 'Molas dianteiras', 'susp',
  'Em volta dos amortecedores dianteiros.',
  'Sustentam o peso da frente.',
  'Mola quebrada deixa o carro torto e faz barulho.',
  'amort_diant coxins_amort');
P('coxins_amort', 'Coxins dos amortecedores', 'susp',
  'No alto dos amortecedores dianteiros, sob o capô.',
  'Apoios de borracha com rolamento que deixam o conjunto girar com a direção.',
  'Batida de "toc" em lombada e direção dura.',
  'amort_diant molas_diant');
P('bandejas', 'Bandejas (braços inferiores)', 'susp',
  'Embaixo, entre o subchassi e as mangas.',
  'Seguram a roda na posição; o pivô deixa a manga girar.',
  'Bucha rachada ou pivô com folga: barulho e desgaste do pneu.',
  'mangas subchassi barra_estab');
P('barra_estab', 'Barra estabilizadora', 'susp',
  'Atravessa a frente por baixo, ligada às bandejas pelas bieletas.',
  'Diminui a inclinação nas curvas.',
  'Bieleta com folga faz batida em piso ruim.',
  'bandejas subchassi');
P('subchassi', 'Subchassi dianteiro', 'susp',
  'Sob o motor, parafusado na carroceria.',
  'Base das bandejas, da barra estabilizadora, da caixa de direção e do tirante do motor.',
  'Batida forte por baixo pode entortar.',
  'bandejas barra_estab caixa_dir coxim_tras');
P('mangas', 'Mangas de eixo e cubos dianteiros', 'susp',
  'Nas rodas dianteiras.',
  'Seguram o cubo com o rolamento, a pinça e o terminal de direção.',
  'Rolamento roncando aumenta com a velocidade.',
  'amort_diant bandejas barras_axiais semieixos discos pincas');
P('eixo_tras', 'Eixo traseiro de torção', 'susp',
  'Sob a traseira, de uma roda à outra.',
  'Dois braços unidos por uma travessa que torce quando uma roda sobe mais que a outra.',
  'Simples e robusto. Buchas gastas fazem a traseira "esterçar" em curva.',
  'buchas_eixo cubo_tras amort_tras molas_tras valv_equal');
P('buchas_eixo', 'Buchas do eixo traseiro', 'susp',
  'Na frente dos braços do eixo, presas à carroceria.',
  'Articulação de borracha do eixo.',
  'Rachadas, deixam a traseira instável.',
  'eixo_tras');
P('cubo_tras', 'Cubos e rolamentos traseiros', 'susp',
  'Nas pontas do eixo traseiro.',
  'Seguram as rodas de trás e os tambores.',
  'Ronco que muda nas curvas.',
  'eixo_tras tambores');
P('amort_tras', 'Amortecedores traseiros', 'susp',
  'Atrás das rodas traseiras, do eixo até a carroceria.',
  'Controlam o balanço da traseira; ficam separados das molas.',
  'Troque em par.',
  'eixo_tras molas_tras');
P('molas_tras', 'Molas traseiras', 'susp',
  'Sobre o eixo traseiro, na frente dos amortecedores.',
  'Sustentam o peso da traseira.',
  'Coxim de borracha ressecado faz rangido.',
  'eixo_tras amort_tras');
P('pneus', 'Pneus 195/55 R15', 'susp',
  'Nas quatro rodas.',
  'Medida 195/55 R15, com a pressão indicada na etiqueta da porta ou no manual.',
  'Calibre a frio a cada 15 dias, faça rodízio a cada 10.000 km e troque com 1,6 mm de sulco.',
  'rodas mangas cubo_tras');
P('rodas', 'Rodas de liga 6J × 15', 'susp',
  'Nas quatro pontas.',
  'Rodas de liga leve aro 15, furação 4 × 100, presas por parafusos.',
  'Aperto em cruz com torquímetro; roda empenada faz o volante tremer.',
  'pneus mangas cubo_tras');
P('estepe', 'Estepe', 'susp',
  'No poço do porta-malas, sob o assoalho.',
  'Roda reserva, presa por um parafuso central.',
  'Calibre junto com os outros.',
  'macaco porta_malas');
P('macaco', 'Macaco e chave de roda', 'susp',
  'No porta-malas, junto ao estepe.',
  'Para trocar o pneu, apoiado nos pontos da soleira.',
  'Nunca entre embaixo do carro apoiado só no macaco.',
  'estepe');

/* ---------- DIREÇÃO ---------- */
P('volante_dir', 'Volante', 'dir',
  'Na frente do motorista.',
  'Gira a coluna; no centro fica o botão da buzina.',
  'Volante torto com o carro andando reto: alinhamento.',
  'coluna buzina comutadores');
P('coluna', 'Coluna de direção', 'dir',
  'Do volante, atravessando o corta-fogo, até o pinhão da caixa.',
  'Leva o giro do volante até a caixa de direção.',
  'Folga ou batida na junta: cruzeta gasta.',
  'volante_dir caixa_dir ign_chave');
P('caixa_dir', 'Caixa de direção hidráulica', 'dir',
  'Atrás do motor, no subchassi, atravessando o carro.',
  'Pinhão e cremalheira com um pistão hidráulico que ajuda a empurrar.',
  'Vazamento nas coifas ou volante pesado num lado só.',
  'coluna barras_axiais mang_dir bomba_dir subchassi');
P('barras_axiais', 'Barras axiais e terminais', 'dir',
  'Das pontas da caixa de direção até as mangas.',
  'Empurram e puxam as rodas para esterçar.',
  'Folga dá volante "solto" e desgaste do pneu. Alinhamento depois da troca.',
  'caixa_dir mangas');
P('bomba_dir', 'Bomba da direção hidráulica', 'dir',
  'Atrás do motor, em cima, na correia de acessórios.',
  'Gera a pressão do fluido que ajuda a girar o volante.',
  'Chiado ao esterçar parado: nível baixo ou correia patinando.',
  'correia_acess reserv_dir mang_dir caixa_dir');
P('reserv_dir', 'Reservatório da direção hidráulica', 'dir',
  'No cofre, do lado direito, à frente da correia dentada (posição aproximada no modelo).',
  'Guarda o fluido da direção.',
  'Nível com o motor frio; fluido escuro ou com espuma pede troca.',
  'bomba_dir mang_dir');
P('mang_dir', 'Mangueiras da direção hidráulica', 'dir',
  'Entre a bomba, a caixa e o reservatório.',
  'Mangueira de pressão (ida) e de retorno.',
  'Suor de óleo nas conexões: aperte ou troque antes de estourar.',
  'bomba_dir caixa_dir reserv_dir');

/* ---------- INTERIOR ---------- */
P('painel', 'Painel', 'int',
  'Na frente da cabine.',
  'Estrutura de plástico que abriga o quadro, o rádio, as saídas de ar e o porta-luvas.',
  'Rangidos: presilhas soltas.',
  'quadro radio caixa_ar comandos_clima');
P('quadro', 'Quadro de instrumentos', 'int',
  'Atrás do volante.',
  'Velocímetro, conta-giros, temperatura, combustível, computador de bordo e luzes de aviso.',
  'Luz acesa com o motor ligado merece atenção: óleo, bateria e temperatura pedem parada.',
  'painel boia sens_ect sens_oleo');
P('radio', 'Rádio', 'int',
  'No centro do painel.',
  'Som e conexões.',
  'Bateria desligada pode pedir o código.',
  'painel alto_falantes');
P('console', 'Console central', 'int',
  'Entre os bancos da frente.',
  'Acabamento em volta da alavanca de câmbio e do freio de mão.',
  'Sem manutenção.',
  'alavanca freio_mao');
P('bancos_diant', 'Bancos dianteiros', 'int',
  'Na frente da cabine.',
  'Bancos com regulagem de distância e encosto; o do motorista tem regulagem de altura.',
  'Trilho travado ou folgado: limpe e lubrifique.',
  'cintos');
P('banco_tras', 'Banco traseiro', 'int',
  'Atrás dos bancos dianteiros.',
  'Assento e encosto rebatível para aumentar o porta-malas.',
  'O assento levanta para chegar à bomba de combustível.',
  'cintos porta_malas tanque');
P('cintos', 'Cintos de segurança', 'int',
  'Nas colunas e no assoalho.',
  'Seguram os ocupantes; os da frente têm regulagem de altura.',
  'Cinto que não trava num puxão forte deve ser trocado.',
  'bancos_diant banco_tras colunas');
P('forros_portas', 'Forros das portas dianteiras', 'int',
  'Por dentro das portas dianteiras.',
  'Acabamento com puxador, botões dos vidros e alto-falante.',
  'Presilhas quebradas fazem barulho.',
  'portas maq_vidro alto_falantes');
E('forros_portas', 'encaixada', 'Presilhas plásticas em volta, parafusos no puxador e encaixe na borda do vidro.');
P('forros_portas_tras', 'Forros das portas traseiras', 'int',
  'Por dentro das portas traseiras.',
  'Acabamento com puxador e o botão ou a manivela do vidro.',
  'Presilhas quebradas fazem barulho.',
  'portas_tras maq_vidro_tras');
E('forros_portas_tras', 'encaixada', 'Presilhas plásticas em volta, parafuso no puxador e encaixe na borda do vidro.');
P('porta_malas', 'Porta-malas e tampão', 'int',
  'Atrás do banco traseiro.',
  'Assoalho, laterais e tampão do porta-malas (cerca de 285 L).',
  'Água no poço do estepe: borracha da tampa, cordão do vidro ou lanternas.',
  'estepe tampa_tras banco_tras');
P('retrovisor_int', 'Retrovisor interno', 'int',
  'No alto do para-brisa.',
  'Espelho interno.',
  'Base descolada se cola com adesivo próprio para vidro.',
  'para_brisa');
P('alto_falantes', 'Alto-falantes', 'int',
  'Nas portas dianteiras e traseiras, sob os forros.',
  'Som do rádio.',
  'Chiado: cone rasgado ou fio solto.',
  'radio forros_portas');

/* ---------- CARROCERIA ---------- */
P('monobloco', 'Monobloco (estrutura)', 'carro',
  'É o carro todo: assoalho, longarinas, colunas e caixas de roda unidos.',
  'Estrutura soldada que sustenta tudo e absorve impactos.',
  'Depois de batida, confira as medidas em gabarito.',
  'corta_fogo soleiras colunas teto laterais painel_tras');
E('monobloco', 'soldada', 'Chapas unidas por pontos de solda e cola estrutural.');
P('corta_fogo', 'Corta-fogo', 'carro',
  'Entre o cofre e a cabine.',
  'Parede que separa o motor da cabine, com as passagens da coluna, do cabo da embreagem e dos fios.',
  'Passa-cabos fora do lugar deixam entrar água e barulho.',
  'monobloco servo coluna cabo_emb');
E('corta_fogo', 'soldada', 'Parte soldada do monobloco.');
P('soleiras', 'Soleiras', 'carro',
  'Embaixo das portas, dos dois lados.',
  'Vigas laterais da estrutura, com os pontos de apoio do macaco.',
  'Ferrugem por dentro começa nos furos de dreno entupidos.',
  'monobloco portas portas_tras');
E('soleiras', 'soldada', 'Soldadas a ponto na aba de baixo e na borda das aberturas das portas.');
P('colunas', 'Colunas', 'carro',
  'Nos cantos do para-brisa (colunas A) e entre as portas (colunas B).',
  'Seguram o teto e as dobradiças das portas.',
  'Coluna amassada compromete a estrutura.',
  'monobloco teto para_brisa dobradicas');
E('colunas', 'soldada', 'Parte soldada da estrutura, com o teto e as soleiras.');
P('teto', 'Teto', 'carro',
  'Em cima da cabine.',
  'Chapa do teto, com as travessas por baixo.',
  'Troca é serviço de funilaria.',
  'colunas laterais para_brisa tampa_tras');
E('teto', 'soldada', 'Soldado a ponto nas bordas: sobre as portas, na moldura do para-brisa e na abertura da tampa.');
P('laterais', 'Laterais traseiras', 'carro',
  'Atrás das portas traseiras, em volta das rodas de trás até as lanternas.',
  'Chapas das laterais traseiras, com as caixas de roda e a portinhola do combustível.',
  'Emendas com massa de vedação trincada enferrujam.',
  'monobloco teto painel_tras lanternas bocal para_choque_t');
E('laterais', 'soldada', 'Soldadas a ponto na coluna central, na soleira, na caixa de roda, no painel traseiro e junto ao teto.');
P('painel_tras', 'Painel traseiro', 'carro',
  'Atrás, sob a tampa, por trás do para-choque.',
  'Fecha a traseira, recebe o batente da fechadura e a viga do para-choque.',
  'Depois de batida, confira por dentro do porta-malas.',
  'laterais viga_traseira fech_tampa para_choque_t');
E('painel_tras', 'soldada', 'Soldado às laterais e ao assoalho do porta-malas.');
P('travessa_frontal', 'Painel frontal', 'carro',
  'Na frente do cofre, atrás do para-choque.',
  'Suporte do radiador, dos faróis e da fechadura do capô.',
  'Deve ser alinhado com o capô e os faróis.',
  'radiador farois fech_capo viga_dianteira');
E('travessa_frontal', 'parafusada', 'Parafusado nas pontas das longarinas e junto aos faróis.');
P('viga_dianteira', 'Viga de impacto dianteira', 'carro',
  'Atrás do para-choque dianteiro.',
  'Absorve batidas leves.',
  'Troque se estiver amassada.',
  'travessa_frontal para_choque_d');
E('viga_dianteira', 'parafusada', 'Parafusada nas pontas das longarinas.');
P('viga_traseira', 'Viga de impacto traseira', 'carro',
  'Atrás do para-choque traseiro.',
  'Absorve batidas leves.',
  'Troque se estiver amassada.',
  'painel_tras para_choque_t');
E('viga_traseira', 'parafusada', 'Parafusada no painel traseiro.');
P('capo', 'Capô', 'carro',
  'Em cima do cofre.',
  'Tampa do motor, com isolante por dentro e a vareta de apoio.',
  'Frestas desiguais: regule nas dobradiças e nos batentes de borracha.',
  'dobr_capo fech_capo grade_torpedo');
E('capo', 'parafusada', 'Duas dobradiças atrás, com dois parafusos em cada.');
P('paralamas', 'Para-lamas dianteiros', 'carro',
  'Dos lados do cofre, sobre as rodas da frente.',
  'Chapas parafusadas com os repetidores do pisca.',
  'Troca é parafusada, sem solda.',
  'piscas_lat farois para_choque_d caixas_roda portas');
E('paralamas', 'parafusada', 'Parafusado na borda de cima (sob o capô), na frente, embaixo e na coluna.');
P('portas', 'Portas dianteiras', 'carro',
  'Dos lados, na frente.',
  'Portas com vidro elétrico, fechadura, retrovisor e alto-falante.',
  'Porta caída: dobradiças. Lubrifique fechadura e limitador.',
  'dobradicas fech_portas vidros_portas maq_vidro retrovisores forros_portas');
E('portas', 'parafusada', 'Duas dobradiças na coluna dianteira e um limitador.');
P('portas_tras', 'Portas traseiras', 'carro',
  'Dos lados, atrás.',
  'Portas com vidro, fechadura e alto-falante.',
  'Lubrifique fechadura e dobradiças.',
  'dobradicas fech_portas vidros_portas_tras maq_vidro_tras forros_portas_tras');
E('portas_tras', 'parafusada', 'Duas dobradiças na coluna central e um limitador.');
P('dobradicas', 'Dobradiças e limitadores das portas', 'carro',
  'Nas colunas, na borda da frente de cada porta.',
  'Seguram e articulam as portas; o limitador segura a porta aberta.',
  'Graxa nos pinos; folga faz a porta cair.',
  'portas portas_tras colunas');
E('dobradicas', 'parafusada', 'Parafusadas na coluna e na porta.');
P('fech_portas', 'Fechaduras, maçanetas e batentes', 'carro',
  'Na borda de trás de cada porta e na coluna.',
  'Fechadura com trava elétrica, maçanetas e batente.',
  'Porta que não fecha de primeira: regule o batente.',
  'portas portas_tras');
E('fech_portas', 'parafusada', 'Fechadura por parafusos na borda da porta; batente parafusado na coluna.');
P('retrovisores', 'Retrovisores externos', 'carro',
  'Nas portas dianteiras.',
  'Espelhos com regulagem.',
  'Espelho solto vibra: troque a lente com suporte.',
  'portas');
E('retrovisores', 'parafusada', 'Três porcas por dentro da porta, sob o acabamento.');
P('tampa_tras', 'Tampa traseira', 'carro',
  'Atrás, presa no fim do teto.',
  'Tampa com vidro, placa, luz de freio, limpador e desembaçador, sustentada por amortecedores a gás.',
  'Tampa que não fica aberta: amortecedores.',
  'dobr_tampa amort_tampa fech_tampa vidro_tras limpador_tras luz_placa luz_freio porta_malas');
E('tampa_tras', 'parafusada', 'Duas dobradiças presas na borda do teto.');
P('dobr_capo', 'Dobradiças do capô', 'carro',
  'Na base do capô, junto ao para-brisa.',
  'Articulam o capô.',
  'Graxa de vez em quando.',
  'capo');
E('dobr_capo', 'parafusada', 'Parafusadas na carroceria e no capô.');
P('dobr_tampa', 'Dobradiças da tampa traseira', 'carro',
  'No fim do teto, sob o forro.',
  'Articulam a tampa traseira.',
  'Vedação ruim nas dobradiças deixa pingar água.',
  'tampa_tras teto');
E('dobr_tampa', 'parafusada', 'Porcas no teto, por dentro, e parafusos na tampa.');
P('amort_tampa', 'Amortecedores da tampa traseira', 'carro',
  'Dos lados da abertura da tampa.',
  'Amortecedores a gás que seguram a tampa aberta.',
  'Troque em par quando a tampa não para aberta.',
  'tampa_tras');
E('amort_tampa', 'parafusada', 'Encaixados em pinos esféricos com trava de mola.');
P('fech_tampa', 'Fechadura da tampa traseira', 'carro',
  'Na borda de baixo da tampa e no painel traseiro.',
  'Fechadura e batente.',
  'Lubrifique; regule o batente se a tampa bater.',
  'tampa_tras painel_tras');
E('fech_tampa', 'parafusada', 'Fechadura parafusada na tampa e batente no painel traseiro.');
P('fech_capo', 'Fechadura do capô', 'carro',
  'Na frente do cofre, no painel frontal.',
  'Trava do capô, aberta pelo cabo dentro da cabine.',
  'Cabo duro: lubrifique.',
  'capo travessa_frontal');
E('fech_capo', 'parafusada', 'Parafusada no painel frontal; o cabo vai até a alavanca na cabine.');
P('maq_vidro', 'Máquinas dos vidros dianteiros', 'carro',
  'Dentro das portas dianteiras.',
  'Motor elétrico e trilhos que sobem e descem o vidro.',
  'Vidro lento: trilho seco ou motor cansado.',
  'vidros_portas portas');
E('maq_vidro', 'parafusada', 'Parafusada no painel interno da porta.');
P('maq_vidro_tras', 'Máquinas dos vidros traseiros', 'carro',
  'Dentro das portas traseiras.',
  'Mecanismo que sobe e desce o vidro de trás.',
  'Lubrifique os trilhos.',
  'vidros_portas_tras portas_tras');
E('maq_vidro_tras', 'parafusada', 'Parafusada no painel interno da porta.');
P('para_brisa', 'Para-brisa', 'carro',
  'Na frente da cabine.',
  'Vidro laminado colado na moldura; faz parte da rigidez da carroceria.',
  'Trinca crescendo: troca.',
  'colunas teto limpador retrovisor_int');
E('para_brisa', 'colada', 'Colado com cordão de poliuretano.');
P('vidro_tras', 'Vidro traseiro', 'carro',
  'Na tampa traseira.',
  'Vidro com desembaçador, colado na tampa.',
  'Fio do desembaçador partido se repara com tinta própria.',
  'tampa_tras limpador_tras');
E('vidro_tras', 'colada', 'Colado na tampa com cordão de poliuretano.');
P('vidros_portas', 'Vidros das portas dianteiras', 'carro',
  'Nas portas dianteiras.',
  'Vidros móveis.',
  'Canaleta ressecada faz o vidro chiar.',
  'portas maq_vidro');
E('vidros_portas', 'encaixada', 'Correm em canaletas de borracha e se prendem à máquina.');
P('vidros_portas_tras', 'Vidros das portas traseiras', 'carro',
  'Nas portas traseiras.',
  'Vidro móvel, com um pedaço fixo atrás da divisória.',
  'Canaleta ressecada faz o vidro chiar.',
  'portas_tras maq_vidro_tras');
E('vidros_portas_tras', 'encaixada', 'Correm em canaletas de borracha e se prendem à máquina.');
P('para_choque_d', 'Para-choque dianteiro', 'carro',
  'Na frente.',
  'Capa plástica com a placa e a grade grande embaixo.',
  'Guias quebradas deixam a ponta solta.',
  'grade grade_inf viga_dianteira farois paralamas');
E('para_choque_d', 'parafusada', 'Parafusos e presilhas em cima, nas caixas de roda e embaixo.');
P('para_choque_t', 'Para-choque traseiro', 'carro',
  'Atrás, sob a tampa.',
  'Capa plástica com a parte de baixo em preto.',
  'Guias quebradas deixam a ponta solta.',
  'viga_traseira lanternas laterais');
E('para_choque_t', 'parafusada', 'Parafusos e presilhas em cima (com a tampa aberta), nas caixas de roda e embaixo.');
P('grade', 'Grade superior', 'carro',
  'Entre os faróis, sob o capô.',
  'Grade estreita com o emblema.',
  'Presilha quebrada deixa a grade solta.',
  'farois capo para_choque_d');
E('grade', 'encaixada', 'Presilhas plásticas por trás.');
P('grade_inf', 'Grade inferior do para-choque', 'carro',
  'Na parte de baixo do para-choque dianteiro.',
  'A entrada de ar grande que alimenta o radiador e o condensador.',
  'Tela quebrada deixa pedras no condensador.',
  'para_choque_d radiador condensador');
E('grade_inf', 'encaixada', 'Encaixada no para-choque.');
P('grade_torpedo', 'Grade do torpedo', 'carro',
  'Na base do para-brisa.',
  'Grade plástica por onde entra o ar da ventilação; cobre o motor do limpador.',
  'Folhas acumuladas entopem o dreno e entra água na cabine.',
  'limpador para_brisa filtro_cabine');
E('grade_torpedo', 'encaixada', 'Presilhas e encaixe sob a borda do para-brisa.');
P('caixas_roda', 'Forros das caixas de roda', 'carro',
  'Dentro dos para-lamas.',
  'Protegem a lataria de pedras e água.',
  'Forro solto raspa no pneu.',
  'paralamas para_choque_d');
E('caixas_roda', 'encaixada', 'Presilhas plásticas na borda e parafusos.');
P('borrachas', 'Borrachas de vedação', 'carro',
  'Em volta das portas, da tampa, do capô e dos vidros.',
  'Vedam contra água, poeira e barulho.',
  'Ressecadas, deixam entrar água e vento.',
  'portas portas_tras tampa_tras capo');
E('borrachas', 'encaixada', 'Encaixadas por pressão nas abas das aberturas.');
};
