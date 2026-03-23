function MemoItem({ title, content }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default MemoItem;