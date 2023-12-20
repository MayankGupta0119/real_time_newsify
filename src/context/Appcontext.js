import { createContext, useState } from "react";
import { useEffect } from "react";
// context creation
export const Appcontext = createContext();
export default function AppContextProvider({ children }) {
  //this will get children as App from index.js
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState(null);
  const [currentPagePosts, setCurrentPagePosts] = useState([]);
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    // This effect runs whenever 'posts' state changes
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    setCurrentPagePosts(posts.slice(startIndex, endIndex));
  }, [posts, page]);

  async function fetchBlogPosts() {
    // 5c8794e116f44ff6a5a0bda43f81e502
    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5ffca8e70934ce6bcf9fb9149fba5a4`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log("printing in context api file");
      console.log(data.articles);
      setPosts(data.articles);
      const articleNum = data.articles.length; //if i use this with hook then there will be no imediate change
      console.log("printing posts");
      console.log(posts);
      const startIndex = (page - 1) * 4;
      const endIndex = startIndex + 4;
      setCurrentPagePosts(posts.slice(startIndex, endIndex));
      console.log("printing currentpagepost");
      console.log(currentPagePosts);
      setTotalPage(articleNum % 4 === 0 ? articleNum / 4 : articleNum + 1);
    } catch (error) {
      console.log("error in fetching data");
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
  }
  function handlePageChange(page) {
    setPage(page);
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    setCurrentPagePosts(posts.slice(startIndex, endIndex));
  }

  //value ke ander wo sare variables and functions likhenge jo ki pass krna hai
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalpage,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
    currentPagePosts,
    setCurrentPagePosts,
    darkmode,
    setDarkMode,
  };

  //yaha pe humne App.js ko sare value pass kr diye, kyu in index.js me AppContextProvider ka children is App, therefore
  //wo children i.e. App will be passed here bydefault
  // now to App we had passed all above classified values.
  // i.e. we passed the snapshot of data, in which we have values and states.
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}
