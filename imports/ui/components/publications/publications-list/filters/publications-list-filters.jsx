import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FilterDropDown } from './filter-item.jsx';

export class PublicationsListFilter extends Component {
    constructor() {
        super();

        this.state = {
            dropdowns: [
                {
                    id: 'sortBy',
                    items: [{
                        id: 'createdAt',
                        labelKey: 'publishDate'
                    }, {
                        id: 'title',
                        labelKey: 'bookTitle'
                    }, {
                        id: 'price',
                        labelKey: 'bookPrice'
                    }, {
                        id: 'pagesNumber',
                        labelKey: 'bookPagesNumber'
                    }, {
                        id: 'year',
                        labelKey: 'bookYear'
                    }]
                },
                {
                    id: 'sortDirection',
                    items: [{
                        id: 'asc',
                        labelKey: 'sortAsc'
                    }, {
                        id: 'desc',
                        labelKey: 'sortDesc'
                    }]
                },
                {
                    id: 'availability',
                    items: [{
                        id: 'all',
                        labelKey: 'availabilityAll'
                    }, {
                        id: 'hidden',
                        labelKey: 'availabilityHidden'
                    }, {
                        id: 'available',
                        labelKey: 'availabilityAvailable'
                    }]
                }
            ]
        };
    }

    render() {
        return (
            <div className="center-align">
                <div className="row">
                    {
                        this.state.dropdowns.map((dropdown) => {
                            return <FilterDropDown key={dropdown.id} id={dropdown.id}
                                                   labelKey={dropdown.labelKey} items={dropdown.items}/>
                        })
                    }
                </div>
            </div>
        )
    }
}