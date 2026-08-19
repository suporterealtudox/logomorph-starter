export type Servico = {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  itens: string[];
  destaque?: boolean;
  selo?: string;
  textoBotao: string;
  mensagemZap: string;
};

/** Os três serviços da LogoMorph, na ordem em que aparecem na tela. */
export const SERVICOS: Servico[] = [
  {
    id: 'transformacao',
    nome: 'Transformação de logo',
    descricao: 'Do desenho ou rascunho ao 3D 8K ultra realista, com alto relevo e profundidade.',
    preco: '44,99',
    itens: [
      'Transformação a partir do seu desenho',
      'Alto relevo e profundidade',
      'Qualidade 8K sem perda',
      'Arquivo pronto para uso',
    ],
    textoBotao: 'Quero transformar',
    mensagemZap: 'Olá Patrício! Quero a TRANSFORMAÇÃO de logo (R$44,99).',
  },
  {
    id: 'criacao',
    nome: 'Criação de logo',
    descricao: 'Você tem só uma ideia? A LogoMorph transforma em uma marca única, do zero.',
    preco: '69,99',
    destaque: true,
    selo: 'Mais pedido',
    itens: [
      'Design 100% personalizado',
      'Identidade única para seu negócio',
      'Destaque da concorrência',
      'Marca forte, memorável e atemporal',
    ],
    textoBotao: 'Quero minha logo',
    mensagemZap: 'Olá Patrício! Quero a CRIAÇÃO de logo (R$69,99).',
  },
  {
    id: 'vetorizacao',
    nome: 'Vetorização de logo',
    descricao: 'Sua logomarca em arquivo vetorial profissional, ideal para impressão em qualquer tamanho.',
    preco: '80,00',
    itens: [
      'Escalável para qualquer tamanho',
      'Arquivos editáveis AI, EPS, PDF e SVG',
      'Alta definição e precisão',
      'Sem perda de qualidade',
    ],
    textoBotao: 'Quero vetorizar',
    mensagemZap: 'Olá Patrício! Quero a VETORIZAÇÃO de logo (R$80).',
  },
];
