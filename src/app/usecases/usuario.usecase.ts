import type { IUsuario, IUsuarioCreate, IUsuarioRepository } from "../interfaces/usuario.interface.js";
import { UsuarioRepository } from "../repositories/usuario.repository.js";

class UsuarioUseCase {
  private usuarioRepository: IUsuarioRepository;

  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async create(data: IUsuarioCreate): Promise<IUsuario> {
    const existingUser = await this.usuarioRepository.findByEmail(data.email);
    
    if (existingUser) {
      throw new Error('Email já cadastrado');
    }
    
    const result = await this.usuarioRepository.create(data);
    
    return result;
  }
  
  
}

export { UsuarioUseCase };