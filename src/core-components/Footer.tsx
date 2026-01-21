import {NavLink} from "react-router";

export const Footer = () => {
    return (
        <footer className="my-5 md:my-10 flex gap-2">
            <NavLink to={'/'}>Home Page</NavLink>
            <NavLink to={'/componentes'}>Components Page</NavLink>
        </footer>
    );
};
