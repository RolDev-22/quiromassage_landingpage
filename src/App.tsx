import { Header } from "@components/Layout/Header/Header";
import Home from "@pages/Home";
import About from "@pages/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
