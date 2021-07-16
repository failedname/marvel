import { Fragment } from "react";
import Item from "./items";
import NoSearch from "./error";

function ListItem({ data }) {
  return (
    <div className='ui grid container'>
      {data.length !== 0 ? (
        <Fragment>
          <Item data={data.results}></Item>
        </Fragment>
      ) : (
        <NoSearch></NoSearch>
      )}
    </div>
  );
}

export default ListItem;
