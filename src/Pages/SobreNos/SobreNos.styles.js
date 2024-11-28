import styled, { keyframes } from 'styled-components';

// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Slide animation for the carousel
const slide = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const AboutContainer = styled.div`
  background-color: #f8f9fa;
  padding: 40px 20px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 10vh auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const AboutTitle = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: #8445FF;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const AboutSection = styled.div`
  margin-bottom: 60px;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #8445FF;
  margin-bottom: 20px;
  text-align: center;
`;

export const SectionContent = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const HighlightText = styled.span`
  color: #A2FA28;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #6B32CC;
  }
`;

// Icon container
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconText = styled.span`
  margin-top: 10px;
  font-size: 1.1rem;
  color: #333;
`;

// Team Carousel
export const TeamCarousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  overflow-x: auto;
  padding: 20px;
  scroll-snap-type: x mandatory;
  scroll-padding: 20px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8445FF;
    border-radius: 10px;
  }
`;

export const TeamMember = styled.div`
  flex: 0 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 15px;
  width: 200px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

// Timeline
export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 40px 0;
`;

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  gap: 40px;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  height: 100%;
  width: 4px;
  background-color: #D4D4FF;
  transform: translateX(-50%);
  z-index: 0;
`;

export const TimelineEvent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 25px;
  background: #fff;
  border-radius: 8px;
  width: 320px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    background-color: #8445FF;
    transform: translateX(15px);
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -18px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #8445FF;
    z-index: 1;
  }
`;

export const TimelineEventText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  h3 {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.5;
  }
`;

export const TimelineTooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  width: 250px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ${TimelineEvent}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

