/* ===== Nissan Tiida 1.8 S 2010/2011: código e como desmontar e montar cada peça (elétrica, transmissão, freios, suspensão, direção, interior e carroceria) ===== */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['tiida-c11'] = window.CAR_PROC['tiida-c11'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const RODA = 'Com o carro no chão, afrouxe as porcas de roda; levante, apoie em cavalete e tire a roda.';
const SANGRIA = 'Sangria com fluido DOT 3 novo, de frasco fechado, na ordem do manual Nissan (em geral começando pela roda traseira direita), até sair fluido sem bolhas. Se entrou ar na unidade do ABS, a sangria completa pede scanner.';
const PEDAL = 'Bombeie o pedal até ficar firme antes de andar.';
const ALINHA = 'Faça o alinhamento da direção depois.';
const SRS = 'Airbag: desligue o negativo da bateria e espere pelo menos 3 minutos antes de mexer. Nunca meça o airbag com multímetro; guarde o módulo com a bolsa para cima.';
const EPS = 'A direção elétrica não tem óleo. Depois de soltar a coluna ou o motor da direção, confira se a luz da direção apagou e, se o manual pedir, calibre o ponto central com scanner.';
const VIDRO = 'Depois de religar a bateria ou trocar a máquina, refaça a inicialização do vidro automático, se o carro tiver: suba até o fim e segure o botão alguns segundos.';
const EMB = 'Sangria da embreagem: o reservatório é o mesmo do freio (DOT 3); abra o bujão do cilindro auxiliar com o pedal pisado e feche antes de soltar, até o pedal voltar firme.';
const FORRO = 'Espátula plástica rente a cada presilha; presilhas novas à mão, porque algumas quebram.';
const FUNILARIA = 'Peça soldada na estrutura: troca é serviço de funilaria (furar ou cortar os pontos de solda, soldar a peça nova, selar as emendas e pintar). Confira as medidas da carroceria depois de batida forte.';

/* ---------- ELÉTRICA ---------- */
M('bateria', {
  f: 'Chave 10 mm, escova de terminal, graxa de terminal.',
  pre: 'Ignição desligada e chave fora. Tenha o código do rádio se ele pedir.',
  d: ['Solte primeiro o negativo (preto).', 'Depois o positivo (vermelho), com a capa protetora.', 'Solte o grampo de fixação.', 'Tire a bateria para cima, sem inclinar.'],
  m: ['Bandeja limpa, bateria da mesma capacidade e polaridade.', 'Grampo firme, positivo primeiro e negativo por último.', 'Deixe o motor em lenta alguns minutos para a central reaprender; ajuste relógio e rádio.']
});
M('cabos_bat', {
  f: 'Chaves 10 e 12 mm, escova.',
  pre: BAT,
  d: ['Solte os terminais da bateria (negativo primeiro).', 'Siga o cabo até o motor de partida, a caixa de fusíveis ou o aterramento e solte as porcas.', 'Tire o cabo das presilhas.'],
  m: ['Contatos limpos, porcas firmes, cabo longe do escape e de peças móveis.', 'Aterramentos do motor e da carroceria bem apertados: mau contato causa partida fraca e falhas elétricas.']
});
M('caixa_fus_motor', {
  f: 'Pinça de fusível (vem na tampa), chave 10 mm.',
  pre: BAT + ' Use fusíveis da mesma amperagem.',
  d: ['Abra a tampa (o mapa dos fusíveis está nela).', 'Para trocar a caixa: desligue os conectores de baixo e solte o suporte.'],
  m: ['Conectores travados e tampa fechada contra água.', 'Fusível que queima de novo é curto: procure a causa.']
});
M('caixa_fus_painel', {
  f: 'Pinça de fusível.',
  pre: 'Ignição desligada.',
  d: ['Tire a tampinha sob o painel, do lado do motorista.', 'Troque o fusível pela mesma amperagem.'],
  m: ['Tampa de volta. Para trocar a caixa, desligue a bateria e os conectores antes.']
});
M('bcm', {
  f: 'Soquete 10 mm, chave Philips.',
  pre: BAT + ' Um módulo novo pode precisar de programação (chaves, configuração do carro).',
  d: ['Tire o acabamento de baixo do painel do lado do motorista.', 'Desligue os conectores e solte o módulo.'],
  m: ['Conectores secos e travados.', 'Programe se for módulo novo e teste luzes, travas, vidros e limpadores.']
});
M('alternador', {
  f: 'Soquetes, chave para o tensor, multímetro.',
  pre: BAT,
  d: ['Tire a correia de acessórios.', 'Desligue o conector e o cabo positivo do alternador.', 'Solte os 2 parafusos e tire o alternador por cima ou por baixo.'],
  m: ['Parafusos no torque, cabo e conector firmes.', 'Correia de volta. Com o motor ligado, a bateria deve marcar cerca de 13,8 a 14,5 V.']
});
M('motor_partida', {
  f: 'Soquetes, extensão.',
  pre: BAT,
  d: ['Tire a caixa do filtro e a bateria se atrapalharem.', 'Desligue o cabo grosso e o fio do solenoide.', 'Solte os 2 parafusos na carcaça do câmbio e tire o motor de partida.'],
  m: ['Parafusos no torque, cabos firmes (o grosso com a capa).', 'Teste a partida com a embreagem pisada.']
});
M('chicote', {
  f: 'Chaves variadas, fita de chicote, limpa-contato.',
  pre: BAT,
  d: ['Fotografe a passagem e os conectores antes.', 'Destrave cada conector pela trava, sem puxar pelos fios.', 'Solte as presilhas.'],
  m: ['Mesma passagem, longe de calor e de bordas cortantes.', 'Conectores secos e travados com clique; apague os códigos no scanner.']
});
M('farois', {
  f: 'Soquetes, chave Philips.',
  pre: 'O farol sai pela frente com o para-choque fora. Para trocar só a lâmpada, não precisa tirar o farol.',
  d: ['Tire o para-choque dianteiro.', 'Solte os 3 parafusos do farol.', 'Desligue os conectores e puxe o farol para a frente.'],
  m: ['Farol encaixado nas guias, parafusos leves.', 'Regule a altura do facho numa parede, com o carro vazio e os pneus calibrados.']
});
M('lanternas', {
  f: 'Soquete, chave Philips.',
  pre: 'As lanternas ficam nas colunas de trás, ao lado da tampa.',
  d: ['Abra a tampa traseira e tire a tampinha do acabamento lateral.', 'Solte as porcas por dentro.', 'Desligue o conector e puxe a lanterna para trás, soltando o pino de encaixe.'],
  m: ['Vedação boa: água no porta-malas costuma vir daqui.', 'Porcas leves e teste de todas as luzes (posição, freio, seta e ré).']
});
M('piscas_lat', {
  f: 'Chave de fenda pequena.',
  pre: 'O repetidor fica no para-lama dianteiro.',
  d: ['Empurre o repetidor para um lado e puxe pela outra ponta.', 'Gire o soquete e tire a lâmpada.'],
  m: ['Lâmpada nova, soquete travado e repetidor encaixado.']
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
  d: ['Empurre a lente para o lado e puxe.', 'Troque a lâmpada.'],
  m: ['Lente encaixada; luz de placa apagada dá multa.']
});
M('buzina', {
  f: 'Soquete 10 mm.',
  pre: 'Fica atrás do para-choque dianteiro.',
  d: ['Tire a grade ou o para-choque para chegar.', 'Desligue o conector e solte a porca.'],
  m: ['Buzina no suporte, sem encostar em nada, e conector firme.']
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
  pre: 'O reservatório fica atrás do para-choque dianteiro; o bocal fica no cofre.',
  d: ['Esvazie o reservatório.', 'Tire o forro da caixa de roda ou o para-choque.', 'Desligue as bombas e as mangueiras (uma vai até a tampa traseira) e solte o reservatório.'],
  m: ['Mangueiras firmes, bombas com vedação nova.', 'Água com limpador próprio; nada de detergente.']
});
M('ign_chave', {
  f: 'Chaves Torx, chave Philips.',
  pre: SRS + ' Comutador novo ou antena nova podem pedir programação das chaves (imobilizador).',
  d: ['Tire as capas da coluna.', 'Desligue os conectores do comutador e da antena do imobilizador.', 'Solte o comutador (alguns têm parafusos de cabeça quebrável e pedem broca).'],
  m: ['Comutador e antena firmes, conectores travados.', 'Programe as chaves se for o caso e teste a partida.']
});
M('comutadores', {
  f: 'Chave Philips, Torx.',
  pre: SRS,
  d: ['Tire o volante (veja volante) e as capas da coluna.', 'Desligue os conectores e solte os comutadores.'],
  m: ['Comutadores encaixados, conectores firmes; teste setas, faróis, limpadores e o retorno da seta.']
});

/* ---------- TRANSMISSÃO ---------- */
M('cambio', {
  f: 'Macaco de transmissão, suporte de motor, soquetes, torquímetro.',
  pre: BAT + ' ' + ELEV + ' Drene o óleo do câmbio.',
  d: ['Tire a bateria, a bandeja e a caixa do filtro.', 'Solte os cabos de engate, o cilindro auxiliar da embreagem (sem abrir o tubo), o motor de partida e o conector da ré.', 'Tire os semieixos.',
    'Apoie o motor por cima ou por baixo e o câmbio no macaco.', 'Solte o coxim do câmbio e os parafusos câmbio–motor e afaste o câmbio reto até o eixo sair do disco.'],
  m: ['Disco centralizado e eixo-piloto com uma pitada de graxa nas estrias.', 'Câmbio reto no motor, sem pendurar no eixo; parafusos no torque.', 'Óleo do tipo indicado até a borda do furo de abastecimento; regule os cabos e teste todas as marchas.']
});
M('diferencial', {
  f: 'Bancada, extratores, retentores.',
  pre: 'O diferencial fica dentro do câmbio: serviço de bancada.',
  d: ['Tire o câmbio e abra a carcaça.', 'Tire o diferencial e os rolamentos.'],
  m: ['Rolamentos e retentores novos, folgas e pré-carga do manual.', 'Carcaça com cola nova e óleo novo.']
});
M('embreagem', {
  f: 'Centralizador de disco, soquetes, torquímetro.',
  pre: 'Sai com o câmbio fora. Troque disco, platô e rolamento juntos.',
  d: ['Tire o câmbio.', 'Solte os 6 parafusos do platô em cruz, aos poucos.', 'Tire platô e disco.'],
  m: ['Volante limpo (sem óleo), disco com o lado certo para o volante.', 'Centralize o disco e aperte o platô em cruz.', 'Câmbio de volta; sangre a embreagem se precisar. ' + EMB]
});
M('rol_emb', {
  f: 'As mesmas da embreagem.',
  pre: 'Sai com o câmbio fora.',
  d: ['Tire o câmbio.', 'Solte o rolamento do garfo e tire.'],
  m: ['Rolamento novo, graxa leve no guia e no garfo.', 'Câmbio de volta e teste o pedal.']
});
M('cil_emb_mestre', {
  f: 'Chaves de linha, soquetes, seringa.',
  pre: 'O reservatório é o do freio: tire fluido com seringa para não escorrer.',
  d: ['Solte o tubo do cilindro e tampe.', 'Solte o pino do pedal por dentro.', 'Solte as porcas no corta-fogo e tire o cilindro.'],
  m: ['Cilindro novo, tubo firme, pino com trava.', EMB]
});
M('cil_emb_aux', {
  f: 'Chave de linha, soquete, mangueirinha transparente.',
  pre: 'Fica no câmbio.',
  d: ['Solte o tubo e tampe.', 'Solte os 2 parafusos e tire o cilindro.'],
  m: ['Cilindro com a haste no garfo, parafusos firmes, tubo apertado.', EMB]
});
M('tubo_emb', {
  f: 'Chaves de linha.',
  pre: 'Proteja a pintura: fluido de freio estraga tinta.',
  d: ['Solte as duas pontas e as presilhas.', 'Tire o tubo sem entortar.'],
  m: ['Tubo novo com as pontas certas, presilhas no lugar.', EMB]
});
M('pedal_emb', {
  f: 'Soquetes, chave de boca.',
  pre: 'Sob o painel, do lado do motorista.',
  d: ['Solte o pino do cilindro-mestre da embreagem.', 'Solte o interruptor do pedal e a mola.', 'Solte o eixo e tire o pedal.'],
  m: ['Buchas lubrificadas, pino com trava.', 'Regule a altura e a folga do pedal pelo manual e confira o interruptor (a partida só funciona com a embreagem pisada).']
});
M('semieixos', {
  f: 'Soquete da porca do cubo, alavanca, extrator de pivô, retentor do câmbio.',
  pre: RODA + ' Drene o óleo do câmbio se for tirar o semieixo esquerdo.',
  d: ['Com o carro no chão, solte a porca do cubo (afrouxe antes de levantar).', 'Solte o terminal de direção e o pivô da bandeja.', 'Afaste a manga e puxe o semieixo do cubo.', 'Puxe a ponta do câmbio com alavanca, sem danificar o retentor.'],
  m: ['Retentor novo e anel trava novo na ponta do câmbio.', 'Semieixo encaixado até o fim, pivô e terminal de volta.', 'Porca do cubo nova, aperto final com o carro no chão. Complete o óleo do câmbio.']
});
M('cabos_cambio', {
  f: 'Chaves, alicate de trava.',
  pre: 'Os cabos vão da alavanca até o câmbio.',
  d: ['Solte as pontas no câmbio (travas).', 'Tire o console e solte na alavanca.', 'Solte as presilhas e puxe pelo corta-fogo.'],
  m: ['Cabos sem dobras, passa-cabo vedado.', 'Regule pelo manual e teste as 6 marchas e a ré.']
});
M('alavanca', {
  f: 'Chaves, espátula plástica.',
  pre: 'A alavanca fica sob o console.',
  d: ['Tire a manopla e a coifa.', 'Tire o console e solte os cabos da alavanca.', 'Solte os parafusos da base.'],
  m: ['Buchas novas se houver folga.', 'Cabos regulados e teste de todas as marchas.']
});

/* ---------- FREIOS ---------- */
M('pedal_freio', {
  f: 'Soquetes, chave de boca.',
  pre: 'Sob o painel.',
  d: ['Solte o pino da haste do servo.', 'Desligue o interruptor da luz de freio.', 'Solte o eixo e tire o pedal.'],
  m: ['Buchas lubrificadas, pino com trava.', 'Regule a altura do pedal e o interruptor (luz de freio só com o pedal pisado).']
});
M('servo', {
  f: 'Soquetes, chave de linha.',
  pre: 'O servo sai com o cilindro-mestre afastado.',
  d: ['Solte o cilindro-mestre do servo sem abrir os tubos, se der, e afaste.', 'Solte a mangueira de vácuo.', 'Por dentro, solte o pino do pedal e as porcas do servo; tire pelo cofre.'],
  m: ['Servo novo com a haste regulada, porcas firmes.', 'Mangueira de vácuo com válvula na posição certa.', PEDAL]
});
M('cil_mestre', {
  f: 'Chaves de linha, soquetes, seringa.',
  pre: 'Proteja a pintura: fluido de freio estraga tinta.',
  d: ['Tire o fluido do reservatório com seringa e desligue o sensor de nível.', 'Solte os tubos (para o ABS) e tampe.', 'Solte as porcas e tire o cilindro.'],
  m: ['Cilindro novo sangrado na bancada.', 'Tubos firmes e reservatório no nível.', SANGRIA + ' ' + PEDAL]
});
M('reserv_freio', {
  f: 'Seringa, chave de fenda.',
  pre: 'O reservatório serve o freio e a embreagem.',
  d: ['Tire o fluido com seringa.', 'Desligue o sensor de nível e puxe o reservatório das borrachas.'],
  m: ['Borrachas novas, reservatório encaixado.', 'Fluido DOT 3 até MAX. Troca do fluido a cada 2 anos.']
});
M('abs', {
  f: 'Chaves de linha, soquetes, scanner com função de sangria do ABS.',
  pre: BAT + ' Proteja a pintura. A posição no modelo é aproximada.',
  d: ['Desligue o conector do módulo, levantando a trava.', 'Marque e solte os tubos, tampando cada furo na hora.', 'Solte as porcas do suporte e tire a unidade.'],
  m: ['Unidade nova chega cheia de fluido: tire os tampões só na hora de ligar cada tubo, no furo certo.', 'Porcas no torque e conector travado.', SANGRIA + ' Apague os códigos e teste a luz do ABS.']
});
M('sens_roda', {
  f: 'Soquete, limpa-contato.',
  pre: RODA,
  d: ['Siga o cabo até o conector e solte.', 'Solte o parafuso do sensor e puxe girando.', 'Solte as presilhas do cabo.'],
  m: ['Furo e anel dentado limpos, sem limalha.', 'Sensor encaixado e cabo preso longe da roda; apague os códigos e teste a luz do ABS.']
});
M('tubos_freio', {
  f: 'Chaves de linha, curvador de tubo.',
  pre: ELEV + ' Proteja a pintura.',
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
  pre: RODA + ' Troque sempre os dois lados juntos.',
  d: ['Solte os 2 pinos-guia e levante a pinça, sem pendurar pelo flexível nem pelo cabo do sensor do ABS.', 'Tire as pastilhas e as molinhas.', 'Recue o pistão devagar, de olho no reservatório.'],
  m: ['Pastilhas novas com as molas e os calços.', 'Pinos engraxados e pinça de volta.', PEDAL + ' Amacie com freadas leves nos primeiros 200 km.']
});
M('discos', {
  f: 'Soquetes, chave de impacto manual, relógio comparador.',
  pre: RODA,
  d: ['Tire a pinça e pendure com arame.', 'Solte o suporte da pinça.', 'Tire o disco (se estiver preso, bata de leve no cubo).'],
  m: ['Cubo limpo, disco novo sem óleo.', 'Suporte e pinça no torque; pastilhas novas com disco novo.', PEDAL]
});
M('tambores', {
  f: 'Martelo de borracha, parafusos extratores.',
  pre: RODA + ' Freio de mão solto.',
  d: ['Puxe o tambor; se estiver preso, use os parafusos nos furos.', 'Recue a regulagem automática se as sapatas prenderem.'],
  m: ['Tambor limpo, sem óleo.', 'Puxe o freio de mão várias vezes para regular e confira que a roda gira livre.']
});
M('sapatas', {
  f: 'Alicate de mola de freio, chave de fenda.',
  pre: RODA + ' Troque sempre os dois lados juntos.',
  d: ['Tire o tambor.', 'Fotografe as molas, solte as molas e as presilhas.', 'Solte o cabo do freio de mão e tire as sapatas.'],
  m: ['Sapatas novas, molas na mesma posição, regulador limpo.', 'Tambor de volta e regule com o freio de mão.', PEDAL]
});
M('freio_mao', {
  f: 'Chaves, alicate.',
  pre: 'A regulagem é na alavanca, sob o console.',
  d: ['Tire o console traseiro.', 'Solte a regulagem e os cabos.', 'Por baixo, solte os cabos das rodas.'],
  m: ['Cabos novos sem dobra.', 'Regule pelos cliques do manual; a roda tem que girar livre com a alavanca solta.']
});
M('mang_vacuo', {
  f: 'Alicate de abraçadeira.',
  pre: 'Motor desligado.',
  d: ['Solte a mangueira do coletor e do servo.'],
  m: ['Mangueira e válvula de retenção na posição certa.', 'Pedal duro com o motor ligado indica vazamento aqui.']
});

/* ---------- SUSPENSÃO E RODAS ---------- */
M('amort_diant', {
  f: 'Compressor de molas, soquetes, torquímetro.',
  pre: RODA + ' Troque os dois lados juntos.',
  d: ['Solte a barra estabilizadora do amortecedor, o flexível e o cabo do sensor do ABS do suporte.', 'Solte os 2 parafusos da manga.', 'Abra o capô e solte as 3 porcas de cima.', 'Tire o conjunto e desmonte com o compressor.'],
  m: ['Amortecedor novo com batente, coifa e coxim conferidos.', 'Porcas de cima e da manga no torque.', 'Aperto final das articulações com o carro no chão. ' + ALINHA]
});
M('molas_diant', {
  f: 'Compressor de molas.',
  pre: 'A mola sai com o amortecedor.',
  d: ['Tire o conjunto do amortecedor.', 'Comprima a mola com o compressor e solte a porca da haste.'],
  m: ['Mola nova na posição certa nos pratos.', 'Solte o compressor devagar.', ALINHA]
});
M('coxins_amort', {
  f: 'Compressor de molas, soquetes.',
  pre: 'O coxim sai com o amortecedor.',
  d: ['Tire o conjunto do amortecedor.', 'Comprima a mola e tire o coxim e o rolamento.'],
  m: ['Coxim e rolamento novos.', 'Barulho de "toc" em lombada e esterço duro indicam coxim gasto.']
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
  f: 'Suporte de motor, macaco de transmissão, soquetes.',
  pre: ELEV + ' Apoie o motor antes.',
  d: ['Solte bandejas, barra estabilizadora, caixa de direção e o tirante do motor.', 'Apoie o subchassi e solte os 4 parafusos.', 'Baixe devagar.'],
  m: ['Subchassi alinhado pelos furos-guia.', 'Parafusos no torque.', ALINHA]
});
M('mangas', {
  f: 'Soquetes, extrator de pivô, torquímetro.',
  pre: RODA,
  d: ['Tire a pinça, o disco e o sensor do ABS.', 'Solte a porca do cubo, o terminal de direção e o pivô.', 'Solte os 2 parafusos do amortecedor e tire a manga.'],
  m: ['Rolamento novo se tiver ruído ou folga.', 'Tudo no torque, porca do cubo nova.', ALINHA]
});
M('eixo_tras', {
  f: 'Macaco de transmissão, soquetes, torquímetro.',
  pre: ELEV + ' Solte o freio de mão.',
  d: ['Tire as rodas, desligue os sensores do ABS e solte os flexíveis de freio e os cabos do freio de mão.', 'Apoie o eixo e solte os amortecedores embaixo.', 'Baixe o eixo até as molas soltarem.', 'Solte os parafusos das buchas e tire o eixo.'],
  m: ['Buchas novas se estiverem rachadas.', 'Aperto final das buchas e dos amortecedores com o carro no chão.', SANGRIA]
});
M('buchas_eixo', {
  f: 'Prensa e ferramenta de bucha, soquetes.',
  pre: ELEV,
  d: ['Apoie o eixo e solte o parafuso da bucha.', 'Baixe o braço e extraia a bucha com a ferramenta.'],
  m: ['Bucha nova na posição certa (algumas têm lado).', 'Aperto final com o carro no chão.']
});
M('cubo_tras', {
  f: 'Soquetes, torquímetro.',
  pre: RODA,
  d: ['Tire o tambor.', 'Solte os parafusos do cubo por trás do espelho do freio.', 'Tire o cubo com o rolamento.'],
  m: ['Cubo novo no torque, anel do sensor do ABS limpo.', 'Tambor de volta e regule o freio de mão.']
});
M('amort_tras', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV + ' Troque os dois lados juntos.',
  d: ['Apoie o eixo com o macaco.', 'Solte o parafuso de baixo, no eixo.', 'Por dentro do porta-malas, tire o acabamento e solte as porcas de cima.', 'Tire o amortecedor.'],
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
  pre: 'Medida 185/65 R15. Troque aos pares, os novos atrás se só trocar dois.',
  d: ['Tire a roda.', 'Na borracharia, desmonte o pneu do aro.'],
  m: ['Pneu na mesma medida e índice de carga e velocidade.', 'Balanceamento, calibragem da etiqueta da porta e reaperto das porcas.']
});
M('rodas', {
  f: 'Chave de roda, torquímetro, macaco.',
  pre: 'Freio de mão puxado, marcha engatada e carro no plano.',
  d: ['Tire a calota.', 'Com o carro no chão, afrouxe as 4 porcas.', 'Levante pelo ponto de apoio, tire as porcas e a roda.'],
  m: ['Porcas à mão, em cruz.', 'Desça o carro e dê o aperto final (≈ 113 N·m).', 'Reaperte depois de uns 50 km.']
});
M('calotas', {
  f: 'Nenhuma ou chave de fenda com pano.',
  pre: 'A calota é de pressão.',
  d: ['Puxe pela borda, com cuidado para não quebrar as presilhas.'],
  m: ['Alinhe o recorte da calota com o bico do pneu e encaixe batendo com a palma da mão.']
});
M('estepe', {
  f: 'Nenhuma.',
  pre: 'Fica no poço do porta-malas, sob o assoalho.',
  d: ['Levante o assoalho do porta-malas.', 'Solte o parafuso central e tire o estepe.'],
  m: ['Estepe calibrado (confira de mês em mês), parafuso firme.']
});
M('macaco', {
  f: 'Nenhuma.',
  pre: 'Fica no porta-malas, junto ao estepe.',
  d: ['Levante o assoalho do porta-malas.', 'Solte o macaco do suporte.'],
  m: ['Macaco fechado e preso para não bater. Use só nos pontos de apoio da soleira.']
});

