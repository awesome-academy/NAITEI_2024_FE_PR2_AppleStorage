import React, { useEffect, useState } from "react";
import "../assets/css/newgen.css";
import "../assets/css/acs.css";

const Tag = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/Tag")
            .then((response) => response.json())
            .then((data) => setTags(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div className="flex gap-x-2">
            {tags.map((tag, index) => (
                    <div key={index} className="tag rounded-full border border-black bg-transparent flex items-center px-3 h-10 hover:bg-black hover:text-white">
                       {tag.tag}
                    </div>
                ))}
        </div>
    );
};

export default Tag;
