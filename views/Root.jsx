const React = require('react');
const DefaultLayout = require('./Default');

class Rootpage extends React.Component{
    render(){
        return(
        <DefaultLayout title={'Welcome to the Route'} >
            <link rel="stylesheet" type="text/css" href="../css/root.css"/>
                <div>
                    The Route is your friendly neighborhood art store, we have all you need for your next project. Unlike other stores, if we don't have a certain product you need, just click on add a new item in the nav bar and it will be added to our stock!<br/>
                    

                </div>
                <img className='homeLogo' src="/logo.png" alt="big-logo"/>
        </DefaultLayout>
        )
    }
}

module.exports = Rootpage;