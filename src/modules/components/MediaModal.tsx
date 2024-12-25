import React, {useContext} from "react";
import {FileContext} from "../../context/FileContext.tsx";

interface IModalProps {
    isOpen: boolean;
    media: { name: string, src: string, type?: string } | null;
    onClose: () => void;
}

export const MediaModal: React.FC<IModalProps> = ({isOpen, media, onClose}) => {

    const {fileRef} = useContext(FileContext);

    if (!isOpen || !media) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="bg-neutral-800 text-neutral-300 p-4 rounded-md w-96">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-bold">{media.name}</h2>
                    {(media.type === 'videos') && (
                        <video controls ref={fileRef} muted className="w-full my-2">
                            <source src={`${media.src}#t=5`} type='video/mp4'/>
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {(media.type === 'images') && (
                        <img src={media.src} alt={media.name} className="w-72 my-2 rounded-xl" />
                    )}
                    <button
                        onClick={onClose}
                        className="mt-2 bg-red-800 hover:bg-red-600 text-white py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
