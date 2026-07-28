import {mkdir, rm} from 'fs/promises'

// await mkdir("uploads")
// await mkdir("uploads/images");

// await mkdir("docs/ resumes/ data", {recursive: true});

await rm("docs", {recursive: true});
