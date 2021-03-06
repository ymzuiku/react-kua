//这里使用react-router对SAP应用进行跳转
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

import {View, tool} from '../index'; tool;

import {HelloWorld} from './HelloWorld'
import {LikeSketchWeb} from './LikeSketchWeb'
import {AddId} from './CanseqWeixin/AddId'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path='/' component={AddId}></Route>
		<Route path='/sk' component={LikeSketchWeb}></Route>
	</Router>
), document.getElementById('root'))