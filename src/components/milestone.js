import TopRight from '../img/Vector 23.png'
import BottomLeft from '../img/Vector 24.png'
import AirAsia from '../img/airasia.png'
import Ascend from '../img/ascend.png'
import Bk from '../img/bk.png'
import Accenture from '../img/accenture.png'
import Stl from '../img/image 4.png'
import Stl2 from '../img/image 5.png'
import Ysep from '../img/IMG_4817 1.png'
import Hr from '../img/image 6.png'
import Ptlng from '../img/image 7.png'
import Rocket from '../img/rocket.png'
import '../style/milestone.css'

const Milestone = ()=>{
    return(
        <div className='milestone_con'>
            <img src={TopRight} alt="top-right" className="top-right_mile"/>
            <div className="milestone-text-con">
                <p className='milstone_discover'>Discover us through JobSecret's roadmap</p>
                <h1 className='milestone_title'>Know <span>Our Journey</span></h1>
            </div>
            <div className='timeline_con'>
                <div className='timeline_col1'>
                    
                    <div className='timeline_box'>
                        <span>Started from the startup incubator, YSEP 2022 by Chula Tech Startup. We ended up as top 7 finalist.</span>
                        <img src={Ysep} alt="ysep" className='timeline_img'/>
                    </div>

                    <div className='timeline_box'>
                        <span>1st MVP with PTT LNG with 42 students and 6 of them were selected to 1:1 session.</span>
                        <img src={Ptlng} alt="Ptlng" className='timeline_img'/>
                    </div>
                    
                    <div className='timeline_box'>
                        <span>Top 12 finalist at Thailand HR tech 2023, startup pitch and presenting a booth there</span>
                        <img src={Hr} alt="Hr" className='timeline_img'/>
                    </div>

                    <div className='timeline_box'>
                        <span>Expand the number of sharing sessions, one-on-one sessions,  exclusive and creative events.</span>
                        <img src={Rocket} alt="Rocket" className='timeline_img'/>
                    </div>
                </div>
                <div className='timeline_col2'>
                    <div className='line_con'>
                        <div className='line_blue'>
                            <div className='line_dot'></div>
                            <div className='line_dot'></div>
                            <div className='line_dot'></div>
                            <div className='line_dot'></div>
                            <div className='line_dot'></div>
                            <div className='line_dot'></div>
                        </div>
                        <div className='line_grey'>
                        <div className='line_dot'></div>
                        </div>
                    </div>
                </div>
                <div className='timeline_col3'>
                <div className='timeline_box'>
                        <span>Then selected as Chulalongkorn University Representative to Startup Thailand League 2022 Regional Pitching.</span>
                        <img src={Stl} alt="ysep" className='timeline_img'/>
                    </div>

                    <div className='timeline_box'>
                        <span>Top 10 finalist at CU Startup Thailand League 2023 out of over 572 applicants</span>
                        <img src={Stl2} alt="Ptlng" className='timeline_img'/>
                    </div>
                    
                    <div className='timeline_box'>
                        <span>Organize the 'Resume Unveiled Workshop' featuring Human Resource and Talent Acquisition experts from AirAsia, KASIKORN LINE, Accenture, and Ascend Group.</span>
                        <div className='timeline_workshop_img_con'>
                            <img src={Ascend} alt="Ascend" className='timeline_workshop_img'/>
                            <img src={AirAsia} alt="AirAsia" className='timeline_workshop_img'/>
                            <img src={Accenture} alt="Accenture" className='timeline_workshop_img'/>
                            <img src={Bk} alt="Bk" className='timeline_workshop_img'/> 
                        </div>
                    </div>

                </div>
            </div>
            <img src={BottomLeft} alt="bottom-left" className="bottom-left_mile"/>
        </div>
    )
}

export default Milestone;