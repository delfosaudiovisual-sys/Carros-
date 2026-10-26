/* ===== VW Gol G5 1.6 Power flex 2010/2011, hatch 4 portas, manual de 5 marchas, motor EA111 1.6 8V ===== */
(window.CARS = window.CARS || []).push({
  id: 'gol-g5', order: 4, storeKey: 'gol-g5', codePrefix: 'GOL', plate: 'GOL5G16',
  badge: '1.6', name: 'VW Gol', short: 'Gol', title: 'VW Gol Power', sub: '1.6 8V flex 2010/2011, manual de 5 marchas, hatch 4 portas, motor EA111',
  kmDefault: 0, size: [3.899, 1.656], wheelR: 0.298,
  paint: { color: 0x1f3f78, roughness: 0.3, metalness: 0.55, clearcoat: 1, clearcoatRoughness: 0.1 },
  oemLabel: 'Código VW', oemHint: 'Código VW: confirme pelo número do chassi (VIN) no balcão da concessionária ou no catálogo de peças; a VW muda códigos conforme o ano, o motor e os opcionais.',
  open: { hood: 'capo', tail: 'tampa_tras', door: 'portas', rdoor: 'portas_tras' },
  xrayExtra: ['farois', 'lanternas', 'piscas_lat', 'luz_freio', 'luz_placa', 'bocal', 'grade'],
  boxIds: ['monobloco', 'pneus', 'para_choque_d', 'para_choque_t', 'teto', 'retrovisores', 'laterais'],
  welcome: ['correia_dent', 'bobina', 'res_pf', 'bomba_dir', 'cabo_emb', 'eixo_tras'],
  profile: { top: [[-1.90, .605], [-1.87, .66], [-1.80, .945], [-1.72, 1.08], [-1.60, 1.275], [-1.49, 1.40], [-1.35, 1.44], [-0.5, 1.465], [0.14, 1.425], [0.35, 1.30], [0.60, 1.125], [0.86, .975], [1.4, .875], [1.80, .79], [1.97, .675], [2.0, .615]],
    rearLow: 0.35, frontLow: 0.29, floor: 0.19, wheels: [1.2325, -1.2325], arch: 0.37, wheelR: 0.298, wheelY: 0.292 },
  maintNote: 'Intervalos de referência para o EA111 1.6 flex em uso brasileiro. O plano da VW para o seu ano pode trazer prazos diferentes; itens marcados como recomendação de oficina não são de fábrica. O manual do seu carro manda.',
  about: '<p>A carroceria é um hatch genérico de quatro portas com as medidas do Gol G5 (3,899 × 1,656 × 1,464 m, entre-eixos de 2,465 m), em azul, com coluna traseira larga sem vidro lateral, tampa traseira com amortecedores a gás e rodas de liga aro 15. Não reproduz o desenho externo da marca.</p><p>A mecânica segue o 1.6 8V flex (família EA111): um comando no cabeçote com tuchos hidráulicos, correia dentada que também gira a bomba d’água, bobina dupla com cabos de vela, acelerador eletrônico, sensor MAP, partida a frio com reservatório de gasolina, câmbio manual de 5 marchas (MQ200) com engates por cabos, embreagem a cabo, direção hidráulica, discos ventilados na frente e tambores atrás, McPherson na frente e eixo de torção atrás. O escape sai pela frente do motor e a admissão fica atrás, voltada para o corta-fogo. Ar-condicionado e rodas de liga foram considerados presentes; ABS e airbags, não. Confira o seu.</p><p>Posições marcadas como aproximadas (central, reservatórios, cânister, filtro de combustível, válvula equalizadora) e as quantidades de fixadores da lataria são as típicas; a geometria é simplificada. Dados técnicos: fichas da versão (potência, torque, medidas, pneus), catálogos de peças do Gol G5 e referências de oficina do EA111.</p>',

  data() {
const SYS = {
  motor: { n: 'Motor', c: '#D0602A', d: 'O EA111 1.6 8V: bloco de ferro, cabeçote de alumínio com um comando, tuchos hidráulicos e correia dentada.' },
  ar:    { n: 'Ar e injeção', c: '#E3A21A', d: 'Do filtro de ar, em cima do motor, até os bicos: borboleta eletrônica, sensor MAP e injeção sequencial.' },
  comb:  { n: 'Combustível', c: '#3F9D4A', d: 'Tanque, bomba, filtro externo, cânister e a partida a frio do flex.' },
  ign:   { n: 'Ignição e sensores', c: '#7A5AE0', d: 'Central do motor, bobina dupla, cabos e velas, e os sensores que a central lê.' },
  arref: { n: 'Arrefecimento', c: '#1F8FC0', d: 'Bomba d’água na correia dentada, flange de água, válvula termostática, radiador e eletroventilador.' },
  clima: { n: 'Ar-condicionado e ventilação', c: '#4F7FE0', d: 'Compressor, condensador com filtro secador, válvula de expansão, evaporador, filtro de cabine e ventilador.' },
  esc:   { n: 'Escapamento', c: '#8C735F', d: 'Coletor na frente do motor, catalisador logo embaixo, duas sondas, silenciosos e ponteira.' },
  ele:   { n: 'Elétrica', c: '#D6B000', d: 'Bateria, carga, partida, fusíveis, luzes e limpadores.' },
  trans: { n: 'Transmissão', c: '#B0412A', d: 'Embreagem a cabo, câmbio manual de 5 marchas com cabos, diferencial e semieixos.' },
  freio: { n: 'Freios', c: '#D2334A', d: 'Servo-freio, cilindro-mestre de dois circuitos, válvula equalizadora, discos na frente e tambores atrás.' },
  susp:  { n: 'Suspensão e rodas', c: '#9B3FA8', d: 'McPherson na frente; atrás, eixo de torção com molas e amortecedores separados.' },
  dir:   { n: 'Direção', c: '#1FA394', d: 'Pinhão e cremalheira com assistência hidráulica: bomba na correia, mangueiras e reservatório.' },
  carro: { n: 'Carroceria', c: '#8FA6C4', d: 'Cada peça da lataria, como ela é presa e como sai: parafusada, soldada, colada ou encaixada.' },
  int:   { n: 'Interior', c: '#A8845A', d: 'Painel, instrumentos, bancos, cintos e acabamentos.' }
};
const PARTS = {};
function P(id, n, s, w, f, m, r) { PARTS[id] = { id, n, s, w, f, m, r: r ? r.split(' ') : [] }; }
function E(id, ft, e) { PARTS[id].ft = ft; PARTS[id].e = e; }
window.CAR_PARTS['gol-g5'](P, E);

/* ===== Fixadores ===== */
const FIX = {};
function F(id, n, parent, q, spec, torque, note) { FIX[id] = { id, n, p: parent, q, spec, t: torque, note }; }
F('fx_roda', 'Parafusos de roda', 'rodas', 16, '4 por roda, furação 4×100, rosca M12×1,5', '≈ 120 N·m (confirme no manual)', 'Aperte em cruz com torquímetro e reaperte depois de uns 50 km. Roda de liga pede o parafuso próprio para ela: o assento é diferente do da roda de aço.');
F('fx_cubo', 'Fixação central do semieixo no cubo', 'mangas', 2, 'Parafuso ou porca central, por lado', 'muito alto (confirme no manual)', 'Peça nova a cada desmontagem. Aperto final com o carro no chão.');
F('fx_cabecote', 'Parafusos do cabeçote', 'cabecote', 10, 'Aperto em etapas: torque e ângulo', 'em etapas com ângulo (valores no manual VW)', 'Parafusos de estiramento: sempre novos. Ordem em espiral, de dentro para fora; afrouxe na ordem inversa e com o motor frio.');
F('fx_bielas', 'Parafusos das capas de biela', 'bielas', 8, '2 por biela', 'torque + ângulo (manual)', 'Cada capa volta para a mesma biela, na mesma posição: marque antes.');
F('fx_mancais', 'Parafusos dos mancais', 'virabrequim', 10, 'Seguram o virabrequim', 'em etapas (manual)', 'Aperto do centro para as pontas.');
F('fx_carter', 'Parafusos do cárter', 'carter', 14, 'Em volta do cárter, com junta ou cola de vedação', 'baixo, em cruz (manual)', 'Faces limpas; com cola, espere a cura antes de abastecer o óleo.');
F('fx_bujao', 'Bujão do cárter', 'carter', 1, 'Com arruela de vedação', '≈ 30 N·m (confirme)', 'Arruela nova a cada troca.');
F('fx_velas', 'Rosca das velas', 'velas', 4, 'Rosca de 14 mm no cabeçote de alumínio', '≈ 25 N·m (confirme)', 'Rosqueie à mão até encostar; motor frio. Rosca forçada no alumínio estraga o cabeçote.');
F('fx_bobina', 'Parafusos da bobina', 'bobina', 3, 'No suporte da ponta esquerda do cabeçote', 'leve', 'Marque a saída de cada cabo antes de tirar a bobina.');
F('fx_tampa_valv', 'Fixação da tampa de válvulas', 'tampa_valv', 8, 'Porcas ou parafusos com arruelas de borracha', 'baixo, em espiral', 'Aperto demais deforma a junta e o vazamento volta.');
F('fx_coletor_esc', 'Porcas do coletor de escape', 'coletor_esc', 8, 'Prisioneiros no cabeçote, voltados para o radiador', 'médio (manual)', 'Junta e porcas novas, aperto em cruz do centro para fora.');
F('fx_coletor_adm', 'Parafusos do coletor de admissão', 'coletor_adm', 6, 'Atrás do cabeçote, voltados para o corta-fogo', 'baixo, em cruz', 'Juntas novas; coletor plástico trinca com aperto demais.');
F('fx_galeria', 'Parafusos da galeria', 'galeria', 2, 'Seguram galeria e bicos', 'leve', 'Anéis dos bicos novos, untados com óleo de motor limpo.');
F('fx_tbi', 'Parafusos do corpo de borboleta', 'tbi', 4, '—', 'leve, em cruz', 'Junta nova. Depois de soltar ou limpar, deixe a central reaprender a borboleta (ou faça a adaptação com o scanner).');
F('fx_polia_vira', 'Parafuso central do virabrequim', 'polia_vira', 1, 'Segura a engrenagem da correia dentada e a polia', 'muito alto, em etapas com ângulo (manual)', 'Parafuso de estiramento: sempre novo. Segure o virabrequim com a ferramenta própria, nunca pela correia.');
F('fx_capas', 'Parafusos e presilhas das capas da correia', 'capas_correia', 6, 'Capa de cima e capa de baixo', 'leve', 'Capa encaixada errado raspa na correia.');
F('fx_tensor_dent', 'Porca do tensor da correia dentada', 'tensor_dent', 1, 'Tensor com excêntrico e ponteiro de tensão', 'médio (manual)', 'Gire o excêntrico até o ponteiro coincidir com a marca, com o motor frio, e só então aperte a porca.');
F('fx_polia_comando', 'Parafuso da polia do comando', 'polia_comando', 1, 'Parafuso central', 'alto (manual)', 'Segure a polia com a ferramenta própria; não use a correia para travar.');
F('fx_bomba_agua', 'Parafusos da bomba d’água', 'bomba_agua', 3, 'Com anel de vedação, atrás da correia dentada', 'leve (manual)', 'Anel novo e faces limpas. Troque junto com a correia: a bomba é girada por ela.');
F('fx_flange', 'Parafusos da flange de água', 'flange_agua', 3, 'Na ponta esquerda do cabeçote', 'leve', 'Flange plástica: aperto leve e anel de vedação novo.');
F('fx_termostato', 'Parafusos da carcaça da válvula termostática', 'termostato', 2, 'Com anel de borracha', 'leve', 'Sangre o sistema depois de completar.');
F('fx_alternador', 'Parafusos do alternador', 'alternador', 2, 'Suporte na frente do motor', 'médio', 'Desligue o negativo da bateria antes.');
F('fx_partida', 'Parafusos do motor de partida', 'motor_partida', 2, 'Na carcaça do câmbio', 'médio', 'E a porca do cabo positivo no solenoide.');
F('fx_coxins', 'Fixações dos coxins do motor', 'coxim_dir', 7, 'Coxim direito, do câmbio e tirante traseiro', 'alto (manual)', 'Troque com o motor apoiado por baixo e aperte com ele em repouso. Parafusos de estiramento vão novos.');
F('fx_cambio', 'Parafusos câmbio–motor', 'cambio', 7, 'Na capa da embreagem', 'alto', 'Removidos na troca de embreagem.');
F('fx_bujao_cambio', 'Bujão de abastecimento do câmbio', 'cambio', 1, 'Na lateral da caixa; o nível certo é a borda do furo', 'médio (manual)', 'Carro no plano. Algumas caixas não têm bujão de dreno: confira no seu.');
F('fx_plato', 'Parafusos do platô', 'embreagem', 6, 'Em volta do platô', 'em cruz, aos poucos', 'Centralize o disco com ferramenta antes do aperto final.');
F('fx_volante', 'Parafusos do volante do motor', 'volante_motor', 6, 'Com trava-química', 'alto (manual)', 'Parafusos novos.');
F('fx_cabo_emb', 'Pontas do cabo da embreagem', 'cabo_emb', 2, 'Uma no pedal e outra na alavanca do câmbio, mais o batente no corta-fogo', 'encaixe com trava', 'O ajuste da folga é automático: não estique o cabo à força ao montar.');
F('fx_compressor', 'Parafusos do compressor do ar', 'compressor', 3, 'No suporte do bloco, na frente, embaixo', 'médio', 'Recolha o gás com máquina antes de abrir o circuito.');
F('fx_bomba_dir', 'Parafusos da bomba da direção', 'bomba_dir', 3, 'No suporte atrás do motor', 'médio', 'Tire a correia de acessórios antes. Tampe as mangueiras para não sujar o sistema.');
F('fx_mang_dir', 'Conexões das mangueiras da direção', 'mang_dir', 3, 'Na bomba, na caixa e no reservatório', 'médio; arruelas de vedação novas', 'Panos embaixo: o fluido estraga a pintura e borrachas.');
F('fx_pinca', 'Parafusos das pinças', 'pincas', 8, 'Pinos-guia e suporte, por lado', 'guias médio; suporte alto (manual)', 'Limpe e lubrifique os pinos-guia com graxa própria.');
F('fx_amort_d', 'Fixações dos amortecedores dianteiros', 'amort_diant', 8, 'Topo sob o capô e 2 parafusos na manga, por lado', 'topo médio; manga alto (manual)', 'Desmonte só com compressor de molas.');
F('fx_bandeja', 'Fixações das bandejas', 'bandejas', 6, 'Buchas no subchassi e pivô', 'alto', 'Aperte as buchas com o peso do carro sobre as rodas.');
F('fx_subchassi', 'Parafusos do subchassi', 'subchassi', 4, 'Na carroceria', 'muito alto', 'Nunca solte sem apoiar o motor.');
F('fx_eixo_t', 'Parafusos das buchas do eixo traseiro', 'eixo_tras', 2, '1 por lado, nos suportes da carroceria', 'alto', 'Aperto final com o peso do carro sobre as rodas, senão as buchas trabalham torcidas.');
F('fx_amort_t', 'Fixações dos amortecedores traseiros', 'amort_tras', 4, '1 embaixo, no eixo, e 1 em cima, na carroceria, por lado', 'alto', 'A de cima fica atrás do acabamento lateral do porta-malas.');
F('fx_valv_equal', 'Fixação da válvula equalizadora', 'valv_equal', 3, '2 parafusos no suporte e a mola ligada ao eixo', 'médio', 'Não mexa na regulagem sem saber o valor: a traseira pode travar numa freada forte.');
F('fx_bateria', 'Terminais e grampo da bateria', 'bateria', 3, 'Porcas de 10 mm; o porta-fusíveis vai preso no positivo', 'firme, sem esmagar', 'Solte o negativo primeiro e ligue por último.');
F('fx_escape', 'Braçadeiras e parafusos do escapamento', 'tubo_diant', 6, 'Flanges, junta e luvas', 'médio', 'Porcas autotravantes e juntas novas.');
F('fx_tanque', 'Fixação do tanque', 'tanque', 4, 'Cintas e parafusos', 'médio', 'Tanque vazio e bateria desligada.');
F('fx_filtro_comb', 'Conexões do filtro de combustível', 'filtro_comb', 3, 'Engates rápidos nas pontas e a braçadeira do suporte', 'encaixe com trava', 'Alivie a pressão da linha antes (fusível da bomba tirado e motor funcionando até morrer). Respeite a seta do fluxo.');
F('fx_sonda', 'Rosca das sondas lambda', 'sonda', 2, 'Dianteira e traseira, rosca M18', 'médio (≈ 50 N·m, confirme)', 'Pasta antitravamento só na rosca; sonda nova já vem com ela.');
F('fx_sens_ckp', 'Parafuso do sensor de rotação', 'sens_ckp', 1, '—', 'leve', 'Anel de vedação bom.');
F('fx_volante_dir', 'Porca do volante', 'volante_dir', 1, 'Porca central, sob a tampa da buzina', 'médio (manual)', 'Rodas retas; marque o volante e a coluna antes de tirar.');
F('fx_coluna', 'Fixações da coluna de direção', 'coluna', 4, 'Porcas sob o painel e parafuso da junta no pinhão', 'médio; junta alto', 'Marque a junta antes de soltar.');
F('fx_estepe', 'Parafuso do estepe', 'estepe', 1, 'No centro da roda', 'à mão', 'Lubrifique a rosca.');
F('fx_mangueiras', 'Abraçadeiras das mangueiras', 'mang_sup', 10, 'Água, ar e vácuo', 'firme', 'Troque as oxidadas; abraçadeira frouxa é vazamento certo.');
F('fx_filtro_oleo', 'Rosca do filtro de óleo', 'filtro_oleo', 1, 'Rosca central', 'à mão + ¾ de volta', 'Unte o anel de borracha com óleo novo.');
F('fx_ecu', 'Fixação da central', 'ecu', 2, 'Suporte', 'leve', 'Conectores secos e travados.');
F('fx_res_pf', 'Fixação do reservatório da partida a frio', 'res_pf', 2, 'Suporte na lateral do cofre', 'leve', 'Com o reservatório vazio; tampe a mangueira para não pingar gasolina.');
F('fx_vaso', 'Fixação do reservatório de expansão', 'vaso', 2, 'Parafuso e encaixe no suporte', 'leve', 'Motor frio antes de abrir qualquer coisa do arrefecimento.');
F('fx_limpador', 'Porcas dos braços dos limpadores', 'limpador', 3, '2 na frente e 1 atrás', 'médio', 'Marque a posição de repouso antes de tirar.');
F('fx_caixa_dir', 'Fixações da caixa de direção', 'caixa_dir', 6, 'Braçadeiras no subchassi e terminais nas mangas', 'alto', 'Alinhamento obrigatório depois.');
F('fx_bancos', 'Parafusos dos bancos', 'bancos_diant', 8, '4 por banco', 'alto', 'Item de segurança.');
F('fx_cintos', 'Ancoragens dos cintos', 'cintos', 6, 'Parafusos de ancoragem', 'alto', 'Item de segurança: nada de improviso.');
F('fx_paralama', 'Parafusos dos para-lamas', 'paralamas', 14, 'Cerca de 7 por lado: 4 na borda de cima (sob o capô), 1 junto ao farol, 1 embaixo na soleira e 1 atrás, na coluna da porta', 'leve (chapa fina)', 'Para chegar a todos: roda, forro da caixa de roda, para-choque e farol fora.');
F('fx_parachoque', 'Parafusos e presilhas do para-choque dianteiro', 'para_choque_d', 11, 'Em cima (sob o capô), nas caixas de roda e embaixo', 'leve', 'Solte todos e puxe as pontas para fora das guias laterais.');
F('fx_guias_pcd', 'Guias laterais do para-choque dianteiro', 'para_choque_d', 2, 'Suportes plásticos sob os faróis', 'encaixe deslizante', 'Guia quebrada deixa a ponta do para-choque solta e desalinhada.');
F('fx_parachoque_t', 'Parafusos e presilhas do para-choque traseiro', 'para_choque_t', 10, 'Em cima (com a tampa aberta), nas caixas de roda e embaixo', 'leve', 'Os de cima aparecem com a tampa traseira aberta.');
F('fx_guias_pct', 'Guias laterais do para-choque traseiro', 'para_choque_t', 2, 'Suportes plásticos sob as lanternas', 'encaixe deslizante', 'Puxe a ponta para fora com cuidado para não quebrar a guia.');
F('fx_forros', 'Presilhas dos forros das caixas de roda', 'caixas_roda', 12, 'Na borda do para-lama', 'encaixe por pressão', 'Presilhas plásticas quebram fácil; tenha reposição à mão.');
F('fx_capo', 'Parafusos das dobradiças do capô', 'dobr_capo', 8, '2 no capô e 2 na carroceria, por dobradiça', 'médio', 'Risque a posição antes de soltar: é o que acerta as frestas do capô.');
F('fx_fech_capo', 'Parafusos da fechadura do capô', 'fech_capo', 2, 'No painel frontal', 'médio', 'A fechadura tem folga de regulagem para alinhar com a lingueta.');
F('fx_dobradicas', 'Parafusos das dobradiças e limitadores', 'dobradicas', 36, 'Por porta: 4 na coluna, 4 na porta e 1 no limitador', 'alto', 'É na folga desses parafusos que se regula a fresta e o fechamento. Apoie a porta antes de soltar.');
F('fx_fech_portas', 'Parafusos das fechaduras e dos batentes', 'fech_portas', 20, 'Por porta: 3 na fechadura (borda da porta) e 2 no batente (coluna)', 'médio', 'O batente se move um pouco para regular o fechamento; marque antes de soltar.');
F('fx_retrovisor', 'Fixação dos retrovisores', 'retrovisores', 6, '3 porcas por espelho, por dentro da porta', 'leve', 'Segure o espelho por fora antes de soltar a última.');
F('fx_vidro_porta', 'Parafusos do vidro na máquina (portas dianteiras)', 'vidros_portas', 4, '2 por porta', 'leve', 'Com o forro tirado, posicione o vidro até os parafusos aparecerem nos furos do painel.');
F('fx_vidro_porta_t', 'Fixação do vidro na máquina (portas traseiras)', 'vidros_portas_tras', 4, '2 por porta', 'leve', 'O pedaço fixo, atrás da divisória, sai junto com a canaleta.');
F('fx_maq_vidro', 'Fixação das máquinas de vidro (dianteiras)', 'maq_vidro', 8, '4 por porta, no painel interno', 'leve', 'Desligue o conector do motor antes.');
F('fx_maq_vidro_t', 'Fixação das máquinas de vidro (traseiras)', 'maq_vidro_tras', 6, '3 por porta, no painel interno', 'leve', 'Com manivela, tire antes a manivela pela trava.');
F('fx_forro_porta', 'Presilhas dos forros das portas dianteiras', 'forros_portas', 16, 'Em volta do forro, mais parafusos no puxador', 'encaixe por pressão', 'Solte com espátula plástica rente às presilhas para não rasgar o forro.');
F('fx_forro_porta_t', 'Presilhas dos forros das portas traseiras', 'forros_portas_tras', 12, 'Em volta do forro, mais o parafuso do puxador', 'encaixe por pressão', 'Solte com espátula plástica rente às presilhas.');
F('fx_tampa', 'Parafusos das dobradiças da tampa traseira', 'dobr_tampa', 8, 'Porcas no teto (sob o forro) e parafusos na tampa', 'médio', 'Apoie a tampa e tire os amortecedores antes de soltar as dobradiças.');
F('fx_amort_tampa', 'Pinos dos amortecedores da tampa', 'amort_tampa', 4, 'Pinos esféricos com trava de mola', 'trava de mola', 'Levante a trava com uma chave de fenda pequena e puxe o amortecedor.');
F('fx_fech_tampa', 'Parafusos da fechadura e do batente da tampa', 'fech_tampa', 4, '2 na fechadura (na tampa) e 2 no batente (no painel traseiro)', 'médio', 'Regule o batente se a tampa bater ou não fechar de primeira.');
F('fx_farol', 'Parafusos dos faróis', 'farois', 6, '3 por farol', 'leve', 'Regule o facho depois de recolocar.');
F('fx_lanterna', 'Fixações das lanternas', 'lanternas', 6, '3 por lanterna: porcas por dentro e um pino de encaixe', 'leve (plástico)', 'Vedação nova evita água no porta-malas.');
F('fx_grade', 'Presilhas da grade', 'grade', 4, 'Presilhas plásticas', 'encaixe por pressão', 'Solte as travas por trás, com o capô aberto.');
F('fx_grade_torpedo', 'Presilhas da grade do torpedo', 'grade_torpedo', 6, 'Presilhas e encaixe sob a borda do para-brisa', 'encaixe por pressão', 'Tire os braços do limpador antes.');
F('fx_travessa', 'Parafusos do painel frontal', 'travessa_frontal', 4, 'Nas pontas, junto aos faróis', 'médio', 'Solte só com radiador, condensador e faróis apoiados.');
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

const FXKIND = {
  parafuso: ['Parafusos e porcas', 'Desmontam com ferramenta; o aperto certo importa.'],
  presilha: ['Presilhas', 'Encaixes plásticos de pressão; quebram com facilidade.'],
  guia: ['Guias de encaixe', 'Suportes onde as pontas das peças deslizam e se apoiam.'],
  pino: ['Pinos, travas e engates', 'Articulações e encaixes com trava.'],
  solda: ['Pontos de solda', 'Chapas unidas de vez: fazem parte da estrutura.'],
  cola: ['Colas', 'Vidros fixos presos com cordão de poliuretano.']
};
function K(k, ...ids) { ids.forEach(id => { FIX[id].k = k; }); }
K('presilha', 'fx_forros', 'fx_forro_porta', 'fx_forro_porta_t', 'fx_grade', 'fx_grade_torpedo');
K('guia', 'fx_guias_pcd', 'fx_guias_pct');
K('pino', 'fx_amort_tampa', 'fx_cabo_emb', 'fx_filtro_comb');
K('solda', 'fx_solda_teto', 'fx_solda_laterais', 'fx_solda_soleiras', 'fx_solda_colunas', 'fx_solda_painel_tras');
K('cola', 'fx_cola_parabrisa', 'fx_cola_vidro_tras');
Object.values(FIX).forEach(f => { f.k = f.k || 'parafuso'; });

/* ===== Sintomas ===== */
const SYMPTOMS = [
  { id: 'frio', n: 'Demora para pegar ou falha nas primeiras partidas do dia',
    d: 'Com etanol no tanque e motor frio, a partida depende da gasolina do reservatório da partida a frio e de a central saber a temperatura certa. Com gasolina no tanque, a partida a frio quase não atua.',
    s: [
      ['res_pf', 'Reservatório vazio ou com gasolina velha: com etanol e frio, o motor custa a pegar.', 'Confira o nível e renove a gasolina se tiver mais de 3 meses.'],
      ['bomba_pf', 'Bomba da partida a frio sem funcionar.', 'Na primeira partida fria deve haver um zumbido curto; teste o relé e o fusível.'],
      ['valv_pf', 'Eletroválvula travada aberta afoga o motor; fechada, não deixa a gasolina passar.', 'Nível do reservatório caindo sem uso indica válvula aberta.'],
      ['sens_ect', 'Leitura errada de temperatura faz a central errar a mistura e não acionar a partida a frio.', 'No scanner, com o motor frio, a leitura deve bater com a temperatura do dia.'],
      ['cabos_vela', 'Cabo com fuga de faísca falha mais com tempo úmido e motor frio.', 'No escuro, com o motor ligado, procure faíscas nos cabos.'],
      ['velas', 'Vela gasta falha mais com etanol e motor frio.', 'Quilometragem e aspecto das velas.'],
      ['bomba_comb', 'Pressão baixa demora a encher a linha.', 'Manômetro na linha: a pressão deve subir e se manter com a chave ligada.']
    ] },
  { id: 'lenta', n: 'Marcha lenta oscilando, alta ou o motor morre ao parar',
    d: 'A marcha lenta é feita pela própria borboleta eletrônica, e a central calcula o ar pelo sensor MAP. Sujeira na borboleta, ar que entra por fora (ar falso) e bateria desligada sem reaprendizado são as causas mais comuns.',
    s: [
      ['tbi', 'Carvão na borda da borboleta: a central não consegue dosar o ar certo. Depois de limpar, deixe a central reaprender.', 'Olhe a borda da borboleta contra a luz; o scanner mostra o ângulo em lenta.'],
      ['sens_map', 'Sensor MAP sujo de óleo do respiro mede errado.', 'Valores de pressão no scanner com o motor em lenta e desligado.'],
      ['respiro', 'Mangueira do respiro rachada é ar falso.', 'Com o motor em lenta, a mangueira não pode chiar nem estar mole.'],
      ['mang_vacuo', 'Mangueira do servo-freio rachada ou solta.', 'Chiado perto do servo; pedal do freio duro.'],
      ['coletor_adm', 'Junta do coletor ressecada.', 'Borrife limpa-contatos em volta com o motor ligado: se a rotação mudar, achou.'],
      ['bateria', 'Bateria desligada apaga o aprendizado da lenta.', 'Deixe o motor em lenta alguns minutos, com tudo desligado, antes de rodar.'],
      ['purga', 'Purga do cânister travada aberta.', 'Lenta piora logo depois de abastecer.']
    ] },
  { id: 'falha', n: 'Motor falhando, engasgando ou tremendo ao acelerar',
    d: 'Falha de ignição num cilindro aparece como engasgo e tremedeira, e a luz da injeção pode piscar. Pisca rápida é aviso para não acelerar forte: o catalisador sofre. Com bobina dupla, a falha costuma vir em dois cilindros (1 e 4, ou 2 e 3).',
    s: [
      ['cabos_vela', 'Cabo velho ou com terminal oxidado: a faísca foge para a massa.', 'Teste de resistência dos cabos; troque o jogo inteiro.'],
      ['bobina', 'Bobina fraca falha num par de cilindros.', 'Scanner com falhas por cilindro (P0301 a P0304) em pares.'],
      ['velas', 'Vela gasta ou com folga aberta.', 'Tire e olhe; confira se é a vela indicada para o flex.'],
      ['sens_map', 'Leitura errada de ar empobrece a mistura em aceleração.', 'Compare os valores com o motor quente.'],
      ['bicos', 'Bico entupido empobrece um cilindro.', 'Teste de vazão em bancada.'],
      ['filtro_comb', 'Filtro entupido derruba a pressão em aceleração forte.', 'Manômetro na linha durante um teste de rua; quilometragem do filtro.'],
      ['bomba_comb', 'Bomba cansada perde pressão em subida.', 'Manômetro na linha.']
    ] },
  { id: 'batida', n: 'Barulho no motor: "tec-tec" na partida, chiado ou chocalho',
    d: 'Um "tec-tec" rápido nos primeiros segundos depois de muito tempo parado é comum nos tuchos hidráulicos e some quando o óleo chega. Se o barulho fica, aumenta ou vem com luz de óleo, o problema é outro.',
    s: [
      ['tuchos', 'Tucho hidráulico travado ou vazando faz "tec-tec" que acompanha a rotação.', 'Barulho vem de cima e não some com o motor quente.'],
      ['carter', 'Óleo baixo, velho ou fora da especificação demora a encher os tuchos.', 'Confira o nível e a data da última troca.'],
      ['bomba_oleo', 'Pressão baixa: pescador entupido de borra.', 'Pressão real com manômetro.'],
      ['tensor_dent', 'Rolamento do tensor roncando atrás das capas.', 'Ronco no lado direito do motor; com a correia fora, gire o rolamento à mão.'],
      ['tensor_acess', 'Chiado ao ligar o ar ou esterçar parado.', 'Correia de acessórios brilhante ou trincada e tensor fraco.'],
      ['coletor_esc', 'Junta do coletor queimada faz "tic-tic" no frio.', 'Marcas de fuligem na junção do coletor com o cabeçote.'],
      ['protetor', 'Protetor de calor solto vibra como lata.', 'Bata de leve com a mão nos protetores, motor frio.']
    ] },
  { id: 'apagou', n: 'O motor apagou andando e não pega mais',
    d: 'Se a correia dentada arrebenta, o comando para e o motor apaga na hora: o motor de partida gira solto, mais rápido que o normal. Não insista na partida: pode empenar válvulas. Guincho.',
    s: [
      ['correia_dent', 'Correia rompida ou que pulou dentes: o comando parou.', 'Com a capa de cima tirada, veja se a polia do comando gira ao girar o motor.'],
      ['tensor_dent', 'Tensor travado ou solto deixa a correia pular dentes.', 'Inspeção junto com a correia.'],
      ['bomba_agua', 'Bomba d’água travada arrebenta a correia.', 'Polia da bomba presa ou com folga.'],
      ['sens_ckp', 'Sensor de rotação morto também apaga o motor.', 'Conta-giros parado durante a partida.'],
      ['bomba_comb', 'Bomba de combustível que parou.', 'Ao ligar a chave, a bomba deve zumbir por alguns segundos.'],
      ['caixa_fus_painel', 'Fusível ou relé da bomba ou da injeção.', 'Inspeção dos fusíveis e relés.']
    ] },
  { id: 'consumo', n: 'Consumo acima do normal',
    d: 'Com etanol o consumo é cerca de 30% maior que com gasolina: compare sempre com o mesmo combustível, enchendo até o primeiro clique em dois ou três tanques seguidos. Depois de trocar de combustível, a central leva alguns quilômetros para se adaptar.',
    s: [
      ['termostato', 'Travada aberta, o motor nunca esquenta e a central mantém a mistura rica.', 'Ponteiro baixo e aquecimento fraco.'],
      ['sens_ect', 'Indicando frio o tempo todo, a central enriquece sem parar.', 'Leitura do scanner com o motor quente.'],
      ['sonda', 'Sonda lenta erra a correção e a leitura do etanol.', 'Sinal da sonda no scanner oscilando rápido em lenta acelerada.'],
      ['sens_map', 'Sensor MAP descalibrado.', 'Valores no scanner.'],
      ['cabos_vela', 'Cabos fracos queimam mal a mistura.', 'Resistência dos cabos.'],
      ['filtro_ar', 'Filtro entupido estrangula o motor.', 'Olhe contra a luz.'],
      ['pneus', 'Pneu murcho aumenta o atrito.', 'Calibre com os pneus frios.'],
      ['pincas', 'Pinça presa segura a roda.', 'Roda muito mais quente que as outras depois de rodar.']
    ] },
  { id: 'ar', n: 'Ar-condicionado não gela ou o compressor não liga',
    d: 'Com o ar ligado e o motor em lenta, o miolo da polia do compressor tem de girar junto com a polia. O eletroventilador deve ligar junto com o ar.',
    s: [
      ['pressostato', 'Falta de gás: o sensor de pressão impede o compressor de ligar.', 'Manômetros na oficina de ar-condicionado.'],
      ['compressor', 'Embreagem do compressor com folga ou bobina aberta.', 'Olhe o miolo da polia com o ar ligado.'],
      ['caixa_fus_painel', 'Relé ou fusível do compressor.', 'Inspeção e troca do relé por outro igual para teste.'],
      ['ventoinha', 'Eletroventilador parado: o ar gela pouco no trânsito e a pressão sobe.', 'Ligue o ar parado e olhe o ventilador.'],
      ['tubos_ac', 'Vazamento nas conexões ou nos anéis de vedação.', 'Mancha de óleo nas conexões; teste com corante.'],
      ['condensador', 'Condensador sujo ou amassado.', 'Lave por trás com água de baixa pressão.'],
      ['filtro_cabine', 'Filtro entupido deixa pouco ar passar.', 'Tire pela entrada de ar, sob a grade do torpedo.']
    ] },
  { id: 'vibracao', n: 'Vibração em marcha lenta ou trancos ao arrancar e trocar de marcha',
    d: 'O conjunto se apoia em dois coxins em cima e num tirante embaixo; com o ar ligado a vibração aumenta. Peça para alguém acelerar de leve com o carro freado e observe o motor.',
    s: [
      ['coxim_tras', 'Tirante com bucha gasta: tranco na arrancada e ao tirar o pé.', 'Motor balançando para a frente e para trás ao acelerar parado.'],
      ['coxim_dir', 'Coxim direito rasgado.', 'Rachaduras e motor baixo desse lado.'],
      ['coxim_cambio', 'Coxim do câmbio rachado.', 'Batida ao engatar e alavanca vibrando.'],
      ['cabos_vela', 'Cilindro falhando treme o motor inteiro.', 'Scanner e teste dos cabos.'],
      ['tbi', 'Lenta baixa demais aumenta a vibração.', 'Rotação de lenta no conta-giros.']
    ] },
  { id: 'clique', n: 'Clique ao virar a chave e o painel apaga',
    d: 'A corrente da partida é enorme. Qualquer resistência no caminho derruba a tensão e o painel apaga.',
    s: [
      ['cabos_bat', 'Terminal oxidado ou frouxo, ou cabo terra ruim.', 'Limpe, aperte e teste de novo.'],
      ['caixa_fus_motor', 'Porta-fusíveis do positivo oxidado ou com fusível grande queimado.', 'Olhe os contatos sobre a bateria.'],
      ['bateria', 'Bateria fraca não segura a tensão sob carga.', 'Teste com carga numa autoelétrica.'],
      ['motor_partida', 'Solenoide ou escovas gastas.', 'Queda de tensão no motor de partida durante a partida.'],
      ['ign_chave', 'Contato interno gasto no comutador.', 'Teste de continuidade na posição de partida.']
    ] },
  { id: 'naopega', n: 'Gira normalmente mas não pega',
    d: 'O motor de partida funciona; falta combustível, faísca ou a autorização do imobilizador. Se gira solto e rápido demais, desconfie da correia dentada (veja "apagou andando").',
    s: [
      ['bomba_comb', 'Sem pressão de combustível não há partida.', 'Ao ligar a chave, a bomba deve zumbir por alguns segundos.'],
      ['ign_chave', 'Imobilizador sem ler a chave bloqueia a injeção.', 'Luz do imobilizador piscando no painel; teste a chave reserva.'],
      ['sens_ckp', 'Sem sinal de rotação não há injeção nem faísca.', 'Conta-giros parado durante a partida.'],
      ['res_pf', 'Com etanol e tempo frio, sem gasolina na partida a frio o motor não pega.', 'Confira o nível do reservatório.'],
      ['caixa_fus_painel', 'Fusível ou relé da injeção ou da bomba.', 'Inspeção dos fusíveis e relés sob o painel.'],
      ['bobina', 'Sem faísca.', 'Teste de centelha.'],
      ['correia_dent', 'Correia rompida: o motor gira sem compressão.', 'Polia do comando parada ao girar o motor.'],
      ['ecu', 'Central sem alimentação.', 'Diagnóstico com scanner.']
    ] },
  { id: 'temperatura', n: 'Ponteiro da temperatura subindo',
    d: 'Pare assim que puder e espere esfriar: rodar superaquecido empena o cabeçote. Nunca abra a tampa do reservatório com o motor quente.',
    s: [
      ['vaso', 'Nível baixo é o começo de quase tudo; a tampa do reservatório é que segura a pressão.', 'Motor frio: confira o nível e o teste de pressão da tampa.'],
      ['ventoinha', 'Eletroventilador que não liga ferve o motor no trânsito.', 'Deve ligar parado, perto do meio da escala, e sempre com o ar ligado.'],
      ['bomba_agua', 'Rotor gasto ou vazamento pelo dreno.', 'Gotas atrás da correia dentada, do lado direito.'],
      ['termostato', 'Travada fechada, a água não volta do radiador.', 'Mangueira inferior fria com o motor quente.'],
      ['flange_agua', 'Flange plástica trincada vaza só quente.', 'Marcas rosadas na ponta esquerda do cabeçote.'],
      ['radiador', 'Tanque plástico trincado ou colmeia entupida.', 'Marcas de vazamento nas emendas dos tanques.'],
      ['junta_cab', 'Gases da queima pressurizam o sistema.', 'Bolhas no reservatório com o motor ligado.']
    ] },
  { id: 'oleo', n: 'Luz de óleo acesa ou nível baixando',
    d: 'Luz vermelha de óleo com o motor ligado: desligue na hora. Óleo pingando sobre a correia dentada encurta a vida dela.',
    s: [
      ['vareta', 'Primeiro confira o nível.', 'Carro no plano, motor frio.'],
      ['tampa_valv', 'Junta da tampa vazando.', 'Óleo escorrendo pelo cabeçote, às vezes caindo no coletor de escape (cheiro de queimado).'],
      ['virabrequim', 'Retentor do virabrequim vazando no lado da correia.', 'Óleo na região da polia e dentro da capa da correia.'],
      ['carter', 'Bujão ou vedação do cárter.', 'Mancha no chão.'],
      ['sens_oleo', 'O interruptor pode falhar.', 'Medição com manômetro.'],
      ['bomba_oleo', 'Pescador entupido de borra.', 'Pressão real com manômetro.'],
      ['respiro', 'Respiro entupido aumenta a pressão interna e empurra óleo pelas vedações.', 'Mangueiras e conexões do respiro.']
    ] },
  { id: 'injecao', n: 'Luz da injeção acesa',
    d: 'A central gravou um código de falha. Um scanner comum (OBD) lê o código e aponta o sistema.',
    s: [
      ['sens_map', 'Sinal do sensor MAP fora de faixa.', 'Código de falha e valores com o motor quente.'],
      ['catalisador', 'P0420: eficiência do catalisador baixa.', 'Compare as duas sondas no scanner: a traseira deve ficar quase parada.'],
      ['sonda', 'Sinal lento ou aquecimento da sonda com defeito.', 'Código de falha e gráfico da sonda.'],
      ['cabos_vela', 'Falha de ignição.', 'Contador de falhas por cilindro.'],
      ['tbi', 'Borboleta suja ou sem adaptação.', 'Limpeza e adaptação.'],
      ['sens_ect', 'Sensor de temperatura com leitura impossível.', 'Código de falha e leitura com o motor frio.'],
      ['bocal', 'Tampa do tanque mal fechada.', 'Aperte até estalar e apague a falha.']
    ] },
  { id: 'direcao', n: 'Direção pesada, chiando ou com folga',
    d: 'Na direção hidráulica, a bomba precisa da correia de acessórios e de fluido no nível certo. Chiado ao esterçar parado quase sempre é correia patinando ou fluido baixo.',
    s: [
      ['reserv_dir', 'Fluido abaixo do mínimo: a bomba chia e a direção pesa.', 'Nível com o motor frio; procure vazamentos.'],
      ['correia_acess', 'Correia patinando ou frouxa: chiado ao esterçar parado.', 'Correia brilhante ou com trincas.'],
      ['bomba_dir', 'Bomba cansada: direção pesada em manobra.', 'Teste de pressão na oficina.'],
      ['mang_dir', 'Mangueira suando ou vazando nas conexões.', 'Óleo nas conexões e embaixo do motor.'],
      ['caixa_dir', 'Vazamento interno ou coifa rasgada na caixa.', 'Coifas molhadas de fluido; folga na cremalheira.'],
      ['barras_axiais', 'Terminais e axiais com folga.', 'Folga na roda segurando nas laterais.'],
      ['pneus', 'Pneu murcho pesa a direção.', 'Calibre com os pneus frios.'],
      ['coxins_amort', 'Rolamento do coxim travado endurece o volante e estala.', 'Estalo virando o volante parado.']
    ] },
  { id: 'dianteira', n: 'Batidas na suspensão dianteira em buracos',
    d: 'Várias peças baratas fazem barulhos parecidos; vale conferir na ordem.',
    s: [
      ['barra_estab', 'Bieletas gastas: o toc-toc mais comum.', 'Chacoalhe a barra com o carro no chão.'],
      ['bandejas', 'Bucha da bandeja rachada ou pivô com folga.', 'Folga com alavanca, no elevador.'],
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
  { id: 'freio', n: 'Freio chiando, puxando, traseira travando ou pedal baixo',
    d: 'Freio não espera: qualquer mudança de comportamento pede inspeção logo. Sem ABS, numa freada forte as rodas podem travar: quem dosa a traseira é a válvula equalizadora.',
    s: [
      ['pastilhas', 'Pastilha no fim chia pela lingueta de aviso.', 'Espessura menor que 3 mm.'],
      ['discos', 'Disco empenado vibra no pedal em freadas leves.', 'Espessura mínima gravada no disco.'],
      ['pincas', 'Pino-guia preso faz o carro puxar.', 'Roda quente e desgaste desigual.'],
      ['valv_equal', 'Válvula desregulada ou presa: traseira travando cedo ou freando pouco.', 'Regulagem pela mola, com o carro na carga indicada.'],
      ['reserv_freio', 'Fluido velho ou nível baixo deixa o pedal baixo.', 'Nível e data da última troca.'],
      ['sapatas', 'Cilindro de roda vazando ou sapatas desreguladas.', 'Umidade dentro do tambor; alavanca do freio de mão subindo demais.'],
      ['servo', 'Servo furado deixa o pedal duro.', 'Chiado no pedal ao frear.'],
      ['cil_mestre', 'Vedação interna gasta.', 'Pedal afundando devagar parado.']
    ] },
  { id: 'embreagem', n: 'Embreagem patinando, pedal duro ou marchas arranhando',
    d: 'A embreagem é acionada por cabo: além do disco e do platô, o cabo, o pedal e o garfo entram na conta. Pedal pesado e rangendo quase sempre é o cabo.',
    s: [
      ['embreagem', 'Disco gasto patina e trepida.', 'Em 4ª, acelere forte numa subida: o giro sobe e o carro não?'],
      ['cabo_emb', 'Cabo ressecado ou desfiando: pedal duro, rangido e acoplamento irregular.', 'Pedal pesado que melhora com o cabo solto do garfo.'],
      ['garfo_emb', 'Bucha do garfo gasta.', 'Folga na alavanca sobre o câmbio.'],
      ['rol_emb', 'Rolamento gasto chia com o pedal pisado.', 'Ruído que muda ao pisar no pedal.'],
      ['pedal_emb', 'Bucha do pedal gasta ou ajuste automático travado.', 'Pedal com folga lateral ou que não volta.'],
      ['cambio', 'Óleo baixo deixa as marchas duras.', 'Nível até a borda do furo de abastecimento.']
    ] },
  { id: 'engate', n: 'Alavanca imprecisa ou marcha que escapa',
    d: 'As marchas são engatadas por dois cabos: um escolhe a fila e o outro engata. Folga nos cabos, no trambulador ou nos coxins deixa o engate impreciso.',
    s: [
      ['cabos_cambio', 'Cabos desregulados ou com terminais gastos.', 'Regulagem pelo procedimento do manual, com a alavanca em ponto morto.'],
      ['alavanca', 'Buchas do trambulador gastas: alavanca "boba".', 'Folga na base da alavanca.'],
      ['coxim_cambio', 'Coxim do câmbio rachado faz a marcha escapar.', 'Motor balançando ao acelerar e soltar.'],
      ['embreagem', 'Embreagem que não desacopla arranha as marchas.', 'Ruído ao engatar a ré com o carro parado.'],
      ['cambio', 'Sincronizador gasto.', 'Arranhado sempre na mesma marcha.']
    ] }
];

/* ===== Caminhos animados ===== */
const EX = 1.33, EY = 0.36, XFA = 1.2325, WY = 0.292;
const CZ = [-0.215, -0.133, -0.051, 0.031], Z1 = CZ[0], MAINS = [-0.256, -0.174, -0.092, -0.010, 0.072];
const FLOWS = [
  { id: 'ar', n: 'O caminho do ar', c: '#E3A21A', d: 'Da frente do carro até a ponteira: o ar desce por trás do motor, queima com o combustível e sai pela frente, como gás de escape.',
    leg: [['#3D9BE0', 'ar'], ['#E4572E', 'gases quentes']], motion: 'ar',
    steps: [
      ['tomada_ar', 'O ar entra pela frente do cofre, atrás da grade.', { route: 1, c: '#3D9BE0' }],
      ['caixa_filtro', 'Vai para a caixa do filtro, que fica em cima do motor, como uma tampa.'],
      ['filtro_ar', 'A poeira fica no filtro.'],
      ['duto_ar', 'O ar limpo desce por trás do motor até a borboleta.', { route: 1 }],
      ['tbi', 'A borboleta eletrônica, aberta pela central conforme o pedal, dosa o ar — inclusive na marcha lenta.'],
      ['coletor_adm', 'O coletor, atrás do motor, divide o ar entre os 4 cilindros.', { route: 1 }],
      ['sens_map', 'O sensor MAP mede o vácuo e a temperatura do ar: é com eles que a central calcula quanto ar entrou.', { at: [1.11, 0.758, -0.10] }],
      ['bicos', 'O bico pulveriza o combustível na entrada da válvula.', { at: [1.205, 0.66, Z1] }],
      ['valvulas', 'A válvula de admissão abre e a mistura entra.', { at: [EX - 0.012, 0.62, Z1] }],
      ['pistoes', 'O pistão comprime e a vela solta a faísca: combustão.', { at: [EX, 0.585, Z1] }],
      ['valvulas', 'A válvula de escape abre e os gases saem pela frente.', { at: [EX + 0.012, 0.62, Z1], c: '#E4572E' }],
      ['coletor_esc', 'Os gases se juntam no coletor, voltado para o radiador.', { route: 1, pick: 'near' }],
      ['sonda', 'A sonda dianteira mede o oxigênio: a central corrige a mistura e descobre a proporção de etanol.', { at: [1.52, 0.56, -0.13] }],
      ['catalisador', 'O catalisador, logo abaixo, limpa os gases.', { at: [1.54, 0.44, -0.10] }],
      ['sonda2', 'A sonda traseira confere se o catalisador está trabalhando.', { at: [1.53, 0.30, -0.11] }],
      ['tubo_diant', 'O tubo dianteiro passa por baixo do motor e, com a junta flexível, segue pelo túnel.', { route: 1 }],
      ['silenc_inter', 'Primeiro silencioso.'],
      ['tubo_tras', 'O tubo passa sobre o eixo traseiro.', { route: 1 }],
      ['silenc_tras', 'Saída pela ponteira, na traseira esquerda.', { route: 1 }]
    ] },
  { id: 'comb', n: 'O caminho do combustível', c: '#3F9D4A', d: 'Do bocal até os cilindros por uma linha só, passando pelo filtro; o atalho da partida a frio para o etanol e o retorno dos vapores pelo cânister.',
    leg: [['#3F9D4A', 'combustível do tanque'], ['#E0A526', 'gasolina da partida a frio'], ['#9C6BD6', 'vapores do tanque']],
    steps: [
      ['bocal', 'Você abastece pelo bocal, na lateral traseira direita.', { route: 1 }],
      ['tanque', 'O combustível fica no tanque, sob o banco traseiro.'],
      ['bomba_comb', 'A bomba elétrica, dentro do tanque, empurra o combustível sob pressão.'],
      ['linhas_comb', 'A linha sai do tanque pelo assoalho…', { route: 1, pick: [1] }],
      ['filtro_comb', '…passa pelo filtro, que segura a sujeira…'],
      ['linhas_comb', '…e segue até o cofre. Não há linha de retorno.', { route: 1, pick: [2, 0] }],
      ['galeria', 'A galeria distribui para os bicos.'],
      ['bicos', 'Os bicos injetam na sequência de ignição, perto das válvulas.', { at: CZ.map(z => [1.205, 0.66, z]) }],
      ['res_pf', 'Partida a frio com etanol: a gasolina do reservatório…', { from: -1, c: '#E0A526' }],
      ['bomba_pf', '…é empurrada pela bombinha…'],
      ['valv_pf', '…liberada pela eletroválvula…', { via: { r: 'tubos_pf', i: 0 } }],
      ['tubos_pf', '…e chega a cada cilindro pelos tubinhos.', { route: 1, pick: [1, 2, 3, 4] }],
      ['canister', 'Os vapores do tanque ficam no cânister, no cofre.', { from: 1, via: { r: 'canister', i: 0 }, c: '#9C6BD6' }],
      ['purga', 'A central abre a purga e o motor queima esses vapores.', { via: { r: 'canister', i: 1 } }]
    ] },
  { id: 'forca', n: 'Da explosão até as rodas', c: '#B0412A', d: 'Como a força da combustão chega ao asfalto.', motion: 'forca',
    steps: [
      ['pistoes', 'A combustão empurra o pistão para baixo.', { at: [EX, 0.55, Z1] }],
      ['bielas', 'A biela transmite o empurrão.', { at: [EX, 0.46, Z1] }],
      ['virabrequim', 'O virabrequim transforma em giro.', { at: [EX, EY, Z1] }],
      ['volante_motor', 'O volante suaviza os pulsos.', { at: [EX, EY, 0.118] }],
      ['embreagem', 'A embreagem liga o motor ao câmbio.', { at: [EX, EY, 0.145] }],
      ['cambio', 'O câmbio escolhe uma das cinco marchas.', { at: [1.29, 0.39, 0.31] }],
      ['diferencial', 'O diferencial divide entre as rodas.', { at: [1.19, WY, 0.20] }],
      ['semieixos', 'Os semieixos levam o giro até as rodas.', { route: 1 }],
      ['mangas', 'O cubo gira sobre o rolamento.', { at: [[XFA, WY, 0.69], [XFA, WY, -0.69]] }],
      ['pneus', 'E o pneu empurra o chão.', { at: [[XFA, 0.02, 0.705], [XFA, 0.02, -0.705]] }]
    ] },
  { id: 'agua', n: 'O circuito do arrefecimento', c: '#1F8FC0', d: 'O líquido tira calor do motor e o entrega ao ar — e à cabine, pelo aquecedor. Quem gira a bomba é a correia dentada.',
    leg: [['#2F8FE0', 'líquido frio'], ['#E4572E', 'líquido quente']], motion: 'agua', mo: i => ({ engine: 0.45, fan: i >= 9 ? 1 : 0 }),
    steps: [
      ['bomba_agua', 'A bomba d’água, girada pela correia dentada, empurra o líquido.', { c: '#2F8FE0' }],
      ['bloco', 'Ele passa em volta dos cilindros…', { at: [EX, 0.47, -0.20], c2: '#E4572E' }],
      ['cabecote', '…sobe pelo cabeçote, recolhendo calor…', { at: [EX, 0.655, -0.05] }],
      ['flange_agua', '…e sai pela flange de água, na ponta esquerda do cabeçote.'],
      ['mang_aquec', 'Uma parte vai sempre para a cabine…', { route: 1, pick: [0] }],
      ['rad_aquec', '…aquece o ar da ventilação…', { c2: '#2F8FE0' }],
      ['bomba_agua', '…e volta para a bomba.', { via: { r: 'mang_aquec', i: 1 } }],
      ['mang_sup', 'Com o motor quente, a mangueira superior leva o líquido da flange ao radiador.', { from: 3, route: 1, c: '#E4572E' }],
      ['radiador', 'O radiador troca calor com o ar e o líquido esfria.', { at: [1.72, 0.34, 0.27], via: [[1.72, 0.60, 0.27], [1.72, 0.52, -0.22], [1.72, 0.38, -0.22]], c2: '#2F8FE0' }],
      ['ventoinha', 'Parado no trânsito, o eletroventilador ajuda.', { from: -1 }],
      ['mang_inf', 'A mangueira inferior traz o líquido frio de volta…', { route: 1, from: 8 }],
      ['termostato', '…pela válvula termostática, que só abre esse caminho com o motor quente.', { c: '#2F8FE0' }],
      ['vaso', 'O reservatório recebe o que dilata e devolve quando esfria; a tampa dele segura a pressão do sistema.', { from: 8, via: { r: 'vaso', i: 0 } }]
    ] },
  { id: 'clima', n: 'Como o ar-condicionado gela', c: '#4F7FE0', d: 'O gás é comprimido, esfria no condensador, expande no evaporador e rouba o calor do ar da cabine.',
    leg: [['#E4572E', 'gás quente sob pressão'], ['#2F8FE0', 'gás frio'], ['#3D9BE0', 'ar da cabine']], motion: 'clima', mo: i => ({ engine: 0.4, fan: i >= 3 ? 1 : 0 }),
    steps: [
      ['compressor', 'O compressor, ligado pela embreagem da polia, comprime o gás e ele esquenta.', { c: '#E4572E' }],
      ['tubos_ac', 'A linha de alta leva o gás quente…', { route: 1, pick: [0] }],
      ['condensador', '…ao condensador, na frente do radiador, onde ele perde calor e vira líquido.', { at: [1.755, 0.46, -0.10] }],
      ['ventoinha', 'O eletroventilador liga junto com o ar e ajuda com o carro parado.', { from: -1 }],
      ['filtro_secador', 'O filtro secador tira a umidade.', { from: 2 }],
      ['pressostato', 'O sensor de pressão vigia o circuito e protege o compressor.'],
      ['tubos_ac', 'O líquido segue pela linha fina até o corta-fogo…', { route: 1, pick: [1], c2: '#2F8FE0' }],
      ['valv_exp', '…a válvula de expansão estrangula a passagem…', { c: '#2F8FE0' }],
      ['evaporador', '…e o gás expande no evaporador e gela.'],
      ['vent_interno', 'O ventilador sopra o ar da cabine pelo evaporador frio, e a umidade sai pelo dreno.', { from: -1, c: '#3D9BE0' }],
      ['tubos_ac', 'O gás frio volta ao compressor pela linha grossa, de baixa pressão.', { from: 8, route: 1, pick: [2], c: '#2F8FE0' }]
    ] },
  { id: 'partida', n: 'Da chave até a faísca', c: '#D6B000', d: 'O que acontece quando você vira a chave.',
    leg: [['#35B6C9', 'sinais e comandos'], ['#E8B90C', 'corrente']], motion: 'partida', mo: i => ({ engine: i >= 10 ? 0.6 : i >= 5 ? 0.22 : 0 }),
    steps: [
      ['ign_chave', 'O comutador liga os circuitos e a antena lê o chip da chave.', { c: '#35B6C9' }],
      ['ecu', 'A central confere o imobilizador e libera a injeção.', { via: { r: 'chicote', i: 0 } }],
      ['bomba_comb', 'A bomba de combustível funciona por alguns segundos e pressuriza a linha.', { via: { r: 'chicote', i: 1 } }],
      ['bateria', 'Na posição de partida, a bateria entrega uma corrente enorme…', { from: -1, c: '#E8B90C' }],
      ['cabos_bat', '…pelo cabo grosso…', { route: 1, pick: [0] }],
      ['motor_partida', '…e o motor de partida gira o volante do motor.'],
      ['sens_ckp', 'O sensor de rotação avisa que o motor está girando; o de fase diz qual cilindro está em compressão.', { c: '#35B6C9' }],
      ['ecu', 'A central calcula injeção e ignição e, se o motor está frio com etanol, aciona a partida a frio.', { via: { r: 'chicote', i: 0 } }],
      ['bobina', 'A bobina dupla gera a alta tensão, para um par de cilindros por vez…', { via: { r: 'chicote', i: 0 } }],
      ['cabos_vela', '…os cabos levam a alta tensão até as velas…', { route: 1, c: '#E8B90C' }],
      ['velas', '…e as velas soltam a faísca. Pegou.', { at: CZ.map(z => [EX + 0.04, 0.64, z]) }],
      ['alternador', 'Agora o alternador repõe a carga da bateria.', { from: -1, out: [{ to: 3, via: { r: 'chicote', i: 0 } }] }]
    ] },
  { id: 'oleo', n: 'A lubrificação', c: '#D0602A', d: 'O óleo circula sob pressão, enche os tuchos hidráulicos e volta ao cárter por gravidade.', motion: 'oleo',
    steps: [
      ['carter', 'O óleo descansa no cárter.'],
      ['bomba_oleo', 'A bomba, na ponta do virabrequim, suga pelo pescador.', { via: { r: 'bomba_oleo', i: 0 } }],
      ['filtro_oleo', 'O filtro limpa.'],
      ['virabrequim', 'Mancais e virabrequim recebem óleo sob pressão.', { at: MAINS.map(z => [EX, EY, z]) }],
      ['bielas', 'As bielas também.', { at: CZ.map(z => [EX, 0.40, z]) }],
      ['comando', 'Uma galeria sobe até o comando…', { at: [EX, 0.725, -0.20] }],
      ['tuchos', '…e enche os tuchos hidráulicos, que se ajustam sozinhos: por isso não há folga de válvula para regular.', { at: [EX, 0.69, -0.10] }],
      ['sens_oleo', 'O interruptor vigia a pressão.', { from: 2 }],
      ['carter', 'Tudo escorre de volta ao cárter.', { from: 6, at: [EX, 0.24, -0.10] }]
    ] },
  { id: 'freio', n: 'Do pedal às rodas', c: '#D2334A', d: 'Hidráulica em dois circuitos: a força do pé vira pressão nas quatro rodas, e a válvula equalizadora dosa a traseira.', motion: 'freio',
    steps: [
      ['pedal_freio', 'Você pisa no pedal.'],
      ['servo', 'O servo-freio multiplica a força com o vácuo do motor.'],
      ['cil_mestre', 'O cilindro-mestre transforma em pressão, em dois circuitos separados.'],
      ['tubos_freio', 'As tubulações levam o fluido às rodas da frente e para trás, pelo assoalho.', { route: 1, pick: [2, 0, 3, 1, 4] }],
      ['valv_equal', 'Atrás, a válvula equalizadora reduz a pressão conforme a carga, para as rodas de trás não travarem antes das da frente…'],
      ['tubos_freio', '…e reparte para as duas rodas de trás.', { route: 1, pick: [5, 6] }],
      ['pincas', 'Na frente, as pinças…', { both: 1, from: 3 }],
      ['pastilhas', '…apertam as pastilhas…', { both: 1, from: -1 }],
      ['discos', '…contra os discos ventilados.', { both: 1, from: -1 }],
      ['sapatas', 'Atrás, os cilindros de roda abrem as sapatas…', { both: 1, from: 5 }],
      ['tambores', '…contra os tambores.', { both: 1, from: -1 }]
    ] },
  { id: 'dir', n: 'Do volante às rodas', c: '#1FA394', d: 'Pinhão e cremalheira com assistência hidráulica: a pressão da bomba empurra junto com você.', motion: 'dir',
    leg: [['#1FA394', 'movimento'], ['#C9A227', 'fluido da direção']],
    steps: [
      ['volante_dir', 'Você gira o volante.'],
      ['coluna', 'A coluna leva o giro até o pinhão.', { route: 1 }],
      ['bomba_dir', 'A bomba, puxada pela correia de acessórios, mantém o fluido sob pressão…', { from: -1, c: '#C9A227' }],
      ['mang_dir', '…e a mangueira de pressão o leva até a válvula da caixa.', { route: 1, pick: [0] }],
      ['caixa_dir', 'A válvula manda o fluido para um lado do cilindro e a pressão empurra a cremalheira com você.', { at: [1.06, 0.35, -0.12], c: '#1FA394' }],
      ['barras_axiais', 'As barras axiais empurram…', { both: 1 }],
      ['mangas', '…as mangas, que esterçam…', { both: 1 }],
      ['pneus', '…as rodas.', { at: [[XFA, WY, 0.705], [XFA, WY, -0.705]] }],
      ['reserv_dir', 'O fluido volta ao reservatório e recomeça.', { from: 4, via: { r: 'mang_dir', i: 1 }, c: '#C9A227' }]
    ] },
  { id: 'emb', n: 'Do pedal à embreagem', c: '#B0412A', d: 'A embreagem é acionada por cabo: o pé puxa, o garfo empurra e o platô solta o disco.',
    steps: [
      ['pedal_emb', 'Você pisa no pedal da embreagem…'],
      ['cabo_emb', '…o cabo atravessa o corta-fogo…', { route: 1 }],
      ['garfo_emb', '…e puxa a alavanca no alto do câmbio, que gira o garfo…'],
      ['rol_emb', '…o garfo empurra o rolamento contra as molas do platô…', { at: [EX, EY, 0.174] }],
      ['embreagem', '…e o platô alivia o disco: o motor se separa do câmbio e dá para trocar de marcha.', { at: [EX, EY + 0.08, 0.145] }]
    ] }
];

/* ===== Plano de revisões ===== */
const MAINT = [
  { id: 'oleo', n: 'Óleo do motor e filtro', km: 10000, mo: 12, p: ['carter', 'filtro_oleo'], t: 'Uso severo (trajetos curtos, trânsito, poeira, muito etanol): 5.000 km ou 6 meses. Óleo da especificação VW indicada no manual; arruela do bujão nova.' },
  { id: 'filtro_ar', n: 'Filtro de ar', km: 15000, p: ['filtro_ar'], t: 'Antes em estrada de terra.' },
  { id: 'filtro_cabine', n: 'Filtro da cabine', km: 10000, mo: 12, p: ['filtro_cabine'] },
  { id: 'filtro_comb', n: 'Filtro de combustível', km: 10000, p: ['filtro_comb'], t: 'Recomendação de oficina: de 10.000 a 20.000 km; antes com combustível de procedência duvidosa.' },
  { id: 'velas', n: 'Velas', km: 30000, p: ['velas'], t: 'Intervalo comum para o flex em uso brasileiro; confira o do manual do seu carro.' },
  { id: 'cabos', n: 'Cabos de vela e bobina (inspeção)', km: 30000, p: ['cabos_vela', 'bobina'], t: 'Troque o jogo de cabos se houver trincas, terminais oxidados ou falha com tempo úmido.' },
  { id: 'pf', n: 'Gasolina da partida a frio (renovar)', mo: 3, p: ['res_pf'], t: 'Gasolina parada envelhece e atrapalha a partida com etanol.' },
  { id: 'tbi', n: 'Limpeza da borboleta', km: 30000, p: ['tbi', 'sens_map'], t: 'Recomendação de oficina; depois, adaptação da borboleta.' },
  { id: 'bicos', n: 'Limpeza dos bicos', km: 30000, p: ['bicos'], t: 'Recomendação de oficina para flex, não do plano de fábrica.' },
  { id: 'correia', n: 'Correia dentada, tensor e bomba d’água', km: 50000, p: ['correia_dent', 'tensor_dent', 'bomba_agua'], t: 'Recomendação de oficina para uso brasileiro (o plano de fábrica pode indicar mais): troque antes se houver óleo ou água sobre ela. Correia rompida pode empenar válvulas.' },
  { id: 'acess', n: 'Correia de acessórios e tensor', km: 50000, p: ['correia_acess', 'tensor_acess'], t: 'Inspecione em toda revisão; ela move o alternador, a bomba da direção e o compressor.' },
  { id: 'fluido_freio', n: 'Fluido de freio', mo: 24, p: ['reserv_freio'] },
  { id: 'fluido_dir', n: 'Fluido da direção hidráulica (nível e aspecto)', mo: 12, p: ['reserv_dir', 'mang_dir'], t: 'Fluido escuro, com espuma ou abaixo do mínimo pede atenção.' },
  { id: 'arref', n: 'Líquido de arrefecimento', mo: 24, p: ['vaso', 'radiador'], t: 'Com o aditivo indicado pela VW, diluído na proporção do manual.' },
  { id: 'cambio', n: 'Óleo do câmbio (conferir)', km: 60000, p: ['cambio'], t: 'Óleo de longa duração: confira o nível e vazamentos; troque se houver contaminação ou conforme o manual.' },
  { id: 'cabo_emb', n: 'Cabo e pedal da embreagem (inspeção)', km: 20000, p: ['cabo_emb', 'pedal_emb'] },
  { id: 'ac', n: 'Ar-condicionado: higienização e conferência', mo: 12, p: ['evaporador', 'compressor'] },
  { id: 'pastilhas', n: 'Pastilhas e discos (inspeção)', km: 10000, p: ['pastilhas', 'discos'] },
  { id: 'lonas', n: 'Lonas, tambores e freio de mão (inspeção)', km: 20000, p: ['sapatas', 'tambores', 'freio_mao'] },
  { id: 'alinh', n: 'Alinhamento e balanceamento', km: 10000, p: ['pneus', 'barras_axiais'] },
  { id: 'rodizio', n: 'Rodízio de pneus', km: 10000, p: ['pneus'] },
  { id: 'coxins', n: 'Coxins e suspensão (inspeção)', km: 20000, p: ['coxim_tras', 'coxim_dir', 'bandejas', 'barra_estab', 'buchas_eixo'] },
  { id: 'bateria', n: 'Teste da bateria', mo: 6, p: ['bateria'] },
  { id: 'palhetas', n: 'Palhetas dos limpadores', mo: 12, p: ['limpador', 'limpador_tras'] },
  { id: 'lubrif', n: 'Lubrificar dobradiças, fechaduras e limitadores', mo: 12, p: ['dobradicas', 'fech_portas', 'fech_capo', 'dobr_capo', 'dobr_tampa', 'fech_tampa'] },
  { id: 'drenos', n: 'Limpar drenos do torpedo, portas, soleiras e do ar', mo: 6, p: ['grade_torpedo', 'portas', 'soleiras', 'evaporador'] },
  { id: 'borrachas', n: 'Protetor nas borrachas de vedação', mo: 4, p: ['borrachas'] }
];

/* ===== Ficha técnica ===== */
const SPECS = [
  ['Motor', [['Código', 'EA111 1.6 8V flex: 1.598 cm³, 4 cilindros em linha, 8 válvulas, um comando no cabeçote com tuchos hidráulicos'], ['Diâmetro e curso', '76,5 mm e 86,9 mm'], ['Taxa de compressão', '12,1:1'], ['Potência', '101 cv com gasolina e 104 cv com etanol, a 5.250 rpm'], ['Torque', '15,4 kgfm com gasolina e 15,6 kgfm com etanol, a 2.500 rpm'], ['Injeção', 'Multiponto sequencial, acelerador eletrônico, sensor MAP e partida a frio com reservatório de gasolina'], ['Ignição', 'Bobina dupla com cabos de vela; ordem 1-3-4-2'], ['Distribuição', 'Correia dentada, que também gira a bomba d’água'], ['Combustível', 'Flex: gasolina, etanol ou qualquer mistura']]],
  ['Transmissão', [['Câmbio', 'Manual de 5 marchas (MQ200), engates por cabos'], ['Embreagem', 'Monodisco a seco, acionada por cabo'], ['Tração', 'Dianteira']]],
  ['Chassi', [['Suspensão dianteira', 'McPherson com molas helicoidais e barra estabilizadora'], ['Suspensão traseira', 'Eixo de torção, molas helicoidais e amortecedores separados'], ['Freios', 'Discos ventilados na frente, tambores atrás, dois circuitos em diagonal e válvula equalizadora (sem ABS na versão considerada)'], ['Direção', 'Pinhão e cremalheira com assistência hidráulica'], ['Pneus', '195/55 R15'], ['Rodas', 'Liga leve 6J × 15, furação 4×100, parafusos de ≈ 120 N·m']]],
  ['Dimensões', [['Comprimento', '3.899 mm'], ['Largura', '1.656 mm'], ['Altura', '1.464 mm (fichas variam alguns milímetros)'], ['Entre-eixos', '2.465 mm'], ['Peso', 'cerca de 970 kg (varia por versão)'], ['Porta-malas', 'cerca de 285 L'], ['Tanque', '55 L']]],
  ['Fluidos', [['Óleo do motor', 'cerca de 3,5 L com filtro — a vareta manda; especificação VW do manual'], ['Óleo do câmbio', 'cerca de 2 L, do tipo indicado pela VW (confirme no manual)'], ['Freio', 'DOT 4 (confira na tampa do reservatório)'], ['Direção hidráulica', 'Fluido indicado pela VW (confira no reservatório)'], ['Arrefecimento', 'Aditivo indicado pela VW, diluído na proporção do manual'], ['Ar-condicionado', 'R-134a']]],
  ['Regulagens', [['Velas', 'Tipo indicado para o motor flex, aperto ≈ 25 N·m'], ['Parafusos de roda', '≈ 120 N·m'], ['Bujão do cárter', '≈ 30 N·m com arruela nova'], ['Folga de válvulas', 'Não há: tuchos hidráulicos'], ['Correia dentada', 'Tensão pelo ponteiro do tensor, com o motor frio']]],
  ['O carro', [['Versão', 'Gol Power 1.6 8V flex 2010/2011, hatch de 4 portas, câmbio manual'], ['Considerado presente', 'Ar-condicionado, direção hidráulica, rodas de liga, vidros e travas elétricos na frente'], ['Confira no seu', 'ABS e airbags (opcionais conforme o ano), acionamento da embreagem, tipo de roda e a posição de alguns componentes do cofre']]]
];

/* ===== Como desmontar (3D) ===== */
const PCD = [6, 7, 8, 9, 0, 1, 3, 4, 2, 5, 10];
const OUT_PCD = [['para_choque_d', [0.5, 0.02, 0]], ['grade_inf', [0.5, 0.02, 0]]];
const GUIDES = [
  { id: 'dm_parachoque_d', grp: 'Lataria', n: 'Para-choque dianteiro', part: 'para_choque_d', parts: ['para_choque_d', 'grade_inf'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte os 4 parafusos e presilhas de cima, sob o capô.', { fx: [['fx_parachoque', [6, 7, 8, 9]]], l: 'Fixações de cima' }],
      ['Solte os parafusos das caixas de roda, dos dois lados.', { fx: [['fx_parachoque', [0, 1, 3, 4]]], cam: [0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['Solte os parafusos de baixo.', { fx: [['fx_parachoque', [2, 5, 10]]], cam: [0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas para fora das guias laterais, com cuidado para não quebrá-las…', { fx: [['fx_guias_pcd', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…e tire o para-choque para a frente, desligando o que houver de conector.', { out: OUT_PCD, l: 'Para-choque' }]
    ] },
  { id: 'dm_paralama', grp: 'Lataria', n: 'Para-lama dianteiro', part: 'paralamas', parts: ['paralamas', 'piscas_lat'], side: 1,
    steps: [
      ['Abra o capô e a porta do lado do para-lama.', { open: ['hood', 'door'], l: 'Capô e porta' }],
      ['Tire o para-choque dianteiro, que cobre a ponta do para-lama.', { fx: [['fx_parachoque', PCD]], out: OUT_PCD, l: 'Para-choque' }],
      ['Tire o farol: 3 parafusos.', { fx: [['fx_farol', [0, 1, 2]]], out: [['farois', [0.30, 0.02, 0.03], 1]], l: 'Farol' }],
      ['Solte as presilhas do forro da caixa de roda e tire o forro. Com a roda tirada fica mais fácil.', { fx: [['fx_forros', [0, 1, 2, 3, 4, 5]]], cam: [0.25, -0.55, 1], l: 'Presilhas do forro' }],
      ['Tire os 4 parafusos da borda de cima, sob o capô.', { fx: [['fx_paralama', [0, 1, 2, 3]]], l: 'Parafusos de cima' }],
      ['Tire o parafuso da frente, junto ao farol.', { fx: [['fx_paralama', [4]]], l: 'Parafuso da frente' }],
      ['Com a porta aberta, tire o parafuso de trás, na coluna, e o de baixo, na soleira.', { fx: [['fx_paralama', [6, 5]]], l: 'Parafusos de trás e de baixo' }],
      ['Desligue o repetidor lateral, corte a massa das emendas e puxe o para-lama para fora.', { out: [['paralamas', [0.04, 0.06, 0.40], 1], ['piscas_lat', [0.04, 0.06, 0.40], 1]], l: 'Para-lama' }]
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
      ['Tire o vidro por cima, inclinando.', { out: [['vidros_portas', [0, 0.42, 0.02], 1]], l: 'Vidro' }],
      ['Desligue o conector do motor e solte os 4 parafusos da máquina…', { fx: [['fx_maq_vidro', [0, 1, 2, 3]]], cam: [-1, 0.3, 0.35], l: 'Fixação da máquina' }],
      ['…e tire a máquina pela abertura do painel interno.', { out: [['maq_vidro', [0, -0.05, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Máquina de vidro' }]
    ] },
  { id: 'dm_retrovisor', grp: 'Lataria', n: 'Retrovisor', part: 'retrovisores', parts: ['retrovisores'], side: 1,
    steps: [
      ['Abra a porta e tire o acabamento triangular por dentro, no canto do vidro.', { open: 'door', l: 'Acabamento' }],
      ['Desligue o conector (se for elétrico), segure o espelho por fora e solte as 3 porcas.', { fx: [['fx_retrovisor', [0, 1, 2]]], l: 'Porcas do retrovisor' }],
      ['Tire o espelho para fora.', { out: [['retrovisores', [0.02, 0.05, 0.3], 1]], l: 'Retrovisor' }]
    ] },
  { id: 'dm_tampa', grp: 'Lataria', n: 'Tampa traseira', part: 'tampa_tras', parts: ['tampa_tras', 'dobr_tampa', 'amort_tampa'], side: 0,
    steps: [
      ['Abra a tampa e peça ajuda para segurá-la.', { open: 'tail', l: 'Tampa' }],
      ['Tire o forro da tampa e desligue os conectores da luz de freio, das luzes da placa, do limpador e do desembaçador.', { l: 'Conectores', at: [-1.86, 1.44, 0], cam: [-0.85, -0.2, 0.5] }],
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
      ['Desligue os conectores e tire o farol para a frente. Na volta, regule a altura do facho.', { out: [['farois', [0.30, 0.02, 0.03], 1]], l: 'Farol' }]
    ] },
  { id: 'dm_lanterna', grp: 'Lataria', n: 'Lanterna', part: 'lanternas', parts: ['lanternas'], side: 1,
    steps: [
      ['Abra a tampa traseira e tire a tampinha do acabamento lateral, atrás da lanterna.', { open: 'tail', l: 'Acabamento' }],
      ['Solte as porcas por dentro.', { fx: [['fx_lanterna', [0, 1, 2]]], l: 'Fixações da lanterna' }],
      ['Desligue o conector e tire a lanterna para trás, soltando o pino de encaixe.', { out: [['lanternas', [-0.26, 0, 0.06], 1]], l: 'Lanterna' }]
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
      ['…e puxe a grade para cima e para a frente, soltando da borda do para-brisa. Embaixo dela ficam o motor do limpador e o filtro de cabine.', { out: [['grade_torpedo', [0.12, 0.3, 0]]], l: 'Grade do torpedo' }]
    ] },
  { id: 'dm_bocal', grp: 'Lataria', n: 'Bocal de abastecimento', part: 'bocal', parts: ['bocal'], side: 0,
    steps: [
      ['Com o tanque quase vazio, abra a portinhola.', { l: 'Portinhola', at: [-1.48, 0.86, -0.80], cam: [-0.35, 0.3, -1] }],
      ['Por baixo do carro, solte a abraçadeira da mangueira do tanque.', { l: 'Abraçadeira', at: [-0.98, 0.30, -0.33], cam: [0.15, -0.9, -0.45] }],
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
  { id: 'dm_teto', grp: 'Peças soldadas (funilaria)', n: 'Teto', part: 'teto', parts: ['teto'], side: 0,
    steps: [
      ['O teto é soldado na estrutura: não sai com ferramenta de mão.', { fx: [['fx_solda_teto', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, cada ponto de solda é furado…', { fx: [['fx_solda_teto', 'all']], l: 'Pontos furados' }],
      ['…a peça sai, e a nova é soldada e selada no lugar.', { out: [['teto', [0, 0.4, 0]]], l: 'Teto' }]
    ] },
  { id: 'dm_lateral', grp: 'Peças soldadas (funilaria)', n: 'Lateral traseira', part: 'laterais', parts: ['laterais'], side: 1,
    steps: [
      ['A lateral, com a coluna traseira larga, é soldada na coluna central, na soleira, na caixa de roda, no painel traseiro e junto ao teto.', { fx: [['fx_solda_laterais', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, os pontos são furados ou cortados…', { fx: [['fx_solda_laterais', 'all']], l: 'Pontos furados' }],
      ['…a lateral sai e a nova é soldada, com massa de vedação nas emendas.', { out: [['laterais', [-0.05, 0.05, 0.45], 1]], l: 'Lateral' }]
    ] },
  { id: 'dm_soleira', grp: 'Peças soldadas (funilaria)', n: 'Soleira', part: 'soleiras', parts: ['soleiras'], side: 1,
    steps: [
      ['A soleira é soldada na aba de baixo e na borda das portas. A aba de baixo é onde o macaco apoia.', { fx: [['fx_solda_soleiras', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, os pontos são furados…', { fx: [['fx_solda_soleiras', 'all']], l: 'Pontos furados' }],
      ['…e a soleira nova é soldada no lugar.', { out: [['soleiras', [0, -0.12, 0.3], 1]], l: 'Soleira' }]
    ] },
  { id: 'dm_roda', grp: 'Mecânica', n: 'Roda', part: 'rodas', parts: ['rodas', 'pneus'], side: 1,
    steps: [
      ['Com o carro no chão e o freio de mão puxado, afrouxe os 4 parafusos meia volta (tire antes a tampa central, se houver).', { fx: [['fx_roda', [0, 1, 2, 3]]], keep: 1, l: 'Parafusos da roda' }],
      ['Levante o carro com o macaco no ponto de apoio da soleira, perto da roda.', { l: 'Ponto do macaco', at: [0.96, 0.13, 0.67] }],
      ['Tire os parafusos, segurando a roda…', { fx: [['fx_roda', [0, 1, 2, 3]]], l: 'Parafusos da roda' }],
      ['…e puxe a roda para fora.', { out: [['pneus', [0, 0, 0.42], 1, 0], ['rodas', [0, 0, 0.42], 1, 0]], l: 'Roda' }],
      ['Na volta: encoste os parafusos à mão, aperte em cruz, desça o carro e dê o aperto final (≈ 120 N·m).', { l: 'Aperto em cruz', at: [1.2325, 0.292, 0.79] }]
    ] },
  { id: 'dm_pastilhas', grp: 'Mecânica', n: 'Pastilhas de freio dianteiras', part: 'pastilhas', parts: ['pastilhas', 'pincas', 'rodas', 'pneus'], side: 1,
    steps: [
      ['Com o carro no chão, afrouxe os parafusos, levante, apoie em cavalete e tire a roda.', { fx: [['fx_roda', [0, 1, 2, 3]]], out: [['pneus', [0, 0, 0.45], 1, 0], ['rodas', [0, 0, 0.45], 1, 0]], l: 'Roda' }],
      ['Solte os 2 pinos-guia da pinça.', { fx: [['fx_pinca', [0, 2]]], cam: [0.2, 0.2, 1], l: 'Pinos-guia' }],
      ['Tire a pinça e pendure com arame, sem forçar o flexível.', { out: [['pincas', [0.02, 0.16, 0.22], 1]], cam: [0.2, 0.2, 1], l: 'Pinça' }],
      ['Tire as pastilhas velhas do suporte e recolha o pistão devagar.', { out: [['pastilhas', [0.02, 0.12, 0.30], 1]], cam: [0.2, 0.2, 1], l: 'Pastilhas' }],
      ['Na volta: pastilhas novas com as molas, pinos lubrificados e pedal bombeado até ficar firme antes de andar.', { l: 'Montagem', at: [1.2325, 0.40, 0.68] }]
    ] },
  { id: 'dm_velas', grp: 'Mecânica', n: 'Cabos e velas', part: 'velas', parts: ['velas', 'cabos_vela'], side: 0,
    steps: [
      ['Motor frio. Abra o capô: as velas ficam na frente do cabeçote, sob os cabos.', { open: 'hood', l: 'Capô' }],
      ['Puxe cada cabo pelo terminal, nunca pelo fio, um de cada vez; o 1 é o do lado da correia.', { out: [['cabos_vela', [0.10, 0.20, 0]]], cam: [0.6, 1, -0.1], l: 'Cabos de vela' }],
      ['Sopre em volta e solte as velas com chave de vela.', { fx: [['fx_velas', [0, 1, 2, 3]]], cam: [0.6, 1, -0.1], l: 'Velas' }],
      ['Tire as velas. Na volta: rosqueie à mão, aperte com torquímetro (≈ 25 N·m) e ligue cada cabo no seu cilindro, conferindo a numeração da bobina.', { out: [['velas', [0.06, 0.24, 0]]], cam: [0.6, 1, -0.1], l: 'Velas fora' }]
    ] },
  { id: 'dm_correia', grp: 'Mecânica', n: 'Correia dentada', part: 'correia_dent', parts: ['correia_dent', 'capas_correia', 'correia_acess', 'polia_vira', 'coxim_dir'], side: 0,
    steps: [
      ['Motor frio e bateria desligada. Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Apoie o motor por baixo e solte o coxim direito, que fica sobre a correia.', { fx: [['fx_coxins', [0, 1, 2]]], out: [['coxim_dir', [0, 0.28, 0]]], cam: [0.6, 0.6, -0.55], l: 'Coxim direito' }],
      ['Alivie o tensor e tire a correia de acessórios.', { out: [['correia_acess', [0, 0.04, -0.30]]], cam: [0.6, 0.6, -0.55], l: 'Correia de acessórios' }],
      ['Afaste o reservatório da direção, sem soltar as mangueiras, e tire a polia do virabrequim e as capas da correia.', { hide: ['reserv_dir'], fx: [['fx_capas', [0, 1, 2, 3, 4, 5]]], out: [['polia_vira', [0, 0, -0.34]], ['capas_correia', [0, 0.04, -0.30]]], cam: [0.6, 0.6, -0.55], l: 'Polia e capas' }],
      ['Gire o motor pelo parafuso do virabrequim, no sentido normal, até as marcas da polia do comando e do virabrequim baterem com as referências: é o ponto.', { at: [1.33, 0.725, -0.33], cam: [0.6, 0.6, -0.55], l: 'Marcas de ponto' }],
      ['Afrouxe a porca do tensor e tire a correia.', { fx: [['fx_tensor_dent', [0]]], out: [['correia_dent', [0, 0.04, -0.26]]], cam: [0.6, 0.6, -0.55], l: 'Correia dentada' }],
      ['Na volta: correia, tensor e, de preferência, bomba d’água novos; marcas alinhadas, tensão pelo ponteiro do tensor, duas voltas no motor à mão e confira as marcas de novo.', { fx: [['fx_tensor_dent', [0]], ['fx_bomba_agua', [0, 1, 2]]], cam: [0.6, 0.6, -0.55], l: 'Montagem' }]
    ] },
  { id: 'dm_filtro_ar', grp: 'Mecânica', n: 'Filtro de ar', part: 'filtro_ar', parts: ['filtro_ar'], side: 0,
    steps: [
      ['Abra o capô. A caixa do filtro fica em cima do motor, como uma tampa.', { open: 'hood', l: 'Capô' }],
      ['Solte as presilhas (ou os parafusos) da tampa da caixa.', { l: 'Presilhas', at: [1.46, 0.81, -0.08], cam: [0.3, 1, -0.2] }],
      ['Levante a tampa e tire o filtro, sem deixar cair sujeira no lado limpo.', { out: [['filtro_ar', [0, 0.25, 0]]], cam: [0.3, 1, -0.2], l: 'Filtro' }]
    ] },
  { id: 'dm_bateria', grp: 'Mecânica', n: 'Bateria', part: 'bateria', parts: ['bateria', 'caixa_fus_motor'], side: 0,
    steps: [
      ['Abra o capô com a ignição desligada. Rádio com código? Tenha o código à mão.', { open: 'hood', l: 'Capô' }],
      ['Solte primeiro o terminal negativo (preto).', { fx: [['fx_bateria', [1]]], l: 'Negativo' }],
      ['Depois o positivo (vermelho), que sai junto com o porta-fusíveis.', { fx: [['fx_bateria', [0]]], out: [['caixa_fus_motor', [0, 0.12, 0]]], l: 'Positivo e porta-fusíveis' }],
      ['Solte o grampo de fixação.', { fx: [['fx_bateria', [2]]], l: 'Grampo' }],
      ['Tire a bateria para cima, sem inclinar. Na volta: positivo primeiro, negativo por último, e deixe o motor em lenta alguns minutos para a central reaprender.', { out: [['bateria', [0, 0.34, 0]]], l: 'Bateria' }]
    ] }
];

/* ===== Explosão: para onde cada peça se afasta (x, y, z, simétrico) ===== */
const EXV = {
  soleiras: [0, -0.15, 0.75, 1], colunas: [0.15, 0.55, 0.55, 1], painel_tras: [-0.8, 0, 0], grade_torpedo: [0.3, 0.75, 0], borrachas: [0, 0.12, 0.5, 1], dobr_capo: [0.35, 0.65, 0.35, 1], dobr_tampa: [-0.55, 0.75, 0.3, 1], fech_tampa: [-0.95, 0.35, 0], amort_tampa: [-0.5, 0.3, 0.4, 1], forros_portas: [0, 0.1, 0.55, 1], forros_portas_tras: [0, 0.1, 0.55, 1],
  capo: [0.25, 0.8, 0], teto: [0, 0.9, 0], para_brisa: [0.35, 0.65, 0], vidro_tras: [-0.6, 0.45, 0], tampa_tras: [-0.75, 0.35, 0], para_choque_d: [0.9, -0.05, 0], para_choque_t: [-0.9, -0.05, 0], grade: [1.0, 0.1, 0], grade_inf: [1.05, -0.05, 0], viga_dianteira: [0.7, -0.05, 0], viga_traseira: [-0.7, -0.05, 0], travessa_frontal: [0.5, 0.05, 0], fech_capo: [0.5, 0.3, 0], monobloco: [0, 0, 0], corta_fogo: [0, 0.05, 0],
  paralamas: [0.15, 0.1, 0.8, 1], portas: [0.1, 0.05, 1.0, 1], portas_tras: [-0.1, 0.05, 1.0, 1], vidros_portas: [0.05, 0.35, 1.05, 1], vidros_portas_tras: [-0.05, 0.35, 1.05, 1], laterais: [-0.1, 0.05, 0.85, 1], retrovisores: [0.1, 0.2, 1.2, 1], caixas_roda: [0, 0, 0.5, 1], dobradicas: [0, 0, 0.85, 1], fech_portas: [-0.1, 0, 0.9, 1], maq_vidro: [0, 0.1, 0.8, 1], maq_vidro_tras: [0, 0.1, 0.8, 1], alto_falantes: [0, 0, 0.75, 1],
  farois: [0.6, 0.1, 0.35, 1], lanternas: [-0.6, 0.05, 0.35, 1], piscas_lat: [0.2, 0.1, 1.0, 1], luz_freio: [-0.6, 0.45, 0], luz_placa: [-0.9, 0.2, 0], bocal: [-0.2, 0.1, -0.6],
  painel: [-0.1, 0.55, 0], quadro: [-0.25, 0.7, 0], radio: [-0.3, 0.55, 0], comandos_clima: [-0.35, 0.5, 0], caixa_ar: [0.1, 0.35, 0], vent_interno: [0.1, 0.35, -0.15], filtro_cabine: [0.1, 0.55, -0.3], evaporador: [0.1, 0.45, -0.25], console: [0, 0.35, 0],
  bancos_diant: [0, 0.35, 0.45, 1], banco_tras: [-0.2, 0.35, 0], cintos: [0, 0.3, 0.6, 1], porta_malas: [-0.3, 0.3, 0], retrovisor_int: [0, 0.8, 0],
  carter: [0, -0.35, 0], bomba_oleo: [0, 0.2, -0.3], filtro_oleo: [0.45, 0.2, 0], vareta: [0.25, 1.0, 0.2], virabrequim: [0, 0.62, 0], polia_vira: [0, 0.62, -0.45], volante_motor: [0, 0.62, 0.35], bloco: [0, 0.95, 0], pistoes: [0, 1.55, 0], bielas: [0, 1.42, 0], junta_cab: [0, 1.75, 0], cabecote: [0, 1.9, 0], valvulas: [0, 2.1, 0], tuchos: [0, 2.2, 0], comando: [0, 2.3, 0], tampa_valv: [0, 2.45, 0], tampa_oleo: [0, 2.52, 0], bobina: [0.1, 2.3, 0.3], cabos_vela: [0.3, 2.3, 0], velas: [0.3, 2.0, 0], sens_ect: [0, 2.0, 0.3], flange_agua: [0, 1.9, 0.35], termostato: [0.3, 1.0, -0.3],
  correia_dent: [0, 1.1, -0.5], tensor_dent: [0, 1.1, -0.55], polia_comando: [0, 2.0, -0.45], capas_correia: [0, 1.1, -0.68], bomba_agua: [-0.2, 0.95, -0.6], correia_acess: [0, 0.95, -0.78], tensor_acess: [-0.2, 0.95, -0.82], alternador: [0.35, 0.95, -0.7], compressor: [0.35, 0.3, -0.7], bomba_dir: [-0.35, 0.95, -0.7],
  coxim_dir: [0, 1.2, -0.4], coxim_cambio: [0, 0.9, 0.4], coxim_tras: [-0.3, 0.2, 0], respiro: [-0.3, 2.4, 0],
  tomada_ar: [0.5, 1.6, 0.1], caixa_filtro: [0, 2.8, 0], filtro_ar: [0, 3.0, 0], duto_ar: [-0.3, 2.6, 0.2], tbi: [-0.4, 1.5, 0.25], coletor_adm: [-0.45, 1.55, 0], sens_map: [-0.45, 1.75, 0], galeria: [-0.35, 1.4, 0], bicos: [-0.35, 1.3, 0], purga: [-0.4, 1.6, -0.2], pedal_acel: [-0.15, 0.2, 0],
  res_pf: [0.2, 1.2, -0.3], bomba_pf: [0.2, 1.1, -0.3], valv_pf: [-0.4, 1.6, -0.1], tubos_pf: [-0.4, 1.5, 0],
  ecu: [0.1, 0.9, 0.4], sens_ckp: [-0.2, 0.6, 0.3], sens_cmp: [0, 2.0, -0.35], sens_det: [-0.35, 0.8, 0], sonda: [0.45, 0.8, 0], sonda2: [0.45, 0.4, 0], sens_oleo: [0.4, 0.9, 0],
  cambio: [0, 0.6, 0.55], diferencial: [0, 0.4, 0.55], embreagem: [0, 0.62, 0.45], rol_emb: [0, 0.62, 0.55], garfo_emb: [-0.1, 0.8, 0.4], cabo_emb: [-0.1, 0.6, 0.3], semieixos: [0, 0, 0.25, 1], cabos_cambio: [-0.1, 0.3, 0.3], alavanca: [0, 0.4, 0], pedal_emb: [-0.15, 0.2, 0],
  radiador: [0.55, 0.3, 0], ventoinha: [0.35, 0.3, 0], condensador: [0.75, 0.3, 0], filtro_secador: [0.75, 0.3, -0.3], pressostato: [0.7, 0.5, -0.3], tubos_ac: [0.2, 0.3, -0.3], valv_exp: [-0.1, 0.5, -0.3], vaso: [-0.2, 0.9, -0.2], mang_sup: [0.3, 1.2, 0.25], mang_inf: [0.3, 0.2, -0.2], mang_aquec: [-0.2, 0.6, 0], rad_aquec: [0.1, 0.5, 0.1],
  coletor_esc: [0.55, 1.0, 0], protetor: [0.55, 1.2, 0], catalisador: [0.55, 0.3, 0], tubo_diant: [0, -0.35, 0], silenc_inter: [0, -0.45, 0], tubo_tras: [0, -0.4, 0], silenc_tras: [-0.3, -0.4, 0], coxins_esc: [0, -0.2, 0],
  bateria: [0.3, 0.9, 0.3], cabos_bat: [0.1, 0.7, 0.2], caixa_fus_motor: [0.1, 1.1, 0.35], caixa_fus_painel: [0, 0.4, 0.4], motor_partida: [-0.35, 0.6, 0.35], chicote: [0, 1.8, 0], buzina: [0.8, -0.05, 0], limpador: [0.1, 0.5, 0], limpador_tras: [-0.6, 0.4, 0], lavador: [0.7, 0.2, -0.2], ign_chave: [-0.2, 0.3, 0.1], comutadores: [-0.2, 0.3, 0.1],
  pedal_freio: [-0.15, 0.2, 0], servo: [-0.2, 0.5, 0.1], cil_mestre: [0.1, 0.6, 0.1], reserv_freio: [0.1, 0.8, 0.1], valv_equal: [0, -0.3, 0.2], tubos_freio: [0, -0.1, 0], pincas: [0, 0.05, 0.55, 1], pastilhas: [0, 0.05, 0.48, 1], discos: [0, 0, 0.4, 1], tambores: [0, 0, 0.45, 1], sapatas: [0, 0, 0.3, 1], freio_mao: [0, 0.25, 0], mang_vacuo: [0, 0.7, 0.1],
  pneus: [0, 0, 0.85, 1], rodas: [0, 0, 0.75, 1], mangas: [0, 0, 0.25, 1], amort_diant: [0, 0.25, 0.2, 1], molas_diant: [0, 0.35, 0.3, 1], coxins_amort: [0, 0.55, 0.2, 1], bandejas: [0, -0.2, 0.15, 1], barra_estab: [0, -0.25, 0], subchassi: [0, -0.35, 0],
  eixo_tras: [0, -0.3, 0], buchas_eixo: [0.2, -0.25, 0.2, 1], cubo_tras: [0, 0, 0.3, 1], amort_tras: [0, 0.3, 0.15, 1], molas_tras: [0, 0.4, 0.2, 1], estepe: [-0.3, 0.45, 0], macaco: [-0.2, 0.4, 0],
  volante_dir: [-0.3, 0.3, 0], coluna: [-0.1, 0.25, 0], caixa_dir: [0, -0.15, 0], barras_axiais: [0, -0.15, 0.15, 1], reserv_dir: [0.1, 0.9, -0.3], mang_dir: [0, 0.5, -0.3],
  tanque: [0, -0.45, 0], bomba_comb: [0, 0.3, 0], boia: [0, -0.3, 0], filtro_comb: [0, -0.35, -0.2], linhas_comb: [0, -0.25, 0], canister: [0.2, 0.5, -0.3]
};

return { SYS, PARTS, FIX, FXKIND, SYMPTOMS, FLOWS, MAINT, SPECS, GUIDES, EXV };
  }
});
