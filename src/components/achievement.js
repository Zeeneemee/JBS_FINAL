import '../style/achievement.css'
import col1 from '../img/achievement/Rectangle 158.png';
import col2 from '../img/achievement/Frame 121.png';
import col3 from '../img/achievement/Frame 120.png';
import img1 from '../img/events/image 1.png';
import img2 from '../img/events/image 11.png';
import img3 from '../img/events/image 10.png';
import img4 from '../img/events/image 12.png';
import img5 from '../img/events/IMG_4817 1.png';
import img6 from '../img/events/484205896718352741 1.png';
import img7 from '../img/events/image 14.png';


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
            <div className="achievement_pic_con">
                <div className="achievement_pic_col1">
                   <img src={col1} alt='col1'/>
                </div>
                <div className="achievement_pic_col2">
                   <img src={col2} alt='col2'/>
                </div>
                <div className="achievement_pic_col3">
                   <img src={col3} alt='col3'/>
                </div>
            </div>
            <div className='achievement_events_con'>
                <img src={img1} alt='event1'/>
                <img src={img2} alt='event2'/> 
                <img src={img3} alt='event3'/>
                <img src={img4} alt='event4'/>
                <img src={img5} alt='event5'/>
                <img src={img6} alt= 'event6'/>
                <img src={img7} alt='event7'/> 
            </div>
        </div>
    )
}

export default Achievement