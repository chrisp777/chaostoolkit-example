# Chaostoolkit-Example
An example of how two services connected over the web can be experimented with using the chaostoolkit.

The storage service serves random Star Wars quotes, this could be a database wrapper in real life. 
The retrieval service calls the storage service to get a quote to display.

# Quick start
To install and then spin up the two services wrapped in pm2.

`npm install`

`npm start`

## Configure the experiments
Set the env variables `STORAGE_URL` and `RETRIEVAL_URL`

## Run the experiments

`chaos run experiment-quote-storage-process.json`

`chaos run experiment-unresponsive-quote-storage.json`

One of these will fail, and the other will pass.