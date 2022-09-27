import React from 'react';

class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            show: false
        }
    } 

    updateData = () => {
        this.setState({show : true});
        let a = document.getElementById("btn1").value;
        let b = document.getElementById("btn2").value;
        let c = document.getElementById("btn3").value;

        this.setState(state => ({list : [...state.list, [a, b, c]]}));
        
    }

    update = (d) => {
        if(d) {

            let val = [];
            for(let i = 0; i < this.state.list.length; i++) {
                val.push(<p>Name: {this.state.list[i][0]} | Department: {this.state.list[i][1]} | Rating: {this.state.list[i][2]}</p>)
            }

            return val;
        }
        return null;   
    }
    render() {
        return (
            <div>
                <label htmlFor="btn1">Name: </label>
                <input type="text" id="btn1" /> <br />
                <label htmlFor="btn2">Department: </label>
                <input type="text" id="btn2" /> <br />
                <label htmlFor="btn3">Rating: </label>
                <input type="text" id="btn3"/> <br />
                <button onClick={this.updateData}>Submit</button>
                <div className='bottomBox'>
                    {this.update(this.state.show)}
                </div>
            </div>
        );
    }
}

export default ClassComponent;