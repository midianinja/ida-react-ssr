import Body from "../src/components/template/body/Body";
import Modal from "../src/components/organisms/modal/Modal";
import Title from "../src/components/atoms/title/Title";
import Flex from "../src/components/molecules/flex/Flex";
import Logo from "../src/components/atoms/logo/Logo";
import Button from "../src/components/atoms/button/Button";

export default (props) => {
  return (
    <Body>
      <Modal header={<Logo scale={0.7} />}>
        <Flex column>
          <Flex>
            <Title>Faça seu login!</Title>
          </Flex>
          <Flex>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Flex>
          <Flex>
            <Button>Cadastre-se</Button>
          </Flex>
        </Flex>
      </Modal>
    </Body>
  );
};
