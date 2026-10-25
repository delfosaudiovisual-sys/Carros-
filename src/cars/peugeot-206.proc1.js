/* ===== Peugeot 206 1.4 flex: como desmontar e montar cada peça (motor, admissão, combustível, ignição, arrefecimento, escape e elétrica) =====
   Cada entrada: f = ferramentas, pre = antes de começar, d = desmontar, m = montar; oem/alt = códigos, quando confirmados. */
const P = ((window.CAR_PROC = window.CAR_PROC || {})['peugeot-206'] = window.CAR_PROC['peugeot-206'] || {});
const M = (id, o) => { P[id] = o; };
const BAT = 'Desligue o negativo da bateria com o procedimento anti-ECO: capô aberto, chave fora, portas fechadas sem trancar e 15 minutos de espera.';
const ELEV = 'Carro no elevador ou firme sobre cavaletes, nunca apoiado só no macaco.';
const AGUA = 'Motor frio. Drene o líquido de arrefecimento pela mangueira inferior do radiador num recipiente limpo.';
const SANGRA = 'Complete o líquido pelo reservatório, abra os parafusos de sangria até sair líquido sem bolhas, feche-os e deixe o motor funcionar até a ventoinha ligar. Confira o nível de novo com o motor frio.';
const ALIVIA = 'Alivie a pressão de combustível: com o motor em marcha lenta, tire o fusível da bomba na caixa do motor e espere o motor apagar.';

