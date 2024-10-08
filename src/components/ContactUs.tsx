import React, {useRef, FormEvent} from 'react';

import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

import {FaGithub, FaLinkedinIn} from 'react-icons/fa6';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {useTranslation} from 'react-i18next';

interface ContactProps {
}

const ContactUs: React.FC<ContactProps> = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_tuunw9b', 'template_3w46khg', form.current, {
                publicKey: 'xWhyHWv6rM54IekvN',
            })
            .then(
                (response: EmailJSResponseStatus) => {
                    console.log('SUCCESS!', response);
                },
                (error: any) => {
                    console.error('FAILED...', error);
                }
            );
    };

    const [t, i18n] = useTranslation("global");

    return (
        <div className="flex flex-col lg:inline-flex items-center gap-4 px-4 w-full" id="contact">

            <form ref={form} onSubmit={sendEmail} className="flex flex-col text-blue-200 dark:text-blue-100 float-left">
                <h2 className="text-4xl">{t("content.contact")}!</h2>
                <div className="inline-flex gap-4">
                    <input
                        className="bg-slate-200 dark:bg-slate-655 focus:outline-none rounded-xl p-5 my-4 w-1/2 border-2 border-transparent focus:border-blue-200"
                        placeholder="Name" type="text" name="user_name"/>

                    <input
                        className="bg-slate-200 dark:bg-slate-655 focus:outline-none rounded-xl p-5 my-4 w-1/2 border-2 border-transparent focus:border-blue-200"
                        placeholder="Email" type="email" name="user_email"/>
                </div>

                <textarea
                    className="bg-slate-200 dark:bg-slate-655 focus:outline-none rounded-xl p-5 my-4 resize-none border-2 border-transparent focus:border-blue-200"
                    placeholder="Message" name="message"/>
                <input
                    className="bg-blue-200 dark:bg-blue-100 text-white dark:text-black px-4 py-2 w-28 rounded-xl cursor-pointer"
                    type="submit" value="Send"/>
            </form>


            <div className="float-right flex flex-col justify-center items-center w-1/2 p-5 h-full rounded-xl gap-2">
                <div className="flex flex-row justify-center text-5xl">
                    <a href="mailto:alexkunze82@gmail.com"><MdOutlineAlternateEmail/></a>
                    <a href="https://linkedin.com/in/alexander-k-269623124"><FaLinkedinIn/></a>
                    <a href="https://github.com/AlexanderMartinKunze"><FaGithub/></a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;