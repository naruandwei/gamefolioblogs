const { TwitterApi } = require('twitter-api-v2');
const { execSync } = require('child_process');
const fs = require('fs');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function main() {
  const currentPosts = JSON.parse(fs.readFileSync('posts.json', 'utf8'));
  const isManual = process.env.GITHUB_EVENT_NAME === 'workflow_dispatch';

  let newPosts;

  if (isManual) {
    // Manual run — tweet only the most recently published post
    const sorted = [...currentPosts].sort((a, b) =>
      new Date(b.publishedAt) - new Date(a.publishedAt)
    );
    newPosts = [sorted[0]];
    console.log('Manual run: tweeting most recent post only.');
  } else {
    let previousPosts = [];
    try {
      const previousJson = execSync('git show HEAD~1:posts.json').toString();
      previousPosts = JSON.parse(previousJson);
    } catch {
      previousPosts = [];
    }
    const previousSlugs = new Set(previousPosts.map(p => p.slug));
    newPosts = currentPosts.filter(p => !previousSlugs.has(p.slug));
  }

  if (newPosts.length === 0) {
    console.log('No new posts detected, skipping tweet.');
    return;
  }

  for (const post of newPosts) {
    const url = `https://gamefolio.com/blog/${post.slug}`;
    let text = `New post: ${post.title}\n\n${post.excerpt}\n\n${url}`;

    if (text.length > 280) {
      const overhead = `New post: ${post.title}\n\n...\n\n${url}`.length;
      const truncated = post.excerpt.substring(0, 280 - overhead - 1);
      text = `New post: ${post.title}\n\n${truncated}…\n\n${url}`;
    }

    let attempts = 0;
    while (attempts < 3) {
      try {
        await client.readWrite.v2.tweet(text);
        console.log(`Tweeted: ${post.title}`);
        break;
      } catch (err) {
        attempts++;
        if (attempts === 3) throw err;
        console.log(`Attempt ${attempts} failed (${err.code}), retrying in 5s...`);
        await new Promise(r => setTimeout(r, 5000));
      }
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
