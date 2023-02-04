import React from "react";
import { Link } from "react-router-dom";

const FlatCard = ({ flat }) => {

  return (
    <div>
      <Link to={`flat/${flat._id}`}>
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-96 h-56" src="/assets/1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {flat.name}
              </h5>
            </a>
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-green-500 dark:text-white">
                flat.price
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              flat.address
            </p>
            <div className="flex align-middle space-x-3 mt-3">
              <img
                class="w-10 h-10 rounded-full"
                src="https://thiscatdoesnotexist.com/"
                alt=""
              />
              <span className="mt-2">flat.name</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlatCard;
