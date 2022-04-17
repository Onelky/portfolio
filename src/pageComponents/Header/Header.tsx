import React from 'react';
import CoverName from "../../components/CoverName/CoverName";
import Arrows from "../../components/Arrows/Arrows";

// props: { size: string } ?

/* Initial presentation. */
const Header = (): JSX.Element => {
    return (
        <div role={"header"}>
            <CoverName/>
            <Arrows/>
        </div>
    );
};

export default Header;
