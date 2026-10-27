/* ===== BYD Dolphin 2024: como desmontar e montar cada peça (elétrica de 12 V, freios, suspensão, direção, interior e carroceria) ===== */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['byd-dolphin'] = window.CAR_PROC['byd-dolphin'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Carro desligado (fora do READY) e negativo da bateria de 12 V desligado.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, apoiado só nos pontos da soleira, nunca embaixo da bateria de tração.';
const RODA = 'Carro em P e fora do READY. Com o carro no chão, afrouxe as porcas de roda; levante pelos pontos da soleira, apoie em cavalete e tire a roda.';
const SANGRIA = 'Sangria com fluido DOT 4 novo, de frasco fechado. O freio integrado (IPB) não tem servo a vácuo: a sangria completa e a calibração do pedal pedem scanner com a função própria, na ordem do manual BYD.';
const PEDAL = 'Com o carro em READY, pise no freio algumas vezes até o pedal ficar firme antes de andar.';
const MANUT = 'Antes de mexer nas pinças traseiras, ponha o freio de estacionamento elétrico em modo de manutenção pela tela ou pelo scanner: o motor da pinça recolhe o pistão. Nunca empurre o pistão traseiro à força.';
const ALINHA = 'Faça o alinhamento da direção depois e, se o manual pedir, calibre o ângulo do volante com scanner.';
const SRS = 'Airbag: desligue o negativo da bateria de 12 V e espere pelo menos 3 minutos antes de mexer. Nunca meça o airbag com multímetro; guarde o módulo com a bolsa para cima.';
const EPS = 'A direção elétrica não tem óleo. Depois de soltar a coluna, o motor da direção ou a caixa, confira se o aviso da direção apagou e calibre o ângulo do volante com scanner.';
const VIDRO = 'Depois de religar a bateria ou trocar a máquina, refaça a inicialização do vidro automático: suba até o fim e segure o botão alguns segundos.';
const FORRO = 'Espátula plástica rente a cada presilha; presilhas novas à mão, porque algumas quebram.';
const FUNILARIA = 'Peça soldada na estrutura: troca é serviço de funilaria (furar ou cortar os pontos de solda, soldar a peça nova, selar as emendas e pintar). Antes de soldar, desenergize a alta tensão e, perto do assoalho, tire a bateria de tração: calor e respingos estragam as células e os cabos laranja.';
const ADAS = 'Se o carro tiver câmera ou radar de assistência na frente ou no para-brisa, recalibre depois da troca.';

/* ---------- ELÉTRICA DE 12 V ---------- */
M('bateria', {
  f: 'Chave 10 mm, escova de terminal, graxa de terminal, multímetro.',
  pre: 'Carro fora do READY e chave longe. A 12 V não dá partida em motor nenhum, mas sem ela o carro não acorda nem fecha a alta tensão.',
  d: ['Abra o capô e tire a tampa do cofre, se houver.', 'Solte primeiro o negativo (preto) e depois o positivo (vermelho), com a capa protetora.', 'Solte o grampo de fixação e tire a bateria para cima.'],
  m: ['Bateria do mesmo tipo e capacidade (confira se é de chumbo ou de lítio no seu carro).', 'Grampo firme, positivo primeiro e negativo por último.', 'Ponha o carro em READY: com o conversor DC-DC funcionando, a bateria deve marcar perto de 14 V. Refaça a inicialização dos vidros.']
});
M('cabos_bat', {
  f: 'Chaves 10 e 12 mm, escova.',
  pre: BAT,
  d: ['Solte os terminais da bateria (negativo primeiro).', 'Siga o cabo até a caixa de fusíveis, a saída do conversor DC-DC ou o aterramento e solte as porcas.', 'Tire o cabo das presilhas.'],
  m: ['Contatos limpos, porcas firmes, cabo longe de bordas e peças móveis.', 'Aterramento ruim dá avisos estranhos e impede o READY.']
});
M('caixa_fus_motor', {
  f: 'Pinça de fusível (vem na tampa), chave 10 mm.',
  pre: BAT + ' Use fusíveis da mesma amperagem.',
  d: ['Abra a tampa (o mapa dos fusíveis está nela ou no manual).', 'Para trocar a caixa: desligue os conectores de baixo e solte o suporte.'],
  m: ['Conectores travados e tampa fechada contra água.', 'Fusível que queima de novo é curto: procure a causa.']
});
M('caixa_fus_painel', {
  f: 'Pinça de fusível.',
  pre: 'Carro fora do READY.',
  d: ['Tire a tampinha do acabamento sob o painel.', 'Troque o fusível pela mesma amperagem.'],
  m: ['Tampa de volta. Para trocar a caixa, desligue a bateria e os conectores antes.']
});
M('bcm', {
  f: 'Soquete 10 mm, chave Philips, scanner.',
  pre: BAT + ' Módulo novo precisa de programação (chaves, configuração do carro).',
  d: ['Tire o acabamento de baixo do painel.', 'Desligue os conectores e solte o módulo.'],
  m: ['Conectores secos e travados.', 'Programe e teste luzes, travas, vidros, limpadores e a chave presencial.']
});
M('chicote', {
  f: 'Chaves variadas, fita de chicote, limpa-contato.',
  pre: BAT + ' Só o chicote de baixa tensão; cabos laranja são de alta tensão e têm outro procedimento.',
  d: ['Fotografe a passagem e os conectores antes.', 'Destrave cada conector pela trava, sem puxar pelos fios.', 'Solte as presilhas.'],
  m: ['Mesma passagem, longe de bordas cortantes.', 'Conectores secos e travados com clique; apague os códigos no scanner.']
});
M('farois', {
  f: 'Soquetes, chave Philips, espátula plástica.',
  pre: 'O farol é de LED e sai pela frente com o para-choque fora; não há lâmpada para trocar.',
  d: ['Tire o para-choque dianteiro.', 'Solte os parafusos do farol.', 'Desligue os conectores e puxe o farol para a frente.'],
  m: ['Farol encaixado nas guias, parafusos leves.', 'Regule a altura do facho numa parede, com o carro vazio e os pneus calibrados.']
});
M('lanternas', {
  f: 'Soquete, chave Philips, espátula plástica.',
  pre: 'As lanternas ficam nos cantos de trás, na carroceria, ao lado da tampa.',
  d: ['Abra a tampa traseira e tire a tampinha do acabamento lateral do porta-malas.', 'Solte as porcas por dentro.', 'Desligue o conector e puxe a lanterna para trás, soltando o pino de encaixe.'],
  m: ['Vedação boa: água no porta-malas costuma vir daqui.', 'Porcas leves e teste de todas as luzes (posição, freio, seta e ré).']
});
M('faixa_luz', {
  f: 'Espátula plástica, chave Philips ou Torx.',
  pre: 'A faixa fica na tampa traseira, entre as lanternas.',
  d: ['Abra a tampa e tire o forro dela.', 'Desligue o conector da faixa.', 'Solte as porcas por dentro e tire a faixa pela frente.'],
  m: ['Vedação nova, porcas leves, conector travado.', 'Teste com as luzes de posição ligadas.']
});
M('piscas_lat', {
  f: 'Espátula plástica, chave Philips.',
  pre: 'No Dolphin o repetidor de seta fica no retrovisor externo.',
  d: ['Dobre o espelho e, se o manual pedir, tire o vidro do espelho com a espátula.', 'Solte o parafuso ou a trava do repetidor e desligue o conector.'],
  m: ['Repetidor encaixado, conector travado; teste a seta dos dois lados.']
});
M('luz_freio', {
  f: 'Chave Philips, espátula plástica.',
  pre: 'Fica no alto da tampa traseira, sob o aerofólio.',
  d: ['Abra a tampa e solte o acabamento por dentro.', 'Desligue o conector e solte a luz.'],
  m: ['Vedação boa e conector travado; teste pisando no freio.']
});
M('luz_placa', {
  f: 'Chave de fenda pequena.',
  pre: 'Ficam acima da placa, na tampa.',
  d: ['Empurre a lente para o lado e puxe.', 'Desligue o conector (são de LED).'],
  m: ['Lente encaixada; luz de placa apagada dá multa.']
});
M('buzina', {
  f: 'Soquete 10 mm.',
  pre: 'Fica atrás do para-choque dianteiro.',
  d: ['Tire o forro da caixa de roda ou o para-choque para chegar.', 'Desligue o conector e solte a porca.'],
  m: ['Buzina no suporte, sem encostar em nada, e conector firme.']
});
M('avas', {
  f: 'Soquete 10 mm, espátula plástica.',
  pre: 'Fica na frente do carro, atrás do para-choque (posição aproximada no modelo). É item de segurança obrigatório: não desligue.',
  d: ['Tire o para-choque ou o forro da caixa de roda.', 'Desligue o conector e solte o suporte.'],
  m: ['Alto-falante virado para a frente, sem obstrução, conector travado.', 'Teste andando devagar: tem que ouvir o som de aviso.']
});
M('limpador', {
  f: 'Soquete do braço, extrator de braço, chave de fenda.',
  pre: 'Marque a posição de repouso dos braços no para-brisa.',
  d: ['Levante a capinha e solte a porca do braço; puxe o braço (com extrator se estiver preso).', 'Tire a grade do torpedo.', 'Desligue o conector do motor e solte o conjunto do motor e das hastes.'],
  m: ['Conjunto parafusado, motor na posição de repouso (ligue e desligue antes de montar os braços).', 'Braços na marca, porcas no torque. Palhetas novas a cada ano.']
});
M('limpador_tras', {
  f: 'Soquete do braço, espátula plástica.',
  pre: 'O motor fica dentro da tampa traseira.',
  d: ['Solte a porca e tire o braço.', 'Tire o forro da tampa, desligue o conector e solte o motor.'],
  m: ['Vedação do eixo boa para não entrar água.', 'Motor na posição de repouso e braço na marca.']
});
M('lavador', {
  f: 'Soquetes, alicate de mangueira.',
  pre: 'O reservatório fica na frente, atrás do para-choque; o bocal fica no cofre.',
  d: ['Esvazie o reservatório.', 'Tire o forro da caixa de roda ou o para-choque.', 'Desligue a bomba e as mangueiras (uma vai até a tampa traseira) e solte o reservatório.'],
  m: ['Mangueiras firmes, bomba com vedação nova.', 'Água com limpador próprio; nada de detergente.']
});
M('botao_ligar', {
  f: 'Espátula plástica, chave Philips.',
  pre: BAT,
  d: ['Solte o acabamento do console em volta do botão.', 'Desligue o conector e solte o botão.'],
  m: ['Botão encaixado, conector travado.', 'Teste: pé no freio, chave dentro do carro, botão até o READY.']
});
M('comutadores', {
  f: 'Chave Philips, Torx.',
  pre: SRS,
  d: ['Tire o volante (veja volante) e as capas da coluna.', 'Desligue os conectores e solte os comutadores.'],
  m: ['Comutadores encaixados, conectores firmes; teste setas, faróis, limpadores e o retorno da seta.']
});
M('camera_re', {
  f: 'Espátula plástica, chave Philips.',
  pre: 'A câmera fica na tampa traseira, acima da placa.',
  d: ['Tire o forro da tampa.', 'Desligue o conector e solte a câmera.'],
  m: ['Câmera encaixada e vedada, lente limpa.', 'Confira na tela a imagem e as linhas-guia; calibre com scanner se pedir.']
});
M('sensores_estac', {
  f: 'Espátula plástica, ferramenta de soltar sensor.',
  pre: 'Os sensores ficam no para-choque traseiro.',
  d: ['Tire o para-choque traseiro para chegar por trás (alguns saem pela frente com cuidado).', 'Desligue o conector e solte a presilha do sensor.'],
  m: ['Sensor no anel, encaixado até o clique; pintura do sensor igual à do carro.', 'Teste dando ré devagar perto de um obstáculo.']
});

/* ---------- FREIOS ---------- */
M('pedal_freio', {
  f: 'Soquetes, chave de boca, scanner.',
  pre: BAT + ' O pedal empurra a haste do freio integrado e tem sensor de curso.',
  d: ['Solte o pino da haste do freio integrado.', 'Desligue o sensor do pedal e o interruptor da luz de freio.', 'Solte o eixo e tire o pedal.'],
  m: ['Buchas lubrificadas, pino com trava.', 'Calibre o sensor do pedal com scanner e confira a luz de freio.']
});
M('ipb', {
  f: 'Chaves de linha, soquetes, seringa, scanner com função de sangria e calibração do IPB.',
  pre: BAT + ' Proteja a pintura: fluido de freio estraga tinta. Fica no corta-fogo, do lado do motorista.',
  d: ['Tire o fluido do reservatório com seringa e desligue os conectores do bloco.', 'Marque e solte os tubos, tampando cada furo na hora.', 'Por dentro, solte o pino do pedal; solte as porcas no corta-fogo e tire o bloco pelo cofre.'],
  m: ['Bloco novo chega cheio de fluido: tire os tampões só na hora de ligar cada tubo, no furo certo.', 'Porcas no torque e conectores travados.', SANGRIA + ' ' + PEDAL + ' Teste a freada leve, a regeneração e o ABS.']
});
M('reserv_freio', {
  f: 'Seringa, chave de fenda.',
  pre: 'O reservatório fica em cima do freio integrado.',
  d: ['Tire o fluido com seringa.', 'Desligue o sensor de nível e puxe o reservatório das borrachas.'],
  m: ['Borrachas novas, reservatório encaixado.', 'Fluido DOT 4 até MAX. Troca do fluido a cada 2 anos é a referência.']
});
M('sens_roda', {
  f: 'Soquete, limpa-contato.',
  pre: RODA,
  d: ['Siga o cabo até o conector e solte.', 'Solte o parafuso do sensor e puxe girando.', 'Solte as presilhas do cabo.'],
  m: ['Furo e anel magnético limpos, sem limalha.', 'Sensor encaixado e cabo preso longe da roda; apague os códigos e teste a luz do ABS.']
});
M('tubos_freio', {
  f: 'Chaves de linha, curvador de tubo.',
  pre: ELEV + ' Proteja a pintura. Os tubos passam perto da bateria de tração: não apoie ferramenta nela.',
  d: ['Solte as pontas com chave de linha.', 'Solte as presilhas e tire o tubo.'],
  m: ['Tubo novo com as mesmas curvas e pontas.', 'Presilhas no lugar.', SANGRIA]
});
M('pincas', {
  f: 'Soquetes, chave de linha, seringa.',
  pre: RODA,
  d: ['Solte o flexível da pinça (tampe).', 'Solte os pinos-guia e o suporte.', 'Tire a pinça.'],
  m: ['Pinos-guia limpos e engraxados com graxa própria.', 'Flexível com arruelas novas.', SANGRIA + ' ' + PEDAL]
});
M('pastilhas', {
  f: 'Soquetes, recuador de pistão, graxa para pinos.',
  pre: RODA + ' Troque sempre os dois lados juntos. Com a regeneração as pastilhas duram muito, mas os discos podem enferrujar: freie forte de vez em quando.',
  d: ['Solte os 2 pinos-guia e levante a pinça, sem pendurar pelo flexível nem pelo cabo do sensor.', 'Tire as pastilhas e as molinhas.', 'Recue o pistão devagar, de olho no reservatório.'],
  m: ['Pastilhas novas com as molas e os calços.', 'Pinos engraxados e pinça de volta.', PEDAL + ' Amacie com freadas leves nos primeiros 200 km.']
});
M('discos', {
  f: 'Soquetes, relógio comparador.',
  pre: RODA,
  d: ['Tire a pinça e pendure com arame.', 'Solte o suporte da pinça.', 'Tire o disco (se estiver preso, bata de leve no cubo).'],
  m: ['Cubo limpo, disco novo sem óleo.', 'Suporte e pinça no torque; pastilhas novas com disco novo.', PEDAL]
});
M('pincas_tras', {
  f: 'Soquetes, chave de linha, seringa, scanner.',
  pre: RODA + ' ' + MANUT,
  d: ['Desligue o conector do motor do freio de estacionamento.', 'Solte o flexível (tampe), os pinos-guia e o suporte.', 'Tire a pinça.'],
  m: ['Pinos engraxados, flexível com arruelas novas, conector travado.', SANGRIA + ' Saia do modo de manutenção para o freio de estacionamento recalibrar. ' + PEDAL]
});
M('pastilhas_tras', {
  f: 'Soquetes, graxa para pinos, scanner ou tela do carro.',
  pre: RODA + ' ' + MANUT + ' Troque os dois lados juntos.',
  d: ['Com o modo de manutenção ligado, solte os pinos-guia e levante a pinça.', 'Tire as pastilhas e as molinhas.'],
  m: ['Pastilhas novas com as molas.', 'Pinça de volta e pinos no torque.', 'Saia do modo de manutenção, acione e solte o freio de estacionamento algumas vezes. ' + PEDAL]
});
M('discos_tras', {
  f: 'Soquetes, scanner ou tela do carro.',
  pre: RODA + ' ' + MANUT,
  d: ['Tire a pinça (sem soltar o flexível) e pendure com arame.', 'Solte o suporte da pinça e tire o disco.'],
  m: ['Cubo limpo, disco novo sem óleo, pastilhas novas.', 'Suporte e pinça no torque; saia do modo de manutenção. ' + PEDAL]
});
M('epb', {
  f: 'Soquetes Torx, scanner.',
  pre: RODA + ' ' + MANUT + ' ' + BAT,
  d: ['Desligue o conector do motor na pinça traseira.', 'Solte os parafusos e tire o motor da pinça, sem girar o eixo à mão.'],
  m: ['Anel de vedação novo, motor encaixado no eixo da pinça e parafusos no torque.', 'Religue a bateria, saia do modo de manutenção e calibre com scanner.', 'Teste numa rampa: o carro tem que ficar parado só com o freio de estacionamento.']
});

/* ---------- SUSPENSÃO E RODAS ---------- */
M('amort_diant', {
  f: 'Compressor de molas, soquetes, torquímetro.',
  pre: RODA + ' Troque os dois lados juntos.',
  d: ['Solte a bieleta da barra estabilizadora, o flexível e o cabo do sensor do ABS do suporte.', 'Solte os 2 parafusos da manga.', 'Abra o capô e solte as porcas de cima.', 'Tire o conjunto e desmonte com o compressor.'],
  m: ['Amortecedor novo com batente, coifa e coxim conferidos.', 'Porcas de cima e da manga no torque.', 'Aperto final das articulações com o carro no chão. ' + ALINHA]
});
M('molas_diant', {
  f: 'Compressor de molas.',
  pre: 'A mola sai com o amortecedor. O carro é pesado por causa da bateria: use mola própria do Dolphin.',
  d: ['Tire o conjunto do amortecedor.', 'Comprima a mola com o compressor e solte a porca da haste.'],
  m: ['Mola nova na posição certa nos pratos.', 'Solte o compressor devagar.', ALINHA]
});
M('coxins_amort', {
  f: 'Compressor de molas, soquetes.',
  pre: 'O coxim sai com o amortecedor.',
  d: ['Tire o conjunto do amortecedor.', 'Comprima a mola e tire o coxim e o rolamento.'],
  m: ['Coxim e rolamento novos.', 'Num carro silencioso como o elétrico, o "toc" de coxim gasto aparece cedo.']
});
M('bandejas', {
  f: 'Soquetes, extrator de pivô, torquímetro.',
  pre: RODA,
  d: ['Solte o pivô da manga.', 'Solte os parafusos das buchas no subchassi.', 'Tire a bandeja.'],
  m: ['Bandeja nova com buchas e pivô.', 'Aperto final das buchas com o carro no chão.', ALINHA]
});
M('barra_estab', {
  f: 'Soquetes, chave Allen para segurar o pino da bieleta.',
  pre: ELEV,
  d: ['Solte as bieletas dos dois lados.', 'Solte as abraçadeiras das buchas no subchassi.', 'Tire a barra.'],
  m: ['Buchas novas.', 'Aperto final com o carro no chão.']
});
M('subchassi', {
  f: 'Macaco de transmissão, soquetes, torquímetro.',
  pre: ELEV + ' Apoie o conjunto elétrico antes.',
  d: ['Solte bandejas, barra estabilizadora, caixa de direção e o coxim traseiro do conjunto elétrico.', 'Apoie o subchassi e solte os parafusos.', 'Baixe devagar, conferindo cabos laranja e mangueiras.'],
  m: ['Subchassi alinhado pelos furos-guia.', 'Parafusos no torque.', ALINHA]
});
M('mangas', {
  f: 'Soquetes, extrator de pivô, torquímetro.',
  pre: RODA,
  d: ['Tire a pinça, o disco e o sensor do ABS.', 'Solte a porca do cubo, o terminal de direção e o pivô.', 'Solte os 2 parafusos do amortecedor e tire a manga.'],
  m: ['Rolamento novo se tiver ruído ou folga.', 'Tudo no torque, porca do cubo nova.', ALINHA]
});
M('eixo_tras', {
  f: 'Macaco de transmissão, soquetes, torquímetro, scanner.',
  pre: ELEV + ' ' + MANUT,
  d: ['Tire as rodas, desligue os sensores do ABS e os motores do freio de estacionamento e solte os flexíveis de freio.', 'Apoie o eixo e solte os amortecedores embaixo.', 'Baixe o eixo até as molas soltarem.', 'Solte os parafusos das buchas e tire o eixo.'],
  m: ['Buchas novas se estiverem rachadas.', 'Aperto final das buchas e dos amortecedores com o carro no chão.', SANGRIA + ' Saia do modo de manutenção do freio de estacionamento.']
});
M('buchas_eixo', {
  f: 'Prensa e ferramenta de bucha, soquetes.',
  pre: ELEV,
  d: ['Apoie o eixo e solte o parafuso da bucha.', 'Baixe o braço e extraia a bucha com a ferramenta.'],
  m: ['Bucha nova na posição certa (algumas têm lado).', 'Aperto final com o carro no chão.']
});
M('cubo_tras', {
  f: 'Soquetes, torquímetro, scanner ou tela do carro.',
  pre: RODA + ' ' + MANUT,
  d: ['Tire a pinça e o disco.', 'Solte os parafusos do cubo por trás do eixo.', 'Tire o cubo com o rolamento.'],
  m: ['Cubo novo no torque, anel do sensor do ABS limpo.', 'Disco e pinça de volta; saia do modo de manutenção.']
});
M('amort_tras', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV + ' Troque os dois lados juntos.',
  d: ['Apoie o eixo com o macaco.', 'Solte o parafuso de baixo, no eixo.', 'Solte o parafuso ou as porcas de cima (por baixo ou pelo porta-malas, conforme a versão).', 'Tire o amortecedor.'],
  m: ['Amortecedor novo com batente e coifa.', 'Aperto final com o carro no chão.']
});
M('molas_tras', {
  f: 'Macaco, soquetes.',
  pre: ELEV,
  d: ['Apoie o eixo e solte o amortecedor embaixo.', 'Baixe o eixo devagar até a mola soltar.', 'Tire a mola com os coxins.'],
  m: ['Mola na posição certa nos coxins de cima e de baixo.', 'Suba o eixo e reaperte o amortecedor com o carro no chão.']
});
M('pneus', {
  f: 'Máquina de montar pneu e balanceadora.',
  pre: 'Medida de referência 195/60 R16: confira a da etiqueta da porta. Pneu de baixa resistência ajuda a autonomia. Troque aos pares, os novos atrás se só trocar dois.',
  d: ['Tire a roda.', 'Na borracharia, desmonte o pneu do aro, com cuidado com o sensor de pressão se o carro tiver.'],
  m: ['Pneu na mesma medida e índice de carga (carro elétrico é pesado) e velocidade.', 'Balanceamento, calibragem da etiqueta da porta e reaperto das porcas.']
});
M('rodas', {
  f: 'Chave de roda, torquímetro, macaco.',
  pre: 'Carro em P, freio de estacionamento acionado e carro no plano. Levante só pelos pontos da soleira.',
  d: ['Com o carro no chão, afrouxe as 5 porcas.', 'Levante pelo ponto de apoio, tire as porcas e a roda.'],
  m: ['Porcas à mão, em cruz.', 'Desça o carro e dê o aperto final (≈ 120 N·m; confirme no manual).', 'Reaperte depois de uns 50 km.']
});
M('kit_pneu', {
  f: 'Nenhuma.',
  pre: 'O carro não tem estepe: fica um kit de reparo no fundo do porta-malas.',
  d: ['Levante o assoalho do porta-malas.', 'Tire o kit (compressor e selante).'],
  m: ['Confira a validade do selante; depois de usar, troque o frasco e avise a borracharia (o selante suja o pneu e o sensor).']
});

