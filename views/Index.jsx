const React = require('react');
const DefaultLayout = require('./Default');

class Index extends React.Component{
    render(){
        const {items}=this.props;
        return(
            <DefaultLayout title={"Supply Index Page"}>
                <nav>
                    <a href="/products/new"> Add a new Item</a>
                </nav>
                <ul>
                    {items.map((item)=>{
                        return(
                        <li>
                            <a href={`/products/${product.id}`}>{product.name}</a> 
                            {' '} is {product.description} <br />
                        </li>
                        );
                    })}
                </ul>  
            </DefaultLayout>
        );
    }
}

module.exports = Index;