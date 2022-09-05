import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ExpensesChart } from "./pages/expenses_chart/ExpensesChart";
import { InteractiveCard } from "./pages/interactive_card/InteractiveCard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/expenses-chart' element={<ExpensesChart />} />
        <Route path='/interactive-card' element={<InteractiveCard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
