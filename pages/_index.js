import { useState, useEffect } from 'react';
import Link from 'next/link'
import faker from 'faker'
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Button from '../src/components/atoms/button/Button';
import { client } from '../src/services/apollo';
import BaseHead from '../src/components/BaseHead';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.petz.com.br/blog/wp-content/uploads/2016/10/gatinho-feliz-2.jpg");
  background-color: ${(props) => props.color ? 'blue' : 'gray'};
`;

const UserContainer = styled.marquee`
  width: 400px;
  display: block;
  background-color: #f1f1f1;
  background: rgb(244,250,2);
  color: white;
  background: linear-gradient(0deg, rgba(244,250,2,1) 0%, rgba(13,113,3,1) 35%, rgba(255,0,0,1) 100%);
`;

const Label = styled.label`
  padding-left: 5px;
`;

const fetchUsers = async (setUsers) => {
  const userResponse = await client().query({
    query: gql`
      query allUsers( $user: UserInput){
        allUsers(user: $user) {
          name
          last_name
          id
        }
      }
    `,
    variables: {
      user: {}
    }
  });
  console.log('userResponse:', userResponse);
  setUsers(userResponse.data.allUsers);
}

const Index = ({ name }) => {
  const [variavel, setVarivel] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('Manda pro banco de dados que essa pagina abriu');
  }, [])

  return (
    <Container color="" >
      <BaseHead
        keywords={[/* Palavras chave para o google */]}
        imageUrl={''/* Imagem para preview do link */}
        title={'IDA'/* titulo da pagina */}
        description={'IDA'/* Descrição da pagina */}
      />
      <h1>Home Page</h1>
      <p>Welcome, {name}</p>
      <div>
        <Link href="/about">
          <a>{variavel}</a>
        </Link>
        <Button onClick={() => fetchUsers(setUsers)}>Buscar usuários</Button>
      </div>
      {
        users.map((usr) => (
          <UserContainer key={usr.id}>
            <label>{usr.name}</label>
            <Label>{usr.last_name}</Label>
            <p>{usr.id}</p>
          </UserContainer>
        ))
      }
    </Container>
  )
};

export default Index

export async function getStaticProps() {
  const name = faker.name.findName()

  return {
    props: { name },
  }
}
