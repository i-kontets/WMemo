import MemoItem from "./MemoItem";

function MemoList({ search, memos, deleteMemo, setEditingMemo }) {
    const filteredMemos = memos.filter((memo) =>
        memo.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {filteredMemos.map((memo) => (
                <MemoItem
                    key={memo.id}
                    id={memo.id}
                    title={memo.title}
                    content={memo.content}
                    deleteMemo={deleteMemo}
                    setEditingMemo={setEditingMemo}
                />
            ))}
        </div>
    );
}

export default MemoList;