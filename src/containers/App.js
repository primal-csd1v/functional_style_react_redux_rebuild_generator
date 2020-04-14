import React from "react";
import Header from '../components/Header';
import MemeGenerator from '../components/MemeGenerator';
import { connect } from 'react-redux';
import { setTopText } from '../actions/MemeGeneratorActions';
import { setBottomText } from '../actions/MemeGeneratorActions';
import { setResponse } from '../actions/MemeGeneratorActions';
import { setRandomImg } from '../actions/MemeGeneratorActions';

const App = (props) =>
{   
    const { topText, bottomText, randomImg, allMemeImgs } = props.memeGenerator;
    const {setTopTextAction, setBottomTextAction, setResponseAction, setRandomImgAction} = props;
    console.log(setTopTextAction)
    return (
        <div>
          <Header/>
          <MemeGenerator 
          topText={topText} 
          bottomText={bottomText} 
          randomImg={randomImg}
          allMemeImgs={allMemeImgs}
          setTopText={setTopTextAction}
          setBottomText={setBottomTextAction}
          setResponse={setResponseAction}
          setRandomImg={setRandomImgAction}/>
        </div>
    )  
}

const mapStateToProps = store => 
{
  return {
    memeGenerator: store.memeGenerator,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTopTextAction: value => dispatch(setTopText(value)),
    setBottomTextAction: value => dispatch(setBottomText(value)),
    setResponseAction: value => dispatch(setResponse(value)),
    setRandomImgAction: value => dispatch(setRandomImg(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)