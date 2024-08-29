import { getYYJApiHttpClient } from "@/lib/yyj-api-http-client";
import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    pages: { signIn: "/" },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials: any, req) {
                try {
                    const client = getYYJApiHttpClient();

                    const loginResponse = await client.loginUser({
                        email: credentials.email,
                        password: credentials.password,
                    });

                    if (loginResponse.status > 300) {
                        return null;
                    }
                    const { data } = loginResponse;

                    return {
                        email: data.email,
                        youserId: data.youserId,
                        accessToken: loginResponse.data.token,
                    };
                } catch (e) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.youser.email = token.email as string;
            session.youser.youserId = token.youserId as string;
            session.accessToken = token.accessToken as string;

            return session;
        },
        async jwt({ user, token }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.email = user.email;
                token.youserId = user.youserId;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as Get, handler as POST };