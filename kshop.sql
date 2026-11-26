-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 26, 2026 lúc 01:48 AM
-- Phiên bản máy phục vụ: 10.11.19-MariaDB
-- Phiên bản PHP: 8.3.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `kshop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `category` varchar(50) NOT NULL,
  `shop` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category`, `shop`, `image`, `stock`, `description`) VALUES
(1, 'iPhone 15 Pro', 120000, 'electronics', 'Apple公式ストア', 'images/ip15pro.jpg', 10, '軽量で丈夫なチタニウムを採用したスマートフォン。高性能なカメラとA17 Proチップを搭載しています。'),
(2, 'AirPods Pro', 38000, 'electronics', 'Apple公式ストア', 'images/airpods pro 2.jpg', 20, 'アクティブノイズキャンセリング機能を搭載したワイヤレスイヤホン。クリアな音質で音楽や通話を楽しめます。'),
(3, '4K テレビ 55インチ', 78000, 'electronics', '家電ショップA', 'images/TV 4k.jpg', 8, '55インチの大画面で高精細な4K映像を楽しめるテレビ。映画やスポーツ、ゲームの視聴におすすめです。'),
(4, 'メンズ パーカー', 4500, 'fashion', 'ファッションストアB', 'images/áo khoác.jpg', 35, 'シンプルで着回しやすいメンズパーカー。普段着やお出かけなど、さまざまなシーンで活躍します。'),
(5, 'レディース ワンピース', 6200, 'fashion', 'ファッションストアC', 'images/đầm.jpg', 25, '上品でおしゃれなレディースワンピース。普段のお出かけや特別な日にもおすすめです。'),
(6, '北海道ラーメンセット', 3200, 'food', 'グルメ市場', 'images/set ramen.jpg', 50, '北海道のラーメンをご自宅で手軽に楽しめるセットです。ラーメン好きの方や贈り物にもおすすめです。'),
(7, 'お米 10kg', 4200, 'food', '食品スーパーD', 'images/rice.jpg', 30, '毎日の食事におすすめのお米10kg。ご家庭での食事やお弁当など、幅広くお使いいただけます。'),
(8, 'ゲーミングマウス', 6800, 'electronics', 'PCショップE', 'images/game mouse.jpg', 0, 'ゲームやパソコン操作に適したゲーミングマウス。快適な操作性を重視したデザインです。');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
