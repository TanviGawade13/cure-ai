# Cure AI authentication starter

A small Next.js frontend with Clerk-powered sign-up, sign-in, and a protected dashboard. Tailwind CSS styles the pages.

## 1. Install and run the app

Node.js 20.9 or newer is required. Dependencies are installed with npm:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The sign-in and sign-up screens need Clerk keys before authentication can work.

## 2. Add Clerk keys

1. Create a Clerk application in the [Clerk Dashboard](https://dashboard.clerk.com/).
2. Copy its **publishable key** and **secret key**.
3. In the project root, copy `.env.example` to `.env.local`.
4. Replace the two example key values in `.env.local` with your Clerk keys. Keep the secret key private; never commit `.env.local`.
5. Restart `npm run dev` after changing environment variables.

The redirect settings in `.env.local` send users to `/dashboard` after sign-in or sign-up. You can also configure which sign-in methods are enabled in the Clerk Dashboard.

## 3. Follow the authentication flow

- `src/app/layout.tsx` wraps the whole application in `ClerkProvider`, making Clerk's session and UI available to its pages.
- `src/app/sign-in/[[...sign-in]]/page.tsx` and `src/app/sign-up/[[...sign-up]]/page.tsx` render Clerk's ready-made authentication screens. The catch-all route segment lets Clerk handle its multi-step flows.
- `src/proxy.ts` checks requests to `/dashboard` and requires an authenticated session. Next.js 16 calls this request hook a **proxy**; older Next.js versions used `middleware.ts`.
- `src/app/dashboard/page.tsx` checks the session again on the server before returning private page content. Its `UserButton` provides account management and sign-out.
- `src/app/page.tsx` is a public home page with links into the authentication flow. `SignedIn` and `SignedOut` show the appropriate navigation for the current session.
- Tailwind utility classes in the page files control layout, spacing, color, and responsive behavior. `src/app/globals.css` contains the shared base styles.

## 4. Check the project

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The build and browser-based authentication flow require valid Clerk keys. Without them, you can still read and change the page layout, but sign-in, sign-up, and the protected dashboard cannot connect to Clerk.

## Next.js concepts in this project

- **App Router:** folders under `src/app` map to website URLs. For example, `src/app/dashboard/page.tsx` becomes `/dashboard`.
- **Server Components:** pages render on the server by default. The dashboard checks the user's session there, before private content is returned.
- **Proxy:** `src/proxy.ts` runs before matching requests reach their pages and redirects signed-out visitors away from the dashboard.
- **Environment variables:** `.env.local` keeps local credentials out of source code. Variables prefixed with `NEXT_PUBLIC_` are intended to be available to browser-side code; `CLERK_SECRET_KEY` must remain server-only.
