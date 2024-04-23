import { Link } from "lucide-react";

type Link = {
    label: string;
    url: string;
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
                    <ul className=" flex space-x-4">
                        {links.map((link, index) => (
                           <li key={index}>
                            <a href={link.url} key={index}>
                            <img
                                src={link.label}
                                key={index}
                                height={20}
                                width={20}
                              />
                            </a>
                          </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>


    )
}

export default SocialLink;