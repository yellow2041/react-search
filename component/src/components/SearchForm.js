import React from "react";

const SearchForm = ({ value, onChange, onSubmit, onReset }) => {
  const handleReset = () => {
    onReset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  const handleChangeInput = (event) => {
    onChange(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        value={value}
        onChange={handleChangeInput}
      />
      {value.length > 0 && <button type="reset" className="btn-reset"></button>}
    </form>
  );
};

export default SearchForm;
