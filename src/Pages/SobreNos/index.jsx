import React from 'react';
import {
  AboutContainer,
  AboutTitle,
  AboutSection,
  SectionTitle,
  SectionContent,
  HighlightText,
} from './SobreNos.styles';

const SobreNos = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre Nós</AboutTitle>
      <AboutSection>
        <SectionTitle>Nossa História</SectionTitle>
        <SectionContent>
          Fundada em <HighlightText>2023</HighlightText>, nossa empresa nasceu com o propósito de oferecer uma experiência de compra inovadora e personalizada. Trabalhamos com paixão para conectar nossos clientes aos melhores produtos do mercado.
        </SectionContent>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Nossa Missão</SectionTitle>
        <SectionContent>
          Garantir que cada cliente tenha acesso a produtos de qualidade com praticidade, confiança e preços acessíveis. Nosso objetivo é transformar cada compra em uma experiência inesquecível.
        </SectionContent>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Por Que Nos Escolher?</SectionTitle>
        <SectionContent>
          Além de produtos incríveis, oferecemos atendimento de excelência e um compromisso constante com a sustentabilidade. Junte-se a nós para fazer parte de uma comunidade que valoriza inovação e responsabilidade.
        </SectionContent>
      </AboutSection>
    </AboutContainer>
  );
};

export default SobreNos;
