# Gamefolio Blog Management Guide

Welcome to the Gamefolio blog system! This guide will show you how to add, edit, and manage blog posts for the Gamefolio website using our GitHub-powered system.

## 🚀 Quick Start

1. **Access the Blog Repository**: https://github.com/BetaONEIO/gamefolioblogs
2. **Add your content** to the repository
3. **Your changes appear instantly** on the website - no redeployment needed!

## 📁 Repository Structure

Your blog repository should look like this:

```
gamefolioblogs/
├── posts.json          # Master list of all blog posts
├── post1-slug.md       # Individual blog post files
├── post2-slug.md
├── post3-slug.md
└── README.md           # This guide
```

## 📝 Adding a New Blog Post

### Step 1: Create the Markdown File

Create a new `.md` file with a descriptive slug (e.g., `indie-game-marketing-2025.md`):

```markdown
# Your Blog Post Title

Write your content here using standard Markdown formatting.

## Subheadings

Use ## for main sections and ### for subsections.

### Key Points

- Use bullet points for lists
- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- `Code snippets` for technical terms

## Images

![Alt text](https://your-image-url.com/image.jpg)

## Links

[Link text](https://example.com)

> Use blockquotes for important callouts or quotes

```

### Step 2: Add Entry to posts.json

Open `posts.json` and add your new post to the array:

```json
{
  "slug": "indie-game-marketing-2025",
  "title": "Indie Game Marketing Strategies for 2025",
  "excerpt": "A brief description of your post (2-3 sentences max)",
  "author": "Your Name",
  "authorTwitter": "@yourhandle",
  "publishedAt": "2025-01-30",
  "category": "Indie games",
  "featured": false,
  "imageUrl": "https://images.unsplash.com/photo-ID?w=800&h=400&fit=crop",
  "readTime": "8 min read"
}
```

### Step 3: Commit and Push

1. Save your changes
2. Commit to the repository
3. Push to GitHub
4. **Your post appears instantly on the website!**

## 📋 Required Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `slug` | URL-friendly filename (must match .md file) | `"indie-game-marketing-2025"` |
| `title` | Post title displayed on site | `"Indie Game Marketing Strategies for 2025"` |
| `excerpt` | Brief description for post previews | `"Learn proven strategies..."` |
| `author` | Author's full name | `"Sarah Johnson"` |
| `authorTwitter` | Twitter handle (optional) | `"@sarahjdev"` |
| `publishedAt` | Publication date (YYYY-MM-DD) | `"2025-01-30"` |
| `category` | Must use approved categories | `"Indie games"` |
| `featured` | Set to `true` for featured post | `false` |
| `imageUrl` | Header image URL | Unsplash URL |
| `readTime` | Estimated reading time | `"8 min read"` |

## 🏷️ Approved Categories

Use **exactly** these categories (case-sensitive):

- `"Indie games"` - Game development, tools, engines
- `"Streaming"` - Twitch, YouTube, content creation
- `"Gaming news"` - Industry trends, market analysis
- `"web3"` - Blockchain gaming, NFTs, decentralized gaming
- `"Crypto"` - Cryptocurrency, DeFi gaming, payments

## ⭐ Featured Posts

- Only **one post** should have `"featured": true`
- Featured posts appear prominently at the top
- When adding a new featured post, set others to `"featured": false`

## 🖼️ Images

### Recommended Sources:
- **Unsplash**: `https://images.unsplash.com/photo-ID?w=800&h=400&fit=crop`
- **Your own images**: Upload to GitHub and use relative paths

### Image Guidelines:
- **Size**: 800x400px recommended
- **Format**: JPG or PNG
- **Quality**: High resolution, web-optimized
- **Content**: Gaming-related, professional

## ✍️ Writing Guidelines

### Title Best Practices:
- Keep under 60 characters
- Be descriptive and engaging
- Include relevant keywords
- Use title case

### Excerpt Guidelines:
- 2-3 sentences maximum
- Summarize the main value
- Avoid clickbait
- End without punctuation

### Content Structure:
```markdown
# Main Title (H1 - only one per post)

Brief introduction paragraph.

## Main Section (H2)

Content here...

### Subsection (H3)

More detailed content...

## Another Main Section

Continue with your content...

## Conclusion

Wrap up your thoughts.
```

## 🔄 Editing Existing Posts

1. **Find the post**: Locate the `.md` file in the repository
2. **Edit content**: Make your changes in Markdown
3. **Update metadata**: Modify `posts.json` if needed (title, category, etc.)
4. **Commit changes**: Push to GitHub
5. **Changes are live immediately**

## ❌ Common Mistakes to Avoid

1. **Slug mismatch**: Ensure the slug in `posts.json` matches the `.md` filename
2. **Wrong category**: Use exact category names from the approved list
3. **Missing fields**: All required fields must be present
4. **Multiple featured**: Only one post should be featured at a time
5. **Invalid JSON**: Check JSON syntax before committing

## 🛠️ Troubleshooting

### Post not appearing on website:
- Check that slug matches filename exactly
- Verify all required fields are present
- Ensure JSON syntax is valid
- Check category spelling and capitalization

### Images not loading:
- Verify image URL is accessible
- Use HTTPS URLs only
- Test image URL in browser first

### Twitter links not working:
- Include @ symbol in authorTwitter field
- Use format: `"@username"`

## 📞 Getting Help

If you encounter issues:

1. **Check the console**: Look for error messages in browser developer tools
2. **Validate JSON**: Use a JSON validator for posts.json
3. **Test locally**: Preview Markdown files before publishing
4. **Ask for help**: Contact the development team

## 🎯 Content Strategy Tips

### Posting Schedule:
- Aim for 2-3 posts per week
- Space out featured posts
- Balance content across all categories

### SEO Best Practices:
- Use relevant keywords in titles
- Write compelling excerpts
- Include internal and external links
- Optimize images with alt text

### Engagement Tips:
- Ask questions in your content
- Include actionable advice
- Share personal experiences
- Encourage social media sharing

---

**Happy blogging! 🎮📝**

*This blog system automatically updates the Gamefolio website whenever you make changes to this repository. No technical knowledge required - just write great content and push to GitHub!*