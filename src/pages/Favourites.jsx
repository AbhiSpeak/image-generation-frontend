import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader, Card } from "../components";

const Favourites = () => {
  const [postData, setPostData] = useState({});
  const [loading, setloading] = useState(false);

  const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post) => {
        if (post.favourite === "true") {
          return <Card key={post._id} {...post} />;
        } else {
          return "";
        }
      });
    }

    return (
      <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
        {title}
      </h2>
    );
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(`http://localhost:8080/api/v1/post`);
        console.log(data.data);
        setPostData(data.data);
      } catch (err) {
      } finally {
        setloading(false);
      }
    };
    getPost();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center text-3xl">Favourite Images</h1>
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <RenderCards data={postData} title="No posts found" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
