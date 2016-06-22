import { Unit } from "./Unit";

var warrior = new Unit('a', 1, 1);

var app = document.getElementById('app');

app.innerHTML = warrior.print();