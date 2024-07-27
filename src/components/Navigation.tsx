import {
    Key,
    MouseEventHandler,
    useState
} from "react";

type NavMenu = {
    title: string; unread: string; isActive: boolean; onClick: () => void
}

const Navigation = () => {
    const navMenus: NavMenu[] = [
        {
            title: "View All",
            unread: " 10",
            isActive: true,
            onClick: () => {
                setMenus((prevMenus: { title: string }[]) =>
                    prevMenus.map((menu: { title: string }) => ({
                        ...menu,
                        isActive: menu.title === "View All", // Set 'View All' to true, others to false
                    }))
                )
            },
        },
        {
            title: "Verified",
            unread: "02",
            isActive: false,
            onClick: () =>
                setMenus((prevMenus: { title: string }[]) =>
                    prevMenus.map((menu: { title: string }) => ({
                        ...menu,
                        isActive: menu.title === "Verified", // Set 'Verified' to true, others to false
                    }))
                ),
        },
        {
            title: "Mention",
            unread: "08",
            isActive: false,
            onClick: () =>
                setMenus((prevMenus: { title: string }[]) =>
                    prevMenus.map((menu: { title: string }) => ({
                        ...menu,
                        isActive: menu.title === "Mention", // Set 'Mention' to true, others to false
                    }))
                ),
        },
    ];
    const [menus, setMenus] = useState<Array<NavMenu>>(navMenus);

    return (
        <div>
            <div className="flex justify-between gap-x-3 flex-wrap">
                {menus.map(
                    (
                        item: {
                            onClick: MouseEventHandler<HTMLButtonElement> | undefined;
                            isActive: boolean;
                            title: string
                            unread: string;
                        },
                        index: { toString: () => Key | null | undefined }
                    ) => (
                        <button
                            onClick={item.onClick}
                            className={` rounded-lg px-5 py-1.5 flex  gap-x-1 justify-between items-center font-medium  ${item.isActive
                                ? "border border-gray-400 shadow"
                                : "text-gray-500"
                                } duration-500 ease-in-out`}
                            key={index.toString()}
                        >
                            {item.title}
                            {item.isActive && (
                                <div className="bg-orange-200 rounded-full px-1.5 py-1 text-xs">
                                    {item?.isActive && item?.unread}
                                </div>
                            )}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default Navigation;
