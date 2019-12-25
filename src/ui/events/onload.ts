document.addEventListener('DOMContentLoaded', () => {
  parent.postMessage(
    {
      pluginMessage: {
        type: 'get-settings'
      }
    },
    '*'
  );
});
