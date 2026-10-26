/* ===== VW Gol G5 1.6 Power 2010/2011: código e como desmontar e montar cada peça (elétrica, transmissão, freios, suspensão, direção, interior e carroceria) ===== */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['gol-g5'] = window.CAR_PROC['gol-g5'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria (tenha o código do rádio à mão, se ele pedir).';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const RODA = 'Com o carro no chão, afrouxe os parafusos de roda; levante, apoie em cavalete e tire a roda.';
const SANGRIA = 'Sangria com fluido DOT 4 novo, de frasco fechado (confira a especificação na tampa do reservatório), na ordem do manual VW (em geral começando pela roda traseira direita), até sair fluido sem bolhas. Com a válvula equalizadora, sangre as rodas de trás com o carro apoiado nas rodas ou com a válvula aberta, como o manual indica.';
const PEDAL = 'Bombeie o pedal até ficar firme antes de andar.';
const ALINHA = 'Faça o alinhamento da direção depois.';
const HIDR = 'Direção hidráulica: complete o reservatório com o fluido indicado pela VW, ligue o motor e gire o volante de batente a batente, devagar, várias vezes, para tirar o ar; desligue e complete de novo com o motor frio. Chiado que não some é ar ou nível baixo.';
const VIDRO = 'Depois de religar a bateria ou trocar a máquina, refaça a inicialização do vidro automático, se o carro tiver: suba até o fim e segure o botão alguns segundos.';
const EMB = 'O cabo da embreagem tem ajuste automático da folga: depois de montar, pise no pedal até o fundo umas cinco vezes para ele assentar e confira se as marchas entram sem arranhar e a embreagem acopla na altura certa.';
const FORRO = 'Espátula plástica rente a cada presilha; presilhas novas à mão, porque algumas quebram.';
const FUNILARIA = 'Peça soldada na estrutura: troca é serviço de funilaria (furar ou cortar os pontos de solda, soldar a peça nova, selar as emendas e pintar). Confira as medidas da carroceria depois de batida forte.';

/* ---------- ELÉTRICA ---------- */
M('bateria', {
  f: 'Chave 10 mm, escova de terminal, graxa de terminal.',
  pre: 'Ignição desligada e chave fora. Tenha o código do rádio se ele pedir.',
  d: ['Solte primeiro o negativo (preto).', 'Depois o positivo (vermelho), que sai com o porta-fusíveis preso a ele.', 'Solte o grampo de fixação na base.', 'Tire a bateria para cima, sem inclinar.'],
  m: ['Base limpa, bateria da mesma capacidade e polaridade.', 'Grampo firme, positivo com o porta-fusíveis primeiro e negativo por último.', 'Deixe o motor em lenta alguns minutos para a central reaprender a borboleta; ajuste relógio e rádio.']
});
M('cabos_bat', {
  f: 'Chaves 10 e 13 mm, escova.',
  pre: BAT,
  d: ['Solte os terminais da bateria (negativo primeiro).', 'Siga o cabo até o motor de partida, o porta-fusíveis ou o aterramento e solte as porcas.', 'Tire o cabo das presilhas.'],
  m: ['Contatos limpos, porcas firmes, cabo longe do escape e de peças móveis.', 'Aterramentos do motor, do câmbio e da carroceria bem apertados: mau contato causa partida fraca e falhas elétricas.']
});
M('caixa_fus_motor', {
  f: 'Chave 10 mm, chave de fenda.',
  pre: BAT + ' O porta-fusíveis fica sobre a bateria, preso no terminal positivo: os fusíveis grandes protegem alternador, ventilador e central elétrica.',
  d: ['Abra a tampa e confira os fusíveis.', 'Para trocar o porta-fusíveis: solte os cabos presos a ele e a porca do terminal positivo.'],
  m: ['Cabos nas posições originais, porcas firmes e tampa fechada contra água.', 'Fusível grande que queima de novo é curto: procure a causa antes de trocar.']
});
M('caixa_fus_painel', {
  f: 'Pinça de fusível (vem na tampa), chave Philips.',
  pre: 'Ignição desligada. A central elétrica fica sob o painel, do lado do motorista, atrás de uma tampa.',
  d: ['Tire a tampa (o mapa dos fusíveis e relés está nela ou no manual).', 'Troque o fusível pela mesma amperagem; o relé sai puxando reto.', 'Para trocar a central: desligue a bateria e os conectores de trás.'],
  m: ['Fusíveis e relés encaixados até o fim, tampa de volta.', 'Teste o circuito que tinha parado.']
});
M('alternador', {
  f: 'Soquetes, chave para o tensor, multímetro.',
  pre: BAT,
  d: ['Tire a correia de acessórios.', 'Desligue o conector e o cabo positivo do alternador.', 'Solte os 2 parafusos do suporte, na frente do motor, e tire o alternador por cima.'],
  m: ['Parafusos no torque, cabo e conector firmes.', 'Correia de volta. Com o motor ligado, a bateria deve marcar cerca de 13,8 a 14,5 V.']
});
M('motor_partida', {
  f: 'Soquetes, extensão.',
  pre: BAT + ' O motor de partida fica atrás do motor, preso na carcaça do câmbio.',
  d: ['Por baixo ou por cima (com a caixa do filtro fora), desligue o cabo grosso e o fio do solenoide.', 'Solte os 2 parafusos na carcaça do câmbio e tire o motor de partida.'],
  m: ['Parafusos no torque, cabos firmes (o grosso com a capa).', 'Teste a partida.']
});
M('chicote', {
  f: 'Chaves variadas, fita de chicote, limpa-contato.',
  pre: BAT,
  d: ['Fotografe a passagem e os conectores antes.', 'Destrave cada conector pela trava, sem puxar pelos fios.', 'Solte as presilhas.'],
  m: ['Mesma passagem, longe do coletor de escape (que fica na frente do motor) e de bordas cortantes.', 'Conectores secos e travados com clique; apague os códigos no scanner.']
});
M('farois', {
  f: 'Soquetes, chave Torx.',
  pre: 'O farol sai pela frente com o para-choque fora. Para trocar só a lâmpada, não precisa tirar o farol: ela sai por trás, com o capô aberto.',
  d: ['Tire o para-choque dianteiro.', 'Solte os 3 parafusos do farol.', 'Desligue os conectores e puxe o farol para a frente.'],
  m: ['Farol encaixado nas guias, parafusos leves.', 'Regule a altura do facho numa parede, com o carro vazio e os pneus calibrados.']
});
M('lanternas', {
  f: 'Soquete, chave Philips.',
  pre: 'As lanternas ficam nos cantos de trás, ao lado da tampa.',
  d: ['Abra a tampa traseira e tire a tampinha do acabamento lateral, atrás da lanterna.', 'Solte as porcas por dentro.', 'Desligue o conector e puxe a lanterna para trás, soltando o pino de encaixe.'],
  m: ['Vedação boa: água no porta-malas costuma vir daqui.', 'Porcas leves e teste de todas as luzes (posição, freio, seta e ré).']
});
M('piscas_lat', {
  f: 'Chave de fenda pequena.',
  pre: 'O repetidor fica no para-lama dianteiro, atrás da roda.',
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
  d: ['Tire a grade de baixo ou o para-choque para chegar.', 'Desligue o conector e solte a porca.'],
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
  pre: 'O reservatório fica na frente do cofre, do lado direito, com o bocal à vista.',
  d: ['Esvazie o reservatório.', 'Tire o forro da caixa de roda ou o para-choque, se precisar.', 'Desligue a bomba e as mangueiras (uma vai até a tampa traseira) e solte o reservatório.'],
  m: ['Mangueiras firmes, bomba com vedação nova.', 'Água com limpador próprio; nada de detergente.']
});
M('ign_chave', {
  f: 'Chaves Torx, chave Philips.',
  pre: BAT + ' Comutador novo ou antena nova podem pedir codificação das chaves (imobilizador).',
  d: ['Tire as capas da coluna.', 'Desligue os conectores do comutador e da antena do imobilizador.', 'Solte o comutador (alguns têm parafusos de cabeça quebrável e pedem broca).'],
  m: ['Comutador e antena firmes, conectores travados.', 'Codifique as chaves se for o caso e teste a partida.']
});
M('comutadores', {
  f: 'Chave Philips, Torx.',
  pre: BAT,
  d: ['Tire o volante (veja volante) e as capas da coluna.', 'Desligue os conectores e solte os comutadores.'],
  m: ['Comutadores encaixados, conectores firmes; teste setas, faróis, limpadores e o retorno da seta.']
});

/* ---------- TRANSMISSÃO ---------- */
M('cambio', {
  f: 'Macaco de transmissão, suporte de motor, soquetes, torquímetro.',
  pre: BAT + ' ' + ELEV + ' Drene o óleo do câmbio, se a caixa tiver bujão de dreno.',
  d: ['Tire a bateria e a caixa do filtro.', 'Solte os cabos de engate, o cabo da embreagem na alavanca do câmbio, o motor de partida e o conector da ré.', 'Tire os semieixos.',
    'Apoie o motor por cima ou por baixo e o câmbio no macaco.', 'Solte o coxim do câmbio e os parafusos câmbio–motor e afaste o câmbio reto até o eixo sair do disco.'],
  m: ['Disco centralizado e eixo-piloto com uma pitada de graxa nas estrias.', 'Câmbio reto no motor, sem pendurar no eixo; parafusos no torque.', 'Óleo do tipo indicado até a borda do furo de abastecimento; regule os cabos de engate, ligue o cabo da embreagem e teste todas as marchas. ' + EMB]
});
M('diferencial', {
  f: 'Bancada, extratores, retentores.',
  pre: 'O diferencial fica dentro do câmbio: serviço de bancada.',
  d: ['Tire o câmbio e abra a carcaça.', 'Tire o diferencial e os rolamentos.'],
  m: ['Rolamentos e retentores novos, folgas e pré-carga do manual.', 'Carcaça com vedação nova e óleo novo.']
});
M('embreagem', {
  f: 'Centralizador de disco, soquetes, torquímetro.',
  pre: 'Sai com o câmbio fora. Troque disco, platô e rolamento juntos; confira o cabo.',
  d: ['Tire o câmbio.', 'Solte os 6 parafusos do platô em cruz, aos poucos.', 'Tire platô e disco.'],
  m: ['Volante limpo (sem óleo), disco com o lado certo para o volante.', 'Centralize o disco e aperte o platô em cruz.', 'Câmbio de volta e cabo ligado. ' + EMB]
});
M('rol_emb', {
  f: 'As mesmas da embreagem.',
  pre: 'Sai com o câmbio fora.',
  d: ['Tire o câmbio.', 'Solte o rolamento do garfo e tire.'],
  m: ['Rolamento novo, graxa leve no guia e no garfo.', 'Câmbio de volta e teste o pedal.']
});
M('garfo_emb', {
  f: 'Soquetes, buchas novas, graxa.',
  pre: 'A alavanca fica por fora, no alto do câmbio; o garfo, por dentro da capa: o garfo sai com o câmbio fora.',
  d: ['Solte o cabo da embreagem da alavanca.', 'Com o câmbio fora, solte o garfo do eixo e tire as buchas.'],
  m: ['Buchas novas e graxa leve nos pontos de contato.', 'Cabo de volta. ' + EMB]
});
M('cabo_emb', {
  f: 'Alicate, chave de fenda, graxa.',
  pre: 'Confira no seu carro se o acionamento é por cabo. O cabo vai do pedal, pelo corta-fogo, até a alavanca da embreagem no câmbio.',
  d: ['No cofre, solte a ponta do cabo da alavanca do câmbio (pise no pedal ou empurre a alavanca para aliviar).', 'Sob o painel, solte a ponta do cabo do pedal.', 'Solte o batente do corta-fogo e puxe o cabo para dentro do cofre.'],
  m: ['Cabo novo sem dobras fechadas, longe do escape.', 'Batente e passa-cabo vedando o corta-fogo.', EMB]
});
M('pedal_emb', {
  f: 'Soquetes, chave de boca.',
  pre: 'Sob o painel, do lado do motorista.',
  d: ['Solte a ponta do cabo da embreagem do pedal.', 'Solte a mola e o interruptor do pedal, se houver.', 'Solte o eixo e tire o pedal.'],
  m: ['Buchas lubrificadas, cabo encaixado.', 'Confira o interruptor, se houver, e a altura do pedal. ' + EMB]
});
M('semieixos', {
  f: 'Soquete da fixação central, alavanca, extrator de pivô, chave Allen ou estriada para os flanges.',
  pre: RODA + ' Drene o óleo do câmbio se o semieixo sair da caixa por encaixe.',
  d: ['Com o carro no chão, solte a fixação central do semieixo no cubo (afrouxe antes de levantar).', 'Solte o terminal de direção e o pivô da bandeja.', 'Solte a ponta do câmbio (flange com parafusos ou encaixe, conforme o lado).', 'Afaste a manga e puxe o semieixo do cubo.'],
  m: ['Retentor novo se a ponta for de encaixe; parafusos do flange no torque.', 'Semieixo encaixado até o fim, pivô e terminal de volta.', 'Fixação central nova, aperto final com o carro no chão. Complete o óleo do câmbio.']
});
M('cabos_cambio', {
  f: 'Chaves, alicate de trava, ferramenta de regulagem.',
  pre: 'São dois cabos, da alavanca até o câmbio: um escolhe a fila, o outro engata.',
  d: ['Solte as pontas no câmbio (travas).', 'Tire o console e solte na alavanca.', 'Solte as presilhas e puxe pelo corta-fogo.'],
  m: ['Cabos sem dobras, passa-cabo vedado.', 'Regule com a alavanca em ponto morto, pelo manual, e teste as 5 marchas e a ré.']
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
  m: ['Buchas lubrificadas, pino com trava.', 'Regule o interruptor (luz de freio só com o pedal pisado).']
});
M('servo', {
  f: 'Soquetes, chave de linha.',
  pre: 'O servo sai com o cilindro-mestre afastado.',
  d: ['Solte o cilindro-mestre do servo sem abrir os tubos, se der, e afaste.', 'Solte a mangueira de vácuo.', 'Por dentro, solte o pino do pedal e as porcas do servo; tire pelo cofre.'],
  m: ['Servo novo com a haste regulada, porcas firmes.', 'Mangueira de vácuo com a válvula na posição certa.', PEDAL]
});
M('cil_mestre', {
  f: 'Chaves de linha, soquetes, seringa.',
  pre: 'Proteja a pintura: fluido de freio estraga tinta.',
  d: ['Tire o fluido do reservatório com seringa e desligue o sensor de nível.', 'Solte os tubos dos dois circuitos e tampe.', 'Solte as porcas e tire o cilindro.'],
  m: ['Cilindro novo sangrado na bancada.', 'Tubos firmes nos furos certos e reservatório no nível.', SANGRIA + ' ' + PEDAL]
});
M('reserv_freio', {
  f: 'Seringa, chave de fenda.',
  pre: 'Fica em cima do cilindro-mestre.',
  d: ['Tire o fluido com seringa.', 'Desligue o sensor de nível e puxe o reservatório das borrachas.'],
  m: ['Borrachas novas, reservatório encaixado.', 'Fluido novo até MAX. Troca do fluido a cada 2 anos.']
});
M('valv_equal', {
  f: 'Chaves de linha, soquetes, régua para a regulagem.',
  pre: ELEV + ' A válvula fica sob a traseira, presa à carroceria e ligada ao eixo por uma mola (posição aproximada no modelo). Carros com ABS não têm essa peça.',
  d: ['Marque e solte os tubos de freio, tampando cada furo.', 'Solte a mola do eixo.', 'Solte os 2 parafusos do suporte e tire a válvula.'],
  m: ['Válvula no suporte, tubos nos furos certos.', 'Regule pela mola com o carro na carga indicada no manual (há uma medida de referência).', SANGRIA + ' Teste a frenagem forte num lugar seguro: a traseira não pode travar antes da frente.']
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
  d: ['Solte os 2 pinos-guia e levante a pinça, sem pendurar pelo flexível.', 'Tire as pastilhas e as molinhas.', 'Recue o pistão devagar, de olho no reservatório.'],
  m: ['Pastilhas novas com as molas e os calços.', 'Pinos engraxados e pinça de volta.', PEDAL + ' Amacie com freadas leves nos primeiros 200 km.']
});
M('discos', {
  f: 'Soquetes, chave de impacto manual (para o parafuso de fixação do disco), relógio comparador.',
  pre: RODA,
  d: ['Tire a pinça e pendure com arame.', 'Solte o suporte da pinça.', 'Solte o parafuso de fixação do disco, se houver, e tire o disco (se estiver preso, bata de leve no cubo).'],
  m: ['Cubo limpo, disco novo sem óleo.', 'Suporte e pinça no torque; pastilhas novas com disco novo.', PEDAL]
});
M('tambores', {
  f: 'Martelo de borracha, soquete da porca do cubo (em tambores com rolamento), chave de fenda para recuar a regulagem.',
  pre: RODA + ' Freio de mão solto.',
  d: ['Puxe o tambor; se estiver preso pelas sapatas, recue a regulagem automática por um furo.', 'Em tambor com cubo integrado, tire a capa e a porca do cubo antes.'],
  m: ['Tambor limpo, sem óleo; porca do cubo nova no torque, se houver.', 'Pise no freio e puxe o freio de mão várias vezes para regular e confira que a roda gira livre.']
});
M('sapatas', {
  f: 'Alicate de mola de freio, chave de fenda.',
  pre: RODA + ' Troque sempre os dois lados juntos.',
  d: ['Tire o tambor.', 'Fotografe as molas, solte as molas e as presilhas.', 'Solte o cabo do freio de mão e tire as sapatas.'],
  m: ['Sapatas novas, molas na mesma posição, regulador limpo.', 'Tambor de volta e regule com o pedal e o freio de mão.', PEDAL]
});
M('freio_mao', {
  f: 'Chaves, alicate.',
  pre: 'A regulagem é na alavanca, entre os bancos.',
  d: ['Tire o console.', 'Solte a regulagem e os cabos.', 'Por baixo, solte os cabos das rodas.'],
  m: ['Cabos novos sem dobra.', 'Regule pelos cliques do manual; a roda tem que girar livre com a alavanca solta.']
});
M('mang_vacuo', {
  f: 'Alicate de abraçadeira.',
  pre: 'Motor desligado.',
  d: ['Solte a mangueira do coletor de admissão e do servo.'],
  m: ['Mangueira e válvula de retenção na posição certa.', 'Pedal duro com o motor ligado indica vazamento aqui.']
});

/* ---------- SUSPENSÃO E RODAS ---------- */
M('amort_diant', {
  f: 'Compressor de molas, soquetes, torquímetro.',
  pre: RODA + ' Troque os dois lados juntos.',
  d: ['Solte a bieleta da barra estabilizadora e o flexível do freio do suporte.', 'Solte os 2 parafusos da manga.', 'Abra o capô e solte a fixação do topo.', 'Tire o conjunto e desmonte com o compressor.'],
  m: ['Amortecedor novo com batente, coifa e coxim conferidos.', 'Fixação do topo e da manga no torque.', 'Aperto final das articulações com o carro no chão. ' + ALINHA]
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
  d: ['Tire a pinça e o disco.', 'Solte a fixação central do semieixo, o terminal de direção e o pivô.', 'Solte os 2 parafusos do amortecedor e tire a manga.'],
  m: ['Rolamento novo se tiver ruído ou folga.', 'Tudo no torque, fixação central nova.', ALINHA]
});
M('eixo_tras', {
  f: 'Macaco de transmissão, soquetes, torquímetro.',
  pre: ELEV + ' Solte o freio de mão.',
  d: ['Tire as rodas, solte os flexíveis de freio, os cabos do freio de mão e a mola da válvula equalizadora.', 'Apoie o eixo e solte os amortecedores embaixo.', 'Baixe o eixo até as molas soltarem.', 'Solte os parafusos das buchas e tire o eixo.'],
  m: ['Buchas novas se estiverem rachadas.', 'Aperto final das buchas e dos amortecedores com o carro no chão.', 'Mola da válvula equalizadora de volta e regulada. ' + SANGRIA]
});
M('buchas_eixo', {
  f: 'Prensa e ferramenta de bucha, soquetes.',
  pre: ELEV,
  d: ['Apoie o eixo e solte o parafuso da bucha.', 'Baixe o braço e extraia a bucha com a ferramenta.'],
  m: ['Bucha nova na posição certa (algumas têm lado).', 'Aperto final com o carro no chão.']
});
M('cubo_tras', {
  f: 'Soquetes, torquímetro, saca-rolamento.',
  pre: RODA,
  d: ['Tire o tambor (em muitos casos o rolamento fica no próprio tambor, preso pela porca central).', 'Tire o rolamento ou solte o cubo da ponta de eixo.'],
  m: ['Rolamento novo e porca central nova no torque.', 'Tambor de volta e regule o freio de mão.']
});
M('amort_tras', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV + ' Troque os dois lados juntos.',
  d: ['Apoie o eixo com o macaco.', 'Solte o parafuso de baixo, no eixo.', 'Tire o acabamento lateral do porta-malas e solte a fixação de cima.', 'Tire o amortecedor.'],
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
  pre: 'Medida 195/55 R15. Troque aos pares, os novos atrás se só trocar dois.',
  d: ['Tire a roda.', 'Na borracharia, desmonte o pneu do aro, com cuidado para não riscar a roda de liga.'],
  m: ['Pneu na mesma medida e índice de carga e velocidade.', 'Balanceamento, calibragem da etiqueta e reaperto dos parafusos.']
});
M('rodas', {
  f: 'Chave de roda, torquímetro, macaco, chave do parafuso antifurto (se houver).',
  pre: 'Freio de mão puxado, marcha engatada e carro no plano.',
  d: ['Tire a tampa central, se houver.', 'Com o carro no chão, afrouxe os 4 parafusos.', 'Levante pelo ponto de apoio, tire os parafusos e a roda.'],
  m: ['Use os parafusos próprios para roda de liga (o assento é diferente do da roda de aço).', 'Parafusos à mão, em cruz; desça o carro e dê o aperto final (≈ 120 N·m).', 'Reaperte depois de uns 50 km.']
});
M('estepe', {
  f: 'Nenhuma.',
  pre: 'Fica no poço do porta-malas, sob o assoalho.',
  d: ['Levante o assoalho do porta-malas.', 'Solte o parafuso central e tire o estepe.'],
  m: ['Estepe calibrado (confira de mês em mês), parafuso firme. Se o estepe for de aço, use os parafusos indicados para ele.']
});
M('macaco', {
  f: 'Nenhuma.',
  pre: 'Fica no porta-malas, junto ao estepe.',
  d: ['Levante o assoalho do porta-malas.', 'Solte o macaco do suporte.'],
  m: ['Macaco fechado e preso para não bater. Use só nos pontos de apoio da soleira.']
});

