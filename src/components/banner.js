import Circle1 from '../img/Frame 11.png'
import Circle2 from '../img/Frame 12.png'
import '../style/homebanner.css'
import { useRef, useEffect, createContext } from 'react';

export const ScrollContext = createContext();

const Banner = ({annimation})=>{
    const formTextRef = useRef(null);
    const homeRef = useRef(null);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 780) {
                formTextRef.current.textContent = 'Free Trial';
                homeRef.current.style.height = '500px';
            } 
            
            else {
                formTextRef.current.textContent = 'Submit recruit and contact details';
                homeRef.current.style.height = '700px';
            }
        };

        // Call the function on component mount
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToForm = () => {
        const formElement = document.querySelector('.form-con');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return(
       
        <article className='home' ref={homeRef}>
            <div className="col-1  ">
                <div className="title">
                    <h1>
                        Reveal the
                        <span className='highlighted'>top secret </span> 
                        <span>about jobs</span>
                    </h1>
                </div>
                <div className="subtitle">
                    <p>
                    JobSecret offers reliable recruitment services to 
                    <br/>companies, facilitating in discovering potential<br/> 
                    entry-level candidates.
                    </p>
                </div>
                <div className="to-form" onClick={scrollToForm}>
                    <p ref={formTextRef}>
                        Submit recruit and contact details
                    </p>
                </div>
            </div>
            <div className="col-2 fade-in">
            <div className='img-con-2'>
                <img src={Circle1} alt='Circle-2'/>
                </div>
              
            </div>
            <div className="col-3 fade-in">
                <div className='img-con-3'>
                <img src={Circle2} alt='Circle-2'/>
                </div>
                
               
            </div>
        </article>
   
    )
}

export default Banner