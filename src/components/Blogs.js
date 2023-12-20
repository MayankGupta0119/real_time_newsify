import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { currentPagePosts, loading, darkmode, setDarkMode } =
    useContext(Appcontext);

  return (
    <div
      className={`${darkmode ? "bg-black text-white " : "bg-white text-black"}`}
    >
      {loading ? (
        <Spinner />
      ) : currentPagePosts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        currentPagePosts.map((post) => (
          <div
            className={`flex py-6 px-8 justify-evenly relative m-4 blogbox ${
              darkmode ? "bg-black text-white changeborder" : "bg-white text-black"
            }`}
          >
            <div className="blogcontent flex flex-col items-start boxcontentdiv mt-2">
              <div className="flex justify-between flex-row items-center w-full">
                <p
                  className={`font-bold text-2xl w-[75%] p-2 ${
                    darkmode ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  {post.title}
                </p>
                <p className="w-[20%] opacity-0">
                  {post.author === null ? (
                    <p>Author - Unknown</p>
                  ) : (
                    <p>Author - {post.author}</p>
                  )}
                </p>
              </div>
              <p>
                <p className="mt-4">
                  {post.description === null ? <p></p> : post.description}
                </p>
                <a href={post.url} target="_blank">
                  <p className="font-semibold mt-4">
                    {post.content === null ? <p></p> : post.content}
                  </p>
                </a>
                {/* Readmore Button */}
                <a href={post.url} className="p-2 m-4" target="_blank">
                  <button class="readmore-btn">
                    <span class="book-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(86, 69, 117)"
                        viewBox="0 0 126 75"
                        class="book"
                      >
                        <rect
                          stroke-width="3"
                          stroke="#fff"
                          rx="7.5"
                          height="70"
                          width="121"
                          y="2.5"
                          x="2.5"
                        ></rect>
                        <line
                          stroke-width="3"
                          stroke="#fff"
                          y2="75"
                          x2="63.5"
                          x1="63.5"
                        ></line>
                        <path
                          stroke-linecap="round"
                          stroke-width="4"
                          stroke="#fff"
                          d="M25 20H50"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="4"
                          stroke="#fff"
                          d="M101 20H76"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="4"
                          stroke="#fff"
                          d="M16 30L50 30"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="4"
                          stroke="#fff"
                          d="M110 30L76 30"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 65 75"
                        class="book-page"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-width="4"
                          stroke="#fff"
                          d="M40 20H15"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="4"
                          stroke="#fff"
                          d="M49 30L15 30"
                        ></path>
                        <path
                          stroke-width="3"
                          stroke="#fff"
                          d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                        ></path>
                      </svg>
                    </span>
                    <span class="text"> Read more </span>
                  </button>
                </a>
              </p>
            </div>
            <div className="imgcontainer ml-2">
              {/* Image */}
              <img
                className="imgsection"
                src={
                  post.urlToImage === null
                    ? `https://jfsclifton.org/wp-content/uploads/2022/03/in-the-news.jpg`
                    : post.urlToImage
                }
                loading="lazy"
                width={1000}
                alt="imageOfTheNews"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
