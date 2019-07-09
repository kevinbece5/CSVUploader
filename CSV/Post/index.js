const AWS = require('aws-sdk');
const uuid = require('uuid');
const awsConfig = {
    apiVersion: '2006-03-01',
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.ACCESS_KEY,
    region: 'us-west-1',
};

const s3 = new AWS.S3(awsConfig);

exports.handler = async (event, context) => {
    let bodyArr = JSON.parse(event.body).body.split('\n');
    let res = '';
    let fileName = `${event.queryStringParameters.name}.txt`;
    for (let i = 0; i < bodyArr.length; i++) {
        res += `${bodyArr[i]}\n`;
    }
    const params = { Bucket: 'intuit-coding-challenge-kevin/csv', Key: fileName, Body: res };
    return await new Promise((resolve, reject) => {
        s3.upload(params, function (err, data) {
            if (err) {
                console.log('err', err);
                resolve({
                    statusCode: 400,
                    error: `Could not upload`
                });

            } else {
                console.log(`response`, res);
                resolve({ statusCode: 200, body: `https://intuit-coding-challenge-kevin.s3-us-west-1.amazonaws.com/csv/${fileName}` });
            }
        });
    });
};