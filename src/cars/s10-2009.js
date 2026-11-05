/* ===== Chevrolet S10 Executive 2009, cabine dupla 4x4: 2.8 turbodiesel eletrônico (MWM Sprint, common rail), manual de 5 marchas ===== */
(window.CARS = window.CARS || []).push({
  id: 's10-2009', order: 6, storeKey: 's10-2009', codePrefix: 'S10', plate: 'MWM2S10',
  badge: '4x4', name: 'Chevrolet S10', short: 'S10', title: 'Chevrolet S10 Executive', sub: '2.8 turbodiesel eletrônico (MWM) 140 cv, 4x4, cabine dupla, manual de 5 marchas, 2009',
  kmDefault: 0, size: [5.260, 1.782], wheelR: 0.367,
  paint: { color: 0xe7e8ea, roughness: 0.32, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.12 },
  oemLabel: 'Código GM', oemHint: 'Código GM: confirme pelo número do chassi (VIN) no balcão da concessionária; a GM troca códigos por substituição e muda peças conforme o ano e a versão (Advantage, Colina, Executive, Tornado).',
  open: { hood: 'capo', tail: 'tampa_cacamba', door: 'portas', rdoor: 'portas_tras' },
  xrayExtra: ['farois', 'piscas', 'neblina', 'lanternas', 'luz_freio', 'luz_placa', 'bocal', 'grade'],
  boxIds: ['cabine', 'cacamba', 'pneus', 'para_choque_d', 'para_choque_t', 'teto', 'retrovisores', 'rack_teto', 'estribos'],
  welcome: ['bomba_alta', 'turbo', 'intercooler', 'transferencia', 'filtro_comb', 'feixe_molas'],
  flowTip: 'o caminho do ar pelo turbo e pelo intercooler, do diesel no common rail, da força até as quatro rodas',
  profile: { top: [[-2.70, .80], [-2.70, 1.235], [-1.16, 1.235], [-1.14, 1.60], [-1.08, 1.655], [0.20, 1.65], [0.32, 1.56], [0.95, 1.17], [1.30, 1.16], [2.30, 1.08], [2.40, 1.05], [2.46, 0.80], [2.497, 0.60]],
    rearLow: 0.62, frontLow: 0.42, floor: 0.50, wheels: [1.561, -1.561], arch: 0.47, wheelR: 0.367, wheelY: 0.36 },
  maintNote: 'O plano da GM para a S10 2009 é uma revisão a cada 10.000 km ou 1 ano. No diesel, o óleo e o filtro de óleo vencem antes: 10.000 km ou 6 meses (a primeira troca aos 5.000 km), e o filtro de diesel também a cada 10.000 km ou 6 meses. Os prazos abaixo são do manual do proprietário de 11/2008; use os de uso severo (terra, reboque, anda e para) quando for o seu caso.',
  about: '<p>A carroceria é uma picape cabine dupla genérica com as medidas da S10 2009 do manual (5,260 m de comprimento, 3,122 m de entre-eixos, bitolas de 1,454 m na frente e 1,399 m atrás, 1,661 m de altura e caçamba de 1,477 × 1,438 m), em branco, com a grade cromada, a entrada de ar do capô, barras no teto, estribos e o estepe pendurado sob a caçamba. Não reproduz o desenho da marca.</p><p>A mecânica segue a Executive 4x4 2.8 turbodiesel eletrônico: motor MWM Sprint de 4 cilindros (93 × 103 mm, 2.799 cm³, taxa de 17,8:1, 140 cv a 3.500 rpm e 340 N·m de 1.800 a 2.400 rpm), injeção common rail com bomba de alta Bosch, turbo Garrett (1,2 bar) e intercooler sobre o motor, distribuição por engrenagens, câmbio manual de 5 marchas, caixa de transferência com comando elétrico (2HI, 4HI e 4LO), cardã traseiro em duas partes, diferencial dianteiro com acoplamento do eixo, eixo traseiro rígido com Trac-Lock em feixes de molas, suspensão dianteira de braços sobrepostos com barras de torção, direção hidráulica de esferas recirculantes, freios a disco na frente e a tambor atrás com ABS, e freio de estacionamento de pedal. Tudo montado sobre chassi de longarinas, com cabine e caçamba separadas.</p><p>Posições marcadas como aproximadas (módulos, sensores, ABS, tanque, escapamento), quantidades de fixadores e torques sem fonte são os típicos; a geometria é simplificada. Fonte principal: manual do proprietário S10/Blazer (GM, 11/2008), para medidas, capacidades, relações, pneus, pressões e o plano de manutenção.</p>',

  data() {
const SYS = {
  motor:  { n: 'Motor', c: '#D0602A', d: 'MWM Sprint 2.8 de 4 cilindros, longitudinal, com distribuição por engrenagens (sem correia dentada), lubrificação e coxins.' },
  ar:     { n: 'Ar e turbo', c: '#3D9BE0', d: 'Filtro de ar, turbo Garrett, intercooler em cima do motor alimentado pela entrada do capô e coletor de admissão.' },
  comb:   { n: 'Diesel (common rail)', c: '#3F9D4A', d: 'Tanque de 80 L, bomba elétrica, filtro com separador de água, bomba de alta, tubo distribuidor, injetores, módulo e o kit de velas aquecedoras para frio.' },
  arref:  { n: 'Arrefecimento', c: '#1F8FC0', d: 'Radiador, ventoinha viscosa na bomba d’água, ventilador auxiliar elétrico, válvula termostática e reservatório pressurizado.' },
  escape: { n: 'Escapamento', c: '#8B6F5A', d: 'Coletor e turbina, tubo, silencioso e saída na traseira direita.' },
  ele:    { n: 'Elétrica', c: '#D6B000', d: 'Bateria de 60 Ah, alternador de 100 A, partida, fusíveis, chicote, luzes e limpadores.' },
  trans:  { n: 'Embreagem e câmbio', c: '#B0412A', d: 'Embreagem hidráulica e câmbio manual de 5 marchas com a alavanca direto na caixa.' },
  tracao: { n: 'Tração 4x4', c: '#C2552E', d: 'Caixa de transferência com motor elétrico e botões, cardãs, diferencial dianteiro com acoplamento do eixo, semieixos e o eixo traseiro com Trac-Lock.' },
  freio:  { n: 'Freios', c: '#D2334A', d: 'Servofreio com bomba de vácuo, ABS, discos ventilados na frente, tambores atrás e freio de estacionamento de pedal.' },
  susp:   { n: 'Suspensão e rodas', c: '#9B3FA8', d: 'Na frente, braços sobrepostos com barras de torção; atrás, eixo rígido em feixes de molas. Rodas aro 16 e estepe sob a caçamba.' },
  dir:    { n: 'Direção', c: '#1FA394', d: 'Caixa de esferas recirculantes com assistência hidráulica, braço Pitman, barra central, braço intermediário e terminais.' },
  clima:  { n: 'Ar-condicionado', c: '#4F7FE0', d: 'Compressor movido pela correia, condensador, evaporador e a caixa de ar.' },
  int:    { n: 'Interior e segurança', c: '#A8845A', d: 'Painel, quadro, som, airbags frontais, bancos, cintos e acabamentos da cabine dupla.' },
  carro:  { n: 'Cabine e caçamba', c: '#8FA6C4', d: 'Cabine e caçamba separadas, parafusadas no chassi: portas, vidros, capô, para-choques, tampa da caçamba e acessórios.' },
  chassi: { n: 'Chassi', c: '#6E7B8B', d: 'Chassi de longarinas e travessas, coxins da carroceria e protetores de baixo.' }
};
const PARTS = {};
function P(id, n, s, w, f, m, r) { PARTS[id] = { id, n, s, w, f, m, r: r ? r.split(' ') : [] }; }
function E(id, ft, e) { PARTS[id].ft = ft; PARTS[id].e = e; }
window.CAR_PARTS['s10-2009'](P, E);

/* ===== Fixadores ===== */
const FIX = {};
function F(id, n, parent, q, spec, torque, note) { FIX[id] = { id, n, p: parent, q, spec, t: torque, note }; }
F('fx_roda', 'Porcas de roda', 'rodas', 24, '6 por roda (furação 6 × 139,7 nos catálogos de rodas)', 'alto: confirme no manual de oficina (catálogos citam ≈ 190 N·m)', 'Aperte em cruz, com o carro no chão, e reaperte depois de uns 50 km. O torque é conferido em toda revisão (plano da GM).');
F('fx_cubo', 'Porcas dos cubos dianteiros', 'mangas', 2, 'Porca central do semieixo, com trava', 'muito alto (manual de oficina)', 'Porca nova ou com trava nova. Rolamentos com graxa trocada a cada 20.000 km.');
F('fx_carter', 'Bujão do cárter', 'carter', 1, 'Embaixo do cárter, atrás do diferencial dianteiro', 'médio, arruela nova', 'Troque com o motor quente; 7,5 L sem o filtro e 1,0 L no filtro.');
F('fx_cabecote', 'Parafusos do cabeçote', 'cabecote', 18, 'Em volta dos cilindros (quantidade do modelo)', 'em etapas e ângulo, na ordem do manual', 'Parafusos novos se o manual pedir; junta da espessura certa.');
F('fx_tampa_valv', 'Parafusos da tampa de válvulas', 'tampa_valv', 10, 'Na borda da tampa', 'leve', 'Junta nova; aperte em cruz, de dentro para fora.');
F('fx_coxins', 'Fixações dos coxins do motor', 'coxim_dir', 4, '2 por coxim, na travessa do chassi', 'alto', 'Apoie o motor por baixo, no cárter com um taco, antes de soltar.');
F('fx_turbo', 'Porcas do turbo no coletor', 'turbo', 4, 'Prisioneiros na flange do coletor', 'alto; junta nova', 'Antes de montar, encha o turbo de óleo pela entrada e gire com a mão. Na primeira partida, deixe em marcha lenta.');
F('fx_coletor_esc', 'Porcas do coletor de escape', 'coletor_esc', 8, '2 por cilindro, no cabeçote', 'médio, aperto do centro para as pontas', 'Prisioneiros oxidados quebram: use desengripante na véspera.');
F('fx_intercooler', 'Parafusos do intercooler', 'intercooler', 4, 'Nos suportes sobre o motor', 'leve', 'Abraçadeiras das mangueiras primeiro.');
F('fx_abracadeiras', 'Abraçadeiras das mangueiras do intercooler', 'mang_intercooler', 4, '2 por mangueira', 'firme', 'Mangueira de pressão: abraçadeira frouxa assobia e tira força.');
F('fx_bicos', 'Garras dos injetores', 'bicos', 4, '1 por injetor', 'médio (manual)', 'Arruela de vedação de cobre nova embaixo de cada injetor.');
F('fx_tubos_alta', 'Porcas dos tubos de alta pressão', 'tubos_alta', 10, '2 por tubo (4 injetores e a bomba)', 'médio; tubo novo se deformar', 'Só com o motor desligado há 30 segundos ou mais. Tampe tudo na hora: sujeira na alta pressão destrói o injetor.');
F('fx_filtro_comb', 'Fixações do filtro de diesel', 'filtro_comb', 3, 'Suporte (2) e válvula de dreno / sensor de água (1)', 'leve', 'Na drenagem, gire o sensor meia volta depois do encosto ao fechar. Sangria depois da troca.');
F('fx_tanque', 'Cintas do tanque', 'tanque', 4, '2 cintas com parafuso na frente e atrás', 'médio', 'Tanque quase vazio e apoiado no macaco antes de soltar as cintas.');
F('fx_radiador', 'Fixações do radiador', 'radiador', 4, 'Suportes de borracha em cima e embaixo', 'leve', 'Proteja as aletas; o condensador fica na frente.');
F('fx_mangueiras', 'Abraçadeiras das mangueiras do radiador', 'mang_sup', 4, '2 por mangueira', 'firme', 'Só com o motor frio.');
F('fx_ventoinha', 'Porca da ventoinha viscosa', 'ventoinha', 1, 'No eixo da bomba d’água', 'alto; confira o sentido da rosca no manual', 'Segure a polia com a ferramenta própria para soltar.');
F('fx_alternador', 'Parafusos do alternador', 'alternador', 2, 'No suporte da frente do motor', 'médio', 'Solte a correia primeiro; a bomba de vácuo vem junto.');
F('fx_partida', 'Parafusos do motor de partida', 'motor_partida', 2, 'Na capa seca, lado esquerdo', 'alto', 'Bateria desligada antes de soltar o cabo grosso.');
F('fx_bateria', 'Terminais e grampo da bateria', 'bateria', 3, 'Positivo, negativo e grampo', 'firme, sem esmagar', 'Solte o negativo primeiro e ligue por último.');
F('fx_compressor', 'Parafusos do compressor do ar', 'compressor', 4, 'No suporte da frente do motor', 'médio', 'Recolha o gás antes de soltar as linhas.');
F('fx_bomba_dir', 'Parafusos da bomba da direção', 'bomba_dir', 3, 'No suporte da frente do motor', 'médio', 'Tampe as mangueiras: o óleo escorre.');
F('fx_cambio', 'Parafusos da capa seca no motor', 'cambio', 8, 'Em volta da capa seca', 'alto', 'O conjunto câmbio e transferência é pesado: macaco de transmissão.');
F('fx_coxim_cambio', 'Fixações do coxim do câmbio', 'coxim_cambio', 2, 'Na travessa do chassi', 'alto', 'Apoie o câmbio antes de soltar a travessa.');
F('fx_bujoes_cambio', 'Bujões do câmbio', 'cambio', 2, 'Abastecimento na lateral (0) e dreno embaixo (1)', 'médio', 'Solte o de abastecimento antes do dreno. Nível até a borda do furo: 2,0 L de Dexron III no 4x4.');
F('fx_transf', 'Parafusos da transferência no câmbio', 'transferencia', 6, 'Em volta da flange', 'médio', 'Transferência com 1,18 L de Dexron III.');
F('fx_bujoes_transf', 'Bujões da transferência', 'transferencia', 2, 'Abastecimento (0) e dreno (1)', 'médio', 'Nível até a borda do furo de abastecimento.');
F('fx_cardan_t', 'Fixações do cardã traseiro', 'cardan_tras', 6, 'Flange do diferencial (0–3) e mancal central (4–5)', 'alto', 'Marque a posição do cardã nas flanges e na junta deslizante antes de tirar: montado fora de fase, vibra.');
F('fx_cardan_d', 'Fixações do cardã dianteiro', 'cardan_diant', 8, 'Flange do diferencial (0–3) e da transferência (4–7)', 'alto', 'Marque as flanges antes de soltar.');
F('fx_dif_d', 'Bujões do diferencial dianteiro', 'dif_diant', 2, 'Abastecimento (0) e dreno (1)', 'médio', '1,20 L de SAE 80W90.');
F('fx_dif_t', 'Bujão e tampa do diferencial traseiro', 'dif_tras', 11, 'Bujão de abastecimento (0) e 10 parafusos da tampa (1–10)', 'médio; vedação nova na tampa', '1,60 L de SAE 85W140 GL-5 para tração positiva (Trac-Lock).');
F('fx_semieixo_d', 'Parafusos dos semieixos no diferencial', 'semieixos_diant', 12, '6 por lado, nas flanges', 'alto', 'Proteja as coifas ao soltar.');
F('fx_grampos', 'Porcas dos grampos em "U"', 'grampos_u', 8, '2 grampos por lado, 2 porcas cada', 'muito alto, em cruz', 'Reaperto a cada 30.000 km (plano da GM). Aperte com o peso do carro sobre as rodas.');
F('fx_feixe', 'Parafusos dos olhais e dos jumelos', 'feixe_molas', 6, 'Olhal da frente (0) e dois pinos do jumelo (1–2), por lado', 'alto, com o carro no chão', 'Buchas novas se rachadas; aperto final com o peso nas rodas.');
F('fx_amort_d', 'Fixações dos amortecedores dianteiros', 'amort_diant', 4, 'Em cima (no chassi) e embaixo (na bandeja), por lado', 'médio', 'Troque os dois do eixo juntos.');
F('fx_amort_t', 'Fixações dos amortecedores traseiros', 'amort_tras', 4, 'Em cima (no chassi) e embaixo (no eixo), por lado', 'médio', 'Apoie o eixo antes de soltar.');
F('fx_bandeja', 'Parafusos das bandejas inferiores', 'bandeja_inf', 4, '2 pivôs de bucha por lado, na travessa', 'alto, com o carro no chão', 'Alivie a barra de torção antes de soltar a bandeja de baixo.');
F('fx_bandeja_sup', 'Parafusos das bandejas superiores', 'bandeja_sup', 4, '2 por lado, com os calços de alinhamento', 'alto', 'Marque a posição dos calços: eles acertam câmber e cáster.');
F('fx_pivos', 'Porcas castelo dos pivôs', 'pivos', 4, 'Pivô de cima e de baixo, por lado', 'alto, com contrapino novo', 'Use extrator de pivô; não bata na manga.');
F('fx_torcao', 'Parafusos de regulagem das barras de torção', 'travessa_torcao', 2, '1 por lado, na travessa', 'regulagem de altura', 'Conte as voltas ao soltar: a altura e o alinhamento dependem disso.');
F('fx_pinca', 'Parafusos das pinças dianteiras', 'pincas', 8, 'Pinos-guia (0–1) e suporte (2–3), por lado', 'guias médio; suporte alto', 'Pinos limpos e lubrificados com graxa própria.');
F('fx_servo', 'Porcas do servofreio e do cilindro-mestre', 'servo', 6, '4 do servo no corta-fogo (0–3) e 2 do cilindro no servo (4–5)', 'médio', 'Proteja a pintura: fluido de freio estraga tinta.');
F('fx_caixa_dir', 'Parafusos da caixa de direção', 'caixa_dir', 3, 'Na longarina esquerda', 'muito alto', 'Rodas retas; alinhamento depois.');
F('fx_pitman', 'Porca do braço Pitman', 'braco_pitman', 1, 'No eixo do setor da caixa', 'muito alto', 'Marque o braço no eixo; use extrator.');
F('fx_braco_inter', 'Parafusos do braço intermediário', 'braco_inter', 2, 'Na longarina direita', 'alto', 'Folga aqui gasta pneu e deixa o volante solto.');
F('fx_terminais', 'Porcas dos terminais de direção', 'barras_dir', 4, 'Terminal de fora e de dentro, por lado', 'alto, contrapino novo', 'Conte as voltas da luva ao trocar; alinhe depois.');
F('fx_volante', 'Porca do volante', 'volante_dir', 1, 'Porca central, sob o airbag', 'médio (manual)', 'Rodas retas e marca no eixo.');
F('fx_airbag', 'Parafusos do airbag do motorista', 'airbag_mot', 2, 'Por trás do volante', '≈ 10 N·m', 'Bateria desligada e espera de pelo menos 3 minutos. Guarde o módulo com a bolsa para cima.');
F('fx_bancos', 'Parafusos dos bancos dianteiros', 'bancos_diant', 8, '4 por banco', 'alto', 'Item de segurança.');
F('fx_cintos', 'Ancoragens dos cintos', 'cintos', 6, 'Parafusos de ancoragem', 'alto', 'Conferir em toda revisão (plano da GM).');
F('fx_capo', 'Parafusos das dobradiças do capô', 'dobr_capo', 4, '2 por dobradiça, no capô', 'médio', 'Risque a posição antes de soltar.');
F('fx_fech_capo', 'Parafusos da fechadura do capô', 'fech_capo', 2, 'Na travessa do radiador', 'médio', 'Regule para a trava de segurança pegar.');
F('fx_grade', 'Presilhas e parafusos da grade', 'grade', 6, 'Em cima (4) e embaixo (2), na travessa', 'leve', 'Abra o capô; presilhas quebram.');
F('fx_parachoque', 'Parafusos do para-choque dianteiro', 'para_choque_d', 6, 'Nos suportes das longarinas (4) e nas caixas de roda (2)', 'médio', 'Desligue os faróis de neblina antes de tirar.');
F('fx_parachoque_t', 'Parafusos do para-choque traseiro', 'para_choque_t', 4, '2 por suporte, nas longarinas', 'alto', 'Desligue a luz de placa.');
F('fx_farol', 'Parafusos dos faróis', 'farois', 6, '3 por farol', 'leve', 'Regule o facho depois.');
F('fx_lanterna', 'Parafusos das lanternas', 'lanternas', 4, '2 por lanterna, com a tampa da caçamba aberta', 'leve', 'Vedação boa evita água na lente.');
F('fx_paralama', 'Parafusos dos para-lamas', 'paralamas', 10, '5 por lado: 3 na borda do cofre, 1 na frente e 1 na coluna', 'leve', 'O para-lama da S10 é parafusado: troca sem solda.');
F('fx_molduras', 'Presilhas das molduras das caixas de roda', 'molduras', 16, '4 por roda', 'encaixe por pressão', 'Presilhas plásticas quebram; tenha reposição.');
F('fx_forros', 'Presilhas dos forros das caixas de roda', 'caixas_roda', 8, '4 por lado', 'encaixe por pressão', 'Barro acumulado atrás do forro retém umidade.');
F('fx_dobradicas', 'Parafusos das dobradiças e limitadores', 'dobradicas', 20, 'Por porta: 4 na coluna e 1 no limitador', 'alto', 'Apoie a porta antes de soltar; é nessas folgas que se regula a fresta.');
F('fx_fech_portas', 'Parafusos das fechaduras', 'fech_portas', 12, '3 por porta', 'médio', 'Teste com a porta aberta antes de fechar.');
F('fx_retrovisor', 'Porcas dos retrovisores', 'retrovisores', 6, '3 por espelho, por dentro da porta', 'leve', 'Segure o espelho por fora.');
F('fx_vidro_porta', 'Parafusos do vidro na máquina (dianteiras)', 'vidros_portas', 4, '2 por porta', 'leve', 'Posicione o vidro até os parafusos aparecerem.');
F('fx_vidro_porta_t', 'Parafusos do vidro na máquina (traseiras)', 'vidros_portas_tras', 4, '2 por porta', 'leve', 'Posicione o vidro até os parafusos aparecerem.');
F('fx_maq_vidro', 'Fixação das máquinas de vidro (dianteiras)', 'maq_vidro', 8, '4 por porta', 'leve', 'Desligue o conector do motor.');
F('fx_maq_vidro_t', 'Fixação das máquinas de vidro (traseiras)', 'maq_vidro_tras', 6, '3 por porta', 'leve', 'Desligue o conector do motor.');
F('fx_forro_porta', 'Presilhas dos forros das portas dianteiras', 'forros_portas', 14, 'Em volta do forro', 'encaixe por pressão', 'Espátula plástica rente às presilhas.');
F('fx_forro_porta_t', 'Presilhas dos forros das portas traseiras', 'forros_portas_tras', 12, 'Em volta do forro', 'encaixe por pressão', 'Espátula plástica rente às presilhas.');
F('fx_tampa_cac', 'Encaixes das dobradiças da tampa', 'dobr_tampa', 2, '1 em cada ponta de baixo', 'encaixe', 'A tampa sai inteira: solte os cabos e levante a 45° (manual).');
F('fx_cabos_tampa', 'Pinos dos cabos da tampa', 'cabos_tampa', 4, '2 por cabo (na tampa e na coluna da caçamba)', 'pino com trava', 'Segure a tampa ao soltar o cabo.');
F('fx_fech_tampa', 'Fechaduras e batentes da tampa', 'fech_tampa', 4, 'Fechaduras na tampa (0–1) e batentes nas colunas (2–3)', 'médio', 'Regule o batente se a tampa bater ou chacoalhar.');
F('fx_cacamba', 'Parafusos da caçamba nos coxins', 'cacamba', 6, '3 por lado, por baixo, nas longarinas', 'alto', 'Chicote das lanternas e mangueira do bocal antes de levantar a caçamba.');
F('fx_coxins_cab', 'Parafusos dos coxins da cabine', 'coxins_cab', 8, '4 por lado, de baixo para cima', 'alto', 'Troque um coxim por vez, com macaco e taco de madeira sob a cabine.');
F('fx_estribos', 'Parafusos dos estribos', 'estribos', 6, '3 suportes por lado, nas longarinas', 'médio', 'Ferrugem nos suportes: troque os parafusos.');
F('fx_rack', 'Parafusos das barras do teto', 'rack_teto', 6, '3 por barra, com vedação', 'leve', 'Vedação nova evita goteira no forro.');
F('fx_ganchos', 'Parafusos dos ganchos de reboque', 'ganchos', 4, '2 por gancho, na longarina', 'muito alto', 'Gancho é preso no chassi, nunca no para-choque.');
F('fx_protetor', 'Parafusos do protetor do cárter', 'protetor_carter', 4, 'Nas travessas', 'médio', 'Sai para drenar o cárter e o diferencial dianteiro.');
F('fx_protetor_t', 'Parafusos do protetor da transferência', 'protetor_transf', 4, 'Nas longarinas', 'médio', 'Sai para drenar a transferência.');
F('fx_estepe', 'Guincho e retentor do estepe', 'guincho_estepe', 2, 'Eixo do guincho (0, pelo furo do para-choque) e retentor do cabo (1)', 'até dois cliques', 'Não tensione demais o cabo ao subir o estepe (manual).');
F('fx_limpador', 'Porcas dos braços dos limpadores', 'limpador', 2, '1 por braço', 'médio', 'Marque a posição de repouso.');
F('fx_grade_torpedo', 'Presilhas da grade do torpedo', 'grade_torpedo', 6, 'Sob a borda do para-brisa', 'encaixe por pressão', 'Tire os braços do limpador antes.');
F('fx_solda_teto', 'Pontos de solda do teto', 'teto', 0, 'Nas bordas, sobre as portas, na frente e atrás', 'não se desmonta', 'Troca de teto é serviço de funilaria.');
F('fx_solda_colunas', 'Pontos de solda das colunas', 'colunas', 0, 'Na borda das portas e na moldura do para-brisa', 'não se desmonta', 'Coluna amassada compromete a cabine.');
F('fx_cola_parabrisa', 'Cola do para-brisa', 'para_brisa', '1 cordão', 'Cordão de poliuretano em volta do vidro', 'cura em algumas horas', 'Espere a cura antes de rodar em estrada ruim.');
F('fx_cola_vidro_tras', 'Cola do vidro traseiro', 'vidro_tras', '1 cordão', 'Cordão de poliuretano na moldura', 'cura em algumas horas', 'Água dentro da cabine atrás pode vir desse cordão ou do trilho do vidro corrediço.');

const FXKIND = {
  parafuso: ['Parafusos e porcas', 'Desmontam com ferramenta; o aperto certo importa (no chassi, muitos são de torque alto).'],
  presilha: ['Presilhas', 'Encaixes plásticos de pressão; quebram com facilidade.'],
  pino: ['Pinos, travas e encaixes', 'Articulações, cabos e encaixes que saem sem ferramenta ou com uma chave de fenda.'],
  solda: ['Pontos de solda', 'Chapas unidas de vez: fazem parte da cabine.'],
  cola: ['Colas', 'Vidros fixos presos com cordão de poliuretano.']
};
function K(k, ...ids) { ids.forEach(id => { FIX[id].k = k; }); }
K('presilha', 'fx_molduras', 'fx_forros', 'fx_forro_porta', 'fx_forro_porta_t', 'fx_grade_torpedo');
K('pino', 'fx_tampa_cac', 'fx_cabos_tampa', 'fx_estepe');
K('solda', 'fx_solda_teto', 'fx_solda_colunas');
K('cola', 'fx_cola_parabrisa', 'fx_cola_vidro_tras');
Object.values(FIX).forEach(f => { f.k = f.k || 'parafuso'; });

/* ===== Sintomas ===== */
const SYMPTOMS = [
  { id: 'naoliga', n: 'O motor gira, mas não pega (ou demora a pegar)',
    d: 'Diesel não tem vela de ignição: pega pela compressão quando recebe diesel na pressão certa. Sem pressão no rail ou com ar no sistema, gira e não pega.',
    s: [
      ['filtro_comb', 'Filtro entupido ou com ar depois de troca ou de pane seca.', 'Faça a sangria do manual: ligue a ignição, espere 10 s para a bomba elétrica tirar o ar e dê partida sem acelerar, por no máximo 10 s.'],
      ['bomba_baixa', 'Bomba elétrica do tanque parada: a bomba de alta fica sem alimentação.', 'Ouça o zumbido por alguns segundos ao ligar a ignição; confira o fusível e o relé da bomba.'],
      ['sens_agua', 'Água no filtro: a luz fica acesa com o motor funcionando.', 'Drene pela válvula embaixo do filtro, como manda o manual.'],
      ['sens_ckp', 'Sensor de rotação sem sinal: o módulo não sabe que o motor está girando.', 'Conta-giros parado na partida e código de falha no scanner.'],
      ['bomba_alta', 'Bomba de alta sem estanqueidade ou desgastada (diesel com água é a causa comum).', 'Teste de pressão do rail na partida (abaixo de uns 200 bar o motor não pega); serviço de oficina diesel.'],
      ['bateria', 'Bateria fraca: a rotação de partida fica baixa demais para o diesel pegar.', 'Teste com carga; diesel pede bateria boa.'],
      ['velas_aquec', 'Frio intenso sem o kit de velas aquecedoras.', 'O manual recomenda o kit para temperaturas abaixo de −8 °C e mistura com querosene abaixo de 0 °C.']
    ] },
  { id: 'fumaca_preta', n: 'Fumaça preta e perda de força',
    d: 'Fumaça preta é diesel demais para o ar que entra: falta ar (filtro, turbo, intercooler) ou sobra diesel (injetor).',
    s: [
      ['filtro_ar', 'Filtro de ar sujo: em estrada de terra entope rápido.', 'Limpe ou troque; o manual pede limpeza frequente em uso severo.'],
      ['mang_intercooler', 'Mangueira do intercooler solta ou furada: o ar do turbo vaza.', 'Assobio ao acelerar e óleo na mangueira; reaperte as abraçadeiras.'],
      ['turbo', 'Turbo com pouca pressão (rotor raspando, eixo com folga).', 'Pressão do turbo no scanner (até 1,2 bar); folga do eixo com o motor desligado e frio.'],
      ['bicos', 'Injetor pingando ou com retorno alto.', 'Teste de retorno e de vazão na oficina diesel.'],
      ['intercooler', 'Intercooler entupido de barro por fora ou de óleo por dentro.', 'Olhe por baixo da entrada do capô; lave com água de baixa pressão.'],
      ['sens_map', 'Sensor de pressão do turbo com leitura errada.', 'Compare a pressão lida com a do manômetro.']
    ] },
  { id: 'fumaca_branca', n: 'Fumaça branca',
    d: 'Fumaça branca rápida na partida fria é normal no diesel. Persistente e com cheiro adocicado é água queimando; com cheiro de diesel cru é combustão incompleta.',
    s: [
      ['junta_cab', 'Junta queimada: o líquido de arrefecimento entra no cilindro.', 'Nível do reservatório baixando sem vazamento e bolhas com o motor ligado.'],
      ['resfriador_oleo', 'Resfriador de óleo vazando por dentro.', 'Óleo no reservatório (borra marrom) ou água no óleo.'],
      ['bicos', 'Injetor pulverizando mal: diesel sem queimar.', 'Teste dos injetores.'],
      ['velas_aquec', 'No frio intenso, sem o kit de velas, a queima começa ruim.', 'Some quando o motor aquece.']
    ] },
  { id: 'fumaca_azul', n: 'Fumaça azul ou consumo de óleo',
    d: 'O manual considera normal até 0,8 L de óleo a cada 1.000 km. Acima disso, ou com fumaça azulada, há óleo queimando.',
    s: [
      ['turbo', 'Retentor do turbo vazando: óleo no ar ou no escape.', 'Óleo dentro da mangueira do intercooler e na saída da turbina.'],
      ['pistoes', 'Anéis gastos.', 'Teste de compressão e de vazamento dos cilindros.'],
      ['valvulas', 'Retentores de válvula gastos: fumaça ao dar partida depois de parado.', 'Fumaça só nos primeiros segundos.'],
      ['respiro', 'Respiro entupido empurra óleo para a admissão.', 'Muita pressão no cárter: a tampa de óleo "sopra" com o motor ligado.']
    ] },
  { id: 'potencia', n: 'Perde força, não passa de certa rotação ou luz da injeção acesa',
    d: 'Com falha em sensor ou pressão errada, o módulo entra em modo de emergência e limita a potência para proteger o motor.',
    s: [
      ['filtro_comb', 'Filtro de diesel saturado: falta combustível em carga alta.', 'Troca a cada 10.000 km ou 6 meses; diesel ruim satura antes.'],
      ['sens_rail', 'Pressão do rail fora do esperado.', 'Código de falha e pressão real × pedida no scanner.'],
      ['regulador', 'Válvula de pressão travando.', 'Pressão oscilando no scanner.'],
      ['pedal_acel', 'Sensor do pedal com sinal ruim.', 'Código do pedal; motor só em marcha lenta.'],
      ['mang_intercooler', 'Vazamento de ar do turbo.', 'Assobio e fumaça preta.'],
      ['ecu', 'Falha elétrica ou de aterramento do módulo.', 'Confira o fusível F14 da injeção (20 A) e o aterramento.']
    ] },
  { id: 'agua_filtro', n: 'Luz de água no filtro de diesel acesa',
    d: 'O sensor embaixo do filtro avisa quando há água acumulada. O manual manda drenar sempre que a luz fica acesa com o motor funcionando.',
    s: [
      ['sens_agua', 'Água acumulada no copo do filtro.', 'Drene pela válvula: desligue o conector, afrouxe o sensor até sair água e feche meia volta depois do encosto.'],
      ['tanque', 'Água no tanque (diesel ruim ou condensação com o tanque vazio).', 'Abasteça em posto de confiança e mantenha o tanque cheio no frio.'],
      ['filtro_comb', 'Filtro vencido não separa bem.', 'Troque e faça a sangria.']
    ] },
  { id: 'temperatura', n: 'Motor esquentando',
    d: 'Pare assim que o ponteiro chegar perto do vermelho. Com o motor quente, nunca abra o reservatório: o líquido sai fervendo.',
    s: [
      ['vaso', 'Nível baixo.', 'Com o motor frio, confira entre MIN e MAX.'],
      ['ventoinha', 'Embreagem viscosa solta: a hélice não puxa ar em baixa velocidade.', 'Com o motor quente e desligado, a hélice deve oferecer resistência ao girar com a mão.'],
      ['radiador', 'Colmeia entupida de barro ou de insetos.', 'Lave por trás com água de baixa pressão.'],
      ['termostato', 'Válvula travada fechada.', 'Mangueira de cima fria com o motor quente.'],
      ['bomba_agua', 'Bomba vazando ou com o rotor gasto.', 'Gotejamento pelo furo de alívio.'],
      ['vent_aux', 'Ventilador auxiliar parado (com o ar ligado).', 'Ele liga com o ar-condicionado; confira o fusível.'],
      ['junta_cab', 'Junta queimada pressurizando o sistema.', 'Bolhas no reservatório e mangueiras duras com o motor frio.']
    ] },
  { id: 'tracao', n: 'O 4x4 não engata ou a lâmpada fica piscando',
    d: 'A lâmpada pisca enquanto a mudança acontece. Para o 4LO, o carro tem de estar parado (abaixo de 4,8 km/h) e a embreagem pisada.',
    s: [
      ['botoes_4x4', 'Mudança pedida fora das condições: acima de 80 km/h para 4HI ou andando para 4LO.', 'Siga o quadro do manual: para a reduzida, pare e pise na embreagem até a lâmpada parar de piscar.'],
      ['motor_transf', 'Motor da transferência sem alimentação ou travado.', 'Fusível, conector na caixa e o som do motor ao apertar o botão.'],
      ['atuador_eixo', 'Lâmpada acende, mas só a traseira puxa: o eixo dianteiro não acoplou.', 'Vácuo e mangueiras do atuador e o cabo; ouça o "clic" do acoplamento.'],
      ['mang_vacuo', 'Mangueira de vácuo rachada.', 'O freio também fica mais duro se for a linha principal.'],
      ['transferencia', 'Nível baixo de óleo ou garfo gasto.', 'Nível pelo bujão de abastecimento; ruído de corrente.'],
      ['cardan_diant', 'Cruzeta do cardã dianteiro quebrada.', 'Estalo ao engatar e cardã solto.']
    ] },
  { id: 'vibracao', n: 'Vibração que aumenta com a velocidade',
    d: 'Na picape, o cardã longo é suspeito frequente, junto com rodas e pneus.',
    s: [
      ['mancal_cardan', 'Borracha do mancal central rompida.', 'Cardã com folga no meio; vibra ao arrancar e ao aliviar.'],
      ['cruzetas', 'Cruzeta sem graxa ou com folga.', 'Engraxe a cada 10.000 km; folga dá estalo na troca de marcha.'],
      ['cardan_tras', 'Cardã montado fora de fase ou empenado.', 'Marcas das flanges desalinhadas depois de serviço.'],
      ['pneus', 'Roda desbalanceada ou pneu deformado.', 'Balanceamento e inspeção dos pneus.'],
      ['cubos_diant', 'Rolamento da frente com folga.', 'Balance a roda levantada.']
    ] },
  { id: 'freio', n: 'Pedal duro, baixo ou o carro puxa ao frear',
    d: 'O servofreio depende do vácuo da bomba de vácuo; com o motor desligado ele não ajuda.',
    s: [
      ['bomba_vacuo', 'Pedal muito duro com o motor ligado: falta vácuo.', 'Mangueira e bomba de vácuo.'],
      ['reserv_freio', 'Nível baixo: pastilhas gastas ou vazamento.', 'DOT 4; troca a cada 30.000 km ou 2 anos.'],
      ['pincas', 'Pinça travada: o carro puxa para um lado.', 'Roda mais quente que a outra depois de rodar.'],
      ['sapatas', 'Lona contaminada com óleo do eixo.', 'Óleo por dentro da roda traseira; retentor do semieixo.'],
      ['cil_roda', 'Cilindro de roda vazando.', 'Fluido escorrendo no tambor.'],
      ['abs', 'Luz do ABS acesa: o freio comum continua, sem antitravamento.', 'Sensores sujos de barro são a causa comum depois de trilha.']
    ] },
  { id: 'direcao', n: 'Direção com folga, pesada ou o carro puxa',
    d: 'A direção de esferas recirculantes tem várias articulações; cada uma soma um pouco de folga.',
    s: [
      ['braco_inter', 'Braço intermediário com folga.', 'Com o carro no chão, alguém balança o volante e você olha as articulações.'],
      ['barras_dir', 'Terminais gastos.', 'Pneu gastando por dentro ou por fora.'],
      ['caixa_dir', 'Folga interna ou retentor vazando.', 'Óleo na longarina esquerda.'],
      ['reserv_dir', 'Nível baixo: direção pesada e chiado.', 'Complete com Dexron II.'],
      ['bomba_dir', 'Bomba fraca ou correia patinando.', 'Fica pesada principalmente em manobra.'],
      ['pivos', 'Pivô com folga.', 'Barulho em buraco e roda com folga vertical.'],
      ['barras_torcao', 'Altura diferente dos dois lados: o carro puxa.', 'Meça a altura da frente nos dois lados e alinhe.']
    ] },
  { id: 'traseira', n: 'Traseira baixa, rangendo ou batendo',
    d: 'O eixo traseiro é preso nos feixes de molas: lâminas, buchas e grampos aguentam toda a carga da caçamba.',
    s: [
      ['feixe_molas', 'Lâmina quebrada ou feixe cansado: a traseira abaixa de um lado.', 'Olhe as lâminas e meça a altura dos dois lados.'],
      ['jumelos', 'Buchas do jumelo ressecadas: rangido em lombada.', 'Lubrificar não resolve por muito tempo; troque as buchas.'],
      ['grampos_u', 'Grampo frouxo: o eixo desloca e o carro puxa.', 'Reaperto a cada 30.000 km.'],
      ['amort_tras', 'Amortecedor vazando: a traseira quica vazia.', 'Óleo no corpo do amortecedor.'],
      ['coxins_cab', 'Coxins da caçamba ou da cabine gastos: batida seca em piso ruim.', 'Balance a caçamba com a mão.']
    ] },
  { id: 'ruido_frente', n: 'Ronco, estalo ou batida na frente',
    d: 'Na frente da 4x4 há rolamentos, juntas homocinéticas, pivôs e o diferencial dianteiro.',
    s: [
      ['cubos_diant', 'Ronco que muda nas curvas: rolamento.', 'Graxa trocada a cada 20.000 km ou nas pastilhas.'],
      ['semieixos_diant', 'Estalo em curva fechada com o 4x4 engatado: homocinética.', 'Coifa rasgada e graxa espirrada.'],
      ['coifas', 'Coifa rasgada joga graxa na roda.', 'Troque logo.'],
      ['dif_diant', 'Zumbido do diferencial dianteiro.', 'Nível do óleo (1,20 L de 80W90).'],
      ['barra_estab', 'Buchas e bieletas gastas: batida em lombada.', 'Balance a barra com a mão.'],
      ['amort_diant', 'Amortecedor batendo ou solto.', 'Fixações de cima e de baixo.']
    ] },
  { id: 'bateria', n: 'Bateria descarregando',
    d: 'A bateria da S10 não precisa de manutenção, mas o diesel exige muito dela na partida.',
    s: [
      ['alternador', 'Alternador sem carregar.', 'Com o motor ligado, a bateria deve marcar cerca de 13,8 a 14,5 V.'],
      ['correia_acess', 'Correia patinando.', 'Chiado ao ligar o ar ou ao esterçar.'],
      ['cabos_bat', 'Terminal oxidado ou aterramento solto.', 'Limpe e reaperte.'],
      ['bateria', 'Bateria no fim da vida.', 'Teste com carga.'],
      ['chicote', 'Consumo com o carro desligado (acessório mal instalado).', 'Meça a corrente com tudo desligado.']
    ] },
  { id: 'embreagem', n: 'Embreagem patinando, trepidando ou pedal baixo',
    d: 'A embreagem é hidráulica: o pedal tem fluido (DOT 4) e não cabo.',
    s: [
      ['embreagem', 'Disco gasto: patina em subida com carga.', 'Rotação sobe e a velocidade não acompanha em 4ª.'],
      ['reserv_emb', 'Nível baixo: pedal baixo e marcha arranhando.', 'Procure vazamento no tubo e no atuador.'],
      ['rol_emb', 'Atuador vazando na capa seca.', 'Fluido pingando entre o motor e o câmbio.'],
      ['cil_emb_mestre', 'Pedal afunda devagar.', 'Vazamento interno no cilindro-mestre.'],
      ['volante_motor', 'Trepidação ao arrancar.', 'Volante com trincas de calor ou coxins gastos.']
    ] }
];

/* ===== Caminhos ===== */
const FLOWS = [
  { id: 'ar', n: 'O caminho do ar e do turbo', c: '#3D9BE0', d: 'O ar entra limpo, é comprimido pelo turbo, esfria no intercooler e entra nos cilindros; o escape volta a girar o turbo.', motion: 'ar',
    leg: [['#3D9BE0', 'ar frio'], ['#E8B90C', 'ar comprimido e quente'], ['#8B6F5A', 'gases do escape']],
    steps: [
      ['tomada_ar', 'O ar entra pela tomada, atrás do farol direito.'],
      ['caixa_filtro', 'Passa pela caixa do filtro…'],
      ['filtro_ar', '…e o filtro segura a poeira. Em estrada de terra, ele entope rápido.'],
      ['duto_ar', 'O duto leva o ar limpo ao turbo.', { route: 1 }],
      ['turbo', 'O compressor do turbo empurra o ar, que esquenta ao ser comprimido (até 1,2 bar).', { c: '#E8B90C' }],
      ['mang_intercooler', 'A mangueira sobe até o intercooler…', { route: 1, pick: [0] }],
      ['intercooler', '…que fica embaixo da entrada de ar do capô: o vento esfria o ar comprimido.', { c2: '#3D9BE0' }],
      ['mang_intercooler', 'O ar frio e denso desce…', { route: 1, pick: [1], c: '#3D9BE0' }],
      ['coletor_adm', '…para o coletor, do lado esquerdo, e entra nos cilindros.'],
      ['cabecote', 'O injetor pulveriza o diesel no ar quente da compressão e ele queima sozinho.', { c: '#E8B90C' }],
      ['coletor_esc', 'Os gases saem pelo coletor do lado direito…', { c: '#8B6F5A' }],
      ['turbo', '…e giram a turbina, que move o compressor no mesmo eixo.', { from: 0 }],
      ['tubo_diant', 'Depois da turbina, o escape desce…', { route: 1 }],
      ['silencioso', '…passa pelo silencioso…'],
      ['tubo_tras', '…e sai na traseira direita.', { route: 1 }]
    ] },
  { id: 'comb', n: 'O caminho do diesel (common rail)', c: '#3F9D4A', d: 'Do tanque ao filtro com separador de água, à bomba de alta e ao rail; o módulo abre os injetores.', mo: () => ({ engine: 0.4 }),
    leg: [['#3F9D4A', 'diesel em baixa pressão'], ['#E4572E', 'diesel em alta pressão'], ['#9BBF6A', 'retorno'], ['#35B6C9', 'sinais']],
    steps: [
      ['tanque', 'O diesel sai do tanque de 80 litros…'],
      ['bomba_baixa', '…empurrado pela bomba elétrica que fica dentro dele.'],
      ['linhas_comb', 'A linha corre pelo chassi até o cofre.', { route: 1, pick: [0] }],
      ['filtro_comb', 'O filtro segura a sujeira e separa a água, que fica no copo de baixo.'],
      ['sens_agua', 'Se a água acumula, o sensor acende a luz no painel: hora de drenar.', { c: '#35B6C9' }],
      ['linhas_comb', 'Filtrado, o diesel vai à bomba de alta.', { route: 1, pick: [1] }],
      ['bomba_alta', 'A bomba de alta, movida pela engrenagem da distribuição, comprime o diesel a centenas de bar.', { c: '#E4572E' }],
      ['tubos_alta', 'Um tubo de aço leva o diesel ao rail…', { route: 1, pick: [0] }],
      ['rail', '…o tubo distribuidor, que guarda o diesel sob pressão.'],
      ['sens_rail', 'O sensor mede a pressão e o módulo a corrige pela válvula de controle.', { c: '#35B6C9' }],
      ['tubos_alta', 'Do rail, um tubo para cada injetor.', { route: 1, pick: [1, 2, 3, 4] }],
      ['bicos', 'O módulo abre cada injetor na hora certa, várias vezes por ciclo.'],
      ['ecu', 'O módulo decide pelo pedal, pela rotação, pela pressão do turbo e pela temperatura.', { c: '#35B6C9' }],
      ['retorno', 'O que sobra volta ao tanque pela linha de retorno.', { route: 1, c: '#9BBF6A' }]
    ] },
  { id: 'forca', n: 'Do motor às quatro rodas', c: '#B0412A', d: 'Em 2HI só o eixo traseiro puxa; em 4HI e 4LO a transferência manda força também para a frente.', motion: 'forca',
    leg: [['#B0412A', 'força para trás'], ['#E3A21A', 'força para a frente (4x4)'], ['#35B6C9', 'comando elétrico']],
    steps: [
      ['pistoes', 'A combustão empurra os pistões…'],
      ['virabrequim', '…e o virabrequim gira (até 340 N·m entre 1.800 e 2.400 rpm).'],
      ['volante_motor', 'O volante passa o giro à embreagem…'],
      ['embreagem', '…que liga o motor ao câmbio quando você solta o pedal.'],
      ['cambio', 'O câmbio escolhe a marcha: da 1ª (4,47:1) à 5ª (0,65:1).'],
      ['transferencia', 'A transferência, presa atrás do câmbio, reparte a força.'],
      ['cardan_tras', 'O cardã traseiro, em duas partes, leva a força para trás…', { route: 1 }],
      ['dif_tras', '…ao diferencial com Trac-Lock (4,27:1), que ajuda a roda com aderência.'],
      ['semieixos_tras', 'Os semieixos giram as rodas de trás.', { both: 1 }],
      ['botoes_4x4', 'Em terra, lama ou areia, aperte 4HI (ou 4LO, parado e com a embreagem pisada).', { c: '#35B6C9' }],
      ['motor_transf', 'O motor elétrico muda a caixa…', { c: '#35B6C9' }],
      ['cardan_diant', '…e a saída da frente gira o cardã dianteiro…', { route: 1, c: '#E3A21A' }],
      ['dif_diant', '…até o diferencial dianteiro.'],
      ['atuador_eixo', 'O atuador acopla o lado direito ao diferencial.'],
      ['semieixos_diant', 'Os semieixos com homocinéticas giram as rodas da frente.', { both: 1 }],
      ['pneus', 'As quatro rodas puxam. No asfalto seco, volte para 2HI.', { at: [[1.561, 0.36, 0.727], [1.561, 0.36, -0.727], [-1.561, 0.36, 0.70], [-1.561, 0.36, -0.70]] }]
    ] },
  { id: 'oleo', n: 'O caminho do óleo', c: '#C9A227', d: 'A bomba manda o óleo do cárter ao filtro, ao resfriador e às galerias; ele lubrifica e esfria, inclusive o turbo.', motion: 'oleo',
    steps: [
      ['carter', 'O óleo fica no cárter (7,5 L mais 1,0 L do filtro).'],
      ['bomba_oleo', 'A bomba puxa pelo pescador…'],
      ['filtro_oleo', '…e empurra pelo filtro…'],
      ['resfriador_oleo', '…e pelo resfriador, onde o líquido de arrefecimento tira calor.'],
      ['virabrequim', 'Pelas galerias, chega aos mancais e às bielas…'],
      ['pistoes', '…e bicos esguicham óleo por baixo dos pistões para esfriá-los.'],
      ['turbo', 'Uma linha leva óleo ao eixo do turbo, que gira muito rápido.'],
      ['comando', 'Em cima, lubrifica o comando e os balancins…'],
      ['engrenagens', '…e as engrenagens da distribuição.'],
      ['carter', 'Tudo escorre de volta ao cárter.'],
      ['sens_oleo', 'Se a pressão cai, a luz do óleo acende: pare na hora.']
    ] },
  { id: 'agua', n: 'O arrefecimento', c: '#1F8FC0', d: 'A bomba d’água faz o líquido circular; frio, ele fica no motor; quente, vai ao radiador.', motion: 'agua',
    leg: [['#2F8FE0', 'líquido frio'], ['#E4572E', 'líquido quente']],
    steps: [
      ['bomba_agua', 'A bomba d’água, na frente do motor, empurra o líquido…', { c: '#2F8FE0' }],
      ['bloco', '…em volta dos cilindros…'],
      ['cabecote', '…e do cabeçote, onde fica a parte mais quente.', { c: '#E4572E' }],
      ['termostato', 'Frio, o termostato fecha e o líquido volta direto ao motor; quente, ele abre.'],
      ['mang_sup', 'O líquido quente vai ao radiador pela mangueira de cima.', { route: 1 }],
      ['radiador', 'O radiador troca calor com o ar.', { c2: '#2F8FE0' }],
      ['ventoinha', 'A ventoinha viscosa puxa mais ar quando ele passa quente.'],
      ['vent_aux', 'Com o ar-condicionado, o ventilador elétrico da frente ajuda.'],
      ['mang_inf', 'Frio, o líquido volta à bomba pela mangueira de baixo.', { route: 1, c: '#2F8FE0' }],
      ['vaso', 'O reservatório pressurizado recebe a dilatação e as bolhas.'],
      ['mang_aquec', 'Uma parte vai ao aquecedor da cabine.', { route: 1, c: '#E4572E' }],
      ['rad_aquec', 'O radiador do aquecedor esquenta o ar de dentro.']
    ] },
  { id: 'partida', n: 'A partida do diesel', c: '#D6B000', d: 'Sem vela de ignição: o motor de partida gira, a compressão esquenta o ar e o diesel injetado queima sozinho.', motion: 'partida',
    leg: [['#E8B90C', 'corrente'], ['#35B6C9', 'sinais'], ['#3F9D4A', 'diesel']],
    steps: [
      ['ign_chave', 'Você liga a ignição: o imobilizador confere a chave.', { c: '#35B6C9' }],
      ['bomba_baixa', 'A bomba elétrica do tanque pressuriza a linha por alguns segundos.', { c: '#3F9D4A' }],
      ['bateria', 'Na partida, a bateria manda uma corrente alta…', { c: '#E8B90C' }],
      ['cabos_bat', '…pelo cabo grosso…', { route: 1 }],
      ['motor_partida', '…ao motor de partida, que engrena no volante.'],
      ['volante_motor', 'O motor gira; a compressão de 17,8:1 esquenta o ar.'],
      ['sens_ckp', 'O sensor de rotação avisa o módulo…', { c: '#35B6C9' }],
      ['ecu', '…que manda a bomba de alta encher o rail…'],
      ['bomba_alta', '…e, com a pressão certa, abre os injetores.', { c: '#3F9D4A' }],
      ['bicos', 'O diesel injetado queima no ar quente: o motor pega.'],
      ['velas_aquec', 'Em regiões muito frias, o kit de velas aquecedoras esquenta a câmara antes (com a luz de pré-aquecimento).', { from: 4 }]
    ] },
  { id: 'freio', n: 'Do pedal às rodas', c: '#D2334A', d: 'O servofreio usa o vácuo da bomba de vácuo; discos na frente e tambores atrás, com ABS.', motion: 'freio',
    leg: [['#D2334A', 'fluido sob pressão'], ['#35B6C9', 'sinais'], ['#8FA6C4', 'vácuo']],
    steps: [
      ['pedal_freio', 'Você pisa no pedal…'],
      ['servo', '…o servofreio multiplica a força…', { c: '#8FA6C4' }],
      ['bomba_vacuo', '…com o vácuo da bomba no alternador, já que o diesel não faz vácuo no coletor.', { from: 1 }],
      ['cil_mestre', 'O cilindro-mestre cria a pressão nos dois circuitos.', { c: '#D2334A' }],
      ['reserv_freio', 'O fluido (DOT 4) vem do reservatório.'],
      ['abs', 'O ABS fica no caminho.', { c: '#35B6C9' }],
      ['tubos_freio', 'As tubulações levam a pressão às quatro rodas.', { route: 1 }],
      ['pincas', 'Na frente, as pinças…', { both: 1 }],
      ['pastilhas', '…apertam as pastilhas…', { both: 1, from: -1 }],
      ['discos', '…contra os discos ventilados.', { both: 1, from: -1 }],
      ['cil_roda', 'Atrás, os cilindros de roda…', { both: 1 }],
      ['sapatas', '…abrem as sapatas…', { both: 1, from: -1 }],
      ['tambores', '…contra os tambores.', { both: 1, from: -1 }],
      ['sens_roda', 'Se uma roda trava, o ABS alivia e reaplica a pressão.', { c: '#35B6C9' }],
      ['freio_estac', 'Estacionado, o pedal do freio de estacionamento puxa as sapatas de trás pelos cabos.', { from: 0 }]
    ] },
  { id: 'dir', n: 'Do volante às rodas', c: '#1FA394', d: 'Caixa de esferas recirculantes com assistência hidráulica e varetas em paralelogramo.', motion: 'dir',
    leg: [['#1FA394', 'movimento'], ['#E8B90C', 'óleo sob pressão']],
    steps: [
      ['volante_dir', 'Você gira o volante.'],
      ['coluna', 'A coluna leva o giro até a caixa, presa na longarina esquerda.', { route: 1 }],
      ['bomba_dir', 'A bomba, movida pela correia, manda óleo sob pressão…', { c: '#E8B90C' }],
      ['mang_dir', '…pela mangueira à caixa.', { route: 1 }],
      ['caixa_dir', 'Dentro da caixa, as esferas e o pistão hidráulico giram o setor.', { c: '#1FA394' }],
      ['braco_pitman', 'O braço Pitman empurra…'],
      ['barra_central', '…a barra central para o lado…'],
      ['braco_inter', '…apoiada do outro lado no braço intermediário.'],
      ['barras_dir', 'As barras de direção empurram…', { both: 1 }],
      ['mangas', '…as mangas, que esterçam as rodas.', { both: 1 }]
    ] }
];

/* ===== Plano de revisões (manual do proprietário, 11/2008) ===== */
const MAINT = [
  { id: 'revisao', n: 'Revisão periódica GM', km: 10000, mo: 12, p: ['transferencia', 'pastilhas', 'pivos', 'amort_diant', 'amort_tras', 'pneus'], t: 'A cada 10.000 km ou 1 ano. Inclui leitura de falhas com o Tech 2, níveis, freios, folgas da suspensão e da direção, torque das rodas e lubrificação do chassi.' },
  { id: 'oleo', n: 'Óleo e filtro de óleo do motor', km: 10000, mo: 6, p: ['carter', 'filtro_oleo'], t: 'Primeira troca aos 5.000 km; depois a cada 10.000 km ou 6 meses (5.000 em uso severo). API CG-4 ou superior, SAE 15W40: 7,5 L mais 1,0 L do filtro.' },
  { id: 'filtro_comb', n: 'Filtro de diesel', km: 10000, mo: 6, p: ['filtro_comb'], t: 'Faça a sangria depois da troca (ignição ligada por 10 s antes da partida).' },
  { id: 'agua_filtro', n: 'Drenar a água do filtro de diesel', mo: 1, p: ['sens_agua', 'filtro_comb'], t: 'Sempre que a luz de água no filtro ficar acesa com o motor funcionando.' },
  { id: 'filtro_ar', n: 'Filtro de ar: limpar e girar 90° / trocar', km: 10000, p: ['filtro_ar', 'caixa_filtro', 'duto_ar'], t: 'Limpeza a cada 10.000 km e troca a cada 20.000 km, pelo quadro de manutenção; mangueira do filtro conferida a cada 20.000 km. Em poeira, com mais frequência.' },
  { id: 'cardan', n: 'Engraxar cruzetas e junta deslizante do cardã', km: 10000, p: ['cruzetas', 'cardan_tras', 'cardan_diant'], t: 'Graxa nº 2 EP à base de sabão de lítio; a cada 5.000 km em uso severo.' },
  { id: 'pivos', n: 'Pivôs, braços e terminais: folga e lubrificação', km: 10000, p: ['pivos', 'braco_inter', 'barras_dir', 'bandeja_inf', 'bandeja_sup'] },
  { id: 'rolamentos', n: 'Graxa dos rolamentos das rodas dianteiras', km: 20000, p: ['cubos_diant'], t: 'Ou a cada substituição de pastilhas.' },
  { id: 'valvulas', n: 'Folga das válvulas', km: 30000, p: ['valvulas', 'tampa_valv'] },
  { id: 'grampos', n: 'Reapertar grampos em "U" e espigões das molas', km: 30000, p: ['grampos_u', 'feixe_molas'] },
  { id: 'dif', n: 'Óleo dos diferenciais dianteiro e traseiro', km: 30000, p: ['dif_diant', 'dif_tras'], t: 'Primeira troca aos 10.000 km. Dianteiro: SAE 80W90 (1,20 L). Traseiro Trac-Lock: SAE 85W140 GL-5 para tração positiva (1,60 L).' },
  { id: 'fluido_freio', n: 'Fluido de freio (DOT 4)', km: 30000, mo: 24, p: ['reserv_freio', 'cil_mestre'] },
  { id: 'embreagem', n: 'Fluido da embreagem e curso do pedal', km: 30000, p: ['reserv_emb', 'cil_emb_mestre', 'pedal_emb'] },
  { id: 'coxins', n: 'Coxins do motor e do escape', km: 30000, p: ['coxim_dir', 'coxim_esq', 'coxins_esc'] },
  { id: 'respiro', n: 'Respiro do tanque', km: 30000, p: ['tanque'] },
  { id: 'cambio', n: 'Óleo do câmbio', km: 40000, p: ['cambio'], t: 'Primeira troca aos 10.000 km. Dexron III ACDelco, 2,0 L no 4x4.' },
  { id: 'transf', n: 'Óleo da caixa de transferência', km: 40000, mo: 36, p: ['transferencia'], t: 'Só se usar o 4x4 constantemente; no uso esporádico, basta conferir o nível. Dexron III, 1,18 L.' },
  { id: 'farois', n: 'Regulagem do foco dos faróis', km: 40000, p: ['farois'] },
  { id: 'correia', n: 'Correia de acessórios (trocar)', km: 50000, p: ['correia_acess', 'tensor_acess'] },
  { id: 'chassi', n: 'Reapertar os parafusos do chassi', km: 50000, p: ['longarinas', 'travessas', 'coxins_cab'] },
  { id: 'avaliar', n: 'Avaliar motor de partida, alternador e turbo', km: 90000, p: ['motor_partida', 'alternador', 'turbo'], t: 'Serviço dos respectivos fabricantes, pelo plano da GM.' },
  { id: 'arref', n: 'Líquido de arrefecimento', km: 150000, mo: 60, p: ['vaso', 'radiador'], t: 'Aditivo de longa duração ACDelco (alaranjado), 35% a 50%, com água potável: 10,0 L com ar-condicionado. Não misture com o aditivo verde.' },
  { id: 'ar_tela', n: 'Ar-condicionado: funcionamento e tela da entrada de ar', km: 20000, p: ['compressor', 'evaporador', 'grade_torpedo'] },
  { id: 'rodizio', n: 'Pneus: pressão, desgaste e rodízio', km: 10000, p: ['pneus', 'estepe'], t: 'O estepe de aço 235/75 R15 não entra no rodízio.' },
  { id: 'lubrif', n: 'Lubrificar dobradiças, fechaduras e a tampa da caçamba', mo: 12, p: ['dobradicas', 'fech_portas', 'dobr_capo', 'dobr_tampa', 'fech_tampa'] }
];

/* ===== Ficha técnica (manual do proprietário S10/Blazer, 11/2008) ===== */
const SPECS = [
  ['Motor', [['Tipo', 'MWM Sprint 2.8 turbodiesel eletrônico, 4 cilindros em linha, longitudinal'], ['Cilindrada', '2.799 cm³ (93 × 103 mm)'], ['Taxa de compressão', '17,8:1'], ['Potência', '140 cv (103 kW) a 3.500 rpm'], ['Torque', '340 N·m (34,7 kgfm) de 1.800 a 2.400 rpm'], ['Injeção', 'Common rail: bomba de alta Bosch, tubo distribuidor e 4 injetores'], ['Turbo', 'Garrett, pressão máxima 1,2 bar, com intercooler'], ['Ordem de injeção', '1–3–4–2'], ['Marcha lenta / corte', '760 ± 100 rpm / 4.200 ± 100 rpm'], ['Distribuição', 'Por engrenagens (sem correia dentada no plano de manutenção)']]],
  ['Transmissão', [['Câmbio', 'Manual de 5 marchas: 4,47 / 2,29 / 1,38 / 1,00 / 0,65; ré 3,80'], ['Diferencial', '4,27:1, traseiro com Trac-Lock'], ['Tração', '4x4 com caixa de transferência de comando elétrico: 2HI, 4HI e 4LO'], ['Limites', '4HI engatado até 80 km/h e rodando até 100 km/h; 4LO com o carro parado (até 4,8 km/h) e a embreagem pisada']]],
  ['Chassi', [['Estrutura', 'Chassi de longarinas com cabine e caçamba separadas'], ['Suspensão dianteira', 'Independente, braços sobrepostos e barras de torção'], ['Suspensão traseira', 'Eixo rígido em feixes de molas'], ['Freios', 'Disco na frente, tambor atrás, ABS; fluido DOT 4; freio de estacionamento de pedal'], ['Direção', 'Hidráulica, de esferas recirculantes'], ['Diâmetro de giro', '12,90 m (guia a guia)'], ['Rodas e pneus', 'Liga leve 7 J × 16 com 235/70 R16; estepe de aço 7 J × 15 com 235/75 R15'], ['Pressão dos pneus', 'Até 3 pessoas: 35/30 lbf/pol²; carga plena: 45/50 lbf/pol² (frente/trás, pneus frios)']]],
  ['Dimensões', [['Comprimento', '5.260 mm'], ['Entre-eixos', '3.122 mm'], ['Bitola', '1.454 mm na frente, 1.399 mm atrás'], ['Altura', '1.661 mm (1.719 mm até o bagageiro)'], ['Largura', '2.044 mm de espelho a espelho'], ['Balanços', '936 mm na frente e 1.199 mm atrás'], ['Vão livre', '156 mm até a cinta do cardã, carregado'], ['Caçamba', '1.477 × 1.438 mm, 1.002 mm entre as caixas de roda, 430 mm de altura; 0,86 m³']]],
  ['Pesos', [['Em ordem de marcha', '1.885 kg (Executive 4x4: 1.145 na frente, 740 atrás)'], ['Peso bruto total', '2.910 kg'], ['Carga útil', '1.025 kg com passageiros e bagagem'], ['Reboque', '845 kg com freio, 450 kg sem freio; 90 kg no engate']]],
  ['Capacidades', [['Óleo do motor', '7,5 L no cárter + 1,0 L no filtro (API CG-4, 15W40)'], ['Câmbio', '2,0 L de Dexron III (4x4)'], ['Transferência', '1,18 L de Dexron III'], ['Eixo dianteiro', '1,20 L de SAE 80W90'], ['Eixo traseiro', '1,60 L de SAE 85W140 GL-5 para tração positiva'], ['Arrefecimento', '10,0 L com ar-condicionado (9,7 L sem)'], ['Direção hidráulica', '1,26 L de Dexron II'], ['Freio', '0,77 L de DOT 4'], ['Tanque', '80 L (reserva de cerca de 9 L)'], ['Ar-condicionado', '450 g de R-134a'], ['Lavador', '3,3 L']]],
  ['Elétrica', [['Bateria', '12 V, 60 Ah'], ['Alternador', '100 A'], ['Velas aquecedoras', 'Kit da concessionária para temperaturas abaixo de −8 °C']]],
  ['O carro', [['Versão', 'S10 Executive cabine dupla 4x4, 2.8 turbodiesel eletrônico, 2009'], ['Considerado presente', 'Ar-condicionado, direção hidráulica, ABS, airbags frontais, rodas de liga, barras no teto e estribos'], ['Confira no seu', 'Torques dos fixadores (manual de oficina), lado da saída do escapamento e acessórios']]]
];

/* ===== Como desmontar (3D) ===== */
const RODA_E = [['pneus', [0, 0, 0.48], 1, 0], ['rodas', [0, 0, 0.48], 1, 0]];
const RODA_TE = [['pneus', [0, 0, 0.48], 1, 2], ['rodas', [0, 0, 0.48], 1, 2]];
const GUIDES = [
  { id: 'dm_oleo', grp: 'Mecânica', n: 'Troca de óleo e filtro', part: 'carter', parts: ['carter', 'filtro_oleo', 'protetor_carter'], side: 0,
    steps: [
      ['Com o motor quente e o carro nivelado, tire o protetor do cárter (4 parafusos).', { fx: [['fx_protetor', [0, 1, 2, 3]]], out: [['protetor_carter', [0, -0.35, 0]]], cam: [0.2, -1, 0.3], l: 'Protetor' }],
      ['Tire o bujão e deixe escorrer.', { fx: [['fx_carter', [0]]], cam: [0.3, -1, 0.3], l: 'Bujão do cárter' }],
      ['Para o filtro, o manual manda soltar a caixa do filtro de ar e a mangueira do turbo para o intercooler e tirá-lo pelo vão entre o pneu e a saia do para-lama.', { out: [['filtro_oleo', [0, -0.2, -0.25]]], cam: [0.3, -0.3, -1], l: 'Filtro de óleo' }],
      ['Filtro novo com o anel untado de óleo, bujão com arruela nova e 7,5 L mais 1,0 L de 15W40 (API CG-4 ou superior). Confira na vareta.', { l: 'Abastecer', at: [1.70, 1.04, 0.0] }]
    ] },
  { id: 'dm_filtro_comb', grp: 'Mecânica', n: 'Filtro de diesel (troca e sangria)', part: 'filtro_comb', parts: ['filtro_comb', 'sens_agua'], side: 0,
    steps: [
      ['Abra o capô. O filtro fica do lado esquerdo do cofre.', { open: 'hood', l: 'Capô' }],
      ['Desligue o conector do sensor de água e solte o filtro do suporte.', { fx: [['fx_filtro_comb', [0, 1, 2]]], cam: [0.3, 0.8, 0.6], l: 'Filtro' }],
      ['Tire o filtro, com um recipiente embaixo.', { out: [['filtro_comb', [0, 0.35, 0.1]], ['sens_agua', [0, 0.35, 0.1]]], l: 'Filtro de diesel' }],
      ['Sangria (manual): ligue a ignição e espere 10 s, enquanto a bomba elétrica tira o ar; dê partida sem acelerar, no máximo 10 s, e repita se precisar.', { l: 'Sangria', at: [0.45, 1.10, 0.37], cam: [-0.6, 0.6, 0.5] }]
    ] },
  { id: 'dm_drenagem', grp: 'Mecânica', n: 'Drenar a água do filtro de diesel', part: 'sens_agua', parts: ['sens_agua'], side: 0,
    steps: [
      ['Com o motor desligado, desligue o conector do sensor de água, apertando a trava.', { open: 'hood', fx: [['fx_filtro_comb', [2]]], l: 'Conector' }],
      ['Afrouxe o sensor até sair toda a água e a sujeira.', { out: [['sens_agua', [0, -0.12, 0]]], l: 'Válvula de dreno' }],
      ['Feche girando meia volta depois que a vedação encostar e ligue o conector. Se a luz continuar acesa, faça a sangria.', { l: 'Fechar', at: [1.30, 0.75, 0.58] }]
    ] },
  { id: 'dm_filtro_ar', grp: 'Mecânica', n: 'Filtro de ar', part: 'filtro_ar', parts: ['filtro_ar', 'caixa_filtro'], side: 0,
    steps: [
      ['Abra o capô; a caixa fica no canto dianteiro direito.', { open: 'hood', l: 'Capô' }],
      ['Solte a braçadeira e a cinta de borracha e tire o conjunto do filtro.', { out: [['caixa_filtro', [0.05, 0.40, -0.10]]], l: 'Conjunto do filtro' }],
      ['Solte as 3 presilhas e tire o elemento.', { out: [['filtro_ar', [0.05, 0.65, -0.15]]], l: 'Elemento' }],
      ['Limpe de dentro para fora com ar a até 70 lbf/pol², a 5 cm, e reinstale girado 90°; troque a cada 20.000 km. Encaixe o pino-guia no suporte.', { l: 'Montagem', at: [2.02, 0.85, -0.48] }]
    ] },
  { id: 'dm_bateria', grp: 'Mecânica', n: 'Bateria', part: 'bateria', parts: ['bateria'], side: 0,
    steps: [
      ['Abra o capô com a ignição desligada.', { open: 'hood', l: 'Capô' }],
      ['Solte primeiro o negativo (preto).', { fx: [['fx_bateria', [1]]], l: 'Negativo' }],
      ['Depois o positivo (vermelho).', { fx: [['fx_bateria', [0]]], l: 'Positivo' }],
      ['Solte o grampo.', { fx: [['fx_bateria', [2]]], l: 'Grampo' }],
      ['Tire a bateria para cima, sem inclinar. Na volta, positivo primeiro e negativo por último; acerte o rádio.', { out: [['bateria', [0, 0.5, 0.15]]], l: 'Bateria' }]
    ] },
  { id: 'dm_estepe', grp: 'Mecânica', n: 'Estepe (baixar e subir)', part: 'estepe', parts: ['estepe', 'guincho_estepe'], side: 0,
    steps: [
      ['Pegue a chave de roda e o macaco junto ao painel traseiro, do lado direito da cabine.', { l: 'Ferramentas', at: [-1.05, 0.85, -0.55], cam: [-0.4, 0.6, -1] }],
      ['Encaixe a parte chanfrada da chave pelo furo do para-choque traseiro, no eixo do guincho.', { fx: [['fx_estepe', [0]]], cam: [-1, 0.3, 0.2], l: 'Guincho' }],
      ['Gire baixando o estepe até o chão e incline o retentor do fim do cabo para soltar a roda.', { fx: [['fx_estepe', [1]]], out: [['estepe', [0, -0.30, 0]]], cam: [-0.6, -0.4, 0.6], l: 'Estepe' }],
      ['Para guardar: roda deitada com a válvula para baixo, retentor dentro da abertura, gire até sentir dois cliques e puxe para conferir (manual).', { l: 'Guardar', at: [-2.25, 0.42, 0] }]
    ] },
  { id: 'dm_roda', grp: 'Mecânica', n: 'Roda', part: 'rodas', parts: ['rodas', 'pneus'], side: 1,
    steps: [
      ['Estacione no plano, pisca-alerta ligado, freio de estacionamento acionado e 1ª ou ré engatada; calce a roda na diagonal oposta.', { l: 'Segurança', at: [0.30, 0.75, 0.38], cam: [-0.4, 0.8, 0.6] }],
      ['Tire a calota central e afrouxe as 6 porcas meia volta a uma volta.', { fx: [['fx_roda', [0, 1, 2, 3, 4, 5]]], keep: 1, l: 'Porcas' }],
      ['Apoie o macaco no encaixe do chassi perto da roda e levante.', { l: 'Ponto do macaco', at: [1.30, 0.40, 0.48] }],
      ['Tire as porcas e a roda.', { fx: [['fx_roda', [0, 1, 2, 3, 4, 5]]], out: RODA_E, l: 'Roda' }],
      ['Na volta: porcas à mão, desça o carro e aperte em sequência cruzada.', { l: 'Aperto em cruz', at: [1.561, 0.36, 0.86] }]
    ] },
  { id: 'dm_pastilhas', grp: 'Mecânica', n: 'Pastilhas de freio dianteiras', part: 'pastilhas', parts: ['pastilhas', 'pincas', 'rodas', 'pneus'], side: 1,
    steps: [
      ['Afrouxe as porcas, levante, apoie em cavalete no chassi e tire a roda.', { fx: [['fx_roda', [0, 1, 2, 3, 4, 5]]], out: RODA_E, l: 'Roda' }],
      ['Solte os 2 pinos-guia da pinça.', { fx: [['fx_pinca', [0, 1]]], cam: [0.2, 0.2, 1], l: 'Pinos-guia' }],
      ['Levante a pinça e pendure com arame, sem forçar o flexível.', { out: [['pincas', [0.03, 0.18, 0.22], 1]], cam: [0.2, 0.2, 1], l: 'Pinça' }],
      ['Tire as pastilhas e recolha o pistão devagar, de olho no reservatório.', { out: [['pastilhas', [0.03, 0.14, 0.30], 1]], cam: [0.2, 0.2, 1], l: 'Pastilhas' }],
      ['Pelo plano da GM, aproveite para trocar a graxa do rolamento da roda. Bombeie o pedal antes de andar.', { l: 'Montagem', at: [1.561, 0.36, 0.70] }]
    ] },
  { id: 'dm_amort_d', grp: 'Mecânica', n: 'Amortecedor dianteiro', part: 'amort_diant', parts: ['amort_diant', 'rodas', 'pneus'], side: 1,
    steps: [
      ['Levante a frente pelo chassi e tire a roda.', { fx: [['fx_roda', [0, 1, 2, 3, 4, 5]]], out: RODA_E, l: 'Roda' }],
      ['Solte a fixação de cima, no suporte do chassi.', { fx: [['fx_amort_d', [0]]], cam: [0.1, 0.5, 1], l: 'Em cima' }],
      ['Solte a de baixo, na bandeja inferior.', { fx: [['fx_amort_d', [1]]], cam: [0.1, -0.3, 1], l: 'Embaixo' }],
      ['Tire o amortecedor por baixo. Com barra de torção, não há mola para comprimir.', { out: [['amort_diant', [0, -0.25, 0.35], 1]], l: 'Amortecedor' }]
    ] },
  { id: 'dm_amort_t', grp: 'Mecânica', n: 'Amortecedor traseiro', part: 'amort_tras', parts: ['amort_tras'], side: 1,
    steps: [
      ['Levante a traseira pelo chassi e apoie o eixo com macaco.', { l: 'Apoio do eixo', at: [-1.561, 0.30, 0.45], cam: [0.3, -0.4, 1] }],
      ['Solte a fixação de baixo, no eixo…', { fx: [['fx_amort_t', [1]]], cam: [0.3, -0.3, 1], l: 'Embaixo' }],
      ['…e a de cima, no chassi.', { fx: [['fx_amort_t', [0]]], cam: [0.3, 0.2, 1], l: 'Em cima' }],
      ['Tire o amortecedor.', { out: [['amort_tras', [0, -0.15, 0.45], 1]], l: 'Amortecedor' }]
    ] },
  { id: 'dm_feixe', grp: 'Mecânica', n: 'Feixe de molas', part: 'feixe_molas', parts: ['feixe_molas', 'grampos_u', 'jumelos'], side: 1,
    steps: [
      ['Levante a traseira pelo chassi, com cavaletes, e apoie o eixo com macaco. Tire a roda.', { fx: [['fx_roda', [12, 13, 14, 15, 16, 17]]], out: RODA_TE, l: 'Roda traseira' }],
      ['Solte as 4 porcas dos grampos em "U" e tire a placa de baixo.', { fx: [['fx_grampos', [0, 1, 2, 3]]], out: [['grampos_u', [0, -0.30, 0.2], 1]], cam: [0.3, -0.6, 1], l: 'Grampos' }],
      ['Solte o olhal da frente e os pinos do jumelo.', { fx: [['fx_feixe', [0, 1, 2]]], cam: [0.2, -0.3, 1], l: 'Olhal e jumelo' }],
      ['Tire o feixe.', { out: [['feixe_molas', [0, -0.35, 0.45], 1], ['jumelos', [0, -0.35, 0.45], 1]], l: 'Feixe' }],
      ['Na volta: buchas novas se rachadas, aperto final dos olhais com o peso do carro e reaperto dos grampos depois de rodar.', { l: 'Montagem', at: [-1.561, 0.44, 0.56] }]
    ] },
  { id: 'dm_cardan', grp: 'Tração', n: 'Cardã traseiro', part: 'cardan_tras', parts: ['cardan_tras', 'mancal_cardan'], side: 0,
    steps: [
      ['Carro em 2HI, ponto morto, rodas calçadas e freio de estacionamento solto só depois de calçar.', { l: 'Segurança', at: [0.30, 0.80, 0], cam: [-0.4, 0.8, 0.5] }],
      ['Marque as flanges e a junta deslizante com tinta: o cardã tem de voltar na mesma fase.', { fx: [['fx_cardan_t', [0, 1, 2, 3]]], keep: 1, cam: [0.3, -1, 0.4], l: 'Marcas' }],
      ['Solte a flange do diferencial (4 parafusos).', { fx: [['fx_cardan_t', [0, 1, 2, 3]]], cam: [0.3, -1, 0.4], l: 'Flange traseira' }],
      ['Solte os 2 parafusos do mancal central.', { fx: [['fx_cardan_t', [4, 5]]], cam: [0, -1, 0.4], l: 'Mancal central' }],
      ['Puxe o cardã para trás, tirando a ponta da transferência; tampe a saída para não pingar óleo.', { out: [['cardan_tras', [-0.30, -0.25, 0]], ['mancal_cardan', [-0.30, -0.25, 0]]], cam: [0.2, -1, 0.5], l: 'Cardã' }]
    ] },
  { id: 'dm_dif_t', grp: 'Tração', n: 'Óleo do diferencial traseiro', part: 'dif_tras', parts: ['dif_tras'], side: 0,
    steps: [
      ['Carro nivelado. Tire primeiro o bujão de abastecimento: se ele não sair, não drene.', { fx: [['fx_dif_t', [0]]], cam: [-0.6, -0.4, 0.5], l: 'Abastecimento' }],
      ['Sem bujão de dreno, o óleo sai soltando a tampa traseira (10 parafusos).', { fx: [['fx_dif_t', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]], cam: [-1, -0.3, 0.3], l: 'Tampa' }],
      ['Vedação nova e 1,60 L de SAE 85W140 GL-5 para tração positiva (Trac-Lock), até a borda do furo.', { l: 'Óleo', at: [-1.70, 0.36, 0] }]
    ] },
  { id: 'dm_transf', grp: 'Tração', n: 'Óleo da transferência', part: 'transferencia', parts: ['transferencia', 'protetor_transf'], side: 0,
    steps: [
      ['Tire o protetor da transferência.', { fx: [['fx_protetor_t', [0, 1, 2, 3]]], out: [['protetor_transf', [0, -0.3, 0]]], cam: [0.2, -1, 0.3], l: 'Protetor' }],
      ['Tire o bujão de abastecimento primeiro e depois o de dreno.', { fx: [['fx_bujoes_transf', [0, 1]]], cam: [0.2, -0.6, 0.8], l: 'Bujões' }],
      ['Complete com 1,18 L de Dexron III até a borda do furo. Troca só se usar o 4x4 sempre; senão, só o nível.', { l: 'Óleo', at: [0.65, 0.48, 0.10] }]
    ] },
  { id: 'dm_intercooler', grp: 'Mecânica', n: 'Intercooler', part: 'intercooler', parts: ['intercooler', 'mang_intercooler'], side: 0,
    steps: [
      ['Abra o capô com o motor frio.', { open: 'hood', l: 'Capô' }],
      ['Solte as abraçadeiras das duas mangueiras.', { fx: [['fx_abracadeiras', [0, 1, 2, 3]]], l: 'Abraçadeiras' }],
      ['Solte os 4 parafusos dos suportes.', { fx: [['fx_intercooler', [0, 1, 2, 3]]], l: 'Suportes' }],
      ['Tire o intercooler por cima. Lave as aletas com água de baixa pressão; óleo por dentro indica o turbo.', { out: [['intercooler', [0.05, 0.55, 0]], ['mang_intercooler', [0.05, 0.40, 0]]], l: 'Intercooler' }]
    ] },
  { id: 'dm_alternador', grp: 'Mecânica', n: 'Alternador', part: 'alternador', parts: ['alternador', 'bomba_vacuo'], side: 0,
    steps: [
      ['Desligue o negativo da bateria.', { open: 'hood', fx: [['fx_bateria', [1]]], l: 'Negativo' }],
      ['Alivie o tensor e tire a correia de acessórios.', { out: [['correia_acess', [0.30, 0.1, 0]]], l: 'Correia' }],
      ['Solte o cabo, o conector e a mangueira de vácuo; depois os 2 parafusos.', { fx: [['fx_alternador', [0, 1]]], l: 'Parafusos' }],
      ['Tire o alternador com a bomba de vácuo.', { out: [['alternador', [0.30, 0.35, -0.25]], ['bomba_vacuo', [0.30, 0.35, -0.25]]], l: 'Alternador' }]
    ] },
  { id: 'dm_radiador', grp: 'Mecânica', n: 'Radiador', part: 'radiador', parts: ['radiador', 'mang_sup', 'mang_inf'], side: 0,
    steps: [
      ['Motor frio. Drene o líquido num recipiente limpo.', { open: 'hood', l: 'Drenar' }],
      ['Solte as abraçadeiras das mangueiras de cima e de baixo.', { fx: [['fx_mangueiras', [0, 1, 2, 3]]], l: 'Abraçadeiras' }],
      ['Solte os suportes do radiador.', { fx: [['fx_radiador', [0, 1, 2, 3]]], l: 'Suportes' }],
      ['Tire o radiador por cima, sem bater na hélice da ventoinha. Na volta: aditivo alaranjado (35% a 50%) e sangria do ar.', { out: [['radiador', [0.1, 0.65, 0]], ['mang_sup', [0.1, 0.5, 0]], ['mang_inf', [0.1, 0.3, 0]]], l: 'Radiador' }]
    ] },
  { id: 'dm_capo', grp: 'Cabine e caçamba', n: 'Capô', part: 'capo', parts: ['capo', 'dobr_capo', 'tomada_capo'], side: 0,
    steps: [
      ['Abra o capô e apoie na vareta.', { open: 'hood', l: 'Capô' }],
      ['Risque o contorno das dobradiças.', { fx: [['fx_capo', [0, 1, 2, 3]]], keep: 1, l: 'Dobradiças' }],
      ['Com ajuda, solte os 4 parafusos.', { fx: [['fx_capo', [0, 1, 2, 3]]], l: 'Parafusos' }],
      ['Tire o capô.', { out: [['capo', [0.2, 0.6, 0]], ['tomada_capo', [0.2, 0.6, 0]]], l: 'Capô' }]
    ] },
  { id: 'dm_grade', grp: 'Cabine e caçamba', n: 'Grade e farol', part: 'grade', parts: ['grade', 'farois'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte as presilhas e parafusos da grade.', { fx: [['fx_grade', [0, 1, 2, 3, 4, 5]]], l: 'Grade' }],
      ['Tire a grade para a frente.', { out: [['grade', [0.45, 0.05, 0]]], l: 'Grade' }],
      ['Os faróis saem com 3 parafusos cada, pela frente.', { fx: [['fx_farol', [0, 1, 2, 3, 4, 5]]], out: [['farois', [0.40, 0.05, 0.05], 0]], l: 'Faróis' }]
    ] },
  { id: 'dm_parachoque_d', grp: 'Cabine e caçamba', n: 'Para-choque dianteiro', part: 'para_choque_d', parts: ['para_choque_d', 'neblina'], side: 0,
    steps: [
      ['Desligue os conectores dos faróis de neblina por baixo.', { l: 'Conectores', at: [2.42, 0.55, 0.55], cam: [0.6, -0.6, 0.5] }],
      ['Solte os parafusos das caixas de roda.', { fx: [['fx_parachoque', [4, 5]]], cam: [0.5, -0.1, 1], l: 'Caixas de roda' }],
      ['Solte os 4 parafusos dos suportes nas longarinas.', { fx: [['fx_parachoque', [0, 1, 2, 3]]], cam: [0.6, -0.8, 0.3], l: 'Suportes' }],
      ['Tire o para-choque para a frente.', { out: [['para_choque_d', [0.55, 0, 0]], ['neblina', [0.55, 0, 0]]], l: 'Para-choque' }]
    ] },
  { id: 'dm_porta', grp: 'Cabine e caçamba', n: 'Porta dianteira', part: 'portas', parts: ['portas'], side: 1,
    steps: [
      ['Abra a porta e apoie embaixo.', { open: 'door', l: 'Porta' }],
      ['Desligue o conector do chicote da porta e solte o limitador.', { fx: [['fx_dobradicas', [4]]], cam: [-0.7, 0.3, 0.7], l: 'Limitador' }],
      ['Marque a posição e solte os 4 parafusos das dobradiças na coluna.', { fx: [['fx_dobradicas', [0, 1, 2, 3]]], cam: [-0.7, 0.3, 0.7], l: 'Dobradiças' }],
      ['Tire a porta.', { out: [['portas', [0.05, 0.1, 0.6], 1]], l: 'Porta' }]
    ] },
  { id: 'dm_porta_tras', grp: 'Cabine e caçamba', n: 'Porta traseira', part: 'portas_tras', parts: ['portas_tras'], side: 1,
    steps: [
      ['Abra a porta traseira e apoie embaixo.', { open: 'rdoor', l: 'Porta traseira' }],
      ['Desligue o conector e solte o limitador.', { fx: [['fx_dobradicas', [14]]], cam: [-0.6, 0.3, 0.75], l: 'Limitador' }],
      ['Solte os 4 parafusos das dobradiças na coluna do meio.', { fx: [['fx_dobradicas', [10, 11, 12, 13]]], cam: [-0.6, 0.3, 0.75], l: 'Dobradiças' }],
      ['Tire a porta.', { out: [['portas_tras', [0, 0.1, 0.6], 1]], l: 'Porta traseira' }]
    ] },
  { id: 'dm_forro_porta', grp: 'Cabine e caçamba', n: 'Forro da porta dianteira', part: 'forros_portas', parts: ['forros_portas'], side: 1,
    steps: [
      ['Abra a porta e tire os parafusos do puxador e o acabamento da maçaneta.', { open: 'door', l: 'Puxador' }],
      ['Solte as presilhas em volta com espátula plástica.', { fx: [['fx_forro_porta', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]]], cam: [0.1, 0.2, -1], l: 'Presilhas' }],
      ['Levante o forro da borda do vidro e desligue os comandos.', { out: [['forros_portas', [0, 0.1, -0.35], 1]], cam: [0.1, 0.2, -1], l: 'Forro' }]
    ] },
  { id: 'dm_tampa', grp: 'Cabine e caçamba', n: 'Tampa da caçamba', part: 'tampa_cacamba', parts: ['tampa_cacamba', 'cabos_tampa', 'fech_tampa'], side: 0,
    steps: [
      ['Abra a tampa.', { open: 'tail', l: 'Tampa' }],
      ['Segurando a tampa, solte os dois cabos nas colunas da caçamba.', { fx: [['fx_cabos_tampa', [0, 1, 2, 3]]], cam: [-1, 0.5, 0.4], l: 'Cabos' }],
      ['Levante a tampa até uns 45° e puxe para tirá-la dos encaixes das dobradiças (manual).', { fx: [['fx_tampa_cac', [0, 1]]], out: [['tampa_cacamba', [-0.4, 0.15, 0]], ['cabos_tampa', [-0.4, 0.15, 0]], ['fech_tampa', [-0.4, 0.15, 0]]], l: 'Tampa' }]
    ] },
  { id: 'dm_lanterna', grp: 'Cabine e caçamba', n: 'Lanterna traseira', part: 'lanternas', parts: ['lanternas'], side: 1,
    steps: [
      ['Abra a tampa da caçamba: os parafusos ficam na coluna.', { open: 'tail', l: 'Tampa' }],
      ['Solte os 2 parafusos.', { fx: [['fx_lanterna', [0, 1]]], cam: [-1, 0.2, 0.3], l: 'Parafusos' }],
      ['Puxe a lanterna e desligue o conector.', { out: [['lanternas', [-0.3, 0, 0.15], 1]], l: 'Lanterna' }]
    ] },
  { id: 'dm_parabrisa', grp: 'Vidros colados', n: 'Para-brisa', part: 'para_brisa', parts: ['para_brisa'], side: 0,
    steps: [
      ['Tire os braços do limpador e a grade do torpedo.', { fx: [['fx_limpador', [0, 1]], ['fx_grade_torpedo', [0, 1, 2, 3, 4, 5]]], open: 'hood', l: 'Torpedo' }],
      ['Corte o cordão de cola em volta, com fio de corte.', { fx: [['fx_cola_parabrisa', 'all']], l: 'Cordão de cola' }],
      ['Tire o vidro com ventosas. Na volta: primer, cordão novo e tempo de cura.', { out: [['para_brisa', [0.3, 0.6, 0]]], l: 'Para-brisa' }]
    ] }
];

/* ===== Explosão: para onde cada peça se afasta (x, y, z, simétrico) ===== */
const EXV = {
  bloco: [0, 0.25, 0], cabecote: [0, 0.65, 0], junta_cab: [0, 0.5, 0], tampa_valv: [0, 0.9, 0], comando: [0, 0.8, 0.15], valvulas: [0, 0.75, -0.15], pistoes: [0, 0.4, 0], bielas: [0, 0.2, 0], virabrequim: [0, -0.15, 0],
  volante_motor: [-0.3, 0, 0], polia_vira: [0.45, 0, 0], engrenagens: [0.35, 0.15, 0], tampa_dist: [0.4, 0.2, 0], carter: [0, -0.4, 0], bomba_oleo: [0.1, -0.45, 0], filtro_oleo: [0, -0.1, -0.45], resfriador_oleo: [0, 0, -0.4],
  vareta: [0, 0.5, -0.3], tampa_oleo: [0, 0.95, 0], respiro: [0, 0.85, 0.2], correia_acess: [0.55, 0, 0], tensor_acess: [0.55, 0.1, -0.1], coxim_dir: [0, -0.1, -0.4], coxim_esq: [0, -0.1, 0.4], bomba_vacuo: [0.45, 0.35, -0.35],
  sens_ckp: [-0.1, 0, 0.4], sens_cmp: [0.4, 0.3, 0.2], sens_ect: [0.3, 0.6, 0], sens_oleo: [0, -0.1, 0.4],
  tomada_ar: [0.35, 0.3, -0.35], caixa_filtro: [0.3, 0.4, -0.3], filtro_ar: [0.3, 0.6, -0.3], duto_ar: [0.15, 0.45, -0.3], turbo: [0, 0.35, -0.5], intercooler: [0, 1.0, 0], mang_intercooler: [0, 0.75, 0], coletor_adm: [0, 0.35, 0.45], sens_map: [0, 0.5, 0.5],
  tanque: [0, -0.45, 0.25], bomba_baixa: [0, -0.2, 0.35], boia: [0, -0.3, 0.45], bocal: [0, 0.15, 0.4], linhas_comb: [0, -0.2, 0.2], filtro_comb: [0, 0.45, 0.3], sens_agua: [0, 0.2, 0.4], bomba_alta: [0.2, 0.25, 0.45],
  rail: [0, 0.85, 0.25], tubos_alta: [0, 0.7, 0.25], bicos: [0, 0.95, 0.1], retorno: [0, 0.7, 0.35], sens_rail: [0.2, 0.85, 0.3], regulador: [0.25, 0.4, 0.5], velas_aquec: [0, 0.7, -0.25], ecu: [0, 0.4, 0.4], pedal_acel: [-0.15, 0.2, 0],
  radiador: [0.55, 0.3, 0], vaso: [0.2, 0.6, -0.35], ventoinha: [0.35, 0.3, 0], vent_aux: [0.8, 0.3, 0], bomba_agua: [0.45, 0.3, 0], termostato: [0.35, 0.55, 0], mang_sup: [0.4, 0.6, 0], mang_inf: [0.4, -0.1, 0], mang_aquec: [-0.15, 0.4, 0.25], rad_aquec: [0.05, 0.3, 0.25],
  coletor_esc: [0, 0.3, -0.45], tubo_diant: [0, -0.25, -0.3], silencioso: [0, -0.35, -0.2], tubo_tras: [-0.2, -0.3, -0.2], coxins_esc: [0, -0.2, -0.2], protetor: [0, 0.55, -0.45],
  bateria: [0.2, 0.7, 0.3], cabos_bat: [0.1, 0.5, 0.2], alternador: [0.4, 0.3, -0.35], motor_partida: [0, -0.15, 0.45], caixa_fus_motor: [0.1, 0.65, 0.35], caixa_fus_painel: [0, 0.3, 0.45], chicote: [0, 1.5, 0],
  farois: [0.6, 0.1, 0.25, 1], piscas: [0.6, 0.05, 0.4, 1], neblina: [0.7, -0.05, 0.2, 1], lanternas: [-0.6, 0.05, 0.3, 1], luz_freio: [-0.3, 0.6, 0], luz_placa: [-0.9, 0.1, 0], buzina: [0.8, -0.05, 0.2], limpador: [0.1, 0.5, 0], lavador: [0.3, 0.5, 0.35], ign_chave: [-0.2, 0.25, 0.1], comutadores: [-0.2, 0.3, 0.1],
  embreagem: [-0.25, -0.25, 0], rol_emb: [-0.2, -0.35, 0], cil_emb_mestre: [0.1, 0.45, 0.3], reserv_emb: [0.1, 0.65, 0.35], tubo_emb: [0, 0.3, 0.3], pedal_emb: [-0.15, 0.2, 0], cambio: [-0.35, -0.4, 0], alavanca: [0, 0.6, 0], coxim_cambio: [0, -0.4, 0],
  transferencia: [-0.4, -0.5, 0], motor_transf: [-0.3, -0.35, 0.45], botoes_4x4: [-0.3, 0.45, 0], cardan_tras: [0, -0.45, 0], mancal_cardan: [0, -0.6, 0], cruzetas: [0, -0.55, 0.2], cardan_diant: [0, -0.4, 0.3], dif_diant: [0.1, -0.45, 0.25],
  atuador_eixo: [0, -0.3, -0.4], semieixos_diant: [0, -0.2, 0.35, 1], coifas: [0, -0.15, 0.45, 1], cubos_diant: [0, 0, 0.35, 1], eixo_tras: [0, -0.45, 0], dif_tras: [-0.45, -0.3, 0], semieixos_tras: [0, -0.1, 0.55, 1],
  pedal_freio: [-0.15, 0.2, 0], servo: [-0.1, 0.45, 0.3], cil_mestre: [0.25, 0.45, 0.3], reserv_freio: [0.25, 0.7, 0.3], abs: [0.1, 0.35, 0.45], sens_roda: [0, 0.05, 0.55, 1], tubos_freio: [0, -0.15, 0],
  pincas: [0, 0.05, 0.55, 1], pastilhas: [0, 0.05, 0.48, 1], discos: [0, 0, 0.42, 1], tambores: [0, 0, 0.45, 1], sapatas: [0, 0, 0.35, 1], cil_roda: [0, 0.15, 0.38, 1], freio_estac: [-0.2, 0.2, 0.2], cabos_freio: [0, -0.25, 0.2], mang_vacuo: [0.2, 0.5, 0],
  bandeja_inf: [0, -0.25, 0.25, 1], bandeja_sup: [0, 0.3, 0.25, 1], pivos: [0, 0, 0.35, 1], barras_torcao: [0, -0.3, 0.2, 1], travessa_torcao: [0, -0.4, 0], amort_diant: [0, 0.15, 0.4, 1], barra_estab: [0.25, -0.25, 0], mangas: [0, 0, 0.3, 1],
  feixe_molas: [0, -0.3, 0.3, 1], jumelos: [-0.2, -0.3, 0.3, 1], grampos_u: [0, -0.35, 0.2, 1], amort_tras: [0, 0.1, 0.4, 1], pneus: [0, 0, 0.85, 1], rodas: [0, 0, 0.75, 1], estepe: [0, -0.45, 0], guincho_estepe: [-0.2, -0.3, 0], macaco: [0, 0.35, -0.3],
  volante_dir: [-0.3, 0.3, 0], coluna: [-0.1, 0.25, 0], caixa_dir: [0.15, -0.1, 0.4], braco_pitman: [0.15, -0.3, 0.35], barra_central: [0.2, -0.35, 0], braco_inter: [0.15, -0.3, -0.35], barras_dir: [0, -0.25, 0.25, 1], bomba_dir: [0.4, 0.3, -0.3], reserv_dir: [0.1, 0.6, -0.35], mang_dir: [0.2, 0.3, -0.1],
  compressor: [0.45, -0.1, 0.35], condensador: [0.75, 0.3, 0], filtro_secador: [0.5, 0.4, 0.4], pressostato: [0.45, 0.5, 0.35], tubos_ac: [0.25, 0.4, 0.3], valv_exp: [0.1, 0.5, -0.3], evaporador: [0.1, 0.45, -0.25], vent_interno: [0.1, 0.35, -0.2], caixa_ar: [0.1, 0.35, 0], comandos_clima: [-0.35, 0.5, 0],
  painel: [-0.1, 0.55, 0], quadro: [-0.25, 0.7, 0], radio: [-0.35, 0.55, 0], airbag_mot: [-0.45, 0.45, 0], airbag_pass: [-0.15, 0.85, 0], cabo_espiral: [-0.35, 0.35, 0], srs: [0, 0.35, 0], console: [0, 0.5, 0], bancos_diant: [0, 0.35, 0.45, 1], banco_tras: [-0.2, 0.4, 0], cintos: [0, 0.3, 0.6, 1],
  forros_portas: [0, 0.1, 0.55, 1], forros_portas_tras: [0, 0.1, 0.55, 1], retrovisor_int: [0, 0.8, 0], alto_falantes: [0, 0.1, 0.65, 1],
  cabine: [0, 0.55, 0], corta_fogo: [0.3, 0.35, 0], teto: [0, 1.0, 0], colunas: [0.1, 0.55, 0.55, 1], capo: [0.25, 0.85, 0], tomada_capo: [0.25, 1.05, 0], dobr_capo: [0.2, 0.7, 0.35, 1], fech_capo: [0.55, 0.45, 0], grade: [0.9, 0.05, 0], para_choque_d: [0.95, -0.1, 0],
  paralamas: [0.15, 0.1, 0.8, 1], molduras: [0, 0.05, 0.95, 1], portas: [0.1, 0.05, 1.0, 1], portas_tras: [-0.1, 0.05, 1.0, 1], dobradicas: [0, 0, 0.85, 1], fech_portas: [-0.1, 0, 0.9, 1], maq_vidro: [0, 0.1, 0.8, 1], maq_vidro_tras: [0, 0.1, 0.8, 1],
  vidros_portas: [0.05, 0.35, 1.05, 1], vidros_portas_tras: [-0.05, 0.35, 1.05, 1], para_brisa: [0.35, 0.65, 0], vidro_tras: [-0.45, 0.45, 0], retrovisores: [0.1, 0.2, 1.2, 1], grade_torpedo: [0.3, 0.75, 0],
  cacamba: [-0.6, 0.55, 0], tampa_cacamba: [-0.85, 0.2, 0], dobr_tampa: [-0.8, 0, 0.3, 1], cabos_tampa: [-0.75, 0.35, 0.4, 1], fech_tampa: [-0.95, 0.3, 0], protetor_cacamba: [-0.4, 0.95, 0], para_choque_t: [-0.95, -0.1, 0], ganchos: [0.8, -0.2, 0.15, 1],
  rack_teto: [0, 1.25, 0.25, 1], estribos: [0, -0.15, 0.75, 1], caixas_roda: [0, 0, 0.5, 1], borrachas: [0, 0.12, 0.5, 1],
  longarinas: [0, -0.7, 0.2, 1], travessas: [0, -0.8, 0], coxins_cab: [0, -0.15, 0.45, 1], travessa_motor: [0.1, -0.7, 0], protetor_carter: [0, -0.9, 0], protetor_transf: [0, -0.95, 0]
};

return { SYS, PARTS, FIX, FXKIND, SYMPTOMS, FLOWS, MAINT, SPECS, GUIDES, EXV };
  }
});
