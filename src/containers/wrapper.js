import React, { Component } from 'react'
import { connect } from "react-redux"

import ColorList from "../containers/color_list"

class Wrapper extends Component {

    _renderColor(hex) {
        let r = parseInt(hex.substring(0,2), 16),
            g = parseInt(hex.substring(2,4), 16),
            b = parseInt(hex.substring(4,6), 16),
            rgb = [r, g, b].join();
        return {backgroundColor: `rgba(${rgb},0.5)`};
    }

    render() {
        if (!this.props.color) {
            return (
                <div className='wrapper'>
                    <ColorList />
                </div>
            )
        }

        return (
            <div className='wrapper' style={this._renderColor(this.props.color)}>
                <ColorList />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        color: state.selectedColor
    };
}

export default connect(mapStateToProps)(Wrapper);
