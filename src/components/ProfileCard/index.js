import React from 'react';
import './styles.css'

function ProfileCard(props) {
    return (
        <div class="col-md-4 my-4">
            <div class="card profile-card-5">
                <div class="card-img-block">
                    <img class="card-img-top" src={"images/" + props.officer.image} alt="Card image cap" />
                </div>
                <div class="card-body pt-0">
                    <h3 class="card-title">{props.officer.name}</h3>
                    <h5 class="card-title">{props.officer.position}</h5>
                    <p class="card-text">{props.officer.bio}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            {/* <p class="mt-3 w-100 float-left text-center"><strong>Profile</strong></p> */}
        </div>

    )
}

export default ProfileCard
