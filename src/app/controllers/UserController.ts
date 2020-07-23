import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../models/User'

class UserController {
  async store(req: Request, res: Response) {
    // através do 'getRepository()' teremos acesso as funções do TypeORM para manipularmos as entidades.
    const repository = getRepository(User)
    
    // desestruturando o body para pegar o email e o password
    const { email, password } = req.body

    // executando query no banco de dados para
    // verificar se existe algum usuario com o mesmo email capturado no req.body
    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return res
        .status(409)
        .json({ mensagem: 'O usuário já existe, por favor, utilize outro e-mail' })
    }

    // criando os registros na entidade
    const user = repository.create({ email, password })

    // salvando os registros no banco de dados
    await repository.save(user)

    // retornando os dados do usuário criado
    return res.status(201).json(user)
  }
}

export default new UserController()