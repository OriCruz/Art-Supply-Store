const React = require('react');
const DefaultLayout = require('./Default')

class New extends React.Component{
    render(){
        return(
            <DefaultLayout title={'New Product'}>
                <link rel="stylesheet" type="text/css" href="../css/new.css"/>
                
                <div className='form'>
                <form  action="/products" method='POST'>
                    Name: <input type="text" name="name"/> <br /> <br />
                    Image: <input type="text" name='img'/> <br /> <br />
                    Price: <input type="text" name='price'/> <br /> <br />
                    Description: <input type="text"  name='description'/> <br /> <br />
                    Quantity: <input type="number"  name='quantity' min='0' max='100'/> <br />
                    <input className='add' type="submit" name='' value="Add Product"/>
                </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;