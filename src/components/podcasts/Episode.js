import React, { useEffect } from 'react'

const Episode = ({ match }) => {
    
    useEffect(() => {
        // This is where you call a function that matches the season id and episode id to an episode that is called in state
        /*
            // this function would not live here but need to be called
            getEpisodeData(season_id, episode_id){
                return episode specific data;
            }
        */
        console.log(match.params.season_id);
        console.log(match.params.episode_id);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <p>This is from Season : {match.params.season_id}</p>
            <p>This is from Episode : {match.params.episode_id}</p>
        </div>
    )
}

export default Episode
