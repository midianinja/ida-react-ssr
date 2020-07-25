import BaseHead from '../src/components/BaseHead';
// Contexto para trabalhar com temas
import { ThemeProvider } from 'styled-components';

import theme from '../src/components/theme'
import Body from '../src/components/template/body/Body';

export default (props) => {
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
        <Body />
      </ThemeProvider>
    </>
  )
}
