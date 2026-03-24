function MemoItem({ id, title, content, deleteMemo }) {
    return (
        <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={() => deleteMemo(id)}>削除</button>
        </div>
    );
}

export default MemoItem;