import React from "react";
import { Link } from "react-router-dom";
import { IBlog } from "../../utils/TypeScript";
import { Card } from "antd";

const { Meta } = Card;
interface IProps {
  blog: IBlog;
}

const CardHorizontal: React.FC<IProps> = ({ blog }) => {
  return (
    <>
      <Link
        to={`/blog/${blog._id}`}
        style={{
          textDecoration: "none",
          textTransform: "capitalize",
        }}
      >
        <Card
          hoverable
          cover={
            typeof blog.thumbnail === "string" && (
              <img
                src={blog.thumbnail}
                className="card-img-top"
                alt="..."
                style={{ height: "180px", objectFit: "cover" }}
              />
            )
          }
        >
          <Meta
            style={{ height: "100px" }}
            title={blog.title.slice(0, 50) + "..."}
            description={blog.description.slice(0, 100) + "..."}
          />

          <p className="card-text d-flex justify-content-between mt-4">
            <small className="text-muted text-capitalize">
              {typeof blog.user !== "string" && (
                <Link
                  to={`/profile/${blog.user._id}`}
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  By: {blog.user.name}
                </Link>
              )}
            </small>

            <small className="text-muted">
              {new Date(blog.createdAt).toLocaleString()}
            </small>
          </p>
        </Card>
      </Link>
    </>
  );
};

export default CardHorizontal;
