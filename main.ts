import fs from 'node:fs';

const POEM = `You held the door.
I carried the box through.
We called that a plan.

At the top of the stairs
you let go.
The door swung shut
behind us both.

That was when I understood:
the one who holds the door
never gets to enter.`;

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', POEM, 'utf8');
