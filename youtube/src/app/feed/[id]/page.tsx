interface pageProps {
    params: Promise<{id: string}>    // Next.js 15+에서는 Promise
}

const page = async({params}: pageProps) => {
    console.log("Server component: 1");
    
    const { id } = await params;  // params도 await 필요
    const user = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await user.json();
    
    console.log("Server component: 2");
    console.log(data);  // API 응답 확인
    
    return (
        <div>
            <div>page_id: {data.id}</div>
            <div>email: {data.email}</div>  {/* API에서 받은 email 사용 */}
        </div>
    );
};

export default page;