/* ===== BYD Dolphin 2024 (EV 95 cv, bateria Blade de 44,9 kWh): catálogo de peças =====
   P(id, nome, sistema, onde fica, o que faz, manutenção, relacionadas); E(id, tipo de fixação, como é presa). */
(window.CAR_PARTS = window.CAR_PARTS || {})['byd-dolphin'] = function (P, E) {

/* ---------- BATERIA DE TRAÇÃO ---------- */
P('bateria_at', 'Bateria de tração Blade (44,9 kWh)', 'bat',
  'Sob o assoalho, entre os eixos, presa nas longarinas das soleiras. É o fundo do carro nessa região.',
  'Caixa de alumínio vedada com as lâminas de lítio-ferro-fosfato (LFP), a placa fria, os coletores de dados e os conectores. Guarda a energia que move o carro: cerca de 330 V em série. A química LFP é das mais estáveis e aguenta muitos ciclos.',
  'Não tem manutenção de troca. Evite pancadas no fundo (meio-fio, lombada alta, valetas) e não lave por baixo com jato forte. Para a vida longa: no dia a dia não precisa carregar até 100% sempre, mas de tempos em tempos uma carga completa ajuda o BMS a calibrar. Abrir é serviço só de técnico de alta tensão.',
  'celulas placa_fria bic conector_at cabos_at bms pdu monobloco soleiras');
E('bateria_at', 'parafusada', 'Parafusada por baixo nas longarinas das soleiras (7 parafusos por lado) e na frente e atrás. Sai para baixo, com elevador e mesa hidráulica, depois de desligar os conectores e as linhas do fluido.');
P('celulas', 'Células de lâmina (104)', 'bat',
  'Dentro da caixa da bateria, de través, uma ao lado da outra ao longo do carro.',
  'Cada lâmina é uma célula comprida e fina, com cerca de 3,2 V; ligadas em série, somam a tensão da bateria. O formato de lâmina deixa as próprias células funcionarem como estrutura da bateria, sem módulos no meio.',
  'Não se trocam em casa. O estado de saúde (SOH) e a diferença de tensão entre as lâminas aparecem no scanner da marca; a perda de capacidade é lenta e natural.',
  'bateria_at bic placa_fria bms');
P('placa_fria', 'Placa fria da bateria (troca de calor direta)', 'bat',
  'No fundo da caixa da bateria, embaixo das lâminas, com duas linhas que saem pela frente.',
  'Na e-Platform 3.0 a bateria é esfriada e aquecida direto pelo fluido da bomba de calor, sem circuito de água separado: no calor e na carga rápida o fluido gelado passa pela placa; no frio, a bomba de calor aquece a bateria para ela aceitar carga e entregar potência.',
  'Sem fluido no circuito do ar, a bateria também perde o arrefecimento e a carga rápida fica limitada. As linhas só se soltam com o fluido recolhido por máquina.',
  'bateria_at celulas modulo_termico tubos_ac compressor');
P('bic', 'Coletores de dados das células', 'bat',
  'Sobre as lâminas, dentro da caixa, com um chicote até o conector de dados na frente.',
  'Pequenas placas que medem a tensão e a temperatura de cada lâmina e mandam os dados ao gerenciador da bateria (BMS). Também fazem o equilíbrio entre as lâminas.',
  'Falha de leitura de uma lâmina aparece como aviso do sistema de alta tensão. Serviço interno da bateria.',
  'celulas bms bateria_at conector_at');
P('conector_at', 'Conectores da bateria', 'bat',
  'Na frente da caixa da bateria, embaixo do carro, perto do corta-fogo.',
  'Dois conectores de potência (laranja), o conector de dados e a válvula de respiro da caixa. Por eles a energia sai para o cofre e volta na recarga e na regeneração.',
  'Têm trava de dois estágios e um contato de segurança que corta a alta tensão se o conector for puxado. Água e sujeira aqui causam falha de isolamento.',
  'bateria_at cabos_at bic bms');
P('cabos_at', 'Cabos de alta tensão (laranja)', 'bat',
  'Da bateria ao conjunto elétrico, dele ao compressor e da porta de recarga ao carregador de bordo.',
  'Cabos grossos, blindados e sempre laranja, por onde passa a alta tensão.',
  'Laranja quer dizer perigo: nunca corte, fure ou desconecte. Cabo raspado ou esmagado causa falha de isolamento.',
  'conector_at pdu compressor porta_recarga obc');
P('pdu', 'Caixa de distribuição de alta tensão', 'bat',
  'No bloco de eletrônica do conjunto 8 em 1, em cima do redutor.',
  'Tem os contatores (interruptores grandes) que ligam e desligam a bateria, o resistor de pré-carga, os fusíveis de alta tensão e as saídas para o inversor, o compressor, o carregador de bordo e a carga rápida.',
  'Os contatores abrem sozinhos com o carro desligado ou com a 12 V desligada. Falha aqui impede o READY ou a recarga. Serviço de alta tensão.',
  'cabos_at inversor obc compressor bms conj_eletrico');
P('bms', 'Gerenciador da bateria (BMS)', 'bat',
  'Integrado ao conjunto 8 em 1, na frente do bloco de eletrônica (posição aproximada no modelo).',
  'Calcula a carga e a saúde da bateria, decide quanta corrente ela pode entregar ou receber, comanda os contatores, mede o isolamento e pede aquecimento ou arrefecimento à bomba de calor.',
  'Indicação de carga imprecisa melhora com uma carga completa de vez em quando. Avisos de isolamento pedem diagnóstico na concessionária.',
  'bic pdu bateria_at vcu modulo_termico');

/* ---------- MOTOR E ELETRÔNICA ---------- */
P('conj_eletrico', 'Conjunto elétrico "8 em 1"', 'motor',
  'No centro do cofre, transversal, no lugar onde ficaria um motor a combustão.',
  'Um bloco só, da e-Platform 3.0, que junta motor, redutor, inversor, carregador de bordo, conversor DC-DC, caixa de distribuição de alta tensão, controlador do veículo e gerenciador da bateria. Juntar tudo encurta cabos, diminui peso e melhora a eficiência.',
  'Não tem óleo de motor, correia, vela nem filtro. O que se acompanha é o óleo do redutor e o líquido de arrefecimento. A tampa da eletrônica só se abre em oficina de alta tensão.',
  'motor_el redutor inversor obc dcdc pdu vcu bms coxim_dir coxim_esq coxim_tras');
E('conj_eletrico', 'parafusada', 'Apoiado em dois coxins (um em cada longarina) e num tirante no subchassi. A tampa da eletrônica é parafusada e vedada.');
P('motor_el', 'Motor elétrico (estator)', 'motor',
  'Lado direito do conjunto, com o eixo ao longo do carro de lado a lado.',
  'Motor síncrono de ímãs permanentes de 70 kW (95 cv) e 180 N·m. O estator, com as bobinas de cobre, cria o campo que gira e puxa o rotor. O torque aparece desde a primeira rotação.',
  'Não tem manutenção. Um zumbido agudo baixinho ao acelerar é normal. É arrefecido pelo líquido do circuito do motor por fora e pelo óleo do redutor por dentro.',
  'rotor resolver inversor redutor conj_eletrico mang_inf');
P('rotor', 'Rotor com ímãs', 'motor',
  'Dentro do estator, no eixo do motor.',
  'A parte que gira: um pacote de chapas com ímãs permanentes. Liga-se ao redutor pelo eixo. Na frenagem, girado pelas rodas, transforma o motor em gerador.',
  'Os rolamentos é que gastam com o tempo: ronco que acompanha a velocidade.',
  'motor_el resolver redutor');
P('resolver', 'Sensor de posição do rotor (resolver)', 'motor',
  'Na ponta direita do motor, sob a tampa.',
  'Mede o ângulo exato do rotor para o inversor saber a hora de alimentar cada fase.',
  'Sinal ruim faz o motor trepidar ou perder força, com código de falha. Depois de trocar, pede calibração com scanner.',
  'rotor motor_el inversor');
P('inversor', 'Inversor (controlador do motor)', 'motor',
  'No bloco de eletrônica em cima do conjunto, do lado do motor.',
  'Transforma a corrente contínua da bateria em alternada de três fases para o motor, controlando o torque; na regeneração faz o caminho inverso. Usa semicondutores de carbeto de silício, que perdem menos energia em calor.',
  'É arrefecido pelo líquido do circuito do motor: nível baixo ou bomba parada fazem ele limitar a potência. Lá dentro há capacitores que guardam carga.',
  'pdu motor_el resolver vcu mang_sup conj_eletrico');
P('vcu', 'Controlador do veículo (VCU)', 'motor',
  'Integrado ao conjunto 8 em 1 (posição aproximada no modelo).',
  'O "cérebro" do trem de força: lê o pedal do acelerador, o seletor e o freio, decide o torque e a regeneração, acorda o carro no READY e conversa com o BMS, o freio integrado e o painel.',
  'Atualizações de software mudam o comportamento (regeneração, respostas): elas são feitas na revisão ou pela internet.',
  'pedal_acel inversor bms ipb seletor quadro');
P('coxim_dir', 'Coxim direito do conjunto', 'motor',
  'Na longarina direita, ligado à ponta do motor.',
  'Segura o conjunto elétrico e filtra a vibração.',
  'Rachado: batida ao acelerar e ao tirar o pé. Troque com o conjunto apoiado por baixo.',
  'conj_eletrico monobloco');
P('coxim_esq', 'Coxim esquerdo do conjunto', 'motor',
  'Na longarina esquerda, ligado ao redutor.',
  'Segura o lado do redutor.',
  'Rachado: conjunto baixo desse lado e batidas.',
  'conj_eletrico redutor monobloco');
P('coxim_tras', 'Tirante inferior do conjunto', 'motor',
  'Embaixo, entre o redutor e o subchassi.',
  'Segura o conjunto contra o giro do torque, que no elétrico inverte a cada vez que se acelera ou regenera.',
  'Bucha gasta: batida quando o torque inverte (acelera e tira o pé).',
  'conj_eletrico subchassi');
P('pedal_acel', 'Pedal do acelerador', 'motor',
  'Assoalho do motorista, à direita.',
  'Pedal eletrônico com dois sensores: o controlador do veículo decide o torque a partir dele. Tirando o pé, o carro regenera.',
  'Falha no pedal limita a potência e acende aviso.',
  'vcu');

/* ---------- REDUTOR E SEMIEIXOS ---------- */
P('redutor', 'Redutor de uma marcha', 'trans',
  'No meio do conjunto elétrico, entre o motor e as rodas.',
  'Engrenagens em duas etapas que diminuem a rotação do motor e multiplicam o torque. Não há marchas: a ré é o motor girando ao contrário. Tem a trava de estacionamento.',
  'Óleo próprio, em pouca quantidade (menos de 1 L). Confira o nível na revisão e troque no prazo do plano. Zumbido que acompanha a velocidade pede verificação.',
  'motor_el rotor diferencial trava_p semieixos conj_eletrico');
E('redutor', 'parafusada', 'Faz parte do conjunto elétrico: carcaça parafusada ao motor. Tem bujão de dreno embaixo e de abastecimento na lateral.');
P('diferencial', 'Diferencial', 'trans',
  'Dentro do redutor, na altura das rodas.',
  'Divide o torque entre as rodas e deixa uma girar mais que a outra nas curvas.',
  'Lubrificado pelo óleo do redutor.',
  'redutor semieixos');
P('trava_p', 'Trava de estacionamento (P)', 'trans',
  'No redutor, com um pequeno atuador elétrico em cima.',
  'Ao selecionar P, uma lingueta trava as engrenagens do redutor. O freio de estacionamento elétrico das rodas de trás atua junto.',
  'Não engate P com o carro andando. Falha no atuador aparece como aviso no painel.',
  'redutor seletor epb');
P('semieixos', 'Semieixos e juntas homocinéticas', 'trans',
  'Do diferencial às rodas dianteiras; o direito passa atrás do motor.',
  'Levam o torque às rodas com juntas que permitem subir, descer e esterçar.',
  'Coifa rasgada perde graxa e a junta estala em curvas fechadas. O torque imediato castiga juntas gastas.',
  'diferencial mangas redutor');
P('seletor', 'Seletor de marcha giratório', 'trans',
  'No console central, à frente do botão de partida.',
  'Gire para D ou R e aperte P. O seletor só manda sinais: quem executa é o controlador do veículo.',
  'Com o carro em movimento, o sistema ignora comandos perigosos.',
  'vcu trava_p console');

/* ---------- RECARGA ---------- */
P('porta_recarga', 'Porta de recarga CCS2', 'recarga',
  'No para-lama dianteiro direito, sobre a roda, atrás de uma tampinha.',
  'Tomada padrão europeu (CCS2): em cima, a parte Tipo 2 para corrente alternada (tomada, carregador de parede); embaixo, os dois pinos grossos da carga rápida em corrente contínua. Tem trava do plugue e uma luz que mostra o estado.',
  'Mantenha a tampinha fechada e os pinos limpos e secos. Pino torto ou queimado impede a recarga e é serviço de alta tensão.',
  'obc pdu cabos_at cabo_recarga paralamas');
E('porta_recarga', 'parafusada', 'Quatro parafusos por dentro do para-lama direito, com vedação; os cabos laranja vão até o conjunto elétrico.');
P('obc', 'Carregador de bordo (OBC)', 'recarga',
  'No bloco de eletrônica do conjunto 8 em 1, em cima.',
  'Transforma a corrente alternada da tomada em contínua para a bateria, até cerca de 7 kW (as fontes variam entre 6,6 e 7,2 kW). Na carga rápida ele não é usado: a corrente já chega contínua.',
  'Se o carro carrega na rápida mas não na tomada, o suspeito é ele (ou o cabo e a tomada).',
  'porta_recarga pdu cabos_at conj_eletrico');
P('cabo_recarga', 'Carregador portátil', 'recarga',
  'No porta-malas, sob o assoalho.',
  'Cabo com a caixa de controle para carregar numa tomada comum. Na tomada de 10 A a recarga completa leva bem mais de um dia; num carregador de parede, algumas horas.',
  'Use tomada dedicada, com terra e disjuntor certo; nada de extensão ou benjamim. Cabo esquentando é sinal de tomada ruim.',
  'porta_recarga obc porta_malas');

/* ---------- ARREFECIMENTO ---------- */
P('radiador', 'Radiador do circuito do motor', 'arref',
  'Na frente do carro, atrás da boca de ar inferior, logo atrás do trocador da bomba de calor.',
  'Radiador pequeno que esfria o líquido do motor e da eletrônica. Por não haver motor a combustão, o calor é bem menor.',
  'Lave por trás com água de baixa pressão. Batidas na frente podem furar a colmeia.',
  'mang_sup mang_inf ventoinha vaso condensador travessa_frontal');
P('ventoinha', 'Ventoinha', 'arref',
  'Atrás do radiador.',
  'Puxa ar quando o carro está parado ou devagar, na carga rápida e com o ar-condicionado ligado.',
  'Ligar depois de desligar o carro ou durante a recarga é normal.',
  'radiador condensador caixa_fus_motor');
P('bomba_agua', 'Bomba d’água elétrica', 'arref',
  'Embaixo, do lado direito do cofre, entre o motor e o radiador.',
  'Bomba com motor próprio que circula o líquido conforme a temperatura pedida pela central; não depende de correia.',
  'Parada, a eletrônica esquenta e o carro limita a potência. Ruído de bolhas pede sangria.',
  'mang_inf radiador motor_el inversor');
P('vaso', 'Reservatório do líquido de arrefecimento', 'arref',
  'Canto dianteiro direito do cofre, com marcas de mínimo e máximo.',
  'Completa e despressuriza o circuito do motor e da eletrônica.',
  'Confira com o carro frio. Use só o líquido indicado (etilenoglicol de longa duração); a quantidade total é pequena, perto de 3 L.',
  'radiador mang_sup bomba_agua');
P('mang_sup', 'Mangueira de ida (radiador → eletrônica)', 'arref',
  'Do alto do radiador ao bloco de eletrônica, pelo lado direito.',
  'Leva o líquido frio primeiro ao inversor e aos módulos, os mais sensíveis ao calor.',
  'Abraçadeira frouxa ou mangueira ressecada vazam.',
  'radiador inversor vaso');
P('mang_inf', 'Mangueiras de retorno (motor → bomba → radiador)', 'arref',
  'Embaixo, do motor à bomba elétrica e dela ao radiador; e o trecho curto entre a eletrônica e o motor.',
  'Devolvem o líquido aquecido ao radiador.',
  'Vigie marcas de vazamento embaixo do carro.',
  'motor_el bomba_agua radiador inversor');
P('sens_temp', 'Sensor de temperatura do líquido', 'arref',
  'Na mangueira de ida, perto do reservatório (posição aproximada).',
  'Informa a temperatura do circuito para a central acelerar a bomba e ligar a ventoinha.',
  'Leitura errada liga a ventoinha fora de hora ou deixa a eletrônica esquentar.',
  'mang_sup bomba_agua ventoinha');

/* ---------- BOMBA DE CALOR E AR ---------- */
P('compressor', 'Compressor elétrico', 'clima',
  'Na frente do cofre, embaixo, do lado esquerdo.',
  'Compressor tipo espiral com motor e inversor próprios, alimentado pela alta tensão (cabo laranja). Funciona com o carro parado e até carregando. Comprime o fluido da bomba de calor.',
  'Ligue o ar de vez em quando também no frio, para lubrificar. Por ser de alta tensão, o óleo dele é isolante: nunca use óleo comum de compressor numa recarga.',
  'tubos_ac condensador modulo_termico cabos_at pdu pressostato');
P('condensador', 'Trocador de calor dianteiro', 'clima',
  'Na frente do radiador, logo atrás da boca de ar do para-choque.',
  'No calor, joga fora o calor do fluido (como o condensador de um ar comum); no frio, faz o contrário e recolhe calor do ar de fora para a bomba de calor.',
  'Colmeia suja faz o ar gelar pouco e a bomba de calor render menos. Lave por trás com água de baixa pressão.',
  'compressor tubos_ac ventoinha radiador modulo_termico');
P('modulo_termico', 'Módulo térmico (bomba de calor)', 'clima',
  'No cofre, do lado esquerdo, perto do corta-fogo (posição aproximada no modelo).',
  'Bloco com as válvulas de expansão eletrônicas, as válvulas que mudam o caminho do fluido e um trocador de placas. Decide se o fluido vai gelar ou aquecer a cabine, a bateria ou os dois.',
  'Válvula travada deixa o ar só gelando ou só aquecendo. Diagnóstico com scanner, que comanda cada válvula.',
  'compressor tubos_ac evaporador cond_int placa_fria condensador bms');
E('modulo_termico', 'parafusada', 'Preso por três porcas no suporte, com coxins; as linhas do fluido são parafusadas com anéis de vedação.');
P('pressostato', 'Sensores de pressão e temperatura do fluido', 'clima',
  'Nas linhas do fluido, perto do compressor e do módulo térmico.',
  'Vigiam o circuito para proteger o compressor e ajustar as válvulas.',
  'Com falta de fluido, eles impedem o compressor de ligar.',
  'compressor modulo_termico tubos_ac');
P('tubos_ac', 'Linhas do fluido', 'clima',
  'Entre o compressor, o trocador da frente, o módulo térmico, a caixa de ar e a placa fria da bateria.',
  'Tubos de alumínio com trechos de borracha: levam o fluido nos dois sentidos, conforme a bomba de calor esteja gelando ou aquecendo.',
  'Vazamento deixa óleo nas conexões. Os anéis de vedação ressecam com o tempo.',
  'compressor condensador modulo_termico evaporador cond_int placa_fria');
P('evaporador', 'Evaporador', 'clima',
  'Dentro da caixa de ar, atrás do porta-luvas.',
  'Onde o fluido expande e gela o ar da cabine; a umidade condensa e sai pelo dreno embaixo do carro.',
  'Cheiro de mofo é fungo: higienize uma vez por ano. Dreno entupido molha o tapete.',
  'modulo_termico caixa_ar vent_interno filtro_cabine');
P('cond_int', 'Condensador interno (aquecimento)', 'clima',
  'Dentro da caixa de ar, ao lado do evaporador, no lugar do radiador do aquecedor de um carro a combustão.',
  'No frio, o fluido quente do compressor passa por ele e aquece o ar da cabine. Gasta bem menos energia que uma resistência.',
  'Aquecimento fraco no frio: confira se o compressor liga e se o módulo térmico comuta as válvulas.',
  'caixa_ar modulo_termico tubos_ac vent_interno');
P('filtro_cabine', 'Filtro de ar da cabine', 'clima',
  'Atrás do porta-luvas, na entrada do ventilador.',
  'Filtra poeira e pólen do ar que entra.',
  'Troque a cada 20.000 km ou uma vez por ano, na revisão. Filtro entupido deixa o ventilador fraco.',
  'vent_interno evaporador caixa_ar');
P('vent_interno', 'Ventilador interno', 'clima',
  'Atrás do porta-luvas, embaixo do painel do lado do passageiro.',
  'Sopra o ar pela caixa de ar até os difusores.',
  'Ruído de folhas no ventilador: limpe a entrada embaixo da grade do torpedo.',
  'caixa_ar comandos_clima filtro_cabine');
P('caixa_ar', 'Caixa de ar e dutos', 'clima',
  'Atrás do painel, no centro.',
  'Mistura o ar frio e quente e distribui pelos difusores.',
  'Portinholas presas deixam o ar saindo sempre pelo mesmo lugar.',
  'evaporador cond_int vent_interno comandos_clima painel');
P('comandos_clima', 'Comandos do clima', 'clima',
  'Na tela central e na fileira de botões embaixo dela.',
  'Temperatura, ventilação, desembaçador e recirculação; pelo aplicativo, dá para pré-climatizar o carro ligado na tomada.',
  'Pré-climatizar na tomada poupa a bateria.',
  'tela vent_interno caixa_ar compressor');

/* ---------- ELÉTRICA 12 V ---------- */
P('bateria', 'Bateria de 12 V', 'ele',
  'Canto dianteiro esquerdo do cofre (posição aproximada no modelo).',
  'Bateria pequena que alimenta os módulos, as luzes, os vidros e, principalmente, acorda o carro e fecha os contatores da alta tensão. Não dá partida em motor nenhum.',
  'Teste a cada 6 meses: fraca, o carro não fica READY. Com o carro desligado muito tempo, ela pode descarregar; o conversor DC-DC a recarrega quando o carro está ligado ou carregando.',
  'cabos_bat dcdc caixa_fus_motor bcm');
P('cabos_bat', 'Cabos da bateria de 12 V e aterramentos', 'ele',
  'Da bateria à saída do conversor DC-DC, à caixa de fusíveis e à carroceria.',
  'Fecham o circuito de 12 V do carro.',
  'Terminal oxidado ou frouxo causa painel apagando e falhas estranhas. Limpe, aperte e proteja.',
  'bateria dcdc caixa_fus_motor');
P('dcdc', 'Conversor DC-DC', 'ele',
  'No bloco de eletrônica do conjunto 8 em 1, em cima.',
  'Faz o papel do alternador: baixa a alta tensão da bateria de tração para cerca de 14 V e carrega a bateria de 12 V com o carro ligado ou carregando.',
  'Com o carro em READY, a tensão da 12 V deve ficar perto de 14 V. Se não sobe, a 12 V vai descarregar.',
  'bateria cabos_bat pdu conj_eletrico');
P('caixa_fus_motor', 'Caixa de fusíveis e relés do cofre', 'ele',
  'No canto traseiro esquerdo do cofre, sob um acabamento.',
  'Fusíveis e relés do 12 V do cofre: ventoinha, bomba d’água, compressor (comando), freio integrado, faróis e buzina.',
  'Fusível queimado se troca por outro de mesmo valor; se queimar de novo, procure curto.',
  'bateria chicote ventoinha bomba_agua ipb caixa_fus_painel');
P('caixa_fus_painel', 'Caixa de fusíveis da cabine', 'ele',
  'Sob o painel, lado do motorista.',
  'Fusíveis dos circuitos internos: multimídia, luzes internas, tomadas USB, vidros, travas e módulos.',
  'Fusível queimado se troca por outro de mesmo valor.',
  'bateria caixa_fus_motor bcm chicote');
P('bcm', 'Módulo da carroceria (BCM)', 'ele',
  'Sob o painel, do lado do motorista (posição aproximada no modelo).',
  'Controla luzes, limpadores, travas, vidros, alarme e a chave presencial, conversando com o controlador do veículo pela rede do carro.',
  'Bateria de 12 V descarregando parada pode vir de um módulo que não "dorme": diagnóstico com scanner.',
  'caixa_fus_painel comutadores fech_portas farois limpador quadro botao_ligar');
P('chicote', 'Chicote elétrico de 12 V', 'ele',
  'Espalhado pelo carro.',
  'Feixe de fios e conectores de baixa tensão que liga sensores, atuadores e módulos. Nada a ver com os cabos laranja.',
  'Conectores do cofre oxidam com a lavagem: surgem defeitos que vão e voltam.',
  'caixa_fus_motor caixa_fus_painel bcm vcu');
P('farois', 'Faróis de LED', 'ele',
  'Cantos dianteiros, finos, correndo para trás pelo ombro do para-lama.',
  'Farol baixo, alto, luz diurna e pisca em LED, com lente de policarbonato.',
  'Os LEDs não se trocam separados: o conjunto sai inteiro. Lente amarelada pede polimento.',
  'comutadores caixa_fus_motor para_choque_d bcm');
P('lanternas', 'Lanternas traseiras', 'ele',
  'Cantos traseiros, logo abaixo do vidro, dobrando para a lateral.',
  'Luz de posição, freio, seta e ré, em LED, ligadas visualmente pela faixa de luz da tampa.',
  'Conjunto selado: infiltração de água pede troca da vedação.',
  'faixa_luz luz_freio pedal_freio laterais bcm');
P('faixa_luz', 'Faixa de luz da tampa traseira', 'ele',
  'Na tampa traseira, de uma lanterna à outra.',
  'Filete de LED que liga as duas lanternas, aceso junto com as luzes de posição.',
  'Sai junto com a tampa; conector por dentro do forro dela.',
  'lanternas tampa_tras bcm');
P('piscas_lat', 'Repetidores de seta nos retrovisores', 'ele',
  'Na carcaça dos retrovisores.',
  'Mostram a seta para quem está ao lado.',
  'Saem junto com o espelho ou com a capa dele.',
  'retrovisores comutadores');
P('luz_freio', 'Luz de freio alta', 'ele',
  'No aerofólio, no alto da tampa traseira.',
  'Terceira luz de freio. Acende também quando a regeneração forte desacelera o carro, para avisar quem vem atrás.',
  'Infiltração de água queima os LEDs.',
  'lanternas pedal_freio tampa_tras');
P('luz_placa', 'Luzes da placa', 'ele',
  'Na tampa traseira, acima da placa.',
  'Iluminam a placa traseira.',
  'Obrigatórias.',
  'tampa_tras');
P('buzina', 'Buzina', 'ele',
  'Atrás do para-choque dianteiro, à esquerda.',
  'Alerta sonoro.',
  'Fica exposta à água; o conector oxida.',
  'comutadores airbag_mot caixa_fus_motor');
P('avas', 'Alto-falante de aviso a pedestres (AVAS)', 'ele',
  'Atrás do para-choque dianteiro, à direita (posição aproximada).',
  'O carro elétrico é quase silencioso: até uns 30 km/h e em ré, esse alto-falante faz um som para os pedestres perceberem o carro.',
  'Som baixo ou ausente: alto-falante molhado ou conector oxidado. Exigido por norma.',
  'vcu para_choque_d');
P('limpador', 'Limpador do para-brisa', 'ele',
  'Motor na base do para-brisa, sob a grade do torpedo.',
  'O motor move as varetas que balançam os dois braços.',
  'Palhetas uma vez por ano. Folhas no torpedo entopem o dreno.',
  'comutadores para_brisa lavador grade_torpedo');
P('limpador_tras', 'Limpador traseiro', 'ele',
  'Na tampa traseira, com o motor por dentro do forro.',
  'Limpa o vidro traseiro.',
  'O eixo engripa sem uso: acione de vez em quando.',
  'tampa_tras vidro_tras lavador');
P('lavador', 'Reservatório e bomba do lavador', 'ele',
  'Atrás do para-choque dianteiro, do lado direito; o bocal fica no cofre.',
  'Esguicha água no para-brisa e no vidro traseiro.',
  'Água com o aditivo próprio; detergente resseca as borrachas.',
  'limpador limpador_tras');
P('botao_ligar', 'Botão de partida', 'ele',
  'No console central, ao lado do seletor.',
  'Com o pé no freio e a chave dentro do carro, liga o sistema até o READY; aperte de novo, parado em P, para desligar.',
  'Chave com pilha fraca pode não ser reconhecida: encoste a chave no ponto indicado no manual.',
  'bcm vcu seletor console');
P('comutadores', 'Chaves de seta, faróis e limpador', 'ele',
  'Atrás do volante.',
  'Comandam setas, faróis, lavador e limpadores.',
  'Mau contato faz luzes acenderem fora de hora.',
  'volante_dir limpador farois bcm');
P('camera_re', 'Câmera de ré', 'ele',
  'Na tampa traseira, acima da placa.',
  'Mostra a traseira na tela ao engatar R.',
  'Lente suja ou embaçada: limpe com pano macio.',
  'tela tampa_tras sensores_estac');
P('sensores_estac', 'Sensores de estacionamento', 'ele',
  'No para-choque traseiro.',
  'Medem a distância de obstáculos por ultrassom e avisam com bipes e na tela.',
  'Sensor sujo ou pintado errado dá aviso falso. Saem com o para-choque.',
  'para_choque_t camera_re tela');

/* ---------- FREIOS ---------- */
P('pedal_freio', 'Pedal do freio', 'freio',
  'Assoalho do motorista, no centro.',
  'Empurra o freio integrado, que mede o curso e a velocidade da pisada por um sensor. O interruptor do pedal acende as luzes de freio e libera a partida.',
  'Pedal com sensação diferente pode ser só a regeneração mais forte ou mais fraca, ajustável na tela.',
  'ipb luz_freio lanternas botao_ligar');
P('ipb', 'Freio integrado (IPB)', 'freio',
  'No corta-fogo, do lado do motorista, com o reservatório em cima.',
  'Bloco que junta o servo, o cilindro-mestre, o ABS e o ESP. Sem vácuo de motor, um motor elétrico gera a pressão. Reparte a freada entre a regeneração e as pastilhas, faz a freada automática de emergência e segura o carro em subidas.',
  'Falha acende a luz de freio e mostra aviso na tela; o freio continua só na força do pé, mais duro. Sangria e calibração pedem scanner.',
  'pedal_freio reserv_freio tubos_freio sens_roda vcu caixa_fus_motor');
E('ipb', 'parafusada', 'Quatro porcas no corta-fogo; as linhas de freio usam chave de linha e o conector é grande, com trava.');
P('reserv_freio', 'Reservatório do fluido de freio', 'freio',
  'Em cima do freio integrado, no cofre, lado do motorista.',
  'Guarda o fluido DOT 4.',
  'Troca a cada 2 anos, como referência (o fluido absorve água). Como as pastilhas gastam devagar, nível caindo é sinal de vazamento.',
  'ipb');
P('sens_roda', 'Sensores de rotação das rodas', 'freio',
  'Um em cada roda, lendo um anel no cubo.',
  'Informam a velocidade de cada roda ao freio integrado (ABS e ESP), à direção elétrica e ao controle de tração — que no elétrico age direto no torque do motor.',
  'Cabo rompido ou sensor sujo acendem as luzes do ABS e do ESP.',
  'ipb mangas cubo_tras');
P('tubos_freio', 'Tubulações e flexíveis de freio', 'freio',
  'Do freio integrado até cada roda.',
  'Levam o fluido sob pressão.',
  'Flexível rachado ou estufado deve ser trocado.',
  'ipb pincas pincas_tras');
P('pincas', 'Pinças de freio dianteiras', 'freio',
  'Nas rodas dianteiras, abraçando os discos.',
  'Pinça flutuante de um pistão.',
  'Pinos-guia secos causam desgaste irregular e carro puxando.',
  'pastilhas discos tubos_freio mangas');
P('pastilhas', 'Pastilhas dianteiras', 'freio',
  'Dentro das pinças dianteiras.',
  'Material de atrito. Com a regeneração, gastam bem menos que num carro a combustão.',
  'Olhe na revisão e troque com menos de 3 mm de material.',
  'pincas discos');
P('discos', 'Discos dianteiros ventilados', 'freio',
  'Presos aos cubos dianteiros.',
  'Giram com a roda e são apertados pelas pastilhas.',
  'Espessura mínima gravada na peça.',
  'pastilhas pincas mangas');
P('pincas_tras', 'Pinças traseiras com freio de estacionamento', 'freio',
  'Nas rodas traseiras.',
  'Pinças menores, cada uma com um motorzinho elétrico que aperta as pastilhas no freio de estacionamento.',
  'O pistão não se recolhe à mão: use o modo de manutenção (tela ou scanner) antes de trocar pastilhas.',
  'pastilhas_tras discos_tras epb tubos_freio cubo_tras');
P('pastilhas_tras', 'Pastilhas traseiras', 'freio',
  'Dentro das pinças traseiras.',
  'Freiam os discos de trás e seguram o carro estacionado.',
  'Duram muito; a troca exige o modo de manutenção do freio de estacionamento.',
  'pincas_tras discos_tras');
P('discos_tras', 'Discos traseiros sólidos', 'freio',
  'Presos aos cubos traseiros.',
  'Discos maciços: atrás o esforço é menor.',
  'Como o motor faz boa parte das freadas, enferrujam por falta de uso e chiam. Freadas firmes de vez em quando, em lugar seguro, limpam a superfície.',
  'pastilhas_tras pincas_tras cubo_tras');
P('epb', 'Freio de estacionamento elétrico', 'freio',
  'Botão no console; um motor em cada pinça traseira.',
  'Aperta as pastilhas traseiras ao desligar o carro ou ao pôr em P, e solta sozinho ao acelerar com o cinto afivelado.',
  'Não solta com a 12 V fraca. Depois de trocar pastilhas, saia do modo de manutenção para ele recalibrar.',
  'pincas_tras pastilhas_tras trava_p console bateria');

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
  'Braço que segura a base da manga; a bucha grande filtra os impactos e o pivô é a articulação.',
  'Bucha rachada deixa o carro instável em freadas e batendo em buracos. O peso extra da bateria cobra mais delas.',
  'mangas subchassi barra_estab');
