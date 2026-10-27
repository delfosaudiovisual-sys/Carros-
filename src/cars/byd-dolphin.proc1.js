/* ===== BYD Dolphin 2024: como desmontar e montar cada peça (bateria de tração, conjunto elétrico, redutor, recarga, arrefecimento e bomba de calor) =====
   Cada entrada: oem = código BYD (nenhum confirmado em catálogo aberto, por isso fica de fora), alt = equivalentes, f = ferramentas, pre = antes de começar, d = desmontar, m = montar.
   Tudo que é laranja é alta tensão: os passos aqui servem para entender o serviço, não substituem o treinamento e o manual de reparo da BYD. */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['byd-dolphin'] = window.CAR_PROC['byd-dolphin'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Carro desligado (fora do READY) e negativo da bateria de 12 V desligado.';
const AT = 'Alta tensão (cabos e conectores laranja, por volta de 330 V e até perto de 400 V carregada): serviço só para técnico treinado, com luvas isolantes classe 0 testadas, ferramentas isoladas, área isolada com placa e ninguém mexendo no carro ao mesmo tempo.';
const DESLIGA = 'Desenergize antes: carro fora do READY e fora da tomada, chave longe do carro, negativo da 12 V desligado e isolado, e espere o tempo do manual (pelo menos 5 a 10 minutos) para os capacitores descarregarem. Depois meça com multímetro CAT III nos terminais de alta tensão e só comece com 0 V.';
const TESTE = 'No fim: conectores de alta tensão travados (trava primária e a trava de segurança), tampas no lugar, 12 V religada e carro em READY sem aviso de isolamento. Apague os códigos com scanner.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, apoiado só nos pontos da soleira, nunca embaixo da bateria de tração.';
const RODA = 'Com o carro no chão, afrouxe as porcas de roda; levante, apoie em cavalete e tire a roda.';
const AGUA = 'Carro frio e desenergizado. Drene o líquido pelo bujão ou pela mangueira de baixo do radiador num recipiente limpo.';
const SANGRA = 'Complete devagar pelo reservatório com o líquido indicado (etilenoglicol de longa duração). Rode a função de sangria da bomba elétrica pelo scanner, ou deixe o carro em READY com a bomba girando, até parar de sair bolha; com o carro frio, complete até MAX.';
const GAS = 'Circuito da bomba de calor aberto: o fluido refrigerante precisa ser recolhido com máquina antes, e no fim o circuito leva vácuo e carga pelo peso indicado na etiqueta do capô. O compressor é de alta tensão: use só o óleo isolante (POE) indicado, nunca óleo comum, e anéis de vedação novos untados com esse óleo.';
const REDOLEO = 'Óleo do redutor: só o tipo indicado pela BYD, em pouca quantidade (menos de 1 L). Complete pelo bujão de abastecimento até começar a escorrer, com o carro nivelado.';
const SCAN = 'Peça eletrônica nova pode precisar de programação e de gravar os dados do carro com scanner BYD; sem isso o carro pode não ficar READY.';

/* ---------- BATERIA DE TRAÇÃO ---------- */
M('bateria_at', {
  f: 'Elevador, mesa elevatória para bateria de tração, soquetes isolados, torquímetro, luvas isolantes, multímetro CAT III, scanner.',
  pre: AT + ' ' + DESLIGA + ' ' + ELEV + ' A bateria pesa várias centenas de quilos e faz parte da estrutura do assoalho.',
  d: ['Feche o circuito de arrefecimento (a placa fria é ligada ao circuito da bomba de calor): recolha o fluido refrigerante com máquina antes. ' + GAS,
    'Por baixo, tire as carenagens e os protetores do assoalho.',
    'Destrave e desligue o conector de alta tensão principal e o conector de baixa tensão (sinais do BMS); tampe os dois com as capas próprias.',
    'Solte as tubulações de fluido da placa fria e tampe.',
    'Encoste a mesa elevatória e suba até ela apoiar a bateria por igual.',
    'Solte os parafusos das bordas (dos dois lados, da frente e de trás) na ordem do manual e baixe a bateria devagar, conferindo que nada ficou preso.'],
  m: ['Assento e furos limpos; vedações e tampões conferidos.', 'Suba a bateria nivelada nos pinos-guia e aperte as bordas no torque, na ordem do manual.',
    'Ligue as tubulações com anéis novos, os conectores com clique e as travas de segurança.', 'Vácuo e carga do fluido refrigerante. ' + TESTE + ' Faça o teste de isolamento com scanner.']
});
M('celulas', {
  f: 'Bancada de alta tensão, ferramentas isoladas, scanner.',
  pre: AT + ' As células da bateria Blade são longas e coladas no conjunto ("célula na bateria", sem módulos separados): na prática não se troca célula na oficina.',
  d: ['Com a bateria fora do carro, o diagnóstico é feito por scanner: tensão e temperatura de cada célula, lidas pelo BMS.', 'Bateria com célula ruim vai para o centro de reparo da BYD ou é trocada inteira (verifique a garantia da bateria).'],
  m: ['Bateria de volta no carro, conectores travados e teste de isolamento. ' + TESTE]
});
M('placa_fria', {
  f: 'Máquina de recolher fluido refrigerante, bancada de alta tensão.',
  pre: AT + ' A placa fria fica dentro da bateria, embaixo das células: o fluido da bomba de calor passa direto nela.',
  d: ['Tire a bateria de tração (veja bateria de tração).', 'Na bancada, a placa só é acessada abrindo a bateria, o que é serviço do centro de reparo.'],
  m: ['Vedações novas, teste de estanqueidade do circuito com nitrogênio antes de carregar o fluido.', GAS]
});
M('bic', {
  f: 'Bancada de alta tensão, scanner.',
  pre: AT + ' As placas de leitura das células ficam dentro da bateria.',
  d: ['Pelo scanner, veja qual grupo de células perdeu a leitura.', 'A troca da placa exige abrir a bateria: serviço do centro de reparo.'],
  m: ['Depois do reparo, grave a configuração no BMS com scanner e confira todas as leituras das células.']
});
M('conector_at', {
  f: 'Luvas isolantes, ferramentas isoladas, lanterna, limpa-contato próprio para alta tensão.',
  pre: AT + ' ' + DESLIGA + ' ' + ELEV,
  d: ['Por baixo, tire o protetor do assoalho na frente da bateria.', 'Solte a trava de segurança e depois a trava principal do conector, sem puxar pelo cabo.', 'Tampe a tomada da bateria e o plugue com as capas.'],
  m: ['Pinos e vedação limpos e secos (procure sinal de água ou oxidação).', 'Plugue encaixado até o clique e a trava de segurança fechada.', TESTE]
});
M('cabos_at', {
  f: 'Luvas isolantes, ferramentas isoladas, torquímetro isolado.',
  pre: AT + ' ' + DESLIGA,
  d: ['Fotografe a passagem e os suportes.', 'Destrave os conectores nas duas pontas (bateria, caixa de distribuição, compressor ou porta de recarga) e tampe.', 'Solte as presilhas e os suportes e tire o cabo sem dobrar.'],
  m: ['Cabo original (laranja, blindado), na mesma passagem, longe de bordas e de peças quentes.', 'Parafusos de terminal no torque do manual.', TESTE]
});
M('pdu', {
  f: 'Luvas isolantes, ferramentas isoladas, torquímetro, scanner.',
  pre: AT + ' ' + DESLIGA + ' A caixa de distribuição faz parte do bloco de eletrônica do conjunto 8 em 1; em muitos casos sai como peça única com o bloco.',
  d: ['Tire a tampa do cofre e as proteções de cima do conjunto elétrico.', 'Desligue os conectores de alta tensão (bateria, compressor, recarga) e os de baixa tensão; tampe todos.', 'Solte a tampa da caixa e meça de novo a ausência de tensão nos barramentos.', 'Solte os parafusos e tire a caixa ou o bloco.'],
  m: ['Junta da tampa nova (é ela que segura água e poeira).', 'Barramentos no torque, conectores travados.', SCAN + ' ' + TESTE]
});
M('bms', {
  f: 'Soquetes, scanner.',
  pre: BAT + ' Por ser uma central de baixa tensão, o BMS mexe pouco com a alta tensão, mas conversa com ela: siga a desenergização se a posição exigir chegar perto dos cabos laranja.',
  d: ['Localize o módulo (posição aproximada no modelo) e desligue os conectores.', 'Solte os parafusos do suporte.'],
  m: ['Conectores secos e travados.', SCAN + ' Faça uma carga até 100% depois para ele recalibrar a indicação da bateria.']
});

/* ---------- CONJUNTO ELÉTRICO E ELETRÔNICA ---------- */
M('conj_eletrico', {
  f: 'Elevador, macaco de transmissão, guincho, soquetes, torquímetro, luvas isolantes, scanner, máquina de recolher fluido refrigerante.',
  pre: AT + ' ' + DESLIGA + ' ' + ELEV + ' O conjunto 8 em 1 (motor, redutor e eletrônica) sai inteiro por baixo, com o subchassi ou sozinho, conforme o manual.',
  d: [AGUA, 'Desligue todos os conectores de alta tensão (bateria, compressor, recarga) e os de baixa tensão; tampe todos.',
    'Solte as mangueiras de líquido de arrefecimento do motor e da eletrônica e tampe.', 'Tire as rodas e os semieixos (drene o óleo do redutor antes).',
    'Apoie o conjunto no macaco de transmissão, solte os coxins direito, esquerdo e traseiro e baixe devagar, conferindo cabos e mangueiras.'],
  m: ['Coxins novos se estiverem rachados; aperto final com o conjunto no peso.', 'Semieixos com anel trava novo e retentores novos.', 'Mangueiras, conectores e aterramentos firmes. ' + REDOLEO,
    SANGRA + ' ' + TESTE]
});
M('motor_el', {
  f: 'As mesmas do conjunto elétrico, mais bancada.',
  pre: AT + ' ' + DESLIGA + ' O motor sai com o conjunto 8 em 1; na bancada se separa do redutor e da eletrônica, conforme o manual.',
  d: ['Tire o conjunto elétrico do carro (veja conjunto elétrico).', 'Na bancada, solte os barramentos das três fases do inversor e tampe.', 'Solte os parafusos entre motor e redutor e afaste o motor reto, sem bater o rotor.'],
  m: ['Retentores e juntas novos, estrias limpas.', 'Motor reto no redutor, parafusos no torque; fases na ordem certa (marcadas).', 'Depois de montar no carro, faça o aprendizado do sensor de posição (resolver) com scanner. ' + TESTE]
});
M('rotor', {
  f: 'Bancada, extrator, prensa e proteção contra ímãs.',
  pre: 'O rotor tem ímãs permanentes muito fortes: puxa ferramentas e prende os dedos. Serviço de bancada especializada.',
  d: ['Tire o motor do carro e da eletrônica.', 'Solte a tampa traseira do motor e o resolver.', 'Puxe o rotor com o guia do manual, reto, sem deixar ele colar no estator.'],
  m: ['Rolamentos novos, rotor centrado.', 'Resolver ajustado e aprendizado com scanner no carro.']
});
M('resolver', {
  f: 'Soquetes, scanner.',
  pre: AT + ' ' + DESLIGA + ' O resolver fica na ponta do motor; o acesso depende da versão do conjunto.',
  d: ['Desligue o conector do resolver.', 'Tire a tampa da ponta do motor.', 'Marque a posição e solte o estator do resolver.'],
  m: ['Resolver na marca, conector travado.', 'Faça o aprendizado da posição do rotor com scanner: errado, o motor treme, perde força ou nem gira.']
});
M('inversor', {
  f: 'Luvas isolantes, ferramentas isoladas, torquímetro, scanner.',
  pre: AT + ' ' + DESLIGA + ' ' + AGUA + ' O inversor fica no bloco de eletrônica do 8 em 1 e é refrigerado a líquido.',
  d: ['Tire as proteções de cima do conjunto.', 'Desligue os conectores de alta e baixa tensão e tampe.', 'Solte as mangueiras de líquido.', 'Solte a tampa, meça a ausência de tensão, solte as fases do motor e os parafusos do bloco.'],
  m: ['Junta nova e pasta térmica onde o manual pedir.', 'Fases e barramentos no torque.', SCAN + ' ' + SANGRA + ' ' + TESTE]
});
M('vcu', {
  f: 'Soquetes, scanner.',
  pre: BAT,
  d: ['Localize a central (posição aproximada no modelo) e desligue os conectores levantando as travas.', 'Solte os parafusos do suporte.'],
  m: ['Conectores secos e travados.', SCAN]
});
M('coxim_dir', {
  f: 'Macaco com taco de madeira, soquetes, torquímetro.',
  pre: BAT + ' Apoie o conjunto elétrico por baixo, no lugar indicado, sem apoiar na carcaça do inversor.',
  d: ['Fica do lado direito do cofre.', 'Com o conjunto apoiado, solte as porcas do coxim no conjunto e na carroceria.', 'Tire o coxim.'],
  m: ['Coxim novo na posição certa, parafusos no torque.', 'Baixe o macaco devagar e confira o alinhamento do conjunto.']
});
M('coxim_esq', {
  f: 'Macaco com taco de madeira, soquetes, torquímetro.',
  pre: BAT + ' Apoie o conjunto elétrico por baixo.',
  d: ['Fica do lado esquerdo, embaixo da bateria de 12 V: tire a bateria e a bandeja.', 'Com o conjunto apoiado, solte os parafusos do coxim.', 'Tire o coxim.'],
  m: ['Coxim novo na posição certa, parafusos no torque.', 'Bateria e bandeja de volta.']
});
M('coxim_tras', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV,
  d: ['Por baixo, solte o parafuso do coxim no conjunto e os do subchassi.', 'Tire o coxim.'],
  m: ['Coxim novo, aperto final com o carro no chão.', 'Coxim gasto dá tranco ao acelerar forte ou ao inverter de D para R.']
});
M('pedal_acel', {
  f: 'Soquete 10 mm.',
  pre: BAT,
  d: ['Desligue o conector do pedal.', 'Solte as porcas do suporte e tire o pedal.'],
  m: ['Pedal firme, conector travado.', 'Apague os códigos e confira a resposta do acelerador com scanner.']
});
M('dcdc', {
  f: 'Luvas isolantes, ferramentas isoladas, multímetro, scanner.',
  pre: AT + ' ' + DESLIGA + ' O conversor fica no bloco de eletrônica do 8 em 1; muitas vezes não se vende separado.',
  d: ['Tire as proteções de cima do conjunto.', 'Desligue as saídas de 12 V e os conectores de alta tensão.', 'Siga a remoção do bloco de eletrônica.'],
  m: ['Saídas de 12 V e aterramento no torque.', 'Com o carro em READY, a bateria de 12 V deve marcar perto de 14 V. ' + TESTE]
});

