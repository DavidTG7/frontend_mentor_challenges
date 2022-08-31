import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ExpensesChart } from "./pages/expenses_chart/ExpensesChart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='expenses-chart' element={<ExpensesChart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
