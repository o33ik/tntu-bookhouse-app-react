import { ListItem } from './list-item/list-item.jsx';
import { PublicationsListSettingsDropdown } from './settings-dropdown/publications-list-settings-dropdown.jsx';
import { PublicationsListFilter } from './filters/publications-list-filters.jsx';
import React, { Component } from 'react';
import canUser from '/imports/api/lib/can-user.js';


export class PublicationsList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="publications-list-wrapper">
                {
                    canUser('createPublication') ?
                        <PublicationsListSettingsDropdown/>
                        : ''
                }

                <div className="center-align">
                    <h4>{TAPi18n.__('newPublications')}</h4>
                </div>

                <PublicationsListFilter/>

                <div className="row publications-list">
                    {
                        this.props.publications.map((publication) => {
                            return <span key={publication._id} >
                                <ListItem publication={publication}/>
                                <div className="divider"></div>
                            </span>
                        })
                    }

                    {
                        this.props.showLoadMoreButton ?
                            <div className="center-align">
                                <button className="btn load-more-button">{TAPi18n.__('loadMore')}</button>
                            </div>
                            : ''
                    }
                </div>
            </div>
        )
    }
}