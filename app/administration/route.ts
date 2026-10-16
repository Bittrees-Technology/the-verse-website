import { createProjectAdministration } from '../../shared/project-administration/portal.mjs';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const handle = createProjectAdministration('verse');
export const GET = handle;
export const POST = handle;
