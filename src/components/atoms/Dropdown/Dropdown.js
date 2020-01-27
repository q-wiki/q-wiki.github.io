import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

export default class Dropdown extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            classNames: "effect-20",
            onChange: props.onChange,
            dataSet: props.dataSet,
            hasContent: false,
            content: "",
        };
    }

    handleClick= (e) =>{
        this.props.onChange(e.target.value, this.props.index);
        this.setState({classNames : "effect-20 has-content"});
        this.setState({hasContent : true});
        this.setState({content: e.target.value});
    }

    clear () {
        this.props.onChange(null, this.props.index);
        this.setState({classNames: "effect-20"});
        this.setState({hasContent: false});
        this.setState({content: ""});
    }

    render() {
        return(
            <div className="dropdown input-effect">
                <select required className={this.state.classNames} value={this.state.content} onChange={this.handleClick.bind(this)}>
                    <option key="1000" value={1000}></option>
                    {
                        this.props.options.map((item, i) =>
                            <option key={i} value={item.title}>{item.title}</option>
                        )}
                </select>
                <label>{this.props.placeholder}</label>
                <span className="focus-border">
                    <i/>
                </span>
                { this.state.hasContent?
                    <div className="clear-filter" onClick={this.clear.bind(this)}>X</div>
                    :null
                }
            </div>
        );
    }
}
