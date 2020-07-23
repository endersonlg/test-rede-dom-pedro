import User from '../model/User'
import * as Yup from 'yup';

class UserController {
  async create(request, response) {

    const schema = Yup.object().shape({
      name: Yup.string()
        .trim()
        .min(2)
        .required(),
      email: Yup.string()
        .trim()
        .email()
        .required()
    })

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Falha no cadastro, verifique seus dados' });
    }

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