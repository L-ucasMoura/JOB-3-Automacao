import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cors from 'cors'


const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors()) 
const JWT_SECRET = 'secreta'


const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) return res.status(401).json({ message: 'Token não fornecido' })
  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    return res.status(401).json({ message: 'Token inválido' })
  }
}

const supervisorMiddleware = (req, res, next) => {
  if (req.user.role !== 'SUPERVISOR') {
    return res.status(403).json({ message: 'Apenas Supervisor pode acessar' })
  }
  next()
}


app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.status(400).json({ message: 'Usuário não encontrado' })
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) return res.status(401).json({ message: 'Senha incorreta' })
  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' })
  res.json({ message: 'Login bem-sucedido', token, role: user.role })
})


app.post('/processo/iniciar', authMiddleware, async (req, res) => {
  const { tipoFibra, armazem } = req.body
  try {
    const processo = await prisma.bobina.create({
      data: {
        tipoFibra,
        armazem,
        status: 0,
        horaInicio: new Date(),
        usuarioId: req.user.userId// dasdaadadda
      }
    })
    res.json(processo)
  } catch {
    res.status(500).json({ error: 'Erro ao iniciar processo' })
  }
})

app.put('/processo/:id/status', authMiddleware, async (req, res) => {
  const { id } = req.params
  const { status } = req.body
  try {
    const processo = await prisma.bobina.update({
      where: { id: parseInt(id) },
      data: { status }
    })
    res.json(processo)
  } catch {
    res.status(500).json({ error: 'Erro ao atualizar status' })
  }
})

app.put('/processo/:id/finalizar', authMiddleware, async (req, res) => {
  const { id } = req.params
  try {
    const processo = await prisma.bobina.update({
      where: { id: parseInt(id) },
      data: { status: 100, horaFim: new Date() }
    })
    res.json(processo)
  } catch {
    res.status(500).json({ error: 'Erro ao finalizar processo' })
  }
})

app.get('/relatorios', authMiddleware, supervisorMiddleware, async (req, res) => {
  try {
    const relatorio = await prisma.bobina.findMany({
      include: { usuario: true }
    })
    res.json(relatorio)
  } catch {
    res.status(500).json({ error: 'Erro ao gerar relatório' })
  }
})

app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch {
    res.status(500).json({ error: 'Falha ao obter os usuários' })
  }
})


app.listen(3001, () => {
  console.log('🚀 Servidor rodando em http://localhost:3001')
})
