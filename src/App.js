import React, { Component } from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./context/ThemeContext";

class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <PageContent>
                    <NavBar />
                    <Form />
                </PageContent>
            </ThemeProvider>
        );
    }
}
export default App;
