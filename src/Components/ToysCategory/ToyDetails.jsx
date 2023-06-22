import React, { useEffect, useState } from "react";

const ToyDetails = ({ toy, closeModal }) => {
  const {
    description,
    email,
    name,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerName,
    subCategorym,
  } = toy;

  return (
    <div>
      <div className="bg-white rounded p-4 w-full ">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-40 mx-auto rounded">
              <img src={pictureUrl} />
            </div>

            <h5 class="mb-4 text-xl mt-10 font-medium text-gray-500 dark:text-gray-400">
              {" "}
              {name}
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">49</span>
              <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {" "}
                  Seller: {sellerName}
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {" "}
                  Seller Email: {email}
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Price: ${price}
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500">
                  Rating: {rating}
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500">
                  Available: {quantity}
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500">
                  {description}
                </span>
              </li>
              <li class="flex space-x-3 line-through decoration-gray-500">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500">
                  24×7 phone & email support
                </span>
              </li>
            </ul>
            <button
              onClick={closeModal}
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Close
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ToyDetails;
