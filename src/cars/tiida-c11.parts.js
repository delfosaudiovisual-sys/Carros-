/* ===== Nissan Tiida 1.8 S Flex 2010/2011 (C11): catálogo de peças =====
   P(id, nome, sistema, onde fica, o que faz, manutenção, relacionadas); E(id, tipo de fixação, como é presa). */
(window.CAR_PARTS = window.CAR_PARTS || {})['tiida-c11'] = function (P, E) {

/* ---------- MOTOR ---------- */
P('bloco', 'Bloco do motor', 'motor',
  'Centro do cofre, transversal: a corrente de comando fica à direita e o câmbio à esquerda.',
  'Estrutura do MR18DE (1.798 cm³): bloco de alumínio com camisas de ferro, onde correm os quatro pistões, e os mancais do virabrequim numa peça só por baixo. Por dentro passam as galerias de óleo e de líquido de arrefecimento.',
  'Sem troca programada. Água sumindo ou óleo entre bloco e cabeçote merece atenção cedo: superaquecer o alumínio empena o cabeçote.',
  'virabrequim pistoes cabecote carter bomba_agua coxim_dir coxim_cambio sens_ckp sens_det');
P('cabecote', 'Cabeçote (DOHC 16V)', 'motor',
  'Em cima do bloco, sob a tampa de válvulas. A admissão fica na frente, voltada para o radiador, e o escape atrás, voltado para o corta-fogo.',
  'Fecha os cilindros e forma as câmaras de combustão. Leva dois comandos de válvulas (admissão e escape), 16 válvulas acionadas direto pelos tuchos e as velas no centro de cada câmara.',
  'Superaquecimento empena. Na remontagem os parafusos são apertados em etapas, com ângulo, na ordem do manual.',
  'bloco junta_cab comando tuchos valvulas velas coletor_adm coletor_esc termostato sens_ect cvtc');
P('junta_cab', 'Junta do cabeçote', 'motor',
  'Entre o bloco e o cabeçote.',
  'Vedação multicamada de aço que segura a pressão da queima e separa os canais de óleo e de água.',
  'Queima com superaquecimento. Sinais: fumaça branca de cheiro doce, água sumindo sem vazamento visível, bolhas no reservatório e óleo com aspecto de maionese.',
  'cabecote bloco vaso');
P('tampa_valv', 'Tampa de válvulas', 'motor',
  'No topo do motor, com as quatro bobinas encaixadas pelo meio.',
  'Tampa plástica que cobre os dois comandos e segura o óleo da parte de cima. Tem a junta externa, as vedações dos poços das velas e a saída do respiro.',
  'Junta ressecada deixa óleo escorrer pela lateral do cabeçote; vedação do poço vazando molha a vela. Troque junta e vedações sempre que abrir.',
  'cabecote bobinas velas respiro tampa_oleo comando');
P('comando', 'Comandos de válvulas (2)', 'motor',
  'Dentro do cabeçote, ao longo do motor: o de admissão na frente e o de escape atrás. As engrenagens da corrente ficam na ponta direita.',
  'Dois eixos com ressaltos que empurram os tuchos e abrem as 16 válvulas. Giram na metade da rotação do virabrequim, puxados pela corrente. O de admissão tem o variador de fase (CVTC) na engrenagem.',
  'Dura a vida do motor com óleo certo e em dia. Óleo velho ou abaixo do mínimo gasta os mancais dos comandos e o variador.',
  'corrente cvtc tuchos valvulas cabecote sens_cmp');
P('cvtc', 'Variador de fase do comando (CVTC)', 'motor',
  'Na engrenagem do comando de admissão, na ponta direita do cabeçote; a válvula solenoide fica na frente da tampa da corrente.',
  'Adianta ou atrasa o comando de admissão com a pressão do óleo, comandada pela central através da válvula solenoide. Dá mais torque em baixa e mais potência em alta.',
  'Barulho de chocalho por um segundo na partida a frio e luz da injeção com falha do comando costumam ser óleo sujo, nível baixo ou a tela da solenoide entupida.',
  'comando corrente ecu bomba_oleo sens_cmp');
P('tuchos', 'Tuchos (16)', 'motor',
  'Sob os ressaltos dos comandos, um em cima de cada válvula.',
  'Copos de aço que recebem o empurrão do ressalto e o passam para a válvula. Não têm regulagem hidráulica: a folga é acertada trocando o tucho por outro de espessura diferente.',
  'A folga se confere com o motor frio, pelo manual; aumenta com o desgaste e faz o barulho de "tucho batendo". Ajuste é serviço de oficina, com os comandos fora.',
  'comando valvulas cabecote');
P('valvulas', 'Válvulas (16) e molas', 'motor',
  'No cabeçote: duas de admissão na frente e duas de escape atrás, em cada cilindro.',
  'Abrem para a mistura entrar e para os gases saírem. As molas fecham cada válvula depois que o ressalto passa.',
  'Folga certa e corrente em ordem. Fumaça azul ao acelerar depois de parado pode ser retentor de válvula gasto.',
  'tuchos comando cabecote pistoes coletor_adm coletor_esc');
P('pistoes', 'Pistões (4) e anéis', 'motor',
  'Dentro dos cilindros do bloco.',
  'Recebem o empurrão da combustão e o passam às bielas: 84 mm de diâmetro e 81,1 mm de curso. Os anéis vedam a compressão e raspam o óleo da parede.',
  'Anéis gastos causam consumo de óleo, fumaça azul e perda de força. Teste de compressão e de vazamento mostram a saúde deles.',
  'bielas virabrequim valvulas velas bloco');
P('bielas', 'Bielas (4)', 'motor',
  'Entre os pistões e o virabrequim.',
  'Transformam o sobe-e-desce dos pistões no giro do virabrequim.',
  'Batida metálica grave que acompanha a rotação pode ser bronzina de biela: pare o carro e chame o guincho.',
  'pistoes virabrequim bomba_oleo');
P('virabrequim', 'Virabrequim', 'motor',
  'Na base do bloco, atravessando o motor.',
  'Eixo de manivelas girado pelas bielas. Na ponta esquerda leva o volante do motor; na direita, a engrenagem da corrente, a bomba de óleo e a polia dos acessórios.',
  'Dura muito com óleo limpo. O retentor da ponta da polia pode vazar com a idade.',
  'bielas volante_motor polia_vira corrente bomba_oleo sens_ckp bloco');
P('carter', 'Cárter', 'motor',
  'Embaixo do motor, em duas partes: a de cima, de alumínio, e a de baixo, de chapa, com o bujão.',
  'Reservatório do óleo do motor, vedado com cola. O bujão de drenagem fica no fundo da parte de chapa.',
  'Óleo a cada 10.000 km ou 12 meses (5.000 km em uso severo), cerca de 4,2 L com filtro — a vareta manda. Arruela do bujão nova a cada troca.',
  'bomba_oleo filtro_oleo vareta tampa_oleo bloco');
P('bomba_oleo', 'Bomba de óleo', 'motor',
  'Na ponta direita do bloco, atrás da tampa da corrente, girada direto pelo virabrequim.',
  'Bomba de rotores que suga o óleo do cárter pelo pescador e o empurra sob pressão para o filtro, os mancais, os comandos, o tensor da corrente e o variador.',
  'Sem troca periódica. Óleo vencido forma borra, entope a tela do pescador e derruba a pressão: luz de óleo acesa e corrente barulhenta.',
  'carter filtro_oleo virabrequim sens_oleo corrente cvtc');
P('filtro_oleo', 'Filtro de óleo', 'motor',
  'Na frente do bloco, embaixo do coletor de admissão; o acesso é por baixo do carro.',
  'Retém partículas antes de o óleo chegar às partes móveis.',
  'Troque junto com o óleo. Aperto à mão: encoste e dê mais ⅔ a ¾ de volta.',
  'bomba_oleo carter sens_oleo');
P('vareta', 'Vareta de nível do óleo', 'motor',
  'Na frente do motor, à esquerda do coletor, com o cabo amarelo.',
  'Mostra o nível entre as marcas de mínimo e máximo.',
  'Confira com o carro no plano, motor frio ou alguns minutos depois de desligar. Nunca passe do máximo.',
  'carter tampa_oleo');
P('tampa_oleo', 'Tampa de abastecimento de óleo', 'motor',
  'No topo da tampa de válvulas.',
  'Bocal por onde se completa o óleo do motor.',
  'Borra clara por baixo da tampa indica condensação (trajetos curtos) ou água no óleo.',
  'tampa_valv vareta carter');
P('volante_motor', 'Volante do motor', 'motor',
  'Na ponta esquerda do virabrequim, dentro da capa da embreagem.',
  'Disco pesado que suaviza os pulsos das explosões, tem a cremalheira do motor de partida e serve de face de atrito da embreagem.',
  'Revise a face na troca de embreagem. Dentes gastos fazem o motor de partida raspar.',
  'virabrequim embreagem motor_partida');
P('corrente', 'Corrente de comando', 'motor',
  'Lado direito do motor, por dentro da tampa de alumínio, banhada em óleo.',
  'Corrente de rolos que sincroniza o virabrequim com os dois comandos. Não tem troca programada como as correias dentadas.',
  'Dura muito com óleo certo e em dia. Chocalho na partida a frio que não some, ou falha de sincronismo no scanner, pede inspeção do tensor, das guias e do alongamento da corrente.',
  'comando tensor_corr tampa_corr virabrequim cvtc');
P('tensor_corr', 'Tensor e guias da corrente', 'motor',
  'Dentro da tampa da corrente, do lado direito.',
  'O tensor hidráulico empurra a guia móvel contra a corrente com a pressão do óleo; a guia fixa segura o outro lado.',
  'Tensor gasto ou guia quebrada deixam a corrente bater: barulho metálico na partida. Troque o conjunto junto com a corrente.',
  'corrente tampa_corr bomba_oleo');
P('tampa_corr', 'Tampa da corrente', 'motor',
  'Lado direito do motor, a tampa grande de alumínio, atrás da polia do virabrequim.',
  'Fecha a corrente e o tensor, segura o óleo e leva o retentor da ponta do virabrequim e a válvula solenoide do variador.',
  'Vazamento na emenda com o cabeçote ou no retentor é comum com a idade; a vedação é com cola própria.',
  'corrente tensor_corr cvtc polia_vira coxim_dir');
P('polia_vira', 'Polia do virabrequim', 'motor',
  'Ponta direita do virabrequim, embaixo, atrás da roda dianteira direita.',
  'Puxa a correia de acessórios e tem a marca de ponto do virabrequim.',
  'O parafuso central é muito apertado: soltá-lo exige segurar a polia com ferramenta própria.',
  'virabrequim correia_acess sens_ckp');
P('correia_acess', 'Correia de acessórios', 'motor',
  'Lado direito do motor, por fora da tampa da corrente.',
  'Correia ranhurada única que leva força do virabrequim ao alternador, à bomba d’água e ao compressor do ar-condicionado. A direção é elétrica, então não há bomba de direção.',
  'Inspecione em toda revisão (trincas, brilho, chiado na partida). Se romper, a bateria para de carregar, o motor esquenta e o ar para: pare o carro.',
  'polia_vira alternador compressor bomba_agua tensor_acess');
P('tensor_acess', 'Tensor da correia de acessórios', 'motor',
  'Lado direito, entre o alternador e o compressor.',
  'Polia tensora que mantém a correia esticada; a tensão é ajustada por parafuso.',
  'Correia chiando na partida ou com o ar ligado: confira a tensão e o rolamento da polia.',
  'correia_acess');
P('coxim_dir', 'Coxim do motor (lado direito)', 'motor',
  'Lado direito, em cima, preso à longarina e ao suporte da tampa da corrente.',
  'Apoio de borracha que segura o lado da corrente e filtra a vibração.',
  'Gasto, o motor balança na partida e trepida em marcha lenta, mais com o ar ligado.',
  'bloco monobloco coxim_cambio coxim_tras tampa_corr');
P('coxim_cambio', 'Coxim do câmbio (lado esquerdo)', 'motor',
  'Sobre o câmbio, sob a caixa do filtro de ar e perto da bateria.',
  'Segura o lado do câmbio do conjunto motor-câmbio.',
  'Borracha rachada causa batidas ao engatar e vibração na alavanca.',
  'cambio coxim_dir coxim_tras');
P('coxim_tras', 'Tirante do motor (coxim traseiro)', 'motor',
  'Embaixo, atrás do motor, entre o câmbio e o subchassi.',
  'Barra com buchas que segura o conjunto contra o torque nas arrancadas e nas reduções.',
  'É o que mais sofre: com a bucha gasta o carro dá tranco ao arrancar e ao tirar o pé, e a alavanca balança.',
  'subchassi coxim_dir coxim_cambio');
P('respiro', 'Válvula PCV e respiro do cárter', 'motor',
  'Na tampa de válvulas, com a mangueira até o coletor de admissão.',
  'Deixa os vapores de óleo saírem do motor para a admissão, onde são queimados, na medida certa para cada regime.',
  'Válvula presa ou mangueira rachada deixam a marcha lenta irregular e aumentam o consumo de óleo.',
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
  'caixa_filtro duto_ar maf');
P('maf', 'Sensor de massa de ar (MAF)', 'ar',
  'Na saída da caixa do filtro, antes do duto.',
  'Mede quanto ar entra no motor, em massa, e a temperatura desse ar. É a principal informação para a central calcular a injeção.',
  'Sujo de poeira ou de óleo, mede menos ar: o motor fica fraco, engasga e consome mais. Limpe só com produto próprio para sensores, sem tocar no fio.',
  'caixa_filtro duto_ar ecu');
P('duto_ar', 'Duto de admissão', 'ar',
  'Do sensor de massa de ar até o corpo de borboleta, do lado esquerdo.',
  'Leva o ar já medido até a borboleta. Recebe a mangueira do respiro.',
  'Rachaduras depois do sensor deixam entrar ar não medido: marcha lenta irregular e luz da injeção.',
  'maf tbi respiro');
P('tbi', 'Corpo de borboleta eletrônico', 'ar',
  'Na ponta esquerda do coletor de admissão.',
  'Válvula motorizada que dosa o ar: a central abre a borboleta conforme o pedal e também controla a marcha lenta por ela. O sensor de posição fica embutido.',
  'Carvão na borda da borboleta deixa a lenta baixa ou oscilando. Depois de limpar, a central precisa reaprender a posição fechada (procedimento de "idle air volume learning").',
  'pedal_acel coletor_adm duto_ar ecu');
P('pedal_acel', 'Pedal do acelerador eletrônico', 'ar',
  'Assoalho do motorista, à direita.',
  'Não tem cabo: dois sensores de posição no pedal informam à central quanto você pisa.',
  'Falha no sensor acende a luz da injeção e põe o carro em modo de emergência, acelerando pouco.',
  'tbi ecu');
P('coletor_adm', 'Coletor de admissão', 'ar',
  'Na frente do motor, entre o bloco e o radiador: plenum plástico em cima e quatro dutos descendo até o cabeçote.',
  'Distribui o ar para os 4 cilindros. Recebe a galeria, os bicos, a purga do cânister, a partida a frio e o vácuo do servo-freio.',
  'Juntas ressecadas e mangueiras de vácuo soltas causam entrada falsa de ar e marcha lenta alta.',
  'tbi galeria bicos purga respiro mang_vacuo cabecote tubos_pf');
P('galeria', 'Galeria de combustível', 'ar',
  'Na frente do motor, sobre os bicos, presa ao coletor.',
  'Tubo que distribui combustível pressurizado aos quatro bicos.',
  'Na remontagem, anéis novos nos bicos. Cheiro de combustível no cofre pede inspeção imediata.',
  'bicos linhas_comb coletor_adm');
P('bicos', 'Bicos injetores (4)', 'ar',
  'Um por cilindro, na base dos dutos do coletor, apontados para as válvulas de admissão.',
  'Pulverizam o combustível. A central decide a duração de cada pulso, que é bem maior com etanol do que com gasolina.',
  'Limpeza e teste de vazão por volta de 40.000 km num flex. Bico pingando afoga a partida e aumenta o consumo.',
  'galeria coletor_adm ecu valvulas');

/* ---------- COMBUSTÍVEL ---------- */
P('tanque', 'Tanque de combustível (52 L)', 'comb',
  'Embaixo do banco traseiro, na frente do eixo traseiro.',
  'Guarda o combustível num tanque plástico preparado para etanol. O módulo da bomba fica dentro dele.',
  'Evite rodar na reserva: a bomba é resfriada pelo próprio combustível e puxa a sujeira do fundo.',
  'bomba_comb boia bocal linhas_comb canister');
P('bomba_comb', 'Módulo da bomba de combustível', 'comb',
  'Dentro do tanque; o acesso é por uma tampa sob o assento traseiro.',
  'Bomba elétrica com o filtro e o regulador de pressão no mesmo conjunto: o sistema é sem retorno, com uma linha só até o motor. Ao ligar a chave ela funciona por alguns segundos.',
  'Demora para pegar, falha em subida ou em alta: bomba cansada ou filtro do módulo entupido. Combustível de má qualidade encurta a vida dela.',
  'tanque boia linhas_comb ecu caixa_fus_motor');
P('boia', 'Boia (sensor de nível)', 'comb',
  'No módulo da bomba, dentro do tanque.',
  'Mede o nível do tanque para o marcador do painel.',
  'Marcador maluco ou parado costuma ser a pista resistiva da boia gasta, às vezes atacada pelo etanol.',
  'bomba_comb tanque quadro');
P('linhas_comb', 'Tubulação de combustível', 'comb',
  'Corre por baixo do assoalho, do lado direito, até o cofre.',
  'Leva o combustível do tanque até a galeria. Só há a linha de ida.',
  'Engates rápidos e trechos de borracha ressecam. Qualquer cheiro de combustível merece inspeção.',
  'bomba_comb galeria tanque');
P('bocal', 'Bocal, tampa e portinhola do combustível', 'comb',
  'Lateral traseira direita.',
  'Entrada de combustível com tampa vedada e portinhola aberta por alavanca ao lado do banco do motorista.',
  'Tampa mal vedada solta vapor e pode acender a luz da injeção por vazamento no sistema de vapores.',
  'tanque canister laterais');
P('canister', 'Cânister (filtro de carvão)', 'comb',
  'Sob o assoalho, perto do tanque (posição aproximada no modelo).',
  'Absorve os vapores de combustível do tanque para não irem para o ar.',
  'Não complete o tanque depois do primeiro clique da bomba do posto: combustível líquido encharca o carvão.',
  'tanque purga bocal');
P('purga', 'Válvula de purga do cânister', 'comb',
  'No coletor de admissão, do lado direito.',
  'A central abre esta válvula para o motor queimar os vapores guardados no cânister.',
  'Travada aberta, deixa a marcha lenta ruim e dificulta a partida logo depois de abastecer.',
  'canister coletor_adm ecu');
P('res_pf', 'Reservatório da partida a frio', 'comb',
  'No cofre, do lado direito, perto do para-lama (posição aproximada no modelo: confira no seu carro antes de abastecer).',
  'Guarda gasolina para ajudar o motor a pegar no frio quando o tanque tem muito etanol.',
  'Só gasolina. Com o tanque só de gasolina ele quase não trabalha, e gasolina parada envelhece: renove a cada 2 ou 3 meses. Nunca confunda com os reservatórios de freio, arrefecimento ou lavador.',
  'bomba_pf valv_pf tubos_pf sens_ect ecu');
P('bomba_pf', 'Bomba da partida a frio', 'comb',
  'Junto ao reservatório da partida a frio.',
  'Pequena bomba elétrica, ligada pela central, que empurra a gasolina do reservatório para a admissão na partida com motor frio e etanol no tanque.',
  'Um zumbido curto na primeira partida fria é normal. Reservatório esvaziando rápido indica vazamento ou válvula travada.',
  'res_pf valv_pf ecu');
P('valv_pf', 'Eletroválvula da partida a frio', 'comb',
  'Perto do coletor de admissão.',
  'Libera ou corta a gasolina da partida a frio na hora certa.',
  'Travada aberta, deixa gasolina escorrer para o coletor: motor afogado nas primeiras partidas.',
  'bomba_pf tubos_pf coletor_adm ecu');
P('tubos_pf', 'Tubinhos da partida a frio', 'comb',
  'Sobre o coletor, um para cada cilindro.',
  'Levam a gasolina da partida a frio até perto das válvulas de admissão.',
  'Ressecam e trincam com o calor; vazamento aqui aparece como cheiro de gasolina no cofre.',
  'valv_pf coletor_adm');

/* ---------- IGNIÇÃO E SENSORES ---------- */
P('ecu', 'Central do motor (ECM)', 'ign',
  'No cofre, do lado esquerdo, perto da caixa do filtro (posição aproximada no modelo).',
  'O cérebro do motor: lê os sensores, comanda bicos, bobinas, borboleta, variador de fase, partida a frio e ventoinhas, e descobre a proporção de etanol pela sonda lambda.',
  'Depois de trocar de combustível, rode alguns quilômetros para a central se adaptar. Bateria desligada apaga os aprendizados de marcha lenta.',
  'sens_ckp sens_cmp sens_ect maf sonda sonda2 bicos bobinas tbi pedal_acel ign_chave cvtc');
P('bobinas', 'Bobinas de ignição (4)', 'ign',
  'Encaixadas no topo do motor, uma sobre cada vela, atravessando a tampa de válvulas.',
  'Cada cilindro tem a sua: transformam os 12 V em milhares de volts direto na vela, sem cabos.',
  'Bobina fraca faz o motor engasgar, tremer e a luz da injeção piscar. Trocando duas bobinas de lugar dá para ver se a falha muda de cilindro.',
  'velas ecu tampa_valv chicote');
P('velas', 'Velas de ignição (4)', 'ign',
  'No centro do cabeçote, no fundo de cada poço, embaixo das bobinas.',
  'Velas de irídio que soltam a faísca em cada cilindro. No flex o grau térmico é próprio para etanol.',
  'Use a vela indicada para o motor flex. Rosca no alumínio: rosqueie à mão e aperte com torquímetro, motor frio.',
  'bobinas cabecote pistoes tampa_valv');
P('sens_ckp', 'Sensor de rotação (CKP)', 'ign',
  'Atrás do bloco, lado esquerdo, lendo a roda dentada do virabrequim pela carcaça (posição aproximada no modelo).',
  'Informa rotação e posição do virabrequim. Sem ele a central não injeta nem dá faísca.',
  'Com defeito: o motor gira e não pega, ou apaga quando esquenta, e o conta-giros fica parado na partida.',
  'virabrequim ecu');
P('sens_cmp', 'Sensores de fase dos comandos (CMP)', 'ign',
  'Na ponta esquerda do cabeçote, lendo os dois comandos.',
  'Dizem à central a posição de cada comando: qual cilindro está em compressão e quanto o variador adiantou o comando de admissão.',
  'Com defeito o motor demora a pegar e grava falha de sincronismo ou do variador.',
  'comando cvtc ecu');
P('sens_ect', 'Sensor de temperatura da água (ECT)', 'ign',
  'Na saída d’água do cabeçote, lado esquerdo.',
  'Informa a temperatura do motor à central: com o motor frio ela enriquece a mistura, acelera a lenta e decide se usa a partida a frio.',
  'Leitura errada faz o carro beber muito, afogar no frio e a ventoinha não ligar. Barato e fácil de conferir com scanner.',
  'termostato ecu quadro ventoinha res_pf');
P('sens_det', 'Sensor de detonação', 'ign',
  'Parafusado na frente do bloco, entre os cilindros do meio.',
  'Escuta a batida de pino e faz a central atrasar a ignição para proteger o motor.',
  'Precisa do torque certo: frouxo ou apertado demais muda a leitura.',
  'bloco ecu');
P('sonda', 'Sonda lambda dianteira', 'ign',
  'No coletor de escape, antes do catalisador.',
  'Mede o oxigênio que sobra no escape para a central corrigir a mistura a cada instante. No flex é por ela que a central descobre quanto etanol há no tanque.',
  'Lenta ou contaminada: consumo alto, demora para se adaptar ao combustível e luz da injeção.',
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

/* ---------- ARREFECIMENTO ---------- */
P('radiador', 'Radiador', 'arref',
  'Na frente do carro, atrás do condensador do ar-condicionado.',
  'Troca o calor do líquido com o ar que atravessa a frente do carro. Tem tanques plásticos dos lados; a tampa de pressão fica no próprio radiador.',
  'Tanques plásticos trincam com a idade. Use o aditivo de longa duração indicado pela Nissan, na proporção certa, sem misturar tipos.',
  'tampa_rad ventoinha mang_sup mang_inf vaso condensador');
P('tampa_rad', 'Tampa do radiador', 'arref',
  'No topo do radiador, lado direito.',
  'Mantém o circuito pressurizado (sobe a temperatura de fervura) e manda o excesso para o reservatório.',
  'Nunca abra quente. Tampa com mola cansada deixa o líquido ferver e sumir; é barata.',
  'radiador vaso');
P('ventoinha', 'Eletroventiladores (2)', 'arref',
  'Atrás do radiador, um de cada lado.',
  'Puxam ar pelo radiador e pelo condensador com o carro parado ou devagar. A central liga em uma ou duas velocidades conforme a temperatura e o ar-condicionado.',
  'Se não ligarem, a temperatura sobe no trânsito e o ar gela pouco. Relés e conectores oxidam com a idade.',
  'radiador condensador sens_ect ecu caixa_fus_motor');
P('vaso', 'Reservatório de expansão', 'arref',
  'Lado direito do cofre, junto ao radiador, o reservatório translúcido (posição aproximada no modelo).',
  'Recebe o líquido que dilata e o devolve quando o motor esfria.',
  'Confira o nível com o motor frio, entre MIN e MAX. Nunca confunda com o reservatório da partida a frio ou do lavador.',
  'radiador tampa_rad');
P('termostato', 'Válvula termostática', 'arref',
  'Na ponta esquerda do cabeçote, na carcaça da saída d’água.',
  'Mantém o líquido circulando só no motor até ele esquentar e então libera o fluxo para o radiador.',
  'Travada aberta: o motor demora a esquentar, consome mais e o aquecimento é fraco. Travada fechada: superaquecimento.',
  'mang_sup radiador sens_ect cabecote');
P('bomba_agua', 'Bomba d’água', 'arref',
  'Lado direito do motor, na frente, girada pela correia de acessórios.',
  'Faz o líquido circular pelo motor e pelo radiador.',
  'Vazamento pelo furo de alívio ou ruído de rolamento pedem troca. Correia de acessórios rompida para a bomba: o motor esquenta rápido.',
  'correia_acess bloco mang_inf');
P('mang_sup', 'Mangueira superior do radiador', 'arref',
  'Da carcaça da válvula termostática, à esquerda, até o topo do radiador.',
  'Leva o líquido quente do motor ao radiador.',
  'Aperte com a mão, motor frio: mole, rachada ou estufada, troque.',
  'radiador termostato');
P('mang_inf', 'Mangueira inferior do radiador', 'arref',
  'Da parte baixa do radiador até a entrada da bomba d’água.',
  'Devolve ao motor o líquido já resfriado.',
  'Mesma inspeção da mangueira superior.',
  'radiador bomba_agua');
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
  'Comprime o gás R-134a. Uma embreagem eletromagnética na polia liga e desliga o compressor conforme a central pede.',
  'Ar que deixa de gelar de repente pode ser a embreagem do compressor (folga ou bobina) ou falta de gás. Ligue o ar uma vez por semana, mesmo no frio, para lubrificar os retentores.',
  'correia_acess tubos_ac condensador pressostato ecu');
P('condensador', 'Condensador', 'clima',
  'Na frente do radiador, logo atrás do para-choque.',
  'Radiador do ar-condicionado: o gás quente que sai do compressor perde calor e vira líquido. O filtro secador vem montado na lateral dele.',
  'Colmeia suja ou amassada faz o ar gelar pouco no trânsito. Lave com água de baixa pressão, por trás.',
  'compressor filtro_secador ventoinha tubos_ac radiador');
P('filtro_secador', 'Filtro secador', 'clima',
  'Na lateral direita do condensador.',
  'Retém umidade e partículas do circuito.',
  'Troque sempre que o circuito for aberto para reparo: ele satura de umidade.',
  'condensador tubos_ac pressostato');
P('pressostato', 'Sensor de pressão do gás', 'clima',
  'Na linha de alta pressão, perto do condensador.',
  'Informa a pressão do gás à central, que desliga o compressor se ela ficar baixa ou alta demais e decide a velocidade das ventoinhas.',
  'Ar que não liga pode ser só falta de gás: o sensor impede o compressor de girar sem carga.',
  'filtro_secador compressor tubos_ac ecu');
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
  'Troque a cada 15.000 a 20.000 km ou uma vez por ano. Filtro entupido deixa o ventilador fraco e o ar com cheiro.',
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
  'Três botões giratórios: temperatura, velocidade do ventilador e direção do ar, mais o A/C e a recirculação.',
  'Botão A/C acende e o compressor não liga: veja o fusível, o relé, a pressão do gás e a embreagem do compressor.',
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
  'A malha sofre mais quando o tirante do motor está gasto; vazamento aqui vira ronco.',
  'catalisador silenc_inter coxins_esc coxim_tras');
