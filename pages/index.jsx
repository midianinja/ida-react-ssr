import React, { useState } from 'react';
import Body from '../src/components/template/body/Body';
import Modal from '../src/components/organisms/modal/Modal';
import Title from '../src/components/atoms/title/Title';
import Flex from '../src/components/molecules/flex/Flex';
import Logo from '../src/components/atoms/logo/Logo';
import ButtonSecondary from '../src/components/atoms/button/secondary/ButtonSecondary';
import { BodyTextComponent } from '../src/components/atoms/bodyText/bodyText.style';
import ButtonTertiary from '../src/components/atoms/button/tertiary/ButtonTertiary';
import Label from '../src/components/atoms/label/Label';

export default () => {
  const [labelTest, setLabelTest] = useState(false)
  return (
    <Body>
      <Modal
        header={(
          <Logo width={184} height={65} scale={0.7} logo="ida/ida_color" altText="Logotipo da IDA" />
        )}
      >
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
              <Flex flex={0}>
                <Flex>
                  <ButtonSecondary onClick={() => true} type="inactive">Texto</ButtonSecondary>
                </Flex>
                <Flex>
                  <ButtonSecondary onClick={() => true}>Texto</ButtonSecondary>
                </Flex>
                <Flex>
                  <ButtonSecondary onClick={() => true} type="secondaryNormal">Texto</ButtonSecondary>
                </Flex>
              </Flex>
              <Flex flex={0}>
                <Flex>
                  <ButtonTertiary onClick={() => true} type="inactive">Texto</ButtonTertiary>
                </Flex>
                <Flex>
                  <ButtonTertiary onClick={() => true}>Texto</ButtonTertiary>
                </Flex>
                <Flex>
                  <ButtonTertiary onClick={() => true} type="secondaryNormal">Texto</ButtonTertiary>
                </Flex>
              </Flex>
              <Flex flex={0} style={{ backgroundColor: '#FFF' }}>
                <Flex>
                  <ButtonSecondary onClick={() => true} type="secondaryInverted">Texto</ButtonSecondary>
                </Flex>
                <Flex>
                  <ButtonTertiary onClick={() => true} type="secondaryInverted">Texto</ButtonTertiary>
                </Flex>
              </Flex>
              <Flex style={{ marginTop: "1rem" }}>
                <div style={{ position: "relative", height: "3rem" }}>
                  <Label labelPos={labelTest}>Label</Label>
                  <input type="text" style={{ height: "100%", backgroundColor: "#1d1d1d", border: "1px solid #fff", borderRadius: "0.5rem" }}
                    onFocus={() => setLabelTest(true)} onBlur={() => setLabelTest(false)} />
                </div>
              </Flex>
            </Flex>
          </Flex>
          <Flex />
        </Flex>
      </Modal>
    </Body>
  )
};
