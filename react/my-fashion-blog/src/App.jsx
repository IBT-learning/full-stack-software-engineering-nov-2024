import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Home />
      </main>
    </>
  );
}
