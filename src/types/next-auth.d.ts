import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface User {
        email: string;
        youserId: token.youserId;
        accessToken: string;
    }

    interface Session {
        youser: {
            email: string;
            youserId: token.youserId;
        };
        accessToken: string;
        status: {
            authenticated;
            loading;
        };
    }

    interface Token {
        accessToken: string;
        email: string;
        youserId: token.youserId;
    }
}