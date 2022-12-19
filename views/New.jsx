const React = require('react');
const DefaultLayout = require('./Default')

class New extends React.Component{
    render(){
        return(
            <DefaultLayout>
                <h1>Add New Product Page</h1>
                <form action="/products" method='POST'>
                    Name: <input type="text" name="name"/> <br /> <br />
                    Image: <input type="text" name='img'/> <br /> <br />
                    Price: <input type="text" name='price'/> <br /> <br />
                    Description: <input type="text"  name='description'/> <br /> <br />
                    Quantity: <input type="number"  name='quantity' min='0' max='100'/>
                    <input type="submit" name='' value="Add Product"/>
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;