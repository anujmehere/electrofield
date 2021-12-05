--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(8) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `City` varchar(10) NOT NULL,
  `State` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `Name`, `City`, `State`) VALUES
(1, 'Jack', 'Mumbai', 'Maharashtra'),
(2, 'Jane', 'Pune', 'Maharashtra'),
(3, 'Emmanuel', 'Delhi', 'Delhi'),
(4, 'Franck', 'Anand', 'Gujarat'),
(5, 'Kevin Tomas', 'Gandhinagar', 'Gujarat'),
(6, 'Tim Dillon', 'Jaipur', 'Rajasthan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;
