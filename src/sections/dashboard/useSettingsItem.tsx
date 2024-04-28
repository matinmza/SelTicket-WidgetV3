import api from "@/app/server";
import {
    selectOnBackToApp,
    selectOnCloseWidget,
} from "@/features/widget/widget.selectors";
import useAppDispatch from "@/hooks/store/useAppDispatch";

import useAppSelector from "@/hooks/store/useAppSelector";

const useSettingsItem = () => {
    const onClose = useAppSelector(selectOnCloseWidget);
    const onBackToApp = useAppSelector(selectOnBackToApp);

    const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    return [
        {
            title: "مشخصات فردی",
            link: "/profile",
        },
        // {
        //     title: " پرداخت ها",
        //     link: "/payments",
        // },
        {
            title: "آپدیت و فیچر های درخواستی",
            link: "/features",
        },
        {
            title: "تماس با ما",
            link: "/contact-us",
        },
        ...(onBackToApp
            ? [
                  {
                      title: "راه اندازی مجدد",
                      onClick: () => {
                          onBackToApp();
                      },
                  },
              ]
            : []),
        {
            title: "خروج",
            onClick: () => {
                dispatch(api.util.resetApiState());
                onClose();
            },
        },
    ];
};

export default useSettingsItem;
