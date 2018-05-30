import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchColors, selectColor } from "../actions/index"

class ColorList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '', 
            result: '',
            selectedColor: ''
        };
    }

    componentDidMount() {
        this.props.fetchColors();
    }

    _matchColor(colors, input) {

        let regExp = new RegExp(this.state.value, 'gi');

        if (input.length > 2) {

            return colors.map(color => {

                let { name } = color;

                if (name.match(input)) {
                    return (
                        <li className="colors-item"
                            key={name}
                            onClick={() => this._setColor(color)}
                            dangerouslySetInnerHTML={{__html: name.replace(regExp, string => { return `<b>${string}</b>`})}}>
                        </li>
                    )
                } else {
                    return null;
                }
            });
        }
    }

    _changeInput() {
        let autoCompleteResult = this._matchColor(...this.props.colors, this.state.value);
        this.setState({result : autoCompleteResult})
    }

    _onChange(event) {
        this.setState({value: event.target.value})
    }

    _setColor(color) {
        let {name, hex} = color;

        this.setState({
            value: name,
            selectedColor: hex,
            result : name});
    }

    render() {
        return (
            <div className="content-color-list">
                <input
                    className="colors-input"
                    type="text" 
                    onChange={this._onChange.bind(this)}
                    onKeyUp={this._changeInput.bind(this)}
                    value={this.state.value}
                />
                <button 
                    className="colors-button"
                    onClick={() => this.props.selectColor(this.state.selectedColor)}    
                >Accept</button>
                <ul className="colors-list">{this.state.result}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        colors: state.colors
    };
}

export default connect(mapStateToProps, { fetchColors, selectColor })(ColorList);