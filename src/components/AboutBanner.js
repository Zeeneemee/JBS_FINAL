import '../style/AboutBanner.css'
import AboutCircle from '../img/aboutCircle.png'

const Aboutbanner = () => {
    return(
        <article className="about-banner">
        <div className="about_row1">
            <div className="col_1">
                <div className="col1_text_container">
                    <span className="about_title">
                    We connect university students with companies, 
                    </span>
                    <span className="about_subtitle">
                     ensuring potential internship 
                    and entry-level employees 
                    for your company.
                    </span>
                </div> 
            </div>
            <div className="col_2">
                <span className='about_us_mission'>About us</span>
           
                    <span className="about_mission">
                    JobSecret is a mission-oriented provider of human resource and recruitment services that prioritizes effective collaboration between companies and university students. Our recruitment services aim to improve the employee branding of overlooked Gen Z companies and streamline the recruitment process through exclusive events with university students. 
                    </span>
             
                
            </div>
        </div>
        <div className="about_row2">
            <ul className="about_stat">
                <li>
                    <span className="about_stat_number">500</span>
                    <span className="about_done">Students through direct contacts</span>
                </li>
                <li>
                    <span className="about_stat_number">8,000</span>
                    <span className="about_done">Students accessed through partners </span>
                </li>
                <li>
                    <span className="about_stat_number">100</span>
                    <span className="about_done">Resumes from potential students</span>
                </li>
                <li>
                    <span className="about_stat_number">80%</span>
                    <span className="about_done">students apply for jobs post-events</span>
                </li>
            </ul>
        </div>
       
        
       
        <img className="circle_about" src={AboutCircle} alt='circle'/>
            
        </article>
    )
}

export default Aboutbanner