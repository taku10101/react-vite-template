import React from "react";
import { useParams } from "react-router-dom";

const Page = () => {
    const { id } = useParams<{ id: string }>();

    return <div>Dynamic Page for ID: {id}</div>;
};

export default Page;
