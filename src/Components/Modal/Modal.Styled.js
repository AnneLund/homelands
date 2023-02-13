import styled from "styled-components";
export const ModalStyled = styled.div`
  display: ${(props) => props.showmodal}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  animation: fade-in 1s ease-in-out;

  @keyframes fade-in{
   from{
    opacity: 0%;
   }
   to{
    opacity: 100%;
   }
  }

  main {
    position: absolute;
    top: 0;
    margin: 15% auto; /* 15% from the top and centered */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div{
width: 30%;
padding: 0.5em;
margin-top: 7em;
flex-direction: column;
backdrop-filter: blur(4px);
 h4{
   text-align: center;
   margin: 0.5em auto;
   font-size: 2em;
   color: white;
 }

 h5 {
  font-size: 1em;
  color: white;
  margin: 1em 0;
 }

 p{
  padding: 1em;
  color: white;
  font-style: italic;
 }
button{
 width: 25%;
 display: block;
 margin: 2em auto;
 cursor: pointer;
 font-size: 1em;
font-weight: bold;
}
 }

 @media screen and (max-width: 600px) {
  div{
    width: 80%;
    margin-top: 13em; 
    button{
      width: 50%;
    }
  }
 
 }

  span {
    border-radius: 50%;
    position: absolute;
    text-align: center;
    right: 15px;
    top: 15px;
    padding: 3px;
    width: 40px;
    aspect-ratio: 1/1;
    color: #aaa;
    background-color: #fff;
    font-size: 30px;
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: #ccc;
      color: #fff;
      cursor: pointer;
    }
  }
`;
