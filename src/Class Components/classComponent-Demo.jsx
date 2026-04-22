import React from "react";

export class DemoClass extends React.Component {
    constructor() {
        super();
        this.state = {
            Title: "Class component",
            categories: ["All", "Electronics", "Fashion"]
        }
    }

    componentDidMount() {
        this.setState({ Title: " React Class Component " })
    }

    render() {
        return (
            <div className="container-fluid mt-4">
                <h2 className="fw-bold">
                    Hello Sir, Welcome To {this.state.Title}
                </h2>
                <ol className="ms-5">
                    {
                        this.state.categories.map(category =>
                            <li key={category}>{category}</li>
                        )
                    }
                </ol>
            </div>

        )
    }
}