import { IMG_CONSTANTS } from "@/constants/img.constants";
import { FC } from "react";
import ContactCard from "../contact-card";
import { STRING_CONTACT } from "../string.constants";
import IconPhone from "@/components/icons/IconPhone";
import IconPostalCode from "@/components/icons/IconPostalCode";
import IconLocation from "@/components/icons/IconLocation";

const ContactUsView: FC = () => {
    return (
        <div className="t-py-7 t-px-5">
            <img
                src={IMG_CONSTANTS.CONTACT_ROBOT}
                className="t-w-52 t-h-52 t-mx-auto"
            />
            <div className="t-flex t-gap-5 t-flex-col">
                <ContactCard
                    Icon={IconPhone}
                    title={STRING_CONTACT.TELEPHONE}
                    value={STRING_CONTACT.TEL}
                />
                <ContactCard
                    Icon={IconPostalCode}
                    title={STRING_CONTACT.POSTAL_CODE}
                    value={STRING_CONTACT.POSTAL_CODE_VALUE}
                />
                <ContactCard
                    Icon={IconLocation}
                    title={STRING_CONTACT.POSTAL_ADDRESS}
                    value={STRING_CONTACT.ADDRESS}
                    valueInNextLine
                />
            </div>
        </div>
    );
};

export default ContactUsView;
