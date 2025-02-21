import './LoadingSpinner.css'
import LoadingSpinnerGif from '../../assets/loadingSpinner.gif'



function LoadingSpinner(){
   return (
   <div className=" d-flex al-center loading-overlay-container" >
        <img src={LoadingSpinnerGif} alt="loading" height='200px' />
    </div>
   
   )
  
}

export default LoadingSpinner