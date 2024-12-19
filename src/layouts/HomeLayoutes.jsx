import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";

export default function HomeLayoutes() {
  return (
    <div>
        <header>
            <Header></Header>
        </header>
        <nav>
           <Nav> </Nav>
        </nav>
        <main>
            <Main> </Main>
        </main>
    </div>
  )
}
