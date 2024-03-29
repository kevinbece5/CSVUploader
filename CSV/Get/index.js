const AWS = require('aws-sdk');
const awsConfig = {
    apiVersion: '2006-03-01',
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.ACCESS_KEY,
    region: 'us-west-1',
};

const s3 = new AWS.S3(awsConfig);


exports.handler = async (event) => {
    let fileName = `${event.queryStringParameters.name}.txt`;
    const params = { Bucket: 'intuit-coding-challenge-kevin/csv', Key: fileName };
    return await new Promise((resolve, reject) => {
        s3.getObject(params, function (err, data) {
            if (err) {
                resolve({
                    statusCode: 400,
                    error: `Could not find`
                });

            } else {
                resolve({ statusCode: 200, body: data.Body.toString() });
            }
        });
    });

};