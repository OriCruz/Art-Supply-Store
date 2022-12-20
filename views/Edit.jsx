const React = require('react');
const DefaultLayout = require('./Default');

class Edit extends React.Component{
    render(){
        return(
            <DefaultLayout title='Edit Page'>
                <link rel="stylesheet" type="text/css" href="/css/style.css"/>
                <link rel="stylesheet" type="text/css" href="/css/new.css"/>
            <div className='form'>
               <form action={`/products/${this.   props.item._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name='name' defaultValue={this.props.item.name}/> <br /><br />
                    Image: <input type="text" name='img' defaultValue={this.props.item.img}/><br /> <br />
                    Price: <input type="text" name='price' defaultValue={this.props.item.price}/>
                    <br />
                    <br />
                    Description: <input type="text" name='descripton' defaultValue={this.props.item.description}/> <br /> <br />
                    Quantity: <input type="number" name='quantity' defaultValue={this.props.item.quantity} min='0' max='100'/> <br /> <br />
                    {/* min and max in quantity so that the number input stays within a range*/}
                    <input type="submit" className='add'value='Submit Changes'/>
               </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;