/* ---------- MOTOR ---------- */
M('bloco', {
  f: 'Guincho de motor ou elevador, macaco de transmissão, jogo de soquetes, torquímetro.',
  pre: 'O bloco só sai com o motor fora do carro; na prática é uma retífica. ' + BAT,
  d: ['Drene óleo, líquido de arrefecimento e o óleo do câmbio.', 'Tire o capô (ajuda muito), a bateria e a bandeja, a caixa do filtro e o duto de ar.',
    'Solte chicote do motor e conectores da central, mangueiras de água, de vácuo e de combustível (alivie a pressão antes), cabo da embreagem e varões do câmbio.',
    'Solte o escapamento na junta flexível e tire os dois semieixos.', 'Apoie o conjunto motor-câmbio por baixo, solte os três coxins e baixe o conjunto (ou levante a carroceria).',
    'Separe o câmbio, tire cabeçote, cárter, distribuição, virabrequim, pistões e camisas até sobrar o bloco.'],
  m: ['Bloco limpo e conferido (planicidade, galerias desobstruídas) antes de montar qualquer peça.', 'Monte virabrequim, camisas, pistões e cabeçote com os apertos da ficha de fixadores.',
    'Reinstale o conjunto pelos coxins e aperte com o motor na posição de repouso.', 'Abasteça óleo, água (com sangria) e óleo do câmbio; confira vazamentos e falhas no scanner.']
});
M('camisas', {
  f: 'Travas de camisa (ou parafusos com arruelas largas), relógio comparador, extrator se estiverem presas.',
  pre: 'Serviço de retífica. Com o cabeçote fora, prenda as camisas antes de girar o motor, senão elas sobem e passam a vazar água no óleo.',
  d: ['Tire cabeçote e cárter e prenda as camisas com as travas.', 'Solte as capas de biela e empurre cada pistão para cima.', 'Tire as travas e puxe cada camisa para cima, junto com o pistão, sem raspar a sede do bloco.', 'Marque a posição de cada camisa se for reaproveitar.'],
  m: ['Use anéis de vedação novos na base de cada camisa, secos ou com o lubrificante indicado.', 'Encaixe as camisas e meça a saliência delas acima do bloco com relógio comparador: tem de ficar dentro da faixa do manual e parecida entre vizinhas.', 'Prenda com as travas até instalar o cabeçote com a junta nova.']
});
M('cabecote', {
  f: 'Pinos de ponto do comando e do volante, soquete para os parafusos do cabeçote, torquímetro e goniômetro (transferidor de ângulo), travas de camisa.',
  pre: AGUA + ' ' + BAT,
  d: ['Tire o duto de ar, a bobina e a tampa de válvulas.', 'Ponha o motor no ponto com os pinos, alivie o tensor e tire a correia dentada.', 'Desligue chicotes, sensores, mangueiras de água e de vácuo e a linha de combustível (alivie a pressão).',
    'Solte o coletor de escape do tubo do catalisador; o de admissão pode sair junto com o cabeçote.', 'Afrouxe os 10 parafusos do cabeçote na ordem inversa do aperto, de fora para dentro, um pouco de cada vez.',
    'Levante o cabeçote reto, sem girar, e prenda as camisas com as travas na hora.'],
  m: ['Limpe as faces sem lixa nem raspador de aço (o alumínio risca). Confira planicidade.', 'Junta nova, seca, com a marcação para cima. Meça os parafusos: comprimento máximo 176,5 mm e no máximo dois usos.',
    'Aperte em espiral de dentro para fora: 20 N·m em todos, depois 120° e mais 120°.', 'Regule a folga de válvulas a frio (admissão 0,20 mm, escape 0,40 mm), instale a correia no ponto e gire o motor à mão duas vezes antes de dar partida.',
    'Reconecte tudo e faça a sangria: ' + SANGRA]
});
M('junta_cab', {
  f: 'As mesmas do cabeçote.',
  pre: 'A junta só se troca tirando o cabeçote. Antes, confirme o defeito: teste de CO2 no reservatório ou teste de vazamento de cilindro.',
  d: ['Siga a desmontagem do cabeçote até ele sair.', 'Tire a junta velha e limpe resíduos das faces e dos furos dos parafusos (óleo ou água no fundo dos furos falseia o aperto).', 'Mande conferir a planicidade do cabeçote; se empenou, ele precisa ser plainado.'],
  m: ['Junta nova do mesmo tipo, centrada pelos pinos-guia do bloco.', 'Aperto do cabeçote em espiral: 20 N·m + 120° + 120°, com parafusos dentro da medida.', 'Complete e sangre o arrefecimento e troque o óleo se ele estava contaminado.']
});
M('tampa_valv', {
  f: 'Soquete 10 mm, torquímetro de baixa escala.',
  pre: 'Motor frio para não queimar as mãos no escape.',
  d: ['Tire o duto de ar e desligue o respiro do cárter.', 'Desligue o conector e tire a bobina.', 'Solte as 6 porcas ou parafusos com espaçadores, guardando arruelas e borrachas.', 'Levante a tampa reta para não entortar o defletor de óleo.'],
  m: ['Junta e borrachas dos espaçadores novas; limpe a face do cabeçote.', 'Assente a tampa e aperte em cruz, de leve (cerca de 10 N·m): aperto demais deforma a junta.', 'Reinstale bobina e respiro e confira vazamentos com o motor quente.']
});
M('comando', {
  f: 'Pinos de ponto, ferramenta para segurar a polia do comando, extrator de retentor, torquímetro.',
  pre: 'Exige tirar a correia dentada. Aproveite para trocar correia, tensor e retentor do comando.',
  d: ['Tire a tampa de válvulas e o eixo de balancins (afrouxe por igual).', 'Ponha o motor no ponto, tire a correia dentada e solte a polia do comando segurando-a com a ferramenta.', 'Tire a placa de encosto do comando, na ponta do cabeçote.', 'Puxe o comando pela ponta com cuidado para não riscar os mancais.'],
  m: ['Lubrifique cames e mancais com óleo de motor e encaixe o comando.', 'Placa de encosto e retentor novo; confira a folga axial.', 'Polia com o aperto do manual, correia no ponto e folga de válvulas regulada.']
});
M('balancins', {
  f: 'Soquetes, torquímetro, calibre de lâminas, chave estrela para o ajuste.',
  pre: 'Motor frio, pelo menos 4 horas parado.',
  d: ['Tire a tampa de válvulas.', 'Afrouxe as fixações do eixo de balancins por igual, em várias passadas, porque as molas das válvulas empurram o eixo.', 'Levante o eixo com os balancins sem trocar a ordem deles.'],
  m: ['Lubrifique e aperte as fixações por igual até o torque do manual.', 'Regule a folga girando o motor pelo método da balança: quando as válvulas de um cilindro estão em balanço, regula-se o cilindro par dele (1 e 4, 2 e 3).', 'Admissão 0,20 mm e escape 0,40 mm, a frio. Trave a contraporca segurando o parafuso.']
});
M('valvulas', {
  f: 'Compressor de molas de válvula, alicate de retentor, pasta de esmerilhar.',
  pre: 'Serviço de bancada, com o cabeçote fora do carro.',
  d: ['Tire o cabeçote e o eixo de balancins.', 'Comprima cada mola, tire as travas (chavetas), o prato e a mola.', 'Tire o retentor e puxe a válvula por baixo, guardando cada uma na ordem do cilindro.'],
  m: ['Retentores novos. Esmerilhe as sedes se for reaproveitar as válvulas e confira a vedação com querosene.', 'Monte válvula, mola, prato e travas; dê uma batida leve com martelo de borracha para assentar as travas.', 'Depois do cabeçote no lugar, regule a folga.']
});
M('pistoes', {
  f: 'Cinta de anéis, chave de biela, torquímetro, calibre para a folga entre pontas.',
  pre: 'Motor aberto: cabeçote e cárter fora, camisas travadas.',
  d: ['Marque cada capa de biela com o número do cilindro.', 'Solte as capas e empurre pistão e biela para cima; nesse motor de camisa úmida eles costumam sair junto com a camisa.', 'Separe o pistão da biela tirando o pino.'],
  m: ['Anéis com as pontas desencontradas (cerca de 120° entre elas) e folga entre pontas conferida.', 'Seta no topo do pistão apontando para o lado da correia.', 'Óleo na camisa, cinta de anéis e empurre com o cabo do martelo. Capas no mesmo lugar, 38 N·m.']
});
M('bielas', {
  f: 'Chave de biela, torquímetro, Plastigage para a folga das bronzinas.',
  pre: 'Com o cárter fora, as capas aparecem por baixo.',
  d: ['Marque biela e capa juntas.', 'Solte os 2 parafusos da capa e tire-a com a bronzina.', 'Empurre a biela para cima com o pistão.'],
  m: ['Bronzinas novas se houver marca de desgaste; confira a folga com Plastigage.', 'Óleo nas bronzinas, capa na mesma biela e na mesma posição.', 'Aperte os parafusos a 38 N·m e gire o virabrequim para conferir que não prende.']
});
M('virabrequim', {
  f: 'Travamento do volante, torquímetro, goniômetro, relógio comparador.',
  pre: 'Só sai com o motor desmontado na bancada.',
  d: ['Tire volante, polia, engrenagem da distribuição, cárter e bomba de óleo (solte a corrente).', 'Solte as bielas.', 'Solte os 10 parafusos do semi-cárter (mancais) em várias passadas e tire o virabrequim.'],
  m: ['Bronzinas e arruelas de encosto lubrificadas.', 'Semi-cárter com cola nova: 20 N·m + 47°.', 'Folga axial entre 0,07 e 0,23 mm. Retentores novos nas duas pontas.']
});
M('carter', {
  f: 'Soquetes 10 mm, espátula plástica, cola de vedação para motor (silicone de alta temperatura ou a indicada pela PSA).',
  pre: ELEV + ' Motor frio.',
  d: ['Drene o óleo pelo bujão.', 'Desligue o sensor de nível de óleo.', 'Solte os parafusos em volta, dos cantos para o meio.', 'Descole o cárter com espátula plástica, sem alavancar na face: o alumínio marca e passa a vazar.'],
  m: ['Limpe as duas faces até sair toda a cola velha e desengraxe.', 'Cordão contínuo de cola, contornando os furos, e monte dentro do tempo indicado pela cola.', 'Aperte em cruz, de leve (cerca de 8 a 10 N·m). Espere a cura antes de abastecer o óleo.', 'Bujão com arruela nova, cerca de 30 N·m.']
});
M('bomba_oleo', {
  f: 'Soquetes, torquímetro.',
  pre: 'A bomba fica dentro do cárter, girada por corrente.',
  d: ['Tire o cárter.', 'Solte os parafusos da bomba e desengate a engrenagem da corrente.', 'Tire a bomba com o pescador.'],
  m: ['Limpe a tela do pescador; se houver borra, limpe também o cárter.', 'Confira o desgaste da corrente e da engrenagem.', 'Aperte conforme o manual, monte o cárter e confira a pressão com manômetro.']
});
M('filtro_oleo', {
  f: 'Chave de cinta ou copo para filtro, bandeja de óleo.',
  pre: 'Junto com a troca de óleo. Confirme o modelo do filtro para o TU3JP: há um parecido e menor que derruba a pressão.',
  d: ['Drene o óleo.', 'Solte o filtro girando para a esquerda com a chave de cinta.', 'Limpe a sede do bloco e confira se o anel velho não ficou grudado.'],
  m: ['Passe óleo novo no anel de borracha do filtro novo.', 'Rosqueie à mão até encostar e dê mais ¾ de volta, só com a mão.', 'Abasteça, ligue o motor e veja a luz de óleo apagar em segundos; confira vazamento e o nível na vareta.']
});
M('vareta', {
  d: ['Puxe a vareta pelo cabo.', 'O tubo é preso ao bloco por um parafuso no suporte e encaixado com anel de vedação; solte o parafuso e puxe para trocar o tubo.'],
  m: ['Anel de vedação novo no tubo, untado com óleo.', 'Vareta encaixada até o fim: mal encaixada, deixa o motor puxar ar falso pelo respiro.']
});
M('tampa_oleo', {
  d: ['Gire a tampa para a esquerda e tire.'],
  m: ['Confira a borracha de vedação; troque se estiver dura ou rachada.', 'Encaixe e gire até travar.']
});
M('volante_motor', {
  f: 'Travamento do volante, soquetes, trava-química, torquímetro.',
  pre: 'Exige tirar o câmbio e a embreagem.',
  d: ['Tire o câmbio e o platô com o disco.', 'Trave o volante e marque a posição dele no virabrequim.', 'Solte os 6 parafusos em cruz e tire o volante.'],
  m: ['Parafusos novos com trava-química, na marca de posição.', 'Aperto alto em cruz, conforme o manual.', 'Revise a face (retífica se vitrificada) e a cremalheira do motor de partida.']
});
M('correia_dent', {
  f: 'Pino de ponto do comando e pino de ponto do volante, travamento da polia do virabrequim, chave do tensor, torquímetro, macaco com calço de madeira.',
  pre: BAT + ' Faça junto com tensor e bomba d’água. ' + ELEV,
  d: ['Tire a roda dianteira direita e o forro da caixa de roda.', 'Tire a correia do alternador.', 'Apoie o motor por baixo com o calço e tire o coxim direito.', 'Tire a capa superior, trave o virabrequim e solte a polia; tire as capas inferiores.',
    'Gire o motor pela polia até os furos de ponto alinharem e coloque os pinos no comando e no volante.', 'Alivie o tensor e tire a correia.'],
  m: ['Com os pinos no lugar, passe a correia nova sem torcer, começando pelo virabrequim e terminando no tensor, sem folga no lado que puxa.', 'Gire o tensor até a seta alinhar com a marca e aperte a porca.',
    'Tire os pinos, gire o motor 4 voltas no sentido de trabalho e recoloque os pinos: devem entrar sem forçar. Se a marca do tensor mudou, ajuste de novo.', 'Capas, polia com o aperto angular do manual, coxim, correia do alternador e roda. Dê partida e escute: chiado indica tensor mal ajustado.']
});
M('tensor_dent', {
  f: 'As da correia dentada.',
  pre: 'Troca sempre junto com a correia.',
  d: ['Siga a desmontagem da correia dentada.', 'Solte a porca do tensor e tire-o do prisioneiro.'],
  m: ['Tensor novo com a lingueta encaixada no furo do bloco.', 'Ajuste a seta com a marca depois de a correia estar no lugar e confira após 4 voltas.']
});
M('polia_comando', {
  f: 'Ferramenta para segurar a polia, pino de ponto, extrator de retentor.',
  pre: 'Parte do serviço da correia dentada.',
  d: ['Tire a correia dentada.', 'Segure a polia e solte o parafuso central.', 'Puxe a polia; guarde a chaveta.'],
  m: ['Troque o retentor do comando se houver óleo atrás da polia.', 'Chaveta no lugar, polia e parafuso com o aperto do manual.', 'Pino de ponto entrando livre antes de montar a correia.']
});
M('capas_correia', {
  d: ['A capa superior sai soltando os parafusos e clipes; as inferiores exigem tirar a polia do virabrequim.', 'Puxe com cuidado para não quebrar as abas.'],
  m: ['Encaixe sem prender o chicote, e confira se a correia não roça na capa ao girar o motor.']
});
M('polia_vira', {
  f: 'Travamento do virabrequim, soquete com cabo de força, torquímetro e goniômetro.',
  pre: 'Roda direita e forro da caixa de roda fora.',
  d: ['Tire a correia do alternador.', 'Trave o virabrequim (pela cremalheira do volante ou com a ferramenta da polia).', 'Solte o parafuso central e tire a polia.'],
  m: ['Polia no encaixe, parafuso com o aperto angular do manual (parafuso novo se o manual pedir).', 'Correia do alternador com a tensão certa.']
});
M('correia_acess', {
  f: 'Soquetes 13 mm, régua para medir a deflexão.',
  pre: 'Motor desligado e chave fora. A correia passa só pela polia do virabrequim e pelo alternador.',
  d: ['Tire a roda direita e o forro, ou trabalhe por baixo do cofre.', 'Afrouxe o parafuso de articulação e o de ajuste do alternador.', 'Empurre o alternador em direção ao motor e tire a correia.'],
  m: ['Encaixe a correia em todas as canaletas das duas polias.', 'Puxe o alternador para fora até a tensão certa (cerca de 5 mm de deflexão no meio do trecho maior) e aperte o parafuso de ajuste e depois o de articulação.', 'Ligue o motor e acenda os faróis: não pode chiar.']
});
M('tensor_acess', {
  f: 'Soquetes 13 mm.',
  d: ['Afrouxe a correia (veja a correia do alternador).', 'Solte o parafuso de ajuste e tire o braço com rasgo.'],
  m: ['Braço novo, parafuso de ajuste lubrificado, tensão da correia refeita.']
});
M('coxim_dir', {
  f: 'Macaco com calço de madeira, soquetes 16 e 18 mm, torquímetro.',
  pre: 'Apoie o motor por baixo, no cárter, com um calço largo de madeira para não amassar.',
  d: ['Tire o reservatório de expansão de lado, sem desligar as mangueiras, se ele atrapalhar.', 'Solte as porcas do coxim no suporte do motor e na carroceria.', 'Levante o motor um pouco com o macaco e tire o coxim.'],
  m: ['Coxim novo na posição certa (a seta, quando houver, para o motor).', 'Baixe o motor até apoiar e aperte com o motor em repouso, no torque do manual.', 'Confira se o motor não balança na partida.']
});
M('coxim_esq', {
  f: 'Soquetes, macaco para o câmbio.',
  pre: 'Tire a bateria e a bandeja dela para chegar ao coxim.',
  d: ['Apoie o câmbio por baixo.', 'Solte a porca central e os parafusos do suporte na carroceria.', 'Tire o coxim levantando o câmbio um pouco.'],
  m: ['Coxim novo, aperto com o conjunto em repouso.', 'Bandeja e bateria (positivo primeiro).']
});
M('coxim_inf', {
  f: 'Soquetes, torquímetro.',
  pre: ELEV,
  d: ['Por baixo, solte o parafuso do tirante no agregado e o do suporte no motor.', 'Tire o tirante.'],
  m: ['Tirante ou bucha nova; aperte com o motor parado na posição de repouso.']
});
M('respiro', {
  f: 'Alicate de abraçadeira.',
  d: ['Abra as abraçadeiras e puxe as mangueiras da tampa de válvulas e da admissão.'],
  m: ['Mangueiras novas sem dobras, abraçadeiras firmes; confira a marcha lenta depois.']
});

