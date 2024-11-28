import styled from 'styled-components';

export const AboutContainer = styled.div`
  background-color: #f8f9fa; /* Fundo claro */
  padding: 20px;
  border-radius: 8px;
  max-width: 900px;
  margin: 10vh auto; /* Centralizado com espaço superior */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const AboutTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333; /* Título principal */
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: #8445FF; /* Linha roxa abaixo do título */
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const AboutSection = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #8445FF; /* Roxo nos subtítulos */
  margin-bottom: 10px;
`;

export const SectionContent = styled.p`
  font-size: 1rem;
  color: #555; /* Texto secundário */
  line-height: 1.6;
`;

export const HighlightText = styled.span`
  color: #A2FA28; /* Verde para destaque */
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #6B32CC; /* Transição para roxo escuro ao passar o mouse */
  }
`;
