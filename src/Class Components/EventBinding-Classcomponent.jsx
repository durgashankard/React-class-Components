import React from "react";

export class EventBind extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
        this.handleInsertClick = this.handleInsertClick.bind(this);
    }

    handleSubmitClick() {
        alert("Record Submitted...")
    }
    handleInsertClick() {
        this.setState({
            msg: "Record Inserted..."
        })
    }

    handleDeleteClick() {
        this.setState({
            msg: "Record Deleted..."
        })
    }
    handleUpdateClick() {
        this.setState({
            msg: "Record Updated..."
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h2>Event Binding </h2>
                <button onClick={this.handleSubmitClick}> Submit</button>
                <button className="mx-3" onClick={this.handleInsertClick}>Insert</button>
                <button className="mx-3" onClick={this.handleDeleteClick.bind(this)}>Delete</button>
                <button onClick={() => this.handleUpdateClick()}>Upadate</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}