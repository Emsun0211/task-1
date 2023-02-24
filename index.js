import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import { z, ZodError } from "zod";
import sheets, { SHEET_ID } from "./sheetClient.js";

const app = express();

app.use(
	cors({
		origin: "*",
	})
);

const contactSchema = z.object({
	fname: z
		.string()
		.min(4, { message: "Name can not be less than 4 characters" }),
	lname: z.string(),
	email: z.string().email(),
	track: z.string(),
	portfolio: z.string(),
	github: z.string(),
});

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.status(200).send("Welcome to Gbenga Task 1");
});

app.post("/send-message", async (req, res) => {
	try {
		const body = contactSchema.parse(req.body);

		const rowsValues = Object.values(body);

		await sheets.spreadsheets.values.append({
			spreadsheetId: SHEET_ID,
			range: "appdata!A:H",
			insertDataOption: "INSERT_ROWS",
			valueInputOption: "RAW",
			requestBody: {
				values: [rowsValues],
			},
		});

		// const result = await drive.files.create({
		res.status(200).json({ message: "Added Successfully!" });
	} catch (error) {
		console.log(error);
		if (error instanceof ZodError) {
			res.status(400).json({ error: error.message });
		} else {
			res.status(400).json({ error });
		}
	}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening to port: " + PORT));
