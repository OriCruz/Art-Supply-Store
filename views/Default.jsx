const React = require('react');

class DefaultLayout extends React.Component{
    render(){
        return(
            <html>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" type="text/css" href="../css/style.css"/>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                <div className='topNav'>
                    
                    <img src="/logo.png" className='logo' alt="logo"/>
                    <ul>
                     <li> <a className='home' href="/"> Home</a> </li>
                    <li> <a className='list' href="/products/">Shop</a> </li>
                    <li><a className='active' href="/products/new"> Add a new Item</a> </li>
                    </ul> 
                </div>
                <div className='header'>
                    <h1>{this.props.title}</h1>
                </div>
                    {this.props.children}
                
                </body>
            </html>
        );
    };
};

module.exports = DefaultLayout;