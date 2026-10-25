/* ===== Honda Civic LX 1.7 16V 2005 (sétima geração), manual de 5 marchas, motor D17 ===== */
(window.CARS = window.CARS || []).push({
  id: 'civic-g7', order: 2, storeKey: 'civic-g7', codePrefix: 'CVC',
  badge: '1.7', name: 'Honda Civic', short: 'Civic', title: 'Honda Civic LX', sub: '1.7 16V 2005, manual de 5 marchas, sedã, motor D17',
  kmDefault: 0, size: [4.455, 1.715], wheelR: 0.311,
  paint: { color: 0xa9aeb3, roughness: 0.3, metalness: 0.6, clearcoat: 1, clearcoatRoughness: 0.12 },
  oemLabel: 'Código Honda', oemHint: 'Código Honda: confirme pelo número do chassi (VIN) no balcão de peças; a Honda substitui códigos com o tempo.',
  open: { hood: 'capo', tail: 'tampa_mala', door: 'portas', rdoor: 'portas_tras' },
  xrayExtra: ['farois', 'lanternas', 'piscas_lat', 'luz_placa', 'bocal', 'grade'],
  boxIds: ['monobloco', 'pneus', 'para_choque_d', 'para_choque_t', 'teto', 'retrovisores', 'laterais'],
  welcome: ['correia_dent', 'iac', 'bobinas', 'compressor', 'coxim_tras', 'portas_tras'],
  profile: { top: [[-2.225, .71], [-2.185, .945], [-2.05, 1.04], [-1.6, 1.065], [-1.42, 1.08], [-0.95, 1.32], [-0.7, 1.43], [-0.4, 1.455], [0.22, 1.42], [0.70, 1.16], [0.93, 1.02], [1.5, .925], [2.0, .825], [2.20, .70], [2.23, .63]],
    rearLow: 0.36, frontLow: 0.30, floor: 0.20, wheels: [1.31, -1.31], arch: 0.385, wheelR: 0.311, wheelY: 0.305 },
  maintNote: 'Intervalos de referência para o D17 em uso brasileiro: o plano de fábrica da Honda pode trazer prazos maiores para correia, velas e líquido de arrefecimento. Itens marcados como recomendação de oficina não são de fábrica. O manual do seu carro manda.',
  about: '<p>A carroceria é um sedã genérico de três volumes com as medidas reais do Civic (4,455 × 1,715 × 1,455 m, entre-eixos de 2,62 m), em prata, com quatro portas, tampa do porta-malas com dobradiças em pescoço de ganso e barras de torção, e vidro traseiro colado. Não reproduz o desenho externo da marca.</p><p>A mecânica segue o 1.7 16V SOHC sem VTEC da versão LX (família D17), com injeção PGM-FI, acelerador a cabo, uma bobina por vela, câmbio manual de 5 marchas com embreagem hidráulica, direção hidráulica, ar-condicionado, freios a disco ventilado na frente e tambor atrás, McPherson na frente e braços sobrepostos atrás. Airbags frontais, vidros e travas elétricos foram considerados presentes; confira o que o seu carro tem. ABS não faz parte do modelo.</p><p>Posições de componentes marcados como aproximados (central, reservatórios) e as quantidades de fixadores da lataria são as típicas; a geometria é simplificada. Dados técnicos: fichas técnicas da versão (potência, torque, medidas, pneus) e referências de oficina para o D17.</p>',

  data() {
const SYS = {
  motor: { n: 'Motor', c: '#D0602A', d: 'O D17 1.7 16V SOHC: bloco de alumínio, cabeçote com um comando e balancins, distribuição por correia e quatro coxins.' },
  ar:    { n: 'Ar e injeção', c: '#E3A21A', d: 'Do filtro de ar até os bicos: borboleta a cabo, válvula de marcha lenta e injeção sequencial PGM-FI.' },
  comb:  { n: 'Combustível', c: '#3F9D4A', d: 'Tanque, módulo da bomba com filtro e regulador (sem linha de retorno), bocal e cânister.' },
  ign:   { n: 'Ignição e sensores', c: '#7A5AE0', d: 'Central PGM-FI, quatro bobinas, velas e os sensores que a central lê.' },
  arref: { n: 'Arrefecimento', c: '#1F8FC0', d: 'Bomba d’água, válvula termostática, radiador com tampa de pressão, ventoinha e mangueiras.' },
  clima: { n: 'Ar-condicionado e ventilação', c: '#4F7FE0', d: 'Compressor, condensador, filtro secador, válvula de expansão, evaporador, filtro de cabine e ventilador.' },
  esc:   { n: 'Escapamento', c: '#8C735F', d: 'Coletor atrás do motor, catalisador logo embaixo, duas sondas, silenciosos e ponteira.' },
  ele:   { n: 'Elétrica', c: '#D6B000', d: 'Bateria, carga, partida, caixas de fusíveis, luzes e limpador.' },
  trans: { n: 'Transmissão', c: '#B0412A', d: 'Embreagem hidráulica, câmbio manual de 5 marchas com cabos, diferencial e semieixos.' },
  freio: { n: 'Freios', c: '#D2334A', d: 'Servo-freio, cilindro-mestre, discos ventilados na frente e tambores atrás.' },
  susp:  { n: 'Suspensão e rodas', c: '#9B3FA8', d: 'McPherson na frente; atrás, braços sobrepostos com braço superior, inferior e longitudinal.' },
  dir:   { n: 'Direção', c: '#1FA394', d: 'Pinhão e cremalheira com assistência hidráulica: bomba, reservatório e mangueiras.' },
  carro: { n: 'Carroceria', c: '#8FA6C4', d: 'Cada peça da lataria, como ela é presa e como sai: parafusada, soldada, colada ou encaixada.' },
  int:   { n: 'Interior e segurança', c: '#A8845A', d: 'Painel, instrumentos, airbags, bancos, cintos e acabamentos.' }
};
const PARTS = {};
function P(id, n, s, w, f, m, r) { PARTS[id] = { id, n, s, w, f, m, r: r ? r.split(' ') : [] }; }
function E(id, ft, e) { PARTS[id].ft = ft; PARTS[id].e = e; }
window.CAR_PARTS['civic-g7'](P, E);

/* ===== Fixadores ===== */
const FIX = {};
function F(id, n, parent, q, spec, torque, note) { FIX[id] = { id, n, p: parent, q, spec, t: torque, note }; }
F('fx_roda', 'Porcas de roda', 'rodas', 16, '4 por roda, furação 4×100, rosca M12×1,5', '108 N·m', 'Aperte em cruz com torquímetro e reaperte depois de uns 50 km. Pistola de impacto no máximo empena disco e estica prisioneiro.');
F('fx_cubo', 'Porcas dos cubos dianteiros', 'mangas', 2, 'Porca central do semieixo, travada no rasgo', '≈ 181 N·m (confirme no manual)', 'Porca nova e travada com punção. Aperto final com o carro no chão.');
F('fx_cabecote', 'Parafusos do cabeçote', 'cabecote', 10, 'Aperto em três etapas: torque inicial e dois ângulos', 'torque inicial + 90° + 90° (valores no manual Honda)', 'Ordem em espiral, de dentro para fora; afrouxe na ordem inversa. Rosca e cabeça untadas com óleo de motor.');
F('fx_bielas', 'Parafusos das capas de biela', 'bielas', 8, '2 por biela', 'torque + ângulo (manual)', 'Cada capa volta para a mesma biela, na mesma posição: marque antes.');
F('fx_mancais', 'Parafusos dos mancais', 'virabrequim', 10, 'Seguram o virabrequim', 'em etapas (manual)', 'Aperto do centro para as pontas.');
F('fx_carter', 'Parafusos do cárter', 'carter', 14, 'Pequenos, com cola de vedação', '≈ 12 N·m', 'Faces limpas e cordão de cola contínuo; espere a cura antes de abastecer.');
F('fx_bujao', 'Bujão do cárter', 'carter', 1, 'Com arruela de alumínio', '39 N·m', 'Arruela nova a cada troca.');
F('fx_velas', 'Rosca das velas', 'velas', 4, 'Rosca de 14 mm no alumínio', '18 N·m', 'Rosqueie à mão até encostar; motor frio.');
F('fx_bobinas', 'Parafusos das bobinas', 'bobinas', 4, '1 por bobina, na tampa de válvulas', '≈ 10 N·m', 'Não aperte demais: a rosca é na tampa de alumínio.');
F('fx_tampa_valv', 'Porcas da tampa de válvulas', 'tampa_valv', 6, 'Com arruelas de borracha', '≈ 10 N·m', 'Aperto em cruz; aperto demais deforma a junta e o vazamento volta.');
F('fx_coletor_esc', 'Porcas do coletor de escape', 'coletor_esc', 8, 'Prisioneiros no cabeçote', '≈ 31 N·m', 'Junta e porcas novas, aperto em cruz do centro para fora.');
F('fx_coletor_adm', 'Parafusos do coletor de admissão', 'coletor_adm', 6, 'Coletor de alumínio', '≈ 22 N·m', 'Junta nova e aperto cruzado.');
F('fx_galeria', 'Parafusos da galeria', 'galeria', 2, 'Seguram galeria e bicos', '≈ 12 N·m', 'Anéis dos bicos novos, untados com óleo de motor limpo.');
F('fx_tbi', 'Parafusos do corpo de borboleta', 'tbi', 4, '—', '≈ 22 N·m', 'Junta nova; confira a folga do cabo do acelerador depois.');
F('fx_polia_vira', 'Parafuso da polia do virabrequim', 'polia_vira', 1, 'Parafuso central, rosca e arruela untadas com óleo', 'muito alto (≈ 180 N·m, confirme)', 'Segure a polia com o suporte próprio; nunca trave o motor pela correia.');
F('fx_distrib', 'Fixações da distribuição', 'correia_dent', 5, 'Tensor, polia do comando e capas', 'polia ≈ 37 N·m; tensor ≈ 44 N·m', 'Ponto: marca UP da polia do comando para cima com as ranhuras alinhadas à face do cabeçote, e a marca da engrenagem do virabrequim com a seta da bomba de óleo.');
F('fx_alternador', 'Parafusos do alternador', 'alternador', 2, 'Suporte e articulação', '≈ 44 N·m e 24 N·m', 'Desligue o negativo da bateria antes.');
F('fx_partida', 'Parafusos do motor de partida', 'motor_partida', 2, 'Na carcaça do câmbio', '≈ 44 N·m', 'E a porca do cabo positivo no solenoide.');
F('fx_coxins', 'Fixações dos coxins do motor', 'coxim_dir', 8, 'Coxins direito, do câmbio, dianteiro e traseiro', 'alto (≈ 54–74 N·m, manual)', 'Troque com o motor apoiado por baixo e aperte com ele em repouso.');
F('fx_cambio', 'Parafusos câmbio–motor', 'cambio', 7, 'Na capa da embreagem', 'alto (≈ 64 N·m)', 'Removidos na troca de embreagem.');
F('fx_bujoes_cambio', 'Bujões do câmbio', 'cambio', 2, 'Dreno e abastecimento', 'dreno ≈ 39 N·m; abastecimento ≈ 44 N·m', 'Arruelas novas. O nível certo é até a borda do furo de abastecimento.');
F('fx_plato', 'Parafusos do platô', 'embreagem', 6, 'Em volta do platô', '≈ 25 N·m, em cruz', 'Centralize o disco com ferramenta antes do aperto final.');
F('fx_volante', 'Parafusos do volante do motor', 'volante_motor', 6, 'Com trava-química', 'alto (manual)', 'Parafusos novos.');
F('fx_compressor', 'Parafusos do compressor do ar', 'compressor', 3, 'No suporte do bloco', '≈ 22 N·m', 'Recolha o gás com máquina antes de abrir o circuito.');
F('fx_bomba_dir', 'Parafusos da bomba da direção', 'bomba_dir', 2, 'No suporte', '≈ 24 N·m', 'Tampe as mangueiras para não entrar sujeira.');
F('fx_pinca', 'Parafusos das pinças', 'pincas', 8, 'Pinos-guia e suporte, por lado', 'guias ≈ 23 N·m; suporte 108 N·m', 'Limpe e lubrifique os pinos-guia com graxa própria.');
F('fx_disco', 'Parafusos de posição do disco', 'discos', 4, '2 por disco, cabeça Phillips', 'leve (≈ 9 N·m)', 'Só posicionam o disco; quem segura é a roda. Costumam travar: use chave de impacto manual.');
F('fx_amort_d', 'Fixações dos amortecedores dianteiros', 'amort_diant', 10, '3 porcas no topo e 2 parafusos na manga, por lado', 'topo ≈ 39 N·m; manga alto (manual)', 'Desmonte só com compressor de molas.');
F('fx_bandeja', 'Fixações das bandejas', 'bandejas', 6, 'Buchas no subchassi e pivô', 'alto', 'Aperte as buchas com o peso do carro sobre as rodas.');
F('fx_subchassi', 'Parafusos do subchassi', 'subchassi', 4, 'Na carroceria', 'muito alto', 'Nunca solte sem apoiar o motor.');
F('fx_susp_t', 'Fixações dos braços traseiros', 'braco_inf_t', 8, 'Braço superior, inferior e longitudinal, por lado', 'alto', 'Aperto final com o peso do carro sobre as rodas, senão as buchas trabalham torcidas.');
F('fx_travessa_t', 'Parafusos da travessa traseira', 'travessa_tras', 4, 'Na carroceria', 'muito alto', 'Marque a posição antes de soltar.');
F('fx_amort_t', 'Fixações dos amortecedores traseiros', 'amort_tras', 6, '1 embaixo e 2 porcas em cima, por lado', 'alto', 'As porcas de cima ficam dentro do porta-malas, sob o acabamento.');
F('fx_bateria', 'Grampo e terminais da bateria', 'bateria', 3, 'Porcas de 10 mm', 'firme, sem esmagar', 'Solte o negativo primeiro e ligue por último.');
F('fx_escape', 'Braçadeiras e parafusos do escapamento', 'tubo_diant', 6, 'Flanges com molas, junta e luvas', 'médio', 'Porcas autotravantes e juntas novas.');
F('fx_tanque', 'Fixação do tanque', 'tanque', 4, 'Cintas e parafusos', 'médio', 'Tanque vazio e bateria desligada.');
F('fx_sonda', 'Rosca das sondas lambda', 'sonda', 2, 'Dianteira e traseira, rosca M18', '≈ 44 N·m', 'Pasta antitravamento só na rosca; sonda nova já vem com ela.');
F('fx_sens_ckp', 'Parafuso do sensor de rotação', 'sens_ckp', 1, '—', 'leve (≈ 12 N·m)', 'Anel de vedação bom.');
F('fx_bomba_agua', 'Parafusos da bomba d’água', 'bomba_agua', 5, 'Com anel de vedação', '≈ 12 N·m', 'Aproveite a troca da correia dentada.');
F('fx_termostato', 'Parafusos da carcaça da válvula termostática', 'termostato', 2, 'Com anel de borracha', '≈ 10 N·m', 'Sangre o sistema depois de completar.');
F('fx_volante_dir', 'Porca do volante', 'volante_dir', 1, 'Porca central', '≈ 39 N·m', 'Rodas retas e cabo espiral centrado.');
F('fx_airbag', 'Parafusos do módulo do airbag', 'airbag_mot', 2, 'Torx, pelas laterais do volante', '≈ 10 N·m', 'Bateria desligada há pelo menos 3 minutos. Guarde o módulo com a bolsa para cima.');
F('fx_estepe', 'Parafuso do estepe', 'estepe', 1, 'No centro da roda', 'à mão', 'Lubrifique a rosca.');
F('fx_mangueiras', 'Abraçadeiras das mangueiras', 'mang_sup', 10, 'Água, ar e vácuo', 'firme', 'Troque as oxidadas; abraçadeira frouxa é vazamento certo.');
F('fx_filtro_oleo', 'Rosca do filtro de óleo', 'filtro_oleo', 1, 'Rosca central', 'à mão + ¾ de volta (≈ 12 N·m)', 'Unte o anel de borracha com óleo novo.');
F('fx_ecu', 'Fixação da central', 'ecu', 2, 'Suporte', 'leve', 'Conectores secos e travados.');
F('fx_limpador', 'Porcas dos braços do limpador', 'limpador', 2, '1 por braço', '≈ 24 N·m', 'Marque a posição de repouso antes de tirar.');
F('fx_caixa_dir', 'Fixações da caixa de direção', 'caixa_dir', 6, 'Braçadeiras e porcas dos terminais', 'braçadeiras alto; terminais ≈ 43 N·m', 'Alinhamento obrigatório depois.');
F('fx_bancos', 'Parafusos dos bancos', 'bancos_diant', 8, '4 por banco', '≈ 32 N·m', 'Item de segurança.');
F('fx_cintos', 'Ancoragens dos cintos', 'cintos', 6, 'Parafusos de ancoragem', '≈ 32 N·m', 'Item de segurança: nada de improviso.');
F('fx_paralama', 'Parafusos dos para-lamas', 'paralamas', 14, 'Cerca de 7 por lado: 4 na borda de cima (sob o capô), 1 junto ao farol, 1 embaixo na soleira e 1 atrás, na coluna da porta', 'leve (chapa fina)', 'Para chegar a todos: roda, forro da caixa de roda, para-choque e farol fora.');
F('fx_parachoque', 'Parafusos e presilhas do para-choque dianteiro', 'para_choque_d', 11, 'Em cima (na travessa, sob o capô), nas caixas de roda e embaixo', 'leve', 'Solte todos e puxe as pontas para fora das guias laterais.');
F('fx_guias_pcd', 'Guias laterais do para-choque dianteiro', 'para_choque_d', 2, 'Suportes plásticos sob os faróis', 'encaixe deslizante', 'Guia quebrada deixa a ponta do para-choque solta e desalinhada.');
F('fx_parachoque_t', 'Parafusos e presilhas do para-choque traseiro', 'para_choque_t', 10, 'Em cima (com a tampa aberta), nas caixas de roda e embaixo', 'leve', 'Os de cima aparecem com a tampa do porta-malas aberta.');
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
F('fx_tampa', 'Parafusos das dobradiças da tampa do porta-malas', 'dobr_mala', 8, '2 na carroceria e 2 na tampa, por dobradiça', 'médio', 'Apoie a tampa e marque a posição antes de soltar.');
F('fx_fech_mala', 'Parafusos da fechadura e do batente do porta-malas', 'fech_mala', 4, '2 na fechadura (tampa) e 2 no batente (painel traseiro)', 'médio', 'Regule o batente se a tampa bater ou não fechar de primeira.');
F('fx_farol', 'Parafusos dos faróis', 'farois', 6, '3 por farol', 'leve', 'Regule o facho depois de recolocar.');
F('fx_lanterna', 'Porcas das lanternas', 'lanternas', 6, '3 por lanterna, por dentro do porta-malas', 'leve (plástico)', 'Vedação nova evita água no porta-malas.');
F('fx_grade', 'Presilhas da grade', 'grade', 4, 'Presilhas plásticas', 'encaixe por pressão', 'Solte as travas por trás, com o capô aberto.');
F('fx_grade_torpedo', 'Presilhas da grade do torpedo', 'grade_torpedo', 6, 'Presilhas e encaixe sob a borda do para-brisa', 'encaixe por pressão', 'Tire os braços do limpador antes.');
F('fx_travessa', 'Parafusos da travessa do painel frontal', 'travessa_frontal', 4, 'Nas pontas, junto aos faróis', 'médio', 'Solte só com radiador, condensador e faróis apoiados.');
F('fx_viga', 'Parafusos da viga de impacto dianteira', 'viga_dianteira', 4, 'Nas pontas das longarinas', 'alto', 'Depois de batida, confira a viga e as pontas das longarinas.');
F('fx_viga_t', 'Parafusos da viga de impacto traseira', 'viga_traseira', 4, 'No painel traseiro', 'alto', 'Depois de batida, confira o painel por dentro do porta-malas.');
F('fx_bocal', 'Parafusos do bocal de abastecimento', 'bocal', 2, 'Na caixa da portinhola', 'leve', 'Com o tanque vazio; o bocal também é preso por abraçadeira na mangueira do tanque.');
F('fx_solda_teto', 'Pontos de solda do teto', 'teto', 0, 'Nas bordas: sobre as portas, na frente e atrás', 'não se desmonta', 'Troca de teto é serviço de funilaria: os pontos são furados e a peça nova é soldada e selada.');
F('fx_solda_laterais', 'Pontos de solda das laterais', 'laterais', 0, 'Na coluna central, na soleira, na caixa de roda, no painel traseiro e junto ao teto e ao vidro traseiro', 'não se desmonta', 'Fissura na massa de vedação das emendas deixa entrar água e começa a ferrugem.');
F('fx_solda_soleiras', 'Pontos de solda das soleiras', 'soleiras', 0, 'Na aba de baixo e na borda das aberturas das portas', 'não se desmonta', 'A aba de baixo é onde o macaco apoia, nos pontos marcados.');
F('fx_solda_colunas', 'Pontos de solda das colunas', 'colunas', 0, 'Na borda das portas e na moldura do para-brisa', 'não se desmonta', 'Coluna amassada compromete a estrutura: reparo só em funilaria de confiança.');
F('fx_solda_painel_tras', 'Pontos de solda do painel traseiro', 'painel_tras', 0, 'Nas laterais e no assoalho do porta-malas', 'não se desmonta', 'Depois de batida na traseira, confira por dentro do porta-malas.');
F('fx_cola_parabrisa', 'Cola do para-brisa', 'para_brisa', '1 cordão', 'Cordão de poliuretano em volta do vidro', 'cura em algumas horas', 'Depois da troca, espere a cura antes de rodar ou bater as portas com força.');
F('fx_cola_vidro_tras', 'Cola do vidro traseiro', 'vidro_tras', '1 cordão', 'Cordão de poliuretano na moldura da carroceria', 'cura em algumas horas', 'Água pingando no porta-malas pode vir de falha nesse cordão.');
F('fx_frisos', 'Fita dos frisos laterais', 'frisos', '4 tiras', 'Fita dupla-face automotiva', 'pressão, com a lataria limpa e seca', 'Para recolocar: limpe com álcool isopropílico, fita nova e pressione bem.');

const FXKIND = {
  parafuso: ['Parafusos e porcas', 'Desmontam com ferramenta; o aperto certo importa.'],
  presilha: ['Presilhas', 'Encaixes plásticos de pressão; quebram com facilidade.'],
  guia: ['Guias de encaixe', 'Suportes onde as pontas das peças deslizam e se apoiam.'],
  solda: ['Pontos de solda', 'Chapas unidas de vez: fazem parte da estrutura.'],
  cola: ['Colas', 'Vidros fixos presos com cordão de poliuretano.'],
  fita: ['Fitas', 'Acabamentos colados com fita dupla-face.']
};
function K(k, ...ids) { ids.forEach(id => { FIX[id].k = k; }); }
K('presilha', 'fx_forros', 'fx_forro_porta', 'fx_forro_porta_t', 'fx_grade', 'fx_grade_torpedo');
K('guia', 'fx_guias_pcd', 'fx_guias_pct');
K('solda', 'fx_solda_teto', 'fx_solda_laterais', 'fx_solda_soleiras', 'fx_solda_colunas', 'fx_solda_painel_tras');
K('cola', 'fx_cola_parabrisa', 'fx_cola_vidro_tras');
K('fita', 'fx_frisos');
Object.values(FIX).forEach(f => { f.k = f.k || 'parafuso'; });

/* ===== Sintomas ===== */
const SYMPTOMS = [
  { id: 'lenta', n: 'Marcha lenta oscilando, alta ou o motor morre ao parar',
    d: 'No Civic dessa geração a marcha lenta é controlada por uma válvula que deixa passar ar por fora da borboleta. Sujeira de carvão e entradas falsas de ar são as causas mais comuns.',
    s: [
      ['iac', 'Válvula de marcha lenta suja ou travada: o defeito clássico do D17. A lenta sobe e desce e o motor morre ao ligar o ar.', 'Limpe a válvula e a borboleta; com scanner, veja se a lenta acompanha os comandos.'],
      ['tbi', 'Borboleta suja de carvão deixa passar menos ar com o pedal solto.', 'Olhe a borda da borboleta contra a luz.'],
      ['respiro', 'Válvula PCV presa ou mangueira rachada é entrada de ar.', 'Com o motor em lenta, a PCV chacoalha e o vácuo puxa o dedo.'],
      ['sens_ect', 'Se indicar frio com o motor quente, a central mantém a lenta acelerada.', 'Compare a leitura do scanner com o motor quente (perto de 90 °C).'],
      ['coletor_adm', 'Junta ressecada ou mangueira de vácuo solta.', 'Borrife limpa-contatos em volta com o motor ligado: se a rotação mudar, achou.'],
      ['balancins', 'Folga das válvulas de escape apertada demais: a válvula não fecha e a lenta fica irregular.', 'Confira a folga com o motor frio.'],
      ['compressor', 'Embreagem do compressor arrastando pesa no motor.', 'Desligue o ar e veja se a lenta estabiliza.']
    ] },
  { id: 'falha', n: 'Motor falhando, engasgando ou tremendo ao acelerar',
    d: 'Falha de ignição num cilindro aparece como engasgo e tremedeira, e a luz da injeção pode piscar. Pisca rápida é aviso para não acelerar forte: o catalisador sofre.',
    s: [
      ['bobinas', 'Bobina fraca é comum nesse motor. Trocando duas bobinas de lugar dá para ver se a falha muda de cilindro.', 'Scanner com falhas por cilindro (P0301 a P0304).'],
      ['velas', 'Vela gasta ou encharcada de óleo.', 'Tire e olhe: óleo no poço da vela é vedação da tampa de válvulas.'],
      ['tampa_valv', 'Vedação do poço da vela vazando joga óleo na vela e na bobina.', 'Óleo dentro do poço ao tirar a bobina.'],
      ['balancins', 'Válvula sem folga queima e tira compressão daquele cilindro.', 'Teste de compressão e conferência da folga.'],
      ['bicos', 'Bico entupido empobrece um cilindro.', 'Teste de vazão em bancada.'],
      ['correia_dent', 'Correia que pulou um dente atrasa o comando: o motor fica fraco e falha.', 'Confira as marcas de ponto.']
    ] },
  { id: 'consumo', n: 'Consumo acima do normal',
    d: 'Meça em dois ou três tanques seguidos, sempre enchendo até o primeiro clique. Trânsito pesado e ar-condicionado ligado aumentam bastante o consumo.',
    s: [
      ['termostato', 'Travado aberto, o motor nunca esquenta e a central mantém a mistura rica.', 'Ponteiro baixo e aquecimento fraco.'],
      ['sens_ect', 'Indicando frio o tempo todo, a central enriquece sem parar.', 'Leitura do scanner com o motor quente.'],
      ['sonda', 'Sonda lenta erra a correção da mistura.', 'Sinal da sonda no scanner oscilando rápido em lenta acelerada.'],
      ['filtro_ar', 'Filtro entupido estrangula o motor.', 'Olhe contra a luz.'],
      ['velas', 'Velas gastas queimam mal.', 'Quilometragem desde a última troca.'],
      ['pneus', 'Pneu murcho aumenta o atrito.', 'Calibre com os pneus frios.'],
      ['pincas', 'Pinça presa segura a roda.', 'Roda muito mais quente que as outras depois de rodar.'],
      ['embreagem', 'Embreagem patinando gasta sem avançar.', 'Giro sobe e o carro não acompanha.']
    ] },
  { id: 'ar', n: 'Ar-condicionado não gela ou o compressor não liga',
    d: 'Com o ar ligado e o motor em lenta, a polia da frente do compressor tem de girar junto com o miolo. Se só a polia externa gira, a embreagem não está acoplando.',
    s: [
      ['compressor', 'Folga da embreagem do compressor aumentada: defeito muito conhecido do Civic dessa época. Às vezes basta regular a folga com calço.', 'Olhe o miolo da polia com o ar ligado; meça a folga da embreagem.'],
      ['caixa_fus_motor', 'Relé ou fusível da embreagem do compressor.', 'Troque o relé pelo de outro circuito igual e teste.'],
      ['pressostato', 'Falta de gás faz o pressostato bloquear o compressor.', 'Manômetros na oficina de ar-condicionado.'],
      ['tubos_ac', 'Vazamento nas conexões ou nos anéis de vedação.', 'Mancha de óleo nas conexões; teste com corante ou detector.'],
      ['condensador', 'Condensador sujo ou ventoinha dele parada: o ar gela pouco no trânsito.', 'A ventoinha da direita deve ligar junto com o ar.'],
      ['vent_cond', 'Ventoinha do condensador queimada.', 'Ligue o ar parado e olhe se as duas ventoinhas giram.'],
      ['filtro_cabine', 'Filtro entupido deixa pouco ar passar.', 'Tire pelo porta-luvas e olhe.']
    ] },
  { id: 'vibracao', n: 'Vibração em marcha lenta ou trancos ao arrancar e trocar de marcha',
    d: 'O Civic G7 tem quatro coxins e eles cansam com a idade; com o ar ligado a vibração aumenta. Peça para alguém acelerar de leve com o carro freado e observe o motor.',
    s: [
      ['coxim_tras', 'O traseiro é o que mais sofre: tranco na arrancada e ao trocar de marcha.', 'Motor balançando para a frente e para trás ao acelerar parado.'],
      ['coxim_dir', 'Coxim direito hidráulico rompido (pode vazar óleo).', 'Rachaduras e óleo escorrendo.'],
      ['coxim_diant', 'Dianteiro gasto bate ao tirar o pé.', 'Batida ao desacelerar.'],
      ['coxim_cambio', 'Coxim do câmbio rachado.', 'Batida ao engatar e alavanca vibrando.'],
      ['bobinas', 'Cilindro falhando treme o motor inteiro.', 'Scanner.'],
      ['iac', 'Lenta baixa demais aumenta a vibração.', 'Rotação de lenta no conta-giros.']
    ] },
  { id: 'clique', n: 'Clique ao virar a chave e o painel apaga',
    d: 'A corrente da partida é enorme. Qualquer resistência no caminho derruba a tensão e o painel apaga.',
    s: [
      ['cabos_bat', 'Terminal oxidado ou frouxo, ou cabo terra ruim.', 'Limpe, aperte e teste de novo.'],
      ['bateria', 'Bateria fraca não segura a tensão sob carga.', 'Teste com carga numa autoelétrica.'],
      ['motor_partida', 'Solenoide ou escovas gastas.', 'Queda de tensão no motor de partida durante a partida.'],
      ['caixa_fus_motor', 'Fusível principal ou relé com mau contato.', 'Inspeção visual e de oxidação.'],
      ['ign_chave', 'Contato interno gasto no comutador.', 'Teste de continuidade na posição de partida.']
    ] },
  { id: 'naopega', n: 'Gira normalmente mas não pega',
    d: 'O motor de partida funciona; falta combustível, faísca ou a autorização do imobilizador.',
    s: [
      ['bomba_comb', 'Sem pressão de combustível não há partida.', 'Ao ligar a chave, a bomba deve zumbir por dois segundos.'],
      ['caixa_fus_painel', 'Fusível da bomba ou o relé principal da injeção.', 'Teste o relé principal: é um ponto conhecido em Hondas dessa época.'],
      ['ign_chave', 'Imobilizador sem ler a chave bloqueia a injeção.', 'Luz do imobilizador piscando no painel; teste a chave reserva.'],
      ['sens_ckp', 'Sem sinal de rotação não há injeção nem faísca.', 'Conta-giros parado durante a partida.'],
      ['correia_dent', 'Correia rompida: o motor gira leve e não pega.', 'Tire a tampa de óleo e veja se o comando gira na partida.'],
      ['bobinas', 'Sem faísca.', 'Teste de centelha.'],
      ['ecu', 'Central sem alimentação ou com água.', 'Diagnóstico com scanner.']
    ] },
  { id: 'temperatura', n: 'Ponteiro da temperatura subindo',
    d: 'Pare assim que puder e espere esfriar: rodar superaquecido empena o cabeçote. Nunca abra a tampa do radiador quente.',
    s: [
      ['vaso', 'Nível baixo é o começo de quase tudo.', 'Motor frio: confira o reservatório e o radiador.'],
      ['ventoinha', 'Ventoinha que não liga ferve o motor no trânsito.', 'Deve ligar perto do meio da escala, parado.'],
      ['tampa_rad', 'Tampa cansada deixa o líquido ferver e sair pelo reservatório.', 'Teste de pressão da tampa.'],
      ['termostato', 'Travado fechado, a água não chega ao radiador.', 'Mangueira superior fria com o motor quente.'],
      ['bomba_agua', 'Rotor gasto ou vazamento.', 'Gotas embaixo do lado direito do motor.'],
      ['radiador', 'Tanque plástico trincado ou colmeia entupida.', 'Marcas de vazamento nas emendas dos tanques.'],
      ['junta_cab', 'Gases da queima pressurizam o sistema.', 'Bolhas no reservatório com o motor ligado.']
    ] },
  { id: 'oleo', n: 'Luz de óleo acesa ou nível baixando',
    d: 'Luz vermelha de óleo com o motor ligado: desligue na hora.',
    s: [
      ['vareta', 'Primeiro confira o nível.', 'Carro no plano, motor frio.'],
      ['tampa_valv', 'Junta e vedações dos poços das velas vazando.', 'Óleo escorrendo na lateral do cabeçote ou dentro dos poços.'],
      ['virabrequim', 'Retentor da ponta da correia vazando suja a correia dentada.', 'Óleo na capa inferior da correia.'],
      ['carter', 'Bujão ou vedação do cárter.', 'Mancha no chão.'],
      ['sens_oleo', 'O interruptor pode falhar.', 'Medição com manômetro.'],
      ['bomba_oleo', 'Pescador entupido de borra.', 'Pressão real com manômetro.'],
      ['respiro', 'PCV entupida aumenta a pressão interna e empurra óleo pelas vedações.', 'Teste a PCV.']
    ] },
  { id: 'injecao', n: 'Luz da injeção acesa',
    d: 'A central gravou um código de falha. Um scanner comum (OBD) lê o código e aponta o sistema.',
    s: [
      ['catalisador', 'P0420: eficiência do catalisador baixa, muito comum no Civic dessa idade.', 'Compare as duas sondas no scanner: a traseira deve ficar quase parada.'],
      ['sonda', 'Sinal lento ou aquecimento da sonda com defeito.', 'Código de falha e gráfico da sonda.'],
      ['bobinas', 'Falha de ignição.', 'Contador de falhas por cilindro.'],
      ['bocal', 'Tampa do tanque mal fechada acusa vazamento de vapores.', 'Aperte até estalar e apague a falha.'],
      ['iac', 'Lenta fora do controle grava falha da válvula de marcha lenta.', 'Limpeza e conferência do conector.'],
      ['sens_map', 'Pressão do coletor fora de faixa.', 'Leitura com motor desligado deve ser a pressão ambiente.'],
      ['sens_ect', 'Sinal incoerente.', 'Leitura com motor frio e quente.']
    ] },
  { id: 'direcao', n: 'Direção pesada, gemendo ou vazando',
    d: 'Na direção hidráulica um gemido ao virar o volante parado costuma ser falta de fluido ou ar entrando pela mangueira de sucção.',
    s: [
      ['reserv_dir', 'Nível baixo faz a bomba gemer e a direção pesar.', 'Nível com o motor desligado.'],
      ['mang_dir', 'Mangueira de sucção ressecada deixa entrar ar; a de pressão sua óleo.', 'Bolhas no reservatório e marcas de óleo nas abraçadeiras.'],
      ['bomba_dir', 'Bomba gasta ou vazando pelo retentor.', 'Ruído que acompanha a rotação.'],
      ['correia_acess', 'Correia escorregando: pesa e chia ao virar parado.', 'Olhe o tensor e a correia.'],
      ['caixa_dir', 'Vazamento interno na caixa.', 'Coifas da caixa com óleo dentro.'],
      ['pneus', 'Pneu murcho pesa a direção.', 'Calibre com os pneus frios.']
    ] },
  { id: 'dianteira', n: 'Batidas na suspensão dianteira em buracos',
    d: 'Várias peças baratas fazem barulhos parecidos; vale conferir na ordem.',
    s: [
      ['barra_estab', 'Bieletas gastas: o toc-toc mais comum.', 'Chacoalhe a barra com o carro no chão.'],
      ['bandejas', 'Bucha traseira da bandeja rachada ou pivô com folga.', 'Folga com alavanca, no elevador.'],
      ['coxins_amort', 'Coxim ou rolamento do topo.', 'Estalo ao esterçar parado.'],
      ['amort_diant', 'Amortecedor sem ação.', 'O carro quica ao empurrar a frente.'],
      ['barras_axiais', 'Terminais e axiais com folga.', 'Folga na roda segurando nas laterais.'],
      ['coxim_diant', 'Tranco do motor pode parecer suspensão.', 'Batida ao arrancar e ao frear.']
    ] },
  { id: 'traseira', n: 'Barulho na traseira ou pneu traseiro gastando por dentro',
    d: 'A traseira de braços sobrepostos tem várias buchas; gastas, mudam a cambagem e o pneu gasta por dentro.',
    s: [
      ['braco_long_t', 'Bucha da frente do braço longitudinal: estalo ao frear e arrancar.', 'Folga com alavanca no elevador.'],
      ['braco_sup_t', 'Bucha do braço superior gasta muda a cambagem.', 'Medição de cambagem no alinhamento.'],
      ['braco_inf_t', 'Buchas do braço inferior.', 'Barulho em lombada devagar.'],
      ['amort_tras', 'Amortecedor batendo ou vazando.', 'Óleo escorrendo e batida seca.'],
      ['coxins_esc', 'Escapamento batendo no assoalho.', 'Chacoalhe a ponteira com o motor frio.'],
      ['cubo_tras', 'Rolamento traseiro roncando.', 'Ronco que aumenta com a velocidade.']
    ] },
  { id: 'freio', n: 'Freio chiando, puxando ou pedal baixo',
    d: 'Freio não espera: qualquer mudança de comportamento pede inspeção logo.',
    s: [
      ['pastilhas', 'Pastilha no fim chia pela lingueta de aviso.', 'Espessura menor que 3 mm.'],
      ['discos', 'Disco empenado vibra no pedal.', 'Espessura mínima gravada no disco.'],
      ['pincas', 'Pino-guia preso faz o carro puxar.', 'Roda quente e desgaste desigual.'],
      ['reserv_freio', 'Fluido velho ou nível baixo deixa o pedal baixo.', 'Nível e data da última troca.'],
      ['sapatas', 'Cilindro de roda vazando.', 'Umidade dentro do tambor.'],
      ['servo', 'Servo furado deixa o pedal duro.', 'Chiado no pedal ao frear.'],
      ['cil_mestre', 'Vedação interna gasta.', 'Pedal afundando devagar parado.']
    ] },
  { id: 'embreagem', n: 'Embreagem patinando, pedal no fundo ou marchas arranhando',
    d: 'A embreagem é hidráulica: além do disco e do platô, cilindros e fluido também entram na conta.',
    s: [
      ['embreagem', 'Disco gasto patina e trepida.', 'Em 3ª, acelere forte numa subida: o giro sobe e o carro não?'],
      ['cil_emb_mestre', 'Vedação interna gasta: o pedal afunda e as marchas arranham.', 'Nível do reservatório da embreagem e umidade no pedal.'],
      ['cil_emb_aux', 'Vazamento no auxiliar.', 'Umidade na coifa do cilindro sobre o câmbio.'],
      ['tubo_emb', 'Ar no circuito.', 'Sangria pelo parafuso do cilindro auxiliar.'],
      ['rol_emb', 'Rolamento gasto chia com o pedal pisado.', 'Ruído some ao soltar o pedal.'],
      ['cambio', 'Óleo errado deixa as marchas duras, principalmente a frio.', 'Confira se o óleo é o MTF próprio.']
    ] }
];

/* ===== Caminhos animados (ver o motor) ===== */
const Z1 = -0.214, CZ = [-0.214, -0.130, -0.046, 0.038];
const FLOWS = [
  { id: 'ar', n: 'O caminho do ar', c: '#E3A21A', d: 'Da frente do carro até a ponteira: o ar entra pela frente, queima com a gasolina e sai como gás de escape pelo corta-fogo.',
    leg: [['#3D9BE0', 'ar'], ['#E4572E', 'gases quentes']], motion: 'ar',
    steps: [
      ['tomada_ar', 'O ar entra pela frente do carro, do lado esquerdo.', { route: 1, c: '#3D9BE0' }],
      ['filtro_ar', 'A poeira fica no filtro.'],
      ['duto_ar', 'O ar limpo passa pelo sensor de temperatura e segue para a borboleta.', { route: 1 }],
      ['tbi', 'A borboleta, aberta pelo cabo do acelerador, dosa o ar; com o pé solto, a válvula de marcha lenta deixa passar o ar da lenta.'],
      ['coletor_adm', 'O coletor, na frente do motor, divide o ar entre os 4 cilindros; o sensor MAP mede o vácuo.', { route: 1 }],
      ['bicos', 'O bico pulveriza a gasolina na entrada das válvulas.', { at: [1.54, 0.69, Z1] }],
      ['valvulas', 'As duas válvulas de admissão abrem e a mistura entra.', { at: [1.445, 0.64, Z1] }],
      ['pistoes', 'O pistão comprime e a vela solta a faísca: combustão.', { at: [1.40, 0.61, Z1] }],
      ['valvulas', 'As duas válvulas de escape abrem e os gases saem para trás.', { at: [1.355, 0.64, Z1], c: '#E4572E' }],
      ['coletor_esc', 'Os gases se juntam no coletor, voltado para o corta-fogo.', { route: 1, pick: 'near' }],
      ['sonda', 'A sonda dianteira mede o oxigênio e avisa a central.', { at: [1.22, 0.58, -0.13] }],
      ['catalisador', 'O catalisador, logo embaixo, limpa os gases.', { at: [1.18, 0.45, -0.09] }],
      ['sonda2', 'A sonda traseira confere se o catalisador está trabalhando.', { at: [1.17, 0.31, -0.11] }],
      ['tubo_diant', 'O tubo dianteiro, com a junta flexível, leva os gases pelo túnel.', { route: 1 }],
      ['silenc_inter', 'Primeiro silencioso.'],
      ['tubo_tras', 'O tubo passa sobre a suspensão traseira.', { route: 1 }],
      ['silenc_tras', 'Saída pela ponteira, na traseira esquerda.', { route: 1 }]
    ] },
  { id: 'comb', n: 'O caminho do combustível', c: '#3F9D4A', d: 'Do bocal até os cilindros por uma linha só (o regulador fica dentro do tanque) e o retorno dos vapores pelo cânister.',
    leg: [['#3F9D4A', 'gasolina'], ['#9C6BD6', 'vapores do tanque']],
    steps: [
      ['bocal', 'Você abastece pelo bocal, na lateral direita.', { route: 1, at: [-1.85, 0.88, -0.83] }],
      ['tanque', 'A gasolina fica no tanque, sob o banco traseiro.'],
      ['bomba_comb', 'O módulo da bomba filtra e pressuriza: o filtro e o regulador ficam ali dentro.'],
      ['linhas_comb', 'Uma linha só leva a gasolina pelo assoalho até o cofre.', { route: 1, pick: [1, 0] }],
      ['galeria', 'A galeria distribui para os bicos.'],
      ['bicos', 'Os bicos injetam na sequência de ignição, perto das válvulas.', { at: CZ.map(z => [1.54, 0.69, z]) }],
      ['canister', 'Os vapores do tanque ficam no cânister.', { from: 1, via: { r: 'canister', i: 0 }, at: [-1.22, 0.25, 0.40], c: '#9C6BD6' }],
      ['purga', 'A central abre a purga e o motor queima esses vapores.', { via: { r: 'canister', i: 1 } }]
    ] },
  { id: 'forca', n: 'Da explosão até as rodas', c: '#B0412A', d: 'Como a força da combustão chega ao asfalto.', motion: 'forca',
    steps: [
      ['pistoes', 'A combustão empurra o pistão para baixo.', { at: [1.40, 0.57, Z1] }],
      ['bielas', 'A biela transmite o empurrão.', { at: [1.40, 0.48, Z1] }],
      ['virabrequim', 'O virabrequim transforma em giro.', { at: [1.40, 0.40, Z1] }],
      ['volante_motor', 'O volante suaviza os pulsos.', { at: [1.40, 0.40, 0.118] }],
      ['embreagem', 'A embreagem liga o motor ao câmbio.', { at: [1.40, 0.40, 0.148] }],
      ['cambio', 'O câmbio escolhe a relação.', { at: [1.34, 0.43, 0.32] }],
      ['diferencial', 'O diferencial divide entre as rodas.', { at: [1.29, 0.305, 0.20] }],
      ['semieixos', 'Os semieixos levam o giro até as rodas.', { route: 1 }],
      ['mangas', 'O cubo gira sobre o rolamento.', { at: [[1.31, 0.305, 0.715], [1.31, 0.305, -0.715]] }],
      ['pneus', 'E o pneu empurra o chão.', { at: [[1.31, 0.02, 0.735], [1.31, 0.02, -0.735]] }]
    ] },
  { id: 'agua', n: 'O circuito do arrefecimento', c: '#1F8FC0', d: 'O líquido tira calor do motor e o entrega ao ar — e à cabine, pelo aquecedor.',
    leg: [['#2F8FE0', 'líquido frio'], ['#E4572E', 'líquido quente']], motion: 'agua', mo: i => ({ engine: 0.45, fan: i >= 8 ? 1 : 0 }),
    steps: [
      ['bomba_agua', 'A bomba d’água, girada pela correia dentada, empurra o líquido.', { c: '#2F8FE0' }],
      ['bloco', 'Ele passa em volta dos cilindros…', { at: [1.40, 0.50, -0.20], c2: '#E4572E' }],
      ['cabecote', '…e pelo cabeçote, recolhendo calor.', { at: [1.40, 0.686, -0.05] }],
      ['mang_aquec', 'Uma parte vai sempre para a cabine…', { route: 1, pick: [0] }],
      ['rad_aquec', '…aquece o ar da ventilação…', { c2: '#2F8FE0' }],
      ['termostato', '…e volta ao motor pela carcaça da válvula termostática.', { via: { r: 'mang_aquec', i: 1 } }],
      ['mang_sup', 'Com o motor quente, o líquido sai do cabeçote pela mangueira superior…', { from: 2, route: 1, c: '#E4572E' }],
      ['radiador', '…e o radiador troca calor com o ar.', { at: [1.93, 0.36, 0.20], via: [[1.93, 0.62, 0.24], [1.93, 0.50, 0.22]], c2: '#2F8FE0' }],
      ['ventoinha', 'Parado no trânsito, a ventoinha ajuda.', { from: -1 }],
      ['mang_inf', 'A mangueira inferior leva o líquido frio de volta…', { route: 1, from: 7 }],
      ['termostato', '…para a válvula termostática, agora aberta, que libera o fluxo para a bomba.', { at: [1.505, 0.50, 0.115] }],
      ['tampa_rad', 'A tampa mantém o circuito pressurizado e manda o excesso para o reservatório.', { from: 7, at: [1.93, 0.68, 0.20] }],
      ['vaso', 'O reservatório guarda o excesso e o devolve quando o motor esfria.', { via: { r: 'vaso', i: 0 }, at: [1.84, 0.66, -0.56] }]
    ] },
  { id: 'clima', n: 'Como o ar-condicionado gela', c: '#4F7FE0', d: 'O gás é comprimido, esfria no condensador, expande no evaporador e rouba o calor do ar da cabine.',
    leg: [['#E4572E', 'gás quente sob pressão'], ['#2F8FE0', 'gás frio'], ['#3D9BE0', 'ar da cabine']], motion: 'clima', mo: i => ({ engine: 0.4, fan: i >= 3 ? 1 : 0 }),
    steps: [
      ['compressor', 'O compressor, ligado pela embreagem da polia, comprime o gás e ele esquenta.', { c: '#E4572E' }],
      ['tubos_ac', 'A linha de alta leva o gás quente…', { route: 1, pick: [0] }],
      ['condensador', '…ao condensador, na frente do radiador, onde ele perde calor e vira líquido.', { at: [1.968, 0.50, -0.10] }],
      ['vent_cond', 'A ventoinha do condensador ajuda quando o carro está parado.', { from: -1 }],
      ['filtro_secador', 'O filtro secador tira a umidade.', { from: 2 }],
      ['pressostato', 'O pressostato vigia a pressão e protege o compressor.'],
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
      ['bomba_comb', 'A bomba de combustível funciona por dois segundos e pressuriza a linha.', { via: { r: 'chicote', i: 1 } }],
      ['bateria', 'A bateria entrega a corrente da partida…', { from: -1, c: '#E8B90C' }],
      ['cabos_bat', '…pelo cabo grosso…', { route: 1, pick: [0] }],
      ['motor_partida', '…e o motor de partida gira o volante do motor.'],
      ['sens_ckp', 'O sensor de rotação avisa que o motor está girando; o de fase diz qual cilindro está em compressão.', { c: '#35B6C9' }],
      ['ecu', 'A central calcula injeção e ignição para cada cilindro.', { via: { r: 'chicote', i: 0 } }],
      ['bobinas', 'Cada bobina gera a alta tensão do seu cilindro…', { via: { r: 'chicote', i: 0 } }],
      ['velas', '…e as velas soltam a faísca. Pegou.', { at: CZ.map(z => [1.40, 0.70, z]), c: '#E8B90C' }],
      ['alternador', 'Agora o alternador repõe a carga da bateria.', { from: -1, out: [{ to: 3, via: { r: 'chicote', i: 0 } }] }]
    ] },
  { id: 'oleo', n: 'A lubrificação', c: '#D0602A', d: 'O óleo circula sob pressão e volta ao cárter por gravidade.', motion: 'oleo',
    steps: [
      ['carter', 'O óleo descansa no cárter.'],
      ['bomba_oleo', 'A bomba, na ponta do virabrequim, suga pelo pescador.', { via: { r: 'bomba_oleo', i: 0 } }],
      ['filtro_oleo', 'O filtro limpa.'],
      ['virabrequim', 'Mancais e virabrequim recebem óleo sob pressão.', { at: [-0.256, -0.172, -0.088, -0.004, 0.08].map(z => [1.40, 0.40, z]) }],
      ['bielas', 'As bielas também.', { at: CZ.map(z => [1.40, 0.44, z]) }],
      ['comando', 'Uma galeria sobe até o comando…', { at: [1.40, 0.752, -0.20] }],
      ['balancins', '…e os eixos de balancins.', { at: [1.436, 0.768, -0.10] }],
      ['sens_oleo', 'O interruptor vigia a pressão.', { from: 2 }],
      ['carter', 'Tudo escorre de volta ao cárter.', { from: 6, at: [1.40, 0.26, -0.10] }]
    ] },
  { id: 'freio', n: 'Do pedal às rodas', c: '#D2334A', d: 'Hidráulica: a força do pé vira pressão nas quatro rodas ao mesmo tempo.', motion: 'freio',
    steps: [
      ['pedal_freio', 'Você pisa no pedal.'],
      ['servo', 'O servo-freio multiplica a força com o vácuo do motor.'],
      ['cil_mestre', 'O cilindro-mestre transforma em pressão.'],
      ['tubos_freio', 'As tubulações levam o fluido às quatro rodas ao mesmo tempo.', { route: 1, pick: [2, 0, 3, 1, 4, 5, 6] }],
      ['pincas', 'Na frente, as pinças…', { both: 1 }],
      ['pastilhas', '…apertam as pastilhas…', { both: 1, from: -1 }],
      ['discos', '…contra os discos ventilados.', { both: 1, from: -1 }],
      ['sapatas', 'Atrás, os cilindros de roda abrem as sapatas…', { both: 1, from: 3 }],
      ['tambores', '…contra os tambores.', { both: 1, from: -1 }]
    ] },
  { id: 'dir', n: 'Do volante às rodas', c: '#1FA394', d: 'Pinhão e cremalheira com assistência hidráulica: a pressão da bomba empurra junto com você.', motion: 'dir',
    leg: [['#1FA394', 'movimento'], ['#C9A227', 'óleo da direção']],
    steps: [
      ['volante_dir', 'Você gira o volante.'],
      ['coluna', 'A coluna leva o giro até o pinhão.', { route: 1 }],
      ['bomba_dir', 'A bomba, puxada pela correia, mantém o óleo sob pressão…', { from: -1, c: '#C9A227' }],
      ['mang_dir', '…e a mangueira de pressão o leva até a válvula da caixa.', { route: 1, pick: [0] }],
      ['caixa_dir', 'A válvula manda o óleo para um lado do cilindro e a pressão empurra a cremalheira com você.', { at: [1.13, 0.37, -0.12], c: '#1FA394' }],
      ['barras_axiais', 'As barras axiais empurram…', { both: 1 }],
      ['mangas', '…as mangas, que esterçam…', { both: 1 }],
      ['pneus', '…as rodas.', { at: [[1.31, 0.305, 0.735], [1.31, 0.305, -0.735]] }],
      ['reserv_dir', 'O óleo volta ao reservatório e recomeça.', { from: 4, via: { r: 'mang_dir', i: 1 }, c: '#C9A227' }]
    ] }
];

/* ===== Plano de revisões ===== */
const MAINT = [
  { id: 'oleo', n: 'Óleo do motor e filtro', km: 10000, mo: 12, p: ['carter', 'filtro_oleo'], t: 'Uso severo (trajetos curtos, trânsito, poeira): 5.000 km ou 6 meses. Arruela do bujão nova.' },
  { id: 'filtro_ar', n: 'Filtro de ar', km: 20000, p: ['filtro_ar'] },
  { id: 'filtro_cabine', n: 'Filtro da cabine', km: 20000, mo: 12, p: ['filtro_cabine'] },
  { id: 'velas', n: 'Velas', km: 40000, p: ['velas'], t: 'Para velas comuns; de platina ou irídio duram bem mais.' },
  { id: 'valvulas', n: 'Folga de válvulas (conferir e regular)', km: 40000, p: ['balancins'], t: 'Motor frio: admissão 0,18–0,22 mm, escape 0,23–0,27 mm. Recomendação comum de oficina para o D17.' },
  { id: 'correia', n: 'Correia dentada, tensor, bomba d’água e retentores', km: 100000, mo: 72, p: ['correia_dent', 'tensor_dent', 'bomba_agua'], t: 'Motor de interferência: não deixe passar. Em uso severo ou com a correia velha de idade, antecipe.' },
  { id: 'acess', n: 'Correia de acessórios e tensor', km: 60000, p: ['correia_acess', 'tensor_acess'], t: 'Inspecione em toda revisão.' },
  { id: 'pcv', n: 'Válvula PCV', km: 40000, p: ['respiro'], t: 'Recomendação de oficina.' },
  { id: 'iac', n: 'Limpeza da borboleta e da válvula de marcha lenta', km: 40000, p: ['tbi', 'iac'], t: 'Recomendação de oficina; antes se a lenta oscilar.' },
  { id: 'bicos', n: 'Limpeza dos bicos', km: 40000, p: ['bicos'], t: 'Recomendação de oficina, não do plano de fábrica.' },
  { id: 'fluido_freio', n: 'Fluido de freio e da embreagem (DOT 3 ou 4)', mo: 36, p: ['reserv_freio', 'cil_emb_mestre'] },
  { id: 'arref', n: 'Líquido de arrefecimento', mo: 36, p: ['vaso', 'radiador'], t: 'Com o aditivo Honda original o intervalo de fábrica é maior; com aditivo comum, a cada 2 ou 3 anos.' },
  { id: 'cambio', n: 'Óleo do câmbio (MTF)', km: 60000, p: ['cambio'], t: 'Use o fluido de câmbio manual da Honda ou equivalente específico, cerca de 1,5 L.' },
  { id: 'psf', n: 'Fluido da direção hidráulica (conferir)', km: 20000, p: ['reserv_dir'], t: 'Troque se estiver escuro; use o fluido próprio da Honda (PSF).' },
  { id: 'ac', n: 'Ar-condicionado: higienização e conferência', mo: 12, p: ['evaporador', 'compressor'], t: 'Higienize o evaporador e confira a folga da embreagem do compressor.' },
  { id: 'pastilhas', n: 'Pastilhas e discos (inspeção)', km: 10000, p: ['pastilhas', 'discos'] },
  { id: 'lonas', n: 'Lonas e tambores (inspeção)', km: 20000, p: ['sapatas', 'tambores'] },
  { id: 'alinh', n: 'Alinhamento e balanceamento', km: 10000, p: ['pneus', 'barras_axiais'] },
  { id: 'rodizio', n: 'Rodízio de pneus', km: 10000, p: ['pneus'] },
  { id: 'coxins', n: 'Coxins e suspensão (inspeção)', km: 20000, p: ['coxim_tras', 'coxim_dir', 'bandejas', 'barra_estab', 'braco_long_t'] },
  { id: 'bateria', n: 'Teste da bateria', mo: 6, p: ['bateria'] },
  { id: 'palhetas', n: 'Palhetas do limpador', mo: 12, p: ['limpador'] },
  { id: 'lubrif', n: 'Lubrificar dobradiças, fechaduras e limitadores', mo: 12, p: ['dobradicas', 'fech_portas', 'fech_capo', 'dobr_capo', 'dobr_mala', 'fech_mala'] },
  { id: 'drenos', n: 'Limpar drenos do torpedo, portas, soleiras e do ar', mo: 6, p: ['grade_torpedo', 'portas', 'soleiras', 'evaporador'], t: 'Dreno do ar entupido molha o assoalho do passageiro, onde fica a central.' },
  { id: 'borrachas', n: 'Protetor nas borrachas de vedação', mo: 4, p: ['borrachas'] }
];

/* ===== Ficha técnica ===== */
const SPECS = [
  ['Motor', [['Código', 'D17 (no Brasil, D17Z2 na LX): 1.668 cm³, 4 cilindros, 16 válvulas, um comando no cabeçote, sem VTEC'], ['Diâmetro e curso', '75 mm e 94,4 mm'], ['Potência', '115 cv a 6.100 rpm'], ['Torque', 'cerca de 15,2 kgfm a 4.500 rpm'], ['Injeção', 'Honda PGM-FI multiponto sequencial, acelerador a cabo e válvula de marcha lenta'], ['Ignição', 'Direta, uma bobina por vela; ordem 1-3-4-2, cilindro 1 do lado da correia'], ['Distribuição', 'Correia dentada; motor de interferência'], ['Combustível', 'Gasolina']]],
  ['Transmissão', [['Câmbio', 'Manual de 5 marchas, engates por cabo'], ['Embreagem', 'Monodisco a seco, comando hidráulico'], ['Tração', 'Dianteira']]],
  ['Chassi', [['Suspensão dianteira', 'McPherson com molas helicoidais e barra estabilizadora'], ['Suspensão traseira', 'Braços sobrepostos (double wishbone) com molas helicoidais'], ['Freios', 'Discos ventilados na frente, tambores atrás; ABS não incluído no modelo'], ['Direção', 'Pinhão e cremalheira, hidráulica'], ['Pneus', '185/65 R15'], ['Rodas', 'Furação 4×100, porcas de 108 N·m']]],
  ['Dimensões', [['Comprimento', '4.455 mm'], ['Largura', '1.715 mm'], ['Altura', '1.455 mm'], ['Entre-eixos', '2.620 mm'], ['Peso', 'cerca de 1.150 kg (varia por versão)'], ['Porta-malas', 'cerca de 400 L (fichas variam)'], ['Tanque', '50 L']]],
  ['Fluidos', [['Óleo do motor', 'cerca de 3,3 L com filtro — a vareta manda'], ['Óleo do câmbio', 'cerca de 1,5 L de fluido de câmbio manual Honda (MTF)'], ['Freio e embreagem', 'DOT 3 ou DOT 4'], ['Direção hidráulica', 'Fluido Honda PSF ou equivalente indicado'], ['Ar-condicionado', 'R-134a']]],
  ['Regulagens', [['Folga de válvulas, motor frio', 'Admissão 0,18–0,22 mm, escape 0,23–0,27 mm'], ['Velas', 'NGK ZFR5F-11 ou Denso KJ16CR-L11 (ou equivalentes de longa duração), folga de 1,0 a 1,1 mm'], ['Porcas de roda', '108 N·m'], ['Bujão do cárter', '39 N·m']]],
  ['O carro', [['Versão', 'Civic LX 1.7 16V 2005, sedã, câmbio manual'], ['Considerado presente', 'Ar-condicionado, direção hidráulica, airbags frontais, vidros e travas elétricos'], ['Não modelado', 'ABS e VTEC (só na EX)']]]
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
  { id: 'dm_tampa', grp: 'Lataria', n: 'Tampa do porta-malas', part: 'tampa_mala', parts: ['tampa_mala'], side: 0,
    steps: [
      ['Abra a tampa e peça ajuda para segurá-la: as barras de torção empurram para cima.', { open: 'tail', l: 'Tampa' }],
      ['Desligue o cabo da fechadura e o conector, se houver, e risque a posição das dobradiças na tampa.', { l: 'Cabo e marcas', at: [-2.15, 1.0, 0] }],
      ['Com a tampa apoiada, solte os 2 parafusos de cada dobradiça na tampa.', { fx: [['fx_tampa', [1, 3, 5, 7]]], l: 'Parafusos das dobradiças' }],
      ['Tire a tampa. As dobradiças e as barras de torção continuam na carroceria.', { out: [['tampa_mala', [-0.4, 0.35, 0]]], l: 'Tampa do porta-malas' }]
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
      ['Abra a tampa do porta-malas e solte o acabamento lateral.', { open: 'tail', l: 'Acabamento' }],
      ['Solte as 3 porcas por dentro.', { fx: [['fx_lanterna', [0, 1, 2]]], l: 'Porcas da lanterna' }],
      ['Desligue o conector e tire a lanterna para trás.', { out: [['lanternas', [-0.28, 0, 0.06], 1]], l: 'Lanterna' }]
    ] },
  { id: 'dm_parachoque_t', grp: 'Lataria', n: 'Para-choque traseiro', part: 'para_choque_t', parts: ['para_choque_t', 'luz_placa'], side: 0,
    steps: [
      ['Abra a tampa do porta-malas.', { open: 'tail', l: 'Tampa' }],
      ['Solte os 4 parafusos e presilhas de cima.', { fx: [['fx_parachoque_t', [6, 7, 8, 9]]], l: 'Fixações de cima' }],
      ['Solte os parafusos das caixas de roda…', { fx: [['fx_parachoque_t', [0, 1, 3, 4]]], cam: [-0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['…e os de baixo.', { fx: [['fx_parachoque_t', [2, 5]]], cam: [-0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas para fora das guias laterais…', { fx: [['fx_guias_pct', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…desligue as luzes da placa e tire o para-choque para trás.', { out: [['para_choque_t', [-0.5, 0.02, 0]], ['luz_placa', [-0.5, 0.02, 0]]], l: 'Para-choque' }]
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
      ['Com o tanque quase vazio, abra a portinhola.', { l: 'Portinhola', at: [-1.85, 0.88, -0.84], cam: [-0.35, 0.3, -1] }],
      ['Por baixo do carro, solte a abraçadeira da mangueira do tanque.', { l: 'Abraçadeira', at: [-1.12, 0.30, -0.33], cam: [0.15, -0.9, -0.45] }],
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
      ['No sedã, o vidro traseiro é colado na carroceria com um cordão de poliuretano.', { fx: [['fx_cola_vidro_tras', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Com a luz de freio alta e os conectores do desembaçador soltos, o cordão é cortado…', { fx: [['fx_cola_vidro_tras', 'all']], l: 'Corte do cordão' }],
      ['…e o vidro sai com ventosas. Água no porta-malas pode vir de falha nesse cordão.', { out: [['vidro_tras', [-0.3, 0.35, 0]]], l: 'Vidro traseiro' }]
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
      ['…a lateral sai e a nova é soldada, com massa de vedação nas emendas.', { out: [['laterais', [-0.05, 0.05, 0.45], 1]], l: 'Lateral' }]
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
      ['Na volta: encoste as porcas à mão, aperte em cruz, desça o carro e dê o aperto final de 108 N·m.', { l: 'Aperto em cruz', at: [1.31, 0.305, 0.82] }]
    ] },
  { id: 'dm_pastilhas', grp: 'Mecânica', n: 'Pastilhas de freio dianteiras', part: 'pastilhas', parts: ['pastilhas', 'pincas', 'rodas', 'pneus', 'calotas'], side: 1,
    steps: [
      ['Com o carro no chão, afrouxe as porcas, levante, apoie em cavalete e tire a roda.', { fx: [['fx_roda', [0, 1, 2, 3]]], out: [['calotas', [0, -0.12, 0.55], 1, 0], ['pneus', [0, 0, 0.45], 1, 0], ['rodas', [0, 0, 0.45], 1, 0]], l: 'Roda' }],
      ['Solte os 2 pinos-guia da pinça.', { fx: [['fx_pinca', [0, 2]]], cam: [0.2, 0.2, 1], l: 'Pinos-guia' }],
      ['Tire a pinça e pendure com arame, sem forçar o flexível.', { out: [['pincas', [0.02, 0.16, 0.22], 1]], cam: [0.2, 0.2, 1], l: 'Pinça' }],
      ['Tire as pastilhas velhas do suporte e recolha o pistão devagar.', { out: [['pastilhas', [0.02, 0.12, 0.30], 1]], cam: [0.2, 0.2, 1], l: 'Pastilhas' }],
      ['Na volta: pastilhas novas com as molas, pinos lubrificados, guias a 23 N·m e pedal bombeado até ficar firme antes de andar.', { l: 'Montagem', at: [1.31, 0.40, 0.72] }]
    ] },
  { id: 'dm_velas', grp: 'Mecânica', n: 'Bobinas e velas', part: 'velas', parts: ['velas', 'bobinas'], side: 0,
    steps: [
      ['Motor frio. Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Desligue os conectores e solte o parafuso de cada bobina.', { fx: [['fx_bobinas', [0, 1, 2, 3]]], cam: [0.3, 1, -0.2], l: 'Parafusos das bobinas' }],
      ['Puxe as bobinas retas para cima.', { out: [['bobinas', [0, 0.22, 0]]], cam: [0.3, 1, -0.2], l: 'Bobinas' }],
      ['Sopre os poços e solte as velas com chave de vela longa.', { fx: [['fx_velas', [0, 1, 2, 3]]], cam: [0.3, 1, -0.2], l: 'Velas' }],
      ['Tire as velas. Na volta: rosqueie à mão, aperte a 18 N·m e encaixe cada bobina no seu cilindro.', { out: [['velas', [0, 0.26, 0]]], cam: [0.3, 1, -0.2], l: 'Velas fora' }]
    ] },
  { id: 'dm_filtro_ar', grp: 'Mecânica', n: 'Filtro de ar', part: 'filtro_ar', parts: ['filtro_ar'], side: 0,
    steps: [
      ['Abra o capô. A caixa do filtro fica sobre o câmbio, atrás da bateria.', { open: 'hood', l: 'Capô' }],
      ['Abra as presilhas da tampa da caixa.', { l: 'Presilhas', at: [1.62, 0.83, 0.40], cam: [0.3, 1, 0.3] }],
      ['Levante a tampa e tire o filtro, sem deixar cair sujeira no lado limpo.', { out: [['filtro_ar', [0, 0.25, 0]]], cam: [0.3, 1, 0.3], l: 'Filtro' }]
    ] },
  { id: 'dm_bateria', grp: 'Mecânica', n: 'Bateria', part: 'bateria', parts: ['bateria'], side: 0,
    steps: [
      ['Abra o capô com a ignição desligada. Tenha o código do rádio à mão.', { open: 'hood', l: 'Capô' }],
      ['Solte primeiro o terminal negativo (preto).', { fx: [['fx_bateria', [1]]], l: 'Negativo' }],
      ['Depois o positivo (vermelho).', { fx: [['fx_bateria', [0]]], l: 'Positivo' }],
      ['Solte o grampo de fixação.', { fx: [['fx_bateria', [2]]], l: 'Grampo' }],
      ['Tire a bateria para cima, sem inclinar. Na volta: positivo primeiro, negativo por último.', { out: [['bateria', [0, 0.36, 0]]], l: 'Bateria' }]
    ] }
];

/* ===== Explosão: para onde cada peça se afasta (x, y, z, simétrico) ===== */
const EXV = {
  soleiras: [0, -0.15, 0.75, 1], colunas: [0.15, 0.55, 0.55, 1], painel_tras: [-0.8, 0, 0], grade_torpedo: [0.3, 0.75, 0], borrachas: [0, 0.12, 0.5, 1], frisos: [0, 0.05, 1.25, 1], dobr_capo: [0.35, 0.65, 0.35, 1], dobr_mala: [-0.55, 0.75, 0.3, 1], barras_mala: [-0.5, 0.85, 0], fech_mala: [-0.95, 0.35, 0], forros_portas: [0, 0.1, 0.55, 1], forros_portas_tras: [0, 0.1, 0.55, 1],
  capo: [0.25, 0.8, 0], teto: [0, 0.9, 0], para_brisa: [0.35, 0.65, 0], vidro_tras: [-0.45, 0.6, 0], tampa_mala: [-0.6, 0.55, 0], para_choque_d: [0.9, -0.05, 0], para_choque_t: [-0.9, -0.05, 0], grade: [1.0, 0.1, 0], grade_inf: [1.05, -0.05, 0], viga_dianteira: [0.7, -0.05, 0], viga_traseira: [-0.7, -0.05, 0], travessa_frontal: [0.5, 0.05, 0], fech_capo: [0.5, 0.3, 0], monobloco: [0, 0, 0], corta_fogo: [0, 0.05, 0],
  paralamas: [0.15, 0.1, 0.8, 1], portas: [0.1, 0.05, 1.0, 1], portas_tras: [-0.1, 0.05, 1.0, 1], vidros_portas: [0.05, 0.35, 1.05, 1], vidros_portas_tras: [-0.05, 0.35, 1.05, 1], laterais: [-0.1, 0.05, 0.85, 1], retrovisores: [0.1, 0.2, 1.2, 1], caixas_roda: [0, 0, 0.5, 1], dobradicas: [0, 0, 0.85, 1], fech_portas: [-0.1, 0, 0.9, 1], maq_vidro: [0, 0.1, 0.8, 1], maq_vidro_tras: [0, 0.1, 0.8, 1], alto_falantes: [0, 0, 0.75, 1],
  farois: [0.6, 0.1, 0.35, 1], lanternas: [-0.6, 0.05, 0.35, 1], piscas_lat: [0.2, 0.1, 1.0, 1], luz_freio: [-0.4, 0.6, 0], luz_placa: [-0.9, 0.2, 0], bocal: [-0.2, 0.1, -0.6],
  painel: [-0.1, 0.55, 0], quadro: [-0.25, 0.7, 0], radio: [-0.3, 0.55, 0], comandos_clima: [-0.35, 0.5, 0], caixa_ar: [0.1, 0.35, 0], vent_interno: [0.1, 0.35, -0.15], filtro_cabine: [0, 0.3, -0.35], evaporador: [0.1, 0.45, -0.25], airbag_pass: [-0.15, 0.85, 0], airbag_mot: [-0.45, 0.45, 0], cabo_espiral: [-0.35, 0.35, 0], srs: [0, 0.35, 0], console: [0, 0.35, 0],
  bancos_diant: [0, 0.35, 0.45, 1], banco_tras: [-0.2, 0.35, 0], cintos: [0, 0.3, 0.6, 1], porta_malas: [-0.3, 0.3, 0], retrovisor_int: [0, 0.8, 0],
  carter: [0, -0.35, 0], bomba_oleo: [0, 0.2, -0.3], filtro_oleo: [0.45, 0.2, 0], vareta: [0.25, 1.0, 0.2], virabrequim: [0, 0.62, 0], polia_vira: [0, 0.62, -0.35], volante_motor: [0, 0.62, 0.35], bloco: [0, 0.95, 0], pistoes: [0, 1.55, 0], bielas: [0, 1.42, 0], junta_cab: [0, 1.75, 0], cabecote: [0, 1.9, 0], valvulas: [0, 2.1, 0], comando: [0, 2.2, 0], polia_comando: [0, 2.2, -0.3], balancins: [0, 2.3, 0], tampa_valv: [0, 2.45, 0], tampa_oleo: [0, 2.52, 0], bobinas: [0, 2.62, 0], velas: [0.12, 2.0, 0], sens_ect: [0, 2.0, 0.25], termostato: [0.1, 0.9, 0.3],
  correia_dent: [0, 1.1, -0.45], tensor_dent: [0, 1.1, -0.5], capas_correia: [0, 1.1, -0.62], bomba_agua: [0, 1.1, -0.38], correia_acess: [0, 0.95, -0.75], tensor_acess: [0, 0.95, -0.8], alternador: [0.35, 0.95, -0.7], compressor: [0.35, 0.3, -0.7], bomba_dir: [-0.35, 1.0, -0.7],
  coxim_dir: [0, 1.2, -0.4], coxim_cambio: [0, 0.9, 0.4], coxim_diant: [0.3, 0.2, 0], coxim_tras: [-0.3, 0.2, 0], respiro: [0.3, 2.4, 0],
  tomada_ar: [0.5, 1.4, 0.1], caixa_filtro: [0.3, 1.4, 0.1], filtro_ar: [0.3, 1.55, 0.1], duto_ar: [0.2, 1.45, 0.05], tbi: [0.3, 1.5, 0.1], iac: [0.3, 1.35, 0.15], tps: [0.4, 1.55, 0.1], cabo_acel: [0, 0.6, 0.1], coletor_adm: [0.4, 1.55, 0], galeria: [0.35, 1.4, 0], bicos: [0.35, 1.3, 0], sens_map: [0.4, 1.7, 0], sens_iat: [0.3, 1.6, 0.1], purga: [0.4, 1.6, -0.2], pedal_acel: [-0.15, 0.2, 0],
  ecu: [-0.2, 0.3, -0.3], sens_ckp: [0.2, 0.7, -0.5], sens_cmp: [0, 2.0, 0.35], sonda: [-0.45, 0.8, 0], sonda2: [-0.45, 0.4, 0], sens_oleo: [0.4, 0.9, 0], sens_vss: [0, 0.9, 0.5],
  cambio: [0, 0.6, 0.55], diferencial: [0, 0.4, 0.55], embreagem: [0, 0.62, 0.45], rol_emb: [0, 0.62, 0.55], semieixos: [0, 0, 0.25, 1], cabos_cambio: [-0.1, 0.3, 0.3], alavanca: [0, 0.4, 0], cil_emb_mestre: [-0.1, 0.6, 0.2], cil_emb_aux: [0.1, 0.8, 0.4], tubo_emb: [0, 0.6, 0.3], pedal_emb: [-0.15, 0.2, 0],
  radiador: [0.55, 0.3, 0], tampa_rad: [0.55, 0.6, 0.1], ventoinha: [0.35, 0.3, 0.1], vent_cond: [0.35, 0.3, -0.1], condensador: [0.75, 0.3, 0], filtro_secador: [0.75, 0.3, -0.3], pressostato: [0.7, 0.5, -0.3], tubos_ac: [0.2, 0.3, -0.3], valv_exp: [-0.1, 0.5, -0.3], vaso: [0.45, 0.9, -0.2], mang_sup: [0.3, 1.2, 0.25], mang_inf: [0.3, 0.2, 0.2], mang_aquec: [-0.2, 0.6, 0], rad_aquec: [0.1, 0.5, 0.1],
  coletor_esc: [-0.55, 1.0, 0], protetor: [-0.55, 1.2, 0], catalisador: [-0.55, 0.3, 0], tubo_diant: [0, -0.35, 0], silenc_inter: [0, -0.45, 0], tubo_tras: [0, -0.4, 0], silenc_tras: [-0.3, -0.4, 0], coxins_esc: [0, -0.2, 0],
  bateria: [0.3, 0.9, 0.3], cabos_bat: [0.1, 0.7, 0.2], caixa_fus_motor: [0.1, 1.0, 0.4], caixa_fus_painel: [0, 0.4, 0.4], motor_partida: [-0.35, 0.6, 0.35], chicote: [0, 1.8, 0], buzina: [0.8, -0.05, 0], limpador: [0.1, 0.5, 0], lavador: [0.7, 0.2, -0.2], ign_chave: [-0.2, 0.3, 0.1], comutadores: [-0.2, 0.3, 0.1],
  pedal_freio: [-0.15, 0.2, 0], servo: [-0.2, 0.5, 0.1], cil_mestre: [0.1, 0.6, 0.1], reserv_freio: [0.1, 0.8, 0.1], tubos_freio: [0, -0.1, 0], pincas: [0, 0.05, 0.55, 1], pastilhas: [0, 0.05, 0.48, 1], discos: [0, 0, 0.4, 1], tambores: [0, 0, 0.45, 1], sapatas: [0, 0, 0.3, 1], freio_mao: [0, 0.25, 0], mang_vacuo: [0, 0.7, 0.1],
  pneus: [0, 0, 0.85, 1], rodas: [0, 0, 0.75, 1], calotas: [0, 0, 1.0, 1], mangas: [0, 0, 0.25, 1], amort_diant: [0, 0.25, 0.2, 1], molas_diant: [0, 0.35, 0.3, 1], coxins_amort: [0, 0.55, 0.2, 1], bandejas: [0, -0.2, 0.15, 1], barra_estab: [0, -0.25, 0], subchassi: [0, -0.35, 0],
  braco_sup_t: [0, 0.25, 0.2, 1], braco_inf_t: [0, -0.2, 0.2, 1], braco_long_t: [0.15, -0.15, 0.2, 1], cubo_tras: [0, 0, 0.3, 1], amort_tras: [0, 0.3, 0.15, 1], molas_tras: [0, 0.4, 0.25, 1], travessa_tras: [0, -0.35, 0], estepe: [-0.3, 0.45, 0], macaco: [-0.2, 0.4, 0],
  volante_dir: [-0.3, 0.3, 0], coluna: [-0.1, 0.25, 0], caixa_dir: [0, -0.15, 0], barras_axiais: [0, -0.15, 0.15, 1], reserv_dir: [0.2, 0.8, -0.3], mang_dir: [-0.1, 0.5, -0.2],
  tanque: [0, -0.45, 0], bomba_comb: [0, 0.3, 0], boia: [0, -0.3, 0], linhas_comb: [0, -0.25, 0], canister: [0, -0.3, 0.3]
};

return { SYS, PARTS, FIX, FXKIND, SYMPTOMS, FLOWS, MAINT, SPECS, GUIDES, EXV };
  }
});
