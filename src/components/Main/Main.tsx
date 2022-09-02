import { Link } from "react-router-dom";
import { MainBox } from "../Main.styles";

export const Main = () => {
  return(
    <MainBox>
      <Link to='/expenses-chart'>
        Expenses Chart
      </Link>
      
    </MainBox>
  );
};