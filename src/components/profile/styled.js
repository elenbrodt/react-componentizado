import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 30px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-left: 16px;
  margin-top: 20px;
  h1{
    font-size: 32px;
    font-weight: bold;
  }
  h3{
    font-size: 18px;
  }
  h4{
    font-size: 14px;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 8px;
  h3{
    margin-right:8px;
  }
  a{
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperUserImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;

