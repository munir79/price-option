import PropTypes from 'prop-types';

const SinglePrice = ({option}) => {
    const {price,features,name}=option;
    return (
        <div>
            <h2>
                <span className='text-7xl'>{price} </span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-4xl'>
                {name}
            </h4>
        </div>
    );
};
SinglePrice.propTypes={
    option:PropTypes.object
}
export default SinglePrice;