import React, { useState } from "react";
import classes from './SharedFormStyles.module.scss';

export function EstimateForm() {
    const [file, setFile] = useState(null);
    const [material, setMaterial] = useState("");
    const [postProcessing, setPostProcessing] = useState("");
    const [quality, setQuality] = useState("");
    const [filling, setFilling] = useState("");
    const [executionTime, setExecutionTime] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            file,
            material,
            postProcessing,
            quality,
            filling,
            executionTime,
            quantity,
        });
    };

    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div className={classes.inputGroup}>
                <label>Upload File:</label>
                <input type="file" onChange={handleFileChange} className={classes.inputField} />
            </div>
            <div className={classes.inputGroup}>
                <label>Material:</label>
                <select value={material} onChange={(e) => setMaterial(e.target.value)} className={classes.inputField}>
                    <option value="">Select Material</option>
                    <option value="PLA">PLA</option>
                    <option value="PLA - Hyper">PLA - Hyper</option>
                    <option value="ABS">ABS</option>
                </select>
            </div>
            <div className={classes.inputGroup}>
                <label>Post-processing:</label>
                <select
                    value={postProcessing}
                    onChange={(e) => setPostProcessing(e.target.value)}
                    className={classes.inputField}
                >
                    <option value="">Select Post-processing</option>
                    <option value="without post-processing">
                        without post-processing
                    </option>
                    <option value="deleting supports">deleting supports</option>
                    <option value="grinding">grinding</option>
                </select>
            </div>
            <div className={classes.inputGroup}>
                <label>Quality:</label>
                <select value={quality} onChange={(e) => setQuality(e.target.value)} className={classes.inputField}>
                    <option value="">Select Quality</option>
                    <option value="standard">standard</option>
                    <option value="high">high</option>
                    <option value="thick layer">thick layer</option>
                </select>
            </div>
            <div className={classes.inputGroup}>
                <label>% of Filling:</label>
                <select value={filling} onChange={(e) => setFilling(e.target.value)} className={classes.inputField}>
                    <option value="">Select % of Filling</option>
                    <option value="5%">5%</option>
                    <option value="15%">15%</option>
                    <option value="25%">25%</option>
                    <option value="50%">50%</option>
                </select>
            </div>
            <div className={classes.inputGroup}>
                <label>Execution Time:</label>
                <select
                    value={executionTime}
                    onChange={(e) => setExecutionTime(e.target.value)}
                    className={classes.inputField}
                >
                    <option value="">Select Execution Time</option>
                    <option value="standard (3-4 days)">standard (3-4 days)</option>
                    <option value="express (1-2 days)">express (1-2 days)</option>
                    <option value="loose (5-8 days)">loose (5-8 days)</option>
                </select>
            </div>
            <div className={classes.quantityControl}>
                <label>Quantity:</label>
                <button type="button" onClick={decrementQuantity} className={classes.button}>
                    -
                </button>
                <span>{quantity}</span>
                <button type="button" onClick={incrementQuantity} className={classes.button}>
                    +
                </button>
            </div>
            <div>
                <button type="submit" className={classes.submitButton}>Submit</button>
            </div>
        </form>
    );
}
