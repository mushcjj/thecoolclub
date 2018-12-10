-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-11-15 13:16:13
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcc`
--

-- --------------------------------------------------------

--
-- 表的结构 `tcc_products`
--

CREATE TABLE `tcc_products` (
  `pid` int(4) NOT NULL,
  `fid` int(4) DEFAULT NULL,
  `title` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `pic` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `color` varchar(32) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tcc_products`
--

INSERT INTO `tcc_products` (`pid`, `fid`, `title`, `pic`, `color`) VALUES
(1, 1, 'Mazda 787B Poster', '787b@2x.png', 'rgb(234,234,234)'),
(2, 1, 'Jaguar XJ 220 Poster', 'xj2000@2x.png', '#fff'),
(3, 1, 'Willy\'sJeep Poster', 'jeep@2x.png', 'rgb(251,207,169)'),
(4, 1, 'Volkswagen Transpporter T1 Poster', 'vw@2x.png', 'rgb(250,211,224)'),
(5, 1, 'Bugatti Vetron Poster', 'veyron@2x.png', 'rgb(145,200,229)'),
(6, 1, 'Tyrrell P34 Poster', 'tyrell@2x.png', 'rgb(254,241,130)'),
(7, 1, 'Ferrari Testarossa Poster', 'testat@2x.png', '#fff'),
(8, 1, 'Subaru Impreza Poster', 'subraru@2x.png', 'rgb(234,206,188)'),
(9, 1, 'Lancia Stratos Poster', 'stratos@2x.png', 'rgb(195,134,93)'),
(10, 1, 'Audi R8 Poster', 'r8@2x.png', 'rgb(190,190,190)'),
(11, 1, 'Porsche 911Carrera RS Poster', 'carrera@2x.png', 'rgb(72,185,178)'),
(12, 1, 'Mazda MX5 Poster', 'mx5@2x.png', 'rgb(138,203,193)'),
(13, 1, 'DeTomaso Pantera Poster', 'miuira@2x.png', 'rgb(169,164,214)'),
(14, 1, 'McLaren F1 Poster', 'mclaren@2x.png', 'rgb(150,128,164)'),
(15, 1, 'Land Rover Defender Poster', 'landrover@2x.png', 'rgb(255,249,195)'),
(16, 2, 'Zebra Poster', 'zebra@2x.png', '#fff'),
(17, 2, 'Wolf Poster', 'Asset-1@2x-34.png', 'rgb(192,216,155)'),
(18, 2, 'Orca Poster', 'Asset-1@2x-33.png', 'rgb(61,61,160)'),
(19, 2, 'Whale Poster', 'Asset-1@2x-32.png', 'rgb(169,235,255)'),
(20, 2, 'Turtle Poster', 'Asset-1@2x-31.png', 'rgb(196,186,149)'),
(21, 2, 'Tiger Poster', 'tiger@2x.png', 'rgb(255,204,188)'),
(22, 2, 'Racoon Poster', 'stinky@2x.png', 'rgb(247,195,49)'),
(23, 2, 'Squid Poster', 'Asset-1@2x-30.png', 'rgb(215,202,255)'),
(24, 2, 'Tuna Poster', 'Asset-1@2x-29.png', 'rgb(255,238,88)'),
(25, 2, 'Kingfisher Poster', 'Asset-1@2x-28.png', 'rgb(224,242,241)'),
(26, 2, 'Snake Poster', 'Asset-2@2x.png', 'rgb(178,226,116)'),
(27, 2, 'Lemur Poster', 'Asset-1@2x-27.png', 'rgb(215,204,200)'),
(28, 2, 'Sloth Poster', 'Asset-1@2x-26.png', 'rgb(230,238,156)'),
(29, 2, 'Shark Poster', 'Asset-1@2x-25.png', 'rgb(255,213,110)'),
(30, 2, 'Starfish Poster', 'Asset-1@2x-24.png', 'rgb(239,83,80)'),
(31, 3, 'Bigger Smalls Poster', 'biggie@2x.png', 'rgb(250,217,194)'),
(32, 3, 'Frida Kahlo Poster', 'frida@2x.png', 'rgb(79,174,83)'),
(33, 3, 'Marilyn Monroe Poster', 'marilyn@2x.png', 'rgb(91,184,183)'),
(34, 3, 'Michael Jackson Poster', 'michael@2x.png', 'rgb(251,228,190)'),
(35, 3, 'Prince Poster', 'prince5@2x.png', 'rgb(194,178,207)'),
(36, 3, 'Walt Disney Poster', 'waltdisney@2x.png', 'rgb(140,195,117)'),
(37, 3, 'Johan Cruyff Poster', 'johan@2x.png', 'rgb(181,203,180)'),
(38, 3, 'Picasso Poster', 'picasso@2x.png', 'rgb(251,231,125)'),
(39, 3, 'Steve Jobs Poster', 'steab@2x.png', 'rgb(245,246,247)'),
(40, 3, 'Vincent Van Gogh Poster', 'vg@2x.png', 'rgb(139,209,234)'),
(41, 3, 'Albert Einstein Poster', 'albert@2x.png', 'rgb(111,107,98)'),
(42, 3, 'Freddie Mercury Poster', 'freddie@2x.png', 'rgb(255,221,134)'),
(43, 3, 'Andy Warhol Poster', 'andywar@2x.png', 'rgb(210,232,220)'),
(44, 3, 'Joker Poster', 'heat@2x.png', 'rgb(245,246,247)'),
(45, 3, 'Tupac Poster', 'tupac@2x.png', 'rgb(204,163,120)'),
(46, 4, 'Capsule Space Poster', 'capsule@2x.png', 'rgb(191,192,215)'),
(47, 4, 'Marine Space Poster', 'marine@2x.png', 'rgb(108,146,140)'),
(48, 4, 'Thunderbird Space Poster', 'thunderbird@2x.png', 'rgb(244,234,180)'),
(49, 4, 'Battleship Space Poster', 'battleship@2x.png', 'rgb(219,235,243)'),
(50, 4, 'Shuttle Space Poster', 'sthuttle@2x.png', 'rgb(135,213,234)'),
(51, 4, 'Patatje Poster', 'patat@2x.png', 'rgb(252,227,211)'),
(52, 4, 'Bossche Bol Poster', 'bosche@2x.png', 'rgb(255,230,197)'),
(53, 4, 'Kroket Poster', 'kroket@2x.png', 'rgb(213,220,240)'),
(54, 4, 'Rookworst Poster', 'rookworst@2x.png', 'rgb(242,223,229)');

