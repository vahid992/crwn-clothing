import './category.styles.scss';
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../comonents/collection-item/collection-item.component';

const CategoryPage = ({collection}) =>{
    const { title,items} = collection;
    return(
    <div className="collection-page">
        <h2 className='title'> { title } </h2>
        <div className="items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)};

const mapStateToProps = (state,ownProps) =>({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);  

