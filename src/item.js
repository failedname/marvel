import Header from "./Header";
import { Fragment } from "react";

function Item(props) {
  const { data } = props.location.state;
  console.log(data);
  return (
    <Fragment>
      <Header></Header>
      <div className='ui one column grid container'>
        <div className='column'>
          <div className='ui centered card'>
            <div className='image'>
              <img
                alt={data.name}
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}></img>
            </div>
            <div className='content'>
              <div className='header'>{data.name}</div>
              <div class='description'>{data.description}</div>
            </div>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
}

export default Item;
