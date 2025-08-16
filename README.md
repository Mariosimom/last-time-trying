# Dubai Elite CMS — Final

Everything is set up for Vercel + Supabase + NextAuth.

## Deploy

1. Push all files to a new GitHub repo (root must contain `package.json`, `app/`, `prisma/`).
2. On Vercel → New Project → Import from GitHub → Framework: Next.js → Root: `./`.
3. Add Environment Variables:
   - `DATABASE_URL` — your Supabase Postgres URL
   - `NEXTAUTH_SECRET` — a long random string
4. Deploy.

## Initialize DB (once, from your laptop)

```bash
npm i
npm run db:push
npm run db:seed
```

This creates the tables and an admin user:

- Email: `admin@dubaielite.com`
- Password: `admin123`

## Routes

- `/` — Marketing homepage or CMS blocks (if published).
- `/admin/login` — Admin login.
- `/admin` — Dashboard.
- `/admin/blocks` — Manage Blocks.

## Notes

- Middleware protects `/admin/*` and redirects to `/admin/login` if not signed in.
- Tailwind is configured via `app/globals.css` and `tailwind.config.ts`.
- If you change domain, set `NEXTAUTH_URL` in Vercel to the exact site URL.
