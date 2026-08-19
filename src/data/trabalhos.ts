/** Categorias usadas pelos filtros da galeria. */
export type Categoria = 'times' | 'empresas' | 'comida';

export type Trabalho = {
  arquivo: string;
  nome: string;
  tipo: string;
  categoria: Categoria;
  descricaoImagem: string;
};

/** Trabalhos reais do portfólio. Para adicionar um novo:
 *  1. coloque a imagem em public/img/
 *  2. copie um bloco abaixo e troque os campos. */
export const TRABALHOS: Trabalho[] = [
  {
    arquivo: 'avante-tigre.jpg',
    nome: 'Avante Tigre',
    tipo: 'Mascote 3D · Futsal Itaí',
    categoria: 'times',
    descricaoImagem: 'Emblema 3D com mascote de tigre musculoso do Futsal Itaí',
  },
  {
    arquivo: 'gremio-f7.jpg',
    nome: 'Grêmio Independente',
    tipo: 'Clube de Fut7',
    categoria: 'times',
    descricaoImagem: 'Escudo 3D azul e dourado do Grêmio Independente F7',
  },
  {
    arquivo: 'sport-diadema.jpg',
    nome: 'Sport Diadema',
    tipo: 'Clube de Fut7',
    categoria: 'times',
    descricaoImagem: 'Escudo 3D vermelho e preto com leão dourado do Sport Diadema F7',
  },
  {
    arquivo: 'burger-alagoas.jpg',
    nome: 'Delícias de Alagoas',
    tipo: 'Hamburgueria',
    categoria: 'comida',
    descricaoImagem: 'Logo circular 3D de hamburgueria com hambúrguer na praia, Delícias de Alagoas',
  },
  {
    arquivo: 'ls-tracker.jpg',
    nome: 'LS Tracker',
    tipo: 'Rastreamento veicular',
    categoria: 'empresas',
    descricaoImagem: 'Logo 3D azul e vermelha da LS Tracker Rastreamento',
  },
  {
    arquivo: 'real-sergipe.jpg',
    nome: 'Real Sergipe',
    tipo: 'Clube esportivo',
    categoria: 'times',
    descricaoImagem: 'Emblema 3D dourado com coroa do Real Sergipe',
  },
  {
    arquivo: 'federacao-fut7.jpg',
    nome: 'Federação Sergipana',
    tipo: 'Fut7',
    categoria: 'times',
    descricaoImagem: 'Selo 3D da Federação Sergipana de Fut7 em azul, verde e amarelo',
  },
  {
    arquivo: 'futsal-itai.jpg',
    nome: 'Futsal Itaí',
    tipo: 'Categoria de base · Itaí-SP',
    categoria: 'times',
    descricaoImagem: 'Escudo 3D azul e laranja da categoria de base do Futsal Itaí',
  },
  {
    arquivo: 'jaguari-fc.jpg',
    nome: 'Jaguari F.C.',
    tipo: 'Futebol Clube',
    categoria: 'times',
    descricaoImagem:
      'Emblema circular 3D preto e branco do Jaguari Futebol Clube, com leão rampante preto brilhante segurando um cetro e detalhes de bolas e rosas vermelhas no aro',
  },
  {
    arquivo: 'barceloninha.jpg',
    nome: 'Barceloninha Academy',
    tipo: 'Escolinha de futebol',
    categoria: 'times',
    descricaoImagem:
      'Escudo 3D amarelo com listras azuis e grenás e bola de futebol ao centro, da Barceloninha Academy',
  },
  {
    arquivo: 'amigos-do-caia.jpg',
    nome: 'Amigos do Caiá',
    tipo: 'Time amador',
    categoria: 'times',
    descricaoImagem:
      'Escudo 3D vermelho, branco e azul com monograma dourado, espigas e faixas escritas "Jogando juntos" e "Jesus Cristo", sobre fundo de madeira',
  },
  {
    arquivo: 'guga-deposito.jpg',
    nome: 'Guga Comércio e Depósito',
    tipo: 'Comércio e depósito de bebidas',
    categoria: 'empresas',
    descricaoImagem:
      'Logo circular 3D preta e laranja com letras cromadas GUGA e caneca de chopp no topo, com telefone na borda',
  },
  {
    arquivo: 'beira-do-campo.jpg',
    nome: 'Beira do Campo F.C.',
    tipo: 'Futebol Clube',
    categoria: 'times',
    descricaoImagem:
      'Escudo 3D prateado, vermelho e preto com bandeira quadriculada, leão prateado, estrela dourada e o ano 2019',
  },
  {
    arquivo: 'didisports.jpg',
    nome: 'Didisports',
    tipo: 'Artigos esportivos',
    categoria: 'empresas',
    descricaoImagem:
      'Logo 3D azul-marinho e cromada com monograma D e o nome Didisports, com telefone de WhatsApp abaixo',
  },
  {
    arquivo: 'piaui-ec.jpg',
    nome: 'Piauí Esporte Clube',
    tipo: 'Clube esportivo',
    categoria: 'times',
    descricaoImagem:
      'Emblema circular 3D vermelho, branco e azul do Piauí Esporte Clube com punho fechado, ramos dourados e a frase Rua da Inveja',
  },
  {
    arquivo: 'porto-socorrense.jpg',
    nome: 'Porto Socorrense',
    tipo: 'Clube de futebol',
    categoria: 'times',
    descricaoImagem:
      'Escudo 3D azul-marinho e prateado do Porto Socorrense com estrela cromada e bola de futebol azul e branca',
  },
  {
    arquivo: 'adega-do-fs.jpg',
    nome: 'Adega do FS',
    tipo: 'Adega',
    categoria: 'comida',
    descricaoImagem:
      'Selo circular 3D dourado sobre fundo preto com dois canecos de chopp brindando, espigas e faixa escrita Adega do FS',
  },
  {
    arquivo: 'garotos-nova-geracao.jpg',
    nome: 'E.C. Garotos Nova Geração',
    tipo: 'Escolinha de futebol',
    categoria: 'times',
    descricaoImagem:
      'Emblema circular 3D azul e amarelo com jogador prateado em relevo dominando a bola e três estrelas douradas',
  },
];

export const FILTROS = [
  { id: 'tudo', rotulo: 'Todos' },
  { id: 'times', rotulo: 'Times e federações' },
  { id: 'empresas', rotulo: 'Empresas' },
  { id: 'comida', rotulo: 'Comida' },
] as const;

export type FiltroId = (typeof FILTROS)[number]['id'];
