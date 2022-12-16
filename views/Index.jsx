const React = require('react');
const DefaultLayout = require('./Default');

class Index extends React.Component{
    render(){
        const {items}=this.props;
        return(
            <DefaultLayout title={"Supply Index Page"}>
                <link rel="stylesheet" type="text/css" href="../css/style.css"/>
                <nav>
                    <a href="/products/new"> Add a new Item</a> | 
                    <a href="/"> Home</a>
                </nav>
                <ul>
                    {items.map((item)=>{
                        return(
                        <li>
                            <a href={`/products/${item.id}`}>{item.name}</a> 
                             <br />
                        </li>
                        );
                    })}
                </ul>  
            </DefaultLayout>
        );
    }
}

module.exports = Index;