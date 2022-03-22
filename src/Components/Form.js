import React from "react";
import { FaRegTimesCircle } from "react-icons/fa"; 


const Form = ({
  title,
  poster_path,
  vote_average,
  overview,
  onChange,
  onClick,
  onSubmit,
  token,    
}) => {
  return (
    <div className="formContainer">
      <div className="form">
        <FaRegTimesCircle className="times" onClick={onClick} />
        <form onSubmit={onSubmit}>
          <div id="firstInput">
            <label htmlFor="title">Title : </label>
            <input type="text" name="title" value={title} onChange={onChange} />
          </div>
          <div id="secondInput">
            <label htmlFor="imgUrl">Image Path : </label>
            <input
              type="text"
              name="poster_path"
              value={poster_path}
              onChange={onChange}
            />
          </div>
          <div id="thirdInput">
            <label htmlFor="vote">Vote : </label>
            <input
              type="text"
              name="vote_average"
              value={vote_average}
              onChange={onChange}
            />
          </div>
          <div id="forthInput">
            <label htmlFor="overview">Overview : </label>
            <input
              type="text"
              name="overview"
              value={overview}
              onChange={onChange}
            />
          </div>
          <div id="fifthInput">
            <label htmlFor="token">Key : </label>
            <input type="text" name="token" value={token} onChange={onChange} />
          </div>
          <button type="submit">Submit Movie</button>
        </form>
      </div>
    </div>
  );
};

export default Form;