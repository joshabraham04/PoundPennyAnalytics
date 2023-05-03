import React from "react";
import Button from "../pieces/Button";
import "./styling/Page1.css";

function Page1 (props){
    const pageStyle = {
        backgroundColor: props.backgroundColor,
    };

    const textStyle = {
        color: props.textColor,
        fontFamily: "Inter",
        paddingBottom: "10%",
        fontWeight: "500",
        fontSize: "76px",
    };

    const subtextStyle = {
        color: props.textColor,
        fontFamily: "Inter",
        fontWeight: "400",
        fontSize: "28px"
    };

    return (
        <div className = "Page" style = {pageStyle}>
            <div className = "image">
                {props.imagesrc ? <img src={require("./pieceImages/ppaBG.png")} alt="ppa-logo-wallpaper-i" style={{ width: "300%", height: "auto", }}/>: <div/>}
            </div>
            
            <div className = "text">
                <h1 style = {textStyle} >{props.mainText}</h1>
            </div>


            <div className = "subText" style = {{display: "flex", flexDirection: "column"}}>
                <p style = {subtextStyle} >{props.subText[0]}</p>
                <p style = {subtextStyle} >{props.subText[1]}</p>
                <p style = {subtextStyle} >{props.subText[2]}</p>
            </div>

            <div> 
                <a href="/login">
                    <Button
                        text= {props.buttonText}
                        backgroundColor= "#EFBF00"
                        textColor= "#ffffff"
                        borderRadius= "7px"
                        padding= "20px 40px"
                        fontSize = "1.5rem"
                        className = "btn"
                        position= "absolute"
                        top ="90%" 
                        left= "50%"
                        transform= "translate(-50%, -30%)"
                        border = "0px solid #7700FF"
                    />
            </a>
        </div>
        
        </div>
    )
}

export default Page1;