P('barra_estab', 'Barra estabilizadora e bieletas', 'susp',
  'Atrás do eixo dianteiro, de um lado ao outro, ligada aos amortecedores.',
  'Reduz a inclinação da carroceria nas curvas.',
  'Bieletas gastas fazem toc-toc em piso irregular.',
  'amort_diant subchassi bandejas');
P('subchassi', 'Subchassi dianteiro', 'susp',
  'Sob o conjunto elétrico, de um lado ao outro.',
  'Quadro que segura as bandejas, a barra estabilizadora, a caixa de direção, o compressor e o tirante do conjunto.',
  'Depois de pancadas por baixo, revise.',
  'bandejas barra_estab coxim_tras caixa_dir compressor monobloco');
P('mangas', 'Mangas de eixo, cubos e rolamentos', 'susp',
  'Atrás de cada roda dianteira.',
  'Articulam com a direção, carregam o rolamento da roda e recebem o semieixo, a pinça e o sensor.',
  'Ronco que muda de tom nas curvas é rolamento.',
  'amort_diant bandejas barras_axiais semieixos discos pincas sens_roda');
P('eixo_tras', 'Eixo traseiro de torção', 'susp',
  'Sob a traseira, de uma roda à outra, logo atrás da bateria.',
  'Dois braços longitudinais unidos por uma travessa que torce. Simples e compacto. (As versões mais potentes do Dolphin usam suspensão multibraço: confira a do seu.)',
  'Raramente quebra; as buchas da frente dos braços é que gastam.',
  'buchas_eixo cubo_tras amort_tras molas_tras monobloco');
