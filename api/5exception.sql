-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 08, 2021 at 06:24 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `5exception`
--

-- --------------------------------------------------------

--
-- Table structure for table `FormData`
--

CREATE TABLE `FormData` (
  `id` int(11) NOT NULL,
  `rawData` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `FormData`
--

INSERT INTO `FormData` (`id`, `rawData`) VALUES
(2, '[{\"index\":0.44736437018729647,\"image\":\"/api/img/movies.jpeg\",\"title\":\"gdfdg\",\"discription\":\"tt\",\"qty\":\"6\",\"price\":\"666\",\"date\":\"2021-11-18\"},{\"index\":0.9867097558718156,\"image\":\"/api/img/series.jpeg\",\"title\":\"tert\",\"discription\":\"66\",\"qty\":\"66\",\"price\":\"76767\",\"date\":\"2021-11-10\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `FormData`
--
ALTER TABLE `FormData`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `FormData`
--
ALTER TABLE `FormData`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
