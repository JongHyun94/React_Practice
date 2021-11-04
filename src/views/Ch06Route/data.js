let lastBno = 15;

let data = [];
for(var i=1; i<=lastBno; i++) {
  data.push({
    bno:i, 
    btitle:"제목"+i, 
    bcontent:"내용"+i, 
    bwriter:"user1", 
    bdate:new Date().toLocaleDateString(), 
    bhitcount:0
  });
}

export function getBoardList(pageNo) {
  data.sort((a, b) => b.bno-a.bno);  
  if(!pageNo) pageNo = 1;
  const start = (pageNo - 1) * 5;
  const end = pageNo * 5;
  var boardList = data.slice(start, end);
  return boardList;
};

export function insertBoard(board) {
  lastBno++;
  board.bno = lastBno;
  board.bdate = new Date().toLocaleDateString();
  board.bhitcount = 0; 
  data.push(board);
}

export function getBoard(bno) {
  console.log("hitcount fun");
  const board = data.find((board) => {
    console.log("funBoard:",board);
    console.log("funBoard hit:",board.bhitcount);

    return board.bno === bno;
  });
  console.log("funBoard1:",board);
  console.log(board.bhitcount);
  board.bhitcount++;
  console.log(board.bhitcount);
  console.log("hitcount fun finish");
  console.log("funBoard2:",board);
  return board;
}

export function deleteBoard(bno) {
  const index = data.findIndex(board => board.bno === bno);
  data.splice(index, 1);
}

export function updateBoard(board) {
  const row = data.find(row => row.bno === board.bno);
  row.btitle = board.btitle;
  row.bcontent = board.bcontent;
}