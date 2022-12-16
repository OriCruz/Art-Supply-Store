const React = require('react');
const DefaultLayout = require('./Default');

class Show extends React.Component{
    render(){
        const {items} = this.props;
        const showBuyBtn =()=>{
            if(items.quantity>0){
               return( <form action={`/products/${items.id}?_method=PUT`} method="POST">
                     <input type="submit" name="quantity" value="BUY" /> <br />
                  </form> 
                  );  
            }
            else{
                return(<div>Out Of Stock</div>);
            }
            
        } 
        return(
            <DefaultLayout title={items.name}>
                <nav><a href="/products"><input type="button" value={`Return to products`}/></a>
                </nav>
                {items.name} <br />
                <img src={items.img} width='40%' alt={items.name}/> <br /> 
                Price : ${items.price} <br />
                Description: {items.description} <br /> 
                Quantity: {items.quantity} <br />
                {showBuyBtn()}
                             
                {/* Buttons */}
                
                <a href={`/products/${items._id}/Edit`}><input style={{color:'red'}} type="button" value="Edit"/></a>
                             
                <form action={`/products/${items._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete"/>
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Show;