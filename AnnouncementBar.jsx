import styled from "styled-components";

export default function AnnouncementBar() {
  return (
    <Bar>
      <Text>
        Introducing <span>Autopilot</span> – Our expert recruiters backed by AI
        deliver qualified candidates to your calendar
      </Text>
      <Button>Learn more</Button>
    </Bar>
  );
}

/* ================= STYLES ================= */

const Bar = styled.div`
  width: 100%;
  height: 48px;
  background: linear-gradient(90deg, #1b0026, #2b003a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 1100;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;

  span {
    color: #ff4d4f;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  background: white;
  color: #111;
  border: none;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #f2f2f2;
  }
`;