P('buchas_eixo', 'Buchas do eixo traseiro', 'susp',
  'Na frente dos dois braços do eixo traseiro, presas à carroceria.',
  'Articulação de borracha que deixa o eixo subir e descer e filtra os impactos.',
  'Rachadas fazem estalo em lombada. Troca com prensa e ferramenta própria.',
  'eixo_tras monobloco');
P('cubo_tras', 'Cubos e rolamentos traseiros', 'susp',
  'Nas pontas do eixo traseiro, atrás dos discos.',
  'Cubo com rolamento integrado, parafusado no eixo, onde giram o disco e a roda; leva o anel do sensor.',
  'Ronco que aumenta com a velocidade pode ser rolamento traseiro — num carro silencioso ele aparece cedo.',
  'eixo_tras discos_tras sens_roda');
P('amort_tras', 'Amortecedores traseiros', 'susp',
  'Atrás das rodas traseiras, do eixo até a carroceria.',
  'Controlam o balanço da traseira. Ficam separados das molas.',
  'Troque em par. O acesso de cima é por dentro do porta-malas.',
  'eixo_tras molas_tras');
P('molas_tras', 'Molas traseiras', 'susp',
  'Sobre o eixo traseiro, na frente dos amortecedores.',
  'Sustentam o peso da traseira.',
  'Os coxins de apoio ressecam e rangem.',
  'eixo_tras amort_tras');
