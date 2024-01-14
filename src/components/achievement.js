import '../style/achievement.css'
const Achievement = ()=>{
    return(
        <div className="achievemnt_con">
            <div className="achievemnt_text_con">
                <div className="achievement_text">
                    <p>Check out JobSecret highlights accomplishment</p>
                    <span >Our <span className="our_achievement">Achievement</span></span>
                </div>
            </div>
            <div className="achievement_award_con">
                <div className="achievement_award">
                    <img src= {require('../img/award/image 4.png')} alt='STL_WILDCARD'/>
                    <span className='award_head'>CU Representative</span>
                    <p>Startup Thailand League 2022 Regional Pitching (Wild Card)</p>
                </div>
                <div className="achievement_award">
                    <img src= {require('../img/award/IMG_4817 1.png')} alt='Top7'/>
                    <span className='award_head'>Top 7</span>
                    <p>Young Startup Entrepreneur Program 2022</p>
                </div>
                <div className="achievement_award">
                    <img src= {require('../img/award/image 5.png')} alt='Top10'/>
                    <span className='award_head'>Top 10</span>
                    <p>CU Startup Thailand League</p>
                </div>
                <div className="achievement_award">
                    <img src= {require('../img/award/image 6.png')} alt='Top12'/>
                    <span className='award_head'>Top 12</span>
                    <p>Thailand HR Tech 2023 Startup Showcase</p>
                </div>
            </div>
        </div>
    )
}

export default Achievement