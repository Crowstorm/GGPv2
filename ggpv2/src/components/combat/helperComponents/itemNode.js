import React from 'react';
import './abilityNode.css';

export default class ItemNode extends React.Component {
    state = {
        info: false,
        // canUse: true,
        active: false,
    }

    componentDidMount = () => {
        console.log(this.props)
        // let cost = this.props.cost;
        // let dataType = this.props.dataType;
        // let type = this.props.type;
        // let i = this.props.combat.attackerIndex;
        // let char = this.props.ally[i];
        // let maxHp = char.stats.maxHp;
        // let currentHp = char.stats.hp;
        // let maxMp = char.stats.mp;
        // let currentMp = char.stats.mp;
    }

    itemClick = () =>{
        this.props.setActiveItem(this.props.name);
        this.props.highlightItem(this.props.index);
        this.props.isHelpReady(true)
    }

    renderInfo = () => {
        return (
            <div className="infoStyle">
                <div style={{ padding: 8 }}>
                    {this.props.info}
                </div>
                <div className="toggleButton" onClick={(e) => this.toggleInfo(e)}></div>
            </div>

        )
    }

    toggleInfo = (e) => {
        e.stopPropagation();

        this.setState({
            info: !this.state.info
        })
    }

    setBorderColor = () =>{
        if (this.props.active) {
            return '2px solid green'
        } else {
            return '2px solid silver'
        }
    }


    render() {
        let info = (this.state.info) ? this.renderInfo() : null;
        let borderColor = this.setBorderColor();

        return (
            <div className="skillButton d-flex flex-direction-row justify-content-between align-items-center" style={{ border: borderColor }}  onClick={() => this.itemClick()}>
                <img className="abilityIcon" src={this.props.icon} />
                {this.props.name}
                <div className="toggleButton" onClick={(e) => this.toggleInfo(e)}></div>

                {info}
            </div>
        )
    }
}