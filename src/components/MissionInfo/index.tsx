import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissionInfo from './MissionInfo'
interface OwnProps {
    id: number;
  }
  


const MissionInfoContainer = ({id}:OwnProps) => {
    const { data, loading, error, refetch} = useLaunchMissionInfoQuery({
        variables: {
            id: String(id) 
        }
    })
    React.useEffect(() => {
        refetch();
      }, [id]);


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