P('pneus', 'Pneus (195/60 R16 nas fichas desta versão)', 'susp',
  'As quatro rodas.',
  'O único contato com o chão. Pneus de baixa resistência ao rolamento ajudam a autonomia.',
  'Calibre com os pneus frios pela etiqueta da coluna; rodízio a cada 10.000 km. O torque imediato e o peso gastam mais os da frente.',
  'rodas mangas cubo_tras kit_pneu');
P('rodas', 'Rodas de liga leve aro 16', 'susp',
  'As quatro rodas.',
  'Rodas de liga com raios largos que ajudam na aerodinâmica, presas por 5 porcas.',
  'Borda amassada causa vazamento lento e vibração.',
  'pneus mangas');
P('kit_pneu', 'Kit de reparo de pneus', 'susp',
  'No fundo do porta-malas, sob o assoalho.',
  'No lugar do estepe: selante e compressor de 12 V para tapar um furo pequeno e chegar à borracharia.',
  'O selante tem validade. Não resolve corte na lateral do pneu.',
  'pneus porta_malas');

/* ---------- DIREÇÃO ---------- */
P('volante_dir', 'Volante', 'dir',
  'À frente do motorista, com o airbag no centro.',
  'Comanda a direção elétrica, com botões da multimídia e do piloto automático, conforme a versão.',
  'Folga antes de a roda responder: revise terminais e caixa.',
  'coluna airbag_mot cabo_espiral comutadores');
