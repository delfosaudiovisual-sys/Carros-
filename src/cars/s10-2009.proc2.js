/* ===== Chevrolet S10 2009 2.8 turbodiesel 4x4: como desmontar e montar cada peça (embreagem, câmbio, tração 4x4, freios, suspensão, direção, ar, interior, cabine, caçamba e chassi) ===== */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['s10-2009'] = window.CAR_PROC['s10-2009'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria.';
const ELEV = 'Picape no elevador ou firme sobre cavaletes no chassi (longarinas), nunca só no macaco.';
const RODA = 'Com a picape no chão, afrouxe as 6 porcas; levante pelo chassi, apoie em cavalete e tire a roda.';
const CALCO = 'Calce as rodas, câmbio em ponto morto e transferência em 2HI.';
const SANGRIA = 'Sangria com fluido DOT 4 novo (para trabalho pesado), começando pela roda mais longe do cilindro-mestre, até sair sem bolhas. Ar no ABS pode pedir scanner.';
const PEDAL = 'Bombeie o pedal até ficar firme antes de andar.';
const ALINHA = 'Faça o alinhamento depois: convergência total de 0°36′ ± 0°12′, cáster de 3° a 4° e câmber de −0°30′ a +0°30′ (manual).';
const SRS = 'Airbag: desligue o negativo da bateria e espere pelo menos 3 minutos. Nunca meça o airbag com multímetro; guarde o módulo com a bolsa para cima.';
const EMB = 'Sangria da embreagem: fluido DOT 4 no reservatório próprio, ao lado do do freio. Abra o sangrador com o pedal pisado e feche antes de soltar, até o pedal voltar firme.';
const FORRO = 'Espátula plástica rente a cada presilha; presilhas novas à mão.';
const FUNILARIA = 'Peça soldada da cabine: troca é serviço de funilaria. Medidas da cabine e do chassi conferidas depois de batida forte.';
const MARCA = 'Marque com tinta a posição do cardã nas flanges e na junta deslizante: tem de voltar na mesma fase, ou vibra.';

/* ---------- EMBREAGEM E CÂMBIO ---------- */
M('embreagem', {
  f: 'Macaco de transmissão, centralizador de disco, soquetes, torquímetro.',
  pre: 'Sai com o câmbio fora (veja câmbio). Troque disco, platô e atuador juntos.',
  d: ['Tire o câmbio com a transferência.', 'Solte os parafusos do platô em cruz, aos poucos.', 'Tire platô e disco.'],
  m: ['Volante limpo e sem trincas; disco com o lado certo para o volante.', 'Centralize o disco e aperte o platô em cruz no torque.', 'Câmbio de volta. ' + EMB]
});
M('rol_emb', { f: 'As mesmas da embreagem, chave de linha.', pre: 'Sai com o câmbio fora.', d: ['Tire o câmbio.', 'Solte o tubo do atuador e os parafusos e tire-o do eixo de entrada.'], m: ['Atuador novo, tubo apertado.', EMB] });
M('cil_emb_mestre', { f: 'Chave de linha, soquetes, seringa.', pre: 'Tire fluido do reservatório com seringa.', d: ['Solte o tubo e tampe.', 'Por dentro, solte o pino do pedal.', 'Solte as porcas no corta-fogo.'], m: ['Cilindro novo, pino com trava.', EMB] });
M('reserv_emb', { f: 'Seringa.', pre: 'Ao lado do reservatório do freio, no lado esquerdo do cofre.', d: ['Tire o fluido com seringa.', 'Solte a mangueira e o reservatório.'], m: ['Fluido DOT 4 até MAX; troca a cada 30.000 km (plano da GM).'] });
M('tubo_emb', { f: 'Chaves de linha.', pre: 'Proteja a pintura.', d: ['Solte as duas pontas e as presilhas.'], m: ['Tubo novo com as mesmas curvas.', EMB] });
M('pedal_emb', { f: 'Soquetes.', pre: 'Sob o painel.', d: ['Solte o pino do cilindro-mestre e a mola.', 'Solte o eixo e tire o pedal.'], m: ['Buchas lubrificadas, curso livre conferido (plano da GM).'] });
M('cambio', {
  f: 'Macaco de transmissão, soquetes, torquímetro, recipiente.',
  pre: ELEV + ' ' + BAT + ' ' + CALCO + ' Drene o óleo do câmbio e da transferência.',
  d: ['Por dentro, tire a coifa e a alavanca do câmbio.', 'Tire os dois cardãs (veja cardãs) e o protetor da transferência.', 'Desligue o conector do motor da transferência, o da luz de ré e o tubo da embreagem (tampe).', 'Tire o motor de partida.', 'Apoie o conjunto no macaco, solte a travessa do coxim do câmbio e os parafusos da capa seca e afaste o câmbio reto até o eixo sair do disco.'],
  m: ['Disco centralizado e estrias com pouca graxa.', 'Câmbio reto no motor, sem pendurar no eixo; parafusos no torque.', 'Dexron III: 2,0 L no câmbio (4x4) e 1,18 L na transferência, até a borda dos furos.', EMB + ' Teste todas as marchas e 2HI, 4HI e 4LO.']
});
M('alavanca', { f: 'Chaves, espátula plástica.', pre: 'Câmbio em ponto morto.', d: ['Tire a manopla e a coifa.', 'Solte a alavanca do câmbio (trava ou parafusos).'], m: ['Buchas novas se houver folga; coifa vedando.'] });
M('coxim_cambio', { f: 'Macaco de transmissão, soquetes.', pre: ELEV, d: ['Apoie o câmbio.', 'Solte o coxim da travessa e do câmbio.'], m: ['Coxim novo, porcas no torque; confira o cardã.'] });

/* ---------- TRAÇÃO 4x4 ---------- */
M('transferencia', {
  f: 'Macaco de transmissão, soquetes, torquímetro, recipiente.',
  pre: ELEV + ' ' + CALCO + ' Drene o óleo.',
  d: ['Tire o protetor e os dois cardãs (marque as flanges). ' + MARCA, 'Desligue o conector do motor de mudança e o respiro.', 'Apoie a caixa e solte os parafusos da flange no câmbio.', 'Afaste a caixa para trás, reta.'],
  m: ['Junta nova; caixa reta no eixo do câmbio.', 'Parafusos no torque, cardãs nas marcas.', '1,18 L de Dexron III até a borda do furo; teste 2HI, 4HI e 4LO.']
});
M('motor_transf', {
  f: 'Soquetes Torx, scanner.',
  pre: ELEV + ' Transferência em 2HI. ' + BAT,
  d: ['Desligue o conector.', 'Solte os parafusos e tire o motor da caixa, sem girar o eixo.'],
  m: ['Motor na mesma posição do eixo de mudança, vedação boa.', 'Teste as três posições: a lâmpada pisca e fica acesa quando completa.']
});
M('botoes_4x4', { f: 'Espátula plástica.', pre: BAT, d: ['Solte o acabamento do meio do painel.', 'Desligue o conector e tire os interruptores.'], m: ['Conector travado; teste com o carro parado.'] });
M('cardan_tras', {
  f: 'Soquetes, chave de boca, tinta para marcar.',
  pre: ELEV + ' ' + CALCO,
  d: [MARCA, 'Solte os 4 parafusos da flange do diferencial.', 'Solte os 2 parafusos do mancal central na travessa.', 'Puxe o cardã para trás, tirando a junta deslizante da transferência; tampe a saída.'],
  m: ['Junta deslizante engraxada, marcas alinhadas.', 'Parafusos no torque; cruzetas engraxadas (graxa nº 2 EP de lítio).']
});
M('mancal_cardan', { f: 'Prensa, extrator.', pre: 'Sai com o cardã traseiro.', d: ['Tire o cardã.', 'Separe as duas partes (marque) e extraia o mancal.'], m: ['Mancal novo prensado, partes nas marcas.', 'Cardã de volta e teste de vibração.'] });
M('cruzetas', { f: 'Prensa ou morsa, alicate de anel, graxa.', pre: 'Sai com o cardã fora.', d: ['Tire os anéis-trava.', 'Prense as capas para fora e tire a cruzeta.'], m: ['Cruzeta nova com graxeira para fora.', 'Engraxe até a graxa aparecer nas quatro capas.'] });
M('cardan_diant', { f: 'Soquetes, tinta.', pre: ELEV + ' ' + CALCO, d: [MARCA, 'Solte as flanges do diferencial dianteiro e da transferência.', 'Tire o cardã.'], m: ['Flanges nas marcas, parafusos no torque; cruzetas engraxadas.'] });
M('dif_diant', {
  f: 'Macaco de transmissão, soquetes, recipiente.',
  pre: ELEV + ' Para trocar só o óleo: bujão de abastecimento primeiro, depois o de dreno.',
  d: ['Tire o protetor do cárter.', 'Para tirar o diferencial: solte o cardã dianteiro, os semieixos e o tubo com o atuador.', 'Apoie e solte os suportes do diferencial no chassi.'],
  m: ['Suportes no torque.', '1,20 L de SAE 80W90 até a borda do furo (troca a cada 30.000 km, a primeira aos 10.000).']
});
M('atuador_eixo', {
  f: 'Soquetes, bomba de vácuo manual para teste.',
  pre: ELEV + ' Transferência em 2HI.',
  d: ['Solte a mangueira de vácuo e o cabo do atuador.', 'Solte os parafusos e tire o atuador do tubo do eixo.'],
  m: ['Atuador com vedação nova.', 'Teste com vácuo: ouve-se o acoplamento. Teste também em 4HI andando devagar em terra.']
});
M('semieixos_diant', {
  f: 'Soquete da porca do cubo, extrator de pivô, soquetes.',
  pre: RODA,
  d: ['Afrouxe a porca do cubo com a roda no chão.', 'Solte os parafusos da flange no diferencial.', 'Solte o pivô de cima e afaste a manga.', 'Puxe o semieixo do cubo.'],
  m: ['Porca do cubo nova (ou trava nova) no torque com a roda no chão.', 'Flange no torque; coifas sem torção.']
});
M('coifas', { f: 'Alicate de abraçadeira de coifa, graxa da homocinética.', pre: 'Sai com o semieixo fora.', d: ['Tire o semieixo.', 'Corte as abraçadeiras e tire a junta conforme o manual.'], m: ['Graxa própria, coifa nova e abraçadeiras novas.'] });
M('cubos_diant', {
  f: 'Soquete da porca do cubo, extrator, graxa para rolamento.',
  pre: RODA + ' Plano da GM: trocar a graxa a cada 20.000 km ou nas pastilhas.',
  d: ['Tire a pinça (pendure) e o disco.', 'Solte a porca do cubo e o cubo da manga.'],
  m: ['Rolamento limpo e engraxado (ou cubo novo).', 'Porca no torque e sem folga; disco e pinça de volta.']
});
M('eixo_tras', {
  f: 'Macaco de transmissão, soquetes, torquímetro.',
  pre: ELEV + ' Rodas traseiras fora.',
  d: ['Solte o cardã traseiro (marque), o flexível de freio, os cabos do freio de estacionamento e o sensor.', 'Apoie o eixo e solte os amortecedores.', 'Solte os grampos em "U" e baixe o eixo.'],
  m: ['Eixo centrado nos pinos dos feixes.', 'Grampos no torque com o peso do carro e reaperto depois de rodar.', SANGRIA]
});
M('dif_tras', {
  f: 'Soquetes, raspador, recipiente.',
  pre: 'Carro nivelado. Tire primeiro o bujão de abastecimento: se ele não sair, não drene.',
  d: ['Solte os 10 parafusos da tampa e deixe o óleo escorrer.', 'Limpe a tampa e o ímã.'],
  m: ['Vedação nova na tampa e parafusos em cruz.', '1,60 L de SAE 85W140 GL-5 para tração positiva com moderador de atrito (Trac-Lock), até a borda do furo (manual).']
});
M('semieixos_tras', { f: 'Soquetes, extrator de semieixo, retentores.', pre: RODA + ' Drene o óleo do eixo.', d: ['Tire o tambor.', 'Abra a tampa do diferencial e tire a trava do semieixo (pino e calço em C, conforme o eixo).', 'Puxe o semieixo.'], m: ['Retentor novo e rolamento bom.', 'Trava de volta e óleo do eixo completado.'] });

/* ---------- FREIOS ---------- */
M('pedal_freio', { f: 'Soquetes.', pre: 'Sob o painel.', d: ['Solte o pino da haste do servo.', 'Desligue o interruptor da luz de freio e solte o eixo.'], m: ['Buchas lubrificadas e luz de freio regulada.'] });
M('servo', {
  f: 'Soquetes, chave de linha.',
  pre: 'Proteja a pintura.',
  d: ['Solte o cilindro-mestre do servo sem abrir os tubos, se der, e afaste.', 'Solte a mangueira de vácuo.', 'Por dentro, solte o pino do pedal e as 4 porcas do servo.'],
  m: ['Servo com a haste regulada, porcas no torque.', 'Mangueira de vácuo da bomba firme. ' + PEDAL]
});
M('cil_mestre', { f: 'Chaves de linha, seringa.', pre: 'Proteja a pintura.', d: ['Tire o fluido com seringa e desligue o sensor de nível.', 'Solte os tubos (tampe) e as 2 porcas.'], m: ['Cilindro sangrado na bancada.', SANGRIA + ' ' + PEDAL] });
M('reserv_freio', { f: 'Seringa.', pre: 'Em cima do cilindro-mestre.', d: ['Tire o fluido e puxe o reservatório das borrachas.'], m: ['Borrachas novas e DOT 4 até MAX: troca a cada 30.000 km ou 2 anos (manual).'] });
M('abs', { f: 'Chaves de linha, scanner.', pre: BAT + ' Posição aproximada no modelo.', d: ['Desligue o conector.', 'Marque e solte os tubos (tampe cada furo).', 'Solte o suporte.'], m: ['Unidade nova chega cheia: tire os tampões só na hora.', SANGRIA + ' Apague os códigos.'] });
M('sens_roda', { f: 'Soquete, limpa-contato.', pre: RODA, d: ['Desligue o conector.', 'Solte o sensor.'], m: ['Sensor e anel limpos (barro de trilha acende a luz do ABS).'] });
M('tubos_freio', { f: 'Chaves de linha, curvador.', pre: ELEV, d: ['Solte as pontas e as presilhas.'], m: ['Tubo novo com as mesmas curvas; flexível do eixo sem esticar com a suspensão embaixo.', SANGRIA] });
M('pincas', { f: 'Soquetes, chave de linha.', pre: RODA, d: ['Solte o flexível (tampe).', 'Solte os pinos-guia e o suporte.'], m: ['Pinos lubrificados, flexível com arruelas novas.', SANGRIA + ' ' + PEDAL] });
M('pastilhas', {
  f: 'Soquetes, recuador de pistão, graxa para pinos.',
  pre: RODA + ' Troque os dois lados juntos.',
  d: ['Solte os 2 pinos-guia e levante a pinça, sem pendurar pelo flexível.', 'Tire as pastilhas e recolha o pistão devagar.'],
  m: ['Pastilhas novas com as molas.', 'Aproveite para trocar a graxa do rolamento da roda (plano da GM).', PEDAL]
});
M('discos', { f: 'Soquetes, relógio comparador.', pre: RODA, d: ['Tire a pinça e o suporte.', 'Tire o disco (em alguns cubos 4x4, o disco sai com o cubo).'], m: ['Disco novo sem óleo, pastilhas novas.', PEDAL] });
M('tambores', { f: 'Martelo de borracha, chave para recuar a regulagem.', pre: RODA + ' Freio de estacionamento solto.', d: ['Puxe o tambor; se prender, recue a regulagem das sapatas.'], m: ['Tambor limpo; regule com o pedal do freio de estacionamento.'] });
M('sapatas', { f: 'Alicate de mola de freio.', pre: RODA + ' Troque os dois lados juntos.', d: ['Tire o tambor.', 'Fotografe e solte as molas e o cabo do freio de estacionamento.', 'Tire as sapatas.'], m: ['Sapatas novas, molas na mesma posição.', 'Se havia óleo nas lonas, troque o retentor do semieixo antes.', PEDAL] });
M('cil_roda', { f: 'Chave de linha, soquetes.', pre: 'Tire as sapatas.', d: ['Solte o tubo (tampe) e os parafusos do cilindro.'], m: ['Cilindro novo, tubo firme.', SANGRIA] });
M('freio_estac', { f: 'Soquetes, chaves.', pre: 'Pedal sob o painel, do lado esquerdo.', d: ['Solte o cabo do pedal.', 'Solte o conjunto do pedal.'], m: ['Regule pelos cliques do manual; as rodas devem girar livres com o freio solto (plano da GM: a cada 30.000 km).'] });
M('cabos_freio', { f: 'Chaves, alicate.', pre: ELEV, d: ['Afrouxe o regulador.', 'Solte as pontas nos tambores e as presilhas.'], m: ['Cabos lubrificados, guias no lugar e regulagem.'] });
M('mang_vacuo', { f: 'Alicate de abraçadeira.', pre: 'Motor desligado.', d: ['Solte a mangueira da bomba de vácuo e do servo.'], m: ['Válvula de retenção no sentido certo; pedal leve com o motor ligado.'] });

/* ---------- SUSPENSÃO E RODAS ---------- */
M('bandeja_inf', {
  f: 'Soquetes, extrator de pivô, ferramenta de alívio da barra de torção, torquímetro.',
  pre: RODA + ' Conte as voltas do parafuso de regulagem da barra de torção.',
  d: ['Alivie a barra de torção pelo parafuso da travessa e tire a barra (veja barra de torção).', 'Solte o amortecedor e a barra estabilizadora da bandeja.', 'Solte o pivô de baixo da manga.', 'Solte os 2 parafusos de bucha na travessa e tire a bandeja.'],
  m: ['Bandeja nova com buchas e pivô.', 'Aperto final das buchas com o peso do carro.', 'Barra de torção de volta com as mesmas voltas. ' + ALINHA]
});
M('bandeja_sup', {
  f: 'Soquetes, extrator de pivô.',
  pre: RODA + ' Marque a posição dos calços de alinhamento.',
  d: ['Apoie a bandeja de baixo com macaco.', 'Solte o pivô de cima da manga.', 'Solte os parafusos da bandeja no chassi (com os calços) e tire.'],
  m: ['Calços na mesma posição.', ALINHA]
});
M('pivos', { f: 'Extrator de pivô, prensa ou ferramenta de rebite.', pre: RODA + ' Apoie a bandeja de baixo.', d: ['Tire o contrapino e solte a porca castelo.', 'Separe o pivô da manga com o extrator.', 'Solte o pivô da bandeja (parafusado ou rebitado, conforme a peça).'], m: ['Pivô novo, porca no torque e contrapino novo.', 'Lubrifique pela graxeira, se houver.'] });
M('barras_torcao', {
  f: 'Ferramenta de alívio da barra de torção, soquetes, tinta.',
  pre: ELEV + ' Rodas no ar. Conte as voltas do parafuso de regulagem e marque a barra nas pontas.',
  d: ['Com a ferramenta, alivie a carga do braço da travessa.', 'Solte o parafuso de regulagem e tire o braço da travessa.', 'Puxe a barra da bandeja inferior.'],
  m: ['Barra no mesmo lado e nas marcas (as barras têm lado).', 'Parafuso com as mesmas voltas; meça a altura da frente nos dois lados.', ALINHA]
});
M('travessa_torcao', { f: 'Soquetes, ferramenta de alívio.', pre: ELEV + ' Tire as duas barras de torção.', d: ['Solte os parafusos da travessa nas longarinas.'], m: ['Travessa no torque; barras de volta nas marcas.', ALINHA] });
M('amort_diant', { f: 'Soquetes.', pre: RODA, d: ['Solte a fixação de cima, no chassi.', 'Solte a de baixo, na bandeja.', 'Tire o amortecedor.'], m: ['Amortecedor novo com buchas; troque os dois juntos.'] });
M('barra_estab', { f: 'Soquetes.', pre: ELEV, d: ['Solte as bieletas nas bandejas.', 'Solte as abraçadeiras no chassi.'], m: ['Buchas novas; aperto final com o carro no chão.'] });
M('mangas', { f: 'Extrator de pivô, soquetes.', pre: RODA, d: ['Tire pinça, disco, cubo e semieixo.', 'Solte o terminal de direção e os dois pivôs.'], m: ['Tudo no torque, contrapinos novos.', ALINHA] });
M('feixe_molas', {
  f: 'Macaco, cavaletes, soquetes, torquímetro.',
  pre: ELEV + ' Apoie o eixo com macaco e tire a roda.',
  d: ['Solte as porcas dos grampos em "U" e tire a placa.', 'Solte o olhal da frente e os pinos do jumelo.', 'Baixe o eixo o suficiente e tire o feixe.'],
  m: ['Buchas novas se gastas.', 'Grampos no torque, em cruz, e olhais apertados com o peso do carro.', 'Reaperte os grampos depois de rodar (plano da GM: a cada 30.000 km).']
});
M('jumelos', { f: 'Soquetes, prensa de bucha.', pre: ELEV + ' Apoie o chassi e o eixo.', d: ['Solte os dois pinos do jumelo.', 'Tire o jumelo com as buchas.'], m: ['Buchas novas; aperto com o peso do carro.'] });
M('grampos_u', { f: 'Soquete, torquímetro.', pre: ELEV + ' Apoie o eixo.', d: ['Solte as porcas e tire os grampos e a placa.'], m: ['Grampos novos se a rosca estiver ruim; aperto em cruz com o peso do carro e reaperto depois.'] });
M('amort_tras', { f: 'Soquetes.', pre: ELEV + ' Apoie o eixo.', d: ['Solte a fixação de baixo, no eixo.', 'Solte a de cima, no chassi.'], m: ['Amortecedor novo; troque os dois juntos.'] });
M('pneus', { f: 'Máquina de montar pneu e balanceadora.', pre: '235/70 R16 (manual).', d: ['Tire a roda.', 'Na borracharia, desmonte o pneu.'], m: ['Mesma medida e índice de carga (picape carrega muito peso).', 'Balanceamento e calibragem: 35/30 lbf/pol² até 3 pessoas, 45/50 com carga plena (frio).'] });
M('rodas', { f: 'Chave de roda, torquímetro, macaco.', pre: 'Plano, freio de estacionamento acionado, 1ª ou ré engatada e roda diagonal calçada (manual).', d: ['Tire a calota central e afrouxe as porcas.', 'Levante pelo encaixe do chassi e tire as porcas e a roda.'], m: ['Porcas à mão, desça e aperte em sequência cruzada (manual).', 'Reaperte depois de uns 50 km; torque conferido nas revisões.'] });
M('estepe', {
  f: 'Chave de roda (a parte chanfrada aciona o guincho).',
  pre: 'Fica sob a traseira, pendurado num cabo.',
  d: ['Passe a chave pelo furo do para-choque até o eixo do guincho.', 'Gire baixando até o estepe chegar ao chão e poder sair.', 'Incline o retentor do cabo e solte a roda (manual).'],
  m: ['Roda deitada com a válvula para baixo e o retentor por dentro da abertura.', 'Gire até sentir dois cliques e puxe para conferir; não tensione demais (manual).']
});
M('guincho_estepe', { f: 'Soquetes.', pre: 'Baixe o estepe antes.', d: ['Solte os parafusos do guincho na travessa.'], m: ['Guincho firme; teste descendo e subindo.'] });
M('macaco', { f: 'Nenhuma.', pre: 'Na cabine dupla, junto ao painel traseiro, do lado direito (manual).', d: ['Gire o parafuso da capa de acabamento e tire o macaco.'], m: ['Guarde preso: equipamento solto na cabine é perigoso numa freada (manual).'] });

/* ---------- DIREÇÃO ---------- */
M('volante_dir', { f: 'Chave Torx, extrator de volante.', pre: SRS + ' Rodas retas.', d: ['Tire o airbag (veja airbag).', 'Marque o volante e solte a porca central.', 'Puxe com extrator.'], m: ['Cabo espiral centrado e volante na marca; porca no torque.'] });
M('coluna', { f: 'Soquetes, chave Torx.', pre: SRS + ' Rodas retas e volante travado.', d: ['Tire o volante, as capas e os comutadores.', 'Marque e solte a junta na caixa.', 'Solte as porcas sob o painel.'], m: ['Junta na marca, parafuso no torque.'] });
M('caixa_dir', {
  f: 'Soquetes, extrator de braço Pitman, recipiente, torquímetro.',
  pre: ELEV + ' Rodas retas.',
  d: ['Solte as mangueiras de pressão e retorno (tampe).', 'Marque e solte a junta da coluna.', 'Solte a porca e tire o braço Pitman com extrator.', 'Solte os 3 parafusos da caixa na longarina.'],
  m: ['Caixa no torque, braço Pitman na marca.', 'Mangueiras firmes; complete com Dexron II e gire o volante de batente a batente com o motor ligado para tirar o ar.', ALINHA]
});
M('braco_pitman', { f: 'Extrator de Pitman, extrator de terminal.', pre: ELEV + ' Rodas retas.', d: ['Solte a barra central do braço.', 'Marque o braço no eixo do setor, solte a porca e extraia.'], m: ['Braço na marca e porca no torque.', ALINHA] });
M('barra_central', { f: 'Extrator de terminal, soquetes.', pre: ELEV + ' Rodas retas.', d: ['Solte as barras de direção da barra central.', 'Solte a barra do braço Pitman e do braço intermediário.'], m: ['Porcas no torque, contrapinos novos.', ALINHA] });
M('braco_inter', { f: 'Soquetes, extrator.', pre: ELEV, d: ['Solte a barra central do braço.', 'Solte os 2 parafusos na longarina direita.'], m: ['Braço novo, parafusos no torque; lubrifique pela graxeira.', ALINHA] });
M('barras_dir', { f: 'Extrator de terminal, chaves.', pre: RODA, d: ['Solte o terminal da manga e o da barra central.', 'Conte as voltas da luva ao soltar.'], m: ['Mesmo número de voltas, porcas no torque e contrapinos novos.', ALINHA] });
M('bomba_dir', { f: 'Soquetes, recipiente.', pre: 'Motor frio.', d: ['Tire a correia de acessórios.', 'Solte as mangueiras (tampe) e os 3 parafusos.'], m: ['Bomba no torque, correia de volta.', 'Complete com Dexron II e gire o volante de batente a batente para tirar o ar.'] });
M('reserv_dir', { f: 'Alicate, recipiente.', pre: 'No lado direito do cofre.', d: ['Esvazie com seringa e solte as mangueiras.'], m: ['Dexron II até a marca; o sistema leva 1,26 L e não precisa de troca (manual).'] });
M('mang_dir', { f: 'Chaves de linha, recipiente.', pre: 'Motor desligado.', d: ['Solte as pontas e tampe.'], m: ['Anéis novos, conexões firmes; tire o ar girando o volante.'] });

/* ---------- AR-CONDICIONADO ---------- */
const GAS = 'Circuito aberto: o R-134a precisa ser recolhido com máquina antes; no fim, vácuo e carga de 450 g (manual), com anéis novos untados no óleo do compressor.';
M('compressor', { f: 'Máquina de recolher gás, soquetes.', pre: GAS + ' ' + BAT, d: ['Recolha o gás.', 'Tire a correia e desligue o conector.', 'Solte as linhas (tampe) e os parafusos.'], m: ['Óleo do compressor na quantidade do manual.', 'Vácuo, carga e teste.'] });
M('condensador', { f: 'Máquina de recolher gás, soquetes.', pre: GAS, d: ['Tire a grade e o ventilador auxiliar.', 'Solte as linhas e os suportes.'], m: ['Anéis novos, vácuo e carga.'] });
M('filtro_secador', { f: 'Máquina de recolher gás.', pre: GAS, d: ['Solte as conexões e o suporte.'], m: ['Filtro novo sempre que o circuito abrir.'] });
M('pressostato', { f: 'Chave de boca.', pre: 'Se estiver em válvula de serviço, sai sem recolher o gás; confira no manual.', d: ['Desligue o conector e desrosqueie.'], m: ['Anel novo untado com óleo do sistema.'] });
M('tubos_ac', { f: 'Máquina de recolher gás, chaves.', pre: GAS, d: ['Solte as pontas e as presilhas.'], m: ['Anéis novos, vácuo e carga.'] });
M('valv_exp', { f: 'Máquina de recolher gás, chave Allen.', pre: GAS, d: ['No corta-fogo, solte as linhas e a válvula.'], m: ['Anéis novos, vácuo e carga.'] });
M('evaporador', { f: 'Máquina de recolher gás, soquetes, ajudante.', pre: GAS + ' Serviço grande, atrás do painel.', d: ['Recolha o gás e solte as linhas no corta-fogo.', 'Tire o painel e a caixa de ar.'], m: ['Caixa vedada, dreno desobstruído; vácuo e carga.'] });
M('vent_interno', { f: 'Chave Philips.', pre: BAT, d: ['Tire o acabamento sob o porta-luvas.', 'Desligue o conector e solte o ventilador.'], m: ['Teste todas as velocidades.'] });
M('caixa_ar', { f: 'Soquetes, espátula, ajudante.', pre: GAS + ' A caixa sai com o painel fora.', d: ['Recolha o gás, solte as linhas e as mangueiras do aquecedor.', 'Tire o painel e solte a caixa.'], m: ['Vedação com o corta-fogo e dreno no lugar.'] });
M('comandos_clima', { f: 'Espátula plástica.', pre: BAT, d: ['Solte a moldura e o painel de comandos.', 'Desligue cabos e conectores.'], m: ['Cabos regulados e teste das saídas.'] });

/* ---------- INTERIOR ---------- */
M('painel', { f: 'Espátula plástica, soquetes, chaves.', pre: SRS + ' Fotografe os conectores.', d: ['Tire volante, capas, console, som, quadro e porta-luvas.', 'Tire o airbag do passageiro.', 'Solte os parafusos e puxe o painel com ajuda.'], m: ['Conectores travados antes de apertar; luz do airbag apaga.'] });
M('quadro', { f: 'Chave Philips, espátula.', pre: BAT, d: ['Solte a moldura.', 'Solte os parafusos e o conector.'], m: ['Conector travado; quadro novo pode pedir programação.'] });
M('radio', { f: 'Chave de remoção, espátula.', pre: 'Pode ser preciso reconfigurar depois (manual).', d: ['Solte a moldura e o som, desligando conectores e antena.'], m: ['Conectores e antena firmes.'] });
M('airbag_mot', { f: 'Chave Torx.', pre: SRS, d: ['Solte os 2 parafusos por trás do volante.', 'Puxe o módulo e desligue o conector.'], m: ['Conector com clique, parafusos no torque, ninguém na frente ao religar a bateria.'] });
M('airbag_pass', { f: 'Soquetes.', pre: SRS, d: ['Tire o porta-luvas.', 'Desligue o conector e solte o módulo.'], m: ['Conector travado; luz do airbag apaga.'] });
M('cabo_espiral', { f: 'Chave Torx.', pre: SRS + ' Rodas retas.', d: ['Tire o airbag, o volante e as capas.', 'Solte o cabo sem girar.'], m: ['Cabo novo vem travado no centro: tire a trava só depois de montado.'] });
M('srs', { f: 'Soquetes, scanner.', pre: SRS, d: ['Tire o console.', 'Desligue o conector e solte o módulo.'], m: ['Seta para a frente, parafusos no torque; apague os códigos.'] });
M('console', { f: 'Espátula, chave Philips.', pre: 'Nada.', d: ['Tire a coifa da alavanca.', 'Solte os parafusos e presilhas.'], m: ['Presilhas no lugar.'] });
M('bancos_diant', { f: 'Soquetes.', pre: BAT, d: ['Corra o banco e solte os 4 parafusos.', 'Desligue os conectores e tire.'], m: ['Parafusos no torque (segurança).'] });
M('banco_tras', { f: 'Soquetes.', pre: 'Nada.', d: ['Solte as travas do assento e do encosto.', 'Solte os parafusos.'], m: ['Cintos passando por cima do assento.'] });
M('cintos', { f: 'Soquetes, Torx.', pre: 'Cinto que travou numa batida é trocado.', d: ['Tire os acabamentos das colunas.', 'Solte as ancoragens e o retrator.'], m: ['Ancoragens no torque; teste puxando rápido.'] });
M('forros_portas', { f: 'Espátula plástica, chave Philips.', pre: FORRO, d: ['Tire os parafusos do puxador e o acabamento da maçaneta.', 'Solte as presilhas e levante o forro.', 'Desligue os comandos.'], m: ['Plástico de vedação colado; forro na borda do vidro.'] });
M('forros_portas_tras', { f: 'Espátula plástica, chave Philips.', pre: FORRO, d: ['Tire o parafuso do puxador.', 'Solte as presilhas e levante o forro.'], m: ['Plástico de vedação colado.'] });
M('retrovisor_int', { f: 'Chave Torx.', pre: 'Base colada no para-brisa.', d: ['Deslize o espelho para fora da base.'], m: ['Base solta: adesivo próprio para vidro.'] });
M('alto_falantes', { f: 'Chave Philips.', pre: 'Tire o forro da porta.', d: ['Solte os parafusos e o conector.'], m: ['Mesma impedância.'] });

/* ---------- CABINE E CAÇAMBA ---------- */
M('cabine', {
  f: 'Guincho com balancim ou ponte, soquetes, macacos.',
  pre: 'Serviço de oficina: a cabine sai inteira de cima do chassi. ' + BAT,
  d: ['Desligue o chicote, as mangueiras do aquecedor e do ar, os cabos e os tubos que passam do chassi para a cabine.', 'Solte a coluna da direção da caixa e a alavanca do câmbio.', 'Solte os parafusos dos coxins da carroceria.', 'Levante a cabine com o balancim, devagar, conferindo tudo.'],
  m: ['Coxins novos se gastos.', 'Cabine nos pinos de centragem, parafusos no torque.', 'Tudo religado e testado.']
});
M('corta_fogo', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Só se troca em reparo estrutural, com o painel e o cofre desmontados.'], m: ['Passa-cabos e vedações de volta.'] });
M('teto', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Tire as barras do teto, o forro, o para-brisa e o vidro traseiro.', 'Fure os pontos de solda.'], m: ['Teto soldado e selado; vidros colados de novo.'] });
M('colunas', { f: 'Equipamento de funilaria.', pre: FUNILARIA, d: ['Coluna amassada é reparada ou trocada em seção.'], m: ['Soldas nos pontos originais e medidas conferidas.'] });
M('capo', { f: 'Soquetes, fita crepe, ajudante.', pre: 'Risque a posição das dobradiças.', d: ['Com ajuda, solte os 4 parafusos das dobradiças.', 'Tire o capô.'], m: ['Parafusos na marca, frestas iguais.', 'Feche baixando até uns 30 cm e soltando (manual).'] });
M('tomada_capo', { f: 'Soquetes.', pre: 'Por baixo do capô.', d: ['Solte as porcas e tire a entrada de ar.'], m: ['Vedação com o intercooler no lugar.'] });
M('dobr_capo', { f: 'Soquetes.', pre: 'Tire o capô.', d: ['Solte a dobradiça na carroceria.'], m: ['Graxa no pino e capô regulado.'] });
M('fech_capo', { f: 'Soquetes.', pre: 'Marque a posição.', d: ['Solte o cabo e os parafusos.'], m: ['Fechadura na marca; teste a trava de segurança.'] });
M('grade', { f: 'Chave de fenda, soquetes.', pre: 'Abra o capô.', d: ['Solte as presilhas e parafusos de cima e de baixo.', 'Tire a grade para a frente.'], m: ['Presilhas encaixadas por igual.'] });
M('para_choque_d', { f: 'Soquetes.', pre: 'Desligue os faróis de neblina.', d: ['Solte os parafusos das caixas de roda.', 'Solte os 4 dos suportes nas longarinas.', 'Tire para a frente.'], m: ['Frestas iguais com os para-lamas e a grade.'] });
M('paralamas', { f: 'Soquetes.', pre: 'Tire o para-choque, a moldura e o forro da caixa de roda.', d: ['Solte os parafusos da borda do cofre, da frente e da coluna.', 'Tire o para-lama.'], m: ['Vedação nas emendas e frestas iguais.'] });
M('molduras', { f: 'Espátula, alicate de presilha.', pre: 'Nada.', d: ['Solte os parafusos de dentro da caixa de roda.', 'Puxe a moldura soltando as presilhas.'], m: ['Presilhas novas; nada de folga.'] });
M('portas', { f: 'Soquetes, macaco com pano, ajudante.', pre: 'Apoie a porta.', d: ['Desligue o conector e solte o limitador.', 'Marque e solte as dobradiças na coluna.'], m: ['Frestas e batente regulados.'] });
M('portas_tras', { f: 'Soquetes, ajudante.', pre: 'Apoie a porta.', d: ['Desligue o conector e solte o limitador.', 'Solte as dobradiças na coluna do meio.'], m: ['Frestas e batente regulados; teste a trava de criança.'] });
M('dobradicas', { f: 'Soquetes.', pre: 'Apoie a porta.', d: ['Tire a porta e solte a dobradiça.'], m: ['Graxa nos pinos.'] });
M('fech_portas', { f: 'Chave Torx.', pre: 'Tire o forro.', d: ['Solte as varetas e o conector.', 'Solte os 3 parafusos.'], m: ['Teste com a porta aberta.'] });
M('maq_vidro', { f: 'Soquete, espátula.', pre: 'Tire o forro.', d: ['Posicione e solte o vidro.', 'Prenda o vidro com fita e tire a máquina.'], m: ['Vidro nos trilhos.'] });
M('maq_vidro_tras', { f: 'Soquete, espátula.', pre: 'Tire o forro.', d: ['Solte o vidro e prenda com fita.', 'Tire a máquina.'], m: ['Vidro nos trilhos.'] });
M('vidros_portas', { f: 'Soquete.', pre: 'Tire o forro.', d: ['Solte os parafusos da máquina e tire o vidro por cima.'], m: ['Vidro nos trilhos.'] });
M('vidros_portas_tras', { f: 'Soquete.', pre: 'Tire o forro.', d: ['Solte os parafusos e tire o vidro.'], m: ['Vidro nos trilhos.'] });
M('para_brisa', { f: 'Fio de corte, ventosas, primer e cola.', pre: 'Serviço de instalador.', d: ['Tire limpadores e grade do torpedo.', 'Corte o cordão e tire o vidro.'], m: ['Primer e cordão contínuo; espere a cura.'] });
M('vidro_tras', { f: 'Fio de corte, ventosas, primer e cola.', pre: 'Vidro corrediço com moldura colada.', d: ['Desligue o desembaçador, se houver.', 'Corte o cordão da moldura e tire.'], m: ['Cordão novo e trilho limpo e lubrificado.'] });
M('retrovisores', { f: 'Soquete, espátula.', pre: 'Segure o espelho por fora.', d: ['Tire o acabamento por dentro e desligue o conector.', 'Solte as 3 porcas.'], m: ['Vedação no lugar.'] });
M('grade_torpedo', { f: 'Extrator de braço, chave de fenda.', pre: 'Marque os braços do limpador.', d: ['Tire os braços.', 'Solte as presilhas e puxe a grade.'], m: ['Dreno limpo de folhas.'] });
M('cacamba', {
  f: 'Guincho ou 4 ajudantes, soquetes.',
  pre: 'Tanque quase vazio.',
  d: ['Desligue o chicote das lanternas e da luz de placa.', 'Solte a mangueira do bocal e o respiro do tanque.', 'Solte os 6 parafusos dos coxins por baixo.', 'Levante a caçamba.'],
  m: ['Coxins bons, parafusos no torque.', 'Tudo religado; teste as luzes.']
});
M('tampa_cacamba', { f: 'Nenhuma, ajudante.', pre: 'Abra a tampa.', d: ['Segurando, solte os dois cabos das colunas.', 'Levante a tampa até uns 45° e puxe para tirá-la dos encaixes (manual).'], m: ['Encaixes engraxados; cabos presos antes de soltar a tampa.'] });
M('dobr_tampa', { f: 'Soquetes.', pre: 'Tire a tampa.', d: ['Solte o suporte da dobradiça.'], m: ['Graxa no encaixe.'] });
M('cabos_tampa', { f: 'Chave de fenda.', pre: 'Segure a tampa.', d: ['Solte as pontas do cabo.'], m: ['Cabo novo se desfiado.'] });
M('fech_tampa', { f: 'Chave Torx, espátula.', pre: 'Tire o acabamento interno da tampa.', d: ['Solte as varetas da maçaneta.', 'Solte as fechaduras.'], m: ['Varetas lubrificadas e batentes regulados.'] });
M('protetor_cacamba', { f: 'Chave Philips.', pre: 'Caçamba vazia.', d: ['Solte as fixações das bordas e levante o protetor.'], m: ['Lave e seque a caçamba antes de recolocar.'] });
M('para_choque_t', { f: 'Soquetes.', pre: 'Baixe o estepe; desligue a luz de placa.', d: ['Solte os 4 parafusos dos suportes.', 'Tire o para-choque.'], m: ['Furo do guincho alinhado.'] });
M('ganchos', { f: 'Soquetes, torquímetro.', pre: 'Presos na longarina.', d: ['Solte os 2 parafusos de cada gancho.'], m: ['Torque muito alto: gancho é item de segurança.'] });
M('rack_teto', { f: 'Chave Torx.', pre: 'Nada.', d: ['Solte as tampas e os parafusos.'], m: ['Vedação nova; até 45 kg no teto (manual).'] });
M('estribos', { f: 'Soquetes.', pre: ELEV, d: ['Solte os parafusos dos suportes nas longarinas.'], m: ['Parafusos novos se enferrujados.'] });
M('caixas_roda', { f: 'Chave de fenda, alicate de presilha.', pre: 'Tire a roda se precisar.', d: ['Solte as presilhas e tire o forro.'], m: ['Presilhas novas; lave o barro de dentro.'] });
M('borrachas', { f: 'Espátula plástica.', pre: 'Nada.', d: ['Puxe a borracha da aba.'], m: ['Borracha nova empurrada com a palma.'] });

/* ---------- CHASSI ---------- */
M('longarinas', { f: 'Medidor de chassi, equipamento de reparo de chassi.', pre: 'O chassi é a estrutura da picape: não se desmonta.', d: ['Depois de batida ou trinca, meça os pontos de referência.', 'Reparo só por oficina especializada em chassi.'], m: ['Parafusos dos componentes reapertados (plano da GM: 50.000 e 100.000 km).'] });
M('travessas', { f: 'Soquetes, macaco de transmissão.', pre: ELEV + ' Apoie o que a travessa sustenta.', d: ['Solte os parafusos nas longarinas.'], m: ['Parafusos no torque.'] });
M('coxins_cab', { f: 'Macaco com taco de madeira, soquetes.', pre: ELEV + ' Troque um por vez.', d: ['Solte o parafuso do coxim.', 'Levante a cabine uns centímetros e troque o coxim.'], m: ['Coxim novo e parafuso no torque.'] });
M('travessa_motor', { f: 'Guincho ou suporte de motor, soquetes.', pre: 'Apoie o motor e tire as bandejas inferiores.', d: ['Solte os coxins e os parafusos da travessa.'], m: ['Travessa no torque. ' + ALINHA] });
M('protetor_carter', { f: 'Soquetes.', pre: ELEV, d: ['Solte os 4 parafusos e tire.'], m: ['Protetor firme.'] });
M('protetor_transf', { f: 'Soquetes.', pre: ELEV, d: ['Solte os 4 parafusos e tire.'], m: ['Protetor firme.'] });