-- --------------------------------------------------------

--
-- 表的结构 `tcc_products_family`
--

CREATE TABLE `tcc_products_family` (
  `fid` int(11) NOT NULL,
  `fname` varchar(32) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tcc_products_family`
--

INSERT INTO `tcc_products_family` (`fid`, `fname`) VALUES
(1, 'cars'),
(2, 'animals'),
(3, 'people'),
(4, 'random');

-- --------------------------------------------------------

--
-- 表的结构 `tcc_shoppingcart_item`
--

CREATE TABLE `tcc_shoppingcart_item` (
  `iid` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `proid` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `is_checked` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tcc_shoppingcart_item`
--

INSERT INTO `tcc_shoppingcart_item` (`iid`, `uid`, `proid`, `count`, `is_checked`) VALUES
(4, 13, 3, 9, 0),
(13, 20, 1, 1, 1),
(15, 20, 28, 1, 0),
(16, 25, 2, 1, 1),
(17, 3, 28, 1, 1),
(18, 3, 14, 1, 1),
(20, 29, 31, 1, 1),
(25, 3, 18, 1, 0),
(26, 32, 13, 1, 0),
(27, 32, 5, 1, 0),
(28, 32, 19, 1, 0),
(29, 33, 1, 1, 0),
(31, 3, 1, 1, 0),
(32, 35, 20, 1, 0),
(33, 2, 19, 1, 1),
(34, 39, 19, 1, 1),
(36, 1, 28, 2, 1),
(37, 1, 9, 1, 1),
(38, 45, 22, 1, 0),
(39, 46, 1, 1, 0),
(40, 48, 28, 1, 1),
(42, 50, 28, 1, 1),
(43, 52, 28, 1, 1),
(44, 51, 5, 1, 1),
(45, 54, 1, 1, 1),
(46, 56, 28, 1, 1),
(47, 59, 5, 1, 0),
(48, 59, 9, 1, 0),
(49, 59, 19, 1, 0),
(50, 31, 1, 1, 1),
(51, 59, 1, 2, 0),
(52, 60, 28, 1, 1),
(53, 46, 21, 1, 0),
(55, 61, 5, 1, 1),
(56, 61, 6, 1, 0),
(57, 70, 1, 1, 1),
(58, 71, 1, 1, 1),
(60, 36, 17, 1, 1),
(61, 35, 17, 7, 0),
(62, 35, 5, 13, 0),
(63, 72, 9, 1, 1),
(64, 82, 1, 1, 1),
(65, 83, 17, 1, 1),
(66, 35, 28, 4, 0),
(67, 65, 40, 2, 0),
(72, 1, 10, 1, 0);

-- --------------------------------------------------------

--
-- 表的结构 `tcc_user`
--

CREATE TABLE `tcc_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tcc_user`
--

INSERT INTO `tcc_user` (`uid`, `uname`, `upwd`, `phone`) VALUES
(1, 'dingding', '123456', '13511011000'),
(2, 'dangdang', '123456', '13501234568'),
(3, 'doudou', '123456', '13501234569'),
(4, 'yayadddd', '123456', '13501234560'),
(6, 'ABCD', '123456', '13538894495'),
(8, '121123', 'w13945128995', '13213389258'),
(9, '555555', '5555555', '13400000000'),
(10, 'xuyong', '123456', '15525623622'),
(11, 'admin', 'cxy930123', '13580510164'),
(12, 'siyongbo', '900427', '18447103998'),
(13, 'qwerty', '123456', '15617152367'),
(14, 'dingziqiang', '456456', '15567502520'),
(15, 'hdb2264068', 'huang123', '18898405759'),
(16, 'wenhua', '654321', '15012345678'),
(21, 'Jessy', 'ac210921', '13523456789'),
(22, 'yuanxf', '123456', '13537763301'),
(23, '查安军', '025520', '18158899905'),
(24, '123456', '123456', '13815668132'),
(25, '1234', '111111', '18061920422'),
(26, 'qwe12345', '123123', '15234010643'),
(27, '海贼王', '5124457', '18826450879'),
(28, 'hanrufuyun00', 'hanrufuyun11', '13853114827'),
(29, 'li999999', 'li999999', '18557512341'),
(30, '111111111111', '123456', '15275106677'),
(31, 'tom', '123456', '13801234568'),
(32, 'zhouzhi', '123456', '17600587478'),
(33, 'juleck', '123456', '12345678901'),
(34, 'yangtao', '123456', '18256953222'),
(35, 'tarena', '123456', '17711625897'),
(36, 'xiaobai', 'xx527603', '13980312111'),
(37, '璐璐lu', '546521ll', '15892761793'),
(38, '胖王二二', 'woaidoubi1.', '13269195181'),
(39, 'Yeye ', '123456', '15062394551'),
(40, 'lsj', '123456', '13156467891'),
(41, 'lsj', '123456', '13156467891'),
(42, 'lsj', '123456', '13156467891'),
(43, 'lsj', '123456', '13156467891'),
(45, 'hjh', '958030', '17812344567'),
(46, 'ewq', '123456', '12345678909'),
(47, 'pipi', '123456', '12367889993'),
(48, 'Lovica', '309418727', '18435130456'),
(49, 'htt0908', '19920908', '15244691033'),
(50, 'SUXUEMEI', '123456', '15817338974'),
(51, 'zhong', '123456', '13120211111'),
(52, '金豆豆', '123456789', '15738619097'),
(53, 'wangjunfei', '123456', '13205935797'),
(54, 'gijhglkhglkh', '123456', '15698765423'),
(55, 'zuiyd1314', 'zuiyh1994', '15927843908'),
(56, 'xiaoming123', '123456', '13553688534'),
(57, 'yuanzhi', '123456', '15962573639'),
(58, 'fengkuang11', 'fengkuang113', '18559132247'),
(60, 'yxzaaa', '123456', '13716225357'),
(61, 'linlei0001', '58874439', '13390922939'),
(62, 'superman', '1314520', '12345678910'),
(63, 'tom222', '123456', '13456789012'),
(64, 'tom1234', '123456', '13423456789'),
(65, 'Liyu123', 'asd8520', '18911743412'),
(66, 'Liyu123', 'asd8520', '18911743412'),
(67, '李白李白', '123456', '13986273022'),
(68, 'dingdong', '123456', '15112316516'),
(69, 'wenjinhua', '236239', '13516574786'),
(70, 'thebigleg', '1a4b2c8d5e7f', '13572508752'),
(71, 'zhangsan', 'add123456', '12234324223'),
(72, '高渐离', '123456', '18352501250'),
(73, 'lifan', '123456', '18092933456'),
(74, 'zhangsan99', '123456zs', '13934721892'),
(75, 'tingDING', '123456', '13548525468'),
(76, 'dongdong', '123456', '13946585968'),
(77, 'weiyiwei', '123456', '15923741956'),
(78, '落英缤纷赋酒诗', 'sAberTime050', '17727420979'),
(79, 'xiaoming1234', '123456', '15269188535'),
(80, 'loonchao', '123456', '13548729051'),
(81, 'hushuang', '123456', '15802507525'),
(83, 'fhr9588', '000009588', '12345666666'),
(84, 'baibaidexue', '13809024377', '18301973827'),
(85, 'tom10', '123456', '12323456'),
(91, 'tom', '1234', '13456789251'),
(92, 'jerry', '123456', '13456789251'),
(93, 'amy', '123456', '13456789251'),
(94, 'tom', '123', '13511011000'),
(95, 'yayaa a ', '123', '13511011000'),
(96, 'yaya12', '123', '13511011000'),
(97, 'yaya', '123', '13511011000'),
(98, 'yaya', '123', '13511011000'),
(99, 'tom222adfaf', 'adf', '13456789251'),
(100, 'tom', 'adf', '13456789251');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tcc_products`
--
ALTER TABLE `tcc_products`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `tcc_products_family`
--
ALTER TABLE `tcc_products_family`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `tcc_shoppingcart_item`
--
ALTER TABLE `tcc_shoppingcart_item`
  ADD PRIMARY KEY (`iid`);

--
-- Indexes for table `tcc_user`
--
ALTER TABLE `tcc_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `tcc_products`
--
ALTER TABLE `tcc_products`
  MODIFY `pid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- 使用表AUTO_INCREMENT `tcc_products_family`
--
ALTER TABLE `tcc_products_family`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `tcc_shoppingcart_item`
--
ALTER TABLE `tcc_shoppingcart_item`
  MODIFY `iid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- 使用表AUTO_INCREMENT `tcc_user`
--
ALTER TABLE `tcc_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
