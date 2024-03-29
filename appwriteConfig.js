import { Client,Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://192.168.1.125/v1")
  .setProject("6566342ccc7653dafe81");

const account = new Account(client);

export {account}

