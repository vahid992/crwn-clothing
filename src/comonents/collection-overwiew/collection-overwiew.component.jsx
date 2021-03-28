import './collection-overwiew.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) =>(

    <div className="collections-overview">
    {collections.map(({ id, ...otherColectionProps }) => (
      <CollectionPreview key={id} {...otherColectionProps} />
    ))}
  </div>

);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
  });

export default connect(mapStateToProps)(CollectionsOverview); 