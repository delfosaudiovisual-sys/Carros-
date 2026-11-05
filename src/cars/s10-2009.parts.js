/* ===== Chevrolet S10 Executive 2009, cabine dupla 4x4, 2.8 turbodiesel eletrônico (MWM Sprint): catálogo de peças =====
   P(id, nome, sistema, onde fica, o que faz, manutenção, relacionadas); E(id, tipo de fixação, como é presa). */
(window.CAR_PARTS = window.CAR_PARTS || {})['s10-2009'] = function (P, E) {

/* ---------- MOTOR ---------- */
P('bloco', 'Bloco do motor', 'motor',
  'No meio do cofre, montado em pé e no sentido do comprimento (longitudinal), com o volante voltado para trás.',
  'A peça principal do motor diesel de 2,8 litros e 4 cilindros em linha (93 × 103 mm, taxa de 17,8:1): forma os cilindros, sustenta o virabrequim em 5 mancais e recebe cabeçote, cárter e caixa de distribuição.',
  'Não tem manutenção própria; vazamentos de óleo ou de água nas juntas aparecem com os anos. Superaquecer o diesel pode trincar o bloco ou o cabeçote.',
  'cabecote virabrequim pistoes carter engrenagens coxim_dir coxim_esq');
E('bloco', 'parafusada', 'Cabeçote, cárter, caixa de distribuição e capa seca são parafusados no bloco. O conjunto apoia em dois coxins laterais na travessa do chassi e no coxim do câmbio, atrás.');
P('cabecote', 'Cabeçote', 'motor',
  'Em cima do bloco.',
  'Tem as válvulas, o comando e os injetores do common rail no meio de cada cilindro. Do lado esquerdo entra o ar (coletor de admissão); do lado direito sai o escape para o turbo.',
  'Folga das válvulas conferida e regulada a cada 30.000 km (plano da GM). Superaquecimento empena o cabeçote e queima a junta.',
  'bloco junta_cab tampa_valv comando valvulas bicos coletor_adm coletor_esc');
P('junta_cab', 'Junta do cabeçote', 'motor',
  'Entre o bloco e o cabeçote.',
  'Veda a combustão (no diesel, pressão muito alta), o óleo e a água entre bloco e cabeçote.',
  'Água no óleo, fumaça branca, bolhas no reservatório ou perda de água sem vazamento visível indicam junta queimada. Na troca, use a espessura certa (medida pela saliência dos pistões).',
  'cabecote bloco vaso');
P('tampa_valv', 'Tampa de válvulas', 'motor',
  'Em cima do cabeçote, sob o intercooler.',
  'Fecha o cabeçote por cima e guarda o óleo que lubrifica o comando e os balancins.',
  'Junta ressecada vaza óleo sobre o motor. Ela sai para a regulagem das válvulas.',
  'cabecote tampa_oleo respiro intercooler');
P('comando', 'Comando de válvulas', 'motor',
  'Dentro do cabeçote, ao longo do motor.',
  'Abre e fecha as válvulas na hora certa. É movido por engrenagens a partir do virabrequim: este motor não tem correia dentada.',
  'Sem troca periódica. Ruído de batida no cabeçote com o motor frio pode ser folga de válvulas fora do especificado.',
  'cabecote valvulas engrenagens');
P('valvulas', 'Válvulas e balancins', 'motor',
  'No cabeçote, sob a tampa de válvulas.',
  'Válvulas de admissão e de escape com molas e balancins de regulagem: abrem para o ar entrar e o gás sair.',
  'Folga regulável: conferir a cada 30.000 km com o motor frio, pelos parafusos de regulagem dos balancins (valores no manual de oficina).',
  'cabecote comando tampa_valv');
P('pistoes', 'Pistões', 'motor',
  'Dentro dos cilindros.',
  'Recebem a força da combustão do diesel e a passam às bielas. A câmara de combustão fica escavada na cabeça do pistão.',
  'Sem manutenção. Fumaça azul e consumo de óleo acima de 0,8 L a cada 1.000 km (limite do manual) indicam anéis gastos.',
  'bielas bloco virabrequim');
P('bielas', 'Bielas', 'motor',
  'Entre os pistões e o virabrequim.',
  'Transformam o sobe e desce dos pistões em giro do virabrequim.',
  'Barulho metálico grave que aumenta com a carga pede parada imediata: pode ser bronzina de biela.',
  'pistoes virabrequim');
P('virabrequim', 'Virabrequim', 'motor',
  'Na parte de baixo do bloco, ao longo do motor, em 5 mancais.',
  'Gira com a força dos pistões. Na frente leva a engrenagem da distribuição e a polia; atrás, o volante.',
  'Troca de óleo no prazo e com o óleo certo (API CG-4 ou superior, 15W40) é o que preserva as bronzinas.',
  'bielas volante_motor polia_vira engrenagens bomba_oleo');
P('volante_motor', 'Volante do motor', 'motor',
  'Atrás do motor, dentro da capa seca do câmbio.',
  'Disco pesado que suaviza o giro e onde a embreagem se apoia. Tem a cremalheira em que o motor de partida engrena.',
  'Na troca da embreagem, confira trincas de calor e o desgaste da face.',
  'virabrequim embreagem motor_partida');
P('polia_vira', 'Polia do virabrequim', 'motor',
  'Na frente do motor, embaixo.',
  'Move a correia de acessórios (alternador, bomba d’água, direção hidráulica e compressor do ar).',
  'Barulho ou vibração na frente do motor pode ser a borracha da polia soltando.',
  'virabrequim correia_acess');
P('engrenagens', 'Engrenagens da distribuição', 'motor',
  'Na frente do motor, dentro da tampa da distribuição.',
  'Trem de engrenagens que liga o virabrequim ao comando e à bomba de alta pressão. Faz o papel da correia dentada, mas não tem troca periódica.',
  'Sem troca programada. Ao desmontar, alinhe as marcas das engrenagens: fora do ponto o motor não pega ou bate válvula.',
  'virabrequim comando bomba_alta tampa_dist');
P('tampa_dist', 'Tampa da distribuição', 'motor',
  'Na frente do motor, atrás das polias.',
  'Fecha as engrenagens da distribuição, apoia o retentor dianteiro do virabrequim e recebe a bomba d’água.',
  'Vazamento de óleo na frente do motor costuma vir do retentor ou da junta dessa tampa.',
  'engrenagens bomba_agua polia_vira');
P('carter', 'Cárter', 'motor',
  'Embaixo do motor, logo acima do diferencial dianteiro.',
  'Guarda o óleo do motor: 7,5 L no cárter mais 1,0 L no filtro.',
  'Bujão com arruela nova a cada troca. Bateu embaixo, confira o protetor do cárter e o próprio cárter.',
  'bloco bomba_oleo protetor_carter vareta');
P('bomba_oleo', 'Bomba de óleo', 'motor',
  'Dentro do motor, embaixo, com o pescador no cárter.',
  'Manda o óleo sob pressão para mancais, comando, turbo e bicos que esfriam os pistões.',
  'Luz de pressão do óleo acesa com o motor ligado: desligue na hora e confira o nível antes de qualquer coisa.',
  'carter filtro_oleo sens_oleo turbo');
P('filtro_oleo', 'Filtro de óleo', 'motor',
  'Na lateral do bloco; sai por baixo, pelo vão entre o pneu e a saia do para-lama (manual da GM).',
  'Segura as impurezas do óleo.',
  'Troca a cada troca de óleo (10.000 km ou 6 meses; a primeira aos 5.000 km). Para tirar, o manual manda soltar a caixa do filtro de ar e a mangueira do turbo para o intercooler.',
  'carter resfriador_oleo bomba_oleo');
P('resfriador_oleo', 'Resfriador de óleo', 'motor',
  'Na lateral do bloco, junto ao filtro de óleo (posição aproximada no modelo).',
  'Trocador em que o líquido de arrefecimento tira calor do óleo do motor.',
  'Óleo no líquido de arrefecimento (borra marrom no reservatório) pode ser vazamento interno do resfriador, e não só da junta do cabeçote.',
  'filtro_oleo vaso');
P('vareta', 'Vareta do óleo', 'motor',
  'Do lado direito do motor.',
  'Mostra o nível do óleo entre as marcas superior e inferior.',
  'O manual pede conferir diariamente no diesel, com o carro nivelado e dois minutos depois de desligar o motor quente.',
  'carter tampa_oleo');
P('tampa_oleo', 'Tampa de abastecimento de óleo', 'motor',
  'Em cima da tampa de válvulas.',
  'Por onde se completa o óleo do motor.',
  'Use o mesmo tipo de óleo da última troca (API CG-4 ou superior, 15W40).',
  'tampa_valv vareta');
P('respiro', 'Respiro do motor', 'motor',
  'Saída na tampa de válvulas, ligada à admissão.',
  'Alivia os gases que passam pelos anéis para dentro do cárter.',
  'Muito óleo saindo pelo respiro indica desgaste interno; mangueira entupida empurra óleo pelos retentores.',
  'tampa_valv duto_ar');
P('correia_acess', 'Correia de acessórios', 'motor',
  'Na frente do motor.',
  'Movimenta alternador, bomba d’água, bomba da direção hidráulica e compressor do ar.',
  'Verificar o estado nas revisões e trocar aos 50.000 e aos 100.000 km (plano da GM).',
  'polia_vira tensor_acess alternador bomba_agua bomba_dir compressor');
P('tensor_acess', 'Tensor da correia de acessórios', 'motor',
  'Na frente do motor, entre as polias.',
  'Mantém a correia esticada.',
  'Rolamento ruidoso ou braço batendo pedem troca junto com a correia.',
  'correia_acess');
P('coxim_dir', 'Coxim direito do motor', 'motor',
  'Do lado direito do bloco, na travessa dianteira do chassi.',
  'Apoia o motor e absorve a vibração.',
  'Conferir nas revisões de 30.000 km (plano da GM). Coxim rachado aumenta a vibração na cabine.',
  'bloco travessa_motor coxim_esq');
P('coxim_esq', 'Coxim esquerdo do motor', 'motor',
  'Do lado esquerdo do bloco, na travessa dianteira do chassi.',
  'Apoia o motor e absorve a vibração.',
  'O mesmo do direito.',
  'bloco travessa_motor coxim_dir');
P('bomba_vacuo', 'Bomba de vácuo', 'motor',
  'Na traseira do alternador (posição aproximada no modelo).',
  'O diesel não faz vácuo no coletor: esta bomba gera o vácuo do servofreio e dos atuadores da tração 4x4.',
  'Pedal duro de freio com o motor ligado ou 4x4 que não engata pedem conferir o vácuo e as mangueiras.',
  'alternador servo mang_vacuo atuador_eixo');
P('sens_ckp', 'Sensor de rotação', 'motor',
  'Na capa seca, voltado para a roda dentada do volante (posição aproximada no modelo).',
  'Diz ao módulo a rotação e a posição do virabrequim.',
  'Com defeito, o motor gira e não pega.',
  'volante_motor ecu');
P('sens_cmp', 'Sensor de fase', 'motor',
  'Na frente do motor, junto à distribuição (posição aproximada no modelo).',
  'Diz qual cilindro está em compressão para o módulo acertar a injeção.',
  'Falha dele dificulta a partida e acende a luz da injeção.',
  'comando ecu');
P('sens_ect', 'Sensor de temperatura do motor', 'motor',
  'Na saída d’água do cabeçote.',
  'Informa a temperatura ao módulo e ao marcador.',
  'Leitura errada deixa a partida a frio difícil ou o marcador maluco.',
  'termostato ecu');
P('sens_oleo', 'Interruptor de pressão do óleo', 'motor',
  'Na lateral do bloco.',
  'Acende a luz do óleo quando a pressão cai.',
  'Luz acesa com o motor ligado: pare. Só depois confira o sensor.',
  'bomba_oleo');

/* ---------- AR E TURBO ---------- */
P('tomada_ar', 'Tomada de ar', 'ar',
  'Atrás do farol direito.',
  'Pega o ar de fora, longe do calor do motor.',
  'Não deixe entrar água: trechos alagados acima da tomada podem calçar o motor (água no cilindro).',
  'caixa_filtro');
P('caixa_filtro', 'Caixa do filtro de ar', 'ar',
  'Canto dianteiro direito do cofre.',
  'Guarda o elemento do filtro.',
  'Presa por braçadeira e cinta de borracha; ao montar, encaixe o pino-guia no suporte.',
  'tomada_ar filtro_ar duto_ar');
P('filtro_ar', 'Filtro de ar', 'ar',
  'Dentro da caixa do filtro.',
  'Limpa o ar antes do turbo.',
  'O quadro de manutenção da GM manda limpar com ar comprimido (de dentro para fora, no máximo 70 lbf/pol², a 5 cm) e reinstalar girado 90° nas revisões de 10.000, 30.000, 50.000 km…, e trocar o elemento a cada 20.000 km; o texto do mesmo manual fala em troca a cada 10.000 km. Na dúvida, fique com o prazo menor, e encurte em estrada de terra.',
  'caixa_filtro duto_ar turbo');
P('duto_ar', 'Duto do filtro ao turbo', 'ar',
  'Da caixa do filtro até a entrada do turbo, do lado direito.',
  'Leva o ar filtrado ao compressor do turbo.',
  'Duto rachado deixa entrar poeira que destrói o turbo e o motor: confira as braçadeiras (plano da GM: a cada 20.000 km).',
  'caixa_filtro turbo respiro');
P('turbo', 'Turbocompressor', 'ar',
  'Do lado direito do motor, preso ao coletor de escape.',
  'Turbo Garrett: o escape gira a turbina, que move o compressor e empurra o ar para o motor, com pressão máxima de 1,2 bar (manual).',
  'Deixe o motor em marcha lenta um pouco antes de desligar depois de esforço. Óleo limpo e filtro de ar inteiro fazem o turbo durar; fumaça azul e assobio alto indicam desgaste.',
  'coletor_esc duto_ar mang_intercooler intercooler bomba_oleo');
P('intercooler', 'Intercooler', 'ar',
  'Em cima do motor, embaixo da entrada de ar do capô.',
  'Esfria o ar que sai quente do turbo antes de ele entrar nos cilindros: ar frio é mais denso e queima mais diesel com menos fumaça.',
  'Lave as aletas com água de baixa pressão depois de lama ou poeira (manual). Mangueira solta faz o motor perder força e soltar fumaça preta.',
  'turbo mang_intercooler coletor_adm tomada_capo');
P('mang_intercooler', 'Mangueiras do intercooler', 'ar',
  'Do turbo ao intercooler e do intercooler ao coletor.',
  'Levam o ar pressurizado.',
  'Abraçadeira frouxa ou mangueira furada: perda de força, assobio e fumaça preta.',
  'turbo intercooler coletor_adm');
P('coletor_adm', 'Coletor de admissão', 'ar',
  'Do lado esquerdo do cabeçote.',
  'Distribui o ar resfriado aos 4 cilindros.',
  'Acumula fuligem com os anos; perda de força pode pedir limpeza.',
  'cabecote intercooler sens_map');
P('sens_map', 'Sensor de pressão do turbo', 'ar',
  'No coletor de admissão (posição aproximada no modelo).',
  'Mede a pressão do ar que entra; o módulo dosa o diesel por ela.',
  'Com defeito, o carro perde força e entra em modo de emergência.',
  'coletor_adm ecu');

/* ---------- COMBUSTÍVEL (DIESEL COMMON RAIL) ---------- */
P('tanque', 'Tanque de combustível', 'comb',
  'Embaixo do carro, entre as longarinas, antes do eixo traseiro (posição aproximada no modelo).',
  'Guarda 80 litros de diesel na cabine dupla (reserva de cerca de 9 L).',
  'Respiro do tanque conferido a cada 30.000 km (plano da GM). Não use diesel de recipiente aberto: água e sujeira são fatais para os bicos.',
  'bomba_baixa boia bocal linhas_comb');
P('bomba_baixa', 'Bomba elétrica de combustível', 'comb',
  'Dentro do tanque.',
  'Manda o diesel do tanque até a bomba de alta pressão, passando pelo filtro. Também tira o ar do sistema depois da troca do filtro (manual: ligar a ignição e esperar 10 segundos).',
  'Zumbido fraco ou nenhum ruído ao ligar a ignição indica bomba ou relé com defeito.',
  'tanque filtro_comb linhas_comb');
P('boia', 'Boia do marcador', 'comb',
  'Dentro do tanque, junto da bomba.',
  'Mede o nível para o marcador.',
  'Marcador que oscila ou trava pede troca da boia.',
  'tanque bomba_baixa');
P('bocal', 'Bocal e portinhola do tanque', 'comb',
  'Na lateral esquerda da caçamba, à frente da roda traseira (índice ilustrado do manual).',
  'Entrada do diesel, com tampa de chave e portinhola.',
  'Abasteça devagar e pare no primeiro desligamento da bomba. Tampa mal vedada deixa entrar água.',
  'tanque cacamba');
P('linhas_comb', 'Linhas de combustível', 'comb',
  'Do tanque ao cofre, pelo chassi.',
  'Linha de ida até o filtro e a bomba de alta, e linha de retorno do excedente para o tanque.',
  'Mangueiras de combustível conferidas a cada 40.000 km (plano da GM). Vazamento de diesel no chão é perigoso e entra ar no sistema.',
  'tanque filtro_comb bomba_alta retorno');
P('filtro_comb', 'Filtro de diesel com separador de água', 'comb',
  'No cofre, do lado esquerdo (índice ilustrado do manual).',
  'Filtra o diesel e separa a água que vem com ele: o diesel com água destrói a bomba de alta e os bicos.',
  'Troca a cada 10.000 km ou 6 meses (manual). Sempre que acender a luz de água no filtro com o motor ligado, drene pela válvula de baixo. Depois da troca, faça a sangria.',
  'sens_agua bomba_baixa bomba_alta linhas_comb');
P('sens_agua', 'Sensor de água no filtro', 'comb',
  'Embaixo do filtro de diesel; é ele que abre a drenagem.',
  'Acende a luz de água no filtro no painel.',
  'Para drenar, desligue o conector, afrouxe o sensor até sair água e sujeira e aperte meia volta depois do encosto da vedação.',
  'filtro_comb quadro');
P('bomba_alta', 'Bomba de alta pressão', 'comb',
  'Do lado esquerdo do motor, movida pela engrenagem da distribuição.',
  'Bomba Bosch CP3 do common rail: comprime o diesel a centenas de bar e o manda ao tubo distribuidor (rail). O manual a lista como "Bosch distribuidora".',
  'É lubrificada pelo próprio diesel: diesel com água ou sujeira a destrói. Nunca mexa com o motor ligado ou até 30 segundos depois de desligar.',
  'engrenagens rail tubos_alta filtro_comb regulador');
P('rail', 'Tubo distribuidor (rail)', 'comb',
  'Em cima do cabeçote, do lado esquerdo.',
  'Guarda o diesel sob alta pressão e o reparte aos 4 injetores.',
  'Linha de alta pressão: o jato de um vazamento corta a pele. Só mexa com o motor desligado há pelo menos 30 segundos.',
  'bomba_alta tubos_alta bicos sens_rail');
P('tubos_alta', 'Tubos de alta pressão', 'comb',
  'Da bomba ao rail e do rail a cada injetor.',
  'Tubos de aço que aguentam a pressão do common rail.',
  'Tubo afrouxado deve ser trocado por novo, não reapertado indefinidamente: o cone de vedação deforma.',
  'bomba_alta rail bicos');
P('bicos', 'Injetores', 'comb',
  'No cabeçote, no meio de cada cilindro, sob a tampa de válvulas.',
  'Abertos eletricamente pelo módulo, pulverizam o diesel dentro do cilindro várias vezes por ciclo.',
  'Diesel ruim é a causa nº 1 de falha. Marcha lenta irregular, fumaça e batida pedem teste de vazão e de retorno na oficina diesel.',
  'rail tubos_alta retorno ecu cabecote');
P('retorno', 'Linha de retorno', 'comb',
  'Dos injetores e da bomba de volta ao tanque.',
  'Leva de volta o diesel que sobra e esfria o sistema.',
  'Retorno excessivo de um injetor indica desgaste dele.',
  'bicos bomba_alta linhas_comb');
P('sens_rail', 'Sensor de pressão do rail', 'comb',
  'Na ponta do rail.',
  'Mede a pressão do diesel para o módulo controlar a bomba.',
  'Falha acende a luz da injeção e o motor pode perder força.',
  'rail ecu');
P('regulador', 'Válvula de controle de pressão', 'comb',
  'Na bomba de alta ou no rail (posição aproximada no modelo).',
  'Ajusta a pressão do common rail conforme o pedido do módulo.',
  'Travada, o motor falha ou não pega. Diagnóstico com scanner.',
  'bomba_alta rail ecu');
P('velas_aquec', 'Velas aquecedoras (kit para frio)', 'comb',
  'No cabeçote, uma por cilindro, quando instaladas.',
  'Aquecem a câmara para pegar no frio. Na S10 2.8 eletrônica são um kit da concessionária para regiões abaixo de −8 °C (manual); a luz de pré-aquecimento só existe com o kit.',
  'Na maior parte do Brasil o carro vem sem elas. Partida difícil no frio intenso é o sinal de que o kit faz falta.',
  'cabecote ecu');
P('ecu', 'Módulo de controle do motor', 'comb',
  'No cofre, do lado esquerdo, junto ao para-lama (posição aproximada no modelo).',
  'Comanda a injeção a partir dos sensores: quanto diesel, quando e em quantas vezes.',
  'Com o motor ligado, quem usa marcapasso deve ficar a pelo menos 30 cm dele (manual). Não lave com jato o cofre.',
  'bicos sens_ckp sens_cmp sens_map sens_rail regulador pedal_acel');
P('pedal_acel', 'Pedal do acelerador', 'comb',
  'No assoalho, à direita do freio.',
  'Pedal eletrônico: um sensor diz ao módulo quanto você pisa.',
  'Falha acende a luz da injeção e deixa o motor só em marcha lenta.',
  'ecu');

/* ---------- ARREFECIMENTO ---------- */
P('radiador', 'Radiador', 'arref',
  'Na frente do cofre, atrás da grade.',
  'Troca o calor do líquido com o ar.',
  'Lave as colmeias com água de baixa pressão depois de lama ou areia, sem amassar as aletas (manual).',
  'mang_sup mang_inf ventoinha vent_aux condensador');
P('vaso', 'Reservatório de expansão', 'arref',
  'No cofre, do lado direito (índice ilustrado do manual).',
  'Recebe a dilatação do líquido; a tampa é pressurizada.',
  'Nível entre MIN e MAX com o motor frio, toda semana. Só abra a tampa frio, girando até o primeiro estágio para aliviar a pressão. Total do sistema: 10,0 L com ar-condicionado.',
  'radiador mang_sup bomba_agua');
P('ventoinha', 'Ventoinha viscosa', 'arref',
  'Atrás do radiador, na polia da bomba d’água.',
  'Hélice com embreagem viscosa: gira mais quando o ar que vem do radiador está quente.',
  'Embreagem travada faz barulho e gasta diesel; solta demais, o motor esquenta em subida e no trânsito.',
  'radiador bomba_agua');
P('vent_aux', 'Ventilador auxiliar elétrico', 'arref',
  'Por trás da grade, na frente do condensador (manual: veículos com ar-condicionado).',
  'Ajuda a esfriar o condensador e o radiador com o carro parado.',
  'Pode ligar sozinho mesmo com o motor desligado: cuidado com as mãos (manual).',
  'condensador radiador');
P('bomba_agua', 'Bomba d’água', 'arref',
  'Na frente do motor, na tampa da distribuição.',
  'Faz o líquido circular; leva também a ventoinha viscosa.',
  'Gotejamento pelo furo de alívio ou rolamento com folga pedem troca.',
  'tampa_dist correia_acess ventoinha termostato');
P('termostato', 'Válvula termostática', 'arref',
  'Na saída d’água do cabeçote, na frente.',
  'Só deixa o líquido ir ao radiador depois que o motor esquenta.',
  'Travada aberta, o motor demora a esquentar; fechada, ferve.',
  'mang_sup sens_ect');
P('mang_sup', 'Mangueira superior do radiador', 'arref',
  'Da saída d’água ao radiador.',
  'Leva o líquido quente ao radiador.',
  'Mangueira inchada ou mole com o motor quente pede troca.',
  'termostato radiador');
P('mang_inf', 'Mangueira inferior do radiador', 'arref',
  'Do radiador à bomba d’água.',
  'Traz o líquido frio de volta.',
  'Confira as braçadeiras quando conferir o nível.',
  'radiador bomba_agua');
P('mang_aquec', 'Mangueiras do aquecedor', 'arref',
  'Do motor ao corta-fogo.',
  'Levam o líquido quente ao radiador do aquecedor da cabine.',
  'Vazamento perto do corta-fogo pode molhar o tapete do passageiro.',
  'rad_aquec');
P('rad_aquec', 'Radiador do aquecedor', 'arref',
  'Dentro da caixa de ar, atrás do painel.',
  'Aquece o ar da cabine.',
  'Vidro embaçando com cheiro adocicado indica vazamento.',
  'mang_aquec caixa_ar');

/* ---------- ESCAPE ---------- */
P('coletor_esc', 'Coletor de escape', 'escape',
  'Do lado direito do cabeçote.',
  'Recebe os gases dos 4 cilindros e os manda para a turbina do turbo.',
  'Prisioneiro quebrado ou junta queimada faz ruído de "tchic-tchic" e perda de pressão do turbo.',
  'cabecote turbo');
P('tubo_diant', 'Tubo dianteiro do escape', 'escape',
  'Da saída da turbina, desce do lado direito até embaixo da cabine.',
  'Leva os gases para trás.',
  'Junta da saída do turbo vazando escurece o cofre de fuligem.',
  'turbo silencioso coxins_esc');
P('silencioso', 'Silencioso', 'escape',
  'Embaixo da cabine, do lado direito (posição aproximada no modelo).',
  'Abafa o ruído dos gases.',
  'Ferrugem por fora com furos pede troca.',
  'tubo_diant tubo_tras coxins_esc');
P('tubo_tras', 'Tubo traseiro e ponteira', 'escape',
  'Do silencioso até a saída, embaixo da traseira direita (posição aproximada no modelo).',
  'Solta os gases para fora, longe da cabine.',
  'Ponteira amassada ou entupida de barro afeta o motor. Fuligem preta em excesso é sinal de mistura rica.',
  'silencioso coxins_esc');
P('coxins_esc', 'Coxins do escape', 'escape',
  'Ao longo do escapamento, no chassi.',
  'Borrachas que seguram o escape e isolam a vibração.',
  'Conferir a cada 30.000 km (plano da GM). Borracha rompida faz o escape bater no chassi.',
  'tubo_diant silencioso tubo_tras');
P('protetor', 'Protetor de calor do turbo', 'escape',
  'Sobre o coletor e o turbo, do lado direito.',
  'Protege fiação e mangueiras do calor do escape.',
  'Protetor solto vibra e faz barulho de lata.',
  'coletor_esc turbo');

/* ---------- ELÉTRICA ---------- */
P('bateria', 'Bateria', 'ele',
  'Canto dianteiro esquerdo do cofre (índice ilustrado do manual).',
  'Bateria de 12 V e 60 Ah (ACDelco Gold, selada): dá a partida e alimenta o carro com o motor desligado.',
  'Não precisa de manutenção (manual). Parado por mais de 30 dias, desligue o negativo. No diesel, partida exige bateria boa: teste antes do inverno.',
  'cabos_bat alternador motor_partida caixa_fus_motor');
P('cabos_bat', 'Cabos da bateria', 'ele',
  'Da bateria ao motor de partida, à caixa de fusíveis e ao aterramento.',
  'Levam a corrente da partida e do resto do carro.',
  'Terminal oxidado ou aterramento frouxo deixam a partida fraca.',
  'bateria motor_partida caixa_fus_motor');
P('alternador', 'Alternador', 'ele',
  'Na frente do motor, do lado esquerdo, em cima (posição aproximada no modelo).',
  'Gera a energia com o motor ligado e carrega a bateria (100 A, manual). Atrás dele fica a bomba de vácuo.',
  'Com o motor ligado, a bateria deve marcar cerca de 13,8 a 14,5 V. O plano da GM pede avaliação aos 90.000 km.',
  'correia_acess bateria bomba_vacuo');
P('motor_partida', 'Motor de partida', 'ele',
  'Do lado esquerdo, embaixo, na capa seca do câmbio.',
  'Gira o motor para pegar.',
  'Não dê partidas longas e seguidas (manual). Estalo e nada pode ser solenoide ou cabo.',
  'volante_motor bateria cabos_bat');
P('caixa_fus_motor', 'Caixa de fusíveis do cofre', 'ele',
  'No cofre, do lado esquerdo, perto da bateria.',
  'Fusíveis e relés da injeção, da bomba de combustível, dos faróis, da buzina e do arrefecimento.',
  'O mapa dos fusíveis está na tampa e no manual (seção 9). Troque por um de mesma amperagem.',
  'bateria chicote ecu');
P('caixa_fus_painel', 'Caixa de fusíveis do painel', 'ele',
  'Na lateral do painel, do lado do motorista.',
  'Fusíveis do interior: luzes, vidros, travas, som.',
  'Fusível que queima de novo é curto: procure a causa.',
  'chicote');
P('chicote', 'Chicote elétrico', 'ele',
  'Por todo o carro; o principal corre pelo cofre e pelo chassi.',
  'Os fios que ligam tudo, inclusive até a traseira e a caixa de transferência.',
  'O chassi trabalha e o chicote raspa: confira as presilhas, principalmente na transferência e no eixo traseiro.',
  'caixa_fus_motor caixa_fus_painel ecu');
P('farois', 'Faróis', 'ele',
  'Na frente, dos lados da grade.',
  'Farol baixo, alto, lanterna e seta no mesmo conjunto.',
  'Regulagem do foco a cada 40.000 km (plano da GM) e sempre com carga diferente na caçamba.',
  'grade para_choque_d piscas');
P('piscas', 'Setas dianteiras', 'ele',
  'No conjunto do farol, na ponta.',
  'Indicam a direção.',
  'Piscando rápido: lâmpada queimada.',
  'farois');
P('neblina', 'Faróis de neblina', 'ele',
  'No para-choque dianteiro.',
  'Luz baixa e larga para neblina e chuva forte.',
  'Lente trincada deixa entrar água e queima a lâmpada.',
  'para_choque_d');
P('lanternas', 'Lanternas traseiras', 'ele',
  'Nos cantos de trás da caçamba, em pé.',
  'Posição, freio, seta e ré (e neblina traseira, conforme a versão).',
  'Água dentro da lente: vedação.',
  'cacamba');
P('luz_freio', 'Luz de freio elevada', 'ele',
  'No alto da traseira da cabine.',
  'Terceira luz de freio.',
  'Infiltração de água queima as lâmpadas.',
  'cabine');
P('luz_placa', 'Luzes da placa', 'ele',
  'No para-choque traseiro, sobre a placa.',
  'Iluminam a placa.',
  'Placa apagada dá multa.',
  'para_choque_t');
P('buzina', 'Buzina', 'ele',
  'Atrás da grade, na frente.',
  'Avisa sonoramente.',
  'Fica exposta à água e à lama: conector oxidado é o defeito comum.',
  'caixa_fus_motor');
P('limpador', 'Limpadores do para-brisa', 'ele',
  'Na base do para-brisa, sob a grade do torpedo.',
  'Motor e hastes movem as duas palhetas.',
  'Troque as palhetas quando riscarem ou chiarem.',
  'lavador grade_torpedo');
P('lavador', 'Reservatório do lavador', 'ele',
  'No cofre, do lado esquerdo, à frente do servofreio (índice ilustrado do manual).',
  'Guarda a água do lavador (3,3 L).',
  'Água com limpador próprio; nada de detergente.',
  'limpador');
P('ign_chave', 'Comutador de ignição e imobilizador', 'ele',
  'Na coluna de direção.',
  'Liga o carro e confere a chave codificada.',
  'Chave nova precisa ser programada.',
  'coluna ecu');
P('comutadores', 'Alavancas da coluna', 'ele',
  'Atrás do volante.',
  'Setas, faróis, limpadores e lavadores.',
  'Retorno da seta falhando é desgaste interno.',
  'volante_dir coluna');

/* ---------- EMBREAGEM E CÂMBIO ---------- */
P('embreagem', 'Embreagem (disco e platô)', 'trans',
  'Entre o motor e o câmbio, na capa seca.',
  'Liga e desliga o motor do câmbio.',
  'Patinando em subida com carga, trepidando ou pedal alto pedem troca. Troque disco, platô e rolamento juntos.',
  'volante_motor rol_emb cambio');
P('rol_emb', 'Rolamento e atuador da embreagem', 'trans',
  'Dentro da capa seca, no eixo de entrada do câmbio.',
  'Atuador hidráulico com rolamento que empurra o platô quando você pisa no pedal (posição aproximada no modelo).',
  'Vazamento dele aparece como fluido pingando da capa seca e pedal baixando. Troca com o câmbio fora.',
  'embreagem cil_emb_mestre tubo_emb');
P('cil_emb_mestre', 'Cilindro-mestre da embreagem', 'trans',
  'No corta-fogo, do lado do motorista.',
  'Transforma o pisar no pedal em pressão de fluido.',
  'Pedal que afunda devagar indica vazamento interno.',
  'pedal_emb reserv_emb tubo_emb');
P('reserv_emb', 'Reservatório do fluido da embreagem', 'trans',
  'No cofre, do lado esquerdo, ao lado do reservatório do freio (índice ilustrado do manual).',
  'Guarda o fluido da embreagem hidráulica.',
  'Fluido DOT 4 trocado a cada 30.000 km, com a conferência do curso livre do pedal (plano da GM).',
  'cil_emb_mestre');
P('tubo_emb', 'Tubo da embreagem', 'trans',
  'Do cilindro-mestre até a capa seca.',
  'Leva a pressão ao atuador.',
  'Fluido de freio estraga a pintura: limpe na hora se pingar.',
  'cil_emb_mestre rol_emb');
P('pedal_emb', 'Pedal da embreagem', 'trans',
  'O da esquerda.',
  'Comanda a embreagem; também é pedido para engatar a reduzida 4LO e na partida.',
  'Articulações lubrificadas nas revisões (plano da GM).',
  'cil_emb_mestre');
P('cambio', 'Câmbio manual de 5 marchas', 'trans',
  'Atrás do motor, no túnel, com a caixa de transferência presa atrás dele.',
  'Cinco marchas e ré (4,47 / 2,29 / 1,38 / 1,00 / 0,65 e ré 3,80, manual). A 5ª é sobremarcha, para economizar na estrada.',
  'Óleo Dexron III ACDelco, 2,0 L no 4x4: primeira troca aos 10.000 km e depois a cada 40.000 km (manual). Não force a alavanca para a esquerda ao passar de 5ª para 4ª.',
  'embreagem alavanca transferencia coxim_cambio');
P('alavanca', 'Alavanca de mudanças', 'trans',
  'No túnel, entre os bancos da frente.',
  'Vai direto no câmbio, sem cabos.',
  'Folga na alavanca pede troca das buchas.',
  'cambio');
P('coxim_cambio', 'Coxim do câmbio', 'trans',
  'Embaixo do câmbio, na travessa do chassi.',
  'Sustenta a traseira do conjunto motor-câmbio.',
  'Coxim rompido faz tranco ao arrancar e ao aliviar o pé.',
  'cambio travessas');

/* ---------- TRAÇÃO 4x4 ---------- */
P('transferencia', 'Caixa de transferência', 'tracao',
  'Atrás do câmbio, no túnel.',
  'Reparte a força entre o eixo traseiro e o dianteiro. Posições 2HI (só traseira), 4HI (quatro rodas) e 4LO (quatro rodas com reduzida). Tem saída de trás e saída da frente.',
  'Óleo Dexron III ACDelco, 1,18 L. Nível conferido a cada revisão; troca só se usar o 4x4 sempre (a cada 40.000 km ou 3 anos), segundo o manual.',
  'cambio motor_transf cardan_tras cardan_diant protetor_transf');
P('motor_transf', 'Motor de mudança da transferência', 'tracao',
  'Preso na caixa de transferência.',
  'Motor elétrico que muda a caixa entre 2HI, 4HI e 4LO quando você aperta o botão.',
  'Lâmpada do botão piscando sem completar a mudança: confira o conector e o motor. Para a reduzida, carro parado (abaixo de 4,8 km/h) e embreagem pisada.',
  'transferencia botoes_4x4 atuador_eixo');
P('botoes_4x4', 'Interruptores da tração', 'tracao',
  'No meio do painel.',
  'Botões 2HI, 4HI e 4LO, com lâmpada que pisca durante a mudança.',
  '4HI até 80 km/h para engatar e no máximo 100 km/h engatado; nunca em asfalto seco (manual).',
  'motor_transf painel');
P('cardan_tras', 'Cardã traseiro', 'tracao',
  'Da transferência ao diferencial traseiro, em duas partes com mancal no meio.',
  'Eixo longo que leva a força ao eixo traseiro.',
  'Cruzetas e junta deslizante engraxadas a cada 10.000 km (5.000 em uso severo), com graxa de lítio nº 2 EP. Vibração crescente com a velocidade costuma ser cruzeta ou mancal.',
  'transferencia mancal_cardan cruzetas dif_tras');
P('mancal_cardan', 'Mancal central do cardã', 'tracao',
  'No meio do cardã traseiro, preso numa travessa do chassi.',
  'Rolamento com borracha que apoia o cardã de duas partes.',
  'Borracha rompida vibra ao arrancar e ao aliviar o pé.',
  'cardan_tras travessas');
P('cruzetas', 'Cruzetas', 'tracao',
  'Nas pontas dos cardãs.',
  'Juntas que deixam o cardã trabalhar em ângulo.',
  'Com graxeira: engraxar no prazo. Estalo ao engatar a ré ou ao arrancar é cruzeta com folga.',
  'cardan_tras cardan_diant');
P('cardan_diant', 'Cardã dianteiro', 'tracao',
  'Da saída da frente da transferência ao diferencial dianteiro, do lado esquerdo do motor.',
  'Leva a força ao eixo dianteiro em 4HI e 4LO.',
  'Gira junto mesmo em 2HI em muitos casos; engraxe as cruzetas no prazo.',
  'transferencia dif_diant cruzetas');
P('dif_diant', 'Diferencial dianteiro', 'tracao',
  'Embaixo do motor, preso no chassi, puxado para o lado esquerdo.',
  'Divide a força entre as rodas da frente.',
  'Óleo SAE 80W90 ACDelco, 1,20 L: primeira troca aos 10.000 km e depois a cada 30.000 km (manual).',
  'cardan_diant semieixos_diant atuador_eixo carter');
P('atuador_eixo', 'Atuador de acoplamento do eixo dianteiro', 'tracao',
  'No tubo do eixo dianteiro, do lado direito (posição aproximada no modelo).',
  'Em 2HI desliga a roda direita do diferencial, para o eixo da frente não ficar girando à toa; em 4HI/4LO acopla. Funciona com vácuo comandado pela transferência e um cabo.',
  '4x4 que não pega (lâmpada acesa, mas só a traseira puxa) costuma ser vácuo, mangueira ou o próprio atuador.',
  'dif_diant semieixos_diant bomba_vacuo motor_transf');
P('semieixos_diant', 'Semieixos dianteiros', 'tracao',
  'Do diferencial dianteiro até as rodas da frente; o direito passa por um tubo com eixo intermediário.',
  'Levam a força às rodas da frente com juntas homocinéticas, que deixam a roda esterçar e subir.',
  'Estalo ao fazer curva fechada em 4x4 indica homocinética gasta.',
  'dif_diant coifas mangas');
P('coifas', 'Coifas das homocinéticas', 'tracao',
  'Nas pontas dos semieixos dianteiros.',
  'Borrachas sanfonadas que guardam a graxa das juntas.',
  'Coifa rasgada joga graxa na roda: troque logo, antes de a junta estragar.',
  'semieixos_diant');
P('cubos_diant', 'Rolamentos das rodas dianteiras', 'tracao',
  'Nos cubos das rodas da frente.',
  'Rolamentos em que as rodas giram.',
  'O plano da GM manda substituir a graxa a cada 20.000 km ou a cada troca de pastilhas. Ronco que muda nas curvas é rolamento.',
  'mangas discos');
P('eixo_tras', 'Eixo traseiro rígido', 'tracao',
  'Atrás, preso nos feixes de molas.',
  'Carcaça com o diferencial no meio e os semieixos dentro dos tubos. Relação 4,27:1 (manual).',
  'Respiro do eixo livre; vazamento nas pontas indica retentor.',
  'dif_tras semieixos_tras feixe_molas grampos_u');
P('dif_tras', 'Diferencial traseiro (Trac-Lock)', 'tracao',
  'No meio do eixo traseiro.',
  'Diferencial de deslizamento limitado: manda mais força para a roda que tem aderência.',
  'Óleo SAE 85W140 API GL-5 EP para tração positiva com moderador de atrito, 1,60 L: primeira troca aos 10.000 km e depois a cada 30.000 km (manual). Óleo errado faz trepidar em curva.',
  'eixo_tras cardan_tras semieixos_tras');
P('semieixos_tras', 'Semieixos traseiros', 'tracao',
  'Dentro dos tubos do eixo traseiro.',
  'Ligam o diferencial às rodas de trás.',
  'Óleo do eixo nas lonas de freio indica retentor da ponta vazando.',
  'eixo_tras tambores');

/* ---------- FREIOS ---------- */
P('pedal_freio', 'Pedal do freio', 'freio',
  'No meio dos três pedais.',
  'Empurra o servofreio.',
  'Articulações lubrificadas nas revisões.',
  'servo');
P('servo', 'Servofreio', 'freio',
  'No corta-fogo, do lado do motorista.',
  'Usa o vácuo da bomba de vácuo para diminuir a força no pedal.',
  'Com o motor desligado ele não ajuda: o pedal fica duro (manual, em reboque).',
  'pedal_freio cil_mestre mang_vacuo bomba_vacuo');
P('cil_mestre', 'Cilindro-mestre', 'freio',
  'Na frente do servofreio.',
  'Transforma a força do pedal em pressão nos dois circuitos.',
  'Pedal que baixa devagar com o pé parado indica vazamento interno.',
  'servo reserv_freio abs');
P('reserv_freio', 'Reservatório do fluido de freio', 'freio',
  'Em cima do cilindro-mestre, no lado esquerdo do cofre.',
  'Guarda o fluido de freio (0,77 L no sistema).',
  'DOT 4 para trabalho pesado; nível todo mês e troca a cada 30.000 km ou 2 anos (manual).',
  'cil_mestre');
P('abs', 'Módulo do ABS', 'freio',
  'No cofre, junto ao chassi do lado esquerdo (posição aproximada no modelo).',
  'Impede o travamento das rodas aliviando e reaplicando a pressão.',
  'Luz do ABS acesa: o freio comum continua funcionando, mas sem o antitravamento.',
  'sens_roda tubos_freio cil_mestre');
P('sens_roda', 'Sensores de rotação das rodas', 'freio',
  'Nas rodas da frente e no eixo traseiro (posição aproximada no modelo).',
  'Informam ao ABS a velocidade das rodas.',
  'Barro e limalha no sensor acendem a luz do ABS: limpe depois de trilha.',
  'abs');
P('tubos_freio', 'Tubulações e flexíveis de freio', 'freio',
  'Do cilindro-mestre às rodas, pelo chassi.',
  'Levam o fluido sob pressão.',
  'Vazamentos conferidos a cada 20.000 km (plano da GM). O flexível traseiro vai ao eixo, que sobe e desce: veja se não está esticado.',
  'cil_mestre abs pincas cil_roda');
P('pincas', 'Pinças dianteiras', 'freio',
  'Nas rodas da frente.',
  'Apertam as pastilhas contra os discos.',
  'Pinos-guia limpos e lubrificados.',
  'pastilhas discos tubos_freio');
P('pastilhas', 'Pastilhas', 'freio',
  'Dentro das pinças da frente.',
  'Fazem o atrito com os discos.',
  'Conferir a cada revisão (10.000 km). Ao trocar, o plano da GM manda trocar também a graxa dos rolamentos das rodas.',
  'pincas discos');
P('discos', 'Discos de freio ventilados', 'freio',
  'Nas rodas da frente.',
  'Superfície de atrito; ventilados para esfriar.',
  'Troque se abaixo da espessura mínima ou empenados (volante tremendo ao frear).',
  'pastilhas cubos_diant');
P('tambores', 'Tambores traseiros', 'freio',
  'Nas rodas de trás.',
  'Superfície de atrito das sapatas.',
  'Lonas e tambores conferidos a cada 20.000 km (plano da GM).',
  'sapatas cil_roda');
P('sapatas', 'Sapatas (lonas)', 'freio',
  'Dentro dos tambores.',
  'Fazem o atrito por dentro do tambor; também servem ao freio de estacionamento.',
  'Lona contaminada com óleo do eixo não freia: troque e corrija o retentor.',
  'tambores cil_roda cabos_freio');
P('cil_roda', 'Cilindros de roda', 'freio',
  'Dentro dos tambores, em cima.',
  'Empurram as sapatas.',
  'Fluido escorrendo por dentro da roda pede troca.',
  'sapatas tubos_freio');
P('freio_estac', 'Freio de estacionamento (pedal)', 'freio',
  'Pedal à esquerda, embaixo do painel, com a alavanca de soltar.',
  'Aciona as sapatas de trás por cabos.',
  'Regulagem e lubrificação dos cabos e articulações a cada 30.000 km (plano da GM).',
  'cabos_freio sapatas');
P('cabos_freio', 'Cabos do freio de estacionamento', 'freio',
  'Do pedal até os tambores traseiros, pelo chassi.',
  'Puxam as sapatas.',
  'Cabo enferrujado deixa o freio preso ou fraco.',
  'freio_estac sapatas');
P('mang_vacuo', 'Mangueira de vácuo', 'freio',
  'Da bomba de vácuo ao servofreio e ao circuito do 4x4.',
  'Leva o vácuo.',
  'Mangueira rachada: pedal duro e 4x4 que não acopla.',
  'bomba_vacuo servo atuador_eixo');

/* ---------- SUSPENSÃO E RODAS ---------- */
P('bandeja_inf', 'Bandejas inferiores', 'susp',
  'Na frente, embaixo de cada roda.',
  'Braço de baixo da suspensão independente; é nele que a barra de torção trabalha.',
  'Buchas rachadas: ruído e alinhamento que não fica.',
  'barras_torcao pivos mangas amort_diant');
P('bandeja_sup', 'Bandejas superiores', 'susp',
  'Na frente, em cima de cada roda.',
  'Braço de cima: junto com o de baixo, guia a manga (braços sobrepostos).',
  'Calços de regulagem de câmber e cáster nas buchas: marque antes de tirar.',
  'pivos mangas');
P('pivos', 'Juntas esféricas (pivôs)', 'susp',
  'Nas pontas das bandejas, ligando-as à manga.',
  'Articulações que deixam a roda subir e esterçar.',
  'Verificar folga e lubrificar a cada revisão (5.000 km em uso severo), conforme o plano da GM.',
  'bandeja_inf bandeja_sup mangas');
P('barras_torcao', 'Barras de torção', 'susp',
  'Debaixo do carro, uma de cada lado, da bandeja inferior para trás até a travessa.',
  'Fazem o papel da mola da frente: torcem quando a roda sobe.',
  'A altura da frente se regula pelo parafuso da travessa. Mexer nela muda o alinhamento: alinhe depois.',
  'bandeja_inf travessa_torcao');
P('travessa_torcao', 'Travessa das barras de torção', 'susp',
  'Atrás da cabine dianteira, embaixo, presa nas longarinas.',
  'Ancora a ponta de trás das barras, com o parafuso de regulagem da altura.',
  'Conte as voltas do parafuso antes de soltar para voltar à mesma altura.',
  'barras_torcao longarinas');
P('amort_diant', 'Amortecedores dianteiros', 'susp',
  'Entre a bandeja inferior e o chassi, dentro da caixa de roda.',
  'Controlam o balanço.',
  'Fixação e vazamentos conferidos em toda revisão (plano da GM).',
  'bandeja_inf longarinas');
P('barra_estab', 'Barra estabilizadora', 'susp',
  'Na frente, de uma bandeja inferior à outra.',
  'Diminui a inclinação nas curvas.',
  'Bieletas e buchas gastas fazem barulho em lombada.',
  'bandeja_inf longarinas');
P('mangas', 'Mangas de eixo', 'susp',
  'Nas rodas da frente.',
  'Sustentam o cubo, a pinça e o braço de direção.',
  'Empenada depois de pancada: o carro puxa e o alinhamento não fecha.',
  'pivos cubos_diant pincas barras_dir');
P('feixe_molas', 'Feixes de molas', 'susp',
  'Atrás, um de cada lado, presos no chassi na frente e no jumelo atrás.',
  'Lâminas de aço empilhadas que seguram e posicionam o eixo traseiro.',
  'Lâmina quebrada ou buchas gastas: carro baixo de um lado e ruído.',
  'eixo_tras jumelos grampos_u');
P('jumelos', 'Jumelos', 'susp',
  'Na ponta de trás de cada feixe.',
  'Articulação que deixa o feixe esticar quando trabalha.',
  'Buchas ressecadas rangem.',
  'feixe_molas longarinas');
P('grampos_u', 'Grampos em "U" e espigões', 'susp',
  'Prendem o eixo traseiro nos feixes.',
  'Seguram o eixo no feixe.',
  'Reapertar a cada 30.000 km (plano da GM).',
  'feixe_molas eixo_tras');
P('amort_tras', 'Amortecedores traseiros', 'susp',
  'Entre o eixo traseiro e o chassi, um à frente e outro atrás do eixo.',
  'Controlam o balanço da traseira.',
  'Pneu com desgaste em "pratos" pode ser amortecedor.',
  'eixo_tras longarinas');
P('pneus', 'Pneus', 'susp',
  'Nas quatro rodas.',
  '235/70 R16 na Executive (manual).',
  'Calibragem (frio): até 3 pessoas 35 lbf/pol² na frente e 30 atrás; carga plena 45 e 50 (manual). Confira toda semana, inclusive o estepe.',
  'rodas estepe');
P('rodas', 'Rodas de liga', 'susp',
  'Nas quatro rodas.',
  'Rodas de alumínio 7 J × 16.',
  'Aperte em cruz; o torque dos parafusos é conferido em toda revisão. Não use produtos abrasivos nas rodas (manual).',
  'pneus cubos_diant');
P('estepe', 'Estepe', 'susp',
  'Embaixo da traseira da caçamba, pendurado num cabo.',
  'Roda reserva de aço 7 J × 15 com pneu 235/75 R15: diferente das de rodagem, não use em rodízio e evite passar de 100 km (manual).',
  'Calibre junto com os outros. O cabo e o guincho enferrujam: abaixe e suba o estepe de vez em quando.',
  'guincho_estepe pneus');
P('guincho_estepe', 'Guincho do estepe', 'susp',
  'Sob a caçamba, acionado pelo furo no para-choque traseiro.',
  'Abaixa e levanta o estepe com a chave de roda.',
  'Ao subir, gire até sentir dois cliques; não tensione demais (manual).',
  'estepe para_choque_t');
P('macaco', 'Macaco e chave de roda', 'susp',
  'Na cabine dupla: junto ao painel traseiro, do lado direito da cabine (manual).',
  'Para trocar a roda.',
  'Use só nos pontos de apoio do chassi indicados no manual.',
  'estepe');

/* ---------- DIREÇÃO ---------- */
P('volante_dir', 'Volante', 'dir',
  'Na frente do motorista.',
  'Comanda a direção; tem o airbag do motorista.',
  'Folga no volante parado pede inspeção dos terminais e da caixa.',
  'coluna airbag_mot cabo_espiral');
P('coluna', 'Coluna de direção', 'dir',
  'Do volante até a caixa de direção, passando pelo corta-fogo.',
  'Leva o giro do volante até a caixa.',
  'Junta da coluna com folga dá estalo ao esterçar.',
  'volante_dir caixa_dir ign_chave');
P('caixa_dir', 'Caixa de direção hidráulica', 'dir',
  'Presa na longarina esquerda, na frente.',
  'Caixa de esferas recirculantes com assistência hidráulica: transforma o giro da coluna no movimento do braço Pitman.',
  'Óleo Dexron II no reservatório, sem troca periódica (manual). Vazamento no retentor do setor pinga óleo na longarina.',
  'coluna braco_pitman bomba_dir mang_dir');
P('braco_pitman', 'Braço Pitman', 'dir',
  'Na saída da caixa de direção, embaixo.',
  'Empurra a barra central para os lados.',
  'Folga na articulação: volante com jogo.',
  'caixa_dir barra_central');
P('barra_central', 'Barra central de direção', 'dir',
  'Atravessa o carro na frente, entre o braço Pitman e o braço intermediário.',
  'Liga os dois lados e leva os terminais.',
  'Inspeção com o carro no chão e alguém balançando o volante.',
  'braco_pitman braco_inter barras_dir');
P('braco_inter', 'Braço intermediário', 'dir',
  'Na longarina direita, na frente.',
  'Apoia a ponta direita da barra central.',
  'Item do plano da GM: verificar folga e lubrificar em toda revisão.',
  'barra_central longarinas');
P('barras_dir', 'Barras de direção e terminais', 'dir',
  'Da barra central até as mangas, com luvas de regulagem.',
  'Empurram as rodas; pelas luvas se acerta a convergência (0°36′ ± 0°12′ total, manual).',
  'Terminal com folga gasta o pneu por dentro. Alinhamento depois da troca.',
  'barra_central mangas');
P('bomba_dir', 'Bomba da direção hidráulica', 'dir',
  'Na frente do motor, do lado direito, movida pela correia de acessórios; o reservatório fica separado, perto do corta-fogo.',
  'Gera a pressão do óleo que ajuda a esterçar.',
  'Chiado ao esterçar todo para um lado é normal por instantes; constante, é nível baixo ou bomba.',
  'reserv_dir mang_dir correia_acess caixa_dir');
P('reserv_dir', 'Reservatório da direção hidráulica', 'dir',
  'No cofre, do lado direito (índice ilustrado do manual).',
  'Guarda o óleo da direção (1,26 L no sistema).',
  'Nível em toda revisão, com Dexron II; não precisa de troca (manual).',
  'bomba_dir');
P('mang_dir', 'Mangueiras da direção hidráulica', 'dir',
  'Da bomba à caixa e de volta ao reservatório.',
  'Levam o óleo sob pressão e o retorno.',
  'Conferir vazamentos e aperto a cada 30.000 km (plano da GM).',
  'bomba_dir caixa_dir reserv_dir');

/* ---------- AR-CONDICIONADO ---------- */
P('compressor', 'Compressor do ar', 'clima',
  'Na frente do motor, embaixo, do lado direito (posição aproximada no modelo).',
  'Comprime o gás R-134a; movido pela correia.',
  'Carga de 450 g de R-134a no diesel (manual). Ligue o ar de vez em quando também no frio.',
  'correia_acess condensador tubos_ac');
P('condensador', 'Condensador', 'clima',
  'Na frente do radiador.',
  'Troca o calor do gás com o ar.',
  'Lave por trás depois de lama ou areia (manual).',
  'compressor vent_aux radiador');
P('filtro_secador', 'Filtro secador', 'clima',
  'Na linha do ar, no cofre.',
  'Retém a umidade do circuito.',
  'Troque sempre que o circuito ficar aberto.',
  'tubos_ac');
P('pressostato', 'Pressostato', 'clima',
  'Na linha do ar.',
  'Desliga o compressor com pressão fora da faixa e liga o ventilador auxiliar.',
  'Sem gás, o compressor nem arma.',
  'tubos_ac vent_aux');
P('tubos_ac', 'Tubulações do ar', 'clima',
  'Pelo cofre, do compressor ao condensador e ao evaporador.',
  'Levam o gás.',
  'Óleo nas conexões é sinal de vazamento.',
  'compressor condensador valv_exp');
P('valv_exp', 'Válvula de expansão', 'clima',
  'No corta-fogo, na entrada do evaporador.',
  'Faz o gás expandir e gelar.',
  'Ar que gela pouco com carga normal pode ser ela.',
  'evaporador tubos_ac');
P('evaporador', 'Evaporador', 'clima',
  'Dentro da caixa de ar.',
  'Gela o ar da cabine.',
  'Cheiro ruim: higienização. Dreno entupido molha o tapete.',
  'caixa_ar valv_exp');
P('vent_interno', 'Ventilador interno', 'clima',
  'Atrás do porta-luvas.',
  'Sopra o ar pela caixa.',
  'Só funciona em algumas velocidades: resistor.',
  'caixa_ar');
P('caixa_ar', 'Caixa de ar', 'clima',
  'Atrás do painel.',
  'Mistura ar frio e quente e escolhe as saídas.',
  'Portinholas travadas: ar sai sempre no mesmo lugar.',
  'evaporador rad_aquec vent_interno comandos_clima');
P('comandos_clima', 'Comandos do ar e da ventilação', 'clima',
  'No meio do painel.',
  'Temperatura, ventilação, saídas e o ar-condicionado.',
  'Cabos ou atuadores das portinholas podem soltar.',
  'caixa_ar');

/* ---------- INTERIOR E SEGURANÇA ---------- */
P('painel', 'Painel', 'int',
  'Na frente da cabine.',
  'Estrutura com o quadro, os comandos e o porta-luvas.',
  'Rangidos vêm de presilhas soltas.',
  'quadro radio caixa_ar airbag_pass');
P('quadro', 'Quadro de instrumentos', 'int',
  'Atrás do volante.',
  'Velocímetro, conta-giros, temperatura, combustível e as luzes de aviso (água no filtro, pré-aquecimento com o kit, ABS, 4x4).',
  'O aviso de revisão ("InSP") é zerado na concessionária a cada revisão.',
  'painel');
P('radio', 'Som', 'int',
  'No meio do painel.',
  'Rádio e CD.',
  'Bateria desligada pode pedir nova configuração (manual).',
  'painel alto_falantes');
P('airbag_mot', 'Airbag do motorista', 'int',
  'No centro do volante.',
  'Bolsa que infla numa batida forte de frente.',
  'Não cole nada na cobertura do volante (manual). Desligue a bateria antes de mexer.',
  'volante_dir cabo_espiral srs');
P('airbag_pass', 'Airbag do passageiro', 'int',
  'No painel, sobre o porta-luvas.',
  'Bolsa do passageiro da frente.',
  'Não leve objetos sobre o painel.',
  'painel srs');
P('cabo_espiral', 'Cabo espiral', 'int',
  'Entre o volante e a coluna.',
  'Liga o airbag e os botões do volante sem enrolar os fios.',
  'Luz do airbag acesa e buzina falhando podem ser ele.',
  'volante_dir airbag_mot');
P('srs', 'Módulo do airbag', 'int',
  'Sob o console, no túnel (posição aproximada no modelo).',
  'Decide disparar os airbags.',
  'Depois de batida com airbag aberto, troca.',
  'airbag_mot airbag_pass');
P('console', 'Console central', 'int',
  'Entre os bancos da frente.',
  'Cobre a alavanca do câmbio e o túnel.',
  'Presilhas soltas fazem barulho.',
  'alavanca');
P('bancos_diant', 'Bancos dianteiros', 'int',
  'Na frente da cabine.',
  'Bancos com ajuste.',
  'Parafusos no torque: item de segurança.',
  'cintos');
P('banco_tras', 'Banco traseiro', 'int',
  'Atrás, na cabine dupla.',
  'Banco inteiriço para três.',
  'Embaixo há espaço de guarda.',
  'cintos');
P('cintos', 'Cintos de segurança', 'int',
  'Em todos os bancos.',
  'Seguram os ocupantes.',
  'Cadarços, fivelas e parafusos conferidos em toda revisão (plano da GM).',
  'bancos_diant banco_tras colunas');
P('forros_portas', 'Forros das portas dianteiras', 'int',
  'Por dentro das portas da frente.',
  'Acabamento com puxador e comandos dos vidros.',
  'Presilhas quebram: tenha reposição.',
  'portas maq_vidro');
P('forros_portas_tras', 'Forros das portas traseiras', 'int',
  'Por dentro das portas de trás.',
  'Acabamento com puxador.',
  'Presilhas quebram: tenha reposição.',
  'portas_tras maq_vidro_tras');
P('retrovisor_int', 'Retrovisor interno', 'int',
  'No alto do para-brisa.',
  'Visão para trás pelo vidro corrediço.',
  'Base solta se cola com adesivo próprio.',
  'para_brisa');
P('alto_falantes', 'Alto-falantes', 'int',
  'Nas portas.',
  'Som.',
  'Chiado: cone rasgado ou conector.',
  'radio portas');

/* ---------- CABINE E CAÇAMBA ---------- */
P('cabine', 'Cabine', 'carro',
  'Sobre o chassi, da frente do painel até o vidro de trás.',
  'Carroceria fechada dos passageiros, separada da caçamba e parafusada no chassi por coxins: a S10 não é monobloco.',
  'Assoalho e parte de baixo conferidos contra corrosão a cada 30.000 km (plano da GM).',
  'coxins_cab teto colunas corta_fogo cacamba');
E('cabine', 'parafusada', 'Presa no chassi por coxins de borracha com parafusos (os coxins da carroceria). Chapas da cabine entre si são soldadas.');
P('corta_fogo', 'Corta-fogo', 'carro',
  'Entre o cofre e a cabine.',
  'Parede de chapa que separa o motor dos passageiros e apoia o servofreio e a caixa de ar.',
  'Passa-cabos ressecados deixam entrar água, poeira e barulho.',
  'cabine servo caixa_ar');
E('corta_fogo', 'soldada', 'Faz parte da cabine; os componentes são parafusados nele.');
P('teto', 'Teto', 'carro',
  'Em cima da cabine.',
  'Fecha a cabine e recebe as barras do bagageiro.',
  'Peso máximo no bagageiro: 45 kg na cabine dupla, distribuídos nas travessas (manual).',
  'cabine rack_teto');
E('teto', 'soldada', 'Soldado nas colunas e nas bordas das portas.');
P('colunas', 'Colunas', 'carro',
  'Na frente, no meio e atrás das portas.',
  'Estrutura que segura o teto e as portas.',
  'Coluna amassada compromete a cabine.',
  'cabine teto');
E('colunas', 'soldada', 'Fazem parte da cabine.');
P('capo', 'Capô', 'carro',
  'Sobre o motor.',
  'Fecha o cofre; tem a entrada de ar para o intercooler.',
  'Feche baixando até uns 30 cm e soltando: não empurre com a mão (manual).',
  'dobr_capo fech_capo tomada_capo');
E('capo', 'parafusada', 'Preso por 2 dobradiças parafusadas; trava na fechadura da frente.');
P('tomada_capo', 'Entrada de ar do capô', 'carro',
  'No meio do capô.',
  'Leva ar de fora direto ao intercooler.',
  'Folhas e barro acumulados embaixo dela tiram eficiência do intercooler.',
  'capo intercooler');
E('tomada_capo', 'parafusada', 'Parafusada por baixo do capô.');
P('dobr_capo', 'Dobradiças do capô', 'carro',
  'Atrás do capô, perto do para-brisa.',
  'Deixam o capô abrir.',
  'Lubrifique.',
  'capo');
P('fech_capo', 'Fechadura do capô', 'carro',
  'Na frente, sob o capô.',
  'Trava o capô; tem a trava de segurança.',
  'Confira a trava de segurança antes de rodar.',
  'capo');
P('grade', 'Grade dianteira', 'carro',
  'Na frente, entre os faróis.',
  'Grade cromada com a gravata da Chevrolet.',
  'Presilhas quebram com o tempo.',
  'farois radiador para_choque_d');
E('grade', 'encaixada', 'Presilhas e parafusos na travessa do radiador.');
P('para_choque_d', 'Para-choque dianteiro', 'carro',
  'Na frente.',
  'Protege a frente; tem os faróis de neblina e a abertura de ar.',
  'Ganchos de reboque do 4x4 ficam atrás dele, no chassi.',
  'grade neblina ganchos longarinas');
E('para_choque_d', 'parafusada', 'Parafusado em suportes nas pontas das longarinas e nas caixas de roda.');
P('paralamas', 'Para-lamas dianteiros', 'carro',
  'Dos lados do capô, sobre as rodas da frente.',
  'Cobrem as rodas.',
  'Parafusados: trocam sem solda.',
  'molduras caixas_roda farois');
E('paralamas', 'parafusada', 'Parafusos na borda do cofre, na frente e na coluna.');
P('molduras', 'Molduras das caixas de roda', 'carro',
  'Em volta das quatro rodas.',
  'Alargadores que protegem a pintura de pedras.',
  'Presilhas soltas deixam a moldura bater.',
  'paralamas cacamba');
E('molduras', 'encaixada', 'Presilhas e parafusos na borda da caixa de roda.');
P('portas', 'Portas dianteiras', 'carro',
  'Na frente da cabine.',
  'Portas com vidro elétrico.',
  'Drenos de baixo desobstruídos (manual).',
  'dobradicas fech_portas vidros_portas maq_vidro forros_portas');
E('portas', 'parafusada', 'Presas por 2 dobradiças parafusadas na coluna e por um limitador.');
P('portas_tras', 'Portas traseiras', 'carro',
  'Atrás das dianteiras, na cabine dupla.',
  'Portas menores, com trava de segurança para crianças.',
  'Trava de criança: alavanca na fechadura (manual).',
  'dobradicas fech_portas vidros_portas_tras maq_vidro_tras forros_portas_tras');
E('portas_tras', 'parafusada', 'Presas por 2 dobradiças na coluna central e por um limitador.');
P('dobradicas', 'Dobradiças das portas', 'carro',
  'Nas colunas.',
  'Seguram as portas.',
  'Lubrificar.',
  'portas portas_tras');
P('fech_portas', 'Fechaduras e maçanetas', 'carro',
  'Nas portas.',
  'Travas elétricas com o controle remoto.',
  'Lubrifique; travou com bateria descarregada, use a chave na porta do motorista (manual).',
  'portas portas_tras');
P('maq_vidro', 'Máquinas de vidro dianteiras', 'carro',
  'Dentro das portas da frente.',
  'Sobem e descem os vidros.',
  'Vidro lento: guias secas ou motor fraco.',
  'vidros_portas forros_portas');
P('maq_vidro_tras', 'Máquinas de vidro traseiras', 'carro',
  'Dentro das portas de trás.',
  'Sobem e descem os vidros de trás.',
  'O mesmo das dianteiras.',
  'vidros_portas_tras forros_portas_tras');
P('vidros_portas', 'Vidros das portas dianteiras', 'carro',
  'Nas portas da frente.',
  'Vidros móveis.',
  'Borrachas gastas fazem barulho de vento.',
  'maq_vidro');
P('vidros_portas_tras', 'Vidros das portas traseiras', 'carro',
  'Nas portas de trás.',
  'Vidros móveis.',
  'O mesmo dos dianteiros.',
  'maq_vidro_tras');
P('para_brisa', 'Para-brisa', 'carro',
  'Na frente da cabine.',
  'Vidro laminado colado.',
  'Trinca na área do limpador atrapalha a visão: troque.',
  'cabine limpador');
E('para_brisa', 'colada', 'Colado na moldura com cordão de poliuretano.');
P('vidro_tras', 'Vidro traseiro corrediço', 'carro',
  'Atrás da cabine.',
  'Tem uma parte central que corre para ventilar (índice ilustrado do manual).',
  'Trilho sujo trava e deixa entrar água.',
  'cabine');
E('vidro_tras', 'colada', 'Moldura colada na cabine; a parte do meio corre no trilho.');
P('retrovisores', 'Retrovisores externos', 'carro',
  'Nas portas da frente.',
  'Espelhos com ajuste.',
  'Os espelhos convexos mostram as coisas mais longe do que estão (manual).',
  'portas');
P('grade_torpedo', 'Grade do torpedo', 'carro',
  'Na base do para-brisa.',
  'Cobre o limpador e a entrada de ar da cabine.',
  'Dreno entupido de folhas: água na cabine.',
  'limpador');
E('grade_torpedo', 'encaixada', 'Presilhas sob a borda do para-brisa.');
P('cacamba', 'Caçamba', 'carro',
  'Atrás da cabine, sobre o chassi.',
  'Compartimento de carga: 1.477 mm de comprimento interno, 1.438 mm de largura (1.002 entre as caixas de roda) e 430 mm de altura (manual). Carga útil da Executive 4x4: 1.025 kg com passageiros.',
  'Não ultrapasse a carga: a garantia não cobre danos por excesso (manual).',
  'coxins_cab tampa_cacamba protetor_cacamba lanternas bocal');
E('cacamba', 'parafusada', 'Parafusada no chassi por coxins, separada da cabine.');
P('tampa_cacamba', 'Tampa da caçamba', 'carro',
  'Atrás da caçamba.',
  'Abre para baixo, segura por dois cabos; sai inteira levantando a 45° (manual).',
  'Não suba cargas pesadas apoiadas nela aberta além do previsto.',
  'dobr_tampa cabos_tampa fech_tampa cacamba');
E('tampa_cacamba', 'encaixada', 'Dobradiças de encaixe embaixo, dois cabos de sustentação e as fechaduras laterais.');
P('dobr_tampa', 'Dobradiças da tampa', 'carro',
  'Nas pontas de baixo da tampa.',
  'Eixos de encaixe em que a tampa gira.',
  'Graxa nos encaixes evita rangido.',
  'tampa_cacamba');
P('cabos_tampa', 'Cabos da tampa', 'carro',
  'Dos lados da tampa até as colunas da caçamba.',
  'Seguram a tampa aberta na horizontal.',
  'Cabo desfiado: troque antes de romper.',
  'tampa_cacamba');
P('fech_tampa', 'Fechaduras e maçaneta da tampa', 'carro',
  'Na tampa, com a maçaneta no meio.',
  'Travam a tampa nas colunas da caçamba.',
  'Lubrifique as varetas.',
  'tampa_cacamba');
P('protetor_cacamba', 'Protetor de caçamba', 'carro',
  'Dentro da caçamba.',
  'Revestimento plástico que protege a pintura.',
  'Água parada embaixo dele enferruja: tire e lave de vez em quando.',
  'cacamba');
E('protetor_cacamba', 'encaixada', 'Encaixado na caçamba e preso nas bordas.');
P('para_choque_t', 'Para-choque traseiro', 'carro',
  'Atrás, sob a tampa.',
  'Para-choque com degrau, a placa e o furo do guincho do estepe.',
  'Suportes enferrujam por dentro.',
  'luz_placa guincho_estepe longarinas');
E('para_choque_t', 'parafusada', 'Parafusado em suportes nas pontas das longarinas.');
P('ganchos', 'Ganchos de reboque', 'carro',
  'Na frente, embaixo do para-choque, presos no chassi (4x4).',
  'Para puxar o carro: veículo com 4x4 em 2HI, câmbio em ponto morto e freio de estacionamento solto (manual).',
  'Nunca reboque com cabo de aço preso na suspensão.',
  'longarinas para_choque_d');
P('rack_teto', 'Barras do bagageiro', 'carro',
  'No teto.',
  'Barras longitudinais para o bagageiro.',
  'Até 45 kg no teto e não mais de 120 km/h carregado (manual).',
  'teto');
E('rack_teto', 'parafusada', 'Parafusadas no teto com vedação.');
P('estribos', 'Estribos laterais', 'carro',
  'Sob as portas, dos dois lados.',
  'Degrau para subir na cabine.',
  'Suportes no chassi; confira o aperto.',
  'longarinas cabine');
E('estribos', 'parafusada', 'Parafusados em suportes nas longarinas.');
P('caixas_roda', 'Forros das caixas de roda', 'carro',
  'Dentro dos para-lamas da frente.',
  'Protegem de lama e pedras.',
  'Barro acumulado retém umidade: lave por baixo (manual).',
  'paralamas');
E('caixas_roda', 'encaixada', 'Presilhas plásticas na borda do para-lama.');
P('borrachas', 'Borrachas de vedação', 'carro',
  'Em volta das portas.',
  'Vedam água, poeira e ruído.',
  'Use protetor de borracha.',
  'portas portas_tras');
E('borrachas', 'encaixada', 'Encaixadas na aba das aberturas.');

/* ---------- CHASSI ---------- */
P('longarinas', 'Longarinas do chassi', 'chassi',
  'Embaixo de tudo, de ponta a ponta, uma de cada lado.',
  'Vigas que formam o chassi de escada: carregam o motor, as suspensões, a cabine e a caçamba. O número do chassi é estampado na longarina direita, na caixa de roda traseira (manual).',
  'Parafusos dos componentes do chassi reapertados aos 50.000 e 100.000 km (plano da GM). Confira trincas depois de muito fora de estrada ou excesso de carga.',
  'travessas coxins_cab feixe_molas travessa_motor');
E('longarinas', 'soldada', 'Longarinas e travessas formam um quadro rebitado/soldado (posição dos reforços aproximada no modelo).');
P('travessas', 'Travessas do chassi', 'chassi',
  'Atravessadas entre as longarinas.',
  'Fecham o quadro e apoiam o câmbio e o mancal do cardã.',
  'Reaperto no plano.',
  'longarinas coxim_cambio mancal_cardan');
P('coxins_cab', 'Coxins da carroceria', 'chassi',
  'Entre o chassi e a cabine e a caçamba.',
  'Borrachas que isolam a cabine da vibração do chassi.',
  'Coxim gasto: ruído de batida na cabine em piso ruim.',
  'cabine cacamba longarinas');
P('travessa_motor', 'Travessa dianteira do motor', 'chassi',
  'Embaixo do motor, entre as longarinas.',
  'Apoia os coxins do motor e as bandejas inferiores.',
  'Confira depois de pancada embaixo.',
  'longarinas coxim_dir coxim_esq bandeja_inf');
P('protetor_carter', 'Protetor do cárter', 'chassi',
  'Embaixo do motor e do diferencial dianteiro.',
  'Chapa que protege o cárter e o diferencial de pedras.',
  'Sai para trocar o óleo do diferencial dianteiro e do motor, conforme a versão.',
  'carter dif_diant');
E('protetor_carter', 'parafusada', 'Parafusado nas travessas.');
P('protetor_transf', 'Protetor da transferência', 'chassi',
  'Embaixo da caixa de transferência.',
  'Chapa de proteção da transferência.',
  'Amassado por pedra: confira a caixa.',
  'transferencia');
E('protetor_transf', 'parafusada', 'Parafusado nas longarinas.');
};
