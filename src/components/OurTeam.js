import Kwan from '../img/member/compressed/kwan.png'
import Pang from '../img/member/compressed/pang.png'
import Pearly from '../img/member/compressed/pearly.png'
import Tt from '../img/member/compressed/tt.jpeg'
import '../style/ourTeam.css'
const OurTeam = () =>{
    return(
        <div className="team_con">
            <div className="team_text_con">
                <h1>Meet our team</h1>
            </div>
            <div className="team_member_con">
                <div className='team_member'>
                    <img src={Kwan} alt='Kwan'/>
                    <p className='name'>Khongkwan</p>
                    <p className='position'>Hustler</p>
                </div>
                <div className='team_member'>
                    <img src={Pang} alt='Pang'/>
                    <p className='name'>Pang</p>
                    <p className='position'>Hustler</p>
                </div>
                <div className='team_member'>
                    <img src={Pearly} alt='Pearly'/>
                    <p className='name'>Pearly</p>
                    <p className='position'>Hipster</p>
                </div>
                <div className='team_member'>
                    <img src={Tt} alt='Tt'/>
                    <p className='name'>Tt</p>
                    <p className='position'>Hacker</p>
                </div>
                
            </div>
            <div className='team_doing_con'>
                    <div className='team_doing'>
                       <p>What we do</p>
                       <div className='team_doing_title'>
                            <p>For  
                                <span className='team_doing_title_colored'> the better job experience</span>
                            </p>
                       </div>
                       <div className='team_doing_text'>
                            <p>JobSecret was created by a team of Chulalongkorn University students who has experienced in business, technology, and HR field internships with the aim of offering reliable recruitment services to companies. This platform also serves as a valuable resource for students, allowing them to gain practical experience by applying for internships or their initial professional positions. Its primary goal is to facilitate self-exploration and help students accumulate valuable work experience, leading them to secure employment in companies that align with their preferred work methods and corporate culture.</p>
                       </div>
                    </div>
                </div>

        </div>
    )
}

export default OurTeam