/* ---------- AR E INJEÇÃO ---------- */
M('tomada_ar', {
  d: ['Solte os clipes ou o parafuso da tomada no painel frontal.', 'Desencaixe da caixa do filtro e puxe para a frente.'],
  m: ['Encaixe bem na caixa do filtro: fresta aqui deixa entrar água e sujeira.']
});
M('caixa_filtro', {
  f: 'Chave de fenda, soquetes.',
  d: ['Solte a tomada de ar e a abraçadeira do duto.', 'Abra a caixa e tire o filtro.', 'A base sai puxando dos pinos de borracha ou soltando os parafusos.'],
  m: ['Pinos de borracha no lugar, duto e tomada bem encaixados, presilhas todas fechadas.']
});
M('filtro_ar', {
  d: ['Abra as presilhas da tampa da caixa.', 'Levante a tampa e tire o filtro, sem deixar cair sujeira no lado limpo.', 'Limpe o fundo da caixa com pano.'],
  m: ['Filtro novo com a borda de borracha assentada em toda a volta.', 'Feche a tampa e todas as presilhas.']
});
M('duto_ar', {
  f: 'Chave de fenda ou alicate.',
  d: ['Solte a abraçadeira na caixa do filtro e no corpo de borboleta.', 'Desligue o respiro e puxe o duto.'],
  m: ['Duto sem trincas, abraçadeiras firmes. Qualquer fresta depois do filtro deixa entrar ar não medido.']
});
M('tbi', {
  f: 'Soquetes, limpa-TBI (produto próprio), scanner para reaprendizado se precisar.',
  pre: 'Chave desligada.',
  d: ['Tire o duto de ar.', 'Desligue o conector da borboleta.', 'Solte os 4 parafusos e tire o corpo.'],
  m: ['Junta nova, parafusos por igual.', 'Para limpar, não force a borboleta com a mão: ela é motorizada.', 'Ligue a chave por 10 segundos sem pisar, dê partida e deixe em lenta; se a lenta não estabilizar, faça o reaprendizado com scanner.']
});
M('coletor_adm', {
  f: 'Soquetes, extensões longas, juntas novas.',
  pre: ALIVIA + ' ' + BAT,
  d: ['Tire duto de ar e corpo de borboleta.', 'Desligue sensor de pressão, purga, respiro, mangueira de vácuo do servo e os tubinhos da partida a frio.', 'Tire a galeria com os bicos.', 'Solte os 6 parafusos e tire o coletor plástico.'],
  m: ['Juntas novas, faces limpas.', 'Aperto cruzado, baixo: o coletor é plástico.', 'Reconecte tudo e procure entrada falsa de ar com o motor em lenta.']
});
M('galeria', {
  f: 'Soquetes, vaselina, anéis de vedação novos para os bicos.',
  pre: ALIVIA + ' Tenha pano à mão para o combustível que escorrer.',
  d: ['Desligue a linha de combustível no engate rápido e os conectores dos bicos.', 'Solte os 2 parafusos da galeria.', 'Puxe a galeria reta: os bicos saem juntos.'],
  m: ['Anéis novos com vaselina nos bicos.', 'Encaixe os bicos no coletor e aperte os parafusos a cerca de 10 N·m.', 'Ligue a chave algumas vezes (a bomba pressuriza) e procure vazamento antes de dar partida.']
});
M('bicos', {
  f: 'As da galeria; bancada de teste para limpeza.',
  pre: ALIVIA,
  d: ['Tire a galeria com os bicos.', 'Solte a trava de cada bico e puxe-o da galeria.'],
  m: ['Bicos limpos e testados, anéis novos com vaselina.', 'Trave cada bico na galeria e monte a galeria.', 'Teste vazamento com a chave ligada antes da partida.']
});
M('pedal_acel', {
  f: 'Soquetes, lanterna.',
  d: ['Desligue o conector do sensor do pedal.', 'Solte as porcas do suporte no corta-fogo e tire o pedal.'],
  m: ['Aperte o suporte, ligue o conector e confira no scanner se a leitura do pedal vai de 0 a 100 %.']
});

