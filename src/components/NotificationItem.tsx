import React, { useState } from 'react';
import {
    IoCloudDownloadOutline
} from "react-icons/io5";


type Props = {
    data: {
        creation_time: string
        image?: string
        category: string
        platform: string;
        user: string;
        userImg: string
        status: string
        text: string;
        dowload?: boolean
        desc?: string
        fileName?: string
        size?: string
        notificationType: string
    }
}

const NotificationItem = ({ data }: Props) => {


    const startTimeMoment = new Date(data?.creation_time);

    // Get the current time
    const currentTime = new Date();

    let timeDifference = Math.abs(currentTime.getTime() - startTimeMoment.getTime());

    // Calculate hours and minutes difference
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    timeDifference -= hoursDifference * 1000 * 60 * 60; // Subtract hours from the difference
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));

    // Format the result
    let formattedDifference = '';
    if (hoursDifference > 0) {
        formattedDifference += `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} `;
    }
    formattedDifference += `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;


    const [fileInfo] = useState({
        name: '',
        size: '',
        url: ''
    });
    const [isReadyToDownload, setIsReadyToDownload] = useState(false);

    // Fetch file metadata


    // Trigger file download
    React.useEffect(() => {
        if (isReadyToDownload && fileInfo.url && fileInfo.name) {
            const handleDownload = async () => {
                try {
                    const response = await fetch(fileInfo.url);
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    const blob = await response.blob();
                    const blobUrl = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = fileInfo.name;
                    link.click();
                    window.URL.revokeObjectURL(blobUrl); // Clean up Blob URL
                } catch (error) {
                    console.error('Download failed', error);
                }
            };
            handleDownload();
            setIsReadyToDownload(false); // Reset state after download
        }
    }, [fileInfo, isReadyToDownload]);

    const loadNotification = () => {
        switch (data?.notificationType) {
            case 'FILE':
                {
                    return (
                        <>
                            <div className='border shadow flex gap-x-2 border-gray-200 rounded-lg px-4 py-3'>

                                <div className='w-24 h-16'>

                                    <img src={data?.image} className='rounded-lg h-full w-full' />
                                </div>
                                <div className=' flex-1 flex justify-between'>
                                    <div className='text-base text-gray-600'>


                                        <p className=' font-medium '> {data.fileName}</p>
                                        <p className=''>{data.size}</p>

                                    </div>
                                    <button className='self-start' onClick={() => setIsReadyToDownload(true)}>
                                        <IoCloudDownloadOutline className='text-gray-500' />

                                    </button>
                                </div>
                            </div>

                        </>
                    )
                }

            case 'MESSAGE': {
                return (
                    <>
                        <div className='border shadow flex gap-x-2 border-gray-200 rounded-lg px-4 py-3'>

                            <div>
                                <p className='text-lg font-medium text-gray-800 leading-6'>{data?.desc}</p>
                            </div>
                        </div>
                    </>
                )
            }

            case 'REQUEST': {
                return (
                    <div className='flex gap-x-3 my-1'>
                        <button className='rounded-md border px-4 py-1 border-gray-400 shadow text-gray-700 font-semibold text-base' >Decline</button>
                        <button className='rounded-md border px-4 py-1 border-blue-400 shadow bg-blue-500 text-white font-semibold text-base' >Accept</button>

                    </div>
                )
            }



            default: return <></>
        }

    }


    return (
        <div className='flex flex-col gap-y-3 mt-2'>
            <div className='flex gap-x-3' >
                <div className='relative' >
                    {data?.status === 'online' && <div className='h-2 w-2 rounded-full bg-green-600' ></div>}
                    <div className='w-12 h-12 rounded-full border border-gray-400'>
                        <img src={data.userImg} alt='userImg' className='w-full h-full rounded-full object-cover' />
                    </div>
                </div>
                <div className='self-center'>

                    <div className=' flex items-end flex-wrap gap-x-1 text-lg text-gray-700' >
                        <p className=' font-medium'> {data?.user} </p>
                        <p>{data?.text}</p>
                        <p className=' font-medium'>{data?.platform}</p>
                    </div>
                    <div className='flex flex-wrap gap-x-3 text-gray-500' >
                        <p>{formattedDifference}</p>
                        <p className='w-1.5 h-1.5 bg-gray-500 rounded-full self-center -mb-1' ></p>
                        <p>{data?.category}</p>
                    </div>
                </div>
            </div>
            <div className='self-end  w-10/12' >

                {loadNotification()}

            </div>
        </div>
    )
}

export default NotificationItem