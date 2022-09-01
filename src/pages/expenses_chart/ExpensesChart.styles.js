import styled from "styled-components";

export const ExpensesMain = styled.main`
  background: hsl(27, 66%, 92%);
  display: grid;
  place-items: center;
  padding: 10rem 0;
  @media screen and (min-width: 1000px) {
    padding: 2rem 0;
  }
`;

export const HeaderBox = styled.div`
  box-sizing: border-box;
  color: hsl(33, 100%, 98%);
  background: hsl(10, 79%, 65%);
  border-radius: 10px;
  padding: 2rem;
  width: 33rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextBox = styled.div`
  line-height: 1.5;
`;

export const HeaderTitle = styled.h2`
  font-family: "DM Sans";
  font-size: 1.5rem;
  font-weight: 400;
`;

export const HeaderPrice = styled.p`
  font-weight: 600;
  font-family: "DM Sans";
  font-size: 2.5rem;
`;

export const CirclesBox = styled.div`
  display: flex;
  position: relative;
`;

export const LeftCircle = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  border: 2px solid hsl(33, 100%, 98%);
  margin-left: -50%;
`;

export const RightCircle = styled.div`
  border-radius: 50%;
  background: hsl(25, 47%, 15%);
  width: 4rem;
  height: 4rem;
`;
export const CardBox = styled.div`
  box-sizing: border-box;
  color: hsl(25, 47%, 15%);
  padding: 1rem;
  width: 33rem;
  margin: 1.5rem;
  border-radius: 10px;
  background: hsl(33, 100%, 98%);
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin: 1.5rem 1rem 5rem;
`;
export const ColumnsBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 3.4rem;
  border-radius: 4px;
  height: ${({ value }) => `calc(${value} * 3.2px)`};
  background: ${({ color }) =>
    color === "r" ? "hsl(10, 79%, 65%)" : "hsl(186, 34%, 60%)"};
  &:hover {
    background: ${({ color }) =>
      color === "r" ? "hsl(10, 79%, 80%)" : "hsl(186, 34%, 75%)"};
    &::before {
      position: absolute;
      content: "${({ value }) => `$${value}`}";
      border-radius: 4px;
      color: hsl(33, 100%, 98%);
      background: hsl(25, 47%, 15%);
      padding: 0.5rem;
      width: 3.5rem;
      font-weight: 600;
      font-size: 1.2rem;
      display: flex;
      margin: -3rem auto;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const DayBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export const Day = styled.p`
  font-size: 1.1rem;
  margin-top: 0.8rem;
  color: hsl(28, 10%, 53%);
`;

export const BottomBar = styled.div`
  width: 95%;
  margin: 2rem auto;
  border-bottom: solid 0.2rem hsl(27, 66%, 92%);
`;

export const LastInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalBox = styled.div`
  margin: 0.5rem 1rem 1.5rem;
`;

export const TotalText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  color: hsl(28, 10%, 53%);
`;

export const TotalValue = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const PercentageBox = styled.div`
  margin: 0.5rem 1rem 1.5rem;
  display: flex;
  flex-flow: column;
  justify-content: end;
  align-items: flex-end;
`;

export const Percentage = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const PercentageText = styled.p`
  font-size: 1.2rem;
  color: hsl(28, 10%, 53%);
`;
