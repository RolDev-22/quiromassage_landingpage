import { Header } from "@components/Layout/Header/Header";
import { AppRoutes } from "@routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
