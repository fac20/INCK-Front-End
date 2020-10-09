import styled from "styled-components";

export const FormGroup = styled.form`
  width: 25rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 900;
  background: #fff2f1;
  box-shadow: 5px 10px #000426;
  margin: 3rem;
  /* font-family:  */
`;
/* // font
//back #000426 */
export const Label = styled.label`
  margin: 3rem;
  color: #000426;
  background: #fff2f1;
  width: 15rem;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 3px solid #000426;
  margin: 1rem;
  background: #fff2f1;
`;

// export const Placeholder = styled.TextInput.attrs({
//     placeholderTextColor: "red"
//   })`
//     background-color: "#000";
//   `;
