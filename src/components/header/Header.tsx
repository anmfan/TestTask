import { Link } from "react-router-dom";
import { ROUTES_ENDPOINTS } from "@/components/routers/consts";

const Header = () => {
    return (
        <header className="fixed w-full bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    to={ROUTES_ENDPOINTS.Todos}
                    className="btn-primary"
                >
                    Список задач
                </Link>
            </div>
        </header>
    );
};

export default Header;