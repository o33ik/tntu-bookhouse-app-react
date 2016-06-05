import { FS } from 'meteor/cfs:base-package';
import { Meteor } from 'meteor/meteor';

var pdfDropboxStore = new FS.Store.Dropbox("publications-pdf", {
    key: Meteor.settings.private.DROPBOX.key,
    secret: Meteor.settings.private.DROPBOX.secret,
    token: Meteor.settings.private.DROPBOX.token
});

var collection = new FS.Collection("publications-pdf", {
    stores: [pdfDropboxStore],
    filter: {
        allow: {
            contentTypes: ['application/pdf']
        }
    }
});

collection.allow({
    download: function () {
        return true;
    }
});

export default collection;