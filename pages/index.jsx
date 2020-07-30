import React from 'react';
import Body from '../src/components/template/body/Body';
import Modal from '../src/components/organisms/modal/Modal';
import Logo from '../src/components/atoms/logo/Logo';

export default () => (
  <Body>
    <Modal header={
      <Logo width={184} height={65} scale={0.7} logo="ida/ida_white" altText="Logotipo da IDA" />
    }
    />
  </Body>
);
