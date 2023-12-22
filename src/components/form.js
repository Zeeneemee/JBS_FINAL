import '../style/form.css'
import Work from '../img/Rectangle 137.png'
import Ig from '../img/ig.png'
import Fb from '../img/fb.png'
import { useReducer  } from 'react'


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
                ...state.recruitment,
                [action.field] : action.value
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
    recruitment: {
        internship: false,
        entryLevel: false,
    },
}

const Form = ()=>{
    
    // const { scrollToForm } = useContext(ScrollContext);
    const [formData,dispatch] = useReducer(formReducer,initialFormData)
    const handleChange = (e)=>{
        dispatch({
            type: 'SET_FIELD',
            field: e.target.name,
            value: e.target.value 
        });
    };
    const handleTick = (e)=>{
        dispatch({
            type: 'SET_RECRUITMENT',
            field: e.target.name,
            value: e.target.value 
        })
    }

    const handleClick = async ()=>{
        try{
            const response = await fetch("url",
            {
             method: "POST", // *GET, POST, PUT, DELETE, etc.
             mode: "cors", // no-cors, *cors, same-origin
             cache: "no-cache", // *default, no-cache, reload, 
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(formData)
             })
             const resData = await response.json();
             console.log(resData)
            
         
        } catch(err){
            console.error(err)
        }

       
       
    }
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
                            <input type='email' id="email" onChange={handleChange} placeholder='Enter an email' name="email"></input>
                        </div>
                            
                            
                        <div className="form-field">
                            <label for="recruitment">Recruitment Type</label>
                            <div className="radio-container">
                        <div className='radio'>
                            <input 
                                type='radio' 
                                id='intern' 
                                name='recruitmentType' 
                                value= "internship"
                                onChange={handleTick}
                        />
                            <label for="intern">Internship</label>
                        </div>
                        <div className='radio'>
                            <input 
                                type='radio' 
                                id='entry' 
                                name='recruitmentType' 
                                
                                value="entryLevel"
                                onChange={handleTick}
                            />
                            <label for="entry">Entry-Level Jobs</label>  
                        </div>
                        
                    </div>
                        </div>
                            
                        
                        <button 
                        onClick={handleClick} 
                        className='submit'>Submit</button>
                        
                       
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