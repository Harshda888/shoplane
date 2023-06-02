import Constants from "../api/Constants";

const Product = (props) => {
  const { _id, title, unit, price, image } = props.data;
  return (
    <div class="col-sm-4">
      <div class="card">
        <img src={ Constants.IMAGE_URL + image }    className="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{unit}</p>
          <h2>
            <span>${price}</span>
            <span
              style={{ fontSize: "22px", marginLeft: "10px", color: "#888" }}
            >
            </span>
          </h2>
          <Link to={ '/product/detail/' + id} class="btn btn-primary btn-block">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
