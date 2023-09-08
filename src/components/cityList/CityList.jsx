import React from "react";

export default function CityList(props) {
  const {
    searchedCities,
    startOffset,
    offset,
    handleNextClick,
    handlePreviousClick,
    handleSelect,
    disableNext,
    disablePrevious,
  } = props;
  return (
    <div style={{ position: "relative", zIndex: "99999" }}>
      <ul
        style={{
          margin: "0",
          padding: "0",
        }}>
        {searchedCities.slice(startOffset, offset).map((item) => (
          <li
            onClick={() => handleSelect(`${item.lat} ${item.lon}`)}
            style={{
              listStyle: "none",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "16px",
              textAlign: "center",
              margin: "10px",
              width: "100%",
              height: "20px",
            }}>
            {item.nm}
          </li>
        ))}
      </ul>
      {searchedCities.length === 0 && <h3>No results found</h3>}
      {searchedCities.length > 10 && (
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <button
            data-testid="previous-button"
            style={{
              height: "30px",
              width: "100px",
              borderRadius: "16px",
              backgroundColor: "#cbcbdf",
            }}
            disabled={disablePrevious}
            onClick={handlePreviousClick}>
            Previous
          </button>
          <button
            data-testid="next-button"
            style={{
              height: "30px",
              width: "100px",
              borderRadius: "16px",
              backgroundColor: "#cbcbdf",
            }}
            disabled={disableNext}
            onClick={handleNextClick}>
            next
          </button>
        </div>
      )}
    </div>
  );
}
