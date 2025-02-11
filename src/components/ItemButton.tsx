type SelectButtonProps = {
  text: string;
};

const ItemButton = ({ text }: SelectButtonProps) => {
  return (
    <div className="border-4 border-red-300 text-center py-4 px-4 text-2xl rounded-2xl">
      {text}
    </div>
  );
};

export default ItemButton;
