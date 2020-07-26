// Contexto para trabalhar com temas
import { ThemeProvider } from 'styled-components';

import BodyContainer from "./body.style";
import BaseHead from '../../BaseHead';
import theme from '../../theme';

export default ({children}) => {
  return (
    <>
      {/* Header padrão do html gerado */}
      <BaseHead
        keywords={[/* Palavras chave para o google */]}
        imageUrl={''/* Imagem para preview do link */}
        title={'IDA'/* titulo da pagina */}
        description={'IDA'/* Descrição da pagina */}
      />
      {/* Provedor das propriedades de tema */}
      <ThemeProvider theme={theme}>
        {/* Componente raiz para o desenvolvimento */}
        <BodyContainer>
          {children}
        </BodyContainer>
      </ThemeProvider>
    </>
  )
}
