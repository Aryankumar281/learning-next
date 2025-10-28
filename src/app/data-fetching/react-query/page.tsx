"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsResponse {
  posts: Post[];
  total: number;
}
function ReactQueryExample() {
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery<PostsResponse>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch the posts");
      }
      return response.json();
    },
    staleTime: 2 * 60 * 1000,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div>
      <h1>react query example</h1>
      <div className="flex flex-col gap-2 ">
        {data?.posts.map((post: Post) => (
          <div
            key={post.id}
            className="border w-full text-center"
          >
            <h4>{post.id}</h4>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ReactQueryExample;
