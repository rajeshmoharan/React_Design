import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




const App = () => {
    return(
        <div className='card'>
            <Avtar/>
            <div className='data'>
                <Intro/>
                <SkillList/>
            </div>
        </div>
    )
}

const Avtar = () => {
    return (
            <img src='rajesh.jpg' alt='rajesh photo' className='avatar'/>
    )
}

const Intro = () => {
        return(
            <div>
                <h1>Rajesh Moharana</h1>
                <p>Full-stack web developer . When not coding, I like to play  games, or to just enjoy the Portuguese sun at the beach.</p>
            </div>
        )
}

const SkillList = () => {
            return(
                <div className='skill-list'>
                    <Skill skill={"HTML && CSS"} emoji={"💪"} color="blue"/>
                    <Skill skill={"JavaScript"} emoji={"❤️"} color="orange"/>
                    <Skill skill={"React JS"} emoji={"🥰"} color="green"/>
                    <Skill skill={"Node & Express"} emoji={"💪"} color="#7ab317"/>
                    <Skill skill={"MongoDB"} emoji={"💪"} color="#7b3b3b"/>
                    
                </div>
            )
}

const Skill = ({skill,emoji,color}) => {
    return (
        <div className='skill' style={{backgroundColor : color}}>
            <span>{skill}</span>
            <span>{emoji}</span>
        </div>
    )
}








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App/></React.StrictMode>);