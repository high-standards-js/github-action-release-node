const base = require('@high-standards-js/base');
const release = require('@high-standards-js/github-action-release');

(async() => {
    await base.checkAcceptedHighStandards();

    let workflowObject = release.getWorkflowFileObject('release');
    workflowObject = release.addStep(
        workflowObject, 
        'release',
        'Setup Node.js', 
        100.0,
        {
            uses: 'actions/setup-node@v1',
            with: {
              'node-version': 12
            }
        }
    );
    release.saveWorkflowFileObject(workflowObject, 'release');
})();