/* ---------- COMBUSTÍVEL ---------- */
M('tanque', {
  f: 'Macaco de transmissão ou macaco com tábua, soquetes, bomba de transferência de combustível.',
  pre: 'Tanque o mais vazio possível. ' + BAT + ' Trabalhe ventilado, longe de chama.',
  d: ['Tire o assento traseiro e desligue o conector da bomba pela tampa de acesso.', 'Transfira o combustível restante.', ELEV + ' Solte as linhas de combustível e do cânister, a mangueira do bocal e o cabo do freio de mão que passa por perto.',
    'Apoie o tanque com o macaco e solte os parafusos e as cintas.', 'Baixe o tanque devagar, conferindo que nada ficou preso.'],
  m: ['Suba o tanque, encaixe mangueiras e linhas antes de apertar as cintas.', 'Aperte cintas e parafusos, ligue tudo e confira vazamentos com a bomba ligada.']
});
M('bomba_comb', {
  f: 'Chave do anel da bomba (ou chave de fenda e martelo de borracha), anel de vedação novo.',
  pre: ALIVIA + ' Tanque com menos de ¼ para o combustível não transbordar.',
  d: ['Levante o assento traseiro e tire a tampa de acesso.', 'Desligue o conector e as linhas da bomba.', 'Solte o anel de trava girando para a esquerda.', 'Levante a bomba devagar e incline para a boia sair sem entortar.'],
  m: ['Anel de vedação novo, seco e assentado.', 'Encaixe a bomba com a seta alinhada à marca do tanque e aperte o anel.', 'Ligue as linhas, o conector, ligue a chave e procure vazamentos. Se trocou a boia, faça o aprendizado do nível.']
});
M('boia', {
  f: 'As da bomba de combustível.',
  pre: 'A boia vem no conjunto da bomba.',
  d: ['Tire a bomba do tanque.', 'Solte o conector e a trava da boia no corpo da bomba.'],
  m: ['Monte a boia no corpo e a bomba no tanque.', 'Ensine o nível: chave ligada por um minuto com a haste em vazio, depois em meio tanque e em cheio, como na ficha da peça.']
});
M('filtro_comb', {
  f: 'Ferramenta de engate rápido, pano.',
  pre: ALIVIA + ' ' + ELEV,
  d: ['Por baixo, perto do tanque, solte os dois engates rápidos.', 'Abra a presilha e tire o filtro, mantendo-o em pé para não derramar.'],
  m: ['Filtro novo próprio para flex, com a seta apontando para o motor.', 'Engates até ouvir o clique e puxe para conferir.', 'Ligue a chave algumas vezes e procure vazamento.']
});
M('linhas_comb', {
  f: 'Ferramenta de engate rápido, cortador de tubo e conexões do mesmo tipo se precisar emendar.',
  pre: ALIVIA,
  d: ['Solte os engates rápidos nas pontas do trecho.', 'Abra os clipes do assoalho e tire o trecho.'],
  m: ['Use tubo e conexões próprios para combustível; nunca emende com mangueira comum.', 'Prenda nos clipes longe do escapamento e teste vazamentos.']
});
M('bocal', {
  f: 'Soquetes, chave de fenda.',
  pre: 'Tanque quase vazio.',
  d: ['Abra a portinhola.', 'Por baixo do carro, solte a abraçadeira da mangueira do tanque.', 'Tire os 2 parafusos da caixa da portinhola.', 'Puxe o bocal por baixo.'],
  m: ['Mangueira bem encaixada e abraçadeira firme.', 'Parafusos da portinhola e tampa com a vedação boa.']
});
M('canister', {
  f: 'Chave de fenda.',
  d: ['Desligue as mangueiras (tanque, purga e respiro), anotando cada uma.', 'Solte o suporte e tire o cânister.'],
  m: ['Cada mangueira no bico certo, sem dobras.', 'Suporte firme.']
});
M('purga', {
  d: ['Desligue o conector e as duas mangueiras.', 'Solte a válvula do suporte.'],
  m: ['Respeite o sentido da seta (do cânister para o coletor).', 'Conector travado.']
});
M('res_pf', {
  f: 'Bomba de transferência pequena, chave de fenda, soquetes.',
  pre: 'Longe de chama. Aproveite para renovar a gasolina.',
  d: ['Retire a gasolina com uma seringa ou bomba pequena pelo bocal.', 'Desligue o conector da bomba da partida a frio e a mangueira de saída.', 'Solte o reservatório do suporte.'],
  m: ['Reservatório e bomba bem presos, mangueira com abraçadeira.', 'Abasteça só com gasolina, de preferência aditivada.']
});
M('bomba_pf', {
  pre: 'Reservatório vazio.',
  d: ['Desligue o conector e a mangueira.', 'Puxe a bomba do reservatório (é encaixada com borracha).'],
  m: ['Borracha de vedação nova, bomba encaixada até o fim.', 'Abasteça e dê partida a frio para conferir o zumbido.']
});
M('valv_pf', {
  d: ['Desligue o conector e as mangueiras.', 'Solte a eletroválvula do suporte.'],
  m: ['Sentido do fluxo pela seta, abraçadeiras firmes, conector travado.']
});
M('tubos_pf', {
  pre: 'Reservatório da partida a frio vazio.',
  d: ['Solte cada tubinho do distribuidor e do bico no coletor.', 'Abra os clipes que os prendem ao coletor.'],
  m: ['Tubos novos, sem dobras, longe do escape. Confira vazamento na primeira partida a frio.']
});

