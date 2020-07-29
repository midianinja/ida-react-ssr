import Body from "../src/components/template/body/Body"
import Modal from "../src/components/organisms/modal/Modal"
import Title from "../src/components/atoms/title/Title"
import Flex from "../src/components/molecules/flex/Flex"
import Logo from "../src/components/atoms/logo/Logo"
import Switch from "../src/components/atoms/switch/Switch"

export default (props) => {
  return (
    <Body>
      <Modal header={<Logo scale={0.7}/>}>
        <Flex column>
          <Flex>
            <Title>Faça seu login!</Title>
          </Flex>
          <Flex>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <Switch></Switch>
          </Flex>
        </Flex>
      </Modal>
    </Body>
  )
}
