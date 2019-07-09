const AWS = require('aws-sdk');
const awsConfig = {
    apiVersion: '2006-03-01',
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.ACCESS_KEY,
    region: 'us-west-1',
};

const s3 = new AWS.S3(awsConfig);



exports.handler = async (event) => {

    let bodyArr = JSON.parse(event.body).body.split('\n').map(i => i.split(','));
    let res = [];
    for (let i = 1; i < bodyArr.length; i++) {
        let obj = {};
        for (let j = 0; j < bodyArr[i].length; j++) {
            obj[bodyArr[0][j].trim()] = bodyArr[i][j].trim();
        }
        res.push(obj);
    }
    let fileName = `${event.queryStringParameters.name}.txt`;
    const params = { Bucket: 'intuit-coding-challenge-kevin/json', Key: fileName, Body: JSON.stringify(res) };
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
                resolve({ statusCode: 200, body: `https://intuit-coding-challenge-kevin.s3-us-west-1.amazonaws.com/json/${fileName}` });
            }
        });
    });

};