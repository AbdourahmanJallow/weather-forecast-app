import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
    return (
            <main className="flex flex-col h-screen justify-between">
                <Header />
                <div className = "container mx-auto grid place-content-center w-full">
                    <Home />
                </div>
                <Footer />
            </main>
    );
}

export default App;
