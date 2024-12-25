import {IFileData} from "../../interfaces";
import {useContext} from "react";
import {FileContext} from "../../context/FileContext.tsx";

interface IMediaRowProps extends IFileData {
    openModal: (media: { name: string, src: string, type?: string }) => void;
    selectOption: number;
}

export function MediaRow({id, name, src, type, openModal, selectOption}: IMediaRowProps) {

    const {chooseFile} = useContext(FileContext);

    const handleOpenModal = (media: IFileData) => {
        chooseFile(media);
        openModal({name: media.name, src: media.src, type: media.type});
    }

    return (
        <tr className="bg-neutral-800 text-neutral-300">
            <td className={`${selectOption ? 'border-blue-800' : 'border-pink-800'} px-4 py-2 border-t-2 text-left`}>
                {id}
            </td>
            <td className={`${selectOption ? 'border-blue-800' : 'border-pink-800'} px-4 py-2 border-t-2 text-left`}>
                {name}
            </td>
            <td className={`${selectOption ? 'border-blue-800' : 'border-pink-800'} px-4 py-2 border-t-2 text-left`}>
                <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                    <a
                        className={`${selectOption ? 'bg-blue-800 hover:bg-blue-600 ' : 'bg-pink-800 hover:bg-pink-600'} cursor-pointer text-neutral-300 font-bold py-2 px-4 rounded`}
                        onClick={() => handleOpenModal({id, name, src, type})}>
                        Preview
                    </a>
                    <a
                        className={`${selectOption ? 'bg-blue-800 hover:bg-blue-600 ' : 'bg-pink-800 hover:bg-pink-600 '} cursor-pointer text-neutral-300 font-bold py-2 px-4 rounded`}
                        href={src}
                        download
                    >
                        Download
                    </a>
                </div>

            </td>
        </tr>
    )
}
