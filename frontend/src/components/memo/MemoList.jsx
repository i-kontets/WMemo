import MemoItem from "./MemoItem";

function MemoList() {
  const dummyMemos = [
    { id: 1, title: "レジ操作", content: "〇〇の時は△△する" },
    { id: 2, title: "クレーム対応", content: "まず謝罪する" }
  ];

  return (
    <div>
      {dummyMemos.map((memo) => (
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