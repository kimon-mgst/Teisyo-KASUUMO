const charaData = [

{
  id: "amon",

  name: "飯田亜門",
  yomi: "いいだ",

  description: [
    "帝翔学院高校野球部のエース。",
    "周りが化け物揃いの中、突出した才能はないが",
    "こつこつと積み重ねられる努力家。",
    "エースなのに一番不憫で、後輩の凛にはよくパシられている。",
    "チーム内人気は4位。"
  ],

  profile: {
    grade: "3年",
    className: "C組",
    position: "投手",
    birthday: "7月8日",
    height: "169cm",
    throwBat: "右投右打",
    like: "仲間"
  },

  color: "#e74fff",

  icon: "images/seisaku_icon.png",

  images: {
    uniform: "images/seisakutyu.png",
    casual: "images/seisakutyu.png"
  }
},

{
  id: "azuma",

  name: "東馬柊",
  yomi: "あずま",

  description: [
    "帝翔学院高校野球部のキャプテン。",
    "穏やかな性格で、周りをよく観察し支えてくれるチームの支柱。",
    "亜門とは幼少からの付き合いで息の合ったコンビ。",
    "彼女との待ち合わせにはスタバ両手が標準装備。",
    "チーム内人気は堂々の1位。"
  ],
	illust: "鬼門",

  profile: {
    grade: "3年",
    className: "A組",
    position: "捕手",
    birthday: "2月1日",
    height: "173cm",
    throwBat: "右投左打",
    like: "チームのみんな"
  },

  color: "#4fa3ff",

  icon: "images/azuma_icon.png",

  images: {
    uniform: "images/syu_seihuku.PNG",
    casual: "images/azumasyu.png"
  }
},

{
  id: "motani",

  name: "茂谷恒一",
  yomi: "もたに",

  description: [
    "『どしたん、話聞こか？』から会話が始まる。",
    "通称どしはな先輩。",
    "暴走しがちな後輩達を落ち着かせるのはいつも恒一の役目。",
    "亜門と同じく不憫ポジ。",
    "今日も凛にパシられている。"
  ],
	illust: "鬼門",
  profile: {
    grade: "3年",
    className: "B組",
    position: "中堅手",
    birthday: "1月19日",
    height: "167cm",
    throwBat: "右投右打",
    like: "家族"
  },

  color: "#4fff83",

  icon: "images/kou_icon.png",

  images: {
    uniform: "images/kou_seihuku.PNG",
    casual: "images/motanikoiti.png"
  }
},

{
    id: "onizuka",
    name: "鬼塚門斗",
	yomi: "おにづか",
description: [
    "関西弁の見た目と言動が完全にヤクザな高校生。",
	"こんな見た目をしている割には猫を可愛がる心を持っている。",
	"怖くない、怖くないんです。",
	"ただ見た目がちょっとあれなだけで。"
	],
	
profile: {
    grade: "3年",
	className: "A組",
	position: "左翼手",
	birthday: "3月2日",
	height: "184cm",
	throwBat: "右投右打",
	like: "結城ひより"
},
color: "#5c398a",
icon: "images/seisaku_icon.png",
images: {
    uniform: "images/seisakutyu.png",
	casual: "images/monto.png"
	}
},
{
    id: "yuki",
    name: "結城ひより",
    yomi: "ゆうき",
description: [
    "帝翔学院高校野球部の母的存在。",
	"5人いる3年生の紅一点。",
	"柊と同じくチームの支柱。",
	"感情の起伏が少なく常に冷静。",
	"チーム全体をよく見ている。"
],
illust: "ひえのひ",
profile: {
    grade: "3年",
	className: "C組",
	position: "一塁手",
	birthday: "3月15日",
	height: "150cm",
	throwBat: "両投両打",
	like: "タバコとお米"
},

color: "#5574bd",
icon: "images/hiyo_icon.PNG",
images: {
    uniform: "images/hiyo_seihuku.PNG",
	casual: "images/yukihiyori.PNG"
	}
},
{
    id: "sanzenin",
    name: "三千院朔",
	yomi: "さんぜんいん",
description: [
    "『世界が味方している』が口癖。",
	"もはや世界そのもの。",
	"なぜこんな性格なのに彼女がいるのかといつも不思議がられている。",
	"愉快。"
	],
profile: {
    grade: "2年",
	className: "F組",
	position: "二塁手",
	birthday: "10月23日",
	height: "157cm",
	throwBat: "両投両打",
	like: "野球"
},

color: "#c35442",
icon: "images/seisaku_icon.png",
images: {
    uniform: "images/seisakutyu.png",
	casual: "images/seisakutyu.png"
	}
},

{
    id: "mochizuki",
    name: "望月澪",
	yomi: "もちづき",
description: [
    "ギャル。",
	"みんなに猫を被っているタイプのギャル。",
	"可愛いは正義を体現したようなギャル。",
	"つまりギャル。"
],
profile: {
    grade: "2年",
	className: "F組",
	position: "投手",
	birthday: "1月25日",
	height: "156cm",
	throwBat: "右投右打",
	like: "コスメ"
},

color: "#b1eeff",
icon: "images/mio_icon.png",
images: {
    uniform: "images/mio_seihuku.png",
	casual: "images/seisakutyu.png"
	}
},

{
    id: "uryu",
    name: "瓜生蔓奈",
	yomi: "うりゅう",
description: [
    "チーム内一番のスピードを持つ稲妻。",
	"正統派ヒロイン。",
	"主人公より主人公している。",
	"才能に胡坐をかくことなく努力を続けられるいい子。"
],

illust: "ぎが",
profile: {
    grade: "1年",
	className: "C組",
	position: "右翼手",
	birthday: "6月3日",
	height: "160cm",
	throwBat: "右投右打",
	like: "ランニング"
},

color: "#5a78bf",
icon: "images/turuna_icon.PNG",
images: {
    uniform: "images/uryu_seifuku.PNG",
	casual: "images/uryuturuna.PNG"
	}
},

{
    id: "suzuki",
    name: "鈴木凛",
	yomi: "すずき",
description: [
    "小さい体で歯向かってくる姿は小型犬そのもの。",
	"正論マシーン。",
	"感情論を嫌う。",
	"効率最重視で直葉と衝突することが多い。"
	],
profile: {
    grade: "1年",
	className: "D組",
	position: "三塁手",
	birthday: "10月13日",
	height: "154cm",
	throwBat: "右投右打",
	like: "効率"
	},
	
color: "#4850bc",
icon: "images/seisaku_icon.png",
images: {
    uniform: "images/seisakutyu.png",
	casual: "images/seisakutyu.png"
	}
},

{
    id: "motani-nao",
    name: "茂谷直葉",
	yomi: "もたに",
description: [
    "冷静沈着なチームの頭脳。",
	"正論マシーン2号。",
	"凛と違いオブラートに包める。",
	"凛に唯一対抗出来る存在。"
	],
	
illust: "ひえのひ",
profile: {
    grade: "1年",
	className: "C組",
	position: "遊撃手",
	birthday: "2月25日",
	height: "163cm",
	throwBat: "右投左打",
	like: "お祝い"
	},
	
color: "#6c4c76",
icon: "images/naoha_icon.PNG",
images: {
    uniform: "images/naoha_seifuku.PNG",
	casual: "images/motaninaoha.PNG"
	}
	}

];

