# next-django
A few years ago, we won a small "grant" to build a project from a start up competition. Back then, I did not know better. We took months, and months to build our product. Out of no where, a huge company came out with a very similar product, good ideas tends to converge.

That's how Next-Django came to be, I knew I had to build a stack that is:
- Easy to deploy
- Easy to maintain
- Easy to scale
- Code less, and do more
- Yet, still be able to build a product quickly, within days.
So, we don't waste time building something only to get beaten by a big company, ever again.

Next-Django is the calmulation of my own experiences, and the best practices I have learned from the team. This also includes best practices from the community, and the industry.

# The Stack
The statck is a combination of Django, and NextJS. Django is used as a backend, and NextJS is used as a frontend. The two are connected via OpenAPI spec. The spec is generated from Django, and used to generate types for NextJS. This allows us to have type safe API client, and type safe API server.

Django, and NextJS compliments each other very well. Django is a very powerful backend framework, and NextJS is a very powerful frontend framework. Generally Django is very weak at frontend, and NodeJS generally is weak at data manipulation.

This stack offers pretty much everything you need to build a product, and deploy it to production. Minimal third party services are used, so you can have full control over your product.
## Gateway
- Django: Nothing beats Django's ORM, and the admin panel.
- Django Ninja: A very simple, yet powerful FastAPI like framework.
- Pydantic: The best data validation library for Python.
- Rich: A library for beautiful terminal output for debugging.
- Celery: A simple, yet powerful task queue.
- Redis: A simple, yet powerful message broker, and cache.
- Django Storage: Storage backend for any buckets out there.
- Pandas: When you cannot do things in DB, Pandas is your friend.
- WhiteNoise: Dead simple static file server.
- Postgres: Database
- hypercorn: ASGI server
## Frontend
- NextJS: React framework with emphasis on React Server Components.
- NextAuth: Authenthicate with any OAuth providers, or your own custom auth.
- TailwindCSS: CSS framework
- date-fns: Date library
- zod: Data validation library
- tanstack-query: For when you really need to query data from the frontend.
- OpenAPI fetch: type safe API client
- OpenAPI TS: Generate types from OpenAPI spec.
- Shadcn UI: UI components
- Zustand: State management
- sonner: toast
- BlocknoteJS: Notion like editor
- React Hook Form: Form and form validation
## Tools
- devcontainer: VSCode devcontainer for easy identical environments. But it worked on my PC is no longer an excuse.
- Cloudflare tunnel: Expose your local server to the internet without a public IP
