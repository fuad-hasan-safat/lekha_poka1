
type Link = {
    label: string;
};

interface SocialLinkProps {
    title: string;
    links: Link[];
}

const SocialLink: React.FC<SocialLinkProps> = ({ title, links }) => {
    return (
        <div>
            <div className="text-xl  pb-4">
                {title}
            </div>
            <div>

                <div className="pb-14 ">
                    <ul className=" flex ">
                        {links.map((link) => (
                            <li key={link.label} className="pr-4 text-2xl">
                                {/* <a href={link.url}>{link.label}</a> */}
                                <i className={link.label}></i>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>


    )
}

export default SocialLink;