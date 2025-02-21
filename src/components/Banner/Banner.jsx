
import './Banner.css'
import PropTypes from 'prop-types'


function Banner(props){
   return (
   <div className="banner d-flex al-end" style={{backgroundImage:`url(/${props.image})`}}>
        <div className="container">
            <div className="title-panel d-flex al-center jc-center">
                <h1>{props.title}</h1>
            </div>
        </div>
   </div> 
   )
  
}
Banner.propTypes = {
     image: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired }

export default Banner