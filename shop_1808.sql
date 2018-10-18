/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop_1808

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-10-18 11:15:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop_user
-- ----------------------------
DROP TABLE IF EXISTS `shop_user`;
CREATE TABLE `shop_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_user
-- ----------------------------
INSERT INTO `shop_user` VALUES ('19', '777qiqi', '11111', '1');
INSERT INTO `shop_user` VALUES ('20', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('21', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('22', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('23', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('24', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('25', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('26', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('27', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('28', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('29', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('30', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('31', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('32', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('33', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('34', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('35', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('36', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('37', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('38', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('39', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('40', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('41', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('42', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('43', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('44', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('45', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('46', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('47', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('48', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('49', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('50', 'qiqi__777', '11111', '1');
INSERT INTO `shop_user` VALUES ('51', 'fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('52', '233fangfang', '2222', '2');
INSERT INTO `shop_user` VALUES ('53', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('54', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('55', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('56', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('57', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('58', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('59', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('60', 'qudou', '11_11_22', '1');
INSERT INTO `shop_user` VALUES ('62', 'fangfan', '1245', null);
INSERT INTO `shop_user` VALUES ('63', 'fangfana', '2154', null);
INSERT INTO `shop_user` VALUES ('64', 'fangfa', '4545', null);
INSERT INTO `shop_user` VALUES ('65', 'sadasd', 'fafaf', null);
INSERT INTO `shop_user` VALUES ('66', 'adsas', 'adasd', null);
INSERT INTO `shop_user` VALUES ('67', 'fhfj', 'cgnb', null);
INSERT INTO `shop_user` VALUES ('68', 'aaa', 'aaa', null);
INSERT INTO `shop_user` VALUES ('69', 'dsds', 'dsds', null);
INSERT INTO `shop_user` VALUES ('70', 'rrrr', 'gggg', null);
INSERT INTO `shop_user` VALUES ('71', 'hhhh', 'vcc', null);
INSERT INTO `shop_user` VALUES ('72', 'fvhvh', 'vhgh', null);
INSERT INTO `shop_user` VALUES ('73', 'fangfajnion', '2222', null);
INSERT INTO `shop_user` VALUES ('74', 'lkknlkn', 'kjnjk', null);
INSERT INTO `shop_user` VALUES ('75', 'vjvgjv', 'vgjv', null);
INSERT INTO `shop_user` VALUES ('76', 'jvj', 'vgjv', null);
INSERT INTO `shop_user` VALUES ('77', 'adas', 'asdas', null);
INSERT INTO `shop_user` VALUES ('78', 'dasd', 'asda', null);
INSERT INTO `shop_user` VALUES ('79', 'ghfg', 'fgf', null);
INSERT INTO `shop_user` VALUES ('80', 'yr', 'rdy', null);
INSERT INTO `shop_user` VALUES ('81', 'aseae', 'sgag', null);
INSERT INTO `shop_user` VALUES ('82', 'jgf', 'fgj', null);
INSERT INTO `shop_user` VALUES ('83', 'fgjf', '', null);
INSERT INTO `shop_user` VALUES ('84', 'fgjff', 'fgjgf', null);
INSERT INTO `shop_user` VALUES ('85', 'ftyf', 'ftyff', null);
INSERT INTO `shop_user` VALUES ('86', 'ftyfy', 'ftyft', null);
INSERT INTO `shop_user` VALUES ('87', 'vxcv', 'fdsfs', null);
INSERT INTO `shop_user` VALUES ('88', 'ouio', 'oji', null);
INSERT INTO `shop_user` VALUES ('89', 'gfhfg', 'fhfg', null);
INSERT INTO `shop_user` VALUES ('90', 'fsdfs', 'sfsdf', null);
INSERT INTO `shop_user` VALUES ('91', '2121', '3131', null);
INSERT INTO `shop_user` VALUES ('92', '3131', '3131', null);
INSERT INTO `shop_user` VALUES ('93', '313131', '31311', null);
INSERT INTO `shop_user` VALUES ('94', '2313', '13213', null);
INSERT INTO `shop_user` VALUES ('95', '21313', '313', null);
INSERT INTO `shop_user` VALUES ('96', '312213', '31231', null);
INSERT INTO `shop_user` VALUES ('97', '111111', '111111', null);
INSERT INTO `shop_user` VALUES ('98', 'hggf', 'fgfvf', null);
INSERT INTO `shop_user` VALUES ('99', '4214141414', '41241241414', null);
INSERT INTO `shop_user` VALUES ('100', '1331231231312', '12312312313', null);
INSERT INTO `shop_user` VALUES ('101', '3123123123', '3123123123', null);
INSERT INTO `shop_user` VALUES ('102', '312313313', '321321231', null);
INSERT INTO `shop_user` VALUES ('103', '3131231', '12312313123', null);
INSERT INTO `shop_user` VALUES ('104', '312313', '3123131', null);
INSERT INTO `shop_user` VALUES ('105', '31124125251', '313123123123', null);
INSERT INTO `shop_user` VALUES ('106', '31231231313', '865959', null);
INSERT INTO `shop_user` VALUES ('107', 'fangfang2312', '231312', null);
INSERT INTO `shop_user` VALUES ('108', 'GDGD', '34424', null);
INSERT INTO `shop_user` VALUES ('109', '3213123', '1231231', null);
INSERT INTO `shop_user` VALUES ('110', 'fsdf', 'sdfdsf', null);
INSERT INTO `shop_user` VALUES ('111', 'sfsd', 'sdfsd', null);
INSERT INTO `shop_user` VALUES ('112', 'auygu', 'gug', null);
INSERT INTO `shop_user` VALUES ('113', 'qiqi001', '111', null);
INSERT INTO `shop_user` VALUES ('114', '23123', '321312', null);
INSERT INTO `shop_user` VALUES ('115', 'vcbcv', 'dfsfsdvb', null);
INSERT INTO `shop_user` VALUES ('116', 'fdf', 'fdf', null);
INSERT INTO `shop_user` VALUES ('117', 'asda', 'dasd', null);
INSERT INTO `shop_user` VALUES ('118', 'dasda', 'asd', null);

-- ----------------------------
-- Table structure for tel_phone
-- ----------------------------
DROP TABLE IF EXISTS `tel_phone`;
CREATE TABLE `tel_phone` (
  `phone` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tel_phone
-- ----------------------------
INSERT INTO `tel_phone` VALUES ('18100573371', '1');
INSERT INTO `tel_phone` VALUES ('13706989361', '2');
INSERT INTO `tel_phone` VALUES ('15245214512', '3');
INSERT INTO `tel_phone` VALUES ('13254210541', '4');
INSERT INTO `tel_phone` VALUES ('13021021542', '5');
INSERT INTO `tel_phone` VALUES ('15060054504', '6');
INSERT INTO `tel_phone` VALUES ('13525421025', '7');