P('silenc_inter', 'Silencioso intermediário', 'esc',
  'No túnel central, sob o assoalho.',
  'Primeira etapa de redução do ruído.',
  'Trajetos curtos deixam água dentro, que enferruja a peça por dentro.',
  'tubo_diant tubo_tras');
P('tubo_tras', 'Tubo traseiro', 'esc',
  'Do silencioso intermediário até o silencioso traseiro, passando sobre o eixo traseiro.',
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
  'Teste a cada 6 meses; dura de 2 a 4 anos. Depois de desligar a bateria, a central reaprende a marcha lenta: deixe o motor em lenta alguns minutos antes de rodar.',
  'cabos_bat alternador motor_partida caixa_fus_motor');
P('cabos_bat', 'Cabos da bateria e aterramentos', 'ele',
  'Da bateria ao motor de partida, à caixa de fusíveis e à carroceria.',
  'Conduzem a corrente da partida; o negativo fecha o circuito pela carroceria e pelo motor.',
  'Terminal oxidado ou frouxo causa clique na partida e painel apagando. Limpe, aperte e proteja com vaselina.',
  'bateria motor_partida alternador caixa_fus_motor');
P('caixa_fus_motor', 'Caixa de fusíveis e relés do motor (IPDM)', 'ele',
  'Lado esquerdo do cofre, junto à bateria.',
  'Módulo de distribuição de energia do cofre: fusíveis e relés da injeção, da bomba de combustível, das ventoinhas, do compressor do ar e dos faróis, comandados também pela rede de módulos.',
  'Umidade e oxidação causam falhas intermitentes. Fusível queimado se troca por outro de mesmo valor.',
  'bateria chicote ventoinha compressor ecu caixa_fus_painel bomba_comb');
