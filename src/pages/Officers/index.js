import React, { Component } from 'react';
import './styles.css';
import officers from './officers.json';
import ProfileCard from '../../components/ProfileCard';


class Officers extends Component {
    state = {
        officers
    }

    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    {this.state.officers.map(officer => {
                        return (
                            <ProfileCard
                                officer={officer}
                            />

                        )

                    })}

                </div>
            </div>
        )
    }
}

export default Officers;