/* ---------- REDUTOR ---------- */
M('redutor', {
  f: 'Soquetes, chave do bujão, recipiente, seringa de óleo, torquímetro.',
  pre: ELEV + ' Troca de óleo não envolve alta tensão; tirar o redutor exige tirar o conjunto elétrico.',
  d: ['Para trocar o óleo: tire primeiro o bujão de abastecimento (se ele não sair, não drene).', 'Tire o bujão de dreno, deixe escorrer e limpe o ímã.', 'Para tirar o redutor: tire o conjunto elétrico e separe o redutor do motor na bancada.'],
  m: ['Bujões com arruelas novas no torque.', REDOLEO]
});
M('diferencial', {
  f: 'Bancada, extratores, retentores.',
  pre: 'O diferencial fica dentro do redutor: serviço de bancada.',
  d: ['Tire o redutor e abra a carcaça.', 'Tire o diferencial e os rolamentos.'],
  m: ['Rolamentos e retentores novos, folgas e pré-carga do manual.', 'Carcaça com cola nova. ' + REDOLEO]
});
M('trava_p', {
  f: 'Bancada, scanner.',
  pre: 'Calce as rodas: sem a trava, o carro pode andar. A trava fica dentro do redutor e o atuador elétrico fica do lado de fora.',
  d: ['Desligue o conector do atuador.', 'Solte os parafusos e tire o atuador.', 'A lingueta e a engrenagem de estacionamento só saem com o redutor aberto.'],
  m: ['Atuador encaixado, parafusos no torque, conector travado.', 'Faça o aprendizado do atuador com scanner e teste: em P o carro não pode rolar.']
});
M('semieixos', {
  f: 'Soquete da porca do cubo, alavanca, extrator de pivô, retentor do redutor.',
  pre: RODA + ' Drene o óleo do redutor se for tirar o semieixo do lado do diferencial.',
  d: ['Com o carro no chão, afrouxe a porca do cubo.', 'Solte o terminal de direção e o pivô da bandeja.', 'Afaste a manga e puxe o semieixo do cubo.', 'Puxe a ponta do redutor com alavanca, sem danificar o retentor.'],
  m: ['Retentor novo e anel trava novo na ponta do redutor.', 'Semieixo encaixado até o fim, pivô e terminal de volta.', 'Porca do cubo nova, aperto final com o carro no chão. ' + REDOLEO]
});
M('seletor', {
  f: 'Espátula plástica, chave Philips ou Torx.',
  pre: BAT,
  d: ['Solte o acabamento do console em volta do seletor.', 'Desligue o conector.', 'Solte os parafusos e tire o seletor.'],
  m: ['Conector travado, seletor firme.', 'Teste P, R, N e D com o pé no freio; o seletor só manda sinal, não tem cabo.']
});

