import Authors from '../authors.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('authors', function (query, options) {
    query = query || {};
    options = options || {};
    return Authors.find(query, options);
});