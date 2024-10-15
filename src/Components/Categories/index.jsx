import React from "react";
import "./categories.css";

const Categories = (props) => {
  return (
    <div>
      <div className="special-categories">
        <img
          className="categories-img"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/24/5c51e061-3f02-497f-8998-59694ec79dd91727172802794-Category-Specials.jpg"
        />
      </div>

      <div className="card-group">
        <div className="row p-5">
          {props.item.map((item) => (
            <div
              className="card col-3 col-md-4 col-lg-4 catrgory-img-container"
              key={item.id}
              style={{ maxWidth: "16rem" }}
            >
              <img
                src={item.image}
                className="card-img-top categories-img"
                alt={`category-${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