P('caixa_fus_painel', 'Caixa de fusíveis do painel', 'ele',
  'Sob o painel, lado do motorista, atrás de uma tampinha.',
  'Fusíveis dos circuitos internos: rádio, luzes internas, tomada, vidros, travas e módulos.',
  'Fusível queimado se troca por outro de mesmo valor; se queimar de novo, procure curto.',
  'bateria caixa_fus_motor ign_chave bcm chicote');
P('bcm', 'Módulo da carroceria (BCM)', 'ele',
  'Sob o painel, do lado do motorista (posição aproximada no modelo).',
  'Controla luzes, limpadores, travas, vidros, alarme e luzes de aviso, conversando com a central do motor, o ABS e a direção elétrica pela rede do carro.',
  'Luzes ou travas com comportamento estranho e bateria descarregando com o carro parado podem vir de um módulo que não "dorme": diagnóstico com scanner.',
  'caixa_fus_painel comutadores fech_portas farois limpador quadro');
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
  'Cantos dianteiros, puxados para trás sobre os para-lamas.',
  'Farol baixo, alto, luz de posição e pisca no mesmo conjunto, com lente de policarbonato.',
  'Lente amarelada ilumina menos e pede polimento. Regule o facho depois de trocar a lâmpada.',
  'comutadores caixa_fus_motor para_choque_d bcm');
