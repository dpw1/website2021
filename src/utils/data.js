import axios from "axios";

export const getAllPosts = async () => {
  return new Promise(async (resolve, reject) => {
    const posts = await axios.get(
      `http://ezfydb.test/wp-json/wp/v2/posts?status=any`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lemZ5ZGIudGVzdCIsImlhdCI6MTYwMTU4MjI2OCwibmJmIjoxNjAxNTgyMjY4LCJleHAiOjE2MDIxODcwNjgsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.LzlwZBSRh4wAt-yK-Z1IdUV3jvFORDzZRmKvEI3JMDE",
        },
      },
    );

    if (!posts || posts.length <= 0) {
      reject(posts);
    }
    resolve(posts);
  });
};
