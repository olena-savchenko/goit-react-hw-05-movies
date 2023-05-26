import styled from 'styled-components'

export const StyledActorsList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

export const StyledActorItem = styled.li`
  width: calc((100% - 70px) / 8);
  /* display: flex; */
  /* flex-direction: column;
  flex-grow: 1; */
  border: 1px solid #4c4c51;
  border-radius: 4px;
`;

export const StyledWrap = styled.div`
width: 100%;
height: 150px;
margin-bottom: 5px;
`;

export const StyledImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const StyledName = styled.p`
  color: #4c4c51;
  text-align: center;
  margin-bottom: 5px;
`;
export const StyledInfo = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;