import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header>
                Common header
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}