import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

function randomDateWithin5Months() {
  const now = new Date()
  const past5Months = new Date()
  past5Months.setMonth(now.getMonth() - 5)
  const randomTime = past5Months.getTime() + Math.random() * (now.getTime() - past5Months.getTime())
  return new Date(randomTime)
}

async function main() {
  console.log('🚀 Populando banco...')

  // cria usuários
  const initialUsers = [
    { name: 'João', email: 'joao@exemplo.com', password: '123456', role: 'SUPERVISOR' },
    { name: 'Maria', email: 'maria@exemplo.com', password: '123456', role: 'OPERARIO' },
    { name: 'Carlos', email: 'carlos@exemplo.com', password: '123456', role: 'OPERARIO' },
    { name: 'Ana', email: 'ana@exemplo.com', password: '123456', role: 'OPERARIO' },
    { name: 'Pedro', email: 'pedro@exemplo.com', password: '123456', role: 'OPERARIO' }
  ]

  const users = []
  for (let user of initialUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    const u = await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role
      }
    })
    users.push(u)
  }
  console.log(`✓ ${users.length} usuários prontos`)

  // limpa e cria bobinas fake
  await prisma.bobina.deleteMany()
  const types = ['t20cm', 't40cm']
  const warehouses = ['A', 'B']
  const coils = []
  for (let i = 0; i < 200; i++) {
    const type = types[Math.floor(Math.random() * types.length)]
    const warehouse = warehouses[Math.floor(Math.random() * warehouses.length)]
    const randomUser = users[Math.floor(Math.random() * users.length)]
    coils.push({
      tipoFibra: type,
      armazem: warehouse,
      status: 0,
      horaInicio: randomDateWithin5Months(),
      usuarioId: randomUser.id
    })
  }
  await prisma.bobina.createMany({ data: coils })
  console.log(`✓ ${coils.length} bobinas criadas`)

  await prisma.$disconnect()
  console.log('✅ Banco populado!')
}

main().catch(e => {
  console.error(e)
  prisma.$disconnect()
})