P('lanternas', 'Lanternas traseiras', 'ele',
  'Cantos traseiros, altas, subindo pela coluna ao lado da tampa traseira.',
  'Luz de posição, freio, seta e ré.',
  'As lâmpadas se trocam por dentro do porta-malas, tirando a tampinha do acabamento lateral.',
  'luz_freio pedal_freio laterais bcm');
P('piscas_lat', 'Repetidores laterais', 'ele',
  'Nos para-lamas dianteiros.',
  'Mostram a seta para quem está ao lado.',
  'Lâmpada pequena de encaixe; a lente sai empurrando para um lado.',
  'comutadores paralamas');
P('luz_freio', 'Luz de freio alta', 'ele',
  'No alto da tampa traseira, acima do vidro.',
  'Terceira luz de freio, bem visível para quem vem atrás.',
  'Acende junto com as lanternas pelo interruptor do pedal. Infiltração de água queima as lâmpadas.',
  'lanternas pedal_freio tampa_tras');
P('luz_placa', 'Luzes da placa', 'ele',
  'Na tampa traseira, acima da placa.',
  'Iluminam a placa traseira.',
  'Obrigatórias; as lâmpadas são pequenas e baratas.',
  'tampa_tras');
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
P('limpador_tras', 'Limpador traseiro', 'ele',
  'Na tampa traseira, com o motor por dentro do forro.',
  'Limpa o vidro traseiro; tem esguicho próprio.',
  'O eixo engripa sem uso: acione de vez em quando. Palheta ressecada risca o vidro.',
  'tampa_tras vidro_tras lavador');
P('lavador', 'Reservatório e bomba do lavador', 'ele',
  'Atrás do para-choque dianteiro, do lado direito; o bocal fica no cofre.',
  'Esguicha água no para-brisa e no vidro traseiro.',
  'Água com o aditivo próprio; detergente resseca as borrachas.',
  'limpador limpador_tras');
P('ign_chave', 'Comutador de ignição e imobilizador', 'ele',
  'Na coluna de direção.',
  'Liga os circuitos e aciona a partida. Uma antena em volta do tambor lê o chip da chave (sistema NATS) e autoriza a central.',
  'Luz do imobilizador piscando e motor que não pega: chave não reconhecida. Teste a reserva.',
  'ecu motor_partida coluna caixa_fus_painel');
P('comutadores', 'Chaves de seta, faróis e limpador', 'ele',
  'Atrás do volante.',
  'Comandam setas, faróis, lavador e limpadores dianteiro e traseiro.',
  'Mau contato faz luzes acenderem ou piscarem fora de hora.',
  'volante_dir limpador farois bcm');

/* ---------- TRANSMISSÃO ---------- */
P('cambio', 'Câmbio manual de 6 marchas', 'trans',
  'Lado esquerdo do motor.',
  'Seis marchas sincronizadas e ré, engates por cabo; a sexta funciona como marcha de economia na estrada. O diferencial fica na mesma carcaça e usa o mesmo óleo.',
  'Use o óleo de câmbio indicado pela Nissan (75W-85 GL-4 nas referências do mesmo câmbio), cerca de 2 L. Óleo errado deixa as trocas duras, principalmente a frio.',
  'embreagem diferencial cabos_cambio semieixos coxim_cambio cil_emb_aux');
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
  'No corta-fogo, lado do motorista, ao lado do servo-freio. O fluido vem do reservatório do freio.',
  'Transforma o movimento do pedal em pressão hidráulica. Usa o mesmo fluido de freio.',
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
  'Aciona o cilindro-mestre da embreagem. Um interruptor no pedal só deixa dar partida com ele pisado.',
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
  'Seleciona as seis marchas pelos cabos; a ré tem trava (anel que se levanta).',
  'Folga excessiva: revise as buchas da base, as pontas dos cabos e o tirante do motor.',
  'cabos_cambio console');

/* ---------- FREIOS ---------- */
P('pedal_freio', 'Pedal do freio', 'freio',
  'Assoalho do motorista, no centro.',
  'Aciona o servo-freio; o interruptor do pedal acende as luzes de freio.',
  'Pedal baixo ou esponjoso: ar no sistema, fluido velho ou vazamento.',
  'servo luz_freio lanternas');
P('servo', 'Servo-freio', 'freio',
  'No corta-fogo, lado do motorista.',
  'Usa o vácuo do motor para multiplicar a força do seu pé. Tem assistência de frenagem de emergência (BAS) que reforça a força numa pisada brusca.',
  'Pedal muito duro com o motor ligado: mangueira de vácuo solta ou servo furado.',
  'pedal_freio cil_mestre mang_vacuo corta_fogo');
P('cil_mestre', 'Cilindro-mestre', 'freio',
  'Na frente do servo-freio.',
  'Transforma a força do pedal em pressão hidráulica, em dois circuitos cruzados, que passam pela unidade do ABS.',
  'Pedal que afunda devagar parado no semáforo indica vedação interna gasta.',
  'servo reserv_freio tubos_freio abs');
P('reserv_freio', 'Reservatório do fluido de freio', 'freio',
  'Sobre o cilindro-mestre.',
  'Guarda o fluido DOT 3 do freio e da embreagem.',
  'Troca a cada 2 ou 3 anos (o fluido absorve água). O nível desce devagar com o desgaste das pastilhas; queda rápida é vazamento.',
  'cil_mestre cil_emb_mestre');
