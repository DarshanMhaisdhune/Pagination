import { useEffect, useState } from 'react'

import './App.css'
import Product from './assets/component/Product';

const Page_Size = 10;

function App() {
  const [product, setProduct] = useState([]);
  const[currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const jsonData = await data.json();
    setProduct(jsonData.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = product.length;
  const noOfPages = Math.ceil(totalProducts / Page_Size);
  const start = currentPage * Page_Size;
  const end = start + Page_Size;

  return !product.length ? (<h2>No Product found !</h2>) : (
    <>
      <h1>Pagination</h1>
      <div className='App'>

        {product.slice(start,end).map((p) => (
          <Product key={p.id} image={p.thumbnail} title={p.title} />
        ))}


      </div>
      <div className='Page-no'>
        {[...Array(noOfPages).keys()].map((num) => (<span 
        onClick={() => setCurrentPage(num)}
        className='page-number' key={num}>{num}</span>))}
      </div>
    </>
  )
}

export default App
