import React from "react";
import { ProductModel } from '../models/Product'
import Product from './Product'
import "./ProductList.css"


export default class ProductList extends React.Component<{list:Array<ProductModel>},{filterArr:Array<ProductModel>,message:string}> {
    prodArr: Array<ProductModel> ;
    myRef:React.RefObject<HTMLInputElement>;
    
    
constructor(props:any){
    super(props)
    console.log("props");
    
     console.log(props.list);
     
    this.prodArr=props.list ;
    this.myRef=React.createRef()              
    this.state = {
        filterArr: this.prodArr,
        message:""
    }
}


    search = (ref:string="") => {
         
        let arr = this.prodArr.filter(item => item.name.includes(ref.trim()))                
        if (arr.length !== 0) {
            this.setState({ filterArr: arr })
            let emptyMessage:string=""
            this.setState({message:emptyMessage})
        }
        else {
        let message="there are not details"
        this.setState({message})
        let emptyArr:Array<ProductModel>=[]
        this.setState({filterArr:emptyArr})
        }
    }
    


    render() {
        return (
            <>
                <div>
                    <span>search</span>
                    <input type="text" onKeyUp={() => this.search(this.myRef.current?.value)} ref={this.myRef}/>
                </div>
                <div className="content">
                    {this.state.message!=="" && <span>{this.state.message}</span>}
                    {this.state.filterArr.map(p => { return (<Product key={p.id} details={p}></Product>) })}
                </div>
            </>
        )
    }
}