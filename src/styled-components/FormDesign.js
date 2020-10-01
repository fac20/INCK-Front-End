import styled from "styled-components";

export const FormGroup = styled.form`
width:15rem;
height:15rem; 
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-weight:900;
background:#0f0645;
/* font-family:  */
`;


export const Label = styled.label `
margin:3rem;
color:#ffdad7;
background:#0f0645;
width:15rem;

`
export const Input = styled.input `
  border: none;
  border-bottom: 3px solid #ffdad7;
  margin: 1rem;
  background:#0f0645;

`

// export const Placeholder = styled.TextInput.attrs({
//     placeholderTextColor: "red"
//   })`
//     background-color: "#000";
//   `;
