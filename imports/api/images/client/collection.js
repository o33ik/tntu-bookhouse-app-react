import { FS } from 'meteor/cfs:base-package';

var imagesDropboxStore = new FS.Store.Dropbox("images");

export default new FS.Collection("images", {
    stores: [imagesDropboxStore],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});