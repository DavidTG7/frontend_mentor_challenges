import styled from "styled-components";

export const ExpensesMain = styled.main`
  background: hsl(27, 66%, 92%);
  display: grid;
  place-items: center;
  padding: 2rem 0;
`;

export const HeaderBox = styled.div`
  box-sizing: border-box;
  color: hsl(33, 100%, 98%);
  background: hsl(10, 79%, 65%);
  border-radius: 10px;
  padding: 2rem;
  width: 330px;
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
  width: 330px;
  margin: 1rem;
  border-radius: 10px;
  background: hsl(33, 100%, 98%);
`;

export const ColumnsBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const Column = styled.div`
  width: 3.4rem;
  border-radius: 4px;
  height: ${({ value }) => `calc(${value} * 3px)`};
  background: ${({ color }) =>
    color === "r" ? "hsl(10, 79%, 65%)" : "hsl(186, 34%, 60%)"};
`;

export const DayBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export const Day = styled.p``;
