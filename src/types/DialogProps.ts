import { Dispatch, SetStateAction } from "react"

type DialogProps = {
    title?: string;
    content?: string;
    confirmAction?: () => void;
    cancelAction?: () => void;
    currentDialogState?: boolean;  
}

export type DialogStateProps = {
    dialogOpened: boolean;
    setDialogOpened: Dispatch<SetStateAction<boolean>>;
}

export default DialogProps