/* ---------- IGNIÇÃO E SENSORES ---------- */
M('ecu', {
  f: 'Soquetes.',
  pre: BAT + ' Central nova ou usada precisa ser codificada com a chave (imobilizador) e o BSI, com scanner da marca.',
  d: ['Destrave a alavanca do conector e puxe-o.', 'Solte o suporte e tire a central.'],
  m: ['Conector seco e travado até o fim.', 'Codifique a central se não for a original e apague falhas.']
});
M('bobina', {
  f: 'Soquetes 10 mm.',
  pre: 'Chave desligada.',
  d: ['Desligue o conector.', 'Solte os 2 parafusos.', 'Puxe a bobina reta para cima, soltando das 4 velas.'],
  m: ['Confira as molas de contato de cada vela: amassadas ou sem pressão, a faísca foge.', 'Encaixe reto sobre as velas e aperte de leve.']
});
M('velas', {
  f: 'Chave de vela, torquímetro, ar comprimido.',
  pre: 'Motor frio: a rosca é no alumínio.',
  d: ['Tire a bobina.', 'Sopre o poço das velas para a sujeira não cair no cilindro.', 'Solte e tire cada vela.'],
  m: ['Velas novas da especificação do flex.', 'Rosqueie à mão até encostar e aperte a cerca de 25 N·m.', 'Monte a bobina.']
});
M('sens_rot', {
  f: 'Soquete, pano limpo.',
  d: ['Desligue o conector.', 'Solte o parafuso na carcaça do câmbio e puxe o sensor.'],
  m: ['Limpe a limalha do ímã.', 'Encaixe até assentar e aperte de leve.']
});
M('sens_det', {
  f: 'Soquete, torquímetro.',
  d: ['Desligue o conector.', 'Solte o parafuso no bloco.'],
  m: ['Face do bloco limpa, sem arruela extra.', 'Aperte a cerca de 20 N·m: torque errado muda a leitura.']
});
M('sens_temp', {
  f: 'Chave de boca do tamanho do sensor.',
  pre: 'Motor frio. Tenha o sensor novo à mão: sai um pouco de líquido.',
  d: ['Desligue o conector.', 'Solte o sensor da caixa d’água.'],
  m: ['Sensor novo com anel ou veda-rosca indicado.', 'Complete o líquido e faça a sangria.']
});
M('sonda', {
  f: 'Soquete de sonda (com rasgo para o fio), pasta antitravamento.',
  pre: 'Com o motor morno a rosca solta mais fácil, mas cuidado com o escape quente.',
  d: ['Desligue o conector (fica preso por clipes).', 'Solte a sonda com o soquete próprio.'],
  m: ['Pasta antitravamento só na rosca; sonda nova já vem com ela.', 'Aperte a cerca de 40 a 50 N·m e prenda o fio longe do escape.']
});
M('tmap', {
  f: 'Chave Torx ou soquete pequeno.',
  d: ['Desligue o conector.', 'Solte o parafuso e puxe o sensor do coletor.'],
  m: ['Anel de vedação bom; sem ele, entra ar falso.', 'Aperte de leve.']
});
M('sens_oleo', {
  f: 'Chave de boca ou soquete de sensor.',
  pre: 'Motor frio.',
  d: ['Desligue o fio.', 'Solte o interruptor do bloco.'],
  m: ['Arruela ou veda-rosca novo.', 'Aperte firme e confira vazamento com o motor ligado.']
});
M('sens_nivel_oleo', {
  pre: 'Drene o óleo antes.',
  d: ['Desligue o conector.', 'Solte o sensor do cárter.'],
  m: ['Anel novo, aperte de leve (o cárter é de alumínio), abasteça o óleo.']
});
M('sens_vel', {
  d: ['Desligue o conector.', 'Solte o parafuso e puxe o sensor do câmbio.'],
  m: ['Anel novo untado com óleo; encaixe até assentar.']
});

