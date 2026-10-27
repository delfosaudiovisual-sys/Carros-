/* ===== BYD Dolphin 2024 (EV 95 cv), hatch 5 portas, 100% elétrico: motor dianteiro de 70 kW, bateria Blade de 44,9 kWh ===== */
(window.CARS = window.CARS || []).push({
  id: 'byd-dolphin', order: 5, storeKey: 'byd-dolphin', codePrefix: 'DLP', plate: 'DLP2E24',
  badge: 'EV', name: 'BYD Dolphin', short: 'Dolphin', title: 'BYD Dolphin', sub: 'Elétrico 95 cv (70 kW), bateria Blade de 44,9 kWh, 2024, tração dianteira',
  kmDefault: 0, size: [4.125, 1.770], wheelR: 0.320,
  paint: { color: 0x2f74a8, roughness: 0.3, metalness: 0.5, clearcoat: 1, clearcoatRoughness: 0.1 },
  oemLabel: 'Código BYD', oemHint: 'Código BYD: confirme pelo número do chassi (VIN) na concessionária; a BYD muda códigos conforme o mercado, o ano e a versão (Dolphin, Dolphin Plus, Mini).',
  open: { hood: 'capo', tail: 'tampa_tras', door: 'portas', rdoor: 'portas_tras' },
  xrayExtra: ['farois', 'lanternas', 'faixa_luz', 'piscas_lat', 'luz_freio', 'luz_placa', 'porta_recarga', 'camera_re', 'sensores_estac'],
  boxIds: ['monobloco', 'pneus', 'para_choque_d', 'para_choque_t', 'teto', 'retrovisores', 'laterais'],
  welcome: ['bateria_at', 'motor_el', 'porta_recarga', 'modulo_termico', 'ipb', 'bateria'],
  flowTip: 'o caminho da energia da bateria até as rodas, da regeneração, da recarga e do calor da bomba de calor',
  profile: { top: [[-1.985, .62], [-1.955, .76], [-1.90, .94], [-1.84, 1.09], [-1.74, 1.31], [-1.62, 1.50], [-1.35, 1.545], [-0.5, 1.57], [0.05, 1.55], [0.35, 1.42], [0.75, 1.13], [0.93, 1.01], [1.5, .935], [1.95, .855], [2.07, .78], [2.13, .64], [2.14, .60]],
    rearLow: 0.41, frontLow: 0.31, floor: 0.19, wheels: [1.35, -1.35], arch: 0.395, wheelR: 0.320, wheelY: 0.315 },
  maintNote: 'O plano da BYD Brasil prevê revisão a cada 20.000 km ou 12 meses, o que vier primeiro. Trocas de fluido abaixo são referências de oficina e de manuais de outros mercados: o manual e a concessionária do seu carro mandam. Alta tensão (cabos laranja, bateria, conjunto 8 em 1) é só para técnico treinado.',
  about: '<p>A carroceria é um hatch genérico de cinco portas com as medidas do Dolphin vendido no Brasil (4,125 × 1,770 × 1,570 m, entre-eixos de 2,70 m, bitola de 1,53 m), em azul, com a frente fechada, faróis finos, o vidro lateral de trás em forma de "barbatana", a faixa de luz na tampa traseira e rodas de liga de 16". Não reproduz o desenho externo da marca.</p><p>A mecânica segue o Dolphin de 95 cv (70 kW e 180 N·m) da plataforma e-Platform 3.0: conjunto elétrico "8 em 1" na frente (motor síncrono de ímãs, redutor de uma marcha com diferencial, inversor, carregador de bordo, conversor DC-DC, caixa de distribuição de alta tensão, controlador do veículo e gerenciador da bateria), bateria Blade de lítio-ferro-fosfato de 44,9 kWh sob o assoalho, bomba de calor que também esfria e aquece a bateria, freio integrado (IPB) com ESP, discos nas quatro rodas, freio de estacionamento elétrico, direção elétrica, McPherson na frente e eixo de torção atrás. A bateria de 12 V continua existindo e é carregada pelo conversor DC-DC.</p><p>Posições marcadas como aproximadas (módulos, caixas de fusíveis, reservatórios, módulo térmico, bateria de 12 V) e as quantidades de fixadores são as típicas; a geometria é simplificada. Dados técnicos: fichas da versão no Brasil (potência, torque, medidas, bateria, autonomia), material da BYD sobre a e-Platform 3.0 e manuais de outros mercados. Confira no seu: suspensão traseira (as versões mais potentes usam multibraço), pneus e equipamentos.</p>',

  data() {
const SYS = {
  bat:    { n: 'Bateria de tração', c: '#2FB37A', d: 'A bateria Blade de 44,9 kWh sob o assoalho: 104 lâminas de lítio-ferro-fosfato em série, a caixa de distribuição de alta tensão e os cabos laranja.' },
  motor:  { n: 'Motor e eletrônica', c: '#D0602A', d: 'O conjunto "8 em 1" na frente: motor síncrono de ímãs de 70 kW, inversor, controlador do veículo e gerenciador da bateria, com os coxins.' },
  trans:  { n: 'Redutor e semieixos', c: '#B0412A', d: 'Redutor de uma marcha com diferencial, trava de estacionamento e semieixos. Não há câmbio de marchas nem embreagem.' },
  recarga:{ n: 'Recarga', c: '#E3A21A', d: 'Porta CCS2 no para-lama dianteiro direito, carregador de bordo para corrente alternada e o carregador portátil.' },
  arref:  { n: 'Arrefecimento', c: '#1F8FC0', d: 'Circuito de líquido do motor e da eletrônica: bomba d’água elétrica, radiador pequeno, ventoinha e reservatório.' },
  clima:  { n: 'Bomba de calor e ar', c: '#4F7FE0', d: 'Compressor elétrico de alta tensão, módulo de válvulas e trocadores: gela ou aquece a cabine e a bateria.' },
  ele:    { n: 'Elétrica 12 V', c: '#D6B000', d: 'Bateria de 12 V, conversor DC-DC, fusíveis, módulos, luzes de LED, câmera, sensores, buzina e o som de aviso a pedestres.' },
  freio:  { n: 'Freios', c: '#D2334A', d: 'Freio integrado (IPB) com ESP e regeneração, discos ventilados na frente, sólidos atrás e freio de estacionamento elétrico.' },
  susp:   { n: 'Suspensão e rodas', c: '#9B3FA8', d: 'McPherson na frente; atrás, eixo de torção com molas e amortecedores separados. Rodas de 16" e kit de reparo no lugar do estepe.' },
  dir:    { n: 'Direção', c: '#1FA394', d: 'Pinhão e cremalheira com assistência elétrica: sem bomba e sem óleo.' },
  carro:  { n: 'Carroceria', c: '#8FA6C4', d: 'Cada peça da lataria, como ela é presa e como sai: parafusada, soldada, colada ou encaixada.' },
  int:    { n: 'Interior e segurança', c: '#A8845A', d: 'Painel com a tela giratória, quadro digital, console, seis airbags, bancos, cintos e acabamentos.' }
};
const PARTS = {};
function P(id, n, s, w, f, m, r) { PARTS[id] = { id, n, s, w, f, m, r: r ? r.split(' ') : [] }; }
function E(id, ft, e) { PARTS[id].ft = ft; PARTS[id].e = e; }
window.CAR_PARTS['byd-dolphin'](P, E);

/* ===== Fixadores ===== */
const FIX = {};
function F(id, n, parent, q, spec, torque, note) { FIX[id] = { id, n, p: parent, q, spec, t: torque, note }; }
F('fx_roda', 'Porcas de roda', 'rodas', 20, '5 por roda', '≈ 120 N·m (confirme no manual)', 'Aperte em cruz com torquímetro e reaperte depois de uns 50 km. Carro elétrico é pesado e tem torque imediato: porca frouxa aparece cedo.');
F('fx_cubo', 'Porcas dos cubos dianteiros', 'mangas', 2, 'Porca central do semieixo, com trava', 'muito alto (confirme no manual)', 'Porca nova. Aperto final com o carro no chão.');
F('fx_bat', 'Parafusos da bateria de tração', 'bateria_at', 18, '7 em cada aba lateral (nas longarinas das soleiras) e 2 na frente e 2 atrás', 'alto, na ordem do manual', 'Só com o carro desenergizado, no elevador e com mesa hidráulica embaixo da bateria. Parafusos e vedações novos se o manual pedir.');
F('fx_conector_at', 'Travas dos conectores da bateria', 'conector_at', 3, 'Dois de potência (laranja) e o de dados', 'trava de dois estágios', 'Nunca solte com o carro ligado. Antes de mexer, 12 V desligada, espera e medição de ausência de tensão com equipamento de alta tensão.');
F('fx_conj', 'Parafusos da tampa da eletrônica (8 em 1)', 'conj_eletrico', 4, 'Na tampa de cima do bloco de eletrônica', 'leve; vedação nova', 'Lá dentro há capacitores que guardam carga: só técnico de alta tensão abre.');
F('fx_coxins', 'Fixações dos coxins do conjunto elétrico', 'coxim_dir', 5, 'Coxim direito, esquerdo e tirante de baixo', 'alto (manual)', 'Troque com o conjunto apoiado por baixo e aperte com ele em repouso.');
F('fx_redutor', 'Bujões do redutor', 'redutor', 2, 'Dreno embaixo e abastecimento na lateral', 'médio (manual), arruelas novas', 'O nível certo é até a borda do furo de abastecimento, com o carro no plano. O volume é pequeno (menos de 1 litro).');
F('fx_porta_recarga', 'Parafusos da porta de recarga', 'porta_recarga', 4, 'Por dentro do para-lama direito, com a caixa de roda tirada', 'leve', 'Os cabos dela são de alta tensão: desenergize antes. Vedação boa evita água nos pinos.');
F('fx_compressor', 'Parafusos do compressor elétrico', 'compressor', 3, 'No suporte do subchassi, na frente', 'médio', 'Recolha o fluido com máquina e desenergize antes: o compressor é ligado na alta tensão.');
F('fx_modulo', 'Fixações do módulo térmico', 'modulo_termico', 3, 'Porcas no suporte, com coxins', 'leve', 'O circuito do ar passa por ele: recolha o fluido antes de soltar as linhas.');
F('fx_ipb', 'Porcas do freio integrado (IPB)', 'ipb', 4, 'No corta-fogo, do lado do motorista', 'médio', 'Depois de abrir o circuito, a sangria e a calibração do pedal pedem scanner.');
F('fx_sens_roda', 'Parafusos dos sensores das rodas', 'sens_roda', 4, '1 por sensor', 'leve', 'Limpe o furo e o anel dentado antes de montar.');
F('fx_pinca', 'Parafusos das pinças dianteiras', 'pincas', 8, 'Pinos-guia e suporte, por lado', 'guias médio; suporte alto (manual)', 'Limpe e lubrifique os pinos-guia com graxa própria.');
F('fx_pinca_t', 'Parafusos das pinças traseiras', 'pincas_tras', 8, 'Pinos-guia e suporte, por lado', 'guias médio; suporte alto (manual)', 'O pistão tem o motorzinho do freio de estacionamento: recolha pelo modo de manutenção, nunca girando à força.');
F('fx_epb', 'Conectores dos motores do freio de estacionamento', 'epb', 2, '1 por pinça traseira', 'encaixe com trava', 'Com a ignição desligada.');
F('fx_amort_d', 'Fixações dos amortecedores dianteiros', 'amort_diant', 10, '3 porcas no topo e 2 parafusos na manga, por lado', 'topo médio; manga alto (manual)', 'Desmonte só com compressor de molas.');
F('fx_bandeja', 'Fixações das bandejas', 'bandejas', 6, 'Buchas no subchassi e pivô', 'alto', 'Aperte as buchas com o peso do carro sobre as rodas.');
F('fx_subchassi', 'Parafusos do subchassi', 'subchassi', 4, 'Na carroceria', 'muito alto', 'Nunca solte sem apoiar o conjunto elétrico.');
F('fx_eixo_t', 'Parafusos das buchas do eixo traseiro', 'eixo_tras', 4, '2 por lado, nos suportes da carroceria', 'alto', 'Aperto final com o peso do carro sobre as rodas.');
F('fx_amort_t', 'Fixações dos amortecedores traseiros', 'amort_tras', 6, '1 embaixo, no eixo, e 2 em cima, por lado', 'alto', 'As de cima ficam dentro do porta-malas, sob o acabamento.');
F('fx_bateria', 'Terminais e grampo da bateria de 12 V', 'bateria', 3, 'Porcas de 10 mm', 'firme, sem esmagar', 'Solte o negativo primeiro e ligue por último. Desligar a 12 V é o primeiro passo de qualquer serviço perto da alta tensão.');
F('fx_volante_dir', 'Parafuso do volante', 'volante_dir', 1, 'Parafuso central', 'médio (manual)', 'Rodas retas e cabo espiral centrado.');
F('fx_airbag', 'Parafusos do módulo do airbag', 'airbag_mot', 2, 'Por trás do volante', '≈ 10 N·m', 'Bateria de 12 V desligada há pelo menos 3 minutos. Guarde o módulo com a bolsa para cima.');
F('fx_coluna', 'Fixações da coluna de direção', 'coluna', 4, 'Porcas sob o painel e parafuso da junta no pinhão', 'médio; junta alto', 'Marque a junta antes de soltar. Depois, calibre o ângulo do volante com scanner.');
F('fx_mangueiras', 'Abraçadeiras das mangueiras', 'mang_sup', 7, 'Circuito do motor e da eletrônica', 'firme', 'Abraçadeira frouxa é vazamento; complete só com o líquido indicado.');
F('fx_limpador', 'Porcas dos braços dos limpadores', 'limpador', 3, '2 na frente e 1 atrás', 'médio', 'Marque a posição de repouso antes de tirar.');
F('fx_caixa_dir', 'Fixações da caixa de direção', 'caixa_dir', 6, 'Braçadeiras no subchassi e porcas dos terminais', 'alto', 'Alinhamento obrigatório depois.');
F('fx_bancos', 'Parafusos dos bancos', 'bancos_diant', 8, '4 por banco', 'alto', 'Item de segurança. Desligue a 12 V antes: o banco tem o airbag lateral e o sensor do cinto.');
F('fx_cintos', 'Ancoragens dos cintos', 'cintos', 6, 'Parafusos de ancoragem', 'alto', 'Item de segurança: nada de improviso.');
F('fx_paralama', 'Parafusos dos para-lamas', 'paralamas', 14, 'Cerca de 7 por lado: 4 na borda de cima (sob o capô), 1 junto ao farol, 1 embaixo na soleira e 1 atrás, na coluna da porta', 'leve (chapa fina)', 'No lado direito fica a porta de recarga: desligue o conector e a alta tensão antes de tirar o para-lama.');
F('fx_parachoque', 'Parafusos e presilhas do para-choque dianteiro', 'para_choque_d', 11, 'Em cima (na travessa, sob o capô), nas caixas de roda e embaixo', 'leve', 'Solte todos e puxe as pontas para fora das guias laterais.');
F('fx_guias_pcd', 'Guias laterais do para-choque dianteiro', 'para_choque_d', 2, 'Suportes plásticos sob os faróis', 'encaixe deslizante', 'Guia quebrada deixa a ponta do para-choque solta.');
F('fx_parachoque_t', 'Parafusos e presilhas do para-choque traseiro', 'para_choque_t', 10, 'Em cima (com a tampa aberta), nas caixas de roda e embaixo', 'leve', 'Desligue o conector dos sensores de estacionamento antes de puxar.');
F('fx_guias_pct', 'Guias laterais do para-choque traseiro', 'para_choque_t', 2, 'Suportes plásticos sob as lanternas', 'encaixe deslizante', 'Puxe a ponta para fora com cuidado.');
F('fx_forros', 'Presilhas dos forros das caixas de roda', 'caixas_roda', 12, 'Na borda do para-lama', 'encaixe por pressão', 'Presilhas plásticas quebram fácil; tenha reposição à mão.');
F('fx_capo', 'Parafusos das dobradiças do capô', 'dobr_capo', 8, '2 no capô e 2 na carroceria, por dobradiça', 'médio', 'Risque a posição antes de soltar: é o que acerta as frestas.');
F('fx_fech_capo', 'Parafusos da fechadura do capô', 'fech_capo', 2, 'Na travessa do painel frontal', 'médio', 'A fechadura tem folga de regulagem para alinhar com a lingueta.');
F('fx_dobradicas', 'Parafusos das dobradiças e limitadores', 'dobradicas', 36, 'Por porta: 4 na coluna, 4 na porta e 1 no limitador', 'alto', 'É na folga desses parafusos que se regula a fresta. Apoie a porta antes de soltar.');
F('fx_fech_portas', 'Parafusos das fechaduras e dos batentes', 'fech_portas', 20, 'Por porta: 3 na fechadura e 2 no batente', 'médio', 'As maçanetas embutidas dependem da fechadura elétrica: com a 12 V descarregada, use a chave mecânica.');
F('fx_retrovisor', 'Fixação dos retrovisores', 'retrovisores', 6, '3 porcas por espelho, por dentro da porta', 'leve', 'O repetidor de seta fica no espelho: desligue o conector.');
F('fx_vidro_porta', 'Parafusos do vidro na máquina (portas dianteiras)', 'vidros_portas', 4, '2 por porta', 'leve', 'Com o forro tirado, posicione o vidro até os parafusos aparecerem nos furos.');
F('fx_vidro_porta_t', 'Parafusos do vidro na máquina (portas traseiras)', 'vidros_portas_tras', 4, '2 por porta', 'leve', 'Com o forro tirado, posicione o vidro até os parafusos aparecerem.');
F('fx_maq_vidro', 'Fixação das máquinas de vidro (dianteiras)', 'maq_vidro', 8, '4 por porta, no painel interno', 'leve', 'Desligue o conector do motor antes.');
F('fx_maq_vidro_t', 'Fixação das máquinas de vidro (traseiras)', 'maq_vidro_tras', 6, '3 por porta, no painel interno', 'leve', 'Desligue o conector do motor antes.');
F('fx_forro_porta', 'Presilhas dos forros das portas dianteiras', 'forros_portas', 16, 'Em volta do forro, mais parafusos no puxador', 'encaixe por pressão', 'Solte com espátula plástica rente às presilhas.');
F('fx_forro_porta_t', 'Presilhas dos forros das portas traseiras', 'forros_portas_tras', 12, 'Em volta do forro, mais o parafuso do puxador', 'encaixe por pressão', 'Solte com espátula plástica rente às presilhas.');
F('fx_tampa', 'Parafusos das dobradiças da tampa traseira', 'dobr_tampa', 8, 'Porcas no teto (sob o forro) e parafusos na tampa', 'médio', 'Apoie a tampa e tire os amortecedores antes de soltar as dobradiças.');
F('fx_amort_tampa', 'Pinos dos amortecedores da tampa', 'amort_tampa', 4, 'Pinos esféricos com trava de mola', 'trava de mola', 'Levante a trava com uma chave de fenda pequena e puxe o amortecedor.');
F('fx_fech_tampa', 'Parafusos da fechadura e do batente da tampa', 'fech_tampa', 4, '2 na fechadura (na tampa) e 2 no batente (no painel traseiro)', 'médio', 'Regule o batente se a tampa bater ou não fechar de primeira.');
F('fx_farol', 'Parafusos dos faróis', 'farois', 6, '3 por farol', 'leve', 'Regule o facho depois de recolocar.');
F('fx_lanterna', 'Fixações das lanternas', 'lanternas', 6, '3 por lanterna: porcas por dentro e um pino de encaixe', 'leve (plástico)', 'Vedação nova evita água no porta-malas.');
F('fx_grade_torpedo', 'Presilhas da grade do torpedo', 'grade_torpedo', 6, 'Presilhas e encaixe sob a borda do para-brisa', 'encaixe por pressão', 'Tire os braços do limpador antes.');
F('fx_travessa', 'Parafusos da travessa do painel frontal', 'travessa_frontal', 4, 'Nas pontas, junto aos faróis', 'médio', 'Solte só com radiador, trocador da bomba de calor e faróis apoiados.');
F('fx_viga', 'Parafusos da viga de impacto dianteira', 'viga_dianteira', 4, 'Nas pontas das longarinas', 'alto', 'Depois de batida, confira a viga, as longarinas e o conjunto elétrico.');
F('fx_viga_t', 'Parafusos da viga de impacto traseira', 'viga_traseira', 4, 'No painel traseiro', 'alto', 'Depois de batida, confira o painel por dentro do porta-malas.');
F('fx_solda_teto', 'Pontos de solda do teto', 'teto', 0, 'Nas bordas: sobre as portas, na frente e na abertura da tampa', 'não se desmonta', 'Troca de teto é serviço de funilaria.');
F('fx_solda_laterais', 'Pontos de solda das laterais', 'laterais', 0, 'Na coluna central, na soleira, na caixa de roda, no painel traseiro e junto ao teto', 'não se desmonta', 'Fissura na massa de vedação das emendas deixa entrar água.');
F('fx_solda_soleiras', 'Pontos de solda das soleiras', 'soleiras', 0, 'Na aba de baixo e na borda das aberturas das portas', 'não se desmonta', 'A bateria é presa nas longarinas por dentro das soleiras: macaco só nos pontos marcados, nunca na caixa da bateria.');
F('fx_solda_colunas', 'Pontos de solda das colunas', 'colunas', 0, 'Na borda das portas e na moldura do para-brisa', 'não se desmonta', 'Coluna amassada compromete a estrutura.');
F('fx_solda_painel_tras', 'Pontos de solda do painel traseiro', 'painel_tras', 0, 'Nas laterais e no assoalho do porta-malas', 'não se desmonta', 'Depois de batida na traseira, confira por dentro do porta-malas.');
F('fx_cola_parabrisa', 'Cola do para-brisa', 'para_brisa', '1 cordão', 'Cordão de poliuretano em volta do vidro', 'cura em algumas horas', 'Depois da troca, recalibre a câmera e os sensores do para-brisa, se o carro tiver.');
F('fx_cola_vidro_tras', 'Cola do vidro traseiro', 'vidro_tras', '1 cordão', 'Cordão de poliuretano na tampa', 'cura em algumas horas', 'Água no porta-malas pode vir de falha nesse cordão.');
F('fx_cola_laterais', 'Cola dos vidros laterais', 'vidros_laterais', '2 cordões', 'Cordão de poliuretano na lateral', 'cura em algumas horas', 'Vidro fixo chiando ou deixando entrar água indica cola descolada.');

const FXKIND = {
  parafuso: ['Parafusos e porcas', 'Desmontam com ferramenta; o aperto certo importa.'],
  presilha: ['Presilhas', 'Encaixes plásticos de pressão; quebram com facilidade.'],
  guia: ['Guias de encaixe', 'Suportes onde as pontas das peças deslizam e se apoiam.'],
  pino: ['Pinos, travas e conectores', 'Articulações e conectores com trava (os laranja são de alta tensão).'],
  solda: ['Pontos de solda', 'Chapas unidas de vez: fazem parte da estrutura.'],
  cola: ['Colas', 'Vidros fixos presos com cordão de poliuretano.']
};
function K(k, ...ids) { ids.forEach(id => { FIX[id].k = k; }); }
K('presilha', 'fx_forros', 'fx_forro_porta', 'fx_forro_porta_t', 'fx_grade_torpedo');
K('guia', 'fx_guias_pcd', 'fx_guias_pct');
K('pino', 'fx_amort_tampa', 'fx_conector_at', 'fx_epb');
K('solda', 'fx_solda_teto', 'fx_solda_laterais', 'fx_solda_soleiras', 'fx_solda_colunas', 'fx_solda_painel_tras');
K('cola', 'fx_cola_parabrisa', 'fx_cola_vidro_tras', 'fx_cola_laterais');
Object.values(FIX).forEach(f => { f.k = f.k || 'parafuso'; });

/* ===== Sintomas ===== */
const SYMPTOMS = [
  { id: 'naoliga', n: 'Não fica "READY" ou nem acende o painel',
    d: 'Quem acorda o carro é a bateria de 12 V: ela liga os módulos e fecha os contatores da alta tensão. Com ela fraca, o carro pode não ligar mesmo com a bateria de tração cheia.',
    s: [
      ['bateria', 'Bateria de 12 V fraca: a causa mais comum. O painel pisca, as portas não destravam direito e o READY não aparece.', 'Meça a tensão (abaixo de 12 V é suspeita) e teste com carga; dá para dar partida auxiliar com cabos, como num carro comum, pelos pontos indicados no manual.'],
      ['pedal_freio', 'Sem o pé no freio (ou com o interruptor do pedal falhando) o sistema não arma.', 'Luz de freio acende ao pisar?'],
      ['bcm', 'Chave presencial não reconhecida (pilha fraca da chave ou antena).', 'Encoste a chave no ponto indicado no manual; troque a pilha.'],
      ['pdu', 'Contator ou fusível de alta tensão com defeito: o carro acende mas não chega ao READY.', 'Código de falha com scanner da marca; serviço de alta tensão.'],
      ['bms', 'Falha de isolamento ou de alguma lâmina: o BMS não deixa os contatores fecharem.', 'Mensagem de verificar o sistema de alta tensão; diagnóstico na concessionária.'],
      ['dcdc', 'Conversor DC-DC parado deixa a 12 V descarregar de novo.', 'Com o carro em READY, a tensão da 12 V deve subir para perto de 14 V.']
    ] },
  { id: 'autonomia', n: 'Autonomia caiu ou a porcentagem cai rápido',
    d: 'No frio e na estrada a autonomia cai e isso é normal; o ar-condicionado e a velocidade pesam muito. Compare sempre no mesmo trajeto, com os pneus calibrados.',
    s: [
      ['pneus', 'Pneu murcho aumenta o atrito e rouba autonomia.', 'Calibre com os pneus frios pela etiqueta da coluna.'],
      ['modulo_termico', 'Bomba de calor ou o aquecimento da bateria trabalhando muito.', 'Veja na tela o consumo do clima; no calor, pré-climatize ligado na tomada.'],
      ['pincas', 'Pinça presa segura a roda.', 'Roda bem mais quente que as outras depois de rodar.'],
      ['pincas_tras', 'Freio de estacionamento elétrico que não solta por inteiro.', 'Chiado e cheiro de freio na traseira; a luz do freio de estacionamento pode acender.'],
      ['bateria_at', 'A indicação de carga fica imprecisa sem uma carga completa de vez em quando.', 'Carregue até 100% e use até baixar bem, como o manual indica, para o BMS recalibrar.'],
      ['celulas', 'Perda natural de capacidade com o tempo e o uso (mais rápida com muita carga rápida no calor).', 'O estado de saúde (SOH) aparece no scanner da marca.'],
      ['cubo_tras', 'Rolamento roncando também gasta energia.', 'Ronco que aumenta com a velocidade.']
    ] },
  { id: 'recarga', n: 'Não carrega ou carrega devagar',
    d: 'Na tomada comum a recarga é lenta por natureza (algumas horas de 10% a 100% num carregador de parede, bem mais numa tomada de 10 A). Na carga rápida, a velocidade cai com a bateria fria, quente ou perto de cheia.',
    s: [
      ['cabo_recarga', 'Tomada sem aterramento, extensão ou disjuntor fraco: o carregador portátil não libera.', 'Luzes do carregador portátil; use tomada dedicada com terra.'],
      ['porta_recarga', 'Pino sujo, torto ou trava do plugue sem fechar.', 'Olhe a porta com lanterna; o plugue deve travar com um clique.'],
      ['obc', 'Carregador de bordo com defeito: não carrega na tomada, mas carrega na rápida.', 'Teste em outro carregador de corrente alternada; código de falha no scanner.'],
      ['pdu', 'Contator ou fusível da recarga rápida.', 'Carrega em casa mas não na rápida: diagnóstico na concessionária.'],
      ['bms', 'Bateria fria ou quente demais: o BMS limita a corrente para protegê-la.', 'No frio, a carga rápida começa devagar e acelera quando a bateria aquece.'],
      ['placa_fria', 'Sem arrefecimento da bateria, a carga rápida é cortada.', 'Ar-condicionado também sem gelar? Pode ser falta de fluido no circuito.'],
      ['bateria', 'Bateria de 12 V muito fraca impede iniciar a recarga.', 'Teste a 12 V.']
    ] },
  { id: 'potencia', n: 'Perda de força, tartaruga no painel ou aviso do sistema elétrico',
    d: 'Para se proteger, o carro limita a potência quando a bateria está quase vazia, quando algo esquenta demais ou quando há falha num sensor. Pare num lugar seguro e leia a mensagem da tela.',
    s: [
      ['bateria_at', 'Carga muito baixa: a potência é limitada para chegar ao carregador.', 'Porcentagem na tela; recarregue logo.'],
      ['inversor', 'Inversor quente ou com falha.', 'Código de falha; confira o nível do líquido de arrefecimento.'],
      ['vaso', 'Líquido baixo no circuito do motor e da eletrônica.', 'Nível no reservatório com o carro frio.'],
      ['bomba_agua', 'Bomba d’água elétrica parada.', 'Sem ruído da bomba com o carro em READY e quente; código de falha.'],
      ['resolver', 'Sensor de posição do rotor com sinal ruim: o motor perde suavidade e força.', 'Código de falha do motor.'],
      ['vcu', 'Falha do controlador ou de um sensor do pedal.', 'Código de falha; confira conectores.']
    ] },
  { id: 'ruido', n: 'Zumbido, chiado ou batida vindos da frente ao acelerar ou ao tirar o pé',
    d: 'O carro elétrico é silencioso, então ruídos pequenos aparecem. Um zumbido agudo baixinho do motor e o som de aviso a pedestres (até uns 30 km/h) são normais.',
    s: [
      ['redutor', 'Rolamento ou engrenagem do redutor gasto: zumbido que acompanha a velocidade.', 'Nível do óleo do redutor; ruído igual acelerando e desacelerando é rolamento.'],
      ['coxim_tras', 'Tirante com bucha gasta: batida quando o torque inverte (acelerar e tirar o pé).', 'Peça para alguém acelerar e regenerar com o carro freado e observe o conjunto.'],
      ['coxim_dir', 'Coxim direito rachado.', 'Conjunto baixo desse lado e batida em lombadas.'],
      ['semieixos', 'Junta homocinética com folga: estalo em curva fechada acelerando.', 'Coifa rasgada e graxa espirrada.'],
      ['avas', 'Som de aviso a pedestres: é normal em baixa velocidade.', 'Some acima de uns 30 km/h.'],
      ['ventoinha', 'Ventoinha ou compressor trabalhando depois de desligar, na recarga ou no calor.', 'É o arrefecimento da bateria e da eletrônica.']
    ] },
  { id: 'temperatura', n: 'Aviso de temperatura do motor ou da eletrônica',
    d: 'O motor e o inversor são arrefecidos por líquido, como num carro a combustão, mas com uma bomba elétrica e um radiador pequeno.',
    s: [
      ['vaso', 'Nível baixo é o começo de quase tudo.', 'Carro frio: confira o reservatório.'],
      ['bomba_agua', 'Bomba elétrica sem girar.', 'Código de falha e mangueira fria.'],
      ['radiador', 'Colmeia suja ou amassada na frente do carro.', 'Olhe e lave com água de baixa pressão.'],
      ['ventoinha', 'Ventoinha que não liga.', 'Deve ligar parado com o ar ligado ou na carga rápida.'],
      ['mang_sup', 'Mangueira ou abraçadeira vazando.', 'Marcas do líquido (colorido) embaixo do carro.'],
      ['sens_temp', 'Sensor de temperatura com leitura errada.', 'Compare as leituras no scanner com o carro frio.']
    ] },
  { id: 'ar', n: 'Ar-condicionado não gela ou o aquecimento não esquenta',
    d: 'Aqui o mesmo circuito gela e aquece: a bomba de calor inverte o caminho do fluido com válvulas. E ele também cuida da bateria, então a bateria tem prioridade na carga rápida.',
    s: [
      ['pressostato', 'Falta de fluido: os sensores de pressão não deixam o compressor ligar.', 'Manômetros na oficina de ar; procure vazamento antes de recarregar.'],
      ['compressor', 'Compressor elétrico sem alimentação ou com falha no inversor dele.', 'Código de falha; o cabo laranja chega nele: serviço de alta tensão.'],
      ['modulo_termico', 'Válvula de expansão eletrônica ou de três vias travada.', 'Diagnóstico com scanner (comando das válvulas).'],
      ['tubos_ac', 'Vazamento nas conexões ou nos anéis.', 'Mancha de óleo nas conexões; teste com corante ou detector.'],
      ['condensador', 'Trocador da frente sujo ou amassado.', 'Lave por trás com água de baixa pressão.'],
      ['filtro_cabine', 'Filtro entupido deixa pouco ar passar.', 'Tire pelo porta-luvas e olhe.'],
      ['vent_interno', 'Ventilador fraco ou parado.', 'Ruído e vazão nas saídas.']
    ] },
  { id: 'freio', n: 'Freio chiando, pedal diferente ou luz do freio',
    d: 'Boa parte das freadas é feita pelo motor (regeneração), por isso as pastilhas duram muito — e os discos traseiros, pouco usados, enferrujam. O pedal é eletrônico: a sensação pode mudar com a regeneração forte ou fraca.',
    s: [
      ['discos_tras', 'Discos traseiros com ferrugem chiam e vibram.', 'Freadas firmes de vez em quando (em lugar seguro) limpam; ferrugem funda pede troca.'],
      ['pastilhas', 'Pastilha no fim chia pela lingueta de aviso.', 'Espessura menor que 3 mm.'],
      ['pincas', 'Pino-guia preso faz o carro puxar.', 'Roda quente e desgaste desigual.'],
      ['reserv_freio', 'Fluido velho ou nível baixo.', 'Nível e data da última troca (DOT 4, a cada 2 anos é a referência).'],
      ['ipb', 'Falha do freio integrado: luz de freio e aviso na tela; o pedal fica duro e o freio continua só no esforço do pé.', 'Diagnóstico com scanner da marca.'],
      ['sens_roda', 'Sensor de roda com falha acende ABS e ESP.', 'Scanner mostra qual roda.']
    ] },
  { id: 'epb', n: 'Freio de estacionamento não solta ou acende a luz dele',
    d: 'Não há alavanca nem cabo: um motorzinho em cada pinça traseira aperta e solta as pastilhas. Para trocar pastilhas traseiras é preciso pôr o sistema em modo de manutenção.',
    s: [
      ['epb', 'Motor da pinça ou conector com defeito.', 'Código de falha; ouça o zumbido dos dois lados ao acionar.'],
      ['bateria', 'Bateria de 12 V fraca não tem força para os motorzinhos.', 'Teste a 12 V.'],
      ['pastilhas_tras', 'Pastilhas trocadas sem o modo de manutenção: o sistema perde a referência.', 'Refaça a calibração com scanner.'],
      ['pincas_tras', 'Pistão emperrado.', 'Roda traseira quente depois de rodar.']
    ] },
  { id: 'isolamento', n: 'Aviso de falha de isolamento ou "verifique o sistema de alta tensão"',
    d: 'O BMS mede o tempo todo se a alta tensão está isolada da carroceria. Água, umidade ou um cabo danificado disparam o aviso e o carro pode se recusar a ligar ou a carregar. Não abra nada laranja: leve à concessionária.',
    s: [
      ['conector_at', 'Água ou sujeira nos conectores da bateria (atrás de alagamento ou lavagem por baixo com jato forte).', 'Inspeção visual por baixo; não lave o fundo com alta pressão.'],
      ['bateria_at', 'Pancada no fundo da caixa (meio-fio, lombada alta) pode amassar a caixa e deixar entrar umidade.', 'Olhe o fundo do carro depois de pancadas.'],
      ['cabos_at', 'Cabo laranja raspado ou esmagado.', 'Inspeção dos cabos no cofre e embaixo do carro.'],
      ['compressor', 'O compressor do ar é ligado na alta tensão e pode acusar fuga.', 'Teste isolando o compressor, na oficina autorizada.'],
      ['obc', 'Carregador de bordo com umidade.', 'Aviso aparece só ao carregar na tomada?']
    ] },
  { id: 'doze', n: 'Bateria de 12 V descarregando com o carro parado',
    d: 'Mesmo desligado, o carro mantém módulos e a conectividade acordados por um tempo. Se a 12 V morre com frequência, alguém não está dormindo ou o conversor não está carregando.',
    s: [
      ['bateria', 'Bateria de 12 V no fim da vida.', 'Teste com carga numa autoelétrica.'],
      ['dcdc', 'Conversor DC-DC sem carregar a 12 V.', 'Com o carro em READY, a tensão da 12 V deve ficar perto de 14 V.'],
      ['bcm', 'Módulo que não dorme (luz interna, porta mal fechada, acessório).', 'Medição de corrente com o carro dormindo.'],
      ['tela', 'Multimídia ou conectividade ficando acordada.', 'Atualizações de software costumam corrigir.'],
      ['cabos_bat', 'Terminal oxidado ou frouxo.', 'Limpe e aperte.']
    ] },
  { id: 'direcao', n: 'Direção pesada, com folga ou barulho',
    d: 'Na direção elétrica não há óleo nem bomba: peso fora do normal vem da alimentação, do sistema elétrico ou da parte mecânica.',
    s: [
      ['eps', 'Assistência reduzida ou desligada.', 'Luz da direção no painel e código de falha.'],
      ['bateria', 'Tensão baixa da 12 V reduz a assistência.', 'Teste a 12 V e o conversor DC-DC.'],
      ['pneus', 'Pneu murcho pesa a direção.', 'Calibre com os pneus frios.'],
      ['coxins_amort', 'Rolamento do coxim travado endurece o volante e estala.', 'Estalo virando o volante parado.'],
      ['barras_axiais', 'Terminais e axiais com folga.', 'Folga na roda segurando nas laterais.'],
      ['coluna', 'Junta da coluna presa ou com folga.', 'Estalo vindo de dentro do carro ao girar o volante.']
    ] },
  { id: 'dianteira', n: 'Batidas na suspensão dianteira em buracos',
    d: 'Carro elétrico é mais pesado (a bateria pesa algumas centenas de quilos): buchas e bieletas trabalham mais.',
    s: [
      ['barra_estab', 'Bieletas gastas: o toc-toc mais comum.', 'Chacoalhe a barra com o carro no chão.'],
      ['bandejas', 'Bucha da bandeja rachada ou pivô com folga.', 'Folga com alavanca, no elevador.'],
      ['coxins_amort', 'Coxim ou rolamento do topo.', 'Estalo ao esterçar parado.'],
      ['amort_diant', 'Amortecedor sem ação.', 'O carro quica ao empurrar a frente.'],
      ['barras_axiais', 'Terminais e axiais com folga.', 'Folga na roda segurando nas laterais.'],
      ['coxim_tras', 'Tranco do conjunto elétrico pode parecer suspensão.', 'Batida ao acelerar e ao tirar o pé.']
    ] },
  { id: 'traseira', n: 'Barulho na traseira ou rangido em lombadas',
    d: 'O eixo de torção é simples: quem gasta são as buchas, os amortecedores e os coxins das molas. A tampa traseira e o que vai solto no porta-malas também fazem barulho.',
    s: [
      ['buchas_eixo', 'Buchas do eixo rachadas: estalo em lombada.', 'Folga com alavanca no elevador.'],
      ['amort_tras', 'Amortecedor batendo ou vazando.', 'Óleo escorrendo e batida seca.'],
      ['molas_tras', 'Coxim da mola ressecado range.', 'Rangido que acompanha o sobe e desce.'],
      ['amort_tampa', 'Tampa traseira folgada vibra.', 'Regule os batentes de borracha e confira a fechadura.'],
      ['kit_pneu', 'Kit de reparo ou carregador portátil soltos no porta-malas.', 'Prenda nos lugares deles.'],
      ['cubo_tras', 'Rolamento traseiro roncando.', 'Ronco que aumenta com a velocidade.']
    ] }
];

/* ===== Caminhos animados ===== */
const MX = 1.46, MY = 0.43, DX = 1.35, DY = 0.315, DZ = -0.03, IX = 1.60, IY = 0.47, XFA = 1.35, WY = 0.315;
const FLOWS = [
  { id: 'forca', n: 'Da bateria até as rodas', c: '#2FB37A', d: 'Como a energia guardada nas lâminas vira giro nas rodas — sem marchas, sem embreagem e quase sem barulho.', motion: 'forca',
    leg: [['#2FB37A', 'corrente contínua'], ['#E3A21A', 'corrente alternada (três fases)'], ['#B0412A', 'giro'], ['#35B6C9', 'comandos']],
    steps: [
      ['celulas', 'A energia está nas 104 lâminas da bateria, ligadas em série: cerca de 330 V.', { at: [-0.10, 0.21, 0], c: '#2FB37A' }],
      ['bms', 'O gerenciador da bateria confere tensão e temperatura e libera a corrente.', { c: '#35B6C9' }],
      ['conector_at', 'A corrente sai pelos conectores de potência na frente da caixa…', { c: '#2FB37A' }],
      ['cabos_at', '…e sobe pelos cabos laranja até o cofre.', { route: 1, pick: [0, 1] }],
      ['pdu', 'A caixa de distribuição, com os contatores fechados, entrega a corrente ao inversor.'],
      ['vcu', 'O controlador do veículo lê o pedal do acelerador e decide quanto torque pedir.', { c: '#35B6C9' }],
      ['inversor', 'O inversor transforma a corrente contínua em alternada de três fases, na frequência certa para a rotação.', { c: '#E3A21A' }],
      ['motor_el', 'O campo que gira no estator puxa os ímãs…', { at: [MX, MY, -0.27] }],
      ['rotor', '…e o rotor gira, até mais de 10 mil rotações por minuto.', { at: [MX, MY, -0.27], c: '#B0412A' }],
      ['redutor', 'O redutor de uma marcha diminui a rotação e multiplica o torque.', { at: [IX - 0.07, IY - 0.04, -0.03] }],
      ['diferencial', 'O diferencial divide entre as rodas.', { at: [DX, DY, DZ] }],
      ['semieixos', 'Os semieixos levam o giro até as rodas.', { route: 1 }],
      ['mangas', 'O cubo gira sobre o rolamento.', { at: [[XFA, WY, 0.745], [XFA, WY, -0.745]] }],
      ['pneus', 'E o pneu empurra o chão. A ré é o mesmo motor girando ao contrário.', { at: [[XFA, 0.02, 0.765], [XFA, 0.02, -0.765]] }]
    ] },
  { id: 'regen', n: 'Freando, o motor vira gerador', c: '#3FBF8F', d: 'Ao tirar o pé ou frear de leve, as rodas giram o motor, que gera corrente e devolve energia à bateria.',
    leg: [['#B0412A', 'giro vindo das rodas'], ['#2FB37A', 'corrente voltando à bateria'], ['#D2334A', 'freio hidráulico']], mo: i => ({ wheels: 1, engine: i >= 3 && i <= 9 ? 0.5 : 0 }),
    steps: [
      ['pedal_acel', 'Você tira o pé do acelerador (ou pisa de leve no freio)…', { c: '#35B6C9' }],
      ['vcu', '…e o controlador pede torque ao contrário.', { c: '#35B6C9' }],
      ['pneus', 'O carro continua andando e as rodas continuam girando…', { at: [[XFA, 0.02, 0.765], [XFA, 0.02, -0.765]], c: '#B0412A' }],
      ['semieixos', '…agora são elas que giram o motor, pelos semieixos…', { route: 1 }],
      ['redutor', '…e pelo redutor.', { at: [IX - 0.07, IY - 0.04, -0.03] }],
      ['rotor', 'Os ímãs girando dentro do estator geram corrente: o motor vira gerador e segura o carro.', { at: [MX, MY, -0.27] }],
      ['inversor', 'O inversor transforma essa corrente em contínua…', { c: '#2FB37A' }],
      ['pdu', '…a caixa de distribuição a manda de volta…'],
      ['cabos_at', '…pelos cabos laranja…', { route: 1, pick: [0] }],
      ['bateria_at', '…e a bateria recebe a carga.'],
      ['ipb', 'Pisando mais forte, o freio integrado soma o atrito das pastilhas sem você sentir a troca.', { from: 0, c: '#D2334A' }],
      ['pincas', 'As pinças entram no que a regeneração não dá conta — e sempre nas freadas fortes e no ABS.', { both: 1 }]
    ] },
  { id: 'recarga', n: 'Carregando a bateria', c: '#E3A21A', d: 'Na tomada ou no carregador de parede a corrente é alternada e passa pelo carregador de bordo; na carga rápida ela já chega contínua.',
    leg: [['#E8B90C', 'corrente alternada'], ['#2FB37A', 'corrente contínua'], ['#35B6C9', 'conversa carro–carregador'], ['#2F8FE0', 'fluido gelado']],
    steps: [
      ['porta_recarga', 'O plugue entra na porta do para-lama dianteiro direito: em cima a tomada Tipo 2, embaixo os dois pinos grossos da carga rápida (CCS2).', { c: '#E8B90C' }],
      ['bms', 'Antes de liberar, carro e carregador conversam: o BMS diz quanta corrente a bateria aceita agora.', { c: '#35B6C9' }],
      ['cabos_at', 'Na tomada ou no carregador de parede, a corrente alternada segue pelo cabo…', { route: 1, pick: [3], c: '#E8B90C' }],
      ['obc', '…até o carregador de bordo, que a transforma em contínua (até cerca de 7 kW).', { c2: '#2FB37A' }],
      ['pdu', 'A caixa de distribuição recebe a corrente…', { c: '#2FB37A' }],
      ['cabos_at', '…e manda pelos cabos laranja…', { route: 1, pick: [0, 1] }],
      ['conector_at', '…até a bateria.'],
      ['celulas', 'As lâminas vão enchendo; perto de 100%, a corrente diminui.', { at: [-0.10, 0.21, 0] }],
      ['pdu', 'Na carga rápida (até cerca de 60 kW), a corrente já chega contínua: os contatores ligam a porta direto na bateria.', { from: 0, c: '#2FB37A' }],
      ['placa_fria', 'Carregando rápido, a bateria esquenta: a bomba de calor manda fluido gelado pela placa embaixo das lâminas.', { c: '#2F8FE0' }],
      ['dcdc', 'O conversor DC-DC mantém a bateria de 12 V carregada durante a recarga.', { from: 4, c: '#E8B90C' }]
    ] },
  { id: 'calor', n: 'A bomba de calor', c: '#4F7FE0', d: 'Um circuito só para gelar e aquecer: válvulas mudam o caminho do fluido e ele atende a cabine e a bateria.',
    leg: [['#E4572E', 'fluido quente sob pressão'], ['#2F8FE0', 'fluido frio'], ['#3D9BE0', 'ar da cabine']], mo: i => ({ fan: i >= 5 ? 1 : 0 }),
    steps: [
      ['compressor', 'O compressor elétrico, ligado na alta tensão, comprime o fluido e ele esquenta.', { c: '#E4572E' }],
      ['tubos_ac', 'No frio, o fluido quente vai para dentro do carro…', { route: 1, pick: [6] }],
      ['cond_int', '…para o condensador interno, que aquece o ar da cabine sem gastar com resistência.', { c2: '#E4572E' }],
      ['vent_interno', 'O ventilador sopra o ar pelo trocador.', { from: -1, c: '#3D9BE0' }],
      ['modulo_termico', 'O módulo de válvulas escolhe o caminho: cabine, bateria ou os dois.', { from: 0, c: '#2F8FE0' }],
      ['condensador', 'Na frente do carro, o trocador externo tira calor do ar de fora (no frio) ou joga calor fora (no calor).', { at: [2.022, 0.44, 0.1] }],
      ['ventoinha', 'Parado, a ventoinha ajuda.', { from: -1 }],
      ['evaporador', 'No calor, o fluido expande no evaporador e gela o ar da cabine.', { from: 4 }],
      ['placa_fria', 'A bateria tem a linha dela: o fluido passa direto pela placa sob as lâminas, gelando ou aquecendo.', { from: 4 }],
      ['pressostato', 'Sensores de pressão e temperatura vigiam o circuito.', { from: 4 }],
      ['tubos_ac', 'O fluido volta ao compressor pela linha grossa.', { from: 4, route: 1, pick: [0] }]
    ] },
  { id: 'agua', n: 'O arrefecimento do motor e da eletrônica', c: '#1F8FC0', d: 'Um circuito de líquido separado tira o calor do inversor e do motor e o entrega ao ar.',
    leg: [['#2F8FE0', 'líquido frio'], ['#E4572E', 'líquido quente']], mo: i => ({ engine: 0.3, fan: i >= 8 ? 1 : 0 }),
    steps: [
      ['radiador', 'O líquido frio sai do radiador…', { at: [1.99, 0.56, -0.20], c: '#2F8FE0' }],
      ['mang_sup', '…e vai primeiro à eletrônica, que é a mais sensível ao calor.', { route: 1 }],
      ['inversor', 'Passa por baixo do inversor e dos outros módulos, tirando calor…'],
      ['mang_inf', '…segue para o motor…', { route: 1, pick: [2], c2: '#E4572E' }],
      ['motor_el', '…e contorna o estator. Por dentro, o óleo do redutor esfria o rotor e as engrenagens.', { at: [MX, MY, -0.27] }],
      ['mang_inf', 'O líquido quente sai por baixo…', { route: 1, pick: [0], c: '#E4572E' }],
      ['bomba_agua', '…passa pela bomba elétrica, que acelera conforme a temperatura…'],
      ['mang_inf', '…e volta ao radiador.', { route: 1, pick: [1] }],
      ['radiador', 'O radiador troca calor com o ar.', { at: [1.99, 0.33, -0.20], c2: '#2F8FE0' }],
      ['ventoinha', 'Parado no trânsito ou na carga rápida, a ventoinha ajuda.', { from: -1 }],
      ['vaso', 'O reservatório completa o circuito e recebe as bolhas.', { via: { r: 'vaso', i: 0 }, from: 0 }]
    ] },
  { id: 'ready', n: 'Do botão ao READY', c: '#D6B000', d: 'O que acontece quando você liga o carro: nada gira, mas muita coisa acorda em sequência.',
    leg: [['#35B6C9', 'sinais e comandos'], ['#E8B90C', 'corrente']], mo: i => ({ engine: i >= 9 ? 0.25 : 0 }),
    steps: [
      ['botao_ligar', 'Com o pé no freio, você aperta o botão de partida.', { c: '#35B6C9' }],
      ['bcm', 'O módulo da carroceria confere a chave presencial.'],
      ['bateria', 'Até aqui, tudo funciona com a bateria de 12 V: sem ela, o carro não acorda.', { c: '#E8B90C' }],
      ['vcu', 'O controlador do veículo acorda os outros módulos.', { c: '#35B6C9' }],
      ['bms', 'O gerenciador da bateria confere as lâminas e o isolamento dos cabos.'],
      ['pdu', 'A caixa de distribuição fecha primeiro a pré-carga, por um resistor, e depois os contatores principais.', { c: '#E8B90C' }],
      ['dcdc', 'O conversor DC-DC liga e passa a carregar a 12 V com a energia da bateria de tração.'],
      ['quadro', 'O painel mostra READY: pronto, em silêncio.', { c: '#35B6C9' }],
      ['seletor', 'Gire o seletor para D ou R.'],
      ['trava_p', 'A trava de estacionamento do redutor solta, e o freio de estacionamento elétrico libera as rodas de trás.'],
      ['avas', 'Andando devagar, o alto-falante da frente faz o som que avisa os pedestres.']
    ] },
  { id: 'freio', n: 'Do pedal às rodas', c: '#D2334A', d: 'Freio integrado (IPB): não há vácuo de motor; um motor elétrico gera a pressão e o sistema reparte a freada entre a regeneração e as pastilhas.', motion: 'freio',
    leg: [['#D2334A', 'fluido sob pressão'], ['#35B6C9', 'sinais dos sensores']],
    steps: [
      ['pedal_freio', 'Você pisa no pedal: um sensor mede quanto e com que rapidez.'],
      ['ipb', 'O freio integrado decide quanto vem do motor (regeneração) e quanto das pastilhas; um motor elétrico gera a pressão.', { c: '#35B6C9' }],
      ['reserv_freio', 'O fluido vem do reservatório em cima do bloco.', { c: '#D2334A' }],
      ['tubos_freio', 'As tubulações levam a pressão às quatro rodas.', { route: 1, pick: [4, 0, 5, 2, 6, 1, 3] }],
      ['pincas', 'Na frente, as pinças…', { both: 1 }],
      ['pastilhas', '…apertam as pastilhas…', { both: 1, from: -1 }],
      ['discos', '…contra os discos ventilados.', { both: 1, from: -1 }],
      ['pincas_tras', 'Atrás, pinças menores…', { both: 1, from: 3 }],
      ['discos_tras', '…em discos sólidos. Como o motor faz boa parte das freadas, esses discos podem enferrujar.', { both: 1, from: -1 }],
      ['sens_roda', 'Se uma roda começa a travar, o sensor avisa e o ABS do bloco alivia e reaplica a pressão.', { both: 1, from: -1, c: '#35B6C9' }],
      ['epb', 'Estacionado, o freio elétrico aperta as pinças de trás com um motorzinho em cada uma.', { both: 1, from: 1, c: '#35B6C9' }]
    ] },
  { id: 'dir', n: 'Do volante às rodas', c: '#1FA394', d: 'Pinhão e cremalheira com assistência elétrica: um motor na coluna empurra junto com você.', motion: 'dir',
    leg: [['#1FA394', 'movimento'], ['#35B6C9', 'assistência elétrica']],
    steps: [
      ['volante_dir', 'Você gira o volante.'],
      ['coluna', 'A coluna leva o giro para baixo…', { route: 1 }],
      ['eps', '…e o sensor de torque mede a força que você faz: o motor elétrico ajuda, mais em manobra e menos na estrada.', { c: '#35B6C9', at: [0.68, 0.86, 0.36] }],
      ['caixa_dir', 'O pinhão empurra a cremalheira para o lado.', { at: [1.18, 0.38, 0.20], c: '#1FA394' }],
      ['barras_axiais', 'As barras axiais empurram…', { both: 1 }],
      ['mangas', '…as mangas, que esterçam…', { both: 1 }],
      ['pneus', '…as rodas.', { at: [[XFA, WY, 0.765], [XFA, WY, -0.765]] }]
    ] }
];

/* ===== Plano de revisões ===== */
const MAINT = [
  { id: 'revisao', n: 'Revisão periódica BYD (inspeção geral)', km: 20000, mo: 12, p: ['bateria_at', 'cabos_at', 'conector_at', 'ipb', 'pneus', 'coxim_tras'], t: 'O plano da BYD Brasil é a cada 20.000 km ou 12 meses. Inclui leitura de falhas com o scanner da marca, inspeção da caixa da bateria e dos cabos laranja, freios, suspensão, fluidos e atualizações de software.' },
  { id: 'calibrar', n: 'Carga completa para o BMS recalibrar', mo: 6, p: ['bateria_at', 'bms'], t: 'Referência de manuais de outros mercados: de tempos em tempos, carregue até 100% e use até baixar bem. Ajuda a indicação de carga a ficar precisa.' },
  { id: 'filtro_cabine', n: 'Filtro da cabine', km: 20000, mo: 12, p: ['filtro_cabine'] },
  { id: 'fluido_freio', n: 'Fluido de freio (DOT 4)', km: 40000, mo: 24, p: ['reserv_freio', 'ipb'], t: 'Referência comum para BYD; a sangria completa do freio integrado pede scanner.' },
  { id: 'arref', n: 'Líquido de arrefecimento do motor e da eletrônica', km: 100000, mo: 48, p: ['vaso', 'radiador', 'bomba_agua'], t: 'Etilenoglicol de longa duração (ácido orgânico), cerca de 3,1 a 3,3 L conforme a configuração. Confira o prazo no plano do seu carro.' },
  { id: 'redutor', n: 'Óleo do redutor (conferir e trocar)', km: 80000, p: ['redutor'], t: 'Volume pequeno (fontes citam algo entre 0,45 e 0,75 L, conforme a versão). Nível até a borda do furo de abastecimento. Prazo de referência: confirme no plano da BYD.' },
  { id: 'ac', n: 'Bomba de calor e ar: higienização e conferência', mo: 12, p: ['evaporador', 'compressor', 'modulo_termico'] },
  { id: 'pastilhas', n: 'Pastilhas e discos (inspeção)', km: 20000, p: ['pastilhas', 'discos', 'pastilhas_tras', 'discos_tras'], t: 'Com a regeneração, as pastilhas duram muito; os discos traseiros pedem atenção à ferrugem.' },
  { id: 'alinh', n: 'Alinhamento e balanceamento', km: 10000, p: ['pneus', 'barras_axiais'] },
  { id: 'rodizio', n: 'Rodízio de pneus', km: 10000, p: ['pneus'], t: 'O torque imediato gasta mais os pneus da frente.' },
  { id: 'suspensao', n: 'Coxins e suspensão (inspeção)', km: 20000, p: ['coxim_tras', 'coxim_dir', 'coxim_esq', 'bandejas', 'barra_estab', 'buchas_eixo'] },
  { id: 'bateria', n: 'Teste da bateria de 12 V', mo: 6, p: ['bateria', 'dcdc'], t: 'É a bateria pequena que acorda o carro; fraca, ele não liga.' },
  { id: 'kit', n: 'Kit de reparo de pneus (validade do selante)', mo: 48, p: ['kit_pneu'], t: 'O selante tem prazo de validade impresso no frasco.' },
  { id: 'palhetas', n: 'Palhetas dos limpadores', mo: 12, p: ['limpador', 'limpador_tras'] },
  { id: 'lubrif', n: 'Lubrificar dobradiças, fechaduras e limitadores', mo: 12, p: ['dobradicas', 'fech_portas', 'fech_capo', 'dobr_capo', 'dobr_tampa', 'fech_tampa'] },
  { id: 'drenos', n: 'Limpar drenos do torpedo, portas, soleiras e do ar', mo: 6, p: ['grade_torpedo', 'portas', 'soleiras', 'evaporador'] },
  { id: 'borrachas', n: 'Protetor nas borrachas de vedação', mo: 4, p: ['borrachas'] }
];

/* ===== Ficha técnica ===== */
const SPECS = [
  ['Motor', [['Tipo', 'Síncrono de ímãs permanentes, na frente, transversal'], ['Potência', '70 kW (95 cv)'], ['Torque', '180 N·m (18,3 kgfm), desde a partida'], ['Conjunto', '"8 em 1" da e-Platform 3.0: motor, redutor, inversor, carregador de bordo, conversor DC-DC, caixa de distribuição de alta tensão, controlador do veículo e gerenciador da bateria'], ['Velocidade máxima', 'cerca de 150 a 160 km/h (as fontes variam)']]],
  ['Bateria', [['Tipo', 'Blade, lítio-ferro-fosfato (LFP), sob o assoalho'], ['Capacidade', '44,9 kWh'], ['Células', 'cerca de 104 lâminas em série, perto de 330 V (dado de fontes técnicas, não da BYD)'], ['Temperatura', 'Esfriada e aquecida direto pelo fluido da bomba de calor'], ['Autonomia', '291 km (Inmetro)']]],
  ['Recarga', [['Porta', 'CCS2 (Tipo 2 + pinos de corrente contínua), no para-lama dianteiro direito'], ['Corrente alternada', 'pelo carregador de bordo, até cerca de 7 kW (as fontes citam 6,6 a 7,2 kW)'], ['Carga rápida', 'corrente contínua até cerca de 60 kW'], ['Portátil', 'Carregador portátil para tomada, guardado no porta-malas']]],
  ['Transmissão', [['Redutor', 'Uma marcha, com diferencial; ré pelo próprio motor'], ['Tração', 'Dianteira'], ['Seletor', 'Giratório, no console'], ['Regeneração', 'Ao tirar o pé e ao frear, ajustável na tela']]],
  ['Chassi', [['Suspensão dianteira', 'McPherson com barra estabilizadora'], ['Suspensão traseira', 'Eixo de torção (versões mais potentes usam multibraço: confira o seu)'], ['Freios', 'Discos ventilados na frente e sólidos atrás, freio integrado (IPB) com ABS e ESP, freio de estacionamento elétrico'], ['Direção', 'Pinhão e cremalheira com assistência elétrica'], ['Rodas e pneus', 'Liga leve aro 16; fichas citam 195/60 R16 para esta versão (confira na etiqueta da porta)'], ['Estepe', 'Kit de reparo (selante e compressor)']]],
  ['Dimensões', [['Comprimento', '4.125 mm (versões de outros mercados chegam a 4.290 mm com para-choques maiores)'], ['Largura', '1.770 mm'], ['Altura', '1.570 mm'], ['Entre-eixos', '2.700 mm'], ['Bitola', '1.530 mm'], ['Peso', 'cerca de 1,4 a 1,5 t (as fontes variam por mercado)']]],
  ['Fluidos', [['Arrefecimento do motor', 'Etilenoglicol de ácido orgânico (−40 °C), cerca de 3,1 a 3,3 L'], ['Redutor', 'Óleo de transmissão indicado pela BYD, menos de 1 L (confirme)'], ['Freio', 'DOT 4'], ['Bomba de calor', 'Fluido e carga pela etiqueta sob o capô']]],
  ['O carro', [['Versão', 'Dolphin (EV) 95 cv, 2024, hatch de 5 portas'], ['Considerado presente', 'Bomba de calor, freio integrado IPB, seis airbags, câmera de ré, sensores de estacionamento, tela giratória'], ['Confira no seu', 'Suspensão traseira, medida dos pneus e potência do carregador de bordo']]]
];

/* ===== Como desmontar (3D) ===== */
const PCD = [6, 7, 8, 9, 0, 1, 3, 4, 2, 5, 10];
const OUT_PCD = [['para_choque_d', [0.5, 0.02, 0]], ['grade_inf', [0.5, 0.02, 0]]];
const RODA_E = [['pneus', [0, 0, 0.45], 1, 0], ['rodas', [0, 0, 0.45], 1, 0]];
const GUIDES = [
  { id: 'dm_parachoque_d', grp: 'Lataria', n: 'Para-choque dianteiro', part: 'para_choque_d', parts: ['para_choque_d', 'grade_inf'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte os 4 parafusos e presilhas de cima, na travessa sob o capô.', { fx: [['fx_parachoque', [6, 7, 8, 9]]], l: 'Fixações de cima' }],
      ['Solte os parafusos das caixas de roda, dos dois lados.', { fx: [['fx_parachoque', [0, 1, 3, 4]]], cam: [0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['Solte os parafusos de baixo.', { fx: [['fx_parachoque', [2, 5, 10]]], cam: [0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas para fora das guias laterais…', { fx: [['fx_guias_pcd', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…e tire o para-choque para a frente, desligando o alto-falante de aviso a pedestres e os sensores, se houver.', { out: OUT_PCD, l: 'Para-choque' }]
    ] },
  { id: 'dm_paralama', grp: 'Lataria', n: 'Para-lama dianteiro', part: 'paralamas', parts: ['paralamas'], side: 1,
    steps: [
      ['Abra o capô e a porta do lado do para-lama. No lado direito fica a porta de recarga: desenergize o carro antes (veja o guia da porta de recarga).', { open: ['hood', 'door'], l: 'Capô e porta' }],
      ['Tire o para-choque dianteiro, que cobre a ponta do para-lama.', { fx: [['fx_parachoque', PCD]], out: OUT_PCD, l: 'Para-choque' }],
      ['Tire o farol: 3 parafusos.', { fx: [['fx_farol', [0, 1, 2]]], out: [['farois', [0.32, 0.02, 0.03], 1]], l: 'Farol' }],
      ['Solte as presilhas do forro da caixa de roda e tire o forro.', { fx: [['fx_forros', [0, 1, 2, 3, 4, 5]]], cam: [0.25, -0.55, 1], l: 'Presilhas do forro' }],
      ['Tire os 4 parafusos da borda de cima, sob o capô.', { fx: [['fx_paralama', [0, 1, 2, 3]]], l: 'Parafusos de cima' }],
      ['Tire o parafuso da frente, junto ao farol.', { fx: [['fx_paralama', [4]]], l: 'Parafuso da frente' }],
      ['Com a porta aberta, tire o parafuso de trás, na coluna, e o de baixo, na soleira.', { fx: [['fx_paralama', [6, 5]]], l: 'Parafusos de trás e de baixo' }],
      ['Corte a massa das emendas e puxe o para-lama para fora.', { out: [['paralamas', [0.04, 0.06, 0.42], 1]], l: 'Para-lama' }]
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
      ['Abra a porta e apoie a ponta de baixo.', { open: 'door', l: 'Porta' }],
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
      ['Abra a porta, tire os parafusos do puxador e o acabamento da maçaneta interna; solte o conector dos botões.', { open: 'door', l: 'Puxador e botões' }],
      ['Solte as presilhas em volta do forro com uma espátula plástica, rente a cada presilha.', { fx: [['fx_forro_porta', [0, 1, 2, 3, 4, 5, 6, 7]]], cam: [-1, 0.3, 0.35], l: 'Presilhas do forro' }],
      ['Levante o forro para soltar da borda do vidro e tire.', { out: [['forros_portas', [0, 0.06, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Forro da porta' }]
    ] },
  { id: 'dm_vidro_porta', grp: 'Lataria', n: 'Vidro e máquina da porta dianteira', part: 'vidros_portas', parts: ['vidros_portas', 'maq_vidro'], side: 1,
    steps: [
      ['Abra a porta e tire o forro (veja o guia do forro da porta).', { open: 'door', out: [['forros_portas', [0, 0.06, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Forro da porta' }],
      ['Com o botão do vidro ligado provisoriamente, posicione o vidro até os 2 parafusos aparecerem e solte-os.', { fx: [['fx_vidro_porta', [0, 1]]], cam: [-1, 0.3, 0.35], l: 'Parafusos do vidro' }],
      ['Tire o vidro por cima, inclinando.', { out: [['vidros_portas', [0, 0.45, 0.02], 1]], l: 'Vidro' }],
      ['Desligue o conector do motor e solte os 4 parafusos da máquina…', { fx: [['fx_maq_vidro', [0, 1, 2, 3]]], cam: [-1, 0.3, 0.35], l: 'Fixação da máquina' }],
      ['…e tire a máquina pela abertura do painel interno. Depois, inicialize o vidro automático pelo botão.', { out: [['maq_vidro', [0, -0.05, -0.3], 1]], cam: [-1, 0.3, 0.35], l: 'Máquina de vidro' }]
    ] },
  { id: 'dm_retrovisor', grp: 'Lataria', n: 'Retrovisor', part: 'retrovisores', parts: ['retrovisores', 'piscas_lat'], side: 1,
    steps: [
      ['Abra a porta e tire o acabamento triangular por dentro, no canto do vidro.', { open: 'door', l: 'Acabamento' }],
      ['Desligue o conector (espelho, rebatimento e repetidor de seta), segure o espelho por fora e solte as 3 porcas.', { fx: [['fx_retrovisor', [0, 1, 2]]], l: 'Porcas do retrovisor' }],
      ['Tire o espelho para fora.', { out: [['retrovisores', [0.02, 0.05, 0.3], 1], ['piscas_lat', [0.02, 0.05, 0.3], 1]], l: 'Retrovisor' }]
    ] },
  { id: 'dm_tampa', grp: 'Lataria', n: 'Tampa traseira', part: 'tampa_tras', parts: ['tampa_tras', 'dobr_tampa', 'amort_tampa', 'faixa_luz', 'camera_re'], side: 0,
    steps: [
      ['Abra a tampa e peça ajuda para segurá-la.', { open: 'tail', l: 'Tampa' }],
      ['Tire o forro da tampa e desligue os conectores da faixa de luz, da luz de freio, das luzes da placa, da câmera, do limpador e do desembaçador.', { l: 'Conectores', at: [-1.90, 1.30, 0], cam: [-0.85, -0.2, 0.5] }],
      ['Solte os amortecedores: levante a trava de mola e puxe cada um do pino.', { fx: [['fx_amort_tampa', [1, 3]]], hide: ['amort_tampa'], cam: [-0.85, -0.2, 0.5], l: 'Amortecedores' }],
      ['Solte as porcas das dobradiças no teto, por baixo do forro: 2 de cada lado.', { fx: [['fx_tampa', [0, 2, 4, 6]]], cam: [-0.8, -0.35, 0.5], l: 'Dobradiças' }],
      ['Tire a tampa com as dobradiças.', { out: [['tampa_tras', [-0.4, 0.35, 0]], ['dobr_tampa', [-0.4, 0.35, 0]], ['faixa_luz', [-0.4, 0.35, 0]], ['camera_re', [-0.4, 0.35, 0]]], l: 'Tampa traseira' }]
    ] },
  { id: 'dm_farol', grp: 'Lataria', n: 'Farol', part: 'farois', parts: ['farois'], side: 1,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Tire o para-choque dianteiro: ele cobre o parafuso de baixo do farol.', { fx: [['fx_parachoque', PCD]], out: OUT_PCD, l: 'Para-choque' }],
      ['Solte os 2 parafusos de cima…', { fx: [['fx_farol', [0, 1]]], l: 'Parafusos de cima' }],
      ['…e o de baixo.', { fx: [['fx_farol', [2]]], l: 'Parafuso de baixo' }],
      ['Desligue o conector e tire o farol para a frente. Os LEDs não se trocam separados: o farol sai inteiro. Na volta, regule a altura do facho.', { out: [['farois', [0.32, 0.02, 0.03], 1]], l: 'Farol' }]
    ] },
  { id: 'dm_lanterna', grp: 'Lataria', n: 'Lanterna', part: 'lanternas', parts: ['lanternas'], side: 1,
    steps: [
      ['Abra a tampa traseira e tire a tampinha do acabamento lateral, atrás da lanterna.', { open: 'tail', l: 'Acabamento' }],
      ['Solte as porcas por dentro.', { fx: [['fx_lanterna', [0, 1, 2]]], l: 'Fixações da lanterna' }],
      ['Desligue o conector e tire a lanterna para trás, soltando o pino de encaixe.', { out: [['lanternas', [-0.28, 0, 0.06], 1]], l: 'Lanterna' }]
    ] },
  { id: 'dm_parachoque_t', grp: 'Lataria', n: 'Para-choque traseiro', part: 'para_choque_t', parts: ['para_choque_t', 'sensores_estac'], side: 0,
    steps: [
      ['Abra a tampa traseira.', { open: 'tail', l: 'Tampa' }],
      ['Solte os 4 parafusos e presilhas de cima.', { fx: [['fx_parachoque_t', [6, 7, 8, 9]]], l: 'Fixações de cima' }],
      ['Solte os parafusos das caixas de roda…', { fx: [['fx_parachoque_t', [0, 1, 3, 4]]], cam: [-0.55, -0.05, 1], l: 'Parafusos das caixas de roda' }],
      ['…e os de baixo.', { fx: [['fx_parachoque_t', [2, 5]]], cam: [-0.75, -0.75, 0.35], l: 'Parafusos de baixo' }],
      ['Puxe as pontas para fora das guias laterais…', { fx: [['fx_guias_pct', [0, 1]]], keep: 1, l: 'Guias laterais' }],
      ['…desligue o conector dos sensores de estacionamento e tire o para-choque para trás.', { out: [['para_choque_t', [-0.5, 0.02, 0]], ['sensores_estac', [-0.5, 0.02, 0]]], l: 'Para-choque' }]
    ] },
  { id: 'dm_grade_torpedo', grp: 'Lataria', n: 'Grade do torpedo', part: 'grade_torpedo', parts: ['grade_torpedo'], side: 0,
    steps: [
      ['Abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Marque a posição de repouso e solte as porcas dos braços do limpador.', { fx: [['fx_limpador', [0, 1]]], l: 'Braços do limpador' }],
      ['Solte as 6 presilhas…', { fx: [['fx_grade_torpedo', [0, 1, 2, 3, 4, 5]]], l: 'Presilhas' }],
      ['…e puxe a grade para cima e para a frente, soltando da borda do para-brisa.', { out: [['grade_torpedo', [0.12, 0.3, 0]]], l: 'Grade do torpedo' }]
    ] },
  { id: 'dm_parabrisa', grp: 'Vidros colados', n: 'Para-brisa', part: 'para_brisa', parts: ['para_brisa'], side: 0,
    steps: [
      ['O para-brisa não tem parafuso: é colado num cordão de poliuretano em volta.', { fx: [['fx_cola_parabrisa', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Tire os braços do limpador e a grade do torpedo.', { fx: [['fx_limpador', [0, 1]], ['fx_grade_torpedo', [0, 1, 2, 3, 4, 5]]], out: [['grade_torpedo', [0.12, 0.3, 0]]], l: 'Limpador e grade' }],
      ['O instalador corta o cordão com fio ou faca própria…', { fx: [['fx_cola_parabrisa', 'all']], l: 'Corte do cordão' }],
      ['…e tira o vidro com ventosas. Na volta: cordão novo, tempo de cura e recalibração da câmera do para-brisa, se houver.', { out: [['para_brisa', [0.3, 0.45, 0]]], l: 'Para-brisa' }]
    ] },
  { id: 'dm_vidro_tras', grp: 'Vidros colados', n: 'Vidro traseiro', part: 'vidro_tras', parts: ['vidro_tras'], side: 0,
    steps: [
      ['O vidro traseiro é colado na tampa com um cordão de poliuretano.', { fx: [['fx_cola_vidro_tras', 'all']], keep: 1, l: 'Cordão de cola' }],
      ['Com o limpador e os conectores do desembaçador soltos, o cordão é cortado…', { fx: [['fx_cola_vidro_tras', 'all']], l: 'Corte do cordão' }],
      ['…e o vidro sai com ventosas.', { out: [['vidro_tras', [-0.35, 0.3, 0]]], l: 'Vidro traseiro' }]
    ] },
  { id: 'dm_vidro_lateral', grp: 'Vidros colados', n: 'Vidro lateral fixo ("barbatana")', part: 'vidros_laterais', parts: ['vidros_laterais', 'frisos'], side: 1,
    steps: [
      ['O vidro fixo de trás, com a borda de baixo subindo como uma barbatana, é colado na lateral com poliuretano.', { fx: [['fx_cola_laterais', 'all']], keep: 1, l: 'Cordão de cola' }],
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
      ['Na funilaria, os pontos são furados ou cortados — com a bateria de tração desligada e protegida do calor.', { fx: [['fx_solda_laterais', 'all']], l: 'Pontos furados' }],
      ['…a lateral sai e a nova é soldada, com massa de vedação nas emendas.', { out: [['laterais', [-0.05, 0.05, 0.45], 1], ['vidros_laterais', [-0.05, 0.05, 0.45], 1]], l: 'Lateral' }]
    ] },
  { id: 'dm_soleira', grp: 'Peças soldadas (funilaria)', n: 'Soleira', part: 'soleiras', parts: ['soleiras'], side: 1,
    steps: [
      ['A soleira é soldada na aba de baixo e na borda das portas. Por dentro dela fica a longarina onde a bateria é presa.', { fx: [['fx_solda_soleiras', 'all']], keep: 1, l: 'Pontos de solda' }],
      ['Na funilaria, com a bateria de tração retirada, os pontos são furados…', { fx: [['fx_solda_soleiras', 'all']], l: 'Pontos furados' }],
      ['…e a soleira nova é soldada no lugar.', { out: [['soleiras', [0, -0.12, 0.3], 1]], l: 'Soleira' }]
    ] },
  { id: 'dm_roda', grp: 'Mecânica', n: 'Roda', part: 'rodas', parts: ['rodas', 'pneus'], side: 1,
    steps: [
      ['Com o carro no chão, em P e com o freio de estacionamento acionado, afrouxe as 5 porcas meia volta.', { fx: [['fx_roda', [0, 1, 2, 3, 4]]], keep: 1, l: 'Porcas da roda' }],
      ['Levante o carro com o macaco só no ponto de apoio da soleira, perto da roda — nunca na caixa da bateria.', { l: 'Ponto do macaco', at: [1.02, 0.15, 0.73] }],
      ['Tire as porcas…', { fx: [['fx_roda', [0, 1, 2, 3, 4]]], l: 'Porcas da roda' }],
      ['…e puxe a roda para fora.', { out: [['pneus', [0, 0, 0.42], 1, 0], ['rodas', [0, 0, 0.42], 1, 0]], l: 'Roda' }],
      ['Na volta: encoste as porcas à mão, aperte em cruz, desça o carro e dê o aperto final com torquímetro.', { l: 'Aperto em cruz', at: [1.35, 0.315, 0.85] }]
    ] },
  { id: 'dm_pastilhas', grp: 'Mecânica', n: 'Pastilhas de freio dianteiras', part: 'pastilhas', parts: ['pastilhas', 'pincas', 'rodas', 'pneus'], side: 1,
    steps: [
      ['Com o carro no chão, afrouxe as porcas, levante, apoie em cavalete e tire a roda.', { fx: [['fx_roda', [0, 1, 2, 3, 4]]], out: RODA_E, l: 'Roda' }],
      ['Solte os 2 pinos-guia da pinça.', { fx: [['fx_pinca', [0, 2]]], cam: [0.2, 0.2, 1], l: 'Pinos-guia' }],
      ['Tire a pinça e pendure com arame, sem forçar o flexível nem o cabo do sensor.', { out: [['pincas', [0.02, 0.16, 0.22], 1]], cam: [0.2, 0.2, 1], l: 'Pinça' }],
      ['Tire as pastilhas velhas e recolha o pistão devagar.', { out: [['pastilhas', [0.02, 0.12, 0.30], 1]], cam: [0.2, 0.2, 1], l: 'Pastilhas' }],
      ['Na volta: pastilhas novas com as molas, pinos lubrificados e pedal bombeado até ficar firme antes de andar.', { l: 'Montagem', at: [1.35, 0.42, 0.75] }]
    ] },
  { id: 'dm_pastilhas_t', grp: 'Mecânica', n: 'Pastilhas de freio traseiras (freio de estacionamento elétrico)', part: 'pastilhas_tras', parts: ['pastilhas_tras', 'pincas_tras', 'epb', 'rodas', 'pneus'], side: 1,
    steps: [
      ['Antes de tudo, coloque o freio de estacionamento elétrico em modo de manutenção (pela tela ou pelo scanner): o motorzinho recolhe o pistão. Calce as rodas da frente.', { l: 'Modo de manutenção', at: [0.22, 0.59, 0.06], cam: [-0.3, 0.8, 0.4] }],
      ['Afrouxe as porcas, levante, apoie em cavalete e tire a roda traseira.', { fx: [['fx_roda', [10, 11, 12, 13, 14]]], out: [['pneus', [0, 0, 0.45], 1, 2], ['rodas', [0, 0, 0.45], 1, 2]], l: 'Roda traseira' }],
      ['Desligue o conector do motor da pinça.', { fx: [['fx_epb', [0]]], cam: [-0.3, 0.2, 1], l: 'Conector do motor' }],
      ['Solte os 2 pinos-guia e tire a pinça com o motor, pendurada, sem forçar o flexível.', { fx: [['fx_pinca_t', [0, 2]]], out: [['pincas_tras', [-0.02, 0.16, 0.22], 1], ['epb', [-0.02, 0.16, 0.22], 1]], cam: [-0.3, 0.2, 1], l: 'Pinça e motor' }],
      ['Tire as pastilhas velhas.', { out: [['pastilhas_tras', [-0.02, 0.12, 0.30], 1]], cam: [-0.3, 0.2, 1], l: 'Pastilhas' }],
      ['Na volta: pastilhas novas, conector ligado, saia do modo de manutenção e acione o freio de estacionamento algumas vezes para ele se calibrar.', { l: 'Montagem', at: [-1.35, 0.42, 0.75] }]
    ] },
  { id: 'dm_bateria', grp: 'Mecânica', n: 'Bateria de 12 V', part: 'bateria', parts: ['bateria'], side: 0,
    steps: [
      ['Desligue o carro (sem READY), feche as portas e abra o capô.', { open: 'hood', l: 'Capô' }],
      ['Solte primeiro o terminal negativo (preto).', { fx: [['fx_bateria', [1]]], l: 'Negativo' }],
      ['Depois o positivo (vermelho).', { fx: [['fx_bateria', [0]]], l: 'Positivo' }],
      ['Solte o grampo de fixação.', { fx: [['fx_bateria', [2]]], l: 'Grampo' }],
      ['Tire a bateria para cima. Na volta: positivo primeiro, negativo por último; os vidros podem precisar ser inicializados.', { out: [['bateria', [0, 0.36, 0]]], l: 'Bateria de 12 V' }]
    ] },
  { id: 'dm_porta_recarga', grp: 'Alta tensão', n: 'Porta de recarga', part: 'porta_recarga', parts: ['porta_recarga', 'paralamas'], side: -1,
    steps: [
      ['Serviço de alta tensão: só técnico treinado, com luvas isolantes e ferramentas isoladas. Desligue o carro e afaste a chave.', { l: 'Segurança', at: [1.77, 0.83, -0.86], cam: [0.2, 0.3, -1] }],
      ['Desligue o negativo da bateria de 12 V: assim os contatores da caixa de distribuição abrem.', { open: 'hood', fx: [['fx_bateria', [1]]], l: '12 V' }],
      ['Espere o tempo do manual e meça a ausência de tensão antes de tocar nos cabos.', { l: 'Ausência de tensão', at: [1.47, 0.73, -0.24] }],
      ['Tire a roda dianteira direita e o forro da caixa de roda; solte os 4 parafusos da porta por dentro do para-lama.', { fx: [['fx_porta_recarga', [0, 1, 2, 3]]], cam: [0.3, -0.2, -1], l: 'Parafusos da porta' }],
      ['Solte os cabos laranja no carregador de bordo e tire a porta com o chicote. Na volta: vedação boa e teste de isolamento com scanner.', { out: [['porta_recarga', [0.05, 0.05, -0.35], -1]], cam: [0.3, 0.2, -1], l: 'Porta de recarga' }]
    ] },
  { id: 'dm_bateria_at', grp: 'Alta tensão', n: 'Bateria de tração (Blade)', part: 'bateria_at', parts: ['bateria_at', 'celulas', 'placa_fria', 'bic', 'conector_at'], side: 0,
    steps: [
      ['Serviço só para técnico com treinamento e equipamento de alta tensão. A bateria pesa algumas centenas de quilos: precisa de elevador e mesa hidráulica.', { l: 'Segurança', at: [-0.07, 0.20, 0], cam: [0.1, -1, 0.35] }],
      ['Desligue o negativo da bateria de 12 V: os contatores abrem e a tensão fica presa dentro da bateria.', { open: 'hood', fx: [['fx_bateria', [1]]], l: '12 V' }],
      ['Espere o tempo do manual, meça a ausência de tensão e solte os conectores de potência e o de dados na frente da caixa.', { fx: [['fx_conector_at', [0, 1, 2]]], cam: [0.6, -0.6, 0.4], l: 'Conectores' }],
      ['Recolha o fluido da bomba de calor com máquina e solte as duas linhas da placa fria.', { l: 'Linhas do fluido', at: [0.99, 0.21, -0.27], cam: [0.5, -0.8, -0.3] }],
      ['Com a mesa encostada, solte os parafusos das abas laterais e os da frente e de trás.', { fx: [['fx_bat', 'all']], cam: [0.1, -1, 0.25], l: 'Parafusos da bateria' }],
      ['Desça a bateria com a mesa, devagar e reta.', { out: [['bateria_at', [0, -0.45, 0]], ['celulas', [0, -0.45, 0]], ['placa_fria', [0, -0.45, 0]], ['bic', [0, -0.45, 0]], ['conector_at', [0, -0.45, 0]]], cam: [0.1, -1, 0.35], l: 'Bateria de tração' }],
      ['Na volta: vedações novas, parafusos no torque e na ordem do manual, teste de estanqueidade, carga do fluido e teste de isolamento com scanner.', { l: 'Montagem', at: [-0.07, 0.20, 0.0] }]
    ] },
  { id: 'dm_redutor', grp: 'Mecânica', n: 'Óleo do redutor', part: 'redutor', parts: ['redutor'], side: 0,
    steps: [
      ['Carro no elevador, no plano. Tire o protetor de baixo do cofre, se houver.', { l: 'Por baixo', at: [1.40, 0.18, 0.02], cam: [0.3, -1, 0.3] }],
      ['Solte o bujão de abastecimento primeiro: se ele travar, você não fica com o redutor vazio.', { fx: [['fx_redutor', [1]]], cam: [0.6, -0.5, 0.6], l: 'Abastecimento' }],
      ['Solte o bujão de dreno e deixe escorrer.', { fx: [['fx_redutor', [0]]], cam: [0.3, -1, 0.3], l: 'Dreno' }],
      ['Feche o dreno com arruela nova e complete com o óleo indicado até escorrer pela borda do furo de abastecimento.', { l: 'Nível', at: [1.49, 0.335, 0.06] }]
    ] },
  { id: 'dm_filtro_cabine', grp: 'Mecânica', n: 'Filtro da cabine', part: 'filtro_cabine', parts: ['filtro_cabine'], side: 0,
    steps: [
      ['Abra o porta-luvas, solte o limitador e baixe-o até passar dos batentes.', { l: 'Porta-luvas', at: [0.58, 0.82, -0.40], cam: [-1, 0.3, -0.4] }],
      ['Solte a tampa da caixa do filtro e puxe o filtro.', { out: [['filtro_cabine', [-0.2, 0, -0.2]]], cam: [-1, 0.3, -0.4], l: 'Filtro' }],
      ['Coloque o novo com a seta do fluxo de ar no sentido certo.', { l: 'Montagem', at: [0.68, 0.72, -0.42] }]
    ] }
];

/* ===== Explosão: para onde cada peça se afasta (x, y, z, simétrico) ===== */
const EXV = {
  soleiras: [0, -0.15, 0.75, 1], colunas: [0.15, 0.55, 0.55, 1], painel_tras: [-0.8, 0, 0], grade_torpedo: [0.3, 0.75, 0], borrachas: [0, 0.12, 0.5, 1], dobr_capo: [0.35, 0.65, 0.35, 1], dobr_tampa: [-0.55, 0.75, 0.3, 1], fech_tampa: [-0.95, 0.35, 0], amort_tampa: [-0.5, 0.3, 0.4, 1], forros_portas: [0, 0.1, 0.55, 1], forros_portas_tras: [0, 0.1, 0.55, 1], frisos: [0, 0.1, 1.05, 1],
  capo: [0.25, 0.8, 0], teto: [0, 0.9, 0], para_brisa: [0.35, 0.65, 0], vidro_tras: [-0.6, 0.45, 0], tampa_tras: [-0.75, 0.35, 0], faixa_luz: [-0.8, 0.35, 0], camera_re: [-0.85, 0.3, 0], para_choque_d: [0.9, -0.05, 0], para_choque_t: [-0.9, -0.05, 0], sensores_estac: [-1.0, -0.05, 0], grade_inf: [1.05, -0.05, 0], viga_dianteira: [0.7, -0.05, 0], viga_traseira: [-0.7, -0.05, 0], travessa_frontal: [0.5, 0.05, 0], fech_capo: [0.5, 0.3, 0], monobloco: [0, 0, 0], corta_fogo: [0, 0.05, 0],
  paralamas: [0.15, 0.1, 0.8, 1], portas: [0.1, 0.05, 1.0, 1], portas_tras: [-0.1, 0.05, 1.0, 1], vidros_portas: [0.05, 0.35, 1.05, 1], vidros_portas_tras: [-0.05, 0.35, 1.05, 1], laterais: [-0.1, 0.05, 0.85, 1], vidros_laterais: [-0.1, 0.35, 0.9, 1], retrovisores: [0.1, 0.2, 1.2, 1], caixas_roda: [0, 0, 0.5, 1], dobradicas: [0, 0, 0.85, 1], fech_portas: [-0.1, 0, 0.9, 1], maq_vidro: [0, 0.1, 0.8, 1], maq_vidro_tras: [0, 0.1, 0.8, 1], alto_falantes: [0, 0, 0.75, 1],
  farois: [0.6, 0.1, 0.35, 1], lanternas: [-0.6, 0.05, 0.35, 1], piscas_lat: [0.1, 0.25, 1.25, 1], luz_freio: [-0.6, 0.45, 0], luz_placa: [-0.9, 0.2, 0], porta_recarga: [0.2, 0.15, -0.7],
  painel: [-0.1, 0.55, 0], quadro: [-0.25, 0.7, 0], tela: [-0.3, 0.75, 0], comandos_clima: [-0.35, 0.5, 0], caixa_ar: [0.1, 0.35, 0], vent_interno: [0.1, 0.35, -0.15], filtro_cabine: [0, 0.3, -0.35], evaporador: [0.1, 0.45, -0.25], cond_int: [0.1, 0.45, 0.2], airbag_pass: [-0.15, 0.85, 0], airbag_mot: [-0.45, 0.45, 0], airbags_lat: [0, 0.4, 0.6, 1], cabo_espiral: [-0.35, 0.35, 0], srs: [0, 0.35, 0], console: [0, 0.35, 0], seletor: [0, 0.5, 0], botao_ligar: [0, 0.45, 0.15],
  bancos_diant: [0, 0.35, 0.45, 1], banco_tras: [-0.2, 0.35, 0], cintos: [0, 0.3, 0.6, 1], porta_malas: [-0.3, 0.3, 0], retrovisor_int: [0, 0.8, 0],
  bateria_at: [0, -0.6, 0], celulas: [0, -0.85, 0], placa_fria: [0, -1.05, 0], bic: [0, -0.7, 0.4], conector_at: [0.45, -0.55, 0], cabos_at: [0.25, -0.2, 0], pdu: [0.15, 1.2, 0.2], cabo_recarga: [-0.3, 0.45, 0.2],
  conj_eletrico: [0, 1.5, 0], inversor: [0.1, 1.25, -0.25], obc: [0.1, 1.4, -0.25], dcdc: [0.1, 1.4, 0.25], vcu: [0.55, 1.2, -0.05], bms: [0.55, 1.2, 0.1], motor_el: [0.2, 0.55, -0.6], rotor: [0.2, 0.55, -1.0], resolver: [0.2, 0.55, -1.25], redutor: [0, 0.4, 0.4], diferencial: [0, 0.2, 0.55], trava_p: [0, 0.7, 0.5], semieixos: [0, 0, 0.25, 1], coxim_dir: [0, 0.9, -0.4], coxim_esq: [0, 0.9, 0.4], coxim_tras: [-0.3, 0.2, 0], pedal_acel: [-0.15, 0.2, 0],
  radiador: [0.55, 0.3, 0], ventoinha: [0.35, 0.3, 0], condensador: [0.75, 0.3, 0], bomba_agua: [0.35, 0.1, -0.35], vaso: [0.45, 0.9, -0.2], mang_sup: [0.3, 0.8, -0.2], mang_inf: [0.3, 0.1, -0.2], sens_temp: [0.3, 1.0, -0.2],
  compressor: [0.45, -0.1, 0.45], modulo_termico: [-0.1, 0.8, 0.35], pressostato: [0.3, 0.6, 0.4], tubos_ac: [0.2, 0.3, 0.3],
  bateria: [0.3, 0.9, 0.3], cabos_bat: [0.1, 0.7, 0.2], caixa_fus_motor: [0.1, 1.0, 0.4], caixa_fus_painel: [0, 0.4, 0.4], bcm: [0, 0.35, 0.4], chicote: [0, 1.8, 0], buzina: [0.8, -0.05, 0.2], avas: [0.8, -0.05, -0.2], limpador: [0.1, 0.5, 0], limpador_tras: [-0.6, 0.4, 0], lavador: [0.7, 0.2, -0.2], comutadores: [-0.2, 0.3, 0.1],
  pedal_freio: [-0.15, 0.2, 0], ipb: [0.05, 0.6, 0.35], reserv_freio: [0.05, 0.85, 0.35], sens_roda: [0, 0.05, 0.6, 1], tubos_freio: [0, -0.1, 0], pincas: [0, 0.05, 0.55, 1], pastilhas: [0, 0.05, 0.48, 1], discos: [0, 0, 0.4, 1], pincas_tras: [0, 0.05, 0.55, 1], pastilhas_tras: [0, 0.05, 0.48, 1], discos_tras: [0, 0, 0.4, 1], epb: [0, 0.2, 0.6, 1],
  pneus: [0, 0, 0.85, 1], rodas: [0, 0, 0.75, 1], mangas: [0, 0, 0.25, 1], amort_diant: [0, 0.25, 0.2, 1], molas_diant: [0, 0.35, 0.3, 1], coxins_amort: [0, 0.55, 0.2, 1], bandejas: [0, -0.2, 0.15, 1], barra_estab: [0, -0.25, 0], subchassi: [0, -0.35, 0],
  eixo_tras: [0, -0.3, 0], buchas_eixo: [0.2, -0.25, 0.2, 1], cubo_tras: [0, 0, 0.3, 1], amort_tras: [0, 0.3, 0.15, 1], molas_tras: [0, 0.4, 0.2, 1], kit_pneu: [-0.3, 0.45, 0],
  volante_dir: [-0.3, 0.3, 0], coluna: [-0.1, 0.25, 0], eps: [-0.25, 0.35, 0.1], caixa_dir: [0, -0.15, 0], barras_axiais: [0, -0.15, 0.15, 1]
};

return { SYS, PARTS, FIX, FXKIND, SYMPTOMS, FLOWS, MAINT, SPECS, GUIDES, EXV };
  }
});
