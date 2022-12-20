const React = require('react');
const DefaultLayout = require('./Default');

class Index extends React.Component{
    render(){
        const {items}=this.props;
        return(
            <DefaultLayout title={"Shop"}>
                <link rel="stylesheet" type="text/css" href="../css/index.css"/>
                <ul className='list'>
                    {items.map((item)=>{
                        return(
                        <div className='itemList'>
                            <div className='itemName'>
                            <h2>{item.name}</h2> </div>
                            {/* image with a link to the show page (how cool is this!!) */}
                            <div className='itemImg'>
                            <a href={`/products/${item.id}`}><img src={item.img} width='220px' height='220px' alt={item.name}/></a>
                            </div>
                             <br />
                             
                        </div>
                        );
                    })}
                </ul>  
            </DefaultLayout>
        );
    }
}

module.exports = Index;