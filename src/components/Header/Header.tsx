import { Link } from "react-router-dom";
import { HeaderTitle, MainHeader } from "./Header.styles";

export const Header = () => {
  return(
    <MainHeader>
      <HeaderTitle>FRONTEND MENTOR CHALLENGES</HeaderTitle>
      <Link to='/'>
        Home
      </Link>
    </MainHeader>
  );
}