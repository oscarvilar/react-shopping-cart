import React, { useState, useEffect } from 'react'
import productsData from '../productsData';
import { Link } from "react-router-dom";
import AddToCartBtn from "../components/AddToCartBtn/AddToCartBtn";
import ReactPaginate from 'react-paginate';
import '../index.css'

const Products = () => {

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0)


  const getData = async () => {
    const data = productsData;
    const slice = data.slice(offset, offset + perPage)
    console.log(slice);
    const postData = slice.map(product => <div key={product.id} className="group relative">
      <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h2 className="text-lg text-white">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h2>
                </div>
                <p className="text-lg font-medium text-white">{product.price}€</p>
              </div>
              <AddToCartBtn productData = {product}/>
    </div>)
    setData(postData)
    setPageCount(Math.ceil(data.length / perPage))
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

  useEffect(() => {
    getData()
  }, [offset])
  return (
    <>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">Descubres nuestros productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data}
        </div>
       <ReactPaginate
                    previousLabel={"←"}
                    nextLabel={"→"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      </div>

    </>
  );
};

export default Products;
