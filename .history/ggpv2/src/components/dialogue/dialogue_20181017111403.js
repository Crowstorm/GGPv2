import React from 'react';
import './dialogue.css';

class Dialogue extends React.Component{
    render(){
        return(
            <div className="dialogue">
                <p>Smierdze kasza</p>
                <button onClick={this.props.toggleDialogueState}>Wypad</button>
            </div>
        )
    }
}

export default Dialogue;