P('coluna', 'Coluna de direção', 'dir',
  'Do volante até a caixa, atravessando o corta-fogo.',
  'Transmite o giro do volante e carrega o motor da assistência elétrica.',
  'Estalos na junta da coluna aparecem com os anos.',
  'volante_dir caixa_dir eps');
P('eps', 'Motor e módulo da direção elétrica (EPS)', 'dir',
  'Na coluna de direção, sob o painel (posição aproximada no modelo).',
  'Um sensor de torque percebe a força que você faz e o motor elétrico ajuda, mais em manobra e menos em velocidade. Pode ter modos de peso escolhidos na tela.',
  'Luz da direção acesa e volante pesado: falha no sistema ou 12 V baixa.',
  'coluna volante_dir caixa_fus_painel bateria sens_roda');
P('caixa_dir', 'Caixa de direção', 'dir',
  'Atrás do conjunto elétrico, presa ao subchassi.',
  'Pinhão e cremalheira, mecânica.',
  'Coifas rasgadas deixam entrar água e poeira.',
  'coluna barras_axiais subchassi');
P('barras_axiais', 'Barras axiais e terminais', 'dir',
  'Das pontas da caixa até as mangas.',
  'Empurram as mangas para esterçar. O alinhamento é ajustado nos terminais.',
  'Folga deixa o volante torto e gasta pneu. Alinhe depois de trocar.',
  'caixa_dir mangas');

