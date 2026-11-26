
<?php

header("Content-Type: application/json; charset=utf-8");

try {
    require_once __DIR__ . "/../db.php";

    $sql = "SELECT * FROM products ORDER BY id";

    $stmt = $pdo->query($sql);

    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($products, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);

    echo json_encode([
        "error" => "データの取得に失敗しました。"
    ], JSON_UNESCAPED_UNICODE);
}
