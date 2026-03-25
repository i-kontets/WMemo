function MemoItem({ id, title, content, deleteMemo, setEditingMemo }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                marginBottom: "12px",
                padding: "14px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
            }}
        >
            <h3
                style={{
                    fontSize: "18px",
                    marginBottom: "8px"
                }}
            >
                {title}
            </h3>

            <p
                style={{
                    fontSize: "14px",
                    marginBottom: "12px"
                }}
            >
                {content}
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    style={{
                        flex: 1,
                        padding: "12px",
                        fontSize: "14px"
                    }}
                    onClick={() => setEditingMemo({ id, title, content })}
                >
                    編集
                </button>

                <button
                    style={{
                        flex: 1,
                        padding: "12px",
                        fontSize: "14px"
                    }}
                    onClick={() => deleteMemo(id)}
                >
                    削除
                </button>
            </div>
        </div>
    );
}

export default MemoItem;