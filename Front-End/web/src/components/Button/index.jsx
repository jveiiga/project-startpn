import PropTypes from "prop-types"

const Button = ({ name, onClick, width, height, background, color, borderRadius, marginTop, marginBottom, marginRight, marginLeft, border, outline, className }) => {

    const styleButton = {
        background: background,
        width: width,
        height: height,
        borderRadius: borderRadius,
        border: border,
        color: color,
        outline: outline,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginLeft: marginLeft,
        className: className,
    }
    return (
        <button className={className} onClick={onClick} style={styleButton}>{name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string,
    border: PropTypes.string,
    outline: PropTypes.string,
    className: PropTypes.string,
}

export default Button