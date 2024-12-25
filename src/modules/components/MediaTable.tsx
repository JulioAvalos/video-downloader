import { MediaRow } from "./MediaRow.tsx";
import {IFileData} from "../../interfaces";

interface IMediaTableProps {
    mediaList: IFileData[];
    selectOption: number;
    openModal: (media: IFileData) => void;
}

export function MediaTable({ mediaList, selectOption, openModal }: IMediaTableProps) {
    return (
        <div className="mt-4 mx-8 mb-8 flex justify-center">
            <table className="w-1/2 table-auto border-collapse">
                <thead>
                <tr className={`${selectOption === 0 ? 'bg-pink-800' : 'bg-blue-800'} text-neutral-300`}>
                    <th className="w-1/12 px-4 py-2 text-left">#</th>
                    <th className="w-auto px-4 py-2 text-left">Name</th>
                    <th className="w-1/3 px-4 py-2 text-left">Options</th>
                </tr>
                </thead>
                <tbody>
                {mediaList.map((media) => (
                    <MediaRow selectOption={selectOption} key={media.id} {...media} openModal={openModal} />
                ))}
                </tbody>
            </table>
        </div>
    );
}