/* ---------- RECARGA ---------- */
M('porta_recarga', {
  f: 'Luvas isolantes, ferramentas isoladas, espátula plástica, torquímetro, scanner.',
  pre: AT + ' ' + DESLIGA + ' Carro fora da tomada. A porta fica no para-lama dianteiro direito.',
  d: ['Tire o forro da caixa de roda dianteira direita (e o para-choque, se o manual pedir).', 'Desligue os cabos de alta tensão da porta e o conector de sinais (trava do plugue, luz, sensor de temperatura).', 'Solte os parafusos da porta por fora e puxe para dentro do para-lama.'],
  m: ['Vedação da porta nova, dreno desobstruído.', 'Cabos no torque e conectores travados.', 'Teste a recarga em corrente alternada e, se der, na rápida. ' + TESTE]
});
M('obc', {
  f: 'Luvas isolantes, ferramentas isoladas, torquímetro, scanner.',
  pre: AT + ' ' + DESLIGA + ' ' + AGUA + ' O carregador de bordo fica no bloco de eletrônica do 8 em 1.',
  d: ['Tire as proteções de cima do conjunto.', 'Desligue os cabos da porta de recarga e da caixa de distribuição; tampe.', 'Solte as mangueiras de líquido e o bloco, conforme o manual.'],
  m: ['Junta nova, cabos no torque.', SCAN + ' ' + SANGRA + ' Teste uma recarga em corrente alternada. ' + TESTE]
});
M('cabo_recarga', {
  f: 'Nenhuma.',
  pre: 'Fica no porta-malas, sob o assoalho.',
  d: ['Levante o assoalho do porta-malas.', 'Tire a bolsa do carregador portátil.'],
  m: ['Cabo enrolado sem dobras fortes, plugue com a tampinha.', 'Confira o cabo e o plugue antes de usar: capa rachada ou plugue queimado, não use.']
});

