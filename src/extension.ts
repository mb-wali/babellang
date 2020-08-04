// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "babellang" is now active!');

	const disposable = vscode.commands.registerCommand('babellang.trans1', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);

			const changed = "{{ _(\"" + word + "\") }}";
			editor.edit(editBuilder => {
				editBuilder.replace(selection, changed);
			});
		}
	});

	const disposable2 = vscode.commands.registerCommand('babellang.trans2', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);

			const changed = "{% trans var_name=\"var_value\" %}" + word + "{% endtrans %}"
			editor.edit(editBuilder => {
				editBuilder.replace(selection, changed);
			});
			const pos1 = new vscode.Position(editor.selection.start.line, editor.selection.start.character + 9);
			const pos2 = new vscode.Position(editor.selection.start.line, editor.selection.start.character + 17);
			editor.selection = new vscode.Selection(pos1, pos2);
			
		}
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() { }
