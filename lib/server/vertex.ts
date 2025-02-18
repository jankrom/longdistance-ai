import { createVertex } from "@ai-sdk/google-vertex"

export const vertex = createVertex({
    location: process.env.GOOGLE_APPLICATION_LOCATION,
    project: process.env.GOOGLE_APPLICATION_QUOTA_PROJECT_ID,
    googleAuthOptions: {
      credentials: {
        type: process.env.GOOGLE_APPLICATION_TYPE,
        client_id: process.env.GOOGLE_APPLICATION_CLIENT_ID,
        client_secret: process.env.GOOGLE_APPLICATION_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_APPLICATION_REFRESH_TOKEN,
        quota_project_id: process.env.GOOGLE_APPLICATION_QUOTA_PROJECT_ID,
        universe_domain: process.env.GOOGLE_APPLICATION_UNIVERSE_DOMAIN,
      },
    },
  })