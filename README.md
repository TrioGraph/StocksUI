# Stock Broker Admin UI (Angular)

Minimal admin dashboard scaffold with:
- Login component (mock auth)
- Dashboard with stock snapshot
- Multi-theme support (light, dark, cosmic)
- Routing and AuthGuard

How to run (PowerShell):

```powershell
cd D:\Stock\UI
npm install
# Use Angular CLI (globally) or npx to run
npx ng serve --open
```

Notes:
- This is a minimal scaffold. Install full Angular CLI globally if you prefer: `npm i -g @angular/cli`.
- The authentication is a mock; integrate real backend and secure storage for production.
