export interface IRegistro {
  id: string;
  usuario_id: string;
  cargo_id: string;
  cota: string;
  respostas: string[];
  inscricao_id: string;
  participacao: string;
  versao_prova: string;
  criado_em: Date;
  atualizado_em: Date;
}