/* ---------- ARREFECIMENTO DO MOTOR E DA ELETRÔNICA ---------- */
M('radiador', {
  f: 'Soquetes, alicate de abraçadeira, recipiente.',
  pre: AGUA + ' O condensador da bomba de calor fica na frente: solte e afaste sem abrir o circuito.',
  d: ['Tire o para-choque dianteiro e a grade inferior.', 'Solte as mangueiras de cima e de baixo e o conector da ventoinha.', 'Solte o condensador e afaste sem dobrar os tubos.', 'Solte os suportes e tire o radiador por baixo ou pela frente, com a ventoinha.'],
  m: ['Borrachas dos suportes no lugar.', 'Mangueiras com abraçadeiras firmes, condensador de volta.', SANGRA]
});
M('ventoinha', {
  f: 'Soquetes.',
  pre: BAT,
  d: ['Desligue o conector da ventoinha.', 'Solte os parafusos do defletor no radiador.', 'Tire o conjunto por baixo ou com o para-choque fora.'],
  m: ['Defletor encaixado, conector travado.', 'Teste ligando o ar no máximo: a ventoinha tem que girar.']
});
M('bomba_agua', {
  f: 'Soquetes, alicate de abraçadeira, recipiente.',
  pre: AGUA + ' ' + BAT,
  d: ['Desligue o conector da bomba.', 'Solte as duas mangueiras.', 'Solte o suporte e tire a bomba.'],
  m: ['Anéis novos, mangueiras firmes, conector travado.', SANGRA]
});
M('vaso', {
  f: 'Alicate de abraçadeira, soquete.',
  pre: 'Carro frio. Nunca abra a tampa quente.',
  d: ['Drene o líquido até abaixo do reservatório.', 'Desligue o sensor de nível, se houver, e as mangueiras.', 'Solte o parafuso e tire o reservatório.'],
  m: ['Reservatório firme, mangueiras com abraçadeiras.', SANGRA]
});
M('mang_sup', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Solte as abraçadeiras nas duas pontas.', 'Gire e puxe a mangueira sem forçar as conexões plásticas.'],
  m: ['Mangueira encaixada até o batente e abraçadeira no lugar original.', SANGRA]
});
M('mang_inf', {
  f: 'Alicate de abraçadeira, recipiente.',
  pre: AGUA,
  d: ['Solte as abraçadeiras e as conexões rápidas (aperte a trava antes de puxar).', 'Tire a mangueira.'],
  m: ['Conexões travadas com clique, abraçadeiras no lugar.', SANGRA]
});
M('sens_temp', {
  f: 'Chave, recipiente pequeno.',
  pre: 'Carro frio. ' + BAT,
  d: ['Desligue o conector.', 'Solte o sensor (ou a trava) e tire, com o recipiente embaixo.'],
  m: ['Anel novo e sensor firme.', 'Complete o líquido e confira a leitura de temperatura no scanner.']
});

