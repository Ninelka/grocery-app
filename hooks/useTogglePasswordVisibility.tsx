import {useState} from "react";
import {IoniconsType} from "../types/expo-icons";

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState<IoniconsType>('eye-outline');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye-outline') {
            setRightIcon('eye-off-outline');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off-outline') {
            setRightIcon('eye-outline');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return {
        passwordVisibility,
        rightIcon,
        handlePasswordVisibility
    };
};
