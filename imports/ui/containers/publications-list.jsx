import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Publications from '/imports/api/publications/publications.js';
import { PublicationsListPage } from '../pages/publications-list.jsx';

export const PublicationsListContainer = createContainer(() => {
    var handle = Meteor.subscribe('publications', {}, {});

    return {
        publications: handle.ready() ? Publications.find().fetch() : []
    };
}, PublicationsListPage);