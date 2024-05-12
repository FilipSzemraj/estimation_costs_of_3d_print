import classes from "./HeaderCss.module.scss";

export function Header() {
    return (
        <div className={classes.main}>
            <h1>Estimate cost of 3D printing file</h1>
            <p className={classes.textShadows}>Created by Filip Szemraj.</p>
        </div>
    );
}
