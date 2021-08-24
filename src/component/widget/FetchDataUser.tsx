import React from "react";
import { UnDrawNoData } from "../../asset";

export default class FetchDataUser extends React.Component {

    componentDidMount() {
        document.title = 'Loading...'
    }

    render(): JSX.Element {
        return (
            <div className='fetch_data_user'>
                <div className='fetch_data_user_box'>
                    <img src={UnDrawNoData} alt='No Data' />
                    <div className='fetch_data_user_process'>
                        <div className='fetch_data_user_process_nested' />
                    </div>
                </div>
            </div>
        );
    }
}