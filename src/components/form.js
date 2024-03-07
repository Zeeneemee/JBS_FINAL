import '../style/form.css'
import Work from '../img/Rectangle 137.png'
import Ig from '../img/ig.png'
import Fb from '../img/fb.png'
import { useReducer, useRef, useState, useEffect } from 'react'
import axios from 'axios'



// change to useReduer 
// const [state,dispatch] = useReducer(reducer,{id:"",})
const formReducer = (state,action)=>{
    switch (action.type){
        case 'SET_FIELD':
            return{
                ...state,
                [action.field]: action.value,
            };
        case 'SET_RECRUITMENT':
            return{
                ...state,
                [action.field]: action.value,
                 
            };
        default:
            return state;
    }
};

const initialFormData = {
    fullname: "",
    position: '',
    companyName: '',
    email: '',
    internship: false,
    entryLevel: false,
}


const Form = () => {
    const input = useRef(null);
    const tick = useRef(null);
    const sent = useRef(null);
    const [emailError, setEmailError] = useState(false);
    const [recruitmentError, setRecruitmentError] = useState(false); 
    const [formData, dispatch] = useReducer(formReducer, initialFormData);

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
    
    

    useEffect(()=>{
        const handleError = ()=>{
            if (emailError){
                input.current.style.border = "1px solid red";
            }
        }
       handleError();
    },[emailError,recruitmentError,input,tick])
        
    
    const handleChange = (e) => {
        dispatch({
            type: 'SET_FIELD',
            field: e.target.name,
            value: e.target.value,
        });
        console.log('formData:', formData);
    };

    const handleTick = (e) => {
        dispatch({
            type: 'SET_RECRUITMENT',
            field: e.target.name,
            value: e.target.checked,
        });
        console.log('formData:', formData);
    };
    const checkData = (data) => {
        let isValid = true;
    
        // Email validation
        if (!validEmail.test(data.email)) {
            setEmailError(true);
            input.current.style.border = "1px solid red"; // Direct DOM manipulation for error visual
            isValid = false;
        } else {
            setEmailError(false);
            input.current.style.border = ""; // Reset style if corrected
        }
    
        // Checkbox (internship or entry-level) validation
        if (!(data.internship || data.entryLevel)) {
            setRecruitmentError(true);
            isValid = false;
        } else {
            setRecruitmentError(false);
        }
    
        return isValid; // Return true if both conditions are valid
    };

    const handleClick = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // Only proceed if checkData returns true, indicating no errors
        if (checkData(formData)) {
            console.log('formData:', formData);
            try {
                const response = await axios.post('https://backend-ivory-gamma-85.vercel.app/', formData);
                console.log('AxiosResponse:', response);
                sent.current.style.display = "block";
                sent.current.style.color = "green";
                sent.current.style.fontSize = "1.5rem";
                sent.current.style.fontWeight = "bold";
                sent.current.innerHTML = "Form submitted successfully!";
            } catch (error) {
                console.error('AxiosError:', error);
                
            }
        } else {
            console.error('Invalid form data:', formData);
            
        }
    };
    
    
    return(
        <div className='form-con'>
            <div className='left'>
                <div className='text-form'>
                <p>Are you a HR or recruiter that interested in  
                JobSecret? We can offer you <span>FREE TRIAL!</span>
                </p>
                </div>
                <img src={Work} alt='work'/>
                <div className='image'></div>
                <div className='social desktop'>
                    <a href='https://instagram.com/jobsecret.official?igshid=MzRlODBiNWFlZA==' target="blank">
                    <img src={Ig} alt='ig'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100083273803843&mibextid=D4KYlr' target="blank">
                        <img src={Fb} alt='fb'/>   
                    </a>
                </div>
            </div>
                <div className='right'>
                    
                        <div className="form-field">
                            <label for="fullname">Full Name</label>
                            <input type='text' id="fname" name="fullname" placeholder='Enter full name' onChange={handleChange}></input>
                        </div>
                        
                        <div className="form-field">
                            <label for="position">Position</label>
                            <input type='text' id="position" onChange={handleChange} placeholder='Enter position' name="position" ></input>
                        </div> 
                        
                        <div className="form-field">
                            <label for="company">Company Name</label>
                            <input type='text' id="company" onChange={handleChange} placeholder='Enter company name' name="companyName"></input>
                        </div>
                        
                        <div className="form-field">
                            <label for="email">Email</label>
                            <input type='email' id="email" onChange={handleChange} placeholder='Enter an email' name="email" ref={input}></input>
                        </div>
                            
                            
                        <div className="form-field">
                            <label for="recruitment">Recruitment Type</label>
                        <div className="radio-container">
                            <div className='radio'>
                                <input 
                                    type='checkbox' 
                                    id='intern' 
                                    name='internship' 
                                    value= "internship"
                                    onChange={handleTick}
                                    ref={tick}
                            />
                                <label for="intern">Internship</label>
                            </div>
                            <div className='radio'>
                                <input 
                                    type='checkbox' 
                                    id='entry' 
                                    name='entryLevel' 
                                    value="entryLevel"
                                    onChange={handleTick}
                                    ref={tick}
                                />
                                <label for="entry">Entry-Level Jobs</label>  
                            </div>
                        </div>
                        
                    </div>
                    
                        <button 
                        onClick={handleClick} 
                        className='submit'>Submit</button>
                        <div className='error'>
                            <p>{emailError? "Enter a correct email": recruitmentError? "Please tick a box": null}</p>
                            <p ref={sent}/>
                        </div>
                        
                        </div>
                        <div className='social mobile'>
                            <a href='https://instagram.com/jobsecret.official?igshid=MzRlODBiNWFlZA==' target="blank">
                            <img src={Ig} alt='ig'/>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100083273803843&mibextid=D4KYlr' target="blank">
                                <img src={Fb} alt='fb'/>   
                            </a>
                    </div>
                    
            
        </div>
    )
}

export default Form