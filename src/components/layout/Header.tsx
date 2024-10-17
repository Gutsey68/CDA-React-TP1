import { NavLink } from 'react-router-dom';

function Header() {
    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Equipe', path: '/equipe' },
        { name: 'Services', path: '/service' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header>
            <nav className="flex items-center justify-center gap-4 bg-neutral-800 text-white py-4 font-semibold">
                {navLinks.map(link => {
                    return (
                        <NavLink to={link.path} key={link.name}>
                            {link.name}
                        </NavLink>
                    );
                })}
            </nav>
        </header>
    );
}
export default Header;
