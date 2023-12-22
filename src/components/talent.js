import TopRight from '../img/Vector 23.png'
import BottomLeft from '../img/Vector 24.png'
import Mail from '../img/mail.png'
import Pen from '../img/pen.png'
import Rocket from '../img/rocket.png'
import '../style/talent.css'
const Talent = () => {
    return (
        <div className="talent-parent">
            <div className='talent-con'>
                <img src={TopRight} alt="top-right" className="top-right"/>
                    <div className="talent-text-con">
                        <p>Steps to reach the potential employees</p>
                        <h1>Connect <span>To Talent</span></h1>
                        <div className='talent-rank-con'>
                            
                             <div className='talent-rank first'>
                                <img src={Mail} alt='mail'/>
                                <p>Enter the recruit and contact information in the provided field below.</p>
                                <h1>1</h1>
                            </div>
                            
                            <div className='talent-rank second'>
                                <img src={Pen} alt='pen'/>
                                <p>We will reach out to you via email to schedule a meeting in preparation for the recruitment service session.</p>
                                <h1>2</h1>
                            </div>
                            
                            <div className='talent-rank third'>
                                <img src={Rocket} alt='rocket'/>
                                <p>Drive the productivity and efficiency of the company with passionate Gen Z</p>
                                <h1>3</h1>
                            </div> 
                        </div>
                    <img src={BottomLeft} alt="bottom-left" className="bottom-left"/>
                </div>
            
            </div>
        </div>
    )
};
export default Talent;  