import { PrismaClient, Fase, Participacao } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando semeadura de dados...')

  // 1. Criar uma Banca
  const bancaFgv = await prisma.banca.upsert({
    where: { id: 'banca-fgv' },
    update: {},
    create: {
      id: 'banca-fgv',
      nome: 'FGV - Fundação Getúlio Vargas',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/2/23/Logo_FGV.png'
    }
  })

  // 2. Criar um Concurso vinculado à banca
  const concurso = await prisma.concurso.create({
    data: {
      nome: 'Receita Federal - Auditor Fiscal',
      orgao: 'Receita Federal',
      banca_id: bancaFgv.id,
      fase: Fase.GABARITO_PRELIMINAR,
      cotas: ['AMPLA', 'NEGROS', 'PCD'],
      versoes_prova: ['Tipo 1 - Branca', 'Tipo 2 - Verde', 'Tipo 3 - Amarela'],
      link_pagina: 'https://conhecimento.fgv.br/concursos/rfb23',
      cargos: {
        create: [
          {
            nome: 'Auditor Fiscal',
            estado: 'DF',
            cidade: 'Brasília',
            regiao: 'Nacional',
            total_vagas: 230,
            vagas_cotas: {
              AMPLA: 172,
              NEGROS: 46,
              PCD: 12
            },
            materias: [
              { nome: 'Língua Portuguesa', peso: 2, questoes: 10 },
              { nome: 'Raciocínio Lógico', peso: 1, questoes: 10 },
              { nome: 'Direito Tributário', peso: 3, questoes: 20 }
            ]
          }
        ]
      }
    }
  })

  // 3. Criar Usuários
  const user1 = await prisma.usuario.upsert({
    where: { email: 'concurseiro@boa-prova.com' },
    update: {},
    create: {
      email: 'concurseiro@boa-prova.com',
      nome: 'João Silva',
      senha_hash: 'senha123', // Em produção, usar bcrypt
    }
  })

  const user2 = await prisma.usuario.upsert({
    where: { email: 'maria@boa-prova.com' },
    update: {},
    create: {
      email: 'maria@boa-prova.com',
      nome: 'Maria Souza',
      senha_hash: 'senha456',
    }
  })

  // 4. Buscar o cargo criado para vincular as notas
  const cargo = await prisma.cargo.findFirst({
    where: { concurso_id: concurso.id }
  })

  if (cargo) {
    // 5. Criar Registros de Notas (Respostas)
    await prisma.registro.createMany({
      data: [
        {
          usuario_id: user1.id,
          cargo_id: cargo.id,
          cota: 'AMPLA',
          inscricao_id: '12345678',
          participacao: Participacao.OFICIAL,
          versao_prova: 'Tipo 1 - Branca',
          respostas: ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E']
        },
        {
          usuario_id: user2.id,
          cargo_id: cargo.id,
          cota: 'NEGROS',
          inscricao_id: '98765432',
          participacao: Participacao.OFICIAL,
          versao_prova: 'Tipo 2 - Verde',
          respostas: ['B', 'B', 'C', 'A', 'E', 'A', 'C', 'C', 'D', 'B']
        }
      ]
    })
  }

  console.log('✅ Banco de dados populado com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })