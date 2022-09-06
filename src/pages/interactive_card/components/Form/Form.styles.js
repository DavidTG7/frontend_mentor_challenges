import styled from 'styled-components';

export const FormMain = styled.form`
  display: flex;
  flex-flow: column;
  width: 20rem;
  `;

export const Label = styled.label`

`;

export const Input = styled.input`

&.long{
  width: 20rem;
}
&.month,&.year, &.cvc{
  width: 3rem;
}

`;

export const MonthYearCVC = styled.div`
  display: flex;
  justify-content: space-between;
  `;

export const MonthYearBox = styled.div`
  display: flex;
  flex-flow: column;
  `;

export const MontYearInputsBox = styled.div`
  display: flex;
  `;

export const CvcBox = styled.div`
  display: flex;
  flex-flow: column;
`;

export const ConfirmButton = styled.button`
  width: 20rem;
`;