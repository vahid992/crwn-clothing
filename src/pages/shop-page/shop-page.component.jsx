import "./shop-page.styles.scss";
import { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../comonents/collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherColectionProps }) => (
          <CollectionPreview key={id} {...otherColectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
