import {
  FormMain,
  Input, Label,
  MonthYearBox,
  MonthYearCVC,
  CvcBox,
  MontYearInputsBox,
  ConfirmButton
} from "./Form.styles";

interface FormProps {
  handleChange: Function;
  handleSubmit: Function;
}


export const Form = ({handleChange, handleSubmit}: FormProps) => {
  return (
    <FormMain onSubmit={handleSubmit}>
      <Label>CARDHOLDER NAME</Label>
      <Input placeholder='e.g. Jane Applessed' className='long' type='text' />
      <Label>CARD NUMBER</Label>
      <Input onChange={handleChange} placeholder='e.g. 1234 5678 9123 0000' className='long' type='text' />
      <MonthYearCVC>
        <MonthYearBox>
          <Label>EXP. DATE (MM/YY)</Label>
          <MontYearInputsBox>
            <Input placeholder='MM' className='month' type='text' />
            <Input placeholder='YY' className='year' type='text' />
          </MontYearInputsBox>
        </MonthYearBox>
        <CvcBox>
          <Label>CVC</Label>
          <Input placeholder='e.g. 123' className='cvc' type='text' />
        </CvcBox>
      </MonthYearCVC>
      <ConfirmButton type='submit'>Confirm</ConfirmButton>
    </FormMain>
  );
};