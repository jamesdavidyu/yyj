import { getYYJApiHttpClient } from "@/lib/yyj-api-http-client";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const client = getYYJApiHttpClient();
        const registerPayload = { ...body };
        delete registerPayload["confirmPassword"];
        const registerResponse = await client.registerUser(registerPayload);

        return NextResponse.json({ message: "Success" });
    } catch (e) {
        return NextResponse.json(
            { message: "Error registering account."},
            { status: 500 }
        );
    }
}