P('abs', 'Unidade do ABS', 'freio',
  'No cofre, do lado esquerdo, perto do cilindro-mestre, presa por um suporte com coxins (posição aproximada no modelo).',
  'Bloco hidráulico com válvulas, bomba e módulo eletrônico. Numa freada forte, alivia e reaplica a pressão de cada roda muitas vezes por segundo para ela não travar; também faz a distribuição eletrônica entre frente e traseira (EBD).',
  'Luz do ABS acesa: o freio comum continua funcionando, mas sem o antitravamento. A causa mais comum é um sensor de roda ou o anel dentado sujo.',
  'cil_mestre tubos_freio sens_roda caixa_fus_motor');
P('sens_roda', 'Sensores de rotação das rodas', 'freio',
  'Um em cada roda, presos às mangas e aos cubos, lendo um anel dentado.',
  'Informam a velocidade de cada roda ao ABS; o velocímetro e a direção elétrica também usam esse sinal.',
  'Cabo rompido ou sensor sujo de barro acendem a luz do ABS. Cuidado com o cabo ao mexer na suspensão.',
  'abs mangas cubo_tras');
P('tubos_freio', 'Tubulações e flexíveis de freio', 'freio',
  'Do cilindro-mestre à unidade do ABS e dela até cada roda.',
  'Levam o fluido sob pressão.',
  'Flexível rachado ou estufado deve ser trocado.',
  'cil_mestre abs pincas tambores');
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
  'Controlam o balanço das molas e guiam a roda.',
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
  'Bucha traseira rachada deixa o carro instável em freadas e batendo em buracos.',
  'mangas subchassi barra_estab');
P('barra_estab', 'Barra estabilizadora e bieletas', 'susp',
  'Atrás do eixo dianteiro, de um lado ao outro, ligada aos amortecedores.',
  'Reduz a inclinação da carroceria nas curvas.',
  'Bieletas gastas fazem toc-toc em piso irregular: é o barulho mais comum da frente.',
  'amort_diant subchassi bandejas');
P('subchassi', 'Subchassi dianteiro', 'susp',
  'Sob o motor, de um lado ao outro.',
  'Quadro que segura as bandejas, a barra estabilizadora, a caixa de direção e o tirante do motor.',
  'Depois de pancadas por baixo, revise ferrugem e parafusos.',
  'bandejas barra_estab coxim_tras caixa_dir monobloco');
P('mangas', 'Mangas de eixo, cubos e rolamentos', 'susp',
  'Atrás de cada roda dianteira.',
  'Articulam com a direção, carregam o rolamento da roda e recebem o semieixo, a pinça e o sensor do ABS.',
  'Ronco que muda de tom nas curvas é rolamento.',
  'amort_diant bandejas barras_axiais semieixos discos pincas sens_roda');
P('eixo_tras', 'Eixo traseiro de torção', 'susp',
  'Sob a traseira, de uma roda à outra, na frente do estepe.',
  'Dois braços longitudinais unidos por uma travessa que torce quando uma roda sobe mais que a outra: funciona como barra estabilizadora. É simples, robusto e ocupa pouco espaço.',
  'Raramente quebra; as buchas da frente dos braços é que gastam. Batida forte em guia pode entortar o eixo e mudar a geometria (pneu gastando torto).',
  'buchas_eixo cubo_tras amort_tras molas_tras monobloco');
P('buchas_eixo', 'Buchas do eixo traseiro', 'susp',
  'Na frente dos dois braços do eixo traseiro, presas à carroceria.',
  'Articulação de borracha que deixa o eixo subir e descer e filtra os impactos.',
  'Rachadas fazem estalo em lombada e deixam a traseira "esterçando". Troca com prensa e ferramenta própria.',
  'eixo_tras monobloco');
P('cubo_tras', 'Cubos e rolamentos traseiros', 'susp',
  'Nas pontas do eixo traseiro, dentro dos tambores.',
  'Cubo com rolamento integrado, parafusado no eixo, onde giram o tambor e a roda; leva o anel do sensor do ABS.',
  'Ronco que aumenta com a velocidade pode ser rolamento traseiro.',
  'eixo_tras tambores sens_roda');
P('amort_tras', 'Amortecedores traseiros', 'susp',
  'Atrás das rodas traseiras, do eixo até a carroceria.',
  'Controlam o balanço da traseira. Ficam separados das molas.',
  'Troque em par. O acesso de cima é por dentro do porta-malas.',
  'eixo_tras molas_tras');
P('molas_tras', 'Molas traseiras', 'susp',
  'Sobre o eixo traseiro, na frente dos amortecedores, apoiadas em coxins de borracha.',
  'Sustentam o peso da traseira.',
  'Carro arriado atrás sem carga: mola cansada. Os coxins de apoio ressecam e fazem rangido.',
  'eixo_tras amort_tras');
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
  'Sobre as rodas de aço (se as suas forem de liga leve, ignore).',
  'Acabamento plástico encaixado por pressão.',
  'Tire antes de trocar pneu para chegar às porcas.',
  'rodas');
P('estepe', 'Estepe', 'susp',
  'No poço do porta-malas, sob o assoalho.',
  'Roda reserva, presa por um parafuso central.',
  'Calibre junto com os outros pneus (o temporário usa pressão mais alta).',
  'porta_malas macaco');
P('macaco', 'Macaco e chave de roda', 'susp',
  'No porta-malas, junto ao estepe.',
  'Ferramentas para trocar pneu.',
  'Use só nos pontos de apoio da soleira, marcados por dois recortes.',
  'estepe rodas');

/* ---------- DIREÇÃO ---------- */
P('volante_dir', 'Volante', 'dir',
  'À frente do motorista, com o airbag no centro.',
  'Comanda a direção elétrica: leve em manobra e mais firme na estrada, porque a assistência diminui com a velocidade.',
  'Folga antes de a roda responder: revise terminais e caixa.',
  'coluna airbag_mot cabo_espiral comutadores');
P('coluna', 'Coluna de direção', 'dir',
  'Do volante até a caixa, atravessando o corta-fogo.',
  'Transmite o giro do volante, segura o comutador de ignição e carrega o motor da assistência elétrica.',
  'Estalos na junta da coluna aparecem com os anos.',
  'volante_dir caixa_dir ign_chave eps');
P('eps', 'Motor e módulo da direção elétrica (EPS)', 'dir',
  'Na coluna de direção, sob o painel, atrás do volante.',
  'Um sensor de torque na coluna percebe a força que você faz e o motor elétrico ajuda a girar, com mais força em manobra e menos em velocidade. Não usa óleo, bomba nem mangueiras.',
  'Luz da direção acesa e volante pesado: falha no sensor, no motor ou no módulo, ou tensão baixa da bateria. Volante muito tempo no batente em manobras faz o sistema reduzir a ajuda para não esquentar.',
  'coluna volante_dir caixa_fus_painel bateria sens_roda');
P('caixa_dir', 'Caixa de direção', 'dir',
  'Atrás do motor, presa ao subchassi.',
  'Pinhão e cremalheira: o pinhão, na ponta da coluna, empurra a cremalheira para os lados. Toda a assistência vem da coluna, por isso a caixa é mecânica.',
  'Coifas rasgadas deixam entrar água e poeira; folga dá toc em piso ruim.',
  'coluna barras_axiais subchassi');
P('barras_axiais', 'Barras axiais e terminais', 'dir',
  'Das pontas da caixa até as mangas.',
  'Empurram as mangas para esterçar. O alinhamento é ajustado nos terminais.',
  'Folga deixa o volante torto e gasta pneu. Alinhe depois de trocar.',
  'caixa_dir mangas');

