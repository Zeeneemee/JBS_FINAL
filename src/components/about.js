import Anounce from '../img/Frame 40.png'
import Grad from '../img/Frame 54.png'
import Upward from '../img/Frame 55.png'
import Computer from '../img/Group 18.png'
import '../style/homeaboutus.css'
export const About = ()=>{
    return(
        <article style={{'background':'#E1F2FC'}}>
            <div className='about'>
                <p>About us</p>
                <h1>JobSecret</h1>
                <span style={{ fontWeight: 500, color: '#2B3F6C' }}>JobSecret is a platform designed for companies seeking potential entry-level employees. </span>
                <span>We offer reliable recruitment services, facilitating students in gaining valuable work experience and securing employment in companies aligned with their preferred work methods and corporate culture.</span>
            </div>
            {/* <hr/> */}
            
            <div className='benefit-con'>
                <div className='benefit-text'>
                    <p>Connecting Companies to Talent</p>
                    <h1>For <span style={{'color':'linear-gradient(90deg,#86B4D2,#80CFC8);'}}>Companies</span></h1>
                </div>
               
                <div className='benefit-list'>
                    <ul>
                        <li>
                           
                            <img src={Anounce} alt='anounce'/>
                            <p>Promote brand image and 
                            brand awareness</p>
                            
                        </li>
                        <li>
                            
                            <img src={Grad} alt='anounce'/>
                            <p>Allow companies to get in touch with 
                            <span style={{'display':'block'}}>35+ university students or fresh</span>
                             graduates from top universities 
                            </p>
                            
                        </li>
                        <li>
                            <img src={Upward} alt='anounce'/>
                            <p>Drive the productivity and efficiency of
                            the company with passionate Gen Z
                            </p>
                        </li>
                    </ul>
                    <div className='computer-con'>
                        <img src={Computer} alt='computer'/>
                    </div>
                   
                </div>
                </div>
             
        </article>
    )
}