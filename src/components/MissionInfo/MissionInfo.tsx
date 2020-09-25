import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'


interface Props {
    data: LaunchMissionInfoQuery
}

const MissionInfo: React.FC<Props> = ({ data }) => {

    console.log(data);
    return (
        <div className="launchProfile ">
            <div className="container ">
                <div className="card ">
            <h1><u>Mission Details</u></h1>
            {/* {JSON.stringify(data)} */}
            <span className="status">Mission: {data.launch?.launch_success ? (
                <span className="Sucess">Sucess</span>
            ) : (
                    <span className="Failed">Failed</span>
                )}</span>
            <h1 className="title">
                {data.launch?.mission_name}
                {data.launch?.rocket &&
                    ` (${data.launch?.rocket.rocket_name} | ${data.launch?.rocket.rocket_type})`}
            </h1>
            <p className="description">{data.launch?.details}</p>
            </div>

            {!!data.launch?.links && !!data.launch?.links.flickr_images && (
                <div className="image-list">
                    {data.launch?.links.flickr_images.map(image =>
                        image ? <img src={image} className="image" key={image} alt={image}/> : null,
                    )}
                </div>
            )}
            </div>
        </div>
    )
}

export default MissionInfo;