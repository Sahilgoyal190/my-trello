import React from 'react';
import Layout from '../layout/layout';
import Card from '../../presentation/card/card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDashboardData } from '../../../actions/dashboard';

class Dashboard extends React.Component {


    componentDidMount() {
        this.props.getDashboardDataAction();
    }

    render() {
        return (
            <Layout>
                {
                    this.props.data.map((d, i) => {
                        return <Card data={d} key={i} />
                    })
                }
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.dashboard.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDashboardDataAction: bindActionCreators(getDashboardData, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
