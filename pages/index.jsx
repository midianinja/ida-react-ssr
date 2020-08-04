import React, { useState } from "react";
import Body from "../src/components/template/body/Body";
import Modal from "../src/components/organisms/modal/Modal";
import Title from "../src/components/atoms/title/Title";
import Flex from "../src/components/molecules/flex/Flex";
import Logo from "../src/components/atoms/logo/Logo";
import ProgressBar from "../src/components/molecules/progressBar/ProgressBar";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  NavigationButton,
} from "../src/components/atoms/button/Button";

import { BodyTextComponent } from "../src/components/atoms/bodyText/bodyText.style";

import { Grid } from "./index.style";

const Index = () => {
  const [page, setPage] = useState(1);
  return (
    <Body>
      <Modal
        header={
          <Logo
            width={184}
            height={65}
            scale={0.7}
            logo="ida/ida_color"
            altText="Logotipo da IDA"
          />
        }
      >
        <Flex>
          <Flex column>
            <Flex>
              <SecondaryButton onClick={() => setPage(page - 1)}>
                voltar
              </SecondaryButton>
              <SecondaryButton onClick={() => setPage(page + 1)}>
                avançar
              </SecondaryButton>
              <ProgressBar current={page} count={4}></ProgressBar>
            </Flex>
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
              <BodyTextComponent size="h1">
                Texto de corpo Desktop
              </BodyTextComponent>
            </Flex>
            <Flex>
              <BodyTextComponent size="h2">
                Texto de corpo Desktop
              </BodyTextComponent>
            </Flex>
            <Flex>
              <BodyTextComponent size="h3">
                Texto de corpo Desktop
              </BodyTextComponent>
            </Flex>
            <Flex>
              <BodyTextComponent size="h4">
                Texto de corpo Mobile
              </BodyTextComponent>
            </Flex>
            <Flex flex={0} style={{ backgroundColor: "#FFF" }}>
              <Flex>
                <BodyTextComponent size="h4">
                  Texto de corpo Mobile
                </BodyTextComponent>
              </Flex>
            </Flex>
          </Flex>
          <Flex>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Flex>
        </Flex>
        <Grid>
          <div>
            <PrimaryButton>Entrar</PrimaryButton>
            <PrimaryButton variant="secondary">Entrar</PrimaryButton>
            <PrimaryButton variant="accent">Entrar</PrimaryButton>
            <PrimaryButton disabled>Entrar</PrimaryButton>
          </div>
          <div>
            <SecondaryButton>Entrar</SecondaryButton>
            <SecondaryButton variant="secondary">Entrar</SecondaryButton>
            <SecondaryButton variant="accent">Entrar</SecondaryButton>
            <SecondaryButton disabled>Entrar</SecondaryButton>
          </div>
          <div>
            <TertiaryButton>Entrar</TertiaryButton>
            <TertiaryButton variant="secondary">Entrar</TertiaryButton>
            <TertiaryButton variant="accent">Entrar</TertiaryButton>
            <TertiaryButton disabled>Entrar</TertiaryButton>
          </div>
          <div>
            <NavigationButton>Navegação</NavigationButton>
            <NavigationButton variant="secondary">Navegação</NavigationButton>
            <NavigationButton variant="accent">Navegação</NavigationButton>
            <NavigationButton disabled>Navegação</NavigationButton>
          </div>
        </Grid>
      </Modal>
    </Body>
  );
};

export default Index;
