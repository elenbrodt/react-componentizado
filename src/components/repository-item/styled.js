import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 8px;
  border: 1px solid white;
  margin: 8px;
  width: 275px;
  height: 100px;
 
`;

export const WrapperRepositorieInfo = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #3b3737;
`;

export const WrapperFullName = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: #5c627a;
`;

export const WrapperLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  margin: 0px 3px;
  color: #404467;
`;