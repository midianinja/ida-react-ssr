import Body from "./body.style";
import Modal from "../../organisms/modal/Modal";
import Title from "../../atoms/title/Title";

export default () => {
  return (
    <Body>
      <Modal>
        <Title type="title1">Titulo do modal</Title>
        {/* <Content>Conteudo do modal</Content> */}
      </Modal>
    </Body>
  )
}
