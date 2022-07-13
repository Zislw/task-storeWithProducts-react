import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Manager from './components/Manager';
import Add from './components/manager-components/Add';
import Edit from './components/manager-components/Edit';
import Delete from './components/manager-components/Delete';
import db from './db.json'
import { ProductModel } from './models/Product';
function App() {

  let [prodArr, setProdArr] = useState(db)
  let navigate=useNavigate()

  const add = (p: ProductModel) => {
    setProdArr([...prodArr, p])
    navigate('/products')
  }

  const delet = (id: number) => {
    let arr = prodArr.filter(item => item.id !== Number(id))
    setProdArr([...arr])  
  }

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="products" element={<ProductList list={prodArr} />} />
          <Route path="about" element={<About />} />
          <Route path="manager" element={<Manager />}>
            <Route path="addProduct" element={<Add add={add} />} />
            <Route path="editProduct" element={<Edit list={prodArr} add={add} delet={delet}/>} />
            <Route path="deleteProduct" element={<Delete delet={delet} />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
