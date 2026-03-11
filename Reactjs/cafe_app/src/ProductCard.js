import React from "react";


function ProductCards(){

return(
    <div>
        <div className="product">
          <img src="https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo" height="250" width="250"  />
          <h2>Product Name</h2>
          <p><mark>Price:</mark>$<del>900</del>/<strong>299</strong></p>
          <button>Buy Now</button>
        </div>
    </div>
)

}

export default ProductCards