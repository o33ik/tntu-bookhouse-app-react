import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class FilterDropDown extends Component {
    constructor() {
        super();

        this.changeRouterQueryParam = this.changeRouterQueryParam.bind(this);
    }

    componentDidMount() {
        var element = ReactDOM.findDOMNode(this.refs['dropdown-trigger']);

        $(element).ready(function () {
            $(element).dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    hover: true,
                    gutter: 0,
                    belowOrigin: true
                }
            );
        });
    }

    changeRouterQueryParam(event) {
        var queryKey = this.props.id;
        var value = event.currentTarget.id;

        var params = {};
        params[queryKey] = value;
        FlowRouter.setQueryParams(params);
    }

    render() {
        return (
            <span>
                <a ref="dropdown-trigger" className="dropdown-button btn waves-light btn-flat"
                   data-activates={this.props.id}>{TAPi18n.__(this.props.id)}</a>

                <ul id={this.props.id} className="dropdown-content">
                    {
                        this.props.items.map((item) => {
                            return <li key={item.id}>
                                <a onClick={this.changeRouterQueryParam}
                                   id={item.id}>{TAPi18n.__(item.labelKey)}</a>
                            </li>;
                        })
                    }
                </ul>
            </span>
        )
    }
}