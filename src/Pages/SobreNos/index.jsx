import React from 'react';
import {
  AboutContainer,
  AboutTitle,
  AboutSection,
  SectionTitle,
  SectionContent,
  HighlightText,
  TeamCarousel,
  TeamMember,
  Timeline,
  TimelineEvent,
  IconContainer,
  IconBox,
  IconText,
} from './SobreNos.styles';

import { FaHandshake, FaLeaf, FaUsers, FaRocket } from 'react-icons/fa';

const SobreNos = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre Nós</AboutTitle>

      {/* Nossa História */}
      <AboutSection>
        <SectionTitle>Nossa História</SectionTitle>
        <SectionContent>
          Fundada em <HighlightText>2023</HighlightText>, nossa empresa nasceu para oferecer experiências inovadoras e produtos de qualidade. Desde o início, seguimos expandindo nossas operações, sempre guiados pela paixão de conectar pessoas.
        </SectionContent>
      </AboutSection>

      {/* Nossos Valores */}
      <AboutSection>
        <SectionTitle>Nossos Valores</SectionTitle>
        <IconContainer>
          <IconBox>
            <FaHandshake size={50} color="#8445FF" />
            <IconText>Confiança</IconText>
          </IconBox>
          <IconBox>
            <FaLeaf size={50} color="#A2FA28" />
            <IconText>Sustentabilidade</IconText>
          </IconBox>
          <IconBox>
            <FaUsers size={50} color="#8445FF" />
            <IconText>Comunidade</IconText>
          </IconBox>
          <IconBox>
            <FaRocket size={50} color="#A2FA28" />
            <IconText>Inovação</IconText>
          </IconBox>
        </IconContainer>
      </AboutSection>

      {/* Nossa Equipe */}
      <AboutSection>
        <SectionTitle>Conheça a Equipe</SectionTitle>
        <TeamCarousel>
          <TeamMember>
            <img src="https://github.com/vLecaBR.png" alt="Equipe 1" />
            <p>Victor Leça- CEO</p>
          </TeamMember>
          <TeamMember>
            <img src="/team2.jpg" alt="Equipe 2" />
            <p>Zezin da Silva - CTO</p>
          </TeamMember>
          <TeamMember>
            <img src="/team3.jpg" alt="Equipe 3" />
            <p>Joãozin dos Santos - Designer</p>
          </TeamMember>
        </TeamCarousel>
      </AboutSection>

      {/* Linha do Tempo */}
      <AboutSection>
        <SectionTitle>Nossa Jornada</SectionTitle>
        <Timeline>
          <TimelineEvent>
            <span>2023</span>
            <p>Lançamento da plataforma e primeiras vendas.</p>
          </TimelineEvent>
          <TimelineEvent>
            <span>2024</span>
            <p>Expansão para mercados internacionais.</p>
          </TimelineEvent>
          <TimelineEvent>
            <span>2025</span>
            <p>Início de parcerias com marcas globais.</p>
          </TimelineEvent>
        </Timeline>
      </AboutSection>
    </AboutContainer>
  );
};

export default SobreNos;
