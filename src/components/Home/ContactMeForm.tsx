"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactMeForm = () => {
    const [inputFocused, setInputFocused] = useState({
        email: false,
        subject: false,
    });
    const [values, setValues] = useState({
        senderEmail: "",
        subject: "",
        message: "",
    });
    const [sending, setSending] = useState(false);

    const sendMail = (e: any) => {
        e.preventDefault();
        setSending(true);

        fetch("/api/sendmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Mail sent successfully");
                setSending(false);
                setValues({
                    senderEmail: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <form
            onSubmit={sendMail}
            className="max-w-2xl mx-auto"
        >
            <div className="flex flex-col mt-4">
                <label
                    htmlFor="email"
                    className={`text-brand1 font-ubuntu text-2xl select-none transition ${
                        !inputFocused.email &&
                        !values.senderEmail &&
                        "translate-y-8 translate-x-2"
                    }`}
                >
                    Email<sup className="text-red-500">*</sup>
                </label>
                <input
                    type="email"
                    id="email"
                    className="bg-transparent focus:outline-none border-b-4 border-brand1 text-white font-ubuntu text-2xl w-full p-2 py-0"
                    onFocus={() =>
                        setInputFocused({ ...inputFocused, email: true })
                    }
                    onBlur={() =>
                        setInputFocused({ ...inputFocused, email: false })
                    }
                    onChange={(e) =>
                        setValues({ ...values, senderEmail: e.target.value })
                    }
                    value={values.senderEmail}
                />
            </div>
            <div className="flex flex-col my-4">
                <label
                    htmlFor="subject"
                    className={`text-brand1 font-ubuntu text-2xl select-none transition ${
                        !inputFocused.subject &&
                        !values.subject &&
                        "translate-y-8 translate-x-2"
                    }`}
                >
                    Subject<sup className="text-red-500">*</sup>
                </label>
                <input
                    type="text"
                    id="subject"
                    className="bg-transparent focus:outline-none border-b-4 border-brand1 text-white font-ubuntu text-2xl w-full p-2 py-0"
                    onFocus={() =>
                        setInputFocused({ ...inputFocused, subject: true })
                    }
                    onBlur={() =>
                        setInputFocused({ ...inputFocused, subject: false })
                    }
                    onChange={(e) =>
                        setValues({ ...values, subject: e.target.value })
                    }
                    value={values.subject}
                />
            </div>
            <div className="flex flex-col border-4 border-brand1">
                <textarea
                    id="message"
                    className="bg-transparent focus:outline-none text-white font-ubuntu text-2xl w-full p-2 placeholder:text-brand1"
                    rows={5}
                    placeholder="Message*"
                    onChange={(e) =>
                        setValues({ ...values, message: e.target.value })
                    }
                    value={values.message}
                />
            </div>

            <button
                type="submit"
                className="bg-brand1 px-5 py-2 rounded-full text-xl text-center font-ibmplexmono font-semibold flex items-center gap-2 mx-auto mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                    !values.senderEmail ||
                    !values.subject ||
                    !values.message ||
                    sending
                }
            >
                {sending ? "Sending..." : "Send"}
                <FaPaperPlane />
            </button>
        </form>
    );
};

export default ContactMeForm;
