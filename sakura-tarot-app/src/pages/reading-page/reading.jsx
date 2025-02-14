import React, { useState } from "react"
import FooterComp from "../../components/footer/footer"
import Header from "../../components/header/header"

function ReadingPage () {

    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const [currentDate, setCurrentDate] = useState(getDate());

    return (
        <>
        <Header/>
        <main>
        <h1>Today's Date</h1>
        <p>{currentDate}</p>
        </main>
        <FooterComp/>
        </>
    )
}

export default ReadingPage

//setCurrentDate(getDate()) EACH TIME YOU NEED A NEW DATE//