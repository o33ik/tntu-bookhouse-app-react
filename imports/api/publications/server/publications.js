import { Meteor } from 'meteor/meteor';
import Publications from '/imports/api/publications/publications.js';
import Authors from '/imports/api/authors/authors.js';
import PublicationsPdf from '/imports/api/publications-pdf/publications-pds.js';
import Images from '/imports/api/images/images.js';

Meteor.publishComposite('publications', function (query, options) {
    return {
        find: function () {
            query = query || {};
            options = options || {};
            return Publications.find(query, options);
        },
        children: [
            {
                find: function (publication) {
                    return Authors.find({_id: {$in: publication.authorsIds}});
                }
            },
            {
                find: function (publication) {
                    return Images.find({_id: publication.imageId});
                }
            },
            {
                find: function (publication) {
                    return PublicationsPdf.find({_id: publication.pdfId});
                }
            }
        ]
    }
});