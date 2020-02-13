import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../store';
import { getAllUnicorn, postUnicorn, putUnicorn } from './../ActionsUnicorn';
import { bindActionCreators } from 'redux';

const INITIAL_STATE = {
    name: '',
    age: 0,
    colour: ''
}

class UnicornForm extends Component {
    state = INITIAL_STATE;

    componentDidUpdate(prev){
        const { unicorn } = this.props;
        if(prev.unicorn !== unicorn){
            this.setState({ ...unicorn });
        }
    }

    handlePostUnicorn = async (unicorn) => {
        store.dispatch(await postUnicorn(unicorn));
        store.dispatch(getAllUnicorn());
    }

    handlePutUnicorn = async (id, unicorn) => {
      store.dispatch(await putUnicorn(id, unicorn));
      store.dispatch(getAllUnicorn());
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { unicorn } = this.props;
        const newUnicorn = { ...this.state };

        if (unicorn._id) {
            await this.handlePutUnicorn(unicorn._id, newUnicorn);
        } else {
            await this.handlePostUnicorn(newUnicorn);
        }

        this.resetFields();
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    resetFields = () => this.setState(INITIAL_STATE);

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-block">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        id="name"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
    
                <div className="input-block">
                    <label htmlFor="age">Age</label>
                    <input
                        name="age"
                        id="age"
                        type="number"
                        required
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                </div>
    
                <div className="input-block">
                    <label htmlFor="colour">Colour</label>
                    <input
                        name="colour"
                        id="colour"
                        required
                        value={this.state.colour}
                        onChange={this.handleChange}
                    />
                </div>
    
                <button type="submit">Save</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
  unicorn: state.ReducerUnicorn.item,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  postUnicorn,
  putUnicorn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnicornForm);
