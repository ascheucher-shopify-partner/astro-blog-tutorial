import type { CollectionEntry } from 'astro:content';
import { ui, languages, defaultLang } from './ui';
import type { Post } from '../content/config';

export function otherLanguage(lang: string) {
  const ls = Object.keys(languages);
  return ls.filter((l) => l !== lang)[0];
}
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof lang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// supports only two languages.
// TODO fix types
export function filterPostsForLang(posts: any[], lang: string) {

  type LangPostsDict<Post> = {
    [key: number]: Post
  }

  const langPostsDict: LangPostsDict<Post> = {}
  const otherLangPosts: LangPostsDict<Post> = {}
  posts.forEach((post: Post) => {
    const postLang = (post.id).split("/")[0]
    const postId = post.data.id
    if (postLang === lang) {
      langPostsDict[postId] = post
    } else {
      otherLangPosts[postId] = post
    }
  });

  const keys = Array.from(new Set(posts.map((post) => post.data.id))).sort((a, b) => a - b)
  let langStyledPosts: Post[] = []
  for (const key of keys) {
    if (key in langPostsDict) {
      langStyledPosts.push(langPostsDict[key])
    } else if (key in otherLangPosts) {
      langStyledPosts.push(otherLangPosts[key])
    }
  }
  return langStyledPosts
}

export type PostsByLang<Post> = {
  [id: number]: {
    [lang: string]: Post
  }
}

export function getPostsByLang(posts: Post[]) {
  const postsByLang: PostsByLang<Post> = {}
  posts.forEach((post) => {
    const postId = post.data.id
    if (!(postId in postsByLang)) {
      postsByLang[postId] = {}
    }
    const lang = post.id.split("/")[0]
    postsByLang[postId][lang] = post
  })
  return postsByLang
}