/* =========================
   STATE
========================= */

let currentIndex = 0;
let currentImages = {};
let currentList = [];
let defaultOrder = [...charaData];

/* =========================
   CHARACTER LIST
========================= */

function renderCharacterList(list) {

  currentList = list;

  const area =
    document.getElementById("character-list");

  area.innerHTML = "";

  list.forEach((c, index) => {

    const div =
      document.createElement("div");

    div.className = "character";

    div.onclick = () =>
      openCharaByIndex(index);

    div.innerHTML = `
      <img
        src="${c.icon}"
        alt="${c.name}"
      >

      <p>${c.name}</p>
    `;

    area.appendChild(div);

  });

}

/* =========================
   SORT
========================= */

function sortChara(type) {

  let sorted = [...charaData];

  if (type === "grade") {

    sorted.sort(
      (a, b) =>
      b.profile.grade.localeCompare(
        a.profile.grade,
        "ja"
      )
    );

  }


  if (type === "name") {

    sorted.sort(
      (a, b) =>
      a.yomi.localeCompare(
        b.yomi,
        "ja"
      )
    );

  }

  if (type === "default") {

    sorted = [...defaultOrder];

  }

  renderCharacterList(sorted);

}

/* =========================
   PROFILE GENERATE
========================= */

function createProfileHTML(c) {

  return `

    <div class="profile-row">
      <span>学年</span>
      <span>${c.profile.grade}</span>
    </div>

    <div class="profile-row">
      <span>クラス</span>
      <span>${c.profile.className}</span>
    </div>

    <div class="profile-row">
      <span>ポジション</span>
      <span>${c.profile.position}</span>
    </div>

    <div class="profile-row">
      <span>誕生日</span>
      <span>${c.profile.birthday}</span>
    </div>

    <div class="profile-row">
      <span>身長</span>
      <span>${c.profile.height}</span>
    </div>

    <div class="profile-row">
      <span>投打</span>
      <span>${c.profile.throwBat}</span>
    </div>

    <div class="profile-row">
      <span>好きなもの</span>
      <span>${c.profile.like}</span>
    </div>

  `;
}

