import './Main.css'
import PropTypes from 'prop-types'; 
import{ useState } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
function Main({ addToCart, removeFromCart }) {
    const [cartItems, setCartItems] = useState([]);
    const cardsData = [
        { id: 1, title: 'Flower Vase', description: '$40.00 - $80.00', imageUrl: img1,select:"View options",star:"&#9733;&#9733;&#9733;&#9733;&#9733;"},
        { id: 2, title: 'Wall Decors', description: '$$20.00 $18.00', imageUrl: img2 ,select:"Add to cart",star:"&#9733;&#9733;&#9733;&#9733;&#9733;"},
        { id: 3, title: 'Bottle Decors', description: '$50.00 $25.00' ,imageUrl: img3 ,select:"Add to cart",star:"&#9733;&#9733;&#9733;&#9733;&#9734;"},
        { id: 4, title: 'Plants', description: '$40.00' ,imageUrl:img4,select:"Add to cart",star:"&#9733;&#9733;&#9733;&#9733;&#9734;" },
        { id: 5, title: 'Flower Vase', description: '$50.00 $25.00', imageUrl: img5,select:"Add to cart",star:"&#9733;&#9733;&#9733;&#9733;&#9733;"},
        { id: 6, title: 'Plants', description: '$120.00 - $280.00', imageUrl: img6 ,select:"View options",star:"&#9733;&#9733;&#9733;&#9733;&#9734;"},
        { id: 7, title: 'Table', description: '$20.00 $18.00', imageUrl: img7,select:"Add to cart",star:"&#9733;&#9733;&#9733;&#9733;&#9734;" },
        { id: 8, title: 'Basket', description: '$40.00', imageUrl: img8,select:"Add to cart",star:"&#9733;&#9733;&#9733;&#9733;&#9733;" },
    ];
    const handleButtonClick = (id) => {
        if (cartItems.includes(id)) {
          removeFromCart(id);
          setCartItems(cartItems.filter(itemId => itemId !== id));
        } else {
          addToCart(id);
          setCartItems([...cartItems, id]);
        }
      };
    return (
        
        <div>
            <div className="card-container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {cardsData.map(card => (
                        <div key={card.id} className="col mb-4">
                            <div className="card flex-grow-0">
                            <img src={card.imageUrl} className="card-img-top" alt="Card Image" />
                                    <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{card.title}</h5>
                                    {card.star && <div className="star-rating" dangerouslySetInnerHTML={{ __html: card.star }}></div>}

                                    <p className="card-text">{card.description}</p>
                                    <div className="mt-auto text-center">
                                    <button onClick={() => handleButtonClick(card.id)} className="btn"style={{ backgroundColor: cartItems.includes(card.id) ? 'red' : 'green' }}
>{cartItems.includes(card.id) ? "Remove from Cart" : "Add to Cart"}</button>
                                    
                                    {/*<a href="#" className="btn btn-primary ">{card.select}</a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))}
                        </div>
            
        </div>
        <div>
            
        </div>
        
        </div>
    );
 }
 Main.propTypes = {
    addToCart: PropTypes.func.isRequired, 
    removeFromCart: PropTypes.func.isRequired 
  };

 export default Main