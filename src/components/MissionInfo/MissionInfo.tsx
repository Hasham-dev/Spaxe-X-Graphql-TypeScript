import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'


interface Props {
    data: LaunchMissionInfoQuery
}

const MissionInfo: React.FC<Props> = ({ data }) => {

    console.log(data);
    return (
        <div className="launchProfile">
            <h3>Mission Details</h3>
            {/* {JSON.stringify(data)} */}
            <span>{data.launch?.launch_success ? (
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


            {!!data.launch?.links && !!data.launch?.links.flickr_images && (
                <div className="image-list">
                    {data.launch?.links.flickr_images.map(image =>
                        image ? <img src={image} className="image" key={image} /> : null,
                    )}
                </div>
            )}
        </div>
    )
}

export default MissionInfo;