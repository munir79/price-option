import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const SinglePrice = ({option}) => {
    const {price,features,name}=option;
    return (
        <div className='bg-blue-500 p-5 rounded-md text-white' >
            <h2 className='text-center'>
                <span className='text-5xl'>{price} </span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-4xl text-center'>
                {name}
            </h4>
            {
                features.map((feature,idx)=><Feature key={idx} feature={feature} ></Feature>)
            }
        </div>
    );
};
SinglePrice.propTypes={
    option:PropTypes.object
}
export default SinglePrice;