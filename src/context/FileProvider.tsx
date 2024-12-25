import {useFileManager} from "../hooks/useFileManager.ts";
import {FileContext} from "./FileContext.tsx";
import {ReactNode} from "react";

const {Provider} = FileContext;

export interface Props {
    children: ReactNode;
}

export const FileProvider = ({children}: Props) => {

    const {
        videoList,
        imageList,
        openDialog,
        selectedFile,
        chooseFile,
        fileRef,
        downloadRef,
        pauseVideo,
        handleClose
    } = useFileManager();

    return (
        <Provider value={{
            videoList,
            imageList,
            openDialog,
            selectedFile,
            chooseFile,
            downloadRef,
            fileRef,
            pauseVideo,
            handleClose
        }}>
            {children}
        </Provider>
    )
}
