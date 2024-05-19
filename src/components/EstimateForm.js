import React, { useState } from "react";
import classes from './SharedFormStyles.module.scss';

export function EstimateForm({setFormData, setShowTable, setFileUrl}) {
    const [file, setFile] = useState(null);
    const [material, setMaterial] = useState("");
    const [postProcessing, setPostProcessing] = useState("");
    const [quality, setQuality] = useState("");
    const [filling, setFilling] = useState("");
    const [executionTime, setExecutionTime] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleFileChange = (event) => {
        //setFile(event.target.files[0]);
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            const url = URL.createObjectURL(file);
            setFileUrl(url);  // Create a blob URL and store it
            console.log(`Preview URL: ${url}`);
        }
    };

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('file', file);
        formData.append('materialId', parseInt(material, 10));
        formData.append('infillPercentage', parseInt(filling, 10));
        formData.append('surfaceThickness', 0.05);
        formData.append('unit', 'mm');
        formData.append('postProcessing', postProcessing);
        formData.append('executionTime', executionTime);
        formData.append('quantity', parseInt(quantity, 10));
        formData.append('quality', quality);

        try{
            const response = await fetch('http://localhost:8080/upload', {
               method:'POST',
               body: formData
            });

            if(!response.ok){
                throw new Error("Error while trying to get data from API");
            }

            const data = await response.json();
            console.log("Success: ", data);
            setFormData(data);
            setShowTable(true);
            }catch(error){
            console.log("Error: ", error);
            setShowTable(false);
        }
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
                    <option value="1">PLA</option>
                    <option value="2">ABS</option>
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