/* ---------- AR-CONDICIONADO E BOMBA DE CALOR ---------- */
M('compressor', {
  f: 'Máquina de recolher fluido, luvas isolantes, ferramentas isoladas, soquetes, scanner.',
  pre: AT + ' ' + DESLIGA + ' ' + GAS,
  d: ['Recolha o fluido refrigerante.', 'Desligue o conector de alta tensão (laranja) e o de sinais do compressor; tampe.', 'Solte os tubos e tampe as bocas na hora.', 'Solte os parafusos do suporte e tire o compressor.'],
  m: ['Compressor novo com a quantidade de óleo isolante do manual.', 'Tubos com anéis novos, conectores travados.', 'Vácuo, carga pelo peso e teste no frio e no quente (bomba de calor). ' + TESTE]
});
M('condensador', {
  f: 'Máquina de recolher fluido, soquetes.',
  pre: GAS,
  d: ['Recolha o fluido.', 'Tire o para-choque dianteiro.', 'Solte os dois tubos e tampe.', 'Solte os suportes e tire o trocador da frente.'],
  m: ['Trocador novo com as borrachas e a telinha de proteção.', 'Tubos com anéis novos, vácuo e carga pelo peso.', 'No inverno, com a bomba de calor aquecendo, este trocador gela e pode formar gelo: é normal ele degelar sozinho.']
});
M('modulo_termico', {
  f: 'Máquina de recolher fluido, soquetes, scanner.',
  pre: GAS + ' ' + BAT,
  d: ['Recolha o fluido.', 'Desligue os conectores das válvulas eletrônicas e dos sensores.', 'Solte os tubos e tampe as bocas na hora.', 'Solte o suporte e tire o módulo.'],
  m: ['Anéis novos em todos os tubos.', 'Vácuo e carga pelo peso.', 'Com scanner, teste cada válvula e os modos: gelar, aquecer cabine, aquecer e gelar a bateria.']
});
M('pressostato', {
  f: 'Chave de boca, scanner.',
  pre: 'Alguns sensores ficam em válvula de serviço e saem sem recolher o fluido; outros não: confira no manual. ' + BAT,
  d: ['Desligue o conector.', 'Solte o sensor do tubo ou do módulo térmico.'],
  m: ['Anel novo untado com o óleo do sistema, sensor no torque.', 'Confira as leituras no scanner.']
});
M('tubos_ac', {
  f: 'Máquina de recolher fluido, chaves, ferramenta de engate rápido.',
  pre: GAS,
  d: ['Recolha o fluido.', 'Solte as pontas do tubo (porca, flange ou engate rápido) e tampe na hora.', 'Solte as presilhas e tire o tubo.'],
  m: ['Tubo novo com anéis novos, presilhas no lugar.', 'Vácuo, carga pelo peso e teste de vazamento.']
});
M('evaporador', {
  f: 'Máquina de recolher fluido, soquetes, espátula, ajudante.',
  pre: GAS + ' Serviço grande: o evaporador fica dentro da caixa de ar, atrás do painel.',
  d: ['Recolha o fluido.', 'No cofre, solte os tubos da passagem do corta-fogo e tampe.', 'Tire o painel (veja painel) e a caixa de ar.', 'Abra a caixa e tire o evaporador.'],
  m: ['Anéis novos, caixa vedada, dreno desobstruído.', 'Vácuo e carga pelo peso; teste no frio e confira que pinga água embaixo do carro.']
});
M('cond_int', {
  f: 'Máquina de recolher fluido, soquetes, espátula, ajudante.',
  pre: GAS + ' Fica dentro da caixa de ar, ao lado do evaporador: é ele que aquece a cabine com a bomba de calor.',
  d: ['Recolha o fluido.', 'Solte os tubos no corta-fogo e tampe.', 'Tire o painel e a caixa de ar.', 'Tire o trocador da caixa.'],
  m: ['Anéis novos, caixa vedada.', 'Vácuo e carga pelo peso; teste o aquecimento com o ar no quente.']
});
M('filtro_cabine', {
  f: 'Nenhuma.',
  pre: 'Fica atrás do porta-luvas.',
  d: ['Esvazie e abra o porta-luvas; solte o amortecedor e os batentes laterais para baixá-lo.', 'Solte a tampa do filtro e puxe o filtro.'],
  m: ['Filtro novo com a seta do fluxo de ar no sentido certo.', 'Tampa encaixada e porta-luvas de volta.']
});
M('vent_interno', {
  f: 'Chave Philips.',
  pre: BAT,
  d: ['Tire o acabamento de baixo do painel do lado do passageiro.', 'Desligue o conector e solte os parafusos do ventilador.', 'Gire e tire o ventilador.'],
  m: ['Ventilador encaixado, conector travado; teste todas as velocidades.']
});
M('caixa_ar', {
  f: 'Soquetes, espátula plástica, ajudante, máquina de recolher fluido.',
  pre: GAS + ' Serviço grande: a caixa só sai com o painel fora.',
  d: ['Recolha o fluido e solte os tubos no corta-fogo.', 'Tire o painel (veja painel).', 'Desligue os atuadores e o ventilador e solte a caixa.'],
  m: ['Vedação com o corta-fogo e dreno no lugar.', 'Vácuo, carga e teste das saídas e das temperaturas.']
});
M('comandos_clima', {
  f: 'Espátula plástica, scanner.',
  pre: 'O clima é comandado pela tela central e por botões físicos.',
  d: ['Se for falha de software, atualize a central.', 'Para trocar os botões, solte o acabamento com espátula e desligue o conector.'],
  m: ['Conector travado e acabamento encaixado.', 'Teste os modos e, se pedir, calibre os atuadores das portinholas com scanner.']
});
