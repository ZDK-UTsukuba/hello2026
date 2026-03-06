import * as env from '../env';
import type { Post } from "./models";

/**
 * esa の認証トークンを付与した fetch
 */
function fetchFromEsa(inputs: RequestInfo | URL) {
  return fetch(inputs, {
    headers: {
      Authorization: `Bearer ${env.esa.token}`,
    },
  });
}

interface PostsResponse {
  posts: Post[];
  total_count: number;
}

/**
 * 記事一覧を取得する関数
 * @returns 記事一覧
 */
export async function fetchPosts(): Promise<PostsResponse> {
  if (env.esa.mock) {
    const { MOCK_POSTS } = await import("./mock-data");
    return { posts: MOCK_POSTS, total_count: MOCK_POSTS.length };
  }

  const urlBase = env.esa.endpoint;
  const category = env.esa.postCategory;

  const url = new URL(`${urlBase}/posts`);
  url.searchParams.append("q", `in:${category}`);

  const response = await fetchFromEsa(url);
  return await response.json();
}

/**
 * 指定 id の記事を取得する関数
 * @param postNumber 取得する記事のid
 * @returns 記事データ
 */
export async function fetchPost(postNumber: number): Promise<Post> {
  if (env.esa.mock) {
    const { MOCK_POSTS } = await import("./mock-data");
    const post = MOCK_POSTS.find((p) => p.number === Number(postNumber));
    if (!post) throw new Error(`Mock post not found: ${postNumber}`);
    return post;
  }

  const urlBase = env.esa.endpoint;

  const url = new URL(`${urlBase}/posts/${postNumber}`);

  const response = await fetchFromEsa(url);
  return response.json();
}
