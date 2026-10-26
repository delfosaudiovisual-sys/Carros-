/* ===== Nissan Tiida 1.8 S Flex 2010/2011 (C11), hatch 5 portas, manual de 6 marchas, motor MR18DE ===== */
(window.CARS = window.CARS || []).push({
  id: 'tiida-c11', order: 3, storeKey: 'tiida-c11', codePrefix: 'TDA',
  badge: '1.8', name: 'Nissan Tiida', short: 'Tiida', title: 'Nissan Tiida S', sub: '1.8 16V flex 2010/2011, manual de 6 marchas, hatch, motor MR18DE',
  kmDefault: 0, size: [4.295, 1.695], wheelR: 0.311,
  paint: { color: 0x7d1820, roughness: 0.32, metalness: 0.45, clearcoat: 1, clearcoatRoughness: 0.12 },
  oemLabel: 'Código Nissan', oemHint: 'Código Nissan: confirme pelo número do chassi (VIN) no balcão de peças; a Nissan muda códigos conforme o mercado e o ano.',
  open: { hood: 'capo', tail: 'tampa_tras', door: 'portas', rdoor: 'portas_tras' },
  xrayExtra: ['farois', 'lanternas', 'piscas_lat', 'luz_freio', 'luz_placa', 'bocal', 'grade'],
  boxIds: ['monobloco', 'pneus', 'para_choque_d', 'para_choque_t', 'teto', 'retrovisores', 'laterais'],
  welcome: ['corrente', 'cvtc', 'res_pf', 'eps', 'abs', 'eixo_tras'],
  profile: { top: [[-2.065, .615], [-2.035, .67], [-2.0, .88], [-1.96, 1.045], [-1.86, 1.30], [-1.74, 1.46], [-1.6, 1.505], [-1.0, 1.53], [-0.4, 1.535], [0.22, 1.49], [0.45, 1.37], [0.70, 1.20], [0.93, 1.065], [1.5, .955], [2.0, .845], [2.20, .72], [2.23, .64]],
    rearLow: 0.36, frontLow: 0.30, floor: 0.20, wheels: [1.30, -1.30], arch: 0.385, wheelR: 0.311, wheelY: 0.305 },
  maintNote: 'Intervalos de referência para o MR18DE flex em uso brasileiro. O plano da Nissan pode trazer prazos diferentes; itens marcados como recomendação de oficina não são de fábrica. O manual do seu carro manda.',
  about: '<p>A carroceria é um hatch genérico de cinco portas com as medidas do Tiida (4,295 × 1,695 × 1,535 m, entre-eixos de 2,60 m), em vermelho, com tampa traseira sustentada por amortecedores a gás, vidros laterais fixos atrás e rodas de aço com calotas. Não reproduz o desenho externo da marca.</p><p>A mecânica segue o 1.8 16V flex (família MR18DE): dois comandos com variador de fase na admissão e corrente de comando, acelerador eletrônico, sensor de massa de ar, partida a frio com reservatório de gasolina, câmbio manual de 6 marchas com embreagem hidráulica, direção com assistência elétrica na coluna, freios com ABS e EBD (discos na frente, tambores atrás), McPherson na frente e eixo de torção atrás. Ar-condicionado, airbags frontais, vidros e travas elétricos foram considerados presentes; confira o seu.</p><p>Posições marcadas como aproximadas (central, ABS, reservatórios) e as quantidades de fixadores da lataria são as típicas; a geometria é simplificada. Dados técnicos: fichas da versão (potência, torque, medidas, pneus), catálogos de peças do C11 e referências de oficina do MR18DE.</p>',

  data() {
const SYS = {
  motor: { n: 'Motor', c: '#D0602A', d: 'O MR18DE 1.8 16V: bloco de alumínio, dois comandos com variador de fase, corrente de comando e três apoios.' },
  ar:    { n: 'Ar e injeção', c: '#E3A21A', d: 'Do filtro de ar até os bicos: sensor de massa de ar, borboleta eletrônica e injeção sequencial.' },
  comb:  { n: 'Combustível', c: '#3F9D4A', d: 'Tanque, módulo da bomba com filtro e regulador, cânister e a partida a frio do flex.' },
  ign:   { n: 'Ignição e sensores', c: '#7A5AE0', d: 'Central do motor, quatro bobinas, velas de irídio e os sensores que a central lê.' },
  arref: { n: 'Arrefecimento', c: '#1F8FC0', d: 'Bomba d’água na correia, válvula termostática, radiador com tampa de pressão e dois eletroventiladores.' },
  clima: { n: 'Ar-condicionado e ventilação', c: '#4F7FE0', d: 'Compressor, condensador com filtro secador, válvula de expansão, evaporador, filtro de cabine e ventilador.' },
  esc:   { n: 'Escapamento', c: '#8C735F', d: 'Coletor atrás do motor, catalisador logo embaixo, duas sondas, silenciosos e ponteira.' },
  ele:   { n: 'Elétrica', c: '#D6B000', d: 'Bateria, carga, partida, caixas de fusíveis, módulo da carroceria, luzes e limpadores.' },
  trans: { n: 'Transmissão', c: '#B0412A', d: 'Embreagem hidráulica, câmbio manual de 6 marchas com cabos, diferencial e semieixos.' },
  freio: { n: 'Freios', c: '#D2334A', d: 'Servo-freio, cilindro-mestre, ABS com sensores nas rodas, discos ventilados na frente e tambores atrás.' },
  susp:  { n: 'Suspensão e rodas', c: '#9B3FA8', d: 'McPherson na frente; atrás, eixo de torção com molas e amortecedores separados.' },
  dir:   { n: 'Direção', c: '#1FA394', d: 'Pinhão e cremalheira com assistência elétrica na coluna: sem bomba, sem óleo.' },
  carro: { n: 'Carroceria', c: '#8FA6C4', d: 'Cada peça da lataria, como ela é presa e como sai: parafusada, soldada, colada ou encaixada.' },
  int:   { n: 'Interior e segurança', c: '#A8845A', d: 'Painel, instrumentos, airbags, bancos, cintos e acabamentos.' }
};
const PARTS = {};
function P(id, n, s, w, f, m, r) { PARTS[id] = { id, n, s, w, f, m, r: r ? r.split(' ') : [] }; }
function E(id, ft, e) { PARTS[id].ft = ft; PARTS[id].e = e; }
window.CAR_PARTS['tiida-c11'](P, E);

/* ===== Fixadores ===== */
const FIX = {};
function F(id, n, parent, q, spec, torque, note) { FIX[id] = { id, n, p: parent, q, spec, t: torque, note }; }
F('fx_roda', 'Porcas de roda', 'rodas', 16, '4 por roda, furação 4×100, rosca M12×1,25', '≈ 113 N·m', 'Aperte em cruz com torquímetro e reaperte depois de uns 50 km. Pistola de impacto no máximo empena disco e estica prisioneiro.');
F('fx_cubo', 'Porcas dos cubos dianteiros', 'mangas', 2, 'Porca central do semieixo, com trava', 'muito alto (confirme no manual)', 'Porca e trava novas. Aperto final com o carro no chão.');
F('fx_cabecote', 'Parafusos do cabeçote', 'cabecote', 10, 'Aperto em etapas: torque e ângulo', 'em etapas com ângulo (valores no manual Nissan)', 'Ordem em espiral, de dentro para fora; afrouxe na ordem inversa. Rosca e cabeça untadas com óleo de motor.');
F('fx_bielas', 'Parafusos das capas de biela', 'bielas', 8, '2 por biela', 'torque + ângulo (manual)', 'Cada capa volta para a mesma biela, na mesma posição: marque antes.');
F('fx_mancais', 'Parafusos da ponte de mancais', 'virabrequim', 10, 'Seguram o virabrequim', 'em etapas (manual)', 'Aperto do centro para as pontas.');
F('fx_carter', 'Parafusos do cárter', 'carter', 16, 'Pequenos, com cola de vedação, nas duas partes do cárter', '≈ 9 N·m', 'Faces limpas e cordão de cola contínuo; espere a cura antes de abastecer.');
F('fx_bujao', 'Bujão do cárter', 'carter', 1, 'Com arruela de vedação', '≈ 34 N·m', 'Arruela nova a cada troca.');
F('fx_velas', 'Rosca das velas', 'velas', 4, 'Rosca de 12 mm no alumínio, vela de irídio', '≈ 20 N·m', 'Rosqueie à mão até encostar; motor frio. Não limpe o eletrodo de irídio com escova.');
F('fx_bobinas', 'Parafusos das bobinas', 'bobinas', 4, '1 por bobina, na tampa de válvulas', 'leve (≈ 5 N·m)', 'A rosca é na tampa plástica: não force.');
F('fx_tampa_valv', 'Parafusos da tampa de válvulas', 'tampa_valv', 10, 'Com arruelas de borracha', 'baixo (≈ 10 N·m), em espiral', 'Aperto demais deforma a junta e o vazamento volta.');
F('fx_coletor_esc', 'Porcas do coletor de escape', 'coletor_esc', 8, 'Prisioneiros no cabeçote', 'médio (manual)', 'Junta e porcas novas, aperto em cruz do centro para fora.');
F('fx_coletor_adm', 'Parafusos do coletor de admissão', 'coletor_adm', 6, 'Coletor plástico', 'baixo, em cruz', 'Juntas novas; coletor plástico trinca com aperto demais.');
F('fx_galeria', 'Parafusos da galeria', 'galeria', 2, 'Seguram galeria e bicos', 'leve', 'Anéis dos bicos novos, untados com óleo de motor limpo.');
F('fx_tbi', 'Parafusos do corpo de borboleta', 'tbi', 4, '—', 'leve, em cruz', 'Junta nova. Depois de soltar ou limpar, faça o reaprendizado da borboleta.');
F('fx_polia_vira', 'Parafuso da polia do virabrequim', 'polia_vira', 1, 'Parafuso central', 'muito alto (manual)', 'Segure a polia com o suporte próprio.');
F('fx_tampa_corr', 'Parafusos da tampa da corrente', 'tampa_corr', 18, 'Em volta da tampa, com cola de vedação', 'médio, na ordem do manual', 'Faces limpas e cordão de cola contínuo; retentor novo da ponta do virabrequim.');
F('fx_alternador', 'Parafusos do alternador', 'alternador', 2, 'Suporte e articulação', 'médio', 'Desligue o negativo da bateria antes.');
F('fx_partida', 'Parafusos do motor de partida', 'motor_partida', 2, 'Na carcaça do câmbio', 'médio', 'E a porca do cabo positivo no solenoide.');
F('fx_coxins', 'Fixações dos coxins do motor', 'coxim_dir', 7, 'Coxim direito, do câmbio e tirante traseiro', 'alto (manual)', 'Troque com o motor apoiado por baixo e aperte com ele em repouso.');
F('fx_cambio', 'Parafusos câmbio–motor', 'cambio', 7, 'Na capa da embreagem', 'alto', 'Removidos na troca de embreagem.');
F('fx_bujoes_cambio', 'Bujões do câmbio', 'cambio', 2, 'Dreno e abastecimento', 'dreno ≈ 34 N·m; abastecimento ≈ 53 N·m', 'Arruelas novas. O nível certo é até a borda do furo de abastecimento.');
F('fx_plato', 'Parafusos do platô', 'embreagem', 6, 'Em volta do platô', 'em cruz, aos poucos', 'Centralize o disco com ferramenta antes do aperto final.');
F('fx_volante', 'Parafusos do volante do motor', 'volante_motor', 6, 'Com trava-química', 'alto (manual)', 'Parafusos novos.');
F('fx_compressor', 'Parafusos do compressor do ar', 'compressor', 3, 'No suporte do bloco', 'médio', 'Recolha o gás com máquina antes de abrir o circuito.');
F('fx_abs', 'Fixações da unidade do ABS', 'abs', 3, 'Porcas no suporte com coxins', 'médio', 'As conexões dos tubos levam chave de linha; tampe cada furo na hora para não entrar ar nem sujeira.');
F('fx_sens_roda', 'Parafusos dos sensores das rodas', 'sens_roda', 4, '1 por sensor', 'leve', 'Limpe o furo e o anel dentado antes de montar.');
F('fx_pinca', 'Parafusos das pinças', 'pincas', 8, 'Pinos-guia e suporte, por lado', 'guias médio; suporte alto (manual)', 'Limpe e lubrifique os pinos-guia com graxa própria.');
F('fx_amort_d', 'Fixações dos amortecedores dianteiros', 'amort_diant', 10, '3 porcas no topo e 2 parafusos na manga, por lado', 'topo médio; manga alto (manual)', 'Desmonte só com compressor de molas.');
F('fx_bandeja', 'Fixações das bandejas', 'bandejas', 6, 'Buchas no subchassi e pivô', 'alto', 'Aperte as buchas com o peso do carro sobre as rodas.');
F('fx_subchassi', 'Parafusos do subchassi', 'subchassi', 4, 'Na carroceria', 'muito alto', 'Nunca solte sem apoiar o motor.');
F('fx_eixo_t', 'Parafusos das buchas do eixo traseiro', 'eixo_tras', 4, '2 por lado, nos suportes da carroceria', 'alto', 'Aperto final com o peso do carro sobre as rodas, senão as buchas trabalham torcidas.');
F('fx_amort_t', 'Fixações dos amortecedores traseiros', 'amort_tras', 6, '1 embaixo, no eixo, e 2 em cima, por lado', 'alto', 'As fixações de cima ficam dentro do porta-malas, sob o acabamento.');
F('fx_bateria', 'Grampo e terminais da bateria', 'bateria', 3, 'Porcas de 10 mm', 'firme, sem esmagar', 'Solte o negativo primeiro e ligue por último.');
F('fx_escape', 'Braçadeiras e parafusos do escapamento', 'tubo_diant', 6, 'Flanges com molas, junta e luvas', 'médio', 'Porcas autotravantes e juntas novas.');
F('fx_tanque', 'Fixação do tanque', 'tanque', 4, 'Cintas e parafusos', 'médio', 'Tanque vazio e bateria desligada.');
F('fx_sonda', 'Rosca das sondas lambda', 'sonda', 2, 'Dianteira e traseira, rosca M18', 'médio (≈ 45 N·m)', 'Pasta antitravamento só na rosca; sonda nova já vem com ela.');
F('fx_sens_ckp', 'Parafuso do sensor de rotação', 'sens_ckp', 1, '—', 'leve', 'Anel de vedação bom.');
F('fx_bomba_agua', 'Parafusos da bomba d’água', 'bomba_agua', 4, 'Com anel de vedação', 'leve', 'Tire a correia de acessórios antes; anel novo.');
F('fx_termostato', 'Parafusos da carcaça da válvula termostática', 'termostato', 2, 'Com anel de borracha', 'leve', 'Sangre o sistema depois de completar.');
F('fx_volante_dir', 'Porca do volante', 'volante_dir', 1, 'Porca central', 'médio (manual)', 'Rodas retas e cabo espiral centrado.');
F('fx_airbag', 'Parafusos do módulo do airbag', 'airbag_mot', 2, 'Torx, por trás do volante', '≈ 10 N·m', 'Bateria desligada há pelo menos 3 minutos. Guarde o módulo com a bolsa para cima.');
F('fx_coluna', 'Fixações da coluna de direção', 'coluna', 4, 'Porcas sob o painel e parafuso da junta no pinhão', 'médio; junta alto', 'Marque a junta antes de soltar. A coluna e o motor da direção elétrica saem juntos.');
F('fx_estepe', 'Parafuso do estepe', 'estepe', 1, 'No centro da roda', 'à mão', 'Lubrifique a rosca.');
F('fx_mangueiras', 'Abraçadeiras das mangueiras', 'mang_sup', 10, 'Água, ar e vácuo', 'firme', 'Troque as oxidadas; abraçadeira frouxa é vazamento certo.');
F('fx_filtro_oleo', 'Rosca do filtro de óleo', 'filtro_oleo', 1, 'Rosca central', 'à mão + ⅔ a ¾ de volta', 'Unte o anel de borracha com óleo novo.');
F('fx_ecu', 'Fixação da central', 'ecu', 2, 'Suporte', 'leve', 'Conectores secos e travados.');
F('fx_limpador', 'Porcas dos braços dos limpadores', 'limpador', 3, '2 na frente e 1 atrás', 'médio', 'Marque a posição de repouso antes de tirar.');
F('fx_caixa_dir', 'Fixações da caixa de direção', 'caixa_dir', 6, 'Braçadeiras no subchassi e porcas dos terminais', 'alto', 'Alinhamento obrigatório depois.');
F('fx_bancos', 'Parafusos dos bancos', 'bancos_diant', 8, '4 por banco', 'alto', 'Item de segurança.');
F('fx_cintos', 'Ancoragens dos cintos', 'cintos', 6, 'Parafusos de ancoragem', 'alto', 'Item de segurança: nada de improviso.');
F('fx_paralama', 'Parafusos dos para-lamas', 'paralamas', 14, 'Cerca de 7 por lado: 4 na borda de cima (sob o capô), 1 junto ao farol, 1 embaixo na soleira e 1 atrás, na coluna da porta', 'leve (chapa fina)', 'Para chegar a todos: roda, forro da caixa de roda, para-choque e farol fora.');
F('fx_parachoque', 'Parafusos e presilhas do para-choque dianteiro', 'para_choque_d', 11, 'Em cima (na travessa, sob o capô), nas caixas de roda e embaixo', 'leve', 'Solte todos e puxe as pontas para fora das guias laterais.');
F('fx_guias_pcd', 'Guias laterais do para-choque dianteiro', 'para_choque_d', 2, 'Suportes plásticos sob os faróis', 'encaixe deslizante', 'Guia quebrada deixa a ponta do para-choque solta e desalinhada.');
F('fx_parachoque_t', 'Parafusos e presilhas do para-choque traseiro', 'para_choque_t', 10, 'Em cima (com a tampa aberta), nas caixas de roda e embaixo', 'leve', 'Os de cima aparecem com a tampa traseira aberta.');
F('fx_guias_pct', 'Guias laterais do para-choque traseiro', 'para_choque_t', 2, 'Suportes plásticos sob as lanternas', 'encaixe deslizante', 'Puxe a ponta para fora com cuidado para não quebrar a guia.');
F('fx_forros', 'Presilhas dos forros das caixas de roda', 'caixas_roda', 12, 'Na borda do para-lama', 'encaixe por pressão', 'Presilhas plásticas quebram fácil; tenha reposição à mão.');
F('fx_capo', 'Parafusos das dobradiças do capô', 'dobr_capo', 8, '2 no capô e 2 na carroceria, por dobradiça', 'médio', 'Risque a posição antes de soltar: é o que acerta as frestas do capô.');
F('fx_fech_capo', 'Parafusos da fechadura do capô', 'fech_capo', 2, 'Na travessa do painel frontal', 'médio', 'A fechadura tem folga de regulagem para alinhar com a lingueta.');
F('fx_dobradicas', 'Parafusos das dobradiças e limitadores', 'dobradicas', 36, 'Por porta: 4 na coluna, 4 na porta e 1 no limitador', 'alto', 'É na folga desses parafusos que se regula a fresta e o fechamento. Apoie a porta antes de soltar.');
F('fx_fech_portas', 'Parafusos das fechaduras e dos batentes', 'fech_portas', 20, 'Por porta: 3 na fechadura (borda da porta) e 2 no batente (coluna)', 'médio', 'O batente se move um pouco para regular o fechamento; marque antes de soltar.');
F('fx_retrovisor', 'Fixação dos retrovisores', 'retrovisores', 6, '3 porcas por espelho, por dentro da porta', 'leve', 'Segure o espelho por fora antes de soltar a última.');
F('fx_vidro_porta', 'Parafusos do vidro na máquina (portas dianteiras)', 'vidros_portas', 4, '2 por porta', 'leve', 'Com o forro tirado, posicione o vidro até os parafusos aparecerem nos furos do painel.');
F('fx_vidro_porta_t', 'Parafusos do vidro na máquina (portas traseiras)', 'vidros_portas_tras', 4, '2 por porta', 'leve', 'Com o forro tirado, posicione o vidro até os parafusos aparecerem.');
F('fx_maq_vidro', 'Fixação das máquinas de vidro (dianteiras)', 'maq_vidro', 8, '4 por porta, no painel interno', 'leve', 'Desligue o conector do motor antes.');
F('fx_maq_vidro_t', 'Fixação das máquinas de vidro (traseiras)', 'maq_vidro_tras', 6, '3 por porta, no painel interno', 'leve', 'Desligue o conector do motor antes.');
F('fx_forro_porta', 'Presilhas dos forros das portas dianteiras', 'forros_portas', 16, 'Em volta do forro, mais parafusos no puxador', 'encaixe por pressão', 'Solte com espátula plástica rente às presilhas para não rasgar o forro.');
F('fx_forro_porta_t', 'Presilhas dos forros das portas traseiras', 'forros_portas_tras', 12, 'Em volta do forro, mais o parafuso do puxador', 'encaixe por pressão', 'Solte com espátula plástica rente às presilhas.');
F('fx_tampa', 'Parafusos das dobradiças da tampa traseira', 'dobr_tampa', 8, 'Porcas no teto (sob o forro) e parafusos na tampa', 'médio', 'Apoie a tampa e tire os amortecedores antes de soltar as dobradiças.');
F('fx_amort_tampa', 'Pinos dos amortecedores da tampa', 'amort_tampa', 4, 'Pinos esféricos com trava de mola', 'trava de mola', 'Levante a trava com uma chave de fenda pequena e puxe o amortecedor.');
F('fx_fech_tampa', 'Parafusos da fechadura e do batente da tampa', 'fech_tampa', 4, '2 na fechadura (na tampa) e 2 no batente (no painel traseiro)', 'médio', 'Regule o batente se a tampa bater ou não fechar de primeira.');
F('fx_farol', 'Parafusos dos faróis', 'farois', 6, '3 por farol', 'leve', 'Regule o facho depois de recolocar.');
F('fx_lanterna', 'Fixações das lanternas', 'lanternas', 6, '3 por lanterna: porcas por dentro e um pino de encaixe', 'leve (plástico)', 'Vedação nova evita água no porta-malas.');
F('fx_grade', 'Presilhas da grade', 'grade', 4, 'Presilhas plásticas', 'encaixe por pressão', 'Solte as travas por trás, com o capô aberto.');
F('fx_grade_torpedo', 'Presilhas da grade do torpedo', 'grade_torpedo', 6, 'Presilhas e encaixe sob a borda do para-brisa', 'encaixe por pressão', 'Tire os braços do limpador antes.');
F('fx_travessa', 'Parafusos da travessa do painel frontal', 'travessa_frontal', 4, 'Nas pontas, junto aos faróis', 'médio', 'Solte só com radiador, condensador e faróis apoiados.');
F('fx_viga', 'Parafusos da viga de impacto dianteira', 'viga_dianteira', 4, 'Nas pontas das longarinas', 'alto', 'Depois de batida, confira a viga e as pontas das longarinas.');
F('fx_viga_t', 'Parafusos da viga de impacto traseira', 'viga_traseira', 4, 'No painel traseiro', 'alto', 'Depois de batida, confira o painel por dentro do porta-malas.');
F('fx_bocal', 'Parafusos do bocal de abastecimento', 'bocal', 2, 'Na caixa da portinhola', 'leve', 'Com o tanque vazio; o bocal também é preso por abraçadeira na mangueira do tanque.');
F('fx_solda_teto', 'Pontos de solda do teto', 'teto', 0, 'Nas bordas: sobre as portas, na frente e na abertura da tampa', 'não se desmonta', 'Troca de teto é serviço de funilaria: os pontos são furados e a peça nova é soldada e selada.');
F('fx_solda_laterais', 'Pontos de solda das laterais', 'laterais', 0, 'Na coluna central, na soleira, na caixa de roda, no painel traseiro e junto ao teto', 'não se desmonta', 'Fissura na massa de vedação das emendas deixa entrar água e começa a ferrugem.');
F('fx_solda_soleiras', 'Pontos de solda das soleiras', 'soleiras', 0, 'Na aba de baixo e na borda das aberturas das portas', 'não se desmonta', 'A aba de baixo é onde o macaco apoia, nos pontos marcados.');
F('fx_solda_colunas', 'Pontos de solda das colunas', 'colunas', 0, 'Na borda das portas e na moldura do para-brisa', 'não se desmonta', 'Coluna amassada compromete a estrutura: reparo só em funilaria de confiança.');
F('fx_solda_painel_tras', 'Pontos de solda do painel traseiro', 'painel_tras', 0, 'Nas laterais e no assoalho do porta-malas', 'não se desmonta', 'Depois de batida na traseira, confira por dentro do porta-malas.');
F('fx_cola_parabrisa', 'Cola do para-brisa', 'para_brisa', '1 cordão', 'Cordão de poliuretano em volta do vidro', 'cura em algumas horas', 'Depois da troca, espere a cura antes de rodar ou bater as portas com força.');
F('fx_cola_vidro_tras', 'Cola do vidro traseiro', 'vidro_tras', '1 cordão', 'Cordão de poliuretano na tampa', 'cura em algumas horas', 'Água pingando no porta-malas pode vir de falha nesse cordão.');
F('fx_cola_laterais', 'Cola dos vidros laterais', 'vidros_laterais', '2 cordões', 'Cordão de poliuretano na lateral', 'cura em algumas horas', 'Vidro fixo chiando ou deixando entrar água indica cola descolada.');

const FXKIND = {
  parafuso: ['Parafusos e porcas', 'Desmontam com ferramenta; o aperto certo importa.'],
  presilha: ['Presilhas', 'Encaixes plásticos de pressão; quebram com facilidade.'],
  guia: ['Guias de encaixe', 'Suportes onde as pontas das peças deslizam e se apoiam.'],
  pino: ['Pinos e rótulas', 'Articulações com trava de mola.'],
  solda: ['Pontos de solda', 'Chapas unidas de vez: fazem parte da estrutura.'],
  cola: ['Colas', 'Vidros fixos presos com cordão de poliuretano.']
};
function K(k, ...ids) { ids.forEach(id => { FIX[id].k = k; }); }
K('presilha', 'fx_forros', 'fx_forro_porta', 'fx_forro_porta_t', 'fx_grade', 'fx_grade_torpedo');
K('guia', 'fx_guias_pcd', 'fx_guias_pct');
K('pino', 'fx_amort_tampa');
K('solda', 'fx_solda_teto', 'fx_solda_laterais', 'fx_solda_soleiras', 'fx_solda_colunas', 'fx_solda_painel_tras');
K('cola', 'fx_cola_parabrisa', 'fx_cola_vidro_tras', 'fx_cola_laterais');
Object.values(FIX).forEach(f => { f.k = f.k || 'parafuso'; });

/* ===== Sintomas ===== */
const SYMPTOMS = [
  { id: 'frio', n: 'Demora para pegar ou falha nas primeiras partidas do dia',
    d: 'Com etanol no tanque e motor frio, a partida depende da gasolina do reservatório da partida a frio e de a central saber a temperatura certa. Com gasolina no tanque, a partida a frio quase não atua.',
    s: [
      ['res_pf', 'Reservatório vazio ou com gasolina velha: com etanol e frio, o motor custa a pegar.', 'Confira o nível e renove a gasolina se tiver mais de 3 meses.'],
      ['bomba_pf', 'Bomba da partida a frio sem funcionar.', 'Na primeira partida fria deve haver um zumbido curto; teste o relé e o fusível.'],
      ['valv_pf', 'Válvula travada aberta afoga o motor; fechada, não deixa a gasolina passar.', 'Nível do reservatório caindo sem uso indica válvula aberta.'],
      ['sens_ect', 'Leitura errada de temperatura faz a central errar a mistura e não acionar a partida a frio.', 'No scanner, com o motor frio, a leitura deve bater com a temperatura do dia.'],
      ['velas', 'Vela gasta falha mais com etanol e motor frio.', 'Quilometragem e aspecto das velas.'],
      ['bicos', 'Bico pingando deixa combustível acumulado durante a noite.', 'Teste de estanqueidade em bancada.'],
      ['bomba_comb', 'Pressão baixa demora a encher a linha.', 'Manômetro na linha: a pressão deve subir e se manter com a chave ligada.']
    ] },
  { id: 'lenta', n: 'Marcha lenta oscilando, alta ou o motor morre ao parar',
    d: 'A marcha lenta é feita pela própria borboleta eletrônica, guiada pelo sensor de massa de ar. Sujeira na borboleta, ar que entra sem ser medido e bateria desligada sem reaprendizado são as causas mais comuns.',
    s: [
      ['tbi', 'Carvão na borda da borboleta: a central não consegue fechar o ar certo. Depois de limpar, faça o reaprendizado da lenta.', 'Olhe a borda da borboleta contra a luz; scanner mostra o ângulo da borboleta em lenta.'],
      ['maf', 'Sensor de massa de ar sujo mede ar a menos.', 'Valores no scanner em lenta e a 2.500 rpm; limpe só com produto próprio.'],
      ['duto_ar', 'Rachadura no duto depois do sensor: entra ar não medido.', 'Aperte o duto com o motor em lenta e veja se a rotação muda.'],
      ['respiro', 'Válvula PCV presa ou mangueira rachada é entrada de ar.', 'Com o motor em lenta, a mangueira não pode chiar nem estar mole.'],
      ['coletor_adm', 'Junta do coletor ou mangueira de vácuo solta.', 'Borrife limpa-contatos em volta com o motor ligado: se a rotação mudar, achou.'],
      ['bateria', 'Bateria desligada apaga o aprendizado da lenta.', 'Deixe o motor em lenta alguns minutos, com tudo desligado, antes de rodar.'],
      ['purga', 'Purga do cânister travada aberta.', 'Lenta piora logo depois de abastecer.']
    ] },
  { id: 'falha', n: 'Motor falhando, engasgando ou tremendo ao acelerar',
    d: 'Falha de ignição num cilindro aparece como engasgo e tremedeira, e a luz da injeção pode piscar. Pisca rápida é aviso para não acelerar forte: o catalisador sofre.',
    s: [
      ['bobinas', 'Bobina fraca. Trocando duas bobinas de lugar dá para ver se a falha muda de cilindro.', 'Scanner com falhas por cilindro (P0301 a P0304).'],
      ['velas', 'Vela gasta ou com folga aberta.', 'Tire e olhe; confira se é a vela indicada para o flex.'],
      ['tampa_valv', 'Óleo no poço da vela, pela vedação vencida, faz a faísca fugir.', 'Óleo dentro do poço ao tirar a bobina.'],
      ['maf', 'Leitura errada de ar empobrece a mistura em aceleração.', 'Compare os valores com o motor quente.'],
      ['bicos', 'Bico entupido empobrece um cilindro.', 'Teste de vazão em bancada.'],
      ['bomba_comb', 'Pressão caindo em aceleração forte.', 'Manômetro na linha durante um teste de rua.']
    ] },
  { id: 'chocalho', n: 'Barulho metálico no motor ao dar partida ou em lenta',
    d: 'Um chocalho de um ou dois segundos logo depois da partida fria costuma vir da corrente e do variador antes de o óleo chegar com pressão. Se o barulho fica ou aumenta, o problema já é de desgaste.',
    s: [
      ['tensor_corr', 'Tensor gasto deixa a corrente bater até a pressão de óleo subir.', 'Barulho que some em poucos segundos; piora com óleo velho.'],
      ['corrente', 'Corrente alongada: barulho constante e falha de sincronismo no scanner.', 'Scanner mostra correção de fase fora da faixa; inspeção com a tampa aberta.'],
      ['cvtc', 'Variador de fase batendo na partida.', 'Ruído na região da ponta direita do cabeçote.'],
      ['carter', 'Óleo abaixo do mínimo ou fora da especificação.', 'Confira o nível e a viscosidade usada na última troca.'],
      ['tuchos', 'Folga de válvula aberta faz um tique rápido que acompanha a rotação.', 'Barulho vem de cima, constante com o motor quente.'],
      ['protetor', 'Protetor de calor solto vibra como lata.', 'Bata de leve com a mão nos protetores, motor frio.']
    ] },
  { id: 'consumo', n: 'Consumo acima do normal',
    d: 'Com etanol o consumo é cerca de 30% maior que com gasolina: compare sempre com o mesmo combustível, enchendo até o primeiro clique em dois ou três tanques seguidos. Depois de trocar de combustível, a central leva alguns quilômetros para se adaptar.',
    s: [
      ['termostato', 'Travado aberto, o motor nunca esquenta e a central mantém a mistura rica.', 'Ponteiro baixo e aquecimento fraco.'],
      ['sens_ect', 'Indicando frio o tempo todo, a central enriquece sem parar.', 'Leitura do scanner com o motor quente.'],
      ['sonda', 'Sonda lenta erra a correção e a leitura do etanol.', 'Sinal da sonda no scanner oscilando rápido em lenta acelerada.'],
      ['maf', 'Sensor de massa de ar descalibrado.', 'Valores no scanner.'],
      ['filtro_ar', 'Filtro entupido estrangula o motor.', 'Olhe contra a luz.'],
      ['pneus', 'Pneu murcho aumenta o atrito.', 'Calibre com os pneus frios.'],
      ['pincas', 'Pinça presa segura a roda.', 'Roda muito mais quente que as outras depois de rodar.']
    ] },
  { id: 'ar', n: 'Ar-condicionado não gela ou o compressor não liga',
    d: 'Com o ar ligado e o motor em lenta, o miolo da polia do compressor tem de girar junto com a polia. As ventoinhas devem ligar junto com o ar.',
    s: [
      ['pressostato', 'Falta de gás: o sensor de pressão impede o compressor de ligar.', 'Manômetros na oficina de ar-condicionado.'],
      ['compressor', 'Embreagem do compressor com folga ou bobina aberta.', 'Olhe o miolo da polia com o ar ligado.'],
      ['caixa_fus_motor', 'Relé ou fusível do compressor.', 'Inspeção e troca do relé por outro igual para teste.'],
      ['ventoinha', 'Ventoinha parada: o ar gela pouco no trânsito e a pressão sobe.', 'Ligue o ar parado e olhe as ventoinhas.'],
      ['tubos_ac', 'Vazamento nas conexões ou nos anéis de vedação.', 'Mancha de óleo nas conexões; teste com corante.'],
      ['condensador', 'Condensador sujo ou amassado.', 'Lave por trás com água de baixa pressão.'],
      ['filtro_cabine', 'Filtro entupido deixa pouco ar passar.', 'Tire pelo porta-luvas e olhe.']
    ] },
  { id: 'vibracao', n: 'Vibração em marcha lenta ou trancos ao arrancar e trocar de marcha',
    d: 'O conjunto se apoia em dois coxins e num tirante embaixo; com o ar ligado a vibração aumenta. Peça para alguém acelerar de leve com o carro freado e observe o motor.',
    s: [
      ['coxim_tras', 'Tirante com bucha gasta: tranco na arrancada e ao tirar o pé.', 'Motor balançando para a frente e para trás ao acelerar parado.'],
      ['coxim_dir', 'Coxim direito rachado.', 'Rachaduras e motor baixo desse lado.'],
      ['coxim_cambio', 'Coxim do câmbio rachado.', 'Batida ao engatar e alavanca vibrando.'],
      ['bobinas', 'Cilindro falhando treme o motor inteiro.', 'Scanner.'],
      ['tbi', 'Lenta baixa demais aumenta a vibração.', 'Rotação de lenta no conta-giros.']
    ] },
  { id: 'clique', n: 'Clique ao virar a chave e o painel apaga',
    d: 'A corrente da partida é enorme. Qualquer resistência no caminho derruba a tensão e o painel apaga.',
    s: [
      ['cabos_bat', 'Terminal oxidado ou frouxo, ou cabo terra ruim.', 'Limpe, aperte e teste de novo.'],
      ['bateria', 'Bateria fraca não segura a tensão sob carga.', 'Teste com carga numa autoelétrica.'],
      ['motor_partida', 'Solenoide ou escovas gastas.', 'Queda de tensão no motor de partida durante a partida.'],
      ['pedal_emb', 'Interruptor do pedal da embreagem: sem ele, a partida não é liberada.', 'Pise a embreagem até o fim; teste o interruptor.'],
      ['ign_chave', 'Contato interno gasto no comutador.', 'Teste de continuidade na posição de partida.']
    ] },
  { id: 'naopega', n: 'Gira normalmente mas não pega',
    d: 'O motor de partida funciona; falta combustível, faísca ou a autorização do imobilizador.',
    s: [
      ['bomba_comb', 'Sem pressão de combustível não há partida.', 'Ao ligar a chave, a bomba deve zumbir por alguns segundos.'],
      ['ign_chave', 'Imobilizador sem ler a chave bloqueia a injeção.', 'Luz do imobilizador piscando no painel; teste a chave reserva.'],
      ['sens_ckp', 'Sem sinal de rotação não há injeção nem faísca.', 'Conta-giros parado durante a partida.'],
      ['res_pf', 'Com etanol e tempo frio, sem gasolina na partida a frio o motor não pega.', 'Confira o nível do reservatório.'],
      ['caixa_fus_motor', 'Fusível ou relé da injeção ou da bomba.', 'Inspeção dos fusíveis e relés do motor.'],
      ['bobinas', 'Sem faísca.', 'Teste de centelha.'],
      ['ecu', 'Central sem alimentação.', 'Diagnóstico com scanner.']
    ] },
  { id: 'temperatura', n: 'Ponteiro da temperatura subindo',
    d: 'Pare assim que puder e espere esfriar: rodar superaquecido empena o cabeçote. Nunca abra a tampa do radiador quente.',
    s: [
      ['vaso', 'Nível baixo é o começo de quase tudo.', 'Motor frio: confira o reservatório e o radiador.'],
      ['ventoinha', 'Ventoinhas que não ligam fervem o motor no trânsito.', 'Devem ligar parado, perto do meio da escala, e sempre com o ar ligado.'],
      ['correia_acess', 'Correia rompida ou patinando para a bomba d’água.', 'Olhe a correia: sem ela, a luz da bateria também acende.'],
      ['tampa_rad', 'Tampa cansada deixa o líquido ferver e sair pelo reservatório.', 'Teste de pressão da tampa.'],
      ['termostato', 'Travado fechado, a água não chega ao radiador.', 'Mangueira superior fria com o motor quente.'],
      ['bomba_agua', 'Rotor gasto ou vazamento.', 'Gotas embaixo do lado direito do motor.'],
      ['radiador', 'Tanque plástico trincado ou colmeia entupida.', 'Marcas de vazamento nas emendas dos tanques.'],
      ['junta_cab', 'Gases da queima pressurizam o sistema.', 'Bolhas no reservatório com o motor ligado.']
    ] },
  { id: 'oleo', n: 'Luz de óleo acesa ou nível baixando',
    d: 'Luz vermelha de óleo com o motor ligado: desligue na hora. Nesse motor, óleo baixo também castiga a corrente e o variador.',
    s: [
      ['vareta', 'Primeiro confira o nível.', 'Carro no plano, motor frio.'],
      ['tampa_valv', 'Junta da tampa vazando.', 'Óleo escorrendo na lateral do cabeçote.'],
      ['tampa_corr', 'Vazamento na tampa da corrente ou no retentor do virabrequim.', 'Óleo na região da polia e embaixo do lado direito.'],
      ['carter', 'Bujão ou vedação do cárter.', 'Mancha no chão.'],
      ['sens_oleo', 'O interruptor pode falhar.', 'Medição com manômetro.'],
      ['bomba_oleo', 'Pescador entupido de borra.', 'Pressão real com manômetro.'],
      ['respiro', 'PCV entupida aumenta a pressão interna e empurra óleo pelas vedações.', 'Teste a PCV.']
    ] },
  { id: 'injecao', n: 'Luz da injeção acesa',
    d: 'A central gravou um código de falha. Um scanner comum (OBD) lê o código e aponta o sistema.',
    s: [
      ['maf', 'Sinal do sensor de massa de ar fora de faixa.', 'Código de falha e valores com o motor quente.'],
      ['cvtc', 'Falha do variador de fase ou da válvula solenoide.', 'Código de falha do comando; confira o nível e o estado do óleo.'],
      ['catalisador', 'P0420: eficiência do catalisador baixa.', 'Compare as duas sondas no scanner: a traseira deve ficar quase parada.'],
      ['sonda', 'Sinal lento ou aquecimento da sonda com defeito.', 'Código de falha e gráfico da sonda.'],
      ['bobinas', 'Falha de ignição.', 'Contador de falhas por cilindro.'],
      ['tbi', 'Borboleta suja ou sem reaprendizado.', 'Limpeza e procedimento de reaprendizado.'],
      ['bocal', 'Tampa do tanque mal fechada acusa vazamento de vapores.', 'Aperte até estalar e apague a falha.']
    ] },
  { id: 'abs', n: 'Luz do ABS ou da direção acesa',
    d: 'Com a luz do ABS acesa o freio comum continua funcionando, mas sem o antitravamento. A direção elétrica usa o sinal de velocidade das rodas e também pode acender a luz dela.',
    s: [
      ['sens_roda', 'Sensor de roda sujo, cabo rompido ou anel dentado com barro.', 'Scanner mostra qual roda; olhe o cabo junto à suspensão.'],
      ['abs', 'Módulo do ABS com falha interna ou conector oxidado.', 'Diagnóstico com scanner de ABS.'],
      ['caixa_fus_motor', 'Fusível do ABS (bomba e válvulas).', 'Confira os fusíveis grandes do ABS.'],
      ['bateria', 'Tensão baixa acende luzes de vários sistemas.', 'Teste a bateria e a carga do alternador.'],
      ['eps', 'Falha na direção elétrica: volante pesado e luz da direção.', 'Scanner de carroceria; confira a tensão com o motor ligado.']
    ] },
  { id: 'direcao', n: 'Direção pesada, com folga ou barulho',
    d: 'Na direção elétrica não há óleo nem bomba: peso fora do normal vem de alimentação, do sistema elétrico ou da parte mecânica.',
    s: [
      ['eps', 'Assistência reduzida ou desligada.', 'Luz da direção no painel e código de falha.'],
      ['pneus', 'Pneu murcho pesa a direção.', 'Calibre com os pneus frios.'],
      ['coxins_amort', 'Rolamento do coxim travado endurece o volante e estala.', 'Estalo virando o volante parado.'],
      ['barras_axiais', 'Terminais e axiais com folga.', 'Folga na roda segurando nas laterais.'],
      ['coluna', 'Junta da coluna presa ou com folga.', 'Estalo vindo de dentro do carro ao girar o volante.'],
      ['caixa_dir', 'Folga ou coifa rasgada na caixa.', 'Coifas e folga da cremalheira.']
    ] },
  { id: 'dianteira', n: 'Batidas na suspensão dianteira em buracos',
    d: 'Várias peças baratas fazem barulhos parecidos; vale conferir na ordem.',
    s: [
      ['barra_estab', 'Bieletas gastas: o toc-toc mais comum.', 'Chacoalhe a barra com o carro no chão.'],
      ['bandejas', 'Bucha traseira da bandeja rachada ou pivô com folga.', 'Folga com alavanca, no elevador.'],
      ['coxins_amort', 'Coxim ou rolamento do topo.', 'Estalo ao esterçar parado.'],
      ['amort_diant', 'Amortecedor sem ação.', 'O carro quica ao empurrar a frente.'],
      ['barras_axiais', 'Terminais e axiais com folga.', 'Folga na roda segurando nas laterais.'],
      ['coxim_tras', 'Tranco do motor pode parecer suspensão.', 'Batida ao arrancar e ao frear.']
    ] },
  { id: 'traseira', n: 'Barulho na traseira ou rangido em lombadas',
    d: 'O eixo de torção é simples: quem gasta são as buchas, os amortecedores e os coxins das molas. Num hatch, a tampa traseira e o estepe também fazem barulho.',
    s: [
      ['buchas_eixo', 'Buchas do eixo rachadas: estalo em lombada e traseira "esterçando".', 'Folga com alavanca no elevador.'],
      ['amort_tras', 'Amortecedor batendo ou vazando.', 'Óleo escorrendo e batida seca.'],
      ['molas_tras', 'Coxim da mola ressecado range.', 'Rangido que acompanha o sobe e desce, devagar.'],
      ['amort_tampa', 'Tampa traseira folgada vibra e bate.', 'Regule os batentes de borracha e confira a fechadura.'],
      ['estepe', 'Estepe ou macaco soltos no porta-malas.', 'Aperte o parafuso do estepe e prenda o macaco.'],
      ['coxins_esc', 'Escapamento batendo no assoalho.', 'Chacoalhe a ponteira com o motor frio.'],
      ['cubo_tras', 'Rolamento traseiro roncando.', 'Ronco que aumenta com a velocidade.']
    ] },
  { id: 'freio', n: 'Freio chiando, puxando ou pedal baixo',
    d: 'Freio não espera: qualquer mudança de comportamento pede inspeção logo. Pulsação forte no pedal numa freada brusca é o ABS trabalhando, e é normal.',
    s: [
      ['pastilhas', 'Pastilha no fim chia pela lingueta de aviso.', 'Espessura menor que 3 mm.'],
      ['discos', 'Disco empenado vibra no pedal em freadas leves.', 'Espessura mínima gravada no disco.'],
      ['pincas', 'Pino-guia preso faz o carro puxar.', 'Roda quente e desgaste desigual.'],
      ['reserv_freio', 'Fluido velho ou nível baixo deixa o pedal baixo.', 'Nível e data da última troca.'],
      ['sapatas', 'Cilindro de roda vazando.', 'Umidade dentro do tambor.'],
      ['servo', 'Servo furado deixa o pedal duro.', 'Chiado no pedal ao frear.'],
      ['cil_mestre', 'Vedação interna gasta.', 'Pedal afundando devagar parado.']
    ] },
  { id: 'embreagem', n: 'Embreagem patinando, pedal no fundo ou marchas arranhando',
    d: 'A embreagem é hidráulica e divide o fluido com o freio: além do disco e do platô, cilindros e fluido entram na conta.',
    s: [
      ['embreagem', 'Disco gasto patina e trepida.', 'Em 4ª, acelere forte numa subida: o giro sobe e o carro não?'],
      ['cil_emb_mestre', 'Vedação interna gasta: o pedal afunda e as marchas arranham.', 'Nível do reservatório do freio e umidade no pedal.'],
      ['cil_emb_aux', 'Vazamento no auxiliar.', 'Umidade na coifa do cilindro sobre o câmbio.'],
      ['tubo_emb', 'Ar no circuito.', 'Sangria pelo parafuso do cilindro auxiliar.'],
      ['rol_emb', 'Rolamento gasto chia com o pedal pisado.', 'Ruído some ao soltar o pedal.'],
      ['cambio', 'Óleo errado ou baixo deixa as marchas duras.', 'Nível até a borda do furo de abastecimento.']
    ] }
];

/* ===== Caminhos animados ===== */
const CZ = [-0.223, -0.133, -0.043, 0.047], Z1 = CZ[0], MAINS = [-0.268, -0.178, -0.088, 0.002, 0.092];
const FLOWS = [
  { id: 'ar', n: 'O caminho do ar', c: '#E3A21A', d: 'Da frente do carro até a ponteira: o ar é medido, queima com o combustível e sai como gás de escape pelo corta-fogo.',
    leg: [['#3D9BE0', 'ar'], ['#E4572E', 'gases quentes']], motion: 'ar',
    steps: [
      ['tomada_ar', 'O ar entra pela frente do carro, do lado esquerdo.', { route: 1, c: '#3D9BE0' }],
      ['filtro_ar', 'A poeira fica no filtro.'],
      ['maf', 'O sensor de massa de ar mede quanto ar entra e a temperatura dele.', { at: [1.60, 0.80, 0.27] }],
      ['duto_ar', 'O ar já medido segue para a borboleta.', { route: 1 }],
      ['tbi', 'A borboleta eletrônica, aberta pela central conforme o pedal, dosa o ar — inclusive na marcha lenta.'],
      ['coletor_adm', 'O coletor, na frente do motor, divide o ar entre os 4 cilindros.', { route: 1 }],
      ['bicos', 'O bico pulveriza o combustível na entrada das válvulas.', { at: [1.54, 0.69, Z1] }],
      ['valvulas', 'As duas válvulas de admissão abrem e a mistura entra.', { at: [1.445, 0.64, Z1] }],
      ['pistoes', 'O pistão comprime e a vela solta a faísca: combustão.', { at: [1.40, 0.61, Z1] }],
      ['valvulas', 'As duas válvulas de escape abrem e os gases saem para trás.', { at: [1.355, 0.64, Z1], c: '#E4572E' }],
      ['coletor_esc', 'Os gases se juntam no coletor, voltado para o corta-fogo.', { route: 1, pick: 'near' }],
      ['sonda', 'A sonda dianteira mede o oxigênio e a central corrige a mistura e descobre a proporção de etanol.', { at: [1.22, 0.58, -0.13] }],
      ['catalisador', 'O catalisador, logo embaixo, limpa os gases.', { at: [1.18, 0.45, -0.09] }],
      ['sonda2', 'A sonda traseira confere se o catalisador está trabalhando.', { at: [1.17, 0.31, -0.11] }],
      ['tubo_diant', 'O tubo dianteiro, com a junta flexível, leva os gases pelo túnel.', { route: 1 }],
      ['silenc_inter', 'Primeiro silencioso.'],
      ['tubo_tras', 'O tubo passa sobre o eixo traseiro.', { route: 1 }],
      ['silenc_tras', 'Saída pela ponteira, na traseira esquerda.', { route: 1 }]
    ] },
  { id: 'comb', n: 'O caminho do combustível', c: '#3F9D4A', d: 'Do bocal até os cilindros por uma linha só, o atalho da partida a frio para o etanol e o retorno dos vapores pelo cânister.',
    leg: [['#3F9D4A', 'combustível do tanque'], ['#E0A526', 'gasolina da partida a frio'], ['#9C6BD6', 'vapores do tanque']],
    steps: [
      ['bocal', 'Você abastece pelo bocal, na lateral traseira direita.', { route: 1 }],
      ['tanque', 'O combustível fica no tanque, sob o banco traseiro.'],
      ['bomba_comb', 'O módulo da bomba filtra e pressuriza: o filtro e o regulador ficam ali dentro.'],
      ['linhas_comb', 'Uma linha só leva o combustível pelo assoalho até o cofre.', { route: 1, pick: [1, 0] }],
      ['galeria', 'A galeria distribui para os bicos.'],
      ['bicos', 'Os bicos injetam na sequência de ignição, perto das válvulas.', { at: CZ.map(z => [1.54, 0.69, z]) }],
      ['res_pf', 'Partida a frio com etanol: a gasolina do reservatório…', { from: -1, c: '#E0A526' }],
      ['bomba_pf', '…é empurrada pela bombinha…'],
      ['valv_pf', '…liberada pela eletroválvula…', { via: { r: 'tubos_pf', i: 0 } }],
      ['tubos_pf', '…e chega a cada cilindro pelos tubinhos.', { route: 1, pick: [1, 2, 3, 4] }],
      ['canister', 'Os vapores do tanque ficam no cânister.', { from: 1, via: { r: 'canister', i: 0 }, c: '#9C6BD6' }],
      ['purga', 'A central abre a purga e o motor queima esses vapores.', { via: { r: 'canister', i: 1 } }]
    ] },
  { id: 'forca', n: 'Da explosão até as rodas', c: '#B0412A', d: 'Como a força da combustão chega ao asfalto.', motion: 'forca',
    steps: [
      ['pistoes', 'A combustão empurra o pistão para baixo.', { at: [1.40, 0.57, Z1] }],
      ['bielas', 'A biela transmite o empurrão.', { at: [1.40, 0.48, Z1] }],
      ['virabrequim', 'O virabrequim transforma em giro.', { at: [1.40, 0.40, Z1] }],
      ['volante_motor', 'O volante suaviza os pulsos.', { at: [1.40, 0.40, 0.128] }],
      ['embreagem', 'A embreagem liga o motor ao câmbio.', { at: [1.40, 0.40, 0.158] }],
      ['cambio', 'O câmbio escolhe uma das seis relações.', { at: [1.34, 0.43, 0.33] }],
      ['diferencial', 'O diferencial divide entre as rodas.', { at: [1.29, 0.305, 0.20] }],
      ['semieixos', 'Os semieixos levam o giro até as rodas.', { route: 1 }],
      ['mangas', 'O cubo gira sobre o rolamento.', { at: [[1.30, 0.305, 0.72], [1.30, 0.305, -0.72]] }],
      ['pneus', 'E o pneu empurra o chão.', { at: [[1.30, 0.02, 0.74], [1.30, 0.02, -0.74]] }]
    ] },
  { id: 'agua', n: 'O circuito do arrefecimento', c: '#1F8FC0', d: 'O líquido tira calor do motor e o entrega ao ar — e à cabine, pelo aquecedor.',
    leg: [['#2F8FE0', 'líquido frio'], ['#E4572E', 'líquido quente']], motion: 'agua', mo: i => ({ engine: 0.45, fan: i >= 9 ? 1 : 0 }),
    steps: [
      ['bomba_agua', 'A bomba d’água, girada pela correia de acessórios, empurra o líquido.', { c: '#2F8FE0' }],
      ['bloco', 'Ele passa em volta dos cilindros…', { at: [1.40, 0.50, -0.20], c2: '#E4572E' }],
      ['cabecote', '…e pelo cabeçote, recolhendo calor.', { at: [1.40, 0.686, -0.05] }],
      ['mang_aquec', 'Uma parte vai sempre para a cabine…', { route: 1, pick: [0] }],
      ['rad_aquec', '…aquece o ar da ventilação…', { c2: '#2F8FE0' }],
      ['bomba_agua', '…e volta para a bomba.', { via: { r: 'mang_aquec', i: 1 } }],
      ['termostato', 'Com o motor quente, a válvula termostática abre…', { from: 2, c: '#E4572E' }],
      ['mang_sup', '…e a mangueira superior leva o líquido ao radiador.', { route: 1 }],
      ['radiador', 'O radiador troca calor com o ar e o líquido esfria.', { at: [1.93, 0.36, -0.22], via: [[1.93, 0.62, 0.24], [1.93, 0.50, 0.0]], c2: '#2F8FE0' }],
      ['ventoinha', 'Parado no trânsito, as ventoinhas ajudam.', { from: -1 }],
      ['mang_inf', 'A mangueira inferior devolve o líquido frio à bomba.', { route: 1, from: 8 }],
      ['tampa_rad', 'A tampa mantém o circuito pressurizado…', { from: 8, at: [1.93, 0.675, -0.20] }],
      ['vaso', '…e o excesso vai para o reservatório, que o devolve quando o motor esfria.', { via: { r: 'vaso', i: 0 }, at: [1.84, 0.66, -0.56] }]
    ] },
  { id: 'clima', n: 'Como o ar-condicionado gela', c: '#4F7FE0', d: 'O gás é comprimido, esfria no condensador, expande no evaporador e rouba o calor do ar da cabine.',
    leg: [['#E4572E', 'gás quente sob pressão'], ['#2F8FE0', 'gás frio'], ['#3D9BE0', 'ar da cabine']], motion: 'clima', mo: i => ({ engine: 0.4, fan: i >= 3 ? 1 : 0 }),
    steps: [
      ['compressor', 'O compressor, ligado pela embreagem da polia, comprime o gás e ele esquenta.', { c: '#E4572E' }],
      ['tubos_ac', 'A linha de alta leva o gás quente…', { route: 1, pick: [0] }],
      ['condensador', '…ao condensador, na frente do radiador, onde ele perde calor e vira líquido.', { at: [1.968, 0.50, -0.10] }],
      ['ventoinha', 'As ventoinhas ligam junto com o ar e ajudam com o carro parado.', { from: -1 }],
      ['filtro_secador', 'O filtro secador tira a umidade.', { from: 2 }],
      ['pressostato', 'O sensor de pressão vigia o circuito e protege o compressor.'],
      ['tubos_ac', 'O líquido segue pela linha fina até o corta-fogo…', { route: 1, pick: [1], c2: '#2F8FE0' }],
      ['valv_exp', '…a válvula de expansão estrangula a passagem…', { c: '#2F8FE0' }],
      ['evaporador', '…e o gás expande no evaporador e gela.'],
      ['vent_interno', 'O ventilador sopra o ar da cabine pelo evaporador frio, e a umidade sai pelo dreno.', { from: -1, c: '#3D9BE0' }],
      ['tubos_ac', 'O gás frio volta ao compressor pela linha grossa, de baixa pressão.', { from: 8, route: 1, pick: [2], c: '#2F8FE0' }]
    ] },
  { id: 'partida', n: 'Da chave até a faísca', c: '#D6B000', d: 'O que acontece quando você vira a chave.',
    leg: [['#35B6C9', 'sinais e comandos'], ['#E8B90C', 'corrente']], motion: 'partida', mo: i => ({ engine: i >= 9 ? 0.6 : i >= 5 ? 0.22 : 0 }),
    steps: [
      ['ign_chave', 'O comutador liga os circuitos e a antena lê o chip da chave.', { c: '#35B6C9' }],
      ['ecu', 'A central confere o imobilizador e libera a injeção.', { via: { r: 'chicote', i: 0 } }],
      ['bomba_comb', 'A bomba de combustível funciona por alguns segundos e pressuriza a linha.', { via: { r: 'chicote', i: 1 } }],
      ['bateria', 'Com a embreagem pisada, a bateria entrega a corrente da partida…', { from: -1, c: '#E8B90C' }],
      ['cabos_bat', '…pelo cabo grosso…', { route: 1, pick: [0] }],
      ['motor_partida', '…e o motor de partida gira o volante do motor.'],
      ['sens_ckp', 'O sensor de rotação avisa que o motor está girando; os de fase dizem qual cilindro está em compressão.', { c: '#35B6C9' }],
      ['ecu', 'A central calcula injeção e ignição e, se o motor está frio com etanol, aciona a partida a frio.', { via: { r: 'chicote', i: 0 } }],
      ['bobinas', 'Cada bobina gera a alta tensão do seu cilindro…', { via: { r: 'chicote', i: 0 } }],
      ['velas', '…e as velas soltam a faísca. Pegou.', { at: CZ.map(z => [1.40, 0.70, z]), c: '#E8B90C' }],
      ['alternador', 'Agora o alternador repõe a carga da bateria.', { from: -1, out: [{ to: 3, via: { r: 'chicote', i: 0 } }] }]
    ] },
  { id: 'oleo', n: 'A lubrificação', c: '#D0602A', d: 'O óleo circula sob pressão, move o variador de fase e o tensor da corrente, e volta ao cárter por gravidade.', motion: 'oleo',
    steps: [
      ['carter', 'O óleo descansa no cárter.'],
      ['bomba_oleo', 'A bomba, na ponta do virabrequim, suga pelo pescador.', { via: { r: 'bomba_oleo', i: 0 } }],
      ['filtro_oleo', 'O filtro limpa.'],
      ['virabrequim', 'Mancais e virabrequim recebem óleo sob pressão.', { at: MAINS.map(z => [1.40, 0.40, z]) }],
      ['bielas', 'As bielas também.', { at: CZ.map(z => [1.40, 0.44, z]) }],
      ['comando', 'Uma galeria sobe até os dois comandos…', { at: [1.445, 0.76, -0.20] }],
      ['cvtc', '…o variador de fase recebe óleo comandado pela válvula solenoide…', { at: [1.445, 0.76, -0.33] }],
      ['tuchos', '…e os tuchos são lubrificados.', { at: [1.40, 0.74, -0.10] }],
      ['tensor_corr', 'O tensor usa a pressão para esticar a corrente, e um jato a lubrifica.', { from: 2, at: [1.47, 0.56, -0.33] }],
      ['sens_oleo', 'O interruptor vigia a pressão.', { from: 2 }],
      ['carter', 'Tudo escorre de volta ao cárter.', { from: 7, at: [1.40, 0.26, -0.10] }]
    ] },
  { id: 'freio', n: 'Do pedal às rodas', c: '#D2334A', d: 'Hidráulica com ABS: a força do pé vira pressão nas quatro rodas e o ABS impede que alguma trave.', motion: 'freio',
    leg: [['#D2334A', 'fluido sob pressão'], ['#35B6C9', 'sinais dos sensores']],
    steps: [
      ['pedal_freio', 'Você pisa no pedal.'],
      ['servo', 'O servo-freio multiplica a força com o vácuo do motor.'],
      ['cil_mestre', 'O cilindro-mestre transforma em pressão.'],
      ['abs', 'A pressão passa pela unidade do ABS, que distribui entre a frente e a traseira.', { via: { r: 'tubos_freio', i: 7 } }],
      ['tubos_freio', 'As tubulações levam o fluido às quatro rodas ao mesmo tempo.', { route: 1, pick: [2, 0, 3, 1, 4, 5, 6] }],
      ['pincas', 'Na frente, as pinças…', { both: 1 }],
      ['pastilhas', '…apertam as pastilhas…', { both: 1, from: -1 }],
      ['discos', '…contra os discos ventilados.', { both: 1, from: -1 }],
      ['sapatas', 'Atrás, os cilindros de roda abrem as sapatas…', { both: 1, from: 4 }],
      ['tambores', '…contra os tambores.', { both: 1, from: -1 }],
      ['sens_roda', 'Se uma roda começa a travar, o sensor avisa e o ABS alivia e reaplica a pressão dela muitas vezes por segundo.', { both: 1, from: -1, c: '#35B6C9' }]
    ] },
  { id: 'dir', n: 'Do volante às rodas', c: '#1FA394', d: 'Pinhão e cremalheira com assistência elétrica: um motor na coluna empurra junto com você.', motion: 'dir',
    leg: [['#1FA394', 'movimento'], ['#35B6C9', 'assistência elétrica']],
    steps: [
      ['volante_dir', 'Você gira o volante.'],
      ['coluna', 'A coluna leva o giro para baixo…', { route: 1 }],
      ['eps', '…e o sensor de torque mede a força que você faz: o motor elétrico ajuda, mais em manobra e menos na estrada.', { c: '#35B6C9', at: [0.64, 0.84, 0.36] }],
      ['caixa_dir', 'O pinhão empurra a cremalheira para o lado.', { at: [1.13, 0.37, 0.20], c: '#1FA394' }],
      ['barras_axiais', 'As barras axiais empurram…', { both: 1 }],
      ['mangas', '…as mangas, que esterçam…', { both: 1 }],
      ['pneus', '…as rodas.', { at: [[1.30, 0.305, 0.74], [1.30, 0.305, -0.74]] }]
    ] }
];

/* ===== Plano de revisões ===== */
const MAINT = [
  { id: 'oleo', n: 'Óleo do motor e filtro', km: 10000, mo: 12, p: ['carter', 'filtro_oleo'], t: 'Uso severo (trajetos curtos, trânsito, poeira, muito etanol): 5.000 km ou 6 meses. Arruela do bujão nova. Óleo em dia protege a corrente e o variador.' },
  { id: 'filtro_ar', n: 'Filtro de ar', km: 20000, p: ['filtro_ar'] },
  { id: 'filtro_cabine', n: 'Filtro da cabine', km: 15000, mo: 12, p: ['filtro_cabine'] },
  { id: 'velas', n: 'Velas', km: 40000, p: ['velas'], t: 'Intervalo comum para o flex em uso brasileiro; confira o do manual do seu carro.' },
  { id: 'pf', n: 'Gasolina da partida a frio (renovar)', mo: 3, p: ['res_pf'], t: 'Gasolina parada envelhece e atrapalha a partida com etanol.' },
  { id: 'tbi', n: 'Limpeza da borboleta e do sensor de massa de ar', km: 40000, p: ['tbi', 'maf'], t: 'Recomendação de oficina; depois, reaprendizado da lenta.' },
  { id: 'bicos', n: 'Limpeza dos bicos', km: 40000, p: ['bicos'], t: 'Recomendação de oficina para flex, não do plano de fábrica.' },
  { id: 'acess', n: 'Correia de acessórios e tensor', km: 60000, p: ['correia_acess', 'tensor_acess'], t: 'Inspecione em toda revisão; ela também move a bomba d’água.' },
  { id: 'corrente', n: 'Corrente de comando (ouvir e conferir)', km: 100000, p: ['corrente', 'tensor_corr'], t: 'Sem troca programada; com essa quilometragem, vale ouvir a partida a frio e conferir a correção de fase no scanner.' },
  { id: 'fluido_freio', n: 'Fluido de freio e da embreagem (DOT 3)', mo: 24, p: ['reserv_freio', 'cil_emb_mestre'] },
  { id: 'arref', n: 'Líquido de arrefecimento', mo: 48, p: ['vaso', 'radiador'], t: 'Com o aditivo de longa duração indicado; com aditivo comum, a cada 2 anos.' },
  { id: 'cambio', n: 'Óleo do câmbio (conferir e trocar)', km: 60000, p: ['cambio'], t: 'Cerca de 2 L do óleo indicado pela Nissan; nível até a borda do furo de abastecimento.' },
  { id: 'ac', n: 'Ar-condicionado: higienização e conferência', mo: 12, p: ['evaporador', 'compressor'] },
  { id: 'pastilhas', n: 'Pastilhas e discos (inspeção)', km: 10000, p: ['pastilhas', 'discos'] },
  { id: 'lonas', n: 'Lonas e tambores (inspeção)', km: 20000, p: ['sapatas', 'tambores'] },
  { id: 'alinh', n: 'Alinhamento e balanceamento', km: 10000, p: ['pneus', 'barras_axiais'] },
  { id: 'rodizio', n: 'Rodízio de pneus', km: 10000, p: ['pneus'] },
  { id: 'coxins', n: 'Coxins e suspensão (inspeção)', km: 20000, p: ['coxim_tras', 'coxim_dir', 'bandejas', 'barra_estab', 'buchas_eixo'] },
  { id: 'bateria', n: 'Teste da bateria', mo: 6, p: ['bateria'], t: 'Bateria fraca derruba a direção elétrica e acende luzes de vários sistemas.' },
  { id: 'palhetas', n: 'Palhetas dos limpadores', mo: 12, p: ['limpador', 'limpador_tras'] },
  { id: 'lubrif', n: 'Lubrificar dobradiças, fechaduras e limitadores', mo: 12, p: ['dobradicas', 'fech_portas', 'fech_capo', 'dobr_capo', 'dobr_tampa', 'fech_tampa'] },
  { id: 'drenos', n: 'Limpar drenos do torpedo, portas, soleiras e do ar', mo: 6, p: ['grade_torpedo', 'portas', 'soleiras', 'evaporador'] },
  { id: 'borrachas', n: 'Protetor nas borrachas de vedação', mo: 4, p: ['borrachas'] }
];

/* ===== Ficha técnica ===== */
const SPECS = [
  ['Motor', [['Código', 'MR18DE flex: 1.798 cm³, 4 cilindros, 16 válvulas, dois comandos no cabeçote com variador de fase na admissão'], ['Diâmetro e curso', '84 mm e 81,1 mm'], ['Potência', '125 cv com gasolina e 126 cv com etanol, a 5.200 rpm'], ['Torque', 'cerca de 17,5 kgfm a 4.800 rpm'], ['Injeção', 'Multiponto sequencial, acelerador eletrônico, sensor de massa de ar e partida a frio com reservatório'], ['Ignição', 'Direta, uma bobina por vela, velas de irídio; ordem 1-3-4-2'], ['Distribuição', 'Corrente de comando, sem troca programada'], ['Combustível', 'Flex: gasolina, etanol ou qualquer mistura']]],
  ['Transmissão', [['Câmbio', 'Manual de 6 marchas, engates por cabo'], ['Embreagem', 'Monodisco a seco, comando hidráulico'], ['Tração', 'Dianteira']]],
  ['Chassi', [['Suspensão dianteira', 'McPherson com molas helicoidais e barra estabilizadora'], ['Suspensão traseira', 'Eixo de torção, molas helicoidais e amortecedores separados'], ['Freios', 'Discos ventilados na frente, tambores atrás, ABS com EBD e assistência de frenagem'], ['Direção', 'Pinhão e cremalheira com assistência elétrica na coluna'], ['Pneus', '185/65 R15'], ['Rodas', 'Furação 4×100, porcas M12×1,25 de ≈ 113 N·m']]],
  ['Dimensões', [['Comprimento', '4.295 mm'], ['Largura', '1.695 mm'], ['Altura', '1.535 mm (fichas variam até 1.545)'], ['Entre-eixos', '2.600 mm'], ['Peso', 'cerca de 1.210 kg (varia por versão)'], ['Porta-malas', 'cerca de 289 L'], ['Tanque', '52 L']]],
  ['Fluidos', [['Óleo do motor', 'cerca de 4,2 L com filtro — a vareta manda'], ['Óleo do câmbio', 'cerca de 2 L; referências do mesmo câmbio indicam 75W-85 GL-4 (confirme no manual)'], ['Freio e embreagem', 'DOT 3 (reservatório único)'], ['Arrefecimento', 'Aditivo de longa duração indicado pela Nissan'], ['Ar-condicionado', 'R-134a']]],
  ['Regulagens', [['Velas', 'Irídio, folga ≈ 1,1 mm, aperto ≈ 20 N·m'], ['Porcas de roda', '≈ 113 N·m'], ['Bujão do cárter', '≈ 34 N·m com arruela nova'], ['Folga de válvulas', 'A frio, pelo manual; ajuste por troca de tuchos']]],
  ['O carro', [['Versão', 'Tiida S 1.8 16V flex 2010/2011, hatch de 5 portas, câmbio manual'], ['Considerado presente', 'Ar-condicionado, direção elétrica, ABS com EBD, airbags frontais, vidros e travas elétricos'], ['Confira no seu', 'Rodas (o modelo tem aço com calota), número de marchas (algumas fichas citam 5) e banco traseiro corrediço']]]
];

/* ===== Como desmontar (3D) ===== */
const PCD = [6, 7, 8, 9, 0, 1, 3, 4, 2, 5, 10];
const OUT_PCD = [['para_choque_d', [0.5, 0.02, 0]], ['grade_inf', [0.5, 0.02, 0]]];
const GUIDES = [
  { id: 'dm_parachoque_d', grp: 'Lataria', n: 'Para-choque dianteiro', part: 'para_choque_d', parts: ['para_choque_d', 'grade_inf'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte os 4 parafusos e presilhas de cima, na travessa sob o capô.', { fx: [['fx_parachoque', [6, 7, 8, 9]]], l: 'Fixações de cima' }],
      ['Solte os parafusos das caixas de roda, dos dois lados.', { fx: [['fx_parachoque', [0, 1, 3, 4]]], cam: [0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['Solte os parafusos de baixo.', { fx: [['fx_parachoque', [2, 5, 10]]], cam: [0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas para fora das guias laterais, com cuidado para não quebrá-las…', { fx: [['fx_guias_pcd', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…e tire o para-choque para a frente, desligando o que houver de conector.', { out: OUT_PCD, l: 'Para-choque' }]
    ] },
  { id: 'dm_paralama', grp: 'Lataria', n: 'Para-lama dianteiro', part: 'paralamas', parts: ['paralamas', 'piscas_lat'], side: 1,
    steps: [
      ['Abra o capô e a porta do lado do para-lama.', { open: ['hood', 'door'], l: 'Capô e porta' }],
      ['Tire o para-choque dianteiro, que cobre a ponta do para-lama.', { fx: [['fx_parachoque', PCD]], out: OUT_PCD, l: 'Para-choque' }],
      ['Tire o farol: 3 parafusos.', { fx: [['fx_farol', [0, 1, 2]]], out: [['farois', [0.32, 0.02, 0.03], 1]], l: 'Farol' }],
      ['Solte as presilhas do forro da caixa de roda e tire o forro. Com a roda tirada fica mais fácil.', { fx: [['fx_forros', [0, 1, 2, 3, 4, 5]]], cam: [0.25, -0.55, 1], l: 'Presilhas do forro' }],
      ['Tire os 4 parafusos da borda de cima, sob o capô.', { fx: [['fx_paralama', [0, 1, 2, 3]]], l: 'Parafusos de cima' }],
      ['Tire o parafuso da frente, junto ao farol.', { fx: [['fx_paralama', [4]]], l: 'Parafuso da frente' }],
      ['Com a porta aberta, tire o parafuso de trás, na coluna, e o de baixo, na soleira.', { fx: [['fx_paralama', [6, 5]]], l: 'Parafusos de trás e de baixo' }],
      ['Desligue o repetidor lateral, corte a massa das emendas e puxe o para-lama para fora.', { out: [['paralamas', [0.04, 0.06, 0.42], 1], ['piscas_lat', [0.04, 0.06, 0.42], 1]], l: 'Para-lama' }]
    ] },
  { id: 'dm_capo', grp: 'Lataria', n: 'Capô', part: 'capo', parts: ['capo', 'dobr_capo'], side: 0,
    steps: [
      ['Abra o capô e apoie na vareta.', { open: 'hood', l: 'Capô' }],
      ['Risque o contorno das dobradiças: é o que acerta as frestas na volta.', { fx: [['fx_capo', [2, 3, 6, 7]]], keep: 1, l: 'Dobradiças' }],
      ['Com alguém segurando o capô, solte os parafusos das dobradiças (2 de cada lado).', { fx: [['fx_capo', [2, 3, 6, 7]]], l: 'Parafusos das dobradiças' }],
      ['Tire o capô levantando pela frente.', { out: [['capo', [0.22, 0.55, 0]], ['dobr_capo', [0.22, 0.55, 0]]], l: 'Capô' }]
    ] },
  { id: 'dm_porta', grp: 'Lataria', n: 'Porta dianteira', part: 'portas', parts: ['portas'], side: 1,
    steps: [
      ['Abra a porta e apoie a ponta de baixo: um macaco com um pano serve.', { open: 'door', l: 'Porta' }],
      ['Desligue o conector do chicote da porta na coluna e solte o limitador: 1 parafuso.', { fx: [['fx_dobradicas', [8]]], cam: [-0.75, 0.3, 0.7], l: 'Conector e limitador' }],
      ['Marque a posição e solte os 4 parafusos das dobradiças na coluna.', { fx: [['fx_dobradicas', [0, 2, 4, 6]]], cam: [-0.75, 0.3, 0.7], l: 'Parafusos das dobradiças' }],
      ['Tire a porta.', { out: [['portas', [0.05, 0.1, 0.6], 1]], l: 'Porta' }]
    ] },
  { id: 'dm_porta_tras', grp: 'Lataria', n: 'Porta traseira', part: 'portas_tras', parts: ['portas_tras'], side: 1,
    steps: [
      ['Abra a porta traseira e apoie a ponta de baixo.', { open: 'rdoor', l: 'Porta traseira' }],
      ['Desligue o conector do chicote na coluna central e solte o limitador: 1 parafuso.', { fx: [['fx_dobradicas', [17]]], cam: [-0.6, 0.3, 0.75], l: 'Conector e limitador' }],
      ['Marque a posição e solte os 4 parafusos das dobradiças na coluna central.', { fx: [['fx_dobradicas', [9, 11, 13, 15]]], cam: [-0.6, 0.3, 0.75], l: 'Parafusos das dobradiças' }],
      ['Tire a porta.', { out: [['portas_tras', [0.0, 0.1, 0.6], 1]], l: 'Porta traseira' }]
    ] },
  { id: 'dm_forro_porta', grp: 'Lataria', n: 'Forro da porta dianteira', part: 'forros_portas', parts: ['forros_portas'], side: 1,
    steps: [
      ['Abra a porta, tire os parafusos do puxador e o acabamento da maçaneta interna; solte o conector dos botões dos vidros.', { open: 'door', l: 'Puxador e botões' }],
      ['Solte as presilhas em volta do forro com uma espátula plástica, rente a cada presilha.', { fx: [['fx_forro_porta', [0, 1, 2, 3, 4, 5, 6, 7]]], cam: [-1, 0.3, 0.35], l: 'Presilhas do forro' }],
      ['Levante o forro para soltar da borda do vidro e tire.', { out: [['forros_portas', [0, 0.06, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Forro da porta' }]
    ] },
  { id: 'dm_vidro_porta', grp: 'Lataria', n: 'Vidro e máquina da porta dianteira', part: 'vidros_portas', parts: ['vidros_portas', 'maq_vidro'], side: 1,
    steps: [
      ['Abra a porta e tire o forro (veja o guia do forro da porta).', { open: 'door', out: [['forros_portas', [0, 0.06, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Forro da porta' }],
      ['Com o botão do vidro ligado provisoriamente, posicione o vidro até os 2 parafusos aparecerem e solte-os.', { fx: [['fx_vidro_porta', [0, 1]]], cam: [-1, 0.3, 0.35], l: 'Parafusos do vidro' }],
      ['Tire o vidro por cima, inclinando.', { out: [['vidros_portas', [0, 0.45, 0.02], 1]], l: 'Vidro' }],
      ['Desligue o conector do motor e solte os 4 parafusos da máquina…', { fx: [['fx_maq_vidro', [0, 1, 2, 3]]], cam: [-1, 0.3, 0.35], l: 'Fixação da máquina' }],
      ['…e tire a máquina pela abertura do painel interno.', { out: [['maq_vidro', [0, -0.05, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Máquina de vidro' }]
    ] },
  { id: 'dm_retrovisor', grp: 'Lataria', n: 'Retrovisor', part: 'retrovisores', parts: ['retrovisores'], side: 1,
    steps: [
      ['Abra a porta e tire o acabamento triangular por dentro, no canto do vidro.', { open: 'door', l: 'Acabamento' }],
      ['Desligue o conector, segure o espelho por fora e solte as 3 porcas.', { fx: [['fx_retrovisor', [0, 1, 2]]], l: 'Porcas do retrovisor' }],
      ['Tire o espelho para fora.', { out: [['retrovisores', [0.02, 0.05, 0.3], 1]], l: 'Retrovisor' }]
    ] },
  { id: 'dm_tampa', grp: 'Lataria', n: 'Tampa traseira', part: 'tampa_tras', parts: ['tampa_tras', 'dobr_tampa', 'amort_tampa'], side: 0,
    steps: [
      ['Abra a tampa e peça ajuda para segurá-la.', { open: 'tail', l: 'Tampa' }],
      ['Tire o forro da tampa e desligue os conectores da luz de freio, das luzes da placa, do limpador e do desembaçador.', { l: 'Conectores', at: [-2.04, 1.50, 0], cam: [-0.85, -0.2, 0.5] }],
      ['Solte os amortecedores: levante a trava de mola e puxe cada um do pino.', { fx: [['fx_amort_tampa', [1, 3]]], hide: ['amort_tampa'], cam: [-0.85, -0.2, 0.5], l: 'Amortecedores' }],
      ['Solte as porcas das dobradiças no teto, por baixo do forro: 2 de cada lado.', { fx: [['fx_tampa', [0, 2, 4, 6]]], cam: [-0.8, -0.35, 0.5], l: 'Dobradiças' }],
      ['Tire a tampa com as dobradiças.', { out: [['tampa_tras', [-0.4, 0.35, 0]], ['dobr_tampa', [-0.4, 0.35, 0]]], l: 'Tampa traseira' }]
    ] },
  { id: 'dm_farol', grp: 'Lataria', n: 'Farol', part: 'farois', parts: ['farois'], side: 1,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Tire o para-choque dianteiro: ele cobre o parafuso de baixo do farol.', { fx: [['fx_parachoque', PCD]], out: OUT_PCD, l: 'Para-choque' }],
      ['Solte os 2 parafusos de cima…', { fx: [['fx_farol', [0, 1]]], l: 'Parafusos de cima' }],
      ['…e o de baixo.', { fx: [['fx_farol', [2]]], l: 'Parafuso de baixo' }],
      ['Desligue os conectores e tire o farol para a frente. Na volta, regule a altura do facho.', { out: [['farois', [0.32, 0.02, 0.03], 1]], l: 'Farol' }]
    ] },
  { id: 'dm_lanterna', grp: 'Lataria', n: 'Lanterna', part: 'lanternas', parts: ['lanternas'], side: 1,
    steps: [
      ['Abra a tampa traseira e tire a tampinha do acabamento lateral, atrás da lanterna.', { open: 'tail', l: 'Acabamento' }],
      ['Solte as porcas por dentro.', { fx: [['fx_lanterna', [0, 1, 2]]], l: 'Fixações da lanterna' }],
      ['Desligue o conector e tire a lanterna para trás, soltando o pino de encaixe.', { out: [['lanternas', [-0.28, 0, 0.06], 1]], l: 'Lanterna' }]
    ] },
  { id: 'dm_parachoque_t', grp: 'Lataria', n: 'Para-choque traseiro', part: 'para_choque_t', parts: ['para_choque_t'], side: 0,
    steps: [
      ['Abra a tampa traseira.', { open: 'tail', l: 'Tampa' }],
      ['Solte os 4 parafusos e presilhas de cima.', { fx: [['fx_parachoque_t', [6, 7, 8, 9]]], l: 'Fixações de cima' }],
      ['Solte os parafusos das caixas de roda…', { fx: [['fx_parachoque_t', [0, 1, 3, 4]]], cam: [-0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['…e os de baixo.', { fx: [['fx_parachoque_t', [2, 5]]], cam: [-0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas para fora das guias laterais…', { fx: [['fx_guias_pct', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…e tire o para-choque para trás.', { out: [['para_choque_t', [-0.5, 0.02, 0]]], l: 'Para-choque' }]
    ] },
  { id: 'dm_grade', grp: 'Lataria', n: 'Grade', part: 'grade', parts: ['grade'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte as 4 presilhas por trás da grade.', { fx: [['fx_grade', [0, 1, 2, 3]]], l: 'Presilhas' }],
      ['Tire a grade para a frente.', { out: [['grade', [0.25, 0, 0]]], l: 'Grade' }]
    ] },
  { id: 'dm_grade_torpedo', grp: 'Lataria', n: 'Grade do torpedo', part: 'grade_torpedo', parts: ['grade_torpedo'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Marque a posição de repouso e solte as porcas dos braços do limpador.', { fx: [['fx_limpador', [0, 1]]], l: 'Braços do limpador' }],
      ['Solte as 6 presilhas…', { fx: [['fx_grade_torpedo', [0, 1, 2, 3, 4, 5]]], l: 'Presilhas' }],
      ['…e puxe a grade para cima e para a frente, soltando da borda do para-brisa.', { out: [['grade_torpedo', [0.12, 0.3, 0]]], l: 'Grade do torpedo' }]
    ] },
  { id: 'dm_bocal', grp: 'Lataria', n: 'Bocal de abastecimento', part: 'bocal', parts: ['bocal'], side: 0,
    steps: [
      ['Com o tanque quase vazio, abra a portinhola.', { l: 'Portinhola', at: [-1.55, 0.90, -0.84], cam: [-0.35, 0.3, -1] }],
      ['Por baixo do carro, solte a abraçadeira da mangueira do tanque.', { l: 'Abraçadeira', at: [-1.05, 0.30, -0.33], cam: [0.15, -0.9, -0.45] }],
      ['Tire os 2 parafusos da caixa da portinhola.', { fx: [['fx_bocal', [0, 1]]], cam: [-0.35, 0.3, -1], l: 'Parafusos' }],
      ['Puxe o bocal por baixo.', { out: [['bocal', [0.05, -0.3, 0.15]]], cam: [0.1, -0.75, -0.65], l: 'Bocal' }]
    ] },
  { id: 'dm_parabrisa', grp: 'Vidros colados', n: 'Para-brisa', part: 'para_brisa', parts: ['para_brisa'], side: 0,
    steps: [
      ['O para-brisa não tem parafuso: é colado num cordão de poliuretano em volta.', { fx: [['fx_cola_parabrisa', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Tire os braços do limpador e a grade do torpedo.', { fx: [['fx_limpador', [0, 1]], ['fx_grade_torpedo', [0, 1, 2, 3, 4, 5]]], out: [['grade_torpedo', [0.12, 0.3, 0]]], l: 'Limpador e grade' }],
      ['O instalador corta o cordão com fio ou faca própria…', { fx: [['fx_cola_parabrisa', 'all']], l: 'Corte do cordão' }],
      ['…e tira o vidro com ventosas. Na volta: cordão novo e tempo de cura antes de rodar.', { out: [['para_brisa', [0.3, 0.45, 0]]], l: 'Para-brisa' }]
    ] },
  { id: 'dm_vidro_tras', grp: 'Vidros colados', n: 'Vidro traseiro', part: 'vidro_tras', parts: ['vidro_tras'], side: 0,
    steps: [
      ['O vidro traseiro é colado na tampa com um cordão de poliuretano.', { fx: [['fx_cola_vidro_tras', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Com o limpador e os conectores do desembaçador soltos, o cordão é cortado…', { fx: [['fx_cola_vidro_tras', 'all']], l: 'Corte do cordão' }],
      ['…e o vidro sai com ventosas. Água no porta-malas pode vir de falha nesse cordão.', { out: [['vidro_tras', [-0.35, 0.3, 0]]], l: 'Vidro traseiro' }]
    ] },
  { id: 'dm_vidro_lateral', grp: 'Vidros colados', n: 'Vidro lateral fixo', part: 'vidros_laterais', parts: ['vidros_laterais'], side: 1,
    steps: [
      ['O vidro lateral de trás é fixo, colado na lateral com poliuretano.', { fx: [['fx_cola_laterais', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Com o acabamento interno tirado, o cordão é cortado por dentro…', { fx: [['fx_cola_laterais', 'all']], l: 'Corte do cordão' }],
      ['…e o vidro sai para fora.', { out: [['vidros_laterais', [0, 0.05, 0.28], 1]], l: 'Vidro lateral' }]
    ] },
  { id: 'dm_teto', grp: 'Peças soldadas (funilaria)', n: 'Teto', part: 'teto', parts: ['teto'], side: 0,
    steps: [
      ['O teto é soldado na estrutura: não sai com ferramenta de mão.', { fx: [['fx_solda_teto', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, cada ponto de solda é furado…', { fx: [['fx_solda_teto', 'all']], l: 'Pontos furados' }],
      ['…a peça sai, e a nova é soldada e selada no lugar.', { out: [['teto', [0, 0.4, 0]]], l: 'Teto' }]
    ] },
  { id: 'dm_lateral', grp: 'Peças soldadas (funilaria)', n: 'Lateral traseira', part: 'laterais', parts: ['laterais'], side: 1,
    steps: [
      ['A lateral é soldada na coluna central, na soleira, na caixa de roda, no painel traseiro e junto ao teto.', { fx: [['fx_solda_laterais', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, os pontos são furados ou cortados…', { fx: [['fx_solda_laterais', 'all']], l: 'Pontos furados' }],
      ['…a lateral sai e a nova é soldada, com massa de vedação nas emendas.', { out: [['laterais', [-0.05, 0.05, 0.45], 1], ['vidros_laterais', [-0.05, 0.05, 0.45], 1]], l: 'Lateral' }]
    ] },
  { id: 'dm_soleira', grp: 'Peças soldadas (funilaria)', n: 'Soleira', part: 'soleiras', parts: ['soleiras'], side: 1,
    steps: [
      ['A soleira é soldada na aba de baixo e na borda das portas. A aba de baixo é onde o macaco apoia.', { fx: [['fx_solda_soleiras', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, os pontos são furados…', { fx: [['fx_solda_soleiras', 'all']], l: 'Pontos furados' }],
      ['…e a soleira nova é soldada no lugar.', { out: [['soleiras', [0, -0.12, 0.3], 1]], l: 'Soleira' }]
    ] },
  { id: 'dm_roda', grp: 'Mecânica', n: 'Roda', part: 'rodas', parts: ['rodas', 'pneus', 'calotas'], side: 1,
    steps: [
      ['Tire a calota puxando pelas bordas.', { out: [['calotas', [0, -0.12, 0.55], 1, 0]], l: 'Calota' }],
      ['Com o carro no chão e o freio de mão puxado, afrouxe as 4 porcas meia volta.', { fx: [['fx_roda', [0, 1, 2, 3]]], keep: 1, l: 'Porcas da roda' }],
      ['Levante o carro com o macaco no ponto de apoio da soleira, perto da roda.', { l: 'Ponto do macaco', at: [1.02, 0.14, 0.70] }],
      ['Tire as porcas…', { fx: [['fx_roda', [0, 1, 2, 3]]], l: 'Porcas da roda' }],
      ['…e puxe a roda para fora.', { out: [['pneus', [0, 0, 0.42], 1, 0], ['rodas', [0, 0, 0.42], 1, 0]], l: 'Roda' }],
      ['Na volta: encoste as porcas à mão, aperte em cruz, desça o carro e dê o aperto final (≈ 113 N·m).', { l: 'Aperto em cruz', at: [1.30, 0.305, 0.82] }]
    ] },
  { id: 'dm_pastilhas', grp: 'Mecânica', n: 'Pastilhas de freio dianteiras', part: 'pastilhas', parts: ['pastilhas', 'pincas', 'rodas', 'pneus', 'calotas'], side: 1,
    steps: [
      ['Com o carro no chão, afrouxe as porcas, levante, apoie em cavalete e tire a roda.', { fx: [['fx_roda', [0, 1, 2, 3]]], out: [['calotas', [0, -0.12, 0.55], 1, 0], ['pneus', [0, 0, 0.45], 1, 0], ['rodas', [0, 0, 0.45], 1, 0]], l: 'Roda' }],
      ['Solte os 2 pinos-guia da pinça.', { fx: [['fx_pinca', [0, 2]]], cam: [0.2, 0.2, 1], l: 'Pinos-guia' }],
      ['Tire a pinça e pendure com arame, sem forçar o flexível nem o cabo do sensor do ABS.', { out: [['pincas', [0.02, 0.16, 0.22], 1]], cam: [0.2, 0.2, 1], l: 'Pinça' }],
      ['Tire as pastilhas velhas do suporte e recolha o pistão devagar.', { out: [['pastilhas', [0.02, 0.12, 0.30], 1]], cam: [0.2, 0.2, 1], l: 'Pastilhas' }],
      ['Na volta: pastilhas novas com as molas, pinos lubrificados e pedal bombeado até ficar firme antes de andar.', { l: 'Montagem', at: [1.30, 0.40, 0.72] }]
    ] },
  { id: 'dm_velas', grp: 'Mecânica', n: 'Bobinas e velas', part: 'velas', parts: ['velas', 'bobinas'], side: 0,
    steps: [
      ['Motor frio. Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Desligue os conectores e solte o parafuso de cada bobina.', { fx: [['fx_bobinas', [0, 1, 2, 3]]], cam: [0.3, 1, -0.2], l: 'Parafusos das bobinas' }],
      ['Puxe as bobinas retas para cima.', { out: [['bobinas', [0, 0.22, 0]]], cam: [0.3, 1, -0.2], l: 'Bobinas' }],
      ['Sopre os poços e solte as velas com chave de vela longa.', { fx: [['fx_velas', [0, 1, 2, 3]]], cam: [0.3, 1, -0.2], l: 'Velas' }],
      ['Tire as velas. Na volta: rosqueie à mão, aperte com torquímetro (≈ 20 N·m) e encaixe cada bobina no seu cilindro.', { out: [['velas', [0, 0.26, 0]]], cam: [0.3, 1, -0.2], l: 'Velas fora' }]
    ] },
  { id: 'dm_filtro_ar', grp: 'Mecânica', n: 'Filtro de ar', part: 'filtro_ar', parts: ['filtro_ar'], side: 0,
    steps: [
      ['Abra o capô. A caixa do filtro fica sobre o câmbio, atrás da bateria.', { open: 'hood', l: 'Capô' }],
      ['Abra as presilhas da tampa da caixa (o sensor de massa de ar fica na tampa: não puxe pelo fio).', { l: 'Presilhas', at: [1.62, 0.83, 0.40], cam: [0.3, 1, 0.3] }],
      ['Levante a tampa e tire o filtro, sem deixar cair sujeira no lado limpo.', { out: [['filtro_ar', [0, 0.25, 0]]], cam: [0.3, 1, 0.3], l: 'Filtro' }]
    ] },
  { id: 'dm_bateria', grp: 'Mecânica', n: 'Bateria', part: 'bateria', parts: ['bateria'], side: 0,
    steps: [
      ['Abra o capô com a ignição desligada.', { open: 'hood', l: 'Capô' }],
      ['Solte primeiro o terminal negativo (preto).', { fx: [['fx_bateria', [1]]], l: 'Negativo' }],
      ['Depois o positivo (vermelho).', { fx: [['fx_bateria', [0]]], l: 'Positivo' }],
      ['Solte o grampo de fixação.', { fx: [['fx_bateria', [2]]], l: 'Grampo' }],
      ['Tire a bateria para cima, sem inclinar. Na volta: positivo primeiro, negativo por último, e deixe o motor em lenta alguns minutos para a central reaprender.', { out: [['bateria', [0, 0.36, 0]]], l: 'Bateria' }]
    ] }
];

/* ===== Explosão: para onde cada peça se afasta (x, y, z, simétrico) ===== */
const EXV = {
  soleiras: [0, -0.15, 0.75, 1], colunas: [0.15, 0.55, 0.55, 1], painel_tras: [-0.8, 0, 0], grade_torpedo: [0.3, 0.75, 0], borrachas: [0, 0.12, 0.5, 1], dobr_capo: [0.35, 0.65, 0.35, 1], dobr_tampa: [-0.55, 0.75, 0.3, 1], fech_tampa: [-0.95, 0.35, 0], amort_tampa: [-0.5, 0.3, 0.4, 1], forros_portas: [0, 0.1, 0.55, 1], forros_portas_tras: [0, 0.1, 0.55, 1],
  capo: [0.25, 0.8, 0], teto: [0, 0.9, 0], para_brisa: [0.35, 0.65, 0], vidro_tras: [-0.6, 0.45, 0], tampa_tras: [-0.75, 0.35, 0], para_choque_d: [0.9, -0.05, 0], para_choque_t: [-0.9, -0.05, 0], grade: [1.0, 0.1, 0], grade_inf: [1.05, -0.05, 0], viga_dianteira: [0.7, -0.05, 0], viga_traseira: [-0.7, -0.05, 0], travessa_frontal: [0.5, 0.05, 0], fech_capo: [0.5, 0.3, 0], monobloco: [0, 0, 0], corta_fogo: [0, 0.05, 0],
  paralamas: [0.15, 0.1, 0.8, 1], portas: [0.1, 0.05, 1.0, 1], portas_tras: [-0.1, 0.05, 1.0, 1], vidros_portas: [0.05, 0.35, 1.05, 1], vidros_portas_tras: [-0.05, 0.35, 1.05, 1], laterais: [-0.1, 0.05, 0.85, 1], vidros_laterais: [-0.1, 0.35, 0.9, 1], retrovisores: [0.1, 0.2, 1.2, 1], caixas_roda: [0, 0, 0.5, 1], dobradicas: [0, 0, 0.85, 1], fech_portas: [-0.1, 0, 0.9, 1], maq_vidro: [0, 0.1, 0.8, 1], maq_vidro_tras: [0, 0.1, 0.8, 1], alto_falantes: [0, 0, 0.75, 1],
  farois: [0.6, 0.1, 0.35, 1], lanternas: [-0.6, 0.05, 0.35, 1], piscas_lat: [0.2, 0.1, 1.0, 1], luz_freio: [-0.6, 0.45, 0], luz_placa: [-0.9, 0.2, 0], bocal: [-0.2, 0.1, -0.6],
  painel: [-0.1, 0.55, 0], quadro: [-0.25, 0.7, 0], radio: [-0.3, 0.55, 0], comandos_clima: [-0.35, 0.5, 0], caixa_ar: [0.1, 0.35, 0], vent_interno: [0.1, 0.35, -0.15], filtro_cabine: [0, 0.3, -0.35], evaporador: [0.1, 0.45, -0.25], airbag_pass: [-0.15, 0.85, 0], airbag_mot: [-0.45, 0.45, 0], cabo_espiral: [-0.35, 0.35, 0], srs: [0, 0.35, 0], console: [0, 0.35, 0],
  bancos_diant: [0, 0.35, 0.45, 1], banco_tras: [-0.2, 0.35, 0], cintos: [0, 0.3, 0.6, 1], porta_malas: [-0.3, 0.3, 0], retrovisor_int: [0, 0.8, 0],
  carter: [0, -0.35, 0], bomba_oleo: [0, 0.2, -0.3], filtro_oleo: [0.45, 0.2, 0], vareta: [0.25, 1.0, 0.2], virabrequim: [0, 0.62, 0], polia_vira: [0, 0.62, -0.45], volante_motor: [0, 0.62, 0.35], bloco: [0, 0.95, 0], pistoes: [0, 1.55, 0], bielas: [0, 1.42, 0], junta_cab: [0, 1.75, 0], cabecote: [0, 1.9, 0], valvulas: [0, 2.1, 0], tuchos: [0, 2.2, 0], comando: [0, 2.3, 0], cvtc: [0, 2.3, -0.3], tampa_valv: [0, 2.45, 0], tampa_oleo: [0, 2.52, 0], bobinas: [0, 2.62, 0], velas: [0.12, 2.0, 0], sens_ect: [0, 2.0, 0.25], termostato: [0, 2.0, 0.3],
  corrente: [0, 1.1, -0.45], tensor_corr: [0, 1.1, -0.5], tampa_corr: [0, 1.1, -0.62], bomba_agua: [0.3, 0.95, -0.7], correia_acess: [0, 0.95, -0.75], tensor_acess: [0, 0.95, -0.8], alternador: [0.35, 0.95, -0.7], compressor: [0.35, 0.3, -0.7],
  coxim_dir: [0, 1.2, -0.4], coxim_cambio: [0, 0.9, 0.4], coxim_tras: [-0.3, 0.2, 0], respiro: [0.3, 2.4, 0],
  tomada_ar: [0.5, 1.4, 0.1], caixa_filtro: [0.3, 1.4, 0.1], filtro_ar: [0.3, 1.55, 0.1], maf: [0.25, 1.5, 0.05], duto_ar: [0.2, 1.45, 0.05], tbi: [0.3, 1.5, 0.1], coletor_adm: [0.4, 1.55, 0], galeria: [0.35, 1.4, 0], bicos: [0.35, 1.3, 0], purga: [0.4, 1.6, -0.2], pedal_acel: [-0.15, 0.2, 0],
  res_pf: [0.2, 1.2, -0.3], bomba_pf: [0.2, 1.1, -0.3], valv_pf: [0.4, 1.6, -0.1], tubos_pf: [0.4, 1.5, 0],
  ecu: [0.1, 0.9, 0.4], sens_ckp: [-0.2, 0.6, 0.3], sens_cmp: [0, 2.0, 0.35], sens_det: [0.35, 0.8, 0], sonda: [-0.45, 0.8, 0], sonda2: [-0.45, 0.4, 0], sens_oleo: [0.4, 0.9, 0],
  cambio: [0, 0.6, 0.55], diferencial: [0, 0.4, 0.55], embreagem: [0, 0.62, 0.45], rol_emb: [0, 0.62, 0.55], semieixos: [0, 0, 0.25, 1], cabos_cambio: [-0.1, 0.3, 0.3], alavanca: [0, 0.4, 0], cil_emb_mestre: [-0.1, 0.6, 0.2], cil_emb_aux: [0.1, 0.8, 0.4], tubo_emb: [0, 0.6, 0.3], pedal_emb: [-0.15, 0.2, 0],
  radiador: [0.55, 0.3, 0], tampa_rad: [0.55, 0.6, -0.1], ventoinha: [0.35, 0.3, 0], condensador: [0.75, 0.3, 0], filtro_secador: [0.75, 0.3, -0.3], pressostato: [0.7, 0.5, -0.3], tubos_ac: [0.2, 0.3, -0.3], valv_exp: [-0.1, 0.5, -0.3], vaso: [0.45, 0.9, -0.2], mang_sup: [0.3, 1.2, 0.25], mang_inf: [0.3, 0.2, -0.2], mang_aquec: [-0.2, 0.6, 0], rad_aquec: [0.1, 0.5, 0.1],
  coletor_esc: [-0.55, 1.0, 0], protetor: [-0.55, 1.2, 0], catalisador: [-0.55, 0.3, 0], tubo_diant: [0, -0.35, 0], silenc_inter: [0, -0.45, 0], tubo_tras: [0, -0.4, 0], silenc_tras: [-0.3, -0.4, 0], coxins_esc: [0, -0.2, 0],
  bateria: [0.3, 0.9, 0.3], cabos_bat: [0.1, 0.7, 0.2], caixa_fus_motor: [0.1, 1.0, 0.4], caixa_fus_painel: [0, 0.4, 0.4], bcm: [0, 0.35, 0.4], motor_partida: [-0.35, 0.6, 0.35], chicote: [0, 1.8, 0], buzina: [0.8, -0.05, 0], limpador: [0.1, 0.5, 0], limpador_tras: [-0.6, 0.4, 0], lavador: [0.7, 0.2, -0.2], ign_chave: [-0.2, 0.3, 0.1], comutadores: [-0.2, 0.3, 0.1],
  pedal_freio: [-0.15, 0.2, 0], servo: [-0.2, 0.5, 0.1], cil_mestre: [0.1, 0.6, 0.1], reserv_freio: [0.1, 0.8, 0.1], abs: [0.15, 0.7, 0.35], sens_roda: [0, 0.05, 0.6, 1], tubos_freio: [0, -0.1, 0], pincas: [0, 0.05, 0.55, 1], pastilhas: [0, 0.05, 0.48, 1], discos: [0, 0, 0.4, 1], tambores: [0, 0, 0.45, 1], sapatas: [0, 0, 0.3, 1], freio_mao: [0, 0.25, 0], mang_vacuo: [0, 0.7, 0.1],
  pneus: [0, 0, 0.85, 1], rodas: [0, 0, 0.75, 1], calotas: [0, 0, 1.0, 1], mangas: [0, 0, 0.25, 1], amort_diant: [0, 0.25, 0.2, 1], molas_diant: [0, 0.35, 0.3, 1], coxins_amort: [0, 0.55, 0.2, 1], bandejas: [0, -0.2, 0.15, 1], barra_estab: [0, -0.25, 0], subchassi: [0, -0.35, 0],
  eixo_tras: [0, -0.3, 0], buchas_eixo: [0.2, -0.25, 0.2, 1], cubo_tras: [0, 0, 0.3, 1], amort_tras: [0, 0.3, 0.15, 1], molas_tras: [0, 0.4, 0.2, 1], estepe: [-0.3, 0.45, 0], macaco: [-0.2, 0.4, 0],
  volante_dir: [-0.3, 0.3, 0], coluna: [-0.1, 0.25, 0], eps: [-0.25, 0.35, 0.1], caixa_dir: [0, -0.15, 0], barras_axiais: [0, -0.15, 0.15, 1],
  tanque: [0, -0.45, 0], bomba_comb: [0, 0.3, 0], boia: [0, -0.3, 0], linhas_comb: [0, -0.25, 0], canister: [0, -0.3, 0.3]
};

return { SYS, PARTS, FIX, FXKIND, SYMPTOMS, FLOWS, MAINT, SPECS, GUIDES, EXV };
  }
});
