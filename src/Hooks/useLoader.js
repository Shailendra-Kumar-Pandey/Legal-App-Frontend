import { useState } from "react";

export const useLoader = () => {
    const [isloader, setIsLoader] = useState(false);

    const showLoader = () => setIsLoader(true);
    const hideLoader = () => setIsLoader(false)

    return { isloader, showLoader, hideLoader }
}