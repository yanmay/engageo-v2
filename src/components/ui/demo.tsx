"use client";

import React from "react";
import DatabaseWithRestApi from "./database-with-rest-api";

export const Page = () => {
    return (
        <div className="p-4 rounded-xl items-center justify-center flex bg-[#0A0A0A] w-full mt-10">
            <DatabaseWithRestApi
                title="Engageo Core Recovery Engine vs CRM"
                badgeTexts={{
                    first: "DETECT",
                    second: "VOICE AI",
                    third: "QUALIFY",
                    fourth: "BOOK"
                }}
            />
        </div>
    );
};

export default Page;
