CREATE TABLE `Payees`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`FirstName` VARCHAR(10),
	`LastName` VARCHAR(10),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`NickName` VARCHAR(10),
	`PayeeID` BIGINT NOT NULL AUTO_INCREMENT,
	`Phone` VARCHAR(10),
	`SoftDeleteFlag` BOOLEAN,
	PRIMARY KEY(`PayeeID`)
);
ALTER TABLE `Payees`
	ADD CONSTRAINT `ee23b69154294da02360663a872fad` UNIQUE KEY(`PayeeID`);