/* =========================
   DESCRIPTION GENERATE
========================= */

function createDescriptionHTML(c) {

  let html = "";

  c.description.forEach(line => {

    html += `
      <p>${line}</p>
    `;

  });

  if (c.illust) {

    html += `
      <p class="illust-credit">
        Illust by ${c.illust}
      </p>
    `;

  }

  return html;

}

/* =========================
   OPEN CHARACTER
========================= */

function openCharaByIndex(index) {

  const c = currentList[index];

  currentIndex = index;

  currentImages =
    c.images;

  const img =
    document.getElementById("modal-img");

  img.classList.remove("show");

  setTimeout(() => {

    img.src =
      c.images.uniform;

    document
      .getElementById("modal-name")
      .textContent =
      c.name;

document
  .getElementById("modal-grade")
  .textContent =
  `${c.profile.grade} ${c.profile.className}`;

    document
      .getElementById("modal-profile")
      .innerHTML =
      createProfileHTML(c);

    document
      .getElementById("modal-description")
      .innerHTML =
      createDescriptionHTML(c);

    document
      .getElementById("chara-modal")
      .style.setProperty(
        "--chara-accent",
        c.color
      );

    img.classList.add("show");

  }, 150);

  document
    .getElementById("chara-modal")
    .classList.add("active");

}

/* =========================
   COSTUME
========================= */

function changeCostume(type) {

  if (!currentImages[type])
    return;

  const img =
    document.getElementById("modal-img");

  img.classList.remove("show");

  setTimeout(() => {

    img.src =
      currentImages[type];

    img.classList.add("show");

  }, 150);

}

/* =========================

   SWITCH
========================= */

function prevChara() {

  openCharaByIndex(
    (
      currentIndex - 1 +
      currentList.length
    ) %
    currentList.length
  );

}

function nextChara() {

  openCharaByIndex(
    (
      currentIndex + 1
    ) %
    currentList.length
  );

}

/* =========================
   CLOSE
========================= */

function closeChara() {

  document
    .getElementById("chara-modal")
    .classList.remove("active");

}

/* =========================
   INIT
========================= */

window.addEventListener(
  "load",
  () => {

    renderCharacterList(charaData);

  }
);
