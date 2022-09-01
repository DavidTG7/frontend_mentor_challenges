import {
  BottomBar,
  CardBox,
  CardTitle,
  CirclesBox,
  Column,
  ColumnsBox,
  Day,
  DayBox,
  ExpensesMain,
  HeaderBox,
  HeaderPrice,
  HeaderTitle,
  LastInfoBox,
  LeftCircle,
  Percentage,
  PercentageBox,
  PercentageText,
  RightCircle,
  TextBox,
  TotalBox,
  TotalText,
  TotalValue } from "./ExpensesChart.styles";
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
        <CardTitle>Spending - Last 7 days</CardTitle>
        <ColumnsBox>
          {allColumns}
        </ColumnsBox>
        <BottomBar />
        <LastInfoBox>
          <TotalBox>
            <TotalText>Total this month</TotalText>
            <TotalValue>$478.33</TotalValue>
          </TotalBox>
          <PercentageBox>
            <Percentage>+2.4%</Percentage>
            <PercentageText>from last month</PercentageText>
          </PercentageBox>
        </LastInfoBox>
      </CardBox>
    </ExpensesMain>
  );
};
