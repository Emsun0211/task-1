import { google } from "googleapis";
import * as dotenv from "dotenv";
dotenv.config();
// const google from "googleapis";

// import key from "./secret.json" assert { type: "json" };

// const key = require("./secret.json");

export const SHEET_ID = "1BSeJMDtB7HqkIm3GNqESvhrtkAvODqQ4Ix4PeddANDQ";

// const private_key =
// 	"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCi3VE6FoTpOcwy\nj8XCshvYrd2k8izQ0KvxdcOniKEDrRklBqXCbu7wRzicd2YXOc6sy3pRc0hJMQJD\nFpQg+XUFXkhwP3yhtYj/HyraNRsMaYRloRxNLPa7KmSBbxcBfUJgdff0ze+Mvns6\nFsZtI955PDz2KZV48uYeJNf1KOwnDtBHrDoXzEnc63aKQOrWlZ9Hh/VrXMICExIR\naOzrdki21U0C73E3Z2XNAGpo854dp5dKlZq8hQleLJvNteuTnDz6gaSkeFEll0T9\n1+r4kZXSExKBfCdupY/E3pEHA/2RaAKOPODjLDsTS98Y0vA6mZC7QHWQAs8H+VRc\nWIwXoabpAgMBAAECggEAA3U+hcS3oroS71nlIYqlk7axV5C6yd48YF6XPmXkwU66\nE3KuL1Aqq5hfh9bzKHgWPs39NWCEvuUW/rSqhX62cNw9HoEClO5lT8FqKALrpZpR\n8NR4ZN0ZCgVO5/6jVulBcQngL2b1+J+Mv0F/ig6yaRGR28orPcuufiJbIX3ycavS\nq0nJzw5ZvptGgkxVUQjgdHpefdf9VT7gPFgJ1DKyCCH/VStF4/t8/NaRcUCwXWaE\neCFIfOqtmyhIBbEtRNMpQq3mBxByyPv0zCo9Iuiq80+imfTM4pAQT8xHH9DKOSM9\nUYt9hmA9DqdDYWeH42RzvtcLUIXzYYQswed428ruQQKBgQDVk1F09iCRDWzeinjd\n9HblCCGtePzg48Tg4w8X9H2oF3Lqv47tqBwXTpv7gi6VOdip5NNYxnP268qdPdNC\n+N5fT696tMEzWDjwtlRdDms96PU9xpc+DlpiRfMl0RzcoOS+elFw0VGiXRY3g+B9\n9iiVILmQemOfp2mrbdeKUPzXmQKBgQDDN0KPQXgP1pLm0Yp9aGK1Nw+ig88+QgzK\n8WewractNd6qKpzwPdDgmeLdIol/Wk8uZ7xw1nwMf3c12eX6MllmezwAu6ewt8yR\n42zevn3w45Tg2wQITxn83C2SYT6Z6nLO7QtYLX5YhlE+l/+7CxIeabhyjFQMnLXg\nSxe5s4yb0QKBgQCkqdBDvP+e1hr5+Qj3F2QTcRGGDaHqQbGpMWaRsY6v6mRPWSF5\nWgNOdO0OHHCN3OuPET1hVKBT37d3RBN9ryLDmUxR7sqGK56699hTZqqIMPPjjRlO\nXwKQgh3VKkR2VhYGRYhE0x19cQeQBb0vYHopf/GR0sq8bParlSR5H7fRAQKBgQCq\njJSx41ipPaWJ0ndTqObTuw8FxHJCyiGzC8SzLoNnlDC8Kg6CNP9PuiHhYFMP2C5l\nNGwFiN1HbfUQLxYkx+gjCHcbjNasJWer7S0oTPRqh+mBqNaVC8aAizulLyAqCBHV\nhnLqzpQbcv132gOpvbpOp75lFQQ5IJAlLHXF339wgQKBgQCxNrkNMycygFPAMdjH\nssqe9z66UDxb+b5pNCab0eLceUSq3c5weZP8wxCK3GWSY7PhuGaG075V+cAlAXJw\n38Ri6qvTzfbLTNM1pDr6Wvf3Do6USSfDuO/weFBumwA2VJqu3m0MMf/fOmd9GW8i\n1aINPtR2C4HHgK9EhXbHS7mNwQ==\n-----END PRIVATE KEY-----\n";
// const client_email =
// 	"contact-form-bot@macro-shadow-367708.iam.gserviceaccount.com";

const private_key = process.env.PRIVATE_KEY;
const client_email = process.env.CLIENT_EMAIL;

export const client = new google.auth.JWT(client_email, null, private_key, [
	"https://www.googleapis.com/auth/spreadsheets",
]);

const sheets = google.sheets({ version: "v4", auth: client });

export default sheets;

// module.exports = { sheets, client, SHEET_ID, drive };
