const React = require('react');

class Rootpage extends React.Component{
    render(){
        return(
        <html>
            <head>
                <title>Art Supply Store</title>
            </head>
            <body>
                <h1>Welcome to the Art Supply Store!</h1>
                Here you will find all you need for your next artistic poroject! <br />
                Please click <a href="/products">here</a>  to see our select items and more. 
            </body>
        </html>
        )
    }
}

module.exports = Rootpage;