import React from 'react';
import { StlViewer } from "react-stl-viewer";
import classes from './SharedFormStyles.module.scss';

//const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl";

export function OutputTable({formData, fileUrl}) {
    return (
        <>
        <div className={classes.formContainer}>
            <form>
                <div className={classes.dataDisplay}>
                    <label>Cost:</label>
                    <div className={classes.dataValue}>{formData.price.toFixed(2)} pln</div>
                </div>
                <div className={classes.dataDisplay}>
                    <label>Weight of calculated file:</label>
                    <div className={classes.dataValue}>{formData.weight.toFixed(2)} g</div>
                </div>
                <div className={classes.dataDisplay}>
                    <label>Dimensions:</label>
                    <div className={classes.dataValue}>{formData.xDimension}x{formData.yDimension}x{formData.zDimension} mm</div>
                </div>
            </form>
        </div>
        <div className={classes.viewerContainer}>
            {fileUrl ?
            <StlViewer style={{ width: '100%', height: '100%' }} orbitControls shadows url={fileUrl} />
                : <p>Error while uploading file</p>}
        </div>

        </>
    );
}
