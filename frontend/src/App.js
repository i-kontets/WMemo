import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import SearchBar from "./components/ui/SearchBar";
import MemoList from "./components/memo/MemoList";

function App() {
    const [search, setSearch] = useState("");
    const [memos, setMemos] = useState([
        { id: 1, title: "レジ操作", content: "〇〇の時は△△する" },
        { id: 2, title: "クレーム対応", content: "まず謝罪する" }
    ]);

    const [editingMemo, setEditingMemo] = useState(null);

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

    const updateMemo = (id, title, content) => {
        setMemos(
            memos.map((memo) =>
                memo.id === id ? { ...memo, title, content } : memo
            )
        );
    };

    return (
        <div
            style={{
                width: "100%",
                // maxWidth: "600px",
                margin: "0 auto",
                padding: "10px",
                boxSizing: "border-box"
            }}
        >
            <Header />
            <SearchBar search={search} setSearch={setSearch} />
            <MemoList
                search={search}
                memos={memos}
                deleteMemo={deleteMemo}
                setEditingMemo={setEditingMemo}
            />
            <div style={{ marginTop: "20px" }}>
                <h3>{editingMemo ? "メモ編集" : "メモ追加"}</h3>
                <MemoInput
                    addMemo={addMemo}
                    updateMemo={updateMemo}
                    editingMemo={editingMemo}
                    setEditingMemo={setEditingMemo}
                />
            </div>
        </div>
    );
}

function MemoInput({ addMemo, updateMemo, editingMemo, setEditingMemo }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (editingMemo) {
            setTitle(editingMemo.title);
            setContent(editingMemo.content);
        }
    }, [editingMemo]);

    const handleSubmit = () => {
        if (!title) return;

        if (editingMemo) {
            updateMemo(editingMemo.id, title, content);
            setEditingMemo(null);
        } else {
            addMemo(title, content);
        }

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
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <textarea
                placeholder="内容"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button style={{ width: "100%", padding: "10px" }} onClick={handleSubmit}>
                {editingMemo ? "更新" : "追加"}
            </button>
        </div>
    );
}

export default App;