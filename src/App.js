import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import PersonCard from './components/PersonCard'


function App() {
  const [product, setProduct] = useState({
      name: 'react',
      price : 20,
      productBy : 'FB'
  })

  const makePayment = token => {
      const body = {
        token,
        product
      }
      const headers = {
        "Content-Type": "application/json"
      }

      return fetch('http://localhost:8000/Payment', {
        method : 'POST',
        headers,
        body : JSON.stringify(body)
      })
      .then(response => {
        console.log('RESPONSE : ', response);
        const {status} = response;
        console.log('STATUS : ', status)
      })
      .catch(error => console.log(error))
  }
  return (
    <div className="App">
      

      <div className="container">
      <div className="row my-4">
          <div className="col-sm-6">
            <div className="card p-4 bg-Light shadow">
              <div className="card-body">
                <h5 className="card-title">Your Subtotal price is {product.price} $</h5>
                <p className="card-text">Order Now </p>
                

                <StripeCheckout 
                  token={makePayment} 
                  //stripeKey ="pk_test_51J4QieSFWEOClMCa1xTCOYkyvZYH0wya2k80ouYFpVCiVWxgDXoew2XZg4pLljP9xYtPStwrLN52gz3eNaMZLGO400mM8GdI5k"
                  stripeKey={process.env.REACT_APP_KEY} 
                  name={`Pay Here ${product.price}$`}
                  amount={product.price * 100} 
                  shippingAddress
                  billingAddress
                  >
                      
                 
                      <a href="#" className="btn btn-primary">Buy item {product.price} $</a>
                 </StripeCheckout>
                  
              </div>
            </div>
          </div> 
          
          <div className="col-sm-6">
                <PersonCard/>
          </div>


      </div>
      </div>
        
        {/*Publishable Key Here*/}
        

   
    </div>
  );
}

export default App;