/* ---------- DIREÇÃO ---------- */
M('volante_dir', {
  f: 'Chave de fenda, soquete, extrator de volante.',
  pre: BAT + ' Rodas retas. Na versão considerada não há airbag; se o seu tiver, siga o cuidado do airbag (bateria desligada e espera de minutos antes de mexer).',
  d: ['Solte a tampa central da buzina e desligue o fio.', 'Marque o volante no eixo e solte a porca central.', 'Puxe o volante (com extrator se estiver preso).'],
  m: ['Volante na marca, com as rodas retas.', 'Porca no torque e buzina de volta; teste a buzina e o retorno da seta.']
});
M('coluna', {
  f: 'Soquetes, chave Torx.',
  pre: BAT + ' Rodas retas e volante travado.',
  d: ['Tire o volante, as capas e os comutadores.', 'Marque e solte a junta do pinhão no corta-fogo.', 'Desligue o comutador de ignição e solte as porcas sob o painel.'],
  m: ['Junta na marca, parafuso no torque.', 'Conectores travados e volante reto.']
});
M('caixa_dir', {
  f: 'Soquetes, chaves de linha, extrator de terminal, torquímetro, bandeja.',
  pre: ELEV + ' Rodas retas e volante travado. Panos embaixo: o fluido estraga pintura e borrachas.',
  d: ['Solte os terminais das mangas.', 'Solte as mangueiras de pressão e de retorno na válvula da caixa e tampe.', 'Marque e solte a junta do pinhão.', 'Solte as braçadeiras da caixa no subchassi e tire pelo lado.'],
  m: ['Caixa centrada, braçadeiras no torque.', 'Mangueiras com arruelas novas, junta na marca e terminais com porca nova.', HIDR + ' ' + ALINHA]
});
M('barras_axiais', {
  f: 'Chave de barra axial, extrator de terminal.',
  pre: RODA,
  d: ['Solte o terminal da manga e conte as voltas ao tirá-lo da barra.', 'Solte a coifa.', 'Solte a barra axial da cremalheira com a chave própria.'],
  m: ['Barra nova no torque, coifa com abraçadeiras novas.', 'Terminal com o mesmo número de voltas.', ALINHA]
});
M('bomba_dir', {
  f: 'Soquetes, chaves de linha, bandeja, arruelas de vedação novas.',
  pre: 'A bomba fica atrás do motor, em cima, na correia de acessórios. Panos embaixo.',
  d: ['Tire a correia de acessórios.', 'Solte as mangueiras de pressão e de alimentação e tampe.', 'Solte os 3 parafusos e tire a bomba.'],
  m: ['Bomba nova cheia de fluido (gire a polia à mão para escorvar).', 'Parafusos no torque, mangueiras com vedação nova, correia de volta.', HIDR]
});
M('reserv_dir', {
  f: 'Seringa, alicate de abraçadeira.',
  pre: 'O reservatório fica do lado direito do cofre, à frente da correia dentada (posição aproximada no modelo).',
  d: ['Tire o fluido com seringa.', 'Solte as mangueiras e o suporte.'],
  m: ['Reservatório no suporte, mangueiras firmes.', HIDR]
});
M('mang_dir', {
  f: 'Chaves de linha, alicate de abraçadeira, arruelas novas.',
  pre: 'Panos embaixo. Mangueira de pressão é reforçada: use a peça certa, nunca mangueira comum.',
  d: ['Solte as conexões na bomba, na caixa e no reservatório.', 'Solte as presilhas e tire a mangueira.'],
  m: ['Mangueira nova sem encostar no escape nem em peças móveis.', 'Arruelas novas e conexões no torque.', HIDR]
});

