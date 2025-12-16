import styled, { keyframes } from "styled-components";

export default function Hero() {
  return (
    <Wrapper>
      {/* Floating tags */}
      <Tags>
        {tagData.map((tag, i) => (
          <Tag
            key={i}
            style={{
              top: tag.top,
              left: tag.left,
              right: tag.right,
              bottom: tag.bottom,
              animationDuration: tag.speed,
            }}
          >
            <TagInner>{tag.text}</TagInner>
          </Tag>
        ))}
      </Tags>

      {/* Main content */}
      <Heading>
        <LogoW>
          W<span>:</span>
        </LogoW>

        <DottedBox>
          <Title>Find what&apos;s next</Title>
        </DottedBox>
      </Heading>
    </Wrapper>
  );
}

/* ================= ANIMATION ================= */

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-16px); }
  100% { transform: translateY(0px); }
`;

/* ================= LAYOUT ================= */

const Wrapper = styled.section`
  position: relative;
  height: calc(100vh - 120px);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 16px;

  @media (max-width: 768px) {
    height: auto;
    padding: 48px 16px;
  }
`;


const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoW = styled.div`
  font-size: 72px;
  font-weight: 800;
  color: #0b1c1e;

  span {
    color: #ff4d4f;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #0b1c1e;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 1.2;
  }
`;


/* ================= TAGS ================= */

const Tags = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;


/* Floating container */
const Tag = styled.div`
  position: absolute;
  animation: ${float} ease-in-out infinite;

  /* Hide most tags on mobile */
  @media (max-width: 768px) {
    &:nth-child(n + 6) {
      display: none;
    }
  }
`;

/* Hoverable tag */
const TagInner = styled.div`
  background: white;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  transform: scale(1);
  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.25);
    background-color: #ffe5e7;
    color: #b8001f;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.25);
  }

  /* Touch devices */
  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const DottedBox = styled.div`
  border: 2px dashed #ff4d4f;
  border-radius: 16px;
  padding: 12px 24px;
`;

/* ================= TAG DATA ================= */

const tagData = [
  { text: "Vue JS Developers", top: "12%", left: "20%", speed: "3s" },
  { text: "Boston", top: "18%", left: "32%", speed: "3.5s" },
  { text: "Seattle", top: "38%", left: "12%", speed: "3s" },
  { text: "Android Developers", top: "55%", left: "18%", speed: "4s" },

  { text: "Web3", top: "12%", right: "20%", speed: "3.2s" },
  { text: "Aerospace", top: "22%", right: "14%", speed: "3.6s" },
  { text: "Robotics", top: "36%", right: "18%", speed: "3.4s" },
  { text: "San Francisco", top: "48%", right: "12%", speed: "4s" },
  { text: "Austin", top: "58%", right: "22%", speed: "3.8s" },

  { text: "iOS Developers", bottom: "28%", left: "42%", speed: "3.5s" },
  { text: "Front End", bottom: "32%", left: "52%", speed: "4s" },
  { text: "Artificial Intelligence", bottom: "42%", left: "56%", speed: "4.2s" },
  { text: "Los Angeles", bottom: "14%", left: "62%", speed: "3.7s" },
];
