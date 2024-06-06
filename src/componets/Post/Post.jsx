import React  from "react";
import { Link } from "react-router-dom";
import "./Post.scss";

const Post = ({posts}) => {
  const post = posts.map((post) => {
    if (!post.userId) return null;

        return (
          <div className="card" key={post._id}>
            <Link to={"/post/" + post._id}>
              <div className="card-image">
                {post.image && (
                  <img
                    className="img"
                    src={"http://localhost:8080/public/posts/" + post.image}
                    alt="Post"
                  />
                )}
              </div>
              <p className="card-body">{post.text}</p>
              <p className="footer">
                Written by <span className="by-name">{post.userId.name}</span> on{" "}
                <span className="date">{post.createdAt.slice(0, 10)}</span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
