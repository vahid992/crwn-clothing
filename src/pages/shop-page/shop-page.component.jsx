import "./shop-page.styles.scss";
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../comonents/collection-overwiew/collection-overwiew.component';
import CategoryPage from '../../pages/category/category.component';

const ShopPage = ({match}) => {
  console.log(match);
  return(
  <div className="shop-page">
    
      <Route exact path={`${match.path}`} component={ CollectionsOverview} />
      <Route  path={`${match.path}/:categoryId`} component={ CategoryPage } />
    
  </div>
)};

export default ShopPage;
