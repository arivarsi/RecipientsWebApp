/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = voltmx.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Accounts", "objectService" : "AccountStorage"};

    var setterFunctions = {
        AccountNumber: function(val, state) {
            context["field"] = "AccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountNumber"] : null);
            state['AccountNumber'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Balance: function(val, state) {
            context["field"] = "Balance";
            context["metadata"] = (objectMetadata ? objectMetadata["Balance"] : null);
            state['Balance'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountName: function(val, state) {
            context["field"] = "AccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
            state['AccountName'] = voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
    function Accounts(defaultValues) {
        var privateState = {};
        context["field"] = "AccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountNumber"] : null);
        privateState.AccountNumber = defaultValues ?
            (defaultValues["AccountNumber"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountNumber"], context) :
                null) :
            null;

        context["field"] = "Balance";
        context["metadata"] = (objectMetadata ? objectMetadata["Balance"] : null);
        privateState.Balance = defaultValues ?
            (defaultValues["Balance"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Balance"], context) :
                null) :
            null;

        context["field"] = "AccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
        privateState.AccountName = defaultValues ?
            (defaultValues["AccountName"] ?
                voltmx.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountName"], context) :
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
            "AccountNumber": {
                get: function() {
                    context["field"] = "AccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["AccountNumber"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['AccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Balance": {
                get: function() {
                    context["field"] = "Balance";
                    context["metadata"] = (objectMetadata ? objectMetadata["Balance"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Balance, context);
                },
                set: function(val) {
                    setterFunctions['Balance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AccountName": {
                get: function() {
                    context["field"] = "AccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
                    return voltmx.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AccountName, context);
                },
                set: function(val) {
                    setterFunctions['AccountName'].call(this, val, privateState);
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
            privateState.AccountNumber = value ? (value["AccountNumber"] ? value["AccountNumber"] : null) : null;
            privateState.Balance = value ? (value["Balance"] ? value["Balance"] : null) : null;
            privateState.AccountName = value ? (value["AccountName"] ? value["AccountName"] : null) : null;
            privateState.CreatedBy = value ? (value["CreatedBy"] ? value["CreatedBy"] : null) : null;
            privateState.LastUpdatedBy = value ? (value["LastUpdatedBy"] ? value["LastUpdatedBy"] : null) : null;
            privateState.CreatedDateTime = value ? (value["CreatedDateTime"] ? value["CreatedDateTime"] : null) : null;
            privateState.LastUpdatedDateTime = value ? (value["LastUpdatedDateTime"] ? value["LastUpdatedDateTime"] : null) : null;
            privateState.SoftDeleteFlag = value ? (value["SoftDeleteFlag"] ? value["SoftDeleteFlag"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Accounts);

    //Create new class level validator object
    BaseModel.Validator.call(Accounts);

    var registerValidatorBackup = Accounts.registerValidator;

    Accounts.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Accounts.isValid(this, propName, val)) {
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

    Accounts.relations = relations;

    Accounts.prototype.isValid = function() {
        return Accounts.isValid(this);
    };

    Accounts.prototype.objModelName = "Accounts";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Accounts.registerProcessors = function(options, successCallback, failureCallback) {

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

        voltmx.mvc.util.ProcessorUtils.getMetadataForObject("AccountStorage", "Accounts", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Accounts.clone = function(objectToClone) {
        var clonedObj = new Accounts();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Accounts;
});