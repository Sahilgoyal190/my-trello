import React, { Fragment } from 'react';
import Header from '../header/index'
import Footer from '../../presentation/footer/index'
class Layout extends React.Component {

    render() {
        return(
            <Fragment>
                <Header />
                {this.props.children}
                {/* <Footer /> */}
            </Fragment>
        )
    }
}

export default Layout;