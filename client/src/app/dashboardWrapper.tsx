import React from "react";

const dashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* left side which has a sidebar */}
      {/* sidebar */}
      sidebar
      {/* right side which includes the navbar and the main content */}
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}
      >
        {/* navbar */}
        navbar
        {children}
      </main>
    </div>
  );
};

export default dashboardWrapper;
