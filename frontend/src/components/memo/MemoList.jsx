import MemoItem from "./MemoItem";

function MemoList({ search, memos }) {
    const filteredMemos = memos.filter((memo) =>
        memo.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {filteredMemos.map((memo) => (
                <MemoItem
                    key={memo.id}
                    title={memo.title}
                    content={memo.content}
                />
            ))}
        </div>
    );
}

export default MemoList;