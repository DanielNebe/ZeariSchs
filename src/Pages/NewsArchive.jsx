import React from "react";
import './Page.css'

const NewsArchive = () => {
  const blogPosts = [
    { id: 1, title: "First Blog Post", date: "2024-01-01" },
    { id: 2, title: "Second Blog Post", date: "2024-01-02" },
    { id: 3, title: "Third Blog Post", date: "2024-01-03" }
  ];

  return (
    <div className="BlogPosts">
      {blogPosts.map((blog) => (
        <div className="BlogPost" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Date: {blog.date}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsArchive;
