import React, { useState } from "react";

export default function Controls({ onScaleChange, onRadiusChange }: any) {
  const [isScaleChecked, setIsScaleChecked] = useState(false);
  const [isRadiusChecked, setIsRadiusChecked] = useState(false);

  const handleScaleChange = () => {
    setIsScaleChecked(!isScaleChecked);
    onScaleChange(isScaleChecked ? "fun" : "actual");
  };

  const handleRadiusChange = () => {
    setIsRadiusChecked(!isRadiusChecked);
    onRadiusChange(isRadiusChecked ? "fun" : "actual");
  };

  return (
    <div className="z-50 absolute top-0 right-0 bg-orange-600 p-4">
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={isScaleChecked}
          onChange={handleScaleChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Actual Planet Sizes
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={isRadiusChecked}
          onChange={handleRadiusChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Actual Planet Radius
        </label>
      </div>
    </div>
  );
}
