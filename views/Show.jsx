const React = require('react');
const DefaultLayout = require('./Default');

class Show extends React.Component{
    render(){
        const {items} = this.props;
        const showBuyBtn =()=>{
            if(items.quantity>0){
               return( <form action={`/products/${items.id}?_method=PUT`} method="POST">
                     <input className='buy' type="submit" name="quantity" value="BUY" /> <br />
                  </form> 
                  );  
            }
            else{
                return(<div>Out Of Stock</div>);
            }
            
        } 
        return(
            <DefaultLayout title={items.name}>
                <link rel="stylesheet" type="text/css" href="../css/show.css"/>
                <nav className='return'><a href="/products"><input type="button" value={`Return to products`}/></a>
                </nav>
                
                <div className='container'>
                    
                <img src={items.img}  alt={items.name} width='300px' height='300px'/> <br /> 
                <div className='info'>
                Price : ${items.price} <br />
                Description: {items.description} <br /> 
                Quantity: {items.quantity} <br />
                </div>
                <div className='buttons'>
                {showBuyBtn()}
                             
                {/* Buttons */}
                
                <a href={`/products/${items._id}/edit`}><input className='edit' type="button" value="EDIT"/></a>
                             
                <form action={`/products/${items._id}?_method=DELETE`} method="POST" >
                <input className='delete' type="submit" value="DELETE"/>
                </form></div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;