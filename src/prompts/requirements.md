# File Structure of this codebase

src
├── app
│ ├── (home)
│ │ ├── page.tsx
│ │ ├── articles
│ │ │ └── page.tsx
│ │ └── layout.tsx
│ ├── logs
│ │ └── [id]
│ │ ├── page.tsx
│ │ └── layout.tsx
│ ├── products
│ │ ├── page.tsx
│ │ └── layout.tsx
│ ├── profile
│ │ └── layout.tsx
│ ├── globals.css
│ └── layout.tsx
├── components
│ ├── article
│ │ ├── ArticleCard.tsx
│ │ ├── LinkedProduct.tsx
│ │ └── Tags.tsx
│ ├── ellipsis-dropdown
│ ├── feed-tabs
│ ├── home
│ │ ├── BackgroundColorSetter.tsx
│ │ ├── left-sidebar
│ │ │ ├── LeftSidebar.tsx
│ │ │ ├── NavMenu.tsx
│ │ │ ├── NewPostButton.tsx
│ │ │ └── UserProfileButton.tsx
│ │ ├── Logo.tsx
│ │ ├── MainFeed.tsx
│ │ └── right-banners
│ │ └── RightBanners.tsx
│ ├── log
│ │ └── LogFeed.tsx
│ ├── log-editor
│ ├── post-card
│ │ └── PostCardHeader.tsx
│ ├── products
│ │ └── ProductFeed.tsx
│ ├── profile
│ ├── quiz
│ ├── ui
│ ├── Button.tsx
│ ├── Icon.tsx
│ └── TabGroup.tsx
├── constants
├── data
│ ├── dummyArticles.ts
│ └── dummyLogs.ts
├── hooks
├── lib
│ └── utils.ts
├── mock_images
│ ├── article
│ │ └── card-images
│ │ └── article-1.png
│ └── feed
│ └── tabs.png
├── prompts
│ └── requirements.md
├── styles
│ └── components.css
├── types
│ ├── article.ts
│ └── log.ts
└── utils

public
├── icons
│ ├── checklist.svg
│ ├── square.and.pencil.svg
│ ├── line.3.horizontal.svg
│ ├── line.3.svg
│ ├── doc.fill.svg
│ ├── rectangle.fill.svg
│ ├── arrowshape.up.fill.svg
│ ├── triangle.fill.down.svg
│ ├── arrowshape.turn.up.right.fill.svg
│ ├── xmark.svg
│ ├── circle.grid.cross.fill.svg
│ ├── arrow.down.svg
│ ├── italic.svg
│ ├── disquiet.asterisk.svg
│ ├── rectangle.svg
│ └── arrow.up.svg
├── images
│ └── profile.jpg
└── logo.svg

README.md
components.json
tailwind.config.ts

# Style generation guide

- Use components from shadcnUI whenever possible. Don't use radixUI.
- Add custom tailwind css in tailwind.config.ts. Don't create a new tailwind.config.js file.

# Generating codes

- All new components should go in to the '@/components/~'
- Use NextJS latest 'App Router' features and conventions. Don't use 'Page Router' features and conventions.
- Components should focus on one thing, be reusable, and encapsulate their logic.
- Separate UI from business logic by using hooks to handle state and effects.
- Keep API calls and business logic in a services or lib folder. This makes it easier to manage and refactor when APIs change.
