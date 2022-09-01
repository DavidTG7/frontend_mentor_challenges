import { CardBox, CirclesBox, Column, ColumnsBox, Day, DayBox, ExpensesMain, HeaderBox, HeaderPrice, HeaderTitle, LeftCircle, RightCircle, TextBox } from "./ExpensesChart.styles";
import data from './data.json'

export const ExpensesChart = () => {
  const allData = Object.values(data);


  const allColumns = allData.map(item => {
    const color = item.day === 'wed' ? '' : 'r';
    return (
      <DayBox>
        <Column color={color} value={item.amount} />
        <Day>{item.day}</Day>
      </DayBox>
    );
  });

  return (
    <ExpensesMain>
      <HeaderBox>
        <TextBox>
          <HeaderTitle>My balance</HeaderTitle>
          <HeaderPrice>$921.48</HeaderPrice>
        </TextBox>
        <CirclesBox>
          <LeftCircle />
          <RightCircle />
        </CirclesBox>
      </HeaderBox>
      <CardBox>
        <ColumnsBox>
          {allColumns}
        </ColumnsBox>
      </CardBox>
    </ExpensesMain>
  );
};