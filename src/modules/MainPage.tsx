import {MediaRow} from "./components/MediaRow.tsx";
import {useContext, useState} from "react";
import {FileContext} from "../context/FileContext.tsx";
import {MediaModal} from "./components/MediaModal.tsx";

export function MainPage() {

    const {videoList, imageList} = useContext(FileContext);
    const [selectOption, setSelectOption] = useState<number>(0);
    const [modalData, setModalData] = useState<{ name: string, src: string } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (media: { name: string, src: string, type?: string }) => {
        setModalData(media);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex h-full flex-col">
            <div className="w-100 flex justify-center flex-col">
                <div className="flex flex-col">
                    <div className="mt-4">
                        <p className="text-white text-2xl font-bold text-center">File Downloader v2.0.0</p>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-white text-md">
                            <span
                                className="font-bold">Total files: </span> {selectOption === 0 ? videoList.length : selectOption === 1 ? imageList.length : 0}
                        </p>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-white text-md">
                            <span className="font-bold">Server IP & Port:</span> {window.location.host}
                        </p>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            className={`${
                                selectOption === 0 ? 'bg-pink-800 hover:bg-pink-600' : 'bg-neutral-500 hover:bg-neutral-700'
                            } text-white font-bold py-2 px-4 rounded mx-2`}
                            onClick={() => setSelectOption(0)} // Update the selectOption on click
                        >
                            <div className="flex justify-center items-center gap-2">
                                Videos
                            </div>
                        </button>

                        <button
                            className={`${
                                selectOption === 1 ? 'bg-blue-800 hover:bg-blue-600' : 'bg-neutral-500 hover:bg-neutral-700'
                            } text-white font-bold py-2 px-4 rounded mx-2`}
                            onClick={() => setSelectOption(1)} // Update the selectOption on click
                        >
                            <div className="flex justify-center items-center gap-2">
                                Images
                            </div>
                        </button>

                    </div>

                </div>
                <div className="mt-4 mx-8 mb-8 flex justify-center">
                    <table className="w-1/2 table-auto border-collapse">
                        <thead>
                        <tr className={`${selectOption === 0 ? 'bg-pink-800' : 'bg-blue-800'} text-neutral-300`}>
                            <th className="w-1/12 px-4 py-2 text-left">
                                #
                            </th>
                            <th className="w-auto px-4 py-2 text-left">
                                Name
                            </th>
                            <th className="w-1/3 px-4 py-2 text-left">
                                Options
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectOption === 0 && videoList.map((video) => (
                            <MediaRow selectOption={0} key={video.id} {...video} openModal={openModal}/>
                        ))}

                        {selectOption === 1 && imageList.map((image) => (
                            <MediaRow selectOption={1} key={image.id} {...image} openModal={openModal}/>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <MediaModal isOpen={isModalOpen} media={modalData} onClose={closeModal}/>
        </div>
    )
}
