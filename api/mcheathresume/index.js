module.exports = async function(context) {
    context.log("JavaScript HTTP trigger function processed a request.");

    context.log(context.bindings.inputDocument);

    context.bindings.outputDocument = context.bindings.inputDocument || { id: "1", count: 0 };


    context.bindings.outputDocument.count = context.bindings.outputDocument.count + 1;
    context.log(context.bindings.outputDocument);
    context.res = {

        headers: {
            "content-type": "application/json"
        },
        body: {
            id: context.bindings.outputDocument.id,
            count: context.bindings.outputDocument.count
        }
    };
}
