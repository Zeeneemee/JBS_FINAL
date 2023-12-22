import Profile from '../img/service/Frame 55.png'
import Sharing from '../img/service/Frame 68.png'
import Ono from '../img/service/Frame 69.png'
import offer from '../img/service/Frame 70.png'
import Talent from '../img/service/Frame 71.png'
import Recruitment from '../img/service/Frame 72.png'
import '../style/ourservice.css'
const Services = ()=>{
    return(
        <article>
            <div className="services-con">

            <h1>Our Services</h1>

            <div className='row'>
                <div className='service'>
                    <img src={Profile} alt='profile'/>
                    <div className='service-text'>
                        <h1>Standardized Student Profile</h1>
                        <p>By utilizing Jobsecret's standardized
                        resume templates, it ensures a more equitable 
                        evaluation of student profiles.</p>
                    </div>
                    
                </div>
{/* 2 */}
                <div className='service'>
                    <img src={Sharing} alt='sharing'/>
                    <div className='service-text'>
                        <h1>Sharing Session</h1>
                        <p>A platform for industry experts or experienced 
                         employees within a company
                        to share their working experiences.</p>
                    </div>
                </div>
{/* 3 */}
                <div className='service'>
                <img src={Ono} alt='Ono'/>
                    <div className='service-text'>
                    
                        <h1>1:1 Session</h1>
                        <p>A private interaction between 
                        recruiters and students to gain valuable 
                        insights and address individual inquiries.</p>
                    </div>
                </div>
            </div>
{/* 1 */}
                
{/* 4 */}   <div className='row'>
                <div className='service'>
                    <img src={offer} alt='offer'/>
                    <div className='service-text'>
                    <h1>Job Posting and Offers</h1>
                    <p>Enables companies to showcase their available 
                    job positions, which will be prominently 
                    displayed on the user's homepage.</p>
                    </div>
                </div>
{/* 5 */}
                <div className='service'>
                    <img src={Talent} alt='talent'/>
                    <div className='service-text'>
                        <h1>Talent Accessibility</h1>
                        <p>Utilizes system algorithms and AI technology
                        to intelligently recommend potential candidates
                        to company's homepage.</p>
                    </div>
                </div>
{/* 6 */}
                <div className='service'>
                    <img src={Recruitment} alt='recruitment'/>
                    <div className='service-text'>
                        <h1>Guarantee recruitment</h1>
                        <p>Ensures post-internship assistance by suggesting
                        backup candidates, guaranteeing successful 
                        recruitment</p>
                    </div>
                </div>  
            </div>
                
            </div>
        </article>
    )
}

export default Services;