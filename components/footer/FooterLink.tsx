import Link from "next/link";

type Link = {
    url: string;
    label: string;
};

interface FooterLinkProps {
    title: string;
    links: Link[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
    return (
        <div>
            <div className="text-xl  pb-4">
                {title}
            </div>
            <div className="pb-2 ">
                <ul className="m-1 space-y-4">
                    {links.map((link) => (
                        <li key={link.url}>
                            {/* <a href={link.url}>{link.label}</a> */}
                            <Link href={link.url}>
                            {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>


    )
}

export default FooterLink;