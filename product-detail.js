
// ======================================================
// GET PRODUCT ID FROM URL
// ======================================================

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

let product = null;

async function loadProductDetail() {
    try {
        const response = await fetch("api/products.php");

        if (!response.ok) {
            throw new Error("商品データの取得に失敗しました。");
        }

        const products = await response.json();

        product = products.find(function(p) {
            return p.id === productId;
        });

        renderProductDetail();

    } catch (error) {
        console.error(error);

        document.getElementById("detailName").textContent =
            "商品データの取得に失敗しました。";
    }
}


// ======================================================
// DISPLAY PRODUCT DETAIL
// ======================================================

function renderProductDetail() {

  // PRODUCT NOT FOUND

  if (!product) {
    document.getElementById("detailName").textContent =
      "商品が見つかりませんでした。";

    return;
  }


  // PAGE TITLE

  document.title = `${product.name} | K'shop`;


  // PRODUCT IMAGE

  document.getElementById("detailImage").src =
    product.image;

  document.getElementById("detailImage").alt =
    product.name;


  // PRODUCT NAME

  document.getElementById("detailName").textContent =
    product.name;


  // SHOP NAME

  document.getElementById("detailShop").textContent =
    `ショップ：${product.shop}`;


  // PRODUCT PRICE

  document.getElementById("detailPrice").textContent =
    `${product.price.toLocaleString()}円`;


  // STOCK

  document.getElementById("detailStock").textContent =
  product.stock > 0
    ? `在庫あり（残り${product.stock}点）`
    : "在庫切れ";

  // DESCRIPTION

 document.getElementById("detailDescription").textContent =
  product.description || "商品説明は準備中です。";
}


// ======================================================
// INIT
// ======================================================

loadProductDetail();