/* ---------- INTERIOR E SEGURANÇA ---------- */
P('painel', 'Painel e porta-luvas', 'int',
  'Frente da cabine, baixo e fino.',
  'Estrutura que abriga o quadro digital, a tela giratória, os difusores, o airbag do passageiro e o porta-luvas.',
  'Barulhos costumam ser presilhas soltas. Atrás dele ficam a caixa de ar, o evaporador e o condensador interno.',
  'quadro tela caixa_ar comandos_clima airbag_pass');
P('quadro', 'Quadro de instrumentos digital', 'int',
  'Atrás do volante, uma tela pequena.',
  'Velocidade, carga e autonomia, consumo, marcha selecionada, READY e as luzes de aviso (freio, ABS, airbag, direção, sistema elétrico, tartaruga de potência limitada).',
  'Aviso de "verificar o sistema elétrico" ou tartaruga: leia a mensagem e procure a concessionária.',
  'vcu bms srs ipb eps bcm');
P('tela', 'Central multimídia giratória', 'int',
  'No centro do painel; gira do modo paisagem para retrato.',
  'Tela grande (12,8" nas fichas) com multimídia, ajustes do carro (regeneração, modos de condução, freio de estacionamento em manutenção), câmera de ré e clima.',
  'Travamentos e recursos novos se resolvem por atualização de software.',
  'painel comandos_clima camera_re alto_falantes');
P('airbag_mot', 'Airbag do motorista', 'int',
  'No centro do volante.',
  'Bolsa que infla numa batida frontal forte.',
  'Nunca mexa com a 12 V ligada. Desligue e espere pelo menos 3 minutos.',
  'volante_dir cabo_espiral srs');
P('airbag_pass', 'Airbag do passageiro', 'int',
  'No alto do painel, do lado do passageiro.',
  'Bolsa maior que protege o passageiro da frente.',
  'Não cole nem prenda objetos na tampa do airbag.',
  'painel srs');
P('airbags_lat', 'Airbags laterais e de cortina', 'int',
  'Laterais nos encostos dos bancos da frente; de cortina no friso do teto, das colunas da frente até as de trás.',
  'Protegem o tórax e a cabeça numa batida lateral. Com os frontais, somam seis.',
  'Capa de banco que não seja própria pode atrapalhar o airbag lateral. Não pendure cabides pesados nas alças do teto.',
  'srs bancos_diant teto');
P('srs', 'Central do airbag (SRS)', 'int',
  'Embaixo do console central.',
  'Sente a desaceleração da batida, dispara os airbags e os pré-tensionadores dos cintos e manda o carro desligar a alta tensão numa colisão.',
  'Depois de um disparo, a central precisa ser trocada.',
  'airbag_mot airbag_pass airbags_lat cabo_espiral cintos quadro');
P('cabo_espiral', 'Cabo espiral do volante', 'int',
  'Atrás do volante, em volta da coluna.',
  'Fita de contato enrolada que liga o airbag, a buzina e os botões ao chicote, deixando o volante girar.',
  'Rompida: a buzina para e a luz do airbag acende.',
  'airbag_mot volante_dir buzina srs');
P('console', 'Console central', 'int',
  'Entre os bancos dianteiros, "flutuando" com um vão embaixo.',
  'Leva o seletor giratório, o botão de partida, o botão do freio de estacionamento, os porta-copos e o carregador sem fio, conforme a versão.',
  'Presilha quebrada faz barulho.',
  'seletor botao_ligar epb srs');
P('bancos_diant', 'Bancos dianteiros', 'int',
  'Cabine.',
  'Bancos com encosto de cabeça integrado e o airbag lateral no encosto.',
  'Desligue a 12 V antes de soltar: há conectores do airbag e do sensor do cinto embaixo.',
  'cintos airbags_lat');
P('banco_tras', 'Banco traseiro', 'int',
  'Cabine, atrás, sobre o assoalho plano.',
  'Bipartido. Como a bateria fica embaixo do assoalho, o piso é plano, sem túnel.',
  'Limpe os trilhos e travas do encosto.',
  'porta_malas bateria_at');
P('cintos', 'Cintos de segurança', 'int',
  'Colunas e assoalho.',
  'Seguram os ocupantes numa colisão; os da frente têm pré-tensionador.',
  'Cinto que não trava num puxão forte deve ser trocado.',
  'bancos_diant srs monobloco');
P('forros_portas', 'Forros das portas dianteiras', 'int',
  'Lado de dentro das portas da frente.',
  'Acabamento com puxador, maçaneta interna e os botões dos vidros.',
  'Presilha quebrada faz o forro vibrar.',
  'portas maq_vidro fech_portas');
E('forros_portas', 'encaixada', 'Presilhas plásticas em volta, parafusos no puxador e na maçaneta interna, e os conectores dos botões.');
P('forros_portas_tras', 'Forros das portas traseiras', 'int',
  'Lado de dentro das portas de trás.',
  'Acabamento com puxador, maçaneta interna e o botão do vidro.',
  'Presilha quebrada faz o forro vibrar.',
  'portas_tras maq_vidro_tras fech_portas');
E('forros_portas_tras', 'encaixada', 'Presilhas plásticas em volta, parafuso no puxador e conector do botão do vidro.');
P('porta_malas', 'Porta-malas', 'int',
  'Atrás do banco traseiro, aberto pela tampa traseira.',
  'Compartimento de carga com assoalho removível; embaixo ficam o kit de reparo e o carregador portátil.',
  'Água parada: revise a borracha da tampa e a vedação das lanternas.',
  'kit_pneu cabo_recarga tampa_tras lanternas banco_tras');
P('retrovisor_int', 'Retrovisor interno', 'int',
  'No para-brisa.',
  'Visão traseira.',
  '',
  'para_brisa');
P('alto_falantes', 'Alto-falantes', 'int',
  'Nas portas.',
  'Som da multimídia.',
  '',
  'tela portas portas_tras');

/* ---------- CARROCERIA ---------- */
/* estrutura soldada */
P('monobloco', 'Monobloco (estrutura)', 'carro',
  'O esqueleto do carro, por baixo de tudo.',
  'Chapas de aço estampadas e soldadas: longarinas, torres, caixas de roda e o assoalho da cabine, que fica por cima da bateria. As longarinas das soleiras recebem os parafusos da bateria.',
  'Vigie ferrugem nas caixas de roda e nas emendas e mantenha os drenos desentupidos. Macaco só nos pontos marcados, nunca na caixa da bateria.',
  'corta_fogo soleiras colunas teto laterais painel_tras travessa_frontal subchassi eixo_tras coxim_dir bateria_at');
E('monobloco', 'soldada', 'Chapas unidas por pontos de solda e cola estrutural, com massa de vedação nas emendas. Não se desmonta: dano estrutural se repara em funilaria, com gabarito — e com a bateria de tração retirada ou protegida.');
P('corta_fogo', 'Parede corta-fogo', 'carro',
  'Entre o cofre e a cabine, com a caixa de ar (torpedo) em cima.',
  'Separa o cofre da cabine e recebe o freio integrado, os pedais, a coluna de direção e as passagens de chicote e das linhas do fluido.',
  'Borrachas de passagem ressecadas deixam entrar água e ruído.',
  'monobloco ipb coluna caixa_ar grade_torpedo modulo_termico');
