import React from "react";

class TextSearch extends React.Component {
    constructor() {
        super();
        this.state = { array: ["BlockChain", "Javascript", "Python", "MongoDB"] };
    }

    findHandler = (e) => {
        if (e.target.value === "") {
            this.setState(this.state.array);
            return;
        }
      
         let filterValue = this.state.array.filter((list) => 
        list.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        console.log(filterValue);
        this.setState({filterValue});
    }

    render() {
        return (
            <>
                <center>
                    <label><b>Search:</b></label>
                    <input type="text" name="search" onChange={this.findHandler} />
                    {
                        this.state.array.map((item, index) => (<div key={index}>{item}</div>))
                    }
                </center>
            </>
        )
    }
}
export default TextSearch;
