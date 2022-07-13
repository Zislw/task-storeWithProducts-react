import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Manager.css'

export default class Manager extends React.Component {
   
    refManagerName:React.RefObject<HTMLInputElement>=React.createRef();
    refManagerPassword:React.RefObject<HTMLInputElement>=React.createRef();

    state={
        manager:false
    }

    iammanager=(refName:string="",refPassword:string="")=>{
        if(refName.trim()==="naomy" && refPassword.trim()==="8731"){
            let bool=true           
            this.setState({manager:bool})
            console.log(this.state.manager)
        }
        
    }


    render() {
        return (
            <div>
             {!this.state.manager&& <form>
                    <fieldset >
                        <legend>Manager Details:</legend>
                        <div className="col-auto">
                            <label className="form-label">Manager Name</label>
                            <input type="text" className="form-control" ref={this.refManagerName} placeholder="manager name" />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Manager Password</label>
                            <input type="password" className="form-control" ref={this.refManagerPassword} placeholder="manager password" />
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary" onClick={()=>this.iammanager(this.refManagerName.current?.value,this.refManagerPassword.current?.value)}>ok</button>
                        </div>
                    </fieldset>
                </form>}
                {this.state.manager===true&& 
                <>
                <div className="nav-manager">               
                <Link to="addProduct">add product</Link>
                <Link to="editProduct">edit product</Link>
                <Link to="deleteProduct">delete product</Link>                      
                </div>
                <Outlet/> 
                </>}
            </div>
        )
    }
}