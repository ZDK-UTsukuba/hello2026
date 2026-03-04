import type { Post } from "./models";

const MOCK_AUTHOR = {
  myself: true,
  name: "Mock User",
  screen_name: "mock_user",
  icon: "https://www.stb.tsukuba.ac.jp/~zdk/wp-content/uploads/2023/02/zdk_logo_1200900-1024x768.png",
};

const IMAGE_URL =
  "https://www.stb.tsukuba.ac.jp/~zdk/wp-content/uploads/2023/02/zdk_logo_1200900-1024x768.png";

export const MOCK_FAQ_NUMBER = 999;

export const MOCK_POSTS: Post[] = [
  {
    number: 1,
    name: "[MOCK] 画像あり記事",
    full_name: "mock/[MOCK] 画像あり記事 #mock",
    wip: false,
    body_md: `## 見出し2

本文テキストです。本文テキストです。本文テキストです。

![モック画像](${IMAGE_URL})

### 見出し3

本文テキストです。本文テキストです。本文テキストです。
`,
    body_html: `<h2>見出し2</h2>
<p>本文テキストです。本文テキストです。本文テキストです。</p>
<p><img src="${IMAGE_URL}" alt="モック画像"></p>
<h3>見出し3</h3>
<p>本文テキストです。本文テキストです。本文テキストです。</p>
`,
    created_at: "2025-01-01T00:00:00+09:00",
    updated_at: "2025-01-01T00:00:00+09:00",
    message: "mock",
    url: "https://example.esa.io/posts/1",
    tags: ["mock"],
    category: "mock",
    revision_number: 1,
    created_by: MOCK_AUTHOR,
    updated_by: MOCK_AUTHOR,
  },
  {
    number: 2,
    name: "[MOCK] 画像なし記事",
    full_name: "mock/[MOCK] 画像なし記事 #mock",
    wip: false,
    body_md: `## 見出し2-1

本文テキストです。本文テキストです。本文テキストです。

## 見出し2-2

本文テキストです。本文テキストです。本文テキストです。

### 見出し3

本文テキストです。本文テキストです。本文テキストです。
`,
    body_html: `<h2>見出し2-1</h2>
<p>本文テキストです。本文テキストです。本文テキストです。</p>
<h2>見出し2-2</h2>
<p>本文テキストです。本文テキストです。本文テキストです。</p>
<h3>見出し3</h3>
<p>本文テキストです。本文テキストです。本文テキストです。</p>
`,
    created_at: "2025-01-02T00:00:00+09:00",
    updated_at: "2025-01-02T00:00:00+09:00",
    message: "mock",
    url: "https://example.esa.io/posts/2",
    tags: ["mock"],
    category: "mock",
    revision_number: 1,
    created_by: MOCK_AUTHOR,
    updated_by: MOCK_AUTHOR,
  },
  {
    number: MOCK_FAQ_NUMBER,
    name: "[MOCK] FAQ記事",
    full_name: "mock/[MOCK] FAQ記事 #mock #faq",
    wip: false,
    body_md: `## モック質問1

モック回答1です。モック回答1です。モック回答1です。

## モック質問2

モック回答2です。モック回答2です。モック回答2です。

## モック質問3

モック回答3です。モック回答3です。モック回答3です。
`,
    body_html: `<h2>モック質問1</h2>
<p>モック回答1です。モック回答1です。モック回答1です。</p>
<h2>モック質問2</h2>
<p>モック回答2です。モック回答2です。モック回答2です。</p>
<h2>モック質問3</h2>
<p>モック回答3です。モック回答3です。モック回答3です。</p>
`,
    created_at: "2025-01-03T00:00:00+09:00",
    updated_at: "2025-01-03T00:00:00+09:00",
    message: "mock",
    url: "https://example.esa.io/posts/999",
    tags: ["mock", "faq"],
    category: "mock",
    revision_number: 1,
    created_by: MOCK_AUTHOR,
    updated_by: MOCK_AUTHOR,
  },
];
