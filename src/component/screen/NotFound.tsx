import React from 'react';
import { UnDrawPageNotFound } from '../../asset'
export default class NotFound extends React.Component<any, any>{

    componentDidMount() {
        document.title = 'Page Not Found'
    }

    componentDidUpdate() {
        document.title = 'Page Not Found'
    }

    render() {
        return (
            <div className="not_found">
                <img src={UnDrawPageNotFound} alt="Page Not Found" />
                <p>Page Not Found</p>
            </div>
        );
    }
}
