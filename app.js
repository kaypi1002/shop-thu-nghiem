// ======================================================
// PRODUCTS
// ======================================================

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 150000,
    category: "electronics",
    shop: "Apple公式ストア"
  },
  {
    id: 2,
    name: "AirPods Pro",
    price: 38000,
    category: "electronics",
    shop: "Apple公式ストア"
  },
  {
    id: 3,
    name: "4K テレビ 55インチ",
    price: 78000,
    category: "electronics",
    shop: "家電ショップA"
  },
  {
    id: 4,
    name: "メンズ パーカー",
    price: 4500,
    category: "fashion",
    shop: "ファッションストアB"
  },
  {
    id: 5,
    name: "レディース ワンピース",
    price: 6200,
    category: "fashion",
    shop: "ファッションストアC"
  },
  {
    id: 6,
    name: "北海道ラーメンセット",
    price: 3200,
    category: "food",
    shop: "グルメ市場"
  },
  {
    id: 7,
    name: "お米 10kg",
    price: 4200,
    category: "food",
    shop: "食品スーパーD"
  },
  {
    id: 8,
    name: "ゲーミングマウス",
    price: 6800,
    category: "electronics",
    shop: "PCショップE"
  }
];


// ======================================================
// STATE
// ======================================================

let filteredCategory = "all";
let maxPriceFilter = null;
let searchKeyword = "";
let cart = [];


// ======================================================
// LOGIN
// ======================================================

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";

  document.getElementById("message").innerText = "";

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}


function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}


function login() {

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  const message = document.getElementById("message");

  if (user === "" || pass === "") {

    message.innerText = "ユーザー名とパスワードを入力してください。";
    message.style.color = "red";

    return;
  }


  // DEMO LOGIN
  if (user === "admin" && pass === "1234") {

    message.innerText = "ログイン成功！";
    message.style.color = "green";

    setTimeout(function () {
      closeLogin();
    }, 1000);

  } else {

    message.innerText =
      "アカウントまたはパスワードが違います。";

    message.style.color = "red";
  }
}


// ======================================================
// REGISTER
// ======================================================

function openRegister() {

  document.getElementById("registerModal").style.display = "flex";

  document.getElementById("registerMessage").innerText = "";

  document.getElementById("registerUsername").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";
}


function closeRegister() {
  document.getElementById("registerModal").style.display = "none";
}


function registerUser() {

  const username =
    document.getElementById("registerUsername").value.trim();

  const email =
    document.getElementById("registerEmail").value.trim();

  const password =
    document.getElementById("registerPassword").value;

  const message =
    document.getElementById("registerMessage");


  if (username === "" || email === "" || password === "") {

    message.innerText =
      "すべての項目を入力してください。";

    message.style.color = "red";

    return;
  }


  if (password.length < 4) {

    message.innerText =
      "パスワードは4文字以上で入力してください。";

    message.style.color = "red";

    return;
  }


  message.innerText =
    "会員登録が完了しました！";

  message.style.color = "green";

}


// ======================================================
// PRODUCTS
// ======================================================

function renderProducts() {

  const list =
    document.getElementById("productList");

  let data = products.slice();


  // CATEGORY FILTER

  if (filteredCategory !== "all") {

    data = data.filter(function (p) {
      return p.category === filteredCategory;
    });

  }


  // PRICE FILTER

  if (maxPriceFilter !== null) {

    data = data.filter(function (p) {
      return p.price <= maxPriceFilter;
    });

  }


  // SEARCH

  if (searchKeyword.trim() !== "") {

    const kw =
      searchKeyword.toLowerCase();

    data = data.filter(function (p) {

      return (
        p.name.toLowerCase().includes(kw) ||
        p.shop.toLowerCase().includes(kw)
      );

    });

  }


  // DISPLAY PRODUCTS

  list.innerHTML =
    data.map(function (p) {

      return productCardHTML(p);

    }).join("");


  // NO RESULT

  if (data.length === 0) {

    list.innerHTML = `
      <p style="
        font-size:13px;
        color:#777;
        padding:20px;
      ">
        該当する商品が見つかりませんでした。
      </p>
    `;

  }

}


// ======================================================
// PRODUCT CARD
// ======================================================

