import React from "react";
import Button from "../pieces/Button";
import Card from "../pieces/Card";

function Page2 (props){
    const pageStyle = {
        backgroundColor: props.backgroundColor,
    };

    return (
        <div className="Page" style={pageStyle} >
            <div className='row'>
                <div className='col-md-4'>
                    <Card 
                    imagesrc = "0"
                    cardColor = "#410F70"
                    title = "Growth & Money" 
                    body = "Invest in all sorts of industries. Trade short or long term. Use data to make better choices."/>
                </div>
                <div className='col-md-4'>
                    <Card
                    imagesrc="1"
                    cardColor = "#410F70"
                    title = "Financial Literacy" 
                    body = "Learn about how to manage
                    all kinds of income and
                    assets. Accomplish your goals
                    on your terms."/>
                </div>
                <div className='col-md-4'>
                    <Card
                    imagesrc = "2" 
                    backgroundColor = "#410F70"
                    title = "Growth & Money" 
                    body = "We protect all of your data.
                    We do not let others
                    misuse it. We only use it to
                    make recommendations."/>
                </div>
            </div>
        </div>
    )
}

export default Page2;