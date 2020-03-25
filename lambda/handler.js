'use strict';
console.log('Loading function');

exports.transform = (event, context, callback) => {
    event.records.forEach((record) => {
        console.log(record.kinesisRecordMetadata.sequenceNumber);
        console.log(record.kinesisRecordMetadata.subsequenceNumber);
        console.log(record.kinesisRecordMetadata.partitionKey);
        console.log(record.kinesisRecordMetadata.shardId);
        console.log(record.kinesisRecordMetadata.approximateArrivalTimestamp);
    });
    const output = event.records.map((record) => ({
        recordId: record.recordId,
        result: 'Ok',
        data: record.data+"Cg==",
    }));
    console.log(`Processing completed.  Successful records ${output.length}.`);
    callback(null, { records: output });
};