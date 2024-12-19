import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function HomeLayoutes() {
  return (
    <div className="font-poppins">
        <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
        </header>
        <nav>
           <Navbar></Navbar>
        </nav>
        <main>
            <Main> </Main>
        </main>
    </div>
  )
}
