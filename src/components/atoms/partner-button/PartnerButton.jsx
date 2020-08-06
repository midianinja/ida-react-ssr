import React from 'react';
import {withTheme} from 'styled-components';
import { PrimaryButton, SecondaryButton } from '../button/Button';
import { LogoIcon } from '../icon';

const PrimaryPartnerButton = withTheme(({theme: {colors}, color, variant="accent",...rest}) => {
    return (
      <PrimaryButton partner variant={variant} {...rest}>
        <LogoIcon  style={{marginRight: 10}} partner size={24} color={""} colors={[colors.primary, colors.error , colors.success]}/>
        Cadastre-se
      </PrimaryButton>
    );
});

const SecondaryPartnerButton = withTheme(({theme: {colors}, color, variant="accent",...rest}) => {
    return (
      <SecondaryButton partner variant={variant} {...rest}>
        <LogoIcon style={{marginRight: 10}} size={24} color={variant === "secondary" ? "#fff" : "#000"} colors={[colors.primary, colors.error , colors.success]}/>
        Fazer Login
      </SecondaryButton>
    )
});

export {PrimaryPartnerButton, SecondaryPartnerButton};