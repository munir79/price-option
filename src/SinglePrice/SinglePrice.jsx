import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const SinglePrice = ({option}) => {
    const {price,features,name}=option;
    return (
        <div className='bg-blue-500 p-5 rounded-md text-white flex flex-col ' >
            <h2 className='text-center'>
                <span className='text-5xl'>{price} </span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-4xl text-center'>
                {name}
            </h4>
         <div className='pl-6 flex-grow'>
         {
                features.map((feature,idx)=><Feature key={idx} feature={feature} ></Feature>)
            }
         </div>
             <div>
         <button className='w-full bg-green-600 rounded-lg font-bold 
         hover:bg-green-950  py-2'>Buy Now </button>
         </div>
        </div>
    );
};
SinglePrice.propTypes={
    option:PropTypes.object
}
export default SinglePrice;