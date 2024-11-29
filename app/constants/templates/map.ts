import { authOptions } from "@/app/builder/_components/lib/auth-options";
import {
  forgetPasswordSnippet,
  MagicLinkClientImport,
  MagicLinkClientSnippet,
  MagicLinkServerImport,
  MagicLinkServerSnippet,
  PassKeyClientImport,
  PassKeyClientSnippet,
  PassKeyServerImport,
  PassKeyServerSnippet,
  PassKeySnippet,
  remeberMeSnippet,
} from "./file";

export const commentMap: Record<string, string> = {
  socialProviders: `socialProviders: {

  }
 `,
  forgetPassword: forgetPasswordSnippet,
  comment: '<div className="comment-placeholder"></div>',
  rememberMe: remeberMeSnippet,
  empty: `// newLine`,
  newLine: `

 \n
 \n
  `,
  passKey: PassKeySnippet,
  passKeyServerImport: PassKeyServerImport,
  passKeyClientImport: PassKeyClientImport,
  passKeyServer: PassKeyServerSnippet,
  magicLinkServerImport: MagicLinkServerImport,
  magicLinkServer: MagicLinkServerSnippet,
  magicLinkClient: MagicLinkClientSnippet,
  magicLinkClientImport: MagicLinkClientImport,
  passKeyClient: PassKeyClientSnippet,
  googleUI: `
            <Button
                variant="outline"
                className="gap-2 py-4 flex-1"
                onClick={async () => {
                    await client.signIn.social({
                        provider: "google"
                    })
                }}
            >
              Google
            </Button>
  `,

  githubUI: `
          <Button
                variant="outline"
                className="gap-2 py-4 flex-1"
                onClick={async () => {
                     await client.signIn.social({
                     provider: "Github"
                })
             }}
            >
              Github
           </Button>
   `,
  twitterUI: `
          <Button
                variant="outline"
                className="gap-2 py-4 flex-1"
                onClick={async () => {
                    await client.signIn.social({
                    provider: "twitter"
                   })
                >
                  Twitter
          </Button>
         `,
  appleUI: `
          <Button
                variant="outline"
                className="gap-2 py-4 flex-1"
                onClick={async () => {
                    await client.signIn.social({
                    provider: "apple"
                })
               >
                Apple
         </Button>
      `,
  discordUI: `
          <Button
                 variant="outline"
                 className="gap-2 py-4 flex-1"
                 onClick={async () => {
                      await client.signIn.social({
                      provider: "discord"
                  })
                >
               Discord
          </Button>
         `,
  facebookUI: `
            <Button
                variant="outline"
                className="gap-2 py-4 flex-1"
                onClick={async () => {
                    await client.signIn.social({
                    provider: "facebook"
                 })
               >
                  Facebook
            </Button>
                  `,
  microsoftUI: `
          <Button
              variant="outline"
              className="gap-2 py-4 flex-1"
              onClick={async () => {
                  await client.signIn.social({
                  provider: "microsoft"
                })
               >
                 Microsoft
          </Button>
                  `,
  github: `
      github: {
           clientId: process.env.GITHUB_CLIENT_ID!,
           clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
  `,
  google: `
      google: {
           clientId: process.env.GOOGLE_CLIENT_ID!,
           clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
  `,
  facebook: `
      facebook: {
           clientId: process.env.FACEBOOK_CLIENT_ID as string,
           clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      },
  `,
  twitch: `
      twitch: {
           clientId: process.env.TWITCH_CLIENT_ID as string,
           clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
       },
  `,
  twitter: `
      twitter: {
           clientId: process.env.TWITTER_CLIENT_ID as string,
           clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      },
    `,
  apple: `
        apple: {
             clientId: process.env.APPLE_CLIENT_ID as string,
             clientSecret: process.env.APPLE_CLIENT_SECRET as string,
         },
    `,
  microsoft: `
      microsoft: {
            clientId: process.env.MICROSOFT_CLIENT_ID as string,
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
      },
      `,
  discord: `
       discord: {
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      },
      `,
};
export const routeMap = {
  forgetPassword: "/app/forget-password/page.tsx",
  resetassword: "/app/reset-password/page.tsx",
};
