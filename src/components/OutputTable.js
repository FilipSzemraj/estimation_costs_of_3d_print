import React from 'react';
import { StlViewer } from "react-stl-viewer";
import classes from './SharedFormStyles.module.scss';

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl";

export function OutputTable() {
    return (
        <>
        <div className={classes.formContainer}>
            <form>
                <div className={classes.dataDisplay}>
                    <label>Cost:</label>
                    <div className={classes.dataValue}>1235</div>
                </div>
                <div className={classes.dataDisplay}>
                    <label>Weight of calculated file:</label>
                    <div className={classes.dataValue}>1234 g</div>
                </div>
                <div className={classes.dataDisplay}>
                    <label>Dimensions:</label>
                    <div className={classes.dataValue}>3x3x3 cm</div>
                </div>
            </form>
        </div>
        <div className={classes.viewerContainer}>
            <StlViewer style={{ width: '100%', height: '100%' }} orbitControls shadows url={url} />
        </div>

        </>
    );
}
