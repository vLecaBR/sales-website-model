import React from 'react';
import {
  SobreNosContainer,
  Title,
  Description,
  Section,
  SectionTitle,
  SectionContent,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberName,
  FooterText,
} from './SobreNos.styles';

const SobreNos = () => {
  return (
    <SobreNosContainer>
      <Title>Sobre Nós</Title>
      <Description>
        Somos uma empresa comprometida em oferecer a melhor experiência de compra online. Desde a nossa fundação, trabalhamos para trazer qualidade, inovação e confiança para os nossos clientes.
      </Description>

      <Section>
        <SectionTitle>Nossa Missão</SectionTitle>
        <SectionContent>
          Conectar pessoas a produtos que melhoram seu dia a dia. Acreditamos no impacto positivo de um bom atendimento, inovação e compromisso com a sustentabilidade.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>Conheça a Equipe</SectionTitle>
        <SectionContent>Nosso time é formado por especialistas dedicados a garantir a sua satisfação:</SectionContent>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="João Silva" />
            <MemberName>João Silva</MemberName>
            <p>CEO & Fundador</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Maria Oliveira" />
            <MemberName>Maria Oliveira</MemberName>
            <p>Diretora de Marketing</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Paulo Santos" />
            <MemberName>Paulo Santos</MemberName>
            <p>Chefe de Operações</p>
          </TeamMember>
        </TeamGrid>
      </Section>

      <Section>
        <SectionTitle>Por Que Escolher Nossa Loja?</SectionTitle>
        <SectionContent>
          Garantimos produtos de alta qualidade, preços competitivos e um atendimento ao cliente de excelência. Obrigado por fazer parte da nossa história!
        </SectionContent>
      </Section>

      <FooterText>Estamos à disposição para ajudar você. Entre em contato conosco!</FooterText>
    </SobreNosContainer>
  );
};

export default SobreNos;
