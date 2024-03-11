import "../style/notFound.css"
const NotFound = ()=>{
    return(
        <div className="notfound_con">
            <h1>Not Found 404</h1>
            <a href="/">
                <button className="backhome">Back to Home Page</button>
            </a>
        </div>
    )
}

export default NotFound;