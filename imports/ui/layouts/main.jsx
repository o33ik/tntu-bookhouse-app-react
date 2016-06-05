import React, { Component } from 'react';

export class Layout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    should be nav bar
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="container">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}