/* ---------- INTERIOR E SEGURANÇA ---------- */
P('painel', 'Painel e porta-luvas', 'int',
  'Frente da cabine.',
  'Estrutura que abriga instrumentos, rádio, comandos do ar, airbag do passageiro e porta-luvas duplo.',
  'Barulhos costumam ser presilhas soltas. Atrás dele ficam a caixa de ar e o evaporador.',
  'quadro radio caixa_ar comandos_clima airbag_pass');
P('quadro', 'Quadro de instrumentos', 'int',
  'Atrás do volante.',
  'Velocímetro, conta-giros, combustível, temperatura e o computador de bordo, com as luzes-espia do ABS, do airbag, da direção elétrica, da injeção e do imobilizador.',
  'Luz do airbag, do ABS ou da direção acesa com o motor ligado pede diagnóstico.',
  'sens_ect boia sens_oleo srs abs eps bcm');
P('radio', 'Rádio', 'int',
  'Centro do painel.',
  'Som com CD e entrada auxiliar, conforme a versão.',
  'Rádio original pode pedir código depois de desligar a bateria; o código costuma estar no manual.',
  'alto_falantes bateria');
P('airbag_mot', 'Airbag do motorista', 'int',
  'No centro do volante.',
  'Bolsa que infla numa batida frontal forte.',
  'Nunca mexa com a bateria ligada. Desligue e espere pelo menos 3 minutos antes de soltar o módulo.',
  'volante_dir cabo_espiral srs');
P('airbag_pass', 'Airbag do passageiro', 'int',
  'No alto do painel, do lado do passageiro.',
  'Bolsa maior que protege o passageiro da frente.',
  'Não cole nem prenda objetos na tampa do airbag.',
  'painel srs');
P('srs', 'Central do airbag (SRS)', 'int',
  'Embaixo do console central, presa ao assoalho.',
  'Sente a desaceleração da batida, dispara os airbags e os pré-tensionadores dos cintos.',
  'Depois de um disparo, a central precisa ser trocada. Luz do airbag acesa pede diagnóstico.',
  'airbag_mot airbag_pass cabo_espiral cintos quadro');
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
  'Reclináveis; o do motorista tem regulagem de altura na linha 2010 em diante.',
  'Limpe e lubrifique os trilhos.',
  'cintos');
P('banco_tras', 'Banco traseiro', 'int',
  'Cabine, atrás.',
  'Assento e encosto bipartidos; em muitos Tiida o banco corre para a frente e para trás, trocando espaço das pernas por porta-malas. Embaixo do assento fica a tampa de acesso à bomba de combustível.',
  'Trilhos sujos travam o banco: limpe e lubrifique.',
  'tanque bomba_comb porta_malas');
P('cintos', 'Cintos de segurança', 'int',
  'Colunas e assoalho.',
  'Seguram os ocupantes numa colisão; os da frente têm pré-tensionador ligado ao airbag.',
  'Cinto que não trava num puxão forte deve ser trocado. Depois de um disparo, os pré-tensionadores também.',
  'bancos_diant srs monobloco');
P('forros_portas', 'Forros das portas dianteiras', 'int',
  'Lado de dentro das portas da frente.',
  'Acabamento com puxador, maçaneta interna e os botões dos vidros elétricos; esconde a máquina de vidro e a fechadura.',
  'Presilha quebrada faz o forro vibrar e deixa entrar ar e ruído.',
  'portas maq_vidro fech_portas');
E('forros_portas', 'encaixada', 'Presilhas plásticas em volta, parafusos no puxador e na maçaneta interna, e os conectores dos botões dos vidros.');
P('forros_portas_tras', 'Forros das portas traseiras', 'int',
  'Lado de dentro das portas de trás.',
  'Acabamento com puxador, maçaneta interna e o botão do vidro; esconde a máquina de vidro e a fechadura.',
  'Presilha quebrada faz o forro vibrar.',
  'portas_tras maq_vidro_tras fech_portas');
E('forros_portas_tras', 'encaixada', 'Presilhas plásticas em volta, parafuso no puxador e na maçaneta interna, e o conector do botão do vidro.');
P('porta_malas', 'Porta-malas (cerca de 289 L)', 'int',
  'Atrás do banco traseiro, aberto pela tampa traseira.',
  'Compartimento de carga com cobertura removível; por ele se acessam o estepe, as lanternas e o topo dos amortecedores traseiros.',
  'Água parada no porta-malas: revise a borracha da tampa, a vedação das lanternas e o cordão do vidro traseiro.',
  'estepe tampa_tras lanternas macaco banco_tras');
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
  'corta_fogo soleiras colunas teto laterais painel_tras travessa_frontal subchassi eixo_tras coxim_dir');
E('monobloco', 'soldada', 'Chapas unidas por pontos de solda e cola estrutural, com massa de vedação nas emendas. Não se desmonta: dano estrutural se repara em funilaria, com gabarito.');
P('corta_fogo', 'Parede corta-fogo', 'carro',
  'Entre o cofre e a cabine, com a caixa de ar (torpedo) em cima.',
  'Separa motor e cabine e recebe o servo-freio, os pedais, a coluna de direção e as passagens de chicote, cabos e tubos do ar.',
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
  'Topo da cabine, alto e comprido até a tampa traseira.',
  'Chapa que fecha a cabine e trabalha com as colunas e as travessas; na borda de trás recebe as dobradiças da tampa traseira.',
  'Sol e chuva degradam o verniz; encere com alguma frequência.',
  'colunas laterais para_brisa dobr_tampa monobloco');
E('teto', 'soldada', 'Soldado a ponto nas bordas: sobre as portas, na moldura do para-brisa e na abertura da tampa traseira, com massa de vedação. Não se desmonta.');
P('laterais', 'Laterais traseiras e colunas traseiras', 'carro',
  'Atrás das portas traseiras, em volta das rodas de trás, até as lanternas e a abertura da tampa.',
  'Chapa externa que forma a caixa da roda traseira, as colunas de trás (com o vidro lateral fixo) e o contorno das lanternas e da tampa traseira.',
  'Reparo exige funilaria. Vigie ferrugem na borda da caixa de roda e embaixo das lanternas.',
  'soleiras teto painel_tras caixas_roda lanternas vidros_laterais bocal para_choque_t');
E('laterais', 'soldada', 'Soldadas a ponto na coluna central, na soleira, na caixa de roda interna, junto ao teto e no painel traseiro, com massa de vedação por cima.');
P('painel_tras', 'Painel traseiro', 'carro',
  'Embaixo da tampa traseira, atrás do para-choque.',
  'Chapa que fecha a traseira e recebe o batente da fechadura da tampa e os apoios do para-choque.',
  'Batidas leves na traseira amassam o painel por trás do para-choque; olhe por dentro do porta-malas.',
  'tampa_tras fech_tampa para_choque_t laterais viga_traseira monobloco');
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
  'dobradicas fech_portas maq_vidro vidros_portas retrovisores borrachas forros_portas');
E('portas', 'parafusada', 'Duas dobradiças na coluna dianteira e um limitador. Atrás, a fechadura engata no batente parafusado na coluna central. Para tirar: solte o conector do chicote e o limitador, depois as dobradiças, com a porta apoiada.');
P('portas_tras', 'Portas traseiras', 'carro',
  'Laterais, atrás.',
  'Mesma construção das dianteiras, com máquina de vidro elétrica, trava e alto-falante. Presas na coluna central; abrem num ângulo grande para facilitar a entrada.',
  'Trava de segurança para crianças fica na borda traseira da porta.',
  'dobradicas fech_portas maq_vidro_tras vidros_portas_tras borrachas forros_portas_tras');
