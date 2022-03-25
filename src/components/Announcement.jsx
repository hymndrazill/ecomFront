import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #7e57c2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Deal : Free Shipping on orders over 48$</Container>;
};

export default Announcement;
