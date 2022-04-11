-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: s-aws-db-2.cbgosvbjvtob.ap-southeast-1.rds.amazonaws.com    Database: BookingServiceDB2
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;

--
-- GTID state at the beginning of the backup 
--


--
-- Table structure for table `Booking`
--

DROP TABLE IF EXISTS `Booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `guid` varchar(21) NOT NULL,
  `ownerId` int NOT NULL,
  `serviceId` int NOT NULL,
  `createBy` int DEFAULT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_Fk_idx` (`ownerId`),
  KEY `serviceId_Fk_idx` (`serviceId`),
  CONSTRAINT `serviceId_Fk` FOREIGN KEY (`serviceId`) REFERENCES `Service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userId_Fk` FOREIGN KEY (`ownerId`) REFERENCES `UserIdentity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Booking`
--

LOCK TABLES `Booking` WRITE;
/*!40000 ALTER TABLE `Booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `Booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Service`
--

DROP TABLE IF EXISTS `Service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `guid` varchar(255) NOT NULL,
  `name` varchar(1023) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL DEFAULT '0',
  `picture` varchar(2047) DEFAULT NULL,
  `description` varchar(4047) DEFAULT NULL,
  `upsertBy` int DEFAULT NULL,
  `upsertDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `guid_uq` (`guid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Service`
--

LOCK TABLES `Service` WRITE;
/*!40000 ALTER TABLE `Service` DISABLE KEYS */;
INSERT INTO `Service` VALUES (1,'IzvOp5Tmz4ES0floNaFCa','พ่นฆ่าเชื้อ?',2100,'https://i.ibb.co/Hqh0j0Z/Screen-Shot-2565-04-11-at-21-20-59.png','?ทำความสะอาด   ผู้ให้บริการเป็นคนไทยทุกคน ผ่านการอบรบและตรวจสอบประวัติอาชญากรรมแล้ว   ผู้ให้บริการไปพร้อมอุปกรณ์ และน้ำยาทำความสะอาด   ราคาค่าบริการรวมค่าเดินทางแล้ว   จองผู้ให้บริการที่คุณเคยใช้บริการได้   มีประกันความเสียหายในวงเงิน 100,000 บาท   อุ่นใจกับทีมงานแอดมินบีนีทคอยดูแลอำนวยความสะดวก',NULL,'2022-04-11 14:32:35'),(2,'DkVm64IKIoq43kaN1L-Jj','ล้างแอร์',549,'https://i.ibb.co/C6VMC9N/Screen-Shot-2565-04-11-at-21-46-19.png','ทำความสะอาด\n  ผู้ให้บริการเป็นคนไทยทุกคน ผ่านการอบรบและตรวจสอบประวัติอาชญากรรมแล้ว\n  ผู้ให้บริการไปพร้อมอุปกรณ์ และน้ำยาทำความสะอาด\n  ราคาค่าบริการรวมค่าเดินทางแล้ว\n  จองผู้ให้บริการที่คุณเคยใช้บริการได้\n  มีประกันความเสียหายในวงเงิน 100,000 บาท\n  อุ่นใจกับทีมงานแอดมินบีนีทคอยดูแลอำนวยความสะดวก',NULL,'2022-04-11 14:47:17'),(3,'8yn7VlkcKol3I0QDrswU8','ขนย้ายของ',4500,'https://i.ibb.co/Hgv2JWz/Screen-Shot-2565-04-11-at-21-47-32.png','ทำความสะอาด\n  ผู้ให้บริการเป็นคนไทยทุกคน ผ่านการอบรบและตรวจสอบประวัติอาชญากรรมแล้ว\n  ผู้ให้บริการไปพร้อมอุปกรณ์ และน้ำยาทำความสะอาด\n  ราคาค่าบริการรวมค่าเดินทางแล้ว\n  จองผู้ให้บริการที่คุณเคยใช้บริการได้\n  มีประกันความเสียหายในวงเงิน 100,000 บาท\n  อุ่นใจกับทีมงานแอดมินบีนีทคอยดูแลอำนวยความสะดวก',NULL,'2022-04-11 14:49:25');
/*!40000 ALTER TABLE `Service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserIdentity`
--

DROP TABLE IF EXISTS `UserIdentity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserIdentity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userGUID` varchar(255) NOT NULL,
  `fullName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(63) NOT NULL,
  `password` varchar(2047) NOT NULL,
  `createBy` int DEFAULT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateBy` int DEFAULT NULL,
  `updateDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userGUID_UNIQUE` (`userGUID`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserIdentity`
--

LOCK TABLES `UserIdentity` WRITE;
/*!40000 ALTER TABLE `UserIdentity` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserIdentity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12  3:15:37
