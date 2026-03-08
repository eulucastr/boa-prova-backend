import type { IRegistro } from "./registro.interface.js";

export interface IUsuario {
  id: string;
  nome: string;
  email: string;
  registros: IRegistro[];
  criado_em: Date;
  atualizado_em: Date;
}

export interface IUsuarioCreate {
  nome: string;
  email: string;
}

export interface IUsuarioRepository {
  create(usuario: IUsuarioCreate): Promise<IUsuario>;
  findById(id: string): Promise<IUsuario | null>;
  findByEmail(email: string): Promise<IUsuario | null>;
}
