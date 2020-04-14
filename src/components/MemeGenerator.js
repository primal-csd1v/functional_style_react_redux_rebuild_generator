import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { API } from '../constants/urls/api';

const MemeGenerator = (props) =>
{       
    const handleChangeTopText = e => {
        const value = e.target.value;
        props.setTopText(value);
      }    
    const handleChangeBottomText = e => {
        const value = e.target.value;
        props.setBottomText(value);
    }  

    const handleSubmit = e => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * props.allMemeImgs.length)
        const randMemeImg = props.allMemeImgs[randNum].url
        props.setRandomImg(randMemeImg);
        }  

    useEffect(() => {        
        fetch(API)
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes)
            props.setResponse(memes);            
        })
        }, []);// eslint-disable-line react-hooks/exhaustive-deps
// отключил варн на пустые props
    
        return(
            <div>
                     <form className="meme-form" onSubmit={handleSubmit}>
                         <input 
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={props.topText}
                            onChange={handleChangeTopText}
                        /> 
                        <input 
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={props.bottomText}
                            onChange={handleChangeBottomText}
                        /> 
                    
                        <button>Gen</button>
                    </form>
                    <div className="meme">
                        <img align="center" src={props.randomImg} alt="" />
                        <h2 className="top">{props.topText}</h2>
                        <h2 className="bottom">{props.bottomText}</h2>
                    </div>
            </div>
        )    
}

MemeGenerator.propTypes = {
    randomImg: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired,
    allMemeImgs: PropTypes.array.isRequired,
    bottomText: PropTypes.string.isRequired,
    setRandomImg: PropTypes.func.isRequired,
    setTopText: PropTypes.func.isRequired,
    setBottomText: PropTypes.func.isRequired,
    setResponse: PropTypes.func.isRequired,
  }

export default MemeGenerator;