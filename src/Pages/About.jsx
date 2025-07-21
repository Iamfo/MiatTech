import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    const home = () =>{
        navigate("/");
    }

    return (
        <>
            <h2>About</h2>
            <p>Informazioni sull'applicazione</p>
            <button onClick = {home}>Torna alla pagina =&gt; Home</button>
        </>
    )
}
export default About