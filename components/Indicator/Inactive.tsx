type InactiveProps = {
  children: React.ReactNode;
};

const Inactive = ({ children }: InactiveProps) => {
  return (
    <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
      <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
      {children}
    </span>
  );
};

export default Inactive;