/* ---------- DIREÇÃO ---------- */
M('volante_dir', {
  f: 'Chave Torx, soquete, extrator de volante.',
  pre: SRS + ' Rodas retas.',
  d: ['Tire o módulo do airbag (veja airbag) e desligue o conector.', 'Marque o volante no eixo e solte a porca central.', 'Puxe o volante (com extrator se estiver preso).'],
  m: ['Cabo espiral centrado, volante na marca.', 'Porca no torque, airbag de volta, ligue a bateria com ninguém na frente do volante.', EPS]
});
M('coluna', {
  f: 'Soquetes, chave Torx.',
  pre: SRS + ' Rodas retas e volante travado.',
  d: ['Tire o volante, as capas e os comutadores.', 'Marque e solte a junta do pinhão no corta-fogo.', 'Desligue os conectores do motor da direção elétrica e solte as porcas sob o painel; a coluna sai com o motor.'],
  m: ['Junta na marca, parafuso no torque.', 'Conectores travados.', EPS]
});
M('eps', {
  f: 'Soquetes, chave Torx, scanner.',
  pre: SRS + ' O motor e o módulo da direção elétrica ficam na coluna, sob o painel; em muitos casos a peça vem como conjunto com a coluna.',
  d: ['Tire os acabamentos de baixo do painel.', 'Desligue os conectores do motor e do módulo.', 'Siga a remoção da coluna se o motor não sair sozinho.'],
  m: ['Conectores secos e travados.', EPS]
});
M('caixa_dir', {
  f: 'Soquetes, extrator de terminal, torquímetro.',
  pre: ELEV + ' Rodas retas e volante travado.',
  d: ['Solte os terminais das mangas.', 'Marque e solte a junta do pinhão.', 'Solte as braçadeiras da caixa no subchassi e tire pelo lado.'],
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
  d: ['Tire o volante, as capas da coluna, o console, o rádio, o quadro e o porta-luvas.', 'Tire o airbag do passageiro e os acabamentos das colunas.', 'Solte os parafusos do painel e puxe com ajuda, desligando os conectores.'],
  m: ['Conectores todos travados antes de apertar.', 'Painel nos pinos-guia, parafusos de volta.', 'Ligue a bateria e confira a luz do airbag apagar.']
});
M('quadro', {
  f: 'Espátula plástica, chave Philips.',
  pre: BAT,
  d: ['Solte a moldura do quadro com a espátula.', 'Solte os parafusos e puxe o quadro, desligando o conector.'],
  m: ['Conector travado e moldura encaixada.', 'Quadro novo pode precisar de programação da quilometragem.']
});
M('radio', {
  f: 'Chaves de remoção ou chave Philips, espátula.',
  pre: 'Tenha o código do rádio, se houver.',
  d: ['Solte a moldura.', 'Solte os parafusos e puxe o rádio, desligando conectores e a antena.'],
  m: ['Conectores e antena firmes, rádio encaixado. Digite o código se pedir.']
});
M('airbag_mot', {
  f: 'Chave Torx.',
  pre: SRS,
  d: ['Espere 3 minutos com a bateria desligada.', 'Solte os 2 parafusos Torx por trás do volante.', 'Puxe o módulo, destrave e desligue o conector.'],
  m: ['Conector travado com clique.', 'Parafusos no torque, ligue a bateria com ninguém na frente.', 'Confira a luz do airbag apagar.']
});
M('airbag_pass', {
  f: 'Soquetes, espátula.',
  pre: SRS,
  d: ['Tire o porta-luvas.', 'Desligue o conector do airbag.', 'Solte as porcas e tire o módulo por baixo ou com o painel fora.'],
  m: ['Conector travado.', 'Ligue a bateria e confira a luz do airbag.']
});
M('srs', {
  f: 'Soquetes.',
  pre: SRS + ' Módulo novo pode exigir programação.',
  d: ['Tire o console central.', 'Desligue o conector e solte os parafusos.'],
  m: ['Módulo com a seta para a frente, parafusos no torque.', 'Apague os códigos com scanner; módulo de carro batido com airbag aberto é trocado.']
});
M('cabo_espiral', {
  f: 'Chave Torx.',
  pre: SRS + ' Rodas retas.',
  d: ['Tire o airbag, o volante e as capas.', 'Solte o cabo espiral sem girar.'],
  m: ['Cabo novo vem travado no centro; tire a trava só depois de montado.', 'Cabo descentralizado rompe na primeira esterçada.']
});
M('console', {
  f: 'Espátula plástica, chave Philips.',
  pre: 'Nada.',
  d: ['Tire a coifa da alavanca.', 'Solte os parafusos e as presilhas.', 'Levante o console desligando os conectores.'],
  m: ['Conectores e presilhas no lugar.']
});
M('bancos_diant', {
  f: 'Soquetes, Torx.',
  pre: BAT + ' Se o banco tiver airbag lateral ou sensor de cinto, siga o cuidado do airbag.',
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
  pre: 'Item de segurança. Cinto que travou numa batida é trocado.',
  d: ['Tire os acabamentos das colunas.', 'Solte a ancoragem de cima, a de baixo e o retrator.'],
  m: ['Ancoragens no torque.', 'Teste o travamento puxando rápido.']
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
  d: ['Tire o tampão, o assoalho e os acabamentos laterais, soltando as presilhas.'],
  m: ['Presilhas no lugar; confira se não há água no poço do estepe.']
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
  d: ['Depois de batida, meça os pontos de referência em gabarito.', 'Peças amassadas são puxadas ou trocadas na funilaria.'],
  m: ['Medidas dentro da tolerância antes de montar suspensão e lataria. Alinhamento depois.']
});
M('corta_fogo', {
  f: 'Equipamento de funilaria.',
  pre: FUNILARIA,
  d: ['Só se troca em reparo estrutural, com o cofre e o painel desmontados.'],
  m: ['Passa-cabos e vedações de volta para não entrar água nem barulho.']
});
M('soleiras', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Fure os pontos de solda da aba de baixo e da borda das portas.', 'Tire a soleira.'], m: ['Soleira nova soldada, emendas seladas e proteção antiferrugem por dentro.'] });
M('colunas', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Coluna amassada é reparada ou cortada e substituída em seção, pelo manual de reparo.'], m: ['Soldas nos pontos originais, medidas conferidas e vedação.'] });
M('teto', { f: 'Equipamento de funilaria, para-brisa e vidro traseiro fora.', pre: FUNILARIA, d: ['Tire o forro do teto, o para-brisa e a tampa.', 'Fure os pontos de solda nas bordas.', 'Tire o teto.'], m: ['Teto novo soldado e selado, vidros colados com cordão novo.'] });
M('laterais', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Tire lanterna, vidro lateral, para-choque e acabamentos.', 'Fure ou corte os pontos de solda.', 'Tire a lateral.'], m: ['Lateral nova soldada, emendas seladas, vidro lateral colado de novo.'] });
M('painel_tras', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Tire o para-choque, as lanternas e os acabamentos.', 'Fure os pontos de solda e tire o painel.'], m: ['Painel novo soldado e selado; confira a vedação do porta-malas.'] });
M('travessa_frontal', {
  f: 'Soquetes.',
  pre: 'A travessa é parafusada: segura radiador, condensador, faróis e a fechadura do capô.',
  d: ['Tire o para-choque, a grade e os faróis.', 'Apoie radiador e condensador sem abrir o circuito do ar.', 'Solte os parafusos das pontas e tire a travessa.'],
  m: ['Travessa nos pinos-guia, fechadura do capô regulada.', 'Faróis regulados.']
});
M('viga_dianteira', { f: 'Soquetes.', pre: 'Atrás do para-choque dianteiro.', d: ['Tire o para-choque.', 'Solte os parafusos das pontas das longarinas.'], m: ['Viga nova se estiver amassada; parafusos no torque.'] });
M('viga_traseira', { f: 'Soquetes.', pre: 'Atrás do para-choque traseiro.', d: ['Tire o para-choque traseiro.', 'Solte os parafusos no painel traseiro.'], m: ['Viga no lugar, parafusos no torque.'] });
M('capo', {
  f: 'Soquetes, fita crepe, ajudante.',
  pre: 'Risque a posição das dobradiças.',
  d: ['Abra o capô, desligue a mangueira do lavador se houver.', 'Com ajuda, solte os 2 parafusos de cada dobradiça no capô.', 'Tire o capô.'],
  m: ['Parafusos na marca, frestas iguais dos dois lados.', 'Regule os batentes de borracha e a fechadura.']
});
M('paralamas', {
  f: 'Soquetes, espátula plástica.',
  pre: 'O para-lama é parafusado.',
  d: ['Tire o para-choque, o farol, o forro da caixa de roda e o repetidor.', 'Solte os parafusos de cima, da frente, de baixo e de trás.', 'Corte a massa das emendas e tire.'],
  m: ['Massa de vedação nas emendas, parafusos leves.', 'Frestas com capô e porta iguais antes do aperto final.']
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
  d: ['Tire o forro e o plástico de vedação.', 'Solte as varetas da maçaneta e do miolo.', 'Desligue o conector e solte os 3 parafusos na borda da porta.'],
  m: ['Varetas encaixadas, conector travado.', 'Teste com a porta aberta antes de fechar (para não trancar fora); regule o batente.']
});
M('retrovisores', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Segure o espelho por fora antes de soltar a última porca.',
  d: ['Tire o acabamento triangular por dentro.', 'Desligue o conector.', 'Solte as 3 porcas e tire.'],
  m: ['Vedação no lugar, porcas leves, conector travado.']
});
M('tampa_tras', {
  f: 'Soquetes, chave de fenda pequena, ajudante.',
  pre: 'A tampa é pesada e fica sustentada pelos amortecedores: tenha ajuda.',
  d: ['Tire o forro da tampa e desligue os conectores (luz de freio, placa, limpador, desembaçador).', 'Com a tampa apoiada, solte os amortecedores dos pinos.', 'Solte as porcas das dobradiças e tire a tampa.'],
  m: ['Dobradiças na marca, amortecedores encaixados.', 'Frestas iguais, batente regulado e borracha vedando.']
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
  pre: 'Tire o forro da tampa.',
  d: ['Desligue o conector e solte a vareta do miolo, se houver.', 'Solte os 2 parafusos da fechadura.'],
  m: ['Fechadura no lugar, batente regulado.', 'Teste a abertura elétrica e a manual por dentro.']
});
M('fech_capo', {
  f: 'Soquetes.',
  pre: 'Marque a posição antes.',
  d: ['Solte o cabo da fechadura.', 'Solte os 2 parafusos e tire.'],
  m: ['Fechadura na marca, cabo regulado.', 'Teste a trava de segurança antes de rodar.']
});
M('maq_vidro', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Tire o forro da porta.',
  d: ['Com o botão ligado provisoriamente, posicione o vidro e solte os 2 parafusos.', 'Prenda o vidro em cima com fita.', 'Desligue o conector e solte os parafusos da máquina; tire pela abertura.'],
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
  d: ['Tire os limpadores e a grade do torpedo.', 'Corte o cordão de cola em volta.', 'Tire o vidro com ventosas.'],
  m: ['Primer e cordão novo contínuo.', 'Espere a cura antes de rodar.']
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
  pre: 'Cuidado com as guias laterais sob os faróis.',
  d: ['Abra o capô e solte as fixações de cima.', 'Solte os parafusos das caixas de roda e os de baixo.', 'Puxe as pontas para fora das guias e tire para a frente, desligando o que houver.'],
  m: ['Pontas nas guias, fixações todas de volta.', 'Frestas iguais com os faróis e os para-lamas.']
});
M('para_choque_t', {
  f: 'Soquetes, chave Philips, espátula.',
  pre: 'Abra a tampa traseira.',
  d: ['Solte as fixações de cima, das caixas de roda e de baixo.', 'Puxe as pontas das guias e tire para trás.'],
  m: ['Pontas nas guias, fixações de volta.', 'Frestas iguais com as lanternas.']
});
M('grade', {
  f: 'Chave de fenda.',
  pre: 'Abra o capô.',
  d: ['Solte as 4 presilhas por trás.', 'Tire a grade para a frente.'],
  m: ['Presilhas encaixadas por igual.']
});
M('grade_inf', {
  f: 'Chave de fenda, espátula.',
  pre: 'Com o para-choque fora fica mais fácil.',
  d: ['Solte as presilhas por trás do para-choque.', 'Empurre a grade para fora.'],
  m: ['Grade encaixada; telinha inteira protege o condensador de pedras.']
});
M('grade_torpedo', {
  f: 'Soquete do braço, chave de fenda.',
  pre: 'Marque a posição dos braços do limpador.',
  d: ['Tire os braços do limpador.', 'Solte as presilhas e puxe a grade da borda do para-brisa.'],
  m: ['Grade encaixada na borda, presilhas firmes, braços na marca.', 'Dreno do torpedo limpo: folha acumulada faz entrar água na cabine.']
});
M('caixas_roda', {
  f: 'Chave de fenda, alicate de presilha.',
  pre: RODA,
  d: ['Solte as presilhas e os parafusos do forro.', 'Tire o forro.'],
  m: ['Forro inteiro, presilhas novas.']
});
M('borrachas', {
  f: 'Espátula plástica.',
  pre: 'As borrachas encaixam na aba das aberturas.',
  d: ['Puxe a borracha da aba, começando pela emenda.'],
  m: ['Borracha nova empurrada na aba com a palma, emenda embaixo.', 'Teste com água: vazamento na tampa traseira costuma ser borracha ou cordão do vidro.']
});
