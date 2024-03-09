
export default  function SearchButton() {


  return (
    <div className="search-container">
      <button className="search-button">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
          />
        </svg>
      </button>
  
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />

    </div>
  );
};

