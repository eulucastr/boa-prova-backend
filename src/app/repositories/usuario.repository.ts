import { prisma } from "../../prisma/prima-client.js";
import type { IUsuario, IUsuarioCreate, IUsuarioRepository } from "../interfaces/usuario.interface.js";

class UsuarioRepository implements IUsuarioRepository {
  async create(usuario: IUsuarioCreate): Promise<IUsuario> { 
    const data = await prisma.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email
      },
      include: {
        registros: true
      }
    });
    
    return data;
  }
  
  async findById(id: string): Promise<IUsuario | null> {
    const data = await prisma.usuario.findUnique({
      where: { id },
      include: {
        registros: true
      }
    });
    
    return data;
  }
  
  async findByEmail(email: string): Promise<IUsuario | null> {
    const data = await prisma.usuario.findUnique({
      where: { email },
      include: {
        registros: true
      }
    });
    
    return data;
  }
}

export { UsuarioRepository }; 