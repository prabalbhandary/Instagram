import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SuggestedUsers = () => {
  const { suggestedUsers } = useSelector((store) => store.auth);
  const isFollowing = false;

  const handleFollow = async() => {
    try {
      const res = await axios.post(`https://social-18g1.onrender.com/api/v1/user/${suggestedUsers?._id}/${isFollowing ? "unfollow" : "follow"}`, { withCredentials: true });
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setAuthUser(res.data.user));
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="my-10">
      <div className="flex items-center justify-between text-sm">
        <h1 className="font-semibold text-gray-600">Suggested for you</h1>
        <span className="font-medium cursor-pointer">See All</span>
      </div>
      {suggestedUsers.map((user) => {
        return (
          <div
            key={user._id}
            className="flex items-center justify-between my-5"
          >
            <div className="flex items-center gap-2">
              <Link to={`/profile/${user?._id}`}>
                <Avatar>
                  <AvatarImage src={user?.profilePicture} alt="post_image" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <div>
                <h1 className="font-semibold text-sm">
                  <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
                </h1>
                <span className="text-gray-600 text-sm">
                  {user?.bio || "Bio here..."}
                </span>
              </div>
            </div>
            <span onClick={handleFollow} className="text-[#3BADF8] text-xs font-bold cursor-pointer hover:text-[#3495d6]">
              Follow
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedUsers;
