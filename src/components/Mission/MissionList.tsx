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
        <div className="list">
            <div className="card">
            <h3 >Space X Missions</h3>
            </div>
            <div className="list-group">
            {data.launches?.map((launchObj,ind)=>{
                return <button type="button" className="list-group-item list-group-item-action button" onClick={()=> handleIdChange(ind!)} key={ind}>
                    {launchObj?.mission_name}
                </button>
            })}
            </div>
        </div>
    )
}

export default MissionList;