import { useState } from "react";

const useHeaderPriceVisibility = () => {
    const [isPriceVisible, setIsPriceVisible] = useState(false);

    const handlePriceVisibilityChange = (visible) => {
        setIsPriceVisible(visible);
    };

    return { handlePriceVisibilityChange, isPriceVisible };
};

export default useHeaderPriceVisibility;