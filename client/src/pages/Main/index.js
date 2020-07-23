import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import { format } from 'date-fns-tz';

import { Container, Header, Content, Register, Informations } from './styles';
import logo from '../../assets/logo.png'

import api from '../../services/api';

function Main() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const history = useHistory();

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Mínimo 2 caracteres')
      .required('Nome é obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
  });

  async function handleSubmit({ name, email }) {
    if (name === '' || email === '') {
      return;
    }
    try {
      await api.post('users', { name, email })
      toast.success('Usuário cadastrado com sucesso');
    } catch (err) {
      toast.error('Falha no cadastro, verifique seus dados')
    }
    setReload(true);
  }

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users')
      setUsers(response.data);
    }
    loadUsers();
    setReload(false);

  }, [reload]);

  return (
    <Container>
      <Header>
        <img src={logo} alt="Rede Dom Pedro" />
        <strong>Teste de classificação Rede Dom Pedro</strong>
      </Header>
      <Content>
        <Register>
          <strong>Cadastrar</strong>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="Email" />
            <button type="submit">Confirmar</button>
          </Form>
        </Register>
        <Informations>
          <strong>Usuários cadastrados</strong>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>data e hora do registro</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td> {format(parseISO(user.createdAt), 'dd/MM/yyyy HH:mm', {
                      timeZone: 'America/Sao_Paulo',
                    })}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Informations>
      </Content>


    </Container>
  )
}

export default Main;