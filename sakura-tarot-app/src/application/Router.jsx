import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import PageInstructions from "../pages/instructions-page/instructions"
import ReadingPage from "../pages/reading-page/reading"
import SavedReadings from "../pages/saved-page/saved"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/instructions" element={<PageInstructions/>}/>
                <Route path="/readings" element={<ReadingPage/>}/>
                <Route path="/savedReadings" element={<SavedReadings/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router


{/* {/* <Route path="/discover" element={<Discover/>}/> */}

// LINK FOR COMPONENTS //

//import { Link } from 'react-router';

{/* <Link to="/join">
<button className="Join-Now">Join Now</button>
</Link> */}