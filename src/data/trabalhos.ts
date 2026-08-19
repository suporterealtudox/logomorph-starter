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
];

export const FILTROS = [
  { id: 'tudo', rotulo: 'Todos' },
  { id: 'times', rotulo: 'Times e federações' },
  { id: 'empresas', rotulo: 'Empresas' },
  { id: 'comida', rotulo: 'Comida' },
] as const;

export type FiltroId = (typeof FILTROS)[number]['id'];
