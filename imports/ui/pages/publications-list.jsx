import React, { Component } from 'react';
import { PublicationsList } from '../components/publications/publications-list/publications-list.jsx';

export class PublicationsListPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <PublicationsList publications={this.props.publications} showLoadMoreButton={true} query={{}}/>
        )
    }
}