/* ---------- DIREÇÃO ---------- */
M('volante_dir', {
  f: 'Chave Torx, soquete, extrator de volante.',
  pre: SRS + ' Rodas retas.',
  d: ['Tire o módulo do airbag (veja airbag) e desligue os conectores dos botões.', 'Marque o volante no eixo e solte o parafuso central.', 'Puxe o volante (com extrator se estiver preso).'],
  m: ['Cabo espiral centrado, volante na marca.', 'Parafuso no torque, airbag de volta, ligue a bateria com ninguém na frente do volante.', EPS]
});
M('coluna', {
  f: 'Soquetes, chave Torx.',
  pre: SRS + ' Rodas retas e volante travado.',
  d: ['Tire o volante, as capas e os comutadores.', 'Marque e solte a junta do pinhão no corta-fogo.', 'Desligue os conectores do motor da direção e solte as porcas sob o painel; a coluna sai com o motor.'],
  m: ['Junta na marca, parafuso no torque.', 'Conectores travados.', EPS]
});
M('eps', {
  f: 'Soquetes, chave Torx, scanner.',
  pre: SRS + ' O motor e o módulo da direção elétrica ficam na coluna, sob o painel (posição aproximada no modelo); em geral a peça vem como conjunto com a coluna.',
  d: ['Tire os acabamentos de baixo do painel.', 'Desligue os conectores do motor e do módulo.', 'Siga a remoção da coluna se o motor não sair sozinho.'],
  m: ['Conectores secos e travados.', EPS]
});
M('caixa_dir', {
  f: 'Soquetes, extrator de terminal, torquímetro.',
  pre: ELEV + ' Rodas retas e volante travado.',
  d: ['Solte os terminais das mangas.', 'Marque e solte a junta do pinhão.', 'Solte as braçadeiras da caixa no subchassi e tire pelo lado (às vezes é preciso baixar o subchassi).'],
  m: ['Caixa centrada, braçadeiras no torque.', 'Junta na marca e terminais com porca nova.', ALINHA + ' ' + EPS]
});
M('barras_axiais', {
  f: 'Chave de barra axial, extrator de terminal.',
  pre: RODA,
  d: ['Solte o terminal da manga e conte as voltas ao tirá-lo da barra.', 'Solte a coifa.', 'Solte a barra axial da cremalheira com a chave própria.'],
  m: ['Barra nova no torque, coifa com abraçadeiras novas.', 'Terminal com o mesmo número de voltas.', ALINHA]
});

