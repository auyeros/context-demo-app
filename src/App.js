import React from "react";
import Navbar from "./NavBar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <PageContent>
                    <Navbar />
                    <Form />
                </PageContent>
            </LanguageProvider>
        </ThemeProvider>
    );
}
