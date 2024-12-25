import {useRef, useState} from "react";
import {IFileData} from "../interfaces";
import {videos} from "../utils/fileInfo";
import {images} from "../utils/fileInfo";

export const useFileManager = () => {

    const fileRef = useRef<HTMLVideoElement>(null);
    const downloadRef = useRef<HTMLAnchorElement>(null);

    const [videoList] = useState<IFileData[]>(videos);
    const [imageList] = useState<IFileData[]>(images);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const [selectedFile, setSelectedFile] = useState<IFileData | null>(null);

    const chooseFile = (fileData: IFileData) => {
        setOpenDialog(true);
        setSelectedFile(fileData);
        if (fileRef)
            if (fileRef && fileRef.current) {
                fileRef.current.load();
            }
    }

    const pauseVideo = () => {
        if (fileRef.current) {
            fileRef.current.pause();
        }
    }

    const handleClose = () => {
        setOpenDialog(false);
    }

    return {
        videoList,
        imageList,
        openDialog,
        fileRef,
        downloadRef,
        chooseFile,
        selectedFile,
        handleClose,
        pauseVideo
    };
}
