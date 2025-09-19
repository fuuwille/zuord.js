import fs from 'fs';
import path from 'path';
import url from 'url';

export const env = {
    tsconfig: async (func: Function) => {
        const tsconfigUrl = import.meta.resolve('zuord/meta/tsconfig.dist.json');
        const tsconfigPath = url.fileURLToPath(tsconfigUrl);

        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));

        const tempTsconfigPath = path.join(process.cwd(), 'tsconfig.dist.json');
        fs.writeFileSync(tempTsconfigPath, JSON.stringify(tsconfig, null, 2));

        await func(tsconfig);

        fs.unlinkSync(tempTsconfigPath);
    }
}