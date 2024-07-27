import NotificationItem from './NotificationItem'

const NotificationList = () => {

    const notifications = [
        {
            creation_time: '2024-07-25T18:00:00Z',
            image: './Sign up idea 01.jpeg',
            category: 'Design',
            platform: 'ConnectBank',
            user: 'Caitlyn',
            userImg: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815',
            status: 'online',
            text: 'shared two files in',
            download: true,
            desc: '',
            fileName: 'Sign up idea 01.jpeg',
            size: '123kb',
            notificationType: 'FILE'

        },

        {
            creation_time: '2024-07-25T18:00:00Z',
            image: '',
            category: 'Design',
            platform: 'ConnectBank',
            user: 'Caitlyn',
            userImg: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815',
            status: 'online',
            text: 'shared two files in',
            download: false,
            desc: 'Finished up the first crack at the new dashboard! Look really great. Let me know how it goes.',
            fileName: '',
            size: '',
            notificationType: 'MESSAGE'

        },
        {
            creation_time: '2024-07-25T18:00:00Z',
            image: '',
            category: 'Design',
            platform: 'SurfaceX',
            user: 'Marco',
            userImg: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815',
            status: 'offline',
            text: 'requested access to',
            download: false,
            desc: '',
            fileName: '',
            size: '',
            notificationType: 'REQUEST'
        },

        {
            creation_time: '2024-07-25T18:00:00Z',
            image: '',
            category: 'Design',
            platform: 'SurfaceX',
            user: 'Florence',
            userImg: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815',
            status: 'offline',
            text: 'added a new file in',
            download: false,
            desc: 'Finished up the first crack at the new dashboard! Look really great. Let me know how it goes.',
            fileName: '',
            size: '',
            notificationType: ''
        },
    ]

    return (
        <div>
            <div className='flex flex-col gap-y-3 max-h-[calc(80vh-74px)] overflow-auto'>
                {notifications.map((item, index) => <NotificationItem data={item} key={index.toString()} />)}
            </div>
        </div>
    )
}

export default NotificationList