/* ---------- ARREFECIMENTO ---------- */
M('radiador', {
  f: 'Chave de fenda, alicate de abraçadeira, recipiente para o líquido.',
  pre: AGUA,
  d: ['Desligue o conector da ventoinha.', 'Solte as mangueiras superior e inferior.', 'Solte as fixações de cima do radiador no painel frontal.', 'Tire o radiador com a ventoinha, para cima ou para baixo conforme o carro, sem bater a colmeia.'],
  m: ['Coxins de borracha no lugar, mangueiras com abraçadeiras firmes.', 'Abasteça com o aditivo na proporção certa e ' + SANGRA.charAt(0).toLowerCase() + SANGRA.slice(1)]
});
M('ventoinha', {
  f: 'Soquetes.',
  d: ['Desligue o conector.', 'Solte os parafusos do defletor no radiador e tire o conjunto.'],
  m: ['Hélice girando livre, conector travado. Ligue o motor e espere a ventoinha armar.']
});
M('vaso', {
  pre: 'Motor frio: nunca abra quente.',
  d: ['Esvazie o reservatório com uma seringa.', 'Solte as mangueiras e o suporte.'],
  m: ['Abraçadeiras firmes, tampa boa (é ela que mantém a pressão).', SANGRA]
});
M('termostato', {
  f: 'Soquetes, anel de vedação novo.',
  pre: AGUA,
  d: ['Solte a mangueira superior da caixa d’água.', 'Solte os 3 parafusos e tire a tampa.', 'Tire a válvula termostática.'],
  m: ['Válvula nova da temperatura certa, com anel novo.', 'Parafusos por igual, de leve.', SANGRA]
});
M('bomba_agua', {
  f: 'As da correia dentada, junta ou anel novo.',
  pre: 'Feita junto com a correia dentada. ' + AGUA,
  d: ['Tire a correia dentada.', 'Solte os 5 parafusos da bomba e tire-a.', 'Limpe a face do bloco.'],
  m: ['Bomba nova com junta ou anel novo, aperto cruzado.', 'Correia dentada no ponto.', SANGRA]
});
M('mang_sup', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Abra as duas abraçadeiras.', 'Gire a mangueira para descolar e puxe.'],
  m: ['Mangueira nova sem torcer, abraçadeiras novas se estiverem oxidadas.', SANGRA]
});
M('mang_inf', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Abra as abraçadeiras no radiador e na bomba d’água.', 'Puxe a mangueira girando.'],
  m: ['Encaixe até o batente, abraçadeiras firmes.', SANGRA]
});
M('mang_aquec', {
  f: 'Alicate de abraçadeira.',
  pre: AGUA,
  d: ['Abra as abraçadeiras no motor e nos bicos do corta-fogo.', 'Puxe as mangueiras.'],
  m: ['Mangueiras certas para cada bico (entrada e saída), sem dobras.', SANGRA]
});
M('rad_aquec', {
  f: 'Chaves de fenda e Torx, espátula plástica, pano para o líquido.',
  pre: AGUA + ' Proteja o tapete do passageiro.',
  d: ['Tire o acabamento inferior do painel do lado do passageiro.', 'Solte os tubos do radiador do aquecedor no corta-fogo ou na caixa de ar.', 'Solte a tampa lateral da caixa de ar e puxe o radiador para fora. Em algumas versões é preciso soltar parte do painel.'],
  m: ['Radiador novo com vedações novas.', 'Monte tudo, abasteça e ' + SANGRA.charAt(0).toLowerCase() + SANGRA.slice(1), 'Confira se não há umidade no tapete depois de rodar.']
});

