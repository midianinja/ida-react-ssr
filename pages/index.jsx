import React, { useState } from "react";

import Body from "../src/components/template/body/Body";
import Modal from "../src/components/organisms/modal/Modal";
import Title from "../src/components/atoms/title/Title";
import Flex from "../src/components/molecules/flex/Flex";
import Logo from "../src/components/atoms/logo/Logo";
import ProgressBar from "../src/components/molecules/progressBar/ProgressBar";
import Switch from "../src/components/atoms/switch/Switch";
import { PhoneIcon } from "../src/components/atoms/icon";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  NavigationButton,
  IconButton,
} from "../src/components/atoms/button/Button";

import { BodyTextComponent } from "../src/components/atoms/bodyText/bodyText.style";

import { Grid, Row } from "./index.style";

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
                Voltar
              </SecondaryButton>
              <ProgressBar current={page} count={4}></ProgressBar>
              <SecondaryButton onClick={() => setPage(page + 1)}>
                Avançar
              </SecondaryButton>
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
          <Flex>
            <Switch handleChange={(e) => console.log(e)}></Switch>
          </Flex>
        </Flex>
        <Grid>
          <Row>
            <PrimaryButton disabled>Entrar</PrimaryButton>
            <SecondaryButton disabled>Entrar</SecondaryButton>
            <TertiaryButton disabled>Entrar</TertiaryButton>
            <NavigationButton disabled>Navegação</NavigationButton>
          </Row>
          <Row>
            <PrimaryButton>Entrar</PrimaryButton>
            <SecondaryButton>Entrar</SecondaryButton>
            <TertiaryButton>Entrar</TertiaryButton>
            <NavigationButton>Navegação</NavigationButton>
          </Row>
          <Row>
            <PrimaryButton variant="secondary">Entrar</PrimaryButton>
            <SecondaryButton variant="secondary">Entrar</SecondaryButton>
            <TertiaryButton variant="secondary">Entrar</TertiaryButton>
            <NavigationButton variant="secondary">Navegação</NavigationButton>
          </Row>
          <Row style={{ background: "white" }}>
            <PrimaryButton variant="accent">Entrar</PrimaryButton>
            <SecondaryButton variant="accent">Entrar</SecondaryButton>
            <TertiaryButton variant="accent">Entrar</TertiaryButton>
            <NavigationButton variant="accent">Navegação</NavigationButton>
          </Row>
          <Row>
            <IconButton disabled icon={<PhoneIcon size={24} />}>
              SMS
            </IconButton>
            <IconButton icon={<PhoneIcon size={24} />}>SMS</IconButton>
            <IconButton variant="secondary" icon={<PhoneIcon size={24} />}>
              SMS
            </IconButton>
          </Row>
        </Grid>
      </Modal>
    </Body>
  );
};

export default Index;
