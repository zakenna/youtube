interface SearchProps {
    children: React.ReactNode;  // children 추가
}

const Search = ({children}: SearchProps) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="search" 
                className="w-[500px] h-[30px]"  // Tailwind 사용
            />
            <button>
            </button>      
            {children}      
        </div>
    );
};

export default Search;