/* ---------- ESCAPAMENTO ---------- */
M('coletor_esc', {
  f: 'Soquetes, desengripante, juntas e porcas autotravantes novas.',
  pre: 'Motor frio. Desengripante nos prisioneiros na véspera ajuda.',
  d: ['Tire o protetor de calor.', 'Desligue a sonda lambda.', 'Solte a flange do catalisador.', 'Solte as 8 porcas do coletor e tire-o.'],
  m: ['Junta nova e porcas autotravantes novas, cerca de 20 N·m em cruz.', 'Flange do catalisador e protetor. Escute estalos de vazamento com o motor frio.']
});
M('protetor', {
  f: 'Soquetes, desengripante.',
  d: ['Solte os parafusos do protetor e tire-o.'],
  m: ['Parafusos firmes; protetor solto vibra e faz barulho de lata.']
});
M('catalisador', {
  f: 'Soquetes, desengripante, juntas novas.',
  pre: ELEV + ' Escape frio.',
  d: ['Tire a sonda lambda.', 'Solte a flange com o coletor e os parafusos com mola da junta flexível.', 'Tire o catalisador por baixo.'],
  m: ['Juntas novas, parafusos com mola até o batente.', 'Sonda com pasta na rosca.']
});
M('flexivel', {
  f: 'Soquetes, desengripante.',
  pre: ELEV,
  d: ['Solte os parafusos com mola da junta.', 'Afaste as pontas e tire a junta.'],
  m: ['Junta nova, parafusos até o batente da mola.', 'Confira os coxins do motor: gastos, eles matam a junta nova.']
});
M('tubo_inter', {
  f: 'Soquetes, desengripante, abraçadeiras novas.',
  pre: ELEV,
  d: ['Solte as abraçadeiras nas pontas.', 'Desencaixe dos coxins de borracha.', 'Gire e puxe para separar das luvas.'],
  m: ['Abraçadeiras novas, tubo alinhado sem encostar no assoalho.']
});
M('silenc_inter', {
  f: 'Soquetes, desengripante, abraçadeiras.',
  pre: ELEV,
  d: ['Solte as abraçadeiras dos dois lados.', 'Desencaixe dos coxins e tire.'],
  m: ['Abraçadeiras novas e coxins bons; balance o escape para ver se não bate.']
});
M('silenc_tras', {
  f: 'Soquetes, desengripante, abraçadeira nova.',
  pre: ELEV,
  d: ['Solte a abraçadeira na luva do tubo.', 'Tire os coxins (água com sabão ajuda) e puxe.'],
  m: ['Ponteira centrada, abraçadeira nova, coxins firmes.']
});
M('coxins_esc', {
  f: 'Alavanca, água com sabão.',
  d: ['Molhe a borracha com água e sabão.', 'Puxe o coxim dos ganchos com a alavanca.'],
  m: ['Coxim novo encaixado nos dois ganchos; o escape deve ficar pendurado sem tocar a carroceria.']
});