/* ---------- INTERIOR E SEGURANÇA ---------- */
M('painel', {
  f: 'Espátula plástica, soquetes, chaves Philips e Torx.',
  pre: SRS + ' Serviço grande: fotografe cada conector.',
  d: ['Tire o volante, as capas da coluna, o console, a tela central, o quadro e o porta-luvas.', 'Tire o airbag do passageiro e os acabamentos das colunas.', 'Solte os parafusos do painel e puxe com ajuda, desligando os conectores.'],
  m: ['Conectores todos travados antes de apertar.', 'Painel nos pinos-guia, parafusos de volta.', 'Ligue a bateria e confira a luz do airbag apagar.']
});
M('quadro', {
  f: 'Espátula plástica, chave Philips.',
  pre: BAT,
  d: ['Solte a moldura do quadro digital com a espátula.', 'Solte os parafusos e puxe o quadro, desligando o conector.'],
  m: ['Conector travado e moldura encaixada.', 'Quadro novo precisa de programação (quilometragem e configuração) com scanner.']
});
M('tela', {
  f: 'Espátula plástica, soquetes, scanner.',
  pre: BAT + ' A tela gira: deixe-a na horizontal antes de começar.',
  d: ['Solte as molduras em volta da base da tela.', 'Solte os parafusos da base giratória.', 'Puxe a tela com a base e desligue os conectores (vídeo, antena, USB, motor de giro).'],
  m: ['Conectores travados, base firme, giro testado nas duas posições.', 'Tela nova pode pedir ativação e atualização de software; confira a câmera de ré e os ajustes do carro.']
});
M('airbag_mot', {
  f: 'Chave Torx.',
  pre: SRS,
  d: ['Espere 3 minutos com a bateria desligada.', 'Solte os 2 parafusos por trás do volante.', 'Puxe o módulo, destrave e desligue o conector.'],
  m: ['Conector travado com clique.', 'Parafusos no torque, ligue a bateria com ninguém na frente.', 'Confira a luz do airbag apagar.']
});
M('airbag_pass', {
  f: 'Soquetes, espátula.',
  pre: SRS,
  d: ['Tire o porta-luvas.', 'Desligue o conector do airbag.', 'Solte as porcas e tire o módulo por baixo ou com o painel fora.'],
  m: ['Conector travado.', 'Ligue a bateria e confira a luz do airbag.']
});
M('airbags_lat', {
  f: 'Soquetes, Torx, espátula plástica.',
  pre: SRS + ' Os laterais ficam nos encostos dos bancos da frente e as cortinas no forro do teto, de ponta a ponta.',
  d: ['Lateral: tire o banco (veja bancos dianteiros) e abra o revestimento do encosto.', 'Cortina: baixe o forro do teto pelas laterais, desligue o conector e solte os parafusos ao longo do teto.'],
  m: ['Bolsa sem torção, presilhas e parafusos no lugar, conectores travados.', 'Airbag que abriu é trocado junto com os sensores e o módulo, se o manual pedir. Confira a luz do airbag.']
});
M('srs', {
  f: 'Soquetes, scanner.',
  pre: SRS + ' Módulo novo exige programação.',
  d: ['Tire o console central.', 'Desligue o conector e solte os parafusos.'],
  m: ['Módulo com a seta para a frente, parafusos no torque.', 'Apague os códigos com scanner; módulo de carro batido com airbag aberto é trocado.']
});
M('cabo_espiral', {
  f: 'Chave Torx.',
  pre: SRS + ' Rodas retas.',
  d: ['Tire o airbag, o volante e as capas.', 'Solte o cabo espiral sem girar.'],
  m: ['Cabo novo vem travado no centro; tire a trava só depois de montado.', 'Cabo descentralizado rompe na primeira esterçada. Calibre o ângulo do volante com scanner.']
});
M('console', {
  f: 'Espátula plástica, chave Philips.',
  pre: BAT,
  d: ['Solte os acabamentos em volta do seletor e dos botões.', 'Solte os parafusos e as presilhas.', 'Levante o console desligando os conectores (seletor, botão de partida, freio de estacionamento, carregador de celular).'],
  m: ['Conectores e presilhas no lugar; teste o seletor e o botão de partida.']
});
M('bancos_diant', {
  f: 'Soquetes, Torx.',
  pre: SRS + ' Os bancos têm airbag lateral e sensores.',
  d: ['Corra o banco para a frente e solte os parafusos de trás; corra para trás e solte os da frente.', 'Desligue os conectores por baixo e tire o banco.'],
  m: ['Parafusos no torque (item de segurança).', 'Conectores travados e luz do airbag apagada.']
});
M('banco_tras', {
  f: 'Soquetes.',
  pre: 'Nada.',
  d: ['Puxe o assento pela frente para soltar as presilhas.', 'Rebata o encosto e solte os parafusos das dobradiças.'],
  m: ['Presilhas encaixadas, cintos passando por cima do assento.']
});
M('cintos', {
  f: 'Soquetes, Torx.',
  pre: 'Item de segurança. Cinto que travou numa batida (com pré-tensionador) é trocado. ' + SRS,
  d: ['Tire os acabamentos das colunas.', 'Desligue o conector do pré-tensionador, se houver.', 'Solte a ancoragem de cima, a de baixo e o retrator.'],
  m: ['Ancoragens no torque, conector travado.', 'Teste o travamento puxando rápido e confira a luz do airbag.']
});
M('forros_portas', {
  f: 'Espátula plástica, chave Philips.',
  pre: FORRO,
  d: ['Tire os parafusos do puxador e o acabamento da maçaneta interna.', 'Desligue o conector dos botões.', 'Solte as presilhas em volta e levante o forro da borda do vidro.'],
  m: ['Plástico de vedação colado por dentro.', 'Forro encaixado na borda do vidro e presilhas batidas com a palma.']
});
M('forros_portas_tras', {
  f: 'Espátula plástica, chave Philips.',
  pre: FORRO,
  d: ['Tire o parafuso do puxador e o acabamento da maçaneta.', 'Solte as presilhas em volta e levante o forro.'],
  m: ['Plástico de vedação colado.', 'Forro encaixado e presilhas firmes.']
});
M('porta_malas', {
  f: 'Espátula plástica.',
  pre: 'Nada.',
  d: ['Tire o tampão, o assoalho, o carregador portátil, o kit de reparo e os acabamentos laterais, soltando as presilhas.'],
  m: ['Presilhas no lugar; confira se não há água no fundo.']
});
M('retrovisor_int', {
  f: 'Chave Torx ou de fenda.',
  pre: 'Preso numa base colada no para-brisa.',
  d: ['Desligue o conector, se houver.', 'Deslize o espelho para fora da base (ou solte o parafuso).'],
  m: ['Espelho travado na base. Base solta se cola com adesivo próprio para vidro.']
});
M('alto_falantes', {
  f: 'Chave Philips.',
  pre: 'Os alto-falantes ficam nas portas, sob os forros.',
  d: ['Tire o forro da porta.', 'Solte os parafusos e o conector do alto-falante.'],
  m: ['Alto-falante na mesma impedância, parafusos firmes, forro de volta.']
});

