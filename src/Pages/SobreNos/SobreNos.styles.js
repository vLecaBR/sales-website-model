import styled from 'styled-components';

export const SobreNosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #222;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #444;
`;

export const SectionContent = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const TeamMember = styled.div`
  text-align: center;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const MemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #555;
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
`;
