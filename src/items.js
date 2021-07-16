import { Fragment } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const redImg = {
  height: "220px",
};

function Item({ data }) {
  return (
    <Router>
      <Fragment>
        {data.map((list) => (
          <div key={list.id} className='four wide column'>
            <div className='ui card'>
              <div className='image'>
                <img
                  style={redImg}
                  alt={list.name}
                  src={`${list.thumbnail.path}.${list.thumbnail.extension}`}></img>
              </div>
              <div className='content'>
                <Link
                  to={{ pathname: `/${list.id}`, state: { data: list } }}
                  className='header'>
                  {list.name}
                </Link>
                <div className='meta'>
                  <span className='date'></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    </Router>
  );
}

export default Item;
