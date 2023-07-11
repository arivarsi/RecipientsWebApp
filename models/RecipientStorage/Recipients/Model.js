/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Recipients", "objectService" : "RecipientStorage"};

    var setterFunctions = {
        RecipientID: function(val, state) {
            context["field"] = "RecipientID";
            context["metadata"] = (objectMetadata ? objectMetadata["RecipientID"] : null);
            state['RecipientID'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FirstName: function(val, state) {
            context["field"] = "FirstName";
            context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
            state['FirstName'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastName: function(val, state) {
            context["field"] = "LastName";
            context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
            state['LastName'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NickName: function(val, state) {
            context["field"] = "NickName";
            context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
            state['NickName'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Phone: function(val, state) {
            context["field"] = "Phone";
            context["metadata"] = (objectMetadata ? objectMetadata["Phone"] : null);
            state['Phone'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedBy: function(val, state) {
            context["field"] = "CreatedBy";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
            state['CreatedBy'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastUpdatedBy: function(val, state) {
            context["field"] = "LastUpdatedBy";
            context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
            state['LastUpdatedBy'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedDateTime: function(val, state) {
            context["field"] = "CreatedDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
            state['CreatedDateTime'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastUpdatedDateTime: function(val, state) {
            context["field"] = "LastUpdatedDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
            state['LastUpdatedDateTime'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SoftDeleteFlag: function(val, state) {
            context["field"] = "SoftDeleteFlag";
            context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
            state['SoftDeleteFlag'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Recipients(defaultValues) {
        var privateState = {};
        context["field"] = "RecipientID";
        context["metadata"] = (objectMetadata ? objectMetadata["RecipientID"] : null);
        privateState.RecipientID = defaultValues ?
            (defaultValues["RecipientID"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RecipientID"], context) :
                null) :
            null;

        context["field"] = "FirstName";
        context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
        privateState.FirstName = defaultValues ?
            (defaultValues["FirstName"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FirstName"], context) :
                null) :
            null;

        context["field"] = "LastName";
        context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
        privateState.LastName = defaultValues ?
            (defaultValues["LastName"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastName"], context) :
                null) :
            null;

        context["field"] = "NickName";
        context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
        privateState.NickName = defaultValues ?
            (defaultValues["NickName"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NickName"], context) :
                null) :
            null;

        context["field"] = "Phone";
        context["metadata"] = (objectMetadata ? objectMetadata["Phone"] : null);
        privateState.Phone = defaultValues ?
            (defaultValues["Phone"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Phone"], context) :
                null) :
            null;

        context["field"] = "CreatedBy";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
        privateState.CreatedBy = defaultValues ?
            (defaultValues["CreatedBy"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedBy"], context) :
                null) :
            null;

        context["field"] = "LastUpdatedBy";
        context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
        privateState.LastUpdatedBy = defaultValues ?
            (defaultValues["LastUpdatedBy"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedBy"], context) :
                null) :
            null;

        context["field"] = "CreatedDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
        privateState.CreatedDateTime = defaultValues ?
            (defaultValues["CreatedDateTime"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedDateTime"], context) :
                null) :
            null;

        context["field"] = "LastUpdatedDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
        privateState.LastUpdatedDateTime = defaultValues ?
            (defaultValues["LastUpdatedDateTime"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastUpdatedDateTime"], context) :
                null) :
            null;

        context["field"] = "SoftDeleteFlag";
        context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
        privateState.SoftDeleteFlag = defaultValues ?
            (defaultValues["SoftDeleteFlag"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SoftDeleteFlag"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "RecipientID": {
                get: function() {
                    context["field"] = "RecipientID";
                    context["metadata"] = (objectMetadata ? objectMetadata["RecipientID"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RecipientID, context);
                },
                set: function(val) {
                    setterFunctions['RecipientID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FirstName": {
                get: function() {
                    context["field"] = "FirstName";
                    context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FirstName, context);
                },
                set: function(val) {
                    setterFunctions['FirstName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastName": {
                get: function() {
                    context["field"] = "LastName";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastName, context);
                },
                set: function(val) {
                    setterFunctions['LastName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NickName": {
                get: function() {
                    context["field"] = "NickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NickName, context);
                },
                set: function(val) {
                    setterFunctions['NickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Phone": {
                get: function() {
                    context["field"] = "Phone";
                    context["metadata"] = (objectMetadata ? objectMetadata["Phone"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Phone, context);
                },
                set: function(val) {
                    setterFunctions['Phone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedBy": {
                get: function() {
                    context["field"] = "CreatedBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedBy, context);
                },
                set: function(val) {
                    setterFunctions['CreatedBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastUpdatedBy": {
                get: function() {
                    context["field"] = "LastUpdatedBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedBy"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastUpdatedBy, context);
                },
                set: function(val) {
                    setterFunctions['LastUpdatedBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedDateTime": {
                get: function() {
                    context["field"] = "CreatedDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedDateTime"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedDateTime, context);
                },
                set: function(val) {
                    setterFunctions['CreatedDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastUpdatedDateTime": {
                get: function() {
                    context["field"] = "LastUpdatedDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastUpdatedDateTime"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastUpdatedDateTime, context);
                },
                set: function(val) {
                    setterFunctions['LastUpdatedDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SoftDeleteFlag": {
                get: function() {
                    context["field"] = "SoftDeleteFlag";
                    context["metadata"] = (objectMetadata ? objectMetadata["SoftDeleteFlag"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SoftDeleteFlag, context);
                },
                set: function(val) {
                    setterFunctions['SoftDeleteFlag'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.RecipientID = value ? (value["RecipientID"] ? value["RecipientID"] : null) : null;
            privateState.FirstName = value ? (value["FirstName"] ? value["FirstName"] : null) : null;
            privateState.LastName = value ? (value["LastName"] ? value["LastName"] : null) : null;
            privateState.NickName = value ? (value["NickName"] ? value["NickName"] : null) : null;
            privateState.Phone = value ? (value["Phone"] ? value["Phone"] : null) : null;
            privateState.CreatedBy = value ? (value["CreatedBy"] ? value["CreatedBy"] : null) : null;
            privateState.LastUpdatedBy = value ? (value["LastUpdatedBy"] ? value["LastUpdatedBy"] : null) : null;
            privateState.CreatedDateTime = value ? (value["CreatedDateTime"] ? value["CreatedDateTime"] : null) : null;
            privateState.LastUpdatedDateTime = value ? (value["LastUpdatedDateTime"] ? value["LastUpdatedDateTime"] : null) : null;
            privateState.SoftDeleteFlag = value ? (value["SoftDeleteFlag"] ? value["SoftDeleteFlag"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Recipients);

    //Create new class level validator object
    BaseModel.Validator.call(Recipients);

    var registerValidatorBackup = Recipients.registerValidator;

    Recipients.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Recipients.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    var relations = [];

    Recipients.relations = relations;

    Recipients.prototype.isValid = function() {
        return Recipients.isValid(this);
    };

    Recipients.prototype.objModelName = "Recipients";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Recipients.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = voltmx.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("RecipientStorage", "Recipients", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Recipients.clone = function(objectToClone) {
        var clonedObj = new Recipients();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Recipients;
});