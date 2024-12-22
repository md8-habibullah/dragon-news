import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/layout-main/LeftAside";
import RightAside from "../components/layout-main/RightAside";
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
      <main className="w-11/12 mx-auto py-2 md:grid grid-cols-12">
        <aside className="left col-span-3 mr-5">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 ml-5">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
}
