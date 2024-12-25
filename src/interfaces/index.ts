import {RefObject} from "react";

export interface IFileData {
    id: number;
    name: string,
    src: string,
    type?: string
}

export interface FileContextProps {
    videoList: IFileData[];
    imageList: IFileData[];
    openDialog: boolean;
    selectedFile: IFileData | null;
    chooseFile: (fileData: IFileData) => void;
    downloadRef: RefObject<HTMLAnchorElement | null> | null;
    fileRef: RefObject<HTMLVideoElement | null> | null;
    pauseVideo: () => void;
    handleClose: () => void;
}
