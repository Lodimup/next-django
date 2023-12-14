/**
 * register runs once on cold start
 * See: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
 */

/**
 * Check for required ENVs
 */
function envManager() {
  const ENVS = [
    "NEXT_PUBLIC_GATEWAY_URL",
    "GATEWAY_URL",
    "NEXTAUTH_URL",
    "NEXTAUTH_SECRET",
    "GATEWAY_SERVICE_TOKEN",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
  ];
  let errs: any[] = [];
  ENVS.forEach((env) => {
    if (!process.env[env]) {
      errs.push(env);
    }
  });
  if (errs.length) {
    throw new Error(`Missing ENVs: ${errs.join(", ")}`);
  }
}

export function register() {
  envManager();
}
