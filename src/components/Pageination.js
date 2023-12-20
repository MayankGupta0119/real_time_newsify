import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const Pageination = () => {
  const { page, handlePageChange, totalpage } = useContext(Appcontext);
  function handlePageDec() {
    handlePageChange(page - 1);
  }
  function handlePageInc() {
    handlePageChange(page + 1);
  }
  return (
    <div className="flex justify-around items-center border-t p-2 flex-wrap">
      <div className="flex gap-x-6 justify-center items-center mb-5">
        {/* yaha curly brackets me buttons esliye hai, kyuki jo previous and next
        ka button hai wao ek codition pe aayega */}
        {page > 1 && <button className="comic-button" onClick={handlePageDec}>Previous</button>}
        {page < totalpage && <button className="comic-button" onClick={handlePageInc}>Next</button>}
      </div>
      <p className="font-bold text-lg">
        Page {page} of {totalpage}
      </p>
    </div>
  );
};

export default Pageination;
