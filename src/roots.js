import React, { Fragment } from 'react';
import Board from './component/container/board';
import Dashboard from './component/container/dashboard/dashboard';
import { Route, } from 'react-router-dom'

const Roots = (
    <Fragment>
        <Route exact path="/" component={Dashboard} />
        <Route path="/board/:board_id" component={Board} />
    </Fragment>
)

export default Roots;
