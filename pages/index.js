import { useState } from 'react';
import Link from 'next/link'
import faker from 'faker'
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import { Button } from '../src/components/atoms/button/button.style';
import { client } from '../src/services/apollo';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
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

  return (
    <Container onClick={() => fetchUsers(setUsers)}>
      <h1>Home Page</h1>
      <p>Welcome, {name}</p>
      <div>
        <Link href="/about">
          <a>{variavel}</a>
        </Link>
        <Button onClick={() => setVarivel(!variavel)}>Texto</Button>
      </div>
      {
        users.map((usr) => (
          <div>
            <label>{usr.name}</label>
            <Label>{usr.last_name}</Label>
            <p>{usr.id}</p>
          </div>
        ))
      }
    </Container>
  )
};

export default Index

export async function getStaticProps() {
  // The name will be generated at build time only
  const name = faker.name.findName()

  return {
    props: { name },
  }
}
