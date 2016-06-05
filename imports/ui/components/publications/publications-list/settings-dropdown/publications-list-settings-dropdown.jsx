import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class PublicationsListSettingsDropdown extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var element = ReactDOM.findDOMNode(this.refs['dropdown-trigger']);

        $(element).ready(function () {
            $(element).dropdown({
                    belowOrigin: true
                }
            );
        });
    }

    goToCreatePublicationRoute () {
        FlowRouter.go('createPublication');
    }

    render() {
        return (
            <div className="settings-button-wrapper">
                <a ref="dropdown-trigger" className="pointer" data-activates="settings-dropdown">
                    <i className="material-icons">settings</i>
                </a>
                <ul id="settings-dropdown" className="dropdown-content">
                    <li className="edit-publication-button">
                        <a onClick={this.goToCreatePublicationRoute} className="create-publication-button">
                            {TAPi18n.__('addNew')}
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}