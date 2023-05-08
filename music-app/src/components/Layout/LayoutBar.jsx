import { Outlet } from "react-router-dom";
import Bar from "../Bar/Bar";

export default function LayoutBar() {
    

    return (
        <main>
            <Outlet />
            <Bar />
        </main>
    );
}
