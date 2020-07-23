import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { Container, Header, Content, Register, Informations } from './styles';
import logo from '../../assets/logo.png'

import api from '../../services/api';

function Main() {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const history = useHistory();

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
          <Form onSubmit={handleSubmit}>
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
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
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