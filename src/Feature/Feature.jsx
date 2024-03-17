import PropTypes from 'prop-types';
import { RiCheckboxCircleFill } from "react-icons/ri";
const Feature = ({feature}) => {
    return (
        <div>
          <div>
          <p className=" flex m-3"><RiCheckboxCircleFill className='text-green-400'>
                </RiCheckboxCircleFill> {feature} </p>
          </div>
        
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;