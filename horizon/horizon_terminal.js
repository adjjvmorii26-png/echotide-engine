/**
 * Horizon Terminal — single-cycle interface
 */
const { cycle } = require('../crest/crest_flux.js');

async function run() {
  console.log('Horizon Terminal online. Running single crest cycle…\n');
  const result = await cycle(0);
  console.log('\nResult:', JSON.stringify(result, null, 2));
}

if (require.main === module) run();
