-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: Hackathon
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Referals`
--

DROP TABLE IF EXISTS `Referals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Referals` (
  `referalId` int(11) NOT NULL AUTO_INCREMENT,
  `hospitalId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`referalId`),
  KEY `hospitalId` (`hospitalId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Referals`
--

LOCK TABLES `Referals` WRITE;
/*!40000 ALTER TABLE `Referals` DISABLE KEYS */;
INSERT INTO `Referals` VALUES (1,2,2,'Referal used'),(2,4,1,'Referal used'),(3,3,4,'Referal used'),(4,1,3,'Referal used'),(5,2,1,'Referal used'),(6,2,4,'Referal used'),(7,5,3,'Not tested');
/*!40000 ALTER TABLE `Referals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TestingCentre`
--

DROP TABLE IF EXISTS `TestingCentre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TestingCentre` (
  `testingCentreId` int(11) NOT NULL AUTO_INCREMENT,
  `kitsAvailable` int(11) DEFAULT NULL,
  `centreName` varchar(25) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`testingCentreId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TestingCentre`
--

LOCK TABLES `TestingCentre` WRITE;
/*!40000 ALTER TABLE `TestingCentre` DISABLE KEYS */;
INSERT INTO `TestingCentre` VALUES (1,43,'J J Collection Center','4 Bandukwala Bldg, Grd Floor,  Opp Jj Gate # 6, 107 Jail Rd, Umerkhadi Mumbai','Mumbai'),(2,19,'IISER','Dr Homi Bhabha Rd, Ward No. 8, NCL Colony, Pashan, Pune, Maharashtra 411008','Pune'),(3,23,'Sion Collection Center','Shop 12, Hind Rajasthan Bldg,  Sion Cosmpolitian Chs Opp Gate # 1 Sion Hospital','Mumbai'),(4,13,'Kalyan Patripool','Shop No. 10, Blossom CHS, 1st Flr, Raheja Complex, Kalyan Patripool, Kalyan(W).421301','Mumbai'),(5,10,'Tilak Nagar Center','Shop no 5 Bulding No 88 Vrushali villa, Near R S Mani super Market tilak nagar Chembur 400089','Mumbai'),(6,7,'Vasai Evershine Center','Shop No 15 Ground Floor Everest Hights Co-Op Hsg Soc Village Achole Evershine City Vasai East','Mumbai'),(7,19,'Kandivali Shankar Lane','Shop No 3, Shivdarshan Building, S V Patel Marg, Opp BMC Garden, Shankar lane Mumbai 400067','Mumbai'),(8,20,'Kalamboli DMart center','Shop no 09, EV Emerald height, Plot No. 14/15/16/17, Sect 15, Kalamboli New Mumbai 410218.','Mumbai'),(9,14,'Bhandup Center','Shop No-7, Joy Adinath Tower 2, Near Dena Bank, Opp LBS Marg, Bhandup West, Mumbai – 400078','Mumbai'),(10,9,'Sahyadri Speciality Labs','Plot No, S.no.89 & 90, 54, Paud Rd, Lokmanya Colony, Kothrud, Pune, Maharashtra 411038','Pune'),(11,40,'SRL Diagnostics','SRL,REFERENCE LAB, GP-26, MARUTI INDUSTRIAL ESTATE, Udyog Vihar, Sector 18, Gurugram, Haryana 122015','Gurugram'),(12,40,'Genx Diagnostics','1st Floor, 2/6, Block 2, Sarvapriya Vihar, New Delhi, Delhi 110016','Delhi'),(13,26,'Dr Dangs Lab','Aurobindo Market, C2/1, S.D.A. Aurobindo Marg Next to, New Delhi, Delhi 110016','Delhi'),(14,37,'Hitech diagnostic centreb','35, 1st Floor, Trunk Rd, Ettima Nagar, Poonamallee, Chennai, Tamil Nadu 600053','Chennai'),(15,45,'CD Hospital','187, Thiruvottiyur High Rd, Kasipuram, Tondiarpet, Chennai, Tamil Nadu 600081','Chennai'),(16,0,'Ruby Hall Clinic','40, Sasoon Rd, Sangamvadi, Pune, Maharashtra 411001','Pune'),(17,19,'IISER1','Dr Homi Bhabha Rd, Ward No. 8, NCL Colony, Pashan, Pune, Maharashtra 411008','Mumbai');
/*!40000 ALTER TABLE `TestingCentre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tests`
--

DROP TABLE IF EXISTS `Tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tests` (
  `testId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `testingCentreId` int(11) NOT NULL,
  `result` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`testId`),
  KEY `testingCentreId` (`testingCentreId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tests`
--

LOCK TABLES `Tests` WRITE;
/*!40000 ALTER TABLE `Tests` DISABLE KEYS */;
INSERT INTO `Tests` VALUES (1,2,5,'p bb'),(2,3,4,'p bb'),(3,4,16,'p bb'),(4,1,14,'p bb'),(5,1,10,'p bb'),(6,2,1,'p bb'),(7,3,1,'p bb'),(8,1,14,'p bb'),(9,4,10,'p bb'),(10,11,3,'p bb');
/*!40000 ALTER TABLE `Tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hospital` (
  `hid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `icu_avail` int(11) DEFAULT '0',
  `non_icu_avail` int(11) DEFAULT '0',
  `icu_occ` int(11) DEFAULT '0',
  `non_icu_occ` int(11) DEFAULT '0',
  `capacity` int(11) DEFAULT '0',
  `vacant` int(11) DEFAULT '0',
  `city` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`hid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'abc','mumbai',16,130,1,0,146,145,NULL),(2,'Krishna','mumbai',20,100,1,0,120,120,NULL),(3,'sahyadri','pune',12,100,1,1,112,111,NULL),(4,'sahyadri1','pune',15,100,0,0,115,115,NULL),(5,'Jupiter','Baner',10,23,0,0,33,30,'Pune');
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital_bookings`
--

DROP TABLE IF EXISTS `hospital_bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hospital_bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `hid` int(11) DEFAULT NULL,
  `type` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `hid` (`hid`),
  CONSTRAINT `hospital_bookings_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user1` (`id`),
  CONSTRAINT `hospital_bookings_ibfk_2` FOREIGN KEY (`hid`) REFERENCES `hospital` (`hid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital_bookings`
--

LOCK TABLES `hospital_bookings` WRITE;
/*!40000 ALTER TABLE `hospital_bookings` DISABLE KEYS */;
INSERT INTO `hospital_bookings` VALUES (2,11,5,NULL),(3,11,5,NULL),(4,11,5,NULL);
/*!40000 ALTER TABLE `hospital_bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quar_bookings`
--

DROP TABLE IF EXISTS `quar_bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quar_bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `qid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `qid` (`qid`),
  CONSTRAINT `quar_bookings_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userID`),
  CONSTRAINT `quar_bookings_ibfk_2` FOREIGN KEY (`qid`) REFERENCES `quarantine` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quar_bookings`
--

LOCK TABLES `quar_bookings` WRITE;
/*!40000 ALTER TABLE `quar_bookings` DISABLE KEYS */;
INSERT INTO `quar_bookings` VALUES (1,1,1),(2,1,1),(3,1,1),(4,1,1);
/*!40000 ALTER TABLE `quar_bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quarantine`
--

DROP TABLE IF EXISTS `quarantine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quarantine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `capacity` int(11) NOT NULL,
  `occupied` int(11) DEFAULT '0',
  `city` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quarantine`
--

LOCK TABLES `quarantine` WRITE;
/*!40000 ALTER TABLE `quarantine` DISABLE KEYS */;
INSERT INTO `quarantine` VALUES (1,'abc','pune',46,4,'pune'),(2,'Naidu','KP',100,0,'Mumbai'),(3,'Naidu1','KP',120,0,'Mumbai'),(4,'N1','KP',110,0,'Pune'),(5,'abc1','lalaland',56,0,'pune'),(6,'abc2','lalaland',56,0,'mumbai');
/*!40000 ALTER TABLE `quarantine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'s','123','s@123'),(2,'s1','123','s@1234'),(3,'s2','123','s@123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user1`
--

DROP TABLE IF EXISTS `user1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(25) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user1`
--

LOCK TABLES `user1` WRITE;
/*!40000 ALTER TABLE `user1` DISABLE KEYS */;
INSERT INTO `user1` VALUES (1,'a@123','123'),(3,'a123','13'),(4,'a1233','13'),(5,'s1',NULL),(6,'a12386',NULL),(7,'tanv@344',NULL),(8,'xyz@rettt',NULL),(9,'erwt@eer',NULL),(10,'shib@abc',NULL),(11,'tb@gmail.com','7890'),(12,'bf@ree','8799');
/*!40000 ALTER TABLE `user1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-14  3:11:40
