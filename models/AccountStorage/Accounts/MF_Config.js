/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"AccountNumber": "AccountNumber",
		"Balance": "Balance",
		"AccountName": "AccountName",
		"CreatedBy": "CreatedBy",
		"LastUpdatedBy": "LastUpdatedBy",
		"CreatedDateTime": "CreatedDateTime",
		"LastUpdatedDateTime": "LastUpdatedDateTime",
		"SoftDeleteFlag": "SoftDeleteFlag",
	};

	Object.freeze(mappings);

	var typings = {
		"AccountNumber": "string",
		"Balance": "string",
		"AccountName": "string",
		"CreatedBy": "string",
		"LastUpdatedBy": "string",
		"CreatedDateTime": "date",
		"LastUpdatedDateTime": "date",
		"SoftDeleteFlag": "boolean",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"AccountNumber",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "AccountStorage",
		tableName: "Accounts"
	};

	Object.freeze(config);

	return config;
})