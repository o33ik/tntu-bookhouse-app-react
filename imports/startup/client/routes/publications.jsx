import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Layout } from '/imports/ui/layouts/main.jsx';
import { PublicationsListContainer }  from '/imports/ui/containers/publications-list.jsx';

var publicationsRoutes = FlowRouter.group({
    prefix: '/publications',
    name: 'publication'
});


publicationsRoutes.route('/', {
    name: 'publicationsList',
    action: function (params, query) {
        mount(Layout, {
            content: (<PublicationsListContainer/>)
        });
    }
});

publicationsRoutes.route('/:id/view', {
    name: 'viewPublication',
    action: function () {
        //BlazeLayout.render('mainLayout', {content: 'viewPublicationMainView'});
    }
});

publicationsRoutes.route('/create', {
    name: 'createPublication',
    action: function () {
        //BlazeLayout.render('mainLayout', {content: 'createPublicationMainView'});
    }
});

publicationsRoutes.route('/:id/edit', {
    name: 'editPublication',
    action: function () {
        //BlazeLayout.render('mainLayout', {content: 'editPublicationMainView'});
    }
});