/* ===== Chevrolet S10 2009 2.8 turbodiesel: como desmontar e montar cada peça (motor, ar e turbo, diesel, arrefecimento, escape e elétrica) =====
   Cada entrada: oem = código GM (nenhum confirmado em catálogo aberto, por isso fica de fora), alt = equivalentes, f = ferramentas, pre = antes de começar, d = desmontar, m = montar.
   Capacidades e prazos vêm do manual do proprietário (GM, 11/2008); torques, do manual de oficina, que deve ser consultado. */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['s10-2009'] = window.CAR_PROC['s10-2009'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria.';
const ELEV = 'Picape no elevador ou firme sobre cavaletes no chassi (longarinas), nunca só no macaco.';
const AGUA = 'Motor frio. Drene o líquido de arrefecimento num recipiente limpo.';
const SANGRA = 'Complete com aditivo de longa duração ACDelco (alaranjado), 35% a 50%, e água potável, devagar e com o aquecedor no quente. Ligue o motor, deixe a válvula termostática abrir e aperte as mangueiras para soltar o ar; com o motor frio, complete até MAX (manual: é preciso eliminar todo o ar).';
const ALTA = 'Common rail: nunca solte nada da bomba de alta, do rail, dos tubos ou dos injetores com o motor ligado ou antes de 30 segundos depois de desligar (manual). O jato de um vazamento corta a pele. Limpeza total antes de abrir e tampões em cada boca.';
const SANGRIA = 'Sangria do diesel (manual): ligue a ignição e espere cerca de 10 segundos para a bomba elétrica tirar o ar; dê partida sem acelerar, por no máximo 10 segundos, e repita se precisar.';
const PONTO = 'Distribuição por engrenagens: alinhe as marcas do virabrequim, do comando e da bomba de alta antes de desmontar e confira depois. Fora do ponto, o motor não pega ou as válvulas batem.';
const MOTOR = 'O motor sai por cima com o câmbio separado ou por baixo com o conjunto; é serviço de oficina, com guincho e suporte. ' + BAT;

/* ---------- MOTOR ---------- */
M('bloco', {
  f: 'Guincho de motor, macaco de transmissão, soquetes, torquímetro, relógio comparador.',
  pre: MOTOR + ' Drene óleo e líquido de arrefecimento.',
  d: ['Tire o capô, o intercooler, a caixa do filtro, o radiador e a ventoinha.', 'Solte o chicote, as linhas de combustível (tampe tudo), as mangueiras e o escape do turbo.', 'Separe o câmbio com a transferência (veja câmbio) ou tire o conjunto.', 'Solte os coxins do motor na travessa e tire o motor com o guincho.', 'Na bancada, desmonte até sobrar o bloco.'],
  m: ['Bloco limpo e medido (cilindros, planicidade, galerias).', 'Peças na ordem inversa, com juntas e retentores novos, cada uma no torque do manual de oficina.', PONTO, 'Óleo novo (7,5 L + 1,0 L do filtro), líquido de arrefecimento e sangria do diesel. ' + SANGRIA]
});
M('cabecote', {
  f: 'Soquetes, torquímetro e goniômetro, extrator de injetor, régua e calibre de lâminas.',
  pre: AGUA + ' ' + ALTA + ' ' + BAT,
  d: ['Tire o intercooler com as mangueiras, a tampa de válvulas e o coletor de admissão.', 'Solte os tubos de alta e o retorno; tire os injetores com as arruelas.', 'Solte o turbo do coletor de escape (ou o coletor do cabeçote).', 'Solte os parafusos do cabeçote em etapas, de fora para dentro, e tire o cabeçote.'],
  m: ['Face plana (confira empeno com régua), sedes e guias em ordem.', 'Junta nova da espessura certa (pela saliência dos pistões).', 'Parafusos novos se o manual pedir, apertados em etapas e ângulo, de dentro para fora.', 'Regule as válvulas, monte injetores com arruelas novas e tubos de alta limpos. ' + SANGRA + ' ' + SANGRIA]
});
M('junta_cab', {
  f: 'As mesmas do cabeçote, relógio comparador.',
  pre: 'A junta sai com o cabeçote. ' + AGUA,
  d: ['Tire o cabeçote (veja cabeçote).', 'Tire a junta velha e limpe as faces sem riscar.'],
  m: ['Meça a saliência dos pistões e escolha a espessura da junta pelo manual.', 'Junta seca, na posição certa, e cabeçote no torque e ângulo. ' + SANGRA]
});
M('tampa_valv', {
  f: 'Soquetes, torquímetro.',
  pre: 'Motor frio. O intercooler fica em cima.',
  d: ['Tire o intercooler e as mangueiras (veja intercooler).', 'Solte o respiro e os parafusos da tampa.', 'Levante a tampa sem forçar o chicote dos injetores.'],
  m: ['Junta nova e faces limpas.', 'Parafusos leves, em cruz, de dentro para fora.', 'Intercooler e mangueiras de volta, abraçadeiras firmes.']
});
M('comando', {
  f: 'Ferramentas de travamento da distribuição, soquetes, torquímetro.',
  pre: PONTO + ' ' + BAT,
  d: ['Tire a tampa de válvulas e solte os balancins.', 'Tire a tampa da distribuição e marque as engrenagens.', 'Solte a engrenagem e os mancais e tire o comando.'],
  m: ['Mancais lubrificados, comando no lugar e engrenagem nas marcas.', 'Regule a folga das válvulas. ' + PONTO]
});
M('valvulas', {
  f: 'Calibre de lâminas, chave estrela e de fenda, soquete para girar o motor.',
  pre: 'Motor frio. Folga conferida a cada 30.000 km (plano da GM).',
  d: ['Tire o intercooler e a tampa de válvulas.', 'Gire o motor pelo parafuso da polia até o cilindro 1 ficar em compressão (válvulas fechadas).'],
  m: ['Meça com calibre entre a válvula e o balancim e regule pelo parafuso, travando com a contraporca.', 'Siga a ordem de injeção (1–3–4–2) para os outros cilindros.', 'Tampa com junta nova.']
});
M('pistoes', { f: 'Bancada de motor, cinta de anéis, torquímetro.', pre: MOTOR, d: ['Tire o cabeçote e o cárter.', 'Solte as capas das bielas e empurre o pistão com a biela para cima.'], m: ['Anéis com as pontas defasadas, pistão na direção da marca, capas no torque.', 'Saliência dos pistões medida para escolher a junta do cabeçote.'] });
M('bielas', { f: 'Bancada, torquímetro, plastigage.', pre: MOTOR, d: ['Tire o cárter e as capas.', 'Retire as bielas com os pistões.'], m: ['Bronzinas novas com folga medida, capas na mesma biela e no torque.'] });
M('virabrequim', { f: 'Bancada, torquímetro, micrômetro.', pre: MOTOR + ' Serviço de retífica.', d: ['Com o motor fora, tire volante, distribuição, cárter, bielas e capas dos mancais.', 'Tire o virabrequim.'], m: ['Bronzinas novas, folgas axiais e radiais no manual.', 'Capas no torque, na ordem; engrenagem da distribuição nas marcas. ' + PONTO] });
M('volante_motor', {
  f: 'Travador de volante, soquetes, torquímetro.',
  pre: 'Sai com o câmbio fora (veja câmbio).',
  d: ['Tire o câmbio e a embreagem.', 'Trave o volante e solte os parafusos em cruz.'],
  m: ['Face sem trincas; retífica dentro do limite.', 'Parafusos novos no torque, em cruz; roda dentada do sensor de rotação limpa.']
});
M('polia_vira', {
  f: 'Soquete grande, travador de polia, extrator.',
  pre: BAT + ' Tire a correia de acessórios e a ventoinha para ganhar espaço.',
  d: ['Trave o motor e solte o parafuso central.', 'Puxe a polia com extrator.'],
  m: ['Retentor dianteiro conferido.', 'Polia na chaveta, parafuso no torque e correia de volta.']
});
M('engrenagens', {
  f: 'Ferramentas de travamento, extratores, soquetes, torquímetro.',
  pre: PONTO + ' ' + AGUA,
  d: ['Tire a ventoinha, a polia do virabrequim, a bomba d’água e a tampa da distribuição.', 'Confira as marcas e solte a engrenagem que for trocar.'],
  m: ['Engrenagens com folga de dentes do manual, nas marcas.', 'Tampa com vedação nova e retentor novo.']
});
M('tampa_dist', {
  f: 'Soquetes, raspador, vedante indicado.',
  pre: AGUA + ' ' + BAT,
  d: ['Tire a ventoinha, as correias, a polia do virabrequim e a bomba d’água.', 'Solte os parafusos da tampa e tire.'],
  m: ['Faces limpas e vedante só onde o manual indica, retentor dianteiro novo.', 'Parafusos no torque; bomba d’água com junta nova. ' + SANGRA]
});
M('carter', {
  f: 'Soquetes, raspador, vedante, macaco para apoiar o motor.',
  pre: ELEV + ' Drene o óleo. Tire o protetor do cárter.',
  d: ['Solte o diferencial dianteiro ou baixe-o, se o manual pedir espaço no 4x4.', 'Solte os parafusos do cárter e tire, sem forçar a vedação.'],
  m: ['Faces limpas e vedação nova.', 'Parafusos em cruz no torque; bujão com arruela nova.', 'Óleo: 7,5 L no cárter mais 1,0 L do filtro, API CG-4 ou superior, 15W40.']
});
M('bomba_oleo', { f: 'Soquetes, torquímetro.', pre: 'Sai com o cárter fora; em alguns casos, com a tampa da distribuição.', d: ['Tire o cárter e o pescador.', 'Solte a bomba.'], m: ['Bomba escorvada com óleo, pescador com anel novo.', 'Confira a luz do óleo apagando logo depois da partida.'] });
M('filtro_oleo', {
  f: 'Chave de filtro, recipiente.',
  pre: 'Troque a cada troca de óleo (10.000 km ou 6 meses).',
  d: ['Abra o capô e tire o conjunto do filtro de ar (veja filtro de ar).', 'Solte a mangueira de saída do turbo para o intercooler.', 'Desrosqueie o filtro pelo vão entre o pneu e a saia do para-lama e tire pelo cofre (manual).'],
  m: ['Anel do filtro novo untado com óleo limpo.', 'Aperte conforme o fabricante do filtro.', 'Mangueira do intercooler e filtro de ar de volta, abraçadeiras firmes (manual).']
});
M('resfriador_oleo', {
  f: 'Soquetes, recipiente.',
  pre: AGUA + ' Tire o filtro de óleo.',
  d: ['Solte as mangueiras de água do resfriador.', 'Solte o resfriador do bloco.'],
  m: ['Anéis novos.', 'Óleo e líquido completados; confira se não há óleo no reservatório depois de rodar. ' + SANGRA]
});
M('vareta', { f: 'Nenhuma.', pre: 'Carro nivelado e motor desligado há dois minutos.', d: ['Puxe a vareta e limpe.'], m: ['Introduza toda, puxe de novo e leia entre as marcas superior e inferior (manual).'] });
M('tampa_oleo', { f: 'Nenhuma.', pre: 'Motor desligado.', d: ['Gire a tampa e tire.'], m: ['Complete só se o nível estiver na marca inferior, com o mesmo óleo da última troca.', 'Tampa com o anel bom.'] });
M('respiro', { f: 'Alicate de abraçadeira.', pre: 'Motor desligado.', d: ['Solte as abraçadeiras da mangueira do respiro.'], m: ['Mangueira desobstruída e sem rachaduras.'] });
M('correia_acess', {
  f: 'Chave para o tensor, soquetes.',
  pre: 'Motor frio. Fotografe ou desenhe o caminho da correia.',
  d: ['Gire o tensor para aliviar.', 'Tire a correia das polias.'],
  m: ['Correia nova no caminho certo, nos canais de todas as polias.', 'Solte o tensor devagar. Troca aos 50.000 e 100.000 km (plano da GM).']
});
M('tensor_acess', { f: 'Soquetes.', pre: 'Tire a correia de acessórios.', d: ['Solte o parafuso e tire o tensor.'], m: ['Tensor no pino-guia, parafuso no torque, correia de volta.'] });
M('coxim_dir', {
  f: 'Macaco com taco de madeira, soquetes, guincho ou suporte de motor.',
  pre: ELEV + ' Apoie o motor no cárter com um taco, sem amassar.',
  d: ['Solte as porcas do coxim na travessa do chassi.', 'Levante o motor uns centímetros.', 'Solte o coxim do suporte do bloco e tire.'],
  m: ['Coxim novo na posição certa, porcas no torque.', 'Baixe o motor devagar e confira que nada encostou (cardã dianteiro, mangueiras).']
});
M('coxim_esq', {
  f: 'Macaco com taco, soquetes.',
  pre: ELEV + ' Apoie o motor. Do lado esquerdo passa o cardã dianteiro.',
  d: ['Solte as porcas do coxim na travessa.', 'Levante o motor e tire o coxim.'],
  m: ['Coxim novo e porcas no torque.', 'Confira a folga do cardã dianteiro e do motor de partida.']
});
M('bomba_vacuo', {
  f: 'Soquetes, alicate de abraçadeira.',
  pre: BAT + ' Fica atrás do alternador.',
  d: ['Solte a mangueira de vácuo e a linha de óleo, se houver.', 'Solte os parafusos e tire a bomba do alternador.'],
  m: ['Anel de vedação novo e acoplamento encaixado.', 'Teste o pedal: com o motor ligado ele deve ficar leve.']
});
M('sens_ckp', { f: 'Soquete.', pre: BAT, d: ['Desligue o conector.', 'Solte o parafuso e tire o sensor.'], m: ['Ponta limpa, sem limalha; anel novo.', 'Apague os códigos.'] });
M('sens_cmp', { f: 'Soquete.', pre: BAT, d: ['Desligue o conector e solte o sensor.'], m: ['Sensor firme e conector travado.'] });
M('sens_ect', { f: 'Chave, recipiente.', pre: 'Motor frio. ' + BAT, d: ['Desligue o conector.', 'Solte o sensor com um recipiente embaixo.'], m: ['Anel novo; complete o líquido. ' + SANGRA] });
M('sens_oleo', { f: 'Chave de boca.', pre: 'Motor frio.', d: ['Desligue o fio e desrosqueie o interruptor.'], m: ['Vedante de rosca indicado e fio no lugar; a luz deve apagar logo depois da partida.'] });

/* ---------- AR E TURBO ---------- */
M('tomada_ar', { f: 'Chave de fenda, alicate.', pre: 'Atrás do farol direito.', d: ['Solte a braçadeira na caixa do filtro.', 'Solte as presilhas e tire a tomada.'], m: ['Tomada sem rachaduras; nada de água entrando.'] });
M('caixa_filtro', {
  f: 'Chave de fenda.',
  pre: 'Canto dianteiro direito do cofre.',
  d: ['Solte a braçadeira e a cinta de borracha.', 'Tire o conjunto do filtro (manual).'],
  m: ['Pino-guia do conjunto encaixado no furo do suporte.', 'Braçadeira e cinta firmes.']
});
M('filtro_ar', {
  f: 'Chave de fenda, ar comprimido.',
  pre: 'Limpar nas revisões ímpares e trocar a cada 20.000 km (plano da GM); antes em estrada de terra.',
  d: ['Tire o conjunto do filtro (veja caixa do filtro).', 'Solte as 3 presilhas e tire o elemento.'],
  m: ['Limpe de dentro para fora com ar a até 70 lbf/pol², a 5 cm; nada de produtos químicos.', 'Reinstale girado 90° (nas limpezas) ou elemento novo, e o conjunto com o pino-guia no suporte.']
});
M('duto_ar', { f: 'Chave de fenda.', pre: 'Motor desligado.', d: ['Solte as braçadeiras na caixa e no turbo.', 'Tire o duto.'], m: ['Duto inteiro, sem rachaduras: poeira aqui destrói o turbo.', 'Braçadeiras firmes (conferir a cada 20.000 km).'] });
M('turbo', {
  f: 'Soquetes e chaves de boca, torquímetro, juntas novas.',
  pre: 'Motor frio. ' + BAT + ' Proteja a entrada do turbo e a do motor contra sujeira.',
  d: ['Tire o duto de entrada e a mangueira para o intercooler.', 'Solte a linha de óleo (entrada) e o retorno.', 'Solte o tubo do escape na saída da turbina.', 'Solte as porcas no coletor e tire o turbo.'],
  m: ['Juntas novas; encha o turbo de óleo pela entrada e gire o rotor com a mão.', 'Linhas de óleo limpas e apertadas.', 'Na primeira partida, deixe em marcha lenta um minuto antes de acelerar.']
});
M('intercooler', {
  f: 'Soquetes, chave de fenda.',
  pre: 'Motor frio. Fica sob a entrada de ar do capô.',
  d: ['Abra o capô e solte as abraçadeiras das duas mangueiras.', 'Solte os 4 parafusos dos suportes.', 'Tire o intercooler por cima.'],
  m: ['Aletas limpas (água de baixa pressão), por dentro sem óleo.', 'Suportes com as borrachas, abraçadeiras firmes.']
});
M('mang_intercooler', { f: 'Chave de fenda ou soquete.', pre: 'Motor frio.', d: ['Solte as abraçadeiras nas duas pontas.', 'Puxe a mangueira girando.'], m: ['Mangueira e bocais limpos e secos (sem óleo), abraçadeiras no lugar original.'] });
M('coletor_adm', {
  f: 'Soquetes, torquímetro.',
  pre: BAT + ' Do lado esquerdo do cabeçote, perto do rail.',
  d: ['Tire o intercooler e a mangueira de saída.', 'Desligue o sensor de pressão.', 'Solte as porcas e tire o coletor.'],
  m: ['Junta nova e faces limpas (tire a fuligem).', 'Porcas no torque, do centro para as pontas.']
});
M('sens_map', { f: 'Chave Torx ou soquete.', pre: BAT, d: ['Desligue o conector e solte o sensor.'], m: ['Anel novo e conector travado.'] });

/* ---------- DIESEL ---------- */
M('tanque', {
  f: 'Macaco de transmissão, soquetes, recipiente para diesel.',
  pre: ELEV + ' Tanque quase vazio; nada de chama ou faísca perto.',
  d: ['Desligue o conector da bomba e as linhas de ida e retorno (tampe).', 'Solte a mangueira do bocal e o respiro.', 'Apoie o tanque e solte as 2 cintas.', 'Baixe o tanque.'],
  m: ['Tanque nas cintas com as borrachas.', 'Mangueiras e conectores firmes; respiro desobstruído.', SANGRIA]
});
M('bomba_baixa', {
  f: 'Chave da tampa da bomba, soquetes.',
  pre: 'Tanque baixado ou com acesso por cima (conforme a carroceria). ' + BAT,
  d: ['Desligue o conector e as linhas.', 'Solte o anel de trava e tire a bomba com a boia.'],
  m: ['Anel de vedação novo e filtro da bomba limpo.', SANGRIA]
});
M('boia', { f: 'As mesmas da bomba.', pre: 'Sai junto com a bomba.', d: ['Tire a bomba.', 'Solte a boia do suporte.'], m: ['Boia livre, conector firme; confira o marcador.'] });
M('bocal', {
  f: 'Soquetes, chave de fenda.',
  pre: 'Tanque quase vazio. Fica na lateral esquerda da caçamba.',
  d: ['Abra a portinhola e tire a tampa.', 'Por baixo, solte a abraçadeira da mangueira do tanque e do respiro.', 'Solte os parafusos do bocal na caçamba.'],
  m: ['Mangueiras firmes; tampa com a vedação boa (sem água no diesel).']
});
M('linhas_comb', {
  f: 'Chaves de linha, ferramenta de engate rápido.',
  pre: ELEV + ' Tampe cada ponta solta.',
  d: ['Solte os engates nas pontas.', 'Solte as presilhas no chassi e tire a linha.'],
  m: ['Linha sem dobras, presa longe do escape.', SANGRIA]
});
M('filtro_comb', {
  f: 'Chave de filtro, recipiente.',
  pre: 'Troca a cada 10.000 km ou 6 meses (manual). Use filtro original: o sistema trabalha com alta pressão.',
  d: ['Desligue o conector do sensor de água.', 'Solte o filtro do cabeçote e tire, com recipiente embaixo.', 'Passe o sensor de água para o filtro novo.'],
  m: ['Anéis novos untados com diesel limpo.', 'Conector do sensor ligado.', SANGRIA]
});
M('sens_agua', {
  f: 'Nenhuma.',
  pre: 'Drene só quando a luz ficar acesa com o motor funcionando (manual). Motor desligado.',
  d: ['Desligue o conector apertando a trava.', 'Abra a válvula de drenagem afrouxando o sensor até sair toda a água e a sujeira.'],
  m: ['Feche o sensor 1/2 volta depois que a vedação encostar.', 'Ligue o conector. Se a luz não apagar, faça a sangria: ' + SANGRIA]
});
M('bomba_alta', {
  f: 'Ferramentas de travamento da distribuição, extrator de engrenagem, soquetes, torquímetro.',
  pre: ALTA + ' ' + PONTO + ' ' + BAT,
  d: ['Solte as linhas de baixa, o retorno e o tubo de alta (tampe tudo).', 'Desligue o conector da válvula de controle.', 'Trave a distribuição, solte a engrenagem da bomba e as porcas da flange.', 'Tire a bomba.'],
  m: ['Bomba nova ou revisada por oficina Bosch; flange com anel novo.', 'Engrenagem nas marcas e porca no torque.', 'Tubo de alta novo se o cone deformou.', SANGRIA + ' Confira vazamentos com o motor ligado, sem pôr a mão.']
});
M('rail', { f: 'Chaves de linha, torquímetro.', pre: ALTA, d: ['Solte os tubos de alta da bomba e dos injetores.', 'Desligue o sensor de pressão.', 'Solte o rail do cabeçote.'], m: ['Tubos encaixados à mão antes do aperto; porcas no torque.', SANGRIA] });
M('tubos_alta', { f: 'Chaves de linha (de preferência pé de galinha), torquímetro.', pre: ALTA, d: ['Solte as duas porcas do tubo.', 'Tire o tubo sem entortar e tampe as bocas.'], m: ['Tubo novo se o cone estiver marcado; encaixe à mão e aperte no torque.', SANGRIA] });
M('bicos', {
  f: 'Extrator de injetor, soquetes, torquímetro, arruelas de cobre novas.',
  pre: ALTA + ' ' + BAT,
  d: ['Tire o intercooler e a tampa de válvulas.', 'Solte o tubo de alta e o retorno do injetor e tampe.', 'Desligue o conector e solte a garra.', 'Puxe o injetor com o extrator, sem girar no assento.'],
  m: ['Assento limpo e arruela de cobre nova.', 'Garra no torque antes do tubo de alta; tubo encaixado à mão.', 'Injetor novo pode precisar de código gravado no módulo (scanner). ' + SANGRIA]
});
M('retorno', { f: 'Alicate, presilhas novas.', pre: 'Motor desligado.', d: ['Solte as presilhas das conexões de retorno.', 'Tire a mangueira.'], m: ['Conexões travadas, sem rachaduras.'] });
M('sens_rail', { f: 'Chave de boca, torquímetro.', pre: ALTA, d: ['Desligue o conector e desrosqueie o sensor.'], m: ['Sensor no torque, conector travado; apague os códigos.'] });
M('regulador', { f: 'Chave Torx, soquetes.', pre: ALTA, d: ['Desligue o conector.', 'Solte os parafusos e tire a válvula.'], m: ['Anéis novos e válvula no torque; teste com scanner.'] });
M('velas_aquec', {
  f: 'Soquete fino de vela aquecedora, torquímetro.',
  pre: BAT + ' Só em carros com o kit para frio (manual).',
  d: ['Tire o intercooler se atrapalhar.', 'Solte o fio de alimentação.', 'Desrosqueie a vela com cuidado: no frio ela trava.'],
  m: ['Vela nova com antitravamento na rosca, no torque baixo indicado.', 'Fio firme; a luz de pré-aquecimento acende e apaga ao ligar a ignição.']
});
M('ecu', { f: 'Soquetes, scanner.', pre: BAT + ' Módulo novo precisa de programação na concessionária.', d: ['Desligue os conectores com as travas.', 'Solte o suporte.'], m: ['Conectores secos e travados.', 'Programação e teste com scanner.'] });
M('pedal_acel', { f: 'Soquete.', pre: BAT, d: ['Desligue o conector.', 'Solte as porcas e tire o pedal.'], m: ['Pedal firme, conector travado; apague os códigos.'] });

/* ---------- ARREFECIMENTO ---------- */
M('radiador', {
  f: 'Soquetes, alicate de abraçadeira, recipiente.',
  pre: AGUA,
  d: ['Tire a grade se atrapalhar.', 'Solte as mangueiras de cima e de baixo.', 'Solte os suportes e tire o radiador por cima, sem bater na hélice da ventoinha.'],
  m: ['Borrachas dos suportes no lugar.', 'Mangueiras com abraçadeiras firmes. ' + SANGRA]
});
M('vaso', {
  f: 'Alicate de abraçadeira, soquete.',
  pre: 'Motor frio: nunca abra quente. Gire a tampa até o primeiro estágio para aliviar a pressão (manual).',
  d: ['Drene até baixo do reservatório.', 'Solte as mangueiras e o suporte.'],
  m: ['Reservatório firme e tampa apertada.', SANGRA]
});
M('ventoinha', {
  f: 'Ferramenta para segurar a polia, chave da porca da ventoinha.',
  pre: 'Motor frio. Tire o defletor de cima, se houver.',
  d: ['Segure a polia da bomba d’água.', 'Solte a porca grande da embreagem viscosa (confira o sentido da rosca no manual).', 'Tire a ventoinha com a embreagem.'],
  m: ['Hélice sem trincas.', 'Porca no torque; a hélice não pode encostar no defletor.']
});
M('vent_aux', { f: 'Soquetes.', pre: BAT + ' Ele pode ligar sozinho com o motor desligado (manual).', d: ['Tire a grade.', 'Desligue o conector e solte o ventilador da frente do condensador.'], m: ['Ventilador firme, conector travado; teste ligando o ar.'] });
M('bomba_agua', {
  f: 'Soquetes, raspador, recipiente.',
  pre: AGUA,
  d: ['Tire a ventoinha e a correia de acessórios.', 'Solte a bomba da tampa da distribuição.'],
  m: ['Junta ou anel novo, faces limpas.', 'Ventoinha e correia de volta. ' + SANGRA]
});
M('termostato', { f: 'Soquetes.', pre: AGUA, d: ['Solte a mangueira de cima.', 'Solte a carcaça e tire a válvula.'], m: ['Válvula na posição certa, junta nova. ' + SANGRA] });
M('mang_sup', { f: 'Alicate de abraçadeira.', pre: AGUA, d: ['Solte as abraçadeiras.', 'Gire e puxe a mangueira.'], m: ['Mangueira até o batente, abraçadeira no lugar. ' + SANGRA] });
M('mang_inf', { f: 'Alicate de abraçadeira, recipiente.', pre: AGUA, d: ['Solte as abraçadeiras e tire.'], m: ['Mangueira encaixada e firme. ' + SANGRA] });
M('mang_aquec', { f: 'Alicate de abraçadeira.', pre: AGUA, d: ['Solte as mangueiras no motor e no corta-fogo.'], m: ['Mangueiras firmes. ' + SANGRA] });
M('rad_aquec', { f: 'Soquetes, espátula, ajudante.', pre: AGUA + ' Fica na caixa de ar, atrás do painel.', d: ['Solte as mangueiras no corta-fogo.', 'Abra o acesso da caixa de ar (em geral sob o painel) e puxe o radiador.'], m: ['Vedações no lugar. ' + SANGRA] });

/* ---------- ESCAPE ---------- */
M('coletor_esc', {
  f: 'Soquetes, desengripante, torquímetro.',
  pre: 'Motor frio. Aplique desengripante na véspera.',
  d: ['Tire o turbo (veja turbo) ou solte-o junto com o coletor.', 'Solte as porcas do coletor e tire.'],
  m: ['Juntas novas, prisioneiros bons.', 'Porcas no torque, do centro para as pontas; turbo de volta.']
});
M('tubo_diant', { f: 'Soquetes, desengripante.', pre: ELEV + ' Motor frio.', d: ['Solte a flange na saída da turbina.', 'Solte a flange do silencioso e os coxins.'], m: ['Juntas novas e coxins de borracha bons.'] });
M('silencioso', { f: 'Soquetes, desengripante.', pre: ELEV, d: ['Solte as flanges ou abraçadeiras.', 'Tire das borrachas.'], m: ['Juntas e borrachas boas; nada encostando no chassi ou no tanque.'] });
M('tubo_tras', { f: 'Soquetes.', pre: ELEV, d: ['Solte a abraçadeira no silencioso.', 'Tire das borrachas.'], m: ['Ponteira longe do estepe e dos cabos de freio.'] });
M('coxins_esc', { f: 'Alavanca, lubrificante de borracha.', pre: ELEV, d: ['Empurre os pinos para fora das borrachas.'], m: ['Borrachas novas; o escape não pode bater no chassi.'] });
M('protetor', { f: 'Soquetes.', pre: 'Motor frio.', d: ['Solte os parafusos do protetor.'], m: ['Protetor firme, sem vibrar.'] });

/* ---------- ELÉTRICA ---------- */
M('bateria', {
  f: 'Chave 10 mm, escova, graxa de terminal.',
  pre: 'Ignição desligada. Fica no canto dianteiro esquerdo.',
  d: ['Solte primeiro o negativo.', 'Depois o positivo.', 'Solte o grampo e tire a bateria sem inclinar.'],
  m: ['Bateria de 60 Ah, mesma polaridade.', 'Grampo firme, positivo primeiro e negativo por último.', 'Acerte relógio e rádio (manual).']
});
M('cabos_bat', { f: 'Chaves 10 e 13 mm, escova.', pre: BAT, d: ['Solte os terminais (negativo primeiro).', 'Siga o cabo e solte nas pontas.'], m: ['Contatos limpos, aterramentos firmes no motor, no chassi e na cabine.'] });
M('alternador', {
  f: 'Soquetes, chave do tensor, multímetro.',
  pre: BAT,
  d: ['Tire a correia de acessórios.', 'Desligue o cabo, o conector e a mangueira da bomba de vácuo.', 'Solte os 2 parafusos e tire o alternador com a bomba de vácuo.'],
  m: ['Parafusos no torque, cabos firmes, mangueira de vácuo encaixada.', 'Com o motor ligado: cerca de 13,8 a 14,5 V na bateria.']
});
M('motor_partida', {
  f: 'Soquetes, extensão longa.',
  pre: BAT + ' ' + ELEV,
  d: ['Desligue o cabo grosso e o fio do solenoide.', 'Solte os 2 parafusos na capa seca e tire por baixo.'],
  m: ['Parafusos no torque, cabos firmes.', 'Não dê partidas longas e seguidas (manual).']
});
M('caixa_fus_motor', { f: 'Pinça de fusível.', pre: BAT + ' O mapa está na tampa e no manual.', d: ['Abra a tampa.', 'Para trocar a caixa: desligue os conectores e solte o suporte.'], m: ['Fusíveis da mesma amperagem e tampa fechada.'] });
M('caixa_fus_painel', { f: 'Pinça de fusível.', pre: 'Ignição desligada.', d: ['Tire a tampa lateral do painel.', 'Troque o fusível.'], m: ['Mesma amperagem e tampa de volta.'] });
M('chicote', { f: 'Chaves variadas, fita de chicote.', pre: BAT, d: ['Fotografe a passagem.', 'Destrave os conectores pelas travas e solte as presilhas.'], m: ['Mesma passagem, longe do escape e de bordas; presilhas onde o chassi trabalha.'] });
M('farois', { f: 'Chave Philips, soquetes.', pre: 'Abra o capô; tire a grade.', d: ['Tire a grade (veja grade).', 'Solte os 3 parafusos do farol.', 'Desligue os conectores e puxe para a frente.'], m: ['Farol nas guias, parafusos leves.', 'Regule o facho numa parede com a picape vazia.'] });
M('piscas', { f: 'Chave Philips.', pre: 'O pisca fica no conjunto do farol.', d: ['Por trás do farol, gire o soquete e tire a lâmpada.'], m: ['Lâmpada da mesma potência; confira a frequência do pisca.'] });
M('neblina', { f: 'Soquetes, chave Philips.', pre: 'Por baixo do para-choque.', d: ['Desligue o conector.', 'Solte os parafusos do farol de neblina.'], m: ['Vedação boa e regulagem baixa do facho.'] });
M('lanternas', { f: 'Chave Philips.', pre: 'Abra a tampa da caçamba: os parafusos ficam na coluna.', d: ['Solte os 2 parafusos.', 'Puxe a lanterna e desligue o conector.'], m: ['Vedação boa e teste de todas as luzes.'] });
M('luz_freio', { f: 'Chave Philips.', pre: 'No alto da traseira da cabine.', d: ['Solte os parafusos da lente.', 'Troque as lâmpadas ou o conjunto.'], m: ['Vedação boa; teste pisando no freio.'] });
M('luz_placa', { f: 'Chave Philips.', pre: 'No para-choque traseiro.', d: ['Solte a lente e troque a lâmpada.'], m: ['Lente vedada.'] });
M('buzina', { f: 'Soquete.', pre: 'Atrás da grade.', d: ['Tire a grade.', 'Desligue o conector e solte a buzina.'], m: ['Conector limpo (fica exposto à água) e buzina sem encostar.'] });
M('limpador', { f: 'Extrator de braço, soquetes.', pre: 'Marque a posição de repouso.', d: ['Solte as porcas e tire os braços.', 'Tire a grade do torpedo.', 'Solte o motor e as hastes.'], m: ['Motor em repouso antes de montar os braços na marca.'] });
M('lavador', { f: 'Soquetes.', pre: 'No cofre, do lado esquerdo.', d: ['Esvazie o reservatório.', 'Desligue a bomba e a mangueira e solte o reservatório.'], m: ['3,3 L de água com limpador próprio.'] });
M('ign_chave', { f: 'Chaves Torx, chave Philips.', pre: BAT + ' Comutador novo pode pedir programação da chave.', d: ['Tire as capas da coluna.', 'Desligue os conectores e solte o comutador.'], m: ['Programe as chaves se for o caso.'] });
M('comutadores', { f: 'Chave Torx.', pre: BAT + ' Espere 3 minutos por causa do airbag.', d: ['Tire o volante e as capas.', 'Solte os comutadores.'], m: ['Teste setas, faróis e limpadores.'] });
