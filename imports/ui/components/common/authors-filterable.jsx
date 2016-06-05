import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Authors from '/imports/api/authors/authors.js';


export class AuthorFilterable extends Component {
    constructor() {
        super();

        this.filterPublcationsByAuthor = this.filterPublcationsByAuthor.bind(this);
    }

    authorNameById() {
        var author = Authors.findOne(this.props.id);
        return author ? author.name : null;
    }

    filterPublcationsByAuthor () {
        FlowRouter.go('publicationsList');
        FlowRouter.setQueryParams({authorId: this.props.id})
    }

    render() {
        return (
            <a onClick={this.filterPublcationsByAuthor} className="pointer underline-hover">{this.authorNameById()}</a>
        )
    }
}