/* ---------- ELÉTRICA ---------- */
M('bateria', {
  f: 'Chave 10 mm, escova de terminal, vaselina.',
  pre: 'Ignição desligada. Para não travar o carro em modo ECO, faça o procedimento: capô aberto, chave fora, portas fechadas sem trancar e espere 15 minutos.',
  d: ['Solte primeiro o terminal negativo (preto).', 'Depois o positivo (vermelho).', 'Solte o grampo da base.', 'Tire a bateria para cima, sem inclinar.'],
  m: ['Base limpa, bateria assentada e grampo firme.', 'Ligue o positivo primeiro e o negativo por último; vaselina nos terminais.', 'Acerte o relógio e o rádio, se for o caso.']
});
M('cabos_bat', {
  f: 'Chaves 10 e 13 mm, escova de aço.',
  pre: BAT,
  d: ['Solte o terminal na bateria e a outra ponta (motor de partida, caixa de fusíveis ou ponto de massa na carroceria).', 'Abra os clipes do chicote.'],
  m: ['Pontos de massa limpos até o metal.', 'Terminais firmes e protegidos com vaselina.']
});
M('bsm', {
  f: 'Chave de fenda pequena.',
  pre: BAT,
  d: ['Abra a tampa e tire fusíveis e relés que for trocar.', 'Para tirar a caixa: solte os conectores de baixo e as travas do suporte.'],
  m: ['Conectores secos e travados; tampa fechada para não entrar água.']
});
M('bsi', {
  f: 'Chave de fenda e Torx.',
  pre: BAT + ' BSI nova precisa ser configurada com o scanner da marca (código da chave e opções do carro).',
  d: ['Tire o acabamento inferior do painel do lado do motorista.', 'Solte os conectores um a um, anotando a posição.', 'Solte as fixações e tire o BSI.'],
  m: ['Conectores no lugar até o clique.', 'Configure com scanner se não for o original.']
});
M('alternador', {
  f: 'Soquetes 10, 13 e 16 mm.',
  pre: BAT,
  d: ['Tire a correia do alternador.', 'Solte a porca do cabo grosso (B+) e o conector.', 'Solte o parafuso de ajuste e o de articulação e tire o alternador.'],
  m: ['Monte nos dois parafusos, ligue os cabos e passe a correia com a tensão certa.', 'Com o motor ligado, a tensão na bateria deve ficar entre 13,8 e 14,6 V.']
});
M('motor_partida', {
  f: 'Soquetes, extensões.',
  pre: BAT + ' ' + ELEV,
  d: ['Solte a porca do cabo positivo e o fio do solenoide.', 'Solte os 3 parafusos na carcaça do câmbio.', 'Tire o motor de partida pela folga que houver, sem forçar os fios.'],
  m: ['Encaixe no câmbio, aperte firme e ligue os cabos (porca do positivo bem apertada).', 'Teste a partida.']
});
M('chicote', {
  f: 'Chaves de fenda, fita isolante de chicote, abraçadeiras plásticas.',
  pre: BAT,
  d: ['Anote ou fotografe a passagem do trecho.', 'Solte os conectores e as presilhas do trecho.', 'Puxe com cuidado pelos passa-fios de borracha.'],
  m: ['Mesma passagem, longe de calor e de peças que se movem.', 'Prenda com abraçadeiras e confira que nenhum conector ficou solto.']
});
M('farois', {
  f: 'Soquetes, chave de fenda.',
  pre: 'Precisa tirar o para-choque dianteiro: ele cobre o parafuso de baixo.',
  d: ['Abra o capô e tire o para-choque.', 'Solte os 2 parafusos de cima e o de baixo.', 'Desligue o conector e tire o farol para a frente.'],
  m: ['Encaixe nas guias, aperte os 3 parafusos e ligue o conector.', 'Regule a altura do facho numa parede ou numa oficina.']
});
M('lanternas', {
  f: 'Chave de boca ou soquete pequeno.',
  d: ['Abra a tampa traseira e solte o acabamento lateral do porta-malas.', 'Solte as 3 porcas por dentro.', 'Desligue o conector e puxe a lanterna para trás.'],
  m: ['Borracha de vedação nova (água no porta-malas costuma vir daqui).', 'Porcas de leve: a lanterna é plástica.']
});
M('piscas_lat', {
  d: ['Empurre o repetidor para a frente (ou gire) e puxe para fora.', 'Desligue o soquete da lâmpada.'],
  m: ['Encaixe o soquete e pressione o repetidor até travar.']
});
M('luz_freio', {
  f: 'Espátula plástica.',
  d: ['Tire o acabamento interno da tampa no ponto da luz.', 'Desligue o conector e solte as presilhas.'],
  m: ['Encaixe até travar e teste com alguém pisando no freio.']
});
M('luz_placa', {
  f: 'Chave de fenda pequena.',
  d: ['Encaixe a chave na fenda da lente e solte a luz.', 'Troque a lâmpada ou desligue o soquete.'],
  m: ['Encaixe a lente com a vedação para não entrar água.']
});
M('neblina_tras', {
  d: ['Por trás do para-choque, gire o soquete e tire a lâmpada.', 'Para trocar a peça, solte as presilhas ou parafusos dela no para-choque.'],
  m: ['Soquete com a vedação, teste a luz no painel.']
});
M('buzina', {
  f: 'Soquete.',
  d: ['Por trás do para-choque (às vezes pela grade), desligue o conector.', 'Solte o parafuso do suporte.'],
  m: ['Suporte firme, conector protegido da água.']
});
M('limpador', {
  f: 'Soquetes, extrator de braço se estiver preso.',
  pre: 'Marque a posição de repouso dos braços no vidro com fita.',
  d: ['Tire as tampinhas e as porcas dos braços e puxe os braços.', 'Tire a grade do torpedo.', 'Desligue o conector do motor, solte os parafusos do mecanismo e tire tudo junto.'],
  m: ['Mecanismo no lugar, motor na posição de repouso (ligue e desligue o limpador uma vez antes de pôr os braços).', 'Braços nas marcas, porcas firmes.']
});
M('limpador_tras', {
  f: 'Soquetes, espátula plástica.',
  d: ['Tire a porca e o braço.', 'Tire o acabamento interno da tampa.', 'Desligue o conector e solte o motor.'],
  m: ['Borracha de vedação do eixo nova, motor firme, braço na posição de repouso.']
});
M('lavador', {
  f: 'Soquetes, chave de fenda.',
  d: ['Esvazie o reservatório.', 'Desligue o conector e a mangueira da bomba.', 'Solte o reservatório (o acesso costuma ser pela caixa de roda ou tirando o para-choque).'],
  m: ['Bomba com o anel de borracha, mangueira encaixada, teste os esguichos.']
});
M('ign_chave', {
  f: 'Chaves de fenda e Torx.',
  pre: BAT + ' Cilindro ou antena novos exigem gravar as chaves com scanner da marca e o código confidencial.',
  d: ['Tire as capas da coluna de direção.', 'Desligue o conector do comutador e o da antena do imobilizador.', 'Com a chave na posição indicada no manual, aperte a trava e puxe o cilindro.'],
  m: ['Encaixe o cilindro, ligue os conectores, monte as capas.', 'Grave as chaves e teste a partida com cada uma.']
});
M('comutadores', {
  f: 'Chaves de fenda e Torx.',
  pre: BAT,
  d: ['Tire as capas da coluna.', 'Solte o parafuso de fixação de cada chave (em algumas versões o módulo sai inteiro, tirando o volante).', 'Desligue os conectores e puxe.'],
  m: ['Encaixe, ligue os conectores, teste setas, faróis, buzina e limpadores antes de montar as capas.']
});
