import ActivitiesBanner from '../components/ActivitiesBanner'
import Form from "../components/form";
import { Analytics } from '@vercel/analytics/react';
const Activities = ()=>{
    return(
        <article>
            <ActivitiesBanner/>
            <Form/>
            <Analytics/>
        </article>
       
    )
}
export default Activities;