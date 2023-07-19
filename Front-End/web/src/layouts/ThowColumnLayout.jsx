import PropTypes from "prop-types";

const ThowColumnLayout = ({ colum1Data, colum2Data }) => {

    const container_thow_column = {

        "display": "grid",
        "justifyContent": "center",
        "alignContent": "center",
        "grid-template-columns": "39.6vw 60.4vw",
        "boxSizing": "border-box",

    }

    const column1 = {

        gridColumnStart: "1",
        gridColumnEnd: "2",

        height: "100vh",
        maxWidth: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid"
    }

    const column2 = {

        gridColumnStart: "2",
        gridColumnEnd: "3",

        height: "100vh",
        maxWidth: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid"
    }


    return (
        <div style={container_thow_column}>
            <div style={column1}>{colum1Data}</div>
            <div style={column2}>{colum2Data}</div>
        </div>

    )
}

ThowColumnLayout.propTypes = {
    colum1Data: PropTypes.string.isRequired,
    colum2Data: PropTypes.node.isRequired,
    page: PropTypes.string.isRequired,
};

export default ThowColumnLayout