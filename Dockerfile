FROM node:18 AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/
COPY apps/frontend/package.json apps/frontend/
COPY packages/models/package.json packages/models/

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NITRO_PRODUCTION=true

COPY --from=builder /app/apps/backend/.output .

CMD ["node", "server/index.mjs"]
