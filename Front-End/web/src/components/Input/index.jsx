import PropTypes from "prop-types"

const Input = ({ name, id, onChange, width, height, background, color, borderRadius, marginTop, marginBottom, marginRight, marginLeft, paddingLeft, border, value, placeholder}) => {

    const styleInput = {
        background: background,
        width: width,
        height: height,
        borderRadius: borderRadius,
        border: border,
        color: color,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginLeft: marginLeft,
        paddingLeft: paddingLeft,
        value: value,
        placeholder: placeholder,
    }

    return (
        <input className="Input" id={id} onChange={onChange} style={styleInput} placeholder={placeholder} name={name} />
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string,
    paddingLeft: PropTypes.string,
    border: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Input