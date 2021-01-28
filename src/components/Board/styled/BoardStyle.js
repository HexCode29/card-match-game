import styled from "styled-components";


const BoardDiv = styled.div`
  height: 100%;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));


  @media (max-width: 500px){
    width: 300px;
    margin: 0 auto;
  }
`;


export default BoardDiv;