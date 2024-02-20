import React from 'react';
import { TextField, Box, Button } from '@mui/material';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            person: { 
                name: 'Oleg', 
                age: '25' 
            } 
        }
    }

    componentDidMount() {
        if(this.props.person){
            this.setState({...this.state, person: {...this.props.person}})
        }
        console.log('Form did mount');
    }

    componentDidUpdate() {
        console.log('Form did update');
    }

    componentWillUnmount() {
        console.log('Form unmount');
    }

    changeStatePerson = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            ...this.state, 
            person: {
                ...this.state.person, 
                [key]: value
            }});
    }

    render() {
        const { deleteForm } = this.props;
        return (
            <Box className='Form'>
                {Object.keys(this.state.person).map((key) => (
                    <TextField
                        className='Form__input'
                        label={key}
                        name={key}
                        key={key}
                        value={this.state.person[key]}
                        variant="outlined"
                        sx={{ marginBottom: '20px' }}
                        onChange={this.changeStatePerson} />
                ))}
                <Button
                    className='Form__button'
                    variant="outlined"
                    onClick={() => deleteForm()}>Удалить форму</Button>
            </Box>
        )
    }
}

export default Form;