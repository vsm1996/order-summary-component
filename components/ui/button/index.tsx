interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  variation?: "default" | "transparent";
  textColor?: "blue" | "gray" | "white";
  preset?: "text-4-bold" | "text-4-black";
  dropShadow?: boolean;
}

const ButtonVariation = {
  default:
    "bg-(--blue-700) px-[64.5] py-[12.5] rounded-[11] hover:bg-(--purple-500) duration-300",
  transparent: "",
};

const TextVariation = {
  white: "text-(--white)",
  blue: "text-(--blue-700) hover:text-(--purple-500)",
  gray: "text-(--gray-600) hover:text-(--black)",
};

const Button = ({
  label,
  type = "button",
  variation = "default",
  textColor = "white",
  preset = "text-4-black",
  dropShadow = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-nowrap cursor-pointer transition duration-200 ease-in-out ${preset} ${
        TextVariation[textColor]
      } ${ButtonVariation[variation]} ${
        dropShadow &&
        "drop-shadow-(--shadow) hover:drop-shadow-(--shadow-hover)"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
