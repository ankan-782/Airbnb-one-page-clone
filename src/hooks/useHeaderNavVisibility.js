import { useState } from "react";

const useHeaderNavVisibility = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleNavVisibilityChange = (visible) => {
        setIsNavVisible(visible);
    };

    return { handleNavVisibilityChange, isNavVisible };
};

export default useHeaderNavVisibility;