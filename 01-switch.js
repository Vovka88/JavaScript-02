const _starts = Number.parseInt(prompt("Stars"));
let _price;
switch (_stars) {
  case 1:
    _price = "20$";
    break;
  case 2:
    _price = "30$";
    break;
  case 3:
    _price = "50$";
    break;
  case 4:
    _price = "70$";
    break;
  case 5:
    _price = "120$";
    break;
  default:
    console.log("Такої кількості зірок немає!");
}
