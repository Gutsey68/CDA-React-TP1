import { NavLink } from 'react-router-dom';

function Footer() {
    const footerLinks = [
        { name: 'À propos', href: '/à-propos' },
        { name: 'Projets', href: '/projets' },
        { name: 'Contact', href: '/contact' },
        { name: 'Mentions légales', href: '/mentions-légales' }
    ];
    return (
        <>
            <footer className="text-white bg-neutral-800 m-4 rounded-xl py-4 flex items-center justify-center gap-4 font-semibold">
                {footerLinks.map(link => {
                    return (
                        <NavLink to={link.href} key={link.name}>
                            {link.name}
                        </NavLink>
                    );
                })}
            </footer>
        </>
    );
}
export default Footer;
