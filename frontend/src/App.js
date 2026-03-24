import { useState } from "react";
import Header from "./components/layout/Header";
import SearchBar from "./components/ui/SearchBar";
import MemoList from "./components/memo/MemoList";

function App() {
    const [search, setSearch] = useState("");
    const [memos, setMemos] = useState([
        { id: 1, title: "レジ操作", content: "〇〇の時は△△する" },
        { id: 2, title: "クレーム対応", content: "まず謝罪する" }
    ]);

    const addMemo = (title, content) => {
        const newMemo = {
            id: Date.now(),
            title,
            content
        };
        setMemos([...memos, newMemo]);
    };

    const deleteMemo = (id) => {
        setMemos(memos.filter((memo) => memo.id !== id));
    };

    return (
        <div>
            <Header />
            <SearchBar search={search} setSearch={setSearch} />
            <MemoList search={search} memos={memos} deleteMemo={deleteMemo} />
            <div style={{ padding: "10px" }}>
                <h3>メモ追加</h3>
                <MemoInput addMemo={addMemo} />
            </div>
        </div>
    );
}

function MemoInput({ addMemo }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (!title) return;
        addMemo(title, content);
        setTitle("");
        setContent("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="タイトル"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
            />
            <textarea
                placeholder="内容"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
            />
            <button onClick={handleSubmit}>追加</button>
        </div>
    );
}

export default App;