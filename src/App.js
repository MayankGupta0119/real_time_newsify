import { useContext, useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pageination from "./components/Pageination";
import { Appcontext } from "./context/Appcontext";

function App() {
  const { fetchBlogPosts,darkmode,setDarkMode } = useContext(Appcontext);
  // making the api call using useEffect hook
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className={`App ${darkmode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      <Blogs />
      <Pageination />
    </div>
  );
}

export default App;
