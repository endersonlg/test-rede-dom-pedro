import User from '../model/User'

class UserController {
  async create(request, response) {

    const userExists = await User.findOne({
      where: { email: request.body.email },
    });

    if (userExists) {
      return response.status(400).json({ error: 'Usuário já cadastrado' })
    }

    await User.create(request.body)

    return response.status(201).send()
  }

  async list(request, response) {
    const users = await User.findAll()
    return response.json(users).status(200)
  }
}

export default new UserController