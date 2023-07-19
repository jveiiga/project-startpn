import PropTypes from 'prop-types';

const ThreeColumnLayout = ({ colum2Data, colum3Data, colum4Data }) => {

    const container_three_column = {

        "display": "grid",
        "grid-template-columns": "1fr",
    }

    const column1 = {

        gridColumnStart: "1",
        gridColumnEnd: "2",
        gridRowStart: "1",
        gridRowEnd: "1",
    }

    const column2 = {
        gridColumnStart: "1",
        gridColumnEnd: "2",
        paddingLeft: "5.6em",
        paddingRight: "2.7em",

        paddingTop: "3.5rem",
        border: "1px solid"
    }

    const column3 = {
        gridColumnStart: "3",
        gridColumnEnd: "4",
    }

    return (
        <div style={container_three_column}>
            <div style={column1}>{colum2Data}</div>
            <div style={column2}>{colum3Data}</div>
            <div style={column3}>{colum4Data}</div>
        </div>

    )
}

ThreeColumnLayout.propTypes = {
    colum2Data: PropTypes.node.isRequired,
    colum3Data: PropTypes.node.isRequired,
    colum4Data: PropTypes.node.isRequired,
    // page: PropTypes.string.isRequired,
    // typeHeader: PropTypes.string.isRequired,
  };

export default ThreeColumnLayout