/* ---------- CARROCERIA ---------- */
M('monobloco', {
  f: 'Medidor de carroceria (gabarito), equipamento de funilaria.',
  pre: 'O monobloco é a estrutura do carro: não se desmonta. ' + FUNILARIA,
  d: ['Depois de batida, meça os pontos de referência em gabarito.', 'Peças amassadas são puxadas ou trocadas na funilaria. Batida forte embaixo pede inspeção da bateria de tração (deformação, vazamento, isolamento).'],
  m: ['Medidas dentro da tolerância antes de montar suspensão e lataria. Alinhamento depois.']
});
M('corta_fogo', {
  f: 'Equipamento de funilaria.',
  pre: FUNILARIA,
  d: ['Só se troca em reparo estrutural, com o cofre e o painel desmontados.'],
  m: ['Passa-cabos e vedações de volta para não entrar água nem barulho.']
});
M('soleiras', { f: 'Equipamento de funilaria.', pre: FUNILARIA + ' As soleiras protegem as laterais da bateria de tração.', d: ['Tire a bateria de tração.', 'Fure os pontos de solda da aba de baixo e da borda das portas.', 'Tire a soleira.'], m: ['Soleira nova soldada, emendas seladas e proteção antiferrugem por dentro.'] });
M('colunas', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Coluna amassada é reparada ou cortada e substituída em seção, pelo manual de reparo.'], m: ['Soldas nos pontos originais, medidas conferidas e vedação.'] });
M('teto', { f: 'Equipamento de funilaria, para-brisa e vidro traseiro fora.', pre: FUNILARIA + ' As cortinas de airbag correm sob o forro do teto: tire-as antes.', d: ['Tire o forro do teto, as cortinas, o para-brisa e a tampa.', 'Fure os pontos de solda nas bordas.', 'Tire o teto.'], m: ['Teto novo soldado e selado, vidros colados com cordão novo.'] });
M('laterais', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Tire lanterna, vidro lateral, para-choque e acabamentos.', 'Fure ou corte os pontos de solda.', 'Tire a lateral.'], m: ['Lateral nova soldada, emendas seladas, vidro lateral colado de novo.'] });
M('painel_tras', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Tire o para-choque, as lanternas, a viga e os acabamentos.', 'Fure os pontos de solda e tire o painel.'], m: ['Painel novo soldado e selado; confira a vedação do porta-malas.'] });
M('travessa_frontal', {
  f: 'Soquetes.',
  pre: 'A travessa segura radiador, condensador, faróis e a fechadura do capô.',
  d: ['Tire o para-choque e os faróis.', 'Apoie radiador e condensador sem abrir o circuito da bomba de calor.', 'Solte os parafusos das pontas e tire a travessa.'],
  m: ['Travessa nos pinos-guia, fechadura do capô regulada.', 'Faróis regulados. ' + ADAS]
});
M('viga_dianteira', { f: 'Soquetes.', pre: 'Atrás do para-choque dianteiro.', d: ['Tire o para-choque.', 'Solte os parafusos das pontas das longarinas.'], m: ['Viga nova se estiver amassada; parafusos no torque. ' + ADAS] });
M('viga_traseira', { f: 'Soquetes.', pre: 'Atrás do para-choque traseiro.', d: ['Tire o para-choque traseiro.', 'Solte os parafusos no painel traseiro.'], m: ['Viga no lugar, parafusos no torque.'] });
M('capo', {
  f: 'Soquetes, fita crepe, ajudante.',
  pre: 'Risque a posição das dobradiças.',
  d: ['Abra o capô e desligue a mangueira do lavador, se houver.', 'Com ajuda, solte os parafusos de cada dobradiça no capô.', 'Tire o capô.'],
  m: ['Parafusos na marca, frestas iguais dos dois lados.', 'Regule os batentes de borracha e a fechadura.']
});
M('paralamas', {
  f: 'Soquetes, espátula plástica.',
  pre: 'O para-lama é parafusado. No direito fica a porta de recarga: ' + 'desenergize a alta tensão e solte a porta antes (veja porta de recarga).',
  d: ['Tire o para-choque, o farol e o forro da caixa de roda.', 'No lado direito, solte a porta de recarga do para-lama sem desligar a tampinha.', 'Solte os parafusos de cima, da frente, de baixo e de trás e tire o para-lama.'],
  m: ['Massa de vedação nas emendas, parafusos leves.', 'Frestas com capô e porta iguais antes do aperto final; tampinha da porta de recarga abrindo e fechando livre.']
});
M('portas', {
  f: 'Soquetes, macaco com pano, ajudante.',
  pre: 'Apoie a porta antes de soltar.',
  d: ['Desligue o conector do chicote na coluna.', 'Solte o limitador.', 'Marque e solte os parafusos das dobradiças na coluna.', 'Tire a porta.'],
  m: ['Dobradiças na marca, limitador e conector de volta.', 'Regule a fresta e o batente da fechadura.']
});
M('portas_tras', {
  f: 'Soquetes, macaco com pano, ajudante.',
  pre: 'Apoie a porta antes de soltar.',
  d: ['Desligue o conector na coluna central.', 'Solte o limitador.', 'Marque e solte os parafusos das dobradiças.', 'Tire a porta.'],
  m: ['Dobradiças na marca, frestas reguladas, batente ajustado.']
});
M('dobradicas', {
  f: 'Soquetes, ajudante.',
  pre: 'Apoie a porta.',
  d: ['Tire a porta.', 'Solte os parafusos da dobradiça na coluna.'],
  m: ['Dobradiça nova, graxa nos pinos.', 'Regule frestas e fechamento.']
});
M('fech_portas', {
  f: 'Chave Torx, espátula.',
  pre: 'A fechadura sai com o forro da porta fora.',
  d: ['Tire o forro e o plástico de vedação.', 'Solte os cabos da maçaneta interna e externa.', 'Desligue o conector e solte os parafusos na borda da porta.'],
  m: ['Cabos encaixados, conector travado.', 'Teste com a porta aberta antes de fechar (para não trancar fora), inclusive a abertura pela chave presencial; regule o batente.']
});
M('retrovisores', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Segure o espelho por fora antes de soltar a última porca.',
  d: ['Tire o acabamento triangular por dentro (às vezes junto com o forro da porta).', 'Desligue o conector (espelho, rebatimento, seta).', 'Solte as porcas e tire.'],
  m: ['Vedação no lugar, porcas leves, conector travado; teste regulagem, rebatimento e seta.']
});
M('tampa_tras', {
  f: 'Soquetes, chave de fenda pequena, ajudante.',
  pre: 'A tampa fica sustentada pelos amortecedores: tenha ajuda.',
  d: ['Tire o forro da tampa e desligue os conectores (faixa de luz, luz de freio, placa, câmera, limpador, desembaçador, fechadura).', 'Com a tampa apoiada, solte os amortecedores dos pinos.', 'Solte as porcas das dobradiças e tire a tampa.'],
  m: ['Dobradiças na marca, amortecedores encaixados.', 'Frestas iguais com as lanternas, batente regulado e borracha vedando.']
});
M('dobr_capo', { f: 'Soquetes.', pre: 'Tire o capô.', d: ['Solte os parafusos da dobradiça na carroceria.'], m: ['Dobradiça nova, graxa no pino, capô regulado.'] });
M('dobr_tampa', { f: 'Soquetes, espátula.', pre: 'Tire a tampa traseira.', d: ['Abaixe o forro do teto atrás.', 'Solte as porcas da dobradiça.'], m: ['Dobradiça com vedação nova (água pinga aqui), tampa regulada.'] });
M('amort_tampa', {
  f: 'Chave de fenda pequena, ajudante.',
  pre: 'Apoie a tampa aberta com um cabo de vassoura ou com alguém segurando.',
  d: ['Levante a trava de mola de cada ponta com a chave de fenda.', 'Puxe o amortecedor dos pinos esféricos.'],
  m: ['Amortecedor novo com a haste para o lado do manual (em geral para baixo).', 'Encaixe nos pinos até a trava fechar. Troque os dois juntos.']
});
M('fech_tampa', {
  f: 'Chave Torx, espátula.',
  pre: 'Tire o forro de baixo da tampa.',
  d: ['Desligue o conector da fechadura e do botão de abrir.', 'Solte os parafusos da fechadura.'],
  m: ['Fechadura no lugar, batente regulado.', 'Teste a abertura pelo botão, pela chave e a abertura de emergência por dentro.']
});
M('fech_capo', {
  f: 'Soquetes.',
  pre: 'Marque a posição antes.',
  d: ['Solte o cabo da fechadura.', 'Desligue o sensor de capô aberto, se houver.', 'Solte os parafusos e tire.'],
  m: ['Fechadura na marca, cabo regulado.', 'Teste a trava de segurança antes de rodar.']
});
M('maq_vidro', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Tire o forro da porta.',
  d: ['Com o botão ligado provisoriamente, posicione o vidro e solte os parafusos.', 'Prenda o vidro em cima com fita.', 'Desligue o conector e solte os parafusos da máquina; tire pela abertura.'],
  m: ['Máquina parafusada, vidro de volta nos trilhos.', VIDRO]
});
M('maq_vidro_tras', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Tire o forro da porta traseira.',
  d: ['Posicione o vidro e solte os parafusos.', 'Prenda o vidro com fita.', 'Desligue o conector e tire a máquina.'],
  m: ['Máquina parafusada e vidro nos trilhos.', VIDRO]
});
M('para_brisa', {
  f: 'Fio de corte, ventosas, primer e cola de poliuretano.',
  pre: 'Serviço de instalador: o vidro é colado e faz parte da rigidez da carroceria.',
  d: ['Tire os limpadores, a grade do torpedo e o retrovisor interno.', 'Corte o cordão de cola em volta.', 'Tire o vidro com ventosas.'],
  m: ['Primer e cordão novo contínuo.', 'Espere a cura antes de rodar. ' + ADAS]
});
M('vidro_tras', {
  f: 'Fio de corte, ventosas, primer e cola.',
  pre: 'Colado na tampa traseira.',
  d: ['Tire o limpador e solte os conectores do desembaçador.', 'Corte o cordão e tire o vidro.'],
  m: ['Primer e cordão novo, conectores do desembaçador de volta.', 'Espere a cura antes de bater a tampa.']
});
M('vidros_laterais', {
  f: 'Fio de corte, ventosas, primer e cola.',
  pre: 'O vidro lateral de trás é fixo e colado.',
  d: ['Tire o acabamento interno.', 'Corte o cordão por dentro e empurre o vidro para fora.'],
  m: ['Primer e cordão novo, acabamento de borracha no lugar.']
});
M('vidros_portas', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Tire o forro da porta.',
  d: ['Posicione o vidro até os parafusos aparecerem e solte.', 'Tire o vidro por cima, inclinando.'],
  m: ['Vidro nos trilhos, parafusos leves.', VIDRO]
});
M('vidros_portas_tras', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Tire o forro da porta traseira.',
  d: ['Posicione o vidro e solte os parafusos.', 'Tire o vidro por cima.'],
  m: ['Vidro nos trilhos e parafusos leves.', VIDRO]
});
M('para_choque_d', {
  f: 'Soquetes, chave Philips, espátula.',
  pre: 'Cuidado com as guias laterais sob os faróis e com os conectores (sensores, alto-falante de aviso, luzes).',
  d: ['Abra o capô e solte as fixações de cima.', 'Solte os parafusos das caixas de roda e os de baixo.', 'Puxe as pontas para fora das guias e tire para a frente, desligando o que houver.'],
  m: ['Pontas nas guias, fixações todas de volta.', 'Frestas iguais com os faróis e os para-lamas. ' + ADAS]
});
M('para_choque_t', {
  f: 'Soquetes, chave Philips, espátula.',
  pre: 'Abra a tampa traseira. Os sensores de estacionamento ficam no para-choque.',
  d: ['Solte as fixações de cima, das caixas de roda e de baixo.', 'Puxe as pontas das guias e tire para trás, desligando o conector dos sensores.'],
  m: ['Pontas nas guias, fixações de volta, sensores ligados.', 'Frestas iguais com as lanternas; teste os sensores.']
});
M('grade_inf', {
  f: 'Chave de fenda, espátula.',
  pre: 'Com o para-choque fora fica mais fácil. A frente do Dolphin é fechada: o ar entra só por baixo.',
  d: ['Solte as presilhas por trás do para-choque.', 'Empurre a grade para fora.'],
  m: ['Grade encaixada; telinha inteira protege o radiador e o trocador da bomba de calor de pedras.']
});
M('grade_torpedo', {
  f: 'Soquete do braço, chave de fenda.',
  pre: 'Marque a posição dos braços do limpador.',
  d: ['Tire os braços do limpador.', 'Solte as presilhas e puxe a grade da borda do para-brisa.'],
  m: ['Grade encaixada na borda, presilhas firmes, braços na marca.', 'Dreno do torpedo limpo: folha acumulada faz entrar água na cabine e perto da eletrônica.']
});
M('caixas_roda', {
  f: 'Chave de fenda, alicate de presilha.',
  pre: RODA,
  d: ['Solte as presilhas e os parafusos do forro.', 'Tire o forro (no lado direito dianteiro, cuidado com os cabos da porta de recarga atrás dele).'],
  m: ['Forro inteiro, presilhas novas.']
});
M('borrachas', {
  f: 'Espátula plástica.',
  pre: 'As borrachas encaixam na aba das aberturas.',
  d: ['Puxe a borracha da aba, começando pela emenda.'],
  m: ['Borracha nova empurrada na aba com a palma, emenda embaixo.', 'Teste com água: vazamento na tampa traseira costuma ser borracha, lanterna ou cordão do vidro.']
});
M('frisos', {
  f: 'Espátula plástica, fita dupla-face automotiva, soprador de ar quente.',
  pre: 'Os frisos ficam na linha dos vidros, presos por presilhas e fita.',
  d: ['Aqueça de leve para amolecer a fita.', 'Solte com a espátula, a partir de uma ponta, sem riscar a pintura.'],
  m: ['Superfície limpa e desengordurada, fita nova.', 'Friso alinhado com a linha dos vidros e pressionado por igual.']
});
