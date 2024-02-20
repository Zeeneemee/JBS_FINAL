import Activity from "../img/activity.png"
import '../style/activities.css'
const ActivitiesBanner = ()=>{
    return(
        <div className="activities">
            <div className="left-activities">
                <div className="laptop-con">
                    <img src={Activity} alt="activity"/>
                </div>
                
            </div>
            <div className="right-activities">
                <div className="past-session-con">
                    <h1>Past Session with PTT LNG</h1>
                    <div className="past-session-data">
                        
                    </div>
                    <div className="past-session-data">
                        <h4>57%</h4>
                        <p>of audience apply for a job at PTT LNG <span> ight after the end of sharing session. </span></p>
                    </div>
                    <div className="past-session-data">
                        <h4>91%</h4>
                        <p>of audience agree that insights and <span>information in the session are useful</span> <span>and satisfy with the session overall.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesBanner