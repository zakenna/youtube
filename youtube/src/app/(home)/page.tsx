import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div>
            <Link href="https://velog.io/setting">
                <Image src="/logo.svg" alt="logo" width={100} height={100}>
                </Image>
            </Link>
            <p className="text-xl font-semibold">Youtube</p>
        </div>
    );
};

export default page;