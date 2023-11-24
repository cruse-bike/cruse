
To set-up this project, start by installing bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

Create the project:

```bash
bun create svelte@latest .
```

Next steps:

```bash
bun install
git init && git add -A && git commit -m "Initial commit" 
bun run dev -- --open
```

Add packages as follows:

```bash
bun add -D svelte-maplibre
```

Run a production build:

```bash
bun run build
```
