import { Fragment, useState } from "react";

function Search({ onUpdate, searchHandler }) {
  const [text, setText] = useState("");

  function change(e) {
    setText(e.target.value);
  }
  return (
    <Fragment>
      <div className='ui grid container'>
        <div className='ui eight wide column '>
          <div className='right item'>
            <div className='ui action input'>
              <input
                value={text}
                onChange={change}
                type='text'
                placeholder='Buscar...'></input>
              <div onClick={() => searchHandler(text)} className='ui button'>
                Go
              </div>
            </div>
          </div>
        </div>
        <div className='eight wide column'>
          <button
            onClick={onUpdate}
            className='ui red right labeled icon button right floated'>
            <i className='right arrow icon'></i>
            Siguiente
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Search;
