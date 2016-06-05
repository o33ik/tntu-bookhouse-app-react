import React, { Component } from 'react';
import Images from '/imports/api/images/client/collection.js';
import PublicationsPdf from '/imports/api/publications-pdf/client/collection.js';
//import CookieBucket from '/client/bucket-methods.js';
import { AuthorFilterable } from '/imports/ui/components/common/authors-filterable.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class ListItem extends Component {
    constructor() {
        super();

        this.state = {
            buyButtonIsActive: true
        };

        this.goToPublicationView = this.goToPublicationView.bind(this);
        this.addToTheBucket = this.addToTheBucket.bind(this);
    }

    getPhotoUrl() {
        var doc = Images.findOne(this.props.publication.imageId);
        return doc ? doc.url() : null;
    }

    getPublPdfUrl() {
        var doc = PublicationsPdf.findOne(this.props.publication.pdfId);
        return doc ? doc.url() : null;
    }

    goToPublicationView() {
        FlowRouter.go('viewPublication', {id: this.props.publication._id});
    }

    addToTheBucket() {
        if (this.state.buyButtonIsActive) {
            this.setState({buyButtonIsActive: false});
            CookieBucket.addItemToBucket(this.props.publication._id);
            setTimeout(() => {
                this.setState({buyButtonIsActive: true});
            }, 3000);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s3 publication-image-wrapper">
                    <img className="publication-image" src={this.getPhotoUrl()}/>
                </div>
                <div className="col s9">
                    <div className="no-margin-bottom">
                        <p onClick={this.goToPublicationView} className="no-margin-bottom publication-title pointer
                underline-hover">{this.props.publication.title}, {this.props.publication.year}</p>

                        <p class="no-margin-bottom">
                            {
                                this.props.publication.authorsIds.map((id)=> {
                                    return (
                                        <AuthorFilterable key={id} id={id}/>
                                    )
                                })
                            }
                        </p>
                    </div>

                    <div className="no-margin-bottom">
                        <p className="no-margin-bottom">{this.props.publication.pagesNumber} {TAPi18n.__('pages')}</p>
                    </div>

                    {
                        this.props.description ?
                            <div className="no-margin-bottom">
                                <p className="no-margin-bottom">
                                    {this.props.publication.description}
                                </p>
                            </div>
                            : ''
                    }

                    <div className="no-margin-bottom">
                        <p className="no-margin-bottom">
                            <a className="underline-hover"
                               href={this.getPublPdfUrl()}
                               target="_blank">{TAPi18n.__('bookPdfView')}</a>
                        </p>
                    </div>

                    <div className="no-margin-bottom">
                        <div className="col s4">
                            <p>{TAPi18n.__('isbn')} {this.props.publication.isbn}</p>
                        </div>
                        <div className="col s4">
                            <p>{TAPi18n.__('bbk')} {this.props.publication.bbk}</p>
                        </div>
                        <div className="col s4">
                            <p>{TAPi18n.__('udc')} {this.props.publication.udc}</p>
                        </div>
                    </div>

                    {
                        !this.props.publication.isHidden ?
                            <div className="no-margin-bottom">
                                <a onClick={this.addToTheBucket} className="btn waves-light"
                                        disabled={!this.state.buyButtonIsActive}>
                                    <i class="left">shopping_cart</i>
                                    {TAPi18n.__('buy')}
                                </a>
                                <a>      {TAPi18n.__('bookPrice')} {this.props.publication.price} {TAPi18n.__('UAH')}</a>
                            </div> : ''
                    }
                </div>
            </div>
        )
    }
}