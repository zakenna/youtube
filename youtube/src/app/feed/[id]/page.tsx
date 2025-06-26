interface pageProps {
    params: {id: String}
    users: {user: String}
    emails: {email: String}
};

const page = async({params}: pageProps) => {
    const data = await params;
    return (
        <div>
            page_id: {data.id}
        </div>
    );
};

export default page;