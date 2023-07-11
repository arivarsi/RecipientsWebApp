/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"RecipientID": "RecipientID",
		"FirstName": "FirstName",
		"LastName": "LastName",
		"NickName": "NickName",
		"Phone": "Phone",
		"CreatedBy": "CreatedBy",
		"LastUpdatedBy": "LastUpdatedBy",
		"CreatedDateTime": "CreatedDateTime",
		"LastUpdatedDateTime": "LastUpdatedDateTime",
		"SoftDeleteFlag": "SoftDeleteFlag",
	};

	Object.freeze(mappings);

	var typings = {
		"RecipientID": "number",
		"FirstName": "string",
		"LastName": "string",
		"NickName": "string",
		"Phone": "string",
		"CreatedBy": "string",
		"LastUpdatedBy": "string",
		"CreatedDateTime": "date",
		"LastUpdatedDateTime": "date",
		"SoftDeleteFlag": "boolean",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"RecipientID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "RecipientStorage",
		tableName: "Recipients"
	};

	Object.freeze(config);

	return config;
})