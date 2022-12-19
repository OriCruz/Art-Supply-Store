const React = require('react');
const DefaultLayout = require('./Default');

class Rootpage extends React.Component{
    render(){
        return(
        <DefaultLayout title={'Welcome to the Route'}>
            <head>
                
            </head>
            <body>
                <div>
                    The Route is your friendly neighborhood art store<br />
                </div>
                
            </body>
        </DefaultLayout>
        )
    }
}

module.exports = Rootpage;