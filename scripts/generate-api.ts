import openapiTS from 'openapi-typescript';
import ts from 'typescript';

async function generateApiTypes() {
	const backendOrigin = process.env.VITE_BACKEND_ORIGIN || 'http://localhost:3000';
	const swaggerUrl = `${backendOrigin}/swagger/json`;

	try {
		const nodes = await openapiTS(swaggerUrl);

		// Create a TypeScript printer to convert nodes to string
		const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
		const sourceFile = ts.createSourceFile(
			'temp.ts',
			'',
			ts.ScriptTarget.Latest,
			false,
			ts.ScriptKind.TS
		);

		// Convert each node to a string and combine them
		const output = nodes
			.map((node) => printer.printNode(ts.EmitHint.Unspecified, node, sourceFile))
			.join('\n');

		// Write the output to src/lib/api-types.ts
		Bun.write('src/lib/api-types.ts', output);

		console.log('API types generated successfully');
	} catch (error) {
		console.error('Failed to generate API types:', error);
		process.exit(1);
	}
}

generateApiTypes();