E('corta_fogo', 'soldada', 'Parte soldada do monobloco. As passagens são vedadas com borrachas encaixadas.');
P('soleiras', 'Soleiras', 'carro',
  'Embaixo das portas, da roda da frente à de trás.',
  'Vigas ocas de aço que dão rigidez à lateral e protegem a bateria numa batida lateral. A aba de baixo é onde o macaco apoia, nos pontos marcados.',
  'Ferrugem começa por dentro, pelos drenos entupidos.',
  'monobloco laterais paralamas portas portas_tras borrachas bateria_at');
E('soleiras', 'soldada', 'Soldadas a ponto na aba de baixo e na borda das aberturas das portas, emendadas às laterais e ao assoalho.');
P('colunas', 'Colunas dianteiras e moldura do para-brisa', 'carro',
  'Dos lados do para-brisa até o teto, e a faixa sob o para-brisa.',
  'Seguram o teto e o para-brisa e formam a borda das portas da frente.',
  'Coluna amassada compromete a estrutura e o fechamento da porta.',
  'teto para_brisa portas monobloco grade_torpedo');
E('colunas', 'soldada', 'Parte soldada da estrutura; o para-brisa é colado na moldura.');
P('teto', 'Teto', 'carro',
  'Topo da cabine, até a tampa traseira, com o aerofólio no fim.',
  'Chapa que fecha a cabine e trabalha com as colunas; na borda de trás recebe as dobradiças da tampa traseira.',
  'Encere com alguma frequência.',
  'colunas laterais para_brisa dobr_tampa monobloco airbags_lat');
E('teto', 'soldada', 'Soldado a ponto nas bordas, com massa de vedação. Não se desmonta.');
P('laterais', 'Laterais traseiras', 'carro',
  'Atrás das portas traseiras, em volta das rodas de trás, até as lanternas e a abertura da tampa.',
  'Chapa externa que forma a caixa da roda traseira, a coluna de trás com o vidro fixo em forma de "barbatana" e o contorno das lanternas e da tampa.',
  'Reparo exige funilaria.',
  'soleiras teto painel_tras caixas_roda lanternas vidros_laterais para_choque_t frisos');
E('laterais', 'soldada', 'Soldadas a ponto na coluna central, na soleira, na caixa de roda interna, junto ao teto e no painel traseiro.');
P('painel_tras', 'Painel traseiro', 'carro',
  'Embaixo da tampa traseira, atrás do para-choque.',
  'Chapa que fecha a traseira e recebe o batente da fechadura da tampa e a viga de impacto.',
  'Batidas leves amassam o painel por trás do para-choque.',
  'tampa_tras fech_tampa para_choque_t laterais viga_traseira monobloco');
E('painel_tras', 'soldada', 'Soldado às laterais e ao assoalho do porta-malas.');
P('travessa_frontal', 'Painel frontal (suporte do radiador)', 'carro',
  'Frente do cofre, atrás do para-choque.',
  'Estrutura que segura o radiador, o trocador da bomba de calor, os faróis e a fechadura do capô.',
  'Depois de batidas leves, confira se não entortou.',
  'radiador condensador fech_capo farois viga_dianteira monobloco');
E('travessa_frontal', 'parafusada', 'A travessa de cima é parafusada nas pontas; a parte de baixo é soldada às longarinas.');
P('viga_dianteira', 'Viga de impacto dianteira', 'carro',
  'Atrás do para-choque dianteiro.',
  'Absorve impactos leves e os distribui para as longarinas, protegendo o conjunto elétrico.',
  'Depois de uma batida, confira se amassou.',
  'para_choque_d monobloco');
E('viga_dianteira', 'parafusada', 'Parafusada nas pontas das longarinas.');
P('viga_traseira', 'Viga de impacto traseira', 'carro',
  'Atrás do para-choque traseiro.',
  'Absorve impactos leves na traseira.',
  'Depois de uma batida, confira o painel traseiro.',
  'para_choque_t painel_tras');
E('viga_traseira', 'parafusada', 'Parafusada no painel traseiro.');

/* painéis parafusados */
P('capo', 'Capô', 'carro',
  'Topo do cofre, curto.',
  'Cobre o conjunto elétrico e os reservatórios. Aberto, fica apoiado na vareta. Não há porta-malas dianteiro neste modelo.',
  'Lubrifique dobradiças e fechadura.',
  'dobr_capo fech_capo grade_torpedo paralamas travessa_frontal');
E('capo', 'parafusada', 'Duas dobradiças atrás, com dois parafusos em cada no capô; na frente, a lingueta entra na fechadura da travessa.');
P('paralamas', 'Para-lamas dianteiros', 'carro',
  'Laterais dianteiras, em volta das rodas da frente.',
  'Cobrem as rodas dianteiras; o direito tem a porta de recarga.',
  'Barro acumulado por dentro enferruja a borda.',
  'para_choque_d portas soleiras caixas_roda farois capo porta_recarga');
E('paralamas', 'parafusada', 'Todo parafusado: na borda de cima, na frente junto ao farol, embaixo na soleira e atrás, na coluna da porta.');
P('portas', 'Portas dianteiras', 'carro',
  'Laterais, na frente.',
  'Forro externo, painel interno, moldura do vidro e, por dentro, máquina de vidro, fechadura elétrica, alto-falante e a maçaneta embutida.',
  'Lubrifique dobradiças e limitador. Drenos entupidos embaixo da porta enferrujam por dentro.',
  'dobradicas fech_portas maq_vidro vidros_portas retrovisores borrachas forros_portas frisos');
E('portas', 'parafusada', 'Duas dobradiças na coluna dianteira e um limitador; atrás, a fechadura engata no batente da coluna central.');
P('portas_tras', 'Portas traseiras', 'carro',
  'Laterais, atrás.',
  'Mesma construção das dianteiras, presas na coluna central.',
  'Trava de segurança para crianças na borda traseira da porta.',
  'dobradicas fech_portas maq_vidro_tras vidros_portas_tras borrachas forros_portas_tras frisos');
E('portas_tras', 'parafusada', 'Duas dobradiças na coluna central e um limitador; atrás, a fechadura engata no batente da lateral traseira.');
P('dobradicas', 'Dobradiças e limitadores das portas', 'carro',
  'Na borda dianteira de cada porta.',
  'Sustentam a porta e deixam ela girar; o limitador segura a porta aberta.',
  'Lubrifique uma vez por ano.',
  'portas portas_tras colunas');
E('dobradicas', 'parafusada', 'Parafusadas na coluna e na porta.');
P('fech_portas', 'Fechaduras e maçanetas embutidas', 'carro',
  'Borda traseira das portas; os batentes ficam nas colunas.',
  'Fechadura com trava elétrica e maçaneta externa embutida, que fica rente à porta.',
  'Com a 12 V descarregada, a porta do motorista abre pela chave mecânica escondida na chave presencial.',
  'portas portas_tras laterais bcm');
E('fech_portas', 'parafusada', 'Fechadura presa por três parafusos na borda da porta; batente com dois parafusos na coluna.');
P('retrovisores', 'Retrovisores externos', 'carro',
  'Na frente das portas dianteiras.',
  'Visão lateral, com regulagem elétrica e o repetidor de seta.',
  '',
  'portas piscas_lat');
E('retrovisores', 'parafusada', 'Três porcas por dentro da porta.');
P('tampa_tras', 'Tampa traseira', 'carro',
  'Traseira, do teto até o para-choque.',
  'Leva o vidro, o aerofólio com a luz de freio alta, o limpador, a faixa de luz, a placa, a câmera de ré e as luzes da placa. Fica aberta graças a dois amortecedores a gás.',
  'Amortecedores cansados deixam a tampa cair; borracha ressecada deixa entrar água.',
  'dobr_tampa amort_tampa fech_tampa vidro_tras limpador_tras luz_placa luz_freio faixa_luz camera_re porta_malas borrachas');
