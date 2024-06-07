import { useState, useEffect, useContext } from 'react';
import records from '../../assets/Products/Products.json';
import SearchBar from '../../components/SearchBar';
import '../Products/product.css'
import { SiAnydesk } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';


function Products() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [cartItems, setCartItems] = useState([]);

  const { session } = useContext(AuthContext)
  useEffect(() => {
    setProducts(records); 
  }, []); 

  const navigate = useNavigate();
  console.log(cartItems)
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleFavorites = (item) => {
    const existingIndex = favorites.findIndex((fav) => fav.name === item.name);
    const itemIndex = favorites.findIndex((fav) => fav.name === item.name);
    if (itemIndex !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(existingIndex, 1);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
      if (existingIndex === -1) {
    // Item not found in favorites, add it
    const updatedFavorites = [...favorites, item];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } else {
    // Item already exists in favorites, no need to update
  }
  };
 

  const handleSearch = (searchTerm) => {
    
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setProducts((prevProducts) =>
      prevProducts.map((p) => ({ ...p, inCart: p === product })));
      localStorage.setItem((product));
      navigate('/sales', { state: { selectedProduct: product } });
  };


  return (
 
    <div className="App">
      
     <button className='briggs' onClick={() => navigate('/home')}>Home</button> <SearchBar onSearch={handleSearch} /> 
     <p className='cart-bart'><b>Items in-cart</b>: {favorites.length}</p>
     <Link to={'/sales'}>View My Cart </Link>
      {filteredProducts.length > 1 ? (
        <div>
          <h2>Search Results</h2>
          {filteredProducts.map((product) => (
            <div key={product.name} className="box">
              <h2>{product.name}</h2> <button  className={product.inCart ? "cart-button-highlighted" : "cart-button"}
              onClick={handleAddToCart}>  <SiAnydesk className={favorites.some((fav) => fav.name === product.name) ? "favorite-icon favorite" : "favorite-icon"}
              onClick={() => handleFavorites(product)}/> </button>
              <h2>Price:{product.price}</h2> 
              <h2>In stock:{product.countInStock}</h2>
              <p>{product.description}</p>
              
            </div>
           
          ))}
          
        </div>
      ) : (
        <div>
          <h2>All Products</h2>
          {products.map((product) => (
            <div key={product.name} className="box">
              <h2>{product.name}</h2> <button onClick={handleAddToCart}>  <SiAnydesk className={favorites.some((fav) => fav.name === product.name) ? "favorite-icon favorite" : "favorite-icon"}
              onClick={() => handleFavorites(product)} /> </button>
              <h2>Price:{product.price}</h2> 
              <h2>In stock:{product.countInStock}</h2> 
              <p>{product.description}</p>
              
            </div>

          ))}
        </div>
      )}
      
    </div>
  );
}

export default Products;
