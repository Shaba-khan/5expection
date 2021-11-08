import React from "react";

const createList = props => {
  return props.formDetails.map((val, idx) => {
    
    let image = `image-${idx}`,
      title = `title-${idx}`,
      date = `date-${idx}`,
      discription = `discription-${idx}`,
      price = `price-${idx}`,
      qty = `qty-${idx}`;

    return (
      <div className="form-row" key={val.index}>
        <div className="col">
          <label>Image</label>
          <input
            type="file"
            className="form-control required"
            placeholder="Enter Image"
            name="image"
            data-id={idx}
            id={image}
            required="required"
          />
        </div>
        <div className="col">
          <label>Title</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Enter title"
            name="title"
            id={title}
            data-id={idx}
            required="required"

          />
        </div>
        <div className="col">
          <label>Discription</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter discription"
            name="discription"
            id={discription}
            data-id={idx}
            required="required"

          />
        </div>
        <div className="col">
          <label>Qty</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter qunatity"
            name="qty"
            id={qty}
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            name="price"
            id={price}
            data-id={idx}
            required="required"

          />
        </div>
        <div className="col">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Price"
            name="date"
            id={date}
            data-id={idx}
            required="required"
            
          />
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  });
};
export default createList;
