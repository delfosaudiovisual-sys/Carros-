/* ===== Honda Civic LX 1.7 2005 (G7): catálogo de peças =====
   P(id, nome, sistema, onde fica, o que faz, manutenção, relacionadas); E(id, tipo de fixação, como é presa). */
(window.CAR_PARTS = window.CAR_PARTS || {})['civic-g7'] = function (P, E) {

/* ---------- MOTOR ---------- */
P('bloco', 'Bloco do motor', 'motor',
  'Centro do cofre, transversal: a correia dentada fica à direita e o câmbio à esquerda.',
  'Estrutura do D17 (1.668 cm³): bloco de alumínio com camisas secas de ferro fundido, onde correm os quatro pistões, e os mancais do virabrequim. Por dentro passam as galerias de óleo e de líquido de arrefecimento.',
  'Sem troca programada. Vazamento de óleo entre bloco e cabeçote, ou água sumindo, merece atenção cedo: superaquecer o alumínio empena o cabeçote.',
  'virabrequim pistoes cabecote carter bomba_agua coxim_dir coxim_cambio sens_ckp');
P('cabecote', 'Cabeçote (SOHC 16V)', 'motor',
  'Em cima do bloco, sob a tampa de válvulas. A admissão fica na frente, voltada para o radiador, e o escape atrás, voltado para o corta-fogo.',
  'Fecha os cilindros e forma as câmaras de combustão. Leva um único comando de válvulas, dois eixos de balancins e 16 válvulas (quatro por cilindro), mais as velas no centro de cada câmara.',
  'Superaquecimento empena. Na remontagem os parafusos são apertados em etapas, com ângulo. Este motor pede regulagem periódica da folga das válvulas.',
  'bloco junta_cab comando balancins valvulas velas coletor_adm coletor_esc termostato sens_ect');
P('junta_cab', 'Junta do cabeçote', 'motor',
  'Entre o bloco e o cabeçote.',
  'Vedação multicamada de aço que segura a pressão da queima e separa os canais de óleo e de água.',
  'Queima com superaquecimento. Sinais: fumaça branca de cheiro doce, água sumindo sem vazamento visível, bolhas no reservatório e óleo com aspecto de maionese.',
  'cabecote bloco vaso');
P('tampa_valv', 'Tampa de válvulas', 'motor',
  'No topo do motor, com as quatro bobinas encaixadas pelo meio.',
  'Cobre o comando e os balancins e segura o óleo que lubrifica a parte de cima. Tem a junta externa e as vedações em volta de cada poço de vela.',
  'As vedações dos poços das velas ressecam e deixam óleo escorrer para dentro do poço: a vela fica encharcada e o motor falha. Troque junta e vedações sempre que abrir.',
  'cabecote bobinas velas respiro tampa_oleo balancins');
P('comando', 'Comando de válvulas', 'motor',
  'Dentro do cabeçote, ao longo do motor; a polia fica na ponta direita e o sensor de fase na ponta esquerda.',
  'Eixo único com os ressaltos que abrem as 16 válvulas pelos balancins. Gira na metade da rotação do virabrequim, sincronizado pela correia dentada. Na LX não há VTEC: o perfil é um só.',
  'Dura a vida do motor com óleo em dia. Correia rompida faz as válvulas baterem nos pistões: o D17 é motor de interferência.',
  'correia_dent polia_comando balancins valvulas cabecote sens_cmp');
P('balancins', 'Eixos de balancins', 'motor',
  'Sob a tampa de válvulas, dos dois lados do comando: um eixo para a admissão e outro para o escape.',
  'Alavancas que levam o movimento do comando até as válvulas. Cada balancim tem parafuso e contraporca para regular a folga.',
  'Folga a frio (motor parado há horas): admissão 0,18 a 0,22 mm e escape 0,23 a 0,27 mm. Folga apertada no escape é comum nesse motor e causa marcha lenta irregular e partida difícil.',
  'comando valvulas cabecote tampa_valv');
P('valvulas', 'Válvulas (16) e molas', 'motor',
  'No cabeçote: duas de admissão na frente e duas de escape atrás, em cada cilindro.',
  'Abrem para a mistura entrar e para os gases saírem. As molas fecham cada válvula depois que o ressalto passa.',
  'Dependem da folga certa e da correia no ponto. Fumaça azul ao acelerar depois de um tempo parado pode ser retentor de válvula gasto.',
  'balancins comando cabecote pistoes coletor_adm coletor_esc');
P('pistoes', 'Pistões (4) e anéis', 'motor',
  'Dentro dos cilindros do bloco.',
  'Recebem o empurrão da combustão e o passam às bielas: 75 mm de diâmetro e 94,4 mm de curso. Os anéis vedam a compressão e raspam o óleo da parede do cilindro.',
  'Anéis gastos causam consumo de óleo, fumaça azul e perda de força. Teste de compressão e de vazamento mostram a saúde deles.',
  'bielas virabrequim valvulas velas bloco');
P('bielas', 'Bielas (4)', 'motor',
  'Entre os pistões e o virabrequim.',
  'Transformam o sobe-e-desce dos pistões no giro do virabrequim.',
  'Batida metálica grave que acompanha a rotação pode ser bronzina de biela: pare o carro e chame o guincho.',
  'pistoes virabrequim bomba_oleo');
P('virabrequim', 'Virabrequim', 'motor',
  'Na base do bloco, atravessando o motor.',
  'Eixo de manivelas girado pelas bielas. Na ponta esquerda leva o volante do motor; na direita, a engrenagem da correia dentada, a bomba de óleo e a polia dos acessórios.',
  'Dura muito com óleo limpo. O retentor da ponta da correia costuma vazar com a idade: troque junto com a correia dentada.',
  'bielas volante_motor polia_vira correia_dent bomba_oleo sens_ckp bloco');
P('carter', 'Cárter', 'motor',
  'Embaixo do motor.',
  'Reservatório do óleo, de chapa, preso com cola de vedação. O bujão de drenagem fica no fundo.',
  'Óleo a cada 10.000 km ou 12 meses (5.000 km em uso severo), cerca de 3,3 L com filtro, sempre conferindo na vareta. Arruela do bujão nova a cada troca.',
  'bomba_oleo filtro_oleo vareta tampa_oleo bloco');
P('bomba_oleo', 'Bomba de óleo', 'motor',
  'Na ponta direita do bloco, atrás da correia dentada, girada direto pelo virabrequim.',
  'Bomba de rotores que suga o óleo do cárter pelo pescador e o empurra sob pressão para o filtro, os mancais e o cabeçote.',
  'Sem troca periódica. Óleo vencido forma borra, entope a tela do pescador e derruba a pressão: luz de óleo acesa.',
  'carter filtro_oleo virabrequim sens_oleo correia_dent');
P('filtro_oleo', 'Filtro de óleo', 'motor',
  'Na frente do bloco, embaixo do coletor de admissão; o acesso é por baixo do carro.',
  'Retém partículas antes de o óleo chegar às partes móveis.',
  'Troque junto com o óleo. Aperto à mão: encoste e dê mais ¾ de volta.',
  'bomba_oleo carter sens_oleo');
P('vareta', 'Vareta de nível do óleo', 'motor',
  'Na frente do motor, à esquerda do coletor, com o cabo amarelo.',
  'Mostra o nível entre as marcas de mínimo e máximo.',
  'Confira com o carro no plano, motor frio ou 3 minutos depois de desligar. Nunca passe do máximo.',
  'carter tampa_oleo');
P('tampa_oleo', 'Tampa de abastecimento de óleo', 'motor',
  'No topo da tampa de válvulas, do lado esquerdo.',
  'Bocal por onde se completa o óleo do motor.',
  'Borra clara por baixo da tampa indica condensação (trajetos curtos) ou água no óleo.',
  'tampa_valv vareta carter');
P('volante_motor', 'Volante do motor', 'motor',
  'Na ponta esquerda do virabrequim, dentro da capa da embreagem.',
  'Disco pesado que suaviza os pulsos das explosões, tem a cremalheira do motor de partida e serve de face de atrito da embreagem.',
  'Revise a face na troca de embreagem. Dentes gastos fazem o motor de partida raspar.',
  'virabrequim embreagem motor_partida');
P('correia_dent', 'Correia dentada', 'motor',
  'Lado direito do motor, atrás das capas pretas e do coxim direito.',
  'Sincroniza o virabrequim com o comando e também gira a bomba d’água.',
  'Troca por quilometragem ou idade, junto com tensor, bomba d’água e retentores. Motor de interferência: se romper, as válvulas batem nos pistões.',
  'polia_comando tensor_dent bomba_agua virabrequim capas_correia comando coxim_dir');
P('tensor_dent', 'Tensor da correia dentada', 'motor',
  'Junto à correia dentada, lado direito, na frente.',
  'Rolamento com mola que mantém a tensão da correia. A tensão final é dada pela mola, com o parafuso solto, depois de girar o motor.',
  'Troque sempre junto com a correia. Chiado de rolamento indica desgaste.',
  'correia_dent bomba_agua');
P('polia_comando', 'Polia do comando', 'motor',
  'Parte alta do lado direito do motor.',
  'Engrenagem dentada que recebe a correia e gira o comando. Tem as marcas de ponto: a palavra UP para cima e as ranhuras alinhadas com a face do cabeçote.',
  'Na troca da correia, revise os dentes e o retentor atrás dela.',
  'comando correia_dent');
P('capas_correia', 'Capas da correia dentada', 'motor',
  'Lado direito do motor.',
  'Protegem a correia de sujeira e água.',
  'Capa quebrada ou faltando deixa entrar sujeira que desgasta a correia antes da hora.',
  'correia_dent');
P('polia_vira', 'Polia do virabrequim', 'motor',
  'Ponta direita do virabrequim, embaixo, atrás da roda dianteira direita.',
  'Puxa a correia de acessórios e tem a marca de ponto do virabrequim.',
  'O parafuso central é muito apertado: soltá-lo exige segurar a polia com ferramenta própria.',
  'virabrequim correia_acess sens_ckp');
P('correia_acess', 'Correia de acessórios', 'motor',
  'Lado direito do motor, por fora das capas.',
  'Correia ranhurada única que leva força do virabrequim ao alternador, ao compressor do ar-condicionado e à bomba da direção hidráulica.',
  'Inspecione em toda revisão (trincas, brilho, chiado na partida ou ao virar o volante parado). Se romper, a bateria para de carregar, a direção fica pesada e o ar para.',
  'polia_vira alternador compressor bomba_dir tensor_acess');
P('tensor_acess', 'Tensor automático da correia de acessórios', 'motor',
  'Lado direito, entre o alternador e o compressor.',
  'Braço com mola que mantém a tensão da correia de acessórios sem regulagem. Tem um indicador de desgaste.',
  'Braço batendo ou indicador fora da faixa: troque o tensor e a correia.',
  'correia_acess');
P('coxim_dir', 'Coxim do motor (lado direito)', 'motor',
  'Lado direito, em cima, preso à longarina perto do reservatório da direção.',
  'Apoio hidráulico que segura o lado da correia e filtra a vibração.',
  'No Civic G7 os coxins cansam com a idade: o motor balança na partida, trepida em marcha lenta e dá tranco ao engatar. Óleo escorrendo do coxim indica que ele rompeu.',
  'bloco monobloco coxim_cambio coxim_diant coxim_tras correia_dent');
P('coxim_cambio', 'Coxim do câmbio (lado esquerdo)', 'motor',
  'Sobre o câmbio, sob a caixa do filtro de ar e perto da bateria.',
  'Segura o lado do câmbio do conjunto motor-câmbio.',
  'Borracha rachada causa batidas ao engatar e vibração na alavanca.',
  'cambio coxim_dir coxim_diant coxim_tras');
P('coxim_diant', 'Coxim dianteiro', 'motor',
  'Embaixo, na frente do motor, sobre a travessa dianteira do subchassi.',
  'Segura o conjunto contra o balanço para a frente nas freadas e nas reduções.',
  'Gasto, bate ao tirar o pé do acelerador e ao frear forte.',
  'subchassi coxim_tras coxim_dir');
P('coxim_tras', 'Coxim traseiro', 'motor',
  'Embaixo, atrás do motor, na travessa traseira do subchassi.',
  'Segura o conjunto contra o torque das arrancadas.',
  'É o que mais sofre: gasto, o carro dá tranco ao arrancar e ao trocar de marcha, e a alavanca balança.',
  'subchassi coxim_diant coxim_dir');
P('respiro', 'Válvula PCV e respiro do cárter', 'motor',
  'Na frente do motor, entre o bloco e o coletor de admissão.',
  'A válvula PCV deixa os vapores de óleo saírem do motor para a admissão, onde são queimados, na medida certa para cada regime.',
  'Válvula presa ou mangueira rachada deixam a marcha lenta irregular e aumentam o consumo de óleo. É barata: troque por volta de 40.000 km.',
  'tampa_valv coletor_adm');

/* ---------- AR E INJEÇÃO ---------- */
P('tomada_ar', 'Tomada de ar', 'ar',
  'Atrás da travessa frontal, à esquerda.',
  'Capta ar fresco da frente do carro e o leva à caixa do filtro.',
  'Não pode estar amassada nem entupida de folhas. Ao lavar o motor, cuidado: a água entra por aqui.',
  'caixa_filtro travessa_frontal');
P('caixa_filtro', 'Caixa do filtro de ar', 'ar',
  'Lado esquerdo do cofre, sobre o câmbio e atrás da bateria.',
  'Abriga o filtro e forma a câmara de ar limpo.',
  'As presilhas precisam fechar bem: uma fresta deixa entrar poeira sem filtrar.',
  'tomada_ar filtro_ar duto_ar coxim_cambio');
P('filtro_ar', 'Filtro de ar', 'ar',
  'Dentro da caixa do filtro.',
  'Segura poeira e areia antes que o ar chegue ao motor.',
  'Troca a cada 20.000 km, antes em estrada de terra. Filtro sujo tira força e aumenta o consumo.',
  'caixa_filtro duto_ar tbi');
P('duto_ar', 'Duto de admissão', 'ar',
  'Da caixa do filtro até o corpo de borboleta, curto, do lado esquerdo.',
  'Leva o ar filtrado até a borboleta. Tem o sensor de temperatura do ar.',
  'Rachaduras depois do filtro deixam entrar ar sujo e não medido.',
  'filtro_ar tbi sens_iat');
P('tbi', 'Corpo de borboleta', 'ar',
  'Na ponta esquerda do coletor de admissão.',
  'Válvula que dosa quanto ar entra, aberta pelo cabo do acelerador. Tem o sensor de posição (TPS) e a válvula de marcha lenta acoplados.',
  'Acumula carvão e vapor de óleo; a marcha lenta oscila e o motor morre ao parar. Limpe com produto próprio, sem raspar.',
  'cabo_acel iac tps coletor_adm duto_ar sens_map');
P('iac', 'Válvula de marcha lenta (IAC)', 'ar',
  'Presa no corpo de borboleta, por baixo.',
  'Deixa passar um pouco de ar por fora da borboleta fechada para a central controlar a marcha lenta, inclusive quando o ar-condicionado liga.',
  'Defeito muito comum no Civic dessa época: suja de carvão e a marcha lenta sobe e desce, ou o motor morre ao ligar o ar. Limpeza resolve na maioria das vezes.',
  'tbi ecu sens_ect compressor');
P('cabo_acel', 'Cabo do acelerador', 'ar',
  'Do pedal até o corpo de borboleta, pelo corta-fogo.',
  'Abre a borboleta mecanicamente quando você pisa.',
  'Folga demais atrasa a resposta; cabo preso deixa o motor acelerado. Lubrifique e regule a folga na ponta da borboleta.',
  'pedal_acel tbi');
P('pedal_acel', 'Pedal do acelerador', 'ar',
  'Assoalho do motorista, à direita.',
  'Puxa o cabo que abre a borboleta.',
  'Rangido ou pedal pesado: lubrifique a articulação e o cabo.',
  'cabo_acel');
P('coletor_adm', 'Coletor de admissão', 'ar',
  'Na frente do motor, entre o bloco e o radiador, com o plenum em cima e quatro dutos descendo até o cabeçote.',
  'Distribui o ar para os 4 cilindros. Recebe a galeria, os bicos, o sensor de pressão (MAP), a purga do cânister e o vácuo do servo-freio.',
  'Juntas ressecadas e mangueiras de vácuo soltas causam entrada falsa de ar e marcha lenta alta.',
  'tbi galeria bicos sens_map purga respiro mang_vacuo cabecote');
P('galeria', 'Galeria de combustível', 'ar',
  'Na frente do motor, sobre os bicos, presa ao coletor.',
  'Tubo que distribui combustível pressurizado aos quatro bicos. Tem um amortecedor de pulsação na ponta.',
  'Na remontagem, anéis novos nos bicos. Cheiro de combustível no cofre pede inspeção imediata.',
  'bicos linhas_comb coletor_adm');
P('bicos', 'Bicos injetores (4)', 'ar',
  'Um por cilindro, na base dos dutos do coletor, apontados para as válvulas de admissão.',
  'Pulverizam a gasolina. A central decide a duração de cada pulso, na sequência de ignição.',
  'Limpeza e teste de vazão por volta de 40.000 km. Bico pingando afoga a partida e aumenta o consumo.',
  'galeria coletor_adm ecu valvulas');

/* ---------- COMBUSTÍVEL ---------- */
P('tanque', 'Tanque de combustível (50 L)', 'comb',
  'Embaixo do banco traseiro, na frente da suspensão traseira.',
  'Guarda a gasolina num tanque plástico. O módulo da bomba, com filtro e regulador, fica dentro dele.',
  'Evite rodar na reserva: a bomba é resfriada pelo próprio combustível e puxa a sujeira do fundo.',
  'bomba_comb boia bocal linhas_comb canister');
P('bomba_comb', 'Módulo da bomba de combustível', 'comb',
  'Dentro do tanque; o acesso é por uma tampa sob o assento traseiro.',
  'Bomba elétrica com o filtro de combustível e o regulador de pressão no mesmo conjunto: o sistema é sem retorno, com uma linha só até o motor. Ao ligar a chave ela funciona por dois segundos.',
  'Sinais de cansaço: demora para pegar, falha em subida ou em alta. Como o filtro fica dentro do módulo, ele não tem troca separada nesse carro.',
  'tanque boia linhas_comb ecu caixa_fus_painel');
P('boia', 'Boia (sensor de nível)', 'comb',
  'No módulo da bomba, dentro do tanque.',
  'Mede o nível do tanque para o marcador do painel.',
  'Marcador maluco ou parado costuma ser a pista resistiva da boia gasta.',
  'bomba_comb tanque quadro');
P('linhas_comb', 'Tubulação de combustível', 'comb',
  'Corre por baixo do assoalho, do lado direito, até o cofre.',
  'Leva a gasolina do tanque até a galeria. Só há a linha de ida.',
  'Engates rápidos e trechos de borracha ressecam. Qualquer cheiro de combustível merece inspeção.',
  'bomba_comb galeria tanque');
P('bocal', 'Bocal, tampa e portinhola do combustível', 'comb',
  'Lateral traseira direita.',
  'Entrada de combustível com tampa vedada e portinhola aberta por alavanca ao lado do banco do motorista.',
  'Tampa mal vedada solta vapor e pode acender a luz da injeção por vazamento no sistema de vapores.',
  'tanque canister laterais');
P('canister', 'Cânister (filtro de carvão)', 'comb',
  'Sob o assoalho, perto do tanque, do lado esquerdo.',
  'Absorve os vapores de gasolina do tanque para não irem para o ar.',
  'Não complete o tanque depois do primeiro clique da bomba do posto: combustível líquido encharca o carvão.',
  'tanque purga bocal');
P('purga', 'Válvula de purga do cânister', 'comb',
  'No coletor de admissão, do lado direito.',
  'A central abre esta válvula para o motor queimar os vapores guardados no cânister.',
  'Travada aberta, deixa a marcha lenta ruim e dificulta a partida logo depois de abastecer.',
  'canister coletor_adm ecu');

/* ---------- IGNIÇÃO E SENSORES ---------- */
P('ecu', 'Central de injeção (PCM)', 'ign',
  'Dentro da cabine, atrás do acabamento lateral do lado do passageiro, perto do assoalho (posição aproximada no modelo).',
  'O cérebro do motor (PGM-FI): lê os sensores e comanda bicos, bobinas, marcha lenta, bomba de combustível, ventoinhas e a embreagem do compressor do ar.',
  'Fica dentro da cabine, protegida. Água no assoalho do passageiro (dreno do ar entupido) é o que mais ameaça essa central.',
  'sens_ckp sens_cmp sens_ect sens_map sens_iat tps sonda sonda2 bicos bobinas iac ign_chave');
P('bobinas', 'Bobinas de ignição (4)', 'ign',
  'Encaixadas no topo do motor, uma sobre cada vela, atravessando a tampa de válvulas.',
  'Cada cilindro tem a sua: transformam os 12 V em milhares de volts direto na vela, sem cabos.',
  'Falha de bobina é comum no D17: o motor engasga, treme e a luz da injeção pisca. Trocando a bobina de lugar dá para ver se a falha muda de cilindro.',
  'velas ecu tampa_valv chicote');
P('velas', 'Velas de ignição (4)', 'ign',
  'No centro do cabeçote, no fundo de cada poço, embaixo das bobinas.',
  'Soltam a faísca que inflama a mistura em cada cilindro.',
  'Vela comum: troca por volta de 40.000 km; de platina ou irídio, bem mais. Rosca no alumínio: aperte com torquímetro e motor frio.',
  'bobinas cabecote pistoes tampa_valv');
P('sens_ckp', 'Sensor de rotação (CKP)', 'ign',
  'Na frente do bloco, lado direito, lendo a roda dentada atrás da polia do virabrequim.',
  'Informa rotação e posição do virabrequim. Sem ele a central não injeta nem dá faísca.',
  'Com defeito: o motor gira e não pega, ou apaga quando esquenta, e o conta-giros fica parado na partida.',
  'virabrequim polia_vira ecu');
P('sens_cmp', 'Sensor de fase (CMP/TDC)', 'ign',
  'Na ponta esquerda do cabeçote, lendo o comando de válvulas.',
  'Diz à central qual cilindro está em compressão, para a injeção sequencial e a ignição de cada bobina.',
  'Com defeito o motor pode demorar a pegar e gravar código de falha de sincronismo.',
  'comando ecu');
P('sens_ect', 'Sensor de temperatura da água (ECT)', 'ign',
  'Na saída d’água do cabeçote, lado esquerdo.',
  'Informa a temperatura do motor à central: com o motor frio ela enriquece a mistura e acelera a marcha lenta.',
  'Leitura errada faz o carro beber muito e a marcha lenta ficar alta. É barato e fácil de conferir com scanner.',
  'termostato ecu quadro ventoinha');
P('sens_map', 'Sensor de pressão do coletor (MAP)', 'ign',
  'No topo do coletor de admissão.',
  'Mede o vácuo no coletor; com ele a central calcula quanto ar o motor aspira.',
  'Entrada falsa de ar engana o sensor. Com motor desligado e chave ligada, deve ler a pressão do ar ambiente.',
  'coletor_adm ecu tbi');
P('sens_iat', 'Sensor de temperatura do ar (IAT)', 'ign',
  'No duto de admissão, antes da borboleta.',
  'Informa a temperatura do ar que entra para a central corrigir a mistura.',
  'Sujo de óleo, lê errado. Limpe só com produto para sensores.',
  'duto_ar ecu');
P('tps', 'Sensor de posição da borboleta (TPS)', 'ign',
  'Na lateral do corpo de borboleta.',
  'Informa à central quanto a borboleta está aberta.',
  'Com defeito, o carro dá trancos ao acelerar devagar e a marcha lenta varia.',
  'tbi ecu');
P('sonda', 'Sonda lambda dianteira', 'ign',
  'No coletor de escape, antes do catalisador.',
  'Mede o oxigênio que sobra no escape para a central corrigir a mistura a cada instante.',
  'Lenta ou contaminada por óleo: consumo alto e luz da injeção. Troca por volta de 100.000 km ou quando o scanner apontar.',
  'coletor_esc catalisador ecu');
P('sonda2', 'Sonda lambda traseira', 'ign',
  'Depois do catalisador.',
  'Vigia se o catalisador está funcionando, comparando com a sonda dianteira.',
  'Quando o catalisador perde eficiência a central grava falha (P0420) e acende a luz da injeção.',
  'catalisador ecu');
P('sens_oleo', 'Interruptor de pressão de óleo', 'ign',
  'Na frente do bloco, perto do filtro de óleo.',
  'Acende a luz vermelha de óleo quando a pressão cai demais.',
  'Luz de óleo acesa com o motor ligado: desligue na hora e verifique o nível.',
  'filtro_oleo bomba_oleo quadro');
P('sens_vss', 'Sensor de velocidade (VSS)', 'ign',
  'No alto do câmbio.',
  'Mede a velocidade para o velocímetro, o hodômetro e a central.',
  'Com defeito, o velocímetro para e a marcha lenta oscila ao desacelerar.',
  'cambio quadro ecu');

/* ---------- ARREFECIMENTO ---------- */
P('radiador', 'Radiador', 'arref',
  'Na frente do carro, atrás do condensador do ar-condicionado.',
  'Troca o calor do líquido com o ar que atravessa a frente do carro. Tem tanques plásticos em cima e embaixo e a tampa de pressão no próprio radiador.',
  'Tanques plásticos trincam com a idade. Use o aditivo da Honda (azul, pronto para uso) ou equivalente sem silicato, na proporção certa.',
  'tampa_rad ventoinha vent_cond mang_sup mang_inf vaso condensador');
P('tampa_rad', 'Tampa do radiador', 'arref',
  'No topo do radiador, lado esquerdo.',
  'Mantém o circuito pressurizado (sobe a temperatura de fervura) e manda o excesso para o reservatório.',
  'Nunca abra quente. Tampa com mola cansada deixa o líquido ferver e sumir; é barata.',
  'radiador vaso');
P('ventoinha', 'Ventoinha do radiador', 'arref',
  'Atrás do radiador, do lado esquerdo.',
  'Puxa ar pelo radiador com o carro parado ou devagar. Liga pela temperatura do motor.',
  'Se não ligar, a temperatura sobe no trânsito. Relé, interruptor térmico e conectores oxidam.',
  'radiador sens_ect ecu caixa_fus_motor');
P('vaso', 'Reservatório de expansão', 'arref',
  'Canto dianteiro direito do cofre, o reservatório translúcido (posição aproximada no modelo).',
  'Recebe o líquido que dilata e o devolve quando o motor esfria.',
  'Confira o nível com o motor frio, entre MIN e MAX. Nunca confunda com o reservatório do lavador ou da direção.',
  'radiador tampa_rad');
P('termostato', 'Válvula termostática', 'arref',
  'Na ponta esquerda do motor, na entrada da mangueira inferior do radiador.',
  'Mantém o líquido circulando só no motor até ele esquentar e então libera o fluxo para o radiador.',
  'Travada aberta: o motor demora a esquentar, o ponteiro fica baixo e o aquecimento é fraco. Travada fechada: superaquecimento.',
  'mang_inf radiador sens_ect bomba_agua');
P('bomba_agua', 'Bomba d’água', 'arref',
  'Lado direito do motor, atrás das capas; gira com a correia dentada.',
  'Faz o líquido circular pelo motor e pelo radiador.',
  'Vazamento pelo furo de alívio ou ruído de rolamento pedem troca. Faça junto com a correia dentada.',
  'correia_dent bloco termostato');
P('mang_sup', 'Mangueira superior do radiador', 'arref',
  'Da saída d’água do cabeçote, à esquerda, até o topo do radiador.',
  'Leva o líquido quente do motor ao radiador.',
  'Aperte com a mão, motor frio: mole, rachada ou estufada, troque.',
  'radiador cabecote');
P('mang_inf', 'Mangueira inferior do radiador', 'arref',
  'Da parte baixa do radiador até a carcaça da válvula termostática.',
  'Devolve ao motor o líquido já resfriado.',
  'Mesma inspeção da mangueira superior.',
  'radiador termostato');
P('mang_aquec', 'Mangueiras do aquecedor', 'arref',
  'Do motor até os tubos do corta-fogo.',
  'Levam água quente ao radiador do aquecedor, dentro da caixa de ar.',
  'Vazamento pode aparecer como cheiro adocicado na cabine ou vidro embaçando.',
  'rad_aquec corta_fogo cabecote');
P('rad_aquec', 'Radiador do aquecedor', 'arref',
  'Dentro da caixa de ar, atrás do painel.',
  'Pequeno radiador que aquece o ar da cabine com a água do motor.',
  'Vazamento molha o tapete do passageiro e embaça o para-brisa.',
  'mang_aquec caixa_ar vent_interno');

/* ---------- AR-CONDICIONADO ---------- */
P('compressor', 'Compressor do ar-condicionado', 'clima',
  'Na frente do motor, embaixo, do lado direito, puxado pela correia de acessórios.',
  'Comprime o gás R-134a. Uma embreagem eletromagnética na polia liga e desliga o compressor conforme a central e o pressostato pedem.',
  'Ponto fraco conhecido do Civic dessa geração: a folga da embreagem do compressor aumenta, ela para de acoplar e o ar deixa de gelar. Muitas vezes se resolve regulando a folga ou trocando só a embreagem.',
  'correia_acess tubos_ac condensador pressostato ecu');
P('condensador', 'Condensador', 'clima',
  'Na frente do radiador, logo atrás do para-choque.',
  'Radiador do ar-condicionado: o gás quente que sai do compressor perde calor aqui e vira líquido.',
  'Colmeia suja ou amassada faz o ar gelar pouco no trânsito. Lave com água de baixa pressão, por trás.',
  'compressor filtro_secador vent_cond tubos_ac radiador');
P('vent_cond', 'Ventoinha do condensador', 'clima',
  'Atrás do radiador, do lado direito.',
  'Liga junto com o ar-condicionado para tirar calor do condensador, e ajuda o radiador.',
  'Se não ligar, o ar gela pouco parado e a pressão sobe demais.',
  'condensador radiador caixa_fus_motor');
P('filtro_secador', 'Filtro secador', 'clima',
  'Na lateral direita do condensador.',
  'Retém umidade e partículas do circuito.',
  'Troque sempre que o circuito for aberto para reparo: ele satura de umidade.',
  'condensador tubos_ac pressostato');
P('pressostato', 'Pressostato', 'clima',
  'Na linha de alta pressão, perto do filtro secador.',
  'Desliga o compressor se a pressão ficar baixa demais (falta de gás) ou alta demais.',
  'Ar que não liga pode ser só falta de gás: o pressostato impede o compressor de girar sem carga.',
  'filtro_secador compressor tubos_ac');
P('tubos_ac', 'Tubulações do ar-condicionado', 'clima',
  'Do compressor ao condensador, do condensador à válvula de expansão e da caixa de ar de volta ao compressor.',
  'Linhas de alumínio com trechos de borracha: a de alta é fina e esquenta; a de baixa é grossa e fica gelada com o ar ligado.',
  'Vazamento deixa óleo e sujeira nas conexões. Os anéis de vedação ressecam com o tempo.',
  'compressor condensador valv_exp evaporador filtro_secador');
P('valv_exp', 'Válvula de expansão', 'clima',
  'No corta-fogo, lado direito, onde os tubos entram na caixa de ar.',
  'Restringe a passagem do gás líquido para ele expandir e gelar dentro do evaporador.',
  'Travada, o evaporador congela ou o ar fica morno com as pressões fora do normal.',
  'tubos_ac evaporador');
P('evaporador', 'Evaporador', 'clima',
  'Dentro da caixa de ar, do lado do passageiro, atrás do porta-luvas.',
  'Radiador frio: o gás expande aqui, rouba calor do ar que passa e a umidade condensa e sai pelo dreno embaixo do carro.',
  'Cheiro de mofo ao ligar o ar é fungo no evaporador: higienize uma vez por ano. Dreno entupido molha o tapete.',
  'valv_exp caixa_ar vent_interno filtro_cabine');
P('filtro_cabine', 'Filtro de ar da cabine', 'clima',
  'Atrás do porta-luvas, na entrada do ventilador.',
  'Filtra poeira e pólen do ar que entra na cabine.',
  'Troque a cada 20.000 km ou uma vez por ano. Filtro entupido deixa o ventilador fraco e o ar com cheiro.',
  'vent_interno evaporador caixa_ar');
P('vent_interno', 'Ventilador interno', 'clima',
  'Atrás do porta-luvas, embaixo do painel do lado do passageiro.',
  'Sopra o ar pela caixa de ar até os difusores.',
  'Se só funciona na velocidade máxima, o resistor queimou.',
  'caixa_ar comandos_clima filtro_cabine');
P('caixa_ar', 'Caixa de ar e dutos', 'clima',
  'Atrás do painel, no centro.',
  'Mistura ar frio (evaporador) e quente (radiador do aquecedor) e distribui pelos difusores.',
  'Portinholas presas deixam o ar saindo sempre pelo mesmo lugar ou na temperatura errada.',
  'evaporador rad_aquec vent_interno comandos_clima painel');
P('comandos_clima', 'Comandos do ar e da ventilação', 'clima',
  'No centro do painel, embaixo do rádio.',
  'Temperatura, velocidade do ventilador, direção do ar, recirculação e o botão A/C.',
  'Botão A/C acende e o compressor não liga: veja o fusível, o relé e a folga da embreagem do compressor.',
  'vent_interno caixa_ar compressor');

/* ---------- ESCAPAMENTO ---------- */
P('coletor_esc', 'Coletor de escape', 'esc',
  'Atrás do motor, voltado para o corta-fogo.',
  'Junta os gases quentes dos 4 cilindros e os leva direto ao catalisador, logo embaixo.',
  'Trincas e juntas queimadas fazem estalos com o motor frio. Porcas novas na remontagem.',
  'cabecote sonda catalisador protetor');
P('protetor', 'Protetores de calor do coletor', 'esc',
  'Em volta do coletor e do catalisador.',
  'Chapas que protegem as peças vizinhas do calor.',
  'Parafuso solto faz barulho de lata vibrando.',
  'coletor_esc catalisador');
P('catalisador', 'Catalisador', 'esc',
  'Logo abaixo do coletor, atrás do motor.',
  'Transforma CO, HC e NOx em gases menos nocivos. Fica perto do motor para esquentar rápido.',
  'Falha de ignição e mistura rica derretem a colmeia: perda de força, cheiro de ovo podre e luz da injeção (P0420).',
  'coletor_esc sonda sonda2 tubo_diant');
P('tubo_diant', 'Tubo dianteiro com junta flexível', 'esc',
  'Sob o motor e o túnel, do catalisador até o silencioso intermediário.',
  'Leva os gases para trás; a malha flexível deixa o motor balançar sem trincar o escape.',
  'A malha sofre mais quando os coxins estão gastos; vazamento aqui vira ronco.',
  'catalisador silenc_inter coxins_esc coxim_tras');
P('silenc_inter', 'Silencioso intermediário', 'esc',
  'No túnel central, sob o assoalho.',
  'Primeira etapa de redução do ruído.',
  'Trajetos curtos deixam água dentro, que enferruja a peça por dentro.',
  'tubo_diant tubo_tras');
P('tubo_tras', 'Tubo traseiro', 'esc',
  'Do silencioso intermediário até o silencioso traseiro, passando sobre a travessa traseira.',
  'Leva os gases até o fim do carro.',
  'Corrosão nas emendas e batidas por baixo.',
  'silenc_inter silenc_tras coxins_esc');
P('silenc_tras', 'Silencioso traseiro e ponteira', 'esc',
  'Traseira esquerda, atrás do eixo, sob o porta-malas.',
  'Abafa o ruído final e direciona os gases para fora.',
  'Leia a fumaça: azul é óleo, branca persistente é água, preta é mistura rica.',
  'tubo_tras coxins_esc');
P('coxins_esc', 'Coxins do escapamento', 'esc',
  'Borrachas penduradas sob o carro.',
  'Prendem o escapamento à carroceria e absorvem a vibração.',
  'Borracha rompida faz o escapamento bater no assoalho.',
  'tubo_diant tubo_tras silenc_tras monobloco');

/* ---------- ELÉTRICA ---------- */
P('bateria', 'Bateria', 'ele',
  'Canto dianteiro esquerdo do cofre.',
  'Fornece a energia da partida e alimenta o carro com o motor desligado.',
  'Teste a cada 6 meses; dura de 2 a 4 anos. Tenha o código do rádio antes de desligar: alguns rádios originais pedem código.',
  'cabos_bat alternador motor_partida caixa_fus_motor');
P('cabos_bat', 'Cabos da bateria e aterramentos', 'ele',
  'Da bateria ao motor de partida, à caixa de fusíveis e à carroceria.',
  'Conduzem a corrente da partida; o negativo fecha o circuito pela carroceria e pelo câmbio.',
  'Terminal oxidado ou frouxo causa clique na partida e painel apagando. Limpe, aperte e proteja com vaselina.',
  'bateria motor_partida alternador caixa_fus_motor');
P('caixa_fus_motor', 'Caixa de fusíveis e relés do motor', 'ele',
  'Lado esquerdo do cofre, atrás da bateria, junto ao para-lama.',
  'Fusíveis e relés de potência: ventoinhas, embreagem do compressor, injeção, faróis.',
  'O relé da embreagem do compressor e o das ventoinhas são suspeitos comuns quando o ar não liga.',
  'bateria chicote ventoinha vent_cond compressor ecu caixa_fus_painel');
P('caixa_fus_painel', 'Caixa de fusíveis do painel', 'ele',
  'Sob o painel, lado do motorista, junto à lateral.',
  'Fusíveis dos circuitos internos: injeção, bomba de combustível, rádio, vidros, luzes internas.',
  'Fusível queimado se troca por outro de mesmo valor; se queimar de novo, procure curto.',
  'bateria caixa_fus_motor ign_chave bomba_comb chicote');
P('alternador', 'Alternador', 'ele',
  'Frente direita do motor, em cima.',
  'Gera energia com o motor ligado e recarrega a bateria.',
  'Luz da bateria acesa com o motor ligado: não está carregando. Tensão normal entre 13,8 e 14,6 V com o motor ligado.',
  'correia_acess bateria cabos_bat');
P('motor_partida', 'Motor de partida', 'ele',
  'Atrás do motor, junto ao câmbio.',
  'Motor elétrico que gira o motor pelo volante até ele pegar.',
  'Clique seco sem girar pode ser bateria fraca, cabo ruim, solenoide ou escovas gastas.',
  'bateria cabos_bat volante_motor ign_chave');
P('chicote', 'Chicote elétrico', 'ele',
  'Espalhado pelo carro; o do motor passa por cima do cabeçote.',
  'Feixe de fios e conectores que liga sensores, atuadores e módulos.',
  'Conectores do motor oxidam com o calor e a lavagem: surgem defeitos que vão e voltam.',
  'ecu caixa_fus_motor caixa_fus_painel bobinas');
P('farois', 'Faróis', 'ele',
  'Cantos dianteiros.',
  'Farol baixo, alto e luz de posição, com o pisca embutido.',
  'Lente amarelada ilumina menos e pede polimento. Regule o facho depois de trocar a lâmpada.',
  'comutadores caixa_fus_motor para_choque_d');
P('lanternas', 'Lanternas traseiras', 'ele',
  'Cantos traseiros, na lateral.',
  'Luz de posição, freio, seta e ré.',
  'As lâmpadas se trocam por dentro do porta-malas, tirando o acabamento lateral.',
  'luz_freio pedal_freio laterais');
P('piscas_lat', 'Repetidores laterais', 'ele',
  'Nos para-lamas dianteiros.',
  'Mostram a seta para quem está ao lado.',
  'Lâmpada pequena de encaixe; a lente sai empurrando para a frente.',
  'comutadores paralamas');
P('luz_freio', 'Luz de freio alta', 'ele',
  'Dentro do carro, sobre a prateleira traseira, na base do vidro traseiro.',
  'Terceira luz de freio, bem visível para quem vem atrás.',
  'Acende junto com as lanternas pelo interruptor do pedal.',
  'lanternas pedal_freio vidro_tras');
P('luz_placa', 'Luzes da placa', 'ele',
  'No para-choque traseiro, acima da placa.',
  'Iluminam a placa traseira.',
  'Obrigatórias; as lâmpadas são pequenas e baratas.',
  'para_choque_t');
P('buzina', 'Buzina', 'ele',
  'Atrás do para-choque dianteiro, à esquerda.',
  'Alerta sonoro.',
  'Fica exposta à água; o conector oxida.',
  'comutadores airbag_mot caixa_fus_motor');
P('limpador', 'Limpador do para-brisa', 'ele',
  'Motor na base do para-brisa, sob a grade do torpedo.',
  'O motor move as varetas que balançam os dois braços.',
  'Palhetas uma vez por ano. Folhas no torpedo entopem o dreno e a água vai para a cabine.',
  'comutadores para_brisa lavador grade_torpedo');
P('lavador', 'Reservatório e bomba do lavador', 'ele',
  'Atrás do para-choque dianteiro, do lado direito; o bocal azul fica no cofre.',
  'Esguicha água no para-brisa.',
  'Água com o aditivo próprio; detergente resseca as borrachas.',
  'limpador');
P('ign_chave', 'Comutador de ignição e imobilizador', 'ele',
  'Na coluna de direção.',
  'Liga os circuitos e aciona a partida. Uma antena em volta do tambor lê o chip da chave e autoriza a central.',
  'Luz do imobilizador piscando e motor que não pega: chave não reconhecida. Teste a reserva.',
  'ecu motor_partida coluna caixa_fus_painel');
P('comutadores', 'Chaves de seta, faróis e limpador', 'ele',
  'Atrás do volante.',
  'Comandam setas, faróis, lavador e limpador.',
  'Mau contato faz luzes acenderem ou piscarem fora de hora.',
  'volante_dir limpador farois');

/* ---------- TRANSMISSÃO ---------- */
P('cambio', 'Câmbio manual de 5 marchas', 'trans',
  'Lado esquerdo do motor.',
  'Cinco marchas sincronizadas e ré. O diferencial fica na mesma carcaça e usa o mesmo óleo.',
  'Use só o fluido de câmbio manual da Honda (MTF) ou equivalente específico: óleo comum de engrenagem deixa as marchas duras, principalmente a frio. Cerca de 1,5 L na troca.',
  'embreagem diferencial cabos_cambio semieixos coxim_cambio sens_vss cil_emb_aux');
P('diferencial', 'Diferencial', 'trans',
  'Na parte de trás e de baixo do câmbio, alinhado com as rodas.',
  'Divide a força entre as duas rodas da frente e deixa cada uma girar numa velocidade nas curvas.',
  'Usa o mesmo óleo do câmbio. Ronco que muda em curva pode ser rolamento do diferencial ou da roda.',
  'cambio semieixos');
P('embreagem', 'Embreagem (disco e platô)', 'trans',
  'Entre o volante do motor e o câmbio.',
  'Liga e desliga o motor do câmbio para arrancar e trocar de marcha.',
  'Patinando (giro sobe e o carro não acompanha) ou ponto de acoplamento muito alto: disco gasto. Não descanse o pé no pedal.',
  'volante_motor rol_emb cambio cil_emb_aux');
P('rol_emb', 'Rolamento e garfo da embreagem', 'trans',
  'Dentro da capa da embreagem.',
  'O garfo, empurrado pelo cilindro auxiliar, leva o rolamento contra o platô.',
  'Chiado com o pedal pisado é rolamento. Troque junto com o kit.',
  'embreagem cil_emb_aux');
P('cil_emb_mestre', 'Cilindro-mestre da embreagem', 'trans',
  'No corta-fogo, lado do motorista, ao lado do servo-freio, com o reservatório pequeno.',
  'Transforma o movimento do pedal em pressão hidráulica. Usa fluido de freio DOT 3 ou DOT 4.',
  'Pedal que fica no fundo ou volta devagar: vazamento ou ar no circuito. Troque o fluido junto com o do freio.',
  'pedal_emb tubo_emb cil_emb_aux reserv_freio');
P('cil_emb_aux', 'Cilindro auxiliar da embreagem', 'trans',
  'No alto do câmbio, na frente.',
  'Recebe a pressão e empurra o garfo da embreagem.',
  'Umidade na coifa é vazamento interno. Tem o parafuso de sangria.',
  'tubo_emb rol_emb cambio');
P('tubo_emb', 'Tubulação da embreagem', 'trans',
  'Do cilindro-mestre ao cilindro auxiliar, com um trecho flexível.',
  'Leva o fluido sob pressão.',
  'Flexível rachado ou estufado deve ser trocado; depois, sangre o circuito.',
  'cil_emb_mestre cil_emb_aux');
P('pedal_emb', 'Pedal da embreagem', 'trans',
  'Assoalho do motorista, à esquerda.',
  'Aciona o cilindro-mestre da embreagem.',
  'Bucha gasta dá folga e rangido.',
  'cil_emb_mestre');
P('semieixos', 'Semieixos e homocinéticas', 'trans',
  'Do câmbio até as rodas dianteiras.',
  'Levam a força às rodas mesmo com a suspensão subindo e a direção virando. As juntas homocinéticas nas pontas são protegidas por coifas.',
  'Coifa rasgada perde a graxa e a junta passa a estalar em curva acelerando. Olhe as coifas em toda revisão.',
  'diferencial mangas cambio');
P('cabos_cambio', 'Cabos de engate', 'trans',
  'Do câmbio até a alavanca, pelo corta-fogo e pelo túnel.',
  'Dois cabos: um escolhe o plano das marchas e o outro engata.',
  'Cabo ressecado deixa as trocas duras e imprecisas; ponta gasta dá folga na alavanca.',
  'alavanca cambio');
P('alavanca', 'Alavanca de câmbio', 'trans',
  'Console central.',
  'Seleciona as marchas pelos cabos.',
  'Folga excessiva: revise as buchas da base, as pontas dos cabos e os coxins.',
  'cabos_cambio console');

/* ---------- FREIOS ---------- */
P('pedal_freio', 'Pedal do freio', 'freio',
  'Assoalho do motorista, no centro.',
  'Aciona o servo-freio; o interruptor do pedal acende as luzes de freio.',
  'Pedal baixo ou esponjoso: ar no sistema, fluido velho ou vazamento.',
  'servo luz_freio lanternas');
P('servo', 'Servo-freio', 'freio',
  'No corta-fogo, lado do motorista.',
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
  'Guarda o fluido DOT 3 ou DOT 4.',
  'Troca a cada 3 anos (fluido absorve água). O nível desce devagar com o desgaste das pastilhas; queda rápida é vazamento.',
  'cil_mestre cil_emb_mestre');
P('tubos_freio', 'Tubulações e flexíveis de freio', 'freio',
  'Do cilindro-mestre até cada roda.',
  'Levam o fluido sob pressão.',
  'Flexível rachado ou estufado deve ser trocado.',
  'cil_mestre pincas tambores');
P('pincas', 'Pinças de freio dianteiras', 'freio',
  'Nas rodas dianteiras, abraçando os discos.',
  'Pinça flutuante de um pistão que aperta as pastilhas contra o disco.',
  'Pinos-guia secos ou travados causam desgaste irregular e carro puxando. Lubrifique com graxa própria.',
  'pastilhas discos tubos_freio mangas');
P('pastilhas', 'Pastilhas de freio', 'freio',
  'Dentro das pinças dianteiras.',
  'Material de atrito que freia o disco. Têm uma lingueta que chia quando chegam ao fim.',
  'Olhe a cada 10.000 km e troque com menos de 3 mm de material.',
  'pincas discos');
P('discos', 'Discos de freio ventilados', 'freio',
  'Presos aos cubos dianteiros, atrás das rodas.',
  'Giram com a roda e são apertados pelas pastilhas. Os canais internos ajudam a esfriar.',
  'A espessura mínima vem gravada na peça. Vibração no pedal é disco empenado.',
  'pastilhas pincas mangas');
P('tambores', 'Tambores traseiros', 'freio',
  'Rodas traseiras.',
  'Carcaça que gira com a roda; as sapatas se abrem contra ela.',
  'O diâmetro máximo vem gravado. Inspecione a cada 20.000 km.',
  'sapatas cubo_tras freio_mao');
P('sapatas', 'Sapatas e cilindros de roda', 'freio',
  'Dentro dos tambores traseiros.',
  'O cilindro de roda abre as sapatas contra o tambor; a regulagem é automática.',
  'Cilindro vazando suja a lona de fluido e o freio traseiro some.',
  'tambores tubos_freio freio_mao');
P('freio_mao', 'Freio de mão', 'freio',
  'Alavanca entre os bancos, com cabos até os tambores.',
  'Trava as rodas traseiras mecanicamente.',
  'Se precisar de muitos cliques para segurar, pede regulagem.',
  'sapatas tambores console');
P('mang_vacuo', 'Mangueira de vácuo do servo', 'freio',
  'Do coletor de admissão até o servo-freio.',
  'Leva o vácuo do motor ao servo, com uma válvula de retenção no meio.',
  'Rachada: pedal duro e marcha lenta irregular.',
  'servo coletor_adm');

/* ---------- SUSPENSÃO E RODAS ---------- */
P('amort_diant', 'Amortecedores dianteiros (McPherson)', 'susp',
  'Sobre as rodas dianteiras, presos às torres.',
  'Controlam o balanço das molas e guiam a roda: na sétima geração a frente deixou de ser por braços sobrepostos e passou a McPherson.',
  'Óleo escorrendo ou carro quicando: troque em par.',
  'molas_diant coxins_amort mangas barra_estab');
P('molas_diant', 'Molas dianteiras', 'susp',
  'Em volta dos amortecedores dianteiros.',
  'Sustentam o peso e absorvem os impactos.',
  'Mola quebrada deixa o carro arriado de um lado.',
  'amort_diant coxins_amort');
P('coxins_amort', 'Coxins do amortecedor', 'susp',
  'No topo das torres dianteiras.',
  'Borracha e rolamento que isolam o amortecedor e deixam ele girar com a direção.',
  'Estalo ao esterçar parado costuma ser o rolamento.',
  'amort_diant monobloco');
P('bandejas', 'Bandejas e pivôs', 'susp',
  'Embaixo das rodas dianteiras, presas ao subchassi.',
  'Braço em L que segura a base da manga; a bucha traseira grande filtra os impactos e o pivô é a articulação.',
  'A bucha traseira (de compliância) racha com o tempo: carro instável em freadas e batidas em buracos.',
  'mangas subchassi barra_estab');
P('barra_estab', 'Barra estabilizadora e bieletas', 'susp',
  'Atrás do eixo dianteiro, de um lado ao outro, ligada aos amortecedores.',
  'Reduz a inclinação da carroceria nas curvas.',
  'Bieletas gastas fazem toc-toc em piso irregular: é o barulho mais comum da frente.',
  'amort_diant subchassi bandejas');
P('subchassi', 'Subchassi dianteiro', 'susp',
  'Sob o motor, de um lado ao outro.',
  'Quadro que segura as bandejas, a barra estabilizadora e os coxins dianteiro e traseiro do motor.',
  'Depois de pancadas por baixo, revise ferrugem e parafusos.',
  'bandejas barra_estab coxim_diant coxim_tras monobloco');
P('mangas', 'Mangas de eixo, cubos e rolamentos', 'susp',
  'Atrás de cada roda dianteira.',
  'Articulam com a direção, carregam o rolamento da roda (prensado) e recebem o semieixo e a pinça.',
  'Ronco que muda de tom nas curvas é rolamento.',
  'amort_diant bandejas barras_axiais semieixos discos pincas');
P('braco_sup_t', 'Braços superiores traseiros', 'susp',
  'Atrás, acima de cada roda, presos à carroceria.',
  'Braço de cima da suspensão traseira de braços sobrepostos: segura o topo da manga e define a cambagem.',
  'Bucha gasta deixa a roda traseira cambada e o pneu gastando por dentro.',
  'cubo_tras braco_inf_t monobloco');
P('braco_inf_t', 'Braços inferiores traseiros', 'susp',
  'Atrás, embaixo de cada roda, presos à travessa traseira.',
  'Braço de baixo em forma de A: segura a base da manga e recebe o conjunto mola e amortecedor.',
  'Buchas rachadas fazem barulho em lombada e mexem no alinhamento traseiro.',
  'cubo_tras amort_tras travessa_tras');
P('braco_long_t', 'Braços longitudinais traseiros', 'susp',
  'Da manga traseira para a frente, até a carroceria, sob o banco traseiro.',
  'Seguram a roda contra as forças de frenagem e aceleração.',
  'A bucha da frente apodrece com a idade: estalos ao frear e ao arrancar.',
  'cubo_tras monobloco');
P('cubo_tras', 'Mangas e cubos traseiros', 'susp',
  'Atrás de cada roda traseira.',
  'Mangas onde se prendem os três braços, o cubo com rolamento e o freio a tambor.',
  'Ronco que aumenta com a velocidade pode ser rolamento traseiro.',
  'braco_sup_t braco_inf_t braco_long_t tambores');
P('amort_tras', 'Amortecedores traseiros', 'susp',
  'Atrás das rodas traseiras, inclinados, do braço inferior até a carroceria.',
  'Controlam o balanço da traseira. Mola e amortecedor formam um conjunto só.',
  'Troque em par. O acesso de cima é pelo porta-malas.',
  'molas_tras braco_inf_t');
P('molas_tras', 'Molas traseiras', 'susp',
  'Em volta dos amortecedores traseiros.',
  'Sustentam o peso da traseira.',
  'Carro arriado atrás sem carga: mola cansada.',
  'amort_tras');
P('travessa_tras', 'Travessa traseira da suspensão', 'susp',
  'Sob o porta-malas, entre as rodas traseiras.',
  'Quadro onde se prendem os braços inferiores.',
  'Ferrugem e parafusos frouxos depois de pancada.',
  'braco_inf_t monobloco');
P('pneus', 'Pneus 185/65 R15', 'susp',
  'As quatro rodas.',
  'O único contato do carro com o chão.',
  'Calibre com os pneus frios pela etiqueta da coluna da porta do motorista; rodízio a cada 10.000 km; sulco mínimo de 1,6 mm.',
  'rodas calotas mangas cubo_tras');
P('rodas', 'Rodas aro 15', 'susp',
  'As quatro rodas.',
  'Suportam o pneu e se prendem ao cubo por 4 porcas (furação 4×100).',
  'Borda amassada causa vazamento lento e vibração.',
  'pneus calotas mangas');
P('calotas', 'Calotas', 'susp',
  'Sobre as rodas (se as suas forem de liga leve, ignore).',
  'Acabamento plástico encaixado por pressão.',
  'Tire antes de trocar pneu para chegar às porcas.',
  'rodas');
P('estepe', 'Estepe', 'susp',
  'No poço do porta-malas, sob o tapete.',
  'Roda reserva, presa por um parafuso central.',
  'Calibre junto com os outros pneus (o temporário usa pressão mais alta).',
  'porta_malas macaco');
P('macaco', 'Macaco e chave de roda', 'susp',
  'No porta-malas.',
  'Ferramentas para trocar pneu.',
  'Use só nos pontos de apoio da soleira, marcados por dois recortes.',
  'estepe rodas');

/* ---------- DIREÇÃO ---------- */
P('volante_dir', 'Volante', 'dir',
  'À frente do motorista, com o airbag no centro.',
  'Comanda a direção hidráulica: leve em manobra e mais firme na estrada.',
  'Folga antes de a roda responder: revise terminais e caixa.',
  'coluna airbag_mot cabo_espiral comutadores');
P('coluna', 'Coluna de direção', 'dir',
  'Do volante até a caixa, atravessando o corta-fogo.',
  'Transmite o giro do volante e segura o comutador de ignição.',
  'Estalos na junta da coluna aparecem com os anos.',
  'volante_dir caixa_dir ign_chave');
P('caixa_dir', 'Caixa de direção hidráulica', 'dir',
  'Atrás do motor, presa à parede do cofre.',
  'Pinhão e cremalheira com um cilindro hidráulico: a válvula no pinhão manda o fluido de um lado ou do outro e a pressão ajuda a empurrar as rodas.',
  'Vazamento nas coifas é retentor interno da caixa. Folga dá toc em piso ruim.',
  'coluna barras_axiais bomba_dir mang_dir');
P('barras_axiais', 'Barras axiais e terminais', 'dir',
  'Das pontas da caixa até as mangas.',
  'Empurram as mangas para esterçar. O alinhamento é ajustado nos terminais.',
  'Folga deixa o volante torto e gasta pneu. Alinhe depois de trocar.',
  'caixa_dir mangas');
P('bomba_dir', 'Bomba da direção hidráulica', 'dir',
  'Atrás do motor, em cima, do lado direito, puxada pela correia de acessórios.',
  'Gera a pressão de óleo que ajuda a virar o volante.',
  'Gemido ao virar o volante parado é nível baixo ou entrada de ar na mangueira de sucção; vazamento pela bomba é comum com a idade.',
  'correia_acess reserv_dir mang_dir caixa_dir');
P('reserv_dir', 'Reservatório da direção hidráulica', 'dir',
  'Lado direito do cofre, perto do coxim do motor.',
  'Guarda o fluido da direção (Honda PSF ou equivalente indicado).',
  'Confira o nível nas revisões. Não use fluido de câmbio automático comum: a Honda pede fluido próprio.',
  'bomba_dir mang_dir');
P('mang_dir', 'Mangueiras da direção hidráulica', 'dir',
  'Da bomba até a caixa (pressão) e da caixa de volta ao reservatório.',
  'Levam o fluido sob alta pressão e de volta.',
  'Mangueira de pressão suando óleo deve ser trocada; a de retorno resseca nas abraçadeiras.',
  'bomba_dir caixa_dir reserv_dir');

/* ---------- INTERIOR E SEGURANÇA ---------- */
P('painel', 'Painel e porta-luvas', 'int',
  'Frente da cabine.',
  'Estrutura que abriga instrumentos, rádio, comandos do ar, airbag do passageiro e porta-luvas.',
  'Barulhos costumam ser presilhas soltas. Atrás dele ficam a caixa de ar e o evaporador.',
  'quadro radio caixa_ar comandos_clima airbag_pass');
P('quadro', 'Quadro de instrumentos', 'int',
  'Atrás do volante.',
  'Velocímetro, conta-giros, combustível, temperatura e luzes-espia, inclusive a do airbag (SRS) e a do imobilizador.',
  'Luz do SRS acesa com o motor ligado indica falha no sistema de airbags: leve para diagnóstico.',
  'sens_ect boia sens_vss sens_oleo srs');
P('radio', 'Rádio', 'int',
  'Centro do painel.',
  'Som.',
  'Rádio original pode pedir código depois de desligar a bateria; o código costuma estar no manual ou no porta-luvas.',
  'alto_falantes bateria');
P('airbag_mot', 'Airbag do motorista', 'int',
  'No centro do volante.',
  'Bolsa que infla numa batida frontal forte. Faz parte do SRS.',
  'Nunca mexa com a bateria ligada. Ao desligar, espere 3 minutos antes de soltar o módulo.',
  'volante_dir cabo_espiral srs');
P('airbag_pass', 'Airbag do passageiro', 'int',
  'No alto do painel, do lado do passageiro.',
  'Bolsa maior que protege o passageiro da frente.',
  'Não cole nem prenda objetos na tampa do airbag.',
  'painel srs');
P('srs', 'Central do airbag (SRS)', 'int',
  'Embaixo do console central, presa ao assoalho.',
  'Sente a desaceleração da batida e dispara os airbags.',
  'Depois de um disparo, a central precisa ser trocada ou reprogramada. Luz do SRS acesa pede diagnóstico.',
  'airbag_mot airbag_pass cabo_espiral quadro');
P('cabo_espiral', 'Cabo espiral do volante', 'int',
  'Atrás do volante, em volta da coluna.',
  'Fita de contato enrolada que liga o airbag e a buzina ao chicote, deixando o volante girar.',
  'Rompida: a buzina para e a luz do airbag acende. Na montagem precisa ficar centrado.',
  'airbag_mot volante_dir buzina srs');
P('console', 'Console central', 'int',
  'Entre os bancos dianteiros.',
  'Acabamento que envolve a alavanca de câmbio e a do freio de mão; embaixo dele fica a central do airbag.',
  'Presilha quebrada faz barulho.',
  'alavanca freio_mao srs');
P('bancos_diant', 'Bancos dianteiros', 'int',
  'Cabine.',
  'Reclináveis, o do motorista com regulagem de altura em algumas versões.',
  'Limpe e lubrifique os trilhos.',
  'cintos');
P('banco_tras', 'Banco traseiro', 'int',
  'Cabine, atrás.',
  'Assento e encosto. Embaixo do assento fica a tampa de acesso à bomba de combustível.',
  '',
  'tanque bomba_comb');
P('cintos', 'Cintos de segurança', 'int',
  'Colunas e assoalho.',
  'Seguram os ocupantes numa colisão.',
  'Cinto que não trava num puxão forte deve ser trocado.',
  'bancos_diant monobloco');
P('forros_portas', 'Forros das portas dianteiras', 'int',
  'Lado de dentro das portas da frente.',
  'Acabamento com puxador, maçaneta interna e os botões dos vidros elétricos; esconde a máquina de vidro e a fechadura.',
  'Presilha quebrada faz o forro vibrar e deixa entrar ar e ruído.',
  'portas portas_tras maq_vidro fech_portas');
E('forros_portas', 'encaixada', 'Presilhas plásticas em volta, parafusos no puxador e na maçaneta interna, e os conectores dos botões dos vidros.');
P('forros_portas_tras', 'Forros das portas traseiras', 'int',
  'Lado de dentro das portas de trás.',
  'Acabamento com puxador, maçaneta interna e o botão do vidro; esconde a máquina de vidro e a fechadura.',
  'Presilha quebrada faz o forro vibrar.',
  'portas_tras maq_vidro_tras fech_portas');
E('forros_portas_tras', 'encaixada', 'Presilhas plásticas em volta, parafuso no puxador e na maçaneta interna, e o conector do botão do vidro.');
P('porta_malas', 'Porta-malas', 'int',
  'Atrás do banco traseiro.',
  'Compartimento de carga; por ele se acessam o estepe, as lanternas e a parte de cima dos amortecedores traseiros.',
  'Água parada no porta-malas: revise a borracha da tampa e a vedação das lanternas.',
  'estepe tampa_mala lanternas macaco luz_freio');
P('retrovisor_int', 'Retrovisor interno', 'int',
  'No para-brisa.',
  'Visão traseira.',
  '',
  'para_brisa');
P('alto_falantes', 'Alto-falantes', 'int',
  'Nas portas.',
  'Som.',
  '',
  'radio portas portas_tras');

/* ---------- CARROCERIA ---------- */
/* estrutura soldada */
P('monobloco', 'Monobloco (estrutura)', 'carro',
  'O esqueleto do carro, por baixo de tudo.',
  'Chapas de aço estampadas e soldadas: assoalho, longarinas, torres e caixas de roda. A lataria e a mecânica se prendem nele.',
  'Vigie ferrugem no assoalho, nas caixas de roda e nas emendas, e mantenha os drenos desentupidos.',
  'corta_fogo soleiras colunas teto laterais painel_tras travessa_frontal subchassi travessa_tras coxim_dir');
E('monobloco', 'soldada', 'Chapas unidas por pontos de solda e cola estrutural, com massa de vedação nas emendas. Não se desmonta: dano estrutural se repara em funilaria, com gabarito.');
P('corta_fogo', 'Parede corta-fogo', 'carro',
  'Entre o cofre e a cabine, com a caixa de ar (torpedo) em cima.',
  'Separa motor e cabine e recebe o servo-freio, os pedais, a caixa de direção e as passagens de chicote, cabos e tubos do ar.',
  'Borrachas de passagem ressecadas deixam entrar água e ruído.',
  'monobloco servo coluna caixa_ar grade_torpedo valv_exp');
E('corta_fogo', 'soldada', 'Parte soldada do monobloco. As passagens de fios, cabos e tubos são vedadas com borrachas encaixadas.');
P('soleiras', 'Soleiras', 'carro',
  'Embaixo das portas, da roda da frente à de trás.',
  'Vigas ocas de aço que dão rigidez à lateral e formam o degrau das portas. A aba de baixo é onde o macaco apoia.',
  'Ferrugem começa por dentro, pelos drenos entupidos. Use o macaco só nos pontos marcados.',
  'monobloco laterais paralamas portas portas_tras borrachas');
E('soleiras', 'soldada', 'Soldadas a ponto na aba de baixo e na borda das aberturas das portas, emendadas às laterais e ao assoalho.');
P('colunas', 'Colunas dianteiras e moldura do para-brisa', 'carro',
  'Dos lados do para-brisa até o teto, e a faixa sob o para-brisa.',
  'Seguram o teto e o para-brisa e formam a borda das portas da frente. Trabalham na proteção em capotamento.',
  'Coluna amassada compromete a estrutura e o fechamento da porta.',
  'teto para_brisa portas monobloco grade_torpedo');
E('colunas', 'soldada', 'Parte soldada da estrutura, com o teto e as colunas centrais. O para-brisa é colado na moldura que elas formam.');
P('teto', 'Teto', 'carro',
  'Topo da cabine.',
  'Chapa que fecha a cabine e trabalha com as colunas e as travessas.',
  'Sol e chuva degradam o verniz; encere com alguma frequência.',
  'colunas laterais para_brisa vidro_tras monobloco');
E('teto', 'soldada', 'Soldado a ponto nas bordas: sobre as portas, na moldura do para-brisa e na do vidro traseiro, com massa de vedação. Não se desmonta.');
P('laterais', 'Laterais traseiras e colunas traseiras', 'carro',
  'Atrás das portas traseiras, em volta das rodas de trás, até as lanternas.',
  'Chapa externa que forma a caixa da roda traseira, a coluna traseira (ao lado do vidro traseiro) e o contorno das lanternas e da tampa do porta-malas.',
  'Reparo exige funilaria. Vigie ferrugem na borda da caixa de roda e embaixo das lanternas.',
  'soleiras teto painel_tras caixas_roda lanternas vidro_tras bocal para_choque_t');
E('laterais', 'soldada', 'Soldadas a ponto na coluna central, na soleira, na caixa de roda interna, junto ao teto, na moldura do vidro traseiro e no painel traseiro, com massa de vedação por cima.');
P('painel_tras', 'Painel traseiro', 'carro',
  'Entre a tampa do porta-malas e o para-choque traseiro.',
  'Chapa que fecha a traseira e recebe o batente da fechadura da tampa e os apoios do para-choque.',
  'Batidas leves na traseira amassam o painel por trás do para-choque; olhe por dentro do porta-malas.',
  'tampa_mala fech_mala para_choque_t laterais viga_traseira monobloco');
E('painel_tras', 'soldada', 'Soldado às laterais e ao assoalho do porta-malas.');
P('travessa_frontal', 'Painel frontal (suporte do radiador)', 'carro',
  'Frente do cofre, atrás do para-choque.',
  'Estrutura que segura radiador, condensador, faróis e a fechadura do capô.',
  'Depois de batidas leves, confira se não entortou: o capô deixa de fechar alinhado.',
  'radiador condensador fech_capo farois viga_dianteira monobloco');
E('travessa_frontal', 'parafusada', 'A travessa de cima é parafusada nas pontas, junto aos faróis; a parte de baixo é soldada às longarinas. Apoie radiador e condensador antes de soltar.');
P('viga_dianteira', 'Viga de impacto dianteira', 'carro',
  'Atrás do para-choque dianteiro.',
  'Absorve impactos leves e os distribui para as longarinas.',
  'Depois de uma batida, confira se amassou.',
  'para_choque_d monobloco');
E('viga_dianteira', 'parafusada', 'Parafusada nas pontas das longarinas.');
P('viga_traseira', 'Viga de impacto traseira', 'carro',
  'Atrás do para-choque traseiro.',
  'Absorve impactos leves na traseira.',
  'Depois de uma batida, confira o painel traseiro por dentro do porta-malas.',
  'para_choque_t painel_tras');
E('viga_traseira', 'parafusada', 'Parafusada no painel traseiro, por trás do para-choque.');

/* painéis parafusados */
P('capo', 'Capô', 'carro',
  'Topo do cofre.',
  'Cobre o motor. Por baixo tem um reforço de chapa. Aberto, fica apoiado na vareta.',
  'Lubrifique dobradiças e fechadura.',
  'dobr_capo fech_capo grade_torpedo paralamas travessa_frontal');
E('capo', 'parafusada', 'Duas dobradiças atrás, com dois parafusos em cada no capô; na frente, a lingueta entra na fechadura da travessa. Batentes de borracha reguláveis acertam a altura.');
P('paralamas', 'Para-lamas dianteiros', 'carro',
  'Laterais dianteiras, em volta das rodas da frente.',
  'Cobrem as rodas dianteiras e fecham a lateral do cofre.',
  'Barro acumulado por dentro enferruja a borda; lave por dentro da caixa de roda.',
  'para_choque_d portas soleiras caixas_roda piscas_lat farois capo');
E('paralamas', 'parafusada', 'Todo parafusado: na borda de cima (sob o capô), na frente junto ao farol, embaixo na soleira e atrás, na coluna da porta. Para trocar: tire a roda, o forro da caixa de roda, o para-choque e o farol.');
P('portas', 'Portas dianteiras', 'carro',
  'Laterais, na frente.',
  'Forro externo de chapa, painel interno, moldura do vidro e, por dentro, máquina de vidro elétrica, fechadura com trava elétrica e alto-falante.',
  'Lubrifique dobradiças e limitador. Drenos entupidos embaixo da porta enferrujam por dentro.',
  'dobradicas fech_portas maq_vidro vidros_portas retrovisores borrachas frisos forros_portas');
E('portas', 'parafusada', 'Duas dobradiças na coluna dianteira e um limitador. Atrás, a fechadura engata no batente parafusado na coluna central. Para tirar: solte o conector do chicote e o limitador, depois as dobradiças, com a porta apoiada.');
P('portas_tras', 'Portas traseiras', 'carro',
  'Laterais, atrás.',
  'Mesma construção das dianteiras, com máquina de vidro elétrica, trava e alto-falante. Presas na coluna central.',
  'Trava de segurança para crianças fica na borda traseira da porta.',
  'dobradicas fech_portas maq_vidro_tras vidros_portas_tras borrachas frisos forros_portas_tras');
E('portas_tras', 'parafusada', 'Duas dobradiças na coluna central e um limitador; atrás, a fechadura engata no batente da lateral traseira. Para tirar: conector, limitador e dobradiças, com a porta apoiada.');
P('dobradicas', 'Dobradiças e limitadores das portas', 'carro',
  'Na borda dianteira de cada porta, escondidas entre a porta e a coluna.',
  'Sustentam a porta e deixam ela girar; o limitador segura a porta aberta.',
  'Porta caída raspa na soleira: pinos e buchas gastos. Lubrifique uma vez por ano.',
  'portas portas_tras colunas');
E('dobradicas', 'parafusada', 'Parafusadas na coluna e na porta; o limitador é parafusado na coluna e corre dentro da porta.');
P('fech_portas', 'Fechaduras, travas elétricas e maçanetas', 'carro',
  'Borda traseira das portas; os batentes ficam nas colunas.',
  'A fechadura, dentro da porta, engata no batente em U. A trava elétrica é um atuador acoplado a ela, comandado pelo botão do motorista.',
  'Atuador de trava fraco deixa uma porta sem travar: é peça de troca comum.',
  'portas portas_tras laterais');
E('fech_portas', 'parafusada', 'Fechadura presa por três parafusos na borda da porta; batente com dois parafusos na coluna; maçaneta presa por dentro da porta.');
P('retrovisores', 'Retrovisores externos', 'carro',
  'Na frente das portas dianteiras.',
  'Visão lateral, com regulagem elétrica ou manual conforme a versão.',
  '',
  'portas');
E('retrovisores', 'parafusada', 'Três porcas por dentro da porta, sob o acabamento triangular.');
P('tampa_mala', 'Tampa do porta-malas', 'carro',
  'Traseira, atrás do vidro traseiro.',
  'Fecha o porta-malas. Abre com a chave ou pela alavanca ao lado do banco do motorista, e fica aberta sozinha graças às barras de torção.',
  'Borracha ressecada deixa entrar água.',
  'dobr_mala barras_mala fech_mala porta_malas borrachas');
E('tampa_mala', 'parafusada', 'Duas dobradiças em pescoço de ganso presas à carroceria sob a prateleira traseira e à tampa por parafusos; duas barras de torção cruzam o carro e empurram a tampa para cima. Embaixo, a fechadura engata no batente do painel traseiro.');
P('dobr_capo', 'Dobradiças do capô', 'carro',
  'Nos cantos de trás do capô.',
  'Deixam o capô girar para abrir.',
  'Lubrifique; dobradiça dura faz o capô abrir torto.',
  'capo paralamas');
E('dobr_capo', 'parafusada', 'Parafusadas na carroceria e no capô; a folga dos furos serve para alinhar.');
P('dobr_mala', 'Dobradiças da tampa do porta-malas', 'carro',
  'Sob a prateleira traseira, uma de cada lado.',
  'Braços curvos (pescoço de ganso) que giram por dentro do porta-malas para a tampa levantar.',
  'Ao fechar, os braços descem para dentro do porta-malas: não deixe carga encostada neles.',
  'tampa_mala barras_mala');
E('dobr_mala', 'parafusada', 'Base parafusada na carroceria; tampa parafusada nos braços.');
P('barras_mala', 'Barras de torção da tampa', 'carro',
  'Atravessam o carro sob a prateleira traseira, ligadas às dobradiças.',
  'Molas de torção que ajudam a levantar e seguram a tampa aberta, no lugar dos amortecedores a gás.',
  'Tampa que cai ou não abre sozinha: barras desencaixadas ou cansadas. São tensionadas: cuidado ao mexer.',
  'dobr_mala tampa_mala');
E('barras_mala', 'encaixada', 'As pontas encaixam nos suportes da carroceria e nos braços das dobradiças, já tensionadas. Soltar e encaixar exige ferramenta de alavanca própria.');
P('fech_mala', 'Fechadura e batente do porta-malas', 'carro',
  'Embaixo da tampa; o batente fica no painel traseiro.',
  'Trava a tampa fechada; o cabo da alavanca interna e o cilindro da chave a liberam.',
  'Lubrifique; tampa que não fecha de primeira pede regulagem do batente.',
  'tampa_mala painel_tras');
E('fech_mala', 'parafusada', 'Fechadura parafusada na tampa e batente parafusado no painel traseiro.');
P('fech_capo', 'Fechadura e cabo do capô', 'carro',
  'Centro do painel frontal; a alavanca fica perto do pé esquerdo do motorista.',
  'Trava a lingueta do capô. Tem uma trava de segurança que se solta por fora, sob a borda do capô.',
  'Engraxe a fechadura; cabo esticado pode impedir a abertura.',
  'capo travessa_frontal');
E('fech_capo', 'parafusada', 'Fechadura parafusada na travessa; o cabo vai preso por presilhas até a alavanca.');
P('maq_vidro', 'Máquinas de vidro das portas dianteiras', 'carro',
  'Dentro das portas da frente.',
  'Mecanismo com motor elétrico que sobe e desce o vidro.',
  'Vidro que sobe devagar: canaletas sujas ou motor cansado. Lubrifique as canaletas com silicone.',
  'vidros_portas portas forros_portas');
E('maq_vidro', 'parafusada', 'Parafusada no painel interno da porta; o vidro se prende a ela por dois parafusos, acessíveis com o forro tirado.');
P('maq_vidro_tras', 'Máquinas de vidro das portas traseiras', 'carro',
  'Dentro das portas de trás.',
  'Mecanismo com motor elétrico que sobe e desce o vidro traseiro.',
  'Vidro que sobe devagar: canaletas sujas ou motor cansado.',
  'vidros_portas_tras portas_tras forros_portas_tras');
E('maq_vidro_tras', 'parafusada', 'Parafusada no painel interno da porta; o vidro se prende a ela por parafusos, acessíveis com o forro tirado.');

/* vidros */
P('para_brisa', 'Para-brisa', 'carro',
  'Frente da cabine.',
  'Vidro laminado colado na moldura. Por ser colado, também trabalha na rigidez da cabine.',
  'Trinca sempre cresce; a troca é feita por empresa especializada.',
  'colunas teto limpador retrovisor_int borrachas');
E('para_brisa', 'colada', 'Colado na moldura com cordão de poliuretano (PU); não tem parafusos.');
P('vidro_tras', 'Vidro traseiro térmico', 'carro',
  'Entre o teto e a tampa do porta-malas.',
  'Vidro com desembaçador elétrico, colado na carroceria (no sedã ele não abre com a tampa).',
  'Não raspe o lado de dentro: os fios do desembaçador ficam ali.',
  'teto laterais luz_freio');
E('vidro_tras', 'colada', 'Colado na moldura da carroceria com cordão de poliuretano.');
P('vidros_portas', 'Vidros das portas dianteiras', 'carro',
  'Nas portas da frente.',
  'Vidros móveis que correm em canaletas de borracha.',
  'Canaletas limpas poupam a máquina de vidro.',
  'portas maq_vidro borrachas');
E('vidros_portas', 'encaixada', 'Correm em canaletas de borracha e se prendem à máquina por dois parafusos, acessíveis com o forro da porta tirado.');
P('vidros_portas_tras', 'Vidros das portas traseiras', 'carro',
  'Nas portas de trás.',
  'Vidros móveis; não descem até o fim por causa do formato da porta.',
  'Canaletas limpas poupam a máquina de vidro.',
  'portas_tras maq_vidro_tras borrachas');
E('vidros_portas_tras', 'encaixada', 'Correm em canaletas de borracha e se prendem à máquina por parafusos, acessíveis com o forro tirado.');

/* plásticos, acabamentos e vedações */
P('para_choque_d', 'Para-choque dianteiro', 'carro',
  'Frente.',
  'Capa plástica que absorve toques, com as entradas de ar e o suporte da placa.',
  'Presilhas e guias quebradas deixam frestas e barulhos.',
  'viga_dianteira grade grade_inf farois paralamas travessa_frontal');
E('para_choque_d', 'parafusada', 'Capa plástica presa por parafusos e presilhas em cima (na travessa, sob o capô), nas caixas de roda e embaixo, e encaixada nas guias laterais.');
P('para_choque_t', 'Para-choque traseiro', 'carro',
  'Traseira.',
  'Capa plástica que absorve toques e aloja a placa e as luzes da placa.',
  '',
  'painel_tras viga_traseira laterais lanternas luz_placa');
E('para_choque_t', 'parafusada', 'Parafusos e presilhas em cima (com a tampa aberta), nas caixas de roda e embaixo, e guias laterais sob as lanternas.');
P('grade', 'Grade dianteira', 'carro',
  'Entre os faróis.',
  'Entrada de ar para o radiador e o condensador, com o friso cromado e o emblema.',
  '',
  'para_choque_d radiador condensador');
E('grade', 'encaixada', 'Presa por presilhas plásticas e um ou dois parafusos na travessa.');
P('grade_inf', 'Grade inferior', 'carro',
  'Parte baixa do para-choque.',
  'Entrada principal de ar para o condensador e o radiador.',
  'Tire folhas e insetos para o ar passar.',
  'para_choque_d radiador condensador');
E('grade_inf', 'encaixada', 'Encaixada no para-choque.');
P('grade_torpedo', 'Grade do torpedo', 'carro',
  'Entre o capô e o para-brisa, embaixo dos limpadores.',
  'Deixa entrar o ar da ventilação e cobre a caixa de ar, onde ficam o motor do limpador e os drenos.',
  'Folhas acumuladas entopem os drenos e a água vai parar no tapete ou na central. Limpe de vez em quando.',
  'capo colunas limpador caixa_ar corta_fogo');
E('grade_torpedo', 'encaixada', 'Presilhas e um encaixe sob a borda do para-brisa. Os braços do limpador saem antes.');
P('caixas_roda', 'Caixas de roda e forros', 'carro',
  'Em volta das 4 rodas.',
  'Forros plásticos protegem para-lamas e cofre de água, barro e pedras.',
  'Lave por dentro para não acumular barro.',
  'paralamas laterais monobloco');
E('caixas_roda', 'encaixada', 'Forros presos por presilhas plásticas na borda e por parafusos na caixa interna.');
P('borrachas', 'Borrachas de vedação', 'carro',
  'Em volta das portas, da tampa, sob o capô e nos vidros.',
  'Vedam contra água, poeira e ruído e amortecem o fechamento.',
  'Passe protetor à base de silicone a cada poucos meses. Borracha rasgada deixa entrar água.',
  'portas portas_tras tampa_mala capo vidros_portas para_brisa');
E('borrachas', 'encaixada', 'Encaixadas por pressão nas abas das aberturas e nas canaletas dos vidros.');
P('frisos', 'Frisos laterais', 'carro',
  'Na metade de baixo das portas e laterais.',
  'Protegem a lataria de batidas de porta de outros carros.',
  'Friso descolando junta água atrás e mancha a pintura.',
  'portas portas_tras laterais');
E('frisos', 'colada', 'Colados com fita dupla-face automotiva.');
};
