-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 11. Apr 2021 um 18:47
-- Server-Version: 10.4.6-MariaDB
-- PHP-Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `db_coronaparty`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_party`
--

CREATE TABLE `tbl_party` (
  `ID` int(11) NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `Ort` varchar(30) DEFAULT NULL,
  `Anzahl_Leute` int(11) NOT NULL,
  `Zeitpunkt` datetime DEFAULT NULL,
  `Delete` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `tbl_party`
--

INSERT INTO `tbl_party` (`ID`, `Name`, `Ort`, `Anzahl_Leute`, `Zeitpunkt`, `Delete`) VALUES
(1, 'Party1', 'Wegberg', 20, '2020-02-15 20:00:00', 0),
(2, 'Party2', 'Wegberg', 200, '2020-02-20 20:00:00', 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `tbl_party`
--
ALTER TABLE `tbl_party`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `tbl_party`
--
ALTER TABLE `tbl_party`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
