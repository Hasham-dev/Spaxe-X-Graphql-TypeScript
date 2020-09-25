import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissionInfo from './MissionInfo'
const MissionInfoContainer = () => {
    const { data, loading, error } = useLaunchMissionInfoQuery({
        variables: {
            id: "25"
        }
    })
    if (loading)
        return <h2>Loading...</h2>
    if (error || !data)
        return <h1>Error..</h1>
    console.log(data);
    return (
        <MissionInfo data={data} />
    )
}

export default MissionInfoContainer;