E('portas_tras', 'parafusada', 'Duas dobradiças na coluna central e um limitador; atrás, a fechadura engata no batente da lateral traseira. Para tirar: conector, limitador e dobradiças, com a porta apoiada.');
P('dobradicas', 'Dobradiças e limitadores das portas', 'carro',
  'Na borda dianteira de cada porta, escondidas entre a porta e a coluna.',
  'Sustentam a porta e deixam ela girar; o limitador segura a porta aberta.',
  'Porta caída raspa na soleira: pinos e buchas gastos. Lubrifique uma vez por ano.',
  'portas portas_tras colunas');
E('dobradicas', 'parafusada', 'Parafusadas na coluna e na porta; o limitador é parafusado na coluna e corre dentro da porta.');
P('fech_portas', 'Fechaduras, travas elétricas e maçanetas', 'carro',
  'Borda traseira das portas; os batentes ficam nas colunas.',
  'A fechadura, dentro da porta, engata no batente em U. A trava elétrica é um atuador acoplado a ela, comandado pela chave e pelo botão do motorista.',
  'Atuador de trava fraco deixa uma porta sem travar: é peça de troca comum.',
  'portas portas_tras laterais bcm');
E('fech_portas', 'parafusada', 'Fechadura presa por três parafusos na borda da porta; batente com dois parafusos na coluna; maçaneta presa por dentro da porta.');
P('retrovisores', 'Retrovisores externos', 'carro',
  'Na frente das portas dianteiras.',
  'Visão lateral, com regulagem elétrica.',
  '',
  'portas');
E('retrovisores', 'parafusada', 'Três porcas por dentro da porta, sob o acabamento triangular.');
P('tampa_tras', 'Tampa traseira', 'carro',
  'Traseira, do teto até o para-choque.',
  'Porta do porta-malas com o vidro, o limpador, a luz de freio alta, a placa e as luzes da placa. Fica aberta sozinha graças a dois amortecedores a gás.',
  'Amortecedores cansados deixam a tampa cair; borracha ressecada deixa entrar água.',
  'dobr_tampa amort_tampa fech_tampa vidro_tras limpador_tras luz_placa luz_freio porta_malas borrachas');
E('tampa_tras', 'parafusada', 'Duas dobradiças presas na borda do teto (porcas por dentro, sob o forro) e dois amortecedores a gás com pinos esféricos. Embaixo, a fechadura engata no batente do painel traseiro.');
P('dobr_capo', 'Dobradiças do capô', 'carro',
  'Nos cantos de trás do capô.',
  'Deixam o capô girar para abrir.',
  'Lubrifique; dobradiça dura faz o capô abrir torto.',
  'capo paralamas');
E('dobr_capo', 'parafusada', 'Parafusadas na carroceria e no capô; a folga dos furos serve para alinhar.');
P('dobr_tampa', 'Dobradiças da tampa traseira', 'carro',
  'Na borda de trás do teto.',
  'Deixam a tampa girar para cima.',
  'Ferrugem em volta delas indica infiltração de água: revise a vedação.',
  'tampa_tras teto');
E('dobr_tampa', 'parafusada', 'Porcas no teto, por dentro, sob o forro, e parafusos na tampa.');
P('amort_tampa', 'Amortecedores da tampa traseira', 'carro',
  'Nas laterais da abertura da tampa traseira.',
  'Molas a gás que ajudam a levantar e seguram a tampa aberta.',
  'Troca simples quando perdem gás; troque os dois juntos.',
  'tampa_tras');
E('amort_tampa', 'parafusada', 'Encaixados em pinos esféricos com trava de mola: levante a trava com uma chave de fenda pequena e puxe.');
P('fech_tampa', 'Fechadura e batente da tampa traseira', 'carro',
  'Embaixo da tampa; o batente fica no painel traseiro.',
  'Trava a tampa fechada; abre pela chave, pelo botão da tampa ou pelo controle, conforme a versão.',
  'Lubrifique; tampa que não fecha de primeira pede regulagem do batente.',
  'tampa_tras painel_tras');
E('fech_tampa', 'parafusada', 'Fechadura parafusada na tampa e batente parafusado no painel traseiro.');
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
  'Na tampa traseira.',
  'Vidro com desembaçador elétrico, colado na tampa; sobe junto com ela.',
  'Não raspe o lado de dentro: os fios do desembaçador ficam ali.',
  'tampa_tras limpador_tras');
E('vidro_tras', 'colada', 'Colado na tampa com cordão de poliuretano.');
P('vidros_laterais', 'Vidros laterais traseiros', 'carro',
  'Atrás das portas traseiras, nas colunas de trás.',
  'Vidros fixos que clareiam a traseira e melhoram a visão em manobras.',
  'Vidro chiando ou com água entrando indica cola descolada.',
  'laterais teto borrachas');
E('vidros_laterais', 'colada', 'Fixos, colados na lateral com cordão de poliuretano e acabamento de borracha em volta.');
P('vidros_portas', 'Vidros das portas dianteiras', 'carro',
  'Nas portas da frente.',
  'Vidros móveis que correm em canaletas de borracha.',
  'Canaletas limpas poupam a máquina de vidro.',
  'portas maq_vidro borrachas');
E('vidros_portas', 'encaixada', 'Correm em canaletas de borracha e se prendem à máquina por dois parafusos, acessíveis com o forro da porta tirado.');
P('vidros_portas_tras', 'Vidros das portas traseiras', 'carro',
  'Nas portas de trás.',
  'Vidros móveis; descem quase até o fim.',
  'Canaletas limpas poupam a máquina de vidro.',
  'portas_tras maq_vidro_tras borrachas');
E('vidros_portas_tras', 'encaixada', 'Correm em canaletas de borracha e se prendem à máquina por parafusos, acessíveis com o forro tirado.');

/* plásticos, acabamentos e vedações */
P('para_choque_d', 'Para-choque dianteiro', 'carro',
  'Frente.',
  'Capa plástica que absorve toques, com a entrada de ar inferior e o suporte da placa.',
  'Presilhas e guias quebradas deixam frestas e barulhos.',
  'viga_dianteira grade grade_inf farois paralamas travessa_frontal');
E('para_choque_d', 'parafusada', 'Capa plástica presa por parafusos e presilhas em cima (na travessa, sob o capô), nas caixas de roda e embaixo, e encaixada nas guias laterais.');
P('para_choque_t', 'Para-choque traseiro', 'carro',
  'Traseira, embaixo da tampa.',
  'Capa plástica que absorve toques e protege o painel traseiro.',
  '',
  'painel_tras viga_traseira laterais lanternas');
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
  'Folhas acumuladas entopem os drenos e a água vai parar no tapete. Limpe de vez em quando.',
  'capo colunas limpador caixa_ar corta_fogo');
E('grade_torpedo', 'encaixada', 'Presilhas e um encaixe sob a borda do para-brisa. Os braços do limpador saem antes.');
P('caixas_roda', 'Caixas de roda e forros', 'carro',
  'Em volta das 4 rodas.',
  'Forros plásticos protegem para-lamas e cofre de água, barro e pedras.',
  'Lave por dentro para não acumular barro.',
  'paralamas laterais monobloco');
E('caixas_roda', 'encaixada', 'Forros presos por presilhas plásticas na borda e por parafusos na caixa interna.');
P('borrachas', 'Borrachas de vedação', 'carro',
  'Em volta das portas, da tampa traseira, sob o capô e nos vidros.',
  'Vedam contra água, poeira e ruído e amortecem o fechamento.',
  'Passe protetor à base de silicone a cada poucos meses. Borracha rasgada deixa entrar água.',
  'portas portas_tras tampa_tras capo vidros_portas para_brisa');
E('borrachas', 'encaixada', 'Encaixadas por pressão nas abas das aberturas e nas canaletas dos vidros.');
};
