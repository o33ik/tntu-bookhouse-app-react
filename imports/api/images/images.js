import { FS } from 'meteor/cfs:base-package';
import { Meteor } from 'meteor/meteor';

var imagesDropboxStore = new FS.Store.Dropbox("images", {
    key: Meteor.settings.private.DROPBOX.key,
    secret: Meteor.settings.private.DROPBOX.secret,
    token: Meteor.settings.private.DROPBOX.token
});

var collection = new FS.Collection("images", {
    stores: [imagesDropboxStore],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

collection.allow({
    download: function () {
        return true;
    }
});

export default collection;