/* ---------- INTERIOR ---------- */
M('painel', {
  f: 'Espátula plástica, soquetes, chaves Philips e Torx.',
  pre: BAT + ' Serviço grande: fotografe cada conector.',
  d: ['Tire o volante, as capas da coluna, o console, o rádio, o quadro e o porta-luvas.', 'Tire os acabamentos das colunas e os comandos da ventilação.', 'Solte os parafusos do painel e puxe com ajuda, desligando os conectores.'],
  m: ['Conectores todos travados antes de apertar.', 'Painel nos pinos-guia, parafusos de volta.', 'Teste luzes, ventilação e instrumentos.']
});
M('quadro', {
  f: 'Espátula plástica, chave Torx.',
  pre: BAT,
  d: ['Solte a moldura do quadro.', 'Solte os parafusos e puxe o quadro, desligando o conector.'],
  m: ['Conector travado e moldura encaixada.', 'Quadro novo pode precisar de programação da quilometragem e do imobilizador.']
});
M('radio', {
  f: 'Chaves de remoção ou chave Philips, espátula.',
  pre: 'Tenha o código do rádio, se houver.',
  d: ['Solte a moldura (ou use as chaves de remoção nos furos da frente).', 'Puxe o rádio, desligando conectores e a antena.'],
  m: ['Conectores e antena firmes, rádio encaixado. Digite o código se pedir.']
});
M('console', {
  f: 'Espátula plástica, chave Philips.',
  pre: 'Nada.',
  d: ['Tire a coifa da alavanca de câmbio e a do freio de mão.', 'Solte os parafusos e as presilhas.', 'Levante o console desligando os conectores.'],
  m: ['Conectores e presilhas no lugar.']
});
M('bancos_diant', {
  f: 'Soquetes, Torx.',
  pre: BAT + ' Se o banco tiver airbag lateral ou sensor de cinto, siga o cuidado do airbag.',
  d: ['Corra o banco para a frente e solte os parafusos de trás; corra para trás e solte os da frente.', 'Desligue os conectores por baixo, se houver, e tire o banco.'],
  m: ['Parafusos no torque (item de segurança).', 'Trilhos limpos e lubrificados; teste as travas.']
});
M('banco_tras', {
  f: 'Soquetes.',
  pre: 'O assento levanta para chegar à bomba de combustível.',
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
  f: 'Espátula plástica, chave Philips, ferramenta de trava da manivela.',
  pre: FORRO,
  d: ['Se o vidro for de manivela, solte a trava e tire a manivela.', 'Tire o parafuso do puxador e o acabamento da maçaneta.', 'Solte as presilhas em volta e levante o forro.'],
  m: ['Plástico de vedação colado.', 'Forro encaixado e presilhas firmes; manivela na mesma posição.']
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
  d: ['Deslize o espelho para fora da base (ou solte o parafuso).'],
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
  m: ['Passa-cabos (coluna, cabo da embreagem, chicote) e vedações de volta para não entrar água nem barulho.']
});
M('soleiras', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Fure os pontos de solda da aba de baixo e da borda das portas.', 'Tire a soleira.'], m: ['Soleira nova soldada, emendas seladas e proteção antiferrugem por dentro.'] });
M('colunas', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Coluna amassada é reparada ou cortada e substituída em seção, pelo manual de reparo.'], m: ['Soldas nos pontos originais, medidas conferidas e vedação.'] });
M('teto', { f: 'Equipamento de funilaria, para-brisa e vidro traseiro fora.', pre: FUNILARIA, d: ['Tire o forro do teto, o para-brisa e a tampa.', 'Fure os pontos de solda nas bordas.', 'Tire o teto.'], m: ['Teto novo soldado e selado, vidros colados com cordão novo.'] });
M('laterais', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Tire lanterna, para-choque, bocal e acabamentos.', 'Fure ou corte os pontos de solda (a coluna traseira larga faz parte da lateral).', 'Tire a lateral.'], m: ['Lateral nova soldada, emendas seladas e portinhola do combustível regulada.'] });
M('painel_tras', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Tire o para-choque, as lanternas e os acabamentos.', 'Fure os pontos de solda e tire o painel.'], m: ['Painel novo soldado e selado; confira a vedação do porta-malas.'] });
M('travessa_frontal', {
  f: 'Soquetes.',
  pre: 'O painel frontal é parafusado: segura radiador, condensador, faróis e a fechadura do capô.',
  d: ['Tire o para-choque, a grade e os faróis.', 'Apoie radiador e condensador sem abrir o circuito do ar.', 'Solte os parafusos das pontas e tire o painel frontal.'],
  m: ['Painel nos pinos-guia, fechadura do capô regulada.', 'Faróis regulados.']
});
M('viga_dianteira', { f: 'Soquetes.', pre: 'Atrás do para-choque dianteiro.', d: ['Tire o para-choque.', 'Solte os parafusos das pontas das longarinas.'], m: ['Viga nova se estiver amassada; parafusos no torque.'] });
M('viga_traseira', { f: 'Soquetes.', pre: 'Atrás do para-choque traseiro.', d: ['Tire o para-choque traseiro.', 'Solte os parafusos no painel traseiro.'], m: ['Viga no lugar, parafusos no torque.'] });
M('capo', {
  f: 'Soquetes, fita crepe, ajudante.',
  pre: 'Risque a posição das dobradiças.',
  d: ['Abra o capô e desligue a mangueira do lavador, se houver.', 'Com ajuda, solte os 2 parafusos de cada dobradiça no capô.', 'Tire o capô.'],
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
  d: ['Desligue o conector na coluna central, se houver.', 'Solte o limitador.', 'Marque e solte os parafusos das dobradiças.', 'Tire a porta.'],
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
  d: ['Tire o forro e o plástico de vedação.', 'Solte as varetas da maçaneta e do miolo.', 'Desligue o conector da trava elétrica e solte os 3 parafusos na borda da porta.'],
  m: ['Varetas encaixadas, conector travado.', 'Teste com a porta aberta antes de fechar (para não trancar fora); regule o batente.']
});
M('retrovisores', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Segure o espelho por fora antes de soltar a última porca.',
  d: ['Tire o acabamento triangular por dentro.', 'Desligue o conector, se for elétrico, ou solte o comando manual.', 'Solte as 3 porcas e tire.'],
  m: ['Vedação no lugar, porcas leves, conector ou comando de volta.']
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
  m: ['Fechadura no lugar, batente regulado.', 'Teste a abertura pela chave e, se houver, pelo botão.']
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
  f: 'Soquete 10 mm, espátula, ferramenta de trava da manivela.',
  pre: 'Tire o forro da porta traseira (e a manivela, se o vidro for manual).',
  d: ['Posicione o vidro e solte a fixação na máquina.', 'Prenda o vidro com fita.', 'Desligue o conector, se for elétrica, e tire a máquina.'],
  m: ['Máquina parafusada e vidro nos trilhos; trilhos lubrificados.', VIDRO]
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
M('vidros_portas', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Tire o forro da porta.',
  d: ['Posicione o vidro até os parafusos aparecerem e solte.', 'Tire o vidro por cima, inclinando.'],
  m: ['Vidro nos trilhos, parafusos leves.', VIDRO]
});
M('vidros_portas_tras', {
  f: 'Soquete 10 mm, espátula.',
  pre: 'Tire o forro da porta traseira. O vidro tem um pedaço fixo atrás da divisória.',
  d: ['Posicione o vidro móvel e solte a fixação na máquina.', 'Solte a divisória (parafusos na borda e embaixo) e tire o pedaço fixo com a canaleta.', 'Tire o vidro móvel por cima.'],
  m: ['Vidro nos trilhos, divisória firme e canaleta inteira.', VIDRO]
});
M('para_choque_d', {
  f: 'Soquetes, chave Torx, espátula.',
  pre: 'Cuidado com as guias laterais sob os faróis.',
  d: ['Abra o capô e solte as fixações de cima.', 'Solte os parafusos das caixas de roda e os de baixo.', 'Puxe as pontas para fora das guias e tire para a frente, desligando o que houver.'],
  m: ['Pontas nas guias, fixações todas de volta.', 'Frestas iguais com os faróis e os para-lamas.']
});
M('para_choque_t', {
  f: 'Soquetes, chave Torx, espátula.',
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
