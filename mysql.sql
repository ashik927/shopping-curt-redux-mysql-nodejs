-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2022 at 09:20 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interview`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_addcountry`
--

CREATE TABLE `tbl_addcountry` (
  `id` int(11) NOT NULL,
  `capital` varchar(200) NOT NULL,
  `country` varchar(200) NOT NULL,
  `time_stamp` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_addcountry`
--

INSERT INTO `tbl_addcountry` (`id`, `capital`, `country`, `time_stamp`) VALUES
(37, 'undefined', 'undefinedxfdg', '2021-01-14'),
(38, 'Tirana', 'Albania', '2021-01-14'),
(39, 'Algiers', 'Algeria', '2021-01-14'),
(40, 'Pago Pago', 'American Samoa', '2021-01-14'),
(41, 'Mariehamn', 'Åland Islands', '2021-01-14'),
(42, 'Kabul', 'Afghanistan', '2021-01-14'),
(43, 'Mariehamn', 'Åland Islands', '2021-01-14'),
(44, 'Tirana', 'Albania', '2021-01-14'),
(45, 'Kabul', 'Afghanistan', '2021-01-14'),
(46, 'Mariehamn', 'Åland Islands', '2021-01-14'),
(47, 'Kabul', 'Afghanistan', '2021-01-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_addcountry`
--
ALTER TABLE `tbl_addcountry`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_addcountry`
--
ALTER TABLE `tbl_addcountry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
