import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Components/Product";
import Spinner from "../Components/Spinner";
import { fetchCategory, fetchProduct } from "../Redux/productSlice";

const Home = () => {

  const dispatch = useDispatch();


  const products = useSelector((state)=> state?.product?.data)
  const categories = useSelector((state)=> state?.product?.category)

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilter = (category)=>{
    setSelectedCategory(category)
    
  }

  useEffect(() => {
    
    dispatch(fetchProduct());
    dispatch(fetchCategory());
   
  }, []);
  
  // console.log("product home", product);

  const filteredProducts = selectedCategory ? 
          products.filter((product) => product.category === selectedCategory)
          : products;

  return (
  <div>
      {/* Category nav */}
      <div className="">
      <nav className="bg-green-700 text-white md:p-4 p-2 rounded-sm shadow-md" >
      <div className="container mx-auto hidden md:block">

        <ul className="flex md:space-x-28 space-x-10 items-center justify-center flex-wrap ">
          {categories.map((category, i) => (
            <li key={i} className=" group">
              <button onClick={()=> handleFilter(category)} className={`font-medium md:text-xl text-lg hover:text-slate-100 focus:outline-none transition-all duration-300" ${selectedCategory === category ? " text-slate-300 scale-110" : "text-slate-100"}`}>
                {category}
              </button>
              
            </li>
          ))}
        </ul>

      </div>

      <div className="md:hidden flex items-center justify-start">
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={(e)=> handleFilter(e.target.value)}
        className="bg-green-400 py-1 px-2 rounded-lg font-semibold text-xl"
      >
        <option value="">Select Category</option>
        {categories.map((category,i) => (
          <option key={i} value={category} className="text-black">
            {category}
          </option>
        ))}
      </select>
    </div>


    </nav>
      </div>
            {/* Product cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {filteredProducts.map((p) => (
              <Product key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
  </div>
  );
};

export default Home;
