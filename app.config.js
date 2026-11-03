const { execFileSync } = require('node:child_process');

module.exports = ({ config }) => {
  let commitHash = process.env.EAS_BUILD_GIT_COMMIT_HASH;

  if (!commitHash) {
    try {
      commitHash = execFileSync('git', ['rev-parse', 'HEAD'], {
        encoding: 'utf8',
      }).trim();
    } catch {
      commitHash = 'indisponível';
    }
  }

  return {
    ...config,
    extra: {
      ...config.extra,
      commitHash,
    },
  };
};
