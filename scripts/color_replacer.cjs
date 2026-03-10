const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['./src/components', './src'];
const EXTENSIONS = ['.jsx', '.js', '.css'];

const HEX_REGEX = /#([0-9a-fA-F]{3,8})/g;
const RGBA_REGEX = /rgba?\(.*?\)/g;

// Exact case-insensitive hex replacements based on user prompt mapping
const HEX_MAPPINGS = {
  // BLUES
  '#3D5AFE': 'var(--recovery-blue)',
  '#2563EB': 'var(--recovery-blue)', // standard tailwind blue-600
  '#1D4ED8': 'var(--recovery-blue-deep)',
  '#3B82F6': 'var(--recovery-blue-glow)',
  '#EFF6FF': 'var(--recovery-blue-tint)',

  // DARK BACKGROUNDS
  '#0F0D0B': 'var(--command-black)',
  '#09090b': 'var(--command-black)',
  '#1E1A16': 'var(--command-surface)',
  '#111827': 'var(--command-surface)',
  '#1C2333': 'var(--command-card)',
  '#2D3748': 'var(--command-border)',

  // LIGHT BACKGROUNDS & TEXT
  '#F7F5F2': 'var(--clinic-white)',
  '#FEFCFA': 'var(--clinic-white)', // Often used as white alternative
  '#ffffff': '#FFFFFF', // Keep white as white
  '#fff': '#FFFFFF',
  
  // Mists/Silvers
  '#EDE8E0': 'var(--clinic-mist)',
  '#F1F3F7': 'var(--clinic-mist)',
  '#ECE5DD': 'var(--clinic-silver)', // WhatsApp bg
  '#E4DDD5': 'var(--clinic-silver)',
  
  // Stones/Slates
  '#A09890': 'var(--clinic-stone)',
  '#6B6560': 'var(--clinic-slate)',
  
  // Inks
  '#1A1A1A': 'var(--clinic-ink)',
  '#0a0a0a': 'var(--clinic-ink)',

  // WHATSAPP
  '#25D366': 'var(--signal-green)', // WhatsApp Green
  '#128C7E': 'var(--signal-green-deep)',
  '#075E54': 'var(--command-card)', // WhatsApp dark header
  '#DCF8C6': 'var(--signal-green-tint)', // WhatsApp outgoing

  // LOSS INDICATORS
  '#E8552A': 'var(--loss-red)',
  '#DC2626': 'var(--loss-red)',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let modified = false;

  // Replace Hex Codes
  content = content.replace(HEX_REGEX, (match, hexPart) => {
    const fullHex = match.toUpperCase();
    if (fullHex === '#FFFFFF' || fullHex === '#FFF' || fullHex === '#F8FAFC') {
      return fullHex; // Explicitly keep white
    }
    
    // Look up in our mapping dictionary, default to original if not found (we will flag these)
    // We try full, then try shortening or expanding to 6 digits for lookup
    let lookupHex = fullHex;
    if (lookupHex.length === 4) {
      lookupHex = '#' + lookupHex[1] + lookupHex[1] + lookupHex[2] + lookupHex[2] + lookupHex[3] + lookupHex[3];
    }

    // Try finding close matches or exact matches
    const replacement = HEX_MAPPINGS[lookupHex] || HEX_MAPPINGS[fullHex];
    
    if (replacement) {
      modified = true;
      return replacement;
    }
    
    // Catch-all rules based on color temperature/darkness if it's an unmapped hex
    // (A more sophisticated script would parse HSL)
    return match; 
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (EXTENSIONS.includes(path.extname(fullPath))) {
      processFile(fullPath);
    }
  }
}

DIRECTORIES.forEach(traverseDir);
console.log('Hex replacement pass complete.');
