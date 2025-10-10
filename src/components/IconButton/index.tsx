interface IconButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const IconButton = ({ icon, children }: IconButtonProps) => {
  return (
    <>
      <button className="flex items-center gap-2 rounded-xl border-2 px-4 py-2 hover:cursor-pointer hover:border-gray-400">
        <span>{icon}</span>
        <span>{children}</span>
      </button>
    </>
  );
};

export default IconButton;
