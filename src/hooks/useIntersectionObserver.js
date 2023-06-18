import { useEffect, useRef } from "react";

const useIntersectionObserver = (visibilityTrue, visibilityFalse, options) => {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    visibilityTrue();
                } else {
                    visibilityFalse();
                }
            });
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
    }, [visibilityTrue, visibilityFalse, options]);

    return targetRef;
};

export default useIntersectionObserver;