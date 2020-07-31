import Body from "../src/components/template/body/Body"
import Modal from "../src/components/organisms/modal/Modal"
import Title from "../src/components/atoms/title/Title"
import Flex from "../src/components/molecules/flex/Flex"
import Logo from "../src/components/atoms/logo/Logo"

import { PrimaryButton, SecondaryButton, TertiaryButton, NavigationButton } from "../src/components/atoms/button/Button"

import { BodyTextComponent } from "../src/components/atoms/bodyText/bodyText.style"

import { Grid } from './index.style'

const Index = (props) => {
  return (
    <Body>
      <Modal header={<Logo scale={0.7}/>}>
        <Flex flex={0}>
          <Flex>
            <Flex column>
              <Flex>
                <Title size="h1">Título 1</Title>
              </Flex>
              <Flex>
                <Title size="h2">Título 2</Title>
              </Flex>
              <Flex>
                <Title size="h3">Título 2</Title>
              </Flex>
              <Flex>
                <BodyTextComponent size="h1">Texto de corpo Desktop</BodyTextComponent>
              </Flex>
              <Flex>
                <BodyTextComponent size="h2">Texto de corpo Desktop</BodyTextComponent>
              </Flex>
              <Flex>
                <BodyTextComponent size="h3">Texto de corpo Desktop</BodyTextComponent>
              </Flex>
              <Flex>
                <BodyTextComponent size="h4">Texto de corpo Mobile</BodyTextComponent>
              </Flex>
            </Flex>
          </Flex>
          <Flex>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Flex>
        </Flex>
        <Grid>
          <div>
            <PrimaryButton>
              Entrar
            </PrimaryButton>
            <PrimaryButton variant="secondary">
              Entrar
            </PrimaryButton>
            <PrimaryButton variant="accent">
              Entrar
            </PrimaryButton>
          </div>
         <div>
          <SecondaryButton>
              Entrar
            </SecondaryButton>
            <SecondaryButton variant="secondary">
              Entrar
            </SecondaryButton>
            <SecondaryButton variant="accent">
              Entrar
            </SecondaryButton>
         </div>
         <div>
          <TertiaryButton>
              Entrar
          </TertiaryButton>
          <TertiaryButton variant="secondary">
            Entrar
          </TertiaryButton>
          <TertiaryButton variant="accent">
            Entrar
          </TertiaryButton>
         </div>
         <div>
          <NavigationButton>
              Entrar
            </NavigationButton>
            <NavigationButton variant="secondary">
              Entrar
            </NavigationButton>
            <NavigationButton variant="accent">
              Entrar
            </NavigationButton>
         </div>
        </Grid>
      </Modal>
    </Body>
  );
};

export default Index