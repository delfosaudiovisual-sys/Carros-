/* ===== Honda Civic LX 1.7 2005: código e como desmontar e montar cada peça (elétrica, transmissão, freios, suspensão, direção, interior e carroceria) =====
   Mesmo formato do arquivo anterior: oem só quando o código foi confirmado em catálogo; nos outros casos o app mostra o código de referência interno. */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['civic-g7'] = window.CAR_PROC['civic-g7'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Anote o código do rádio e desligue o negativo da bateria.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const RODA = 'Afrouxe as porcas da roda (chave 19 mm) com o carro no chão, levante pelos pontos da soleira, apoie em cavaletes e tire a roda.';
const SANGRIA = 'Sangre com fluido DOT 3 novo roda por roda, na sequência do manual de serviço Honda (começa pela dianteira esquerda), até sair sem bolhas em cada uma, sem deixar o reservatório secar.';
const PEDAL = 'Antes de andar, bombeie o pedal até ele ficar alto e firme.';
const ALINHA = 'Faça alinhamento depois.';
const SRS = 'Sistema de airbag: desligue o negativo da bateria e espere pelo menos 3 minutos antes de soltar qualquer conector amarelo. Guarde o módulo com a face estofada para cima, longe de calor.';
const FUNIL = 'Peça estrutural soldada: o serviço é de funilaria, com cortes e solda no lugar dos pontos de fábrica, e o carro conferido em gabarito.';
const PSF = 'Use só fluido de direção Honda PSF ou o equivalente que diga atender Honda; fluido de câmbio automático comum estraga os retentores.';
const SANGRA_DIR = 'Complete o reservatório, ligue o motor e gire o volante de batente a batente devagar, umas dez vezes, completando até o nível ficar estável e sem espuma.';

/* ---------- ELÉTRICA ---------- */
M('bateria', {
  f: 'Chave 10 mm, escova de terminal, vaselina.',
  pre: 'Tenha o código do rádio antes. Bateria nova do mesmo tamanho, capacidade e posição dos polos da original.',
  d: ['Desligue primeiro o negativo, depois o positivo (capa vermelha).', 'Solte o grampo de fixação na base da bateria.', 'Levante a bateria reta, sem inclinar.'],
  m: ['Base limpa, bateria assentada e grampo firme, sem esmagar a caixa.', 'Positivo primeiro, negativo por último. Terminais limpos e com vaselina por fora.', 'Digite o código do rádio e reprograme as estações. Com o motor em lenta, deixe 10 minutos para a central reaprender a marcha lenta.']
});
M('cabos_bat', {
  f: 'Chaves 10 e 12 mm, escova de aço, multímetro.',
  pre: BAT,
  d: ['Siga o cabo do terminal até a outra ponta: o positivo vai ao motor de partida e à caixa de fusíveis; o negativo vai à carroceria e ao câmbio.', 'Solte as presilhas do chicote pelo caminho.', 'Solte as pontas e tire o cabo.'],
  m: ['Pontos de aterramento lixados até o metal brilhar.', 'Cabo novo pelo mesmo caminho, longe do escape e das polias.', 'Meça a queda de tensão na partida: menos de 0,5 V em cada cabo.']
});
M('caixa_fus_motor', {
  f: 'Pinça de fusível (fica na tampa da caixa), multímetro, chave 10 mm.',
  pre: 'Desligue a ignição antes de tirar fusíveis e relés. ' + BAT + ' se for soltar a caixa.',
  d: ['Para trocar fusível ou relé: abra a tampa, veja o mapa impresso nela e puxe a peça reta.', 'Para soltar a caixa: solte os cabos de força presos com porca, os conectores de baixo e as travas de fixação.'],
  m: ['Fusível novo do mesmo valor (amperagem gravada no topo).', 'Relés na posição certa (são iguais: troque com um vizinho para testar).', 'Tampa encaixada até travar, para não entrar água.']
});
M('caixa_fus_painel', {
  f: 'Pinça de fusível, lanterna.',
  pre: 'Ignição desligada.',
  d: ['Abra a tampinha do painel embaixo, à esquerda do volante.', 'Confira o mapa na tampa e puxe o fusível suspeito.', 'Fusível queimado tem o filete partido.'],
  m: ['Fusível novo do mesmo valor.', 'Se queimar de novo, procure o curto antes de pôr um maior: fusível maior pode queimar o chicote.']
});
M('alternador', {
  f: 'Soquetes 10, 12 e 14 mm, chave para o tensor da correia, multímetro.',
  pre: BAT + ' Confira antes a correia e os cabos: tensão abaixo de 13,5 V com o motor ligado e faróis acesos aponta o alternador.',
  d: ['Tire a correia de acessórios aliviando o tensor.', 'Desligue o conector e a porca do cabo grosso (B+) atrás do alternador.', 'Solte os dois parafusos de fixação e tire o alternador por cima.'],
  m: ['Alternador nos suportes, parafusos no torque.', 'Cabo B+ firme e conector travado.', 'Correia no lugar, negativo da bateria. Meça 13,8 a 14,6 V com o motor ligado.']
});
M('motor_partida', {
  f: 'Soquetes 12 e 17 mm, extensões longas.',
  pre: BAT,
  d: ['Por cima do câmbio, tire a caixa do filtro se atrapalhar.', 'Solte a porca do cabo grosso e o conector do solenoide.', 'Solte os dois parafusos que prendem o motor de partida ao câmbio e tire-o.'],
  m: ['Encaixe no flange, parafusos no torque.', 'Cabo e conector no solenoide.', 'Negativo da bateria e teste a partida.']
});
M('chicote', {
  f: 'Chaves de fenda pequenas, limpa-contato, fita de chicote.',
  pre: BAT,
  d: ['Para um conector com mau contato: aperte a trava, separe e olhe se há zinabre ou terminal frouxo.', 'Para trocar um trecho: fotografe o caminho, solte as presilhas e os conectores e tire o chicote.'],
  m: ['Conectores limpos com limpa-contato, sem graxa comum.', 'Trechos emendados com solda e termorretrátil, nunca só com fita.', 'Presilhas no lugar, longe do escape e de bordas cortantes.']
});
M('farois', {
  alt: 'lâmpadas HB3 (9005) no farol alto e HB4 (9006) no baixo; confira a gravação na base da lâmpada antiga antes de comprar',
  f: 'Chave 10 mm, chave de fenda Phillips, espátula plástica.',
  pre: 'Lâmpada: troque por trás do farol, pelo cofre, sem tirar o farol. Não toque no vidro da lâmpada com os dedos.',
  d: ['Para trocar a lâmpada: gire o soquete um quarto de volta e puxe; desligue o conector.', 'Para tirar o farol: tire o para-choque dianteiro (as pontas dele cobrem a base do farol).', 'Desligue os conectores e solte os parafusos em cima e embaixo.', 'Puxe o farol para a frente.'],
  m: ['Farol nos pinos-guia, parafusos leves (plástico).', 'Conectores e para-choque.', 'Regule a altura do facho com o carro descarregado numa parede, pelos parafusos de ajuste atrás do farol.']
});
M('lanternas', {
  f: 'Chave 8 ou 10 mm.',
  pre: 'Lâmpadas: o acesso é por dentro do porta-malas, puxando o forro lateral.',
  d: ['Abra o porta-malas e solte o forro lateral atrás da lanterna.', 'Gire os soquetes e tire as lâmpadas, ou solte o conector para tirar a lanterna inteira.', 'Solte as porcas de plástico/metal por dentro e puxe a lanterna para fora.'],
  m: ['Vedação nova ou boa, porcas leves em cruz.', 'Conector e soquetes; teste posição, freio, seta e ré.', 'Forro no lugar. Se entrava água, aplique um filete de selante na vedação.']
});
M('piscas_lat', {
  f: 'Espátula plástica.',
  d: ['Empurre o repetidor para a frente (ou para trás, conforme o encaixe) e puxe a ponta solta.', 'Gire o soquete e tire a lâmpada.'],
  m: ['Lâmpada nova, soquete girado até travar.', 'Encaixe a ponta presa primeiro e empurre a outra até estalar.']
});
M('luz_freio', {
  f: 'Chave de fenda, espátula plástica.',
  d: ['Por dentro do carro, solte a tampa da luz sobre a prateleira traseira.', 'Tire o soquete e a lâmpada, ou solte os parafusos para tirar a luz inteira.'],
  m: ['Lâmpada nova e tampa encaixada.', 'Teste pisando no pedal.']
});
M('luz_placa', {
  f: 'Chave de fenda Phillips pequena.',
  d: ['Solte os parafusos da lente sobre a placa.', 'Puxe a lâmpada de esmagar reta.'],
  m: ['Lâmpada nova, lente com vedação boa e parafusos sem forçar o plástico.']
});
M('buzina', {
  f: 'Chave 10 ou 12 mm.',
  pre: 'Fica atrás do para-choque: em geral se alcança pela grade inferior ou tirando o forro da caixa de roda esquerda.',
  d: ['Desligue o conector.', 'Solte o parafuso do suporte e tire a buzina.'],
  m: ['Contatos limpos, suporte firme (buzina solta soa fraca).', 'Se não tocar, teste o fusível, o relé e o cabo espiral do volante.']
});
M('limpador', {
  f: 'Chaves 10 e 14 mm, extrator de braço (ou movimento de vai e vem), chave Phillips.',
  pre: 'Ligue e desligue o limpador pela chave para deixar o motor na posição de repouso antes de mexer.',
  d: ['Marque a posição das palhetas no vidro com fita.', 'Levante as capas, solte as porcas e puxe os braços (com extrator se estiverem presos no estriado).', 'Tire a grade do torpedo.', 'Desligue o conector, solte os parafusos do conjunto de varetas e tire motor e varetas juntos.'],
  m: ['Juntas das varetas engraxadas.', 'Conjunto nos coxins, parafusos e conector.', 'Grade e braços nas marcas de fita, porcas a cerca de 24 N·m. Teste com o vidro molhado.']
});
M('lavador', {
  f: 'Chave 10 mm, alicate, espátula plástica.',
  pre: 'O reservatório fica atrás do para-choque, do lado direito: tire o forro da caixa de roda direita.',
  d: ['Esvazie o reservatório.', 'Desligue o conector e a mangueira da bomba.', 'Puxe a bomba para cima, para fora da borracha de vedação.', 'Para o reservatório: solte os parafusos e tire-o pela caixa de roda.'],
  m: ['Borracha de vedação nova se ressecada; bomba encaixada até o fim.', 'Mangueira e conector, reservatório cheio com água e aditivo próprio.', 'Ajuste os esguichos com um alfinete.']
});
M('ign_chave', {
  f: 'Chave Phillips, broca e extrator (parafusos de cabeça quebrável, se houver).',
  pre: SRS + ' A chave nova (ou um cilindro novo com chaves novas) precisa ser cadastrada no imobilizador com scanner Honda.',
  d: ['Tire as capas da coluna de direção (parafusos por baixo).', 'Desligue o conector do comutador e o da antena do imobilizador em volta do tambor.', 'Para trocar só a parte elétrica: solte os parafusos do comutador atrás do cilindro.', 'O cilindro com a trava do volante é preso por parafusos que quebram a cabeça no aperto: precisam ser furados.'],
  m: ['Comutador novo encaixado no eixo, conectores.', 'Parafusos de cabeça quebrável novos apertados até a cabeça romper.', 'Cadastre as chaves e teste todas as posições, o alerta de chave esquecida e a partida.']
});
M('comutadores', {
  f: 'Chave Phillips, chaves Torx (para o airbag).',
  pre: SRS,
  d: ['Tire o airbag do motorista e o volante (veja Volante).', 'Tire as capas da coluna.', 'Desligue os conectores e solte as travas ou parafusos de cada chave (seta e faróis à esquerda, limpador à direita).'],
  m: ['Chaves novas encaixadas até travar, conectores.', 'Cabo espiral centrado, volante e airbag.', 'Teste setas (inclusive o retorno automático), faróis, limpador e lavador.']
});

/* ---------- TRANSMISSÃO ---------- */
M('cambio', {
  oem: [['Fluido MTF Honda', '08798-9031']],
  f: 'Macaco de transmissão, soquetes 12 a 17 mm, alavanca, suporte de motor, catraca de 3/8″ para o bujão.',
  pre: 'Troca de óleo: carro nivelado, bujão de abastecimento (na lateral) solto primeiro, depois o de dreno; cerca de 1,5 L de MTF até o óleo chegar na borda do furo. Para tirar o câmbio: ' + BAT + ' ' + ELEV,
  d: ['Drene o óleo do câmbio. Tire a bateria, a bandeja e a caixa do filtro.', 'Solte os cabos de engate no câmbio, o cilindro auxiliar da embreagem (sem abrir a linha), o sensor de velocidade, a luz de ré e os aterramentos.',
    'Tire o motor de partida, os semieixos e o tubo dianteiro do escape se atrapalhar.', 'Apoie o motor por cima ou por baixo, apoie o câmbio no macaco e solte o coxim do câmbio.',
    'Solte os parafusos câmbio–motor, afaste o câmbio reto até o eixo sair do disco e baixe.'],
  m: ['Graxa leve no estriado do eixo e embreagem centrada.', 'Câmbio reto nos pinos-guia, sem deixar pendurado no eixo; parafusos no torque.', 'Coxim, partida, semieixos com travas novas, cabos e cilindro auxiliar.', 'MTF novo até a borda do furo (bujões com arruelas novas). Teste todas as marchas parado e rodando.']
});
M('diferencial', {
  pre: 'O diferencial fica na carcaça do câmbio e divide o mesmo óleo: não tem bujão nem óleo próprio.',
  d: ['Para trocar rolamentos ou engrenagens, o câmbio sai do carro e é aberto na bancada (veja Câmbio).', 'Na bancada: separe as metades da carcaça, tire o conjunto do diferencial e os rolamentos com extrator.'],
  m: ['Rolamentos prensados e pré-carga conferida pelo manual (calços).', 'Retentores dos semieixos novos.', 'Câmbio montado, no carro, com MTF novo.']
});
M('embreagem', {
  alt: 'kit de disco, platô e rolamento para Civic 1.7 2001–2005 (confira o diâmetro do disco com o antigo)',
  f: 'Centralizador de disco, trava do volante, soquetes, torquímetro.',
  pre: 'Exige tirar o câmbio (veja Câmbio). Troque disco, platô e rolamento juntos e confira o volante.',
  d: ['Com o câmbio fora, trave o volante.', 'Afrouxe os parafusos do platô em cruz, uma volta por vez, para a mola aliviar por igual.', 'Tire o platô e o disco.', 'Confira o volante: trincas finas ou face vitrificada pedem retífica.'],
  m: ['Disco na posição certa (lado escrito "flywheel side" para o volante) e centralizado com a ferramenta.', 'Platô nos pinos-guia, parafusos em cruz em várias passadas até o torque.', 'Rolamento e garfo novos, graxa leve nos pontos de contato e no estriado.', 'Câmbio de volta. Sangre a embreagem se abriu a linha e ajuste a altura do pedal.']
});
M('rol_emb', {
  f: 'As mesmas do câmbio, graxa de alta temperatura.',
  pre: 'Sai com o câmbio fora; troque sempre com o kit de embreagem.',
  d: ['Com o câmbio separado, puxe o rolamento para fora da guia.', 'Desencaixe o garfo da articulação (pino com mola de trava).'],
  m: ['Graxa fina na guia, no pino do garfo e no contato com o rolamento.', 'Garfo encaixado até a mola travar; rolamento deslizando livre.']
});
M('cil_emb_mestre', {
  f: 'Chave de linha 10 mm, soquetes, alicate de trava, fluido DOT 3.',
  pre: 'Proteja a pintura: fluido de freio mancha. Esvazie o reservatório pequeno da embreagem com uma seringa.',
  d: ['Solte a linha no cilindro com chave de linha e tampe.', 'Por dentro do carro, tire a trava e o pino que ligam o empurrador ao pedal.', 'Solte as porcas no corta-fogo e tire o cilindro pelo cofre.'],
  m: ['Cilindro novo no corta-fogo, porcas, pino e trava no pedal.', 'Linha firme e reservatório com fluido novo.', 'Sangre a embreagem pelo cilindro auxiliar e confira altura e folga do pedal.']
});
M('cil_emb_aux', {
  f: 'Chave de linha 10 mm, soquete 12 mm, mangueira transparente, fluido DOT 3.',
  d: ['Solte a linha no cilindro e tampe.', 'Solte os dois parafusos que prendem o cilindro no câmbio.', 'Tire o cilindro com a haste.'],
  m: ['Graxa na ponta da haste, cilindro no lugar e parafusos.', 'Linha firme.', 'Sangria: mangueira no parafuso de sangria, ajudante pisa e segura, abra e feche até sair sem bolhas, sem deixar o reservatório secar.']
});
M('tubo_emb', {
  f: 'Chaves de linha 10 mm, fluido DOT 3.',
  d: ['Solte as conexões nas duas pontas com chave de linha e tampe.', 'Solte as presilhas do tubo pelo caminho e o grampo do flexível.'],
  m: ['Tubo novo pelo mesmo caminho, sem dobras.', 'Conexões firmes e sangria pelo cilindro auxiliar.']
});
M('pedal_emb', {
  f: 'Soquetes, chave de boca, graxa.',
  d: ['Por dentro do carro, tire a trava e o pino do empurrador do cilindro-mestre.', 'Desligue o interruptor do pedal (de partida) se for trocar o conjunto.', 'Solte o eixo do pedal no suporte.'],
  m: ['Buchas novas engraxadas, eixo e pino com trava.', 'Ajuste altura e folga do pedal pelo empurrador e pelo batente, como no manual.', 'Confira que o motor só dá partida com o pedal no fundo.']
});
M('semieixos', {
  f: 'Soquete 32 mm (porca do cubo), talhadeira para destravar a porca, extrator de pivô, alavanca.',
  pre: RODA + ' Drene o óleo do câmbio ou tenha um recipiente: sai óleo quando o semieixo deixa o câmbio. No lado direito, o semieixo encaixa num eixo intermediário preso atrás do bloco.',
  d: ['Destrave o colarinho amassado da porca do cubo e solte a porca com o carro no chão ou o freio pisado.', 'Solte a bieleta da barra e o pivô da bandeja (extrator).', 'Puxe a manga para fora e tire a ponta do semieixo do cubo.', 'Alavanque a junta interna para fora do câmbio (ou do eixo intermediário) com um tranco curto.'],
  m: ['Anel-trava novo na ponta interna; empurre até sentir o encaixe.', 'Ponta externa no cubo, pivô e bieleta.', 'Porca do cubo nova no torque do manual (≈ 181 N·m, com o carro no chão) e colarinho amassado no rasgo.', 'Complete o óleo do câmbio.']
});
M('cabos_cambio', {
  f: 'Alicate de trava, chaves 10 e 12 mm.',
  pre: 'Tire a caixa do filtro e a bateria para chegar às pontas no câmbio; por dentro, tire o console.',
  d: ['No câmbio, tire as travas e as arruelas e desencaixe as pontas dos cabos das alavancas.', 'Solte os suportes dos cabos no câmbio.', 'No console, solte as pontas na base da alavanca e o suporte.', 'Solte a borracha do corta-fogo e puxe os cabos para dentro do carro.'],
  m: ['Cabos novos pelo mesmo caminho, sem curvas fechadas.', 'Borracha vedando o corta-fogo.', 'Pontas e travas nas alavancas; confira que engatam todas as marchas e a ré com a alavanca centrada.']
});
M('alavanca', {
  f: 'Chave Phillips, soquetes 10 e 12 mm, espátula plástica.',
  d: ['Puxe a bola da alavanca (rosqueada) e a coifa.', 'Tire o console central.', 'Solte as pontas dos cabos e os parafusos da base da alavanca.'],
  m: ['Buchas novas engraxadas, base parafusada.', 'Cabos encaixados e travados.', 'Console, coifa e bola. Teste as marchas.']
});

/* ---------- FREIOS ---------- */
M('pedal_freio', {
  f: 'Soquetes, chave de boca, alicate de trava.',
  d: ['Tire a trava e o pino que ligam o empurrador do servo ao pedal.', 'Desligue o interruptor da luz de freio.', 'Solte o eixo do pedal no suporte.'],
  m: ['Buchas engraxadas, eixo e pino com trava nova.', 'Ajuste a altura do pedal e o interruptor da luz de freio (as luzes devem acender logo no começo do curso).', 'Confira a folga livre do pedal.']
});
M('servo', {
  f: 'Soquetes 12 mm, chave de linha 10 mm, fluido DOT 3.',
  pre: 'Teste antes: com o motor desligado, pise algumas vezes; segure o pedal e ligue o motor. O pedal deve baixar um pouco.',
  d: ['Tire o cilindro-mestre do servo sem soltar as linhas, se der para afastar com cuidado; senão, solte as linhas e tampe.', 'Desligue a mangueira de vácuo.', 'Por dentro, solte o pino do pedal e as 4 porcas do servo no corta-fogo.', 'Tire o servo pelo cofre.'],
  m: ['Confira a altura da haste de saída do servo novo (folga até o cilindro-mestre).', 'Servo no corta-fogo, porcas, pino do pedal.', 'Cilindro-mestre e mangueira de vácuo. Se abriu linhas: ' + SANGRIA]
});
M('cil_mestre', {
  f: 'Chave de linha 10 mm, soquete 12 mm, morsa e varetas para sangria na bancada.',
  pre: 'Fluido de freio mancha a pintura: proteja com pano. Tire o fluido do reservatório com seringa.',
  d: ['Desligue o conector do sensor de nível e a mangueira do reservatório da embreagem, se ligada.', 'Solte as linhas com chave de linha e tampe.', 'Solte as 2 porcas no servo e tire o cilindro.'],
  m: ['Sangre o cilindro novo na bancada com as varetas, antes de montar.', 'Cilindro no servo, porcas e linhas sem cruzar rosca.', SANGRIA, PEDAL]
});
M('reserv_freio', {
  oem: [['Fluido DOT 3 Honda', '08798-9008']],
  f: 'Seringa, fluido DOT 3 novo de frasco lacrado.',
  pre: 'Troque o fluido a cada 3 anos. Não misture tipos (DOT 5 de silicone nunca).',
  d: ['Tire o fluido velho com seringa.', 'Para trocar o reservatório: solte o pino ou parafuso de fixação e puxe-o das borrachas do cilindro-mestre.'],
  m: ['Borrachas de vedação novas, reservatório empurrado até o fim.', 'Complete até MAX e sangre se entrou ar.']
});
M('tubos_freio', {
  f: 'Chaves de linha 10 mm, curvador de tubo, arruelas de cobre novas.',
  pre: ELEV + ' Tampe o reservatório com plástico sob a tampa para gotejar menos.',
  d: ['Solte as conexões com chave de linha (chave comum espana a porca).', 'Para flexível: segure o lado do tubo, solte o flexível e o grampo do suporte; na pinça, solte o parafuso oco com as duas arruelas.', 'Solte as presilhas do tubo pelo caminho.'],
  m: ['Tubo novo do mesmo comprimento e bitola, curvado sem amassar; flexível sem torção.', 'Parafuso oco com arruelas de cobre novas.', SANGRIA, PEDAL]
});
M('pincas', {
  f: 'Soquetes 12 mm (guias) e 17 mm (suporte), chave de linha, graxa de silicone para pinos-guia.',
  pre: RODA,
  d: ['Para trocar só pastilhas, a pinça não sai do flexível (veja Pastilhas).', 'Para tirar a pinça: solte o parafuso oco do flexível (arruelas de cobre) e tampe.', 'Solte os 2 parafusos-guia e tire a pinça.', 'Para tirar o suporte: solte os 2 parafusos grandes atrás da manga.'],
  m: ['Suporte com os parafusos a 108 N·m; pinos-guia limpos e com graxa de silicone, borrachas inteiras.', 'Pinça sobre as pastilhas, guias a ≈ 23 N·m.', 'Flexível com arruelas novas. ' + SANGRIA, PEDAL]
});
M('pastilhas', {
  alt: 'pastilha dianteira de Civic 1.7 2001–2005 (compare o formato com a antiga)',
  f: 'Soquete 12 mm, recolhedor de pistão (ou grampo), graxa de silicone, limpa-freio.',
  pre: RODA + ' Troque sempre as duas rodas do eixo.',
  d: ['Solte o parafuso-guia de baixo e gire a pinça para cima, apoiada no pino de cima.', 'Tire as pastilhas e as plaquinhas antirruído.', 'Recolha o pistão devagar, de olho no reservatório para não transbordar.'],
  m: ['Plaquinhas de retenção limpas e com um toque de graxa; pastilhas novas com a lingueta de aviso para dentro.', 'Baixe a pinça, guia a ≈ 23 N·m.', PEDAL, 'Assente com freadas suaves nos primeiros 200 km.']
});
M('discos', {
  f: 'Soquetes 12 e 17 mm, chave de impacto manual (Phillips), dois parafusos M8 para empurrar o disco, micrômetro.',
  pre: RODA,
  d: ['Tire a pinça sem pendurar pelo flexível (amarre com arame) e o suporte.', 'Solte os 2 parafusos de posição (Phillips) com a chave de impacto manual.', 'Se o disco estiver preso, rosqueie dois parafusos M8 nos furos rosqueados do disco para empurrá-lo.'],
  m: ['Cubo limpo, sem ferrugem, para o disco assentar reto.', 'Disco novo desengraxado, parafusos de posição leves (≈ 9 N·m).', 'Suporte a 108 N·m, pinça e pastilhas novas.', PEDAL]
});
M('tambores', {
  f: 'Chave Phillips de impacto, dois parafusos M8, martelo de borracha.',
  pre: RODA + ' Freio de mão solto.',
  d: ['Solte os parafusos de posição do tambor.', 'Rosqueie dois parafusos M8 nos furos de extração e aperte por igual até o tambor soltar.', 'Se a borda gasta prender nas sapatas, recolha a regulagem automática.'],
  m: ['Diâmetro conferido (máximo gravado no tambor).', 'Tambor limpo por dentro, parafusos de posição.', 'Pise no freio várias vezes para a regulagem automática encostar as sapatas; regule o freio de mão.']
});
M('sapatas', {
  f: 'Alicate de mola de freio, ferramenta de mola de retenção, chave de linha 10 mm.',
  pre: 'Tire o tambor. Troque os dois lados juntos. Não sopre o pó: limpe com limpa-freio.',
  d: ['Fotografe a montagem.', 'Tire as molas de retenção (gire o copinho), a mola de cima e a de baixo.', 'Desencaixe o cabo do freio de mão da sapata e tire as sapatas com o regulador.', 'Cilindro de roda: solte a linha e os 2 parafusos por trás do espelho.'],
  m: ['Regulador limpo e lubrificado, rosca girando livre.', 'Sapatas, molas e cabo como na foto; um toque de graxa nos pontos de apoio no espelho.', 'Tambor; se trocou o cilindro: ' + SANGRIA, 'Regule o freio de mão.']
});
M('freio_mao', {
  f: 'Chave 10 ou 12 mm (porca de regulagem), chave Phillips para o console.',
  pre: 'Freio de mão que não segura com 4 a 8 cliques pede regulagem. Primeiro pise o freio várias vezes para a regulagem automática das sapatas agir.',
  d: ['Para regular: tire a tampinha ou o console traseiro e chegue à porca na base da alavanca.', 'Para trocar cabos: tire o console, solte a porca de regulagem, tire os tambores e desencaixe os cabos das sapatas e dos suportes.'],
  m: ['Gire a porca até a alavanca travar as rodas dentro de 4 a 8 cliques.', 'Solte a alavanca e gire as rodas à mão: não podem raspar.', 'Console no lugar e luz do freio de mão apagando quando solta.']
});
M('mang_vacuo', {
  f: 'Alicate de abraçadeira.',
  d: ['Solte a abraçadeira no coletor e puxe a mangueira.', 'Puxe a outra ponta da válvula do servo.'],
  m: ['Mangueira própria para vácuo, com a válvula de retenção na direção da seta (para o motor).', 'Abraçadeiras firmes; teste o servo.']
});

/* ---------- SUSPENSÃO E RODAS ---------- */
M('amort_diant', {
  f: 'Compressor de molas, soquetes 14, 17 e 19 mm, chave para segurar a haste.',
  pre: RODA + ' Troque sempre em par.',
  d: ['Solte o flexível de freio do suporte no amortecedor (sem abrir a linha).', 'Solte a bieleta da barra estabilizadora.', 'Solte a fixação da base do amortecedor na manga e afaste a manga.', 'No cofre, solte as porcas do topo (sem a porca central da haste) e tire o conjunto por baixo.', 'Na bancada, comprima a mola, solte a porca central e separe as peças.'],
  m: ['Monte com mola comprimida, coxim e batente novos; porca central com a mola ainda comprimida.', 'Conjunto na torre, porcas do topo a ≈ 39 N·m.', 'Base na manga, bieleta e flexível.', 'Aperto final das buchas com o carro no chão. ' + ALINHA]
});
M('molas_diant', {
  f: 'Compressor de molas.',
  pre: 'A mola sai junto com o amortecedor: siga Amortecedores dianteiros.',
  d: ['Com o conjunto fora, comprima a mola com o compressor em lados opostos.', 'Solte a porca da haste segurando a haste.', 'Tire o coxim e a mola.'],
  m: ['Mola nova com a ponta encaixada no degrau do prato de baixo.', 'Coxim alinhado e porca da haste.', 'Solte o compressor devagar e por igual.']
});
M('coxins_amort', {
  f: 'Compressor de molas, soquetes.',
  pre: 'Sai com o amortecedor fora: siga Amortecedores dianteiros.',
  d: ['Com a mola comprimida, solte a porca da haste.', 'Tire o coxim e o rolamento.'],
  m: ['Coxim e rolamento novos na mesma posição.', 'Porca da haste no torque.', 'Conjunto de volta e alinhamento.']
});
M('bandejas', {
  f: 'Soquetes 17 a 22 mm, extrator de pivô, macaco.',
  pre: RODA + ' Bucha e pivô gastos geralmente se trocam com a bandeja inteira.',
  d: ['Solte a trava e a porca castelo do pivô e separe o pivô da manga com extrator.', 'Solte o parafuso da bucha da frente e os da bucha traseira (de compliância) no subchassi.', 'Tire a bandeja.'],
  m: ['Bandeja no lugar com os parafusos só encostados.', 'Pivô na manga, porca castelo e contrapino novo.', 'Com o carro no chão (ou a suspensão erguida até a altura normal), aperte as buchas. ' + ALINHA]
});
M('barra_estab', {
  f: 'Soquetes 14 mm, chave Allen ou de boca para segurar o pino da bieleta.',
  pre: ELEV,
  d: ['Bieleta: segure o pino com a chave e solte as porcas de cima (no amortecedor) e de baixo (na barra).', 'Barra: solte as bieletas e as abraçadeiras das buchas no subchassi.'],
  m: ['Buchas novas na marca da barra, abraçadeiras.', 'Bieletas segurando o pino, porcas no torque.', 'Aperto com as rodas no chão para não pré-tensionar a barra.']
});
M('subchassi', {
  f: 'Macacos, suporte de motor, soquetes grandes, torquímetro.',
  pre: 'Serviço grande: o subchassi segura bandejas, barra e coxins. Apoie o motor por cima antes. ' + ELEV,
  d: ['Tire as rodas, solte os pivôs das bandejas, as bieletas e os coxins dianteiro e traseiro do motor.', 'Solte o escape dianteiro e a caixa de direção, se presa a ele.', 'Apoie o subchassi num macaco e solte os parafusos grandes nas longarinas.', 'Baixe devagar, conferindo chicotes e mangueiras.'],
  m: ['Suba o subchassi alinhado nos pinos-guia ou nas marcas.', 'Parafusos no torque do manual.', 'Coxins, pivôs, bieletas e escape. ' + ALINHA]
});
M('mangas', {
  f: 'Soquete 32 mm, extratores de pivô e de terminal, prensa para o rolamento.',
  pre: RODA + ' Rolamento prensado: a troca é feita na prensa, com a manga fora.',
  d: ['Tire pinça e suporte (sem pendurar pelo flexível) e o disco.', 'Destrave e solte a porca do cubo.', 'Solte o terminal de direção e o pivô da bandeja com extratores.', 'Solte a base do amortecedor e tire a manga, afastando o semieixo.', 'Na prensa, tire o cubo, o anel-trava e o rolamento.'],
  m: ['Rolamento novo prensado pela pista externa, anel-trava e cubo prensado.', 'Manga no amortecedor, pivô e terminal com contrapinos novos.', 'Porca do cubo nova (≈ 181 N·m) e colarinho amassado.', 'Disco, suporte, pinça. ' + ALINHA]
});
M('braco_sup_t', {
  f: 'Soquetes 14 e 17 mm.',
  pre: RODA + ' Apoie a manga traseira por baixo com um macaco.',
  d: ['Solte o parafuso do braço na manga.', 'Solte as porcas ou parafusos do braço na carroceria (pelo vão da roda; em alguns acesso por dentro do porta-malas).', 'Tire o braço.'],
  m: ['Braço novo com os parafusos encostados.', 'Levante a manga até a altura normal e aperte.', ALINHA]
});
M('braco_inf_t', {
  f: 'Soquetes 14 a 19 mm, macaco.',
  pre: RODA + ' Apoie o braço por baixo: a mola empurra.',
  d: ['Solte o parafuso de baixo do amortecedor no braço.', 'Solte o braço na manga.', 'Solte o braço na travessa (marque a posição se a fixação for excêntrica de alinhamento).', 'Baixe o macaco devagar e tire o braço.'],
  m: ['Braço no lugar com os parafusos encostados (excêntrico na marca).', 'Amortecedor no braço.', 'Levante até a altura normal e aperte tudo. ' + ALINHA]
});
M('braco_long_t', {
  f: 'Soquetes 14 a 19 mm.',
  pre: RODA + ' Freio de mão solto.',
  d: ['Solte o suporte do cabo do freio de mão e do flexível no braço.', 'Solte o braço na manga.', 'Solte o suporte da frente na carroceria (bucha grande).', 'Tire o braço.'],
  m: ['Bucha nova prensada ou braço novo.', 'Parafusos encostados; aperte com a suspensão na altura normal.', 'Suportes de cabo e flexível. ' + ALINHA]
});
M('cubo_tras', {
  f: 'Soquetes, extrator, prensa (se o rolamento for prensado).',
  pre: RODA,
  d: ['Tire o tambor.', 'Conforme a versão, solte a porca do cubo (com a tampinha) ou os parafusos do cubo com rolamento integrado por trás do espelho.', 'Para a manga: solte flexível, cabo do freio de mão, os três braços e o amortecedor e tire a manga.'],
  m: ['Cubo novo no torque do manual (porca nova travada).', 'Manga nos braços com parafusos encostados, aperto na altura normal.', 'Tambor, regulagem do freio de mão. ' + ALINHA]
});
M('amort_tras', {
  f: 'Soquetes 12, 14 e 17 mm, compressor de molas, espátula para o forro do porta-malas.',
  pre: RODA + ' Troque em par. Apoie o braço inferior com macaco.',
  d: ['No porta-malas, solte o forro lateral para chegar ao topo do amortecedor.', 'Solte o parafuso de baixo no braço inferior.', 'Solte as porcas do topo e tire o conjunto por baixo.', 'Na bancada, comprima a mola e separe.'],
  m: ['Monte coxins e batente novos com a mola comprimida.', 'Topo no lugar, porcas no torque; base no braço.', 'Aperto final com o carro no chão. Forro de volta.']
});
M('molas_tras', {
  f: 'Compressor de molas.',
  pre: 'A mola sai junto com o amortecedor traseiro: siga Amortecedores traseiros.',
  d: ['Comprima a mola, solte a porca da haste e tire a mola.'],
  m: ['Mola nova com as pontas nos degraus dos pratos.', 'Solte o compressor devagar e por igual.']
});
M('travessa_tras', {
  f: 'Macacos, soquetes grandes, torquímetro.',
  pre: ELEV + ' Serviço de oficina: a travessa segura os braços inferiores.',
  d: ['Solte os braços inferiores da travessa (marque as posições de alinhamento).', 'Apoie a travessa num macaco e solte os parafusos na carroceria.', 'Baixe devagar.'],
  m: ['Travessa nos pinos-guia, parafusos no torque.', 'Braços nas marcas, aperto na altura normal. ' + ALINHA]
});
M('pneus', {
  f: 'Máquina de desmontar pneu e balanceadora (borracharia), calibrador.',
  pre: 'Medida original 185/65 R15. Pressão na etiqueta da coluna da porta do motorista, com o pneu frio.',
  d: ['Tire a roda do carro.', 'Na borracharia: esvazie, descole os talões e tire o pneu com a máquina.'],
  m: ['Pneu novo no sentido indicado (se direcional), válvula nova.', 'Balanceamento e calibragem. Pneus novos vão no eixo traseiro se forem só dois.']
});
M('rodas', {
  f: 'Chave de roda 19 mm, torquímetro, macaco.',
  pre: 'Carro em piso plano, freio de mão puxado e engatado em primeira ou ré. Calce a roda oposta.',
  d: ['Tire a calota (se houver).', 'Afrouxe as 4 porcas meia volta com o pneu no chão.', 'Levante pelo ponto da soleira, tire as porcas e a roda.'],
  m: ['Assento das porcas e cubo limpos (sem óleo na rosca).', 'Porcas encostadas em cruz, baixe o carro e aperte em cruz a 108 N·m.', 'Reaperte depois de 50 km.']
});
M('calotas', {
  f: 'Chave de fenda envolta em pano.',
  d: ['Encaixe a chave no recorte da borda da calota e puxe para fora em volta.'],
  m: ['Alinhe o recorte da calota com a válvula do pneu e bata com a palma da mão em volta até encaixar.']
});
M('estepe', {
  f: 'Chave de roda, macaco (tudo no porta-malas).',
  pre: 'Confira a pressão do estepe junto com os outros pneus; o estepe temporário usa pressão mais alta, indicada nele.',
  d: ['Levante o tapete do porta-malas.', 'Solte o parafuso central à mão.', 'Levante o estepe pelo vão.'],
  m: ['Guarde com a face de fora para baixo no poço, parafuso central apertado à mão.', 'Pneu furado no lugar do estepe só se couber; senão, prenda bem para não voar numa freada.']
});
M('macaco', {
  d: ['Fica no porta-malas, preso por um suporte com borboleta.', 'Gire a borboleta e tire o macaco.'],
  m: ['Use só nos pontos de apoio da soleira (entre os dois recortes, perto de cada roda), em piso firme.', 'Guarde fechado e preso para não fazer barulho.']
});

/* ---------- DIREÇÃO ---------- */
M('volante_dir', {
  f: 'Chave Torx T30 (airbag), soquete para a porca do volante, extrator de volante.',
  pre: SRS + ' Rodas retas e volante centrado.',
  d: ['Tire as tampinhas laterais do volante e solte os parafusos Torx do airbag.', 'Puxe o airbag, solte a trava do conector amarelo e guarde o módulo com a face para cima.', 'Desligue o conector da buzina, marque a posição do volante no eixo e solte a porca.', 'Puxe o volante com o extrator (sem martelar o eixo).'],
  m: ['Confira que o cabo espiral está centrado.', 'Volante na marca, conectores passando pelo vão, porca a ≈ 39 N·m.', 'Airbag com o conector travado e parafusos no torque. Ligue a bateria com ninguém na frente do volante: a luz do SRS deve apagar em alguns segundos.']
});
M('coluna', {
  f: 'Soquetes 10 a 14 mm, chave Phillips.',
  pre: SRS + ' Rodas retas; marque a junta da coluna com o pinhão da caixa.',
  d: ['Tire airbag, volante, capas e comutadores.', 'Desligue o comutador de ignição e a antena do imobilizador.', 'Solte o parafuso da junta universal no pinhão da caixa (embaixo, junto ao pedal).', 'Solte as porcas e parafusos de fixação sob o painel e tire a coluna.'],
  m: ['Junta na marca do pinhão, parafuso novo no torque.', 'Fixações da coluna, conectores, comutadores, capas.', 'Volante e airbag; luz do SRS apagando.']
});
M('caixa_dir', {
  oem: [['Fluido da direção Honda PSF', '08206-9002']],
  f: 'Extratores de terminal, soquetes grandes, chaves de linha, macaco para o subchassi se precisar.',
  pre: PSF + ' ' + RODA + ' Rodas retas e volante travado (tire a chave).',
  d: ['Tire o fluido do reservatório com seringa.', 'Solte os terminais das mangas com extrator.', 'Solte a junta da coluna no pinhão (marque a posição).', 'Solte as linhas de pressão e retorno na caixa e tampe.', 'Solte as braçadeiras da caixa e tire-a pelo lado, girando conforme o espaço; em alguns casos é preciso baixar a traseira do subchassi.'],
  m: ['Caixa nas braçadeiras com as buchas novas.', 'Pinhão na marca da coluna, linhas com anéis novos, terminais com contrapinos novos.', SANGRA_DIR, ALINHA]
});
M('barras_axiais', {
  f: 'Extrator de terminal, chave para a barra axial (ou chave grifo), alicate de abraçadeira.',
  pre: RODA + ' Marque ou conte as voltas do terminal para não perder muito o alinhamento.',
  d: ['Solte a contraporca do terminal e o terminal da manga com extrator.', 'Desrosqueie o terminal contando as voltas.', 'Para a barra axial: solte as abraçadeiras da coifa, puxe a coifa, destrave a arruela e desrosqueie a barra da cremalheira.'],
  m: ['Barra axial nova com arruela-trava, no torque, e coifa com abraçadeiras.', 'Terminal pelo mesmo número de voltas, contraporca.', 'Terminal na manga com contrapino novo. ' + ALINHA]
});
M('bomba_dir', {
  oem: [['Fluido da direção Honda PSF', '08206-9002']],
  f: 'Soquetes 10 a 14 mm, chave de linha, alicate de abraçadeira, seringa.',
  pre: PSF + ' Motor frio.',
  d: ['Tire o fluido do reservatório com seringa.', 'Tire a correia de acessórios.', 'Solte a mangueira de sucção (abraçadeira) e a linha de pressão (parafuso oco com anel) e tampe.', 'Solte os parafusos da bomba no suporte e tire-a.'],
  m: ['Bomba no suporte, parafusos a ≈ 24 N·m.', 'Linha de pressão com anel novo, sucção com abraçadeira firme.', 'Correia no lugar. ' + SANGRA_DIR]
});
M('reserv_dir', {
  oem: [['Fluido da direção Honda PSF', '08206-9002']],
  f: 'Alicate de abraçadeira, seringa.',
  pre: PSF,
  d: ['Tire o fluido com seringa.', 'Solte as mangueiras de retorno e de sucção e tampe.', 'Tire o reservatório do suporte.'],
  m: ['Reservatório no suporte, mangueiras com abraçadeiras firmes.', SANGRA_DIR, 'Nível entre MIN e MAX com o motor desligado.']
});
M('mang_dir', {
  f: 'Chaves de linha, alicate de abraçadeira, anéis de vedação novos.',
  pre: PSF + ' Tenha um recipiente: sai fluido.',
  d: ['Siga a mangueira das duas pontas: pressão (da bomba à caixa, com conexões roscadas) ou retorno e sucção (com abraçadeiras).', 'Solte as pontas e os suportes pelo caminho e tampe.'],
  m: ['Mangueira nova pelo mesmo caminho, longe do escape e sem torção.', 'Anéis novos nas conexões, abraçadeiras firmes.', SANGRA_DIR]
});

/* ---------- INTERIOR E SEGURANÇA ---------- */
M('painel', {
  f: 'Chaves Phillips e 10 mm, espátulas plásticas, Torx (airbag).',
  pre: SRS + ' Tirar o painel inteiro é serviço longo: fotografe cada conector e parafuso.',
  d: ['Porta-luvas: abra, aperte as laterais para passar dos batentes e desencaixe as dobradiças.', 'Para o painel inteiro: tire volante, coluna (abaixada), console, rádio, comandos do ar, quadro e o airbag do passageiro.', 'Solte os conectores, os parafusos visíveis e os de trás das tampas laterais.', 'Afaste o painel pela porta do passageiro.'],
  m: ['Painel nos pinos, parafusos e conectores conforme as fotos.', 'Peças na ordem inversa, airbags por último.', 'Teste luzes, rádio, ar e a luz do SRS.']
});
M('quadro', {
  f: 'Chave Phillips, espátula plástica.',
  pre: BAT,
  d: ['Abaixe a coluna de direção (alavanca de regulagem, se houver) e cubra com pano.', 'Solte a moldura do quadro (parafusos e presilhas).', 'Solte os parafusos do quadro e puxe-o, desligando os conectores atrás.'],
  m: ['Conectores travados, quadro e moldura.', 'Teste todos os ponteiros e luzes-espia ao ligar a chave (SRS, óleo, bateria, injeção).']
});
M('radio', {
  f: 'Chave Phillips, espátula plástica (ou chaves de extração do rádio).',
  pre: 'Tenha o código do rádio. ' + BAT,
  d: ['Solte a moldura central do painel com espátula.', 'Solte os parafusos do suporte do rádio.', 'Puxe o rádio e desligue a antena e o conector.'],
  m: ['Conector e antena, rádio no suporte, moldura.', 'Digite o código e acerte as estações e o relógio.']
});
M('airbag_mot', {
  f: 'Chave Torx T30.',
  pre: SRS,
  d: ['Tire as tampinhas dos lados do volante.', 'Solte os 2 parafusos Torx do módulo.', 'Puxe o módulo, levante a trava do conector amarelo e desligue.', 'Guarde com a face estofada para cima.'],
  m: ['Conector até travar, módulo no centro sem prender fios.', 'Parafusos a ≈ 10 N·m.', 'Ligue a bateria sem ninguém na frente do volante e confira a luz do SRS apagando.']
});
M('airbag_pass', {
  f: 'Soquete 10 mm, chave Phillips.',
  pre: SRS,
  d: ['Tire o porta-luvas para chegar à fixação e ao conector.', 'Desligue o conector amarelo.', 'Solte as porcas do módulo no suporte e tire-o (em alguns é preciso tirar a parte de cima do painel).'],
  m: ['Módulo no suporte, porcas no torque, conector travado.', 'Porta-luvas. Ligue a bateria e confira a luz do SRS.']
});
M('srs', {
  f: 'Soquete 10 mm, chaves Torx.',
  pre: SRS + ' Central nova ou de outro carro precisa de diagnóstico Honda; depois de um disparo, a central sai de serviço.',
  d: ['Tire o console central.', 'Desligue os conectores amarelos da central.', 'Solte os parafusos no assoalho e tire a central.'],
  m: ['Central com a seta para a frente do carro, parafusos no torque (a fixação firme é essencial para ela sentir a batida).', 'Conectores travados, console.', 'Luz do SRS deve apagar em alguns segundos; se piscar, leve para diagnóstico.']
});
M('cabo_espiral', {
  f: 'Chave Torx, extrator de volante, chave Phillips.',
  pre: SRS + ' Rodas retas.',
  d: ['Tire o airbag e o volante.', 'Tire as capas da coluna.', 'Desligue os conectores e solte as travas do cabo espiral.', 'Não gire o cabo solto: ele rompe.'],
  m: ['Centre o cabo novo (ou confira o centro do usado): gire devagar no sentido horário até parar e volte cerca de 2,5 voltas, até a seta alinhar com a marca.', 'Encaixe na coluna com as rodas retas, conectores.', 'Volante e airbag; buzina e luz do SRS funcionando.']
});
M('console', {
  f: 'Chave Phillips, espátula plástica.',
  d: ['Tire a bola da alavanca de câmbio e a coifa.', 'Solte os parafusos à vista (no porta-objetos e na parte de trás).', 'Levante o console pela alavanca do freio de mão, desligando o conector do acendedor/tomada.'],
  m: ['Encaixe sem prender cabos, parafusos.', 'Coifa e bola da alavanca.']
});
M('bancos_diant', {
  f: 'Soquete 14 mm, torquímetro.',
  pre: 'Se houver conector embaixo do banco (cinto com aviso ou airbag lateral), ' + SRS,
  d: ['Corra o banco para trás e solte os parafusos da frente dos trilhos.', 'Corra para a frente e solte os de trás.', 'Desligue o conector embaixo e tire o banco pela porta, sem bater nas colunas.'],
  m: ['Banco nos furos, parafusos a ≈ 32 N·m.', 'Conector e teste os trilhos travando.']
});
M('banco_tras', {
  f: 'Soquete 12 ou 14 mm.',
  d: ['Puxe a frente do assento para cima nos dois ganchos (ou solte os parafusos da frente) e tire o assento.', 'Solte os parafusos da base do encosto e levante-o dos ganchos de cima.'],
  m: ['Encosto nos ganchos e parafusos, cintos passando pelos vãos.', 'Assento encaixado até travar.']
});
M('cintos', {
  f: 'Soquete 14 mm, Torx (conforme a ancoragem), torquímetro.',
  pre: 'Cinto que já segurou uma batida forte deve ser trocado.',
  d: ['Solte a ancoragem de baixo e a da altura (na coluna).', 'Tire os acabamentos plásticos da coluna.', 'Solte o parafuso do retrator embaixo da coluna e tire o conjunto.'],
  m: ['Retrator e ancoragens a ≈ 32 N·m, cinto sem torção.', 'Puxe com tranco: tem que travar.']
});
M('forros_portas', {
  f: 'Espátula plástica, chave Phillips, removedor de presilhas.',
  pre: 'Vidro fechado.',
  d: ['Solte os parafusos do puxador e o da maçaneta interna.', 'Solte o painel dos botões dos vidros com espátula e desligue os conectores.', 'Com o removedor, solte as presilhas em volta, por baixo.', 'Levante o forro para tirar da borda do vidro e solte o cabo da maçaneta.'],
  m: ['Plástico de vedação colado inteiro (sem ele, entra água no carro).', 'Cabo da maçaneta, presilhas novas onde quebraram.', 'Forro na borda do vidro, presilhas, parafusos e botões.']
});
M('forros_portas_tras', {
  f: 'Espátula plástica, chave Phillips, removedor de presilhas.',
  pre: 'Vidro fechado.',
  d: ['Solte o parafuso do puxador e o da maçaneta interna.', 'Solte o botão do vidro com espátula e desligue o conector.', 'Solte as presilhas em volta e levante o forro da borda do vidro.', 'Solte o cabo da maçaneta.'],
  m: ['Plástico de vedação inteiro, cabo da maçaneta.', 'Presilhas, parafusos e botão.']
});
M('porta_malas', {
  f: 'Espátula plástica, removedor de presilhas.',
  d: ['Tire o tapete e o estepe.', 'Solte as presilhas dos forros laterais para chegar às lanternas e ao topo dos amortecedores.', 'O forro do fundo sai depois das presilhas e da trava da tampa.'],
  m: ['Forros com presilhas novas onde quebraram.', 'Tapete e estepe presos.']
});
M('retrovisor_int', {
  f: 'Chave Torx ou Phillips (conforme a base).',
  d: ['Solte o parafuso da base (se houver) ou deslize o espelho para cima, para fora da base colada no vidro.'],
  m: ['Encaixe na base até travar e aperte o parafuso. Base descolada se recola com adesivo próprio de retrovisor.']
});
M('alto_falantes', {
  f: 'Chave Phillips, espátula plástica.',
  pre: 'Os das portas ficam atrás dos forros.',
  d: ['Tire o forro da porta.', 'Solte os parafusos (ou rebites) do alto-falante e desligue o conector.'],
  m: ['Alto-falante com o conector, parafusos firmes (vibração solta faz zumbido).', 'Forro de volta.']
});

/* ---------- CARROCERIA: estrutura soldada ---------- */
M('monobloco', {
  pre: FUNIL,
  d: ['Não se desmonta. Para reparar, a funilaria tira as peças parafusadas em volta, mede a estrutura no gabarito e corrige ou troca trechos.'],
  m: ['Trechos novos soldados a ponto ou MIG, massa de vedação nas emendas e proteção anticorrosiva por dentro das caixas.']
});
M('corta_fogo', {
  pre: FUNIL,
  d: ['Faz parte da estrutura: só se repara com o painel e o cofre desmontados.', 'As borrachas de passagem saem puxando.'],
  m: ['Borrachas de passagem novas e assentadas para não entrar água nem ruído.']
});
M('soleiras', {
  f: 'Furadeira de ponto de solda, solda MIG, proteção anticorrosiva.',
  pre: FUNIL,
  d: ['A soleira é soldada no assoalho, nas colunas e nas laterais.', 'Na funilaria, os pontos são furados e o trecho podre é cortado.'],
  m: ['Trecho novo soldado, selado e protegido por dentro com cera anticorrosiva.', 'Drenos desentupidos.']
});
M('colunas', {
  pre: FUNIL + ' Envolve tirar o para-brisa e os forros.',
  d: ['As colunas são soldadas no teto, no painel e nas soleiras; não saem com ferramenta de mão.', 'Na funilaria, trechos amassados são corrigidos ou trocados.'],
  m: ['Solda, massa de vedação, pintura e o para-brisa colado de novo.']
});
M('teto', {
  f: 'Furadeira de ponto de solda, solda.',
  pre: FUNIL + ' Tire para-brisa, vidro traseiro e forro do teto antes.',
  d: ['O teto é soldado na estrutura: não sai com ferramenta de mão.', 'Na funilaria, cada ponto de solda é furado e o teto sai.'],
  m: ['Teto novo soldado e selado, pintura, vidros colados de novo.']
});
M('laterais', {
  pre: FUNIL,
  d: ['A lateral é soldada na coluna central, na soleira, na caixa de roda, no painel traseiro e junto ao teto.', 'Na funilaria, os pontos são furados ou cortados.'],
  m: ['Lateral nova soldada, massa de vedação nas emendas, pintura.', 'Lanterna com vedação nova e vidro traseiro colado se foi tirado.']
});
M('painel_tras', {
  pre: FUNIL + ' Tire o para-choque, as lanternas e o forro do porta-malas.',
  d: ['O painel é soldado às laterais e ao assoalho do porta-malas.', 'Na funilaria, os pontos são furados e o painel sai.'],
  m: ['Painel novo soldado e selado, batente da fechadura regulado, pintura.']
});
M('travessa_frontal', {
  f: 'Soquetes 10 e 12 mm, macaco ou cintas para apoiar o radiador.',
  pre: 'Tire o para-choque dianteiro e a grade. Apoie radiador e condensador.',
  d: ['Solte a fechadura do capô (marque a posição) e o cabo.', 'Solte os faróis.', 'Solte os parafusos da travessa de cima nas pontas e tire-a, com radiador e condensador apoiados.'],
  m: ['Travessa nos furos, parafusos no torque.', 'Faróis, fechadura do capô na marca, grade e para-choque.', 'Confira o alinhamento do capô e o facho dos faróis.']
});
M('viga_dianteira', {
  f: 'Soquetes 12 e 14 mm.',
  pre: 'Tire o para-choque dianteiro.',
  d: ['Solte os parafusos da viga nas pontas das longarinas.', 'Tire a viga.'],
  m: ['Viga nova (amassada não se reaproveita), parafusos no torque, para-choque.']
});
M('viga_traseira', {
  f: 'Soquetes 12 e 14 mm.',
  pre: 'Tire o para-choque traseiro.',
  d: ['Solte as porcas ou parafusos da viga no painel traseiro.', 'Tire a viga.'],
  m: ['Viga nova se amassou, parafusos no torque, para-choque.']
});

/* ---------- CARROCERIA: painéis, portas e tampas ---------- */
M('capo', {
  f: 'Soquete 10 mm, ajudante, fita crepe.',
  pre: 'Proteja os para-lamas com pano.',
  d: ['Com o capô aberto na vareta, solte o esguicho do lavador e a mangueira.', 'Contorne as dobradiças com fita para marcar a posição.', 'Com ajudante segurando, solte os 4 parafusos (2 em cada dobradiça) e tire o capô.'],
  m: ['Encoste o capô nas marcas e aperte de leve.', 'Feche devagar e confira as folgas; ajuste pela folga dos furos, e a altura nos batentes de borracha.', 'Aperte e conecte o esguicho.']
});
M('paralamas', {
  f: 'Soquete 10 mm, espátula, removedor de presilhas.',
  pre: RODA + ' Tire o forro da caixa de roda, o para-choque dianteiro e o farol.',
  d: ['Solte o repetidor lateral e desligue o conector.', 'Solte os parafusos da borda de cima (sob o capô), o da frente, o de baixo na soleira e o de trás, com a porta aberta.', 'Puxe o para-lama com cuidado, descolando a massa de vedação se houver.'],
  m: ['Para-lama nos furos com parafusos encostados.', 'Ajuste as folgas com o capô e a porta e aperte.', 'Farol, para-choque, forro e roda.']
});
M('portas', {
  f: 'Soquetes 10 a 14 mm, macaco com calço ou cavalete para apoiar a porta, ajudante.',
  pre: BAT + ' Proteja a pintura com fita nas bordas.',
  d: ['Abra a porta e desligue o conector do chicote na coluna (puxe a capa e a trava).', 'Solte o pino ou parafuso do limitador.', 'Apoie a porta e solte os parafusos das dobradiças na porta.', 'Tire a porta com o ajudante.'],
  m: ['Porta nas dobradiças com parafusos encostados.', 'Feche devagar e ajuste as folgas com o para-lama e a porta de trás.', 'Limitador, conector e teste travas, vidros e alto-falante. Regule o batente se fechar duro.']
});
M('portas_tras', {
  f: 'Soquetes 10 a 14 mm, apoio para a porta, ajudante.',
  pre: BAT,
  d: ['Abra a porta e desligue o conector na coluna central.', 'Solte o limitador.', 'Apoie a porta e solte os parafusos das dobradiças.', 'Tire a porta.'],
  m: ['Porta nas dobradiças, folgas ajustadas com a porta da frente e a lateral.', 'Limitador, conector, teste trava, vidro e trava de criança.']
});
M('dobradicas', {
  f: 'Soquetes 10 a 14 mm, macaco com calço, graxa branca.',
  pre: 'Lubrifique pinos e limitador uma vez por ano. Para trocar, apoie a porta.',
  d: ['Contorne a dobradiça com fita.', 'Com a porta apoiada, solte os parafusos da dobradiça na porta e depois na coluna.', 'Limitador: solte o pino na coluna e os parafusos na borda da porta e puxe por dentro.'],
  m: ['Dobradiça na marca, parafusos encostados.', 'Feche, ajuste a altura e as folgas, aperte.', 'Graxa nos pinos e no limitador.']
});
M('fech_portas', {
  f: 'Chave Phillips de impacto, Torx, espátula, chave 10 mm.',
  pre: 'Tire o forro da porta e afaste o plástico de vedação. Vidro fechado.',
  d: ['Solte as varetas da maçaneta externa e do cilindro (presilhas plásticas).', 'Desligue o conector da trava elétrica.', 'Solte os 3 parafusos na borda da porta e tire a fechadura por dentro.', 'Batente: contorne com caneta e solte os 2 parafusos na coluna.'],
  m: ['Fechadura com varetas encaixadas e presilhas travadas.', 'Parafusos firmes, conector.', 'Teste por dentro, por fora, pela chave e pela trava elétrica antes de pôr o forro. Ajuste o batente se fechar duro.']
});
M('retrovisores', {
  f: 'Chave 10 mm, espátula plástica.',
  pre: 'Vidro abaixado.',
  d: ['Tire o acabamento triangular por dentro da porta (presilhas).', 'Desligue o conector (retrovisor elétrico).', 'Segure o retrovisor e solte as 3 porcas.'],
  m: ['Retrovisor com a vedação, porcas firmes sem esmagar a base.', 'Conector e teste a regulagem.']
});
M('tampa_mala', {
  f: 'Soquete 10 mm, fita crepe, ajudante.',
  pre: 'A tampa fica levantada pela força das barras de torção: com os parafusos soltos ela pode pular. Tenha ajudante.',
  d: ['Desligue o conector da tampa (luz da placa/fechadura) e puxe o chicote pela borracha.', 'Contorne as dobradiças com fita.', 'Com o ajudante segurando, solte os parafusos das dobradiças na tampa.', 'Tire a tampa.'],
  m: ['Tampa nas marcas com parafusos encostados.', 'Feche e ajuste as folgas com as laterais e a altura pelos batentes.', 'Aperte, conecte o chicote e regule o batente da fechadura.']
});
M('dobr_capo', {
  f: 'Soquete 10 mm, fita crepe.',
  pre: 'Com o capô apoiado ou tirado.',
  d: ['Marque com fita.', 'Solte os parafusos da dobradiça no capô e na carroceria.'],
  m: ['Dobradiça na marca, parafusos, capô alinhado. Graxa no pino.']
});
M('dobr_mala', {
  f: 'Soquete 10 mm, ferramenta de alavanca para barra de torção.',
  pre: 'A dobradiça trabalha junto com as barras de torção: solte a tensão delas antes de tirar a dobradiça.',
  d: ['Tire a tampa (veja Tampa do porta-malas).', 'Alivie a ponta da barra de torção com a ferramenta de alavanca.', 'Solte os parafusos da base da dobradiça sob a prateleira.'],
  m: ['Dobradiça nos furos, barras de torção encaixadas na mesma posição de tensão.', 'Tampa de volta e alinhada.']
});
M('barras_mala', {
  f: 'Ferramenta de alavanca para barra de torção (ou um tubo longo justo na ponta), luvas e óculos.',
  pre: 'As barras estão tensionadas mesmo com a tampa aberta: a ponta pode escapar com força. Use óculos e não fique na linha da barra.',
  d: ['Com a tampa aberta e apoiada, encaixe a ferramenta na ponta da barra.', 'Force contra a tensão e tire a ponta do suporte; deixe a barra aliviar devagar.', 'Desencaixe a outra ponta da dobradiça.'],
  m: ['Encaixe a ponta na dobradiça.', 'Com a ferramenta, torça a barra e encaixe a outra ponta no mesmo degrau de tensão (degrau mais alto deixa a tampa mais leve).', 'Abra e feche para conferir: a tampa deve subir sozinha e ficar aberta.']
});
M('fech_mala', {
  f: 'Soquete 10 mm, chave de fenda.',
  d: ['Por dentro da tampa, solte o cabo da alavanca e a vareta do cilindro da chave.', 'Solte os parafusos da fechadura.', 'Batente: contorne com caneta e solte os parafusos no painel traseiro.'],
  m: ['Fechadura com cabo e vareta encaixados.', 'Batente na marca; ajuste até fechar de primeira sem bater.', 'Teste pela chave e pela alavanca ao lado do banco.']
});
M('fech_capo', {
  f: 'Soquete 10 mm, caneta, graxa.',
  pre: 'Se o cabo romper com o capô fechado, a fechadura é solta por baixo, pela grade, com uma chave de fenda longa.',
  d: ['Contorne a fechadura com caneta.', 'Solte os parafusos na travessa e solte a ponta do cabo.', 'Para o cabo: solte a alavanca perto do pé do motorista e puxe o cabo pelo corta-fogo, soltando as presilhas.'],
  m: ['Cabo pelo mesmo caminho, sem curvas fechadas, borracha do corta-fogo vedando.', 'Fechadura na marca, ponta do cabo encaixada.', 'Engraxe e teste a abertura e a trava de segurança.']
});
M('maq_vidro', {
  f: 'Soquete 10 mm, espátula, fita crepe.',
  pre: 'Tire o forro da porta e afaste o plástico de vedação. ' + BAT + ' só se for desligar o motor da máquina com o vidro aberto.',
  d: ['Ligue o botão para posicionar o vidro com os parafusos da fixação à vista nos furos do painel.', 'Solte os 2 parafusos do vidro na máquina, suba o vidro à mão e prenda com fita no alto.', 'Desligue o conector do motor.', 'Solte os parafusos da máquina e tire-a por um vão do painel.'],
  m: ['Máquina nos furos, conector, parafusos.', 'Baixe o vidro na máquina e aperte os 2 parafusos.', 'Teste subir e descer: o vidro não pode encostar torto no batente. Plástico de vedação e forro.']
});
M('maq_vidro_tras', {
  f: 'Soquete 10 mm, espátula, fita crepe.',
  pre: 'Tire o forro da porta traseira e afaste o plástico de vedação.',
  d: ['Posicione o vidro com os parafusos à vista.', 'Solte os parafusos do vidro na máquina, suba o vidro e prenda com fita.', 'Desligue o conector e solte os parafusos da máquina.', 'Tire a máquina pelo vão do painel.'],
  m: ['Máquina nos furos, conector, parafusos.', 'Vidro preso na máquina e teste.', 'Plástico de vedação e forro.']
});

/* ---------- CARROCERIA: vidros ---------- */
M('para_brisa', {
  f: 'Fio de corte ou faca de vidro, ventosas, poliuretano e primer (empresa especializada).',
  d: ['O para-brisa não tem parafuso: é colado num cordão de poliuretano em volta.', 'Tire os braços do limpador, a grade do torpedo, o retrovisor interno e as molduras.', 'O instalador corta o cordão com fio ou faca própria.', 'Tira o vidro com ventosas.'],
  m: ['Cordão novo sobre primer, vidro centrado com espaçadores.', 'Respeite o tempo de cura antes de rodar ou bater as portas com força; não lave o carro no primeiro dia.']
});
M('vidro_tras', {
  f: 'Fio de corte, ventosas, poliuretano.',
  pre: 'Desligue os conectores do desembaçador e tire a luz de freio alta e o acabamento da prateleira.',
  d: ['O vidro traseiro é colado na moldura da carroceria com cordão de poliuretano.', 'O cordão é cortado com fio por dentro e por fora.', 'O vidro sai com ventosas.'],
  m: ['Cordão novo sobre primer, conectores do desembaçador, luz de freio.', 'Cura antes de rodar e teste de água.']
});
M('vidros_portas', {
  f: 'Soquete 10 mm, fita crepe.',
  pre: 'Tire o forro e afaste o plástico de vedação.',
  d: ['Posicione o vidro com os parafusos à vista, solte-os.', 'Tire as borrachas raspadoras da borda de cima da porta (presilhas).', 'Incline o vidro e tire-o por cima.'],
  m: ['Vidro pelas canaletas, até a máquina.', 'Parafusos firmes, raspadores encaixados.', 'Teste o curso todo antes do forro.']
});
M('vidros_portas_tras', {
  f: 'Soquete 10 mm, fita crepe.',
  pre: 'Tire o forro e afaste o plástico de vedação.',
  d: ['Solte os parafusos do vidro na máquina.', 'Solte o canaleta fixa traseira se o formato da porta exigir.', 'Incline o vidro e tire-o por cima.'],
  m: ['Vidro pelas canaletas e preso na máquina.', 'Teste o curso antes do forro.']
});

/* ---------- CARROCERIA: plásticos e acabamentos ---------- */
M('para_choque_d', {
  f: 'Chave Phillips, soquete 10 mm, removedor de presilhas, ajudante.',
  pre: 'Vire as rodas para alcançar os parafusos dentro das caixas de roda. Proteja os para-lamas com fita nas pontas.',
  d: ['Abra o capô e solte as presilhas e parafusos de cima, na travessa.', 'Solte os parafusos de cada caixa de roda e os de baixo.', 'Puxe as pontas para fora das guias laterais, começando por um lado.', 'Afaste o para-choque e desligue os conectores (se houver luzes nele).'],
  m: ['Encaixe as pontas nas guias até estalar.', 'Presilhas novas onde quebraram, parafusos em cima, nas caixas de roda e embaixo.', 'Confira as frestas com faróis e para-lamas.']
});
M('para_choque_t', {
  f: 'Chave Phillips, soquete 10 mm, removedor de presilhas.',
  pre: 'Abra o porta-malas.',
  d: ['Solte os parafusos e presilhas de cima, na borda do porta-malas.', 'Solte os parafusos das caixas de roda e os de baixo.', 'Desligue as luzes da placa.', 'Puxe as pontas das guias sob as lanternas e tire o para-choque.'],
  m: ['Pontas nas guias até estalar.', 'Presilhas e parafusos, conector da luz da placa.', 'Confira as frestas com as lanternas.']
});
M('grade', {
  f: 'Chave Phillips, removedor de presilhas.',
  pre: 'Abra o capô.',
  d: ['Solte os parafusos e as presilhas de cima da grade, na travessa.', 'Puxe a grade para a frente soltando os encaixes de baixo.'],
  m: ['Encaixes de baixo primeiro, empurre até as presilhas travarem.', 'Parafusos de cima.']
});
M('grade_inf', {
  f: 'Espátula plástica, chave Phillips.',
  d: ['Por trás do para-choque (ou com ele tirado), aperte as travas da grade.', 'Empurre a grade para fora.'],
  m: ['Encaixe por fora até todas as travas estalarem.']
});
M('grade_torpedo', {
  f: 'Chave 14 mm (braços do limpador), removedor de presilhas.',
  pre: 'Marque a posição das palhetas no vidro com fita.',
  d: ['Tire os braços do limpador.', 'Solte a borracha do capô sobre a grade.', 'Solte as presilhas e puxe a grade para a frente, soltando o encaixe sob o para-brisa.', 'Tire as folhas e limpe os drenos da caixa de ar por baixo.'],
  m: ['Grade encaixada sob o para-brisa, presilhas, borracha.', 'Braços do limpador nas marcas, porcas a ≈ 24 N·m.']
});
M('caixas_roda', {
  f: 'Removedor de presilhas, chave Phillips, soquete 10 mm.',
  pre: RODA + ' (ou vire a roda toda para o lado).',
  d: ['Solte as presilhas da borda do para-lama e os parafusos.', 'Puxe o forro para fora pelo vão da roda.'],
  m: ['Lave a caixa de roda antes de montar.', 'Forro no lugar, presilhas novas onde quebraram.']
});
M('borrachas', {
  f: 'Espátula plástica, protetor de borracha à base de silicone.',
  d: ['Puxe a borracha da aba da abertura, começando pela emenda.', 'Nos vidros, as canaletas saem puxando com cuidado do trilho.'],
  m: ['Encaixe começando pela emenda (geralmente embaixo), empurrando em volta com a palma.', 'Não estique a borracha: ela fica curta e entra água nos cantos.', 'Passe protetor de silicone e teste com água.']
});
M('frisos', {
  f: 'Fio de náilon, removedor de cola, soprador térmico, fita dupla-face automotiva, álcool isopropílico.',
  pre: 'Lataria limpa e seca, de preferência acima de 20 °C.',
  d: ['Aqueça o friso com o soprador.', 'Passe o fio de náilon por trás, cortando a fita.', 'Tire o resto da cola com removedor sem riscar a pintura.'],
  m: ['Limpe com álcool, marque a linha com fita crepe.', 'Friso novo com fita dupla-face, pressione firme em todo o comprimento.', 'Não lave nas primeiras 24 horas.']
});
