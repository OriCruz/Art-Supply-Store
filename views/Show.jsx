const React = require('react');
const DefaultLayout = require('./Default');

class Show extends React.Component{
    render(){
        const {items} = this.props;
        return(
            <DefaultLayout title={items.name}>
                {items.name} <br />
                <img src={items.img} width='40%' alt={items.name}/> <br /> 
                Price : ${items.price} <br />
                <a href="/products"><input type="button" value={`Return to products`}/></a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;