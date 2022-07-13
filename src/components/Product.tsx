import React from "react";
import './Product.css';

export default class Product extends React.Component <any>{
    
   
    render() {
        return (

            <div className="prod">
                <label>{this.props.details.id}</label>
                <h2>{this.props.details.name}</h2>
                <label>amount:{this.props.details.amount}</label>
                <label>price:{this.props.details.price}</label>
                <div>
                    description:{this.props.details.description}
                </div>
            </div>

        )
    }

}