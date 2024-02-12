import PropTypes from 'prop-types';
import classNames from 'classnames';


function Button({children,primary,secondary,success,warning,danger,rounded,outline, ...rest}){

    const classes=classNames(rest.className,'px-3 py-1.5 border flex items-center',
    {
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-900 bg-gray-900 text-white':secondary,
        'border-green-600 bg-green-600 text-white':success,
        'border-yellow-400 bg-yellow-400 text-white':warning,
        'border-red-400 bg-red-400 text-white':danger,
        'rounded-full':rounded,
        'bg-orange':outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-600':outline && success,
        'text-yellow-400':outline && warning,
        'text-red-400':outline && danger,
    })
    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes={
    checkVariationValue:({primary,secondary,success,warning,danger})=>{
        const count=Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger);
        if(count>1){
            return new Error('Only one of the primary, secondary, success, warning, danger can be true.');
        }       
    }



};
export default Button;