function productCardHTML(p) {

  return `
    <div
      class="product-card"
      onclick="viewDetail(${p.id})"
    >

      <div class="product-img">
        画像
      </div>

      <div class="product-name">
        ${p.name}
      </div>

      <div class="product-price">
        ${p.price.toLocaleString()}円
      </div>

      <div class="product-meta">
        ${p.shop}
      </div>

      <div
        class="product-actions"
        onclick="event.stopPropagation()"
      >

        <button
          class="btn btn-outline"
          onclick="viewDetail(${p.id})"
        >
          詳細
        </button>

        <button
          class="btn btn-primary"
          onclick="addToCart(${p.id})"
        >
          カートに入れる
        </button>

      </div>

    </div>
  `;
}


// ======================================================
// FILTER
// ======================================================

function filterCategory(cat) {

  filteredCategory = cat;

  renderProducts();

}


// ======================================================
// PRICE FILTER
// ======================================================

function applyPriceFilter() {

  const val =
    document.getElementById("maxPrice").value;

  maxPriceFilter =
    val !== "" ? Number(val) : null;

  renderProducts();

}


// ======================================================
// SEARCH
// ======================================================

function handleSearch() {

  const val =
    document.getElementById("searchInput").value;

  searchKeyword = val;

  renderProducts();

}


// ======================================================
// CART
// ======================================================

function addToCart(id) {

  const item =
    cart.find(function (i) {
      return i.id === id;
    });


  if (item) {

    item.qty++;

  } else {

    cart.push({
      id: id,
      qty: 1
    });

  }


  updateCartCount();

  renderCart();

  document.getElementById(
    "cartSection"
  ).style.display = "block";

}


// ======================================================
// REMOVE CART
// ======================================================

function removeFromCart(id) {

  cart =
    cart.filter(function (i) {
      return i.id !== id;
    });


  updateCartCount();

  renderCart();

}


// ======================================================
// CART COUNT
// ======================================================

function updateCartCount() {

  const count =
    cart.reduce(function (sum, i) {
      return sum + i.qty;
    }, 0);


  document.getElementById(
    "cartCount"
  ).innerText = count;

}


// ======================================================
// RENDER CART
// ======================================================

function renderCart() {

  const container =
    document.getElementById("cartItems");

  const totalEl =
    document.getElementById("cartTotal");


  if (cart.length === 0) {

    container.innerHTML = `
      <div class="cart-empty">
        カートに商品がありません。
      </div>
    `;

    totalEl.innerHTML = "";

    return;
  }


  let total = 0;


  container.innerHTML =
    cart.map(function (i) {

      const p =
        products.find(function (p) {
          return p.id === i.id;
        });


      const sub =
        p.price * i.qty;


      total += sub;


      return `
        <div class="cart-item">

          <div>
            ${p.name} × ${i.qty}
          </div>

          <div>

            ${sub.toLocaleString()}円

            <button
              class="btn btn-outline"
              onclick="removeFromCart(${i.id})"
            >
              削除
            </button>

          </div>

        </div>
      `;

    }).join("");


  totalEl.innerHTML =
    `合計：${total.toLocaleString()}円`;

}


// ======================================================
// CART TOGGLE
// ======================================================

function toggleCart() {

  const sec =
    document.getElementById("cartSection");


  if (
    sec.style.display === "none" ||
    sec.style.display === ""
  ) {

    sec.style.display = "block";

  } else {

    sec.style.display = "none";

  }

}


// ======================================================
// PRODUCT DETAIL
// ======================================================

function viewDetail(id) {

  const p =
    products.find(function (p) {
      return p.id === id;
    });


  if (!p) return;


  alert(
    `${p.name}\n` +
    `${p.price.toLocaleString()}円\n` +
    `ショップ：${p.shop}`
  );

}


// ======================================================
// CHECKOUT
// ======================================================

function checkout() {

  if (cart.length === 0) {

    alert("カートに商品がありません。");

    return;
  }


  alert(
    "購入手続き画面へ進みます。\n" +
    "（デモ機能）"
  );

}


// ======================================================
// CLOSE MODAL WHEN CLICK OUTSIDE
// ======================================================

window.onclick = function (event) {

  const loginModal =
    document.getElementById("loginModal");

  const registerModal =
    document.getElementById("registerModal");


  if (event.target === loginModal) {

    closeLogin();

  }


  if (event.target === registerModal) {

    closeRegister();

  }

};


// ======================================================
// INIT
// ======================================================

renderProducts();
updateCartCount();