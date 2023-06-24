import { Route, Routes } from "react-router-dom";
import Brother from "../components/Brother";
import Sister from "../components/Sister";

export default function Root() {
    return (
        <Routes>
            <Route path="/brother/*" element={<Brother />} />
            <Route path="/sister/*" element={<Sister />} />
        </Routes>
    );
}
