import React from 'react';
import * as S from './styled';

const RepositoryItem = ({name, linkToRepo, fullname}) => {
  return (
    <S.Wrapper>
      <S.WrapperRepositorieInfo>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullName>link:<S.WrapperLink href={linkToRepo} target="_blank">{fullname} </S.WrapperLink></S.WrapperFullName> 
      </S.WrapperRepositorieInfo>
    </S.Wrapper>
  )
};

export default RepositoryItem;