E('tampa_tras', 'parafusada', 'Duas dobradiças presas na borda do teto e dois amortecedores a gás com pinos esféricos.');
P('dobr_capo', 'Dobradiças do capô', 'carro',
  'Nos cantos de trás do capô.',
  'Deixam o capô girar para abrir.',
  'Lubrifique.',
  'capo paralamas');
E('dobr_capo', 'parafusada', 'Parafusadas na carroceria e no capô.');
P('dobr_tampa', 'Dobradiças da tampa traseira', 'carro',
  'Na borda de trás do teto.',
  'Deixam a tampa girar para cima.',
  'Ferrugem em volta delas indica infiltração.',
  'tampa_tras teto');
E('dobr_tampa', 'parafusada', 'Porcas no teto, por dentro, e parafusos na tampa.');
P('amort_tampa', 'Amortecedores da tampa traseira', 'carro',
  'Nas laterais da abertura da tampa traseira.',
  'Molas a gás que seguram a tampa aberta.',
  'Troque os dois juntos.',
  'tampa_tras');
E('amort_tampa', 'parafusada', 'Encaixados em pinos esféricos com trava de mola.');
P('fech_tampa', 'Fechadura e batente da tampa traseira', 'carro',
  'Embaixo da tampa; o batente fica no painel traseiro.',
  'Trava a tampa; abre pelo botão, pela chave presencial ou pela tela.',
  'Tampa que não fecha de primeira pede regulagem do batente.',
  'tampa_tras painel_tras');
E('fech_tampa', 'parafusada', 'Fechadura parafusada na tampa e batente parafusado no painel traseiro.');
P('fech_capo', 'Fechadura e cabo do capô', 'carro',
  'Centro do painel frontal; a alavanca fica perto do pé esquerdo do motorista.',
  'Trava a lingueta do capô, com a trava de segurança por fora.',
  'Engraxe a fechadura.',
  'capo travessa_frontal');
E('fech_capo', 'parafusada', 'Fechadura parafusada na travessa; o cabo vai preso por presilhas até a alavanca.');
P('maq_vidro', 'Máquinas de vidro das portas dianteiras', 'carro',
  'Dentro das portas da frente.',
  'Mecanismo com motor elétrico que sobe e desce o vidro, com antiesmagamento.',
  'Depois de desligar a 12 V, inicialize o vidro automático.',
  'vidros_portas portas forros_portas');
E('maq_vidro', 'parafusada', 'Parafusada no painel interno da porta.');
P('maq_vidro_tras', 'Máquinas de vidro das portas traseiras', 'carro',
  'Dentro das portas de trás.',
  'Mecanismo com motor elétrico que sobe e desce o vidro traseiro.',
  'Canaletas limpas poupam o motor.',
  'vidros_portas_tras portas_tras forros_portas_tras');
E('maq_vidro_tras', 'parafusada', 'Parafusada no painel interno da porta.');

/* vidros */
P('para_brisa', 'Para-brisa', 'carro',
  'Frente da cabine, bem inclinado.',
  'Vidro laminado colado na moldura; trabalha na rigidez da cabine.',
  'Trinca sempre cresce. Depois da troca, câmeras e sensores no vidro (se houver) precisam ser recalibrados.',
  'colunas teto limpador retrovisor_int borrachas');
E('para_brisa', 'colada', 'Colado na moldura com cordão de poliuretano.');
P('vidro_tras', 'Vidro traseiro térmico', 'carro',
  'Na tampa traseira.',
  'Vidro com desembaçador elétrico, colado na tampa.',
  'Não raspe o lado de dentro: os fios do desembaçador ficam ali.',
  'tampa_tras limpador_tras');
E('vidro_tras', 'colada', 'Colado na tampa com cordão de poliuretano.');
P('vidros_laterais', 'Vidros laterais fixos ("barbatana")', 'carro',
  'Atrás das portas traseiras, nas colunas de trás.',
  'Vidros fixos cuja borda de baixo sobe para trás, a assinatura lateral do Dolphin.',
  'Vidro chiando ou com água entrando indica cola descolada.',
  'laterais teto borrachas frisos');
E('vidros_laterais', 'colada', 'Fixos, colados na lateral com cordão de poliuretano.');
P('vidros_portas', 'Vidros das portas dianteiras', 'carro',
  'Nas portas da frente.',
  'Vidros móveis que correm em canaletas de borracha.',
  'Canaletas limpas poupam a máquina de vidro.',
  'portas maq_vidro borrachas');
E('vidros_portas', 'encaixada', 'Correm em canaletas e se prendem à máquina por dois parafusos.');
P('vidros_portas_tras', 'Vidros das portas traseiras', 'carro',
  'Nas portas de trás.',
  'Vidros móveis.',
  'Canaletas limpas poupam a máquina de vidro.',
  'portas_tras maq_vidro_tras borrachas');
E('vidros_portas_tras', 'encaixada', 'Correm em canaletas e se prendem à máquina por parafusos.');

/* plásticos, acabamentos e vedações */
P('para_choque_d', 'Para-choque dianteiro', 'carro',
  'Frente; inclui a frente fechada entre os faróis.',
  'Capa plástica que absorve toques. Como o carro não tem radiador grande, a frente é fechada; o ar entra pela boca de baixo, com as "barbatanas" nos cantos.',
  'Presilhas e guias quebradas deixam frestas e barulhos.',
  'viga_dianteira grade_inf farois paralamas travessa_frontal avas');
E('para_choque_d', 'parafusada', 'Capa plástica presa por parafusos e presilhas em cima, nas caixas de roda e embaixo, e encaixada nas guias laterais.');
P('para_choque_t', 'Para-choque traseiro', 'carro',
  'Traseira, embaixo da tampa.',
  'Capa plástica que absorve toques, com os sensores de estacionamento.',
  '',
  'painel_tras viga_traseira laterais lanternas sensores_estac');
E('para_choque_t', 'parafusada', 'Parafusos e presilhas em cima, nas caixas de roda e embaixo, e guias laterais.');
P('grade_inf', 'Grade da boca de ar inferior', 'carro',
  'Parte baixa do para-choque dianteiro, atrás da placa.',
  'Deixa o ar chegar ao trocador da bomba de calor e ao radiador.',
  'Tire folhas e insetos.',
  'para_choque_d radiador condensador');
E('grade_inf', 'encaixada', 'Encaixada no para-choque.');
P('grade_torpedo', 'Grade do torpedo', 'carro',
  'Entre o capô e o para-brisa, embaixo dos limpadores.',
  'Deixa entrar o ar da ventilação e cobre a caixa de ar e o motor do limpador.',
  'Folhas acumuladas entopem os drenos.',
  'capo colunas limpador caixa_ar corta_fogo');
E('grade_torpedo', 'encaixada', 'Presilhas e um encaixe sob a borda do para-brisa.');
P('caixas_roda', 'Caixas de roda e forros', 'carro',
  'Em volta das 4 rodas.',
  'Forros plásticos protegem para-lamas e cofre de água, barro e pedras.',
  'Lave por dentro para não acumular barro.',
  'paralamas laterais monobloco');
E('caixas_roda', 'encaixada', 'Forros presos por presilhas plásticas e parafusos.');
P('borrachas', 'Borrachas de vedação', 'carro',
  'Em volta das portas, da tampa traseira, sob o capô e nos vidros.',
  'Vedam contra água, poeira e ruído — num carro silencioso, o ruído de vento aparece mais.',
  'Passe protetor à base de silicone a cada poucos meses.',
  'portas portas_tras tampa_tras capo vidros_portas para_brisa');
E('borrachas', 'encaixada', 'Encaixadas por pressão nas abas das aberturas e nas canaletas dos vidros.');
P('frisos', 'Frisos cromados da linha dos vidros', 'carro',
  'Na base dos vidros das portas e subindo pela "barbatana" do vidro fixo.',
  'Acabamento que desenha a linha lateral do carro.',
  'Limpe com produto neutro; o cromado mancha com produtos ácidos.',
  'portas portas_tras vidros_laterais laterais');
E('frisos', 'encaixada', 'Encaixados por presilhas na borda das portas e colados na lateral.');
};
