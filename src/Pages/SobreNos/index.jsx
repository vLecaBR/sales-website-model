import React from 'react';
import { 
    AboutContainer, 
    AboutTitle, 
    AboutSection, 
    SectionTitle, 
    SectionContent, 
    HighlightText, 
    IconContainer, 
    IconBox, 
    IconText, 
    TeamCarousel, 
    TeamMember, 
    Timeline, 
    TimelineEvent, 
    TimelineLine, 
    TimelineTooltip, 
    TimelineContainer, 
    TimelineEventText 
  } from './SobreNos.styles';
  

import { FaHandshake, FaLeaf, FaUsers, FaRocket } from 'react-icons/fa';

const SobreNos = () => {

  const events = [
    {
      year: '2021',
      title: 'Fundação da Empresa',
      description: 'Início das operações com a missão de entregar soluções inovadoras para o mercado.',
      details: 'Logo após o início, a empresa se focou em estabelecer uma cultura de inovação e excelência.'
    },
    {
      year: '2022',
      title: 'Expansão Nacional',
      description: 'A empresa expandiu suas operações para todo o país, oferecendo mais produtos e serviços.',
      details: 'Em 2022, o foco foi em ampliar a base de clientes e criar uma rede de parceiros estratégicos.'
    },
    {
      year: '2023',
      title: 'Internacionalização',
      description: 'A empresa alcançou novos mercados internacionais, consolidando sua posição global.',
      details: 'Com uma equipe internacional, a empresa se expandiu para novos territórios, levando sua marca ao exterior.'
    }
  ];

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
          <TimelineContainer>
            <TimelineLine />
            {events.map((event, index) => (
              <TimelineEvent key={index}>
                <TimelineEventText>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </TimelineEventText>
                <TimelineTooltip>{event.details}</TimelineTooltip>
              </TimelineEvent>
            ))}
          </TimelineContainer>
        </Timeline>
      </AboutSection>
    </AboutContainer>
  );
};

export default SobreNos;
