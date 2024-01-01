-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2024 at 05:37 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipes`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `rec_desc` text NOT NULL,
  `rating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id`, `title`, `rec_desc`, `rating`) VALUES
(1, 'Miso soup', 'Miso soup is a traditional Japanese soup that starts with a dashi stock and is flavored with miso paste.', 7.8),
(2, 'Pancakes', 'Perfect pancakes are easier to make than you think. This pancake recipe produces thick, fluffy, and all-around delicious pancakes with just a few ingredients that are probably already in your kitchen.', 9.3),
(3, 'Ramen', 'In a medium saucepan combine broth and noodles. Cover and bring to a boil over high heat; stir to break up noodles. Reduce heat to medium and add soy sauce, chili oil and ginger. Simmer, uncovered, for 10 minutes. Stir in sesame oil and garnish with green onions.', 8.5),
(4, 'Grilled Chicken Caprese Sandwich', 'When summer comes along, you will find me blasting the AC and avoiding the stove and oven at all costs. I turn to recipes that come together easily on the grill and utilize fresh seasonal ingredients, and this sandwich does just that. ', 8.1);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_tags`
--

CREATE TABLE `recipe_tags` (
  `id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  `tags_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_tags`
--

INSERT INTO `recipe_tags` (`id`, `recipe_id`, `tags_id`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 2, 4),
(4, 3, 1),
(5, 3, 3),
(6, 4, 12),
(7, 4, 14);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`) VALUES
(1, 'ramen'),
(2, 'miso'),
(3, 'soup'),
(4, 'pancake'),
(5, 'pizza'),
(6, 'spaghetti'),
(7, 'curry'),
(8, 'salad'),
(9, 'toast'),
(10, 'rice'),
(11, 'wrap'),
(12, 'sandwich'),
(13, 'sushi'),
(14, 'cutlet');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe_tags`
--
ALTER TABLE `recipe_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipe_id` (`recipe_id`),
  ADD KEY `tags_id` (`tags_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `recipe_tags`
--
ALTER TABLE `recipe_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recipe_tags`
--
ALTER TABLE `recipe_tags`
  ADD CONSTRAINT `recipe_tags_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`),
  ADD CONSTRAINT `recipe_tags_ibfk_2` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
