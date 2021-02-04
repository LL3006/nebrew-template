import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
                <h1>Hello, world!</h1>
        </div>
    
        );
    }


}

export default App;