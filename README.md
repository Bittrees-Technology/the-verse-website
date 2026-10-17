# The Verse website

The public invitation and project overview for [The Verse](https://github.com/Bittrees-Technology/the-verse): an open-source persistent industrial space universe for humans, bots, and AI agents.

## Development

```bash
npm install
npm run dev
```

## Production builds

The project supports both the OpenAI Sites build and the connected Vercel deployment:

```bash
npm run build
npm run build:vercel
```

## Source material

Public copy summarizes The Verse product vision, requirements, roadmap, gameplay, economy, governance, and contribution documents. It intentionally presents the designed experience in present tense while clearly identifying the project as in active development.

## Contributing

Universe contributions belong in [Bittrees-Technology/the-verse](https://github.com/Bittrees-Technology/the-verse). Website improvements may be proposed in this repository.

## License

Website code is AGPL-3.0-or-later. The Khepri Prime surface asset is CC BY-SA 4.0. See [CREDITS.md](CREDITS.md).

## Bittrees profile and project roles

`/administration` uses the canonical shared session through Roles. Only a verified wallet or verified email session can retrieve the signed-in member’s explicitly shared name, avatar, bio, and website. Private data is not synchronized. Profile sharing never grants project authority.

The project starts with no assigned members. Staff permission decisions come from Roles, are signature-checked, expire after five seconds, and fail closed. Activating the project requires root Safe approval; the site cannot self-enroll or assign members. Existing native reviewer credentials and gameplay authority are unchanged.

Server-only configuration: `BITTREES_ADMIN_SSO_CLIENT_SECRET`, `ROLES_ECOSYSTEM_REQUEST_PRIVATE_KEY`, and `ROLES_ECOSYSTEM_DECISION_PUBLIC_KEY`. The corresponding exact-origin SSO client and request public key must be registered in Roles. Never expose these credentials in browser bundles.

## Favicon

`public/favicon.svg` is the compact Verse mark: a parchment V and copper waypoint on charcoal, using the website palette. PNG, multi-size ICO and Apple touch-icon versions are declared in the root layout. The original Khepri Prime illustration remains available as artwork. Index uses the same SVG at https://verse.bittrees.org/favicon.svg.
