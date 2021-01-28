import styled from "styled-components";


const CardDiv = styled.div`

   img{
    width: 100px;
    height: 100px;
    cursor: pointer;

    @media (max-width: 500px){
      width: 80px;
      height: 80px;
    }
   }

`;


export default CardDiv;