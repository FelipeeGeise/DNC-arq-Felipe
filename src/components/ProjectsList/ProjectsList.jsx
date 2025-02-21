import { useContext } from 'react'
import { useState, useEffect } from 'react'
import './ProjectsList.css'


//ASSETS
import LikedFilled from '../../assets/like_filled.svg'
import LikedOutline from '../../assets/like.svg'

//COMPONENTS
import Button from '../Button/Button'

//CONTEXT
import { AppContext } from '../../contexts/AppContext'

//UTILS
import { getApiData } from '../../services/apiServices'

function ProjectsList(){
    const [projects, setProjects] = useState([])
    const [favProjects, setFavProjects] = useState([])
    const appContext = useContext(AppContext)
    const handleSavedProjects = (id) =>{
        setFavProjects((prevFavProjects) =>{
            if(prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            }
            else{
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

useEffect(()=>{
    const fetchData = async () => {
    try {
        const projectsResponse = await getApiData('projects')
        setProjects(projectsResponse);
        }
        catch (error){
        setProjects([]);
        console.error('erro em busca de projetos', error);
        }
}
//{appContext.languages[appContext.language].hero.title}
fetchData()
},[])

useEffect(()=>{
const savedFaveProjects = JSON.parse(sessionStorage.getItem('favProjects'))
if(savedFaveProjects){
    setFavProjects(savedFaveProjects)
}
}, [])

return (
    <div className="projects-section">
        <div className="project-hero">
            <h2>{appContext.languages[appContext.language].projects.title}</h2>
            <p>{appContext.languages[appContext.language].projects.subtitle}</p>
        </div>
        <div className='project-grid'>
            {
                projects ?
                projects.map((project)=> (
                    <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                        <div className='thumb tertiary-backgrund' style={{backgroundImage:`URL(${project.thumb})`}}></div>
                        <h3>{project.title}</h3>
                        <p>{project.subtitle}</p>
                <Button buttonStyle='unstyled' onClick={()=> handleSavedProjects(project.id)}>
                        <img src={favProjects.includes(project.id) ? LikedFilled: LikedOutline} height='20px' />
                </Button>
                        
                    </div>
                )) 
                : null
            }
        
        </div>
   </div> 
   
   )
  
}

export default ProjectsList