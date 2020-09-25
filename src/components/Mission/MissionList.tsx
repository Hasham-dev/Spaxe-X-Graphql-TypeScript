import React from 'react';
import {MissionsInfoQuery} from './../../generated/graphql'

export interface OwnProps {
    handleIdChange: (newId: number) => void;
  }
  
  interface Props extends OwnProps{
    data:MissionsInfoQuery
}

const MissionList:React.FC<Props> = ({data,handleIdChange})=>{
    return(
        <div>
            <h3>Missions</h3>
            <ol>
            {data.launches?.map((launchObj,ind)=>{
                return <li onClick={()=> handleIdChange(ind!)} key={ind}>
                    {launchObj?.mission_name}
                </li>
            })}
            </ol>
        </div>
    )
}

export default MissionList;