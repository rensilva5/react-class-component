import React, { Component } from "react";
class ClassComponent extends Component {

    //props
    //setting state
    constructor(props) {
        super(props)
        // this.props = props
        this.state = {
            count: props.count,
            coffee: []
        }
    }
    //use Effect
    componentDidMount() {    // loading coffees// like useEffect
        console.log('compoments divMount')
        let url = 'https://api.sampleapis.com/coffee/hot'
        fetch(url)
        .then(res => res.json())
        .then(data =>
            this.setState({
            count: this.state.count,
            coffee: data
        })
        )
    }
    //return 
    render() {
        return(
            <>
            <h1>This is a class component {this.state.count} </h1>
            <button onClick={() => {
                //this button update the count + 1
                this.setState(
                    {
                        count: this.state.count + 1,
                        coffee: this.state.coffee
                    })
            }}>add one</button>
            {/* map through the coffee */}
                {this.state.coffee.map(coffee => <h1 key={coffee.id}>{coffee.title}</h1>)}
            </>
        )
    }
 
}

export default ClassComponent
