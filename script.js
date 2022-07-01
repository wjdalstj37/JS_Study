const player = {
  name: "minseo",
  point: 10,
  fat: true
};

/*
console.log(player);
console.log(player.name); // player["name"]
*/

/*
console.log(player);
player.fat = false; // constant안의 무언가를 업데이트 할 때는 아무 문제 없음 (전체를 바꿀 때 문제 발생)
console.log(player);
*/

console.log(player);
player.lastName = "potato";
console.log(player);